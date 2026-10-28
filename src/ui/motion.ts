/**
 * Spring settings shared with src/ui/styles.css, for animation that runs from a script.
 *
 * A spring has no fixed length, so `duration` is the time it takes to settle within 1 percent. `response`
 * is how long one undamped swing would take, for animation libraries that ask for it. `easing` is a CSS
 * timing function sampled from the same spring, so the Web Animations API matches the stylesheet.
 *
 * SPRING has a damping ratio of 1 and never overshoots. Use it for reveals and presses.
 * SPRING_BOUNCE has a damping ratio of 0.8 and overshoots by about 1.5 percent. Use it only for motion
 * that carries a flick or a drag, where the overshoot reads as momentum.
 *
 * When the visitor prefers reduced motion, `springTiming` returns a short fade. The caller then animates
 * opacity only and leaves position and scale alone, as the stylesheet does.
 */

export interface Spring {
  /** 1 settles without overshoot. Lower values overshoot and swing back. */
  readonly dampingRatio: number;
  /** Seconds one undamped swing would take. Lower is snappier. */
  readonly response: number;
  /** Seconds until the spring is within 1 percent of its target. */
  readonly duration: number;
  /** CSS timing function sampled from the spring. Identical to the `linear()` value in styles.css. */
  readonly easing: string;
}

export const SPRING: Spring = {
  dampingRatio: 1,
  response: 0.33,
  duration: 0.35,
  easing:
    'linear(0, 0.053, 0.168, 0.303, 0.433, 0.549, 0.648, 0.728, 0.792, 0.843, 0.882, 0.912, 0.935, 0.952, 0.964, 0.974, 0.981, 0.986, 1)',
};

export const SPRING_BOUNCE: Spring = {
  dampingRatio: 0.8,
  response: 0.4,
  duration: 0.4,
  easing:
    'linear(0, 0.051, 0.17, 0.315, 0.462, 0.597, 0.711, 0.803, 0.874, 0.926, 0.963, 0.987, 1.002, 1.011, 1.014, 1.015, 1.014, 1.012, 1)',
};

/** Length in milliseconds of the fade that replaces movement under reduced motion. */
export const REDUCED_MOTION_FADE_MS = 140;

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Timing for `element.animate(keyframes, springTiming(SPRING))`. */
export function springTiming(spring: Spring): { duration: number; easing: string } {
  if (prefersReducedMotion()) return { duration: REDUCED_MOTION_FADE_MS, easing: 'ease-out' };
  return { duration: spring.duration * 1000, easing: spring.easing };
}
