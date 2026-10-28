import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import { fetchProgress } from '../progress/client.ts';
import type { Attempt } from '../progress/progress.ts';
import { BlockView, isMarkedRight } from './blocks.tsx';
import {
  countByTier,
  countExercises,
  exerciseBank,
  exerciseOrigin,
  filterBank,
  isFiltering,
  type BankExercise,
  type BankFilter,
  type BankNode,
} from './bank.ts';
import { onProgressSaved } from './progressEvents.ts';
import { Prose } from './prose.tsx';
import { TIER_LABEL, TIER_ORDER, type Tier } from './tiers.ts';

const bank = exerciseBank(bundle);
const totalByTier = countByTier(bank);

/** With a filter on, topics open by themselves while the matches stay few enough to scan. */
const AUTO_OPEN_LIMIT = 40;

export function ExerciseBankPage() {
  const [params, setParams] = useSearchParams();
  const [rightIds, setRightIds] = useState<ReadonlySet<string>>();
  const [opened, setOpened] = useState<ReadonlyMap<string, boolean>>(new Map());

  useEffect(() => {
    let cancelled = false;
    const load = () =>
      void fetchProgress().then((result) => {
        if (cancelled || !result.ok) return;
        setRightIds(rightExerciseIds(result.value.attempts));
      });
    load();
    const stop = onProgressSaved(load);
    return () => {
      cancelled = true;
      stop();
    };
  }, []);

  const lectureParam = Number(params.get('lecture'));
  const lecture = bank.some((item) => item.number === lectureParam) ? lectureParam : undefined;
  const tiers = new Set(
    (params.get('level') ?? '').split(',').filter((value): value is Tier => TIER_ORDER.some((tier) => tier === value)),
  );
  const query = params.get('find') ?? '';
  const pastExamOnly = params.get('past') === '1';
  const todoOnly = params.get('todo') === '1';

  const filter: BankFilter = {
    lecture,
    tiers,
    query,
    pastExamOnly,
    hideIds: todoOnly && rightIds ? rightIds : undefined,
  };
  const filtering = isFiltering(filter);
  const shown = useMemo(
    () => filterBank(bank, filter),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lecture, [...tiers].join(','), query, pastExamOnly, todoOnly, rightIds],
  );
  const shownCount = countExercises(shown);
  const autoOpen = filtering && shownCount <= AUTO_OPEN_LIMIT;

  function setParam(key: string, value: string | undefined) {
    setParams(
      (current) => {
        const next = new URLSearchParams(current);
        if (value === undefined || value === '') next.delete(key);
        else next.set(key, value);
        return next;
      },
      { replace: true },
    );
  }

  function toggleTier(tier: Tier) {
    const next = new Set(tiers);
    if (next.has(tier)) next.delete(tier);
    else next.add(tier);
    setParam('level', TIER_ORDER.filter((item) => next.has(item)).join(','));
  }

  function setOpen(nodeId: string, open: boolean) {
    setOpened((current) => new Map(current).set(nodeId, open));
  }

  const total = countExercises(bank);
  const rightCount = rightIds ? bank.reduce((sum, item) => sum + countRight(item.nodes, rightIds), 0) : undefined;

  return (
    <article className="bank-page">
      <h1>Exercise bank</h1>
      <p className="lecture-subtitle">
        {total} exercises from every lecture, sorted by lecture, topic and level.
        {rightCount !== undefined ? ` ${rightCount} marked right so far.` : ''}
      </p>

      <form className="bank-filters" role="search" aria-label="Filter exercises" onSubmit={(event) => event.preventDefault()}>
        <label className="bank-field">
          <span className="bank-field-label">Search</span>
          <input
            type="search"
            value={query}
            placeholder="Words from the statement or topic"
            onChange={(event) => setParam('find', event.target.value)}
          />
        </label>
        <label className="bank-field">
          <span className="bank-field-label">Lecture</span>
          <select aria-label="Lecture" value={lecture ?? ''} onChange={(event) => setParam('lecture', event.target.value)}>
            <option value="">All lectures</option>
            {bank.map((item) => (
              <option key={item.number} value={item.number}>
                {item.number}. {item.title}
              </option>
            ))}
          </select>
        </label>
        <fieldset className="bank-levels">
          <legend className="bank-field-label">Level</legend>
          {TIER_ORDER.map((tier) => (
            <label key={tier} className={`bank-chip bank-chip-${tier}`}>
              <input type="checkbox" checked={tiers.has(tier)} onChange={() => toggleTier(tier)} />
              <span className="level-dot" aria-hidden="true" />
              {TIER_LABEL[tier]}
              <span className="bank-chip-count">{totalByTier[tier]}</span>
            </label>
          ))}
        </fieldset>
        <div className="bank-toggles">
          <label className="bank-check">
            <input type="checkbox" checked={pastExamOnly} onChange={(event) => setParam('past', event.target.checked ? '1' : undefined)} />
            Past exams only
          </label>
          <label className="bank-check">
            <input
              type="checkbox"
              checked={todoOnly}
              disabled={rightIds === undefined}
              onChange={(event) => setParam('todo', event.target.checked ? '1' : undefined)}
            />
            Not marked right yet
          </label>
          {filtering ? (
            <button type="button" className="button" onClick={() => setParams({}, { replace: true })}>
              Clear filters
            </button>
          ) : null}
        </div>
      </form>

      <p className="bank-count" role="status">
        {filtering ? `${shownCount} of ${total} exercises` : `${total} exercises`}
      </p>

      {shown.length === 0 ? (
        <p className="empty">No exercise matches these filters.</p>
      ) : (
        shown.map((item) => (
          <section key={item.number} className="bank-lecture" aria-labelledby={`bank-lecture-${item.number}`}>
            <h2 id={`bank-lecture-${item.number}`} className="bank-lecture-title">
              <span className="bank-lecture-number">Lecture {item.number}</span>
              {item.title}
            </h2>
            <ul className="bank-nodes">
              {item.nodes.map((node) => (
                <BankNodeView
                  key={node.id}
                  node={node}
                  open={opened.get(node.id) ?? autoOpen}
                  onToggle={(open) => setOpen(node.id, open)}
                  rightIds={rightIds}
                />
              ))}
            </ul>
          </section>
        ))
      )}
    </article>
  );
}

