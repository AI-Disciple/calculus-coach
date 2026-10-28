// Checks a ticket 41 layout rewrite of a node file against the committed version: only the layout of the text may change.
// Usage: npx tsx scripts/check-layout-rewrite.ts [--base <git-rev>] <draft.md>...  (the original is the same file name under content/nodes at <git-rev>, default HEAD)
// A draft is a full copy of a node file. Structure (front matter, block order and types, ids, options, verification, every non-text field) must be identical, and no
// em dash, banned phrase, control character or unbalanced math delimiter may appear: each failure prints as PROBLEM and the exit code is 1. Every markdown text field
// that changed then prints a MATH diff (LaTeX tokens, ignoring spacing, & and \\ , aligned environments, \quad-style spaces) and a WORDS diff (lowercased prose
// words without markdown markers and punctuation). Removed math (MATH-) is the important signal; nothing is filtered further, the reviewer reads every line.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

const BANNED = (parseYaml(readFileSync('content/style/banned-phrases.yaml', 'utf8')) as string[]).map((p) => p.toLowerCase());
const FRONT = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const MAX_CELLS = 2e7;
const LINE_CAP = 200;

type Raw = Record<string, any>;
type Parsed = { front: string; hidden: boolean; blocks: Raw[] };
/** A markdown text field: where it is, and its text. */
type Field = { name: string; text: string };

function parse(raw: string, label: string, problems: string[]): Parsed {
  const match = FRONT.exec(raw);
  if (!match) throw new Error(`${label}: no front matter`);
  const blocks: Raw[] = [];
  let open: { type: string; lines: string[] } | undefined;
  for (const text of raw.slice(match[0].length).split(/\r?\n/)) {
    if (open) {
      if (/^:::\s*$/.test(text)) {
        try {
          blocks.push({ ...(parseYaml(open.lines.join('\n')) ?? {}), type: open.type });
        } catch (error) {
          problems.push(`${label}: invalid YAML in ${open.type} block: ${(error as Error).message.split('\n')[0]}`);
        }
        open = undefined;
      } else open.lines.push(text);
      continue;
    }
    const opening = /^:::\s*([a-z-]+)\s*$/.exec(text);
    if (opening) open = { type: opening[1], lines: [] };
    else if (text.trim() !== '') problems.push(`${label}: text outside a block: ${text.slice(0, 60)}`);
  }
  if (open) problems.push(`${label}: unclosed ${open.type}`);
  const front = match[1].replace(/\r\n/g, '\n');
  return { front, hidden: parseYaml(front)?.hidden === true, blocks };
}

const str = (v: unknown) => (typeof v === 'string' ? v : '');
const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);

/** The markdown text fields of a block. */
function fieldsOf(b: Raw): Field[] {
  const out: Field[] = [];
  const add = (name: string, v: unknown) => out.push({ name, text: str(v) });
  switch (b.type) {
    case 'formal-statement':
    case 'plain-explanation':
    case 'trap':
    case 'tip':
    case 'key-points':
    case 'going-deeper':
    case 'sheet-item':
      add('text', b.text);
      break;
    case 'worked-example':
      add('problem', b.problem);
      add('solution', b.solution);
      break;
    case 'guided-example':
      add('problem', b.problem);
      arr(b.steps).forEach((s, i) => add(`steps[${i + 1}]`, s));
      break;
    case 'concept-question':
      add('question', b.question);
      arr(b.options).forEach((o, i) => add(`options[${i + 1}].text`, (o as Raw)?.text));
      add('explanation', b.explanation);
      break;
    case 'exercise':
      add('statement', b.statement);
      add('solution', b.solution);
      arr(b.steps).forEach((s, i) => add(`steps[${i + 1}]`, s));
      break;
  }
  return out;
}

/** The block with its text fields blanked, so a comparison sees only the structure. */
function structure(b: Raw): unknown {
  const copy = JSON.parse(JSON.stringify(b)) as Raw;
  for (const key of ['text', 'problem', 'solution', 'question', 'explanation', 'statement']) if (typeof copy[key] === 'string') copy[key] = '';
  if (copy.type === 'guided-example' || copy.type === 'exercise') {
    if (Array.isArray(copy.steps)) copy.steps = copy.steps.map((s: unknown) => (typeof s === 'string' ? '' : s));
  }
  if (copy.type === 'concept-question' && Array.isArray(copy.options)) {
    copy.options = copy.options.map((o: Raw) => (o && typeof o === 'object' ? { ...o, text: '' } : o));
  }
  return sortKeys(copy);
}

function sortKeys(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(sortKeys);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b)).map(([k, x]) => [k, sortKeys(x)]));
  return v;
}

function label(b: Raw, index: number): string {
  const title = typeof b.title === 'string' && b.title ? ` "${b.title}"` : '';
  return `[block ${index + 1} ${b.type}${title}]`;
}

// ---- math and words ----

const MATH = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;
const TEXT_CMD = /\\(?:text|mathrm|textrm)\{([^{}]*)\}/g;
const LAYOUT_ENV = /\\(?:begin|end)\{(?:aligned|align|gathered|split)\*?\}/g;
const LAYOUT_TOKENS = new Set(['&', '\\\\', '\\qquad', '\\quad', '\\,', '\\;', '\\!', '\\:', '\\ ', '\\displaystyle', '\\notag', '\\nonumber']);

