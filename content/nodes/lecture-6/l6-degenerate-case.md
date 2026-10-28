---
id: l6-degenerate-case
lecture: 6
order: 3
title: "When D = 0: deciding with sections"
prerequisites: [l6-second-derivative-test, l4-cross-sections]
sources:
  - { source: handout, section: "14.7", page: 373 }
  - { source: handout, section: "14.7", page: "374-375" }
  - { source: handout, section: "14.7", page: 378 }
  - { source: lecture-notes-5, page: 4 }
  - { source: sheet-2, page: 2 }
  - { source: final-2024, page: 1 }
  - { source: final-2022, page: 6 }
  - { source: home-assignment-2022, page: "1-2" }
  - { source: retake-2023, page: 1 }
  - { source: mock-exam-1, page: 1 }
  - { source: mock-exam-2, page: 1 }
examWeight: high
examWeightNote: Every recent final asks for one D = 0 case. Placement in this lecture is provisional until the lecture has taken place. The formal statements follow the handout until the lecture 6 notes arrive.
status: reviewed
notation: |
  \(f_x\), \(H_f\) and \(D\) are the course names. \(f_x\) and \(\partial f/\partial x\) are the same partial. The discriminant is \(D = \det H_f = f_{xx} f_{yy} - (f_{xy})^2\).
---

::: section
title: The test says nothing when D = 0
:::

::: formal-statement
kind: theorem
title: The test says nothing when D = 0
source:
  source: handout
  section: "14.7"
  page: 373
text: |
  Suppose the second partials of \(f\) are continuous near a critical point \((x_0, y_0)\), so \(f_x(x_0, y_0) = f_y(x_0, y_0) = 0\). The **discriminant** is
  \[
  \begin{aligned}
  D(x_0, y_0) &= \det H_f(x_0, y_0)\\
  &= f_{xx}(x_0, y_0)\, f_{yy}(x_0, y_0)\\
  &\quad - (f_{xy}(x_0, y_0))^2.
  \end{aligned}
  \]
  If \(D(x_0, y_0) = 0\), the second derivative test says nothing. The conclusion stays open when \(f_{xx}(x_0, y_0) > 0\).
:::

::: plain-explanation
text: |
  \(D = 0\) means the second-order part of \(f\) vanishes along at least one line through the point. A positive \(f_{xx}\) says the graph bends upwards as you move in the \(x\) direction. That one direction leaves the sign along the flat line unknown, so a positive \(f_{xx}\) is silent in the same way.

  A negative \(f_{xx}\) is silent too. The point may be a local minimum, a local maximum, or neither, and a section of \(f\) has to decide.
:::

::: visual
kind: critical-point-viewer
caption: |
  This is a model case, the family \(f = x^2 + y^2 + kxy\) with its critical point at the origin. Set \(k\) to \(2\) or \(-2\): then \(D = 4 - k^2 = 0\) while \(f_{xx} = 2\) is positive, and the readout says the test is inconclusive. Move \(k\) away from \(\pm 2\) and the readout gives a minimum or a saddle.
params:
  k: 2
:::

::: trap
text: |
  \(D = 0\) and \(f_{xx} > 0\) leaves the critical point undecided.

  Take \(f(x, y) = x^2 + y^3\). The partials are
  \[
  f_x = 2x, \qquad f_y = 3y^2,
  \]
  so the only critical point is the origin. There
  \[
  f_{xx} = 2, \qquad f_{yy} = 0, \qquad f_{xy} = 0,
  \]
  so \(D = 0\). Along \(x = 0\), the function equals \(y^3\), which is positive for \(y > 0\) and negative for \(y < 0\), while \(f(0, 0) = 0\). The origin is neither a local minimum nor a local maximum.
:::

::: key-points
text: |
  - If the second partials of \(f\) are continuous near a critical point \((x_0, y_0)\) and \(D(x_0, y_0) = 0\), the second derivative test says nothing.
  - A positive \(f_{xx}(x_0, y_0)\) does not change that. The point may be a local minimum, a local maximum, or neither, and a section of \(f\) has to decide.
  - The usual slip reads \(D = 0\) with \(f_{xx} > 0\) as a local minimum. For \(f(x, y) = x^2 + y^3\), the origin has \(f_{xx} = 2\) and \(D = 0\), and along \(x = 0\) the function equals \(y^3\), so the origin is neither a local minimum nor a local maximum.
:::

::: concept-question
id: l6-degenerate-case.q-17244a88
question: |
  At a critical point, \(D = 0\) and \(f_{xx} = 5\). What follows?
options:
  - text: The point is a local minimum.
  - text: The point is a local maximum.
  - text: The test says nothing, and a section is needed.
    correct: true
  - text: The point is a saddle point.
explanation: |
  \(D = 0\) leaves the point undecided when \(f_{xx}\) is positive. Compare two functions:

  - For \(f = x^2 + y^3\), the origin has \(f_{xx} = 2\) and \(D = 0\), and the section \(x = 0\) changes sign.
  - For \(f = x^4 + y^4\), the origin has \(D = 0\) and is a minimum.

  The same pair of signs can go either way.
:::

::: section
title: Sections through a silent point
:::

::: formal-statement
kind: method
title: Sections through a silent point
source:
  source: handout
  section: "14.7"
  page: "374-375"
text: |
  When \(D(x_0, y_0) = 0\), restrict \(f\) to lines through \((x_0, y_0)\). For a critical point at the origin, the lines \(y = kx\) and the section \(x = 0\) are a direct choice.

  - If one section takes values both larger than \(f(x_0, y_0)\) and smaller than \(f(x_0, y_0)\), arbitrarily close to the point, then the point is neither a local minimum nor a local maximum.
  - If \(f(x, y) \ge f(x_0, y_0)\) at every point near \((x_0, y_0)\), then the point is a local minimum. Reversing the inequality gives a local maximum.
:::

::: plain-explanation
text: |
  A **section** is \(f\) with \(x\) and \(y\) tied together, for example by \(y = kx\). If that function of one variable rises on one side of the point and falls on the other, the surface does the same, so the point is neither a minimum nor a maximum.

  A section that stays above \(f(x_0, y_0)\) is compatible with a minimum, and the point is a minimum once \(f\) itself stays on that side. A section that is constant decides nothing by itself, because a second section may change sign.

  A minimum can also fill a whole curve, with \(D = 0\) at every point of the curve and with \(f\) constant there.
:::

::: worked-example
title: A minimum with D = 0
problem: |
  Classify the critical points of \(f(x, y) = x^4 + y^4\).
