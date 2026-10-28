import { useId, useRef, useState, type KeyboardEvent } from 'react';
import type { Exercise } from '../content/schema.ts';
import { BlockView } from './blocks.tsx';
import { TIER_LABEL, TIER_ORDER, TIER_PURPOSE, type Tier } from './tiers.ts';

/** The tier tab a Practise section shows, kept by the node page so its Next button can move through the tiers. */
export type LevelTabs = { selected: Tier; enabled: Tier[]; select: (tier: Tier) => void };

/**
 * The first tier with exercises opens first, unless a deep link names an exercise, and then that exercise's
 * tier opens.
 */
export function useLevelTabs(exercises: Exercise[], anchor?: string): LevelTabs {
  const enabled = TIER_ORDER.filter((tier) => exercises.some((exercise) => exercise.tier === tier));
  const anchorTier = anchor ? exercises.find((exercise) => `exercise-${exercise.id}` === anchor)?.tier : undefined;
  const [selected, setSelected] = useState<Tier>(anchorTier ?? enabled[0] ?? TIER_ORDER[0]);
  const [seenAnchor, setSeenAnchor] = useState(anchor);
  // A link to another exercise on the same page opens that exercise's tab before anything is painted.
  if (anchor !== seenAnchor) {
    setSeenAnchor(anchor);
    if (anchorTier && anchorTier !== selected) setSelected(anchorTier);
  }
  return { selected, enabled, select: setSelected };
}

/** The tier after the selected one that has exercises, if any. */
export function nextLevel({ selected, enabled }: LevelTabs): Tier | undefined {
  return enabled[enabled.indexOf(selected) + 1];
}

/**
 * The exercises of a Practise section behind one tab per tier. A tab without exercises is disabled. Every
 * panel stays mounted and the inactive ones are hidden, so a revealed solution or a half-filled mark survives
 * a switch of tab.
 */
export function ExerciseTabs({ exercises, levels }: { exercises: Exercise[]; levels: LevelTabs }) {
  const baseId = useId();
  const tabs = useRef<Partial<Record<Tier, HTMLButtonElement | null>>>({});
  const groups = TIER_ORDER.map((tier) => ({ tier, items: exercises.filter((exercise) => exercise.tier === tier) }));
  const { selected, enabled } = levels;

  function select(tier: Tier, focus: boolean) {
    levels.select(tier);
    if (focus) tabs.current[tier]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const at = enabled.indexOf(selected);
    let next: Tier | undefined;
    if (event.key === 'ArrowRight') next = enabled[(at + 1) % enabled.length];
    else if (event.key === 'ArrowLeft') next = enabled[(at - 1 + enabled.length) % enabled.length];
    else if (event.key === 'Home') next = enabled[0];
    else if (event.key === 'End') next = enabled[enabled.length - 1];
    if (!next) return;
    event.preventDefault();
    select(next, true);
  }

  return (
    <>
      <div className="level-tabs" role="tablist" aria-label="Exercise levels" onKeyDown={onKeyDown}>
        {groups.map(({ tier, items }) => {
          const isSelected = tier === selected;
          const count = items.length;
          return (
            <button
              key={tier}
              type="button"
              role="tab"
              ref={(element) => {
                tabs.current[tier] = element;
              }}
              id={`${baseId}-tab-${tier}`}
              className={`level-tab level-tab-${tier}`}
              aria-selected={isSelected}
              aria-controls={count > 0 ? `${baseId}-panel-${tier}` : undefined}
              tabIndex={isSelected ? 0 : -1}
              disabled={count === 0}
              onClick={() => select(tier, false)}
            >
              <span className="level-dot" aria-hidden="true" />
              <span className="level-text">
                <span className="level-name">{TIER_LABEL[tier]}</span>
                <span className="level-purpose">{TIER_PURPOSE[tier]}</span>
              </span>
              <span className="level-count">
                {count}
                <span className="visually-hidden"> {count === 1 ? 'exercise' : 'exercises'}</span>
              </span>
            </button>
          );
        })}
      </div>
      {groups
        .filter((group) => group.items.length > 0)
        .map(({ tier, items }) => (
          <div
            key={tier}
            role="tabpanel"
            id={`${baseId}-panel-${tier}`}
            aria-labelledby={`${baseId}-tab-${tier}`}
            className="level-panel"
            hidden={tier !== selected}
          >
            {items.map((exercise) => (
              <BlockView key={exercise.id} block={exercise} />
            ))}
          </div>
        ))}
    </>
  );
}
