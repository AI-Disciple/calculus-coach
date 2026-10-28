import path from 'node:path';
import { checkContentBundle } from '../src/content/bundle.ts';
import { nodeSections } from '../src/ui/nodeSections.ts';

/** Prints each node's sections, for reviewing the grouping. Pass node ids or a lecture number to filter. */
const root = path.resolve(import.meta.dirname, '..');
const report = await checkContentBundle(path.join(root, 'content'), { verify: false });
const filters = process.argv.slice(2);
for (const lecture of report.bundle.lectures) {
  for (const node of lecture.nodes) {
    if (filters.length > 0 && !filters.includes(node.id) && !filters.includes(String(lecture.number))) continue;
    console.log(`\n${node.id}: ${node.title}`);
    for (const section of nodeSections(node.blocks, node.title)) {
      const label = (b: { type: string; title?: string; tier?: string; id?: string }) =>
        b.type === 'exercise' ? `exercise(${b.tier} ${b.id?.split('.').pop()})` : b.title ? `${b.type}(${b.title})` : b.type;
      const counts = (list: { type: string }[]) => list.map(label).join(', ');
      console.log(`  [${section.id}] ${section.title}`);
      if (section.kind === 'learn') {
        console.log(`      ${counts(section.blocks)}`);
        console.log(`      Your turn: ${counts(section.yourTurn) || '(none)'}`);
      } else console.log(`      ${section.blocks.length} blocks${section.kind === 'practise' ? `: ${counts(section.blocks)}` : ''}`);
    }
  }
}
