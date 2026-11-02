# Content format

All course content lives in `content/`. The content check (`npm run check`) loads it as one bundle and fails on any problem listed at the end of this file.

```
content/
  lectures.yaml               the eight lectures, numbered 1 to 8, with titles
  sources.yaml                the source registry: every source content may cite
  coverage.yaml               maps each registered source to coverage items or skipped
  changes.yaml                dated log of what was added or changed in the course
  papers.yaml                 mocks and checkpoint papers (metadata, blocks, rubric)
  nodes/lecture-N/<id>.md     one Markdown file per node
  guide/adding-content.md     instructions for adding new content
  style/banned-phrases.yaml   filler phrases the style lint rejects
```

## Node file

A node file starts with YAML front matter, then a sequence of typed blocks. Only blank lines may sit between blocks.

```markdown
---
id: l5-hessian-test            # stable node identifier, used by prerequisites
lecture: 5                     # 1 to 8
order: 3                       # position within the lecture
title: The Hessian test
prerequisites: [l5-partial-derivatives]   # required; use [] when there are none
optional: true                           # optional; marks a node outside the core course
hidden: true                             # optional; a test fixture kept out of the course and the coverage map
sources:
  - source: lecture-notes-5    # registered source identifier
    page: 4                    # optional page (number or text)
    section: "14.7"            # optional section
examWeight: high               # high, medium, low or not-examined
examWeightNote: Critical points carry 20% of the two recent finals.   # optional
status: draft                  # draft or reviewed
notation: |                    # optional, shown near the top of the node
  \(f_x\), \(\frac{df}{dx}\) and \(\frac{\partial f}{\partial x}\) all mean ...
---

::: formal-statement
kind: theorem                  # optional: definition, theorem or method
source: { source: handout, section: "14.7" }
text: |
  If \(D > 0\) and \(f_{xx} > 0\), then ...
:::
```

A block opens with `::: <type>` on its own line and closes with `:::` on its own line. The lines in between are YAML. Text fields are Markdown with maths in `\( inline \)` and `\[ display \]` form, written as YAML literal blocks (`text: |`) so that backslashes stay as written.

## Block types

| Type | Fields |
| --- | --- |
| `formal-statement` | `text`, `source`, optional `kind`, `title` |
| `plain-explanation` | `text` |
| `worked-example` | `problem`, `solution`, optional `title` |
| `guided-example` | `problem`, `steps` (list, revealed one at a time), optional `title` |
| `concept-question` | `question`, `options` (list of `text` with optional `correct: true`), `explanation` |
| `trap` | `text` |
| `tip` | `text` (a 💡 remark that helps with technique) |
| `key-points` | `text` (the 🎯 Key points box that closes a Learn section) |
| `exercise` | see below |
| `sheet-item` | `id`, `category` (formula, trap or recognition), `text` |
| `going-deeper` | `title`, `text` (collapsed by default and labelled optional) |
| `visual` | `kind`, optional `caption`, `params` |
| `section` | `title` (starts a new section of the node, see Sections) |

A formal statement directly followed by a plain explanation is shown as a pair: side by side on wide screens, one after the other on narrow ones.

A `trap` is a common mistake: the correct rule first, then the wrong version failing. A `tip` is a remark that helps with technique, such as a shortcut or a way to check an answer. It is shown where it is written in its section.

A `key-points` block sums up what to remember from one Learn section: the result, its condition and the usual slip, in the node's notation. It holds a short list or two to four sentences. Write one per Learn section, anywhere in the section. The page always shows it last, after the section's other blocks and before its "Your turn".

### Subheadings

A long `text` is split into short chunks with a subheading written as `###` on its own line, with a blank line before and after it:

```markdown
::: plain-explanation
text: |
  The first chunk of the explanation.

  ### Why the condition matters

  The next chunk.
:::
```

Every heading inside a block's text is shown as a small subheading, one level below the block and section titles, so use `###` only.

### Sections

The node page shows a node one section at a time, with Back and Next. A node has one or more Learn sections, then Practise and For the sheet. Practise and For the sheet are left out when they would be empty.

Without `section` blocks the page groups the blocks automatically:

