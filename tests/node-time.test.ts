import { describe, expect, it } from 'vitest';
import type { Block } from '../src/content/schema.ts';
import { nodeSections, type ContentBlock, type NodeSection } from '../src/ui/nodeSections.ts';
import { estimatedMinutes, exerciseCount, wordCount } from '../src/ui/nodeTime.ts';

const words = (count: number) => Array.from({ length: count }, () => 'word').join(' ');
const plain = (count: number): ContentBlock => ({ type: 'plain-explanation', text: words(count) });
const deeper = (count: number): ContentBlock => ({ type: 'going-deeper', title: 'Deeper', text: words(count) });
const question = (): ContentBlock => ({
  type: 'concept-question',
  question: 'Which?',
  options: [{ text: 'a', correct: true }, { text: 'b' }],
  explanation: 'Because.',
});
const exercise = (id: string, tier: 'basic' | 'standard' | 'exam' = 'basic'): ContentBlock => ({
  type: 'exercise',
  id,
  tier,
  topics: ['other'],
  statement: 'Do it.',
  solution: 'Done.',
});

function section(kind: NodeSection['kind'], blocks: ContentBlock[], yourTurn: ContentBlock[] = []): NodeSection {
  return { id: kind, kind, title: 'Section', blocks, yourTurn };
}

describe('wordCount', () => {
  it('counts plain words', () => {
    expect(wordCount('one two three')).toBe(3);
    expect(wordCount('')).toBe(0);
  });

  it('counts each formula as one word, however long', () => {
    expect(wordCount('Let \\(f(x) = x^2 + 2x + 1\\) be a map')).toBe(5);
    expect(wordCount('so \\[\\int_0^1 x^2 \\, dx = \\frac{1}{3}\\] holds')).toBe(3);
    expect(wordCount('then $$a + b + c$$ and $x$ and $y + z$ end')).toBe(7);
  });

  it('ignores bare punctuation and dashes', () => {
    expect(wordCount('one - two , three . ... ; :')).toBe(3);
    expect(wordCount(`${String.fromCharCode(0x2014)} ${String.fromCharCode(0x2013)} + = ?`)).toBe(0);
  });
});

describe('estimatedMinutes', () => {
  it('is at least 5 minutes', () => {
    expect(estimatedMinutes([])).toBe(5);
    expect(estimatedMinutes([section('learn', [plain(10)])])).toBe(5);
  });

  it('reads at 110 words per minute and rounds to the nearest 5', () => {
    // 1100 words are 10 minutes, 880 words are 8 minutes (rounds to 10), 660 words are 6 minutes (rounds to 5).
    expect(estimatedMinutes([section('learn', [plain(1100)])])).toBe(10);
    expect(estimatedMinutes([section('learn', [plain(880)])])).toBe(10);
    expect(estimatedMinutes([section('learn', [plain(660)])])).toBe(5);
    expect(estimatedMinutes([section('learn', [plain(1650)])])).toBe(15);
  });

  it('adds the words of every Learn section', () => {
    expect(estimatedMinutes([section('learn', [plain(550)]), section('learn', [plain(550)])])).toBe(10);
  });

  it('counts the words of tips and Key points', () => {
    const tip: ContentBlock = { type: 'tip', text: words(550) };
    const keyPoints: ContentBlock = { type: 'key-points', text: words(550) };
    expect(estimatedMinutes([section('learn', [tip, keyPoints])])).toBe(10);
  });

  it('ignores going deeper notes', () => {
    expect(estimatedMinutes([section('learn', [plain(1100), deeper(5500)])])).toBe(10);
  });

  it('ignores sections that are not Learn sections', () => {
    const big = [plain(5500)];
    expect(estimatedMinutes([section('practise', big), section('sheet', big)])).toBe(5);
    expect(estimatedMinutes([section('learn', [plain(1100)]), section('practise', big)])).toBe(10);
  });

  it('adds 1 minute per concept question and 5 per exercise in Your turn', () => {
    // 5 questions and 1 exercise are 10 minutes.
    const turn = [question(), question(), question(), question(), question(), exercise('a')];
    expect(estimatedMinutes([section('learn', [], turn)])).toBe(10);
    // 3 questions alone are 3 minutes, which rounds to 5.
    expect(estimatedMinutes([section('learn', [], [question(), question(), question()])])).toBe(5);
    // 2 exercises are 10 minutes.
    expect(estimatedMinutes([section('learn', [], [exercise('a'), exercise('b')])])).toBe(10);
  });

  it('does not count questions or exercises outside Your turn', () => {
    const outside = [question(), question(), exercise('a'), exercise('b'), exercise('c')];
    expect(estimatedMinutes([section('learn', outside)])).toBe(5);
    expect(estimatedMinutes([section('practise', [exercise('a'), exercise('b'), exercise('c')])])).toBe(5);
  });

  it('works on sections built from blocks', () => {
    const blocks: Block[] = [
      { type: 'formal-statement', title: 'Def', text: `\\(x\\) ${words(549)}`, source: { source: 'handout' } },
      { type: 'plain-explanation', text: words(550) },
      question(),
      question(),
      question(),
      question(),
      question(),
      exercise('a'),
      exercise('b', 'standard'),
    ];
    // 1100 words (the title adds one more) are 10 minutes, Your turn adds 5 + 5, and Practise adds nothing.
    expect(estimatedMinutes(nodeSections(blocks, 'Node'))).toBe(20);
  });
});

describe('exerciseCount', () => {
  it('counts every exercise block whatever its tier', () => {
    const blocks: Block[] = [plain(3), exercise('a', 'basic'), exercise('b', 'standard'), exercise('c', 'exam'), question()];
    expect(exerciseCount(blocks)).toBe(3);
    expect(exerciseCount([])).toBe(0);
  });
});
