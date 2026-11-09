---
id: l6-second-derivative-test
lecture: 6
order: 2
title: The second derivative test
prerequisites: [l6-critical-points, l5-hessian]
sources:
  - { source: handout, section: "14.7", page: 373 }
  - { source: lecture-notes-5, page: 4 }
  - { source: sheet-2, page: 2 }
  - { source: final-2024, page: 1 }
  - { source: final-2025, page: 1 }
  - { source: final-2022, page: "4-6" }
  - { source: mock-2022, page: 1 }
  - { source: retake-2023, page: 1 }
  - { source: home-assignment-2022, page: "1-2" }
  - { source: mock-exam-2, page: 1 }
examWeight: high
examWeightNote: Critical points carry 20% of the two recent finals. Placement in this lecture is provisional until the lecture has taken place. The formal statements follow the handout until the lecture 6 notes arrive.
taught: lecture
status: reviewed
notation: |
  \(f_x\) and \(\partial f/\partial x\) are the same partial derivative. The second partials are \(f_{xx}\), \(f_{yy}\) and \(f_{xy}\). The Hessian matrix is
  \[
  H_f = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{pmatrix},
  \]
  and the discriminant is \(D = \det H_f = f_{xx} f_{yy} - (f_{xy})^2\).
---

::: formal-statement
kind: theorem
title: Second derivative test
source:
  source: handout
  section: "14.7"
  page: 373
text: |
  Suppose the second partial derivatives of \(f\) are continuous near \((x_0, y_0)\), and \((x_0, y_0)\) is a **critical point**, so \(f_x(x_0, y_0) = f_y(x_0, y_0) = 0\). The **discriminant** is
  \[
  \begin{aligned}
  D(x_0, y_0) &= \det H_f(x_0, y_0)\\
  &= f_{xx}(x_0, y_0)\, f_{yy}(x_0, y_0)\\
  &\quad - \bigl(f_{xy}(x_0, y_0)\bigr)^2.
  \end{aligned}
  \]

  - If \(D > 0\) and \(f_{xx}(x_0, y_0) > 0\), then \(f\) has a local minimum at \((x_0, y_0)\).
  - If \(D > 0\) and \(f_{xx}(x_0, y_0) < 0\), then \(f\) has a local maximum at \((x_0, y_0)\).
  - If \(D < 0\), then \(f\) has neither a local maximum nor a local minimum at \((x_0, y_0)\). The point is a saddle point.
  - If \(D = 0\), the test fails.
:::

::: plain-explanation
text: |
  \(D\) compares the pure second derivatives with the mixed one:

  - When \(D > 0\), the product \(f_{xx} f_{yy}\) is positive, so \(f_{xx}\) and \(f_{yy}\) are nonzero and share a sign. If that sign is positive, the critical point is a local minimum. If that sign is negative, the critical point is a local maximum.
  - When \(D < 0\), the surface rises along one line through the point and falls along another, and the point is a **saddle**.
  - When \(D = 0\), the test stops.
:::

::: visual
kind: critical-point-viewer
caption: |
  The family is \(f = x^2 + y^2 + kxy\), with a critical point at the origin. Here \(D = 4 - k^2\) and \(f_{xx} = 2\). Move \(k\) across \(2\) and \(-2\) to see the label change from minimum to inconclusive to saddle.
params:
  k: 1
:::

::: worked-example
title: A local minimum
problem: |
  Find and classify the critical points of \(f(x, y) = x^2 + y^2\).
solution: |
  The partial derivatives are \(f_x = 2x\) and \(f_y = 2y\). Both vanish only at the origin, so \((0, 0)\) is the only critical point.

  The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 2\) and \(f_{xy} = 0\). The discriminant at the origin is
  \[
  D = 2 \cdot 2 - 0^2 = 4.
  \]
  \(D > 0\) and \(f_{xx} > 0\), so the origin is a local minimum.

  The value \(f(x, y) = x^2 + y^2\) is at least 0, and it equals 0 only at the origin, so the local minimum is also the global minimum.
:::

::: guided-example
title: A minimum and a saddle
problem: |
  Find and classify the critical points of \(f(x, y) = x^2 - 4x + y^3 - 12y\).
steps:
  - |
    The partial derivatives are \(f_x = 2x - 4\) and \(f_y = 3y^2 - 12\).
  - |
    \(f_x = 0\) gives \(x = 2\). \(f_y = 0\) gives \(y^2 = 4\), so \(y = 2\) or \(y = -2\). The critical points are \((2, 2)\) and \((2, -2)\).
  - |
    The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 6y\) and \(f_{xy} = 0\), so \(D = 12y\).
  - |
    - At \((2, 2)\), \(D = 24 > 0\) and \(f_{xx} = 2 > 0\), so the point is a local minimum.
    - At \((2, -2)\), \(D = -24 < 0\), so the point is a saddle point.
:::

::: trap
text: |
  The sign of \(f_{xx}\) chooses between a local minimum and a local maximum only after \(D > 0\). Consider \(f(x, y) = x^2 - y^2\). The partial derivatives are \(f_x = 2x\) and \(f_y = -2y\), so the only critical point is the origin. The second derivatives are \(f_{xx} = 2\), \(f_{yy} = -2\) and \(f_{xy} = 0\), so
  \[
  D = 2 \cdot (-2) - 0^2 = -4.
  \]
  \(D\) is negative, so the origin is a saddle point. The slice \(f(x, 0) = x^2\) lies above \(f(0, 0)\), and the slice \(f(0, y) = -y^2\) lies below \(f(0, 0)\). A rule that looked only at \(f_{xx} = 2 > 0\) would call the origin a local minimum. That rule fails here, because \(D < 0\) and the two slices have opposite signs.
:::

::: trap
text: |
  For \(f(x, y) = x^3 + y^3\), the first partials are \(f_x = 3x^2\) and \(f_y = 3y^2\). Differentiating again gives
  \[
  f_{xx} = 6x,\qquad f_{yy} = 6y,\qquad f_{xy} = 0.
  \]
  The formulas \(f_{xx} = 6x^2\) and \(f_{yy} = 6y^2\) disagree with those derivatives:

  - At \((2, 0)\), \(f_{xx}\) equals 12 and \(6x^2\) equals 24.
  - At the origin, \(6x = 0\) and \(6x^2 = 0\), and the same holds for \(y\), so both formulas give \(D = 0\). The discriminant at the origin is the same for both formulas.
:::

