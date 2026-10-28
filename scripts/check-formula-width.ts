import { spawn, spawnSync, type ChildProcess } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { chromium, type Page } from '@playwright/test';
import { checkContentBundle } from '../src/content/bundle.ts';
import type { Block } from '../src/content/schema.ts';
import { renderMarkdown } from '../src/ui/markdown.ts';

/**
 * Lists the displayed formulas that Prose would shrink below a threshold (default 85%), at the topic column width
 * (832 px) and at a 375 px phone. It measures the real inner prose width of each block kind on the running app,
 * renders every formula with the app's own KaTeX settings and CSS, and applies the same fit as src/ui/prose.tsx.
 *
 *   npm run formulas -- [--threshold 0.85] [--node <id>] [--lecture N] [--json <file>] [--widths] [--strict]
 *                       [--port 5241]
 */

const SKIPPED_NODES = new Set(['visuals-stand-in', 'visuals-one-variable-stand-in', 'l6-hessian-test-sample', 'outside-current-course']);
const VIEWPORTS = [
  { label: '832', width: 1440, height: 900 },
  { label: '375', width: 375, height: 800 },
] as const;
type ViewLabel = (typeof VIEWPORTS)[number]['label'];

type Options = { threshold: number; node?: string; lecture?: number; json?: string; widths: boolean; strict: boolean; port: number };

function parseArgs(argv: string[]): Options {
  const options: Options = { threshold: 0.85, widths: false, strict: false, port: 5241 };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const value = () => argv[++i];
    if (arg === '--threshold') options.threshold = Number(value());
    else if (arg === '--node') options.node = value();
    else if (arg === '--lecture') options.lecture = Number(value());
    else if (arg === '--json') options.json = value();
    else if (arg === '--port') options.port = Number(value());
    else if (arg === '--widths') options.widths = true;
    else if (arg === '--strict') options.strict = true;
    else throw new Error(`Unknown argument ${arg}`);
  }
  return options;
}

type Field = {
  lecture: number;
  node: string;
  index: number; // 1-based position in the node's blocks
  type: string;
  title: string;
  field: string;
  key: string; // which measured context it sits in
  html: string;
};

/** A formal statement followed directly by a plain explanation is shown as a pair (see NodePage groupBlocks). */
function pairedIndexes(blocks: Block[]): Set<number> {
  const paired = new Set<number>();
  for (let i = 0; i < blocks.length - 1; i++) {
    if (blocks[i].type === 'formal-statement' && blocks[i + 1].type === 'plain-explanation') {
      paired.add(i);
      paired.add(i + 1);
      i++;
    }
  }
  return paired;
}

