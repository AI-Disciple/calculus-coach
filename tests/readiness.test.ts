import { describe, expect, it } from 'vitest';
import { examBlocks } from '../src/content/schema.ts';
import type { CourseCatalog, CourseExerciseRef, CourseNodeRef, ExamBlockId } from '../src/progress/course.ts';
import type { Mastery } from '../src/progress/dashboard.ts';
import type {
  Attempt,
  PaperResult,
  Progress,
  StepAttempt,
  StepResult,
  WholeAttempt,
  WholeResult,
} from '../src/progress/progress.ts';
import {
  EXAM_BLOCKS,
  bestMock,
  examReadiness,
  formatExamRight,
  formatPoints,
  formatDoneShare,
  doneShare,
  topicGainedRight,
  type ExamReadiness,
  type TopicReadiness,
} from '../src/progress/readiness.ts';

function minute(n: number): string {
  return `2026-03-01T10:${String(n).padStart(2, '0')}:00.000Z`;
}

function exam(id: string, examBlock: ExamBlockId = 'critical-points'): CourseExerciseRef {
  return { id, tier: 'exam', examBlock };
}

function node(id: string, exercises: CourseExerciseRef[], hidden = false): CourseNodeRef {
  return { id, title: id, exercises, ...(hidden ? { hidden: true } : {}) };
}

function catalogOf(nodes: CourseNodeRef[]): CourseCatalog {
  return { lectures: [{ number: 1, title: 'Lecture 1', nodes }] };
}

function progressOf(attempts: Attempt[]): Progress {
  return { attempts, reviews: [] };
}

function wholeAttempt(exerciseId: string, result: WholeResult, when = 0): WholeAttempt {
  return { id: `${exerciseId}-${when}-${result}`, at: minute(when), exerciseId, tier: 'exam', result };
}

function stepAttempt(exerciseId: string, results: StepResult[], when = 0): StepAttempt {
  return {
    id: `${exerciseId}-${when}-steps`,
    at: minute(when),
    exerciseId,
    tier: 'exam',
    steps: results.map((result) => ({ result })),
  };
}

function topicOf(readiness: ExamReadiness, id: ExamBlockId): TopicReadiness {
  const found = readiness.topics.find((topic) => topic.block === id);
  if (!found) throw new Error(`no topic ${id}`);
  return found;
}

/** The counts of the critical points topic, the one most tests use. */
function critical(course: CourseCatalog, attempts: Attempt[]) {
  const { exercises, attempted, right, partly } = topicOf(
    examReadiness(progressOf(attempts), course),
    'critical-points',
  );
  return { exercises, attempted, right, partly };
}

function exerciseIds(prefix: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `${prefix}-${i + 1}`);
}

describe('exam blocks', () => {
  it('lists the same block ids as the schema, in the same order', () => {
    expect(EXAM_BLOCKS.map((block) => block.id)).toEqual(examBlocks);
  });
});

