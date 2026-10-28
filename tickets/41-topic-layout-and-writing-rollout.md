# 41: Topic layout, graph controls and the writing rollout

**What to build:**
- Finish the topic page layout that the prototype on `prototype-layout` introduced, and the graph controls that came with it.
- Then rewrite the text of every topic by the new writing rules, using `content/nodes/lecture-4/l4-dot-cross-product.md` as the model.

**Blocked by:** 40 (its new concept questions and exercises must be in the content files before this rewrite touches them).

**Note from ticket 40:**
- **Pin question IDs before rewriting.** Ticket 40 gives a concept question without an `id` the ID `<nodeId>.q-<hash of its question text>` (`src/content/questionId.ts`). Rewriting a question's text changes that ID and orphans the saved first picks and review-queue entries. Add an explicit `id:` to a question first (it keeps its current hashed ID) or accept that its history resets.

**Status:** done

**Suggested model:** Claude Opus 5.5 medium for the main chat. Sonnet for the rewrite subagents.

**Read first:** `AGENTS.md`, `docs/writing-style.md`, `docs/content-format.md`, `ticket-36-handoff.md` (how the last bulk rewrite ran, and `scripts/compare-rewrite.ts`). Then open the reference topic in the app at `/node/l4-dot-cross-product`, and in the source.

## Background

On 2026-10-15 the owner compared the app with a fellow student's study app (PyLab) and found the topic pages hard to read. The causes:

- giant paragraphs;
- every block boxed in nearly the same colour;
- widths that jump: the formal and plain versions side by side at 968 px, everything else at 704 px and aligned left;
- formulas that need a scroll bar;
- an exercise box that gets lost on the page.

He decided on the changes below and tuned them on the prototype. **The prototype is the reference. Where this ticket and the prototype disagree, the prototype wins.**

## What the prototype already does

It is in the shared page code, so every topic already shows it:

**Column and type**
- One centred column of 52rem (832 px) for everything: text, formulas, figures, exercises. Body text is 17 px.

**Blocks** (`src/ui/blocks.tsx`, `src/ui/styles.css`, the "Topic page" block at the end)
- **Running, not boxed:**
  - the formal statement, with a thin bar in its kind colour on the left;
  - the plain explanation directly below it, under a small "In plain words" label;
  - examples, with a bar;
  - prose.
- **Boxed,** with a coloured left edge, a tint and an icon: trap, tip, Key points, Try it yourself, going deeper, concept question.
- **The exercise** is the strongest box. Its 6 px edge and its tint carry the tier colour: `--level-basic` blue, `--level-standard` yellow, `--level-exam` red. The tab dots use the same colours.
- No dividing lines between blocks. Spacing separates them.

**Headings and formulas**
- Learn headings show "1.", "2." in the accent colour. Practise and For the sheet show an icon chip. Both are drawn with CSS `::before`, so the heading text is the plain title.
- A displayed formula never scrolls. `Prose` shrinks a formula that is too wide, down to 60%, and refits only when the width changes.

**Exercises**
- Attempts are closed behind "N attempts" with a chevron, and open by themselves after a save.
- Each attempt is one line: a short date and one small mark per step. Only wrong steps and notes are written out.
- In Practise, Next steps Core → Extra → Exam level before it leaves the section.

**End of a topic and graphs**
- The last section ends with the finish button "Topic done · next topic", in its own `--finish` colour.
- 2D graphs pan on drag. Zoom uses + / − / ⟲ buttons or Ctrl + wheel. Double-click resets. 3D graphs keep drag to rotate.

## Acceptance criteria

### Finish the layout
- [x] The section rail shows no horizontal scroll bar at any width. Let it wrap, or shorten the labels.
- [x] The topic page works at 375 px wide and in the light theme: no horizontal page scroll, boxes and bars readable, finish button readable.
- [x] Unused rules are removed: `.pair`, `.node-links`, the old `.block-plain-explanation` box rules, the readable-width cap the topic page no longer uses. The "Topic page" override block is folded into the rules it overrides where that is simple.
- [x] Every 2D figure in lectures 1 to 8 pans, zooms by the buttons and Ctrl + wheel, and lets a plain wheel scroll the page. Check each visual kind once.

### Writing rules
- [x] `docs/writing-style.md` gains, under "Checked by the writer":
  - Conditions and cases go in bullet lists.
  - Methods and procedures go in numbered steps.
  - Every important formula gets its own displayed line. A calculation of more than one step becomes an aligned display, one step per line.
  - Key terms are bold where they are introduced.
  - A subheading (`###`) comes whenever the subject changes inside a long block.

  There is no hard limit on paragraph length. the owner decided this.
- [x] A check script renders every displayed formula at 832 px and at 375 px and lists the ones that overflow. A formula that `Prose` would shrink below about 85% is split into lines in the content.

### Rollout
- [x] Every visible topic is rewritten to match `l4-dot-cross-product.md`: lists, numbered steps, displayed and aligned formulas, bold terms, subheadings. Solutions, worked examples and traps get the same treatment.
- [x] The rewrite changes layout only. The maths, the claims, the examples, every verification record and every ID stay the same. `scripts/compare-rewrite.ts` or an equivalent checker confirms this for each topic.
- [x] Hidden topics (`visuals-stand-in`, `visuals-one-variable-stand-in`, `l6-hessian-test-sample`, `outside-current-course`) stay as they are, because tests depend on them.

### Checks
- [x] The smoke specs cover: the attempts summary and its marks, Next through the tiers, the finish button, the zoom buttons and the rail without a scroll bar.
- [x] `npm run check` passes before each commit. While working, run only the checks that cover the change.

## How to run the rollout

- One lecture per commit.
- The main chat does not rewrite topics itself. Draft subagents rewrite the topics of one lecture each, with the reference topic and the writing rules in their brief. They report back compactly.
- The checker then compares old and new. The main chat reviews the flagged differences and spot-checks a few topics per lecture in the app. A rewrite subagent applies the fixes.
- Content passes run one at a time, so no two agents write the same file.

## Out of scope

- The formula sheet page, mocks and checkpoints.
- 3D figure controls.
- New content. This ticket only reshapes existing text.
