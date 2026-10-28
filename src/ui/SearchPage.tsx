import { Link, useSearchParams } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import { searchCourse } from './search.ts';

export function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get('q') ?? '';
  const hits = searchCourse(bundle, query);
  const trimmed = query.trim();

  return (
    <div className="search-page">
      <h1>Search</h1>
      {trimmed.length < 2 ? <p className="empty">Type a topic title or an exercise number.</p> : null}
      {trimmed.length >= 2 && hits.length === 0 ? <p className="empty">Nothing matches "{trimmed}".</p> : null}
      {hits.length > 0 ? (
        <ul className="search-results">
          {hits.map((hit) => (
            <li key={hit.key}>
              <Link to={hit.href}>{hit.label}</Link>
              <span className="badge">{hit.kind}</span>
              <p className="search-where">
                Lecture {hit.lecture}
                {hit.kind === 'Topic' ? '' : `, ${hit.nodeTitle}`}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
