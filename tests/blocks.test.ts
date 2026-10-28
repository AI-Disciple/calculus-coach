import { describe, expect, it } from 'vitest';
import { block } from '../src/content/schema.ts';
import { renderMarkdown } from '../src/ui/markdown.ts';

describe('tip and Key points blocks', () => {
  it('accepts a text field', () => {
    expect(block.safeParse({ type: 'tip', text: 'Check the sign first.' }).success).toBe(true);
    expect(block.safeParse({ type: 'key-points', text: '- One.\n- Two.' }).success).toBe(true);
  });

  it('rejects an empty text and unknown fields', () => {
    expect(block.safeParse({ type: 'tip', text: '  ' }).success).toBe(false);
    expect(block.safeParse({ type: 'key-points' }).success).toBe(false);
    expect(block.safeParse({ type: 'key-points', text: 'One.', title: 'Summary' }).success).toBe(false);
  });
});

describe('subheadings in block text', () => {
  it('renders a ### heading as h4, below the block and section titles', () => {
    const html = renderMarkdown('First chunk.\n\n### Why the condition matters\n\nNext chunk.');
    expect(html).toContain('<h4>Why the condition matters</h4>');
    expect(html).not.toMatch(/<h[1-3]/);
  });

  it('renders every heading level as h4', () => {
    expect(renderMarkdown('# One')).toBe('<h4>One</h4>\n');
    expect(renderMarkdown('## Two')).toBe('<h4>Two</h4>\n');
  });

  it('keeps the heading levels of a whole document', () => {
    expect(renderMarkdown('# Guide\n\n## Step', { document: true })).toBe('<h1>Guide</h1>\n<h2>Step</h2>\n');
  });
});
