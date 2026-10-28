---
id: l6-critical-points
lecture: 6
order: 1
title: Critical points
prerequisites: [l5-partial-derivatives]
sources:
  - { source: handout, section: "14.7", page: 373 }
  - { source: lecture-notes-5, page: 4 }
  - { source: sheet-2, page: 2 }
  - { source: final-2021, page: 1 }
  - { source: final-2022, page: 6 }
  - { source: home-assignment-2022, page: 1 }
  - { source: mock-exam-2, page: 1 }
examWeight: high
examWeightNote: Critical points carry 20% of the two recent finals. Placement in this lecture is provisional until the lecture has taken place. The formal statements follow the handout until the lecture 6 notes arrive.
status: reviewed
notation: |
  \(f_x\) is the partial derivative of \(f\) with respect to \(x\), and \(f_y\) is the partial derivative with respect to \(y\). The symbols \(f_x\) and \(\partial f/\partial x\) are the same partial. The gradient is \(\nabla f = (f_x, f_y)\). The Hessian matrix is
  \[
  H_f = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{pmatrix},
  \]
  and \(D = \det H_f = f_{xx} f_{yy} - (f_{xy})^2\). The next node uses \(D\) to classify a critical point.
---

::: section
title: Critical point
:::

::: formal-statement
kind: definition
title: Critical point
source:
  source: handout
  section: "14.7"
  page: 373
text: |
  Let \(f(x, y)\) be defined near \((x_0, y_0)\), with both partial derivatives existing at that point. The point \((x_0, y_0)\) is a **critical point** of \(f\) when
  \[
  f_x(x_0, y_0) = 0 \quad \text{and} \quad f_y(x_0, y_0) = 0.
  \]
  In gradient form, \(\nabla f(x_0, y_0) = (0, 0)\).
:::

::: plain-explanation
text: |
  A critical point is a point where the surface has a horizontal tangent in the \(x\) direction and a horizontal tangent in the \(y\) direction. To find the critical points:

  1. Compute \(f_x\) and \(f_y\).
  2. Solve the two equations together. Every factor of a factored equation is a separate case.
:::

::: visual
kind: tangent-plane
caption: |
  This is a model case with the fixed surface \(z = x^2 + y^2\), whose partial derivatives \(2x\) and \(2y\) both vanish only at the origin. At \(x_0 = 0\) and \(y_0 = 0\) the tangent plane is the horizontal plane \(Z = 0\), and moving either slider away from \(0\) tilts the plane.
params:
  x0: 0
  y0: 0
:::

::: worked-example
title: A factored system
problem: |
  Find the critical points of \(f(x, y) = x^2 y + x^2 - 2y\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=2xy+2x=2x(y+1),\\
  f_y&=x^2-2.
  \end{aligned}
  \]

  From \(f_x = 0\), either \(x = 0\) or \(y = -1\).

  - If \(x = 0\), then \(f_y = -2\), which is not zero. That branch has no critical point.
  - If \(y = -1\), then \(x^2 - 2 = 0\), so \(x = \sqrt{2}\) or \(x = -\sqrt{2}\).

  The critical points are \((\sqrt{2}, -1)\) and \((-\sqrt{2}, -1)\).
:::

::: guided-example
title: One linear system
problem: |
  Find the critical points of \(f(x, y) = x^2 + 4xy + y^2 - 2x\).
steps:
  - |
    The partial derivatives are \(f_x = 2x + 4y - 2\) and \(f_y = 4x + 2y\).
  - |
    From \(f_y = 0\), \(2y = -4x\), so \(y = -2x\).
  - |
    Substitute \(y = -2x\) into \(f_x = 0\):
    \[
    \begin{aligned}
    2x+4(-2x)-2&=-6x-2=0,\\
    x&=-1/3.
    \end{aligned}
    \]
    Hence \(y = 2/3\).
  - |
    The only critical point is \((-1/3, 2/3)\). The second derivative test, on the next node, decides its kind.
:::

::: trap
text: |
  A factored equation contributes one case per factor. Take \(f(x, y) = xy^2 - x\). Then
  \[
  \begin{aligned}
  f_x&=y^2-1,\\
  f_y&=2xy.
  \end{aligned}
  \]
  The equation \(f_y = 0\) holds when \(x = 0\) and when \(y = 0\).

  Keeping only \(y = 0\) gives \(f_x = -1\), which is never zero, so that branch has no critical point. The branch \(x = 0\) gives \(y^2 = 1\), so \((0, 1)\) and \((0, -1)\) are critical points. Both factors have to be checked.
