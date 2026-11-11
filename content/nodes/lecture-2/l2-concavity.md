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

::: exercise
id: l2-concavity.handout-5-3-9
number: "5.3.9"
tier: standard
topics:
  - concavity
  - extrema
statement: |
  Find all local maximum and minimum points of \(y = 4x + \sqrt{1 - x}\) by the second derivative test, when possible.
solution: |
  The function is defined for \(x \le 1\). On \(x < 1\) the first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=4 - \frac{1}{2\sqrt{1 - x}},\\
  y''&=-\frac{1}{4(1 - x)^{3/2}}.
  \end{aligned}
  \]
  The first derivative is zero when \(\sqrt{1 - x} = \dfrac{1}{8}\). Both sides are positive, so squaring gives \(1 - x = \dfrac{1}{64}\), and the only critical point in \(x < 1\) is
  \[
  x = \frac{63}{64}.
  \]
  There \((1 - x)^{3/2} = \bigl(\tfrac{1}{64}\bigr)^{3/2} = \tfrac{1}{512}\), so
  \[
  y''\bigl(\tfrac{63}{64}\bigr) = -\frac{512}{4} = -128 < 0.
  \]
  The second derivative test gives a local maximum at \(x = \dfrac{63}{64}\), with value
  \[
  y\bigl(\tfrac{63}{64}\bigr) = \frac{63}{16} + \frac{1}{8} = \frac{65}{16}.
  \]
  The point \(x = 1\) is the end of the domain, not an interior point, so the test does not apply there. Its value is \(y(1) = 4\), below \(\dfrac{65}{16}\).
