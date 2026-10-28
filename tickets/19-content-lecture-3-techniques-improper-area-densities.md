# 19: Content for lecture 3, part 2: techniques, improper integrals, area and densities

**What to build:** These lecture 3 nodes are complete at full depth: trigonometric powers and substitutions, rational functions with partial fractions (light, never examined), improper integrals, area between curves, probability densities, and numerical integration (rules, with error bounds as going-deeper).

**Blocked by:** 03, 05, 06, 10, 14

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. All reading of PDFs and images goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Sources to use:** lecture 3 notes (probability density with normalisation, E(X) and P(X > 2); improper integrals with a limit L), handout 8.1 to 8.7, 9.1 and 9.8 (the Gaussian constant and the defective-chips story are going-deeper), midterm integral questions from ticket 14 (area between x and sin x, a possibly divergent improper integral). See `source-inventory.md`.

**Specific points:** improper integrals always written as a limit with convergence or divergence stated. Densities carry the full chain (normalise, then E(X), then a probability), since the owner set these up and abandoned them. Partial fractions stay light and tagged low exam weight. The harvested integrals from ticket 10 are part of the ladders.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only. Its wording is not a template.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong formula, teach the correct form with a trap that shows the wrong version failing. Never mention whose notes had the slip.
- Notation follows the lecture notes first and names the curly-d equivalent once per node where a source uses it.

## Acceptance criteria

- [ ] Every node in scope has formal statements in the course's wording with their source, plain explanations, a notation note where relevant, and source links.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node, covering the specific points above.
- [ ] A three-tier exercise ladder per node. Every exercise has a solution with a provenance label. Every checkable result passes SymPy.
- [ ] About ten cards per node, and sheet items flagged.
- [ ] Too-deep material sits in going-deeper blocks. Nothing important from the sources is dropped.
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
