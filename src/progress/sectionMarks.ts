import { saveSectionsDone } from './client.ts';

const LEGACY_PREFIX = 'node-sections-done:';

type LegacyStorage = Pick<Storage, 'length' | 'key' | 'getItem' | 'removeItem'>;
type Save = (nodeId: string, sectionIds: string[]) => Promise<{ ok: boolean }>;

/**
 * Moves the section marks that older versions kept in localStorage into the progress file, once.
 * A key is removed after its marks are saved, or when it holds nothing usable. A key whose save failed stays,
 * so the next start tries again. Returns how many nodes were moved.
 */
export async function migrateLegacyMarks(storage: LegacyStorage, save: Save): Promise<number> {
  let keys: string[] = [];
  try {
    for (let index = 0; index < storage.length; index++) {
      const key = storage.key(index);
      if (key?.startsWith(LEGACY_PREFIX)) keys.push(key);
    }
  } catch {
    keys = [];
  }
  let moved = 0;
  for (const key of keys) {
    const nodeId = key.slice(LEGACY_PREFIX.length);
    const sectionIds = readIds(storage, key);
    if (sectionIds.length > 0) {
      const result = await save(nodeId, sectionIds).catch(() => ({ ok: false }));
      if (!result.ok) continue;
      moved += 1;
    }
    try {
      storage.removeItem(key);
    } catch {
      // The marks are in the progress file already. A key that cannot be removed is moved again, which changes nothing.
    }
  }
  return moved;
}

function readIds(storage: LegacyStorage, key: string): string[] {
  try {
    const parsed: unknown = JSON.parse(storage.getItem(key) ?? '[]');
    return Array.isArray(parsed)
      ? [...new Set(parsed.filter((item): item is string => typeof item === 'string' && /^[a-z0-9]+(?:[-.][a-z0-9]+)*$/.test(item)))]
      : [];
  } catch {
    return [];
  }
}

let migration: Promise<number> | undefined;

/** Runs the move once per page load. Every caller waits for the same run. */
export function migrateOnce(): Promise<number> {
  migration ??= (() => {
    try {
      return migrateLegacyMarks(window.localStorage, saveSectionsDone);
    } catch {
      return Promise.resolve(0);
    }
  })();
  return migration;
}
