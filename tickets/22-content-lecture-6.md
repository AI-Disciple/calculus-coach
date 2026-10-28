# 22: Content for lecture 6: critical points and optimisation

**What to build:** The lecture 6 nodes are complete: critical points and the full second-derivative test with D, the D = 0 case settled by sections, global extrema on closed regions including the boundary, worded constrained optimisation, Lagrange multipliers (one constraint; two constraints as going-deeper), and parameter families. The lecture has not happened yet, so content is written from the handout, the sheets, the home assignment and the exams, and wording is refined later by ticket 27.

**Blocked by:** 03, 05, 06, 07, 12, 13

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. All PDF reading goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Sources to use:** lecture 5 notes (the Hessian test as taught), handout 14.7 and 14.8 (assigned set 14.7; items 15 and 18 have no printed answer; for example 14.7.14 = (3, 4/3)), exercise sheet 2 exercises 7 to 11 (six classifications, x^2 + y^2 + kxy, x^3 - 3x^2 y + y^3 with D = 0 and sections y = kx, the three clean constrained problems in Exo3), the 2022 home assignment (guided derivation of the test including D = 0), critical-point and optimisation questions from the finals in tickets 12 and 13 (circle of critical points (x^2 + y^2 - 1)^2, aircraft fuel 2024, portfolio on a triangle with a cubic loss 2025). See `source-inventory.md`.

**Specific points:** critical points (20%) and constrained optimisation (17.5%) are final blocks 3 and 5. The test is taught with D > 0 on the minimum and maximum lines, with a trap where f_xx alone misleads. D = 0 is settled by looking at f along a hinted section. Constrained problems always check the boundary. Use the critical-point viewer with the x^2 + y^2 + kxy slider and the constraint viewer from ticket 07; they are part of this ticket's acceptance. The long modelling problems of sheet 2 (exercises 12 to 19) are ticket 25, not this one.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only, and the real Hessian-test node is written from the sources and may differ from it.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong formula, teach the correct form with a trap that shows the wrong version failing. Never mention whose notes had the slip.
- Notation follows the lecture notes first (H_f, D, f_x) and names the curly-d equivalent once per node where the handout uses it.

## Acceptance criteria

- [ ] Every lecture 6 node has formal statements in the course's wording with their source, plain explanations, a notation note, and source links. Wording taken from the handout is marked as provisional until the lecture 6 notes arrive.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node, including D > 0 before the sign of f_xx and the D = 0 case.
- [ ] A three-tier exercise ladder per node. Handout set 14.7 and sheet 2 exercises 7 to 11 are present with solutions. Every checkable result passes SymPy.
- [ ] The critical-point and Lagrange nodes embed their viewers.
- [ ] About ten cards per node, and sheet items flagged.
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