- A Learn section starts at each formal statement. Blocks before the first statement join the first section, and that section takes the statement's title. A statement without a `title` is called by its `kind` (Definition, Theorem or Method).
- A section holds its statement, plain explanation, visual, examples, traps, going-deeper notes and Key points in that order, and keeps the written order within each kind. A tip stays right after the block written before it. A visual written after an exercise or sheet item joins the first section.
- Concept questions form the section's "Your turn". Each basic exercise goes to the section whose statement title contains every word of one of its `topics` (`critical-points` matches "Critical point"), or to the first section if none matches. A section takes at most one basic exercise. Exercises that match a section claim it before the unmatched ones fall back to the first section, and the others go to Practise.
- A section without a concept question or a basic exercise is merged into the next one. A last section without one is merged into the one before.
- Practise lists the standard and exam exercises and any extra basic ones, ordered basic, standard, exam. For the sheet lists the sheet items.

Add `section` blocks only where this grouping is wrong. Once a node has any, the markers replace the automatic Learn grouping for that node:

```markdown
::: section
title: Critical points and where to find them
:::
```

Each marker starts a Learn section that keeps its blocks in the written order, except that its Key points come last. The run of concept questions and basic exercises at its end becomes its "Your turn". A check in the middle of a section stays in the text. A section keeps the first basic exercise written in it, and later ones go to Practise. Standard and exam exercises and sheet items still move to Practise and For the sheet. A node with markers must start with one.

To preview the sections of a node, run `npm run sections -- <node-id>`. Pass a lecture number to print every node of that lecture.

### One-variable visual blocks

These five kinds take a function `f` written as text: `x`, numbers, `pi`, `e`, `+ - * / ^`, and `sin cos tan exp ln sqrt cbrt abs atan sinh cosh tanh`. Products may be implicit (`2x`, `(x+1)(x-1)`). Powers are real, so `x^(2/3)` is defined for negative `x`. The content check fails when `f` cannot be read, and the reader can retype `f` in the figure. In these five kinds, numbers such as `a` may be written as `pi/2`.

| `kind` | `params` | Shows |
| --- | --- | --- |
| `curve-sketch` | `f`, `xmin`, `xmax`, `layers` (ids to switch on first) | The graph with layers: `domain`, `intercepts`, `vertical`, `end-behaviour`, `holes`, `slope-sign`, `extrema`, `curvature-sign`, `inflection`. Optionally restricted to a closed interval to find absolute extrema. |
| `limit` | `f`, `a`, `approach` (`point`, `plus-infinity`, `minus-infinity`) | The graph near `a` or far out, a zoom control, the one-sided limits and a table of values. |
| `newton` | `f`, `x0`, `n` | Newton iterates with the tangent lines and the values of `x_k`. |
| `taylor` | `f`, `a`, `order`, `xmin`, `xmax`, `probe` | The Taylor polynomial of the chosen order at `a` over the graph, with the error at a probe point. |
| `riemann` | `f`, `a`, `b`, `n`, `rule` (`left`, `right`, `midpoint`) | The rectangles, the sum and the integral. |

The curve analysis scans from `-25` to `25`, or twice the plotted range if that is wider. Features outside that range are not found. Every printed value comes from `src/visuals/onevar.ts` and is checked against SymPy in `tests/visual-onevar.test.ts`.

### Several-variable visual blocks

These kinds take no function `f`. The function or region is built into each figure, and its params only pick a preset, a point, a slice or a bound. Every param is optional.

