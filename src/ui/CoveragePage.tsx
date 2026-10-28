import { useState } from 'react';
import { Link } from 'react-router-dom';
import bundle from 'virtual:content-bundle';
import type { CoverageItem } from '../content/schema.ts';
import { nodeTitleFor, sourceTitleFor } from './courseNodes.ts';

type View = 'source' | 'node';

type NodeMapping = { sourceId: string; sourceTitle: string; label: string };

export function CoveragePage() {
  const [view, setView] = useState<View>('source');
  const { coverage } = bundle;

  const allItems = coverage.sources.flatMap((g) => g.items);
  const totalItems = allItems.length;
  const sourceCount = coverage.sources.length;
  const excludedCount = allItems.filter((item) => item.excluded).length;

  const byNode = buildNodeIndex(coverage.sources);

  return (
    <div className="coverage-page">
      <h1>Coverage</h1>
      <p className="coverage-summary">{summaryLine(totalItems, sourceCount, excludedCount)}</p>

      <div className="coverage-tabs" role="tablist" aria-label="Coverage views">
        <button
          type="button"
          role="tab"
          className="coverage-tab"
          aria-selected={view === 'source'}
          onClick={() => setView('source')}
        >
          By source
        </button>
        <button
          type="button"
          role="tab"
          className="coverage-tab"
          aria-selected={view === 'node'}
          onClick={() => setView('node')}
        >
          By topic
        </button>
      </div>

      {view === 'source' ? (
        <div role="tabpanel">
          {coverage.sources.map((group) => (
            <section key={group.source} className="coverage-group">
              <h2>{sourceTitleFor(group.source)}</h2>
              <p className="coverage-group-meta">{groupMeta(group.items)}</p>
              <ul className="coverage-item-list">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <CoverageItemLine item={item} />
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {coverage.skipped.length > 0 ? (
            <section className="coverage-skipped">
              <h2>Sources without items of their own</h2>
              <ul>
                {coverage.skipped.map((entry) => (
                  <li key={entry.source}>
                    <strong>{sourceTitleFor(entry.source)}</strong>: {entry.reason}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      ) : (
        <div role="tabpanel">
          {bundle.lectures.map((lecture) =>
            lecture.nodes.map((node) => {
              const mappings = byNode.get(node.id) ?? [];
              return (
                <section key={node.id} className="coverage-node-section">
                  <h2>
                    <Link to={`/node/${node.id}`}>{node.title}</Link>
                  </h2>
                  {mappings.length === 0 ? (
                    <p className="empty">No source items mapped yet.</p>
                  ) : (
                    <ul className="coverage-node-items">
                      {mappings.map((m, index) => (
                        <li key={`${m.sourceId}-${m.label}-${index}`}>
                          {m.sourceTitle}: {m.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            }),
          )}
        </div>
      )}
    </div>
  );
}

function CoverageItemLine({ item }: { item: CoverageItem }) {
  return (
    <p className="coverage-item-line">
      <span className="coverage-item-label">
        {item.label}
        {item.page !== undefined ? `, page ${item.page}` : ''}
      </span>
      {item.excluded ? (
        <span className="coverage-excluded"> Excluded: {item.excluded}</span>
      ) : item.nodes && item.nodes.length > 0 ? (
        <span className="coverage-mapped">
          {' → '}
          {item.nodes.map((nodeId, index) => (
            <span key={nodeId}>
              {index > 0 ? ', ' : null}
              <Link to={`/node/${nodeId}`}>{nodeTitleFor(nodeId)}</Link>
            </span>
          ))}
        </span>
      ) : null}
    </p>
  );
}

function groupMeta(items: CoverageItem[]): string {
  const excluded = items.filter((item) => item.excluded).length;
  const itemWord = items.length === 1 ? 'item' : 'items';
  if (excluded === 0) return `${items.length} ${itemWord}`;
  return `${items.length} ${itemWord}, ${excluded} excluded`;
}

function summaryLine(totalItems: number, sourceCount: number, excludedCount: number): string {
  const itemWord = totalItems === 1 ? 'item' : 'items';
  const sourceWord = sourceCount === 1 ? 'source' : 'sources';
  let line = `${totalItems} source ${itemWord} from ${sourceCount} ${sourceWord}.`;
  if (excludedCount === 0) return line;
  const exVerb = excludedCount === 1 ? 'is' : 'are';
  line += ` ${excludedCount} ${exVerb} excluded with a reason.`;
  return line;
}

function buildNodeIndex(sources: typeof bundle.coverage.sources): Map<string, NodeMapping[]> {
  const map = new Map<string, NodeMapping[]>();
  for (const group of sources) {
    const sourceTitle = sourceTitleFor(group.source);
    for (const item of group.items) {
      if (item.excluded || !item.nodes) continue;
      for (const nodeId of item.nodes) {
        const list = map.get(nodeId) ?? [];
        list.push({ sourceId: group.source, sourceTitle, label: item.label });
        map.set(nodeId, list);
      }
    }
  }
  return map;
}
