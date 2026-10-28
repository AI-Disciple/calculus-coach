/**
 * The identifier of a concept question that has no `id` of its own: the node id plus a hash of the question text.
 * It does not change when other blocks are added, moved or removed, so a saved pick keeps pointing at its question.
 * Editing the question text gives it a new identifier, unless the author pins one with `id`.
 */
export function conceptQuestionId(nodeId: string, question: string): string {
  const text = question.replace(/\s+/g, ' ').trim();
  // FNV-1a, 32 bits. A node holds a few dozen questions at most, so a collision inside one node is not a concern.
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) {
    hash = Math.imul(hash ^ text.charCodeAt(i), 0x01000193) >>> 0;
  }
  return `${nodeId}.q-${hash.toString(16).padStart(8, '0')}`;
}