function tokenize(latex: string): string[] {
  const tokens = latex.replace(LAYOUT_ENV, ' ').match(/\\[a-zA-Z]+|\\.|\S/g) ?? [];
  const kept = tokens.filter((t) => !LAYOUT_TOKENS.has(t));
  while (kept.length > 0 && (kept[kept.length - 1] === ',' || kept[kept.length - 1] === '.')) kept.pop();
  return kept;
}

const wordsOf = (prose: string) =>
  prose
    .toLowerCase()
    .replace(/\*\*/g, ' ')
    .replace(/^[ \t]*(?:[-*]|\d+[.)])[ \t]+/gm, ' ')
    .replace(/^[ \t]*#+[ \t]*/gm, ' ')
    .replace(/['’]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 0);

/** Splits a field into the math tokens (in order) and the prose words, with \text{..} words from inside math placed in reading order. */
function analyse(text: string): { math: string[]; words: string[] } {
  const math: string[] = [];
  const words: string[] = [];
  let last = 0;
  const masked = text.replace(/\\\\/g, '\u0001\u0001');
  const restore = (s: string) => s.replace(/\u0001\u0001/g, '\\\\');
  for (const m of masked.matchAll(MATH)) {
    words.push(...wordsOf(restore(masked.slice(last, m.index))));
    const inner = restore(m[1] ?? m[2] ?? '');
    for (const t of inner.matchAll(TEXT_CMD)) words.push(...wordsOf(t[1]));
    math.push(...tokenize(inner.replace(TEXT_CMD, ' ')));
    last = (m.index ?? 0) + m[0].length;
  }
  words.push(...wordsOf(restore(masked.slice(last))));
  return { math, words };
}

type Run = { removed: string[]; added: string[] };

/** Longest common subsequence diff; returns the stretches that differ. */
function diff(a: string[], b: string[]): Run[] {
  let start = 0;
  while (start < a.length && start < b.length && a[start] === b[start]) start += 1;
  let endA = a.length;
  let endB = b.length;
  while (endA > start && endB > start && a[endA - 1] === b[endB - 1]) {
    endA -= 1;
    endB -= 1;
  }
  const x = a.slice(start, endA);
  const y = b.slice(start, endB);
  if (x.length === 0 && y.length === 0) return [];
  if (x.length * y.length > MAX_CELLS) return [{ removed: ['(too large to align, whole stretch)', ...x], added: y }];
  const n = x.length;
  const m = y.length;
  const w = m + 1;
  const table = n * m < 4e6 ? new Uint16Array((n + 1) * w) : new Int32Array((n + 1) * w);
  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = m - 1; j >= 0; j -= 1) {
      table[i * w + j] = x[i] === y[j] ? table[(i + 1) * w + j + 1] + 1 : Math.max(table[(i + 1) * w + j], table[i * w + j + 1]);
    }
  }
  const runs: Run[] = [];
  let cur: Run | undefined;
  const flush = () => {
    if (cur) runs.push(cur);
    cur = undefined;
  };
  let i = 0;
  let j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && x[i] === y[j]) {
      flush();
      i += 1;
      j += 1;
    } else if (j < m && (i === n || table[i * w + j + 1] >= table[(i + 1) * w + j])) {
      (cur ??= { removed: [], added: [] }).added.push(y[j]);
      j += 1;
    } else {
      (cur ??= { removed: [], added: [] }).removed.push(x[i]);
      i += 1;
    }
  }
  flush();
  return runs;
}

const cap = (s: string) => (s.length > LINE_CAP ? `${s.slice(0, LINE_CAP - 3)}...` : s);
const joinLatex = (tokens: string[]) =>
  tokens.reduce((s, t, i) => (i > 0 && /^\\[a-zA-Z]+$/.test(tokens[i - 1]) && /^[a-zA-Z0-9]/.test(t) ? `${s} ${t}` : s + t), '');

// ---- problems inside one field ----

function fieldProblems(text: string): string[] {
  const out: string[] = [];
  if (text.includes('—')) out.push('em dash');
  const lower = text.toLowerCase();
  for (const phrase of BANNED) if (lower.includes(phrase)) out.push(`banned phrase "${phrase}"`);
  const flat = text.replace(/\\\\/g, '  ');
  const count = (re: RegExp) => (flat.match(re) ?? []).length;
  if (count(/\\\(/g) !== count(/\\\)/g)) out.push('unbalanced \\( \\)');
  if (count(/\\\[/g) !== count(/\\\]/g)) out.push('unbalanced \\[ \\]');
  const begins = new Map<string, number>();
  for (const m of flat.matchAll(/\\(begin|end)\{([^}]*)\}/g)) begins.set(m[2], (begins.get(m[2]) ?? 0) + (m[1] === 'begin' ? 1 : -1));
  for (const [env, n] of begins) if (n !== 0) out.push(`unbalanced \\begin/\\end{${env}}`);
  // A single backslash at a line end is a control space, not a line break.
  if (/(^|[^\\])\\[ \t]*\r?$/m.test(text.replace(/\\\\/g, ''))) out.push('line ends in a single backslash (use \\\\ to break a line)');
  for (const m of text.matchAll(/\\begin\{(aligned|cases|gathered|array)\}(?:\{[^}]*\})?([\s\S]*?)\\end\{\1\}/g)) {
    const rows = m[2].split(/\r?\n/).map((r) => r.trim()).filter((r) => r !== '');
    rows.slice(0, -1).forEach((r) => {
      if (!r.endsWith('\\\\')) out.push(`row in ${m[1]} without \\\\ at its end: ${r.slice(0, 50)}`);
    });
  }
  return out;
}

