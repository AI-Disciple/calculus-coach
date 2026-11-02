# Spec: Interactive course app for Introduction to Analysis and Calculus in Several Dimensions

Status: ready-for-agent


## Problem Statement

The user is a student taking Introduction to Analysis and Calculus in Several Dimensions. The final exam is two hours, out of 20, one handwritten sheet, no calculator. The one-variable foundations are often shaky, and the multivariable half of the course (lectures 4 to 8) is the whole final.

What he has today does not teach him the course:

- The handout is 347 pages, over-explains, goes too deep on some topics, and has crossed-out chapters he must skip.
- His lecture notes exist for lectures 1, 2, 3 and 5 only. Lecture 4 exists only as board photos. Lectures 6, 7 and 8 have not happened yet (15 October, 5 November, 12 November).
- The multivariable exercise sheets have no solutions, and he has barely started them.
- The past exams are many files, some duplicated, some scanned, with keys that contain errors.
- His own handwritten notes contain a few wrong formulas (for example the Hessian test without the condition D > 0).
- His three existing revision pages cover only one-variable material, mix two visual styles, have no 3D graphics, and are built for a finished midterm.

He needs one place that teaches the course in the course's own language, builds understanding step by step, drills him with many exercises of increasing difficulty, shows official solutions, and tells him where he keeps going wrong. He does the exercises on paper and takes his mistakes to an external AI chat himself, so the app must not try to grade him.

## Solution

A local web app, run on his laptop with one command, that presents the course as eight lectures in order. Each lecture contains topic nodes. A node teaches one topic with the course's formal wording plus plainer explanations, interactive visuals, worked and guided examples, concept and trap questions, a three-tier exercise ladder with official or verified solutions, and links back to the exact page of his own source material.

There is no answer checker. After working an exercise on paper, he reveals the solution and ticks what he got right and wrong, step by step for long exercises. Wrong steps get a mistake type. An error tracker turns that into a dashboard and into a spaced-repetition review queue that brings missed exercises and missed concept questions back. A "copy for AI" button packages an exercise, its solution and his marked mistakes for pasting into an AI chat.

Nothing is ever locked. Prerequisites appear as recommendations, and mastery appears as a badge. A formula-sheet builder collects the sheet-worthy items into a printable draft that he copies by hand. Timed mock exams in the exact six-block final format, built from real past papers and from newly written papers, close the loop. Real past midterms are available as optional checkpoint tests for lectures 1 to 3.

The foundation lectures (1 to 3) are treated at full depth, not as a compressed refresher. The multivariable lectures (4 to 8) are weighted by what the final actually examines. The app is built for iteration: after each new lecture, an agent follows written instructions inside the app to transcribe his notes, update the affected nodes and mark what changed.

## User Stories

Course structure and navigation

1. As a student, I want the home page to show lectures 1 to 8 in order with their topic nodes, so that I can follow the course from lecture 1 to lecture 8.
2. As a student, I want every node to be openable at any time, so that I never have to finish one part before I am allowed into another.
3. As a student, I want each node to list its prerequisites as recommended links, so that I can jump back when I realise I lack a foundation.
4. As a student, I want a mastery badge on each node (not started, in progress, solid), so that I can see where I stand without anything being blocked.
5. As a student, I want a "continue where I left off" entry on the home page, so that I can resume in one click.
6. As a student, I want the home page to show how many review items are due, so that I know what is waiting.
7. As a student, I want quick links to mocks, the formula sheet, the progress page and the review queue, so that the main tools are one click away.
8. As a student, I want a search across all nodes, formulas and exercises, so that I can find a topic or an exercise number instantly.
9. As a student, I want exercise numbers to match the handout and the exercise sheets (for example 14.7.3 or sheet 2 exercise 7), so that I can cross-reference my paper work.
10. As a student, I want the app to work with no schedule at all, so that its order and layout are never decided by dates.
11. As a student, I want a light and a dark theme, so that long sessions are comfortable.
12. As a student, I want the app to start with a single command and open on localhost, so that I do not need hosting or an account.

Node content and language

