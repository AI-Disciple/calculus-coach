import bundle from 'virtual:content-bundle';
import { courseNodes } from '../content/nodes.ts';
import type { CourseNode, Lecture } from '../content/schema.ts';

export function findCourseNode(id: string): { lecture: Lecture; node: CourseNode } | undefined {
  for (const match of courseNodes(bundle)) {
    if (match.node.id === id) return match;
  }
  return undefined;
}

/** The nodes before and after this one in course order. Hidden fixture nodes have no neighbours. */
export function neighbourNodes(id: string): { previous?: CourseNode; next?: CourseNode } {
  const ordered = bundle.lectures.flatMap((lecture) => lecture.nodes);
  const index = ordered.findIndex((node) => node.id === id);
  if (index < 0) return {};
  return { previous: ordered[index - 1], next: ordered[index + 1] };
}

export function nodeTitleFor(id: string): string {
  return findCourseNode(id)?.node.title ?? id;
}

export function sourceTitleFor(sourceId: string): string {
  return bundle.sources.find((s) => s.id === sourceId)?.title ?? sourceId;
}
