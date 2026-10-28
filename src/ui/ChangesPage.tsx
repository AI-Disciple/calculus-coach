import { Link } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import { Prose } from './prose.tsx';
import { nodeTitleFor } from './courseNodes.ts';

const NODE_LIST_LIMIT = 12;

export function ChangesPage() {
  const { changes } = bundle;

  if (changes.length === 0) {
    return (
      <div className="changes-page">
        <h1>What changed</h1>
        <p className="empty">No changes recorded yet.</p>
      </div>
    );
  }

  return (
    <div className="changes-page">
      <h1>What changed</h1>
      <ol className="change-log">
        {changes.map((entry, index) => (
          <li key={`${entry.date}-${entry.title}-${index}`} className="change-entry">
            <p className="change-meta">
              <time dateTime={entry.date}>{entry.date}</time>
              {' · '}
              <span className="change-title">{entry.title}</span>
            </p>
            <Prose text={entry.text} />
            {entry.nodes.length > 0 ? <ChangeNodes nodes={entry.nodes} /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ChangeNodes({ nodes }: { nodes: string[] }) {
  const links = nodes.map((id) => (
    <li key={id}>
      <Link to={`/node/${id}`}>{nodeTitleFor(id)}</Link>
    </li>
  ));

  if (nodes.length <= NODE_LIST_LIMIT) {
    return <ul className="change-nodes">{links}</ul>;
  }

  return (
    <details className="change-nodes-details">
      <summary>{nodes.length} topics</summary>
      <ul className="change-nodes">{links}</ul>
    </details>
  );
}