13. As a student, I want each node to show the course's own formal statement of every definition, theorem and method in the professor's or handout's wording, so that I am exposed to the way the course teaches it.
14. As a student, I want a plainer-language explanation next to each formal statement, so that I can understand it without losing the course's vocabulary.
15. As a student, I want each node to say which source its wording comes from (lecture notes, board photo, handout section), so that I know whose wording I am reading.
16. As a student, I want notation to follow my notes (df/dx, f_x, f') and also show the curly-d form wherever my notes or the handout use it, so that the app and my materials never disagree.
17. As a student, I want formulas that my own notes got wrong to be taught in their correct form, with a trap that shows the wrong version failing and no mention of whose notes had the slip, so that I fix them before the exam.
18. As a student, I want trap questions on the known confusion points (D > 0 in the Hessian test, inflection versus f'' = 0, (1/u)' = -u'/u^2, domains of radicals, union versus intersection), so that I learn to spot them.
19. As a student, I want content that is too deep for this course (epsilon-delta proofs, error bounds, hyperbolic functions) kept in clearly marked optional "going deeper" blocks, so that nothing is lost but I am not distracted.
20. As a student, I want nodes to have a flexible shape that fits their topic, so that a surface-sketching node and an integral-technique node do not feel forced into one template.
21. As a student, I want nothing important from my sources to be dropped because it did not fit a template, so that I can trust the app is complete.
22. As a student, I want each node to show how often its topic appears on past finals, so that I can see what carries points.
23. As a student, I want nodes that are thinner than the rest to be marked as drafts, so that I know where content still needs work.

Visuals

24. As a student, I want a rotatable 3D surface viewer with parameter sliders for the quadrics (paraboloid, sphere, cone, both hyperboloids, hyperbolic paraboloid), so that I can see how the equation shapes the surface.
25. As a student, I want level curves and cross sections linked to the surface, with a slicing plane I can move, so that I understand contour maps and the cuts x = 0, y = 0 and z = c.
26. As a student, I want a tangent plane viewer with a movable point, so that I see how the plane follows the surface.
27. As a student, I want a gradient and directional-derivative viewer on a contour plot with a direction control, so that steepest ascent and level-curve normality become visible.
28. As a student, I want a critical point viewer showing the local surface and the Hessian determinant, with a parameter slider for families such as x^2 + y^2 + kxy, so that I see how D decides min, max or saddle.
29. As a student, I want a view of a constraint curve against level curves of f, so that Lagrange multipliers make geometric sense.
30. As a student, I want a region viewer where I change integration bounds and the region and the order of integration redraw, so that setting up double integrals becomes visual.
31. As a student, I want polar, cylindrical and spherical region viewers, so that I can choose the right coordinates for a region.
32. As a student, I want a change-of-variables viewer that shows a grid being transformed with its Jacobian, so that the Jacobian factor has meaning.
33. As a student, I want a solid-between-two-surfaces viewer with the coordinate-plane cut, so that I can practise the sketch the exam always requires.
34. As a student, I want one-variable visuals (curve sketching builder, Newton iterations, Taylor polynomial overlays, Riemann sum slider, limit behaviour), so that foundations are visual too.
35. As a student, I want visuals to explain and never grade, so that the app stays an explainer and not a checker.

Examples, questions and exercises

36. As a student, I want one fully worked example per method, so that I see a model write-up.
37. As a student, I want guided examples where I reveal the solution one step at a time, so that I can attempt each step before seeing it.
38. As a student, I want short multiple-choice concept and trap questions with an explanation after each answer, so that I can check understanding quickly.
39. As a student, I want exercise ladders in three tiers (basic, standard, exam level), so that difficulty rises as I go on.
40. As a student, I want the exam tier to mirror the style and length of real exam blocks, so that practice matches the final.
41. As a student, I want every exercise to have a solution I can reveal on demand, so that I can compare against my paper work.
42. As a student, I want each solution labelled as "official key", "handout answer with worked solution" or "written for this site", so that I know how far to trust it.
43. As a student, I want solutions to show the structure the exam rewards (domain first, justification of each step, conclusion stated), so that I learn to write answers that score.
44. As a student, I want real past-exam questions attached to the relevant nodes with their source (year, paper, question number, points), so that I see the real thing early.
45. As a student, I want the handout's assigned practice sets (14.5, 14.7, 15.1, 15.2 items 1 to 6, 12 to 16 and 19, 15.5, 15.6 items 1 to 6, 10 and 11, 15.7) and both exercise sheets present with solutions, so that the professor's recommended practice is covered.
46. As a student, I want the exercises from my three existing revision pages to be reused where good, after being re-verified, so that earlier effort is not wasted.
47. As a student, I want solutions verified by a computer algebra system before they ship, so that sign slips and wrong keys do not reach me.
48. As a student, I want known errors in official keys flagged in the solution (for example a dropped minus sign in a steepest-descent answer), so that I do not learn a wrong answer.
49. As a student, I want long modelling exercises (golf balls, Cobb-Douglas, aircraft, portfolio) present with a scaffolded solution, so that hard questions are approachable.

Self-marking and the error tracker

50. As a student, I want to reveal a solution and tick each step or rubric item as right or wrong for multi-step and exam-tier exercises, so that I record exactly where I broke.
51. As a student, I want short drills marked as a whole (right, partly right, wrong), so that quick practice stays quick.
52. As a student, I want each wrong step to carry a mistake type chosen from a fixed list (sign or arithmetic slip, wrong formula or rule, domain or condition missed, unjustified reasoning, setup or bounds wrong, misread question, did not know how to start), so that patterns emerge.
53. As a student, I want an optional free-text note on any mistake, so that I can record the specific confusion.
54. As a student, I want a progress page of mistake types by topic and over time, so that I see my weakest areas.
55. As a student, I want missed exercises to come back in a review queue after a few days with growing intervals, so that I retest what I got wrong.
56. As a student, I want to postpone a review item, so that a busy day does not wreck the queue.
57. As a student, I want a history of my attempts per exercise, so that I can see improvement.
58. As a student, I want a "copy for AI" button on every exercise that copies the exercise, the official solution, the steps I marked wrong with their mistake types and a placeholder for my own working, so that I can paste it into an AI chat without retyping any maths.
59. As a student, I want the copied text to ask the AI to explain my mistake using the course's notation, so that explanations match what I am taught.

Review

60. As a student, I want a concept question I answer wrong at my first pick to join the review queue, so that I come back to the theory I missed.
61. As a student, I want missed concept questions and missed exercises to share one review queue, so that I review in one place.
62. As a student, I want a concept question answered right in review to move on the schedule, so that the schedule adapts.
63. Removed with the recall cards (ticket 40). The number stays so that other references keep working.

Formula sheet

64. As a student, I want each node to mark its sheet-worthy formulas, traps and recognition rules, so that candidates for my sheet collect automatically.
65. As a student, I want a formula-sheet builder where I include, exclude and reorder items by topic, so that I shape my own sheet.
66. As a student, I want a clean printable draft, so that I can copy it by hand onto the one allowed sheet.
67. As a student, I want a rough size indicator on the draft, so that I can judge whether it will fit one sheet.

Mocks and checkpoints

68. As a student, I want timed mock exams in the final's six-block format with the printed per-block minute budgets, so that I rehearse the real pacing.
69. As a student, I want the real past finals and mocks available as mocks, so that I practise on genuine papers.
70. As a student, I want newly written mocks in the same format and difficulty, so that I can retest weak blocks without remembering answers.
71. As a student, I want to self-mark a mock per block with rubric items and see my total out of 20, so that I know where I stand.
72. As a student, I want mock results to feed the error tracker and review queue, so that mistakes there are not forgotten.
73. As a student, I want the real past midterms (2022, 2024, 2025, 2026 and the mocks) available as optional timed checkpoint tests for lectures 1 to 3, so that I can test my foundations whenever I choose.
74. As a student, I want the 2026 midterm with its official key available, so that I can later compare it to my graded copy.
75. As a student, I want any mock or checkpoint to be fully optional and never required to progress, so that nothing gates me.

Stories 76 to 79 (My plan) were removed in ticket 37.

Sources and traceability

80. As a student, I want each node to list its sources with links that open my PDF at the right page, so that I can check the course's exact wording.
81. As a student, I want the source links to be configured per machine, so that the app still runs if someone else uses it without my PDFs.
82. As a student, I want a visible coverage view showing which handout sections, lecture-note items and exam question types map to which nodes, so that I can see nothing was missed.

Progress, safety and sharing

83. As a student, I want my progress saved to a JSON file on disk, so that clearing browser data cannot erase my tracking.
84. As a student, I want the progress file location to be configurable (for example in a synced folder), so that it is backed up.
85. As a student, I want progress writes to be safe against corruption, so that a crash cannot destroy my history.
86. As a student, I want to export and import my progress, so that I can move it between machines.
87. As a person receiving the app from the owner, I want it to start with empty progress, so that I begin clean.

Content maintenance

88. As a content agent, I want clear in-app and in-repository instructions for adding new lecture material (notes, board photos, graded exams), so that I can update the course consistently.
89. As a content agent, I want the instructions to say how to transcribe, how to compare against existing nodes, how to apply the course's notation, how to mark changes and how to update the coverage view, so that updates are repeatable.
90. As a student, I want a "what changed" log in the app listing each content update and the nodes it touched, so that I can see what is new after a lecture.
91. As a content agent, I want an automated check that fails on unmapped sources, broken source references, unverified solutions, missing prerequisites and style violations, so that bad content cannot ship quietly.
92. As a content agent, I want the app's writing-style rules documented and linted (no em dashes, no forced lists of three, no "not X but Y" polish, no filler), so that all site text matches the student's style.
93. As a student, I want my graded midterm to be usable later to fine-tune which foundation topics get extra depth, so that the app adapts to my real gaps.

## Implementation Decisions

### Glossary (use these terms in tickets and code)

- **Lecture**: one of eight top-level divisions of the course, ordered 1 to 8.
- **Node**: one topic page inside a lecture. Its shape is flexible. It carries formal statements, plain explanations, visuals, examples, questions, exercises, sheet items and sources.
- **Block**: a unit of node content (formal statement, plain explanation, visual, worked example, guided example, concept question, going-deeper, and so on). A node may use any set of blocks.
- **Formal statement**: a definition, theorem or method in the course's own wording, with its source.
- **Exercise**: a problem with a tier, a solution and a provenance label. May have rubric steps.
- **Tier**: basic, standard or exam level.
- **Step** (rubric item): one self-markable part of a solution.
- **Provenance label**: official key, handout answer with worked solution, or written for this site.
- **Mistake type**: one value from the fixed list used when a step is marked wrong.
- **Review queue**: the single spaced-repetition queue holding missed exercises and missed concept questions.
- **Sheet item**: a formula, trap or recognition rule flagged as worth writing on the handwritten exam sheet.
- **Mock**: a timed paper, either real or newly written, in the six-block final format.
- **Checkpoint**: an optional timed past midterm covering lectures 1 to 3.
- **Source**: a registered piece of the student's course material, addressable by page.
- **Coverage map**: the machine-readable mapping from source items to nodes.
- **Draft**: a node status meaning content is thinner or unreviewed.

### Course map (initial inventory, refine after lectures)

All of this ships in the first complete build, from the handout, sheets, past exams and existing notes. Later lecture notes refine wording, notation and emphasis. Placement of topics in lectures 6 to 8 is provisional.

- **Lecture 1 (review, per notes)**: trigonometry and the unit circle, exponentials and logarithms, functions and graphs (domain, range, shifts, dilations, even and odd, absolute value, composition), limits and continuity (laws, one-sided, infinite, at infinity, squeeze, growth hierarchy, standard limits, indeterminate forms), the derivative (definition, tangent line, table, sum, product, quotient and chain rules).
- **Lecture 2**: derivative of an inverse function, implicit differentiation and inverse trigonometric derivatives, the full curve-sketching procedure (domain including radicals, symmetry, intercepts, vertical, horizontal and oblique asymptotes, holes, sign charts, extrema including endpoints, concavity and inflection), L'Hopital, second-derivative test, one-variable optimisation and word problems, Newton's method with an error statement, the intermediate value theorem, mean value theorem, related rates and linear approximation (lower weight).
- **Lecture 3**: real powers, Taylor polynomials (including composition such as ln(cos x)), Riemann sums, antiderivatives and the fundamental theorem, substitution, integration by parts, trigonometric powers and substitutions, rational functions with partial fractions (light, never examined), improper integrals, area between curves, probability densities, numerical integration (rules, with error bounds as going-deeper).
- **Lecture 4**: supporting space geometry (3D coordinates, vectors, dot and cross product, lines and planes, cylindrical and spherical coordinates), then functions of several variables, graphs, planes z = ax + by + c, quadrics, cross sections, level sets and contour maps, domains.
- **Lecture 5**: limits and continuity in R^n (two-path test; epsilon-delta only as going-deeper), partial derivatives, higher-order derivatives and Clairaut, tangent plane (graph and implicit surface), directional derivative and gradient, steepest ascent and descent, gradient normal to level sets, chain rule (along a path, two parameters, implicit), the Hessian.
- **Lecture 6**: critical points and the full second-derivative test with D, the D = 0 case settled by sections, global extrema on closed regions including the boundary, worded constrained optimisation, Lagrange multipliers (one constraint; two constraints as going-deeper), parameter families.
- **Lecture 7**: double integrals over rectangles, Fubini, average value, general regions, changing the order of integration, volumes, polar coordinates.
- **Lecture 8**: change of variables and the Jacobian (linear and named substitutions), triple integrals, cylindrical and spherical coordinates, volumes between surfaces with the coordinate-plane sketch, mass and centre of mass (only the material before Example 15.3.1 is core), probability with multiple integrals as an optional node.

Excluded entirely (crossed out by the student): sequences and series, vector functions, vector calculus (Green and relatives), differential equations, work, kinetic energy, volumes of revolution, arc length, surface area, slopes and areas in polar coordinates, calculus with parametric equations. Section 15.4 (surface area) is a handout section the professor says to skip.

### Depth and weighting

- Foundation lectures 1 to 3 get full depth, with extra weight on the student's known weak spots (sign slips, right answer with invalid justification, domains of radicals, union versus intersection, endpoint extrema, inflection versus extremum, hyperbolic mix-ups, Newton with an error sentence, Taylor composition, improper integrals, densities).
- Multivariable nodes carry exam-weight tags from the two most recent finals: double integrals 32.5%, critical points 20%, constrained or worded optimisation 17.5%, triple integrals and volumes 15%, level sets 5%, tangent plane 5%, chain rule 5%. One-variable skills appear only inside these blocks.
- Never examined on finals but taught: limits and continuity in R^n, the definition of differentiability. These stay as nodes, tagged low exam weight.
- Green's theorem, potentials and densities appeared only on the 2021 and 2022 finals. Not core.
- Midterm-only topics (sketching, Newton, Taylor limits, 1D optimisation) are weighted by midterm templates for the foundation lectures.

### Node and content model

- One Markdown file per node, with structured front matter (lecture, ordering within lecture, title, prerequisites by node reference, sources, exam-weight tag, status draft or reviewed) and body blocks. Blocks are typed so the app can render and index them, but the set and order of blocks per node is free.
- Formal statements and plain explanations are separate block types that are rendered side by side or in sequence. Every formal statement carries a source reference.
- Exercises and sheet items are content records referenced from or embedded in nodes, each with an identifier stable across edits so that progress survives content updates.
- Going-deeper blocks are collapsed by default and labelled optional.
- Notation follows the student's notes first (df/dx, f_x, f'), shows the curly-d equivalent where a source uses it, and always names the equivalence once per node.
- All site text obeys the student's writing rules: no em dashes, no forced lists of three, no "not X but Y" polish, no filler. Cleanup of existing text is typo and grammar only.
- Content writing rules, taken from the student's edits of the sample node (these are lasting rules, apply them to every node, example, trap, explanation and solution):
  - Write full sentences. Compress only where the cut does not cost understanding. A clipped fragment that makes the reader reconstruct the logic is wrong, even if it is shorter.
  - Teaching text never refers to the student's own notes or to a slip in any source ("the lecture 5 notes have this slip"). A trap states the correct rule and shows the wrong version failing. Where a source is wrong, that information lives in the source inventory and the content change log, never in node prose.
  - When an example is used as evidence, introduce the objects in words, give each computed quantity by name before its value, and end with the conclusion in a full sentence. A line of stacked symbols and inequalities with no verbs is not an explanation.
  - One claim per clause, in the order a reader would verify it: the object, what is computed, the result, what follows. Every word must carry part of the claim. If removing a word changes nothing, remove it.
  - Reference model for tone and density: "f = x^3 + y^2 has its only critical point at (0, 0) with D = 0. Along y = 0 it equals x^3, which is positive for x > 0 and negative for x < 0, so the point is neither a minimum nor a maximum." Each clause makes one claim, every symbol is introduced by its role, nothing is padded.
  - Plain explanations sit around the course's formal wording and use simpler language. They may be longer than the formal statement when the formal statement is compressed.
