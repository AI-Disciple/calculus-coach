import { courseNodes } from '../content/nodes.ts';
import type { ContentBundle } from '../content/schema.ts';

export type SearchHit = {
  key: string;
  kind: 'Topic' | 'Course statement' | 'Sheet item' | 'Exercise';
  label: string;
  href: string;
  lecture: number;
  nodeTitle: string;
};

/** Matches a node title, a formal statement, a sheet item, or an exercise statement or number. */
export function searchCourse(bundle: ContentBundle, query: string): SearchHit[] {
  const q = normalize(query);
  if (q.length < 2) return [];
  const hits: SearchHit[] = [];
  for (const { lecture, node } of courseNodes(bundle)) {
    if (includes(node.title, q)) {
      hits.push({
        key: `node:${node.id}`,
        kind: 'Topic',
        label: node.title,
        href: `/node/${node.id}`,
        lecture: lecture.number,
        nodeTitle: node.title,
      });
    }
    node.blocks.forEach((block, index) => {
      if (block.type === 'formal-statement' && (includes(block.title, q) || includes(block.text, q))) {
        hits.push({
          key: `statement:${node.id}:${index}`,
          kind: 'Course statement',
          label: block.title || oneLine(block.text),
          href: `/node/${node.id}`,
          lecture: lecture.number,
          nodeTitle: node.title,
        });
      }
      if (block.type === 'sheet-item' && includes(block.text, q)) {
        hits.push({
          key: `sheet:${block.id}`,
          kind: 'Sheet item',
          label: oneLine(block.text),
          href: `/node/${node.id}#sheet-${block.id}`,
          lecture: lecture.number,
          nodeTitle: node.title,
        });
      }
      if (block.type === 'exercise' && (includes(block.number, q) || includes(block.statement, q))) {
        hits.push({
          key: `exercise:${block.id}`,
          kind: 'Exercise',
          label: block.number ? `Exercise ${block.number}` : oneLine(block.statement),
          href: `/node/${node.id}#exercise-${block.id}`,
          lecture: lecture.number,
          nodeTitle: node.title,
        });
      }
    });
  }
  return hits;
}

function includes(text: string | undefined, query: string): boolean {
  return text !== undefined && normalize(text).includes(query);
}

function normalize(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, ' ');
}

function oneLine(text: string): string {
  const line = text.trim().split('\n')[0]?.replace(/\s+/g, ' ') ?? '';
  if (line.length <= 140) return line;
  return `${line.slice(0, 137)}...`;
}
