# 23: Content for lecture 7: double integrals

**What to build:** The lecture 7 nodes are complete: double integrals over rectangles, Fubini, average value, general regions, changing the order of integration, volumes, and polar coordinates. The lecture has not happened yet, so content is written from the handout, the sheets and the exams, and wording is refined later by ticket 27.

**Blocked by:** 03, 05, 06, 08, 12, 13

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. All PDF reading goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Sources to use:** handout 15.1 and 15.2 (assigned sets 15.1 and 15.2 items 1 to 6, 12 to 16 and 19; items 15.1.29, 31 to 33 and 15.2.18 have no printed answer; for example 15.1.1 = 16, 15.1.10 = (1 - cos 1)/4, 15.2.12 = (1 - cos 9) pi / 2), exercise sheet 3 (fifteen iterated integrals, items 9 to 15 need a change of order or a substitution; two averages; volumes), double-integral questions from the finals in tickets 12 and 13 (rectangle, first-quadrant triangle, disk or sector in polar, the 2022 average on a triangle whose correct value is 2 sin 1 - sin 2). See `source-inventory.md`.

**Specific points:** double integrals are 32.5% of the final (block 4: four integrals). The exam tier mirrors that block. Changing the order is never its own exam question; it appears as splitting the shadow into two regions. Use the region viewer and the polar region viewer from ticket 08; they are part of this ticket's acceptance.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only. Its wording is not a template.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong value, teach the correct one. Never mention whose notes or key had the slip in node prose.
- Notation follows the lecture notes first and names equivalents once per node where the handout differs.

## Acceptance criteria

- [ ] Every lecture 7 node has formal statements in the course's wording with their source, plain explanations, a notation note where relevant, and source links. Wording taken from the handout is marked as provisional until the lecture 7 notes arrive.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node (bounds, order, the r in r dr dtheta).
- [ ] A three-tier exercise ladder per node. Handout sets 15.1 and 15.2 (assigned items) and the matching sheet 3 exercises are present with solutions. Every checkable result passes SymPy.
- [ ] The region and polar nodes embed their viewers.
- [ ] About ten cards per node, and sheet items flagged.
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