- The sample node (the Hessian test with the D = 0 case) is saved as `sample-node.md` in this folder. It is a sample and nothing more: it shows the tone, the level of explanation and how a trap or an example is written, so the agent can see the target feel. Its wording is not a template and no later text has to copy it. All real content is written from the course sources (lecture notes, handout, exercise sheets, exams, syllabus), using the notation, statements and examples found there. The sample's only technical use is as stand-in content for the first end-to-end slice, to prove the node page can display formulas, blocks and solutions. The real Hessian node is written later from the sources and may differ from the sample.

### Exercise, solution and verification model

- Each exercise has: statement, tier, topic tags, optional exam-block tag, optional past-exam source (year, paper, question, points), solution, provenance label, and optional rubric steps.
- Provenance rules: official key when a key exists (past exam keys, handout appendix with working added where only a final answer exists), handout answer with worked solution when the handout gives a final result only, written for this site otherwise.
- Every solution with a checkable result carries a machine-checkable verification record (the expression, the expected value or form) that a SymPy-based verifier runs at build time. Solutions with sketches, proofs or prose are marked as not machine-checkable and are reviewed by a second pass.
- Where verification disagrees with an official key, the exercise is kept, the discrepancy is stated in the solution, and the verified value is shown.
- Existing exercise banks (140 integral exercises, 116 multiple-choice questions, 6 midterm papers, 12 curve write-ups, 83 cards) are harvested, normalised into this model, re-verified, and re-tagged. They are inputs, not the base of the app.