:::

::: trap
text: |
  A point where only one partial derivative is zero is not a critical point. For \(f(x, y) = x^2 + y\), the partial derivatives are
  \[
  \begin{aligned}
  f_x&=2x,\\
  f_y&=1.
  \end{aligned}
  \]
  Then \(f_x = 0\) at \(x = 0\), and \(f_y\) is never zero. This function has no critical point.
:::

::: key-points
text: |
  - A point \((x_0, y_0)\) is a critical point of \(f\) when \(f_x(x_0, y_0) = 0\) and \(f_y(x_0, y_0) = 0\), which is \(\nabla f(x_0, y_0) = (0, 0)\).
  - To find the critical points, compute \(f_x\) and \(f_y\), then solve \(f_x = 0\) and \(f_y = 0\) together. Every factor of a factored equation is a separate case.
  - The usual slip keeps one factor of a factored equation. For \(f(x, y) = xy^2 - x\), the equation \(f_y = 2xy = 0\) splits into \(x = 0\) and \(y = 0\). Keeping only \(y = 0\) gives \(f_x = -1\) and no critical point. The branch \(x = 0\) also has to be checked, and it gives the critical points \((0, 1)\) and \((0, -1)\).
  - Another slip calls a point critical when only one partial derivative is zero. For \(f(x, y) = x^2 + y\), \(f_x = 0\) at \(x = 0\), but \(f_y = 1\) is never zero. Both partial derivatives have to be zero, so this function has no critical point.
:::

::: concept-question
id: l6-critical-points.q-ff079a93
question: |
  For \(f(x, y) = x^2 + 3y^2\), which point is a critical point?
options:
  - text: The origin.
    correct: true
  - text: The point \((1, 0)\).
  - text: The point \((0, 1)\).
  - text: The point \((1, 1)\).
explanation: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=2x,\\
  f_y&=6y.
  \end{aligned}
  \]
  Both vanish only at \((0, 0)\).
:::

::: concept-question
id: l6-critical-points.q-58e4c1d2
question: |
  The critical points of \(f(x, y) = (y - x)^2\) are which set?
options:
  - text: Only the origin.
  - text: Every point of the line \(y = x\).
    correct: true
  - text: There are no critical points.
explanation: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=2(x-y),\\
  f_y&=2(y-x).
  \end{aligned}
  \]
  Both are zero exactly when \(y = x\). The critical set is that whole line.
:::

::: concept-question
id: l6-critical-points.q-27986b7c
question: |
  Both partial derivatives of \(f\) vanish at the point \(P\). Which statement is guaranteed?
options:
  - text: \(P\) is a local maximum or a local minimum of \(f\).
  - text: \(P\) is a candidate that still has to be tested.
    correct: true
  - text: \(P\) is a saddle point.
  - text: \(f\) is constant near \(P\).
explanation: |
  Both partial derivatives of \(x^2 + y^2\) and of \(x^2 - y^2\) vanish at the origin. The first function has a minimum there and the second has a saddle point. A critical point alone does not fix the kind of point, so it has to be tested.
:::

::: exercise
id: l6-critical-points.basic-one-point
tier: basic
topics: [critical-points]
statement: |
  Find all critical points of \(f(x, y) = x^2 + y^2 - 6x + 4y\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=2x-6,\\
  f_y&=2y+4.
  \end{aligned}
  \]
  They vanish at \(x = 3\) and \(y = -2\). The only critical point is \((3, -2)\).
provenance: written-for-site
steps:
  - The partial derivatives \(f_x = 2x - 6\) and \(f_y = 2y + 4\).
  - The only critical point \((3, -2)\).
verification:
  checks:
    - expr: "Tuple(solve([diff(x**2 + y**2 - 6*x + 4*y, x), diff(x**2 + y**2 - 6*x + 4*y, y)], [x, y])[x], solve([diff(x**2 + y**2 - 6*x + 4*y, x), diff(x**2 + y**2 - 6*x + 4*y, y)], [x, y])[y])"
      expected: "Tuple(3, -2)"
    - expr: "Tuple(diff(x**2 + y**2 - 6*x + 4*y, x).subs({x: 3, y: -2}), diff(x**2 + y**2 - 6*x + 4*y, y).subs({x: 3, y: -2}))"
      expected: "Tuple(0, 0)"