provenance: handout-answer
steps:
  - The domain is \(x \le 1\), and \(y' = 4 - 1/(2\sqrt{1 - x})\) vanishes at \(x = 63/64\).
  - The second derivative is \(-1/(4(1 - x)^{3/2})\), which equals \(-128\) at \(x = 63/64\).
  - The second derivative test gives a local maximum at \(x = 63/64\) with value \(65/16\).
verification:
  checks:
    - expr: 'diff(4*x + sqrt(1 - x), x)'
      expected: '4 - 1/(2*sqrt(1 - x))'
    - expr: 'diff(4*x + sqrt(1 - x), x).subs(x, Rational(63, 64))'
      expected: '0'
    - expr: 'diff(4*x + sqrt(1 - x), x, 2)'
      expected: '-1/(4*(1 - x)**Rational(3, 2))'
    - expr: 'diff(4*x + sqrt(1 - x), x, 2).subs(x, Rational(63, 64))'
      expected: '-128'
    - expr: '(4*x + sqrt(1 - x)).subs(x, Rational(63, 64))'
      expected: 'Rational(65, 16)'
    - expr: '(4*x + sqrt(1 - x)).subs(x, 1)'
      expected: '4'
:::


::: exercise
id: l2-concavity.handout-5-3-10
number: "5.3.10"
tier: standard
topics:
  - concavity
  - extrema
statement: |
  Find all local maximum and minimum points of \(y = \dfrac{x + 1}{\sqrt{5x^{2} + 35}}\) by the second derivative test, when possible.
solution: |
  The quantity \(5x^{2} + 35\) is positive for every \(x\), so the function is defined on the whole real line. The product rule, with the factor \((5x^{2} + 35)^{-1/2}\), gives
  \[
  \begin{aligned}
  y'&=(5x^{2} + 35)^{-1/2} - (x + 1)\cdot 5x\,(5x^{2} + 35)^{-3/2}\\
  &=\frac{5x^{2} + 35 - 5x^{2} - 5x}{(5x^{2} + 35)^{3/2}}\\
  &=\frac{35 - 5x}{(5x^{2} + 35)^{3/2}}.
  \end{aligned}
  \]
  The denominator is positive, so the only critical point is \(x = 7\).

  Differentiate \(y' = (35 - 5x)(5x^{2} + 35)^{-3/2}\) with the product rule:
  \[
  y'' = -5(5x^{2} + 35)^{-3/2} - 15x(35 - 5x)(5x^{2} + 35)^{-5/2}.
  \]
  At \(x = 7\) the factor \(35 - 5x\) is zero, so the second term vanishes. Since \(5\cdot 49 + 35 = 280\),
  \[
  y''(7) = -\frac{5}{280^{3/2}} = -\frac{1}{112\sqrt{70}} < 0.
  \]
  The second derivative test gives a local maximum at \(x = 7\), with value
  \[
  y(7) = \frac{8}{\sqrt{280}} = \frac{4}{\sqrt{70}} = \frac{2\sqrt{70}}{35}.
  \]
provenance: handout-answer
steps:
  - The first derivative simplifies to \((35 - 5x)/(5x^{2} + 35)^{3/2}\), so the only critical point is \(x = 7\).
  - At \(x = 7\) only the term from differentiating \(35 - 5x\) survives, and \(y''(7) = -1/(112\sqrt{70}) < 0\).
  - The second derivative test gives a local maximum at \(x = 7\) with value \(2\sqrt{70}/35\).
verification:
  checks:
    - expr: 'diff((x + 1)/sqrt(5*x**2 + 35), x)'
      expected: '(35 - 5*x)/(5*x**2 + 35)**Rational(3, 2)'
    - expr: 'diff((x + 1)/sqrt(5*x**2 + 35), x).subs(x, 7)'
      expected: '0'
    - expr: 'diff((x + 1)/sqrt(5*x**2 + 35), x, 2)'
      expected: '-5/(5*x**2 + 35)**Rational(3, 2) - 15*x*(35 - 5*x)/(5*x**2 + 35)**Rational(5, 2)'
    - expr: 'diff((x + 1)/sqrt(5*x**2 + 35), x, 2).subs(x, 7)'
      expected: '-1/(112*sqrt(70))'
    - expr: '((x + 1)/sqrt(5*x**2 + 35)).subs(x, 7)'
      expected: '2*sqrt(70)/35'
:::


::: exercise
id: l2-concavity.handout-5-3-11
number: "5.3.11"
tier: standard
topics:
  - concavity
  - extrema
statement: |
  Find all local maximum and minimum points of \(y = x^{5} - x\) by the second derivative test, when possible.
solution: |
  The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=5x^{4} - 1,\\
  y''&=20x^{3}.
  \end{aligned}
  \]
  The first derivative is zero when \(x^{4} = \dfrac{1}{5}\), so the critical points are \(x = \pm 5^{-1/4}\).

  - At \(x = 5^{-1/4}\), \(y'' = 20\cdot 5^{-3/4} > 0\), so there is a local minimum. The value is \(y = 5^{-5/4} - 5^{-1/4} = -\dfrac{4}{5}\cdot 5^{-1/4}\).
  - At \(x = -5^{-1/4}\), \(y'' = -20\cdot 5^{-3/4} < 0\), so there is a local maximum. The value is \(y = \dfrac{4}{5}\cdot 5^{-1/4}\).
provenance: handout-answer
steps:
  - The first derivative \(5x^{4} - 1\) vanishes at \(x = \pm 5^{-1/4}\).
  - The second derivative \(20x^{3}\) is positive at \(5^{-1/4}\) and negative at \(-5^{-1/4}\).
  - Local minimum at \(x = 5^{-1/4}\) and local maximum at \(x = -5^{-1/4}\).
verification:
  checks:
    - expr: 'diff(x**5 - x, x)'
      expected: '5*x**4 - 1'
    - expr: 'diff(x**5 - x, x).subs(x, 5**(-Rational(1, 4)))'
      expected: '0'
    - expr: 'diff(x**5 - x, x).subs(x, -5**(-Rational(1, 4)))'
      expected: '0'
    - expr: 'diff(x**5 - x, x, 2).subs(x, 5**(-Rational(1, 4)))'
      expected: '20*5**(-Rational(3, 4))'
    - expr: 'sign(diff(x**5 - x, x, 2).subs(x, -5**(-Rational(1, 4))))'
      expected: '-1'
    - expr: '(x**5 - x).subs(x, 5**(-Rational(1, 4)))'
      expected: '-Rational(4, 5)*5**(-Rational(1, 4))'
    - expr: '(x**5 - x).subs(x, -5**(-Rational(1, 4)))'
      expected: 'Rational(4, 5)*5**(-Rational(1, 4))'
:::


::: exercise
id: l2-concavity.handout-5-3-12
number: "5.3.12"
tier: standard
topics:
  - concavity
  - extrema
statement: |
  Find all local maximum and minimum points of \(y = 6x + \sin 3x\) by the second derivative test, when possible.
solution: |
  The first derivative is
  \[
  y' = 6 + 3\cos 3x.
  \]
  Since \(\cos 3x \ge -1\), we get \(y' \ge 6 - 3 = 3 > 0\) for every \(x\). The first derivative is never zero, and it exists everywhere, so the function has no critical point.

  The second derivative test applies only at a point where \(y' = 0\), so there is nothing to test. The function is increasing on the whole real line and has no local maximum and no local minimum.
provenance: handout-answer
steps:
  - The first derivative \(6 + 3\cos 3x\) is at least \(3\), so it is never zero.
  - There is no critical point, so the test has nothing to classify.
  - The function has no local extremum.
verification:
  checks:
    - expr: 'diff(6*x + sin(3*x), x)'
      expected: '6 + 3*cos(3*x)'
    - expr: 'minimum(6 + 3*cos(3*x), x, Interval(0, 2*pi/3))'
      expected: '3'
    - expr: 'len(solveset(Eq(6 + 3*cos(3*x), 0), x, Reals))'
      expected: '0'
:::


::: exercise
id: l2-concavity.handout-5-3-13
number: "5.3.13"
tier: basic
topics:
  - concavity
  - extrema
statement: |
  Find all local maximum and minimum points of \(y = x + \dfrac{1}{x}\) by the second derivative test, when possible.
solution: |
  The function is defined for \(x \ne 0\). The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=1 - \frac{1}{x^{2}},\\
  y''&=\frac{2}{x^{3}}.
  \end{aligned}
  \]
  The first derivative is zero when \(x^{2} = 1\), so the critical points are \(x = \pm 1\).

  - At \(x = 1\), \(y'' = 2 > 0\), so there is a local minimum with value \(y(1) = 2\).
  - At \(x = -1\), \(y'' = -2 < 0\), so there is a local maximum with value \(y(-1) = -2\).
provenance: handout-answer
steps:
  - The first derivative \(1 - 1/x^{2}\) vanishes at \(x = \pm 1\).
  - The second derivative \(2/x^{3}\) is \(2\) at \(1\) and \(-2\) at \(-1\).
  - Local minimum at \(x = 1\) and local maximum at \(x = -1\).
verification:
  checks:
    - expr: 'diff(x + 1/x, x)'
      expected: '1 - 1/x**2'
    - expr: 'diff(x + 1/x, x).subs(x, 1)'
      expected: '0'
    - expr: 'diff(x + 1/x, x).subs(x, -1)'
      expected: '0'
    - expr: 'diff(x + 1/x, x, 2)'
      expected: '2/x**3'
    - expr: 'diff(x + 1/x, x, 2).subs(x, 1)'
      expected: '2'
    - expr: 'diff(x + 1/x, x, 2).subs(x, -1)'
      expected: '-2'
    - expr: '(x + 1/x).subs(x, 1)'
      expected: '2'
    - expr: '(x + 1/x).subs(x, -1)'
      expected: '-2'
:::


::: exercise
id: l2-concavity.handout-5-3-14
number: "5.3.14"
tier: standard
topics:
  - concavity
  - extrema
statement: |
  Find all local maximum and minimum points of \(y = x^{2} + \dfrac{1}{x}\) by the second derivative test, when possible.
solution: |
  The function is defined for \(x \ne 0\). The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=2x - \frac{1}{x^{2}} = \frac{2x^{3} - 1}{x^{2}},\\
  y''&=2 + \frac{2}{x^{3}}.
  \end{aligned}
  \]
  The first derivative is zero when \(2x^{3} = 1\), so the only critical point is
  \[
  x = 2^{-1/3}.
  \]
  There \(x^{3} = \dfrac{1}{2}\), so
  \[
  y'' = 2 + \frac{2}{1/2} = 6 > 0.
  \]
  The second derivative test gives a local minimum at \(x = 2^{-1/3}\). The value is
  \[
  y = 2^{-2/3} + 2^{1/3} = 3\cdot 2^{-2/3}.
  \]
provenance: handout-answer
steps:
  - The first derivative \((2x^{3} - 1)/x^{2}\) vanishes only at \(x = 2^{-1/3}\).
  - At that point \(x^{3} = 1/2\), so \(y'' = 2 + 2/x^{3} = 6 > 0\).
  - The second derivative test gives a local minimum at \(x = 2^{-1/3}\) with value \(3\cdot 2^{-2/3}\).
verification:
  checks:
    - expr: 'diff(x**2 + 1/x, x)'
      expected: '2*x - 1/x**2'
    - expr: 'diff(x**2 + 1/x, x).subs(x, 2**(-Rational(1, 3)))'
      expected: '0'
    - expr: 'diff(x**2 + 1/x, x, 2)'
      expected: '2 + 2/x**3'
    - expr: 'diff(x**2 + 1/x, x, 2).subs(x, 2**(-Rational(1, 3)))'
      expected: '6'
    - expr: '(x**2 + 1/x).subs(x, 2**(-Rational(1, 3)))'
      expected: '3*2**(-Rational(2, 3))'
    - expr: 'len(solveset(Eq(2*x**3 - 1, 0), x, Reals))'
      expected: '1'
:::


::: exercise
id: l2-concavity.handout-5-3-17
number: "5.3.17"
tier: basic
topics:
  - concavity
  - extrema
statement: |
  Find all local maximum and minimum points of \(y = \cos^{2}x - \sin^{2}x\) by the second derivative test, when possible.
solution: |
  By the double angle formula, \(y = \cos 2x\). The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=-2\sin 2x,\\
  y''&=-4\cos 2x.
  \end{aligned}
  \]
  The first derivative is zero when \(\sin 2x = 0\), that is, when \(2x = n\pi\). The critical points are \(x = \dfrac{n\pi}{2}\) for integer \(n\).

  - At \(x = n\pi\), \(\cos 2x = 1\), so \(y'' = -4 < 0\). There is a local maximum with value \(y = 1\).
  - At \(x = \dfrac{\pi}{2} + n\pi\), \(\cos 2x = -1\), so \(y'' = 4 > 0\). There is a local minimum with value \(y = -1\).
