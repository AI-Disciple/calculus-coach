# 29: Design foundations

**What to build:** The visual base the later design tickets build on: fonts that actually load, one accent color, a clear main-button style, size-specific heading tracking and shared motion settings.

**Blocked by:** none

**Status:** done

**Suggested model:** Claude Sonnet 5.5 xhigh (taste-heavy CSS that every later ticket builds on). Use the `apple-design` skill. Composer 2.5 fast is fine for bundling the font files.

**Read first:** `src/ui/styles.css` (theme tokens at the top), `index.html`, `spec.md` story 11 (light and dark theme).

## Background

The design audit of 2026-10-12 found that `--sans: 'Geist'` and `--serif: 'Newsreader'` are declared but never loaded, so Windows shows Segoe UI and Palatino. The palette copies Notion's greys and has no accent. Every button uses the same outline style, so "Reveal solution", "Save attempt", "Copy for AI" and "Postpone" all carry the same weight. All headings use `letter-spacing: -0.03em` whatever their size. The stylesheet has no animation beyond 200ms color fades.

## Acceptance criteria

- [ ] Geist, Geist Mono and Newsreader are bundled locally (no runtime CDN, since the app runs offline on localhost) and load in both themes.
- [ ] One accent color is added as a token with light and dark values. It is used only for progress and main actions, and passes WCAG AA against the canvas in both themes.
- [ ] A filled main-button style exists. Each screen has at most one main button, and the current outline button stays as the secondary style.
- [ ] Heading tracking depends on size: about `-0.02em` for page titles, about `-0.01em` for block headings, and `0` for body text and the small uppercase labels.
- [ ] Shared motion tokens: a default spring with no bounce (about 0.35s) for reveals and a slightly bouncy one (about 0.8 damping) kept for gesture-driven motion. A small helper or CSS variables make them easy to reuse.
- [ ] `prefers-reduced-motion: reduce` turns every motion into a short cross-fade, and `prefers-contrast: more` gives solid borders.
- [ ] Every existing page still renders in both themes, and `npm run check` passes.
