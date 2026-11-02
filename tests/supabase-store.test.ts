import { afterAll, describe, expect, it } from 'vitest';
import http from 'node:http';
import type { AddressInfo } from 'node:net';
import { createApi } from '../server/api.ts';

const servers: http.Server[] = [];
afterAll(() => servers.forEach((server) => server.close()));

async function listen(handler: http.RequestListener): Promise<string> {
  const server = http.createServer(handler);
  servers.push(server);
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  return `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
}

/** A stand-in for Supabase's table interface: one row per bearer token, with the version check. */
async function fakeSupabase() {
  const table = new Map<string, { data: unknown; version: number }>();
  /** Runs once, right after the next read, to play another device saving in between. */
  const hooks = { afterRead: undefined as undefined | (() => void) };
  const url = await listen((req, res) => {
    const token = /^Bearer (.+)$/.exec(req.headers.authorization ?? '')?.[1];
    if (!token || token === 'expired') {
      res.writeHead(401).end('{}');
      return;
    }
    const reply = (status: number, body?: unknown) => {
      res.writeHead(status, { 'content-type': 'application/json' });
      res.end(body === undefined ? undefined : JSON.stringify(body));
    };
    if (req.method === 'GET') {
      const row = table.get(token);
      reply(200, row ? [row] : []);
      const hook = hooks.afterRead;
      hooks.afterRead = undefined;
      hook?.();
      return;
    }
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      const sent = JSON.parse(body);
      if (req.method === 'POST') {
        if (table.has(token)) return reply(409, {});
        table.set(token, { data: sent.data, version: sent.version });
        return reply(201);
      }
      const wanted = Number(new URL(req.url ?? '', 'http://x').searchParams.get('version')?.replace('eq.', ''));
      const row = table.get(token);
      if (!row || row.version !== wanted) return reply(200, []);
      table.set(token, { data: sent.data, version: sent.version });
      reply(200, [{ version: sent.version }]);
    });
  });
  return { url, rows: { get: (token: string) => table.get(token)?.data }, table, hooks };
}

async function boot() {
  const supabase = await fakeSupabase();
  const base = await listen(
    createApi({
      sourcesConfig: 'none.json',
      supabase: { url: supabase.url, anonKey: 'anon' },
      intervals: { intervalsDays: [2, 5, 11], postponeDays: 4 },
    }),
  );
  return { base, rows: supabase.rows, table: supabase.table, hooks: supabase.hooks };
}

const attempt = { exerciseId: 'l6-hessian-test-sample.basic-bowl', tier: 'basic', steps: [{ result: 'right' }] };

describe('progress in Supabase', () => {
  it('announces accounts to the browser', async () => {
    const { base } = await boot();
    expect(await (await fetch(`${base}/api/auth-config`)).json()).toMatchObject({ mode: 'supabase', anonKey: 'anon' });
  });

  it('shows empty progress and refuses saves without a sign-in', async () => {
    const { base } = await boot();
    const read = await fetch(`${base}/api/progress`);
    expect(await read.json()).toEqual({ attempts: [], reviews: [] });
    const save = await fetch(`${base}/api/attempts`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(attempt),
    });
    expect(save.status).toBe(401);
  });

  it('refuses an expired sign-in', async () => {
    const { base } = await boot();
    const response = await fetch(`${base}/api/progress`, { headers: { authorization: 'Bearer expired' } });
    expect(response.status).toBe(401);
  });

  it('starts an account with empty progress', async () => {
    const { base } = await boot();
    const response = await fetch(`${base}/api/progress`, { headers: { authorization: 'Bearer alice-1' } });
    expect(await response.json()).toEqual({ attempts: [], reviews: [] });
  });

  it('reads again and retries when another device saved in between', async () => {
    const { base, table } = await boot();
    const headers = { authorization: 'Bearer carol', 'content-type': 'application/json' };
    const first = await fetch(`${base}/api/attempts`, { method: 'POST', headers, body: JSON.stringify(attempt) });
    expect(first.status).toBe(200);
    // A second device saves its own attempt. This server still remembers version 1.
    const row = table.get('carol')!;
    const mine = row.data as { attempts: object[] };
    table.set('carol', {
      data: { ...mine, attempts: [...mine.attempts, { ...mine.attempts[0], id: 'other-device' }] },
      version: row.version + 1,
    });
    const second = await fetch(`${base}/api/attempts`, { method: 'POST', headers, body: JSON.stringify(attempt) });
    expect(second.status).toBe(200);
    expect(table.get('carol')!.version).toBe(3);
    expect((table.get('carol')!.data as { attempts: unknown[] }).attempts).toHaveLength(3);
  });

  it('keeps each account apart', async () => {
    const { base, rows } = await boot();
    const saved = await fetch(`${base}/api/attempts`, {
      method: 'POST',
      headers: { authorization: 'Bearer alice-1', 'content-type': 'application/json' },
      body: JSON.stringify(attempt),
    });
    expect(saved.status).toBe(200);
    expect((rows.get('alice-1') as { attempts: unknown[] }).attempts).toHaveLength(1);
    const bob = await fetch(`${base}/api/progress`, { headers: { authorization: 'Bearer bob-1' } });
    expect((await bob.json()).attempts).toEqual([]);
  });
});
