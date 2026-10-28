import { afterAll, describe, expect, it } from 'vitest';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import http from 'node:http';
import type { AddressInfo } from 'node:net';
import os from 'node:os';
import path from 'node:path';
import { createApi } from '../server/api.ts';
import { conceptQuestionId } from '../src/content/questionId.ts';
import type { CourseCatalog } from '../src/progress/course.ts';
import {
  marksByStep,
  parseDayList,
  parseIntervalFile,
  reviewsInCourse,
  type IntervalConfig,
} from '../src/progress/progress.ts';

const START = '2026-03-01T10:00:00.000Z';
const INTERVALS: IntervalConfig = { intervalsDays: [2, 5, 11], postponeDays: 4 };

const tempDirs: string[] = [];
const servers: http.Server[] = [];
afterAll(() => {
  servers.forEach((server) => server.close());
  tempDirs.forEach((dir) => rmSync(dir, { recursive: true, force: true }));
});

function tempDir(): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), 'progress-'));
  tempDirs.push(dir);
  return dir;
}

async function boot(options?: {
  intervals?: IntervalConfig;
  beforeProgressReplace?: () => void;
  course?: CourseCatalog;
}) {
  const dir = tempDir();
  const progressFile = path.join(dir, 'progress.json');
  let now = new Date(START);
  const server = http.createServer(
    createApi({
      sourcesConfig: path.join(dir, 'sources.local.json'),
      progressFile,
      course: options?.course,
      now: () => now,
      intervals: options?.intervals ?? INTERVALS,
      beforeProgressReplace: options?.beforeProgressReplace,
    }),
  );
  servers.push(server);
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  return {
    base,
    progressFile,
    setNow(iso: string) {
      now = new Date(iso);
    },
  };
}