solution: |
  The partial derivatives are
  \[
  f_x = 4x^3, \qquad f_y = 4y^3.
  \]
  Both vanish only at \((0, 0)\), so this is the only critical point.

  The second derivatives are
  \[
  f_{xx} = 12x^2, \qquad f_{yy} = 12y^2, \qquad f_{xy} = 0.
  \]
  At the origin, \(D = 0 \cdot 0 - 0^2 = 0\). The test says nothing.

  The value at the origin is \(f(0, 0) = 0\). For every other point, \(x^4 + y^4 > 0\). The origin is a local minimum. The same comparison holds on the whole plane, so it is the absolute minimum.
:::

::: worked-example
title: A sign change on a section
problem: |
  Classify the critical points of \(f(x, y) = x^3 + y^3\).
solution: |
  The partial derivatives are
  \[
  f_x = 3x^2, \qquad f_y = 3y^2.
  \]
  Both vanish only at \((0, 0)\), so this is the only critical point.

  The second derivatives are
  \[
  f_{xx} = 6x, \qquad f_{yy} = 6y, \qquad f_{xy} = 0.
  \]
  At the origin each of them is \(0\), so \(D = 0\). The test says nothing.

  Along \(y = 0\), the function equals \(x^3\). This is positive for \(x > 0\) and negative for \(x < 0\), while \(f(0, 0) = 0\). The origin is neither a local minimum nor a local maximum.
:::

::: guided-example
title: One quiet section and one that changes sign
problem: |
  Classify the critical points of \(f(x, y) = x^4 + y^3\). Try each step on paper before you show it.
steps:
  - |
    The partial derivatives are \(f_x = 4x^3\) and \(f_y = 3y^2\). Both vanish only at \((0, 0)\), so this is the only critical point.
  - |
    The second derivatives are \(f_{xx} = 12x^2\), \(f_{yy} = 6y\) and \(f_{xy} = 0\). At the origin, \(D = 0\). The test says nothing.
  - |
    Along \(y = 0\), \(f(x, 0) = x^4\). This is positive for \(x \neq 0\) and zero at the origin.
  - |
    Along \(x = 0\), \(f(0, y) = y^3\). This is positive for \(y > 0\) and negative for \(y < 0\), while \(f(0, 0) = 0\). The origin is neither a local minimum nor a local maximum.
:::

::: trap
text: |
  For \(f(x, y) = x^3 + y^3\), the partial \(f_x = 3x^2\), so \(f_{xx} = 6x\). The same computation in \(y\) gives \(f_{yy} = 6y\).

  The expressions \(6x^2\) and \(6y^2\) disagree with these derivatives. At \(x = 2\), \(f_{xx} = 12\) and \(6x^2 = 24\).

  At the origin, \(6x^2\) and \(6y^2\) are also zero, so that computation also gives \(D = 0\). The section \(y = 0\) is \(x^3\), and under both computations the origin is neither a minimum nor a maximum.
:::

::: going-deeper
title: Three functions with the same zero Hessian
text: |
  The functions below all have a critical point at the origin with every second partial equal to \(0\), so \(D = 0\):

  - \(x^4 + y^4\) has a minimum,
  - \(-x^4 - y^4\) has a maximum,
  - \(x^4 - y^4\) has a saddle.

  The second-order test cannot separate them. The higher-order terms decide, which is why the degenerate case needs a direct look at \(f\) near the point.
:::

::: key-points
text: |
  - When \(D(x_0, y_0) = 0\), restrict \(f\) to lines through \((x_0, y_0)\). For a critical point at the origin, the lines \(y = kx\) and the section \(x = 0\) are a direct choice. If one section takes values both larger and smaller than \(f(x_0, y_0)\), arbitrarily close to the point, the point is neither a local minimum nor a local maximum.
  - If \(f(x, y) \ge f(x_0, y_0)\) at every point near \((x_0, y_0)\), the point is a local minimum. Reversing the inequality gives a local maximum.
  - A section that stays above \(f(x_0, y_0)\) is compatible with a minimum, and the point is a minimum once \(f\) itself stays on that side. A constant section decides nothing by itself, because a second section may change sign.
  - The usual slip writes \(f_{xx} = 6x^2\) for \(f = x^3 + y^3\). Differentiating \(f_x = 3x^2\) gives \(f_{xx} = 6x\), and at \(x = 2\) this is \(12\) while \(6x^2\) is \(24\).
:::

::: concept-question
id: l6-degenerate-case.q-bd8ad3f1
question: |
  \(f = x^4 + y^4\) has its only critical point at the origin, and \(D = 0\) there. Which description matches the point?
options:
  - text: The test proves a local minimum, because \(f_{xx}\) is non-negative at the origin.
  - text: The test says nothing. The formula \(f = x^4 + y^4\) shows a minimum, since \(f(0, 0) = 0\) and \(f\) is positive at every other point.
    correct: true
  - text: The origin is a saddle point, because \(D = 0\).
  - text: The gradient is nonzero at the origin.
explanation: |
  At the origin, \(f_{xx} = 0\) and \(D = 0\), so the test says nothing. The values of \(f\) settle the point. \(f(0, 0) = 0\) and \(f(x, y) > 0\) elsewhere, so the origin is a minimum.
:::

::: concept-question
id: l6-degenerate-case.q-348b467e
question: |
  The origin is a critical point with value \(0\), and along \(y = 0\) the function equals \(x^3\). What kind of point is the origin?
options:
  - text: A local minimum.
  - text: A local maximum.
  - text: Neither a local minimum nor a local maximum.
    correct: true
  - text: A minimum along \(y = 0\), so the classification is finished.
explanation: |
  \(x^3\) is positive for \(x > 0\) and negative for \(x < 0\). The function takes both larger and smaller values than \(0\) arbitrarily close to the origin, so the origin is neither a minimum nor a maximum.
:::

::: concept-question
id: l6-degenerate-case.q-b33fe993
question: |
  At a critical point of \(f\), \(D = 0\), and the restriction of \(f\) to every line through the point has a local minimum there. What follows?
options:
  - text: The point is a local minimum of \(f\), because every line has been checked.
  - text: The point is a saddle point, because \(D = 0\).
  - text: The lines do not decide the kind of point.
    correct: true
  - text: The point is a local minimum, provided \(f_{xx} > 0\).
