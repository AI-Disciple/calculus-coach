import type { CSSProperties } from 'react';

type MeterBarProps = {
  /** The value that fills the bar, from 0 to `max`. */
  now: number;
  max: number;
  /** The accessible name, for example "Double integrals". */
  label: string;
  /** What a screen reader says for the value, for example "3 of 12 right". */
  valueText?: string;
  /** A thinner bar for progress that matters less than the main bars. */
  quiet?: boolean;
};

/**
 * A progress bar in the accent colour. The fill is scaled from the left with a transform, so it grows from
 * empty on first paint and follows the spring tokens. Under reduced motion it fades in instead.
 */
export function MeterBar({ now, max, label, valueText, quiet }: MeterBarProps) {
  const value = Math.min(Math.max(now, 0), max);
  const ratio = max > 0 ? value / max : 0;
  return (
    <div
      className={quiet ? 'meter meter-quiet' : 'meter'}
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={valueText}
    >
      <div className="meter-fill" data-filled={ratio > 0} style={{ '--fill': ratio } as CSSProperties} />
    </div>
  );
}
