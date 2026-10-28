// Pins the derived id of every concept question that has no `id:` by writing it into the content file (ticket 41 prerequisite).
// Usage: npx tsx scripts/pin-question-ids.ts            (inserts `id: <nodeId>.q-<hash>` as the first line of each block without one)
//        npx tsx scripts/pin-question-ids.ts --verify   (loads the bundle and checks every effective id equals the id derived from the files at HEAD)
// Hidden nodes are skipped. Only text is inserted; line endings and everything else stay byte-identical. Re-running does nothing.
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import { checkContentBundle } from '../src/content/bundle.ts';
import { conceptQuestionId } from '../src/content/questionId.ts';

const root = path.resolve(import.meta.dirname, '..');
const SKIP = new Set(['visuals-stand-in', 'visuals-one-variable-stand-in', 'l6-hessian-test-sample', 'outside-current-course']);
// Same patterns as src/content/bundle.ts.
const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const BLOCK_OPEN = /^:::\s*([a-z-]+)\s*$/;
const BLOCK_CLOSE = /^:::\s*$/;

type Found = { openIndex: number; id?: string; question: string };

/** The concept-question blocks of a node file, parsed the way the bundle parses them. */
function conceptQuestions(raw: string): { nodeId: string; lines: string[]; found: Found[] } {
  const match = FRONT_MATTER.exec(raw);
  if (!match) throw new Error('no front matter');
  const nodeId = String(parseYaml(match[1]).id);
  const prefix = match[0].split('\n').length - 1;
  const lines = raw.split('\n');
  const found: Found[] = [];
  let open: { type: string; index: number; content: string[] } | undefined;
  for (let i = prefix; i < lines.length; i += 1) {
    const text = lines[i].replace(/\r$/, '');
    if (open) {
      if (BLOCK_CLOSE.test(text)) {
        if (open.type === 'concept-question') {
          const data = (parseYaml(open.content.join('\n')) ?? {}) as { id?: string; question?: string };
          found.push({ openIndex: open.index, id: data.id, question: String(data.question) });
        }
        open = undefined;
      } else open.content.push(text);
      continue;
    }
    const opening = BLOCK_OPEN.exec(text);
    if (opening) open = { type: opening[1], index: i, content: [] };
  }
  return { nodeId, lines, found };
}

function nodeFiles(): string[] {
  return readdirSync(path.join(root, 'content/nodes'), { recursive: true, encoding: 'utf8' })
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.join("content/nodes", f).split(path.sep).join("/"))
    .sort();
}

function pin() {
  let pinned = 0;
  let files = 0;
  for (const file of nodeFiles()) {
    const raw = readFileSync(path.join(root, file), 'utf8');
    const { nodeId, lines, found } = conceptQuestions(raw);
    if (SKIP.has(nodeId)) continue;
    const todo = found.filter((f) => f.id === undefined);
    if (todo.length === 0) continue;
    const eol = raw.includes('\r\n') ? '\r' : '';
    for (const f of [...todo].reverse()) lines.splice(f.openIndex + 1, 0, `id: ${conceptQuestionId(nodeId, f.question)}${eol}`);
    writeFileSync(path.join(root, file), lines.join('\n'));
    pinned += todo.length;
    files += 1;
  }
  console.log(`Pinned ${pinned} concept question id(s) in ${files} file(s).`);
}

async function verify() {
  const before = new Map<string, string[]>();
  for (const file of nodeFiles()) {
    let old: string;
    try {
      old = execFileSync('git', ['show', `HEAD:${file}`], { encoding: 'utf8', cwd: root, stdio: ['ignore', 'pipe', 'ignore'] });
    } catch {
      continue;
    }
    const { nodeId, found } = conceptQuestions(old);
    before.set(nodeId, found.map((f) => f.id ?? conceptQuestionId(nodeId, f.question)));
  }
  const report = await checkContentBundle(path.join(root, 'content'), { uiDir: path.join(root, 'src') });
  const nodes = [...report.bundle.lectures.flatMap((l) => l.nodes), ...report.bundle.hiddenNodes];
  let checked = 0;
  let bad = 0;
  for (const node of nodes) {
    const now = node.blocks.flatMap((b) => (b.type === 'concept-question' ? [b.id] : []));
    const was = before.get(node.id);
    if (!was) continue;
    if (JSON.stringify(now) !== JSON.stringify(was)) {
      bad += 1;
      console.log(`MISMATCH ${node.id}\n  before ${JSON.stringify(was)}\n  now    ${JSON.stringify(now)}`);
    }
    checked += now.length;
  }
  console.log(`Verified ${checked} concept question id(s) in ${nodes.length} node(s); ${bad} node(s) differ.`);
  if (bad > 0) process.exit(1);
}

if (process.argv.includes('--verify')) await verify();
else pin();