### Self-marking, error tracker and review queue

- An attempt records timestamp, exercise, tier, per-step result (right, wrong, skipped) or a whole-exercise result (right, partly right, wrong), a mistake type for each wrong step, and an optional note.
- The mistake type list is fixed at: sign or arithmetic slip, wrong formula or rule, domain or condition missed, unjustified reasoning, setup or bounds wrong, misread question, did not know how to start. Free text is optional alongside it.
- The dashboard aggregates mistakes by type, by node, by lecture and over time, and links each aggregate to the exercises behind it.
- The review queue uses an expanding-interval schedule: missed exercises return after a short first interval, grow on success and reset on a miss. A concept question answered wrong at its first pick uses the same mechanism. Interval values are configuration, not hard-coded. Items can be postponed.
- Node mastery is derived from recent attempts at exam-tier and standard-tier exercises and from open review items. It is a displayed badge only and never an access rule.
- The "copy for AI" action produces plain text with LaTeX preserved: statement, official solution, steps marked wrong with their mistake types, a clearly marked placeholder for the student's own working, and an instruction to explain the error using the course's notation.

### Mocks and checkpoints

- A mock is a timed paper with blocks, per-block minute budgets, point values and a self-marking rubric per block. Mock results feed the error tracker.
- The final format is six blocks: level sets and tangent plane (2 points, 15 minutes), chain rule along a path (1 point, 7 minutes), two critical-point classifications including a D = 0 case (4 points, 20 minutes), four double integrals (6 to 7 points, about 35 minutes), constrained or worded optimisation with the boundary checked (3 to 4 points, about 20 minutes), triple integral or volume between two surfaces with a sketch (3 points, 20 minutes). Total 120 minutes, 20 points.
- Real papers: the 2024 and 2025 finals fit the format directly. The 2021, 2022 and 2023 retake finals and the mocks are presented as printed (their own structure and durations), with Green and probability questions kept but tagged out of current scope.
- New mocks follow the current format and are verified like any other content. They are written so each exam block can be retested independently.
- Checkpoints are the past midterms (90 minutes, 20 points, two-page sheet, no calculator), each with its key where one exists. The 2026 paper has an official key. A checkpoint is optional everywhere and never gates anything.