// ---- main ----

const args = process.argv.slice(2);
let base = 'HEAD';
const baseAt = args.indexOf('--base');
if (baseAt >= 0) {
  base = args[baseAt + 1];
  args.splice(baseAt, 2);
}
const tracked = execFileSync('git', ['ls-files', 'content/nodes'], { encoding: 'utf8' }).split(/\r?\n/).filter(Boolean);
let anyProblem = false;

for (const draftPath of args) {
  const name = path.basename(draftPath);
  const repoPath = tracked.find((f) => path.basename(f) === name);
  if (!repoPath) throw new Error(`${name}: no such node file under content/nodes`);
  const problems: string[] = [];
  const oldRaw = execFileSync('git', ['show', `${base}:${repoPath}`], { encoding: 'utf8', maxBuffer: 1 << 26 });
  const newRaw = readFileSync(draftPath, 'utf8');
  const old = parse(oldRaw, 'original', problems);
  const neu = parse(newRaw, 'draft', problems);
  const lines: string[] = [];
  let changedFields = 0;
  let mathRemoved = 0;
  let mathAdded = 0;
  let wordsRemoved = 0;
  let wordsAdded = 0;

  if (old.hidden || neu.hidden) {
    if (oldRaw !== newRaw) problems.push('hidden node changed');
  } else {
    if (old.front !== neu.front) problems.push('front matter differs');
    if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(newRaw)) problems.push('control character in the draft');
    const oldTypes = old.blocks.map((b) => b.type);
    const newTypes = neu.blocks.map((b) => b.type);
    if (oldTypes.length !== newTypes.length) problems.push(`block count ${oldTypes.length} -> ${newTypes.length}`);
    const pairs = Math.min(old.blocks.length, neu.blocks.length);
    for (let i = 0; i < pairs; i += 1) {
      const a = old.blocks[i];
      const b = neu.blocks[i];
      if (a.type !== b.type) {
        problems.push(`block ${i + 1} type ${a.type} -> ${b.type}`);
        continue;
      }
      const tag = label(b, i);
      if (JSON.stringify(structure(a)) !== JSON.stringify(structure(b))) {
        const sa = structure(a) as Raw;
        const sb = structure(b) as Raw;
        const keys = [...new Set([...Object.keys(sa), ...Object.keys(sb)])].filter((k) => JSON.stringify(sa[k]) !== JSON.stringify(sb[k]));
        problems.push(`${tag} structured field changed: ${keys.join(', ')}`);
      }
      if (b.type === 'concept-question' && !b.id) problems.push(`${tag} concept question without id`);
      const oldFields = fieldsOf(a);
      const newFields = fieldsOf(b);
      newFields.forEach((field, k) => {
        for (const p of fieldProblems(field.text)) problems.push(`${tag} ${field.name}: ${p}`);
        const before = oldFields[k];
        if (!before) return;
        const x = analyse(before.text);
        const y = analyse(field.text);
        const mathRuns = diff(x.math, y.math);
        const wordRuns = diff(x.words, y.words);
        if (mathRuns.length === 0 && wordRuns.length === 0) return;
        changedFields += 1;
        lines.push(`${tag} ${field.name}`);
        for (const run of mathRuns) {
          if (run.removed.length) lines.push(cap(`  MATH- ${joinLatex(run.removed)}`));
          if (run.added.length) lines.push(cap(`  MATH+ ${joinLatex(run.added)}`));
          mathRemoved += run.removed.length;
          mathAdded += run.added.length;
        }
        for (const run of wordRuns) {
          if (run.removed.length) lines.push(cap(`  WORDS- ${run.removed.join(' ')}`));
          if (run.added.length) lines.push(cap(`  WORDS+ ${run.added.join(' ')}`));
          wordsRemoved += run.removed.length;
          wordsAdded += run.added.length;
        }
      });
    }
  }

  if (problems.length > 0) anyProblem = true;
  console.log(`\n=== ${name} (against ${base})`);
  for (const p of problems) console.log(`PROBLEM ${p}`);
  for (const l of lines) console.log(l);
  const node = name.replace(/\.md$/, '');
  console.log(
    `${node}: fields changed ${changedFields} | math- tokens ${mathRemoved} | math+ tokens ${mathAdded} | words- ${wordsRemoved} | words+ ${wordsAdded} | problems ${problems.length}`,
  );
}

if (anyProblem) process.exit(1);