explanation: |
  Take
  \[
  \begin{aligned}
  f(x, y) &= (y - x^2)(y - 3x^2)\\
  &= y^2 - 4x^2 y + 3x^4.
  \end{aligned}
  \]
  The origin is a critical point with
  \[
  f_{xx} = 0, \qquad f_{xy} = 0, \qquad f_{yy} = 2,
  \]
  so \(D = 0\). The lines give:

  - On \(x = 0\) the function is \(y^2\).
  - On \(y = kx\) it is \(x^2(k^2 - 4kx + 3x^2)\), which is non-negative near the origin.

  So every line gives a local minimum. Along the curve \(y = 2x^2\), the function equals
  \[
  x^2 \cdot (-x^2) = -x^4,
  \]
  which is negative. The function takes smaller values along a curve through the origin, so the origin is not a local minimum, and the lines alone cannot decide.
:::

::: exercise
id: l6-degenerate-case.basic-x4-y2
tier: basic
topics: [critical-points, degenerate-case]
statement: |
  Find and classify the critical points of \(f(x, y) = x^4 + y^2\).
solution: |
  The partial derivatives are
  \[
  f_x = 4x^3, \qquad f_y = 2y.
  \]
  Both vanish only at \((0, 0)\), so this is the only critical point.

  The second derivatives are
  \[
  f_{xx} = 12x^2, \qquad f_{yy} = 2, \qquad f_{xy} = 0.
  \]
  At the origin, \(D = 0 \cdot 2 - 0^2 = 0\). The test says nothing.

  The value at the origin is \(f(0, 0) = 0\). For every \((x, y)\), both \(x^4\) and \(y^2\) are non-negative, so \(f(x, y) \ge 0\). The origin is a local minimum.
provenance: written-for-site
steps:
  - The only critical point is \((0, 0)\).
  - \(D = 0\) there, so the test says nothing.
  - \(f(0, 0) = 0\) and \(f \ge 0\), so the origin is a local minimum.
verification:
  checks:
    - expr: 'solve([diff(x**4 + y**2, x), diff(x**4 + y**2, y)], [x, y])'
      expected: '[(0, 0)]'
    - expr: '(diff(x**4 + y**2, x, 2)*diff(x**4 + y**2, y, 2) - diff(x**4 + y**2, x, y)**2).subs({x: 0, y: 0})'
      expected: '0'
    - expr: '(x**4 + y**2).subs({x: 0, y: 0})'
      expected: '0'
    - expr: 'x**4 + y**2 - (x**2)**2 - y**2'
      expected: '0'
:::

::: sheet-item
id: l6-degenerate-case.sheet-silent
category: formula
text: |
  If \(D = 0\) at a critical point, the second derivative test says nothing, including when \(f_{xx} > 0\). Restrict \(f\) to lines through the point.
:::

::: sheet-item
id: l6-degenerate-case.sheet-sign-change
category: recognition
text: |
  If a section through a critical point takes both larger and smaller values than \(f\) at the point, the point is neither a local minimum nor a local maximum.
:::

::: sheet-item
id: l6-degenerate-case.sheet-fxx-positive
category: trap
text: |
  \(D = 0\) and \(f_{xx} > 0\) still leaves the point undecided. For \(f = x^2 + y^3\) the origin has \(f_{xx} = 2\) and \(D = 0\), and \(f(0, y) = y^3\) changes sign.
:::

::: exercise
id: l6-degenerate-case.final-2024-q3b
tier: exam
topics: [critical-points, degenerate-case]
examBlock: critical-points
pastExam:
  year: 2024
  paper: Final
  question: "3b"
  points: 2
statement: |
  b) \( h(x, y) = x^3 - x^2 y^2 + 2y^2 \)
solution: |
  The domain is \( \mathbb{R}^2 \). The gradient is
  \[
  \begin{aligned}
  \nabla h&=(3x^2-2xy^2,\,-2x^2y+4y)\\
  &=\bigl(x(3x-2y^2),\,2y(2-x^2)\bigr).
  \end{aligned}
  \]
  Solving both factors gives the critical points
  \[
  \begin{aligned}
  &(0,0),\\
  &\left(\sqrt2,\sqrt{\frac{3\sqrt2}{2}}\right),\\
  &\left(\sqrt2,-\sqrt{\frac{3\sqrt2}{2}}\right).
  \end{aligned}
  \]

  The second derivatives are
  \[
  \begin{aligned}
  h_{xx}&=6x-2y^2,\\
  h_{xy}&=-4xy,\\
  h_{yy}&=4-2x^2.
  \end{aligned}
  \]
  At \((0,0)\), the Hessian discriminant is \(D=0\). On the section \(y=0\), the function is \(h(x,0)=x^3\). This value is positive for \(x>0\) and negative for \(x<0\), so \((0,0)\) is neither a local minimum nor a local maximum.

  At each critical point with \(x=\sqrt2\), the discriminant is
  \[
  D=-48\sqrt2<0.
  \]
  Both of these points are saddle points.
provenance: written-for-site
steps:
  - The factored gradient equations are solved for all real critical points.
  - The Hessian discriminant is evaluated at each critical point.
  - The degenerate point is classified by the sign change on the section \(y=0\).
verification:
  checks:
    - expr: Tuple(diff(x**3-x**2*y**2+2*y**2,x),diff(x**3-x**2*y**2+2*y**2,y))
      expected: "Tuple(3*x**2-2*x*y**2,-2*x**2*y+4*y)"
    - expr: Tuple(diff(x**3-x**2*y**2+2*y**2,x).subs({x:0,y:0}),diff(x**3-x**2*y**2+2*y**2,y).subs({x:0,y:0}))
      expected: "Tuple(0,0)"
    - expr: Tuple(diff(x**3-x**2*y**2+2*y**2,x).subs({x:sqrt(2),y:sqrt(3*sqrt(2)/2)}),diff(x**3-x**2*y**2+2*y**2,y).subs({x:sqrt(2),y:sqrt(3*sqrt(2)/2)}))
      expected: "Tuple(0,0)"
    - expr: Tuple(diff(x**3-x**2*y**2+2*y**2,x).subs({x:sqrt(2),y:-sqrt(3*sqrt(2)/2)}),diff(x**3-x**2*y**2+2*y**2,y).subs({x:sqrt(2),y:-sqrt(3*sqrt(2)/2)}))
      expected: "Tuple(0,0)"
    - expr: Tuple(diff(x**3-x**2*y**2+2*y**2,x,2),diff(x**3-x**2*y**2+2*y**2,x,y),diff(x**3-x**2*y**2+2*y**2,y,2))
      expected: "Tuple(6*x-2*y**2,-4*x*y,4-2*x**2)"
    - expr: (diff(x**3-x**2*y**2+2*y**2,x,2)*diff(x**3-x**2*y**2+2*y**2,y,2)-diff(x**3-x**2*y**2+2*y**2,x,y)**2).subs({x:0,y:0})
      expected: "0"
    - expr: Tuple((x**3-x**2*y**2+2*y**2).subs({x:1,y:0}),(x**3-x**2*y**2+2*y**2).subs({x:-1,y:0}))
      expected: "Tuple(1,-1)"
    - expr: (diff(x**3-x**2*y**2+2*y**2,x,2)*diff(x**3-x**2*y**2+2*y**2,y,2)-diff(x**3-x**2*y**2+2*y**2,x,y)**2).subs({x:sqrt(2),y:sqrt(3*sqrt(2)/2)})
      expected: "-48*sqrt(2)"
    - expr: (diff(x**3-x**2*y**2+2*y**2,x,2)*diff(x**3-x**2*y**2+2*y**2,y,2)-diff(x**3-x**2*y**2+2*y**2,x,y)**2).subs({x:sqrt(2),y:-sqrt(3*sqrt(2)/2)})
      expected: "-48*sqrt(2)"
