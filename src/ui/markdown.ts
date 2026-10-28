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
md.renderer.rules.math = (tokens, index) =>
  katex.renderToString(tokens[index].content, {
    displayMode: Boolean(tokens[index].meta?.display),
    throwOnError: false,
  });
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