::: trap
text: |
  Let \((x_0, y_0)\) be a critical point with \(f_{xx}(x_0, y_0) \neq 0\), and set \(D = f_{xx} f_{yy} - (f_{xy})^2\), with every second derivative evaluated at \((x_0, y_0)\). Write \(\varphi(t) = f(x_0 + at, y_0 + bt)\). Completing the square gives
  \[
  \varphi''(0) = f_{xx}\left(a + b\frac{f_{xy}}{f_{xx}}\right)^2 + \frac{b^2 D}{f_{xx}}.
  \]
  When \(D = 0\), the second term is 0. The square is 0 for every pair \((a, b)\) on the line \(a f_{xx} + b f_{xy} = 0\). Along that line, \(\varphi''(0) = 0\). The second derivative test stops when \(D = 0\). A positive \(f_{xx}\) does not by itself make \((x_0, y_0)\) a local minimum.
:::

::: key-points
text: |
  - At a critical point of \(f\) with continuous second partial derivatives, \(D > 0\) and \(f_{xx} > 0\) give a local minimum, and \(D > 0\) and \(f_{xx} < 0\) give a local maximum.
  - \(D < 0\) makes the point a saddle point, and \(D = 0\) makes the test fail.
  - The usual slip calls the origin of \(f(x, y) = x^2 - y^2\) a local minimum because \(f_{xx} = 2 > 0\). Here \(D = -4 < 0\), so the origin is a saddle point. The sign of \(f_{xx}\) chooses between a local minimum and a local maximum only after \(D > 0\).
  - A second slip calls a critical point with \(D = 0\) and \(f_{xx} > 0\) a local minimum. The test fails when \(D = 0\), and a positive \(f_{xx}\) does not by itself make the point a local minimum.
:::

::: concept-question
id: l6-second-derivative-test.q-4f38b4e1
question: |
  At a critical point, \(D = 8\) and \(f_{xx} = -3\). What kind of point is it?
options:
  - text: A local minimum.
  - text: A local maximum.
    correct: true
  - text: A saddle point.
  - text: The test says nothing.
explanation: |
  \(D > 0\) and \(f_{xx} < 0\), so the point is a local maximum.
:::

::: concept-question
id: l6-second-derivative-test.q-fe20e93a
question: |
  At a critical point, \(D = -6\) and \(f_{xx} = 4\). What kind of point is it?
options:
  - text: A local minimum.
  - text: A local maximum.
  - text: A saddle point.
    correct: true
  - text: The test says nothing.
explanation: |
  \(D < 0\), so the point is a saddle point. The sign of \(f_{xx}\) is used when \(D > 0\).
:::

::: concept-question
id: l6-second-derivative-test.q-71f02582
question: |
  At a critical point, \(D = 3\) and \(f_{yy} = -5\). What kind of point is it?
options:
  - text: A local minimum.
  - text: A local maximum.
    correct: true
  - text: A saddle point.
  - text: The test says nothing.
explanation: |
  \(D > 0\), so
  \[
  f_{xx} f_{yy} = D + (f_{xy})^2 > 0.
  \]
  Then \(f_{xx}\) and \(f_{yy}\) are nonzero and have the same sign. Here \(f_{yy} < 0\), so \(f_{xx} < 0\), and the point is a local maximum.
:::

::: exercise
id: l6-second-derivative-test.handout-14.7.4
number: "14.7.4 (sheet 2 exercise 7.4)"
tier: basic
topics: [critical-points, second-derivative-test]
statement: |
  Find all local maximum and minimum points of \(f(x, y) = 9 + 4x - y - 2x^2 - 3y^2\).
solution: |
  The partial derivatives are \(f_x = 4 - 4x\) and \(f_y = -1 - 6y\). They vanish at \(x = 1\) and \(y = -1/6\), so the only critical point is \((1, -1/6)\).

  The second derivatives are \(f_{xx} = -4\), \(f_{yy} = -6\) and \(f_{xy} = 0\), so
  \[
  D = (-4)(-6) - 0^2 = 24.
  \]

  \(D > 0\) and \(f_{xx} < 0\), so \((1, -1/6)\) is a local maximum. The value there is \(f(1, -1/6) = 133/12\).
provenance: handout-answer
steps:
  - The only critical point is \((1, -1/6)\).
  - \(D = 24 > 0\) and \(f_{xx} = -4 < 0\), so a local maximum.
verification:
  checks:
    - expr: "Tuple(solve([diff(9 + 4*x - y - 2*x**2 - 3*y**2, x), diff(9 + 4*x - y - 2*x**2 - 3*y**2, y)], [x, y])[x], solve([diff(9 + 4*x - y - 2*x**2 - 3*y**2, x), diff(9 + 4*x - y - 2*x**2 - 3*y**2, y)], [x, y])[y])"
      expected: "Tuple(1, -Rational(1, 6))"
    - expr: "(diff(9 + 4*x - y - 2*x**2 - 3*y**2, x, 2)*diff(9 + 4*x - y - 2*x**2 - 3*y**2, y, 2) - diff(9 + 4*x - y - 2*x**2 - 3*y**2, x, y)**2)"
      expected: "24"
    - expr: "diff(9 + 4*x - y - 2*x**2 - 3*y**2, x, 2)"
      expected: "-4"
    - expr: "(9 + 4*x - y - 2*x**2 - 3*y**2).subs({x: 1, y: -Rational(1, 6)})"
      expected: "Rational(133, 12)"
:::

::: exercise
id: l6-second-derivative-test.handout-14.7.2
number: "14.7.2 (sheet 2 exercise 7.2)"
tier: standard
topics: [critical-points, second-derivative-test]
statement: |
  Find all local maximum and minimum points of \(f(x, y) = x^2 - y^2 + 6x - 10y + 2\).
solution: |
  The partial derivatives are \(f_x = 2x + 6\) and \(f_y = -2y - 10\). They vanish at \(x = -3\) and \(y = -5\), so the only critical point is \((-3, -5)\).

  The second derivatives are \(f_{xx} = 2\), \(f_{yy} = -2\) and \(f_{xy} = 0\), so
  \[
  D = 2 \cdot (-2) - 0^2 = -4.
  \]

  \(D < 0\), so \((-3, -5)\) is a saddle point. There is no local maximum and no local minimum.
provenance: handout-answer
steps:
  - The only critical point is \((-3, -5)\).
  - \(D = -4 < 0\), so a saddle point, and there is no local extremum.
verification:
  checks:
    - expr: "Tuple(solve([diff(x**2 - y**2 + 6*x - 10*y + 2, x), diff(x**2 - y**2 + 6*x - 10*y + 2, y)], [x, y])[x], solve([diff(x**2 - y**2 + 6*x - 10*y + 2, x), diff(x**2 - y**2 + 6*x - 10*y + 2, y)], [x, y])[y])"
      expected: "Tuple(-3, -5)"
    - expr: "(diff(x**2 - y**2 + 6*x - 10*y + 2, x, 2)*diff(x**2 - y**2 + 6*x - 10*y + 2, y, 2) - diff(x**2 - y**2 + 6*x - 10*y + 2, x, y)**2)"
      expected: "-4"
    - expr: "Tuple(diff(x**2 - y**2 + 6*x - 10*y + 2, x).subs({x: -3, y: -5}), diff(x**2 - y**2 + 6*x - 10*y + 2, y).subs({x: -3, y: -5}))"
      expected: "Tuple(0, 0)"