:::

::: exercise
id: l6-degenerate-case.final-2022-q5c
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
pastExam:
  year: 2022
  paper: Final
  question: "5c"
  points: 1
statement: |
  Let \(f(x, y) = (x^2 + y^2 - 1)^2\), and set \(g(x) = f(x, 0)\) and \(h(x) = f(0, x)\). Plot \(g\) and \(h\) for \(x \in [-\sqrt{2}, \sqrt{2}]\).
solution: |
  Both sections equal the same function:
  \[
  \begin{aligned}
  g(x) &= (x^2 - 1)^2,\\
  h(x) &= (x^2 - 1)^2.
  \end{aligned}
  \]

  On \([-\sqrt{2}, \sqrt{2}]\) the graph has value 1 at \(x = \pm \sqrt{2}\), value 0 at \(x = \pm 1\), and value 1 at \(x = 0\). It falls from 1 at \(-\sqrt{2}\) to 0 at \(-1\), rises to 1 at 0, falls to 0 at 1, and rises to 1 at \(\sqrt{2}\). The points \(x = \pm 1\) are minima of \(g\).
provenance: official-key
steps:
  - \(g(x) = h(x) = (x^2 - 1)^2\).
  - The graph on \([-\sqrt{2}, \sqrt{2}]\), with zeros at \(\pm 1\) and height 1 at \(0\) and at the endpoints.
verification:
  checks:
    - expr: '((x**2 + y**2 - 1)**2).subs(y, 0) - (x**2 - 1)**2'
      expected: 0
    - expr: '((x**2 + y**2 - 1)**2).subs({x: 0, y: x}) - (x**2 - 1)**2'
      expected: 0
    - expr: '((x**2 - 1)**2).subs(x, 0)'
      expected: 1
    - expr: '((x**2 - 1)**2).subs(x, 1)'
      expected: 0
    - expr: '((x**2 - 1)**2).subs(x, -1)'
      expected: 0
    - expr: '((x**2 - 1)**2).subs(x, sqrt(2))'
      expected: 1
    - expr: '((x**2 - 1)**2).subs(x, -sqrt(2))'
      expected: 1
:::

::: exercise
id: l6-degenerate-case.final-2022-q5d
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
pastExam:
  year: 2022
  paper: Final
  question: "5d"
  points: 1
statement: |
  Let \(f(x, y) = (x^2 + y^2 - 1)^2\). The critical points are the origin and the unit circle \(x^2 + y^2 = 1\). Give the kind of each, with an explanation.
solution: |
  At the origin,
  \[
  f_{xx} = -4, \qquad f_{yy} = -4, \qquad f_{xy} = 0,
  \]
  so \(D = 16\). Here \(D > 0\) and \(f_{xx} < 0\), so the origin is a local maximum.

  On the unit circle, \(D = 0\), so the second derivative test says nothing. The function is a square, so \(f \ge 0\) everywhere, and \(f = 0\) at every point of the circle. Each of those points is a minimum, and the minimum is non-isolated: every disk about a point of the circle contains other points of the circle, where \(f\) is also 0. The sections agree with that reading. \(g(x) = f(x, 0)\) and \(h(x) = f(0, x)\) equal \((x^2 - 1)^2\), which is zero at \(x = \pm 1\) and non-negative on \([-\sqrt{2}, \sqrt{2}]\).
provenance: official-key
steps:
  - At the origin, \(D = 16 > 0\) and \(f_{xx} = -4 < 0\), so a local maximum.
  - On the circle, \(D = 0\), so the test says nothing.
  - \(f \ge 0\) and \(f = 0\) on the circle, a non-isolated minimum, matching the sections.
verification:
  checks:
    - expr: '(diff((x**2 + y**2 - 1)**2, x, 2)*diff((x**2 + y**2 - 1)**2, y, 2) - diff((x**2 + y**2 - 1)**2, x, y)**2).subs({x: 0, y: 0})'
      expected: 16
    - expr: 'diff((x**2 + y**2 - 1)**2, x, 2).subs({x: 0, y: 0})'
      expected: -4
    - expr: '(diff((x**2 + y**2 - 1)**2, x, 2)*diff((x**2 + y**2 - 1)**2, y, 2) - diff((x**2 + y**2 - 1)**2, x, y)**2).subs({x: cos(theta), y: sin(theta)})'
      expected: 0
    - expr: '((x**2 + y**2 - 1)**2).subs({x: cos(theta), y: sin(theta)})'
      expected: 0
    - expr: '((x**2 + y**2 - 1)**2).subs({x: 0, y: 0})'
      expected: 1
:::

::: exercise
id: l6-degenerate-case.home-2022-q2-10
number: "Home assignment 2022, exercise 2.10"
tier: standard
topics: [second-derivative-test]
statement: |
  Let \((x_0, y_0)\) be a critical point with \(f_{xx}(x_0, y_0) > 0\) and \(D = 0\), where \(D = f_{xx} f_{yy} - (f_{xy})^2\). Does the second derivative test decide that the point is a maximum or a minimum?
solution: |
  Since \(D = 0\) and \(f_{xx} \neq 0\), the relation \(f_{yy} = (f_{xy})^2 / f_{xx}\) turns the quadratic form into a single square:
  \[
  \begin{aligned}
  &a^2 f_{xx} + 2ab f_{xy} + b^2 f_{yy}\\
  &= f_{xx}\left(a + b\frac{f_{xy}}{f_{xx}}\right)^2.
  \end{aligned}
  \]
  The right-hand side is zero along the direction \(a = -b f_{xy} / f_{xx}\). Along that line the second derivative \(\varphi''(0)\) vanishes, so the second-order expansion gives no sign for \(f - f(x_0, y_0)\). The test says nothing when \(D = 0\).
