import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import { fetchMastery } from '../progress/client.ts';
import type { Mastery } from '../progress/dashboard.ts';
import { NotFound } from './NotFound.tsx';
import { OriginBadge } from './OriginBadge.tsx';

/** A node that is not started has no badge. Only these two states show one. */
const MASTERY_BADGE: Partial<Record<Mastery, string>> = {
  'in-progress': 'In progress',
  done: 'Done',
};

export function LecturePage() {
  const { n } = useParams();
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [n]);

  const index = n !== undefined && /^\d+$/.test(n) ? bundle.lectures.findIndex((item) => item.number === Number(n)) : -1;
  const lecture = index >= 0 ? bundle.lectures[index] : undefined;
  if (!lecture) return <NotFound />;

  const previous = index > 0 ? bundle.lectures[index - 1] : undefined;
  const next = index < bundle.lectures.length - 1 ? bundle.lectures[index + 1] : undefined;

  return (
    <article className="lecture-page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/lectures">Lectures</Link>
      </nav>
      <h1>Lecture {lecture.number}</h1>
      <p className="lecture-subtitle">{lecture.title}</p>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      {lecture.nodes.length === 0 ? (
        <p className="empty">No topics yet.</p>
      ) : (
        <ul className="node-list">
          {lecture.nodes.map((node) => {
            const state = mastery?.get(node.id);
            const badge = state ? MASTERY_BADGE[state] : undefined;
            return (
              <li key={node.id}>
                <Link to={`/node/${node.id}`}>{node.title}</Link>
                {badge ? <span className={`badge badge-mastery-${state}`}>{badge}</span> : null}
                {node.status === 'draft' ? <span className="badge">Draft</span> : null}
                <OriginBadge node={node} />
              </li>
            );
          })}
        </ul>
      )}
      <nav className="lecture-pager" aria-label="Other lectures">
        {previous ? (
          <Link className="pager-link" to={`/lecture/${previous.number}`} rel="prev">
            <span className="pager-label">Previous lecture</span>
            <span className="pager-title">
              Lecture {previous.number}: {previous.title}
            </span>
          </Link>
        ) : null}
        {next ? (
          <Link className="pager-link pager-next" to={`/lecture/${next.number}`} rel="next">
            <span className="pager-label">Next lecture</span>
            <span className="pager-title">
              Lecture {next.number}: {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
