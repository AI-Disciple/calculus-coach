import { mkdir, open, readFile, rename, rm } from 'node:fs/promises';
import path from 'node:path';
import { ProgressError, parseProgress, type Progress } from '../src/progress/progress.ts';

/** Writes the whole file beside the destination, then replaces it. A crash before the replace leaves the previous file. */
export async function writeJsonAtomic(file: string, value: unknown, beforeReplace?: () => void): Promise<void> {
  await mkdir(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  const handle = await open(tmp, 'w');
  try {
    await handle.writeFile(`${JSON.stringify(value, null, 2)}\n`, 'utf8');
    await handle.sync();
  } finally {
    await handle.close();
  }
  try {
    beforeReplace?.();
    await renameOver(tmp, file);
  } catch (error) {
    await rm(tmp, { force: true });
    throw error;
  }
}

export async function loadProgress(file: string): Promise<Progress> {
  let text: string;
  try {
    text = await readFile(file, 'utf8');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return { attempts: [], reviews: [] };
    throw new ProgressError('The progress file could not be read.', 500);
  }
  try {
    return parseProgress(JSON.parse(text));
  } catch (error) {
    if (error instanceof ProgressError && error.status === 500) throw error;
    throw new ProgressError('The progress file could not be read.', 500);
  }
}

async function renameOver(tmp: string, dest: string): Promise<void> {
  let last: unknown;
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      await rename(tmp, dest);
      return;
    } catch (error) {
      last = error;
      const code = (error as NodeJS.ErrnoException).code;
      if (code !== 'EPERM' && code !== 'EACCES' && code !== 'EBUSY') break;
      await new Promise((resolve) => setTimeout(resolve, 20 * (attempt + 1)));
    }
  }
  throw last;
}
