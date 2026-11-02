import http from 'node:http';
import https from 'node:https';
import { ProgressError, parseProgress, type Progress } from '../src/progress/progress.ts';

/** Where one learner's progress lives. The api reads and replaces the whole object, whatever sits behind it. */
export type ProgressStore = {
  load(): Promise<Progress>;
  save(progress: Progress): Promise<void>;
};

export type SupabaseConfig = { url: string; anonKey: string };

/**
 * Node's own fetch spends about three seconds on every new connection to Supabase on some machines, and drops idle
 * connections after a few seconds. The https module with a kept-alive agent connects in about a tenth of a second.
 */
const agents = {
  'https:': new https.Agent({ keepAlive: true, keepAliveMsecs: 30_000 }),
  'http:': new http.Agent({ keepAlive: true, keepAliveMsecs: 30_000 }),
};

type HttpResult = { status: number; ok: boolean; json(): Promise<unknown> };

function httpRequest(url: string, init: { method?: string; headers?: Record<string, string>; body?: string }): Promise<HttpResult> {
  return new Promise((resolve, reject) => {
    const secure = new URL(url).protocol === 'https:';
    const send = secure ? https.request : http.request;
    const agent = secure ? agents['https:'] : agents['http:'];
    const req = send(url, { method: init.method ?? 'GET', headers: init.headers, agent }, (res) => {
      const chunks: Buffer[] = [];
      res.on('data', (chunk: Buffer) => chunks.push(chunk));
      res.on('end', () => {
        const status = res.statusCode ?? 0;
        const text = Buffer.concat(chunks).toString('utf8');
        resolve({
          status,
          ok: status >= 200 && status < 300,
          json: async () => JSON.parse(text),
        });
      });
      res.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15_000, () => req.destroy(new Error('timeout')));
    if (init.body !== undefined) req.write(init.body);
    req.end();
  });
}

/** Opens the connection to Supabase ahead of the first request, so the first page does not wait for it. */
export function warmUpSupabase(config: SupabaseConfig): void {
  void httpRequest(`${config.url.replace(/\/+$/, '')}/rest/v1/`, { headers: { apikey: config.anonKey } }).catch(() => undefined);
}

/** Another device saved between this request's load and save. The api loads again and retries. */
export class ConflictError extends ProgressError {
  constructor() {
    super('The progress changed on another device. Try again.', 409);
  }
}

const EMPTY = (): Progress => ({ attempts: [], reviews: [] });

/** Progress held in memory. For tests and the smoke run, where nothing should reach a real account. */
export function memoryStore(initial: Progress = EMPTY()): ProgressStore & { current(): Progress; saves: number } {
  const state = { progress: initial, saves: 0 };
  return {
    load: async () => structuredClone(state.progress),
    save: async (progress) => {
      state.progress = structuredClone(progress);
      state.saves += 1;
    },
    current: () => structuredClone(state.progress),
    get saves() {
      return state.saves;
    },
  };
}

/** Someone who has not signed in sees an empty record and cannot save anything. */
export function anonymousStore(): ProgressStore {
  return {
    load: async () => EMPTY(),
    save: async () => {
      throw new ProgressError('Sign in to save your progress.', 401);
    },
  };
}

/**
 * One row per account in the `progress` table (see supabase/migrations). The learner's own access token travels with
 * every request, so row level security decides whose row is read or written. The server holds no service key.
 *
 * A save only lands if the row still has the version the load saw, so two devices can never overwrite each other
 * silently. Make one store per request: it remembers the version its own load saw.
 */
export function supabaseStore(config: SupabaseConfig, token: string): ProgressStore {
  return cached(token, rawSupabaseStore(config, token));
}

type Snapshot = { progress: Progress; version: number | null };
const CACHE_MS = 20_000;
const cache = new Map<string, { snapshot: Snapshot; at: number }>();
const inFlight = new Map<string, Promise<Snapshot>>();

/**
 * Remembers each account's progress for a few seconds. A page asks for it several times at once, and every ask would
 * otherwise cross the internet to Supabase. A save updates the memory; a clash with another device clears it.
 */
function cached(token: string, inner: RawStore): ProgressStore {
  return {
    async load() {
      const hit = cache.get(token);
      if (hit && Date.now() - hit.at < CACHE_MS) {
        inner.adopt(hit.snapshot.version);
        return structuredClone(hit.snapshot.progress);
      }
      let pending = inFlight.get(token);
      if (!pending) {
        pending = inner.loadWithVersion().finally(() => inFlight.delete(token));
        inFlight.set(token, pending);
      }
      const snapshot = await pending;
      cache.set(token, { snapshot, at: Date.now() });
      inner.adopt(snapshot.version);
      return structuredClone(snapshot.progress);
    },
    async save(progress) {
      try {
        await inner.save(progress);
      } catch (error) {
        cache.delete(token);
        throw error;
      }
      cache.set(token, { snapshot: { progress: structuredClone(progress), version: inner.version() }, at: Date.now() });
    },
  };
}

type RawStore = {
  loadWithVersion(): Promise<Snapshot>;
  save(progress: Progress): Promise<void>;
  /** Tells the store which version a cached load saw, so its next save checks against it. */
  adopt(version: number | null): void;
  version(): number | null;
};

function rawSupabaseStore(config: SupabaseConfig, token: string): RawStore {
  const base = `${config.url.replace(/\/+$/, '')}/rest/v1/progress`;
  const auth = { apikey: config.anonKey, authorization: `Bearer ${token}` };
  /** undefined: nothing loaded yet. null: loaded, and the account has no row. Number: the row's version. */
  let seen: number | null | undefined;

  async function call(url: string, init: { method?: string; headers?: Record<string, string>; body?: string } = {}): Promise<HttpResult> {
    let response: HttpResult;
    try {
      response = await httpRequest(url, { ...init, headers: { ...auth, ...init.headers } });
    } catch {
      throw new ProgressError('Supabase did not respond.', 502);
    }
    if (response.status === 401 || response.status === 403) {
      throw new ProgressError('Your session has expired. Sign in again.', 401);
    }
    if (response.status === 409) throw new ConflictError();
    if (!response.ok) throw new ProgressError('Supabase refused the request.', 502);
    return response;
  }

  async function read(): Promise<{ data: unknown; version: number } | null> {
    const response = await call(`${base}?select=data,version&limit=1`, { headers: { accept: 'application/json' } });
    const rows = (await response.json().catch(() => null)) as { data: unknown; version: number }[] | null;
    if (!Array.isArray(rows)) throw new ProgressError('The progress could not be read.', 500);
    return rows[0] ?? null;
  }

  const json = { 'content-type': 'application/json' };

  return {
    async loadWithVersion() {
      const row = await read();
      if (!row) return { progress: EMPTY(), version: null };
      try {
        return { progress: parseProgress(row.data), version: row.version };
      } catch {
        throw new ProgressError('The progress could not be read.', 500);
      }
    },
    adopt(version) {
      seen = version;
    },
    version: () => (seen === undefined ? null : seen),
    async save(progress) {
      // A save with no load before it (an import) replaces whatever is there, so it reads the version first.
      if (seen === undefined) seen = (await read())?.version ?? null;
      const updated_at = new Date().toISOString();
      if (seen === null) {
        await call(base, {
          method: 'POST',
          headers: { ...json, prefer: 'return=minimal' },
          body: JSON.stringify({ data: progress, version: 1, updated_at }),
        });
        seen = 1;
        return;
      }
      const response = await call(`${base}?version=eq.${seen}`, {
        method: 'PATCH',
        headers: { ...json, prefer: 'return=representation' },
        body: JSON.stringify({ data: progress, version: seen + 1, updated_at }),
      });
      const rows = (await response.json().catch(() => null)) as unknown[] | null;
      if (!Array.isArray(rows) || rows.length === 0) throw new ConflictError();
      seen += 1;
    },
  };
}

/** The bearer token of a request, if it has one. */
export function bearerToken(header: string | undefined): string | undefined {
  const match = /^Bearer\s+(\S+)$/i.exec(header ?? '');
  return match?.[1];
}
