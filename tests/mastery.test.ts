import { describe, expect, it } from 'vitest';
import type { CourseCatalog } from '../src/progress/course.ts';
import { masteryFromProgress, withDoneNodes } from '../src/progress/dashboard.ts';
import type { Attempt, Progress } from '../src/progress/progress.ts';
import { migrateLegacyMarks } from '../src/progress/sectionMarks.ts';

const COURSE: CourseCatalog = {
  lectures: [
    {
      number: 1,
      title: 'One',
      nodes: [
        {
          id: 'core',
          title: 'Core',
          sectionIds: ['learn-1', 'learn-2', 'practise'],
          exercises: [
            { id: 'core.b1', tier: 'basic' },
            { id: 'core.b2', tier: 'basic' },
            { id: 'core.x', tier: 'standard' },
            { id: 'core.e', tier: 'exam' },
          ],
        },
        { id: 'reading', title: 'Reading', sectionIds: ['learn-1'], exercises: [{ id: 'reading.x', tier: 'standard' }] },
        { id: 'empty', title: 'Empty', exercises: [] },
      ],
    },
  ],
};

let counter = 0;
function attempt(exerciseId: string, tier: Attempt['tier'], right: boolean, at: string): Attempt {
  counter += 1;
  return right
    ? { id: `a${counter}`, at, exerciseId, tier, result: 'right' }
    : { id: `a${counter}`, at, exerciseId, tier, result: 'wrong', mistakeType: 'misread-question' };
}

function stateOf(progress: Partial<Progress>, nodeId: string) {
  const report = masteryFromProgress({ attempts: [], reviews: [], ...progress }, COURSE);
  return report.nodes.find((node) => node.nodeId === nodeId)?.mastery;
}

const ALL_SECTIONS = { core: ['learn-1', 'learn-2', 'practise'] };
const BOTH_RIGHT = [
  attempt('core.b1', 'basic', true, '2026-03-01T10:00:00.000Z'),
  attempt('core.b2', 'basic', true, '2026-03-01T10:01:00.000Z'),
];

describe('mastery rule', () => {
  it('is not started with no section marked and no attempt', () => {
    expect(stateOf({}, 'core')).toBe('not-started');
  });

  it('is in progress after one section is marked or one attempt of any tier is saved', () => {
    expect(stateOf({ sectionsDone: { core: ['learn-1'] } }, 'core')).toBe('in-progress');
    expect(stateOf({ attempts: [attempt('core.e', 'exam', false, '2026-03-01T10:00:00.000Z')] }, 'core')).toBe('in-progress');
    expect(stateOf({ attempts: [attempt('core.b1', 'basic', true, '2026-03-01T10:00:00.000Z')] }, 'core')).toBe('in-progress');
  });

  it('is done only with every section marked and every Core exercise right', () => {
    expect(stateOf({ sectionsDone: ALL_SECTIONS, attempts: BOTH_RIGHT }, 'core')).toBe('done');
    expect(stateOf({ sectionsDone: { core: ['learn-1', 'learn-2'] }, attempts: BOTH_RIGHT }, 'core')).toBe('in-progress');
    expect(stateOf({ sectionsDone: ALL_SECTIONS, attempts: [BOTH_RIGHT[0]] }, 'core')).toBe('in-progress');
  });

  it('uses the latest attempt on each Core exercise', () => {
    const missed = attempt('core.b2', 'basic', false, '2026-03-02T10:00:00.000Z');
    expect(stateOf({ sectionsDone: ALL_SECTIONS, attempts: [...BOTH_RIGHT, missed] }, 'core')).toBe('in-progress');
    const fixed = attempt('core.b2', 'basic', true, '2026-03-03T10:00:00.000Z');
    expect(stateOf({ sectionsDone: ALL_SECTIONS, attempts: [...BOTH_RIGHT, missed, fixed] }, 'core')).toBe('done');
  });

  it('does not let Extra or Exam level exercises hold a node back', () => {
    const misses = [
      attempt('core.x', 'standard', false, '2026-03-04T10:00:00.000Z'),
      attempt('core.e', 'exam', false, '2026-03-04T10:00:00.000Z'),
    ];
    expect(stateOf({ sectionsDone: ALL_SECTIONS, attempts: [...BOTH_RIGHT, ...misses] }, 'core')).toBe('done');
  });

  it('needs only the sections when the node has no Core exercises', () => {
    expect(stateOf({ sectionsDone: { reading: ['learn-1'] } }, 'reading')).toBe('done');
    expect(stateOf({}, 'reading')).toBe('not-started');
  });

  it('never calls a node without sections or Core exercises done', () => {
    expect(stateOf({}, 'empty')).toBe('not-started');
  });

  it('ignores marks on sections the node no longer has', () => {
    expect(stateOf({ sectionsDone: { core: ['learn-1', 'old-section'] }, attempts: BOTH_RIGHT }, 'core')).toBe('in-progress');
  });

  it('stays done once recorded, even after a later miss', () => {
    const progress: Progress = {
      attempts: [...BOTH_RIGHT, attempt('core.b1', 'basic', false, '2026-03-05T10:00:00.000Z')],
      reviews: [],
      sectionsDone: ALL_SECTIONS,
    };
    expect(stateOf(progress, 'core')).toBe('in-progress');
    expect(stateOf({ ...progress, doneNodes: ['core'] }, 'core')).toBe('done');
  });

  it('records a newly done node and leaves the rest alone', () => {
    const progress: Progress = { attempts: BOTH_RIGHT, reviews: [], sectionsDone: { ...ALL_SECTIONS, reading: ['learn-1'] } };
    expect(withDoneNodes(progress, COURSE).doneNodes).toEqual(['core', 'reading']);
    const unchanged: Progress = { attempts: [], reviews: [] };
    expect(withDoneNodes(unchanged, COURSE)).toBe(unchanged);
  });
});

