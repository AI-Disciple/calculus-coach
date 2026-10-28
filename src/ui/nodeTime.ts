import type { Block } from '../content/schema.ts';
import type { NodeSection } from './nodeSections.ts';

/**
 * The time estimate shown on a node page. It covers the way through the Learn sections, not the Practise
 * exercises, which are extra work a student picks up as wanted. One rule:
 *
 * - Reading: the words of the blocks in the Learn sections (statements, plain versions, examples, traps, tips
 *   and Key points) at 110 words per minute. Each formula counts as one word. Going deeper notes are optional
 *   and do not count.
 * - Each concept question in a "Your turn" takes 1 minute and each exercise there takes 5 minutes.
 * - The total is rounded to the nearest 5 minutes, with 5 minutes as the least.
 */

export const READING_WORDS_PER_MINUTE = 110;
export const MINUTES_PER_QUESTION = 1;
export const MINUTES_PER_EXERCISE = 5;

const MATH = /\\\((?:.|\n)*?\\\)|\\\[(?:.|\n)*?\\\]|\$\$(?:.|\n)*?\$\$|\$[^$\n]+\$/g;

export function wordCount(text: string): number {
  const words = text.replace(MATH, ' formula ').split(/\s+/).filter((word) => /[\p{L}\p{N}]/u.test(word));
  return words.length;
}

function readingWords(block: Block): number {
  switch (block.type) {
    case 'formal-statement':
      return wordCount(`${block.title ?? ''} ${block.text}`);
    case 'plain-explanation':
    case 'trap':
    case 'tip':
    case 'key-points':
      return wordCount(block.text);
    case 'worked-example':
      return wordCount(`${block.title ?? ''} ${block.problem} ${block.solution}`);
    case 'guided-example':
      return wordCount(`${block.title ?? ''} ${block.problem} ${block.steps.join(' ')}`);
    default:
      return 0;
  }
}

/** How many exercises the node holds in all, whatever their tier. */
export function exerciseCount(blocks: Block[]): number {
  return blocks.filter((block) => block.type === 'exercise').length;
}

export function estimatedMinutes(sections: NodeSection[]): number {
  let minutes = 0;
  for (const section of sections) {
    if (section.kind !== 'learn') continue;
    minutes += section.blocks.reduce((sum, block) => sum + readingWords(block), 0) / READING_WORDS_PER_MINUTE;
    for (const block of section.yourTurn) {
      if (block.type === 'concept-question') minutes += MINUTES_PER_QUESTION;
      if (block.type === 'exercise') minutes += MINUTES_PER_EXERCISE;
    }
  }
  return Math.max(5, Math.round(minutes / 5) * 5);
}
