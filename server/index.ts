import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { createServer as createViteServer } from 'vite';
import { checkContentBundle } from '../src/content/bundle.ts';
import { catalogFromBundle } from '../src/progress/course.ts';
import {
  DEFAULT_INTERVALS,
  parseDayCount,
  parseDayList,
  parseIntervalFile,
  type IntervalConfig,
} from '../src/progress/progress.ts';
import { createApi } from './api.ts';
import { memoryStore, warmUpSupabase } from './progress-store.ts';

const root = path.resolve(import.meta.dirname, '..');
// Settings such as SUPABASE_URL come from .env in the project folder. Variables already set in the shell win.
try {
  process.loadEnvFile(path.join(root, '.env'));
} catch (error) {
  if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
}
const port = Number(process.env.PORT ?? 5178);

const vite = await createViteServer({
  root,
  server: { middlewareMode: true, hmr: { port: Number(process.env.HMR_PORT ?? port + 10000) } },
  appType: 'spa',
});
const { bundle } = await checkContentBundle(path.join(root, 'content'), { verify: false });
const supabase =
  process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY
    ? { url: process.env.SUPABASE_URL, anonKey: process.env.SUPABASE_ANON_KEY }
    : undefined;
// Only the smoke tests run without an account: they get progress in memory, gone when the server stops.
const progressStore = process.env.SMOKE_MEMORY_PROGRESS ? memoryStore() : undefined;
if (!supabase && !progressStore) {
  console.error('Set SUPABASE_URL and SUPABASE_ANON_KEY first. Progress is saved in Supabase; see the README.');
  process.exit(1);
}
if (supabase) warmUpSupabase(supabase);
const api = createApi({
  supabase,
  progressStore,
  sourcesConfig: process.env.SOURCES_CONFIG ?? path.join(root, 'sources.local.json'),
  course: catalogFromBundle(bundle),
  intervals: await loadIntervals(root),
});

const server = http.createServer((req, res) => {
  if (req.url?.startsWith('/api/')) return api(req, res);
  vite.middlewares(req, res);
});

server.listen(port, '127.0.0.1', () => {
  const url = `http://localhost:${port}/`;
  console.log(`Course app running at ${url}`);
  if (!process.env.NO_OPEN) openBrowser(url);
});

async function loadIntervals(rootDir: string): Promise<IntervalConfig> {
  let config: IntervalConfig = {
    intervalsDays: [...DEFAULT_INTERVALS.intervalsDays],
    postponeDays: DEFAULT_INTERVALS.postponeDays,
  };
  const configuredPath = process.env.REVIEW_CONFIG;
  const file = configuredPath ?? path.join(rootDir, 'review.config.json');
  let text: string | undefined;
  try {
    text = await readFile(file, 'utf8');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT' && !configuredPath) text = undefined;
    else if ((error as NodeJS.ErrnoException).code === 'ENOENT') throw new Error(`Review config not found at ${file}.`);
    else throw new Error('The review config could not be read.', { cause: error });
  }
  if (text !== undefined) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error('The review config could not be read.');
    }
    config = parseIntervalFile(parsed);
  }
  if (process.env.REVIEW_INTERVALS !== undefined) config = { ...config, intervalsDays: parseDayList(process.env.REVIEW_INTERVALS) };
  if (process.env.REVIEW_POSTPONE_DAYS !== undefined) {
    config = { ...config, postponeDays: parseDayCount(process.env.REVIEW_POSTPONE_DAYS) };
  }
  return config;
}

function openBrowser(url: string) {
  const [command, args] =
    process.platform === 'win32'
      ? ['cmd', ['/c', 'start', '""', url]]
      : process.platform === 'darwin'
        ? ['open', [url]]
        : ['xdg-open', [url]];
  spawn(command, args, { stdio: 'ignore', detached: true }).unref();
}
