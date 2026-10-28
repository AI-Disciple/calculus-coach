---
id: l6-hessian-test-sample
lecture: 6
order: 99
title: The Hessian test (stand-in sample)
prerequisites: [l5-hessian]
sources:
  - source: handout
    section: "14.7"
    page: 373
  - source: lecture-notes-5
    page: 4
examWeight: high
examWeightNote: Critical points carry 20% of the two recent finals. This node is stand-in content. Content tickets replace it.
status: draft
hidden: true
notation: |
  \(f_x\), \(\frac{df}{dx}\) and \(\frac{\partial f}{\partial x}\) all name the partial derivative of \(f\) with respect to \(x\). In the same way \(f_{xx} = \frac{\partial^2 f}{\partial x^2}\) and \(f_{xy} = \frac{\partial^2 f}{\partial y \, \partial x}\).
---

::: formal-statement
kind: theorem
title: Second derivative test in two variables
source:
  source: handout
  section: "14.7"
  page: 373
text: |
  Let \((x_0, y_0)\) be a critical point of \(f\), so \(\nabla f(x_0, y_0) = 0\), and put \(D(x_0, y_0) = \det H_f(x_0, y_0) = f_{xx} f_{yy} - (f_{xy})^2\).

  - If \(D > 0\) and \(f_{xx} > 0\), then \((x_0, y_0)\) is a local minimum.
  - If \(D > 0\) and \(f_{xx} < 0\), it is a local maximum.
  - If \(D < 0\), it is a saddle point.
  - If \(D = 0\), the test says nothing and further calculation is needed.
:::

::: plain-explanation
text: |
  \(D > 0\) means the surface bends the same way in every direction, and the sign of \(f_{xx}\) tells you whether it bends up (bowl) or down (dome). \(D < 0\) means it bends up in one direction and down in another, like a saddle. \(D = 0\) means the test is blind, so look at \(f\) itself along a line through the point, such as \(y = 0\).
:::

::: trap
text: |
  The sign of \(f_{xx}\) decides between minimum and maximum only after \(D > 0\) has been checked. Take \(f(x, y) = x^2 - y^2\), which has a critical point at the origin. There \(f_{xx} = 2\), \(f_{yy} = -2\) and \(f_{xy} = 0\), so \(D = 2 \cdot (-2) - 0^2 = -4\). The positive \(f_{xx}\) would point to a minimum, yet \(D\) is negative, so the origin is a saddle point. This matches the graph: \(f(x, 0) = x^2\) is positive along the x-axis and \(f(0, y) = -y^2\) is negative along the y-axis.
:::

::: worked-example
title: When D = 0
problem: |
  Classify the critical points of \(f(x, y) = x^3 + y^2\).
solution: |
  The partial derivatives are \(f_x = 3x^2\) and \(f_y = 2y\). Both vanish only at \((0, 0)\), so this is the only critical point.

  The second derivatives at the origin are \(f_{xx} = 6x = 0\), \(f_{yy} = 2\) and \(f_{xy} = 0\), so \(D = 0 \cdot 2 - 0^2 = 0\) and the test says nothing.

  Along \(y = 0\), \(f\) equals \(x^3\), which is positive for \(x > 0\) and negative for \(x < 0\), while \(f(0, 0) = 0\). So the point is neither a minimum nor a maximum.
:::

::: guided-example
title: Two critical points, two verdicts
problem: |
  Find and classify the critical points of \(f(x, y) = x^3 - 3x + y^2\). Try each step on paper before you show it.
steps:
  - |
    The partial derivatives are \(f_x = 3x^2 - 3\) and \(f_y = 2y\).
  - |
    \(f_x = 0\) gives \(x = 1\) or \(x = -1\), and \(f_y = 0\) gives \(y = 0\). The critical points are \((1, 0)\) and \((-1, 0)\).
  - |
    The second derivatives are \(f_{xx} = 6x\), \(f_{yy} = 2\) and \(f_{xy} = 0\), so \(D = 6x \cdot 2 - 0^2 = 12x\).
  - |
    At \((1, 0)\), \(D = 12 > 0\) and \(f_{xx} = 6 > 0\), so the point is a local minimum. At \((-1, 0)\), \(D = -12 < 0\), so the point is a saddle point.
:::

::: concept-question
question: |
  At a critical point, \(f_{xx} = 3\), \(f_{yy} = 1\) and \(f_{xy} = 2\). What kind of point is it?
options:
  - text: A local minimum
  - text: A local maximum
  - text: A saddle point
    correct: true
  - text: The test says nothing
explanation: |
  \(D = 3 \cdot 1 - 2^2 = -1\). \(D\) is negative, so the point is a saddle point. The positive \(f_{xx}\) plays no part, because it only matters once \(D > 0\).
:::

::: concept-question
question: |
  The test gives \(D = 0\) at a critical point. What can you conclude?