describe('examReadiness', () => {
  const course = catalogOf([node('n1', [exam('crit-1'), exam('crit-2'), exam('dbl-1', 'double-integrals')])]);

  it('returns all six topics in exam order, with nothing attempted for empty progress', () => {
    const readiness = examReadiness(progressOf([]), course);

    expect(readiness.topics.map((topic) => [topic.block, topic.title])).toEqual(
      EXAM_BLOCKS.map((block) => [block.id, block.title]),
    );
    expect(readiness.topics.every((topic) => topic.attempted === 0 && topic.right === 0 && topic.partly === 0)).toBe(
      true,
    );
    expect(readiness).toMatchObject({ exercises: 3, attempted: 0, right: 0, partly: 0 });
  });

  it('counts the exam exercises of each topic', () => {
    const readiness = examReadiness(progressOf([]), course);

    expect(topicOf(readiness, 'critical-points').exercises).toBe(2);
    expect(topicOf(readiness, 'double-integrals').exercises).toBe(1);
    expect(topicOf(readiness, 'chain-rule').exercises).toBe(0);
  });

  it('counts a whole attempt marked right as right', () => {
    expect(critical(course, [wholeAttempt('crit-1', 'right')])).toEqual({
      exercises: 2,
      attempted: 1,
      right: 1,
      partly: 0,
    });
  });

  it('counts a whole attempt marked partly right as partly right, not right', () => {
    expect(critical(course, [wholeAttempt('crit-1', 'partly-right')])).toEqual({
      exercises: 2,
      attempted: 1,
      right: 0,
      partly: 1,
    });
  });

  it('counts a whole attempt marked wrong as attempted only', () => {
    expect(critical(course, [wholeAttempt('crit-1', 'wrong')])).toEqual({
      exercises: 2,
      attempted: 1,
      right: 0,
      partly: 0,
    });
  });

  it('counts a step attempt with every step right as right', () => {
    const attempt = stepAttempt('crit-1', ['right', 'right', 'right']);
    expect(critical(course, [attempt])).toMatchObject({ attempted: 1, right: 1, partly: 0 });
  });

  it('counts a step attempt with some but not all steps right as partly right', () => {
    const withWrong = stepAttempt('crit-1', ['right', 'wrong']);
    const withSkipped = stepAttempt('crit-1', ['right', 'skipped', 'right']);
    expect(critical(course, [withWrong])).toMatchObject({ attempted: 1, right: 0, partly: 1 });
    expect(critical(course, [withSkipped])).toMatchObject({ attempted: 1, right: 0, partly: 1 });
  });

  it('counts a step attempt with no right step as attempted only', () => {
    const attempt = stepAttempt('crit-1', ['wrong', 'skipped']);
    expect(critical(course, [attempt])).toEqual({ exercises: 2, attempted: 1, right: 0, partly: 0 });
  });

  it('counts only the latest attempt, so a later wrong attempt replaces an earlier right one', () => {
    const attempts = [wholeAttempt('crit-1', 'right', 0), wholeAttempt('crit-1', 'wrong', 5)];
    expect(critical(course, attempts)).toMatchObject({ attempted: 1, right: 0, partly: 0 });
  });

  it('counts only the latest attempt, so a later right attempt replaces an earlier wrong one', () => {
    const attempts = [wholeAttempt('crit-1', 'wrong', 0), wholeAttempt('crit-1', 'right', 5)];
    expect(critical(course, attempts)).toMatchObject({ attempted: 1, right: 1, partly: 0 });
  });

  it('lets a later partly right attempt replace an earlier right one, and a step attempt replace a whole one', () => {
    const downgraded = [wholeAttempt('crit-1', 'right', 0), wholeAttempt('crit-1', 'partly-right', 5)];
    const otherKind = [wholeAttempt('crit-1', 'wrong', 0), stepAttempt('crit-1', ['right', 'right'], 5)];
    expect(critical(course, downgraded)).toMatchObject({ right: 0, partly: 1 });
    expect(critical(course, otherKind)).toMatchObject({ right: 1, partly: 0 });
  });

  it('picks the latest attempt by time, not by position in the list', () => {
    const attempts = [wholeAttempt('crit-1', 'wrong', 5), wholeAttempt('crit-1', 'right', 0)];
    expect(critical(course, attempts)).toMatchObject({ attempted: 1, right: 0 });
  });

  it('lets a later entry win a tie on the time', () => {
    const rightThenWrong = [wholeAttempt('crit-1', 'right', 0), wholeAttempt('crit-1', 'wrong', 0)];
    const wrongThenRight = [wholeAttempt('crit-1', 'wrong', 0), wholeAttempt('crit-1', 'right', 0)];
    expect(critical(course, rightThenWrong)).toMatchObject({ attempted: 1, right: 0 });
    expect(critical(course, wrongThenRight)).toMatchObject({ attempted: 1, right: 1 });
  });

  it('counts each exercise once however often it was attempted', () => {
    const attempts = [
      wholeAttempt('crit-1', 'right', 0),
      wholeAttempt('crit-1', 'right', 1),
      wholeAttempt('crit-1', 'right', 2),
    ];
    expect(critical(course, attempts)).toMatchObject({ attempted: 1, right: 1 });
  });

  it('counts right, partly right and wrong exercises of one topic side by side', () => {
    const ten = catalogOf([node('n1', exerciseIds('crit', 10).map((id) => exam(id)))]);
    const attempts = [
      wholeAttempt('crit-1', 'right'),
      stepAttempt('crit-2', ['right', 'right']),
      wholeAttempt('crit-3', 'partly-right'),
      wholeAttempt('crit-4', 'wrong'),
    ];
    expect(critical(ten, attempts)).toEqual({ exercises: 10, attempted: 4, right: 2, partly: 1 });
  });

  it('gives a topic with no exam exercises all counts at zero', () => {
    const noCritical = catalogOf([node('n1', [exam('chain-1', 'chain-rule')])]);
    expect(critical(noCritical, [wholeAttempt('crit-1', 'right')])).toEqual({
      exercises: 0,
      attempted: 0,
      right: 0,
      partly: 0,
    });
  });

  it('ignores attempts on exercises that have no exam block or are not in the catalog', () => {
    const mixed = catalogOf([node('n1', [exam('crit-1'), { id: 'drill-1', tier: 'standard' }])]);
    const attempts = [wholeAttempt('drill-1', 'right'), wholeAttempt('unknown-1', 'right')];
    const readiness = examReadiness(progressOf(attempts), mixed);

    expect(topicOf(readiness, 'critical-points')).toMatchObject({ exercises: 1, attempted: 0, right: 0, partly: 0 });
    expect(readiness).toMatchObject({ exercises: 1, attempted: 0, right: 0, partly: 0 });
  });

  it('leaves exam exercises in hidden nodes out of the counts entirely', () => {
    const withHidden = catalogOf([node('n1', [exam('crit-1')]), node('n2', [exam('crit-2')], true)]);
    const readiness = examReadiness(progressOf([wholeAttempt('crit-2', 'right')]), withHidden);

    expect(topicOf(readiness, 'critical-points')).toMatchObject({ exercises: 1, attempted: 0, right: 0 });
    expect(readiness).toMatchObject({ exercises: 1, attempted: 0, right: 0 });
  });

  it('sums the topics into the overall counts', () => {
    const mixed = catalogOf([
      node('n1', [exam('crit-1'), exam('crit-2')]),
      node('n2', [exam('chain-1', 'chain-rule'), exam('dbl-1', 'double-integrals'), exam('dbl-2', 'double-integrals')]),
    ]);
    const attempts = [
      wholeAttempt('crit-1', 'right'),
      wholeAttempt('chain-1', 'partly-right'),
      wholeAttempt('dbl-1', 'wrong'),
      stepAttempt('dbl-2', ['right', 'right']),
    ];
    const readiness = examReadiness(progressOf(attempts), mixed);

    expect(topicOf(readiness, 'critical-points')).toMatchObject({ exercises: 2, attempted: 1, right: 1, partly: 0 });
    expect(topicOf(readiness, 'chain-rule')).toMatchObject({ exercises: 1, attempted: 1, right: 0, partly: 1 });
    expect(topicOf(readiness, 'double-integrals')).toMatchObject({ exercises: 2, attempted: 2, right: 1, partly: 0 });
    expect(readiness).toMatchObject({ exercises: 5, attempted: 4, right: 2, partly: 1 });
  });
});