### Formula sheet

- Sheet items are flagged inside nodes with a category (formula, trap, recognition rule). The builder lists them by lecture and topic, lets the student include, exclude, edit and reorder, shows a rough count, and renders a clean print layout. The current cheat sheets cover one-variable material only, so lectures 4 to 8 supply the new items.

### Progress storage and local server

- A small local server serves the app and exposes an interface for progress, attempts and the review queue. Progress is one JSON file whose location is configurable (so it can sit in a synced folder). Writes are atomic. Export and import are supported. Fresh installs start with empty progress.
- Source link configuration is a separate optional file mapping registered sources to local paths on the machine. Without it, source references still display but do not open files.
- Source PDFs are never copied into the project. The app refers to them in place.

### Technology

- React with Vite, KaTeX for mathematics, Plotly for 3D surfaces and contours, Markdown content files, a minimal Node server for persistence. SymPy (Python) is a build-time and test-time dependency only, not a runtime one. Node 22 and Python 3.13 are present on the machine, SymPy is not yet installed.
- Look and feel: calm and minimal, light and dark themes, generous space around formulas. Laptop is the target. Responsive layout for narrower screens is welcome but not tested.

### Content maintenance

- The repository contains agent instructions for adding new material, and the app contains a visible page with the same instructions. They cover: where to drop files, how to transcribe handwritten notes and board photos, how to diff against existing nodes, how to apply notation and the writing rules, how to mark changes in the "what changed" log, how to update the coverage map, how to re-run verification and the content checks, and how to fold in the graded midterm.
- The coverage map lists every handout section kept by the student, every lecture-note item, every exercise sheet exercise and every past-exam question template, each mapped to nodes or marked excluded with a reason. The content check fails on anything unmapped.

