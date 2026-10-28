import path from 'node:path';
import { checkContentBundle } from '../src/content/bundle.ts';

const root = path.resolve(import.meta.dirname, '..');
const report = await checkContentBundle(path.join(root, 'content'), { uiDir: path.join(root, 'src') });

const exercises = report.bundle.lectures.flatMap((l) => l.nodes).flatMap((n) => n.blocks).filter((b) => b.type === 'exercise');
const coverageItems = report.bundle.coverage.sources.flatMap((g) => g.items);
const excludedItems = coverageItems.filter((item) => item.excluded !== undefined && item.excluded.trim().length > 0);
console.log(
  `Content: ${report.bundle.lectures.reduce((sum, l) => sum + l.nodes.length, 0)} nodes, ${exercises.length} exercises, ${coverageItems.length} coverage items (${excludedItems.length} excluded).`,
);

if (report.secondPass.length > 0) {
  console.log(`\nNot machine-checkable, waiting for a second-pass review (${report.secondPass.length}):`);
  for (const item of report.secondPass) console.log(`  ${item.id} (${item.file}): ${item.reason}`);
}

if (report.warnings.length > 0) {
  console.warn(`
Warnings (${report.warnings.length}):`);
  for (const w of report.warnings) console.warn(`  ${w.file}${w.id ? ` [${w.id}]` : ''}: ${w.message}`);
}

if (report.problems.length > 0) {
  console.error(`\nContent check failed with ${report.problems.length} problem(s):`);
  for (const p of report.problems) console.error(`  ${p.file}${p.id ? ` [${p.id}]` : ''}: ${p.message}`);
  process.exit(1);
}
console.log('\nContent check passed.');
