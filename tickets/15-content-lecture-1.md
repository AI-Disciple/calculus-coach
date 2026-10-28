# 15: Content for lecture 1 (review)

**What to build:** The lecture 1 nodes are complete at full depth: trigonometry and the unit circle; exponentials and logarithms; functions and graphs (domain, range, shifts, dilations, even and odd, absolute value, composition); limits and continuity (laws, one-sided, infinite, at infinity, squeeze, growth hierarchy, standard limits, indeterminate forms); the derivative (definition, tangent line, table, sum, product, quotient and chain rules).

**Blocked by:** 03, 05, 06, 09, 11

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high for explanations, examples and solutions. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. All reading of PDFs, images and HTML goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Sources to use:** lecture 1 notes, the class 1 exercise corrections, Exo0, Exo1 (graphs, differentiation drill, tangents), the functions-and-graphs booklet, handout chapters 1 to 4 (epsilon-delta 2.3 and 4.10, the geometric sin x / x proof, construction of e and hyperbolic functions 4.11 go in going-deeper blocks), the HMC trigonometry page as a topic list only. See `source-inventory.md` sections 1 to 3 and 6.

**Specific points:** traps on (1/u)' = -u'/u^2, the +inf minus inf caution, union versus intersection of domains, x-intercept versus y-intercept, periods of sin(3x) and tan^2 x, and justifying limits such as x sin(1/x), x^r e^-x and x ln x properly (the student's weak spots, section 6 of the inventory). Use the limit viewer from ticket 09.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only. Its wording is not a template.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong formula, teach the correct form with a trap that shows the wrong version failing. Never mention whose notes had the slip.
- Notation follows the lecture notes first and names the curly-d equivalent once per node where a source uses it.

## Acceptance criteria

- [ ] Every lecture 1 node has formal statements in the course's wording with their source, plain explanations, a notation note where relevant, and source links.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node, covering the specific points above.
- [ ] A three-tier exercise ladder per node (basic, standard, exam level), merging the harvested questions from ticket 11. Every exercise has a solution with a provenance label. Every checkable result passes SymPy.
- [ ] About ten cards per node, and sheet items flagged.
- [ ] Too-deep material sits in going-deeper blocks. Nothing important from the sources is dropped.
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
