import bundle from 'virtual:content-bundle';
import type { SourceRef } from '../content/schema.ts';
import { locateSource, sourceLabel } from '../content/sources.ts';

/** A source with a url (the handout, the exercise sheets) links to the course site, so only people with course access can open it. Every other source shows as text. */
export function SourceLink({ source }: { source: SourceRef }) {
  const entry = bundle.sources.find((s) => s.id === source.source);
  const label = sourceLabel(entry, source);
  if (!entry?.url) return <span className="source-text">{label}</span>;
  const { pdfPage } = locateSource(entry, source);
  return (
    <a className="source-link" href={`${entry.url}${pdfPage ? `#page=${pdfPage}` : ''}`} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}
