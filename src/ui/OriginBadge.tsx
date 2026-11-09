import type { CourseNode } from '../content/schema.ts';

/** The label that says where a topic comes from. A handout-only topic is optional. */
export function originLabel(node: Pick<CourseNode, 'taught' | 'optional'>): string | null {
  if (node.taught === 'lecture') return 'Covered in the lecture';
  if (node.taught === 'handout') return 'From the handout (optional)';
  return node.optional ? 'Optional' : null;
}

export function OriginBadge({ node }: { node: Pick<CourseNode, 'taught' | 'optional'> }) {
  const label = originLabel(node);
  return label ? <span className="badge">{label}</span> : null;
}