provenance: official-key
steps:
  - When \(D = 0\), the quadratic form is \(f_{xx}(a + b f_{xy}/f_{xx})^2\).
  - That square vanishes along \(a = -b f_{xy}/f_{xx}\).
  - The test says nothing when \(D = 0\).
verification:
  checks:
    - expr: '(a**2*fxx + 2*a*b*fxy + b**2*(fxy**2/fxx)) - fxx*(a + b*fxy/fxx)**2'
      expected: 0
    - expr: '(fxx*(a + b*fxy/fxx)**2).subs(a, -b*fxy/fxx)'
      expected: 0
discrepancy: |
  The official key treats \(D = 0\) and \(f_{xx} > 0\) as a minimum, and \(f_{xx} < 0\) as a maximum. It calls the test inconclusive only when both second derivatives vanish. The verified conclusion is that the test says nothing when \(D = 0\).
:::

::: exercise
id: l6-degenerate-case.home-2022-q6-1
number: "14.7.18a (sheet 2 exercise 9.1; home assignment 2022, exercise 6.1)"
tier: exam
topics: [critical-points]
examBlock: critical-points
statement: |
  Show that \((0, 0)\) is the only critical point of \(f(x, y) = x^3 - 3x^2 y + y^3\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x &= 3x^2 - 6xy = 3x(x - 2y),\\
  f_y &= -3x^2 + 3y^2 = 3(y - x)(y + x).
  \end{aligned}
  \]

  - From \(f_x = 0\), either \(x = 0\) or \(x = 2y\).
  - From \(f_y = 0\), either \(y = x\) or \(y = -x\).

  The cases are:

  - If \(x = 0\) and \(y = x\), or \(x = 0\) and \(y = -x\), then \(y = 0\).
  - If \(x = 2y\) and \(y = x\), then \(x = 0\).
  - If \(x = 2y\) and \(y = -x\), then \(x = 0\).

  The only critical point is \((0, 0)\).
provenance: official-key
steps:
  - \(f_x = 3x(x - 2y)\) and \(f_y = 3(y - x)(y + x)\).
  - Each case of the system gives \((0, 0)\).
verification:
  checks:
    - expr: 'diff(x**3 - 3*x**2*y + y**3, x) - 3*x*(x - 2*y)'
      expected: 0
    - expr: 'diff(x**3 - 3*x**2*y + y**3, y) - 3*(y - x)*(y + x)'
      expected: 0
    - expr: 'solve([diff(x**3 - 3*x**2*y + y**3, x), diff(x**3 - 3*x**2*y + y**3, y)], [x, y])'
      expected: '[(0, 0)]'
:::

::: exercise
id: l6-degenerate-case.home-2022-q6-2
number: "14.7.18b (sheet 2 exercise 9.2; home assignment 2022, exercise 6.2)"
tier: exam
topics: [second-derivative-test]
statement: |
  For \(f(x, y) = x^3 - 3x^2 y + y^3\), what is \(D\) at the critical point \((0, 0)\)?
solution: |
  The second derivatives are
  \[
  \begin{aligned}
  f_{xx} &= 6x - 6y,\\
  f_{xy} &= -6x,\\
  f_{yy} &= 6y.
  \end{aligned}
  \]
  At the origin each of them is 0, so \(D = 0\).
provenance: official-key
steps:
  - The second derivatives vanish at the origin.
  - \(D = 0\).
verification:
  checks:
    - expr: '(diff(x**3 - 3*x**2*y + y**3, x, 2)*diff(x**3 - 3*x**2*y + y**3, y, 2) - diff(x**3 - 3*x**2*y + y**3, x, y)**2).subs({x: 0, y: 0})'
      expected: 0
:::

::: exercise
id: l6-degenerate-case.home-2022-q6-3
number: "14.7.18c (sheet 2 exercise 9.3; home assignment 2022, exercise 6.3)"
tier: exam
topics: [critical-points]
statement: |
  For \(f(x, y) = x^3 - 3x^2 y + y^3\), determine the cross-sections obtained by setting \(y = kx\).
solution: |
  Along the line \(y = kx\),
  \[
  \begin{aligned}
  f(x, kx) &= x^3 - 3k x^3 + k^3 x^3\\
  &= (1 - 3k + k^3) x^3.
  \end{aligned}
  \]
  Each such section is a constant multiple of \(x^3\).
provenance: official-key
steps:
  - Substitute \(y = kx\).
  - The section is \((1 - 3k + k^3) x^3\).
verification:
  checks:
    - expr: '(x**3 - 3*x**2*(k*x) + (k*x)**3) - (1 - 3*k + k**3)*x**3'
      expected: 0
    - expr: '(1 - 3*k + k**3).subs(k, 0)'
      expected: 1
:::

::: exercise
id: l6-degenerate-case.home-2022-q6-4
number: "14.7.18d (sheet 2 exercise 9.4; home assignment 2022, exercise 6.4)"
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
statement: |
  For \(f(x, y) = x^3 - 3x^2 y + y^3\), the only critical point is \((0, 0)\) and \(D = 0\) there. What kind of critical point is it?
solution: |
  Along \(y = 0\), which is the section \(k = 0\), \(f(x, 0) = x^3\). This is positive for \(x > 0\) and negative for \(x < 0\), while \(f(0, 0) = 0\). The origin is a saddle point.
provenance: official-key
steps:
  - Along \(y = 0\), \(f(x, 0) = x^3\).
  - The section changes sign, so the origin is a saddle point.
verification:
  checks:
    - expr: '(x**3 - 3*x**2*y + y**3).subs(y, 0) - x**3'
      expected: 0
:::

::: exercise
id: l6-degenerate-case.retake-2023-q3
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
pastExam:
  year: 2023
  paper: Retake
  question: "3"
  points: 3
statement: |
  Find all critical points of \(f(x, y) = x^3 + x y^2 + y^3\). Compute \(f(x, 0)\) and deduce the kind of the critical points.
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x &= 3x^2 + y^2,\\
  f_y &= 2xy + 3y^2.
  \end{aligned}
  \]

  The sum of squares \(3x^2 + y^2\) vanishes only at \((0, 0)\), and \(f_y\) vanishes there as well. The only critical point is the origin.

  The second derivatives are
  \[
  \begin{aligned}
  f_{xx} &= 6x,\\
  f_{yy} &= 2x + 6y,\\
  f_{xy} &= 2y,
  \end{aligned}
  \]
  so \(D = 0\) at the origin and the test says nothing. The section \(f(x, 0) = x^3\) is positive for \(x > 0\) and negative for \(x < 0\), while \(f(0, 0) = 0\). The origin is a saddle point.
