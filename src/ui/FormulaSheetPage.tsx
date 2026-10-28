import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSheet, saveSheet } from '../progress/client.ts';
import type { SheetDraft } from '../progress/progress.ts';
import { EMPTY_SHEET_DRAFT } from '../progress/progress.ts';
import { Prose } from './prose.tsx';
import {
  collectSheetItems,
  courseSheetOrder,
  includedSheetLineTotal,
  moveId,
  orderedSheetIds,
  sheetCategoryLabel,
  sheetDisplayText,
  sheetItemShortName,
  sheetSizeSentence,
  type SheetItemEntry,
} from './sheetItems.ts';

type Group = { lecture: SheetItemEntry['lecture']; nodes: { node: SheetItemEntry['node']; items: SheetItemEntry[] }[] };

function groupSheetItems(ordered: SheetItemEntry[]): Group[] {
  const groups: Group[] = [];
  for (const item of ordered) {
    let lectureGroup = groups.find((g) => g.lecture.number === item.lecture.number);
    if (!lectureGroup) {
      lectureGroup = { lecture: item.lecture, nodes: [] };
      groups.push(lectureGroup);
    }
    let nodeGroup = lectureGroup.nodes.find((n) => n.node.id === item.node.id);
    if (!nodeGroup) {
      nodeGroup = { node: item.node, items: [] };
      lectureGroup.nodes.push(nodeGroup);
    }
    nodeGroup.items.push(item);
  }
  return groups;
}

function useSheetDraft() {
  const [draft, setDraft] = useState<SheetDraft>(EMPTY_SHEET_DRAFT);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    void (async () => {
      const result = await fetchSheet();
      if (!result.ok) {
        setError(result.error);
        setLoaded(true);
        return;
      }
      setDraft(result.value);
      setLoaded(true);
    })();
  }, []);

  const persist = useCallback(async (next: SheetDraft) => {
    setDraft(next);
    const result = await saveSheet(next);
    if (!result.ok) {
      setError(result.error);
      return false;
    }
    setError(undefined);
    return true;
  }, []);

  return { draft, loaded, error, setError, persist };
}