## Testing Decisions

- A good test exercises external behaviour only: what a student sees and records, and what a content file must satisfy. It does not assert on component structure or internal data shapes.
- **Seam 1, the course content bundle**: loading and validating the real content files as a whole. This one seam covers schema validity, prerequisite references, source references against the registered sources, coverage map completeness, provenance labels, verification records and their SymPy results, going-deeper and draft flags, and a style lint (for example em dashes in site text). It runs on the real content, so a content ticket is done when this passes.
- **Seam 2, the progress interface of the local server**: tests drive the server through its public interface against a temporary data folder. They cover recording attempts with step results and mistake types, derived mastery, the review queue (due items, interval growth, reset on a miss, postpone), first picks of concept questions, the dashboard aggregates, atomic writes, and export and import.
- **UI smoke tests, few and end to end**: open a node, reveal a solution, tick steps, see the mistake appear in the dashboard and the item appear in the review queue, build a formula sheet, start and finish a mock, copy for AI. They run in a real browser against the running app.
- Prior art: none in this project, which starts empty. The existing integrals page exposes its exercise bank to Node (a precedent for loading content outside the browser) but its numeric answer grader is not reused, since the app has no answer checking.
- Mathematical correctness is a content test, not a UI test. Any solution with a checkable result must pass SymPy verification.

