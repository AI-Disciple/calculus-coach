import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import { fetchDashboard, fetchDue, fetchMastery, fetchProgress } from '../progress/client.ts';
import { catalogFromBundle, courseItemIds, findExercise } from '../progress/course.ts';
import type { Mastery } from '../progress/dashboard.ts';
import { reviewsInCourse, type Attempt, type Progress } from '../progress/progress.ts';
import {
  bestMock,
  examReadiness,
  formatExamRight,
  formatPoints,
  doneShare,
  type ExamReadiness,
  type TopicReadiness,
} from '../progress/readiness.ts';
import { countExercises, exerciseBank } from './bank.ts';
import { MeterBar } from './MeterBar.tsx';

const course = catalogFromBundle(bundle);
const itemIds = courseItemIds(bundle);
const allNodes = bundle.lectures.flatMap((lecture) => lecture.nodes);
const allNodeIds = allNodes.map((node) => node.id);
const foundationNodeIds = bundle.lectures
  .filter((lecture) => lecture.number <= 3)
  .flatMap((lecture) => lecture.nodes.map((node) => node.id));
const firstNode = bundle.lectures.find((lecture) => lecture.number === 1)?.nodes[0] ?? allNodes[0];
const firstLecture = bundle.lectures.find((lecture) => lecture.nodes.some((node) => node.id === firstNode?.id));
const exerciseTotal = countExercises(exerciseBank(bundle));
const mockCount = bundle.papers.filter((paper) => paper.kind === 'mock').length;

/** What the page knows once all requests have answered. A failed request leaves its part undefined. */
type HomeData = {
  progress?: Progress;
  mastery?: Map<string, Mastery>;
  due?: number;
  mistakes?: number;
};

type ContinueTarget = { id: string; title: string };