export function FormulaSheetBuilderPage() {
  const items = useMemo(() => collectSheetItems(), []);
  const itemsById = useMemo(() => new Map(items.map((item) => [item.id, item])), [items]);
  const courseIds = useMemo(() => courseSheetOrder(), []);
  const { draft, loaded, error, setError, persist } = useSheetDraft();
  const [editingId, setEditingId] = useState<string>();
  const [editText, setEditText] = useState('');

  const orderedIds = useMemo(() => orderedSheetIds(courseIds, draft), [courseIds, draft]);
  const orderedItems = useMemo(
    () => orderedIds.flatMap((id) => (itemsById.has(id) ? [itemsById.get(id)!] : [])),
    [orderedIds, itemsById],
  );
  const groups = useMemo(() => groupSheetItems(orderedItems), [orderedItems]);
  const excludedSet = useMemo(() => new Set(draft.excluded), [draft.excluded]);
  const lineTotal = useMemo(
    () => includedSheetLineTotal(orderedIds, draft.excluded, itemsById, draft.edits),
    [orderedIds, draft.excluded, draft.edits, itemsById],
  );

  if (!loaded) return null;

  async function toggleInclude(id: string) {
    const nextExcluded = excludedSet.has(id)
      ? draft.excluded.filter((x) => x !== id)
      : [...draft.excluded, id];
    await persist({ ...draft, order: orderedIds, excluded: nextExcluded });
  }

  async function moveItem(id: string, direction: -1 | 1) {
    const order = moveId(orderedIds, id, direction);
    await persist({ ...draft, order, excluded: draft.excluded });
  }

  function startEdit(item: SheetItemEntry) {
    setEditingId(item.id);
    setEditText(sheetDisplayText(item, draft.edits));
    setError(undefined);
  }

  async function saveEdit(item: SheetItemEntry) {
    const trimmed = editText.trim();
    if (trimmed.length === 0) {
      setError('Wording cannot be empty.');
      return;
    }
    const edits = { ...draft.edits };
    if (trimmed === item.text.trim()) {
      delete edits[item.id];
    } else {
      edits[item.id] = trimmed;
    }
    const ok = await persist({ ...draft, order: orderedIds, edits });
    if (ok) {
      setEditingId(undefined);
      setEditText('');
    }
  }

  return (
    <article className="formula-sheet-page">
      <h1>Formula sheet</h1>
      <p className="wip-notice" role="note">
        <strong>Work in progress.</strong> What this page prints is not yet a usable formula sheet: it runs to far too
        many pages.
      </p>
      <p className="formula-sheet-intro">
        Choose what goes on the one handwritten sheet, then open the print view and copy it by hand.
      </p>
      {error ? <p className="notice">{error}</p> : null}
      <p className="sheet-size">{sheetSizeSentence(lineTotal)}</p>
      <p>
        <Link to="/formula-sheet/print">Print view</Link>
      </p>

      {groups.map((group) => (
        <section key={group.lecture.number} className="formula-sheet-lecture">
          <h2>Lecture {group.lecture.number}</h2>
          {group.nodes.map((nodeGroup) => (
            <div key={nodeGroup.node.id} className="formula-sheet-topic">
              <h3 className="block-heading">{nodeGroup.node.title}</h3>
              <ul className="formula-sheet-items">
                {nodeGroup.items.map((item) => {
                  const shortName = sheetItemShortName(item.id, item.node.title);
                  const index = orderedIds.indexOf(item.id);
                  const included = !excludedSet.has(item.id);
                  const display = sheetDisplayText(item, draft.edits);
                  const editing = editingId === item.id;
                  return (
                    <li key={item.id} className="formula-sheet-item">
                      <p className="block-label">{sheetCategoryLabel(item.category)}</p>
                      {editing ? (
                        <>
                          <label className="visually-hidden" htmlFor={`edit-${item.id}`}>
                            Edit the {shortName}
                          </label>
                          <textarea
                            id={`edit-${item.id}`}
                            className="formula-sheet-edit"
                            value={editText}
                            onChange={(event) => setEditText(event.target.value)}
                            rows={4}
                          />
                          <div className="formula-sheet-actions">
                            <button type="button" className="button" onClick={() => void saveEdit(item)}>
                              Save the {shortName}
                            </button>
                          </div>
                        </>
                      ) : (
                        <Prose text={display} />
                      )}
                      <div className="formula-sheet-actions">
                        <label>
                          <input
                            type="checkbox"
                            checked={included}
                            onChange={() => void toggleInclude(item.id)}
                            aria-label={`Include the ${shortName}`}
                          />{' '}
                          Include
                        </label>
                        <button
                          type="button"
                          className="button"
                          disabled={index <= 0}
                          onClick={() => void moveItem(item.id, -1)}
                          aria-label={`Move the ${shortName} up`}
                        >
                          Move up
                        </button>
                        <button
                          type="button"
                          className="button"
                          disabled={index >= orderedIds.length - 1}
                          onClick={() => void moveItem(item.id, 1)}
                          aria-label={`Move the ${shortName} down`}
                        >
                          Move down
                        </button>
                        {!editing ? (
                          <button type="button" className="button" onClick={() => startEdit(item)}>
                            Edit the {shortName}
                          </button>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </article>
  );
}

export function FormulaSheetPrintPage() {
  const items = useMemo(() => collectSheetItems(), []);
  const itemsById = useMemo(() => new Map(items.map((item) => [item.id, item])), [items]);
  const courseIds = useMemo(() => courseSheetOrder(), []);
  const [draft, setDraft] = useState<SheetDraft>(EMPTY_SHEET_DRAFT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    void (async () => {
      const result = await fetchSheet();
      if (result.ok) setDraft(result.value);
      setLoaded(true);
    })();
  }, []);

  const orderedIds = useMemo(() => orderedSheetIds(courseIds, draft), [courseIds, draft]);
  const excludedSet = useMemo(() => new Set(draft.excluded), [draft.excluded]);
  const included = useMemo(
    () => orderedIds.flatMap((id) => (excludedSet.has(id) || !itemsById.has(id) ? [] : [itemsById.get(id)!])),
    [orderedIds, excludedSet, itemsById],
  );

  if (!loaded) return null;

  return (
    <article className="formula-sheet-print">
      <h1>Formula sheet</h1>
      <button type="button" className="button button-main no-print" onClick={() => window.print()}>
        Print
      </button>
      <ol className="formula-sheet-print-list">
        {included.map((item) => (
          <li key={item.id} className="formula-sheet-print-item">
            <p className="block-label">{sheetCategoryLabel(item.category)}</p>
            <div className="formula-sheet-print-text">
              <Prose text={sheetDisplayText(item, draft.edits)} />
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
