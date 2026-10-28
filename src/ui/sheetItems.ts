import bundle from 'virtual:content-bundle';
import type { Block, ContentBundle, CourseNode, Lecture } from '../content/schema.ts';
import type { SheetDraft } from '../progress/progress.ts';

export type SheetItemEntry = {
  id: string;
  category: Extract<Block, { type: 'sheet-item' }>['category'];
  text: string;
  lecture: Lecture;
  node: CourseNode;
};

const SHEET_SHORT_NAME: Record<string, string> = {
  'l1-derivative.sheet-definition': 'derivative formula',
  'l2-concavity.sheet-inflection': 'inflection trap',
  'l6-critical-points.sheet-critical': 'critical-point rule',
};

export function sheetItemShortName(id: string, nodeTitle: string): string {
  return SHEET_SHORT_NAME[id] ?? nodeTitle;
}

export function collectSheetItems(source: ContentBundle = bundle): SheetItemEntry[] {
  const items: SheetItemEntry[] = [];
  for (const lecture of source.lectures) {
    for (const node of lecture.nodes) {
      for (const block of node.blocks) {
        if (block.type === 'sheet-item') {
          items.push({ id: block.id, category: block.category, text: block.text, lecture, node });
        }
      }
    }
  }
  return items;
}

export function courseSheetOrder(source: ContentBundle = bundle): string[] {
  return collectSheetItems(source).map((item) => item.id);
}

export function orderedSheetIds(courseIds: readonly string[], draft: SheetDraft): string[] {
  const courseSet = new Set(courseIds);
  const ordered: string[] = [];
  const seen = new Set<string>();
  for (const id of draft.order) {
    if (!courseSet.has(id) || seen.has(id)) continue;
    ordered.push(id);
    seen.add(id);
  }
  for (const id of courseIds) {
    if (!seen.has(id)) ordered.push(id);
  }
  return ordered;
}

export function sheetDisplayText(item: SheetItemEntry, edits: Record<string, string>): string {
  return edits[item.id] ?? item.text;
}

export function sheetCategoryLabel(category: SheetItemEntry['category']): string {
  if (category === 'formula') return 'Formula';
  if (category === 'trap') return 'Trap';
  return 'Recognition rule';
}

const LINES_PER_SHEET = 50;
const CHARS_PER_LINE = 90;

export function sheetLineCount(text: string): number {
  return Math.max(1, Math.ceil(text.length / CHARS_PER_LINE));
}

export function includedSheetLineTotal(
  ordered: readonly string[],
  excluded: readonly string[],
  itemsById: Map<string, SheetItemEntry>,
  edits: Record<string, string>,
): number {
  const excludedSet = new Set(excluded);
  let total = 0;
  for (const id of ordered) {
    if (excludedSet.has(id)) continue;
    const item = itemsById.get(id);
    if (!item) continue;
    total += sheetLineCount(sheetDisplayText(item, edits));
  }
  return total;
}

export function sheetSizeSentence(lineCount: number): string {
  if (lineCount <= LINES_PER_SHEET) {
    return `About ${lineCount} lines. This draft should fit on one sheet.`;
  }
  return `About ${lineCount} lines. This draft is longer than one sheet.`;
}

export function moveId(ids: readonly string[], id: string, direction: -1 | 1): string[] {
  const index = ids.indexOf(id);
  if (index < 0) return [...ids];
  const target = index + direction;
  if (target < 0 || target >= ids.length) return [...ids];
  const next = [...ids];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}
