---
id: l6-lagrange
lecture: 6
order: 7
title: Lagrange multipliers
prerequisites: [l6-global-extrema, l5-steepest-ascent]
sources:
  - { source: handout, section: "14.8", page: 378 }
  - { source: sheet-2, page: 3 }
  - { source: sheet-2, page: 4 }
  - { source: retake-2023, page: 1 }
  - { source: mock-exam-1, page: 1 }
  - { source: lecture-notes-6, page: 4 }
  - { source: lecture-notes-6, page: 5 }
examWeight: medium
taught: lecture
status: reviewed
notation: |
  \(f_x\) and \(\partial f/\partial x\) are the same partial. The gradient is \(\nabla f = (f_x, f_y)\) in two variables and \(\nabla f = (f_x, f_y, f_z)\) in three. One constraint \(g = c\) uses one multiplier \(\lambda\).
---

::: formal-statement
kind: method
title: One constraint
source:
  source: handout
  section: "14.8"
  page: 380
text: |
  To **optimise** \(f\) subject to \(g = c\), solve
  \[
  \nabla f = \lambda \nabla g \quad\text{together with}\quad g = c.
  \]
  - In two variables this is three equations. In three variables it is four equations.
  - The solutions are the **candidates** on the constraint.
  - On a closed bounded piece of the constraint, compare those values and include the endpoints of each piece.
  - If the feasible set is a closed bounded region cut out by an inequality, also locate the interior critical points, where \(\nabla f = 0\), and evaluate the corners of the boundary.
:::

::: formal-statement
kind: theorem
title: Euler-Lagrange theorem
source:
  source: lecture-notes-6
  page: 4
text: |
  Let \(f : \mathbb{R}^n \to \mathbb{R}\) be differentiable, and let \(G_1(x) = 0, \dots, G_N(x) = 0\) be constraints. Assume the gradients \(\nabla G_1, \dots, \nabla G_N\) are linearly independent at the point. If \(x\) minimises \(f\) subject to the constraints, there are numbers \(\lambda_1, \dots, \lambda_N\) with
  \[
  \nabla f(x) + \lambda_1 \nabla G_1(x) + \dots + \lambda_N \nabla G_N(x) = 0.
  \]
  - With one constraint this reads \(\nabla f = \lambda \nabla G\), where the multiplier changes sign.
  - The condition is necessary for a maximum as well as for a minimum.
  - Solve the relations between \(x\) and the \(\lambda_i\) together with \(G_i(x) = 0\) for all \(i\). This gives the candidate points and the multipliers.
:::

::: plain-explanation
text: |
  A level set of \(f\) touches the constraint where the two gradients are parallel. The **multiplier** \(\lambda\) is the scalar in that sentence. Once the system is solved, the reported answer is the point and the value of \(f\).

  - On a disk, the interior is the region where \(\nabla f = 0\), and the circle is the constraint handled by \(\lambda\).
  - On a polygon, each corner is an endpoint of two edges.
:::

::: visual
kind: constraint
caption: |
  The circle is the constraint \(x^2 + y^2 = 1\). The vertical line is a level curve of \(f = x\). They touch at the highlighted point.
params:
  level: 1
:::

::: worked-example
title: Rectangle of maximum area
problem: |
  Maximise the area of a rectangle with perimeter \(100\). The side lengths \(x\) and \(y\) are nonnegative.
solution: |
  The area is \(f(x, y) = xy\) and the constraint is \(g(x, y) = 2x + 2y = 100\), with \(x \ge 0\) and \(y \ge 0\). Then \(\nabla f = (y, x)\) and \(\nabla g = (2, 2)\), so
  \[
  y = 2\lambda, \qquad x = 2\lambda, \qquad 2x + 2y = 100.
  \]
  The first two equations give \(x = y\). The constraint then gives \(4x = 100\), so
  \[
  x = y = 25, \qquad \lambda = 25/2.
  \]
  The area is \(625\).

  The feasible set on the line is the segment from \((0, 50)\) to \((50, 0)\). At both endpoints the area is \(0\). Those endpoints are the minimum on the segment. The value \(625\) is larger, and it is the only critical value, so it is the maximum.
:::

::: guided-example
title: Three positive numbers of maximum product
problem: |
  Find three positive numbers whose sum is \(48\) and whose product is as large as possible.
steps:
  - |
    Let the numbers be \(x > 0\), \(y > 0\) and \(z > 0\). The objective is \(f = xyz\) and the constraint is \(g = x + y + z = 48\).
  - |
    The gradients give
    \[
    (yz, xz, xy) = \lambda(1, 1, 1),
    \]
    together with \(x + y + z = 48\).
  - |
    For positive numbers:

    - \(yz = xz\) forces \(x = z\).
    - \(yz = xy\) forces \(y = z\).

    The three numbers are equal, so each equals \(16\).
  - |
    The product is \(16^3 = 4096\). If any number approaches \(0\) while the three stay positive and sum to \(48\), the product approaches \(0\). The critical value \(4096\) is the maximum.
:::

::: trap
text: |
  The gradient equation alone leaves a **free scale**. For \(f = xy\) and \(g = 2x + 2y\), the equation \(\nabla f = \lambda \nabla g\) gives
  \[
  x = y = 2\lambda.
  \]
  The side length is fixed only by the constraint \(2x + 2y = 100\), which produces
  \[
  x = y = 25.
  \]
:::

::: trap
text: |
  Maximise \(f(x, y) = x\) on the disk \(x^2 + y^2 \le 1\). The gradient is \((1, 0)\), so the open disk has no critical point. On the circle \(x^2 + y^2 = 1\), the equation
  \[
  (1, 0) = \lambda(2x, 2y)
  \]
  forces \(y = 0\) and \(x = \pm 1\). The values are
  \[
  f(1, 0) = 1, \qquad f(-1, 0) = -1.
  \]
  The maximum on the disk is \(1\) and the minimum is \(-1\). The origin gives \(0\), which lies between those two values.
:::

::: key-points
text: |
  - To optimise \(f\) subject to \(g = c\), solve \(\nabla f = \lambda \nabla g\) together with \(g = c\). That is three equations in two variables and four equations in three variables. The solutions are the candidates on the constraint.
  - On a closed bounded piece of the constraint, compare the values of \(f\) at the candidates and include the endpoints of each piece. The reported answer is the point and the value of \(f\).
  - On a closed bounded region cut out by an inequality, also locate the interior critical points, where \(\nabla f = 0\), and evaluate the corners of the boundary. For \(f = x\) on the disk \(x^2 + y^2 \le 1\), the gradient \((1, 0)\) is nonzero, so the open disk has no critical point. The circle gives the maximum \(1\) at \((1, 0)\) and the minimum \(-1\) at \((-1, 0)\).
  - The usual slip stops at \(\nabla f = \lambda \nabla g\). For \(f = xy\) with \(2x + 2y = 100\), that equation gives \(x = y = 2\lambda\), which leaves the side length free. The constraint fixes it at \(x = y = 25\).
:::

::: concept-question
id: l6-lagrange.q-43032170
question: |
  A rectangle of perimeter \(100\) has maximum area \(625\) at \(x = y = 25\), where the multiplier in \(\nabla f = \lambda \nabla g\) is \(\lambda = 25/2\). Which number is the maximum area?
options:
  - text: \(25/2\)
  - text: \(25\)
  - text: \(625\)
    correct: true
  - text: \(100\)
explanation: |
  The area is \(f = xy = 625\). The multiplier \(\lambda = 25/2\) is the scalar that makes the gradients parallel. The side length is \(25\), and the perimeter is \(100\).
:::

