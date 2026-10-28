# 17: Content for lecture 2, part 2: optimisation, Newton and the theorems

**What to build:** These lecture 2 nodes are complete at full depth: the second-derivative test, one-variable optimisation and word problems, Newton's method with an error statement, the intermediate value theorem, the mean value theorem, related rates and linear approximation (the last two at lower weight).

**Blocked by:** 03, 05, 06, 09, 14

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. All reading of PDFs and images goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Sources to use:** lecture 2 notes (second-derivative test, Newton with the quadratic error bound, IVT), Exo1 (IVT root of x^3 + 3x^2 + x - 2, the three word problems), handout 6.1 to 6.5, midterm Newton and optimisation questions imported in ticket 14 (for example the cube root of 9 from x0 = 2 with x1 = 25/12, and L(x) = -x^2 + 18x + 20 with its endpoint minimum). See `source-inventory.md`.

**Specific points:** Newton for an nth root without a calculator, always finished with an error sentence and stopped at the requested precision. Optimisation always checks endpoints and states the conclusion. Word problems model the quantity first. Use the Newton viewer from ticket 09.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only. Its wording is not a template.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong formula, teach the correct form with a trap that shows the wrong version failing. Never mention whose notes had the slip.
- Notation follows the lecture notes first and names the curly-d equivalent once per node where a source uses it.

## Acceptance criteria

- [ ] Every node in scope has formal statements in the course's wording with their source, plain explanations, a notation note where relevant, and source links.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node, covering the specific points above.
- [ ] A three-tier exercise ladder per node, with the exam tier mirroring midterm Newton and optimisation questions. Every exercise has a solution with a provenance label. Every checkable result passes SymPy.
- [ ] About ten cards per node, and sheet items flagged.
- [ ] Too-deep material sits in going-deeper blocks. Nothing important from the sources is dropped.
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
