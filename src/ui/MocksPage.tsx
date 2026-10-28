import { Link } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import type { Paper } from '../content/schema.ts';

const PRESENTATION_LIST: Record<Paper['presentation'], string> = {
  'current-format': 'Current format',
  'as-printed': 'As printed',
};

export function MocksPage() {
  const mocks = bundle.papers.filter((paper) => paper.kind === 'mock');
  const checkpoints = bundle.papers.filter((paper) => paper.kind === 'checkpoint');

  return (
    <article className="mocks-page">
      <h1>Mocks</h1>
      {mocks.length === 0 ? <p className="empty">No mocks yet.</p> : null}
      <ul className="paper-list">
        {mocks.map((paper) => (
          <li key={paper.id} className="paper-list-item">
            <Link to={`/mocks/${paper.id}`}>{paper.title}</Link>
            {paper.standIn ? <span className="badge">Stand-in</span> : null}
            <p className="paper-meta">
              {paper.year} · {paper.durationMinutes} minutes · {paper.totalPoints}{' '}
              {paper.totalPoints === 1 ? 'point' : 'points'} · {PRESENTATION_LIST[paper.presentation]}
            </p>
          </li>
        ))}
      </ul>

      <h2>Checkpoints</h2>
      <p>Optional. A checkpoint never gates the course.</p>
      {checkpoints.length === 0 ? (
        <p className="empty">No checkpoints yet.</p>
      ) : (
        <ul className="paper-list">
          {checkpoints.map((paper) => (
            <li key={paper.id} className="paper-list-item">
              <Link to={`/mocks/${paper.id}`}>{paper.title}</Link>
              <p className="paper-meta">
                {paper.year} · {paper.durationMinutes} minutes · {paper.totalPoints}{' '}
                {paper.totalPoints === 1 ? 'point' : 'points'} · {PRESENTATION_LIST[paper.presentation]}
              </p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
