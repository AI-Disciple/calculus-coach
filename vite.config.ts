/// <reference types="vitest/config" />
import path from 'node:path';
import { defineConfig, normalizePath, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { checkContentBundle } from './src/content/bundle.ts';

const contentDir = path.resolve(import.meta.dirname, 'content');
const VIRTUAL_ID = 'virtual:content-bundle';
const RESOLVED_ID = `\0${VIRTUAL_ID}`;

/** Serves the content bundle to the browser as a module and reloads the page when content changes. */
function contentBundle(): Plugin {
  return {
    name: 'content-bundle',
    resolveId: (id) => (id === VIRTUAL_ID ? RESOLVED_ID : undefined),
    async load(id) {
      if (id !== RESOLVED_ID) return;
      const { bundle, problems } = await checkContentBundle(contentDir, { verify: false });
      for (const p of problems) this.warn(`${p.file}${p.id ? ` [${p.id}]` : ''}: ${p.message}`);
      return `export default ${JSON.stringify(bundle)};`;
    },
    configureServer(server) {
      server.watcher.add(contentDir);
      const reload = (file: string) => {
        if (!normalizePath(file).startsWith(normalizePath(contentDir))) return;
        const module = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (module) server.moduleGraph.invalidateModule(module);
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('change', reload).on('add', reload).on('unlink', reload);
    },
  };
}

export default defineConfig({
  // The hosted site lives under /<repository>/, so its build sets BASE_PATH. Locally the site is at the root.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), contentBundle()],
  test: { include: ['tests/**/*.test.ts'], testTimeout: 60_000 },
});
