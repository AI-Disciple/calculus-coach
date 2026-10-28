# Analysis and Calculus course app

This is the shared vocabulary for the course.

## Language

**Lecture**:
One of the eight top-level divisions of the course, kept in order from 1 to 8.
_Avoid_: chapter, module

**Node**:
A named piece of the course that lives inside one lecture. It gathers the formal statements, plain explanations, visuals, examples, questions, exercises, sheet items and sources that belong to that piece. Shown in the app as Topic.
_Avoid_: page

**Block**:
One unit of content inside a node. Usual kinds include a formal statement, a plain explanation, a visual, a worked example, a guided example, a concept question and a going-deeper note, and a node may use any set of them in any order.
_Avoid_: section

**Worked example**:
A block that solves a problem in full for the student to read. Shown in the app as "Example".
_Avoid_: sample

**Guided example**:
A block that solves a problem step by step, with each step hidden until the student reveals it. Shown in the app as "Try it yourself".
_Avoid_: tutorial

**Section**:
One screen of a node, shown one at a time with Back and Next. The kinds are Learn, Practise and For the sheet. A node has one or more Learn sections, and the other kinds appear when the node has something to put in them.
_Avoid_: page, step

**Formal statement**:
A definition, theorem or method in the course's own wording, carrying the source it came from.
_Avoid_: formula

**Plain explanation**:
Simpler prose that sits with a formal statement and says the same idea in ordinary language. It can run longer than the formal wording when that wording is tight.
_Avoid_: summary, intuition

**Exercise**:
A problem with a tier, a solution and a provenance label. It may be split into steps.
_Avoid_: question

**Tier**:
How demanding an exercise is. The three values in the content are basic, standard and exam. The app shows them as Core, Extra and Exam level, and Practise lists each tier behind its own tab.
_Avoid_: difficulty

**Step**:
One part of a solution that is marked on its own.
_Avoid_: rubric item, subquestion

**Provenance label**:
The label that says where a solution came from. The three labels are official key, handout answer with worked solution, and written for this site.
_Avoid_: source

**Verification record**:
The expression and the expected value or form stored with a solution that has a checkable result, so a computer algebra system can confirm it. A solution that is a sketch, a proof or prose is marked as not machine-checkable instead and waits for a second-pass review by a person.
_Avoid_: test, key

**Discrepancy note**:
The remark, stated in the solution, that the checked result disagrees with an official key. The exercise stays in the course, and the checked value is the one presented.
_Avoid_: errata, correction

**Mistake type**:
The label recorded when a step is marked wrong, taken from a fixed list of seven: sign or arithmetic slip, wrong formula or rule, domain or condition missed, unjustified reasoning, setup or bounds wrong, misread question, and did not know how to start.
_Avoid_: error code

**Attempt**:
The record of one marking of an exercise: the time, the exercise, the tier, a result for each step or for the exercise as a whole, a mistake type on each wrong step, and an optional note.
_Avoid_: submission, grade

**Review queue**:
The single queue that brings missed exercises and missed concept questions back on a spaced schedule. A concept question answered wrong at its first pick joins the queue on the same schedule as a missed exercise, and answering it right in review moves it on.
_Avoid_: deck, flashcards

**Exercise bank**:
The page at `/exercises` that lists every exercise of the course, grouped by lecture and topic and ordered from Core to Exam level. It reads the exercises from the topic files, so it holds no content of its own: an exercise added to a topic appears in the bank at once.
_Avoid_: question pool, problem set

**Sheet item**:
A formula, a trap or a recognition rule flagged as worth copying onto the handwritten exam sheet.
_Avoid_: cheat

**Mock**:
A timed paper, either a real past final or one written for this course. Newly written mocks use the six exam blocks of the current final format, while older real papers keep the structure they were printed with.
_Avoid_: quiz, practice test

**Exam block**:
One scored part of a mock, with its own point value, minute budget and self-marking rubric. The current final format is made of six exam blocks.
_Avoid_: section

**Checkpoint**:
An optional timed past midterm that covers lectures 1 to 3.
_Avoid_: quiz

**Source**:
A registered piece of the student's course material that can be cited by page.
_Avoid_: file, link

**Coverage map**:
The mapping from source items to the nodes that cover them, including items marked excluded and the reason.
_Avoid_: index, outline

**Mastery**:
Where a node stands: Not started, In progress or Done. A node is Done when every section is marked done and the latest attempt on every Core exercise succeeded. Extra and Exam level exercises do not hold it back. A section is marked done only by pressing Next at its bottom, or the finish button on the last one. Once Done, a node stays Done.
_Avoid_: solid, score

**Draft**:
The status of a node whose content is still thin or unreviewed.
_Avoid_: stub

## Relationships

- A lecture has many nodes.
- A node is a sequence of blocks.
- A node page shows the node as sections. A section holds blocks, and a block belongs to one section.
- A formal statement and a plain explanation are blocks that sit together.
- An exercise has a tier, a provenance label and a solution, and it may have steps.
- An attempt records the marking of an exercise, and a wrong step on that attempt carries a mistake type.
- The review queue holds missed exercises and missed concept questions.
- A sheet item belongs to a node.
- A mock is divided into exam blocks, and a checkpoint covers lectures 1 to 3.
- The coverage map links source items to nodes.
- A draft is a status a node can have.
- A solution with a checkable result carries a verification record, and a discrepancy note states when that record disagrees with an official key.
