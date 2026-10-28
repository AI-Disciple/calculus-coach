import type { Exercise } from '../content/schema.ts';

export type Tier = Exercise['tier'];

/** The tiers from easiest to hardest. The content values stay basic, standard and exam. */
export const TIER_ORDER = ['basic', 'standard', 'exam'] as const satisfies readonly Tier[];

/** What the app calls each tier. */
export const TIER_LABEL: Record<Tier, string> = { basic: 'Core', standard: 'Extra', exam: 'Exam level' };

/** The one-line purpose shown under a level tab. */
export const TIER_PURPOSE: Record<Tier, string> = {
  basic: 'The essentials to master',
  standard: 'To consolidate',
  exam: 'At the level of the exam',
};
