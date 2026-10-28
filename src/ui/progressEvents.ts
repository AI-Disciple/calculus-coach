const EVENT = 'progress-saved';

/** Tells the rest of the page that an attempt was saved, so counts and marks shown elsewhere can be read again. */
export function announceProgressSaved(): void {
  window.dispatchEvent(new Event(EVENT));
}

/** Calls the listener after every announced save. The returned function stops it. */
export function onProgressSaved(listener: () => void): () => void {
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