| `kind` | `params` | Shows |
| --- | --- | --- |
| `quadric` | `surface` (`paraboloid`, `sphere`, `cone`, `hyperboloid-one`, `hyperboloid-two`, `hyperbolic-paraboloid`; default `paraboloid`), `a`, `b`, `c` (0.4 to 3; default 1), `axis` (`x`, `y`, `z`; default `z`), `slice` (-2 to 2; default 0) | The quadric with semi-axes `a`, `b`, `c`, for example z = x²/a² + y²/b² or x²/a² + y²/b² + z²/c² = 1, and its cross-section at the `slice` value on the chosen axis. `c` has no effect on the paraboloid and the hyperbolic paraboloid. |
| `tangent-plane` | `x0`, `y0` (-2 to 2; default 1) | The fixed surface z = x² + y² with its tangent plane at (`x0`, `y0`). |
| `gradient` | `x`, `y` (-2 to 2; default 1), `angle` (degrees, 0 to 360; default 0) | The fixed function f = x² + y², the gradient at (`x`, `y`) and the directional derivative in the direction at `angle`. |
| `critical-point-viewer` | `k` (-4 to 4; default 0) | The fixed function f = x² + y² + kxy with D = 4 - k², classed as saddle (D < 0), minimum (D > 0) or inconclusive (D = 0). It never shows a maximum. |
| `constraint` | `level` (-2 to 2; default 1) | The fixed constraint, the unit circle, and the fixed function f = x. The level line x = `level` is tangent to the circle at `level` = ±1 and does not meet it when \|`level`\| > 1. |
| `region` | `preset` (`triangle`, `split`, `exam-shadow`; default `triangle`), `order` (`dy-dx`, `dx-dy`; default `dy-dx`), `intercept` (0.5 to 3; default 1; `triangle` only), `peak` (0.2 to 3; default 1) and `base` (0.4 to 4; default 2), both `split` only | The region in the plane and the iterated-integral bounds in the chosen order. `base` is raised to at least `peak` + 0.2. The `exam-shadow` preset is fixed: the shadow of x² + y² = 1 - x - y. |
| `polar-region` | `shape` (`disk`, `sector`, `annulus`; default `disk`), `r0` (0 to 2.5), `r1` (0.1 to 2.5), `theta0`, `theta1` (0 to 2π) | The region in polar coordinates and its area. The defaults of the four bounds come from the shape: `disk` r from 0 to √2 and θ from 0 to 2π, `sector` r from 0 to √2 and θ from 0 to π/4, `annulus` r from 1/2 to 1 and θ from 0 to 2π. Exact values are printed only when the bounds equal those of the shape, otherwise decimals. |
| `cylindrical-region` | `top` (1 to 8; default 5) | The unit cylinder from z = 0 to z = `top`. The volume is exact when `top` is a whole number. |
| `spherical-region` | `rho` (0.4 to 1.6; default 1) | The fixed region with φ from π/4 to π/2 and θ from 0 to 2π, out to radius `rho`. The text is exact only at `rho` = 1. |
| `change-of-variables` | `map` (`linear`, `shear`, `parabola`; default `linear`), `u` (0 to 4), `v` (0 to 2) | The map, a fixed highlighted cell and the Jacobian determinant at the sample point (-1/2 for `linear`, `u` for `shear`, 1/(2x) for `parabola`). The defaults of `u` and `v` come from the map: `linear` (2, 0), `shear` (2, 1/2), `parabola` (1, 0). The sliders use the range of the map: `linear` u and v in [0, 2], `shear` u in [0, 4] and v in [0, 1], `parabola` u and v in [0, 1] with u ≥ v. |
| `solid` | `preset` (`sphere-cone`, `plane-paraboloid`; default `sphere-cone`), `cut` (`x`, `y`, `z`; default `y`) | The fixed solid of the preset. `cut` picks the plane of the cross-section. |

Numbers in these kinds must be plain numbers such as `1.5`. Unlike the one-variable kinds, they do not read `pi/2`. `npm run content` reports an unknown kind, an unknown param, a value outside the allowed values, a value that is not a number, and a number outside its range.

## Sources

`content/sources.yaml` registers each unique source once (handout, lecture notes, board photos, exercise sheets, past papers, course documents) with a stable identifier, a title, a kind and a page-numbering rule:

- `pageNumbering: pdf`: a cited page is the 1-based page of the PDF file.
- `pageNumbering: printed`: a cited page is the page number printed in the book. `printedPages` lists ranges of printed pages with their offset, and the PDF page is the printed page minus the offset. The handout uses this, because sections removed after section 9.1 make the PDF fall behind the book. `sections` gives the PDF page where each section starts.
- `pageNumbering: none`: a single image, cited without a page.

An entry may carry a `url`. Its links then open that address instead of a local file. The handout uses this, pointing at the course site, so only people with course access can open it.

A source reference is `{ source: <id>, page: <page>, section: <section> }`, with `page` and `section` optional. Node front matter lists the node's sources, and every formal statement carries one. A page may be a range such as `"373-374"`, which links to its first page. When a reference has a page, the link opens that page; otherwise a handout section opens where the section starts.

Source files stay where they are and are never copied into the project. Each machine may map registry identifiers to local files in `sources.local.json` at the project root (git-ignored). The file is a JSON object from identifier to path, and relative paths start at the folder of the config file. `sources.local.example.json` shows the shape with the paths on the owner's machine. Without the config, references display as text.

## Identifiers

Node identifiers and the identifiers of exercises and sheet items use lowercase letters, digits, `-` and `.`. They share one space and must be unique across the whole bundle and must never change once published, because progress is keyed by them. Prefix item identifiers with the node identifier, for example `l5-hessian-test.ex-saddle`.

## Exercise

