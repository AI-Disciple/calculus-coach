import { useEffect, useRef, useState } from 'react';
import type { Exercise } from '../content/schema.ts';
import { fetchAttempts, saveAttempt } from '../progress/client.ts';
import {
  MISTAKE_LABELS,
  MISTAKE_TYPES,
  isStepAttempt,
  marksByStep,
  type Attempt,
  type MistakeType,
  type ReviewItem,
  type StepResult,
  type WholeResult,
} from '../progress/progress.ts';
import { SavedNote } from './moments.tsx';
import { Prose } from './prose.tsx';

const WHEN = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

const DAY = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

type Draft = { result?: StepResult; mistakeType: MistakeType | ''; note: string };

export function MarkingForm({
  exercise,
  onSaved,
  mainSave,
}: {
  exercise: Exercise;
  onSaved: (review: ReviewItem | null) => void;
  mainSave?: boolean;
}) {
  const stepMode = marksByStep(exercise);
  const stepTexts = exercise.steps && exercise.steps.length > 0 ? exercise.steps : ['The solution'];
  const [drafts, setDrafts] = useState<Draft[]>(() => stepTexts.map(() => ({ mistakeType: '', note: '' })));
  const [result, setResult] = useState<WholeResult | ''>('');
  const [mistakeType, setMistakeType] = useState<MistakeType | ''>('');
  const [note, setNote] = useState('');
  const [error, setError] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [version, setVersion] = useState(0);
  const [pending, setPending] = useState(false);

  async function saveSteps() {
    if (drafts.some((draft) => !draft.result)) {
      setError('Mark each step before saving.');
      return;
    }
    if (drafts.some((draft) => draft.result === 'wrong' && !draft.mistakeType)) {
      setError('Choose a mistake type for each wrong step.');
      return;
    }
    const saved = await saveAttempt({
      exerciseId: exercise.id,
      tier: exercise.tier,
      steps: drafts.map((draft) => {
        const step = { result: draft.result as StepResult };
        if (draft.result !== 'wrong' || !draft.mistakeType) return step;
        const trimmed = draft.note.trim();
        return trimmed
          ? { result: 'wrong' as const, mistakeType: draft.mistakeType, note: trimmed }
          : { result: 'wrong' as const, mistakeType: draft.mistakeType };
      }),
    });
    if (!saved.ok) {
      setError(saved.error);
      return;
    }
    setDrafts(stepTexts.map(() => ({ mistakeType: '', note: '' })));
    finish(saved.value.review);
  }

  async function saveWhole() {
    if (!result) {
      setError('Mark the exercise before saving.');
      return;
    }
    const trimmed = note.trim();
    const saved =
      result === 'right'
        ? await saveAttempt({ exerciseId: exercise.id, tier: exercise.tier, result })
        : mistakeType
          ? await saveAttempt({
              exerciseId: exercise.id,
              tier: exercise.tier,
              result,
              mistakeType,
              ...(trimmed ? { note: trimmed } : {}),
            })
          : null;
    if (!saved) {
      setError('Choose a mistake type.');
      return;
    }
    if (!saved.ok) {
      setError(saved.error);
      return;
    }
    setResult('');
    setMistakeType('');
    setNote('');
    finish(saved.value.review);
  }

  function finish(review: ReviewItem | null) {
    setError(undefined);
    setVersion((value) => value + 1);
    setStatus(review ? `Attempt saved. Next review on ${DAY.format(new Date(review.dueAt))}.` : 'Attempt saved.');
    onSaved(review);
  }

  async function onSave() {
    setPending(true);
    setStatus(undefined);
    if (stepMode) await saveSteps();
    else await saveWhole();
    setPending(false);
  }

  return (
    <div className="marking">
      {stepMode ? (
        <>
          <p className="sub-label">Steps</p>
          <ol className="steps">
            {stepTexts.map((text, index) => {
              const draft = drafts[index] ?? { mistakeType: '', note: '' };
              return (
                <li key={index} className="mark-step">
                  <Prose text={text} />
                  <div className="mark-actions" role="group" aria-label={`Step ${index + 1}`}>
                    <ResultButton
                      pressed={draft.result === 'right'}
                      onClick={() => updateDraft(setDrafts, index, { result: 'right' })}
                    >
                      Right
                    </ResultButton>
                    <ResultButton
                      pressed={draft.result === 'wrong'}
                      onClick={() => updateDraft(setDrafts, index, { result: 'wrong' })}
                    >
                      Wrong
                    </ResultButton>
                    <ResultButton
                      pressed={draft.result === 'skipped'}
                      onClick={() => updateDraft(setDrafts, index, { result: 'skipped' })}
                    >
                      Skip
                    </ResultButton>
                  </div>
                  {draft.result === 'wrong' ? (
                    <MistakeFields
                      idPrefix={`${exercise.id}-step-${index}`}
                      mistakeType={draft.mistakeType}
                      note={draft.note}
                      onMistakeType={(value) => updateDraft(setDrafts, index, { mistakeType: value })}
                      onNote={(value) => updateDraft(setDrafts, index, { note: value })}
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </>
      ) : (
        <>
          <div className="mark-actions" role="group" aria-label="Result">
            <ResultButton pressed={result === 'right'} onClick={() => setResult('right')}>
              Right
            </ResultButton>
            <ResultButton pressed={result === 'partly-right'} onClick={() => setResult('partly-right')}>
              Partly right
            </ResultButton>
            <ResultButton pressed={result === 'wrong'} onClick={() => setResult('wrong')}>
              Wrong
            </ResultButton>
          </div>
          {result === 'wrong' || result === 'partly-right' ? (
            <MistakeFields
              idPrefix={exercise.id}
              mistakeType={mistakeType}
              note={note}
              onMistakeType={setMistakeType}
              onNote={setNote}
            />
          ) : null}
        </>
      )}
      <button
        type="button"
        className={mainSave ? 'button button-main' : 'button'}
        disabled={pending}
        onClick={() => void onSave()}
      >
        Save attempt
      </button>
      {status ? <SavedNote version={version}>{status}</SavedNote> : null}
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function AttemptHistory({
  exerciseId,
  refresh,
  onLoaded,
}: {
  exerciseId: string;
  refresh: number;
  /** Called with the attempts each time they load, so the exercise can show a check mark. */
  onLoaded?: (attempts: Attempt[]) => void;
}) {
  const [attempts, setAttempts] = useState<Attempt[] | null>(null);
  const [error, setError] = useState<string>();
  const loaded = useRef(onLoaded);
  loaded.current = onLoaded;

  useEffect(() => {
    let cancelled = false;
    void fetchAttempts(exerciseId).then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setError(undefined);
      setAttempts(result.value.attempts);
      loaded.current?.(result.value.attempts);
    });
    return () => {
      cancelled = true;
    };
  }, [exerciseId, refresh]);

  // A save opens the list, so the new attempt shows at once. Otherwise it waits behind its summary.
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (refresh > 0) setOpen(true);
  }, [refresh]);

  if (error) return <p className="form-error">{error}</p>;
  if (!attempts || attempts.length === 0) return null;
  return (
    <details
      className="history"
      aria-label="Attempt history"
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary>
        {attempts.length} {attempts.length === 1 ? 'attempt' : 'attempts'}
      </summary>
      <ol className="attempt-list">
        {attempts.map((attempt) => (
          <li key={attempt.id}>
            <p className="attempt-when">
              <time dateTime={attempt.at}>{WHEN.format(new Date(attempt.at))}</time>
              <ResultMarks attempt={attempt} />
            </p>
            {mistakeLines(attempt).length > 0 ? (
              <ul className="attempt-lines">
                {mistakeLines(attempt).map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </details>
  );
}

const MARK: Record<StepResult | 'partly-right', { sign: string; text: string }> = {
  right: { sign: '✓', text: 'right' },
  wrong: { sign: '✗', text: 'wrong' },
  skipped: { sign: '–', text: 'skipped' },
  'partly-right': { sign: '½', text: 'partly right' },
};

/** One small mark per step, or one for an exercise marked as a whole. */
function ResultMarks({ attempt }: { attempt: Attempt }) {
  const results = isStepAttempt(attempt) ? attempt.steps.map((step) => step.result) : [attempt.result];
  return (
    <span className="result-marks">
      {results.map((result, index) => (
        <span
          key={index}
          className={`result-mark result-mark-${result}`}
          title={results.length > 1 ? `Step ${index + 1}: ${MARK[result].text}` : MARK[result].text}
        >
          <span aria-hidden="true">{MARK[result].sign}</span>
          <span className="visually-hidden">
            {results.length > 1 ? `Step ${index + 1} ${MARK[result].text}` : `Marked ${MARK[result].text}`}
          </span>
        </span>
      ))}
    </span>
  );
}

function ResultButton({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: string }) {
  return (
    <button type="button" className="button" aria-pressed={pressed} onClick={onClick}>
      {children}
    </button>
  );
}

function MistakeFields({
  idPrefix,
  mistakeType,
  note,
  onMistakeType,
  onNote,
}: {
  idPrefix: string;
  mistakeType: MistakeType | '';
  note: string;
  onMistakeType: (value: MistakeType | '') => void;
  onNote: (value: string) => void;
}) {
  const mistakeId = `${idPrefix}-mistake`;
  const noteId = `${idPrefix}-note`;
  return (
    <div className="mark-fields">
      <div className="field">
        <label htmlFor={mistakeId}>Mistake type</label>
        <select
          id={mistakeId}
          value={mistakeType}
          onChange={(event) => onMistakeType(event.target.value as MistakeType | '')}
        >
          <option value="">Choose</option>
          {MISTAKE_TYPES.map((type) => (
            <option key={type} value={type}>
              {MISTAKE_LABELS[type]}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <div className="field-heading">
          <label htmlFor={noteId}>Note</label>
          <span className="optional">Optional</span>
        </div>
        <textarea id={noteId} rows={3} value={note} onChange={(event) => onNote(event.target.value)} />
      </div>
    </div>
  );
}

function updateDraft(setDrafts: (update: (drafts: Draft[]) => Draft[]) => void, index: number, patch: Partial<Draft>) {
  setDrafts((drafts) => drafts.map((draft, i) => (i === index ? { ...draft, ...patch } : draft)));
}

/** The wrong steps and any note, in words. Right and skipped steps show only as marks. */
function mistakeLines(attempt: Attempt): string[] {
  if (isStepAttempt(attempt)) {
    return attempt.steps.flatMap((step, index) => {
      if (step.result !== 'wrong') return step.note ? [`Step ${index + 1}: ${step.note}`] : [];
      const typed = `Step ${index + 1} was wrong. ${step.mistakeType ? `${MISTAKE_LABELS[step.mistakeType]}.` : ''}`.trim();
      return [step.note ? `${typed} ${step.note}` : typed];
    });
  }
  if (attempt.result === 'right') return attempt.note ? [attempt.note] : [];
  const label = attempt.result === 'partly-right' ? 'Partly right.' : 'Wrong.';
  const typed = attempt.mistakeType ? `${label} ${MISTAKE_LABELS[attempt.mistakeType]}.` : label;
  return [attempt.note ? `${typed} ${attempt.note}` : typed];
}