provenance: written-for-site
steps:
  - \(f_x = 3x^2 + y^2\) vanishes only at the origin.
  - \(D = 0\) there, so the test says nothing.
  - \(f(x, 0) = x^3\) changes sign, so the origin is a saddle point.
verification:
  checks:
    - expr: 'solve([diff(x**3 + x*y**2 + y**3, x), diff(x**3 + x*y**2 + y**3, y)], [x, y])'
      expected: '[(0, 0)]'
    - expr: '(diff(x**3 + x*y**2 + y**3, x, 2)*diff(x**3 + x*y**2 + y**3, y, 2) - diff(x**3 + x*y**2 + y**3, x, y)**2).subs({x: 0, y: 0})'
      expected: 0
    - expr: '(x**3 + x*y**2 + y**3).subs(y, 0) - x**3'
      expected: 0
:::

::: exercise
id: l6-degenerate-case.mock-exam-1-q2
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
pastExam:
  year: 2022
  paper: "Mock exam"
  question: "2"
  points: 1
statement: |
  Find all critical points of \(f(x, y) = x^2 + x y^2 + y^2\) and of \(g(x, y) = x^3 + x y^2 + y^3\), and give their kind. If \(D = 0\), use the section \(y = 0\).
solution: |
  For \(f\), the partial derivatives are
  \[
  f_x = 2x + y^2, \qquad f_y = 2y(x + 1).
  \]
  From \(f_y = 0\), either \(y = 0\) or \(x = -1\).

  - If \(y = 0\), then \(x = 0\).
  - If \(x = -1\), then \(y^2 = 2\).

  The critical points are \((0, 0)\), \((-1, \sqrt{2})\) and \((-1, -\sqrt{2})\).

  The second derivatives of \(f\) are
  \[
  \begin{aligned}
  f_{xx} &= 2,\\
  f_{yy} &= 2x + 2,\\
  f_{xy} &= 2y,
  \end{aligned}
  \]
  so \(D = 4(x + 1) - 4y^2\).

  - At \((0, 0)\), \(D = 4 > 0\) and \(f_{xx} = 2 > 0\), so the origin is a local minimum.
  - At \((-1, \sqrt{2})\) and at \((-1, -\sqrt{2})\), \(D = -8 < 0\), so both points are saddle points.

  For \(g\), \(g_x = 3x^2 + y^2\) vanishes only at \((0, 0)\), and \(g_y = 2xy + 3y^2\) vanishes there too. The only critical point is the origin. There \(D = 0\), so the test says nothing. The section \(y = 0\) is \(g(x, 0) = x^3\), which is positive for \(x > 0\) and negative for \(x < 0\). The origin is a saddle point of \(g\).
provenance: written-for-site
steps:
  - Critical points of \(f\), and their kinds from \(D\).
  - The only critical point of \(g\) is the origin, where \(D = 0\).
  - The section \(g(x, 0) = x^3\) makes the origin a saddle point.
verification:
  checks:
    - expr: 'solve([diff(x**2 + x*y**2 + y**2, x), diff(x**2 + x*y**2 + y**2, y)], [x, y])'
      expected: '[(-1, -sqrt(2)), (-1, sqrt(2)), (0, 0)]'
    - expr: '(diff(x**2 + x*y**2 + y**2, x, 2)*diff(x**2 + x*y**2 + y**2, y, 2) - diff(x**2 + x*y**2 + y**2, x, y)**2).subs({x: 0, y: 0})'
      expected: 4
    - expr: '(diff(x**2 + x*y**2 + y**2, x, 2)*diff(x**2 + x*y**2 + y**2, y, 2) - diff(x**2 + x*y**2 + y**2, x, y)**2).subs({x: -1, y: sqrt(2)})'
      expected: -8
    - expr: '(diff(x**2 + x*y**2 + y**2, x, 2)*diff(x**2 + x*y**2 + y**2, y, 2) - diff(x**2 + x*y**2 + y**2, x, y)**2).subs({x: -1, y: -sqrt(2)})'
      expected: -8
    - expr: 'solve([diff(x**3 + x*y**2 + y**3, x), diff(x**3 + x*y**2 + y**3, y)], [x, y])'
      expected: '[(0, 0)]'
    - expr: '(diff(x**3 + x*y**2 + y**3, x, 2)*diff(x**3 + x*y**2 + y**3, y, 2) - diff(x**3 + x*y**2 + y**3, x, y)**2).subs({x: 0, y: 0})'
      expected: 0
    - expr: '(x**3 + x*y**2 + y**3).subs(y, 0) - x**3'
      expected: 0
:::

::: exercise
id: l6-degenerate-case.ex-ring-radial-d-zero
tier: exam
topics: [critical-points, second-derivative-test, degenerate-case]
statement: |
  Let \(f(x, y) = (x^2 + y^2 - 1)(x^2 + y^2 - 4)\).

  a) Find all critical points of \(f\).

  b) Compute \(D\) at the origin and at the points of the other critical set.

  c) Give the kind of each critical point, with an explanation.
solution: |
  a) The partial derivatives are
  \[
  \begin{aligned}
  f_x &= 2x(2x^2 + 2y^2 - 5),\\
  f_y &= 2y(2x^2 + 2y^2 - 5).
  \end{aligned}
  \]
  Both vanish when \(2x^2 + 2y^2 - 5 = 0\). If that factor is nonzero, then \(x = 0\) and \(y = 0\). The critical points are the origin and every point of the circle \(x^2 + y^2 = 5/2\).

  b) The second derivatives are
  \[
  \begin{aligned}
  f_{xx} &= 12x^2 + 4y^2 - 10,\\
  f_{yy} &= 4x^2 + 12y^2 - 10,\\
  f_{xy} &= 8xy.
  \end{aligned}
  \]
  At the origin, \(f_{xx} = f_{yy} = -10\) and \(f_{xy} = 0\), so \(D = 100\).

  On the circle \(x^2 + y^2 = 5/2\), the first second derivative is \(f_{xx} = 8x^2 + 4 \cdot \tfrac52 - 10 = 8x^2\), and in the same way \(f_{yy} = 8y^2\). So
  \[
  D = 8x^2 \cdot 8y^2 - (8xy)^2 = 0.
  \]

  c) At the origin, \(D = 100 > 0\) and \(f_{xx} = -10 < 0\), so the origin is a local maximum, with \(f(0, 0) = 4\).

  On the circle, \(D = 0\) and the test says nothing. Write \(f\) with \(u = x^2 + y^2\):
  \[
  \begin{aligned}
  f &= u^2 - 5u + 4\\
  &= \left(u - \tfrac52\right)^2 - \tfrac94\\
  &\ge -\tfrac94.
  \end{aligned}
  \]
  Equality holds exactly when \(u = 5/2\). So \(f = -9/4\) at every point of the circle, and \(f\) is larger everywhere else. Each point of the circle is a minimum, and the minimum is global. It is not isolated, because every disk about a point of the circle contains other points of the circle with the same value.