provenance: handout-answer
steps:
  - Rewrite \(y = \cos 2x\), so \(y' = -2\sin 2x\) and \(y'' = -4\cos 2x\).
  - The critical points are \(x = n\pi/2\).
  - Local maxima at \(x = n\pi\) where \(y'' = -4\), and local minima at \(x = \pi/2 + n\pi\) where \(y'' = 4\).
verification:
  checks:
    - expr: 'cos(x)**2 - sin(x)**2 - cos(2*x)'
      expected: '0'
    - expr: 'diff(cos(2*x), x)'
      expected: '-2*sin(2*x)'
    - expr: 'diff(cos(2*x), x, 2)'
      expected: '-4*cos(2*x)'
    - expr: 'diff(cos(2*x), x, 2).subs(x, 0)'
      expected: '-4'
    - expr: 'diff(cos(2*x), x, 2).subs(x, pi)'
      expected: '-4'
    - expr: 'diff(cos(2*x), x, 2).subs(x, pi/2)'
      expected: '4'
    - expr: 'diff(cos(2*x), x, 2).subs(x, 3*pi/2)'
      expected: '4'
    - expr: 'diff(cos(2*x), x).subs(x, pi/2)'
      expected: '0'
:::


::: exercise
id: l2-concavity.handout-5-3-18
number: "5.3.18"
tier: standard
topics:
  - concavity
  - extrema
statement: |
  Find all local maximum and minimum points of \(y = \sin^{3}x\) by the second derivative test, when possible.
solution: |
  The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=3\sin^{2}x\cos x,\\
  y''&=6\sin x\cos^{2}x - 3\sin^{3}x.
  \end{aligned}
  \]
  The first derivative is zero when \(\sin x = 0\) or \(\cos x = 0\). The critical points are \(x = n\pi\) and \(x = \dfrac{\pi}{2} + n\pi\).

  **At \(x = \dfrac{\pi}{2} + n\pi\).** Here \(\cos x = 0\), so \(y'' = -3\sin^{3}x\).

  - For \(x = \dfrac{\pi}{2} + 2n\pi\), \(\sin x = 1\) and \(y'' = -3 < 0\). There is a local maximum with value \(1\).
  - For \(x = \dfrac{3\pi}{2} + 2n\pi\), \(\sin x = -1\) and \(y'' = 3 > 0\). There is a local minimum with value \(-1\).

  **At \(x = n\pi\).** Here \(\sin x = 0\), so \(y'' = 0\), and the second derivative test gives no information. Use the first derivative. The factor \(3\sin^{2}x\) is positive for \(x\) near \(n\pi\) with \(x \ne n\pi\), and \(\cos x\) is close to \(\cos n\pi = \pm 1\), so it keeps the same sign on both sides. So \(y'\) does not change sign, and \(x = n\pi\) is neither a local maximum nor a local minimum.
provenance: handout-answer
steps:
  - The critical points are \(x = n\pi\) and \(x = \pi/2 + n\pi\).
  - At \(x = \pi/2 + 2n\pi\) the second derivative is \(-3\), a local maximum, and at \(x = 3\pi/2 + 2n\pi\) it is \(3\), a local minimum.
  - At \(x = n\pi\) the second derivative is \(0\), and the first derivative keeps its sign, so there is no extremum.
verification:
  checks:
    - expr: 'diff(sin(x)**3, x)'
      expected: '3*sin(x)**2*cos(x)'
    - expr: 'diff(sin(x)**3, x, 2)'
      expected: '6*sin(x)*cos(x)**2 - 3*sin(x)**3'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, pi/2)'
      expected: '-3'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, 3*pi/2)'
      expected: '3'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, 0)'
      expected: '0'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, pi)'
      expected: '0'
    - expr: 'sign(diff(sin(x)**3, x).subs(x, -pi/4))'
      expected: '1'
    - expr: 'sign(diff(sin(x)**3, x).subs(x, pi/4))'
      expected: '1'
    - expr: 'sign(diff(sin(x)**3, x).subs(x, 3*pi/4))'
      expected: '-1'
    - expr: 'sign(diff(sin(x)**3, x).subs(x, 5*pi/4))'
      expected: '-1'
