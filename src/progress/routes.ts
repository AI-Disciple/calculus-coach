import type { CourseCatalog } from './course.ts';
import { dashboardFromProgress, masteryFromProgress, withDoneNodes } from './dashboard.ts';
import {
  ProgressError,
  dueReviews,
  isStableId,
  parseAttemptInput,
  parseConceptPickInput,
  parsePaperResultInput,
  parseProgress,
  parseSectionMarksInput,
  parseSheetDraft,
  withAttempt,
  withConceptPick,
  withPostpone,
  withSectionsDone,
  type Attempt,
  type AttemptInput,
  type ConceptPick,
  type IntervalConfig,
  type PaperResult,
  type Progress,
} from './progress.ts';

/** Where one learner's progress lives. The routes read and replace the whole object, whatever sits behind it. */
export type ProgressStore = {
  load(): Promise<Progress>;
  save(progress: Progress): Promise<void>;
};

/** Another device saved between this request's load and save. The routes load again and retry. */
export class ConflictError extends ProgressError {
  constructor() {
    super('The progress changed on another device. Try again.', 409);
  }
}

export type RouteContext = {
  store: ProgressStore;
  intervals: IntervalConfig;
  course?: CourseCatalog;
  now: () => string;
  exclusive: <T>(task: () => Promise<T>) => Promise<T>;
};

/** Runs one task at a time. A save that clashes with another device's is retried, loading again, up to three more times. */
export function makeExclusive(): RouteContext['exclusive'] {
  let chain = Promise.resolve();
  return <T>(task: () => Promise<T>): Promise<T> => {
    const attempt = async (): Promise<T> => {
      for (let tries = 0; ; tries++) {
        try {
          return await task();
        } catch (error) {
          if (!(error instanceof ConflictError) || tries >= 3) throw error;
        }
      }
    };
    const run = chain.then(attempt, attempt);
    chain = run.then(
      () => undefined,
      () => undefined,
    );
    return run;
  };
}

export function isProgressRoute(pathname: string): boolean {
  return (
    pathname === '/api/progress' ||
    pathname === '/api/attempts' ||
    pathname === '/api/review' ||
    pathname === '/api/dashboard' ||
    pathname === '/api/mastery' ||
    pathname === '/api/sheet' ||
    pathname === '/api/sections' ||
    pathname.startsWith('/api/reviews/') ||
    pathname.startsWith('/api/questions/') ||
    pathname.startsWith('/api/papers/')
  );
}

