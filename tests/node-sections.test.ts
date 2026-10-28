import { describe, expect, it } from 'vitest';
import type { Block } from '../src/content/schema.ts';
import { nodeSections, sectionForAnchor, type NodeSection } from '../src/ui/nodeSections.ts';

const src = { source: 'handout' };
const statement = (title?: string, kind?: 'definition' | 'theorem' | 'method'): Block => ({
  type: 'formal-statement',
  text: `Statement ${title ?? kind ?? ''}`,
  source: src,
  ...(title ? { title } : {}),
  ...(kind ? { kind } : {}),
});
const plain = (text = 'Plain.'): Block => ({ type: 'plain-explanation', text });
const trap = (text = 'Trap.'): Block => ({ type: 'trap', text });
const tip = (text = 'Tip.'): Block => ({ type: 'tip', text });
const keyPoints = (text = 'Key points.'): Block => ({ type: 'key-points', text });
const deeper = (title = 'Deeper'): Block => ({ type: 'going-deeper', title, text: 'More.' });
const visual = (kind = 'curve-sketch'): Block => ({ type: 'visual', kind });
const worked = (title = 'Worked'): Block => ({ type: 'worked-example', title, problem: 'P', solution: 'S' });
const guided = (title = 'Guided'): Block => ({ type: 'guided-example', title, problem: 'P', steps: ['one'] });
const question = (text = 'Which?'): Block => ({
  type: 'concept-question',
  question: text,
  options: [{ text: 'a', correct: true }, { text: 'b' }],
  explanation: 'Because.',
});
const exercise = (id: string, tier: 'basic' | 'standard' | 'exam', topics: string[] = ['other']): Block => ({
  type: 'exercise',
  id,
  tier,
  topics,
  statement: 'Do it.',
  solution: 'Done.',
});
const sheet = (id: string): Block => ({ type: 'sheet-item', id, category: 'formula', text: 'T' });
const marker = (title: string): Block => ({ type: 'section', title });

const ids = (sections: NodeSection[]) => sections.map((s) => s.id);
const types = (blocks: Block[]) => blocks.map((b) => b.type);
const texts = (blocks: Block[]) => blocks.map((b) => ('text' in b ? b.text : b.type));
const exerciseIds = (blocks: Block[]) => blocks.flatMap((b) => (b.type === 'exercise' ? [b.id] : []));