:::


::: exercise
id: l2-concavity.handout-5-4-2
number: "5.4.2"
tier: basic
topics:
  - concavity
statement: |
  Describe the concavity of \(y = 2 + 3x - x^{3}\).
solution: |
  The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=3 - 3x^{2},\\
  y''&=-6x.
  \end{aligned}
  \]
  The second derivative is zero at \(x = 0\).

  - For \(x < 0\), \(y'' > 0\), so the graph is concave up.
  - For \(x > 0\), \(y'' < 0\), so the graph is concave down.

  The sign of \(y''\) changes at \(x = 0\), so the inflection point is \(x = 0\), at height \(y(0) = 2\).
provenance: handout-answer
steps:
  - The second derivative is \(y'' = -6x\).
  - The graph is concave up for \(x < 0\) and concave down for \(x > 0\).
  - The inflection point is \((0, 2)\).
verification:
  checks:
    - expr: 'diff(2 + 3*x - x**3, x, 2)'
      expected: '-6*x'
    - expr: 'diff(2 + 3*x - x**3, x, 2).subs(x, -1)'
      expected: '6'
    - expr: 'diff(2 + 3*x - x**3, x, 2).subs(x, 1)'
      expected: '-6'
    - expr: '(2 + 3*x - x**3).subs(x, 0)'
      expected: '2'
