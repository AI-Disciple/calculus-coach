import { courseNodes } from '../content/nodes.ts';
import type { Block, ContentBundle, CourseNode, Exercise, Lecture, examBlocks } from '../content/schema.ts';
import { nodeSections } from '../ui/nodeSections.ts';
import type { Tier } from './progress.ts';

export type CourseQuestion = Extract<Block, { type: 'concept-question' }>;
export type ExamBlockId = (typeof examBlocks)[number];

/** The slice of the course the progress server needs. Hidden nodes stay in the catalog so their mistakes still land on a lecture. */
export type CourseExerciseRef = { id: string; tier: Tier; examBlock?: ExamBlockId };
export type CourseNodeRef = {
  id: string;
  title: string;
  hidden?: boolean;
  exercises: CourseExerciseRef[];
  /** The ids of the node's sections, as the node page shows them. A node without the list has none to mark. */
  sectionIds?: string[];
};
export type CourseLectureRef = { number: number; title: string; nodes: CourseNodeRef[] };
export type CourseCatalog = { lectures: CourseLectureRef[] };

export function catalogFromBundle(bundle: ContentBundle): CourseCatalog {
  const lectures = bundle.lectures.map((lecture) => ({
    number: lecture.number,
    title: lecture.title,
    nodes: [] as CourseNodeRef[],
  }));
  const byNumber = new Map(lectures.map((lecture) => [lecture.number, lecture]));
  for (const { lecture, node } of courseNodes(bundle)) {
    const bucket = byNumber.get(lecture.number);
    if (!bucket) continue;
    bucket.nodes.push({
      id: node.id,
      title: node.title,
      ...(node.hidden ? { hidden: true } : {}),
      exercises: node.blocks.flatMap((block) =>
        block.type === 'exercise'
          ? [{ id: block.id, tier: block.tier, ...(block.examBlock ? { examBlock: block.examBlock } : {}) }]
          : [],
      ),
      sectionIds: nodeSections(node.blocks, node.title).map((section) => section.id),
    });
  }
  return { lectures };
}

export function courseItemIds(bundle: ContentBundle): Set<string> {
  const ids = new Set<string>();
  for (const { node } of courseNodes(bundle)) {
    for (const block of node.blocks) {
      if (block.type === 'exercise') ids.add(block.id);
      // The bundle gives every concept question an id.
      if (block.type === 'concept-question' && block.id) ids.add(block.id);
    }
  }
  return ids;
}

export function findExercise(
  bundle: ContentBundle,
  id: string,
): { lecture: Lecture; node: CourseNode; exercise: Exercise } | undefined {
  for (const { lecture, node } of courseNodes(bundle)) {
    for (const block of node.blocks) {
      if (block.type === 'exercise' && block.id === id) return { lecture, node, exercise: block };
    }
  }
  return undefined;
}

export function findConceptQuestion(
  bundle: ContentBundle,
  id: string,
): { lecture: Lecture; node: CourseNode; question: CourseQuestion } | undefined {
  for (const { lecture, node } of courseNodes(bundle)) {
    for (const block of node.blocks) {
      if (block.type === 'concept-question' && block.id === id) return { lecture, node, question: block };
    }
  }
  return undefined;
}