::: concept-question
id: l6-lagrange.q-53d8a0a5
question: |
  The point on a surface closest to the origin can be found by minimising \(x^2 + y^2 + z^2\). What is the distance, once that minimum value \(m\) is known?
options:
  - text: \(m\)
  - text: \(\sqrt{m}\)
    correct: true
  - text: \(m^2\)
  - text: \(1/m\)
explanation: |
  The square root is increasing on \([0, \infty)\), so the squared distance and the distance have the same minimizer. The distance is the square root of the minimum squared distance.
:::

::: going-deeper
title: Two constraints
text: |
  To optimise \(f(x, y, z)\) on the curve where \(g = c_1\) and \(h = c_2\), solve
  \[
  \nabla f = \lambda \nabla g + \mu \nabla h
  \]
  together with the two constraints. That is five equations in \(x\), \(y\), \(z\), \(\lambda\) and \(\mu\).

  ### An example

  The plane \(x + y - z = 1\) meets the cylinder \(x^2 + y^2 = 1\) in an ellipse. The distance from the origin is extreme at the same points as \(f = x^2 + y^2 + z^2\), subject to \(g = x^2 + y^2 = 1\) and \(h = x + y - z = 1\). The gradients are
  \[
  \begin{aligned}
  \nabla f&=(2x, 2y, 2z),\\
  \nabla g&=(2x, 2y, 0),\\
  \nabla h&=(1, 1, -1),
  \end{aligned}
  \]
  so
  \[
  \begin{aligned}
  2x&=\lambda(2x)+\mu,\\
  2y&=\lambda(2y)+\mu,\\
  2z&=-\mu,
  \end{aligned}
  \]
  together with the two constraints. Subtracting the first two component equations gives
  \[
  (2x - 2y) = \lambda(2x - 2y),
  \]
  so \(\lambda = 1\) or \(x = y\).

  ### The two cases

  If \(\lambda = 1\), then \(\mu = 0\) and \(z = 0\). The constraints become \(x^2 + y^2 = 1\) and \(x + y = 1\), so the points are \((1, 0, 0)\) and \((0, 1, 0)\). Both are at distance \(1\).

  If \(x = y\), then \(2x^2 = 1\), so \(x = y = \pm 1/\sqrt{2}\). The plane gives \(z = x + y - 1\). The positive choice is the point \((1/\sqrt{2}, 1/\sqrt{2}, -1 + \sqrt{2})\), at distance \(\sqrt{4 - 2\sqrt{2}}\). The negative choice is \((-1/\sqrt{2}, -1/\sqrt{2}, -1 - \sqrt{2})\), at distance \(\sqrt{4 + 2\sqrt{2}}\).

  The ellipse is closed and bounded, so the nearest and farthest points are among these four. The closest points are \((1, 0, 0)\) and \((0, 1, 0)\). The farthest point is \((-1/\sqrt{2}, -1/\sqrt{2}, -1 - \sqrt{2})\).
:::

::: exercise
id: l6-lagrange.handout-14-8-16
number: "14.8.16"
tier: basic
topics: [lagrange-multipliers]
statement: |
  Find three real numbers whose sum is \(9\) and whose squares have the smallest possible sum.
solution: |
  Minimise \(f = x^2 + y^2 + z^2\) subject to \(x + y + z = 9\). The gradient equation is
  \[
  (2x, 2y, 2z) = \lambda(1, 1, 1),
  \]
  so \(x = y = z\). The constraint gives \(x = y = z = 3\). The sum of squares is \(27\).

  Completing the square on the plane \(z = 9 - x - y\) gives
  \[
  \begin{aligned}
  &x^2 + y^2 + z^2 - 27\\
  &=(x - 3)^2 + (y - 3)^2 + (z - 3)^2.
  \end{aligned}
  \]
  The right-hand side is nonnegative and equals \(0\) at \((3, 3, 3)\), so \(27\) is the global minimum. Along the plane the sum of squares tends to infinity, so there is no maximum.
provenance: handout-answer
steps:
  - The system \((2x, 2y, 2z) = \lambda(1, 1, 1)\) with \(x + y + z = 9\).
  - The only solution is \(x = y = z = 3\).
  - The sum of squares is \(27\), and the completed square shows it is the minimum.
verification:
  checks:
    - expr: "3 + 3 + 3"
      expected: 9
    - expr: "3**2 + 3**2 + 3**2"
      expected: 27
    - expr: "(x**2 + y**2 + z**2 - 27 - ((x - 3)**2 + (y - 3)**2 + (z - 3)**2)).subs(z, 9 - x - y)"
      expected: 0
:::

::: exercise
id: l6-lagrange.handout-14-8-13
number: "14.8.13"
tier: standard
topics: [lagrange-multipliers]
statement: |
  Find the maximum and minimum values of \(f(x, y, z) = 6x + 3y + 2z\) subject to \(4x^2 + 2y^2 + z^2 = 70\).
solution: |
  Let \(g = 4x^2 + 2y^2 + z^2\). Then \(\nabla f = (6, 3, 2)\) and \(\nabla g = (8x, 4y, 2z)\), so
  \[
  \begin{aligned}
  6&=\lambda(8x),\\
  3&=\lambda(4y),\\
  2&=\lambda(2z),\\
  4x^2 + 2y^2 + z^2&=70.
  \end{aligned}
  \]
  For a point on the ellipsoid, \(\lambda \ne 0\), and
  \[
  \begin{aligned}
  x&=3/(4\lambda),\\
  y&=3/(4\lambda),\\
  z&=1/\lambda.
  \end{aligned}
  \]
  Thus \(x = y\) and \(z = 4x/3\). The constraint becomes
  \[
  4x^2 + 2x^2 + \frac{16}{9}x^2 = \frac{70}{9}x^2 = 70,
  \]
  so \(x^2 = 9\). The two points are \((3, 3, 4)\) and \((-3, -3, -4)\).

  At the first point \(\lambda = 1/4\) and \(f = 35\). At the second point \(f = -35\). The constraint is a closed bounded ellipsoid, so these critical values are the maximum and the minimum.
provenance: handout-answer
steps:
  - The system \(6 = 8\lambda x\), \(3 = 4\lambda y\), \(2 = 2\lambda z\), with the ellipsoid.
  - The points \((3, 3, 4)\) and \((-3, -3, -4)\).
  - The values \(35\) and \(-35\).
verification:
  checks:
    - expr: "4*3**2 + 2*3**2 + 4**2"
      expected: 70
    - expr: "6*3 + 3*3 + 2*4"
      expected: 35
    - expr: "6*(-3) + 3*(-3) + 2*(-4)"
      expected: -35
    - expr: "(6 - (Rational(1, 4))*8*3, 3 - (Rational(1, 4))*4*3, 2 - (Rational(1, 4))*2*4)"
      expected: "(0, 0, 0)"
:::

::: exercise
id: l6-lagrange.handout-14-8-6
number: "14.8.6"
tier: standard
topics: [lagrange-multipliers, worded-optimisation]
statement: |
  The material for the bottom of an aquarium costs half as much per unit area as the glass for the four sides. There is no top. Find the shape of the cheapest aquarium that holds a given volume \(V > 0\).