:::


::: exercise
id: l2-concavity.handout-5-4-4
number: "5.4.4"
tier: standard
topics:
  - concavity
  - inflection
statement: |
  Describe the concavity of \(y = x^{4} - 2x^{2} + 3\).
solution: |
  The second derivative is
  \[
  y'' = 12x^{2} - 4 = 4(3x^{2} - 1).
  \]
  It is zero when \(x^{2} = \dfrac{1}{3}\), that is, at \(x = \pm\dfrac{1}{\sqrt{3}}\).

  - For \(x < -\dfrac{1}{\sqrt{3}}\), \(y'' > 0\), so the graph is concave up.
  - For \(-\dfrac{1}{\sqrt{3}} < x < \dfrac{1}{\sqrt{3}}\), \(y'' < 0\), so the graph is concave down.
  - For \(x > \dfrac{1}{\sqrt{3}}\), \(y'' > 0\), so the graph is concave up.

  The sign of \(y''\) changes at both points, so the inflection points are \(x = \pm\dfrac{1}{\sqrt{3}}\), at height \(y = \dfrac{22}{9}\).
provenance: handout-answer
steps:
  - The second derivative \(4(3x^{2} - 1)\) vanishes at \(x = \pm 1/\sqrt{3}\).
  - The graph is concave up, down, up on the three intervals.
  - The inflection points are \(x = \pm 1/\sqrt{3}\), both at height \(22/9\).
verification:
  checks:
    - expr: 'diff(x**4 - 2*x**2 + 3, x, 2)'
      expected: '4*(3*x**2 - 1)'
    - expr: 'diff(x**4 - 2*x**2 + 3, x, 2).subs(x, 1/sqrt(3))'
      expected: '0'
    - expr: 'diff(x**4 - 2*x**2 + 3, x, 2).subs(x, -1/sqrt(3))'
      expected: '0'
    - expr: 'diff(x**4 - 2*x**2 + 3, x, 2).subs(x, 0)'
      expected: '-4'
    - expr: 'diff(x**4 - 2*x**2 + 3, x, 2).subs(x, 1)'
      expected: '8'
    - expr: 'diff(x**4 - 2*x**2 + 3, x, 2).subs(x, -1)'
      expected: '8'
    - expr: '(x**4 - 2*x**2 + 3).subs(x, 1/sqrt(3))'
      expected: 'Rational(22, 9)'
:::


::: exercise
id: l2-concavity.handout-5-4-6
number: "5.4.6"
tier: standard
topics:
  - concavity
  - inflection
statement: |
  Describe the concavity of \(y = \dfrac{x^{2} - 1}{x}\).
