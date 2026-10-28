import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import { fetchMastery } from '../progress/client.ts';
import type { Mastery } from '../progress/dashboard.ts';
import { doneShare, formatDoneShare } from '../progress/readiness.ts';
import { MeterBar } from './MeterBar.tsx';

export function LecturesPage() {
  const [mastery, setMastery] = useState<Map<string, Mastery>>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    let cancelled = false;
    void fetchMastery().then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setMastery(new Map(result.value.nodes.map((node) => [node.nodeId, node.mastery])));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <article className="lectures-page">
      <h1>Lectures</h1>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <ul className="lecture-cards">
        {bundle.lectures.map((lecture) => {
          const nodeIds = lecture.nodes.map((node) => node.id);
          const share = mastery ? doneShare(nodeIds, mastery) : undefined;
          const summary = share ? formatDoneShare(share) : '';
          return (
            <li key={lecture.number} className="lecture-card">
              <Link className="lecture-card-link" to={`/lecture/${lecture.number}`}>
                <span className="lecture-card-number">Lecture {lecture.number}</span>
                <span className="lecture-card-title">{lecture.title}</span>
              </Link>
              {nodeIds.length === 0 ? (
                <p className="meter-hint">No topics yet.</p>
              ) : (
                <>
                  <MeterBar
                    now={share?.done ?? 0}
                    max={share?.total ?? nodeIds.length}
                    label={`Lecture ${lecture.number} topics done`}
                    valueText={summary || undefined}
                  />
                  <p className="meter-hint">{summary}</p>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
