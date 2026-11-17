import { useEffect, useRef } from 'react';
import type { CourseNode } from '../content/schema.ts';
import { Prose } from './prose.tsx';

const SEEN_KEY = 'not-on-final-seen';

/** A visible topic the final does not examine. Hidden topics already stay out of the course. */
export function isNotOnFinal(node: Pick<CourseNode, 'examWeight' | 'hidden'>): boolean {
  return node.examWeight === 'not-examined' && !node.hidden;
}

/**
 * The warning on a topic the final does not examine: a lasting note under the title,
 * and a dialog the first time the topic opens in this browser.
 */
export function NotOnFinalNotice({ node }: { node: Pick<CourseNode, 'id' | 'examWeight' | 'examWeightNote' | 'hidden'> }) {
  const ref = useRef<HTMLDialogElement>(null);
  const notOnFinal = isNotOnFinal(node);

  useEffect(() => {
    if (!notOnFinal) return;
    const seen = readSeen();
    if (seen.has(node.id)) return;
    ref.current?.showModal?.();
    seen.add(node.id);
    writeSeen(seen);
  }, [node.id, notOnFinal]);

  if (!notOnFinal) return null;

  return (
    <>
      <div className="not-on-final-note" role="note">
        <strong>Not on the final.</strong> This topic was not taught in class and the final does not examine it. Read
        it only if you are curious.
        {node.examWeightNote ? <Prose text={node.examWeightNote} /> : null}
      </div>
      <dialog
        ref={ref}
        className="auth-dialog not-on-final-dialog"
        onClick={(event) => {
          if (event.target === ref.current) ref.current?.close();
        }}
      >
        <h2>Not on the final</h2>
        <p className="auth-lead">
          The professor excluded this topic from the final exam. Nothing else in the course builds on it, so you can
          skip it.
        </p>
        <button type="button" className="button" autoFocus onClick={() => ref.current?.close()}>
          Got it
        </button>
      </dialog>
    </>
  );
}

function readSeen(): Set<string> {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(SEEN_KEY) ?? '[]');
    return new Set(Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : []);
  } catch {
    return new Set();
  }
}

function writeSeen(seen: ReadonlySet<string>) {
  try {
    window.localStorage.setItem(SEEN_KEY, JSON.stringify([...seen]));
  } catch {
    // Storage can be blocked. The dialog then shows again next time, which is harmless.
  }
}
