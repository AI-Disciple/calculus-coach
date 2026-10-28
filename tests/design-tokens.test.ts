import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { REDUCED_MOTION_FADE_MS, SPRING, SPRING_BOUNCE } from '../src/ui/motion.ts';

const css = readFileSync(new URL('../src/ui/styles.css', import.meta.url), 'utf8').replace(/\r\n/g, '\n');
const flat = css.replace(/\s+/g, ' ').replace(/\(\s+/g, '(').replace(/\s+\)/g, ')');

function themeTokens(selector: RegExp): Map<string, string> {
  const block = selector.exec(css)?.[1] ?? '';
  return new Map([...block.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map((m) => [m[1]!, m[2]!.trim()]));
}

const themes = {
  light: themeTokens(/:root,\s*\[data-theme='light'\]\s*\{([^}]*)\}/),
  dark: themeTokens(/\[data-theme='dark'\]\s*\{([^}]*)\}/),
};

function luminance(hex: string): number {
  const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = channels.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

function contrast(a: string, b: string): number {
  const [high, low] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (high! + 0.05) / (low! + 0.05);
}

describe('accent colour', () => {
  for (const [name, tokens] of Object.entries(themes)) {
    const token = (key: string) => tokens.get(key) ?? '';

    it(`reads as text on the ${name} canvas`, () => {
      expect(contrast(token('--accent'), token('--canvas'))).toBeGreaterThanOrEqual(4.5);
    });

    it(`keeps the ${name} button label readable in every state`, () => {
      expect(contrast(token('--accent-text'), token('--accent'))).toBeGreaterThanOrEqual(4.5);
      expect(contrast(token('--accent-text'), token('--accent-hover'))).toBeGreaterThanOrEqual(4.5);
    });
  }
});

describe('motion tokens', () => {
  it('matches the springs in motion.ts', () => {
    expect(flat).toContain(`--spring-duration: ${Math.round(SPRING.duration * 1000)}ms;`);
    expect(flat).toContain(`--spring-ease: ${SPRING.easing};`);
    expect(flat).toContain(`--spring-bounce-duration: ${Math.round(SPRING_BOUNCE.duration * 1000)}ms;`);
    expect(flat).toContain(`--spring-bounce-ease: ${SPRING_BOUNCE.easing};`);
  });

  it('matches the reduced-motion fade in motion.ts', () => {
    expect(flat).toContain(`--fade: ${REDUCED_MOTION_FADE_MS}ms ease;`);
    expect(flat).toContain(`transition-duration: ${REDUCED_MOTION_FADE_MS}ms !important;`);
  });
});

function mix(foreground: string, amount: number, background: string): string {
  const channel = (i: number) => {
    const f = parseInt(foreground.slice(i, i + 2), 16);
    const b = parseInt(background.slice(i, i + 2), 16);
    return Math.round(f * amount + b * (1 - amount))
      .toString(16)
      .padStart(2, '0');
  };
  return `#${channel(1)}${channel(3)}${channel(5)}`;
}

describe('surface and text contrast', () => {
  for (const [name, tokens] of Object.entries(themes)) {
    const token = (key: string) => tokens.get(key) ?? '';

    for (const surface of ['--canvas', '--panel', '--panel-soft']) {
      it(`keeps ${name} text and muted text readable on ${surface}`, () => {
        expect(contrast(token('--text'), token(surface))).toBeGreaterThanOrEqual(4.5);
        expect(contrast(token('--muted'), token(surface))).toBeGreaterThanOrEqual(4.5);
      });
    }

    it(`keeps the ${name} heading readable on the canvas`, () => {
      expect(contrast(token('--heading'), token('--canvas'))).toBeGreaterThanOrEqual(4.5);
    });

    it(`keeps the ${name} accent readable on the panel`, () => {
      expect(contrast(token('--accent'), token('--panel'))).toBeGreaterThanOrEqual(4.5);
    });

    for (const key of [...tokens.keys()].filter((k) => k.startsWith('--kind-'))) {
      it(`keeps ${name} ${key} readable on a faint tint of itself`, () => {
        const tint = mix(token(key), 0.07, token('--panel'));
        expect(contrast(token(key), tint)).toBeGreaterThanOrEqual(4.5);
      });
    }
  }
});