:::

::: exercise
id: l6-second-derivative-test.final-2024-q3a
tier: exam
topics: [critical-points, hessian-test]
examBlock: critical-points
pastExam:
  year: 2024
  paper: Final
  question: "3a"
  points: 2
statement: |
  [4 point. 20min] Find all the critical points of the following functions and give their kind :

  a) \( f(x, y) = x^2 + xy - y^2 + 5x \)
solution: |
  The domain is \( \mathbb{R}^2 \). The gradient is
  \[
  \nabla f=(2x+y+5,\,x-2y).
  \]
  Solving \(\nabla f=0\) gives the only critical point
  \[
  (x,y)=(-2,-1).
  \]

  The second derivatives are \(f_{xx}=2\), \(f_{xy}=1\), and \(f_{yy}=-2\). The Hessian discriminant at the critical point is
  \[
  \begin{aligned}
  D&=f_{xx}f_{yy}-(f_{xy})^2\\
  &=2(-2)-1^2=-5.
  \end{aligned}
  \]
  Since \(D<0\), the critical point \((-2,-1)\) is a saddle point.
provenance: written-for-site
steps:
  - The gradient equations are solved to obtain the only critical point.
  - The second derivatives and Hessian discriminant are computed.
  - The negative discriminant is used to classify the point as a saddle.
verification:
  checks:
    - expr: Tuple(diff(x**2+x*y-y**2+5*x,x),diff(x**2+x*y-y**2+5*x,y))
      expected: "Tuple(2*x+y+5,x-2*y)"
    - expr: Tuple(solve((2*x+y+5,x-2*y),(x,y),dict=True)[0][x],solve((2*x+y+5,x-2*y),(x,y),dict=True)[0][y])
      expected: "Tuple(-2,-1)"
    - expr: Tuple(diff(x**2+x*y-y**2+5*x,x,2),diff(x**2+x*y-y**2+5*x,x,y),diff(x**2+x*y-y**2+5*x,y,2))
      expected: "Tuple(2,1,-2)"
    - expr: diff(x**2+x*y-y**2+5*x,x,2)*diff(x**2+x*y-y**2+5*x,y,2)-diff(x**2+x*y-y**2+5*x,x,y)**2
      expected: "-5"
:::

::: exercise
id: l6-second-derivative-test.final-2025-q3a
tier: exam
topics: [critical-points, hessian-test]
examBlock: critical-points
pastExam:
  year: 2025
  paper: Final
  question: "3a"
  points: 2
statement: |
  [4 point. 20min] Find all the critical points of the following functions and give their kind :

  a) \( f(x,y) = x + xy^2 - x^2 \)
solution: |
  The domain is \( \mathbb{R}^2 \). The gradient is
  \[
  \nabla f=(1+y^2-2x,\,2xy).
  \]
  The equation \(2xy=0\) gives \(x=0\) or \(y=0\). The branch \(x=0\) would require \(1+y^2=0\), which has no real solution. The branch \(y=0\) gives the only critical point
  \[
  (x,y)=\left(\frac12,0\right).
  \]

  The second derivatives are \(f_{xx}=-2\), \(f_{xy}=2y\), and \(f_{yy}=2x\). The Hessian discriminant at the critical point is
  \[
  \begin{aligned}
  D&=f_{xx}f_{yy}-(f_{xy})^2\\
  &=(-2)(1)-0^2=-2.
  \end{aligned}
  \]
  Since \(D<0\), the critical point \((1/2,0)\) is a saddle point.
provenance: written-for-site
steps:
  - The gradient equations are solved over the real numbers.
  - The second derivatives and Hessian discriminant are evaluated.
  - The negative discriminant is used to classify the point as a saddle.
verification:
  checks:
    - expr: Tuple(diff(x+x*y**2-x**2,x),diff(x+x*y**2-x**2,y))
      expected: "Tuple(1+y**2-2*x,2*x*y)"
    - expr: Tuple(diff(x+x*y**2-x**2,x).subs({x:1/2,y:0}),diff(x+x*y**2-x**2,y).subs({x:1/2,y:0}))
      expected: "Tuple(0,0)"
    - expr: Tuple(diff(x+x*y**2-x**2,x,2),diff(x+x*y**2-x**2,x,y),diff(x+x*y**2-x**2,y,2))
      expected: "Tuple(-2,2*y,2*x)"
    - expr: (diff(x+x*y**2-x**2,x,2)*diff(x+x*y**2-x**2,y,2)-diff(x+x*y**2-x**2,x,y)**2).subs({x:1/2,y:0})
      expected: "-2"
:::

::: exercise
id: l6-second-derivative-test.final-2025-q3b
tier: exam
topics: [critical-points, hessian-test]
examBlock: critical-points
pastExam:
  year: 2025
  paper: Final
  question: "3b"
  points: 2
statement: |
  b) \( h(x,y) = x^3 - x^2 y + xy + y^2/2 \)
solution: |
  The domain is \( \mathbb{R}^2 \). The gradient is
  \[
  \nabla h=(3x^2-2xy+y,\,-x^2+x+y).
  \]
  The second equation gives \(y=x^2-x\). Substitution into the first equation gives
  \[
  -x(2x^2-6x+1)=0.
  \]
  Therefore the critical points are
  \[
  \begin{aligned}
  &(0,0),\\
  &\left(\frac{3-\sqrt7}{2},\frac{5-2\sqrt7}{2}\right),\\
  &\left(\frac{3+\sqrt7}{2},\frac{5+2\sqrt7}{2}\right).
  \end{aligned}
  \]

  The second derivatives are
  \[
  \begin{aligned}
  h_{xx}&=6x-2y,\\
  h_{xy}&=1-2x,\\
  h_{yy}&=1.
  \end{aligned}
  \]
  At \((0,0)\), the Hessian discriminant is \(D=-1\), so this point is a saddle point.

  At the critical point with the minus signs, the discriminant and first diagonal entry are
  \[
  \begin{aligned}
  D&=-7+3\sqrt7>0,\\
  h_{xx}&=4-\sqrt7>0.
  \end{aligned}
  \]
  This point is a strict local minimum.

  At the critical point with the plus signs, the discriminant is
  \[
  D=-7-3\sqrt7<0.
  \]
  This point is a saddle point. Thus the function has one strict local minimum and two saddle points.
provenance: written-for-site
steps:
  - One gradient equation is substituted into the other to find every critical point.
  - The Hessian discriminant is computed at all three points.
  - The discriminant and \(h_{xx}\) are used to classify the points.
