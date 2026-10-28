import { useCallback, useEffect, useRef, useState, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import { fetchDue, fetchProgress, importProgress, postponeItem } from '../progress/client.ts';
import { courseItemIds, findConceptQuestion, findExercise } from '../progress/course.ts';
import { FINAL_EXAM_DATE } from '../progress/finalExam.ts';
import { reviewsInCourse, type ReviewItem } from '../progress/progress.ts';
import { activityTimestamps, dailyStreak, daysBetween, localDay } from '../progress/streak.ts';
import { ConceptQuestion, ExerciseView } from './blocks.tsx';
import { dueLabel } from './dueLabel.ts';
import { CompletionMark } from './moments.tsx';

export function ReviewPage() {
  const [due, setDue] = useState<ReviewItem[] | undefined>();
  const [error, setError] = useState<string>();
  const [transfer, setTransfer] = useState<string>();
  const [generation, setGeneration] = useState(0);
  const [pending, setPending] = useState(false);
  const [cleared, setCleared] = useState(0);
  // A concept question stays on screen after the pick, so the explanation can be read. Next moves on.
  const [answered, setAnswered] = useState(false);

  const load = useCallback(async () => {
    const result = await fetchDue();
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setError(undefined);
    setDue(reviewsInCourse(result.value.due, courseItemIds(bundle)));
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const current = due?.[0];
  const exercise = current ? findExercise(bundle, current.id) : undefined;
  const question = current && !exercise ? findConceptQuestion(bundle, current.id) : undefined;

  async function postpone() {
    if (!current) return;
    setPending(true);
    const result = await postponeItem(current.id);
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setAnswered(false);
    setGeneration((value) => value + 1);
    await load();
  }

  function advance() {
    setAnswered(false);
    setCleared((value) => value + 1);
    setGeneration((value) => value + 1);
    void load();
  }

  async function exportFile() {
    const result = await fetchProgress();
    if (!result.ok) {
      setTransfer(result.error);
      return;
    }
    const url = URL.createObjectURL(new Blob([`${JSON.stringify(result.value, null, 2)}\n`], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'progress.json';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
    setTransfer('Progress exported.');
  }

  async function onImport(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    let parsed: unknown;
    try {
      parsed = JSON.parse(await file.text());
    } catch {
      setTransfer('That file is not valid progress.');
      return;
    }
    const result = await importProgress(parsed);
    if (!result.ok) {
      setTransfer(result.error);
      return;
    }
    setTransfer('Progress imported.');
    setGeneration((value) => value + 1);
    await load();
  }

  return (
    <div className="review">
      <h1>Review</h1>
      {due && due.length === 0 && cleared > 0 ? (
        <QueueCleared count={cleared} />
      ) : due ? (
        <p className="review-count">{dueLabel(due.length)}</p>
      ) : (
        <p className="review-count">Loading.</p>
      )}
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      {current ? (
        <button type="button" className="button" disabled={pending} onClick={() => void postpone()}>
          Postpone
        </button>
      ) : null}

      {exercise ? (
        <section className="block block-exercise" aria-label="Exercise">
          <p className="block-label">Exercise</p>
          <p className="review-from">
            <Link to={`/node/${exercise.node.id}`}>{exercise.node.title}</Link>
          </p>
          <ExerciseView
            key={`${exercise.exercise.id}-${generation}`}
            exercise={exercise.exercise}
            onRecorded={advance}
            mainSave
          />
        </section>
      ) : null}

      {question ? (
        <section className="block block-concept-question" aria-label="Concept question">
          <p className="block-label">Concept question</p>
          <p className="review-from">
            <Link to={`/node/${question.node.id}`}>{question.node.title}</Link>
          </p>
          <ConceptQuestion
            key={`${question.question.id}-${generation}`}
            block={question.question}
            onAnswered={() => setAnswered(true)}
          />
          {answered ? (
            <button type="button" className="button button-main" onClick={advance}>
              Next
            </button>
          ) : null}
        </section>
      ) : null}

      <section className="transfer" aria-label="Progress file">
        <p className="block-label">Progress file</p>
        <p className="node-note">
          Export downloads a copy of the progress file. Import replaces the progress on this machine with the file you choose.
        </p>
        <div className="transfer-actions">
          <button type="button" className="button" onClick={() => void exportFile()}>
            Export progress
          </button>
          <label className="button file-button">
            Import progress
            <input type="file" accept="application/json,.json" onChange={(event) => void onImport(event)} />
          </label>
        </div>
        {transfer ? (
          <p className="saved-note" aria-live="polite">
            {transfer}
          </p>
        ) : null}
      </section>
    </div>
  );
}


const FINAL_DAY = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

function plural(count: number, noun: string): string {
  return `${count} ${noun}${count === 1 ? '' : 's'}`;
}

/** The end of a cleared queue. It reports what happened and gates nothing. */
function QueueCleared({ count }: { count: number }) {
  const heading = useRef<HTMLHeadingElement>(null);
  const [streak, setStreak] = useState(0);
  const [now] = useState(() => new Date().toISOString());
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const left = daysBetween(localDay(now, timeZone), FINAL_EXAM_DATE);

  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    let cancelled = false;
    void fetchProgress().then((result) => {
      if (cancelled || !result.ok) return;
      setStreak(dailyStreak(activityTimestamps(result.value), now, timeZone).days);
    });
    return () => {
      cancelled = true;
    };
  }, [now, timeZone]);

  return (
    <section className="queue-cleared" aria-label="Queue cleared">
      <CompletionMark />
      <h2 ref={heading} tabIndex={-1}>
        Queue cleared
      </h2>
      <p>You reviewed {plural(count, 'item')}.</p>
      {streak > 0 ? (
        <p>
          Daily streak: {plural(streak, 'day')}. <span className="quiet">One skipped day does not break it.</span>
        </p>
      ) : null}
      {left > 0 ? (
        <p>
          {plural(left, 'day')} until the final on {FINAL_DAY.format(new Date(`${FINAL_EXAM_DATE}T00:00:00Z`))}.
        </p>
      ) : left === 0 ? (
        <p>The final is today.</p>
      ) : null}
      <div className="queue-cleared-actions">
        <Link to="/" className="button button-main">
          Back to Home
        </Link>
        <Link to="/lectures">Open Lectures</Link>
      </div>
    </section>
  );
}