options:
  - text: The point is a saddle point.
  - text: The point is a local minimum when \(f_{xx} > 0\).
  - text: Nothing yet. Study \(f\) along lines through the point.
    correct: true
explanation: |
  When \(D = 0\) the test says nothing. \(x^4 + y^4\) has a minimum at the origin with \(D = 0\). \(x^3 + y^2\) has neither a minimum nor a maximum there, also with \(D = 0\).
:::

::: going-deeper
title: Why the sign of D decides
text: |
  Near a critical point, \(f(x_0 + h, y_0 + k) - f(x_0, y_0)\) behaves like \(\frac{1}{2}\left(f_{xx} h^2 + 2 f_{xy} h k + f_{yy} k^2\right)\). When \(f_{xx} \neq 0\), completing the square gives
  \[ f_{xx} h^2 + 2 f_{xy} h k + f_{yy} k^2 = f_{xx} \left(h + \frac{f_{xy}}{f_{xx}} k\right)^2 + \frac{D}{f_{xx}} k^2. \]
  If \(D > 0\), both terms have the sign of \(f_{xx}\), so \(f\) stays on one side of \(f(x_0, y_0)\). If \(D < 0\), the two terms have opposite signs, so \(f\) goes above and below.
:::

::: exercise
id: l6-hessian-test-sample.basic-bowl
tier: basic
topics: [critical-points, second-derivative-test]
statement: |
  Find and classify the critical point of \(f(x, y) = x^2 + 3y^2 - 4x + 6y\).
solution: |
  The partial derivatives are \(f_x = 2x - 4\) and \(f_y = 6y + 6\). They vanish at \(x = 2\) and \(y = -1\), so the only critical point is \((2, -1)\).

  The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 6\) and \(f_{xy} = 0\), so \(D = 2 \cdot 6 - 0^2 = 12\).

  \(D > 0\) and \(f_{xx} > 0\), so \((2, -1)\) is a local minimum, with value \(f(2, -1) = -7\).
provenance: written-for-site
steps:
  - Partial derivatives \(f_x = 2x - 4\) and \(f_y = 6y + 6\).
  - Critical point \((2, -1)\).
  - \(D = 12\), computed from the second derivatives.
  - Conclusion stated with both conditions, \(D > 0\) and \(f_{xx} > 0\).
verification:
  checks:
    - expr: '(diff(x**2 + 3*y**2 - 4*x + 6*y, x).subs({x: 2, y: -1}), diff(x**2 + 3*y**2 - 4*x + 6*y, y).subs({x: 2, y: -1}))'
      expected: (0, 0)
    - expr: hessian(x**2 + 3*y**2 - 4*x + 6*y, (x, y)).det()
      expected: 12
    - expr: '(x**2 + 3*y**2 - 4*x + 6*y).subs({x: 2, y: -1})'
      expected: -7
:::

::: exercise
id: l6-hessian-test-sample.handout-14-7-14
number: "14.7.14"
tier: standard
topics: [critical-points, second-derivative-test]
statement: |
  Given the three points \((1, 4)\), \((5, 2)\) and \((3, -2)\), the quantity
  \[ (x - 1)^2 + (y - 4)^2 + (x - 5)^2 + (y - 2)^2 + (x - 3)^2 + (y + 2)^2 \]
  is the sum of the squares of the distances from \((x, y)\) to those three points. Find \(x\) and \(y\) so that this quantity is minimized.
solution: |
  Call the quantity \(f(x, y)\). Then \(f_x = 2(x - 1) + 2(x - 5) + 2(x - 3) = 6x - 18\) and \(f_y = 2(y - 4) + 2(y - 2) + 2(y + 2) = 6y - 8\).

  Both vanish at \(x = 3\) and \(y = 4/3\), so the only critical point is \((3, 4/3)\).

  The second derivatives are \(f_{xx} = 6\), \(f_{yy} = 6\) and \(f_{xy} = 0\), so \(D = 36\). \(D > 0\) and \(f_{xx} > 0\), so the point is a local minimum. It is the unique critical point of a quadratic that opens upwards, so it is the global minimiser.
provenance: handout-answer
steps:
  - Partial derivatives \(f_x = 6x - 18\) and \(f_y = 6y - 8\).
  - Critical point \((3, 4/3)\).
  - \(D = 36 > 0\) and \(f_{xx} = 6 > 0\), so a minimum.
verification:
  checks:
    - expr: '(diff((x-1)**2 + (y-4)**2 + (x-5)**2 + (y-2)**2 + (x-3)**2 + (y+2)**2, x).subs({x: 3, y: Rational(4, 3)}), diff((x-1)**2 + (y-4)**2 + (x-5)**2 + (y-2)**2 + (x-3)**2 + (y+2)**2, y).subs({x: 3, y: Rational(4, 3)}))'
      expected: (0, 0)
    - expr: hessian((x-1)**2 + (y-4)**2 + (x-5)**2 + (y-2)**2 + (x-3)**2 + (y+2)**2, (x, y)).det()
      expected: 36