/** Handles one progress request and returns its JSON body. Throws ProgressError for a refused request. */
export async function handleProgressRoute(
  method: string,
  url: URL,
  readJson: () => Promise<unknown>,
  ctx: RouteContext,
): Promise<unknown> {
  const noRoute = () => new ProgressError(`no route for ${method} ${url.pathname}`, 404);
  if (url.pathname === '/api/progress' && method === 'GET') {
    return await ctx.store.load();
  }
  if (url.pathname === '/api/progress' && method === 'POST') {
    const progress = parseProgress(await readJson());
    await ctx.exclusive(() => ctx.store.save(progress));
    return progress;
  }
  if (url.pathname === '/api/attempts' && method === 'GET') {
    const exerciseId = url.searchParams.get('exerciseId');
    if (!exerciseId || !isStableId(exerciseId)) {
      throw new ProgressError('The exercise identifier is not valid.', 400);
    }
    const progress = await ctx.store.load();
    return { attempts: progress.attempts.filter((attempt) => attempt.exerciseId === exerciseId) };
  }
  if (url.pathname === '/api/attempts' && method === 'POST') {
    const input = parseAttemptInput(await readJson());
    return await ctx.exclusive(async () => {
      const at = ctx.now();
      const current = await ctx.store.load();
      const attempt = buildAttempt(input, at);
      const next = withAttempt(current, attempt, ctx.intervals);
      await ctx.store.save(keepDone(next.progress, ctx));
      return { attempt, review: next.review };
    });
  }
  if (url.pathname === '/api/sections' && method === 'POST') {
    const input = parseSectionMarksInput(await readJson());
    const sectionsDone = await ctx.exclusive(async () => {
      const next = keepDone(withSectionsDone(await ctx.store.load(), input.nodeId, input.sectionIds), ctx);
      await ctx.store.save(next);
      return next.sectionsDone?.[input.nodeId] ?? [];
    });
    return { nodeId: input.nodeId, sectionsDone };
  }
  if (url.pathname === '/api/review' && method === 'GET') {
    const progress = await ctx.store.load();
    return { due: dueReviews(progress.reviews, ctx.now()) };
  }
  if (url.pathname === '/api/dashboard' && method === 'GET') {
    if (!ctx.course) throw noRoute();
    return dashboardFromProgress(await ctx.store.load(), ctx.course);
  }
  if (url.pathname === '/api/mastery' && method === 'GET') {
    if (!ctx.course) throw noRoute();
    return masteryFromProgress(await ctx.store.load(), ctx.course);
  }
  if (url.pathname === '/api/sheet' && method === 'GET') {
    const progress = await ctx.store.load();
    return progress.sheet ?? { excluded: [], order: [], edits: {} };
  }
  if (url.pathname === '/api/sheet' && method === 'POST') {
    const sheet = parseSheetDraft(await readJson());
    await ctx.exclusive(async () => {
      const current = await ctx.store.load();
      await ctx.store.save({ ...current, sheet });
    });
    return sheet;
  }

  const postpone = /^\/api\/reviews\/([^/]+)\/postpone$/.exec(url.pathname);
  if (postpone && method === 'POST') {
    const id = decodeId(postpone[1]);
    const review = await ctx.exclusive(async () => {
      const next = withPostpone(await ctx.store.load(), id, ctx.now(), ctx.intervals);
      await ctx.store.save(next.progress);
      return next.review;
    });
    return { review };
  }

  const paperResult = /^\/api\/papers\/([^/]+)\/result$/.exec(url.pathname);
  if (paperResult && method === 'POST') {
    const paperId = decodeId(paperResult[1]);
    const input = parsePaperResultInput(await readJson());
    return await ctx.exclusive(async () => {
      const at = ctx.now();
      let progress = await ctx.store.load();
      const attempts: Attempt[] = [];
      const reviews: ReturnType<typeof withAttempt>['review'][] = [];
      for (const attemptInput of input.attempts) {
        const attempt = buildAttempt(attemptInput, at);
        const next = withAttempt(progress, attempt, ctx.intervals);
        progress = next.progress;
        attempts.push(attempt);
        reviews.push(next.review);
      }
      const paperResultRecord: PaperResult = {
        id: crypto.randomUUID(),
        at,
        paperId,
        earned: input.earned,
        total: input.total,
        ...(input.blocks ? { blocks: input.blocks } : {}),
      };
      const paperResults = [...(progress.paperResults ?? []), paperResultRecord];
      progress = { ...progress, paperResults };
      await ctx.store.save(keepDone(progress, ctx));
      return { paperResult: paperResultRecord, attempts, reviews };
    });
  }

  const pick = /^\/api\/questions\/([^/]+)\/pick$/.exec(url.pathname);
  if (pick && method === 'POST') {
    const questionId = decodeId(pick[1]);
    const right = parseConceptPickInput(await readJson());
    const review = await ctx.exclusive(async () => {
      const entry: ConceptPick = { id: crypto.randomUUID(), at: ctx.now(), questionId, right };
      const next = withConceptPick(await ctx.store.load(), entry, ctx.intervals);
      await ctx.store.save(next.progress);
      return next.review;
    });
    return { review };
  }

  throw noRoute();
}

/** Records the nodes that are Done now, so they stay Done. Without a course there is nothing to record. */
function keepDone(progress: Progress, ctx: RouteContext): Progress {
  return ctx.course ? withDoneNodes(progress, ctx.course) : progress;
}

function buildAttempt(input: AttemptInput, at: string): Attempt {
  return 'steps' in input
    ? { id: crypto.randomUUID(), at, exerciseId: input.exerciseId, tier: input.tier, steps: input.steps }
    : {
        id: crypto.randomUUID(),
        at,
        exerciseId: input.exerciseId,
        tier: input.tier,
        result: input.result,
        ...(input.mistakeType ? { mistakeType: input.mistakeType } : {}),
        ...(input.note ? { note: input.note } : {}),
      };
}

function decodeId(raw: string): string {
  try {
    const id = decodeURIComponent(raw);
    if (!isStableId(id)) throw new ProgressError('The identifier is not valid.', 400);
    return id;
  } catch (error) {
    if (error instanceof ProgressError) throw error;
    throw new ProgressError('The identifier is not valid.', 400);
  }
}