solution: |
  Let the base edges be \(x > 0\) and \(y > 0\), and let the height be \(z > 0\), with \(xyz = V\). Take the unit cost of the glass sides to be \(1\), so the unit cost of the bottom is \(1/2\). The cost is
  \[
  C = \frac{1}{2}xy + 2z(x + y).
  \]
  Lagrange multipliers give
  \[
  \begin{aligned}
  \frac{y}{2} + 2z&=\lambda yz,\\
  \frac{x}{2} + 2z&=\lambda xz,\\
  2(x + y)&=\lambda xy,\\
  xyz&=V.
  \end{aligned}
  \]
  Subtracting the first two equations produces
  \[
  (y - x)/2 = \lambda z(y - x).
  \]
  So \(x = y\), or \(\lambda = 1/(2z)\).

  - If \(\lambda = 1/(2z)\), the first equation becomes \(y/2 + 2z = y/2\), hence \(z = 0\), which cannot hold a positive volume.
  - The remaining case is \(x = y\). The third equation gives \(\lambda = 4/x\), and the first equation then gives \(z = x/4\). The volume \(x^2(x/4) = V\) gives \(x^3 = 4V\).

  The dimensions are
  \[
  x = y = (4V)^{1/3}, \qquad z = \left(\frac{V}{16}\right)^{1/3}.
  \]
  The base is a square, and the height is one quarter of a base edge.

  If a positive edge tends to \(0\) while the volume stays equal to \(V\), another edge tends to infinity and \(C\) tends to infinity. The critical point is the minimum.
provenance: handout-answer
steps:
  - Cost \(C = xy/2 + 2z(x + y)\) with \(xyz = V\).
  - The case \(\lambda = 1/(2z)\) forces \(z = 0\). The remaining case is \(x = y\) and \(z = x/4\).
  - Dimensions \((4V)^{1/3}\), \((4V)^{1/3}\) and \((V/16)^{1/3}\).
  - The cost grows when an edge approaches \(0\), so the critical point is the minimum.
verification:
  checks:
    - expr: "((4*V)**Rational(1, 3))**2 * (V/16)**Rational(1, 3) - V"
      expected: 0
    - expr: "(V/16)**Rational(1, 3)/(4*V)**Rational(1, 3) - Rational(1, 4)"
      expected: 0
    - expr: "((4*V)**Rational(1, 3)/2 + 2*((4*V)**Rational(1, 3)/4) - (4/(4*V)**Rational(1, 3))*((4*V)**Rational(1, 3))*((4*V)**Rational(1, 3)/4))"
      expected: 0
:::

::: exercise
id: l6-lagrange.handout-14-8-5
number: "14.8.5"
tier: standard
topics: [lagrange-multipliers]
statement: |
  Find all points on the surface \(xy - z^2 + 1 = 0\) that are closest to the origin.
solution: |
  Minimise \(f = x^2 + y^2 + z^2\) subject to \(g = xy - z^2 + 1 = 0\). Then \(\nabla f = (2x, 2y, 2z)\) and \(\nabla g = (y, x, -2z)\), so
  \[
  \begin{aligned}
  2x&=\lambda y,\\
  2y&=\lambda x,\\
  2z&=\lambda(-2z),\\
  xy - z^2 + 1&=0.
  \end{aligned}
  \]
  The third equation is \(z(1 + \lambda) = 0\), so \(z = 0\) or \(\lambda = -1\).

  - If \(\lambda = -1\), then \(2x = -y\) and \(2y = -x\). Substituting gives \(y = 0\) and \(x = 0\). The surface becomes \(1 - z^2 = 0\), so \(z = \pm 1\). The points are \((0, 0, 1)\) and \((0, 0, -1)\), each at distance \(1\).
  - If \(z = 0\), the surface is \(xy = -1\). The first two equations give \(\lambda^2 = 4\) whenever \(xy \ne 0\). The value \(\lambda = 2\) forces \(x = y\) and \(x^2 = -1\), which has no real solution. The value \(\lambda = -2\) forces \(x = -y\) and \(x^2 = 1\), so the real points are \((1, -1, 0)\) and \((-1, 1, 0)\). Each has squared distance \(2\).

  Since \(2 > 1\), the closest points are \((0, 0, 1)\) and \((0, 0, -1)\).
provenance: handout-answer
steps:
  - The system \(\nabla f = \lambda \nabla g\) with \(xy - z^2 + 1 = 0\).
  - The case \(\lambda = -1\) gives \((0, 0, 1)\) and \((0, 0, -1)\), at distance \(1\).
  - The case \(z = 0\) gives two real points at squared distance \(2\).
  - The closest points are the two at distance \(1\).
verification:
  checks:
    - expr: "0*0 - 1**2 + 1"
      expected: 0
    - expr: "0**2 + 0**2 + 1**2"
      expected: 1
    - expr: "1*(-1) - 0**2 + 1"
      expected: 0
    - expr: "1**2 + (-1)**2 + 0**2"
      expected: 2
    - expr: "(0 - (-1)*0, 0 - (-1)*0, 2 - (-1)*(-2))"
      expected: "(0, 0, 0)"
:::

::: exercise
id: l6-lagrange.handout-14-8-9
number: "14.8.9"
tier: exam
topics: [lagrange-multipliers, global-extrema]
examBlock: constrained-optimisation
statement: |
  Find all points on the plane \(x + y + z = 5\) in the first octant at which \(f(x, y, z) = xy^2 z^2\) has a maximum value.
solution: |
  The first octant here means \(x \ge 0\), \(y \ge 0\) and \(z \ge 0\). On the plane, the feasible set is the triangle with corners \((5, 0, 0)\), \((0, 5, 0)\) and \((0, 0, 5)\). The gradient is
  \[
  \nabla f = (y^2 z^2,\ 2xyz^2,\ 2xy^2 z).
  \]
  In the open triangle, \(x, y, z > 0\) and \(\nabla f = \lambda(1, 1, 1)\). Then
  \[
  y^2 z^2 = 2xyz^2 = 2xy^2 z,
  \]
  so \(y = 2x\) and \(z = 2x\). The plane gives \(5x = 5\), hence \(x = 1\), \(y = 2\) and \(z = 2\). At this point
  \[
  \begin{aligned}
  \nabla f&=(16, 16, 16),\\
  \lambda&=16,\\
  f(1, 2, 2)&=16.
  \end{aligned}
  \]

  On each edge of the triangle one coordinate is \(0\), so \(f = 0\). The three corners are included in those edges. The interior value \(16\) is larger, so the maximum is \(16\), attained only at \((1, 2, 2)\).
provenance: handout-answer
steps:
  - The feasible set is the triangle \(x + y + z = 5\) in the first octant.
  - The interior Lagrange point is \((1, 2, 2)\), with value \(16\).
  - On each edge \(f = 0\), including the three corners.
  - The maximum is \(16\) at \((1, 2, 2)\).
verification:
  checks:
    - expr: "(1*2**2*2**2, 1 + 2 + 2)"
      expected: "(16, 5)"
    - expr: "(2**2*2**2 - 16, 2*1*2*2**2 - 16, 2*1*2**2*2 - 16)"
      expected: "(0, 0, 0)"
    - expr: "(x*y**2*(5 - x - y)**2).subs({x: 1, y: 2})"
      expected: 16
    - expr: "(diff(x*y**2*(5 - x - y)**2, x).subs({x: 1, y: 2}), diff(x*y**2*(5 - x - y)**2, y).subs({x: 1, y: 2}))"
      expected: "(0, 0)"
    - expr: "(x*y**2*z**2).subs(z, 0)"
      expected: 0
:::

::: exercise
id: l6-lagrange.retake-2023-q6
tier: exam
topics: [lagrange-multipliers]
examBlock: constrained-optimisation
pastExam:
  year: 2023
  paper: Retake
  question: "6"
  points: 3
statement: |
  Find the rectangular box of dimensions \(2a\), \(2b\) and \(2c\) of largest volume that fits in the region \(x^4 + y^4 + z^2 \le 1\). The region is symmetric in \(x\) and \(y\).