:::

::: section
title: A local extremum is a critical point
:::

::: formal-statement
kind: theorem
title: A local extremum is a critical point
source:
  source: handout
  section: "14.7"
  page: 373
text: |
  If \(f\) has a local maximum or a local minimum at \((x_0, y_0)\), and \(f_x\) and \(f_y\) exist at that point, then
  \[
  f_x(x_0, y_0) = f_y(x_0, y_0) = 0.
  \]
  A point where both partial derivatives vanish still has to be tested. Both partials can vanish at a point that is neither a maximum nor a minimum.
:::

::: plain-explanation
text: |
  An interior peak or an interior bowl has those two horizontal tangents, so it is a critical point. The two equations can also hold at a point that is neither a maximum nor a minimum. Finding the critical points is the first step. Classifying them comes next.
:::

::: visual
kind: critical-point-viewer
caption: |
  The family is \(f = x^2 + y^2 + kxy\). The label comes from \(D\) and \(f_{xx}\).
params:
  k: 0
:::

::: going-deeper
title: Points where the partial derivatives do not exist
text: |
  A local extremum can occur where a partial derivative fails to exist. The cone \(f(x, y) = \sqrt{x^2 + y^2}\) has its lowest point at the origin, yet \(f_x\) and \(f_y\) do not exist there, because \(|x|\) and \(|y|\) have corners. The condition \(f_x = f_y = 0\) finds the candidates among smooth points. A full search also checks the points where a partial derivative is undefined.
:::

::: key-points
text: |
  - If \(f\) has a local maximum or a local minimum at \((x_0, y_0)\), and \(f_x\) and \(f_y\) exist at that point, then \(f_x(x_0, y_0) = f_y(x_0, y_0) = 0\). So the point is a critical point.
  - The usual slip reads every critical point as a local maximum or a local minimum. Both partial derivatives can vanish at a point that is neither, so a critical point still has to be tested.
:::

::: concept-question
id: l6-critical-points.q-067fc1bf
question: |
  The function \(f\) has a local maximum at \((1, 3)\), and both partial derivatives exist there. Which statement follows?
options:
  - text: \(f_x(1, 3) = 0\) and \(f_y(1, 3) = 0\).
    correct: true
  - text: \(f_x(1, 3) = 0\), and \(f_y(1, 3)\) may be nonzero.
  - text: The point \((1, 3)\) cannot be a critical point.
explanation: |
  A local maximum at which both partial derivatives exist is a critical point, so both partial derivatives are zero.
:::

::: exercise
id: l6-critical-points.standard-branches
tier: standard
topics: [critical-points]
statement: |
  Find all critical points of \(f(x, y) = x^3 + xy^2 - x\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=3x^2+y^2-1,\\
  f_y&=2xy.
  \end{aligned}
  \]

  From \(f_y = 0\), either \(x = 0\) or \(y = 0\).

  - If \(x = 0\), then \(y^2 - 1 = 0\), so \(y = 1\) or \(y = -1\). The points are \((0, 1)\) and \((0, -1)\).
  - If \(y = 0\), then \(3x^2 - 1 = 0\), so \(x = \sqrt{3}/3\) or \(x = -\sqrt{3}/3\). The points are \((\sqrt{3}/3, 0)\) and \((-\sqrt{3}/3, 0)\).

  These four points are the full list of critical points.
provenance: written-for-site
steps:
  - The partial derivatives \(f_x = 3x^2 + y^2 - 1\) and \(f_y = 2xy\).
  - The branch \(x = 0\), giving \((0, 1)\) and \((0, -1)\).
  - The branch \(y = 0\), giving \((\sqrt{3}/3, 0)\) and \((-\sqrt{3}/3, 0)\).
verification:
  checks:
    - expr: "solve([diff(x**3 + x*y**2 - x, x), diff(x**3 + x*y**2 - x, y)], [x, y])"
      expected: "[(0, -1), (0, 1), (-sqrt(3)/3, 0), (sqrt(3)/3, 0)]"
    - expr: "Tuple(diff(x**3 + x*y**2 - x, x).subs({x: 0, y: 1}), diff(x**3 + x*y**2 - x, y).subs({x: 0, y: 1}))"
      expected: "Tuple(0, 0)"
