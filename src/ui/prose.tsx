import { useLayoutEffect, useRef } from 'react';
import { renderMarkdown } from './markdown.ts';

/** A displayed formula wider than its column shrinks to fit, down to this share of its size. */
const SMALLEST_FORMULA = 0.6;

/** Block text by default, where every heading is a subheading. `document` keeps the heading levels as written. */
export function Prose({ text, document = false }: { text: string; document?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || !element.querySelector('.katex-display')) return;
    const fit = () => {
      for (const display of element.querySelectorAll<HTMLElement>('.katex-display')) {
        display.style.fontSize = '';
        const overflow = display.scrollWidth / display.clientWidth;
        if (overflow > 1) display.style.fontSize = `${Math.max(1 / overflow, SMALLEST_FORMULA)}em`;
      }
    };
    fit();
    if (typeof ResizeObserver === 'undefined') return;
    // Shrinking a formula changes the height, so only a change of width fits again.
    let width = element.clientWidth;
    const observer = new ResizeObserver(() => {
      if (element.clientWidth === width) return;
      width = element.clientWidth;
      fit();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [text]);

  return <div ref={ref} className="prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(text, { document }) }} />;
}