function fakeStorage(entries: Record<string, string>) {
  const data = new Map(Object.entries(entries));
  return {
    data,
    get length() {
      return data.size;
    },
    key: (index: number) => [...data.keys()][index] ?? null,
    getItem: (key: string) => data.get(key) ?? null,
    removeItem: (key: string) => void data.delete(key),
  };
}

describe('moving section marks out of localStorage', () => {
  it('saves each node once, then removes its key and leaves other keys', async () => {
    const storage = fakeStorage({
      'node-sections-done:l1-limits': JSON.stringify(['learn-1', 'practise']),
      'node-sections-done:l2-sets': JSON.stringify(['learn-1']),
      theme: 'dark',
    });
    const saved: [string, string[]][] = [];
    const moved = await migrateLegacyMarks(storage, async (nodeId, ids) => {
      saved.push([nodeId, ids]);
      return { ok: true };
    });
    expect(moved).toBe(2);
    expect(saved).toEqual([
      ['l1-limits', ['learn-1', 'practise']],
      ['l2-sets', ['learn-1']],
    ]);
    expect([...storage.data.keys()]).toEqual(['theme']);

    saved.length = 0;
    expect(await migrateLegacyMarks(storage, async () => ({ ok: true }))).toBe(0);
    expect(saved).toEqual([]);
  });

  it('keeps a key whose save failed, so the next start tries again', async () => {
    const storage = fakeStorage({ 'node-sections-done:l1-limits': JSON.stringify(['learn-1']) });
    expect(await migrateLegacyMarks(storage, async () => ({ ok: false }))).toBe(0);
    expect(storage.data.size).toBe(1);
  });

  it('drops keys with nothing usable without saving them', async () => {
    const storage = fakeStorage({
      'node-sections-done:a': '[]',
      'node-sections-done:b': 'not json',
      'node-sections-done:c': JSON.stringify(['Bad Id', 7]),
    });
    let calls = 0;
    expect(
      await migrateLegacyMarks(storage, async () => {
        calls += 1;
        return { ok: true };
      }),
    ).toBe(0);
    expect(calls).toBe(0);
    expect(storage.data.size).toBe(0);
  });
});