describe('topicGainedRight', () => {
  const course = catalogOf([
    node('n1', [exam('crit-1'), exam('crit-2'), exam('dbl-1', 'double-integrals'), exam('chain-1', 'chain-rule')]),
  ]);
  const readinessOf = (attempts: Attempt[]) => examReadiness(progressOf(attempts), course);

  it('returns the topic whose right count went up', () => {
    const before = readinessOf([wholeAttempt('crit-1', 'right')]);
    const after = readinessOf([wholeAttempt('crit-1', 'right'), wholeAttempt('dbl-1', 'right', 1)]);

    expect(topicGainedRight(before, after)).toMatchObject({ block: 'double-integrals', right: 1, exercises: 1 });
  });

  it('returns undefined when an exercise only became partly right or wrong', () => {
    const before = readinessOf([]);
    const after = readinessOf([wholeAttempt('crit-1', 'partly-right'), wholeAttempt('dbl-1', 'wrong')]);

    expect(topicGainedRight(before, after)).toBeUndefined();
  });

  it('returns undefined when an exercise that was already right is marked right again', () => {
    const before = readinessOf([wholeAttempt('crit-1', 'right', 0)]);
    const after = readinessOf([wholeAttempt('crit-1', 'right', 0), wholeAttempt('crit-1', 'right', 1)]);

    expect(topicGainedRight(before, after)).toBeUndefined();
  });

  it('returns undefined when the right count fell', () => {
    const before = readinessOf([wholeAttempt('crit-1', 'right', 0)]);
    const after = readinessOf([wholeAttempt('crit-1', 'right', 0), wholeAttempt('crit-1', 'wrong', 1)]);

    expect(topicGainedRight(before, after)).toBeUndefined();
  });
});

