import { createReadStream, promises as fs } from 'node:fs';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import type { CourseCatalog } from '../src/progress/course.ts';
import { dashboardFromProgress, masteryFromProgress, withDoneNodes } from '../src/progress/dashboard.ts';
import {
  ProgressError,
  assertIntervalConfig,
  dueReviews,
  isStableId,
  parseAttemptInput,
  parseConceptPickInput,
  parseProgress,
  parseSectionMarksInput,
  parseSheetDraft,
  parsePaperResultInput,
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
} from '../src/progress/progress.ts';
import { loadProgress, writeJsonAtomic } from './progress-file.ts';

export type ApiOptions = {
  /** Path of the per-machine source-link config, a JSON object mapping source identifiers to local file paths. */
  sourcesConfig: string;
  /** Path of the one progress file. Absent only in tests that never touch progress. */
  progressFile?: string;
  /** Course map used to place mistakes and derive mastery. Absent only in tests that never ask for either. */
  course?: CourseCatalog;
  now?: () => Date;
  intervals?: IntervalConfig;
  /** Runs after the temporary file is written and before it replaces the progress file. Tests use it to stop a write. */
  beforeProgressReplace?: () => void;
};

const CONTENT_TYPES: Record<string, string> = {
  '.pdf': 'application/pdf',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.md': 'text/markdown; charset=utf-8',
};

const BODY_LIMIT = 20_000_000;

/** The local server's interface for progress, the review queue, the dashboard and mastery. */
export function createApi(options: ApiOptions) {
  const intervals = options.intervals;
  if (intervals) assertIntervalConfig(intervals);
  const clock = () => (options.now ?? (() => new Date()))().toISOString();
  let chain = Promise.resolve();
  const exclusive = <T>(task: () => Promise<T>): Promise<T> => {
    const run = chain.then(task, task);
    chain = run.then(
      () => undefined,
      () => undefined,
    );
    return run;
  };

  return async (req: IncomingMessage, res: ServerResponse) => {
    const url = new URL(req.url ?? '/', 'http://localhost');
    if (isProgressRoute(url.pathname)) {
      try {
        if (!options.progressFile || !intervals) {
          return sendJson(res, 404, { error: `no route for ${req.method} ${url.pathname}` });
        }
        const file = options.progressFile;
        await handleProgress(req, res, url, {
          file,
          intervals,
          course: options.course,
          now: clock,
          exclusive,
          beforeReplace: options.beforeProgressReplace,
        });
      } catch (error) {
        if (res.headersSent) return;
        if (error instanceof ProgressError) return sendJson(res, error.status, { error: error.message });
        return sendJson(res, 500, { error: 'The progress file could not be saved.' });
      }
      return;
    }

    if (req.method !== 'GET') return sendJson(res, 404, { error: `no route for ${req.method} ${url.pathname}` });
    if (url.pathname === '/api/health') return sendJson(res, 200, { ok: true });
    if (url.pathname === '/api/sources') return sendJson(res, 200, { available: await availableSources(options) });
    const source = /^\/api\/sources\/([^/]+)$/.exec(url.pathname);
    if (source) return sendSource(res, options, decodeURIComponent(source[1]));
    sendJson(res, 404, { error: `no route for GET ${url.pathname}` });
  };
}

type ProgressContext = {
  file: string;
  intervals: IntervalConfig;
  course?: CourseCatalog;
  now: () => string;
  exclusive: <T>(task: () => Promise<T>) => Promise<T>;
  beforeReplace?: () => void;
};