verification:
  checks:
    - expr: Tuple(diff(x**3-x**2*y+x*y+y**2/2,x),diff(x**3-x**2*y+x*y+y**2/2,y))
      expected: "Tuple(3*x**2-2*x*y+y,-x**2+x+y)"
    - expr: factor((3*x**2-2*x*y+y).subs(y,x**2-x))
      expected: "-x*(2*x**2-6*x+1)"
    - expr: FiniteSet(*solve(2*x**2-6*x+1,x))
      expected: "FiniteSet((3-sqrt(7))/2,(3+sqrt(7))/2)"
    - expr: Tuple((x**2-x).subs(x,(3-sqrt(7))/2),(x**2-x).subs(x,(3+sqrt(7))/2))
      expected: "Tuple((5-2*sqrt(7))/2,(5+2*sqrt(7))/2)"
    - expr: Tuple(diff(x**3-x**2*y+x*y+y**2/2,x).subs({x:0,y:0}),diff(x**3-x**2*y+x*y+y**2/2,y).subs({x:0,y:0}))
      expected: "Tuple(0,0)"
    - expr: Tuple(diff(x**3-x**2*y+x*y+y**2/2,x,2),diff(x**3-x**2*y+x*y+y**2/2,x,y),diff(x**3-x**2*y+x*y+y**2/2,y,2))
      expected: "Tuple(6*x-2*y,1-2*x,1)"
    - expr: (diff(x**3-x**2*y+x*y+y**2/2,x,2)*diff(x**3-x**2*y+x*y+y**2/2,y,2)-diff(x**3-x**2*y+x*y+y**2/2,x,y)**2).subs({x:0,y:0})
      expected: "-1"
    - expr: (diff(x**3-x**2*y+x*y+y**2/2,x,2)*diff(x**3-x**2*y+x*y+y**2/2,y,2)-diff(x**3-x**2*y+x*y+y**2/2,x,y)**2).subs({x:(3-sqrt(7))/2,y:(5-2*sqrt(7))/2})
      expected: "-7+3*sqrt(7)"
    - expr: diff(x**3-x**2*y+x*y+y**2/2,x,2).subs({x:(3-sqrt(7))/2,y:(5-2*sqrt(7))/2})
      expected: "4-sqrt(7)"
    - expr: (diff(x**3-x**2*y+x*y+y**2/2,x,2)*diff(x**3-x**2*y+x*y+y**2/2,y,2)-diff(x**3-x**2*y+x*y+y**2/2,x,y)**2).subs({x:(3+sqrt(7))/2,y:(5+2*sqrt(7))/2})
      expected: "-7-3*sqrt(7)"
:::

::: exercise
id: l6-second-derivative-test.final-2022-q4
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
pastExam:
  year: 2022
  paper: Final
  question: "4"
  points: 2
statement: |
  Find all critical points of \(f(x, y) = 2x^3 + x y^2 + 5x^2 + \frac{2}{3} y^3\) and give their kind. If the discriminant \(D\) vanishes, consider \(f(0, y)\). Also consider the section \(y = 0\).
solution: |
  The partial derivatives are \(f_x = 6x^2 + y^2 + 10x\) and \(f_y = 2xy + 2y^2 = 2y(x + y)\).

  From \(f_y = 0\), either \(y = 0\) or \(y = -x\).

  - If \(y = 0\), then \(2x(3x + 5) = 0\), so \(x = 0\) or \(x = -5/3\).
  - If \(y = -x\), then \(7x^2 + 10x = 0\), so \(x = 0\) (already found) or \(x = -10/7\).

  The critical points are \((0, 0)\), \((-5/3, 0)\) and \((-10/7, 10/7)\).

  The second derivatives are \(f_{xx} = 12x + 10\), \(f_{yy} = 2x + 4y\) and \(f_{xy} = 2y\), so \(D = (12x + 10)(2x + 4y) - 4y^2\).

  At \((-5/3, 0)\), \(D = 100/3 > 0\) and \(f_{xx} = -10 < 0\), so the point is a local maximum.

  At \((0, 0)\), \(D = 0\).

  - Along \(y = 0\), \(f(x, 0) = x^2(2x + 5)\), which is non-negative for \(x\) near 0.
  - Along \(x = 0\), \(f(0, y) = \frac{2}{3} y^3\), which is positive for \(y > 0\) and negative for \(y < 0\).

  The origin is a saddle point.

  At \((-10/7, 10/7)\), the second derivatives are \(f_{xx} = -50/7\), \(f_{yy} = 20/7\) and \(f_{xy} = 20/7\), so
  \[
  \begin{aligned}
  D &= \left(-\frac{50}{7}\right)\left(\frac{20}{7}\right) - \left(\frac{20}{7}\right)^2\\
  &= -\frac{1400}{49} = -\frac{200}{7}.
  \end{aligned}
  \]
  \(D < 0\), so the point is a saddle point.
provenance: official-key
steps:
  - Partial derivatives and the factorisation of \(f_y\).
  - The three critical points.
  - \(D\) at each point, with the sign of \(f_{xx}\) where \(D > 0\).
  - The sections \(f(0, y)\) and \(y = 0\) where \(D = 0\), and the kind of each point.
verification:
  checks:
    - expr: 'solve([diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x), diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, y)], [x, y])'
      expected: '[(-5/3, 0), (-10/7, 10/7), (0, 0)]'
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x, 2)*diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, y, 2)-diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x, y)**2).subs({x: Rational(-5, 3), y: 0})'
      expected: '100/3'
    - expr: 'diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x, 2).subs({x: Rational(-5, 3), y: 0})'
      expected: -10
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x, 2)*diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, y, 2)-diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x, y)**2).subs({x: 0, y: 0})'
      expected: 0
    - expr: '(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3).subs(x, 0) - (2/3)*y**3'
      expected: 0
    - expr: '(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3).subs(y, 0) - x**2*(2*x + 5)'
      expected: 0
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x, 2)*diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, y, 2)-diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x, y)**2).subs({x: Rational(-10, 7), y: Rational(10, 7)})'
      expected: '-200/7'
:::

::: exercise
id: l6-second-derivative-test.final-2022-q5b
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
pastExam:
  year: 2022
  paper: Final
  question: "5b"
  points: 1
statement: |
  Let \(f(x, y) = (x^2 + y^2 - 1)^2\). The critical points are the origin and the unit circle \(x^2 + y^2 = 1\). Compute \(D\) at each of them.
solution: |
  The second derivatives are \(f_{xx} = 12x^2 + 4y^2 - 4\), \(f_{yy} = 4x^2 + 12y^2 - 4\) and \(f_{xy} = 8xy\).

  At the origin, \(f_{xx} = -4\), \(f_{yy} = -4\) and \(f_{xy} = 0\), so \(D = (-4)(-4) - 0^2 = 16\).

  On the unit circle, \(D = 0\).
provenance: official-key
steps:
  - Second derivatives at the origin, and \(D = 16\).
  - \(D = 0\) on the unit circle.