describe('formatExamRight', () => {
  it('reads as a count out of the exam exercises', () => {
    expect(formatExamRight({ right: 4, exercises: 12 })).toBe('4 of 12 exam exercises right');
    expect(formatExamRight({ right: 0, exercises: 30 })).toBe('0 of 30 exam exercises right');
  });

  it('uses the singular for one exercise', () => {
    expect(formatExamRight({ right: 1, exercises: 1 })).toBe('1 of 1 exam exercise right');
    expect(formatExamRight({ right: 0, exercises: 1 })).toBe('0 of 1 exam exercise right');
  });

  it('uses the plural for no exercises', () => {
    expect(formatExamRight({ right: 0, exercises: 0 })).toBe('0 of 0 exam exercises right');
  });
});

describe('doneShare', () => {
  const mastery = new Map<string, Mastery>([
    ['a', 'done'],
    ['b', 'in-progress'],
    ['c', 'not-started'],
    ['d', 'done'],
  ]);

  it('counts only done nodes out of all the given nodes', () => {
    expect(doneShare(['a', 'b', 'c', 'd'], mastery)).toEqual({ done: 2, total: 4 });
  });

  it('counts a node missing from the mastery map as not started', () => {
    expect(doneShare(['a', 'missing'], mastery)).toEqual({ done: 1, total: 2 });
  });

  it('handles an empty list', () => {
    expect(doneShare([], mastery)).toEqual({ done: 0, total: 0 });
  });
});

describe('formatDoneShare', () => {
  it('reads as a count out of the total', () => {
    expect(formatDoneShare({ done: 2, total: 5 })).toBe('2 of 5 topics done');
    expect(formatDoneShare({ done: 0, total: 8 })).toBe('0 of 8 topics done');
  });

  it('uses the singular for one node', () => {
    expect(formatDoneShare({ done: 1, total: 1 })).toBe('1 of 1 topic done');
    expect(formatDoneShare({ done: 0, total: 1 })).toBe('0 of 1 topic done');
  });

  it('uses the plural for no nodes', () => {
    expect(formatDoneShare({ done: 0, total: 0 })).toBe('0 of 0 topics done');
  });
});

describe('bestMock', () => {
  const papers: { id: string; kind: 'mock' | 'checkpoint' }[] = [
    { id: 'mock-1', kind: 'mock' },
    { id: 'mock-2', kind: 'mock' },
    { id: 'check-1', kind: 'checkpoint' },
  ];

  function resultOf(id: string, paperId: string, when: number, earned: number, total: number): PaperResult {
    return { id, at: minute(when), paperId, earned, total };
  }

  function withResults(paperResults: PaperResult[]): Progress {
    return { attempts: [], reviews: [], paperResults };
  }

  it('picks the mock with the highest earned share, not the most points', () => {
    const progress = withResults([resultOf('r1', 'mock-1', 1, 15, 20), resultOf('r2', 'mock-2', 2, 9, 10)]);
    expect(bestMock(progress, papers)).toEqual({ paperId: 'mock-2', earned: 9, total: 10 });
  });

  it('ignores checkpoints', () => {
    const progress = withResults([resultOf('r1', 'mock-1', 1, 10, 20), resultOf('r2', 'check-1', 2, 10, 10)]);
    expect(bestMock(progress, papers)).toEqual({ paperId: 'mock-1', earned: 10, total: 20 });
  });

  it('ignores a result for a paper that is not listed', () => {
    const progress = withResults([resultOf('r1', 'mock-1', 1, 10, 20), resultOf('r2', 'old-mock', 2, 20, 20)]);
    expect(bestMock(progress, papers)).toEqual({ paperId: 'mock-1', earned: 10, total: 20 });
  });

  it('breaks a tie on the share by the later result', () => {
    const progress = withResults([resultOf('r2', 'mock-2', 3, 10, 20), resultOf('r1', 'mock-1', 1, 5, 10)]);
    expect(bestMock(progress, papers)).toEqual({ paperId: 'mock-2', earned: 10, total: 20 });
  });

  it('returns null when there are no paper results', () => {
    expect(bestMock(progressOf([]), papers)).toBeNull();
  });

  it('returns null when no mock has a result', () => {
    expect(bestMock(withResults([resultOf('r1', 'check-1', 1, 10, 10)]), papers)).toBeNull();
  });
});

describe('formatPoints', () => {
  it('shows whole and half points without a trailing zero', () => {
    expect([0, 0.5, 2.5, 3, 6.5].map((points) => formatPoints(points))).toEqual(['0', '0.5', '2.5', '3', '6.5']);
  });

  it('rounds to the nearest half', () => {
    expect([2.2, 2.3, 2.74, 2.75].map((points) => formatPoints(points))).toEqual(['2', '2.5', '2.5', '3']);
  });
});