```yaml
::: exercise
id: l7-double-integrals.final-2025-q4a
number: "15.2.13"              # optional, matches the handout or a sheet ("sheet 2 exercise 7")
tier: exam                     # basic, standard or exam
topics: [double-integrals, polar-coordinates]
examBlock: double-integrals    # optional, one of the six final blocks
pastExam:                      # optional
  year: 2025
  paper: Final
  question: "4a"
  points: 2
statement: |
  ...
solution: |
  ...
provenance: official-key       # official-key, handout-answer or written-for-site
steps:                         # optional rubric steps
  - Domain stated.
  - Bounds set up.
verification:
  checks:
    - expr: integrate(x*y, (y, 0, x), (x, 0, 1))
      expected: 1/8
discrepancy: |                 # optional, when the official key disagrees with the verified value
  The official key gives -1/8. The verified value is 1/8.
:::
```

The provenance labels mean: `official-key` when a key exists, `handout-answer` when the handout gives only a final result and the working was added, `written-for-site` otherwise.

## Verification records

Every exercise must carry a `verification` field, in one of two forms.

- `checks`: a list of SymPy checks. `expr` is evaluated and compared with `expected`. Two expressions match when SymPy simplifies their difference to exactly zero, so an equivalent form passes (`sin(2*x)` matches `2*sin(x)*cos(x)`). If SymPy cannot prove an identity, rewrite the expected value in a closer form. Tuples are compared item by item, sets as sets. Free names become symbols, so avoid `E`, `I`, `N`, `S`, `Q` and `O` as variable names (SymPy reserves them).
- `checkable: false` with a `reason`, for sketches, proofs and prose. These exercises are listed by the content check for a second-pass review by a person.

## Coverage map

`content/coverage.yaml` lists every registered source exactly once. A source either has a `sources` group with `items`, or a `skipped` entry with a reason. Each item has an `id` and `label` unique within that source group. An item maps to one or more node ids in `nodes`, or carries `excluded` with a non-empty reason. Optional `page` and `section` fields are validated like other source references.

## Change log

`content/changes.yaml` is a list of entries with `date` (`YYYY-MM-DD`), `title`, markdown `text`, and `nodes` (node ids touched, possibly empty).

## Papers

`content/papers.yaml` is a YAML list of mock and checkpoint papers. An empty list is valid. Exercises stay in node files; each paper only references exercise ids.

Each paper has:

- `id`: stable identifier (same rules as node ids)
- `kind`: `mock` or `checkpoint`
- `standIn`: optional, set to `true` for a placeholder paper used while real content is prepared
- `presentation`: `current-format` (the six final blocks) or `as-printed` (keep the structure the paper was printed with)
- `title`, `year`, `durationMinutes`, `totalPoints`, `allowedMaterial`
- `source`: a label describing where the paper comes from (not necessarily a registry id)
- `blocks`: non-empty list of exam blocks, each with `id`, `title`, `points`, `minutes`, `exercises` (non-empty list of exercise ids) and `rubric` (non-empty list of `{ text, points, exercise }`)

## What the content check rejects

- Schema errors in front matter or blocks, unclosed blocks and text outside a block.
- Node front matter without a `prerequisites` field.
- Prerequisites that name no existing node, or a visible node that lists a hidden node.
- Hidden nodes referenced from the coverage map or the change log.
- A missing or invalid coverage map, unmapped items, duplicate item ids within a source, unknown sources, registered sources missing from the map or listed more than once, and invalid page or section on a coverage item.
- A missing or invalid change log, and unknown nodes in change log entries.
- A missing adding-content guide.
- A missing or invalid `papers.yaml`, duplicate paper ids, block points that do not sum to `totalPoints` (within 0.001), rubric points that do not sum to a block's points, exercise ids on a paper that name no exercise on any node (including hidden nodes), exercises referenced from a paper that have no provenance label, and rubric items whose `exercise` is not listed in that block's `exercises`.
- Source references to identifiers the registry does not have, printed pages that fall in none of a source's page ranges, sections the registry does not list for a source that lists sections, pages cited on a source without pages, and duplicate registry identifiers.
- Duplicate node identifiers, and duplicate exercise or sheet item identifiers.
- A node with `section` markers that has blocks before the first marker, a section that would be empty in Learn (only sheet items and standard or exam exercises), or two markers with the same title.
- Exercises without a provenance label.
- Exercises without a verification record or a not-machine-checkable mark.
- Verification checks that SymPy does not confirm or cannot parse.
- Style violations in site text, both in `content/` and in the app interface under `src/`: em dashes and the phrases in `content/style/banned-phrases.yaml`. See `docs/writing-style.md`.
