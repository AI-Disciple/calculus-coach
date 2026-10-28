# 36: Key points, lighter text and more visuals in every node

**What to build:** Every Learn section is easier to read. It ends with a Key points box, long explanations are split into short chunks with subheadings and callouts, and a visual appears wherever one of the existing visual kinds fits the topic. This is done for all 73 visible nodes in all 8 lectures.

**Blocked by:** 35 (the block styles, callout look and theme colours come from it, and both tickets touch `src/ui/blocks.tsx`)

**Status:** done

**Suggested model:** Claude Opus 5.5 ultracode. The ticket is large on purpose. Work lecture by lecture with subagents (see "How to work").

**Read first:** `docs/pylab-review.md` (sections "Lesson layout", "Short lessons" and "Side by side"), `AGENTS.md`, `content/guide/adding-content.md`, `docs/content-format.md`, `docs/writing-style.md`, `CONTEXT.md`, `src/content/schema.ts` (block types), `src/ui/nodeSections.ts` (how blocks are grouped into sections), `src/ui/visuals/VisualBlock.tsx` and the two hidden fixture nodes `content/nodes/lecture-4/visuals-stand-in.md` and `visuals-one-variable-stand-in.md` (one working example of every visual kind and its params).

## Background

We compared the node pages with PyLab, a study site that reads much more easily. Its lessons are no shorter than our nodes. They are easier to follow for three reasons:

- **The text is broken up.** A short subheading comes every few paragraphs, and paragraphs alternate with lists, tables, examples and callouts (💡 tip, ⚠️ warning).
- **Every lesson ends its theory with a 🎯 Key points box,** one dense summary of what to remember.
- **Something visual comes every screen or so.**

For a maths course, code blocks and tables rarely apply. Our equivalents are visuals and graphs, boxed statements, worked examples, tip and trap callouts, and Key points.

Our nodes today are mostly paragraphs with small grey labels. Only 27 of the 73 visible nodes have a visual:

| Lecture | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nodes with a visual | 2 of 9 | 5 of 13 | 3 of 13 | 3 of 9 | 3 of 10 | 4 of 7 | 4 of 6 | 3 of 6 |

The visual kinds already cover both halves of the course:
- one variable: `curve-sketch`, `limit`, `newton`, `taylor`, `riemann`
- several variables: `quadric`, `tangent-plane`, `gradient`, `critical-point-viewer`, `constraint`, `region`, `polar-region`, `cylindrical-region`, `spherical-region`, `solid`, `change-of-variables`

Learning objectives were considered and dropped. Do not add them.

## Part 1: the build (once, before any content)

- [x] A `key-points` block type with a `text` field, in the schema, the bundle, the content check and `docs/content-format.md`.
- [x] It renders as the 🎯 Key points box: boxed, with a coloured edge and a label, styled with the tokens from ticket 35. It holds a short list or two to four sentences.
- [x] Each Learn section shows its Key points box last, after its explanations, examples, traps and visuals and before its "Your turn". This works both with the automatic grouping and with `::: section` markers. `npm run sections` shows the box in its section.
- [x] A `tip` block type with a `text` field renders as a 💡 callout, distinct from the ⚠️ trap callout. It is placed in written order within its section. Add the rule to `docs/content-format.md`.
- [x] Subheadings inside a section: decide on one way and document it in `docs/content-format.md`. Either `###` headings inside explanation text are rendered and styled, or a small block type is added. Keep the heading levels below the section title.
- [x] Unit tests cover the new block types and their placement in sections. A smoke test shows a Key points box on a node page.
- [x] `npm run check` passes before any content work starts. Commit Part 1 on its own.

## Part 2: the content, one lecture at a time

Work through lectures 1 to 8 in order. For each lecture:

- [x] Every Learn section of every visible node ends with a Key points box. It states the result, the condition and the usual slip in the node's notation, in full sentences or a short list, following `docs/writing-style.md`.
- [x] Explanations longer than about three paragraphs are split into short chunks under subheadings. A remark that helps with technique becomes a `tip`, and a common mistake becomes a `trap` (correct rule first, then the wrong version failing).
- [x] Wherever an existing visual kind fits the section's topic and none is there yet, add a visual with a short caption. Params must pass the content check. Where a topic clearly needs a visual that no kind can show, list it in the lecture's commit message instead.
- [x] `npm run sections -- <lecture>` shows a sensible grouping. Add `::: section` markers only where the automatic grouping is wrong.
- [x] An entry at the top of `content/changes.yaml` names the lecture and every node file that changed.
- [x] `npm run content` and `npm run check` pass, then the lecture is committed on its own ("Lighter text and key points for lecture N (ticket 36).").

Progress, ticked as each lecture is committed:

- [x] Lecture 1
- [x] Lecture 2
- [x] Lecture 3
- [x] Lecture 4
- [x] Lecture 5
- [x] Lecture 6
- [x] Lecture 7
- [x] Lecture 8

## Rules for the rewrite

This ticket allows restructuring existing text, which `docs/writing-style.md` otherwise limits to typo and grammar fixes. Within that:

- **Meaning stays exactly the same.** No mathematical claim is added, removed or weakened by the split. Key points summarise what the node already teaches.
- **Formal statements are not touched.** They keep the professor's wording and their `source`. Only explanations, examples' surrounding text, traps and the new blocks change.
- **Exercises, cards, sheet items, verification records, ids and sources are not touched.** Progress is keyed by ids.
- **Notation follows the node's existing notation** and `CONTEXT.md`.
- **Hidden nodes are left alone.** These are `hidden: true`: the two visual stand-ins, `l6-hessian-test-sample` and `outside-current-course`. The one exception is the tip and Key points box in `visuals-one-variable-stand-in`, which the smoke test `tests/smoke/key-points.spec.ts` checks.

## How to work

- One lecture per pass. A subagent reads the lecture's node files and drafts the changes for one or two nodes at a time. The main agent reviews each draft against the rules above before writing it.
- The main agent never loads the handout, sheets, papers or lecture notes. Per `AGENTS.md`, a subagent reads a source and reports back compactly, and only when a Key point or a split needs checking against it.
- If a pass runs out of room, the next session picks up at the first unticked lecture.

## Out of scope

- New visual kinds. Note candidates in the commit messages; a later ticket builds them.
- Learning objectives.
- Changes to the node page layout beyond rendering the new blocks (ticket 35).