solution: |
  Center the box at the origin and align its edges with the axes, so the box is \([-a, a] \times [-b, b] \times [-c, c]\) with \(a \ge 0\), \(b \ge 0\) and \(c \ge 0\). It fits in the region precisely when
  \[
  a^4 + b^4 + c^2 \le 1.
  \]
  The volume is \(V = 8abc\).

  In the open octant \(a > 0\), \(b > 0\), \(c > 0\) the gradient of \(abc\) is \((bc, ac, ab)\), which is never zero. A largest box therefore lies on the boundary \(a^4 + b^4 + c^2 = 1\). If any edge is \(0\), the volume is \(0\).

  Lagrange multipliers give
  \[
  (bc, ac, ab) = \lambda (4a^3, 4b^3, 2c).
  \]
  For positive edges the first two coordinates give \(b^4 = a^4\), so \(a = b\). Symmetry in \(x\) and \(y\) gives that same relation. The remaining equations give \(c^2 = 2a^4\). The constraint then reads
  \[
  2a^4 + 2a^4 = 1,
  \]
  so \(a^4 = 1/4\). Hence
  \[
  a = b = c = \frac{\sqrt{2}}{2}.
  \]
  The three dimensions are \(2a = 2b = 2c = \sqrt{2}\). The largest box is a cube of side \(\sqrt{2}\), and its volume is \(2\sqrt{2}\).
provenance: written-for-site
steps:
  - The box \([-a, a] \times [-b, b] \times [-c, c]\) fits when \(a^4 + b^4 + c^2 \le 1\), and the volume is \(8abc\).
  - The maximum is on \(a^4 + b^4 + c^2 = 1\), with \(a = b\) by symmetry.
  - The dimensions \(a = b = c = \sqrt{2}/2\).
  - The volume \(2\sqrt{2}\).
verification:
  checks:
    - expr: "(sqrt(2)/2)**4 + (sqrt(2)/2)**4 + (sqrt(2)/2)**2"
      expected: 1
    - expr: "8*(sqrt(2)/2)**3"
      expected: "2*sqrt(2)"
    - expr: "((sqrt(2)/2)*(sqrt(2)/2) - (sqrt(2)/4)*4*(sqrt(2)/2)**3, (sqrt(2)/2)*(sqrt(2)/2) - (sqrt(2)/4)*2*(sqrt(2)/2))"
      expected: (0, 0)
    - expr: "(sqrt(2)/2)**2 - Rational(1, 2)"
      expected: 0
:::

::: exercise
id: l6-lagrange.mock-exam-1-q6
tier: exam
topics: [lagrange-multipliers]
examBlock: constrained-optimisation
pastExam:
  year: 2022
  paper: "Mock exam"
  question: "6"
  points: 1
statement: |
  Find the rectangular box of dimensions \(2a\), \(2b\) and \(2c\) of largest volume that fits in the region \(x^2 + y^4 + z^6 \le 1\).
solution: |
  Center the box at the origin and align its edges with the axes, so it is \([-a, a] \times [-b, b] \times [-c, c]\) with \(a \ge 0\), \(b \ge 0\) and \(c \ge 0\). It fits when \(a^2 + b^4 + c^6 \le 1\). The volume is \(V = 8abc\).

  In the open octant the gradient of \(abc\) is \((bc, ac, ab)\), which is never zero, so a largest box lies on \(a^2 + b^4 + c^6 = 1\). If any edge is \(0\), the volume is \(0\).

  Lagrange multipliers give
  \[
  (bc, ac, ab) = \lambda (2a, 4b^3, 6c^5).
  \]
  For positive edges:

  - the first two coordinates give \(a^2 = 2b^4\),
  - the last two give \(c^6 = (2/3) b^4\).

  The constraint becomes
  \[
  2b^4 + b^4 + \frac{2}{3} b^4 = \frac{11}{3} b^4 = 1.
  \]
  Hence \(b^4 = 3/11\), \(a^2 = 6/11\) and \(c^6 = 2/11\). The positive solution is
  \[
  \begin{aligned}
  a&=\sqrt{\frac{6}{11}},\\
  b&=\left(\frac{3}{11}\right)^{1/4},\\
  c&=\left(\frac{2}{11}\right)^{1/6}.
  \end{aligned}
  \]
  These are the only positive edges that satisfy the Lagrange equations. The volume is
  \[
  8abc = 2^{11/3} \cdot 3^{3/4} \cdot 11^{-11/12}.
  \]
provenance: written-for-site
steps:
  - The box fits when \(a^2 + b^4 + c^6 \le 1\), and the volume is \(8abc\).
  - The maximum is on the boundary, with \(a^2 = 2b^4\) and \(c^6 = (2/3)b^4\).
  - The dimensions \(a = \sqrt{6/11}\), \(b = (3/11)^{1/4}\) and \(c = (2/11)^{1/6}\).
  - The volume \(2^{11/3} \cdot 3^{3/4} \cdot 11^{-11/12}\).
verification:
  checks:
    - expr: "sqrt(Rational(6, 11))**2 + ((Rational(3, 11))**Rational(1, 4))**4 + ((Rational(2, 11))**Rational(1, 6))**6"
      expected: 1
    - expr: "8*sqrt(Rational(6, 11))*(Rational(3, 11))**Rational(1, 4)*(Rational(2, 11))**Rational(1, 6)"
      expected: "2**Rational(11, 3)*3**Rational(3, 4)/11**Rational(11, 12)"
    - expr: "((Rational(3, 11))**Rational(1, 4)*(Rational(2, 11))**Rational(1, 6))/(2*sqrt(Rational(6, 11))) - (sqrt(Rational(6, 11))*(Rational(2, 11))**Rational(1, 6))/(4*((Rational(3, 11))**Rational(1, 4))**3)"
      expected: 0
    - expr: "(sqrt(Rational(6, 11))*(Rational(2, 11))**Rational(1, 6))/(4*((Rational(3, 11))**Rational(1, 4))**3) - (sqrt(Rational(6, 11))*(Rational(3, 11))**Rational(1, 4))/(6*((Rational(2, 11))**Rational(1, 6))**5)"
      expected: 0
:::

::: exercise
id: l6-lagrange.handout-14-8-7
number: "14.8.7"
tier: standard
topics: [lagrange-multipliers]
statement: |
  The plane \(x - y + z = 2\) intersects the cylinder \(x^2 + y^2 = 4\) in an ellipse. Find the points on the ellipse closest to and farthest from the origin.
solution: |
  The distance from the origin is extreme at the same points as \(f = x^2 + y^2 + z^2\), subject to \(g = x^2 + y^2 = 4\) and \(h = x - y + z = 2\). Then
  \[
  \begin{aligned}
  (2x, 2y, 2z)&=\lambda(2x, 2y, 0)\\
  &\quad+\mu(1, -1, 1).
  \end{aligned}
  \]
  The third coordinate gives \(\mu = 2z\), and the first two become \(x(1 - \lambda) = z\) and \(y(1 - \lambda) = -z\).

  - If \(\lambda \ne 1\), then \(y = -x\). The cylinder gives \(2x^2 = 4\), so \(x = \pm \sqrt{2}\) and \(y = \mp \sqrt{2}\). The plane gives the points
    \[
    \begin{aligned}
    &\left(\sqrt{2}, -\sqrt{2}, 2 - 2\sqrt{2}\right),\\
    &\left(-\sqrt{2}, \sqrt{2}, 2 + 2\sqrt{2}\right).
    \end{aligned}
    \]
    Their squared distances are \(16 - 8\sqrt{2}\) and \(16 + 8\sqrt{2}\).
  - If \(\lambda = 1\), then \(z = 0\) and \(\mu = 0\). The constraints become \(x^2 + y^2 = 4\) and \(y = x - 2\), so the points are \((2, 0, 0)\) and \((0, -2, 0)\). Both have squared distance \(4\).

  The ellipse is closed and bounded, so the closest and farthest points are among these four. The squared distance \(16 - 8\sqrt{2}\) exceeds \(4\) by \(4(\sqrt{2} - 1)^2 > 0\), and \(16 + 8\sqrt{2}\) is larger still. The closest points are \((2, 0, 0)\) and \((0, -2, 0)\). The farthest point is \(\left(-\sqrt{2}, \sqrt{2}, 2 + 2\sqrt{2}\right)\).