solution: |
  The function is defined for \(x \ne 0\). Rewrite it as \(y = x - \dfrac{1}{x}\). The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=1 + \frac{1}{x^{2}},\\
  y''&=-\frac{2}{x^{3}}.
  \end{aligned}
  \]
  The second derivative is never zero.

  - For \(x < 0\), \(x^{3} < 0\), so \(y'' > 0\) and the graph is concave up on \((-\infty, 0)\).
  - For \(x > 0\), \(x^{3} > 0\), so \(y'' < 0\) and the graph is concave down on \((0, \infty)\).

  The sign of \(y''\) changes at \(x = 0\), but \(0\) is not in the domain, so the graph has no inflection point.
provenance: handout-answer
steps:
  - Rewrite \(y = x - 1/x\) and differentiate twice to get \(y'' = -2/x^{3}\).
  - The graph is concave up for \(x < 0\) and concave down for \(x > 0\).
  - The sign change is at \(x = 0\), outside the domain, so there is no inflection point.
verification:
  checks:
    - expr: '(x**2 - 1)/x - (x - 1/x)'
      expected: '0'
    - expr: 'diff((x**2 - 1)/x, x, 2)'
      expected: '-2/x**3'
    - expr: 'diff((x**2 - 1)/x, x, 2).subs(x, -1)'
      expected: '2'
    - expr: 'diff((x**2 - 1)/x, x, 2).subs(x, 1)'
      expected: '-2'
:::


::: exercise
id: l2-concavity.handout-5-4-7
number: "5.4.7"
tier: standard
topics:
  - concavity
  - inflection
statement: |
  Describe the concavity of \(y = 3x^{2} - \dfrac{1}{x^{2}}\).
solution: |
  The function is defined for \(x \ne 0\). The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=6x + \frac{2}{x^{3}},\\
  y''&=6 - \frac{6}{x^{4}} = \frac{6(x^{4} - 1)}{x^{4}}.
  \end{aligned}
  \]
  The denominator is positive for \(x \ne 0\), so the sign of \(y''\) is the sign of \(x^{4} - 1\). This is zero at \(x = \pm 1\).

  - For \(x < -1\), \(y'' > 0\), so the graph is concave up.
  - For \(-1 < x < 0\), \(y'' < 0\), so the graph is concave down.
  - For \(0 < x < 1\), \(y'' < 0\), so the graph is concave down.
  - For \(x > 1\), \(y'' > 0\), so the graph is concave up.

  The sign of \(y''\) changes at \(x = -1\) and at \(x = 1\), so these are inflection points, both at height \(y = 2\). The graph is concave down on both sides of \(x = 0\), and \(0\) is not in the domain, so there is no inflection point there.
provenance: handout-answer
steps:
  - The second derivative is \(6(x^{4} - 1)/x^{4}\), zero at \(x = \pm 1\).
  - The graph is concave up for \(x < -1\) and \(x > 1\), and concave down on \((-1, 0)\) and \((0, 1)\).
  - The inflection points are \(x = \pm 1\), at height \(2\).
verification:
  checks:
    - expr: 'diff(3*x**2 - 1/x**2, x, 2)'
      expected: '6 - 6/x**4'
    - expr: 'diff(3*x**2 - 1/x**2, x, 2).subs(x, 1)'
      expected: '0'
    - expr: 'diff(3*x**2 - 1/x**2, x, 2).subs(x, -1)'
      expected: '0'
    - expr: 'sign(diff(3*x**2 - 1/x**2, x, 2).subs(x, -2))'
      expected: '1'
    - expr: 'sign(diff(3*x**2 - 1/x**2, x, 2).subs(x, -Rational(1, 2)))'
      expected: '-1'
    - expr: 'sign(diff(3*x**2 - 1/x**2, x, 2).subs(x, Rational(1, 2)))'
      expected: '-1'
    - expr: 'sign(diff(3*x**2 - 1/x**2, x, 2).subs(x, 2))'
      expected: '1'
    - expr: '(3*x**2 - 1/x**2).subs(x, 1)'
      expected: '2'
:::


::: exercise
id: l2-concavity.handout-5-4-8
number: "5.4.8"
tier: standard
topics:
  - concavity
  - inflection
statement: |
  Describe the concavity of \(y = \sin x + \cos x\).