:::

::: exercise
id: l6-critical-points.final-2021-q3
tier: exam
topics: [critical-points]
examBlock: critical-points
pastExam:
  year: 2021
  paper: Final
  question: "3"
  points: 1
statement: |
  Find all critical points of \(f(x, y) = 2x^3 + x y^2 + 5x^2 + y^2\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=6x^2+y^2+10x,\\
  f_y&=2xy+2y=2y(x+1).
  \end{aligned}
  \]

  From \(f_y = 0\), either \(y = 0\) or \(x = -1\).

  - If \(y = 0\), then \(2x(3x + 5) = 0\), so \(x = 0\) or \(x = -5/3\).
  - If \(x = -1\), then \(y^2 - 4 = 0\), so \(y = 2\) or \(y = -2\).

  The critical points are \((0, 0)\), \((-5/3, 0)\), \((-1, 2)\) and \((-1, -2)\).
provenance: official-key
steps:
  - Partial derivatives \(f_x = 6x^2 + y^2 + 10x\) and \(f_y = 2y(x + 1)\).
  - The four critical points.
verification:
  checks:
    - expr: 'solve([diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x), diff(2*x**3 + x*y**2 + 5*x**2 + y**2, y)], [x, y])'
      expected: '[(-5/3, 0), (-1, -2), (-1, 2), (0, 0)]'
:::

::: exercise
id: l6-critical-points.final-2022-q5a
tier: exam
topics: [critical-points]
examBlock: critical-points
pastExam:
  year: 2022
  paper: Final
  question: "5a"
  points: 1
statement: |
  Find all the critical points of \(f(x, y) = (x^2 + y^2 - 1)^2\) and draw them in the \(xy\)-plane.
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=4x(x^2+y^2-1),\\
  f_y&=4y(x^2+y^2-1).
  \end{aligned}
  \]

  Both vanish in two cases:

  - \(x^2 + y^2 - 1 = 0\).
  - \(x = 0\) and \(y = 0\).

  Those are the only cases: if the common factor \(x^2 + y^2 - 1\) is nonzero, then \(x = 0\) and \(y = 0\).

  The critical points are the origin and the unit circle \(x^2 + y^2 = 1\). In the plane, mark a point at the origin and draw the circle of radius 1 about the origin.
provenance: official-key
steps:
  - Partial derivatives factored as \(4x(x^2 + y^2 - 1)\) and \(4y(x^2 + y^2 - 1)\).
  - The origin and the unit circle, with the drawing named.
verification:
  checks:
    - expr: 'diff((x**2 + y**2 - 1)**2, x) - 4*x*(x**2 + y**2 - 1)'
      expected: 0
    - expr: 'diff((x**2 + y**2 - 1)**2, y) - 4*y*(x**2 + y**2 - 1)'
      expected: 0
:::

::: exercise
id: l6-critical-points.home-2022-q2-3
number: "Home assignment 2022, exercise 2.3"
tier: standard
topics: [critical-points]
statement: |
  Let \(\varphi(t) = f(x_0 + at, y_0 + bt)\), where \((a, b)\) is a unit vector. Suppose \((x_0, y_0)\) is a maximum or a minimum of \(f\), so \(\varphi'(0) = 0\) for every such unit vector. Deduce that \(\nabla f(x_0, y_0) = 0\). A point where the gradient vanishes is a critical point of \(f\).
solution: |
  The chain rule gives
  \[
  \begin{aligned}
  \varphi'(0)&=\nabla f(x_0, y_0) \cdot (a, b),\\
  &=a f_x(x_0, y_0)+b f_y(x_0, y_0).
  \end{aligned}
  \]
  This is zero for every unit vector \((a, b)\). The unit vector \((1, 0)\) forces \(f_x(x_0, y_0) = 0\), and the unit vector \((0, 1)\) forces \(f_y(x_0, y_0) = 0\). So \(\nabla f(x_0, y_0) = 0\). That vanishing gradient is the definition of a critical point.
provenance: official-key
steps:
  - The directional derivative equals \(a f_x + b f_y\).
  - The two unit vectors \((1, 0)\) and \((0, 1)\) give both partial derivatives.
  - The gradient is zero, which is the definition of a critical point.
verification:
  checks:
    - expr: '(a*fx + b*fy) - Matrix([fx, fy]).dot(Matrix([a, b]))'
      expected: 0
    - expr: '(a*fx + b*fy).subs({a: 1, b: 0}) - fx'
      expected: 0
    - expr: '(a*fx + b*fy).subs({a: 0, b: 1}) - fy'
      expected: 0
:::

::: sheet-item
id: l6-critical-points.sheet-critical
category: recognition
text: |
  A point where both partial derivatives are zero is a critical point. The Hessian test, including the \(D = 0\) case, comes next.
:::

::: sheet-item
id: l6-critical-points.sheet-equations
category: formula
text: |
  A local maximum or a local minimum, at a point where both partial derivatives exist, satisfies \(f_x = 0\) and \(f_y = 0\).
:::

::: exercise
id: l6-critical-points.ex-hyperbola-critical-set
tier: exam
topics: [critical-points, second-derivative-test, degenerate-case]
statement: |
  Let \(f(x, y) = x^2 y^2 - 2xy\).

  a) Find all critical points of \(f\).

  b) Compute \(D\) at each kind of critical point.

  c) Give the kind of each critical point, with an explanation.
