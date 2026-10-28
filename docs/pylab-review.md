# PyLab review

What we took from exploring PyLab, a study site for a Python course, and what it means for this app. Written on 2026-10-13 from one exploration session. The last section proposes a small set of tickets. This is a polish pass, not a rework.

Status words: **take** (do it), **adapt** (take the idea, change the details), **skip** (not for us), **open** (not decided yet).

## What PyLab is

- 11 modules, 50 lessons, 192 exercise levels. Each module is a course session.
- A lesson is a short theory recap followed by "Your turn" with one exercise in three levels.
- Left sidebar with the whole curriculum, a course map page, a sandbox, light and dark themes, FR/EN.
- Progress and code are stored in the browser.

## What we liked, and what we do with it

### 1. Curriculum sidebar — adapt

**PyLab:** An always-visible left sidebar. Home, Course map and Sandbox are at the top. Below them every module is listed with its number, its title and "x/y levels completed", and a module expands to its lessons. Overall progress and "Reset progress" are pinned at the bottom. You can jump to any topic in one click.

**For us:** A left sidebar with **Home**, **Mocks** and the **Lectures**. Each lecture expands to its nodes and shows how many nodes are solid. It replaces most of the top bar links. No mobile behaviour is needed beyond not breaking.

### 2. Course map — take

**PyLab:** One page that lists every session of the course. Each session row has its slide range, its topic count and its progress. Under it, each topic shows where it is in the source ("slides 23–26, 61–62") and has chips linking to the lessons that cover it, with a done/not-done circle.

**For us:** A one-page overview of the course. Each lecture shows its topics, with handout or lecture-note pages, and links to the nodes that cover them, with their state. `content/coverage.yaml` and `content/sources.yaml` probably hold most of the data. Check whether this replaces or extends the existing Coverage page.

### 3. Three levels per exercise — adapt

**PyLab:** Each exercise has three clickable level tabs, each with a coloured dot and a one-line purpose: Core "The essentials to master" (green), Extra "To consolidate" (amber), Stretch "To go further" (pink). Each level also has a code editor, Run and Check buttons, a hint and a hidden solution.

**For us:**
- Take the three clickable level tabs with a dot and a purpose line: **Core** "The essentials to master", **Extra** "To consolidate", **Exam level**. Exam level replaces "Stretch".
- We already tag exercises basic, standard and exam (labels in `src/ui/blocks.tsx`). This changes how they are shown, not the content format.
- Keep our exercise stripped down: the statement, the solution reveal and **Copy for AI**, which already exist.
- **Skip** the hint, the editor, Run, Check and the inputs.

### 4. Lesson layout — take

This is what made PyLab feel nicer to look at and easier to follow than our node page.

**Header:**
- A breadcrumb line ("Module 1 · Variables, types and expressions") above a large title with a muted number ("**1.1** Discovering Python").
- A meta row with icons: time estimate ("25 min") and "1 exercise × 3 levels".
- A **Learning objectives** box with about four checkmarked items in two columns.

**Structure:**
- Two numbered parts with icon badges: "**1.** Theory recap" (book icon) and "**2.** Your turn" (target icon).
- Short subheadings every few paragraphs, phrased as questions or topics ("What is a programming language?", "Where do I write code?").
- Key terms in bold in the running text.

**Breaking up the text:**
- Paragraphs alternate with lists, tables, code blocks and editable examples.
- Callouts with a coloured edge and an emoji lead: 💡 tip, ⚠️ warning.
- A 🎯 **Key points** box closes the theory: one dense summary of the lesson.
- For us, code blocks don't apply and tables rarely do. Our equivalents are **visuals and graphs**, boxed statements and worked examples, tip and trap callouts, and a Key points box.

**Footer:** "Previous lesson" and "Next lesson: 9.4 Visualising with Matplotlib" cards.

### 5. Short lessons — adapt

**PyLab:** Even the heavier lessons (module 9, pandas) are short: 25 to 40 minutes, five or six subheadings, one exercise. You finish one often, and progress moves visibly.

**For us:** Our units are about the same size. We have 73 nodes over 8 lectures, and each node is already split into Learn sections, so no restructuring is needed. Their lessons *feel* shorter for three reasons, and we take all three:
- a time estimate up front
- progress per unit visible in the sidebar
- content that starts right away instead of after metadata

### 6. Theme and colours — take

**PyLab** uses a cool slate palette with indigo accents:
- Light: page `#f8fafc` (slate-50), body text `#334155` (slate-700), headings slate-900, line height 1.75 at 16px. Boxes are white or faintly indigo-tinted with a thin border, so the content sits in visible layers.
- Dark: deep navy slate instead of black, with lighter cards and visible borders.

**Ours** (`src/ui/styles.css`):
- Light: canvas `#fbfbfa`, almost pure white, with little layering. Too bright.
- Dark: canvas `#191918`, a warm near-black. Almost too dark.

**Change:** a slightly toned light background with lighter cards on top, and a lifted dark background (toward navy or a lighter grey) where panels can be told apart. Keep the indigo accent (`#3d479b` / `#a3acf0`), which is already close to theirs. This is mostly a token change.

