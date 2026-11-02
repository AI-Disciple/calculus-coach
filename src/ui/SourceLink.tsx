import { useEffect, useState } from 'react';
import bundle from 'virtual:content-bundle';
import type { SourceRef } from '../content/schema.ts';
import { locateSource, sourceLabel } from '../content/sources.ts';

let linkedSourcesCache: Promise<Set<string>> | undefined;

/** Sources this machine links to local files. Empty when there is no source-link config. */
function linkedSources(): Promise<Set<string>> {
  linkedSourcesCache ??= fetch('/api/sources')
    .then((res) => (res.ok ? res.json() : { available: [] }))
    .then((body: { available?: string[] }) => new Set(body.available ?? []))
    .catch(() => new Set<string>());
  return linkedSourcesCache;
}

function useLinkedSources(): Set<string> {
  const [linked, setLinked] = useState<Set<string>>(() => new Set());
  useEffect(() => {
    let active = true;
    linkedSources().then((set) => active && setLinked(set));
    return () => {
      active = false;
    };
  }, []);
  return linked;
}

export function SourceLink({ source }: { source: SourceRef }) {
  const linked = useLinkedSources();
  const entry = bundle.sources.find((s) => s.id === source.source);
  const label = sourceLabel(entry, source);
  if (!entry || (!entry.url && !linked.has(entry.id))) return <span className="source-text">{label}</span>;
  const { pdfPage } = locateSource(entry, source);
  const page = pdfPage ? `#page=${pdfPage}` : '';
  // A source with a url (the handout) links to the course site, so only people with course access can open it.
  const href = entry.url ? `${entry.url}${page}` : `/api/sources/${encodeURIComponent(entry.id)}${page}`;
  return (
    <a className="source-link" href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}