describe('automatic sections', () => {
  it('starts a Learn section at each formal statement', () => {
    const sections = nodeSections(
      [statement('First'), plain('p1'), question('q1'), statement('Second'), plain('p2'), question('q2')],
      'Node',
    );
    expect(ids(sections)).toEqual(['learn-1', 'learn-2']);
    expect(sections.map((s) => s.title)).toEqual(['First', 'Second']);
    expect(sections.every((s) => s.kind === 'learn')).toBe(true);
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'plain-explanation']);
    expect(types(sections[1].blocks)).toEqual(['formal-statement', 'plain-explanation']);
  });

  it('puts blocks before the first statement in the first section, which takes the statement title', () => {
    const sections = nodeSections([plain('intro'), trap(), statement('Critical point'), question()], 'Node title');
    expect(sections).toHaveLength(1);
    expect(sections[0].title).toBe('Critical point');
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'plain-explanation', 'trap']);
  });

  it('falls back to the kind label for an untitled statement, then to "Statement", then to the node title', () => {
    const titles = (blocks: Block[]) => nodeSections(blocks, 'Node title').map((s) => s.title);
    expect(titles([statement(undefined, 'theorem'), question(), statement(undefined, 'definition'), question()])).toEqual([
      'Theorem',
      'Definition',
    ]);
    expect(titles([statement(undefined, 'method'), question()])).toEqual(['Method']);
    expect(titles([statement(), question()])).toEqual(['Statement']);
    expect(titles([plain(), question()])).toEqual(['Node title']);
  });

  it('moves a visual placed after an exercise or sheet item into the first section', () => {
    for (const late of [exercise('e.basic', 'basic'), sheet('s.one')]) {
      const sections = nodeSections([statement('A'), question(), statement('B'), question(), late, visual()], 'N');
      const learn = sections.filter((s) => s.kind === 'learn');
      expect(types(learn[0].blocks)).toContain('visual');
      expect(types(learn[1].blocks)).not.toContain('visual');
    }
  });

  it('keeps a visual that comes before any exercise in its own section', () => {
    const sections = nodeSections([statement('A'), question(), statement('B'), visual(), question()], 'N');
    expect(types(sections[0].blocks)).not.toContain('visual');
    expect(types(sections[1].blocks)).toContain('visual');
  });

  it('orders a section statement, plain, visual, examples, trap, going deeper, stable within a kind', () => {
    const sections = nodeSections(
      [
        deeper('d1'),
        trap('t1'),
        worked('w1'),
        guided('g1'),
        worked('w2'),
        visual('v1'),
        plain('p1'),
        statement('S'),
        trap('t2'),
        question(),
      ],
      'N',
    );
    const blocks = sections[0].blocks;
    expect(types(blocks)).toEqual([
      'formal-statement',
      'plain-explanation',
      'visual',
      'worked-example',
      'guided-example',
      'worked-example',
      'trap',
      'trap',
      'going-deeper',
    ]);
    expect(blocks.flatMap((b) => (b.type === 'worked-example' || b.type === 'guided-example' ? [b.title] : []))).toEqual([
      'w1',
      'g1',
      'w2',
    ]);
    expect(blocks.flatMap((b) => (b.type === 'trap' ? [b.text] : []))).toEqual(['t1', 't2']);
  });

  it('keeps a tip right after the block written before it', () => {
    const sections = nodeSections(
      [statement('S'), plain('p'), tip('t1'), worked('w'), trap('tr'), tip('t2'), visual(), question()],
      'N',
    );
    expect(types(sections[0].blocks)).toEqual([
      'formal-statement',
      'plain-explanation',
      'tip',
      'visual',
      'worked-example',
      'trap',
      'tip',
    ]);
    expect(texts(sections[0].blocks).filter((t) => t.startsWith('t'))).toEqual(['t1', 'tr', 't2']);
  });

  it('puts a tip written before the first statement after the statement', () => {
    const sections = nodeSections([tip(), statement('S'), question()], 'N');
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'tip']);
  });

  it('shows the Key points last, after going deeper notes and before Your turn', () => {
    const sections = nodeSections([statement('S'), keyPoints(), deeper(), trap(), plain(), question()], 'N');
    expect(types(sections[0].blocks)).toEqual([
      'formal-statement',
      'plain-explanation',
      'trap',
      'going-deeper',
      'key-points',
    ]);
    expect(types(sections[0].yourTurn)).toEqual(['concept-question']);
  });

  it('places a tip written after the Key points by the block before them', () => {
    const sections = nodeSections([statement('S'), plain(), keyPoints(), tip(), visual(), question()], 'N');
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'plain-explanation', 'tip', 'visual', 'key-points']);
  });

  it('keeps the Key points of merged sections at the end of the merged section', () => {
    const sections = nodeSections(
      [statement('A'), keyPoints('kA'), statement('B'), plain(), keyPoints('kB'), question()],
      'N',
    );
    expect(ids(sections)).toEqual(['learn-1']);
    expect(types(sections[0].blocks)).toEqual([
      'formal-statement',
      'formal-statement',
      'plain-explanation',
      'key-points',
      'key-points',
    ]);
    expect(texts(sections[0].blocks).slice(-2)).toEqual(['kA', 'kB']);
  });

  it('sends concept questions to Your turn, in written order', () => {
    const sections = nodeSections([statement('S'), question('q1'), plain(), question('q2')], 'N');
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'plain-explanation']);
    expect(sections[0].yourTurn.flatMap((b) => (b.type === 'concept-question' ? [b.question] : []))).toEqual(['q1', 'q2']);
  });

  it('matches a basic exercise to the section whose statement title holds all words of a topic', () => {
    const blocks = [
      statement('Critical point'),
      question(),
      statement('Second derivative test in two variables'),
      question(),
      exercise('e.sdt', 'basic', ['second-derivative-test']),
      exercise('e.crit', 'basic', ['critical-points']),
    ];
    const [first, second] = nodeSections(blocks, 'N');
    expect(exerciseIds(first.yourTurn)).toEqual(['e.crit']);
    expect(exerciseIds(second.yourTurn)).toEqual(['e.sdt']);
  });

  it('ignores maths in titles when matching topics', () => {
    const blocks = [
      statement('Intro'),
      question(),
      statement('Limit at \\(x_0\\) of a function'),
      question(),
      exercise('e.limit', 'basic', ['limit']),
    ];
    const sections = nodeSections(blocks, 'N');
    expect(exerciseIds(sections[1].yourTurn)).toEqual(['e.limit']);
    expect(exerciseIds(sections[0].yourTurn)).toEqual([]);
    // The maths \(x\) is dropped from the title, so a topic made of the letter x matches nothing.
    const maths = [statement('Intro'), question(), statement('Rule for \\(x\\)'), question(), exercise('e.x', 'basic', ['x'])];
    expect(exerciseIds(nodeSections(maths, 'N')[0].yourTurn)).toEqual(['e.x']);
  });

  it('puts a basic exercise that matches no title in the first section', () => {
    const blocks = [statement('Alpha'), question(), statement('Beta'), question(), exercise('e.none', 'basic', ['gamma'])];
    const sections = nodeSections(blocks, 'N');
    expect(exerciseIds(sections[0].yourTurn)).toEqual(['e.none']);
    expect(exerciseIds(sections[1].yourTurn)).toEqual([]);
  });

  it('gives a section at most one basic exercise and sends the rest to Practise', () => {
    const blocks = [
      statement('Alpha'),
      question(),
      exercise('e.1', 'basic', ['alpha']),
      exercise('e.2', 'basic', ['alpha']),
      exercise('e.3', 'basic', ['alpha']),
    ];
    const sections = nodeSections(blocks, 'N');
    expect(exerciseIds(sections[0].yourTurn)).toEqual(['e.1']);
    const practise = sections.find((s) => s.id === 'practise')!;
    expect(exerciseIds(practise.blocks)).toEqual(['e.2', 'e.3']);
  });

  it('orders Practise basic, standard, exam and keeps the written order within a tier', () => {
    const blocks = [
      statement('Alpha'),
      question(),
      exercise('x.exam1', 'exam'),
      exercise('x.std1', 'standard'),
      exercise('x.basic-first', 'basic'),
      exercise('x.basic-second', 'basic', ['alpha']),
      exercise('x.std2', 'standard'),
      exercise('x.exam2', 'exam'),
    ];
    const practise = nodeSections(blocks, 'N').find((s) => s.id === 'practise')!;
    expect(practise.kind).toBe('practise');
    expect(practise.title).toBe('Practise');
    expect(exerciseIds(practise.blocks)).toEqual(['x.basic-first', 'x.std1', 'x.std2', 'x.exam1', 'x.exam2']);
  });

  it('merges a section without a check into the next one', () => {
    const blocks = [statement('A'), plain('a'), statement('B'), plain('b'), question()];
    const sections = nodeSections(blocks, 'N');
    expect(sections).toHaveLength(1);
    expect(sections[0].title).toBe('A');
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'plain-explanation', 'formal-statement', 'plain-explanation']);
    expect(sections[0].yourTurn).toHaveLength(1);
  });

  it('merges a check-less last section into the previous one', () => {
    const blocks = [statement('A'), question(), statement('B'), plain('b')];
    const sections = nodeSections(blocks, 'N');
    expect(sections).toHaveLength(1);
    expect(sections[0].title).toBe('A');
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'formal-statement', 'plain-explanation']);
    expect(sections[0].yourTurn).toHaveLength(1);
  });

  it('keeps every section when the node has no check at all', () => {
    const sections = nodeSections([statement('A'), plain(), statement('B'), plain()], 'N');
    expect(sections.map((s) => s.title)).toEqual(['A', 'B']);
    expect(sections.every((s) => s.yourTurn.length === 0)).toBe(true);
  });

  it('counts a matched basic exercise as the check of its section', () => {
    const blocks = [statement('Alpha'), plain(), statement('Beta'), plain(), exercise('e.beta', 'basic', ['beta'])];
    const sections = nodeSections(blocks, 'N');
    expect(sections.map((s) => s.title)).toEqual(['Alpha']);
    expect(sections).toHaveLength(1);
    expect(exerciseIds(sections[0].yourTurn)).toEqual(['e.beta']);
  });

  it('adds For the sheet after Practise and leaves empty kinds out', () => {
    const full = nodeSections(
      [statement('A'), question(), exercise('e.std', 'standard'), sheet('s.1')],
      'N',
    );
    expect(ids(full)).toEqual(['learn-1', 'practise', 'sheet']);
    expect(full[2]).toMatchObject({ kind: 'sheet', title: 'For the sheet' });
    expect(nodeSections([statement('A'), question()], 'N').map((s) => s.id)).toEqual(['learn-1']);
    expect(nodeSections([statement('A'), question(), sheet('s.1')], 'N').map((s) => s.id)).toEqual(['learn-1', 'sheet']);
  });

  it('shows only the Practise exercises when a node has no teaching blocks', () => {
    const sections = nodeSections([exercise('e.1', 'basic'), exercise('e.2', 'exam')], 'N');
    expect(ids(sections)).toEqual(['practise']);
    expect(exerciseIds(sections[0].blocks)).toEqual(['e.1', 'e.2']);
  });
});