verification:
  checks:
    - expr: '(diff((x**2 + y**2 - 1)**2, x, 2)*diff((x**2 + y**2 - 1)**2, y, 2)-diff((x**2 + y**2 - 1)**2, x, y)**2).subs({x: 0, y: 0})'
      expected: 16
    - expr: 'diff((x**2 + y**2 - 1)**2, x, 2).subs({x: 0, y: 0})'
      expected: -4
    - expr: '(diff((x**2 + y**2 - 1)**2, x, 2)*diff((x**2 + y**2 - 1)**2, y, 2)-diff((x**2 + y**2 - 1)**2, x, y)**2).subs({x: cos(theta), y: sin(theta)})'
      expected: 0
:::

::: exercise
id: l6-second-derivative-test.mock-2022-q4
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
pastExam:
  year: 2022
  paper: Mock
  question: "4"
  points: 2
statement: |
  Find all critical points of \(f(x, y) = 2x^3 + x y^2 + 5x^2 + y^2\) and give their kind.
solution: |
  The partial derivatives are \(f_x = 6x^2 + y^2 + 10x\) and \(f_y = 2xy + 2y = 2y(x + 1)\).

  From \(f_y = 0\), either \(y = 0\) or \(x = -1\).

  - If \(y = 0\), then \(x = 0\) or \(x = -5/3\).
  - If \(x = -1\), then \(y^2 = 4\).

  The critical points are \((0, 0)\), \((-5/3, 0)\), \((-1, 2)\) and \((-1, -2)\).

  The second derivatives are \(f_{xx} = 12x + 10\), \(f_{yy} = 2x + 2\) and \(f_{xy} = 2y\), so \(D = (12x + 10)(2x + 2) - 4y^2\).

  - At \((0, 0)\), \(D = 20 > 0\) and \(f_{xx} = 10 > 0\), so the point is a local minimum.
  - At \((-5/3, 0)\), \(D = 40/3 > 0\) and \(f_{xx} = -10 < 0\), so the point is a local maximum.
  - At \((-1, 2)\) and at \((-1, -2)\), \(D = -16 < 0\), so both points are saddle points.
provenance: written-for-site
steps:
  - Partial derivatives and the four critical points.
  - \(D\) and the sign of \(f_{xx}\) at each point.
  - The kind of each point.
verification:
  checks:
    - expr: 'solve([diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x), diff(2*x**3 + x*y**2 + 5*x**2 + y**2, y)], [x, y])'
      expected: '[(-5/3, 0), (-1, -2), (-1, 2), (0, 0)]'
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, 2)*diff(2*x**3 + x*y**2 + 5*x**2 + y**2, y, 2)-diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, y)**2).subs({x: 0, y: 0})'
      expected: 20
    - expr: 'diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, 2).subs({x: 0, y: 0})'
      expected: 10
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, 2)*diff(2*x**3 + x*y**2 + 5*x**2 + y**2, y, 2)-diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, y)**2).subs({x: Rational(-5, 3), y: 0})'
      expected: '40/3'
    - expr: 'diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, 2).subs({x: Rational(-5, 3), y: 0})'
      expected: -10
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, 2)*diff(2*x**3 + x*y**2 + 5*x**2 + y**2, y, 2)-diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, y)**2).subs({x: -1, y: 2})'
      expected: -16
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, 2)*diff(2*x**3 + x*y**2 + 5*x**2 + y**2, y, 2)-diff(2*x**3 + x*y**2 + 5*x**2 + y**2, x, y)**2).subs({x: -1, y: -2})'
      expected: -16
:::

::: exercise
id: l6-second-derivative-test.retake-2023-q2
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
pastExam:
  year: 2023
  paper: Retake
  question: "2"
  points: 2
statement: |
  Find all critical points of \(f(x, y) = x^3 + xy + y^2\) and give their kind.
solution: |
  The partial derivatives are \(f_x = 3x^2 + y\) and \(f_y = x + 2y\).

  From \(f_y = 0\), \(x = -2y\). Then \(3(4y^2) + y = y(12y + 1) = 0\), so \(y = 0\) or \(y = -1/12\). The critical points are \((0, 0)\) and \((1/6, -1/12)\).

  The second derivatives are \(f_{xx} = 6x\), \(f_{yy} = 2\) and \(f_{xy} = 1\), so \(D = 12x - 1\).

  - At \((0, 0)\), \(D = -1 < 0\), so the origin is a saddle point.
  - At \((1/6, -1/12)\), \(D = 1 > 0\) and \(f_{xx} = 1 > 0\), so the point is a local minimum.
provenance: written-for-site
steps:
  - Partial derivatives and the two critical points.
  - \(D = 12x - 1\) at each point.
  - Saddle at the origin, local minimum at \((1/6, -1/12)\).
verification:
  checks:
    - expr: 'solve([diff(x**3 + x*y + y**2, x), diff(x**3 + x*y + y**2, y)], [x, y])'
      expected: '[(0, 0), (1/6, -1/12)]'
    - expr: '(diff(x**3 + x*y + y**2, x, 2)*diff(x**3 + x*y + y**2, y, 2)-diff(x**3 + x*y + y**2, x, y)**2).subs({x: 0, y: 0})'
      expected: -1
    - expr: '(diff(x**3 + x*y + y**2, x, 2)*diff(x**3 + x*y + y**2, y, 2)-diff(x**3 + x*y + y**2, x, y)**2).subs({x: Rational(1, 6), y: Rational(-1, 12)})'
      expected: 1
    - expr: 'diff(x**3 + x*y + y**2, x, 2).subs({x: Rational(1, 6), y: Rational(-1, 12)})'
      expected: 1
:::