## Out of Scope

- Any automatic answer checking or grading of the student's work. The app only reveals solutions and records his own marking.
- The built-in AI chat. Only the "copy for AI" action is provided.
- Accounts, multi-user support, online hosting and syncing beyond the configurable progress file.
- Offline installation as a mobile or tablet app.
- A schedule that affects layout, order, unlocking or recommendations.
- Locking, gating or forced sequencing of any node, mock or checkpoint.
- Content for crossed-out handout chapters and sections (sequences and series, vector functions, vector calculus, differential equations, work, kinetic energy, volumes of revolution, arc length, surface area, polar slopes and areas, parametric calculus).
- Using the graded midterm to tune content, until the student has the graded copy. This is a later iteration.
- Final wording of lectures 6 to 8 from his own notes. That is the later refinement iteration after each lecture.

## Further Notes

- **Seams**: confirmed by the student on 2026-10-09: the two seams above plus a thin UI smoke layer.
- **Sample node**: approved as a sample on 2026-10-09 and saved as `sample-node.md`. It is inspiration for tone and look, not a text to follow word for word. Bulk-content tickets are blocked by the ticket that builds the node page (shown with the sample as stand-in content), so the app can display what the content needs before volume is written.
- **Ticket model suggestions**: the student asked that each ticket suggest which type of model should do it. Rule of thumb: a strong reasoning model for solutions, worked examples and anything with mathematics where a sign error would hurt; a faster model for flashcards, formatting, scaffolding and plumbing; vision-capable reading for handwritten transcription.
- **Known errors in sources**: the student's Hessian test lacks D > 0; his (1/u)' is missing a prime; his inflection rule equates f'' = 0 with inflection; his sqrt(1 - y^2) example ends in the wrong constant. Official keys: 2025 midterm key has three errors, the 2022 final average-value line is wrong, the mock steepest-descent solution drops a minus sign, the Mock 2022 solutions are a different edition from the questions.
- **Duplicates**: many past exam files are byte-identical copies. The source inventory lists them. Content should reference each unique paper once.
- **Tracker convention**: `setup-matt-pocock-skills` has not been run for this project. Specs and tickets use the local-markdown convention under `.scratch/<feature>/`, with one file per ticket under `issues/`.
- **Pending information**: graded midterm copy (for later tuning), notes for lectures 6, 7 and 8 (as they take place), board photos or notes for any further lecture.