function fieldsOf(lecture: number, node: string, blocks: Block[]): Field[] {
  const paired = pairedIndexes(blocks);
  const out: Field[] = [];
  blocks.forEach((b, i) => {
    const add = (field: string, text: string | undefined, context = field, title = '') => {
      if (!text || !/\\\[/.test(text)) return;
      const suffix = paired.has(i) ? '@pair' : '';
      out.push({ lecture, node, index: i + 1, type: b.type, title, field, key: `${b.type}:${context}${suffix}`, html: renderMarkdown(text) });
    };
    switch (b.type) {
      case 'formal-statement':
        add('text', b.text, 'text', b.title ?? '');
        break;
      case 'plain-explanation':
      case 'trap':
      case 'tip':
      case 'key-points':
        add('text', b.text);
        break;
      case 'going-deeper':
        add('text', b.text, 'text', b.title);
        break;
      case 'sheet-item':
        add('text', b.text, 'text', b.id);
        break;
      case 'worked-example':
        add('problem', b.problem, 'prose', b.title ?? '');
        add('solution', b.solution, 'prose', b.title ?? '');
        break;
      case 'guided-example':
        add('problem', b.problem, 'problem', b.title ?? '');
        b.steps.forEach((step, n) => add(`steps[${n + 1}]`, step, 'steps', b.title ?? ''));
        break;
      case 'concept-question':
        add('question', b.question, 'question', b.id ?? '');
        add('explanation', b.explanation, 'explanation', b.id ?? '');
        break;
      case 'exercise':
        add('statement', b.statement, 'statement', b.id);
        add('solution', b.solution, 'solution', b.id);
        add('discrepancy', b.discrepancy, 'discrepancy', b.id);
        break;
      case 'visual':
        add('caption', b.caption, 'caption', b.kind);
        break;
      default:
        break;
    }
  });
  return out;
}

// ---- Measuring the real inner prose width per context ----

/** Selectors of the `.prose` that Prose renders for each context, relative to the block section. */
const CONTEXTS: Record<string, string> = {
  'formal-statement:text': '.block-formal-statement > .prose',
  'plain-explanation:text': '.block-plain-explanation > .prose',
  'trap:text': '.block-trap > .prose',
  'tip:text': '.block-tip > .prose',
  'key-points:text': '.block-key-points > .prose',
  'sheet-item:text': '.block-sheet-item > .prose',
  'going-deeper:text': '.block-going-deeper details > .prose',
  'worked-example:prose': '.block-worked-example > .prose',
  'guided-example:problem': '.block-guided-example > .prose',
  'guided-example:steps': '.block-guided-example .steps li > .prose',
  'concept-question:question': '.block-concept-question > .prose',
  'concept-question:explanation': '.block-concept-question .explanation > .prose',
  'exercise:statement': '.block-exercise > .prose',
  'exercise:solution': '.block-exercise .solution > .prose',
  'exercise:discrepancy': '.block-exercise .discrepancy > .prose',
  'visual:caption': '.block-visual > .prose',
  'formal-statement:text@pair': '.statement-group > .block-formal-statement > .prose',
  'plain-explanation:text@pair': '.statement-group > .block-plain-explanation > .prose',
};
/** Used when a context never appears in the content: the closest context that does. */
const FALLBACKS: Record<string, string> = {
  'concept-question:explanation': 'concept-question:question',
  'exercise:discrepancy': 'exercise:solution',
  'visual:caption': 'plain-explanation:text',
  'sheet-item:text': 'plain-explanation:text',
  'formal-statement:text@pair': 'formal-statement:text',
  'plain-explanation:text@pair': 'plain-explanation:text',
};

type Measured = { width: number; fontSize: string };

async function measureOnPage(page: Page, found: Map<string, Measured>) {
  const result = await page.evaluate((contexts) => {
    const out: Record<string, { width: number; fontSize: string }> = {};
    // Reveal what starts hidden: guided steps, exercise solutions, going-deeper details. None of this saves anything.
    for (let n = 0; n < 40; n++) {
      const buttons = [...document.querySelectorAll<HTMLButtonElement>('button')].filter((b) => /^Show step \d+ of \d+$/.test(b.textContent?.trim() ?? ''));
      if (buttons.length === 0) break;
      buttons.forEach((b) => b.click());
    }
    document.querySelectorAll<HTMLButtonElement>('.exercise-actions button').forEach((b) => {
      if (b.getAttribute('aria-expanded') === 'false') b.click();
    });
    document.querySelectorAll<HTMLDetailsElement>('.block-going-deeper details').forEach((d) => (d.open = true));
    return new Promise<Record<string, { width: number; fontSize: string }>>((resolve) => {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          // Contexts that need markup the page only has after an answer: add it where the app would put it.
          const question = document.querySelector('.block-concept-question');
          if (question && !question.querySelector('.explanation')) {
            const probe = document.createElement('div');
            probe.className = 'explanation probe';
            probe.innerHTML = '<p class="sub-label">Explanation</p><div class="prose">x</div>';
            question.appendChild(probe);
          }
          const solution = document.querySelector('.block-exercise .solution');
          if (solution && !solution.querySelector('.discrepancy')) {
            const probe = document.createElement('div');
            probe.className = 'discrepancy probe';
            probe.innerHTML = '<p class="sub-label">Discrepancy</p><div class="prose">x</div>';
            solution.appendChild(probe);
          }
          for (const [key, selector] of Object.entries(contexts)) {
            const element = document.querySelector<HTMLElement>(selector);
            if (element && element.clientWidth > 0) out[key] = { width: element.clientWidth, fontSize: getComputedStyle(element).fontSize };
          }
          document.querySelectorAll('.probe').forEach((p) => p.remove());
          resolve(out);
        }),
      );
    });
  }, CONTEXTS);
  for (const [key, value] of Object.entries(result)) if (!found.has(key)) found.set(key, value);
}

