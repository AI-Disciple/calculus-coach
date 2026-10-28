import { describe, expect, it } from 'vitest';
import type { CourseCatalog } from '../src/progress/course.ts';
import type { MasteryReport } from '../src/progress/dashboard.ts';
import type { Attempt, PaperResult, Progress } from '../src/progress/progress.ts';
import { winsFromProgress } from '../src/progress/wins.ts';

const COURSE: CourseCatalog = {
  lectures: [
    {
      number: 1,
      title: 'L1',
      nodes: [
        {
          id: 'n1',
          title: 'N1',
          exercises: [
            { id: 'n1.b1', tier: 'basic' },
            { id: 'n1.b2', tier: 'basic' },
            { id: 'n1.s1', tier: 'standard' },
          ],
        },
        { id: 'hid', title: 'Hidden', hidden: true, exercises: [{ id: 'hid.b', tier: 'basic' }] },
      ],
    },
    {
      number: 2,
      title: 'L2',
      nodes: [{ id: 'n2', title: 'N2', exercises: [{ id: 'n2.e1', tier: 'exam' }] }],
    },
  ],
};

const MASTERY: MasteryReport = {
  nodes: [
    { nodeId: 'n1', lecture: 1, mastery: 'done' },
    { nodeId: 'hid', lecture: 1, mastery: 'done' },
    { nodeId: 'n2', lecture: 2, mastery: 'in-progress' },
  ],
};

const PAPERS = [
  { id: 'mock-a', kind: 'mock' as const },
  { id: 'check', kind: 'checkpoint' as const },
  { id: 'mock-b', kind: 'mock' as const },
  { id: 'mock-c', kind: 'mock' as const },
];

function attempt(exerciseId: string, result: 'right' | 'wrong', minute: number, id = `${exerciseId}-${minute}`): Attempt {
  const at = `2026-03-01T10:${String(minute).padStart(2, '0')}:00.000Z`;
  return result === 'right'
    ? { id, at, exerciseId, tier: 'basic', result }
    : { id, at, exerciseId, tier: 'basic', result, mistakeType: 'misread-question' };
}

function paper(id: string, paperId: string, earned: number, minute: number): PaperResult {
  return { id, paperId, earned, total: 20, at: `2026-03-02T10:${String(minute).padStart(2, '0')}:00.000Z` };
}

describe('winsFromProgress', () => {
  it('has nothing to show with no progress', () => {
    const wins = winsFromProgress({ attempts: [], reviews: [] }, COURSE, { nodes: [] }, PAPERS);
    expect(wins.doneNodes).toEqual([]);
    expect(wins.totalNodes).toBe(2);
    expect(wins.byTier).toEqual({
      basic: { right: 0, total: 2 },
      standard: { right: 0, total: 1 },
      exam: { right: 0, total: 1 },
    });
    expect(wins.mockBests).toEqual([]);
  });

  it('lists done nodes in course order', () => {
    const wins = winsFromProgress({ attempts: [], reviews: [] }, COURSE, MASTERY, PAPERS);
    expect(wins.doneNodes).toEqual([{ nodeId: 'n1', lecture: 1 }]);
  });

  it('counts exercises whose latest attempt succeeded, a tie going to the later entry', () => {
    const progress: Progress = {
      attempts: [
        attempt('n1.b1', 'wrong', 1),
        attempt('n1.b1', 'right', 2),
        attempt('n1.b2', 'right', 1),
        attempt('n1.b2', 'wrong', 2),
        attempt('n1.s1', 'wrong', 5, 'tie-a'),
        attempt('n1.s1', 'right', 5, 'tie-b'),
        attempt('hid.b', 'right', 1),
        attempt('gone.x', 'right', 1),
      ],
      reviews: [],
    };
    const wins = winsFromProgress(progress, COURSE, MASTERY, PAPERS);
    expect(wins.byTier.basic).toEqual({ right: 1, total: 2 });
    expect(wins.byTier.standard).toEqual({ right: 1, total: 1 });
    expect(wins.byTier.exam).toEqual({ right: 0, total: 1 });
  });

  it('keeps the best share per mock paper in papers order and skips checkpoints', () => {
    const progress: Progress = {
      attempts: [],
      reviews: [],
      paperResults: [
        paper('r1', 'mock-b', 10, 1),
        paper('r2', 'mock-a', 8, 2),
        paper('r3', 'mock-a', 12, 3),
        paper('r4', 'mock-a', 6, 4),
        paper('r5', 'check', 20, 5),
        paper('r6', 'mock-b', 10, 6),
      ],
    };
    const wins = winsFromProgress(progress, COURSE, MASTERY, PAPERS);
    expect(wins.mockBests).toEqual([
      { paperId: 'mock-a', earned: 12, total: 20 },
      { paperId: 'mock-b', earned: 10, total: 20 },
    ]);
  });
});
