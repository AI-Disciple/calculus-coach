// Compares a ticket 36 draft of a node file with the committed version and prints what a reviewer must read.
// Usage: npx tsx scripts/compare-rewrite.ts <draft.md>...  (the original is content/nodes/lecture-*/<same name>)
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import { block, type Block } from '../src/content/schema.ts';
import { nodeSections } from '../src/ui/nodeSections.ts';
import { visualParamProblem } from '../src/visuals/onevar.ts';
import { severalVarParamProblems } from '../src/visuals/params.ts';

const BANNED = (parseYaml(readFileSync('content/style/banned-phrases.yaml', 'utf8')) as string[]).map((p) => p.toLowerCase());

const CHANGEABLE = new Set(['plain-explanation', 'trap', 'tip', 'key-points', 'section', 'visual']);
const FRONT = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;

function parse(raw: string, label: string, problems: string[]) {
  const match = FRONT.exec(raw);
  if (!match) throw new Error(`${label}: no front matter`);
  const blocks: Block[] = [];
  let open: { type: string; lines: string[] } | undefined;
  for (const text of raw.slice(match[0].length).split(/\r?\n/)) {
    if (open) {
      if (/^:::\s*$/.test(text)) {
        const parsed = block.safeParse({ ...(parseYaml(open.lines.join('\n')) ?? {}), type: open.type });
        if (parsed.success) blocks.push(parsed.data);
        else problems.push(`${label}: bad ${open.type} block: ${parsed.error.issues.map((i) => i.message).join('; ')}`);
        open = undefined;
      } else open.lines.push(text);
      continue;
    }
    const opening = /^:::\s*([a-z-]+)\s*$/.exec(text);
    if (opening) open = { type: opening[1], lines: [] };
    else if (text.trim() !== '') problems.push(`${label}: text outside a block: ${text.slice(0, 60)}`);
  }
  if (open) problems.push(`${label}: unclosed ${open.type}`);
  return { front: match[1], title: String(parseYaml(match[1]).title), blocks };
}

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);
const textOf = (blocks: Block[], types: string[]) =>
  blocks.flatMap((b) => (types.includes(b.type) && 'text' in b ? [b.text] : [])).join('\n\n');
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
const maths = (s: string) => [...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)].map((m) => norm(m[0]));
const sentences = (s: string) =>
  norm(s.replace(/^#+ .*$/gm, ' ').replace(/^\s*[-*] /gm, ' '))
    .split(/(?<=[.?!:])\s+(?=[A-Z\\(])/)
    .map((x) => x.trim())
    .filter((x) => x.length > 0);

for (const draftPath of process.argv.slice(2)) {
  const name = path.basename(draftPath);
  const lecture = name.match(/^l(\d)-/)?.[1];
  const repoPath = `content/nodes/lecture-${lecture}/${name}`;
  const problems: string[] = [];
  const old = parse(execFileSync('git', ['show', `HEAD:${repoPath}`], { encoding: 'utf8' }), 'original', problems);
  const neu = parse(readFileSync(draftPath, 'utf8'), 'draft', problems);
  console.log(`\n=== ${name}`);

  if (norm(old.front) !== norm(neu.front)) problems.push('front matter changed');
  const fixedOld = old.blocks.filter((b) => !CHANGEABLE.has(b.type));
  const fixedNew = neu.blocks.filter((b) => !CHANGEABLE.has(b.type));
  if (fixedOld.length !== fixedNew.length) problems.push(`protected block count ${fixedOld.length} -> ${fixedNew.length}`);
  fixedOld.forEach((b, i) => {
    if (!same(b, fixedNew[i])) problems.push(`protected block ${i} (${b.type}) changed or moved`);
  });
  const visualsOld = old.blocks.filter((b) => b.type === 'visual');
  const visualsNew = neu.blocks.filter((b) => b.type === 'visual');
  for (const v of visualsOld) if (!visualsNew.some((w) => same(v, w))) problems.push(`existing visual ${v.kind} changed or removed`);
  const added = visualsNew.filter((v) => !visualsOld.some((w) => same(v, w)));

  const oldText = textOf(old.blocks, ['plain-explanation', 'trap']);
  const newText = textOf(neu.blocks, ['plain-explanation', 'trap', 'tip']);
  const newNorm = norm(newText);
  const lostMaths = [...new Set(maths(oldText))].filter((m) => !newNorm.includes(m));
  const oldSentences = sentences(oldText);
  const newSentences = sentences(newText);
  const changedOld = oldSentences.filter((s) => !newNorm.includes(s));
  const oldNorm = norm(oldText);
  const changedNew = newSentences.filter((s) => !oldNorm.includes(s));

  const sections = nodeSections(neu.blocks, neu.title).filter((s) => s.kind === 'learn');
  sections.forEach((s, i) => {
    const kp = s.blocks.filter((b) => b.type === 'key-points').length;
    if (kp !== 1) problems.push(`learn-${i + 1} "${s.title}" has ${kp} Key points boxes`);
  });
  const notes: string[] = [];
  for (const b of neu.blocks) {
    if (b.type !== 'plain-explanation' && b.type !== 'trap') continue;
    const paragraphs = b.text.split(/\n\s*\n/).length;
    if (paragraphs > 3 && !/^###/m.test(b.text)) {
      (b.type === 'trap' ? notes : problems).push(`${b.type} with ${paragraphs} paragraphs and no subheading`);
    }
  }

  const draftRaw = readFileSync(draftPath, 'utf8');
  if (draftRaw.includes('—')) problems.push('em dash in the draft');
  for (const phrase of BANNED) if (draftRaw.toLowerCase().includes(phrase)) problems.push(`banned phrase "${phrase}"`);
  for (const v of added) {
    if (v.type !== 'visual') continue;
    const problem = visualParamProblem(v.kind, v.params);
    if (problem) problems.push(`new visual: ${problem}`);
    for (const text of severalVarParamProblems(v.kind, v.params)) problems.push(`new visual: ${text}`);
  }

  const counts = (bs: Block[], t: string) => bs.filter((b) => b.type === t).length;
  console.log(
    `sections ${sections.length} | tips ${counts(neu.blocks, 'tip')} | traps ${counts(old.blocks, 'trap')} -> ${counts(neu.blocks, 'trap')} | subheadings ${(newText.match(/^###/gm) ?? []).length} | visuals added ${added.length}`,
  );
  for (const p of problems) console.log(`PROBLEM ${p}`);
  for (const n of notes) console.log(`NOTE ${n}`);
  for (const m of lostMaths) console.log(`LOST MATH ${m}`);
  if (changedOld.length) console.log(`-- old sentences not kept verbatim (${changedOld.length}):`);
  for (const s of changedOld) console.log(`  - ${s}`);
  if (changedNew.length) console.log(`++ new or reworded sentences (${changedNew.length}):`);
  for (const s of changedNew) console.log(`  + ${s}`);
  for (const b of neu.blocks.filter((b) => b.type === 'tip')) if (!oldNorm.includes(norm(b.text))) console.log(`TIP ${norm(b.text)}`);
  sections.forEach((s, i) => {
    const kp = s.blocks.find((b) => b.type === 'key-points');
    if (kp && 'text' in kp) console.log(`KEY POINTS learn-${i + 1} "${s.title}":\n${kp.text.replace(/^/gm, '    ')}`);
  });
  for (const v of added) console.log(`NEW VISUAL ${JSON.stringify(v)}`);
}