async function post(base: string, pathname: string, body?: unknown) {
  const response = await fetch(`${base}${pathname}`, {
    method: 'POST',
    headers: body === undefined ? undefined : { 'content-type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  return { status: response.status, body: await response.json() };
}

async function get(base: string, pathname: string) {
  const response = await fetch(`${base}${pathname}`);
  return { status: response.status, body: await response.json() };
}

/** A small course so dashboard and mastery tests do not depend on the real content files. */
const COURSE: CourseCatalog = {
  lectures: [
    {
      number: 1,
      title: 'Review',
      nodes: [
        {
          id: 'limits',
          title: 'Limits',
          exercises: [
            { id: 'limits.std', tier: 'standard' },
            { id: 'limits.exam', tier: 'exam' },
            { id: 'limits.basic', tier: 'basic' },
          ],
          sectionIds: ['learn-1', 'practise'],
        },
        {
          id: 'deriv',
          title: 'The derivative',
          exercises: [{ id: 'deriv.std', tier: 'standard' }],
          sectionIds: ['learn-1'],
        },
      ],
    },
    {
      number: 2,
      title: 'Sketching',
      nodes: [
        {
          id: 'sketch',
          title: 'Sketching',
          exercises: [{ id: 'sketch.std', tier: 'standard' }],
        },
        {
          id: 'sample',
          title: 'Sample',
          hidden: true,
          exercises: [{ id: 'sample.std', tier: 'standard' }],
        },
      ],
    },
  ],
};

const missedSteps = {
  exerciseId: 'l6-hessian-test-sample.basic-bowl',
  tier: 'basic',
  steps: [
    { result: 'wrong', mistakeType: 'sign-or-arithmetic-slip', note: 'Dropped a minus.' },
    { result: 'right' },
    { result: 'skipped' },
  ],
};

describe('progress file', () => {
  it('starts empty and creates no file', async () => {
    const { base, progressFile } = await boot();
    expect(existsSync(progressFile)).toBe(false);
    expect((await get(base, '/api/progress')).body).toEqual({ attempts: [], reviews: [] });
    expect((await get(base, '/api/review')).body).toEqual({ due: [] });
    expect(existsSync(progressFile)).toBe(false);
  });

  it('records a step attempt with its mistake type and note', async () => {
    const { base, progressFile } = await boot();
    const saved = await post(base, '/api/attempts', missedSteps);
    expect(saved.status).toBe(200);
    expect(saved.body.attempt).toMatchObject({
      at: START,
      exerciseId: 'l6-hessian-test-sample.basic-bowl',
      tier: 'basic',
      steps: [
        { result: 'wrong', mistakeType: 'sign-or-arithmetic-slip', note: 'Dropped a minus.' },
        { result: 'right' },
        { result: 'skipped' },
      ],
    });
    expect(saved.body.review).toMatchObject({
      id: 'l6-hessian-test-sample.basic-bowl',
      kind: 'exercise',
      dueAt: '2026-03-03T10:00:00.000Z',
    });

    const history = await get(base, '/api/attempts?exerciseId=l6-hessian-test-sample.basic-bowl');
    expect(history.body.attempts).toEqual([saved.body.attempt]);
    expect(JSON.parse(readFileSync(progressFile, 'utf8')).attempts).toEqual([saved.body.attempt]);
  });

  it('refuses a wrong step with no mistake type and leaves the file uncreated', async () => {
    const { base, progressFile } = await boot();
    const saved = await post(base, '/api/attempts', {
      exerciseId: 'l6-hessian-test-sample.basic-bowl',
      tier: 'basic',
      steps: [{ result: 'wrong' }],
    });
    expect(saved.status).toBe(400);
    expect(existsSync(progressFile)).toBe(false);
  });

  it('refuses a mistake type on a right step', async () => {
    const { base, progressFile } = await boot();
    const saved = await post(base, '/api/attempts', {
      exerciseId: 'node.exercise',
      tier: 'basic',
      steps: [{ result: 'right', mistakeType: 'misread-question' }],
    });
    expect(saved.status).toBe(400);
    expect(existsSync(progressFile)).toBe(false);
  });

  it('records a short drill as one result', async () => {
    const { base } = await boot();
    const saved = await post(base, '/api/attempts', {
      exerciseId: 'l1-derivative.derivative-of-square',
      tier: 'basic',
      result: 'partly-right',
      mistakeType: 'wrong-formula-or-rule',
      note: '  Used the product rule.  ',
    });
    expect(saved.status).toBe(200);
    expect(saved.body.attempt).toMatchObject({
      exerciseId: 'l1-derivative.derivative-of-square',
      tier: 'basic',
      result: 'partly-right',
      mistakeType: 'wrong-formula-or-rule',
      note: 'Used the product rule.',
    });
    expect(saved.body.review.dueAt).toBe('2026-03-03T10:00:00.000Z');
  });

  it('keeps a fully right exercise out of the review queue', async () => {
    const { base } = await boot();
    const saved = await post(base, '/api/attempts', {
      exerciseId: 'l1-derivative.derivative-of-square',
      tier: 'basic',
      result: 'right',
    });
    expect(saved.body.review).toBeNull();
    expect((await get(base, '/api/review')).body).toEqual({ due: [] });
  });

  it('lists attempts in the order they were saved', async () => {
    const { base } = await boot();
    const first = await post(base, '/api/attempts', missedSteps);
    const second = await post(base, '/api/attempts', {
      exerciseId: 'l6-hessian-test-sample.basic-bowl',
      tier: 'basic',
      steps: [{ result: 'right' }],
    });
    const history = await get(base, '/api/attempts?exerciseId=l6-hessian-test-sample.basic-bowl');
    expect(history.body.attempts.map((attempt: { id: string }) => attempt.id)).toEqual([
      first.body.attempt.id,
      second.body.attempt.id,
    ]);
  });
});

describe('review queue', () => {
  it('makes a missed exercise due after the first configured interval and not before', async () => {
    const { base, setNow } = await boot();
    await post(base, '/api/attempts', missedSteps);
    expect((await get(base, '/api/review')).body).toEqual({ due: [] });
    setNow('2026-03-03T09:59:59.999Z');
    expect((await get(base, '/api/review')).body).toEqual({ due: [] });
    setNow('2026-03-03T10:00:00.000Z');
    expect((await get(base, '/api/review')).body.due).toMatchObject([
      { id: 'l6-hessian-test-sample.basic-bowl', kind: 'exercise', dueAt: '2026-03-03T10:00:00.000Z' },
    ]);
  });

  it('moves a success on to the next interval', async () => {
    const { base, setNow } = await boot();
    await post(base, '/api/attempts', missedSteps);
    setNow('2026-03-03T10:00:00.000Z');
    const saved = await post(base, '/api/attempts', {
      exerciseId: 'l6-hessian-test-sample.basic-bowl',
      tier: 'basic',
      steps: [{ result: 'right' }, { result: 'right' }],
    });
    expect(saved.body.review.dueAt).toBe('2026-03-08T10:00:00.000Z');
    expect((await get(base, '/api/review')).body).toEqual({ due: [] });
  });

  it('resets the interval when a queued exercise is missed again', async () => {
    const { base, setNow } = await boot();
    await post(base, '/api/attempts', missedSteps);
    setNow('2026-03-03T10:00:00.000Z');
    await post(base, '/api/attempts', {
      exerciseId: 'l6-hessian-test-sample.basic-bowl',
      tier: 'basic',
      steps: [{ result: 'right' }],
    });
    setNow('2026-03-08T10:00:00.000Z');
    const saved = await post(base, '/api/attempts', missedSteps);
    expect(saved.body.review.dueAt).toBe('2026-03-10T10:00:00.000Z');
  });

  it('stays on the last interval after another success', async () => {
    const { base, setNow } = await boot();
    await post(base, '/api/attempts', missedSteps);
    setNow('2026-03-03T10:00:00.000Z');
    await post(base, '/api/attempts', {
      exerciseId: 'l6-hessian-test-sample.basic-bowl',
      tier: 'basic',
      steps: [{ result: 'right' }],
    });
    setNow('2026-03-08T10:00:00.000Z');
    await post(base, '/api/attempts', {
      exerciseId: 'l6-hessian-test-sample.basic-bowl',
      tier: 'basic',
      steps: [{ result: 'right' }],
    });
    setNow('2026-03-19T10:00:00.000Z');
    const saved = await post(base, '/api/attempts', {
      exerciseId: 'l6-hessian-test-sample.basic-bowl',
      tier: 'basic',
      steps: [{ result: 'right' }],
    });
    expect(saved.body.review.dueAt).toBe('2026-03-30T10:00:00.000Z');
  });

  it('postpones a due item by the configured length without growing the interval', async () => {
    const { base, setNow } = await boot();
    await post(base, '/api/attempts', missedSteps);
    setNow('2026-03-03T10:00:00.000Z');
    const postponed = await post(base, '/api/reviews/l6-hessian-test-sample.basic-bowl/postpone');
    expect(postponed.status).toBe(200);
    expect(postponed.body.review.dueAt).toBe('2026-03-07T10:00:00.000Z');
    expect((await get(base, '/api/review')).body).toEqual({ due: [] });

    setNow('2026-03-07T10:00:00.000Z');
    const saved = await post(base, '/api/attempts', {
      exerciseId: 'l6-hessian-test-sample.basic-bowl',
      tier: 'basic',
      steps: [{ result: 'right' }],
    });
    expect(saved.body.review.dueAt).toBe('2026-03-12T10:00:00.000Z');
  });

  it('returns no review item when nothing was queued', async () => {
    const { base } = await boot();
    const postponed = await post(base, '/api/reviews/l6-hessian-test-sample.basic-bowl/postpone');
    expect(postponed.status).toBe(404);
  });

  it('makes a miss due immediately when the first interval is zero', async () => {
    const { base } = await boot({ intervals: { intervalsDays: [0, 9], postponeDays: 1 } });
    const saved = await post(base, '/api/attempts', missedSteps);
    expect(saved.body.review.dueAt).toBe(START);
    expect((await get(base, '/api/review')).body.due).toHaveLength(1);
  });

  it('orders due items by the time they are due', async () => {
    const { base, setNow } = await boot();
    await post(base, '/api/questions/node.q-0001/pick', { right: false });
    setNow('2026-03-02T10:00:00.000Z');
    await post(base, '/api/attempts', {
      exerciseId: 'node.exercise-b',
      tier: 'exam',
      steps: [{ result: 'skipped' }],
    });
    setNow('2026-03-03T09:59:59.999Z');
    expect((await get(base, '/api/review')).body).toEqual({ due: [] });
    setNow('2026-03-04T10:00:00.000Z');
    expect((await get(base, '/api/review')).body.due.map((item: { id: string }) => item.id)).toEqual([
      'node.q-0001',
      'node.exercise-b',
    ]);
  });
});

describe('keeping and moving progress', () => {
  it('leaves the previous file in place when a write stops before the replace', async () => {
    let stop = false;
    const { base, progressFile } = await boot({
      beforeProgressReplace() {
        if (stop) throw new Error('stopped');
      },
    });
    const saved = await post(base, '/api/attempts', missedSteps);
    expect(saved.status).toBe(200);
    stop = true;
    const failed = await post(base, '/api/attempts', {
      exerciseId: 'node.exercise-b',
      tier: 'basic',
      result: 'wrong',
      mistakeType: 'did-not-know-how-to-start',
    });
    expect(failed.status).toBe(500);
    const onDisk = JSON.parse(readFileSync(progressFile, 'utf8'));
    expect(onDisk.attempts).toEqual([saved.body.attempt]);
    expect((await get(base, '/api/progress')).body).toEqual(onDisk);
  });

  it('imports a progress file and exports it back', async () => {
    const { base } = await boot();
    await post(base, '/api/attempts', missedSteps);
    const imported = {
      attempts: [
        {
          id: 'attempt-1',
          at: '2026-02-01T08:00:00.000Z',
          exerciseId: 'old.exercise',
          tier: 'exam',
          steps: [{ result: 'wrong', mistakeType: 'misread-question' }],
        },
      ],
      reviews: [
        {
          id: 'old.exercise',
          kind: 'exercise',
          intervalIndex: 2,
          dueAt: '2026-02-20T08:00:00.000Z',
        },
      ],
    };
    const result = await post(base, '/api/progress', imported);
    expect(result.status).toBe(200);
    expect((await get(base, '/api/progress')).body).toEqual(imported);
  });

  it('leaves the current progress in place when the import is not valid', async () => {
    const { base } = await boot();
    const saved = await post(base, '/api/attempts', missedSteps);
    const result = await post(base, '/api/progress', { attempts: [] });
    expect(result.status).toBe(400);
    expect((await get(base, '/api/progress')).body.attempts).toEqual([saved.body.attempt]);
  });

  it('does not replace a progress file that cannot be read', async () => {
    const { base, progressFile } = await boot();
    writeFileSync(progressFile, '{');
    expect((await get(base, '/api/progress')).status).toBe(500);
    const saved = await post(base, '/api/attempts', missedSteps);
    expect(saved.status).toBe(500);
    expect(readFileSync(progressFile, 'utf8')).toBe('{');
  });

  it('imports a progress file that contains a sheet draft', async () => {
    const { base } = await boot();
    const imported = {
      attempts: [],
      reviews: [],
      sheet: {
        excluded: ['l2-integral.trap'],
        order: ['l2-integral.formula'],
        edits: { 'l2-integral.formula': 'Line integral form.' },
      },
    };
    const result = await post(base, '/api/progress', imported);
    expect(result.status).toBe(200);
    expect((await get(base, '/api/progress')).body).toEqual(imported);
    expect((await get(base, '/api/sheet')).body).toEqual(imported.sheet);
  });

  it('imports progress without a sheet as attempts and reviews only', async () => {
    const { base } = await boot();
    await post(base, '/api/attempts', missedSteps);
    const imported = {
      attempts: [
        {
          id: 'attempt-import',
          at: '2026-02-01T08:00:00.000Z',
          exerciseId: 'old.exercise',
          tier: 'standard',
          result: 'wrong',
          mistakeType: 'setup-or-bounds-wrong',
        },
      ],
      reviews: [
        {
          id: 'old.exercise',
          kind: 'exercise',
          intervalIndex: 0,
          dueAt: '2026-02-02T08:00:00.000Z',
        },
      ],
    };
    const result = await post(base, '/api/progress', imported);
    expect(result.status).toBe(200);
    expect((await get(base, '/api/progress')).body).toEqual(imported);
  });

  it('keeps progress for an identifier after a later attempt is saved', async () => {
    const { base } = await boot();
    const imported = {
      attempts: [
        {
          id: 'attempt-1',
          at: '2026-02-01T08:00:00.000Z',
          exerciseId: 'retired.exercise',
          tier: 'standard',
          result: 'wrong',
          mistakeType: 'setup-or-bounds-wrong',
        },
      ],
      reviews: [
        {
          id: 'retired.exercise',
          kind: 'exercise',
          intervalIndex: 1,
          dueAt: '2026-04-01T08:00:00.000Z',
        },
      ],
    };
    await post(base, '/api/progress', imported);
    await post(base, '/api/attempts', missedSteps);
    const progress = (await get(base, '/api/progress')).body;
    expect(progress.attempts.map((attempt: { exerciseId: string }) => attempt.exerciseId)).toEqual([
      'retired.exercise',
      'l6-hessian-test-sample.basic-bowl',
    ]);
    expect(progress.reviews.map((item: { id: string }) => item.id).sort()).toEqual([
      'l6-hessian-test-sample.basic-bowl',
      'retired.exercise',
    ]);
  });
});

describe('formula sheet draft', () => {
  it('returns an empty draft before any save and creates no file', async () => {
    const { base, progressFile } = await boot();
    expect(existsSync(progressFile)).toBe(false);
    expect((await get(base, '/api/sheet')).body).toEqual({ excluded: [], order: [], edits: {} });
    expect(existsSync(progressFile)).toBe(false);
  });

  it('saves a sheet draft and reads it back from the API and the progress file', async () => {
    const { base, progressFile } = await boot();
    const draft = {
      excluded: ['l1-derivative.chain-rule'],
      order: ['l1-derivative.product-rule', 'l1-derivative.chain-rule'],
      edits: { 'l1-derivative.product-rule': '  (uv)\' = u\'v + uv\'  ' },
    };
    const saved = await post(base, '/api/sheet', draft);
    expect(saved.status).toBe(200);
    expect(saved.body).toEqual({
      excluded: ['l1-derivative.chain-rule'],
      order: ['l1-derivative.product-rule', 'l1-derivative.chain-rule'],
      edits: { 'l1-derivative.product-rule': "(uv)' = u'v + uv'" },
    });
    expect((await get(base, '/api/sheet')).body).toEqual(saved.body);
    const onDisk = JSON.parse(readFileSync(progressFile, 'utf8'));
    expect(onDisk.sheet).toEqual(saved.body);
    expect(onDisk.attempts).toEqual([]);
    expect(onDisk.reviews).toEqual([]);
  });

  it('keeps a sheet draft when a later attempt is saved', async () => {
    const { base, progressFile } = await boot();
    const draft = { excluded: [], order: ['node.sheet-item'], edits: { 'node.sheet-item': 'Reminder text.' } };
    await post(base, '/api/sheet', draft);
    await post(base, '/api/attempts', missedSteps);
    expect((await get(base, '/api/sheet')).body).toEqual(draft);
    expect(JSON.parse(readFileSync(progressFile, 'utf8')).sheet).toEqual(draft);
  });

  it('refuses a sheet body with a bad identifier and creates no file', async () => {
    const { base, progressFile } = await boot();
    const saved = await post(base, '/api/sheet', { excluded: ['Not Valid'], order: [], edits: {} });
    expect(saved.status).toBe(400);
    expect(existsSync(progressFile)).toBe(false);
  });
});

describe('mock paper results', () => {
  it('records attempts, a paper result, review scheduling and an existing sheet draft', async () => {
    const { base, progressFile, setNow } = await boot();
    const sheet = { excluded: [], order: ['node.formula'], edits: { 'node.formula': 'Saved before the mock.' } };
    await post(base, '/api/sheet', sheet);

    const body = {
      earned: 7.5,
      total: 20,
      attempts: [
        {
          exerciseId: 'stand-in-final.level-curve',
          tier: 'exam',
          result: 'wrong',
          mistakeType: 'wrong-formula-or-rule',
        },
        {
          exerciseId: 'stand-in-final.along-path',
          tier: 'exam',
          result: 'right',
        },
      ],
    };
    const saved = await post(base, '/api/papers/stand-in-final/result', body);
    expect(saved.status).toBe(200);
    expect(saved.body.paperResult).toMatchObject({
      at: START,
      paperId: 'stand-in-final',
      earned: 7.5,
      total: 20,
    });
    expect(saved.body.attempts).toHaveLength(2);
    expect(saved.body.attempts[0]).toMatchObject({
      at: START,
      exerciseId: 'stand-in-final.level-curve',
      tier: 'exam',
      result: 'wrong',
      mistakeType: 'wrong-formula-or-rule',
    });
    expect(saved.body.attempts[1]).toMatchObject({
      at: START,
      exerciseId: 'stand-in-final.along-path',
      tier: 'exam',
      result: 'right',
    });
    expect(saved.body.reviews).toHaveLength(2);
    expect(saved.body.reviews[0]).toMatchObject({
      id: 'stand-in-final.level-curve',
      kind: 'exercise',
      dueAt: '2026-03-03T10:00:00.000Z',
    });
    expect(saved.body.reviews[1]).toBeNull();

    setNow('2026-03-03T10:00:00.000Z');
    expect((await get(base, '/api/review')).body.due.map((item: { id: string }) => item.id)).toEqual([
      'stand-in-final.level-curve',
    ]);

    const onDisk = JSON.parse(readFileSync(progressFile, 'utf8'));
    expect(onDisk.sheet).toEqual(sheet);
    expect(onDisk.paperResults).toEqual([saved.body.paperResult]);
    expect(onDisk.attempts).toEqual(saved.body.attempts);
  });
});

describe('paper blocks', () => {
  const attempts = [{ exerciseId: 'stand-in-final.along-path', tier: 'exam', result: 'right' }];
  const blocks = [
    { blockId: 'chain-rule', title: 'Chain rule along a path', earned: 0.5, total: 1 },
    { blockId: 'critical-points', title: 'Critical points', earned: 4, total: 4 },
  ];

  it('stores the block scores on a saved paper result', async () => {
    const { base, progressFile } = await boot();
    const saved = await post(base, '/api/papers/stand-in-final/result', { earned: 4.5, total: 5, attempts, blocks });
    expect(saved.status).toBe(200);
    expect(saved.body.paperResult.blocks).toEqual(blocks);
    expect(JSON.parse(readFileSync(progressFile, 'utf8')).paperResults[0].blocks).toEqual(blocks);
  });

  it('leaves blocks out when none are supplied', async () => {
    const { base } = await boot();
    const saved = await post(base, '/api/papers/stand-in-final/result', { earned: 1, total: 2, attempts });
    expect(saved.body.paperResult).not.toHaveProperty('blocks');
  });

  it('refuses invalid block scores', async () => {
    const { base, progressFile } = await boot();
    const bad = [
      [{ blockId: 'Not Valid', title: 'x', earned: 1, total: 2 }],
      [{ blockId: 'a', title: '', earned: 1, total: 2 }],
      [{ blockId: 'a', title: 'x'.repeat(201), earned: 1, total: 2 }],
      [{ blockId: 'a', title: 'x', earned: 3, total: 2 }],
      [{ blockId: 'a', title: 'x', earned: 1, total: 0 }],
      [
        { blockId: 'a', title: 'x', earned: 1, total: 2 },
        { blockId: 'a', title: 'y', earned: 0, total: 1 },
      ],
      [{ blockId: 'a', title: 'x', earned: 1, total: 2, extra: true }],
      'nope',
    ];
    for (const value of bad) {
      const result = await post(base, '/api/papers/stand-in-final/result', { earned: 1, total: 2, attempts, blocks: value });
      expect(result.status).toBe(400);
    }
    expect(existsSync(progressFile)).toBe(false);
  });

  it('keeps blocks through export and import', async () => {
    const { base } = await boot();
    await post(base, '/api/papers/stand-in-final/result', { earned: 4.5, total: 5, attempts, blocks });
    const exported = (await get(base, '/api/progress')).body;
    expect(exported.paperResults[0].blocks).toEqual(blocks);
    const { base: other } = await boot();
    expect((await post(other, '/api/progress', exported)).status).toBe(200);
    expect((await get(other, '/api/progress')).body).toEqual(exported);
  });
});

describe('concept questions', () => {
  const question = 'node.q-0001';

  it('saves a first pick with its question, time and result', async () => {
    const { base, progressFile, setNow } = await boot();
    await post(base, `/api/questions/${question}/pick`, { right: true });
    setNow('2026-03-02T10:00:00.000Z');
    await post(base, `/api/questions/${question}/pick`, { right: false });
    const onDisk = JSON.parse(readFileSync(progressFile, 'utf8'));
    expect(onDisk.conceptPicks).toMatchObject([
      { at: START, questionId: question, right: true },
      { at: '2026-03-02T10:00:00.000Z', questionId: question, right: false },
    ]);
    expect(onDisk.conceptPicks[0].id).not.toBe(onDisk.conceptPicks[1].id);
  });

  it('keeps a right first pick out of the queue', async () => {
    const { base } = await boot();
    const saved = await post(base, `/api/questions/${question}/pick`, { right: true });
    expect(saved.body.review).toBeNull();
    expect((await get(base, '/api/progress')).body.reviews).toEqual([]);
  });

  it('queues a wrong first pick on the first interval, like a missed exercise', async () => {
    const { base, setNow } = await boot();
    const saved = await post(base, `/api/questions/${question}/pick`, { right: false });
    expect(saved.body.review).toMatchObject({ id: question, kind: 'question', intervalIndex: 0, dueAt: '2026-03-03T10:00:00.000Z' });
    expect((await get(base, '/api/review')).body).toEqual({ due: [] });
    setNow('2026-03-03T10:00:00.000Z');
    expect((await get(base, '/api/review')).body.due).toMatchObject([{ id: question, kind: 'question' }]);
  });

  it('moves a right pick in review on to the next interval and resets after a wrong one', async () => {
    const { base, setNow } = await boot();
    await post(base, `/api/questions/${question}/pick`, { right: false });
    setNow('2026-03-03T10:00:00.000Z');
    const right = await post(base, `/api/questions/${question}/pick`, { right: true });
    expect(right.body.review).toMatchObject({ intervalIndex: 1, dueAt: '2026-03-08T10:00:00.000Z' });
    setNow('2026-03-08T10:00:00.000Z');
    const wrong = await post(base, `/api/questions/${question}/pick`, { right: false });
    expect(wrong.body.review).toMatchObject({ intervalIndex: 0, dueAt: '2026-03-10T10:00:00.000Z' });
  });

  it('shares the queue with exercises and postpones like them', async () => {
    const { base, setNow } = await boot();
    await post(base, '/api/attempts', missedSteps);
    await post(base, `/api/questions/${question}/pick`, { right: false });
    setNow('2026-03-03T10:00:00.000Z');
    expect((await get(base, '/api/review')).body.due.map((item: { kind: string }) => item.kind).sort()).toEqual(['exercise', 'question']);
    const postponed = await post(base, `/api/reviews/${question}/postpone`);
    expect(postponed.body.review.dueAt).toBe('2026-03-07T10:00:00.000Z');
  });

  it('refuses a pick it cannot read and a bad question identifier', async () => {
    const { base, progressFile } = await boot();
    expect((await post(base, `/api/questions/${question}/pick`, { right: 'yes' })).status).toBe(400);
    expect((await post(base, `/api/questions/${question}/pick`, { right: true, extra: 1 })).status).toBe(400);
    expect((await post(base, '/api/questions/Bad Id/pick', { right: true })).status).toBe(400);
    expect(existsSync(progressFile)).toBe(false);
  });

  it('keeps picks through export and import, and still loads a file without them', async () => {
    const { base } = await boot();
    await post(base, `/api/questions/${question}/pick`, { right: false });
    const exported = (await get(base, '/api/progress')).body;
    expect(exported.conceptPicks).toHaveLength(1);
    const { base: other } = await boot();
    expect((await post(other, '/api/progress', exported)).status).toBe(200);
    expect((await get(other, '/api/progress')).body).toEqual(exported);
    expect((await post(other, '/api/progress', { attempts: [], reviews: [] })).status).toBe(200);
    const entry = { id: 'p1', at: START, questionId: question, right: true };
    expect((await post(other, '/api/progress', { attempts: [], reviews: [], conceptPicks: [entry, entry] })).status).toBe(400);
  });

  it('gives a question an identifier from its node and text that survives other edits', () => {
    const id = conceptQuestionId('l1-limits', 'Is  the limit\nunique?');
    expect(id).toBe(conceptQuestionId('l1-limits', 'Is the limit unique?'));
    expect(id).not.toBe(conceptQuestionId('l1-limits', 'Is the limit finite?'));
    expect(id).not.toBe(conceptQuestionId('l1-derivative', 'Is the limit unique?'));
    expect(id).toMatch(/^l1-limits\.q-[0-9a-f]{8}$/);
  });
});

describe('files saved while the course had recall cards', () => {
  const oldFile = {
    attempts: [],
    reviews: [
      { id: 'node.card-a', kind: 'card', intervalIndex: 1, dueAt: '2026-02-20T10:00:00.000Z' },
      { id: 'node.q-0001', kind: 'question', intervalIndex: 0, dueAt: '2026-02-20T10:00:00.000Z' },
    ],
    cardRatings: [{ id: 'r1', at: '2026-02-19T10:00:00.000Z', cardId: 'node.card-a', rating: 'got-it' }],
  };

  async function bootWithOldFile() {
    const booted = await boot();
    writeFileSync(booted.progressFile, JSON.stringify(oldFile));
    return booted;
  }

  it('loads, with the card review and rating log as they were', async () => {
    const { base } = await bootWithOldFile();
    const loaded = await get(base, '/api/progress');
    expect(loaded.status).toBe(200);
    expect(loaded.body).toEqual(oldFile);
    expect((await get(base, '/api/review')).body.due.map((item: { id: string }) => item.id)).toEqual(['node.card-a', 'node.q-0001']);
  });

  it('keeps the card data verbatim when the file is rewritten', async () => {
    const { base, progressFile } = await bootWithOldFile();
    await post(base, '/api/attempts', missedSteps);
    await post(base, '/api/questions/node.q-0002/pick', { right: true });
    const onDisk = JSON.parse(readFileSync(progressFile, 'utf8'));
    expect(onDisk.cardRatings).toEqual(oldFile.cardRatings);
    expect(onDisk.reviews).toContainEqual(oldFile.reviews[0]);
    expect(onDisk.attempts).toHaveLength(1);
  });

  it('survives export and import', async () => {
    const { base } = await bootWithOldFile();
    const exported = (await get(base, '/api/progress')).body;
    const { base: other } = await boot();
    expect((await post(other, '/api/progress', exported)).status).toBe(200);
    expect((await get(other, '/api/progress')).body).toEqual(oldFile);
  });

  it('keeps a card review out of what the review page shows', () => {
    const live = new Set(['node.q-0001']);
    expect(reviewsInCourse(oldFile.reviews, live).map((item) => item.id)).toEqual(['node.q-0001']);
  });

  it('refuses a card rating log that is not a list', async () => {
    const { base } = await boot();
    expect((await post(base, '/api/progress', { attempts: [], reviews: [], cardRatings: 'nope' })).status).toBe(400);
  });
});

describe('marking rules', () => {
  it('marks exam-tier and multi-step exercises by step, and a short drill as a whole', () => {
    expect(marksByStep({ tier: 'exam' })).toBe(true);
    expect(marksByStep({ tier: 'exam', steps: ['Domain stated.'] })).toBe(true);
    expect(marksByStep({ tier: 'basic', steps: ['One step.', 'Another.'] })).toBe(true);
    expect(marksByStep({ tier: 'standard', steps: ['One step.'] })).toBe(true);
    expect(marksByStep({ tier: 'basic' })).toBe(false);
    expect(marksByStep({ tier: 'standard', steps: [] })).toBe(false);
  });

  it('leaves a stored item out of the queue when its identifier is no longer in the course', () => {
    const retired = { id: 'retired.exercise' };
    const live = { id: 'l1-derivative.derivative-of-square' };
    expect(reviewsInCourse([retired, live], new Set(['l1-derivative.derivative-of-square']))).toEqual([live]);
  });

  it('reads interval configuration as day counts', () => {
    expect(parseIntervalFile({ intervalsDays: [2, 5], postponeDays: 4 })).toEqual({ intervalsDays: [2, 5], postponeDays: 4 });
    expect(parseDayList('0, 3')).toEqual([0, 3]);
    expect(() => parseIntervalFile({ intervalsDays: [-1], postponeDays: 1 })).toThrow(/intervalsDays/);
    expect(() => parseDayList('1,soon')).toThrow(/REVIEW_INTERVALS/);
  });
});

describe('mastery', () => {
  it('starts with a section mark or an attempt, and is done when every section is marked and each Core exercise is right', async () => {
    const { base } = await boot({ course: COURSE });
    expect(nodeMastery(await get(base, '/api/mastery'), 'limits')).toBe('not-started');

    const sections = await post(base, '/api/sections', { nodeId: 'limits', sectionIds: ['learn-1'] });
    expect(sections.status).toBe(200);
    expect(sections.body.sectionsDone).toEqual(['learn-1']);
    expect(nodeMastery(await get(base, '/api/mastery'), 'limits')).toBe('in-progress');
    expect(nodeMastery(await get(base, '/api/mastery'), 'deriv')).toBe('not-started');

    await post(base, '/api/sections', { nodeId: 'limits', sectionIds: ['practise', 'learn-1'] });
    expect((await get(base, '/api/progress')).body.sectionsDone).toEqual({ limits: ['learn-1', 'practise'] });
    // An Extra exercise does not stand in for the Core one.
    expect((await post(base, '/api/attempts', { exerciseId: 'limits.std', tier: 'standard', result: 'right' })).status).toBe(200);
    expect(nodeMastery(await get(base, '/api/mastery'), 'limits')).toBe('in-progress');

    expect((await post(base, '/api/attempts', { exerciseId: 'limits.basic', tier: 'basic', result: 'right' })).status).toBe(200);
    expect(nodeMastery(await get(base, '/api/mastery'), 'limits')).toBe('done');
  });

  it('counts a basic attempt as started and a node without Core exercises as done with its sections alone', async () => {
    const { base } = await boot({ course: COURSE });
    expect(
      (
        await post(base, '/api/attempts', {
          exerciseId: 'limits.basic',
          tier: 'basic',
          result: 'wrong',
          mistakeType: 'sign-or-arithmetic-slip',
        })
      ).status,
    ).toBe(200);
    expect(nodeMastery(await get(base, '/api/mastery'), 'limits')).toBe('in-progress');

    await post(base, '/api/sections', { nodeId: 'deriv', sectionIds: ['learn-1'] });
    expect(nodeMastery(await get(base, '/api/mastery'), 'deriv')).toBe('done');
  });

  it('keeps a node done after a later miss, and records it in the progress file', async () => {
    const { base } = await boot({ course: COURSE });
    await post(base, '/api/sections', { nodeId: 'limits', sectionIds: ['learn-1', 'practise'] });
    await post(base, '/api/attempts', { exerciseId: 'limits.basic', tier: 'basic', result: 'right' });
    expect(nodeMastery(await get(base, '/api/mastery'), 'limits')).toBe('done');
    expect((await get(base, '/api/progress')).body.doneNodes).toEqual(['limits']);

    await post(base, '/api/attempts', {
      exerciseId: 'limits.basic',
      tier: 'basic',
      result: 'wrong',
      mistakeType: 'unjustified-reasoning',
    });
    expect(nodeMastery(await get(base, '/api/mastery'), 'limits')).toBe('done');
  });

  it('refuses section marks it cannot read', async () => {
    const { base } = await boot({ course: COURSE });
    expect((await post(base, '/api/sections', { nodeId: 'limits', sectionIds: [] })).status).toBe(400);
    expect((await post(base, '/api/sections', { nodeId: 'Not An Id', sectionIds: ['learn-1'] })).status).toBe(400);
    expect((await post(base, '/api/sections', { nodeId: 'limits', sectionIds: ['learn-1'], extra: 1 })).status).toBe(400);
  });
});

function nodeMastery(response: { body: { nodes: { nodeId: string; mastery: string }[] } }, nodeId: string): string | undefined {
  return response.body.nodes.find((node) => node.nodeId === nodeId)?.mastery;
}

describe('dashboard', () => {
  it('counts mistakes by type, node, lecture and day, and keeps an exercise the course does not know', async () => {
    const { base, setNow } = await boot({ course: COURSE });
    const first = await post(base, '/api/attempts', {
      exerciseId: 'limits.std',
      tier: 'standard',
      steps: [
        { result: 'wrong', mistakeType: 'sign-or-arithmetic-slip' },
        { result: 'wrong', mistakeType: 'wrong-formula-or-rule' },
        { result: 'skipped' },
      ],
    });
    expect(first.status).toBe(200);
    setNow('2026-03-02T15:00:00.000Z');
    expect(
      (
        await post(base, '/api/attempts', {
          exerciseId: 'limits.exam',
          tier: 'exam',
          result: 'wrong',
          mistakeType: 'domain-or-condition-missed',
        })
      ).status,
    ).toBe(200);
    setNow('2026-03-02T16:00:00.000Z');
    expect(
      (
        await post(base, '/api/attempts', {
          exerciseId: 'other.item',
          tier: 'basic',
          result: 'partly-right',
          mistakeType: 'setup-or-bounds-wrong',
        })
      ).status,
    ).toBe(200);
    expect(
      (
        await post(base, '/api/attempts', {
          exerciseId: 'deriv.std',
          tier: 'standard',
          result: 'right',
        })
      ).status,
    ).toBe(200);

    const dashboard = await get(base, '/api/dashboard');
    expect(dashboard.status).toBe(200);
    expect(dashboard.body).toEqual({
      byType: [
        {
          mistakeType: 'sign-or-arithmetic-slip',
          count: 1,
          exercises: [{ exerciseId: 'limits.std', at: START, nodeId: 'limits', lecture: 1 }],
        },
        {
          mistakeType: 'wrong-formula-or-rule',
          count: 1,
          exercises: [{ exerciseId: 'limits.std', at: START, nodeId: 'limits', lecture: 1 }],
        },
        {
          mistakeType: 'domain-or-condition-missed',
          count: 1,
          exercises: [{ exerciseId: 'limits.exam', at: '2026-03-02T15:00:00.000Z', nodeId: 'limits', lecture: 1 }],
        },
        {
          mistakeType: 'setup-or-bounds-wrong',
          count: 1,
          exercises: [{ exerciseId: 'other.item', at: '2026-03-02T16:00:00.000Z' }],
        },
      ],
      byNode: [
        {
          nodeId: 'limits',
          lecture: 1,
          count: 3,
          exercises: [
            { exerciseId: 'limits.std', at: START, nodeId: 'limits', lecture: 1 },
            { exerciseId: 'limits.std', at: START, nodeId: 'limits', lecture: 1 },
            { exerciseId: 'limits.exam', at: '2026-03-02T15:00:00.000Z', nodeId: 'limits', lecture: 1 },
          ],
        },
      ],
      byLecture: [
        {
          lecture: 1,
          count: 3,
          exercises: [
            { exerciseId: 'limits.std', at: START, nodeId: 'limits', lecture: 1 },
            { exerciseId: 'limits.std', at: START, nodeId: 'limits', lecture: 1 },
            { exerciseId: 'limits.exam', at: '2026-03-02T15:00:00.000Z', nodeId: 'limits', lecture: 1 },
          ],
        },
      ],
      overTime: [
        {
          date: '2026-03-01',
          count: 2,
          exercises: [
            { exerciseId: 'limits.std', at: START, nodeId: 'limits', lecture: 1 },
            { exerciseId: 'limits.std', at: START, nodeId: 'limits', lecture: 1 },
          ],
        },
        {
          date: '2026-03-02',
          count: 2,
          exercises: [
            { exerciseId: 'limits.exam', at: '2026-03-02T15:00:00.000Z', nodeId: 'limits', lecture: 1 },
            { exerciseId: 'other.item', at: '2026-03-02T16:00:00.000Z' },
          ],
        },
      ],
    });
  });
});