::: exercise
id: l6-second-derivative-test.home-2022-q2-1
number: "Home assignment 2022, exercise 2.1"
tier: standard
topics: [second-derivative-test]
statement: |
  Let \(\varphi\) be twice differentiable. Recall the second-order Taylor expansion of \(\varphi\) about \(t = 0\), in terms of \(\varphi(0)\), \(\varphi'(0)\) and \(\varphi''(0)\).
solution: |
  The second-order Taylor expansion of \(\varphi\) about \(0\) is
  \[
  \begin{aligned}
  \varphi(t) &= \varphi(0) + \varphi'(0)\, t\\
  &\quad + \frac{1}{2} \varphi''(0)\, t^2 + O(t^3).
  \end{aligned}
  \]
provenance: official-key
steps:
  - The expansion through the \(t^2\) term, with remainder \(O(t^3)\).
verification:
  checkable: false
  reason: |
    The claim is the second-order Taylor formula about 0.
:::

::: exercise
id: l6-second-derivative-test.home-2022-q2-2
number: "Home assignment 2022, exercise 2.2"
tier: standard
topics: [second-derivative-test]
statement: |
  Let \(g(t) = (x_0 + at, y_0 + bt)\) and let \(\varphi(t) = f(g(t))\). Compute \(\varphi'(t)\) by the chain rule. If \((x_0, y_0)\) is a maximum or a minimum of \(f\), what is \(\varphi'(0)\)?
solution: |
  The chain rule gives
  \[
  \begin{aligned}
  \varphi'(t) &= f_x(g(t))\, a + f_y(g(t))\, b\\
  &= \nabla f(g(t)) \cdot (a, b).
  \end{aligned}
  \]
  If \((x_0, y_0)\) is a maximum or a minimum of \(f\), then \(\varphi\) has a maximum or a minimum at \(t = 0\), so \(\varphi'(0) = 0\).
provenance: official-key
steps:
  - \(\varphi'(t) = \nabla f(g(t)) \cdot (a, b)\).
  - \(\varphi'(0) = 0\) at a maximum or a minimum.
verification:
  checks:
    - expr: 'diff(f(x0 + a*t, y0 + b*t), t) - (a*Subs(Derivative(f(xi, y0 + b*t), xi), xi, x0 + a*t) + b*Subs(Derivative(f(x0 + a*t, eta), eta), eta, y0 + b*t))'
      expected: 0
:::

::: exercise
id: l6-second-derivative-test.home-2022-q2-4
number: "Home assignment 2022, exercise 2.4"
tier: standard
topics: [second-derivative-test]
statement: |
  Keep \(g(t) = (x_0 + at, y_0 + bt)\) and \(\varphi(t) = f(g(t))\). The second derivatives of \(f\) are continuous, so Clairaut's theorem gives \(f_{yx} = f_{xy}\). Compute \(\varphi''(t)\). If \((x_0, y_0)\) is a maximum or a minimum of \(f\), what is the sign of \(\varphi''(0)\)?
solution: |
  Differentiating \(\varphi'(t) = a f_x(g(t)) + b f_y(g(t))\) and using \(f_{yx} = f_{xy}\) gives
  \[
  \begin{aligned}
  \varphi''(t) &= a^2 f_{xx}(g(t))\\
  &\quad + 2ab f_{xy}(g(t))\\
  &\quad + b^2 f_{yy}(g(t)).
  \end{aligned}
  \]

  - At a maximum of \(\varphi\), \(\varphi''(0) \le 0\).
  - At a minimum of \(\varphi\), \(\varphi''(0) \ge 0\).
provenance: official-key
steps:
  - The formula for \(\varphi''(t)\) in \(f_{xx}\), \(f_{xy}\) and \(f_{yy}\).
  - \(\varphi''(0) \le 0\) at a maximum, and \(\varphi''(0) \ge 0\) at a minimum.
verification:
  checks:
    - expr: 'diff(((fxx/2)*(X - x0)**2 + fxy*(X - x0)*(Y - y0) + (fyy/2)*(Y - y0)**2 + c*(X - x0)**3).subs({X: x0 + a*t, Y: y0 + b*t}), t, 2).subs(t, 0) - (a**2*fxx + 2*a*b*fxy + b**2*fyy)'
      expected: 0
:::

::: exercise
id: l6-second-derivative-test.home-2022-q2-5
number: "Home assignment 2022, exercise 2.5"
tier: standard
topics: [second-derivative-test]
statement: |
  Suppose \((x_0, y_0)\) is a critical point of \(f\), and let \(\varphi(t) = f(x_0 + at, y_0 + bt)\). Deduce the second-order expansion
  \[
  \begin{aligned}
  \varphi(t) &= f(x_0, y_0)\\
  &\quad + \frac{1}{2}\big(a^2 f_{xx} + 2ab f_{xy} + b^2 f_{yy}\big) t^2\\
  &\quad + O(t^3),
  \end{aligned}
  \]
  with the second derivatives evaluated at \((x_0, y_0)\).
solution: |
  The Taylor formula is \(\varphi(t) = \varphi(0) + \varphi'(0)\, t + \frac{1}{2}\varphi''(0)\, t^2 + O(t^3)\).

  Here:

  - \(\varphi(0) = f(x_0, y_0)\).
  - The point is critical, so \(\varphi'(0) = 0\).
  - \(\varphi''(0) = a^2 f_{xx} + 2ab f_{xy} + b^2 f_{yy}\), with those derivatives at \((x_0, y_0)\).

  Substituting the three facts gives the expansion.
provenance: official-key
steps:
  - \(\varphi(0) = f(x_0, y_0)\) and \(\varphi'(0) = 0\).
  - The coefficient of \(t^2\) is half of \(a^2 f_{xx} + 2ab f_{xy} + b^2 f_{yy}\).
verification:
  checks:
    - expr: '((f0 + (fxx/2)*(X - x0)**2 + fxy*(X - x0)*(Y - y0) + (fyy/2)*(Y - y0)**2).subs({X: x0 + a*t, Y: y0 + b*t})).series(t, 0, 3).removeO() - (f0 + (a**2*fxx + 2*a*b*fxy + b**2*fyy)*t**2/2)'
      expected: 0
:::

::: exercise
id: l6-second-derivative-test.home-2022-q2-6
number: "Home assignment 2022, exercise 2.6"
tier: standard
topics: [second-derivative-test]
statement: |
  Suppose \(f_{xx}(x_0, y_0) \neq 0\). Show that
  \[
  \begin{aligned}
  \varphi''(0) &= f_{xx}\left(a + b \frac{f_{xy}}{f_{xx}}\right)^2\\
  &\quad + b^2\left(f_{yy} - \frac{(f_{xy})^2}{f_{xx}}\right),
  \end{aligned}
  \]
  with every second derivative evaluated at \((x_0, y_0)\). Define \(D = f_{xx} f_{yy} - (f_{xy})^2\).
solution: |
  Expand the first square:
  \[
  \begin{aligned}
  &f_{xx}\left(a + b \frac{f_{xy}}{f_{xx}}\right)^2\\
  &= a^2 f_{xx} + 2ab f_{xy} + b^2 \frac{(f_{xy})^2}{f_{xx}}.
  \end{aligned}
  \]
  Adding \(b^2\big(f_{yy} - (f_{xy})^2/f_{xx}\big)\) cancels the last term against part of \(b^2 f_{yy}\) and leaves
  \[a^2 f_{xx} + 2ab f_{xy} + b^2 f_{yy},\]
  which is \(\varphi''(0)\).

  The second piece is \(b^2 D / f_{xx}\), with \(D = f_{xx} f_{yy} - (f_{xy})^2\). So
  \[\varphi''(0) = f_{xx}\left(a + b \frac{f_{xy}}{f_{xx}}\right)^2 + \frac{b^2 D}{f_{xx}}.\]
provenance: official-key
steps:
  - The square expands to the quadratic form plus \(b^2 (f_{xy})^2 / f_{xx}\).
  - \(D = f_{xx} f_{yy} - (f_{xy})^2\), and \(\varphi''(0) = f_{xx}(a + b f_{xy}/f_{xx})^2 + b^2 D / f_{xx}\).
verification:
  checks:
    - expr: 'fxx*(a + b*fxy/fxx)**2 + b**2*(fyy - fxy**2/fxx) - (a**2*fxx + 2*a*b*fxy + b**2*fyy)'
      expected: 0
    - expr: 'fxx*(a + b*fxy/fxx)**2 + b**2*(fxx*fyy - fxy**2)/fxx - (a**2*fxx + 2*a*b*fxy + b**2*fyy)'
      expected: 0
:::

::: exercise
id: l6-second-derivative-test.home-2022-q2-7
number: "Home assignment 2022, exercise 2.7"
tier: standard
topics: [second-derivative-test]
statement: |
  Let \((x_0, y_0)\) be a critical point with \(f_{xx}(x_0, y_0) \neq 0\), and let \(D = f_{xx} f_{yy} - (f_{xy})^2\). Assume \(D > 0\) and \(f_{xx}(x_0, y_0) > 0\). Is \((x_0, y_0)\) a maximum or a minimum of \(f\)?
solution: |
  Completing the square gives
  \[\varphi''(0) = f_{xx}\left(a + b\frac{f_{xy}}{f_{xx}}\right)^2 + \frac{b^2 D}{f_{xx}},\]
  with the derivatives at \((x_0, y_0)\).

  - If \(b \neq 0\), then \(b^2 D / f_{xx} > 0\).
  - If \(b = 0\) and \(a \neq 0\), then \(f_{xx} a^2 > 0\).

  The sum is positive for every \((a, b)\) other than \((0, 0)\).

  The quadratic part of \(f(x_0 + h, y_0 + k) - f(x_0, y_0)\) is that same form in \((h, k)\). The point is a local minimum.
provenance: official-key
steps:
  - The completed square is positive for every \((a, b)\) other than \((0, 0)\).
  - The point is a local minimum.
verification:
  checkable: false
  reason: |
    The claim is the proof that a critical point with D > 0 and f_xx > 0 is a local minimum.
:::

::: exercise
id: l6-second-derivative-test.home-2022-q2-8
number: "Home assignment 2022, exercise 2.8"
tier: standard
topics: [second-derivative-test]
statement: |
  Let \((x_0, y_0)\) be a critical point with \(f_{xx}(x_0, y_0) \neq 0\), and let \(D = f_{xx} f_{yy} - (f_{xy})^2\). Assume \(D > 0\) and \(f_{xx}(x_0, y_0) < 0\). Is \((x_0, y_0)\) a maximum or a minimum of \(f\)?
solution: |
  The same completed square is
  \[\varphi''(0) = f_{xx}\left(a + b\frac{f_{xy}}{f_{xx}}\right)^2 + \frac{b^2 D}{f_{xx}}.\]
  Now \(f_{xx} < 0\) and \(D > 0\), so \(D / f_{xx} < 0\).

  - If \(b \neq 0\), then \(b^2 D / f_{xx} < 0\).
  - If \(b = 0\) and \(a \neq 0\), then \(f_{xx} a^2 < 0\).

  The sum is negative for every \((a, b)\) other than \((0, 0)\), and the quadratic part of \(f - f(x_0, y_0)\) has that sign. The point is a local maximum.
provenance: official-key
steps:
  - With \(f_{xx} < 0\) and \(D > 0\), the quadratic form is negative for every nonzero direction.
  - The point is a local maximum.
verification:
  checkable: false
  reason: |
    The claim is the proof that a critical point with D > 0 and f_xx < 0 is a local maximum.
:::

::: exercise
id: l6-second-derivative-test.home-2022-q2-9
number: "Home assignment 2022, exercise 2.9"
tier: standard
topics: [second-derivative-test]
statement: |
  Let \((x_0, y_0)\) be a critical point with \(D < 0\) and \(f_{xx}(x_0, y_0) > 0\), where \(D = f_{xx} f_{yy} - (f_{xy})^2\). Compute the sign of \(\varphi''(0)\) for \((a, b) = (1, 0)\), and for a direction with \(a f_{xx} + b f_{xy} = 0\). Is \((x_0, y_0)\) a maximum or a minimum of \(f\)?
solution: |
  For \((a, b) = (1, 0)\), \(\varphi''(0) = f_{xx}(x_0, y_0) > 0\), so \(\varphi\) has a local minimum at \(t = 0\).

  Take \(b \neq 0\) and \(a = -b f_{xy} / f_{xx}\), so that \(a f_{xx} + b f_{xy} = 0\). Then \(\varphi''(0) = b^2 D / f_{xx}\). Here \(D < 0\) and \(f_{xx} > 0\), so \(\varphi''(0) < 0\), and \(\varphi\) has a local maximum at \(t = 0\) along this second direction.

  The two lines give opposite signs of \(\varphi''(0)\). The point is a saddle point.
provenance: official-key
steps:
  - Along \((1, 0)\), \(\varphi''(0) = f_{xx} > 0\).
  - Along \(a f_{xx} + b f_{xy} = 0\), \(\varphi''(0) = b^2 D / f_{xx} < 0\).
  - Opposite signs, so the point is a saddle point.
verification:
  checks:
    - expr: '(a**2*fxx + 2*a*b*fxy + b**2*fyy).subs({a: 1, b: 0}) - fxx'
      expected: 0
    - expr: '(a**2*fxx + 2*a*b*fxy + b**2*fyy).subs(a, -b*fxy/fxx) - b**2*(fxx*fyy - fxy**2)/fxx'
      expected: 0
:::

::: exercise
id: l6-second-derivative-test.home-2022-q3-1
number: "14.7.1 (sheet 2 exercise 7.1)"
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
statement: |
  Find the critical points of \(f(x, y) = x^2 + 4y^2 - 2x + 8y - 1\) and decide their kind from the sign of \(D\).
solution: |
  The partial derivatives are \(f_x = 2x - 2\) and \(f_y = 8y + 8\). They vanish at \((1, -1)\), and this is the only critical point.

  The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 8\) and \(f_{xy} = 0\), so \(D = 16\). \(D > 0\) and \(f_{xx} > 0\), so \((1, -1)\) is a local minimum.
provenance: official-key
steps:
  - The only critical point is \((1, -1)\).
  - \(D = 16 > 0\) and \(f_{xx} = 2 > 0\), so a local minimum.
verification:
  checks:
    - expr: 'Tuple(solve([diff(x**2 + 4*y**2 - 2*x + 8*y - 1, x), diff(x**2 + 4*y**2 - 2*x + 8*y - 1, y)], [x, y])[x], solve([diff(x**2 + 4*y**2 - 2*x + 8*y - 1, x), diff(x**2 + 4*y**2 - 2*x + 8*y - 1, y)], [x, y])[y])'
      expected: 'Tuple(1, -1)'
    - expr: '(diff(x**2 + 4*y**2 - 2*x + 8*y - 1, x, 2)*diff(x**2 + 4*y**2 - 2*x + 8*y - 1, y, 2)-diff(x**2 + 4*y**2 - 2*x + 8*y - 1, x, y)**2)'
      expected: 16
    - expr: '(diff(x**2 + 4*y**2 - 2*x + 8*y - 1, x).subs({x: 1, y: -1}), diff(x**2 + 4*y**2 - 2*x + 8*y - 1, y).subs({x: 1, y: -1}))'
      expected: '(0, 0)'
:::

::: exercise
id: l6-second-derivative-test.home-2022-q3-2
number: "14.7.3 (sheet 2 exercise 7.3)"
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
statement: |
  Find the critical points of \(f(x, y) = xy\) and decide their kind from the sign of \(D\).
solution: |
  The partial derivatives are \(f_x = y\) and \(f_y = x\). They vanish only at \((0, 0)\).

  The second derivatives are \(f_{xx} = 0\), \(f_{yy} = 0\) and \(f_{xy} = 1\), so \(D = -1\). \(D < 0\), so the origin is a saddle point.
provenance: official-key
steps:
  - The only critical point is \((0, 0)\).
  - \(D = -1 < 0\), so a saddle point.
verification:
  checks:
    - expr: 'Tuple(solve([diff(x*y, x), diff(x*y, y)], [x, y])[x], solve([diff(x*y, x), diff(x*y, y)], [x, y])[y])'
      expected: 'Tuple(0, 0)'
    - expr: '(diff(x*y, x, 2)*diff(x*y, y, 2)-diff(x*y, x, y)**2)'
      expected: -1
:::

::: exercise
id: l6-second-derivative-test.home-2022-q3-3
number: "14.7.5 (sheet 2 exercise 7.5)"
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
statement: |
  Find the critical points of \(f(x, y) = x^2 + 4xy + y^2 - 6y + 1\) and decide their kind from the sign of \(D\).
solution: |
  The partial derivatives are \(f_x = 2x + 4y\) and \(f_y = 4x + 2y - 6\). From \(f_x = 0\), \(x = -2y\). Then \(-8y + 2y - 6 = 0\), so \(y = -1\) and \(x = 2\). The only critical point is \((2, -1)\).

  The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 2\) and \(f_{xy} = 4\), so \(D = 4 - 16 = -12\). \(D < 0\), so \((2, -1)\) is a saddle point.
provenance: official-key
steps:
  - The only critical point is \((2, -1)\).
  - \(D = -12 < 0\), so a saddle point.
verification:
  checks:
    - expr: 'Tuple(solve([diff(x**2 + 4*x*y + y**2 - 6*y + 1, x), diff(x**2 + 4*x*y + y**2 - 6*y + 1, y)], [x, y])[x], solve([diff(x**2 + 4*x*y + y**2 - 6*y + 1, x), diff(x**2 + 4*x*y + y**2 - 6*y + 1, y)], [x, y])[y])'
      expected: 'Tuple(2, -1)'
    - expr: '(diff(x**2 + 4*x*y + y**2 - 6*y + 1, x, 2)*diff(x**2 + 4*x*y + y**2 - 6*y + 1, y, 2)-diff(x**2 + 4*x*y + y**2 - 6*y + 1, x, y)**2)'
      expected: -12
    - expr: '(diff(x**2 + 4*x*y + y**2 - 6*y + 1, x).subs({x: 2, y: -1}), diff(x**2 + 4*x*y + y**2 - 6*y + 1, y).subs({x: 2, y: -1}))'
      expected: '(0, 0)'
:::

::: exercise
id: l6-second-derivative-test.home-2022-q3-4
number: "14.7.6 (sheet 2 exercise 7.6)"
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
statement: |
  Find the critical points of \(f(x, y) = x^2 - xy + 2y^2 - 5x + 6y - 9\) and decide their kind from the sign of \(D\).
solution: |
  The partial derivatives are \(f_x = 2x - y - 5\) and \(f_y = -x + 4y + 6\). From \(f_x = 0\), \(y = 2x - 5\). Then \(-x + 4(2x - 5) + 6 = 0\), so \(x = 2\) and \(y = -1\). The only critical point is \((2, -1)\).

  The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 4\) and \(f_{xy} = -1\), so \(D = 8 - 1 = 7\). \(D > 0\) and \(f_{xx} > 0\), so \((2, -1)\) is a local minimum.
provenance: official-key
steps:
  - The only critical point is \((2, -1)\).
  - \(D = 7 > 0\) and \(f_{xx} = 2 > 0\), so a local minimum.
verification:
  checks:
    - expr: 'Tuple(solve([diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, x), diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, y)], [x, y])[x], solve([diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, x), diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, y)], [x, y])[y])'
      expected: 'Tuple(2, -1)'
    - expr: '(diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, x, 2)*diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, y, 2)-diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, x, y)**2)'
      expected: 7
    - expr: 'diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, x, 2)'
      expected: 2
    - expr: '(diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, x).subs({x: 2, y: -1}), diff(x**2 - x*y + 2*y**2 - 5*x + 6*y - 9, y).subs({x: 2, y: -1}))'
      expected: '(0, 0)'
:::

::: going-deeper
title: Why the sign of D decides
text: |
  Near a critical point, \(f\) behaves like its second-order Taylor term \(\tfrac12\bigl(f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2\bigr)\). If \(f_{xx} \neq 0\), completing the square gives
  \[
  \tfrac12\Bigl(f_{xx}\bigl(h + \tfrac{f_{xy}}{f_{xx}}k\bigr)^2 + \tfrac{D}{f_{xx}}k^2\Bigr).
  \]

  - When \(D > 0\) the two squares carry the same sign as \(f_{xx}\), so the term keeps one sign and the point is a minimum or a maximum.
  - When \(D < 0\) the two squares carry opposite signs, so the term takes both signs and the point is a saddle.
:::

::: sheet-item
id: l6-second-derivative-test.sheet-test
category: formula
text: |
  At a critical point, \(D = f_{xx} f_{yy} - (f_{xy})^2\).

  - If \(D > 0\) and \(f_{xx} > 0\), the point is a local minimum.
  - If \(D > 0\) and \(f_{xx} < 0\), the point is a local maximum.
  - If \(D < 0\), the point is a saddle point.
  - If \(D = 0\), the test fails.
:::

::: sheet-item
id: l6-second-derivative-test.sheet-fxx
category: trap
text: |
  The sign of \(f_{xx}\) decides a minimum or a maximum only when \(D > 0\). For \(f = x^2 - y^2\), \(f_{xx} = 2\) and \(D = -4\), and the origin is a saddle point.
:::