describe('sections from markers', () => {
  it('starts a Learn section at each marker and keeps the written order', () => {
    const sections = nodeSections(
      [
        marker('One'),
        trap('t'),
        statement('S'),
        plain(),
        question(),
        marker('Two'),
        visual(),
        statement('T'),
        exercise('e.basic', 'basic'),
      ],
      'N',
    );
    expect(ids(sections)).toEqual(['learn-1', 'learn-2']);
    expect(sections.map((s) => s.title)).toEqual(['One', 'Two']);
    expect(types(sections[0].blocks)).toEqual(['trap', 'formal-statement', 'plain-explanation']);
    expect(types(sections[1].blocks)).toEqual(['visual', 'formal-statement']);
  });

  it('turns the trailing run of checks into Your turn', () => {
    const sections = nodeSections(
      [marker('One'), statement('S'), question('q1'), exercise('e.basic', 'basic'), marker('Two'), plain()],
      'N',
    );
    expect(types(sections[0].blocks)).toEqual(['formal-statement']);
    expect(types(sections[0].yourTurn)).toEqual(['concept-question', 'exercise']);
    expect(sections[1].yourTurn).toEqual([]);
  });

  it('shows the Key points last in a marker section and keeps a tip where it is written', () => {
    const sections = nodeSections(
      [marker('One'), keyPoints(), statement('S'), tip(), plain(), question('q')],
      'N',
    );
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'tip', 'plain-explanation', 'key-points']);
    expect(types(sections[0].yourTurn)).toEqual(['concept-question']);
  });

  it('still finds Your turn when the Key points are written after the checks', () => {
    const sections = nodeSections(
      [marker('One'), statement('S'), question('q'), exercise('e.basic', 'basic'), keyPoints()],
      'N',
    );
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'key-points']);
    expect(types(sections[0].yourTurn)).toEqual(['concept-question', 'exercise']);
  });

  it('keeps a check in the middle as a teaching block', () => {
    const sections = nodeSections([marker('One'), statement('S'), question('mid'), plain(), question('end')], 'N');
    expect(types(sections[0].blocks)).toEqual(['formal-statement', 'concept-question', 'plain-explanation']);
    expect(types(sections[0].yourTurn)).toEqual(['concept-question']);
  });

  it('sends standard and exam exercises to Practise and sheet items to the sheet', () => {
    const sections = nodeSections(
      [
        marker('One'),
        statement('S'),
        exercise('e.exam', 'exam'),
        sheet('s.1'),
        exercise('e.std', 'standard'),
        question(),
        marker('Two'),
        plain(),
      ],
      'N',
    );
    expect(ids(sections)).toEqual(['learn-1', 'learn-2', 'practise', 'sheet']);
    expect(types(sections[0].blocks)).toEqual(['formal-statement']);
    expect(types(sections[0].yourTurn)).toEqual(['concept-question']);
    expect(exerciseIds(sections[2].blocks)).toEqual(['e.std', 'e.exam']);
    expect(sections[3].blocks).toHaveLength(1);
  });

  it('does not merge or reorder sections in marker mode', () => {
    const sections = nodeSections([marker('A'), plain('a'), marker('B'), plain('b'), question()], 'N');
    expect(sections.map((s) => s.title)).toEqual(['A', 'B']);
    expect(sections[0].yourTurn).toEqual([]);
    expect(sections[1].yourTurn).toHaveLength(1);
  });

  it('keeps basic exercises in the section where they are written', () => {
    const sections = nodeSections(
      [marker('A'), statement('Alpha'), exercise('e.1', 'basic', ['beta']), marker('B'), statement('Beta')],
      'N',
    );
    expect(exerciseIds(sections[0].yourTurn)).toEqual(['e.1']);
    expect(sections[1].yourTurn).toEqual([]);
  });

  it('keeps only the first basic exercise of a marker section and sends the rest to Practise', () => {
    const sections = nodeSections(
      [marker('A'), statement('Alpha'), exercise('e.1', 'basic', ['x']), exercise('e.2', 'basic', ['x'])],
      'N',
    );
    expect(exerciseIds(sections[0].yourTurn)).toEqual(['e.1']);
    expect(exerciseIds(sections[1].blocks)).toEqual(['e.2']);
  });
});

