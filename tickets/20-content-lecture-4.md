# 20: Content for lecture 4: space geometry and functions of several variables

**What to build:** The lecture 4 nodes are complete: the supporting space geometry (3D coordinates, vectors, dot and cross product, lines and planes, cylindrical and spherical coordinates), then functions of several variables, graphs, planes z = ax + by + c, quadrics, cross sections, level sets and contour maps, and domains.

**Blocked by:** 03, 05, 06, 07, 12, 13

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. Lecture 4 exists only as board photos and a notebook page, so transcription goes to vision-capable subagents running Cursor Grok 4.6 xhigh. All PDF and image reading goes to such subagents, never the main context.

**Sources to use:** the four lecture 4 board photos (graph z = f(x, y), planes, hyperboloids of one and two sheets including the condition x^2 + y^2 >= 1, cuts x = 0 in plane Oyz and y = 0 in plane Oxz, level sets), the notebook photo (paraboloid, sphere, cone, hyperbolic paraboloid, the five-equation recognition exercise), handout chapter 12 and 14.1, exercise sheet 2 exercises 1 and 2 (contour map, quadrics and level sets), level-set questions from the finals imported in tickets 12 and 13. See `source-inventory.md`.

**Specific points:** level sets of an implicit surface are block 1 of the final (with the tangent plane), so the exam tier mirrors that question. Space geometry is supporting material and weighted lighter. Use the quadric viewer with linked level curves and slicing plane from ticket 07 on the quadrics and level-set nodes; that visual is part of this ticket's acceptance.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only. Its wording is not a template.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong formula, teach the correct form with a trap that shows the wrong version failing. Never mention whose notes had the slip.
- Notation follows the professor's (D(f) for the domain, f: R^n -> R) and names equivalents once per node where the handout differs.

## Acceptance criteria

- [ ] Every lecture 4 node has formal statements in the course's wording with their source, plain explanations, a notation note where relevant, and source links.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node, including quadric recognition.
- [ ] A three-tier exercise ladder per node. Sheet 2 exercises 1 and 2 and the board recognition exercise are present with solutions. Every exercise has a provenance label. Every checkable result passes SymPy.
- [ ] The quadric and level-set nodes embed the quadric viewer.
- [ ] About ten cards per node, and sheet items flagged (lectures 4 to 8 supply the new sheet items).
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
