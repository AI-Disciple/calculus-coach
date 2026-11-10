import katex from 'katex';
import MarkdownIt, { type StateInline } from 'markdown-it';

const DELIMITERS: Record<string, { close: string; display: boolean }> = {
  '(': { close: '\\)', display: false },
  '[': { close: '\\]', display: true },
};

/** Reads \( inline \) and \[ display \] maths before markdown-it treats the backslash as an escape. */
function mathRule(state: StateInline, silent: boolean): boolean {
  if (state.src.charCodeAt(state.pos) !== 0x5c) return false;
  const delimiter = DELIMITERS[state.src[state.pos + 1]];
  if (!delimiter) return false;
  const start = state.pos + 2;
  const end = state.src.indexOf(delimiter.close, start);
  if (end < 0 || end + delimiter.close.length > state.posMax) return false;
  if (!silent) {
    const token = state.push('math', 'math', 0);
    token.content = state.src.slice(start, end).trim();
    token.meta = { display: delimiter.display };
  }
  state.pos = end + delimiter.close.length;
  return true;
}

const md = new MarkdownIt({ html: false, linkify: true, typographer: false });
md.inline.ruler.before('escape', 'math', mathRule);
const ALIGNED = /^\\begin\{aligned\}([\s\S]*)\\end\{aligned\}$/;

/** A row that continues the row above: after the `&` it starts with an indent (`\quad`) or a binary operator. */
const CONTINUATION = /^(\\q?quad(?![a-zA-Z])|[+-]|\\(?:pm|mp|cdot|times)(?![a-zA-Z]))/;

/** The text of a continuation row without its `&` and indent. A `\text` note keeps a gap before it. */
function continuationText(row: string): string {
  const rest = row.replace(/^&\s*/, '');
  const stripped = rest.replace(/^(?:\\q?quad(?![a-zA-Z])\s*)+/, '');
  return stripped.startsWith('\\text') && stripped !== rest ? `\\quad ${stripped}` : stripped;
}

/**
 * Hard-wrapped aligned rows laid out as wide as possible, or null when nothing is wrapped.
 *
 * - First row without `&`: the whole block is one expression, returned as one line.
 * - First row with `&`: rows that continue the row above (`&\quad + ...`, `&+ ...`) are merged into it, and the rows
 *   that start a new step (`&= ...`) stay rows. A derivation without continuation rows is never touched.
 */
export function flattenWrappedAligned(math: string): string | null {
  const body = ALIGNED.exec(math)?.[1];
  if (body === undefined || body.includes('\\begin') || body.includes('\\\\[')) return null;
  const rows = body.split('\\\\').map((row) => row.trim()).filter(Boolean);
  if (rows.length < 2) return null;
  const ampersands = (row: string) => (row.match(/&/g) ?? []).length;
  if (!rows[0].includes('&')) {
    if (rows.slice(1).some((row) => ampersands(row) !== 1)) return null;
    return [rows[0], ...rows.slice(1).map((row) => (CONTINUATION.test(row.replace(/^&\s*/, '')) ? continuationText(row) : row.replace('&', ' ').trim()))].join(' ');
  }
  const merged: string[] = [];
  for (const row of rows) {
    const continues = merged.length > 0 && row.startsWith('&') && ampersands(row) === 1 && CONTINUATION.test(row.slice(1).trim());
    if (continues) merged[merged.length - 1] += ` ${continuationText(row)}`;
    else merged.push(row);
  }
  if (merged.length === rows.length) return null;
  return `\\begin{aligned}${merged.join(' \\\\ ')}\\end{aligned}`;
}

md.renderer.rules.math = (tokens, index) => {
  const display = Boolean(tokens[index].meta?.display);
  const content: string = tokens[index].content;
  const render = (math: string) => katex.renderToString(math, { displayMode: display, throwOnError: false });
  const flat = display ? flattenWrappedAligned(content) : null;
  if (flat === null) return render(content);
  // Both layouts are in the page. Prose shows the one-line layout when it fits, the rows otherwise.
  return `<div class="formula-reflow" data-layout="flat">${render(flat)}${render(content)}</div>`;
};
// A heading inside block text is a subheading. It renders as h4, below the section title and block headings.
// A whole document, such as the adding-content guide, keeps its heading levels.
md.core.ruler.push('subheadings', (state) => {
  if (state.env?.document) return;
  for (const token of state.tokens) {
    if (token.type === 'heading_open' || token.type === 'heading_close') token.tag = 'h4';
  }
});

export function renderMarkdown(text: string, { document = false } = {}): string {
  return md.render(text, { document });
}

/** Renders without paragraph tags, for text that sits inside a button or a label. */
export function renderInlineMarkdown(text: string): string {
  return md.renderInline(text);
}