describe('basic exercises claiming sections', () => {
  it('lets a matching exercise claim a section before an unmatched one falls back to it', () => {
    const sections = nodeSections(
      [statement('Alpha'), question(), exercise('e.other', 'basic', ['other']), exercise('e.alpha', 'basic', ['alpha'])],
      'N',
    );
    expect(exerciseIds(sections[0].yourTurn)).toEqual(['e.alpha']);
    expect(exerciseIds(sections[1].blocks)).toEqual(['e.other']);
  });
});

describe('sectionForAnchor', () => {
  const sections = nodeSections(
    [
      statement('A'),
      question(),
      statement('B'),
      exercise('n.turn', 'basic', ['b']),
      exercise('n.ladder', 'standard'),
      sheet('n.sheet'),
    ],
    'N',
  );

  it('finds an exercise in Practise', () => {
    expect(sectionForAnchor(sections, 'exercise-n.ladder')?.id).toBe('practise');
  });

  it('finds an exercise that sits in Your turn', () => {
    const section = sectionForAnchor(sections, 'exercise-n.turn');
    expect(section?.kind).toBe('learn');
    expect(exerciseIds(section!.yourTurn)).toContain('n.turn');
  });

  it('finds a sheet item', () => {
    expect(sectionForAnchor(sections, 'sheet-n.sheet')?.id).toBe('sheet');
  });

  it('returns undefined for an unknown anchor, and does not match a wrong prefix', () => {
    expect(sectionForAnchor(sections, 'exercise-missing')).toBeUndefined();
    expect(sectionForAnchor(sections, 'sheet-n.ladder')).toBeUndefined();
  });
});
