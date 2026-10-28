# 24: Content for lecture 8: change of variables, triple integrals and volumes

**What to build:** The lecture 8 nodes are complete: change of variables and the Jacobian (linear and named substitutions), triple integrals, cylindrical and spherical coordinates, volumes between surfaces with the coordinate-plane sketch, mass and centre of mass (only the material before Example 15.3.1 is core), and probability with multiple integrals as an optional node. The lecture has not happened yet, so content is written from the handout, the sheets and the exams, and wording is refined later by ticket 27.

**Blocked by:** 03, 05, 06, 08, 12, 13

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. All PDF reading goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Sources to use:** handout 15.3 (only before Example 15.3.1 is core, the three mass formulas; the rest is going-deeper), 15.5, 15.6 and 15.7 (assigned sets 15.5, 15.6 items 1 to 6, 10 and 11, and 15.7; items 15.5.9, 15, 16 and 15.7.9 have no printed answer; for example 15.6.3 = 5 pi / 4, 15.6.10 = pi k h^2 a^2 / 12, 15.7.8 = pi (1 - cos 1) / 24, 15.7.10 = (4/3) pi a b c), exercise sheet 3 (five changes of variables, three triple integrals, volumes), questions from the finals in tickets 12 and 13 (substitution given in the hint, sphere and cone 2024, plane and paraboloid with a split shadow 2025, the 2023 retake's linear change of variables and paraboloid-cone volume). Section 15.4 is skipped. See `source-inventory.md`.

**Specific points:** triple integrals and volumes are 15% of the final (block 6, with a sketch of a cut by a coordinate plane), and the substitution integral is part of block 4. The exam tier mirrors both. The tangent-vector derivation of the Jacobian is going-deeper. Use the change-of-variables viewer, the cylindrical and spherical viewers and the solid viewer from ticket 08; they are part of this ticket's acceptance.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only. Its wording is not a template.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong value, teach the correct one. Never mention whose notes or key had the slip in node prose.
- Notation follows the lecture notes first and names equivalents once per node where the handout differs.

## Acceptance criteria

- [ ] Every lecture 8 node has formal statements in the course's wording with their source, plain explanations, a notation note where relevant, and source links. Wording taken from the handout is marked as provisional until the lecture 8 notes arrive.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node (the Jacobian factor and its absolute value, r^2 sin phi, which coordinates fit a region).
- [ ] A three-tier exercise ladder per node. Handout sets 15.5, 15.6 (assigned items) and 15.7 and the matching sheet 3 exercises are present with solutions. Sketch questions carry a described expected sketch and rubric steps. Every checkable result passes SymPy.
- [ ] The change-of-variables, coordinates and volume nodes embed their viewers.
- [ ] The probability node is marked optional.
- [ ] About ten cards per node, and sheet items flagged.
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