async function measureWidths(page: Page, base: string, nodeIds: string[]): Promise<Map<string, Measured>> {
  const found = new Map<string, Measured>();
  const wanted = Object.keys(CONTEXTS);
  for (const id of nodeIds) {
    await page.goto(`${base}/node/${id}`, { waitUntil: 'networkidle' });
    const sectionLinks = await page.$$eval('.section-rail a', (links) => links.map((l) => l.getAttribute('href') ?? ''));
    const targets = sectionLinks.length > 0 ? sectionLinks : [''];
    for (const href of targets) {
      if (href) {
        await page.goto(`${base}${href}`, { waitUntil: 'networkidle' });
      }
      await measureOnPage(page, found);
    }
    if (wanted.every((k) => found.has(k))) break;
  }
  return found;
}

// ---- Rendering every formula at the measured widths ----

type FormulaResult = { index: number; latex: string; raw: number; scale: number };

async function fitAll(page: Page, fields: Field[], widths: Map<string, Measured>, fallbackNote: Set<string>): Promise<FormulaResult[][]> {
  const jobs = fields.map((f, i) => {
    let key = f.key;
    if (!widths.has(key) && FALLBACKS[key]) {
      fallbackNote.add(`${key} -> ${FALLBACKS[key]}`);
      key = FALLBACKS[key];
    }
    const m = widths.get(key) ?? widths.get('plain-explanation:text');
    if (!m) throw new Error(`No measured width for ${f.key}`);
    return { i, html: f.html, width: m.width, fontSize: m.fontSize };
  });
  return page.evaluate(async (list) => {
    await document.fonts.ready;
    const host = document.createElement('article');
    host.className = 'node';
    host.style.cssText = 'position:absolute;left:0;top:0;visibility:hidden;';
    document.body.appendChild(host);
    const out: { index: number; latex: string; raw: number; scale: number }[][] = [];
    for (const job of list) {
      const prose = document.createElement('div');
      prose.className = 'prose';
      prose.style.cssText = `width:${job.width}px;box-sizing:border-box;font-size:${job.fontSize};`;
      prose.innerHTML = job.html;
      host.appendChild(prose);
      const rows: { index: number; latex: string; raw: number; scale: number }[] = [];
      prose.querySelectorAll<HTMLElement>('.katex-display').forEach((display, n) => {
        // Same fit as Prose.
        display.style.fontSize = '';
        const overflow = display.scrollWidth / display.clientWidth;
        const scale = overflow > 1 ? Math.max(1 / overflow, 0.6) : 1; // 0.6: keep equal to SMALLEST_FORMULA in src/ui/prose.tsx
        const latex = display.querySelector('annotation[encoding="application/x-tex"]')?.textContent ?? '';
        rows.push({ index: n + 1, latex, raw: overflow > 1 ? 1 / overflow : 1, scale });
      });
      out.push(rows);
      prose.remove();
    }
    host.remove();
    return out;
  }, jobs);
}

// ---- Server ----