solution: |
  ### a) Critical points

  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=2xy^2-2y=2y(xy-1),\\
  f_y&=2x^2y-2x=2x(xy-1).
  \end{aligned}
  \]
  Both vanish when \(xy = 1\). If \(xy \neq 1\), then \(y = 0\) and \(x = 0\). The critical points are the origin and every point of the hyperbola \(xy = 1\).

  ### b) Second derivatives and D

  The second derivatives are
  \[
  \begin{aligned}
  f_{xx}&=2y^2,\\
  f_{xy}&=4xy-2,\\
  f_{yy}&=2x^2.
  \end{aligned}
  \]

  At the origin, \(f_{xx} = f_{yy} = 0\) and \(f_{xy} = -2\), so \(D = -4\).

  On the hyperbola, \(f_{xy} = 4 - 2 = 2\), and \(D = 4x^2y^2 - 4 = 4 - 4 = 0\).

  ### c) Kind of each point

  At the origin, \(D = -4 < 0\), so the origin is a saddle point.

  On the hyperbola \(D = 0\) and the test says nothing. Complete the square:
  \[
  f = (xy - 1)^2 - 1 \ge -1,
  \]
  with equality exactly when \(xy = 1\). So \(f = -1\) at every point of the hyperbola, and \(f\) is larger elsewhere. Every point of the hyperbola is a global minimum, and the minimum is not isolated.
provenance: written-for-site
steps:
  - The factored partials \(2y(xy - 1)\) and \(2x(xy - 1)\), and the critical set (the origin and the hyperbola \(xy = 1\)).
  - \(D = -4\) at the origin and \(D = 0\) on the hyperbola.
  - The origin is a saddle point.
  - The completed square \(f = (xy - 1)^2 - 1\) shows the hyperbola is a line of global minima.
verification:
  checks:
    - expr: 'x**2*y**2 - 2*x*y - ((x*y-1)**2 - 1)'
      expected: '0'
    - expr: 'Tuple(diff(x**2*y**2-2*x*y, x), diff(x**2*y**2-2*x*y, y))'
      expected: 'Tuple(2*y*(x*y-1), 2*x*(x*y-1))'
    - expr: 'Tuple(diff(x**2*y**2-2*x*y, x, 2), diff(x**2*y**2-2*x*y, x, y), diff(x**2*y**2-2*x*y, y, 2))'
      expected: 'Tuple(2*y**2, 4*x*y-2, 2*x**2)'
    - expr: '(diff(x**2*y**2-2*x*y, x, 2)*diff(x**2*y**2-2*x*y, y, 2) - diff(x**2*y**2-2*x*y, x, y)**2).subs({x: 0, y: 0})'
      expected: '-4'
    - expr: '(diff(x**2*y**2-2*x*y, x, 2)*diff(x**2*y**2-2*x*y, y, 2) - diff(x**2*y**2-2*x*y, x, y)**2).subs(y, 1/x)'
      expected: '0'
    - expr: '(x**2*y**2-2*x*y).subs(y, 1/x)'
      expected: '-1'
:::
