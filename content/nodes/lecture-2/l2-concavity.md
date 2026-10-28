---
id: l2-concavity
lecture: 2
order: 6
title: Concavity, inflection and the second derivative test
prerequisites: [l2-monotonicity-extrema]
sources:
  - { source: handout, section: "5.3", page: 112 }
  - { source: handout, section: "5.4", page: 113 }
  - { source: lecture-notes-2, page: 2 }
  - { source: midterm-app }
examWeight: high
examWeightNote: The sketch is worth 6 of the 20 midterm points.
status: reviewed
notation: |
  \(f''\) means the second derivative \(\frac{d}{dx}(f')\), and that is the same quantity as \(\frac{d^{2}f}{dx^{2}}\).
---

::: section
title: Concavity
:::

::: formal-statement
kind: definition
title: Concavity
source:
  source: handout
  section: "5.4"
  page: 113
text: |
  - If \(f''(a) > 0\), then \(f'\) is increasing near \(a\), and the curve is **concave up**.
  - If \(f''(a) < 0\), then \(f'\) is decreasing near \(a\), and the curve is **concave down**.
:::

::: plain-explanation
text: |
  \(f''\) is \(\frac{d}{dx}(f')\). When \(f''(a) > 0\), the slope \(f'\) is increasing near \(a\):

  - If \(f'(a) > 0\), the graph slopes up and gets steeper.
  - If \(f'(a) < 0\), the graph slopes down and gets less steep.

  That shape is concave up. When \(f''(a) < 0\), the slope is decreasing near \(a\):

  - An upward slope gets less steep.
  - A downward slope gets steeper.

  That shape is concave down.
:::

::: key-points
text: |
  - If \(f''(a) > 0\), then \(f'\) is increasing near \(a\), and the curve is concave up there. If \(f''(a) < 0\), then \(f'\) is decreasing near \(a\), and the curve is concave down there.
  - \(f''\) means \(\frac{d}{dx}(f')\), the same quantity as \(\frac{d^{2}f}{dx^{2}}\).
:::

::: exercise
id: l2-concavity.ex-5-4-1
number: "5.4.1"
tier: basic
topics: [concavity]
statement: |
  Describe the concavity of \(y = x^{2} - x\).
solution: |
  The second derivative is \(y'' = 2\). This value is positive at every real \(x\), so the graph is concave up on the whole real line.
provenance: handout-answer
steps:
  - The second derivative is \(y'' = 2\).
  - The graph is concave up on the whole real line.
verification:
  checks:
    - expr: diff(x**2 - x, x, 2)
      expected: 2
:::

::: section
title: Inflection points and the second derivative test
:::

::: formal-statement
kind: definition
title: Inflection points
source:
  source: handout
  section: "5.4"
  page: 113
text: |
  An **inflection point** is a point where the concavity changes from up to down or from down to up. That change is a sign change of \(f''\). The usual place to look is a point \(a\) where \(f''(a) = 0\).

  For \(f(x) = x^{4}\), the second derivative and its value at \(0\) are
  \[
  \begin{aligned}
  f''(x)&=12x^{2},\\
  f''(0)&=0.
  \end{aligned}
  \]
  This second derivative is positive for \(x < 0\) and for \(x > 0\), so the graph is concave up on both sides of \(0\). The point \(x = 0\) is a local minimum.
:::

::: plain-explanation
text: |
  To test a candidate:

  1. Find the roots of \(f''\).
  2. Compare its sign on the left of each root with its sign on the right.

  A root is an inflection point when those signs differ. For \(f(x) = x^{4}\), the signs agree: \(f''(x) = 12x^{2}\) is positive on both sides of \(0\), the concavity stays up, and the point is a local minimum.
:::

::: formal-statement
kind: method
title: The second derivative test
source:
  source: handout
  section: "5.3"
  page: 112
text: |
  Suppose \(f'(a) = 0\).

  - If \(f''(a) < 0\), then \(f\) has a **local maximum** at \(a\).
  - If \(f''(a) > 0\), then \(f\) has a **local minimum** at \(a\).
  - If \(f''(a) = 0\), the test gives no information.
:::

::: plain-explanation
text: |
  - A negative \(f''(a)\) means the slope is decreasing through zero, so the graph has a local maximum.
  - A positive \(f''(a)\) means the slope is increasing through zero, so the graph has a local minimum.
  - When \(f''(a) = 0\), the test gives no information.

  Read the sign of \(f'\) on each side of \(a\).
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(x^3 - x\). Switch on the sign of \(f''\) and the inflection point. Then type \(x^4\) to see \(f''(0) = 0\) without a sign change.
params:
  f: "x^3-x"
  xmin: -2
  xmax: 2
  layers: [curvature-sign, inflection]
:::

::: worked-example
title: Example 5.4.1
problem: |
  Describe the concavity of \(f(x) = x^{3} - x\), and find the inflection point.
solution: |
  The first derivative and the second derivative are
  \[
  \begin{aligned}
  f'(x)&=3x^{2}-1,\\
  f''(x)&=6x.
  \end{aligned}
  \]
  This second derivative vanishes at \(x = 0\).

  - For \(x < 0\), \(f''(x) < 0\), so the graph is concave down on \((-\infty, 0)\).
  - For \(x > 0\), \(f''(x) > 0\), so the graph is concave up on \((0, \infty)\).

  The sign of \(f''\) changes at \(x = 0\), so the inflection point is \(x = 0\).
:::

::: worked-example
title: The second derivative test
problem: |
  Use the second derivative test on \(f(x) = x^{2} - x\). Then consider \(f(x) = x^{4}\) and \(f(x) = -x^{4}\) at \(x = 0\).
solution: |
  For \(f(x) = x^{2} - x\), the first derivative vanishes at \(x = \frac{1}{2}\). The first derivative and the second derivative are
  \[
  \begin{aligned}
  f'(x)&=2x-1,\\
  f''(x)&=2.
  \end{aligned}
  \]
  At that critical point, \(f''\left(\frac{1}{2}\right) = 2 > 0\), so the second derivative test says \(x = \frac{1}{2}\) is a local minimum.

  For \(f(x) = x^{4}\), the derivatives and their values at \(0\) are
  \[
  \begin{aligned}
  f'(x)&=4x^{3}, & f'(0)&=0,\\
  f''(x)&=12x^{2}, & f''(0)&=0.
  \end{aligned}
  \]
  The second derivative test gives no information. The first derivative \(4x^{3}\) is negative for \(x < 0\) and positive for \(x > 0\), so the first derivative test gives a local minimum at \(x = 0\).

  For \(f(x) = -x^{4}\), the derivatives and their values at \(0\) are
  \[
  \begin{aligned}
  f'(x)&=-4x^{3}, & f'(0)&=0,\\
  f''(x)&=-12x^{2}, & f''(0)&=0.
  \end{aligned}
  \]
  Again the second derivative test gives no information. The first derivative \(-4x^{3}\) is positive for \(x < 0\) and negative for \(x > 0\), so the first derivative test gives a local maximum at \(x = 0\).
:::

::: guided-example
title: Sign chart of the second derivative
problem: |
  Find the inflection point of \(f(x) = x^{3} - 3x^{2} - 9x + 5\), and determine the sign of \(f''\). Try each step on paper before you show it.
steps:
  - |
    The second derivative is \(f''(x) = 6x - 6 = 6(x - 1)\).
  - |
    The sign chart of \(f''\) is negative on \((-\infty, 1)\) and positive on \((1, \infty)\).
  - |
    The sign changes at \(x = 1\), so the graph is concave down on \((-\infty, 1)\) and concave up on \((1, \infty)\).
  - |
    The inflection point is \(x = 1\).
:::

::: trap
text: |
  The rule that a critical point with \(f'' = 0\) is an inflection point fails for \(f(x) = x^{4}\) at \(x = 0\). The derivatives and their values at \(0\) are
  \[
  \begin{aligned}
  f'(x)&=4x^{3}, & f'(0)&=0,\\
  f''(x)&=12x^{2}, & f''(0)&=0.
  \end{aligned}
  \]
  Because \(f''(x) = 12x^{2}\), the value at \(x = -1\) and at \(x = 1\) is \(12\), and \(f''\) is positive on both sides. The concavity does not change. The first derivative is negative for \(x < 0\) and positive for \(x > 0\), and the first derivative test gives a local minimum.

  The same rule fails as a description of every inflection point. For \(f(x) = x^{3} + x\), the first derivative and the second derivative are
  \[
  \begin{aligned}
  f'(x)&=3x^{2}+1,\\
  f''(x)&=6x.
  \end{aligned}
  \]
  The value \(f'(0) = 1\), which is not \(0\), so \(x = 0\) is not a critical point. The values \(f''(-1) = -6\) and \(f''(1) = 6\) show a sign change, so \(x = 0\) is an inflection point.
:::

::: key-points
text: |
  - An inflection point is a point where the concavity changes, which is a sign change of \(f''\). The usual place to look is a point \(a\) where \(f''(a) = 0\).
  - The usual slip calls every point with \(f''(a) = 0\) an inflection point. For \(f(x) = x^{4}\), \(f''(0) = 0\), but \(f''\) is positive on both sides, so the concavity does not change and \(x = 0\) is a local minimum.
  - Suppose \(f'(a) = 0\). If \(f''(a) < 0\), then \(f\) has a local maximum at \(a\). If \(f''(a) > 0\), then \(f\) has a local minimum at \(a\). If \(f''(a) = 0\), the test gives no information.
:::

::: going-deeper
title: How many inflection points a polynomial can have
text: |
  A polynomial of degree \(n \geq 2\) has at most \(n - 2\) inflection points.
:::

::: concept-question
id: l2-concavity.q-68247e50
question: |
  Where is the inflection point of \(f(x) = x^{3} - 3x^{2} - 9x + 5\)?
options:
  - text: |
      \(x = 1\)
    correct: true
  - text: |
      \(x = 0\)
  - text: |
      \(x = -1\) and \(x = 3\)
  - text: |
      \(x = 3\)
explanation: |
  \(f'' = 6x - 6\) vanishes at \(x = 1\) and changes sign there, so the concavity flips at \(x = 1\).
:::

::: concept-question
id: l2-concavity.q-ed2479a5
question: |
  Where are the inflection points of \(f(x) = x^{4} - 4x^{2} + 1\)?
options:
  - text: |
      \(x = \pm\sqrt{\frac{2}{3}}\)
    correct: true
  - text: |
      \(x = 0\)
  - text: |
      \(x = \pm\sqrt{2}\)
  - text: |
      No inflection points.
explanation: |
  \(f'' = 12x^{2} - 8\) vanishes when \(x^{2} = \frac{2}{3}\), so \(x = \pm\sqrt{\frac{2}{3}}\), and \(f''\) changes sign at both points.
:::

::: concept-question
id: l2-concavity.q-4dde3fc0
question: |
  Which of these functions has \(f'(0) = f''(0) = 0\) and an inflection point at \(x = 0\)?
options:
  - text: |
      \(f(x) = x^{3}\)
    correct: true
  - text: |
      \(f(x) = x^{4}\)
  - text: |
      \(f(x) = -x^{4}\)
  - text: |
      \(f(x) = x^{6}\)
explanation: |
  - For \(x^{3}\), \(f''(x) = 6x\) is negative for \(x < 0\) and positive for \(x > 0\), so the concavity changes at \(0\).
  - For \(x^{4}\), \(f''(x) = 12x^{2}\) is positive on both sides of \(0\).
  - For \(-x^{4}\), \(f''(x) = -12x^{2}\) is negative on both sides.
  - For \(x^{6}\), \(f''(x) = 30x^{4}\) is positive on both sides.

  In those three cases \(f''(0) = 0\) without a sign change, so \(0\) is not an inflection point.
:::

::: sheet-item
id: l2-concavity.sheet-inflection
category: trap
text: |
  \(f''(x) = 0\) does not on its own make \(x\) an inflection point. The concavity has to change sign there.
:::

::: sheet-item
id: l2-concavity.sheet-second-derivative-test
category: formula
text: |
  At a point where \(f' = 0\), \(f'' < 0\) means a local maximum and \(f'' > 0\) means a local minimum. If \(f'' = 0\), the second derivative test gives no information.
:::

::: exercise
id: l2-concavity.ex-5-4-3
number: "5.4.3"
tier: standard
topics: [concavity, inflection]
statement: |
  Describe the concavity of \(y = x^{3} - 9x^{2} + 24x\), and find the inflection point.
solution: |
  The second derivative is
  \[
  y'' = 6x - 18 = 6(x - 3).
  \]

  - For \(x < 3\), \(y'' < 0\), so the graph is concave down.
  - For \(x > 3\), \(y'' > 0\), so the graph is concave up.

  The sign changes at \(x = 3\), so the inflection point is \(x = 3\).
provenance: handout-answer
steps:
  - The second derivative is \(y'' = 6x - 18\).
  - The graph is concave down for \(x < 3\) and concave up for \(x > 3\).
  - The inflection point is \(x = 3\).
verification:
  checks:
    - expr: diff(x**3 - 9*x**2 + 24*x, x, 2)
      expected: 6*x - 18
    - expr: diff(x**3 - 9*x**2 + 24*x, x, 2).subs(x, 3)
      expected: 0
    - expr: diff(x**3 - 9*x**2 + 24*x, x, 2).subs(x, 0)
      expected: -18
    - expr: diff(x**3 - 9*x**2 + 24*x, x, 2).subs(x, 4)
      expected: 6
    - expr: 6*(x - 3)
      expected: 6*x - 18
:::

::: exercise
id: l2-concavity.ex-cubic-inflection
tier: exam
topics: [concavity, inflection]
statement: |
  For \(f(x) = x^{3} - 3x^{2} - 9x + 5\), find the inflection point and the sign of \(f''\). The critical points are \(x = -1\) and \(x = 3\).
solution: |
  The second derivative is
  \[
  f''(x) = 6x - 6 = 6(x - 1).
  \]
  It is negative on \((-\infty, 1)\) and positive on \((1, \infty)\), so the graph is concave down on \((-\infty, 1)\) and concave up on \((1, \infty)\). The sign changes at \(x = 1\), and the inflection point is \(x = 1\).

  The first derivative is
  \[
  \begin{aligned}
  f'(x) &= 3x^{2} - 6x - 9,\\
  &= 3(x + 1)(x - 3),
  \end{aligned}
  \]
  so the critical points are \(x = -1\) and \(x = 3\).

  - At \(x = -1\), \(f''(-1) = -12 < 0\), and the second derivative test gives a local maximum.
  - At \(x = 3\), \(f''(3) = 12 > 0\), and the test gives a local minimum.

  These critical points are extrema. The inflection point is \(x = 1\).
provenance: written-for-site
steps:
  - Compute \(f''(x) = 6x - 6\).
  - The sign of \(f''\) is negative on \((-\infty, 1)\) and positive on \((1, \infty)\).
  - Name the inflection point \(x = 1\).
  - Classify \(x = -1\) as a local maximum and \(x = 3\) as a local minimum, and state that the inflection point is \(x = 1\).
verification:
  checks:
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x, 2)
      expected: 6*x - 6
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x, 2).subs(x, 1)
      expected: 0
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x, 2).subs(x, 0)
      expected: -6
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x, 2).subs(x, 2)
      expected: 6
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x).subs(x, -1)
      expected: 0
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x).subs(x, 3)
      expected: 0
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x, 2).subs(x, -1)
      expected: -12
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x, 2).subs(x, 3)
      expected: 12
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x)
      expected: 3*x**2 - 6*x - 9
    - expr: 3*(x + 1)*(x - 3)
      expected: 3*x**2 - 6*x - 9
    - expr: 6*(x - 1)
      expected: 6*x - 6
:::

::: exercise
id: l2-concavity.ex-concavity-quartic-degenerate
tier: exam
topics: [concavity, inflection]
statement: |
  Let \(f(x) = x^{4} - 4x^{3}\).

  (a) Find the critical points. Apply the second derivative test at each of them, and say where it gives no information.

  (b) At the critical point where the test fails, decide with the first derivative whether \(f\) has a local extremum.

  (c) Find the intervals of concavity and all inflection points.
solution: |
  (a) The first derivative is
  \[
  f'(x) = 4x^{3} - 12x^{2} = 4x^{2}(x - 3),
  \]
  so the critical points are \(x = 0\) and \(x = 3\). The second derivative is
  \[
  f''(x) = 12x^{2} - 24x = 12x(x - 2).
  \]

  - At \(x = 3\), \(f''(3) = 36 > 0\), so \(f\) has a local minimum there, with value \(f(3) = 81 - 108 = -27\).
  - At \(x = 0\), \(f''(0) = 0\), so the second derivative test gives no information.

  (b) The factor \(4x^{2}\) is positive for \(x \neq 0\), so \(f'\) has the sign of \(x - 3\) near \(0\). The derivative is negative on both sides of \(0\), for example \(f'(-1) = -16\) and \(f'(1) = -8\). It does not change sign at \(0\), so \(f\) has no local extremum at \(x = 0\). The function is decreasing through the origin with a horizontal tangent there.

  (c) The second derivative \(12x(x - 2)\) is

  - positive for \(x < 0\),
  - negative on \((0, 2)\),
  - positive for \(x > 2\).

  The graph is concave up on \((-\infty, 0)\), concave down on \((0, 2)\) and concave up on \((2, \infty)\). The sign of \(f''\) changes at \(x = 0\) and at \(x = 2\), so both are inflection points. They are \((0, 0)\) and \((2, -16)\). The point \((0, 0)\) is a critical point that is an inflection point and not an extremum.
provenance: written-for-site
steps:
  - The critical points are \(x = 0\) and \(x = 3\), and the second derivative test gives a local minimum at \(x = 3\) with value \(-27\).
  - The test gives no information at \(x = 0\), because \(f''(0) = 0\).
  - The derivative is negative on both sides of \(0\), so there is no extremum at \(x = 0\).
  - The graph is concave up, down, up on \((-\infty, 0)\), \((0, 2)\), \((2, \infty)\), with inflection points \((0, 0)\) and \((2, -16)\).
verification:
  checks:
    - expr: factor(diff(x**4 - 4*x**3, x))
      expected: 4*x**2*(x - 3)
    - expr: factor(diff(x**4 - 4*x**3, x, 2))
      expected: 12*x*(x - 2)
    - expr: diff(x**4 - 4*x**3, x, 2).subs(x, 3)
      expected: "36"
    - expr: (x**4 - 4*x**3).subs(x, 3)
      expected: "-27"
    - expr: diff(x**4 - 4*x**3, x, 2).subs(x, 0)
      expected: "0"
    - expr: diff(x**4 - 4*x**3, x).subs(x, -1)
      expected: "-16"
    - expr: diff(x**4 - 4*x**3, x).subs(x, 1)
      expected: "-8"
    - expr: diff(x**4 - 4*x**3, x, 2).subs(x, -1)
      expected: "36"
    - expr: diff(x**4 - 4*x**3, x, 2).subs(x, 1)
      expected: "-12"
    - expr: (x**4 - 4*x**3).subs(x, 2)
      expected: "-16"
:::
