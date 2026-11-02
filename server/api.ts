import { createReadStream, promises as fs } from 'node:fs';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import type { CourseCatalog } from '../src/progress/course.ts';
import { ProgressError, assertIntervalConfig, type IntervalConfig } from '../src/progress/progress.ts';
import { handleProgressRoute, isProgressRoute, makeExclusive, type ProgressStore, type RouteContext } from '../src/progress/routes.ts';
import { anonymousStore, bearerToken, supabaseStore, type SupabaseConfig } from './progress-store.ts';

export type ApiOptions = {
  /** Path of the per-machine source-link config, a JSON object mapping source identifiers to local file paths. */
  sourcesConfig: string;
  /** Progress lives in Supabase, one row per account, and every progress request must carry a sign-in token. */
  supabase?: SupabaseConfig;
  /** One fixed store for everyone, with no sign-in. Tests and the smoke run only. Ignored when `supabase` is set. */
  progressStore?: ProgressStore;
  /** Course map used to place mistakes and derive mastery. Absent only in tests that never ask for either. */
  course?: CourseCatalog;
  now?: () => Date;
  intervals?: IntervalConfig;
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
  const exclusive = makeExclusive();

  return async (req: IncomingMessage, res: ServerResponse) => {
    const url = new URL(req.url ?? '/', 'http://localhost');
    if (isProgressRoute(url.pathname)) {
      try {
        if ((!options.progressStore && !options.supabase) || !intervals) {
          return sendJson(res, 404, { error: `no route for ${req.method} ${url.pathname}` });
        }
        let store: ProgressStore;
        if (options.supabase) {
          const token = bearerToken(req.headers.authorization);
          store = token ? supabaseStore(options.supabase, token) : anonymousStore();
        } else {
          store = options.progressStore!;
        }
        await handleProgress(req, res, url, {
          store,
          intervals,
          course: options.course,
          now: clock,
          exclusive,
        });
      } catch (error) {
        if (res.headersSent) return;
        if (error instanceof ProgressError) return sendJson(res, error.status, { error: error.message });
        return sendJson(res, 500, { error: 'The progress could not be saved.' });
      }
      return;
    }

    if (req.method !== 'GET') return sendJson(res, 404, { error: `no route for ${req.method} ${url.pathname}` });
    if (url.pathname === '/api/health') return sendJson(res, 200, { ok: true });
    if (url.pathname === '/api/auth-config') {
      return sendJson(res, 200, options.supabase ? { mode: 'supabase', ...options.supabase } : { mode: 'file' });
    }
    if (url.pathname === '/api/sources') return sendJson(res, 200, { available: await availableSources(options) });
    const source = /^\/api\/sources\/([^/]+)$/.exec(url.pathname);
    if (source) return sendSource(res, options, decodeURIComponent(source[1]));
    sendJson(res, 404, { error: `no route for GET ${url.pathname}` });
  };
}

async function handleProgress(req: IncomingMessage, res: ServerResponse, url: URL, ctx: RouteContext) {
  sendJson(res, 200, await handleProgressRoute(req.method ?? 'GET', url, () => readJson(req), ctx));
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