async function handleProgress(req: IncomingMessage, res: ServerResponse, url: URL, ctx: ProgressContext) {
  if (url.pathname === '/api/progress' && req.method === 'GET') {
    return sendJson(res, 200, await loadProgress(ctx.file));
  }
  if (url.pathname === '/api/progress' && req.method === 'POST') {
    const progress = parseProgress(await readJson(req));
    await ctx.exclusive(() => writeJsonAtomic(ctx.file, progress, ctx.beforeReplace));
    return sendJson(res, 200, progress);
  }
  if (url.pathname === '/api/attempts' && req.method === 'GET') {
    const exerciseId = url.searchParams.get('exerciseId');
    if (!exerciseId || !isStableId(exerciseId)) {
      throw new ProgressError('The exercise identifier is not valid.', 400);
    }
    const progress = await loadProgress(ctx.file);
    return sendJson(res, 200, { attempts: progress.attempts.filter((attempt) => attempt.exerciseId === exerciseId) });
  }
  if (url.pathname === '/api/attempts' && req.method === 'POST') {
    const input = parseAttemptInput(await readJson(req));
    const saved = await ctx.exclusive(async () => {
      const at = ctx.now();
      const current = await loadProgress(ctx.file);
      const attempt = buildAttempt(input, at);
      const next = withAttempt(current, attempt, ctx.intervals);
      await writeJsonAtomic(ctx.file, keepDone(next.progress, ctx), ctx.beforeReplace);
      return { attempt, review: next.review };
    });
    return sendJson(res, 200, saved);
  }
  if (url.pathname === '/api/sections' && req.method === 'POST') {
    const input = parseSectionMarksInput(await readJson(req));
    const sectionsDone = await ctx.exclusive(async () => {
      const next = keepDone(withSectionsDone(await loadProgress(ctx.file), input.nodeId, input.sectionIds), ctx);
      await writeJsonAtomic(ctx.file, next, ctx.beforeReplace);
      return next.sectionsDone?.[input.nodeId] ?? [];
    });
    return sendJson(res, 200, { nodeId: input.nodeId, sectionsDone });
  }
  if (url.pathname === '/api/review' && req.method === 'GET') {
    const progress = await loadProgress(ctx.file);
    return sendJson(res, 200, { due: dueReviews(progress.reviews, ctx.now()) });
  }
  if (url.pathname === '/api/dashboard' && req.method === 'GET') {
    if (!ctx.course) return sendJson(res, 404, { error: `no route for GET ${url.pathname}` });
    return sendJson(res, 200, dashboardFromProgress(await loadProgress(ctx.file), ctx.course));
  }
  if (url.pathname === '/api/mastery' && req.method === 'GET') {
    if (!ctx.course) return sendJson(res, 404, { error: `no route for GET ${url.pathname}` });
    return sendJson(res, 200, masteryFromProgress(await loadProgress(ctx.file), ctx.course));
  }
  if (url.pathname === '/api/sheet' && req.method === 'GET') {
    const progress = await loadProgress(ctx.file);
    const sheet = progress.sheet ?? { excluded: [], order: [], edits: {} };
    return sendJson(res, 200, sheet);
  }
  if (url.pathname === '/api/sheet' && req.method === 'POST') {
    const sheet = parseSheetDraft(await readJson(req));
    await ctx.exclusive(async () => {
      const current = await loadProgress(ctx.file);
      await writeJsonAtomic(ctx.file, { ...current, sheet }, ctx.beforeReplace);
    });
    return sendJson(res, 200, sheet);
  }

  const postpone = /^\/api\/reviews\/([^/]+)\/postpone$/.exec(url.pathname);
  if (postpone && req.method === 'POST') {
    const id = decodeId(postpone[1]);
    const saved = await ctx.exclusive(async () => {
      const next = withPostpone(await loadProgress(ctx.file), id, ctx.now(), ctx.intervals);
      await writeJsonAtomic(ctx.file, next.progress, ctx.beforeReplace);
      return next.review;
    });
    return sendJson(res, 200, { review: saved });
  }

  const paperResult = /^\/api\/papers\/([^/]+)\/result$/.exec(url.pathname);
  if (paperResult && req.method === 'POST') {
    const paperId = decodeId(paperResult[1]);
    const input = parsePaperResultInput(await readJson(req));
    const saved = await ctx.exclusive(async () => {
      const at = ctx.now();
      let progress = await loadProgress(ctx.file);
      const attempts: Attempt[] = [];
      const reviews: (ReturnType<typeof withAttempt>['review'])[] = [];
      for (const attemptInput of input.attempts) {
        const attempt = buildAttempt(attemptInput, at);
        const next = withAttempt(progress, attempt, ctx.intervals);
        progress = next.progress;
        attempts.push(attempt);
        reviews.push(next.review);
      }
      const paperResultRecord: PaperResult = {
        id: randomUUID(),
        at,
        paperId,
        earned: input.earned,
        total: input.total,
        ...(input.blocks ? { blocks: input.blocks } : {}),
      };
      const paperResults = [...(progress.paperResults ?? []), paperResultRecord];
      progress = { ...progress, paperResults };
      await writeJsonAtomic(ctx.file, keepDone(progress, ctx), ctx.beforeReplace);
      return { paperResult: paperResultRecord, attempts, reviews };
    });
    return sendJson(res, 200, saved);
  }

  const pick = /^\/api\/questions\/([^/]+)\/pick$/.exec(url.pathname);
  if (pick && req.method === 'POST') {
    const questionId = decodeId(pick[1]);
    const right = parseConceptPickInput(await readJson(req));
    const saved = await ctx.exclusive(async () => {
      const entry: ConceptPick = { id: randomUUID(), at: ctx.now(), questionId, right };
      const next = withConceptPick(await loadProgress(ctx.file), entry, ctx.intervals);
      await writeJsonAtomic(ctx.file, next.progress, ctx.beforeReplace);
      return next.review;
    });
    return sendJson(res, 200, { review: saved });
  }

  sendJson(res, 404, { error: `no route for ${req.method} ${url.pathname}` });
}

