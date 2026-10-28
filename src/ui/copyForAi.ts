import { MISTAKE_LABELS, type Attempt, type WholeResult } from '../progress/progress.ts';

/** Asked of the chat the text is pasted into. LaTeX in the exercise is left as written. */
export const COPY_INSTRUCTION =
  "Explain where this working goes wrong, using the notation of this course. Keep df/dx, f_x and f' as they are written in the exercise.";

const WHOLE: Record<Exclude<WholeResult, 'right'>, string> = {
  'partly-right': 'Partly right',
  wrong: 'Wrong',
};

export function textForAi(
  exercise: { statement: string; solution: string; steps?: readonly string[] },
  attempt: Attempt | undefined,
): string {
  return [
    'Exercise',
    exercise.statement.trim(),
    '',
    'Official solution',
    exercise.solution.trim(),
    '',
    wrongBlock(exercise, attempt),
    '',
    'My working',
    '[Write your working here.]',
    '',
    COPY_INSTRUCTION,
  ].join('\n');
}

export function latestAttempt(attempts: readonly Attempt[]): Attempt | undefined {
  let latest: Attempt | undefined;
  for (const attempt of attempts) {
    if (!latest || attempt.at >= latest.at) latest = attempt;
  }
  return latest;
}

function wrongBlock(
  exercise: { steps?: readonly string[] },
  attempt: Attempt | undefined,
): string {
  if (attempt && 'steps' in attempt) {
    const wrong = attempt.steps.flatMap((step, index) => {
      if (step.result !== 'wrong' || !step.mistakeType) return [];
      const lines = [
        `Step ${index + 1}. ${exercise.steps?.[index]?.trim() ?? ''}`.trimEnd(),
        `Mistake type: ${MISTAKE_LABELS[step.mistakeType]}.`,
      ];
      if (step.note) lines.push(`Note: ${step.note}`);
      return [lines.join('\n')];
    });
    if (wrong.length === 0) return 'Steps marked wrong\nNone marked.';
    return `Steps marked wrong\n${wrong.join('\n\n')}`;
  }
  if (attempt && !('steps' in attempt) && attempt.result !== 'right' && attempt.mistakeType) {
    const lines = [
      'Marked result',
      `${WHOLE[attempt.result]}.`,
      `Mistake type: ${MISTAKE_LABELS[attempt.mistakeType]}.`,
    ];
    if (attempt.note) lines.push(`Note: ${attempt.note}`);
    return lines.join('\n');
  }
  return 'Steps marked wrong\nNone marked.';
}