:::

::: exercise
id: l6-hessian-test-sample.final-2022-q4
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
pastExam:
  year: 2022
  paper: Final
  question: "4"
  points: 2
statement: |
  Find all critical points of \(f(x, y) = 2x^3 + x y^2 + 5x^2 + \frac{2}{3} y^3\) and give their kind. If the discriminant \(D\) vanishes, consider \(f(0, y)\).
solution: |
  The partial derivatives are \(f_x = 6x^2 + y^2 + 10x\) and \(f_y = 2xy + 2y^2 = 2y(x + y)\).

  From \(f_y = 0\), either \(y = 0\) or \(y = -x\). If \(y = 0\), then \(2x(3x + 5) = 0\), so \(x = 0\) or \(x = -5/3\). If \(y = -x\), then \(7x^2 + 10x = 0\), so \(x = 0\) (already found) or \(x = -10/7\). The critical points are \((0, 0)\), \((-5/3, 0)\) and \((-10/7, 10/7)\).

  The second derivatives are \(f_{xx} = 12x + 10\), \(f_{yy} = 2x + 4y\) and \(f_{xy} = 2y\), so \(D = (12x + 10)(2x + 4y) - 4y^2\).

  At \((-5/3, 0)\), \(D = 100/3 > 0\) and \(f_{xx} = -10 < 0\), so the point is a local maximum. At \((0, 0)\), \(D = 0\). Along \(x = 0\), \(f(0, y) = \frac{2}{3} y^3\), which is positive for \(y > 0\) and negative for \(y < 0\), so the origin is a saddle point. At \((-10/7, 10/7)\), \(D = -1400/49 < 0\), so the point is a saddle point.
provenance: official-key
steps:
  - Partial derivatives and the factorisation of \(f_y\).
  - The three critical points.
  - \(D\) at each point, with the sign of \(f_{xx}\) when \(D > 0\).
  - The section \(f(0, y)\) when \(D = 0\), and the kind of each point.
verification:
  checks:
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x).subs({x: 0, y: 0}), diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, y).subs({x: 0, y: 0}))'
      expected: (0, 0)
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x).subs({x: Rational(-5, 3), y: 0}), diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, y).subs({x: Rational(-5, 3), y: 0}))'
      expected: (0, 0)
    - expr: '(diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, x).subs({x: Rational(-10, 7), y: Rational(10, 7)}), diff(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, y).subs({x: Rational(-10, 7), y: Rational(10, 7)}))'
      expected: (0, 0)
    - expr: 'hessian(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, (x, y)).det().subs({x: Rational(-5, 3), y: 0})'
      expected: Rational(100, 3)
    - expr: 'hessian(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, (x, y)).det().subs({x: 0, y: 0})'
      expected: 0
    - expr: 'hessian(2*x**3 + x*y**2 + 5*x**2 + (2/3)*y**3, (x, y)).det().subs({x: Rational(-10, 7), y: Rational(10, 7)})'
      expected: Rational(-1400, 49)
:::

::: exercise
id: l6-hessian-test-sample.final-2022-q6
tier: exam
topics: [double-integrals, average-value]
examBlock: double-integrals
pastExam:
  year: 2022
  paper: Final
  question: "6"
  points: 2
statement: |
  Compute the average value of \(f(x, y) = \sin(x + y)\) on the region \(D\) in the first quadrant bounded by \(x + 2y = 2\).
solution: |
  \(D\) is the triangle with vertices \((0, 0)\), \((2, 0)\) and \((0, 1)\), so its area is \(1\). The average is therefore the double integral itself:
  \[ \int_0^2 \int_0^{1 - x/2} \sin(x + y) \, dy \, dx = \int_0^2 \bigl(\cos x - \cos(1 + x/2)\bigr) \, dx = 2\sin 1 - \sin 2. \]
provenance: official-key
steps:
  - Domain identified as the triangle of area 1.
  - Inner integral in \(y\), then the outer integral in \(x\).
  - The verified value \(2\sin 1 - \sin 2\).
verification:
  checks:
    - expr: integrate(sin(x + y), (y, 0, 1 - x/2), (x, 0, 2))
      expected: 2*sin(1) - sin(2)
discrepancy: |
  The official key gives \(2 - 2\sin 2\). The verified value is \(2\sin 1 - \sin 2\).
:::

::: sheet-item
id: l6-hessian-test-sample.sheet-hessian
category: formula
text: |
  At a critical point, \(D = f_{xx} f_{yy} - (f_{xy})^2\). \(D > 0\) and \(f_{xx} > 0\): local min. \(D > 0\) and \(f_{xx} < 0\): local max. \(D < 0\): saddle. \(D = 0\): test silent.
:::

::: visual
kind: critical-point-viewer
caption: Stand-in slot for the Hessian viewer (parameter family \(x^2 + y^2 + kxy\)).
:::