provenance: written-for-site
steps:
  - The factored partials \(2x(2x^2 + 2y^2 - 5)\) and \(2y(2x^2 + 2y^2 - 5)\), and the critical set (origin and the circle \(x^2 + y^2 = 5/2\)).
  - \(D = 100\) at the origin and \(D = 0\) on the circle.
  - Local maximum at the origin.
  - The completed square \(f = (u - 5/2)^2 - 9/4\) shows the circle is a global minimum.
verification:
  checks:
    - expr: 'diff((x**2+y**2-1)*(x**2+y**2-4), x) - 2*x*(2*x**2+2*y**2-5)'
      expected: '0'
    - expr: 'diff((x**2+y**2-1)*(x**2+y**2-4), y) - 2*y*(2*x**2+2*y**2-5)'
      expected: '0'
    - expr: 'Tuple(diff((x**2+y**2-1)*(x**2+y**2-4), x, 2), diff((x**2+y**2-1)*(x**2+y**2-4), x, y), diff((x**2+y**2-1)*(x**2+y**2-4), y, 2))'
      expected: 'Tuple(12*x**2+4*y**2-10, 8*x*y, 4*x**2+12*y**2-10)'
    - expr: '(diff((x**2+y**2-1)*(x**2+y**2-4), x, 2)*diff((x**2+y**2-1)*(x**2+y**2-4), y, 2) - diff((x**2+y**2-1)*(x**2+y**2-4), x, y)**2).subs({x: 0, y: 0})'
      expected: '100'
    - expr: '(diff((x**2+y**2-1)*(x**2+y**2-4), x, 2)*diff((x**2+y**2-1)*(x**2+y**2-4), y, 2) - diff((x**2+y**2-1)*(x**2+y**2-4), x, y)**2).subs({x: sqrt(Rational(5, 2))*cos(t), y: sqrt(Rational(5, 2))*sin(t)})'
      expected: '0'
    - expr: '(x**2+y**2-1)*(x**2+y**2-4) - ((x**2+y**2-Rational(5, 2))**2 - Rational(9, 4))'
      expected: '0'
    - expr: '((x**2+y**2-1)*(x**2+y**2-4)).subs({x: 0, y: 0})'
      expected: '4'
:::

::: exercise
id: l6-degenerate-case.ex-parabola-sections-d-zero
tier: exam
topics: [critical-points, degenerate-case]
statement: |
  Let \(f(x, y) = (y - x^2)(y - 2x^2)\).

  a) Show that the origin is the only critical point of \(f\), and that \(D = 0\) there.

  b) Show that the restriction of \(f\) to every line through the origin has a local minimum at the origin.

  c) Decide whether the origin is a local minimum, a local maximum, or neither.
solution: |
  a) Expanding gives \(f = y^2 - 3x^2 y + 2x^4\). The partial derivatives are
  \[
  \begin{aligned}
  f_x &= -6xy + 8x^3 = 2x(4x^2 - 3y),\\
  f_y &= 2y - 3x^2.
  \end{aligned}
  \]
  From \(f_y = 0\), \(y = \tfrac32 x^2\). Then \(f_x = 2x(4x^2 - \tfrac92 x^2) = -x^3\), which vanishes only at \(x = 0\). So \((0, 0)\) is the only critical point.

  The second derivatives are
  \[
  \begin{aligned}
  f_{xx} &= 24x^2 - 6y,\\
  f_{xy} &= -6x,\\
  f_{yy} &= 2.
  \end{aligned}
  \]
  At the origin, \(f_{xx} = 0\), \(f_{xy} = 0\) and \(f_{yy} = 2\), so \(D = 0 \cdot 2 - 0^2 = 0\). The test says nothing.

  b) On the line \(x = 0\), \(f(0, y) = y^2\), which is positive for \(y \neq 0\). On a line \(y = kx\),
  \[
  f(x, kx) = x^2(k^2 - 3kx + 2x^2).
  \]

  - If \(k \neq 0\), the bracket tends to \(k^2 > 0\) as \(x\) tends to \(0\), so it is positive for small \(|x|\), and \(f(x, kx) > 0\) for small \(x \neq 0\).
  - If \(k = 0\), then \(f(x, 0) = 2x^4 > 0\) for \(x \neq 0\).

  In every case \(f(0, 0) = 0\) is a local minimum of the restriction.

  c) The lines do not decide the question. Take the parabola \(y = \tfrac32 x^2\). On it,
  \[
  \begin{aligned}
  &f\left(x, \tfrac32 x^2\right)\\
  &= \left(\tfrac12 x^2\right)\left(-\tfrac12 x^2\right)\\
  &= -\tfrac14 x^4 < 0 \quad (x \neq 0).
  \end{aligned}
  \]
  So \(f\) takes negative values arbitrarily close to the origin. On the \(y\)-axis it takes positive values arbitrarily close to the origin, since \(f(0, y) = y^2\). The value at the origin is \(0\). The origin is neither a local minimum nor a local maximum.
provenance: written-for-site
steps:
  - Partials \(2x(4x^2 - 3y)\) and \(2y - 3x^2\), one critical point \((0, 0)\), and \(D = 0\).
  - The section \(x = 0\) gives \(y^2\), and the sections \(y = kx\) give \(x^2(k^2 - 3kx + 2x^2)\), all positive near the origin.
  - The parabola \(y = \tfrac32 x^2\) gives \(-\tfrac14 x^4 < 0\).
  - The origin is neither a local minimum nor a local maximum.