provenance: handout-answer
steps:
  - Two constraints, with \(\nabla f = \lambda \nabla g + \mu \nabla h\).
  - The case \(\lambda = 1\) gives \((2, 0, 0)\) and \((0, -2, 0)\), at squared distance \(4\).
  - The case \(y = -x\) gives two further points, at squared distances \(16 - 8\sqrt{2}\) and \(16 + 8\sqrt{2}\).
  - The closest points are the two at squared distance \(4\). The farthest point is \((-\sqrt{2}, \sqrt{2}, 2 + 2\sqrt{2})\).
verification:
  checks:
    - expr: "(2**2 + 0**2 + 0**2, 2 - 0 + 0 - 2, 0**2 + (-2)**2 + 0**2, 0 - (-2) + 0 - 2)"
      expected: "(4, 0, 4, 0)"
    - expr: "(-sqrt(2))**2 + sqrt(2)**2 + (2 + 2*sqrt(2))**2"
      expected: "16 + 8*sqrt(2)"
    - expr: "-sqrt(2) - sqrt(2) + (2 + 2*sqrt(2)) - 2"
      expected: 0
    - expr: "sqrt(2)**2 + (-sqrt(2))**2 + (2 - 2*sqrt(2))**2 - (16 - 8*sqrt(2))"
      expected: 0
    - expr: "(16 - 8*sqrt(2)) - 4 - 4*(sqrt(2) - 1)**2"
      expected: 0
    - expr: "(16 + 8*sqrt(2)) - (16 - 8*sqrt(2)) - 16*sqrt(2)"
      expected: 0
:::

::: sheet-item
id: l6-lagrange.sheet-one
category: formula
text: |
  On one constraint \(g = c\), solve \(\nabla f = \lambda \nabla g\) and \(g = c\). In two variables there are three equations. In three variables there are four.
:::

::: sheet-item
id: l6-lagrange.sheet-two
category: formula
text: |
  On two constraints \(g = c_1\) and \(h = c_2\), solve \(\nabla f = \lambda \nabla g + \mu \nabla h\) together with both constraints.
:::

::: sheet-item
id: l6-lagrange.sheet-boundary
category: trap
text: |
  On a closed bounded region, Lagrange multipliers find candidates on the boundary curves. Still compare interior critical points, endpoints, and corners.
:::

::: exercise
id: l6-lagrange.handout-14-8-8
number: "14.8.8"
tier: basic
topics: [lagrange-multipliers]
statement: |
  Find three positive numbers whose sum is \(48\) and whose product is as large as possible.
solution: |
  Maximise \(f = xyz\) subject to \(g = x + y + z = 48\). The gradient equation
  \[
  (yz, xz, xy) = \lambda(1, 1, 1)
  \]
  gives \(yz = xz = xy = \lambda\). The numbers are positive, so:

  - \(yz = xz\) gives \(y = x\),
  - \(xz = xy\) gives \(z = y\).

  The constraint gives \(x = y = z = 16\), and the product is \(4096\).

  The set \(x, y, z \ge 0\) with \(x + y + z = 48\) is closed and bounded. The product is \(0\) on its boundary and positive inside, so the interior critical point is the maximum.
provenance: handout-answer
steps:
  - The system \((yz, xz, xy) = \lambda(1, 1, 1)\) with \(x + y + z = 48\).
  - Positivity forces \(x = y = z = 16\).
  - The product is \(4096\), and it is \(0\) on the boundary.
verification:
  checks:
    - expr: "16 + 16 + 16"
      expected: 48
    - expr: "16*16*16"
      expected: 4096
    - expr: "(x*y*z).subs(z, 48 - x - y).subs({x: 16, y: 16})"
      expected: 4096
    - expr: "diff((x*y*(48 - x - y)), x).subs({x: 16, y: 16}) + diff((x*y*(48 - x - y)), y).subs({x: 16, y: 16})"
      expected: 0
:::

::: exercise
id: l6-lagrange.handout-14-8-10
number: "14.8.10"
tier: standard
topics: [lagrange-multipliers]
statement: |
  Find all points on the surface \(x^2 - yz = 5\) that are closest to the origin.
solution: |
  Minimise \(f = x^2 + y^2 + z^2\) subject to \(g = x^2 - yz = 5\). The gradient equation
  \[
  (2x, 2y, 2z) = \lambda(2x, -z, -y)
  \]
  reads
  \[
  \begin{aligned}
  x&=\lambda x,\\
  2y&=-\lambda z,\\
  2z&=-\lambda y.
  \end{aligned}
  \]

  Eliminating \(z\) between the last two gives \(y(4 - \lambda^2) = 0\):

  - If \(y = 0\), then \(z = 0\) and the constraint gives \(x = \pm\sqrt{5}\).
  - If \(\lambda = 2\), the first equation gives \(x = 0\), then \(z = -y\) and \(y^2 = 5\), at squared distance \(10\).
  - If \(\lambda = -2\), the first equation gives \(x = 0\), then \(z = y\) and \(-y^2 = 5\), which has no solution.

  The candidates have squared distance \(5\) at \((\pm\sqrt{5}, 0, 0)\) and \(10\) at \((0, \pm\sqrt{5}, \mp\sqrt{5})\). On the surface, \(x^2 = 5 + yz\), so
  \[
  \begin{aligned}
  f&=5 + yz + y^2 + z^2\\
  &\ge 5 + \tfrac{1}{2}(y^2 + z^2)\\
  &\ge 5.
  \end{aligned}
  \]
  The value \(5\) is the minimum. The closest points are \((\sqrt{5}, 0, 0)\) and \((-\sqrt{5}, 0, 0)\).
provenance: handout-answer
steps:
  - The system \(x = \lambda x\), \(2y = -\lambda z\), \(2z = -\lambda y\) and \(x^2 - yz = 5\).
  - The case \(y = 0\) gives \((\pm\sqrt{5}, 0, 0)\), and \(\lambda = 2\) gives squared distance \(10\).
  - The bound \(f \ge 5\) shows the first case is the minimum.
verification:
  checks:
    - expr: "(5 + y*z + y**2 + z**2) - (5 + (y**2 + z**2)/2) - (y + z)**2/2"
      expected: 0
    - expr: "(x**2 + y**2 + z**2).subs({x: sqrt(5), y: 0, z: 0})"
      expected: 5
    - expr: "(x**2 + y**2 + z**2).subs({x: 0, y: sqrt(5), z: -sqrt(5)})"
      expected: 10
    - expr: "(x**2 - y*z).subs({x: sqrt(5), y: 0, z: 0})"
      expected: 5
:::

::: exercise
id: l6-lagrange.handout-14-8-1
number: "14.8.1"
tier: standard
topics: [lagrange-multipliers, worded-optimisation]
statement: |
  A six-sided rectangular box is to hold \(\tfrac12\) cubic meter. What shape should the box be to minimize surface area?
