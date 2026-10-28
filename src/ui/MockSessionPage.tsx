import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import type { Paper, PaperBlock } from '../content/schema.ts';
import { findExercise } from '../progress/course.ts';
import { fetchProgress, savePaperResult } from '../progress/client.ts';
import { compareMockResult, type MockComparison } from '../progress/mockCompare.ts';
import { formatPoints } from '../progress/readiness.ts';
import type { AttemptInput, BlockScore, MistakeType, PaperResult } from '../progress/progress.ts';
import { MISTAKE_LABELS, MISTAKE_TYPES } from '../progress/progress.ts';
import { Tick } from './moments.tsx';
import { Prose } from './prose.tsx';

type Phase = 'intro' | 'running' | 'marking' | 'result';

type RubricKey = `${string}:${number}`;

type RubricMark = { result: 'right' | 'wrong'; mistakeType?: MistakeType };

const PRESENTATION_INTRO: Record<Paper['presentation'], string> = {
  'current-format': 'Current final format',
  'as-printed': 'As printed',
};

function rubricKey(block: PaperBlock, index: number): RubricKey {
  return `${block.id}:${index}`;
}

function formatTimer(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function buildAttempts(paper: Paper, marks: Map<RubricKey, RubricMark>): AttemptInput[] {
  const exerciseOrder: string[] = [];
  const rubricByExercise = new Map<string, RubricMark[]>();

  for (const block of paper.blocks) {
    block.rubric.forEach((item, index) => {
      const key = rubricKey(block, index);
      const mark = marks.get(key);
      if (!mark) return;
      if (!rubricByExercise.has(item.exercise)) {
        rubricByExercise.set(item.exercise, []);
        exerciseOrder.push(item.exercise);
      }
      rubricByExercise.get(item.exercise)!.push(mark);
    });
  }

  const attempts: AttemptInput[] = [];
  for (const exerciseId of exerciseOrder) {
    const found = findExercise(bundle, exerciseId);
    const stepMarks = rubricByExercise.get(exerciseId);
    if (!found || !stepMarks) continue;
    const tier = found.exercise.tier;
    if (stepMarks.length === 1) {
      const mark = stepMarks[0];
      if (mark.result === 'right') {
        attempts.push({ exerciseId, tier, result: 'right' });
      } else {
        attempts.push({ exerciseId, tier, result: 'wrong', mistakeType: mark.mistakeType! });
      }
    } else {
      attempts.push({
        exerciseId,
        tier,
        steps: stepMarks.map((mark) =>
          mark.result === 'right'
            ? { result: 'right' as const }
            : { result: 'wrong' as const, mistakeType: mark.mistakeType! },
        ),
      });
    }
  }
  return attempts;
}

function scorePaper(paper: Paper, marks: Map<RubricKey, RubricMark>): number {
  let earned = 0;
  for (const block of paper.blocks) {
    block.rubric.forEach((item, index) => {
      const mark = marks.get(rubricKey(block, index));
      if (mark?.result === 'right') earned += item.points;
    });
  }
  return earned;
}

function scoreBlocks(paper: Paper, marks: Map<RubricKey, RubricMark>): BlockScore[] {
  return paper.blocks.flatMap((block) => {
    const total = block.rubric.reduce((sum, item) => sum + item.points, 0);
    if (total <= 0) return [];
    const earned = block.rubric.reduce(
      (sum, item, index) => sum + (marks.get(rubricKey(block, index))?.result === 'right' ? item.points : 0),
      0,
    );
    return [{ blockId: block.id, title: block.title, earned, total }];
  });
}

function changeWord(change: number | null): string {
  if (change === null) return 'new';
  if (Math.abs(change) < 0.25) return 'same';
  return `${change > 0 ? 'up' : 'down'} ${formatPoints(Math.abs(change))}`;
}

function comparisonSentence(comparison: MockComparison): string {
  if (comparison.against === null || comparison.totalChange === null) {
    return 'This is your first attempt. Later attempts compare against it.';
  }
  const where = comparison.against === 'paper' ? 'at this paper' : 'at a paper in this format';
  const change = comparison.totalChange;
  if (Math.abs(change) < 0.25) return `Same as your last attempt ${where}.`;
  const size = formatPoints(Math.abs(change));
  const points = size === '1' ? 'point' : 'points';
  return `${change > 0 ? 'Up' : 'Down'} ${size} ${points} on your last attempt ${where}.`;
}

export function MockSessionPage() {
  const { id } = useParams();
  const paper = bundle.papers.find((entry) => entry.id === id);
  if (!paper) {
    return (
      <p className="notice">
        Mock not found. <Link to="/mocks">Mocks</Link>
      </p>
    );
  }
  return <MockSessionBody paper={paper} />;
}

function MockSessionBody({ paper }: { paper: Paper }) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [marks, setMarks] = useState<Map<RubricKey, RubricMark>>(() => new Map());
  const [markError, setMarkError] = useState<string>();
  const [saveError, setSaveError] = useState<string>();
  const [result, setResult] = useState<PaperResult>();
  const [comparison, setComparison] = useState<MockComparison>();

  useEffect(() => {
    if (phase !== 'running') return;
    const timer = window.setInterval(() => {
      setSecondsLeft((value) => (value <= 1 ? 0 : value - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === 'running' && secondsLeft === 0) setPhase('marking');
  }, [phase, secondsLeft]);

  function start() {
    setSecondsLeft(paper.durationMinutes * 60);
    setPhase('running');
  }

  function setRubricMark(block: PaperBlock, index: number, result: 'right' | 'wrong') {
    const key = rubricKey(block, index);
    setMarks((current) => {
      const next = new Map(current);
      if (result === 'right') next.set(key, { result: 'right' });
      else next.set(key, { result: 'wrong', mistakeType: next.get(key)?.mistakeType });
      return next;
    });
    setMarkError(undefined);
  }

  function setMistake(block: PaperBlock, index: number, mistakeType: MistakeType) {
    const key = rubricKey(block, index);
    setMarks((current) => {
      const next = new Map(current);
      const existing = next.get(key);
      if (existing?.result === 'wrong') next.set(key, { result: 'wrong', mistakeType });
      return next;
    });
  }

  async function saveResult() {
    for (const block of paper.blocks) {
      for (let index = 0; index < block.rubric.length; index++) {
        const mark = marks.get(rubricKey(block, index));
        if (!mark) {
          setMarkError('Mark every rubric item before saving.');
          return;
        }
        if (mark.result === 'wrong' && !mark.mistakeType) {
          setMarkError('Choose a mistake type for each wrong item.');
          return;
        }
      }
    }
    const earned = scorePaper(paper, marks);
    const attempts = buildAttempts(paper, marks);
    const saved = await savePaperResult(paper.id, {
      earned,
      total: paper.totalPoints,
      attempts,
      blocks: scoreBlocks(paper, marks),
    });
    if (!saved.ok) {
      setSaveError(saved.error);
      return;
    }
    setSaveError(undefined);
    const progress = await fetchProgress();
    setComparison(
      progress.ok ? compareMockResult(saved.value.paperResult, progress.value.paperResults ?? [], bundle.papers) : undefined,
    );
    setResult(saved.value.paperResult);
    setPhase('result');
  }

  if (phase === 'result' && result) {
    return (
      <article className="mock-session">
        <h1>{paper.title}</h1>
        <div className="mock-result">
          <p className="mock-score">
            {result.earned} out of {result.total}
          </p>
          {comparison?.personalBest ? (
            <p className="mock-best">
              <span className="badge badge-mastery-done personal-best">
                <Tick />
                Personal best
              </span>
            </p>
          ) : null}
          {comparison ? <p className="mock-compare">{comparisonSentence(comparison)}</p> : null}
          {comparison && comparison.blocks.length > 0 ? (
            <ul className="mock-block-changes" aria-label="Change by block">
              {comparison.blocks.map((block) => (
                <li key={block.blockId}>
                  <span className="mock-block-title">{block.title}</span>
                  <span className="mock-block-score">
                    {formatPoints(block.earned)} of {formatPoints(block.total)}
                  </span>
                  <span className={block.change !== null && block.change > 0.25 ? 'mock-change mock-change-up' : 'mock-change'}>
                    {changeWord(block.change)}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <p>
          <Link to="/review">Review queue</Link>
        </p>
      </article>
    );
  }

  if (phase === 'intro') {
    return (
      <article className="mock-session">
        <h1>{paper.title}</h1>
        {paper.standIn ? <span className="badge">Stand-in</span> : null}
        <dl className="mock-meta">
          <div>
            <dt>Source</dt>
            <dd>{paper.source}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{paper.year}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{paper.durationMinutes} minutes</dd>
          </div>
          <div>
            <dt>Total points</dt>
            <dd>{paper.totalPoints}</dd>
          </div>
          <div>
            <dt>Allowed material</dt>
            <dd>{paper.allowedMaterial}</dd>
          </div>
          <div>
            <dt>Presentation</dt>
            <dd>{PRESENTATION_INTRO[paper.presentation]}</dd>
          </div>
        </dl>
        <section className="mock-blocks">
          <h2 className="visually-hidden">Exam blocks</h2>
          {paper.blocks.map((block) => (
            <div key={block.id} className="mock-block-budget">
              <h3 className="block-heading">{block.title}</h3>
              <p>
                {block.points} {block.points === 1 ? 'point' : 'points'} · {block.minutes} minutes
              </p>
            </div>
          ))}
        </section>
        <button type="button" className="button button-main" onClick={start}>
          Start
        </button>
      </article>
    );
  }

  return (
    <article className="mock-session">
      <h1>{paper.title}</h1>
      {phase === 'running' ? (
        <p role="timer" aria-label="Time left">
          {formatTimer(secondsLeft)}
        </p>
      ) : null}

      <section className="mock-blocks">
        {paper.blocks.map((block) => (
          <div key={block.id} className="mock-block">
            <h2 className="block-heading">{block.title}</h2>
            <p>
              {block.points} {block.points === 1 ? 'point' : 'points'} · {block.minutes} minutes
            </p>
            <ul className="mock-exercises">
              {block.exercises.map((exerciseId) => {
                const found = findExercise(bundle, exerciseId);
                if (!found) return null;
                return (
                  <li key={exerciseId}>
                    {found.exercise.outOfScope ? (
                      <div className="exercise-meta">
                        <span className="badge badge-out-of-scope">Out of current scope</span>
                      </div>
                    ) : null}
                    <Prose text={found.exercise.statement} />
                    {phase === 'marking' ? (
                      <div className="solution">
                        <Prose text={found.exercise.solution} />
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
            {phase === 'marking'
              ? block.rubric.map((item, index) => {
                  const key = rubricKey(block, index);
                  const mark = marks.get(key);
                  return (
                    <div key={key} className="mock-rubric-item">
                      <p>
                        {item.text} ({item.points} {item.points === 1 ? 'point' : 'points'})
                      </p>
                      <div className="mark-actions">
                        <button
                          type="button"
                          className="button"
                          aria-pressed={mark?.result === 'right'}
                          onClick={() => setRubricMark(block, index, 'right')}
                        >
                          Right
                        </button>
                        <button
                          type="button"
                          className="button"
                          aria-pressed={mark?.result === 'wrong'}
                          onClick={() => setRubricMark(block, index, 'wrong')}
                        >
                          Wrong
                        </button>
                      </div>
                      {mark?.result === 'wrong' ? (
                        <label>
                          Mistake type{' '}
                          <select
                            aria-label="Mistake type"
                            value={mark.mistakeType ?? ''}
                            onChange={(event) => setMistake(block, index, event.target.value as MistakeType)}
                          >
                            <option value="">Choose</option>
                            {MISTAKE_TYPES.map((type) => (
                              <option key={type} value={type}>
                                {MISTAKE_LABELS[type]}
                              </option>
                            ))}
                          </select>
                        </label>
                      ) : null}
                    </div>
                  );
                })
              : null}
          </div>
        ))}
      </section>

      {phase === 'running' ? (
        <button type="button" className="button button-main" onClick={() => setPhase('marking')}>
          Finish and mark
        </button>
      ) : (
        <>
          {markError ? <p className="notice">{markError}</p> : null}
          {saveError ? <p className="notice">{saveError}</p> : null}
          <button type="button" className="button button-main" onClick={() => void saveResult()}>
            Save result
          </button>
        </>
      )}
    </article>
  );
}