solution: |
  The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=\cos x - \sin x,\\
  y''&=-\sin x - \cos x = -(\sin x + \cos x).
  \end{aligned}
  \]
  The addition formula gives
  \[
  \sin x + \cos x = \sqrt{2}\,\sin\!\left(x + \frac{\pi}{4}\right),
  \]
  so \(y'' = -\sqrt{2}\sin\bigl(x + \tfrac{\pi}{4}\bigr)\). The sign of \(y''\) is the opposite of the sign of \(\sin\bigl(x + \tfrac{\pi}{4}\bigr)\).

  - The sine is positive when \(x + \dfrac{\pi}{4}\) lies in \((2n\pi, 2n\pi + \pi)\). Then \(y'' < 0\), and the graph is concave down on \(\left(2n\pi - \dfrac{\pi}{4},\ 2n\pi + \dfrac{3\pi}{4}\right)\).
  - The sine is negative when \(x + \dfrac{\pi}{4}\) lies in \((2n\pi + \pi, 2n\pi + 2\pi)\). Then \(y'' > 0\), and the graph is concave up on \(\left(2n\pi + \dfrac{3\pi}{4},\ 2n\pi + \dfrac{7\pi}{4}\right)\).

  In terms of \(n\), the concave down intervals are \(\left(\dfrac{(8n - 1)\pi}{4}, \dfrac{(8n + 3)\pi}{4}\right)\) and the concave up intervals are \(\left(\dfrac{(8n + 3)\pi}{4}, \dfrac{(8n + 7)\pi}{4}\right)\), for integer \(n\).

  The sign of \(y''\) changes at every zero of \(\sin\bigl(x + \tfrac{\pi}{4}\bigr)\), so the inflection points are \(x = -\dfrac{\pi}{4} + k\pi\) for integer \(k\).
provenance: handout-answer
steps:
  - The second derivative is \(y'' = -(\sin x + \cos x) = -\sqrt{2}\sin(x + \pi/4)\).
  - The graph is concave down where \(\sin(x + \pi/4) > 0\) and concave up where it is negative.
  - The intervals repeat with period \(2\pi\), and the inflection points are \(x = -\pi/4 + k\pi\).
verification:
  checks:
    - expr: 'diff(sin(x) + cos(x), x, 2)'
      expected: '-sin(x) - cos(x)'
    - expr: 'expand_trig(sqrt(2)*sin(x + pi/4))'
      expected: 'sin(x) + cos(x)'
    - expr: 'diff(sin(x) + cos(x), x, 2).subs(x, -pi/4)'
      expected: '0'
    - expr: 'diff(sin(x) + cos(x), x, 2).subs(x, 3*pi/4)'
      expected: '0'
    - expr: 'diff(sin(x) + cos(x), x, 2).subs(x, 7*pi/4)'
      expected: '0'
    - expr: 'diff(sin(x) + cos(x), x, 2).subs(x, 0)'
      expected: '-1'
    - expr: 'diff(sin(x) + cos(x), x, 2).subs(x, pi)'
      expected: '1'
:::


::: exercise
id: l2-concavity.handout-5-4-18
number: "5.4.18"
tier: exam
topics:
  - concavity
  - inflection
statement: |
  Describe the concavity of \(y = \sin^{3}x\). Find its inflection points.
solution: |
  The second derivative is
  \[
  \begin{aligned}
  y''&=6\sin x\cos^{2}x - 3\sin^{3}x\\
  &=3\sin x\,(2 - 2\sin^{2}x - \sin^{2}x)\\
  &=3\sin x\,(2 - 3\sin^{2}x).
  \end{aligned}
  \]
  Put \(s = \sin x\). Then \(y'' = 3s(2 - 3s^{2})\), which is zero when \(s = 0\) or \(s = \pm\sqrt{\tfrac{2}{3}}\). Let
  \[
  \alpha = \arcsin\sqrt{\tfrac{2}{3}} \approx 0.955.
  \]
  The zeros of \(y''\) in \([0, 2\pi]\) are \(0\), \(\alpha\), \(\pi - \alpha\), \(\pi\), \(\pi + \alpha\), \(2\pi - \alpha\) and \(2\pi\).

  As a function of \(s\), the product \(3s(2 - 3s^{2})\) is

  - positive for \(0 < s < \sqrt{\tfrac{2}{3}}\) and for \(s < -\sqrt{\tfrac{2}{3}}\),
  - negative for \(s > \sqrt{\tfrac{2}{3}}\) and for \(-\sqrt{\tfrac{2}{3}} < s < 0\).

  Following \(\sin x\) around one period gives the concavity:

  - on \((0, \alpha)\), \(0 < s < \sqrt{\tfrac{2}{3}}\), concave up,
  - on \((\alpha, \pi - \alpha)\), \(s > \sqrt{\tfrac{2}{3}}\), concave down,
  - on \((\pi - \alpha, \pi)\), \(0 < s < \sqrt{\tfrac{2}{3}}\), concave up,
  - on \((\pi, \pi + \alpha)\), \(-\sqrt{\tfrac{2}{3}} < s < 0\), concave down,
  - on \((\pi + \alpha, 2\pi - \alpha)\), \(s < -\sqrt{\tfrac{2}{3}}\), concave up,
  - on \((2\pi - \alpha, 2\pi)\), \(-\sqrt{\tfrac{2}{3}} < s < 0\), concave down.

  The pattern repeats with period \(2\pi\). The sign of \(y''\) changes at each of the zeros, so each is an inflection point. In general they are
  \[
  x = n\pi, \qquad x = \alpha + n\pi, \qquad x = -\alpha + n\pi, \qquad n \in \mathbb{Z}.
  \]
