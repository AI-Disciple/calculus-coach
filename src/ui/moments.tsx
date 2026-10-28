import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import type { Mastery } from '../progress/dashboard.ts';
import { prefersReducedMotion, SPRING, springTiming } from './motion.ts';

/**
 * Feedback sized to the event. A Tick marks one saved step. A CompletionMark marks a larger moment, such as a
 * done node or a cleared queue. Nothing here makes a sound, scores points or blocks anything. The motion is a
 * critically damped spring with no overshoot, and under reduced motion it becomes a short fade.
 * The styles live in moments.css.
 */

/** A small check that draws itself once. Decorative: the words next to it carry the meaning. */
export function Tick() {
  return (
    <svg className="tick" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3.5 8.5 6.7 11.6 12.5 4.9" pathLength={1} />
    </svg>
  );
}

/** The saved line under a marking form. The tick plays again for every save. */
export function SavedNote({ children, version }: { children: ReactNode; version: number }) {
  return (
    <p className="saved-note" aria-live="polite">
      <Tick key={version} />
      {children}
    </p>
  );
}

/** A disc, a check that draws on after it, and one soft ring. Decorative. */
export function CompletionMark({ size = 'large' }: { size?: 'large' | 'small' }) {
  return (
    <span className={size === 'small' ? 'completion-mark completion-mark-small' : 'completion-mark'} aria-hidden="true">
      <span className="completion-ring" />
      <span className="completion-disc" />
      <svg className="completion-check" viewBox="0 0 24 24" focusable="false">
        <path d="M6.5 12.6 10.4 16.5 17.8 8" pathLength={1} />
      </svg>
    </span>
  );
}

export type Moment = { id: number; heading: string; body: string };

const TOAST_MS = 7000;
const TOAST_TICK_MS = 250;

function hiddenFrame(): Keyframe {
  return prefersReducedMotion() ? { opacity: 0 } : { opacity: 0, transform: 'translateY(24px) scale(0.96)' };
}

function restFrame(): Keyframe {
  return prefersReducedMotion() ? { opacity: 1 } : { opacity: 1, transform: 'none' };
}

/**
 * The node-done moment. It floats above the content at the bottom centre. A new moment replaces the old one
 * from wherever the old one is. It leaves by the way it came, on the button, on Escape, or after seven seconds.
 * The countdown waits while the pointer is over the toast or focus is inside it.
 */
export function MomentToast({ moment, onDismiss }: { moment: Moment | null; onDismiss: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const last = useRef<Moment | null>(null);
  const paused = useRef({ pointer: false, focus: false });
  const [previous, setPrevious] = useState<Moment | null>(moment);
  const [leaving, setLeaving] = useState(false);
  if (moment) last.current = moment;
  if (previous !== moment) {
    setPrevious(moment);
    setLeaving(moment === null && previous !== null);
  }
  const item = moment ?? (leaving ? last.current : null);

  const dismiss = useRef(onDismiss);
  dismiss.current = onDismiss;

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || typeof element.animate !== 'function') {
      if (leaving) setLeaving(false);
      return;
    }
    // Start from wherever the toast is now, so a replaced or interrupted toast does not jump.
    let from: Keyframe | null = null;
    if (animation.current && animation.current.playState === 'running') {
      const style = getComputedStyle(element);
      from = { opacity: style.opacity, transform: style.transform === 'none' ? 'none' : style.transform };
    }
    animation.current?.cancel();

    if (moment) {
      const start = from ?? hiddenFrame();
      const wasOnScreen = from === null && element.dataset.shown === 'true';
      element.dataset.shown = 'true';
      animation.current = element.animate(
        [wasOnScreen ? { opacity: 0.6, ...(prefersReducedMotion() ? {} : { transform: 'translateY(8px)' }) } : start, restFrame()],
        springTiming(SPRING),
      );
    } else if (leaving) {
      const exit = element.animate([from ?? restFrame(), hiddenFrame()], { ...springTiming(SPRING), fill: 'forwards' });
      animation.current = exit;
      exit.finished.then(
        () => {
          if (animation.current !== exit) return;
          element.dataset.shown = 'false';
          setLeaving(false);
        },
        () => {},
      );
    }
  }, [moment?.id, leaving]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!moment) return;
    paused.current = { pointer: false, focus: false };
    let elapsed = 0;
    const timer = window.setInterval(() => {
      if (paused.current.pointer || paused.current.focus) return;
      elapsed += TOAST_TICK_MS;
      if (elapsed >= TOAST_MS) dismiss.current();
    }, TOAST_TICK_MS);
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && !event.defaultPrevented) dismiss.current();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [moment?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!item) return null;
  return (
    <div className="moment-toast-wrap">
      <div
        ref={ref}
        className="moment-toast"
        role="status"
        aria-live="polite"
        onPointerEnter={() => (paused.current.pointer = true)}
        onPointerLeave={() => (paused.current.pointer = false)}
        onFocus={() => (paused.current.focus = true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) paused.current.focus = false;
        }}
      >
        <CompletionMark size="small" />
        <div className="moment-text">
          <p className="moment-heading">{item.heading}</p>
          <p className="moment-body">{item.body}</p>
        </div>
        <button type="button" className="button moment-dismiss" onClick={() => dismiss.current()}>
          Dismiss
        </button>
      </div>
    </div>
  );
}

