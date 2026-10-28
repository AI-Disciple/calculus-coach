/** What a concept question option shows after a pick. */
export type OptionFeedback = 'right' | 'wrong' | 'reveal';

interface QuestionOption {
  text?: string;
  correct?: boolean | undefined;
}

export function hasCorrectOption(options: readonly QuestionOption[]): boolean {
  return options.some((option) => option.correct === true);
}

/**
 * Feedback for one option, given the option the reader picked last.
 * A right pick is `right`. A wrong pick is `wrong`, and the right option is `reveal`.
 * A question with no correct option gives no feedback.
 */
export function optionFeedback(
  options: readonly QuestionOption[],
  picked: number | undefined,
  index: number,
): OptionFeedback | undefined {
  if (picked === undefined || !hasCorrectOption(options)) return undefined;
  const isCorrect = options[index]?.correct === true;
  if (index === picked) return isCorrect ? 'right' : 'wrong';
  return isCorrect ? 'reveal' : undefined;
}

/** The run of right first picks after a new first pick. */
export function nextStreak(current: number, firstPickWasRight: boolean): number {
  return firstPickWasRight ? current + 1 : 0;
}

/**
 * A random order for the options of a question: entry `d` is the original index of the option shown at position `d`.
 * Fisher-Yates. `random` returns a number in [0, 1), like `Math.random`, and can be replaced in tests.
 */
export function shuffledOrder(count: number, random: () => number = Math.random): number[] {
  const order = Array.from({ length: count }, (_, i) => i);
  for (let i = count - 1; i > 0; i--) {
    const j = Math.min(i, Math.floor(random() * (i + 1)));
    [order[i], order[j]] = [order[j]!, order[i]!];
  }
  return order;
}
