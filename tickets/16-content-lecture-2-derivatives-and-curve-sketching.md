# 16: Content for lecture 2, part 1: derivative tools and curve sketching

**What to build:** These lecture 2 nodes are complete at full depth: derivative of an inverse function, implicit differentiation and inverse trigonometric derivatives, L'Hopital, and the full curve-sketching procedure (domain including radicals, symmetry, intercepts, vertical, horizontal and oblique asymptotes, holes, sign charts, extrema including endpoints, concavity and inflection).

**Blocked by:** 03, 05, 06, 09, 11, 14

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. All reading of PDFs, images and HTML goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Sources to use:** lecture 2 notes (the boxed inverse-derivative formula, the curve-sketching checklist, L'Hopital stated at a point for 0/0), lecture 3 notes (exercise 8 on (x-1)^2 (x+3)^(2/3)), Exo1 (eight full curve discussions), handout chapters 4 and 5 (the 50-exercise L'Hopital drill and orthogonal trajectories go to going-deeper), the midterm sketch questions imported in ticket 14. See `source-inventory.md`.

**Specific points:** curve sketching carries six midterm points, so the sketching node mirrors the midterm template (domain first, derivative, sign chart, asymptotes, intercepts, inflection if asked). Traps on inflection versus f'' = 0 (needs a sign change), radical domains such as sqrt(x^2 + 3x + 1), endpoint extrema (sqrt(x^2 - 1) at +-1), inflection labels put on extrema, and L'Hopital used outside 0/0 or inf/inf. Use the curve-sketching builder from ticket 09. The 12 harvested curve discussions from ticket 11 are part of the ladder.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only. Its wording is not a template.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong formula, teach the correct form with a trap that shows the wrong version failing. Never mention whose notes had the slip.
- Notation follows the lecture notes first and names the curly-d equivalent once per node where a source uses it.

## Acceptance criteria

- [ ] Every node in scope has formal statements in the course's wording with their source, plain explanations, a notation note where relevant, and source links.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node, covering the specific points above.
- [ ] A three-tier exercise ladder per node, with the exam tier mirroring midterm sketch questions. Every exercise has a solution with a provenance label and rubric steps for sketches. Every checkable result passes SymPy.
- [ ] About ten cards per node, and sheet items flagged.
- [ ] Too-deep material sits in going-deeper blocks. Nothing important from the sources is dropped.
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