export function Home() {
  const [data, setData] = useState<HomeData>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const [progress, badges, due, dashboard] = await Promise.all([
        fetchProgress(),
        fetchMastery(),
        fetchDue(),
        fetchDashboard(),
      ]);
      if (cancelled) return;
      const problem = [progress, badges, due, dashboard].find((result) => !result.ok);
      if (problem && !problem.ok) setError(problem.error);
      setData({
        progress: progress.ok ? progress.value : undefined,
        mastery: badges.ok ? new Map(badges.value.nodes.map((node) => [node.nodeId, node.mastery])) : undefined,
        due: due.ok ? reviewsInCourse(due.value.due, itemIds).length : undefined,
        mistakes: dashboard.ok ? dashboard.value.byType.reduce((sum, group) => sum + group.count, 0) : undefined,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const readiness = useMemo(
    () => (data?.progress ? examReadiness(data.progress, course) : undefined),
    [data?.progress],
  );

  return (
    <div className="home">
      <h1 className="visually-hidden">Analysis and Calculus</h1>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <Today data={data} />
      <ProgressSection data={data} readiness={readiness} />
      <Sections data={data} />
    </div>
  );
}

function Today({ data }: { data: HomeData | undefined }) {
  const target = data?.progress ? continueTarget(data.progress.attempts) : null;
  const due = data?.due;

  let headline = '';
  let main: { to: string; label: string } | undefined;
  let secondary: { to: string; label: string } | undefined;

  if (data) {
    const continueLink = target ? { to: `/node/${target.id}`, label: `Continue with ${target.title}` } : undefined;
    if (due !== undefined && due > 0) {
      headline = due === 1 ? '1 item is due' : `${due} items are due`;
      main = { to: '/review', label: 'Start review' };
      secondary = continueLink;
    } else if (continueLink) {
      headline = due === 0 ? 'Nothing is due today' : 'Pick up where you left off';
      main = continueLink;
    } else if (firstNode && firstLecture) {
      headline = `Start with lecture ${firstLecture.number}: ${firstNode.title}`;
      main = { to: `/node/${firstNode.id}`, label: `Start with ${firstNode.title}` };
    }
  }

  return (
    <section aria-labelledby="home-today">
      <h2 id="home-today" className="eyebrow">
        Today
      </h2>
      <div className="today-body" aria-busy={data === undefined}>
        <p className="today-headline">{headline}</p>
        <div className="today-actions">
          {main ? (
            <Link className="button button-main" to={main.to}>
              {main.label}
            </Link>
          ) : null}
          {secondary ? (
            <Link className="button" to={secondary.to}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type ReadinessView = 'loading' | 'error' | 'empty' | 'ready';

type TopicRow = {
  id: string;
  title: string;
  right: number;
  exercises: number;
  /** The count beside the title. Empty for a topic with no exam exercises. */
  value: string;
  hint: string;
  valueText: string;
};

/** The one sentence under the heading. Empty while the data loads, so the heading does not jump. */
const READINESS_SENTENCE: Record<ReadinessView, string> = {
  loading: '',
  error: 'The counts are unavailable right now.',
  empty: 'Only exercises with an exam topic label count here. Mark one on a topic from lecture 4 on, and these counts start to move.',
  ready: 'An exercise counts as right when your latest attempt at it was fully right.',
};

function ProgressSection({ data, readiness }: { data: HomeData | undefined; readiness: ExamReadiness | undefined }) {
  const view: ReadinessView = !data
    ? 'loading'
    : !readiness
      ? 'error'
      : readiness.attempted === 0
        ? 'empty'
        : 'ready';
  const foundations = data?.mastery ? doneShare(foundationNodeIds, data.mastery) : undefined;
  const foundationsValue = !foundations
    ? ''
    : foundations.done > 0
      ? `${foundations.done} of ${foundations.total} topics done`
      : `${foundations.total} topics, none done yet`;

  return (
    <section aria-labelledby="home-progress">
      <h2 id="home-progress" className="eyebrow">
        Progress
      </h2>
      <div className="readiness-head">
        <h3 className="readiness-title">Exam readiness</h3>
        <p className="readiness-total">{readiness ? formatExamRight(readiness) : ''}</p>
      </div>
      <p className="readiness-caption">{READINESS_SENTENCE[view]}</p>
      {readiness ? (
        <ul className="readiness-topics">
          {topicRows(readiness).map((row) => (
            <li key={row.id}>
              <div className="meter-head">
                <span className="meter-title">{row.title}</span>
                <span className="meter-value">{row.value}</span>
              </div>
              {row.exercises > 0 ? (
                <MeterBar now={row.right} max={row.exercises} label={row.title} valueText={row.valueText} />
              ) : null}
              <p className="meter-hint">{row.hint}</p>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="foundations">
        <div className="meter-head">
          <span className="meter-title">Foundations (lectures 1 to 3)</span>
          <span className="meter-value">{foundationsValue}</span>
        </div>
        <MeterBar
          quiet
          now={foundations?.done ?? 0}
          max={foundations?.total ?? foundationNodeIds.length}
          label="Foundations, lectures 1 to 3"
          valueText={foundationsValue || undefined}
        />
        <p className="meter-hint">The final does not examine lectures 1 to 3 directly. This bar shows how many of them you have finished.</p>
      </div>
    </section>
  );
}

/** What a topic row says it is based on: "Not tried yet", "3 tried", "3 tried, 1 partly right". */
function topicHint(topic: TopicReadiness): string {
  if (topic.exercises === 0) return 'No exam exercises yet';
  if (topic.attempted === 0) return 'Not tried yet';
  return `${topic.attempted} tried${topic.partly > 0 ? `, ${topic.partly} partly right` : ''}`;
}

/** One row per exam topic, each value read as right out of the exam exercises, for example "3 of 12 right". */
function topicRows(readiness: ExamReadiness): TopicRow[] {
  return readiness.topics.map((topic) => {
    const value = topic.exercises > 0 ? `${topic.right} of ${topic.exercises} right` : '';
    return {
      id: topic.block,
      title: topic.title,
      right: topic.right,
      exercises: topic.exercises,
      value,
      hint: topicHint(topic),
      valueText: value,
    };
  });
}

type Tile = { to: string; title: string; status: string };

function Sections({ data }: { data: HomeData | undefined }) {
  const tiles: Tile[] = [
    { to: '/lectures', title: 'Lectures', status: lecturesStatus(data) },
    { to: '/exercises', title: 'Exercise bank', status: `${exerciseTotal} exercises by lecture and topic` },
    { to: '/review', title: 'Review', status: reviewStatus(data) },
    { to: '/mocks', title: 'Mocks', status: mocksStatus(data) },
    { to: '/progress', title: 'Progress', status: progressStatus(data) },
    { to: '/formula-sheet', title: 'Formula sheet', status: 'Work in progress' },
  ];

  return (
    <section aria-labelledby="home-sections">
      <h2 id="home-sections" className="eyebrow">
        Sections
      </h2>
      <ul className="section-tiles">
        {tiles.map((tile) => (
          <li key={tile.to}>
            <Link className="section-tile" to={tile.to}>
              <span className="tile-text">
                <span className="tile-title">{tile.title}</span>
                <span className="tile-status">{tile.status}</span>
              </span>
              <svg className="tile-chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M9 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function lecturesStatus(data: HomeData | undefined): string {
  if (!data) return '';
  const { done } = data.mastery ? doneShare(allNodeIds, data.mastery) : { done: 0 };
  if (done > 0) return `${done} of ${allNodeIds.length} topics done`;
  return `${bundle.lectures.length} lectures, ${allNodeIds.length} topics`;
}

function reviewStatus(data: HomeData | undefined): string {
  if (!data) return '';
  if (data.due === undefined) return 'Open your review queue';
  return data.due > 0 ? `${data.due} due` : 'Nothing due';
}

function mocksStatus(data: HomeData | undefined): string {
  if (!data) return '';
  const best = data.progress ? bestMock(data.progress, bundle.papers) : null;
  if (best) return `Best mock ${formatPoints(best.earned)} of ${formatPoints(best.total)}`;
  if (mockCount === 0) return 'No mocks yet';
  return `${mockCount} ${mockCount === 1 ? 'paper' : 'papers'} to try`;
}

function progressStatus(data: HomeData | undefined): string {
  if (!data) return '';
  if (data.mistakes === undefined) return 'Your mistakes by type and lecture';
  if (data.mistakes === 0) return 'Fills in as you practise';
  return `${data.mistakes} ${data.mistakes === 1 ? 'mistake' : 'mistakes'} logged`;
}

function continueTarget(attempts: Attempt[]): ContinueTarget | null {
  let best: { at: string; id: string; title: string } | undefined;
  for (const attempt of attempts) {
    const found = findExercise(bundle, attempt.exerciseId);
    if (!found) continue;
    if (!best || attempt.at >= best.at) best = { at: attempt.at, id: found.node.id, title: found.node.title };
  }
  return best ? { id: best.id, title: best.title } : null;
}
