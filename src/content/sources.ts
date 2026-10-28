import type { SourceEntry, SourceRef } from './schema.ts';

export type SourceLocation = { pdfPage?: number; problem?: string };

/** Finds the PDF page a reference points at, using the page-numbering rule of its registry entry. */
export function locateSource(entry: SourceEntry, ref: SourceRef): SourceLocation {
  if (ref.page !== undefined) {
    const page = leadingNumber(ref.page);
    if (entry.pageNumbering === 'none') return { problem: `${entry.id} has no pages, so page ${ref.page} cannot be cited` };
    if (page === undefined) return {};
    if (entry.pageNumbering !== 'printed') return { pdfPage: page };
    const range = entry.printedPages.find((r) => r.from <= page && page <= r.to);
    if (!range) return { problem: `${entry.id} page ${ref.page} falls in none of its printed page ranges` };
    return { pdfPage: page - range.offset };
  }
  if (ref.section !== undefined && entry.pageNumbering === 'printed' && entry.sections) {
    const pdfPage = entry.sections[ref.section];
    if (pdfPage === undefined) return { problem: `${entry.id} section "${ref.section}" is not listed in the source registry` };
    return { pdfPage };
  }
  return {};
}

/** The reference as a reader sees it, for example "Handout, section 14.7, page 373". */
export function sourceLabel(entry: SourceEntry | undefined, ref: SourceRef): string {
  const parts = [entry?.title ?? ref.source];
  if (ref.section !== undefined) parts.push(`section ${ref.section}`);
  if (ref.page !== undefined) parts.push(`page ${ref.page}`);
  return parts.join(', ');
}

/** Page ranges such as "373-374" link to their first page. */
function leadingNumber(page: number | string): number | undefined {
  if (typeof page === 'number') return page;
  const match = /^\s*(\d+)/.exec(page);
  return match ? Number(match[1]) : undefined;
}