function BankNodeView({
  node,
  open,
  onToggle,
  rightIds,
}: {
  node: BankNode;
  open: boolean;
  onToggle: (open: boolean) => void;
  rightIds: ReadonlySet<string> | undefined;
}) {
  const right = rightIds ? countRight([node], rightIds) : undefined;
  const count = node.exercises.length;
  return (
    <li className="bank-node">
      <details open={open} onToggle={(event) => {
          // The page also opens topics by itself, and only a change the reader made is remembered.
          if (event.currentTarget.open !== open) onToggle(event.currentTarget.open);
        }}>
        <summary className="bank-node-summary">
          <span className="bank-node-title">{node.title}</span>
          <span className="bank-node-count">
            {count} {count === 1 ? 'exercise' : 'exercises'}
            {right ? `, ${right} right` : ''}
          </span>
        </summary>
        {open ? (
          <>
            <p className="bank-node-link">
              <Link to={`/node/${node.id}`}>Open the topic</Link>
            </p>
            <ul className="bank-exercises">
              {node.exercises.map((entry) => (
                <BankExerciseRow key={entry.exercise.id} entry={entry} right={rightIds?.has(entry.exercise.id)} />
              ))}
            </ul>
          </>
        ) : null}
      </details>
    </li>
  );
}

function BankExerciseRow({ entry, right }: { entry: BankExercise; right: boolean | undefined }) {
  const { exercise, nodeId } = entry;
  const [expanded, setExpanded] = useState(false);
  const origin = exerciseOrigin(exercise);
  const panelId = `bank-panel-${exercise.id}`;
  return (
    <li className={`bank-exercise bank-exercise-${exercise.tier}${expanded ? ' is-open' : ''}`}>
      <button
        type="button"
        className="bank-exercise-head"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="bank-exercise-meta">
          <span className={`bank-tier bank-tier-${exercise.tier}`}>
            <span className="level-dot" aria-hidden="true" />
            {TIER_LABEL[exercise.tier]}
          </span>
          {origin ? <span className="bank-origin">{origin}</span> : null}
          {exercise.outOfScope ? <span className="badge badge-out-of-scope">Out of current scope</span> : null}
          {right ? (
            <span className="exercise-done" role="img" aria-label="Marked right">
              ✓
            </span>
          ) : null}
          <svg className="bank-chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {expanded ? null : (
          <span className="bank-preview" aria-hidden="true">
            <Prose text={exercise.statement} />
          </span>
        )}
      </button>
      <div id={panelId} hidden={!expanded}>
        {expanded ? (
          <>
            <BlockView block={exercise} />
            <p className="bank-exercise-link">
              <Link to={`/node/${nodeId}#exercise-${exercise.id}`}>Open in the topic</Link>
            </p>
          </>
        ) : null}
      </div>
    </li>
  );
}

function countRight(nodes: readonly BankNode[], rightIds: ReadonlySet<string>): number {
  let count = 0;
  for (const node of nodes) {
    for (const { exercise } of node.exercises) if (rightIds.has(exercise.id)) count += 1;
  }
  return count;
}

/** The ids of the exercises whose latest attempt was fully right. */
function rightExerciseIds(attempts: readonly Attempt[]): Set<string> {
  const latest = new Map<string, Attempt>();
  for (const attempt of attempts) {
    const previous = latest.get(attempt.exerciseId);
    if (!previous || Date.parse(attempt.at) >= Date.parse(previous.at)) latest.set(attempt.exerciseId, attempt);
  }
  return new Set([...latest].filter(([, attempt]) => isMarkedRight(attempt)).map(([id]) => id));
}