solution: |
  Let the edges be \(x, y, z > 0\). The surface area is \(S = 2(xy + yz + zx)\) and the constraint is \(xyz = \tfrac12\). The Lagrange conditions are
  \[
  \begin{aligned}
  2(y + z)&=\lambda yz,\\
  2(x + z)&=\lambda xz,\\
  2(x + y)&=\lambda xy.
  \end{aligned}
  \]
  Multiply the first equation by \(x\), the second by \(y\) and the third by \(z\). The right sides all equal \(\lambda xyz\), so
  \[
  x(y + z) = y(x + z) = z(x + y).
  \]
  - The first equality gives \(xz = yz\), hence \(x = y\).
  - The second gives \(xy = xz\), hence \(y = z\).

  The box is a cube with \(x^3 = \tfrac12\), so each edge is \(\left(\tfrac12\right)^{1/3}\).

  The surface area is \(6x^2 = 3\cdot 2^{1/3}\). If an edge tends to \(0\) with the volume fixed, another edge tends to infinity and \(S\) tends to infinity. The critical point is the minimum.
provenance: handout-answer
steps:
  - Surface area \(2(xy + yz + zx)\) with \(xyz = 1/2\).
  - Multiplying each condition by its variable gives \(x(y+z) = y(x+z) = z(x+y)\), so \(x = y = z\).
  - The cube has edge \(2^{-1/3}\) and surface area \(3\cdot 2^{1/3}\).
verification:
  checks:
    - expr: "(Rational(1, 2)**Rational(1, 3))**3"
      expected: Rational(1, 2)
    - expr: "(diff(2*(x*y + y*z + z*x), x) - (4/x)*y*z).subs({x: Rational(1, 2)**Rational(1, 3), y: Rational(1, 2)**Rational(1, 3), z: Rational(1, 2)**Rational(1, 3)})"
      expected: 0
    - expr: "(2*(x*y + y*z + z*x)).subs({x: Rational(1, 2)**Rational(1, 3), y: Rational(1, 2)**Rational(1, 3), z: Rational(1, 2)**Rational(1, 3)})"
      expected: "3*2**Rational(1, 3)"
:::

::: exercise
id: l6-lagrange.handout-14-8-2
number: "14.8.2"
tier: standard
topics: [lagrange-multipliers, worded-optimisation]
statement: |
  The post office will accept packages whose combined length and girth are at most \(130\) inches (girth is the maximum distance around the package perpendicular to the length). What is the largest volume that can be sent in a rectangular box?
solution: |
  Let the length be \(x\) and let the cross section have sides \(y\) and \(z\), so the girth is \(2y + 2z\). The volume \(V = xyz\) grows with every edge, so the largest box uses the whole allowance: \(x + 2y + 2z = 130\).

  The Lagrange conditions are
  \[
  yz = \lambda, \qquad xz = 2\lambda, \qquad xy = 2\lambda.
  \]
  - The last two give \(xz = xy\), so \(y = z\).
  - The first and second give \(xz = 2yz\), so \(x = 2y\).

  The constraint becomes \(2y + 2y + 2y = 130\), so
  \[
  y = z = \frac{65}{3}, \qquad x = \frac{130}{3}.
  \]
  The volume is
  \[
  \frac{130}{3}\cdot\left(\frac{65}{3}\right)^2 = \frac{2\cdot 65^3}{27},
  \]
  about \(20\,343\) cubic inches.

  When a cross-section side tends to \(0\), the volume tends to \(0\), so the critical point is the maximum.
provenance: handout-answer
steps:
  - Maximise \(xyz\) on \(x + 2y + 2z = 130\).
  - The conditions give \(y = z\) and \(x = 2y\).
  - Dimensions \(130/3 \times 65/3 \times 65/3\), volume \(2\cdot 65^3/27\).
verification:
  checks:
    - expr: "Rational(130, 3) + 2*Rational(65, 3) + 2*Rational(65, 3)"
      expected: 130
    - expr: "(x*z - 2*y*z).subs({x: Rational(130, 3), y: Rational(65, 3), z: Rational(65, 3)})"
      expected: 0
    - expr: "Rational(130, 3)*Rational(65, 3)**2"
      expected: Rational(2*65**3, 27)
:::

::: exercise
id: l6-lagrange.handout-14-8-3
number: "14.8.3"
tier: standard
topics: [lagrange-multipliers, worded-optimisation]
statement: |
  The bottom of a rectangular box costs twice as much per unit area as the sides and top. Find the shape for a given volume that will minimize cost.
solution: |
  Let the base be \(x \times y\) and the height \(z\), with \(xyz = V\). Take the cost of the sides and top as \(1\) per unit area, so the bottom costs \(2\). The cost is
  \[
  \begin{aligned}
  C&=2xy + xy + 2z(x + y)\\
  &=3xy + 2z(x + y).
  \end{aligned}
  \]
  The Lagrange conditions are
  \[
  \begin{aligned}
  3y + 2z&=\lambda yz,\\
  3x + 2z&=\lambda xz,\\
  2(x + y)&=\lambda xy.
  \end{aligned}
  \]
  Subtracting the first two gives
  \[
  3(y - x) = \lambda z (y - x).
  \]
  So \(x = y\), or \(\lambda z = 3\). If \(\lambda z = 3\), the first equation becomes \(3y + 2z = 3y\), hence \(z = 0\), which cannot hold a positive volume. So \(x = y\).

  The third equation gives \(\lambda = 4/x\). The first equation then gives \(3x + 2z = 4z\), so \(z = \tfrac32 x\). The volume \(x^2\cdot\tfrac32 x = V\) gives
  \[
  \begin{aligned}
  x^3&=\tfrac{2V}{3},\\
  z^3&=\tfrac{27}{8}\cdot\tfrac{2V}{3}=\tfrac{9V}{4}.
  \end{aligned}
  \]
  The box has a square base and is one and a half times as tall as it is wide, with dimensions
  \[
  \left(\tfrac{2V}{3}\right)^{1/3} \times \left(\tfrac{2V}{3}\right)^{1/3} \times \left(\tfrac{9V}{4}\right)^{1/3}.
  \]
  The cost tends to infinity when an edge tends to \(0\) with the volume fixed, so the critical point is the minimum.
provenance: handout-answer
steps:
  - Cost \(3xy + 2z(x + y)\) with \(xyz = V\).
  - The case \(\lambda z = 3\) forces \(z = 0\), so \(x = y\) and \(z = 3x/2\).
  - Dimensions \((2V/3)^{1/3}\), \((2V/3)^{1/3}\), \((9V/4)^{1/3}\).
verification:
  checks:
    - expr: "((2*V/3)**Rational(1, 3))**2*(9*V/4)**Rational(1, 3) - V"
      expected: 0
    - expr: "(9*V/4)**Rational(1, 3)/(2*V/3)**Rational(1, 3) - Rational(3, 2)"
      expected: 0
:::

::: exercise
id: l6-lagrange.handout-14-8-4
number: "14.8.4"
tier: standard
topics: [lagrange-multipliers, distance]
statement: |
  Using Lagrange multipliers, find the shortest distance from the point \((x_0, y_0, z_0)\) to the plane \(ax + by + cz = d\).