## Side by side: our node page and a PyLab lesson

We compared `l2-monotonicity-extrema` with PyLab lessons 1.1 and 9.3.

| | PyLab | Ours today |
| --- | --- | --- |
| Before the content | Breadcrumb, title, meta row, learning objectives | Lecture label, title, two tags, exam-weight line, notation box, "Recommended first", seven source links |
| Navigation in the page | Two numbered parts | Section rail with circles: Learn 1–3, Practise, Recall, For the sheet |
| Visual hierarchy | Icon badges, boxed and coloured callouts, Key points box | Small grey uppercase labels (DEFINITION, PLAIN VERSION, THEOREM) over flat text of equal weight |
| Breaking up text | Tables, code, examples, tips, warnings | Mostly paragraphs. The extrema section has no figure although the topic is visual |
| Summary | 🎯 Key points at the end of the theory | None per section |
| Exercises | One exercise, three level tabs | Concept question in "Your turn", basic / standard / exam exercises listed in Practise |

What to change:
- **Fold the metadata away or move it down.** Sources, notation, tags and "Recommended first" push the maths below the fold.
- **Open with a time estimate.** (Learning objectives were considered and dropped.)
- **Give each block type a visual identity.** Definition and theorem get a box with an icon and a coloured edge, the plain version sits softer next to it, a trap becomes a ⚠️ callout, and a worked example gets its own box.
- **Close each Learn section with a Key points box.**
- **Use visuals much more often in Learn sections.** Interactive visuals exist for both one and several variables; they just appear in fewer than half the nodes.

What to keep: the **section rail**. It does the job of PyLab's numbered parts and does it well.

## Our other pages

### Home — adapt
- Overall good, but too much at once.
- **"Ready when you are" goes.** The opener should be concrete, like PyLab's "Start: 1.1 Discovering Python": the next node to study is the main action.
- **Exam readiness stays at the top**, but it is confusing today. It needs a simpler form or a clearer one-line explanation.
- The section tiles below stay.

### Progress — rework
- Confusing in its current form. The rework should make clear what each number means and what to do next. The sidebar's per-lecture progress may take over part of its job.

### My plan — remove
- Feels outdated, and every date has to be entered by hand. Remove the page, its tile on Home and its top bar link.

### Formula sheet — open (work in progress)
- It currently produces a 26-page document, which is unusable as a sheet.
- Mark it as work in progress in the app. Decide later whether to rework it into a short sheet or remove it.

## Skipped

- PyLab's hint, code editor, Run/Check and inputs.
- Sandbox, FR/EN switch.
- Phone layout work: the app is rarely used on a phone.

## Proposed tickets

Three tickets, numbered after ticket 34. This is a polish pass, not a rework.

1. **35: Visual polish (themes, node page, exercise levels).** The look changes; nothing about how the app works does.
   - Themes: retune the tokens in `src/ui/styles.css` for a toned light page with lighter cards, and a lifted dark canvas with visible panels.
   - Node page header: breadcrumb, title, a time estimate computed from the blocks, and sources, notation and "Recommended first" folded into one collapsible line.
   - Block identity: boxed definitions and theorems with an icon and a coloured edge, a softer plain version, a ⚠️ trap callout, a worked example box.
   - Exercise levels: Core / Extra / Exam level tabs with a dot and a purpose line, keeping the solution reveal and Copy for AI.
   - Previous and next node at the bottom of a node.
2. **36: Key points and lighter text.** A build part done once, then content one lecture at a time.
   - Build once: a `key-points` block and a `tip` callout, with rendering and the content check.
   - Content for all 8 lectures in this one ticket, worked lecture by lecture in course order, with one commit per lecture: a Key points box at the end of each Learn section, long explanations split into short chunks with subheadings and callouts, and a visual where an existing visual kind fits.
   - Visuals today: 27 of the 73 visible nodes have one (lecture 1: 2 of 9, 2: 5 of 13, 3: 3 of 13, 4: 3 of 9, 5: 3 of 10, 6: 4 of 7, 7: 4 of 6, 8: 3 of 6). The existing kinds cover both parts of the course: one variable (curve sketch, limit, Newton, Taylor, Riemann) and several variables (quadric surfaces, gradient, tangent plane, critical points, constraints, regions, polar, cylindrical and spherical regions, solids, change of variables). Most nodes without a visual can use one of these.
   - Follows `content/guide/adding-content.md` and `docs/writing-style.md`. Learning objectives are dropped.
3. **37: Sidebar and Home cleanup.**
   - Left sidebar with Home, Mocks and the lectures, which expand to their nodes and show progress. It replaces the top menu.
   - Home gets a concrete opener and a clearer exam readiness.
   - Remove My plan.
   - Mark the formula sheet as work in progress.

If a topic needs a visual that no existing kind can show, ticket 36 notes it, and new visual kinds become their own ticket later.

**Parked:** the course map and the Progress rework.