provenance: handout-answer
steps:
  - Simplify \(y'' = 3\sin x\,(2 - 3\sin^{2}x)\).
  - The zeros are \(\sin x = 0\) and \(\sin x = \pm\sqrt{2/3}\), that is, \(x = n\pi\) and \(x = \pm\alpha + n\pi\) with \(\alpha = \arcsin\sqrt{2/3}\).
  - Read the sign of \(3s(2 - 3s^{2})\) along one period, which alternates up and down across the six intervals.
  - Each zero is a sign change, so all are inflection points.
verification:
  checks:
    - expr: 'diff(sin(x)**3, x, 2) - 3*sin(x)*(2 - 3*sin(x)**2)'
      expected: '0'
    - expr: 'sin(asin(sqrt(Rational(2, 3))))**2'
      expected: 'Rational(2, 3)'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, 0)'
      expected: '0'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, pi)'
      expected: '0'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, asin(sqrt(Rational(2, 3))))'
      expected: '0'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, pi - asin(sqrt(Rational(2, 3))))'
      expected: '0'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, pi + asin(sqrt(Rational(2, 3))))'
      expected: '0'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, 2*pi - asin(sqrt(Rational(2, 3))))'
      expected: '0'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, pi/6)'
      expected: 'Rational(15, 8)'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, pi/2)'
      expected: '-3'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, 5*pi/6)'
      expected: 'Rational(15, 8)'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, 7*pi/6)'
      expected: '-Rational(15, 8)'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, 3*pi/2)'
      expected: '3'
    - expr: 'diff(sin(x)**3, x, 2).subs(x, 11*pi/6)'
      expected: '-Rational(15, 8)'
:::


::: exercise
id: l2-concavity.handout-5-4-20
number: "5.4.20"
tier: standard
topics:
  - concavity
  - inflection
statement: |
  Describe the concavity of \(y = x^{3} + bx^{2} + cx + d\). You will need to consider different cases, depending on the values of the coefficients.
solution: |
  The first derivative and the second derivative are
  \[
  \begin{aligned}
  y'&=3x^{2} + 2bx + c,\\
  y''&=6x + 2b.
  \end{aligned}
  \]
  The second derivative is zero at exactly one point,
  \[
  x_{0} = -\frac{b}{3}.
  \]
  It has the sign of \(x - x_{0}\), because \(y'' = 6(x - x_{0})\).

  - For \(x < -\dfrac{b}{3}\), \(y'' < 0\), so the graph is concave down.
  - For \(x > -\dfrac{b}{3}\), \(y'' > 0\), so the graph is concave up.

  No case distinction is needed. The coefficients \(c\) and \(d\) do not appear in \(y''\), and \(b\) only moves the point where the concavity changes. The graph has exactly one inflection point, at \(x = -\dfrac{b}{3}\), whatever the values of \(b\), \(c\) and \(d\). Its height is
  \[
  y\bigl(-\tfrac{b}{3}\bigr) = \frac{2b^{3}}{27} - \frac{bc}{3} + d.
  \]
provenance: written-for-site
steps:
  - The second derivative is \(y'' = 6x + 2b = 6(x + b/3)\).
  - The graph is concave down for \(x < -b/3\) and concave up for \(x > -b/3\).
  - There is one inflection point at \(x = -b/3\) for all values of \(b\), \(c\) and \(d\).
verification:
  checks:
    - expr: 'diff(x**3 + b*x**2 + c*x + d, x, 2)'
      expected: '6*x + 2*b'
    - expr: 'solve(6*x + 2*b, x)[0]'
      expected: '-b/3'
    - expr: '6*(x + b/3) - (6*x + 2*b)'
      expected: '0'
    - expr: '(x**3 + b*x**2 + c*x + d).subs(x, -b/3)'
      expected: '2*b**3/27 - b*c/3 + d'
:::