solution: |
  Assume \((a, b, c) \neq (0, 0, 0)\). Minimise the squared distance \(f = (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2\) on the plane \(g = ax + by + cz - d = 0\). The conditions \(\nabla f = \lambda \nabla g\) read
  \[
  \begin{aligned}
  2(x - x_0)&=\lambda a,\\
  2(y - y_0)&=\lambda b,\\
  2(z - z_0)&=\lambda c.
  \end{aligned}
  \]
  Put \(t = \lambda/2\). The closest point is \((x_0 + ta,\ y_0 + tb,\ z_0 + tc)\). It lies on the plane, so
  \[
  \begin{aligned}
  &a x_0 + b y_0 + c z_0 + t(a^2 + b^2 + c^2) = d,\\
  &t = \frac{d - a x_0 - b y_0 - c z_0}{a^2 + b^2 + c^2}.
  \end{aligned}
  \]
  The distance is \(|t|\sqrt{a^2 + b^2 + c^2}\), which equals
  \[
  \frac{|a x_0 + b y_0 + c z_0 - d|}{\sqrt{a^2 + b^2 + c^2}}.
  \]
  The squared distance is unbounded on the plane, so the single critical point is the minimum.
provenance: handout-answer
steps:
  - The conditions say the vector from the point to the closest point is a multiple of \((a, b, c)\).
  - Substituting into the plane gives \(t\).
  - Distance \(|t|\sqrt{a^2 + b^2 + c^2}\).
verification:
  checks:
    - expr: "(a*(x0 + a*t0) + b*(y0 + b*t0) + c*(z0 + c*t0) - d0).subs(t0, (d0 - a*x0 - b*y0 - c*z0)/(a**2 + b**2 + c**2))"
      expected: 0
    - expr: "((d0 - a*x0 - b*y0 - c*z0)/(a**2 + b**2 + c**2))**2*(a**2 + b**2 + c**2) - (a*x0 + b*y0 + c*z0 - d0)**2/(a**2 + b**2 + c**2)"
      expected: 0
:::

::: exercise
id: l6-lagrange.handout-14-8-14
number: "14.8.14"
tier: standard
topics: [lagrange-multipliers, global-extrema]
statement: |
  Find the maximum and minimum values of \(f(x, y) = e^{xy}\) subject to the constraint \(g(x, y) = x^3 + y^3 - 16 = 0\).
solution: |
  The conditions \(\nabla f = \lambda \nabla g\) read
  \[
  y\,e^{xy} = 3\lambda x^2, \qquad x\,e^{xy} = 3\lambda y^2.
  \]
  If \(x = 0\), the first equation gives \(y\,e^{0} = 0\), so \(y = 0\), and \((0, 0)\) is not on the curve. So \(x \neq 0\), and likewise \(y \neq 0\). Multiplying the first equation by \(y^2\) and the second by \(x^2\) makes the right sides equal, so
  \[
  y^3 e^{xy} = x^3 e^{xy}.
  \]
  The exponential is positive, so \(y^3 = x^3\) and \(x = y\) for real numbers. The constraint gives \(2x^3 = 16\), so \(x = y = 2\).

  The only critical point is \((2, 2)\), with \(f = e^4\). Far along the curve, \(y\) is close to \(-x\) and \(xy\) tends to \(-\infty\), so \(f\) tends to \(0\) and never reaches it, since \(e^{xy} > 0\). The value \(e^4\) exceeds all values near infinity, so it is the maximum. There is no minimum.
provenance: handout-answer
steps:
  - Solve \(y e^{xy} = 3\lambda x^2\), \(x e^{xy} = 3\lambda y^2\) on \(x^3 + y^3 = 16\).
  - Cross-multiplying gives \(x^3 = y^3\), so \((2, 2)\).
  - Maximum \(e^4\). The values approach \(0\) along the curve without reaching it, so there is no minimum.
verification:
  checks:
    - expr: "(x**3 + y**3 - 16).subs({x: 2, y: 2})"
      expected: 0
    - expr: "(diff(exp(x*y), x) - 3*lam*x**2).subs({x: 2, y: 2, lam: exp(4)/6})"
      expected: 0
    - expr: "(diff(exp(x*y), y) - 3*lam*y**2).subs({x: 2, y: 2, lam: exp(4)/6})"
      expected: 0
    - expr: "exp(x*y).subs({x: 2, y: 2})"
      expected: "exp(4)"
:::

::: exercise
id: l6-lagrange.handout-14-8-15
number: "14.8.15"
tier: exam
topics: [lagrange-multipliers, global-extrema, closed-region]
examBlock: constrained-optimisation
statement: |
  Find the maximum and minimum values of \(f(x, y) = xy + \sqrt{9 - x^2 - y^2}\) when \(x^2 + y^2 \leq 9\).
solution: |
  The region is a closed disc, so the extreme values exist. Compare the interior critical points with the values on the boundary circle.

  **Interior.** With \(s = \sqrt{9 - x^2 - y^2}\), the conditions \(f_x = f_y = 0\) read
  \[
  \begin{aligned}
  y&=x/s,\\
  x&=y/s.
  \end{aligned}
  \]
  Substituting,
  \[
  x = x/s^2.
  \]
  So:

  - \(x = 0\), which forces \(y = 0\), or
  - \(s^2 = 1\), which forces \(y = x\) and \(x^2 + y^2 = 8\).

  The interior critical points are \((0, 0)\) with \(f = 3\) and \((2, 2)\), \((-2, -2)\) with \(f = 4 + 1 = 5\).

  **Boundary.** On \(x^2 + y^2 = 9\) the square root vanishes and \(f = xy\). Put \(x = 3\cos\theta\) and \(y = 3\sin\theta\), so
  \[
  f = \tfrac92\sin 2\theta,
  \]
  which runs from \(-\tfrac92\) to \(\tfrac92\).

  Comparing \(3\), \(5\) and \([-\tfrac92, \tfrac92]\):

  - the maximum is \(5\) at \((2, 2)\) and \((-2, -2)\),
  - the minimum is \(-\tfrac92\) at \(\left(\tfrac{3}{\sqrt2}, -\tfrac{3}{\sqrt2}\right)\) and \(\left(-\tfrac{3}{\sqrt2}, \tfrac{3}{\sqrt2}\right)\).
provenance: handout-answer
steps:
  - Interior critical points \((0, 0)\) with value \(3\) and \((\pm 2, \pm 2)\) with value \(5\).
  - Boundary values \(xy = \tfrac92 \sin 2\theta\) in \([-\tfrac92, \tfrac92]\).
  - Maximum \(5\), minimum \(-\tfrac92\).
verification:
  checks:
    - expr: "diff(x*y + sqrt(9 - x**2 - y**2), x).subs({x: 2, y: 2})"
      expected: 0
    - expr: "diff(x*y + sqrt(9 - x**2 - y**2), y).subs({x: 2, y: 2})"
      expected: 0
    - expr: "(x*y + sqrt(9 - x**2 - y**2)).subs({x: 2, y: 2})"
      expected: 5
    - expr: "(x*y + sqrt(9 - x**2 - y**2)).subs({x: 0, y: 0})"
      expected: 3
    - expr: "(x*y + sqrt(9 - x**2 - y**2)).subs({x: 3/sqrt(2), y: -3/sqrt(2)})"
      expected: Rational(-9, 2)
:::

::: exercise
id: l6-lagrange.handout-14-8-17
number: "14.8.17"
tier: standard
topics: [lagrange-multipliers, worded-optimisation]
statement: |
  Find the dimensions of the closed rectangular box with maximum volume that can be inscribed in the unit sphere.
solution: |
  Place the centre of the box at the origin with edges parallel to the axes. A vertex is \((x, y, z)\) with \(x, y, z > 0\) and lies on the sphere, so \(x^2 + y^2 + z^2 = 1\). The box has edges \(2x\), \(2y\), \(2z\), and the volume is \(V = 8xyz\).

  The Lagrange conditions are
  \[
  \begin{aligned}
  8yz&=2\lambda x,\\
  8xz&=2\lambda y,\\
  8xy&=2\lambda z.
  \end{aligned}
  \]
  Multiply by \(x\), \(y\), \(z\) respectively. All three left sides equal \(8xyz\), so
  \[
  \lambda x^2 = \lambda y^2 = \lambda z^2.
  \]
  Here \(\lambda \neq 0\), because \(\lambda = 0\) would force \(yz = xz = xy = 0\). So \(x = y = z\), and \(3x^2 = 1\) gives \(x = 1/\sqrt3\).

  The box is a cube of side \(2/\sqrt3\), with volume \(\tfrac{8}{3\sqrt3}\). The volume tends to \(0\) when a coordinate tends to \(0\), so the critical point is the maximum.
provenance: handout-answer
steps:
  - Vertex \((x, y, z)\) on the sphere, volume \(8xyz\).
  - The conditions give \(x = y = z\), so \(x = 1/\sqrt3\).
  - Cube of side \(2/\sqrt3\).
verification:
  checks:
    - expr: "(3*x**2 - 1).subs(x, 1/sqrt(3))"
      expected: 0
    - expr: "(8*x**3).subs(x, 1/sqrt(3))"
      expected: "8*sqrt(3)/9"
    - expr: "(8*y*z - 2*lam*x).subs({x: 1/sqrt(3), y: 1/sqrt(3), z: 1/sqrt(3), lam: 4/sqrt(3)})"
      expected: 0
:::

::: exercise
id: l6-lagrange.ex-lagrange-endpoint-trap
tier: standard
topics: [lagrange-multipliers, global-extrema]
statement: |
  Find the maximum and the minimum of \(f(x, y) = x^2 + y^2\) on the segment \(x + 2y = 10\), \(x \ge 0\), \(y \ge 0\). Say which of them the equation \(\nabla f = \lambda \nabla g\) finds.
solution: |
  Let \(g(x, y) = x + 2y\). Then \(\nabla f = (2x, 2y)\) and \(\nabla g = (1, 2)\), so
  \[
  \begin{aligned}
  2x&=\lambda,\\
  2y&=2\lambda,\\
  x + 2y&=10.
  \end{aligned}
  \]
  The first two equations give \(y = 2x\). The constraint gives \(5x = 10\), so \(x = 2\), \(y = 4\) and \(\lambda = 4\). The value is \(f(2, 4) = 20\).

  The constraint is the segment from \((0, 5)\) to \((10, 0)\). It is closed and bounded, so \(f\) has a maximum and a minimum on it, and each sits at the point found above or at an endpoint. The endpoints give \(f(0, 5) = 25\) and \(f(10, 0) = 100\).

  - The minimum is \(20\) at \((2, 4)\).
  - The maximum is \(100\), attained at the endpoint \((10, 0)\).

  The equation \(\nabla f = \lambda \nabla g\) finds only the minimum. The endpoints of the segment have to be evaluated separately to find the maximum.

  As a check,
  \[
  f(x, (10 - x)/2) = \tfrac54 x^2 - 5x + 25
  \]
  on \(0 \le x \le 10\). It has its lowest point at \(x = 2\), and it is largest at the end \(x = 10\) of the interval.
provenance: written-for-site
steps:
  - The system \(2x = \lambda\), \(2y = 2\lambda\) with \(x + 2y = 10\) gives \((2, 4)\), with value \(20\).
  - The endpoints \((0, 5)\) and \((10, 0)\) give \(25\) and \(100\).
  - The minimum is \(20\) and the maximum is \(100\), and the multiplier equation finds only the minimum.
verification:
  checks:
    - expr: 'expand((x**2+y**2).subs(y, (10-x)/2))'
      expected: '5*x**2/4-5*x+25'
    - expr: 'diff(5*x**2/4-5*x+25, x).subs(x, 2)'
      expected: '0'
    - expr: 'Tuple((x**2+y**2).subs({x: 2, y: 4}), (x**2+y**2).subs({x: 0, y: 5}), (x**2+y**2).subs({x: 10, y: 0}))'
      expected: 'Tuple(20, 25, 100)'
:::

::: exercise
id: l6-lagrange.ex-lagrange-disk-interior-minimum
tier: exam
topics: [lagrange-multipliers, global-extrema, closed-region]
statement: |
  Find the maximum and the minimum values of \(f(x, y) = x^2 + 2y^2 - x\) on the closed disk \(x^2 + y^2 \le 1\), and the points where they are attained.
solution: |
  The disk is closed and bounded, so both values exist. Compare the interior critical points with the values on the boundary circle.

  **Interior.** The partial derivatives are
  \[
  f_x = 2x - 1, \qquad f_y = 4y.
  \]
  They vanish at \((1/2, 0)\), which lies in the open disk. The value is \(f(1/2, 0) = -1/4\).

  **Boundary.** Let \(g = x^2 + y^2\). The conditions \(\nabla f = \lambda \nabla g\) read
  \[
  \begin{aligned}
  2x - 1&=2\lambda x,\\
  4y&=2\lambda y,\\
  x^2 + y^2&=1.
  \end{aligned}
  \]
  The second equation is \(y(4 - 2\lambda) = 0\), so \(y = 0\) or \(\lambda = 2\).

  - If \(y = 0\), the circle gives \(x = \pm 1\). The values are \(f(1, 0) = 0\) and \(f(-1, 0) = 2\).
  - If \(\lambda = 2\), the first equation gives \(2x - 1 = 4x\), so \(x = -1/2\). The circle gives \(y^2 = 3/4\), so \(y = \pm\sqrt{3}/2\). The value is
    \[
    f\left(-\tfrac12, \pm\tfrac{\sqrt3}{2}\right) = \tfrac14 + \tfrac32 + \tfrac12 = \tfrac94.
    \]

  The candidate values are \(-1/4\), \(0\), \(2\) and \(9/4\).

  - The maximum is \(9/4\), attained at \((-1/2, \sqrt{3}/2)\) and \((-1/2, -\sqrt{3}/2)\).
  - The minimum is \(-1/4\), attained at the interior point \((1/2, 0)\).
provenance: written-for-site
steps:
  - The interior critical point \((1/2, 0)\), with value \(-1/4\).
  - The multiplier system on the circle, split into \(y = 0\) and \(\lambda = 2\).
  - The boundary points and values \(0\), \(2\) and \(9/4\).
  - The maximum is \(9/4\) at \((-1/2, \pm\sqrt{3}/2)\), and the minimum is \(-1/4\) at \((1/2, 0)\).
verification:
  checks:
    - expr: 'Tuple(diff(x**2+2*y**2-x, x), diff(x**2+2*y**2-x, y)).subs({x: Rational(1, 2), y: 0})'
      expected: 'Tuple(0, 0)'
    - expr: '(x**2+2*y**2-x).subs({x: Rational(1, 2), y: 0})'
      expected: '-1/4'
    - expr: 'Tuple((x**2+2*y**2-x).subs({x: 1, y: 0}), (x**2+2*y**2-x).subs({x: -1, y: 0}))'
      expected: 'Tuple(0, 2)'
    - expr: 'Tuple(2*x-1-2*lam*x, 4*y-2*lam*y).subs({x: -Rational(1, 2), y: sqrt(3)/2, lam: 2})'
      expected: 'Tuple(0, 0)'
    - expr: '(x**2+2*y**2-x).subs({x: -Rational(1, 2), y: sqrt(3)/2})'
      expected: '9/4'
    - expr: '(x**2+2*y**2-x).subs({x: -Rational(1, 2), y: -sqrt(3)/2})'
      expected: '9/4'
    - expr: '(x**2+2*y**2-x).subs({x: -1, y: 0})'
      expected: '2'
:::