async function healthy(port: number): Promise<boolean> {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/health`);
    return response.ok;
  } catch {
    return false;
  }
}

async function startServer(port: number): Promise<ChildProcess | undefined> {
  if (await healthy(port)) return undefined;
  const child = spawn('npx tsx server/index.ts', {
    shell: true,
    cwd: path.resolve(import.meta.dirname, '..'),
    env: { ...process.env, PORT: String(port), NO_OPEN: '1' },
    stdio: 'ignore',
  });
  for (let i = 0; i < 120; i++) {
    if (await healthy(port)) return child;
    await new Promise((r) => setTimeout(r, 500));
  }
  stopServer(child);
  throw new Error(`The app server did not start on port ${port}`);
}

function stopServer(child: ChildProcess | undefined) {
  if (!child?.pid) return;
  if (process.platform === 'win32') spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' });
  else child.kill();
}

// ---- Main ----

type Row = {
  lecture: number;
  node: string;
  block: number;
  type: string;
  title: string;
  field: string;
  formula: number;
  scale832: number;
  scale375: number;
  latex: string;
};

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const started = Date.now();
  const root = path.resolve(import.meta.dirname, '..');
  const report = await checkContentBundle(path.join(root, 'content'), { verify: false });

  const fields: Field[] = [];
  const allNodeIds: string[] = [];
  for (const lecture of report.bundle.lectures) {
    for (const node of lecture.nodes) {
      if (SKIPPED_NODES.has(node.id)) continue;
      allNodeIds.push(node.id);
      if (options.node && node.id !== options.node) continue;
      if (options.lecture !== undefined && lecture.number !== options.lecture) continue;
      fields.push(...fieldsOf(lecture.number, node.id, node.blocks));
    }
  }

  const server = await startServer(options.port);
  const browser = await chromium.launch({ channel: process.platform === 'win32' ? 'msedge' : 'chromium' });
  const base = `http://127.0.0.1:${options.port}`;
  try {
    const perView = new Map<ViewLabel, FormulaResult[][]>();
    const notes: string[] = [];
    for (const view of VIEWPORTS) {
      const context = await browser.newContext({ viewport: { width: view.width, height: view.height } });
      const page = await context.newPage();
      // Sample nodes from every lecture: the first node of each lecture, then the rest, until every context was seen.
      const widths = await measureWidths(page, base, allNodeIds);
      const fallbackNote = new Set<string>();
      await page.goto(`${base}/node/${allNodeIds[0]}`, { waitUntil: 'networkidle' });
      perView.set(view.label, await fitAll(page, fields, widths, fallbackNote));
      {
        const parts = [...widths.entries()].map(([k, w]) => `${k}=${w.width}`);
        notes.push(`Inner prose widths at ${view.label} (font ${[...new Set([...widths.values()].map((w) => w.fontSize))].join(', ')}):`);
        notes.push(`  ${parts.join('  ')}`);
        const missing = Object.keys(CONTEXTS).filter((k) => !widths.has(k));
        if (missing.length > 0) notes.push(`  not found in the content, fallback used: ${missing.join(', ')}`);
      }
      await context.close();
    }
    if (options.widths) console.log(notes.join('\n') + '\n');

    const rows: Row[] = [];
    fields.forEach((f, i) => {
      const wide = perView.get('832')![i];
      const narrow = perView.get('375')![i];
      wide.forEach((formula, n) => {
        rows.push({
          lecture: f.lecture,
          node: f.node,
          block: f.index,
          type: f.type,
          title: f.title,
          field: f.field,
          formula: formula.index,
          scale832: formula.scale,
          scale375: narrow[n]?.scale ?? 1,
          latex: formula.latex,
        });
      });
    });

    const flagged = rows.filter((r) => r.scale832 < options.threshold || r.scale375 < options.threshold);
    const pct = (s: number) => `${Math.round(s * 100)}%`;
    for (const r of flagged) {
      const where = `${r.node} | block ${r.block} ${r.type}${r.title ? ` "${r.title}"` : ''} ${r.field}${r.formula > 1 ? ` #${r.formula}` : ''}`;
      const tex = r.latex.replace(/\s+/g, ' ').slice(0, 80);
      console.log(`${where} | ${pct(r.scale832)} | ${pct(r.scale375)} | ${tex}`);
    }

    console.log(`\nFormulas checked: ${rows.length}. Threshold ${pct(options.threshold)}. Below threshold per lecture (832 / 375 / either):`);
    const lectures = [...new Set(rows.map((r) => r.lecture))].sort((a, b) => a - b);
    for (const lecture of lectures) {
      const own = rows.filter((r) => r.lecture === lecture);
      const a = own.filter((r) => r.scale832 < options.threshold).length;
      const b = own.filter((r) => r.scale375 < options.threshold).length;
      const either = own.filter((r) => r.scale832 < options.threshold || r.scale375 < options.threshold).length;
      console.log(`  Lecture ${lecture}: ${a} / ${b} / ${either} of ${own.length}`);
    }
    const total832 = rows.filter((r) => r.scale832 < options.threshold).length;
    const total375 = rows.filter((r) => r.scale375 < options.threshold).length;
    console.log(`  Total: ${total832} at 832 px, ${total375} at 375 px, ${flagged.length} either, of ${rows.length}`);

    if (options.json) {
      await fs.mkdir(path.dirname(path.resolve(options.json)), { recursive: true });
      await fs.writeFile(path.resolve(options.json), JSON.stringify({ threshold: options.threshold, notes, rows }, null, 2));
      console.log(`Full list written to ${options.json}`);
    }
    console.log(`Done in ${((Date.now() - started) / 1000).toFixed(1)} s`);
    if (options.strict && flagged.length > 0) process.exitCode = 1;
  } finally {
    await browser.close();
    stopServer(server);
  }
}

await main();
