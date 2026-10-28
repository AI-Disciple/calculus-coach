import path from 'node:path';
import { defineConfig } from '@playwright/test';

// SMOKE_PORT and SMOKE_PROGRESS_FILE let a second checkout run the suite at the same time as this one.
const port = Number(process.env.SMOKE_PORT ?? 5199);
const progressFile = path.resolve(
  process.env.SMOKE_PROGRESS_FILE ?? path.join(import.meta.dirname, 'tests', 'smoke', 'fixtures', 'progress.json'),
);

export default defineConfig({
  testDir: 'tests/smoke',
  reporter: 'list',
  // One progress file is shared by every test, so the files cannot run side by side.
  workers: 1,
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    // Windows ships Edge, so the smoke tests need no browser download there.
    channel: process.platform === 'win32' ? 'msedge' : 'chromium',
  },
  webServer: {
    command: 'npx tsx server/index.ts',
    url: `http://127.0.0.1:${port}/api/health`,
    env: {
      PORT: String(port),
      NO_OPEN: '1',
      SOURCES_CONFIG: 'tests/smoke/fixtures/sources.json',
      PROGRESS_FILE: progressFile,
      REVIEW_INTERVALS: '0,3,7',
      REVIEW_POSTPONE_DAYS: '1',
    },
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
