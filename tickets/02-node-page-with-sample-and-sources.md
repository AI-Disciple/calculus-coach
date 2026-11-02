# 02: Node page with the sample as stand-in, and source links

**What to build:** Opening a node shows its content end to end: formal statements next to plain explanations, traps, worked examples, guided examples revealed step by step, concept questions with an explanation after answering, going-deeper blocks collapsed by default, and exercises whose solution can be revealed with its provenance label. Prerequisites show as recommended links. The node lists its sources, and each source link opens the student's PDF at the right page when the machine has a source-link config. The sample node is used as stand-in content to prove the page can display everything real content will need.

**Blocked by:** 01

**Status:** ready-for-agent

**Suggested model:** Claude Sonnet 5.5 xhigh (UI work with a demanding look). Use the `minimalist-ui` skill.

**Read first:** `spec.md` (node and content model, sources and traceability stories 80 and 81, glossary), `sample-node.md` (feel only, not a template), `content/sources.yaml` for the handout page offsets.

## Acceptance criteria

- [ ] The sample node is loaded through the content bundle as a stand-in node, extended with enough stand-in blocks to show every block type: a worked example, a guided example with several steps, two concept questions, a going-deeper block, and one exercise per tier with a multi-step solution. Mark it clearly as stand-in content (draft) so content tickets replace it later.
- [ ] Every block type from ticket 01 renders. Formal statement and plain explanation sit side by side on wide screens and in sequence on narrow ones. Each formal statement shows its source.
- [ ] Guided examples reveal one step at a time. Concept questions show the explanation after an answer is chosen. Nothing is graded.
- [ ] Exercises show tier, exercise number where present, past-exam source where present, and a reveal-solution control. The solution shows its provenance label (official key, handout answer with worked solution, written for this site) and any discrepancy note.
- [ ] The node shows its exam-weight tag and its status. Draft nodes are visibly marked.
- [ ] Notation note: a node can declare the notation equivalence once (for example df/dx, f_x and the curly-d form) and it renders near the top.
- [ ] Every node is openable at any time. Prerequisites render as recommended links and never lock anything.
- [ ] Source registry: a content file registers each unique source (handout, lecture notes, board photos, sheets, past papers) with a stable identifier and its page-numbering rule, including the handout offsets after section 9.1. Node and block source references point at registry entries plus a page or section.
- [ ] Optional per-machine source-link config maps registry entries to local file paths. With it, links open the PDF at the right page. Without it, references still display as text and nothing breaks. The config is git-ignored, and an example file documents its shape. Source PDFs are never copied into the project.
- [ ] The content check fails on source references to unknown registry entries.
- [ ] A browser smoke-test harness exists (real browser against the running app) and is part of `check`. First test: open the sample node and reveal a solution.