verification:
  checks:
    - expr: 'expand((y-x**2)*(y-2*x**2))'
      expected: 'y**2-3*x**2*y+2*x**4'
    - expr: 'diff((y-x**2)*(y-2*x**2), x) - 2*x*(4*x**2-3*y)'
      expected: '0'
    - expr: 'diff((y-x**2)*(y-2*x**2), y) - (2*y-3*x**2)'
      expected: '0'
    - expr: 'solve([diff((y-x**2)*(y-2*x**2), x), diff((y-x**2)*(y-2*x**2), y)], [x, y])'
      expected: '[(0, 0)]'
    - expr: 'Tuple(diff((y-x**2)*(y-2*x**2), x, 2), diff((y-x**2)*(y-2*x**2), x, y), diff((y-x**2)*(y-2*x**2), y, 2))'
      expected: 'Tuple(24*x**2-6*y, -6*x, 2)'
    - expr: '(diff((y-x**2)*(y-2*x**2), x, 2)*diff((y-x**2)*(y-2*x**2), y, 2) - diff((y-x**2)*(y-2*x**2), x, y)**2).subs({x: 0, y: 0})'
      expected: '0'
    - expr: '((y-x**2)*(y-2*x**2)).subs(y, k*x) - x**2*(k**2-3*k*x+2*x**2)'
      expected: '0'
    - expr: '((y-x**2)*(y-2*x**2)).subs(x, 0)'
      expected: 'y**2'
    - expr: '((y-x**2)*(y-2*x**2)).subs(y, 3*x**2/2)'
      expected: '-x**4/4'
:::

::: exercise
id: l6-degenerate-case.ex-quartics-same-d
tier: standard
topics: [critical-points, degenerate-case]
statement: |
  Consider the three functions
  \[
  \begin{aligned}
  f(x, y) &= x^4 + y^4,\\
  g(x, y) &= x^4 - y^4,\\
  h(x, y) &= (x^2 - y^2)^2.
  \end{aligned}
  \]

  a) Show that the origin is a critical point of each function and that \(D = 0\) there.

  b) Give the kind of the origin for each function, with an explanation.

  c) Find all critical points of \(h\).
solution: |
  a) The gradients are
  \[
  \begin{aligned}
  \nabla f &= (4x^3, 4y^3),\\
  \nabla g &= (4x^3, -4y^3),\\
  \nabla h &= \bigl(4x(x^2 - y^2),\ 4y(y^2 - x^2)\bigr).
  \end{aligned}
  \]
  All three vanish at the origin. The second derivatives are
  \[
  \begin{aligned}
  f_{xx} &= 12x^2,\\
  f_{yy} &= 12y^2,\\
  f_{xy} &= 0,\\
  g_{xx} &= 12x^2,\\
  g_{yy} &= -12y^2,\\
  g_{xy} &= 0,\\
  h_{xx} &= 12x^2 - 4y^2,\\
  h_{yy} &= 12y^2 - 4x^2,\\
  h_{xy} &= -8xy.
  \end{aligned}
  \]
  Every one of them is \(0\) at the origin, so \(D = 0\) for all three functions and the test says nothing.

  b) For \(f\): \(f(0, 0) = 0\) and \(f(x, y) > 0\) at every other point, so the origin is a strict local minimum (and the global minimum).

  For \(g\): \(g(x, 0) = x^4 > 0\) for \(x \neq 0\), and \(g(0, y) = -y^4 < 0\) for \(y \neq 0\), while \(g(0, 0) = 0\). The origin is neither a local minimum nor a local maximum.

  For \(h\): \(h \ge 0\) because it is a square, and \(h(0, 0) = 0\), so the origin is a local minimum. It is not strict, because \(h = 0\) on the lines \(y = x\) and \(y = -x\).

  c) The first component of \(\nabla h\) vanishes when \(x = 0\) or \(y = \pm x\), and the second vanishes when \(y = 0\) or \(y = \pm x\). Every point of the two lines \(y = x\) and \(y = -x\) satisfies both. If \(x = 0\) and the second condition holds, then \(y = 0\) or \(y = \pm x\), which gives the origin again. The critical points are all points of the lines \(y = x\) and \(y = -x\). Each is a minimum, with value \(0\).
provenance: written-for-site
steps:
  - Gradients, and all second derivatives equal to \(0\) at the origin, so \(D = 0\) for all three.
  - \(f\) has a strict minimum, because \(x^4 + y^4 > 0\) away from the origin.
  - \(g\) changes sign along the axes, so the origin is neither a minimum nor a maximum.
  - \(h\) is a square, so it has a non-strict minimum, and its critical set is the two lines \(y = \pm x\).
verification:
  checks:
    - expr: 'Tuple(diff(x**4+y**4, x), diff(x**4+y**4, y))'
      expected: 'Tuple(4*x**3, 4*y**3)'
    - expr: 'Tuple(diff(x**4-y**4, x), diff(x**4-y**4, y))'
      expected: 'Tuple(4*x**3, -4*y**3)'
    - expr: 'Tuple(diff((x**2-y**2)**2, x), diff((x**2-y**2)**2, y))'
      expected: 'Tuple(4*x*(x**2-y**2), 4*y*(y**2-x**2))'
    - expr: '(diff(x**4+y**4, x, 2)*diff(x**4+y**4, y, 2) - diff(x**4+y**4, x, y)**2).subs({x: 0, y: 0})'
      expected: '0'
    - expr: '(diff(x**4-y**4, x, 2)*diff(x**4-y**4, y, 2) - diff(x**4-y**4, x, y)**2).subs({x: 0, y: 0})'
      expected: '0'
    - expr: '(diff((x**2-y**2)**2, x, 2)*diff((x**2-y**2)**2, y, 2) - diff((x**2-y**2)**2, x, y)**2).subs({x: 0, y: 0})'
      expected: '0'
    - expr: 'Tuple(diff((x**2-y**2)**2, x, 2), diff((x**2-y**2)**2, x, y), diff((x**2-y**2)**2, y, 2))'
      expected: 'Tuple(12*x**2-4*y**2, -8*x*y, 12*y**2-4*x**2)'
    - expr: 'Tuple(diff(x**4-y**4, x, 2), diff(x**4-y**4, x, y), diff(x**4-y**4, y, 2))'
      expected: 'Tuple(12*x**2, 0, -12*y**2)'
    - expr: 'Tuple(diff((x**2-y**2)**2, x), diff((x**2-y**2)**2, y)).subs(y, x)'
      expected: 'Tuple(0, 0)'
    - expr: 'Tuple(diff((x**2-y**2)**2, x), diff((x**2-y**2)**2, y)).subs(y, -x)'
      expected: 'Tuple(0, 0)'
:::
