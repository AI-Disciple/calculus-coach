export function dueLabel(count: number): string {
  if (count === 0) return 'Nothing is due.';
  if (count === 1) return '1 item is due.';
  return `${count} items are due.`;
}
