import { afterAll, describe, expect, it } from 'vitest';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import http from 'node:http';
import type { AddressInfo } from 'node:net';
import os from 'node:os';
import path from 'node:path';
import { createApi } from '../server/api.ts';

const tempDirs: string[] = [];
const servers: http.Server[] = [];
afterAll(() => {
  servers.forEach((s) => s.close());
  tempDirs.forEach((dir) => rmSync(dir, { recursive: true, force: true }));
});

function tempDir(): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), 'api-'));
  tempDirs.push(dir);
  return dir;
}

async function serve(sourcesConfig: string): Promise<string> {
  const server = http.createServer(createApi({ sourcesConfig }));
  servers.push(server);
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  return `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
}

describe('source links', () => {
  it('serves the files named in the source-link config and lists the ones that exist', async () => {
    const dir = tempDir();
    const pdf = path.join(dir, 'handout.pdf');
    writeFileSync(pdf, '%PDF-1.4 handout');
    const config = path.join(dir, 'sources.local.json');
    writeFileSync(config, JSON.stringify({ handout: pdf, 'final-2024': path.join(dir, 'moved.pdf') }));
    const base = await serve(config);

    expect(await (await fetch(`${base}/api/sources`)).json()).toEqual({ available: ['handout'] });
    const file = await fetch(`${base}/api/sources/handout`);
    expect(file.status).toBe(200);
    expect(file.headers.get('content-type')).toBe('application/pdf');
    expect(await file.text()).toBe('%PDF-1.4 handout');
    expect((await fetch(`${base}/api/sources/final-2024`)).status).toBe(404);
    expect((await fetch(`${base}/api/sources/syllabus`)).status).toBe(404);
  });

  it('reads relative paths in the source-link config from the config folder', async () => {
    const dir = tempDir();
    writeFileSync(path.join(dir, 'board.jpeg'), 'jpeg bytes');
    const config = path.join(dir, 'sources.local.json');
    writeFileSync(config, JSON.stringify({ 'lecture-4-board-1': 'board.jpeg' }));
    const file = await fetch(`${await serve(config)}/api/sources/lecture-4-board-1`);
    expect(file.headers.get('content-type')).toBe('image/jpeg');
    expect(await file.text()).toBe('jpeg bytes');
  });

  it('lists no sources and serves none when the machine has no source-link config', async () => {
    const base = await serve(path.join(tempDir(), 'sources.local.json'));
    expect(await (await fetch(`${base}/api/sources`)).json()).toEqual({ available: [] });
    expect((await fetch(`${base}/api/sources/handout`)).status).toBe(404);
  });

  it('treats an unreadable source-link config as no config', async () => {
    const config = path.join(tempDir(), 'sources.local.json');
    writeFileSync(config, '{ "handout": ');
    const base = await serve(config);
    expect(await (await fetch(`${base}/api/sources`)).json()).toEqual({ available: [] });
  });
});
