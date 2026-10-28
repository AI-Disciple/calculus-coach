import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bundle from "virtual:content-bundle";
import { courseNodes } from "../content/nodes.ts";
import {
  fetchDashboard,
  fetchMastery,
  fetchProgress,
} from "../progress/client.ts";
import { catalogFromBundle, findExercise } from "../progress/course.ts";
import type {
  Dashboard,
  MasteryReport,
  MistakeRef,
} from "../progress/dashboard.ts";
import {
  MISTAKE_LABELS,
  TIERS,
  type Progress,
} from "../progress/progress.ts";
import { formatPoints } from "../progress/readiness.ts";
import { mistakeTrends, type MistakeTrend } from "../progress/trends.ts";
import { winsFromProgress, type Wins } from "../progress/wins.ts";
import { formatCalendarDay } from "./formatDay.ts";
import { MeterBar } from "./MeterBar.tsx";
import { TIER_LABEL } from "./tiers.ts";

const course = catalogFromBundle(bundle);
const DONE_LIST_CAP = 12;

type PageData = {
  progress?: Progress;
  mastery?: MasteryReport;
  dashboard?: Dashboard;
};

export function ProgressPage() {
  const [data, setData] = useState<PageData>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const [progress, mastery, dashboard] = await Promise.all([
        fetchProgress(),
        fetchMastery(),
        fetchDashboard(),
      ]);
      if (cancelled) return;
      const problem = [progress, mastery, dashboard].find(
        (result) => !result.ok,
      );
      setError(problem && !problem.ok ? problem.error : undefined);
      setData({
        progress: progress.ok ? progress.value : undefined,
        mastery: mastery.ok ? mastery.value : undefined,
        dashboard: dashboard.ok ? dashboard.value : undefined,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const dashboard = data?.dashboard;
  const wins =
    data?.progress && data.mastery
      ? winsFromProgress(data.progress, course, data.mastery, bundle.papers)
      : undefined;
  const trends = data?.progress
    ? mistakeTrends(data.progress, new Date().toISOString())
    : undefined;
  const empty =
    dashboard &&
    dashboard.byType.length === 0 &&
    dashboard.byNode.length === 0 &&
    dashboard.byLecture.length === 0 &&
    dashboard.overTime.length === 0;

  return (
    <div className="dashboard">
      <h1>Progress</h1>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      {data === undefined ? <p className="review-count">Loading.</p> : null}
      {wins ? <WinsSection wins={wins} /> : null}
      {dashboard ? (
        <section
          className="dashboard-patterns"
          aria-labelledby="patterns-heading"
        >
          <h2 id="patterns-heading" className="dashboard-section-title">
            Patterns to fix
          </h2>
          {empty ? <p className="empty">No mistakes recorded.</p> : null}
          {!empty ? (
            <section className="dashboard-group" aria-label="By mistake type">
              <h2>By mistake type</h2>
              <ul className="dashboard-list">
                {typeRows(dashboard, trends).map(
                  ({ type, count, exercises, trend }) => (
                    <li key={type}>
                      <p>
                        {MISTAKE_LABELS[type]}
                        <span className="dashboard-count">{count}</span>
                        {trend?.beaten ? (
                          <span className="badge badge-mastery-done dashboard-beaten">
                            Beaten
                          </span>
                        ) : null}
                      </p>
                      {trend ? (
                        <p
                          className={`dashboard-trend dashboard-trend-${trend.direction}`}
                        >
                          {trendText(trend)}
                        </p>
                      ) : null}
                      {count > 0 ? (
                        <ExerciseLinks exercises={exercises} />
                      ) : null}
                    </li>
                  ),
                )}
              </ul>
            </section>
          ) : null}
          {dashboard && dashboard.byNode.length > 0 ? (
            <section className="dashboard-group" aria-label="By topic">
              <h2>By topic</h2>
              <ul className="dashboard-list">
                {dashboard.byNode.map((group) => (
                  <li key={group.nodeId}>
                    <p>
                      <Link to={`/node/${group.nodeId}`}>
                        {nodeTitle(group.nodeId)}
                      </Link>
                      <span className="dashboard-count">{group.count}</span>
                    </p>
                    <ExerciseLinks exercises={group.exercises} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {dashboard && dashboard.byLecture.length > 0 ? (
            <section className="dashboard-group" aria-label="By lecture">
              <h2>By lecture</h2>
              <ul className="dashboard-list">
                {dashboard.byLecture.map((group) => (
                  <li key={group.lecture}>
                    <p>
                      Lecture {group.lecture}
                      <span className="dashboard-count">{group.count}</span>
                    </p>
                    <ExerciseLinks exercises={group.exercises} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {dashboard && dashboard.overTime.length > 0 ? (
            <section className="dashboard-group" aria-label="Over time">
              <h2>Over time</h2>
              <ul className="dashboard-list">
                {dashboard.overTime.map((group) => (
                  <li key={group.date}>
                    <p>
                      {formatCalendarDay(group.date)}
                      <span className="dashboard-count">{group.count}</span>
                    </p>
                    <ExerciseLinks exercises={group.exercises} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}

function ExerciseLinks({ exercises }: { exercises: MistakeRef[] }) {
  const ids: string[] = [];
  for (const exercise of exercises) {
    if (!ids.includes(exercise.exerciseId)) ids.push(exercise.exerciseId);
  }
  return (
    <ul className="dashboard-exercises">
      {ids.map((id) => {
        const found = findExerciseLink(id);
        return (
          <li key={id}>
            {found ? <Link to={found.href}>{found.label}</Link> : id}
          </li>
        );
      })}
    </ul>
  );
}

function findExerciseLink(
  id: string,
): { href: string; label: string } | undefined {
  const found = findExercise(bundle, id);
  if (!found) return undefined;
  const line = found.exercise.statement.trim().split("\n")[0] ?? id;
  return {
    href: `/node/${found.node.id}#exercise-${found.exercise.id}`,
    label: line,
  };
}

function nodeTitle(id: string): string {
  for (const { node } of courseNodes(bundle)) {
    if (node.id === id) return node.title;
  }
  return id;
}

function typeRows(dashboard: Dashboard, trends: MistakeTrend[] | undefined) {
  return trends
    ? trends.map((trend) => {
        const group = dashboard.byType.find(
          (entry) => entry.mistakeType === trend.mistakeType,
        );
        return {
          type: trend.mistakeType,
          count: group?.count ?? 0,
          exercises: group?.exercises ?? [],
          trend,
        };
      })
    : dashboard.byType.map((group) => ({
        type: group.mistakeType,
        count: group.count,
        exercises: group.exercises,
        trend: undefined,
      }));
}

export function trendText(trend: MistakeTrend): string {
  if (trend.beaten) return "None in the last two weeks";
  if (trend.direction === "same") {
    if (trend.recent === 0)
      return "None in the last two weeks or the two weeks before";
    return `Same: ${trend.recent} in each`;
  }
  const word = trend.direction === "down" ? "Down" : "Up";
  return `${word}: ${trend.recent} in the last two weeks, ${trend.before} in the two weeks before`;
}

function WinsSection({ wins }: { wins: Wins }) {
  const none =
    wins.doneNodes.length === 0 &&
    wins.mockBests.length === 0 &&
    TIERS.every((tier) => wins.byTier[tier].right === 0);
  const shown = wins.doneNodes.slice(0, DONE_LIST_CAP);
  const more = wins.doneNodes.length - shown.length;
  const tierTotal = TIERS.reduce(
    (sum, tier) => sum + wins.byTier[tier].total,
    0,
  );
  return (
    <section className="dashboard-group dashboard-wins" aria-label="Wins">
      <h2 className="dashboard-section-title">Wins</h2>
      {none ? (
        <p className="empty">
          Nothing finished yet. Your first finished topic or right exercise shows up
          here.
        </p>
      ) : (
        <>
          <div className="wins-part">
            <h3>Topics done</h3>
            {wins.doneNodes.length === 0 ? (
              <p className="empty">
                Topics you finish show here as done.
              </p>
            ) : (
              <>
                <p className="wins-line">
                  {wins.doneNodes.length} of {wins.totalNodes} topics done
                </p>
                <MeterBar
                  quiet
                  now={wins.doneNodes.length}
                  max={wins.totalNodes}
                  label="Topics done"
                  valueText={`${wins.doneNodes.length} of ${wins.totalNodes} topics`}
                />
                <ul className="wins-nodes">
                  {shown.map((node) => (
                    <li key={node.nodeId}>
                      <Link to={`/node/${node.nodeId}`}>
                        {nodeTitle(node.nodeId)}
                      </Link>
                    </li>
                  ))}
                </ul>
                {more > 0 ? <p className="wins-more">and {more} more</p> : null}
              </>
            )}
          </div>
          <div className="wins-part">
            <h3>Exercises right</h3>
            {tierTotal === 0 ? (
              <p className="empty">Exercises you get right show here.</p>
            ) : (
              <ul className="wins-tiers">
                {TIERS.map((tier) => {
                  const { right, total } = wins.byTier[tier];
                  return (
                    <li key={tier}>
                      <p className="wins-line">
                        <span>{TIER_LABEL[tier]}</span>
                        <span className="wins-value">
                          {right} of {total} exercises right
                        </span>
                      </p>
                      <MeterBar
                        quiet
                        now={right}
                        max={total}
                        label={`${TIER_LABEL[tier]} exercises right`}
                        valueText={`${right} of ${total} exercises`}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="wins-part">
            <h3>Mock bests</h3>
            {wins.mockBests.length === 0 ? (
              <p className="empty">
                Mocks you score show their best result here.
              </p>
            ) : (
              <ul className="wins-mocks">
                {wins.mockBests.map((best) => (
                  <li key={best.paperId}>
                    <Link to={`/mocks/${best.paperId}`}>
                      {paperTitle(best.paperId)}
                    </Link>
                    {`: best ${formatPoints(best.earned)} of ${formatPoints(best.total)}`}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </section>
  );
}

function paperTitle(id: string): string {
  return bundle.papers.find((paper) => paper.id === id)?.title ?? id;
}
