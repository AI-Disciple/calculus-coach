import type { SupabaseClient } from '@supabase/supabase-js';
import bundle from 'virtual:content-bundle';
import { getAuthState, supabaseClient } from './auth.ts';
import { catalogFromBundle } from './course.ts';
import { DEFAULT_INTERVALS, ProgressError, parseProgress, type Progress } from './progress.ts';
import { ConflictError, handleProgressRoute, isProgressRoute, makeExclusive, type ProgressStore } from './routes.ts';

/**
 * The progress api for the hosted site, which has no server. It runs the same routes the local server runs, in the
 * browser, and reads and writes the signed-in account's row in Supabase directly. Row level security decides whose
 * row that is, so the public anon key is all the page needs.
 */

const EMPTY = (): Progress => ({ attempts: [], reviews: [] });

const course = catalogFromBundle(bundle);
const exclusive = makeExclusive();

/** Someone who has not signed in sees an empty record and cannot save anything. */
const anonymousStore: ProgressStore = {
  load: async () => EMPTY(),
  save: async () => {
    throw new ProgressError('Sign in to save your progress.', 401);
  },
};

/**
 * A save only lands if the row still has the version the load saw, so two devices can never overwrite each other
 * silently. The version is remembered between a load and the save that follows it.
 */
function supabaseStore(client: SupabaseClient): ProgressStore {
  /** undefined: nothing loaded yet. null: loaded, and the account has no row. Number: the row's version. */
  let seen: number | null | undefined;

  async function read(): Promise<{ data: unknown; version: number } | null> {
    const { data, error } = await client.from('progress').select('data,version').limit(1);
    if (error) throw failure(error);
    return (data?.[0] as { data: unknown; version: number } | undefined) ?? null;
  }

  return {
    async load() {
      const row = await read();
      seen = row ? row.version : null;
      if (!row) return EMPTY();
      try {
        return parseProgress(row.data);
      } catch {
        throw new ProgressError('The progress could not be read.', 500);
      }
    },
    async save(progress) {
      // A save with no load before it (an import) replaces whatever is there, so it reads the version first.
      if (seen === undefined) seen = (await read())?.version ?? null;
      const updated_at = new Date().toISOString();
      if (seen === null) {
        const { error } = await client.from('progress').insert({ data: progress, version: 1, updated_at });
        if (error) {
          // The row exists already: another device created it first.
          if (error.code === '23505') {
            seen = undefined;
            throw new ConflictError();
          }
          throw failure(error);
        }
        seen = 1;
        return;
      }
      const { data, error } = await client
        .from('progress')
        .update({ data: progress, version: seen + 1, updated_at })
        .eq('version', seen)
        .select('version');
      if (error) throw failure(error);
      if (!data || data.length === 0) {
        seen = undefined;
        throw new ConflictError();
      }
      seen += 1;
    },
  };
}

function failure(error: { status?: number; message: string }): ProgressError {
  if (error.status === 401 || error.status === 403) return new ProgressError('Your session has expired. Sign in again.', 401);
  return new ProgressError('Supabase did not accept the request.', 502);
}

/** Answers one `/api/...` progress request, the way the local server would. */
export async function browserProgressRequest(url: string, init?: RequestInit): Promise<unknown> {
  const parsed = new URL(url, window.location.origin);
  if (!isProgressRoute(parsed.pathname)) throw new ProgressError(`no route for ${parsed.pathname}`, 404);
  const client = supabaseClient();
  return handleProgressRoute(
    init?.method ?? 'GET',
    parsed,
    async () => {
      try {
        return JSON.parse(typeof init?.body === 'string' ? init.body : '');
      } catch {
        throw new ProgressError('The request body is not valid JSON.', 400);
      }
    },
    {
      store: client && getAuthState().status === 'signed-in' ? supabaseStore(client) : anonymousStore,
      intervals: DEFAULT_INTERVALS,
      course,
      now: () => new Date().toISOString(),
      exclusive,
    },
  );
}