/** Records the nodes that are Done now, so they stay Done. Without a course there is nothing to record. */
function keepDone(progress: Progress, ctx: ProgressContext): Progress {
  return ctx.course ? withDoneNodes(progress, ctx.course) : progress;
}

function isProgressRoute(pathname: string): boolean {
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

function buildAttempt(input: AttemptInput, at: string): Attempt {
  return 'steps' in input
    ? { id: randomUUID(), at, exerciseId: input.exerciseId, tier: input.tier, steps: input.steps }
    : {
        id: randomUUID(),
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

async function readJson(req: IncomingMessage): Promise<unknown> {
  const text = await readBody(req);
  try {
    return JSON.parse(text);
  } catch {
    throw new ProgressError('The request body is not valid JSON.', 400);
  }
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let size = 0;
    let settled = false;
    const fail = (error: Error) => {
      if (settled) return;
      settled = true;
      reject(error);
    };
    const onData = (chunk: Buffer) => {
      size += chunk.length;
      if (size > BODY_LIMIT) {
        fail(new ProgressError('The request body is too large.', 400));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    };
    const onEnd = () => {
      if (settled) return;
      settled = true;
      resolve(Buffer.concat(chunks).toString('utf8'));
    };
    const onError = () => fail(new ProgressError('The request body could not be read.', 400));
    req.on('data', onData);
    req.on('end', onEnd);
    req.on('error', onError);
  });
}

async function availableSources(options: ApiOptions): Promise<string[]> {
  const config = await readSourcesConfig(options);
  const exists = await Promise.all(Object.values(config).map(isFile));
  return Object.keys(config).filter((_, index) => exists[index]);
}

async function sendSource(res: ServerResponse, options: ApiOptions, id: string) {
  const config = await readSourcesConfig(options);
  const file = Object.hasOwn(config, id) ? config[id] : undefined;
  if (!file || !(await isFile(file))) return sendJson(res, 404, { error: `source "${id}" is not linked on this machine` });
  res.writeHead(200, { 'content-type': CONTENT_TYPES[path.extname(file).toLowerCase()] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
}

/** A missing or unreadable config means no source links, never a failure. Relative paths start at the config folder. */
async function readSourcesConfig(options: ApiOptions): Promise<Record<string, string>> {
  try {
    const parsed: unknown = JSON.parse(await fs.readFile(options.sourcesConfig, 'utf8'));
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return {};
    const folder = path.dirname(path.resolve(options.sourcesConfig));
    return Object.fromEntries(
      Object.entries(parsed).flatMap(([id, file]) => (typeof file === 'string' ? [[id, path.resolve(folder, file)]] : [])),
    );
  } catch {
    return {};
  }
}

async function isFile(file: string): Promise<boolean> {
  try {
    return (await fs.stat(file)).isFile();
  } catch {
    return false;
  }
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  res.writeHead(status, { 'content-type': 'application/json', 'cache-control': 'no-store' });
  res.end(JSON.stringify(body));
}