const BADGE_LABEL: Partial<Record<Mastery, string>> = { 'in-progress': 'In progress', done: 'Done' };

/**
 * The node-level mastery badge. Not started shows nothing. When the node turns from in progress to done while
 * the badge is on screen, the old label rises out, the new one rises in, the badge pulses once and one ring
 * leaves it. A badge that first appears with its state does not animate.
 */
export function MasteryBadge({ state }: { state: Mastery }) {
  const badge = useRef<HTMLSpanElement>(null);
  const oldLabel = useRef<HTMLSpanElement>(null);
  const newLabel = useRef<HTMLSpanElement>(null);
  const ring = useRef<HTMLSpanElement>(null);
  const [previous, setPrevious] = useState<Mastery>(state);
  const [outgoing, setOutgoing] = useState<Mastery | null>(null);
  if (previous !== state) {
    setPrevious(state);
    setOutgoing(previous === 'in-progress' && state === 'done' ? previous : null);
  }

  useLayoutEffect(() => {
    if (!outgoing) return;
    const timing = springTiming(SPRING);
    const reduced = prefersReducedMotion();
    const done = (animation: Animation | undefined) =>
      animation?.finished.then(
        () => setOutgoing(null),
        () => {},
      );
    const leave = oldLabel.current?.animate(
      reduced ? [{ opacity: 1 }, { opacity: 0 }] : [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-70%)' }],
      { ...timing, fill: 'forwards' },
    );
    newLabel.current?.animate(
      reduced ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'translateY(70%)' }, { opacity: 1, transform: 'translateY(0)' }],
      timing,
    );
    if (!reduced) {
      badge.current?.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.06)', offset: 0.4 }, { transform: 'scale(1)' }],
        { duration: timing.duration * 1.3, easing: 'ease-out' },
      );
      ring.current?.animate(
        [
          { opacity: 0.45, transform: 'scale(1)' },
          { opacity: 0, transform: 'scale(1.35, 1.9)' },
        ],
        { ...timing, duration: timing.duration * 1.6, fill: 'forwards' },
      );
    }
    done(leave);
  }, [outgoing]);

  const label = BADGE_LABEL[state];
  if (!label) return null;
  return (
    <span ref={badge} className={`badge badge-mastery-${state} mastery-badge`}>
      <span className="badge-swap">
        {outgoing ? (
          <span ref={oldLabel} className="badge-label" aria-hidden="true">
            {BADGE_LABEL[outgoing]}
          </span>
        ) : null}
        <span ref={newLabel} className="badge-label">
          {label}
        </span>
      </span>
      {outgoing ? <span ref={ring} className="badge-ring" aria-hidden="true" /> : null}
    </span>
  );
}
