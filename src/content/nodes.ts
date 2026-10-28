import type { ContentBundle, CourseNode, Lecture } from './schema.ts';

/** Every node with its lecture, hidden fixture nodes last so their exercises can still be opened and marked. */
export function* courseNodes(bundle: ContentBundle): Generator<{ lecture: Lecture; node: CourseNode }> {
  for (const lecture of bundle.lectures) {
    for (const node of lecture.nodes) yield { lecture, node };
  }
  for (const node of bundle.hiddenNodes) {
    const lecture = bundle.lectures.find((l) => l.number === node.lecture);
    if (lecture) yield { lecture, node };
  }
}
