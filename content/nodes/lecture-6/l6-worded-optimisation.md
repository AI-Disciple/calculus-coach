---
id: l6-worded-optimisation
lecture: 6
order: 6
title: Worded optimisation problems
prerequisites: [l6-global-extrema]
sources:
  - { source: handout, section: "14.7", page: 373 }
  - { source: sheet-2, page: 2 }
  - { source: sheet-2, page: 3 }
  - { source: sheet-2, page: 4 }
  - { source: final-2024, page: 1 }
  - { source: final-2025, page: 1 }
  - { source: home-assignment-2022, page: 2 }
  - { source: mock-2022, page: 1 }
examWeight: high
examWeightNote: Constrained or worded optimisation carries 17.5% of the two recent finals. Placement in this lecture is provisional until the lecture has taken place. The formal statements follow the handout until the lecture 6 notes arrive.
status: reviewed
notation: |
  \(f_x\) and \(\partial f/\partial x\) are the same partial. \(H_f\) is the Hessian, and \(D = \det H_f = f_{xx} f_{yy} - (f_{xy})^2\).
---

::: section
title: Substitution in a worded problem
:::

::: formal-statement
kind: method
title: Substitution in a worded problem
source:
  source: handout
  section: "14.7"
  page: 375
text: |
  1. Name the **objective** \(f\) and the variables, and write the **domain**, including every bound such as \(x \ge 0\) or \(x \le 50\).
  2. When a constraint is an equation, solve it for one variable and substitute.
  3. The interior candidates are the critical points of the resulting function.
  4. At each critical point compute
  \[
  D = f_{xx} f_{yy} - (f_{xy})^2.
  \]

  - If \(D > 0\) and \(f_{xx} > 0\), the point is a local minimum.
  - If \(D > 0\) and \(f_{xx} < 0\), the point is a local maximum.

  On an unbounded domain, that local extremum is global when \(f\) grows without bound as the variables approach the edge of the domain.
:::

::: plain-explanation
text: |
  The word problem fixes the domain before any derivative is computed. A critical point counts only when it lies in that domain. The sign of \(f_{xx}\) separates a minimum from a maximum after \(D > 0\) has been checked.
:::

::: tip
text: |
  For positive side lengths, also watch \(f\) as a side tends to \(0\) or to infinity.
:::

::: worked-example
title: Open box of least surface area
problem: |
  An open rectangular box has no top, so five faces, and it holds a fixed volume \(V > 0\). Find the shape of least surface area.
solution: |
  Let the base edges be \(l > 0\) and \(w > 0\), and let the height be \(h > 0\). The volume constraint is \(lwh = V\), so \(h = V/(lw)\). The surface area is the bottom plus four sides,
  \[
  A(l, w) = lw + \frac{2V}{l} + \frac{2V}{w}.
  \]
  The partial derivatives are
  \[
  \begin{aligned}
  A_l&= w - 2V/l^2,\\
  A_w&= l - 2V/w^2.
  \end{aligned}
  \]
  They vanish when \(wl^2 = 2V = lw^2\). For positive edges this forces \(l = w\), and then \(l^3 = 2V\). The critical point is
  \[
  l = w = (2V)^{1/3}, \qquad h = \frac{V}{(2V)^{2/3}} = \frac{l}{2}.
  \]
  The base is a square, and the height is half of a base edge.

  The second derivatives are
  \[
  \begin{aligned}
  A_{ll}&= 4V/l^3,\\
  A_{ww}&= 4V/w^3,\\
  A_{lw}&= 1.
  \end{aligned}
  \]
  At the critical point \(l^3 = 2V\), so \(A_{ll} = 2\). The discriminant is \(D = 2 \cdot 2 - 1^2 = 3\). Here \(D > 0\) and \(A_{ll} > 0\), so the critical point is a local minimum.

  If \(l\) or \(w\) tends to \(0\) or to infinity, with the other variable positive, then \(A\) tends to infinity. The local minimum is the global minimum on \(l > 0\), \(w > 0\).
:::

::: guided-example
title: Sum of squared distances to two points
problem: |
  Minimize the sum of the squares of the distances from \((x, y)\) to \((0, 0)\) and to \((2, 0)\).
steps:
  - |
    The objective expands to
    \[
    \begin{aligned}
    f(x, y)&= x^2 + y^2 + (x - 2)^2 + y^2\\
    &= 2x^2 + 2y^2 - 4x + 4.
    \end{aligned}
    \]
  - |
    The partial derivatives are
    \[
    \begin{aligned}
    f_x&= 4x - 4,\\
    f_y&= 4y.
    \end{aligned}
    \]
    They vanish at \((1, 0)\).
  - |
    The second derivatives are \(f_{xx} = 4\), \(f_{yy} = 4\) and \(f_{xy} = 0\), so \(D = 16\). Here \(D > 0\) and \(f_{xx} > 0\), so \((1, 0)\) is a local minimum.
  - |
    Completing the square gives
    \[
    f(x, y) = 2(x - 1)^2 + 2y^2 + 2.
    \]
    The added squares are nonnegative, so the global minimum is \(2\), attained only at the midpoint \((1, 0)\).
:::

::: trap
text: |
  Let \(\Phi(r) = r + (r - b)^2\) with \(r \ge 0\). The second derivative is \(\Phi''(r) = 2\). The quantity \(2b - 1\) equals twice the critical radius \(r = b - 1/2\), so it tells you whether that radius is positive. The sign that classifies the critical radius is the sign of \(\Phi''(r) = 2\), which is positive, so the critical radius is a local minimum of \(\Phi\) whenever it satisfies \(r \ge 0\).
:::

::: going-deeper
title: Why the lone critical point is the optimum
text: |
  Worded problems often leave the edges of the domain out, such as a side length that must be positive. Suppose the function tends to infinity at every edge and far from the origin, and has a single critical point. Then some value is smaller than \(f\) at all points near the edges, and the points where \(f\) stays below that value form a closed bounded set. On that set \(f\) has a minimum, which is a critical point, so it is the lone critical point and the global minimum. This is the argument behind the sentence that the cost grows when an edge approaches \(0\).
:::

::: key-points
text: |
  - Name the objective \(f\) and write the domain with every bound. When a constraint is an equation, solve it for one variable and substitute. The interior candidates are the critical points of the resulting function, and a critical point counts only when it lies in the domain.
  - At a critical point, \(D > 0\) and \(f_{xx} > 0\) give a local minimum, and \(D > 0\) and \(f_{xx} < 0\) give a local maximum. On an unbounded domain, a local minimum is global when \(f\) grows without bound as the variables approach the edge of the domain.
  - The usual slip classifies the critical radius of \(\Phi(r) = r + (r - b)^2\) with \(r \ge 0\) by the sign of \(2b - 1\). That quantity equals twice the critical radius \(r = b - 1/2\), so it tells whether the radius is positive. The sign of \(\Phi''(r) = 2\) classifies it, and it is positive, so the critical radius is a local minimum of \(\Phi\) whenever it satisfies \(r \ge 0\).
:::

::: concept-question
id: l6-worded-optimisation.q-be48df82
question: |
  An open box has no top, a fixed volume, and the least surface area. Which shape is that box?
options:
  - text: A cube.
  - text: A square base whose height is half of a base edge.
    correct: true
  - text: A square base whose height is \(3/2\) times a base edge.
  - text: A square cross-section whose length is twice the side of that square.
explanation: |
  For the open box the critical-point equations give a square base and height \(h = l/2\). A closed six-sided box of least surface area is a cube. The factor \(3/2\) appears when the bottom costs twice as much as the other faces. The post-office package has a square cross-section and a longer length.
:::

::: exercise
id: l6-worded-optimisation.handout-14-7-14
number: "14.7.14"
tier: basic
topics: [worded-optimisation, second-derivative-test]
statement: |
  Given the three points \((1, 4)\), \((5, 2)\) and \((3, -2)\), the quantity
  \[
  \begin{aligned}
  &(x - 1)^2 + (y - 4)^2\\
  &+ (x - 5)^2 + (y - 2)^2\\
  &+ (x - 3)^2 + (y + 2)^2
  \end{aligned}
  \]
  is the sum of the squares of the distances from \((x, y)\) to those three points. Find \(x\) and \(y\) so that this quantity is minimized.
solution: |
  Call the quantity \(f(x, y)\). Then
  \[
  \begin{aligned}
  f_x&= 6x - 18,\\
  f_y&= 6y - 8.
  \end{aligned}
  \]
  Both vanish at \(x = 3\) and \(y = 4/3\), so the only critical point is \((3, 4/3)\).

  The second derivatives are \(f_{xx} = 6\), \(f_{yy} = 6\) and \(f_{xy} = 0\), so \(D = 36\). Here \(D > 0\) and \(f_{xx} > 0\), so the critical point is a local minimum. The same second derivatives show that \(f\) is a quadratic opening upwards, so the local minimum is the global minimum. The minimum value is \(80/3\).
provenance: handout-answer
steps:
  - Partial derivatives \(f_x = 6x - 18\) and \(f_y = 6y - 8\).
  - Critical point \((3, 4/3)\).
  - Discriminant \(D = 36 > 0\) and \(f_{xx} = 6 > 0\), so a minimum.
verification:
  checks:
    - expr: "(diff((x-1)**2+(y-4)**2+(x-5)**2+(y-2)**2+(x-3)**2+(y+2)**2, x).subs({x: 3, y: Rational(4, 3)}), diff((x-1)**2+(y-4)**2+(x-5)**2+(y-2)**2+(x-3)**2+(y+2)**2, y).subs({x: 3, y: Rational(4, 3)}))"
      expected: "(0, 0)"
    - expr: "diff((x-1)**2+(y-4)**2+(x-5)**2+(y-2)**2+(x-3)**2+(y+2)**2, x, 2)*diff((x-1)**2+(y-4)**2+(x-5)**2+(y-2)**2+(x-3)**2+(y+2)**2, y, 2) - diff((x-1)**2+(y-4)**2+(x-5)**2+(y-2)**2+(x-3)**2+(y+2)**2, x, y)**2"
      expected: 36
    - expr: "((x-1)**2+(y-4)**2+(x-5)**2+(y-2)**2+(x-3)**2+(y+2)**2).subs({x: 3, y: Rational(4, 3)})"
      expected: "Rational(80, 3)"
:::

::: exercise
id: l6-worded-optimisation.handout-14-7-11
number: "14.7.11"
tier: basic
topics: [worded-optimisation, second-derivative-test]
statement: |
  Find the shortest distance from the origin to the plane \(x + y + z = 10\).
solution: |
  Solve the plane for \(z = 10 - x - y\). The squared distance from the origin to \((x, y, z)\) is
  \[
  f(x, y) = x^2 + y^2 + (10 - x - y)^2.
  \]
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&= 4x + 2y - 20,\\
  f_y&= 2x + 4y - 20.
  \end{aligned}
  \]
  They vanish at \(x = y = 10/3\), so \(z = 10/3\).

  The second derivatives are \(f_{xx} = 4\), \(f_{yy} = 4\) and \(f_{xy} = 2\), so \(D = 12\). Here \(D > 0\) and \(f_{xx} > 0\), so the critical point is a local minimum of \(f\). As \(\sqrt{x^2 + y^2}\) tends to infinity, \(f\) tends to infinity, so the local minimum is the global minimum on the plane.

  The minimum of \(f\) is \(100/3\). The shortest distance is \(\sqrt{100/3}\).
provenance: handout-answer
steps:
  - Squared distance \(f(x, y) = x^2 + y^2 + (10 - x - y)^2\).
  - Critical point \((10/3, 10/3, 10/3)\).
  - Discriminant \(D = 12 > 0\) and \(f_{xx} = 4 > 0\), and \(f\) grows at infinity.
  - Distance \(\sqrt{100/3}\).
verification:
  checks:
    - expr: "(diff(x**2 + y**2 + (10 - x - y)**2, x).subs({x: Rational(10, 3), y: Rational(10, 3)}), diff(x**2 + y**2 + (10 - x - y)**2, y).subs({x: Rational(10, 3), y: Rational(10, 3)}))"
      expected: "(0, 0)"
    - expr: "(x**2 + y**2 + (10 - x - y)**2).subs({x: Rational(10, 3), y: Rational(10, 3)})"
      expected: "Rational(100, 3)"
    - expr: "sqrt((x**2 + y**2 + (10 - x - y)**2).subs({x: Rational(10, 3), y: Rational(10, 3)})) - sqrt(Rational(100, 3))"
      expected: 0
    - expr: "diff(x**2 + y**2 + (10 - x - y)**2, x, 2)*diff(x**2 + y**2 + (10 - x - y)**2, y, 2) - diff(x**2 + y**2 + (10 - x - y)**2, x, y)**2"
      expected: 12
:::

::: section
title: Closed bounded region
:::

::: formal-statement
kind: method
title: Closed bounded region
source:
  source: handout
  section: "14.7"
  page: 376
text: |
  If \(f\) is continuous on a **closed and bounded** set in the plane, then \(f\) attains a maximum value and a minimum value. Each one occurs at a critical point in the interior or at a point of the boundary. The boundary consists of curves. On each curve:

  - find the critical points of the restricted function,
  - evaluate the endpoints.

  Include every **corner**, where two boundary curves meet.
:::

::: plain-explanation
text: |
  A triangle, a rectangle, and a closed quarter disk are closed and bounded once the edges are included.

  1. List the interior critical points.
  2. Restrict \(f\) to each edge and check the endpoints of that edge. The corners appear as those endpoints.
  3. The maximum is the largest number in that list, and the minimum is the smallest.
:::

::: worked-example
title: Largest box of diagonal 1
problem: |
  A rectangular box has space diagonal \(1\), and the edges \(x\), \(y\) and \(z\) are nonnegative. Find the maximum volume.
solution: |
  The diagonal constraint is \(x^2 + y^2 + z^2 = 1\). In the first octant, \(z = \sqrt{1 - x^2 - y^2}\), and the volume is
  \[
  V(x, y) = xy\sqrt{1 - x^2 - y^2}.
  \]
  The domain is the closed quarter disk \(x \ge 0\), \(y \ge 0\), \(x^2 + y^2 \le 1\).

  For \(x^2 + y^2 < 1\),
  \[
  \begin{aligned}
  V_x&= \frac{y(1 - 2x^2 - y^2)}{\sqrt{1 - x^2 - y^2}},\\
  V_y&= \frac{x(1 - x^2 - 2y^2)}{\sqrt{1 - x^2 - y^2}}.
  \end{aligned}
  \]
  The numerators vanish when:

  - \(x = 0\),
  - \(y = 0\),
  - \(2x^2 + y^2 = 1\) and \(x^2 + 2y^2 = 1\).

  The last pair gives \(x^2 = y^2\), hence \(3x^2 = 1\). The interior critical point in the open quarter disk is \(x = y = 1/\sqrt{3}\). Then \(z = 1/\sqrt{3}\) as well, and
  \[
  V = \frac{1}{3\sqrt{3}}.
  \]

  On the boundary the volume is \(0\). That boundary is the two radii \(x = 0\) and \(y = 0\), together with the arc \(x^2 + y^2 = 1\), where \(z = 0\). The corners \((0, 0)\), \((1, 0)\) and \((0, 1)\) are included, and each gives volume \(0\).

  The interior value \(1/(3\sqrt{3})\) is positive, so it is the maximum. The maximizing box is the cube of side \(1/\sqrt{3}\).
:::

::: trap
text: |
  On a closed region the maximum can sit at a corner. Take \(f(x, y) = x + y\) on the triangle \(x \ge 0\), \(y \ge 0\), \(x + y \le 1\). The gradient is \((1, 1)\), so the interior has no critical point. Along the edge \(x + y = 1\) the function equals \(1\), and at the corner \((0, 0)\) it equals \(0\). The maximum on the triangle is \(1\), attained along that edge, including the corners \((1, 0)\) and \((0, 1)\).
:::

::: key-points
text: |
  - If \(f\) is continuous on a closed and bounded set in the plane, then \(f\) attains a maximum value and a minimum value. Each one occurs at a critical point in the interior or at a point of the boundary.
  - List the interior critical points. Restrict \(f\) to each boundary curve, find the critical points of the restricted function and evaluate the endpoints, including every corner. The maximum is the largest number in that list, and the minimum is the smallest.
  - The usual slip stops at the interior critical points and skips the boundary. For \(f(x, y) = x + y\) on the triangle \(x \ge 0\), \(y \ge 0\), \(x + y \le 1\), the gradient is \((1, 1)\) and the interior has no critical point. The maximum is \(1\), attained along the edge \(x + y = 1\), including the corners \((1, 0)\) and \((0, 1)\).
:::

::: concept-question
id: l6-worded-optimisation.q-2a7e75c0
question: |
  The profit \(f(x, y) = 48x + 96y - x^2 - 2xy - 9y^2\) has one critical point, at \((21, 3)\). The feasible set is the rectangle \(0 \le x \le 50\), \(0 \le y \le 25\). Where is the maximum on that rectangle?
options:
  - text: At \((21, 3)\).
    correct: true
  - text: At a corner of the rectangle.
  - text: On the edge \(x = 50\).
  - text: The second-derivative test says nothing, because \(D = 0\).
explanation: |
  The point \((21, 3)\) lies inside the rectangle. There \(f_{xx} = -2\), \(f_{yy} = -18\) and \(f_{xy} = -2\), so \(D = 32 > 0\) and \(f_{xx} < 0\). The critical point is a maximum. The same second derivatives are constant, and \(D > 0\) with \(f_{xx} < 0\) everywhere, so this is the maximum on the whole plane and on the rectangle.
:::

::: concept-question
id: l6-worded-optimisation.q-a31486e5
question: |
  The profit \(f(x, y) = 48x + 96y - x^2 - 2xy - 9y^2\) has one critical point, at \((21, 3)\). The feasible set is now the rectangle \(0 \le x \le 15\), \(0 \le y \le 25\). Where is the maximum on that rectangle?
options:
  - text: At \((21, 3)\).
  - text: At the corner \((15, 0)\).
  - text: On the edge \(x = 15\).
    correct: true
  - text: On the edge \(y = 25\).
explanation: |
  The point \((21, 3)\) has \(x = 21 > 15\), so it lies outside the rectangle and is dropped. The rectangle has no interior critical point, so the maximum lies on the boundary. On \(x = 15\), \(f(15, y) = 495 + 66y - 9y^2\), which is largest at \(y = 11/3\) with value \(616\). On \(y = 0\) the values are at most \(495\), on \(x = 0\) at most \(256\) and on \(y = 25\) at most \(-3225\). The maximum is \(616\) at \((15, 11/3)\), on the edge \(x = 15\).
:::

::: exercise
id: l6-worded-optimisation.home-2022-q4
number: "14.7.8 (Home assignment 2022, exercise 4)"
tier: standard
topics: [worded-optimisation, second-derivative-test]
examBlock: constrained-optimisation
statement: |
  A six-sided rectangular box is to hold \(1/2\) cubic metre. What shape should the box be to minimize the surface area?
solution: |
  Let the edge lengths be \(a\), \(b\) and \(c\), with \(a > 0\), \(b > 0\) and \(c > 0\). The volume is \(V = abc = 1/2\). The surface area of the six faces is \(S = 2(ab + bc + ac)\).

  Eliminate \(c = V/(ab)\). Then
  \[ S(a, b) = 2\left(ab + \frac{V}{a} + \frac{V}{b}\right). \]
  The partial derivatives are
  \[
  \begin{aligned}
  S_a&= 2\left(b - V/a^2\right),\\
  S_b&= 2\left(a - V/b^2\right).
  \end{aligned}
  \]
  They vanish when \(V/a = ab = V/b\), hence \(a = b\) and \(a^3 = V\). Since \(a = b\) and \(a^3 = V\), the third edge is \(c = V/a^2 = a\). With \(V = 1/2\),
  \[ a = b = c = \left(\frac{1}{2}\right)^{1/3}. \]

  At this point \(V/a^3 = 1\). The second derivatives are \(S_{aa} = 4V/a^3 = 4\), \(S_{bb} = 4\) and \(S_{ab} = 2\), so the discriminant is \(D = 4 \cdot 4 - 2^2 = 12\). Here \(D > 0\) and \(S_{aa} > 0\), so the critical point is a local minimum. It is the only critical point for positive edges. \(S\) grows without bound when \(a\) or \(b\) approaches \(0\) or \(+\infty\), so the cube gives the least surface area. That area is \(3 \cdot 2^{1/3}\) square metres.
provenance: official-key
steps:
  - Volume \(V = abc = 1/2\), with \(c\) eliminated from the surface area.
  - Critical point condition \(a = b\) and \(a^3 = V\).
  - The side length \(a = b = c = (1/2)^{1/3}\).
  - Discriminant \(D = 12\) and \(S_{aa} = 4 > 0\), so a minimum.
verification:
  checks:
    - expr: "(diff(2*(aa*bb + Rational(1,2)/aa + Rational(1,2)/bb), aa).subs({aa: (Rational(1,2))**Rational(1,3), bb: (Rational(1,2))**Rational(1,3)}), diff(2*(aa*bb + Rational(1,2)/aa + Rational(1,2)/bb), bb).subs({aa: (Rational(1,2))**Rational(1,3), bb: (Rational(1,2))**Rational(1,3)}))"
      expected: (0, 0)
    - expr: "(diff(2*(aa*bb + Rational(1,2)/aa + Rational(1,2)/bb), aa, 2)*diff(2*(aa*bb + Rational(1,2)/aa + Rational(1,2)/bb), bb, 2) - diff(2*(aa*bb + Rational(1,2)/aa + Rational(1,2)/bb), aa, bb)**2).subs({aa: (Rational(1,2))**Rational(1,3), bb: (Rational(1,2))**Rational(1,3)})"
      expected: 12
    - expr: "diff(2*(aa*bb + Rational(1,2)/aa + Rational(1,2)/bb), aa, 2).subs({aa: (Rational(1,2))**Rational(1,3), bb: (Rational(1,2))**Rational(1,3)})"
      expected: 4
    - expr: "((Rational(1,2))**Rational(1,3))**3"
      expected: Rational(1, 2)
    - expr: "Rational(1,2)/(((Rational(1,2))**Rational(1,3))**2) - (Rational(1,2))**Rational(1,3)"
      expected: 0
    - expr: "(2*(aa*bb + Rational(1,2)/aa + Rational(1,2)/bb)).subs({aa: (Rational(1,2))**Rational(1,3), bb: (Rational(1,2))**Rational(1,3)})"
      expected: "3*2**Rational(1,3)"
:::

::: exercise
id: l6-worded-optimisation.handout-14-7-9
number: "14.7.9"
tier: standard
topics: [worded-optimisation, global-extrema]
statement: |
  The post office will accept a package whose length plus girth is at most \(130\) inches. Girth is the perimeter of a cross-section perpendicular to the length, and the length is the largest of the three dimensions. Find the maximum volume of a rectangular box that can be sent.
solution: |
  Let the cross-section have sides \(x > 0\) and \(y > 0\), and let the length be \(z\). Then \(z \ge x\), \(z \ge y\), and \(z + 2(x + y) \le 130\). The volume \(xyz\) increases if \(z\) increases, so a maximum uses the whole allowance \(z = 130 - 2x - 2y\), together with \(z \ge x\) and \(z \ge y\). Those inequalities are \(3x + 2y \le 130\) and \(2x + 3y \le 130\).

  The volume is \(V(x, y) = xy(130 - 2x - 2y)\). The partial derivatives are
  \[
  \begin{aligned}
  V_x&= y(130 - 4x - 2y),\\
  V_y&= x(130 - 2x - 4y).
  \end{aligned}
  \]
  For \(x > 0\) and \(y > 0\) they vanish when \(x = y = 65/3\). Then \(z = 130/3\). This point satisfies \(z > x\) and \(z > y\), so it lies in the interior of the region. The volume there is
  \[
  \frac{65}{3} \cdot \frac{65}{3} \cdot \frac{130}{3} = \frac{2 \cdot 65^3}{27}.
  \]

  The second derivatives give \(V_{xx} = -260/3 < 0\) and \(D = 16900/3 > 0\) at this point, so it is a local maximum.

  On the boundary:

  - If \(x = 0\) or \(y = 0\) or \(z = 0\), the volume is \(0\).
  - On the edge where the length equals one adjacent side, \(z = x\) and \(3x + 2y = 130\) with \(x \ge y \ge 0\), the restricted volume has a largest value \(4394000/243\), at \(x = z = 260/9\) and \(y = 65/3\). That value is smaller than \(2 \cdot 65^3/27\), since the difference is \(549250/243 > 0\).
  - The symmetric edge \(z = y\) gives the same smaller volume.

  The maximum volume is \(2 \cdot 65^3/27\) cubic inches, for a box of dimensions \(65/3\), \(65/3\) and \(130/3\).
provenance: handout-answer
steps:
  - Length plus girth uses the full \(130\) inches, with length the longest side.
  - Interior critical point \(x = y = 65/3\), \(z = 130/3\).
  - Local maximum from \(D > 0\) and \(V_{xx} < 0\).
  - Boundary volumes, including the edge where two sides share the longest length, are smaller.
verification:
  checks:
    - expr: "(diff(x*y*(130-2*x-2*y), x).subs({x: Rational(65, 3), y: Rational(65, 3)}), diff(x*y*(130-2*x-2*y), y).subs({x: Rational(65, 3), y: Rational(65, 3)}))"
      expected: "(0, 0)"
    - expr: "(x*y*(130-2*x-2*y)).subs({x: Rational(65, 3), y: Rational(65, 3)}) - 2*65**3/27"
      expected: 0
    - expr: "(diff(x*y*(130-2*x-2*y), x, 2)*diff(x*y*(130-2*x-2*y), y, 2) - diff(x*y*(130-2*x-2*y), x, y)**2).subs({x: Rational(65, 3), y: Rational(65, 3)})"
      expected: "Rational(16900, 3)"
    - expr: "(x**2*(130-3*x)/2).subs(x, Rational(260, 9)) - Rational(4394000, 243)"
      expected: 0
    - expr: "2*65**3/27 - Rational(4394000, 243) - Rational(549250, 243)"
      expected: 0
:::

::: exercise
id: l6-worded-optimisation.handout-14-7-10
number: "14.7.10"
tier: standard
topics: [worded-optimisation, second-derivative-test]
statement: |
  The bottom of a rectangular box costs twice as much per unit area as the sides and the top. For a given volume \(V > 0\), find the shape that minimizes the cost.
solution: |
  Let the base edges be \(x > 0\) and \(y > 0\), and let the height be \(z > 0\), with \(xyz = V\). Take the unit cost of the sides and the top to be \(1\), and the unit cost of the bottom to be \(2\). Multiplying every price by the same positive constant multiplies \(C\) by that constant and leaves the minimizer unchanged. The cost is
  \[
  C(x, y) = 3xy + \frac{2V}{x} + \frac{2V}{y}.
  \]
  The partial derivatives are
  \[
  \begin{aligned}
  C_x&= 3y - 2V/x^2,\\
  C_y&= 3x - 2V/y^2.
  \end{aligned}
  \]
  They vanish when \(3x^2 y = 2V = 3xy^2\). For positive edges, \(x = y\) and \(x^3 = 2V/3\). Then
  \[
  z = \frac{V}{x^2} = \frac{3}{2}x,
  \]
  so
  \[
  x = y = \left(\frac{2V}{3}\right)^{1/3}, \qquad z = \left(\frac{9V}{4}\right)^{1/3}.
  \]
  The base is a square, and the height is \(3/2\) times the base edge.

  At this point \(C_{xx} = 6\), \(C_{yy} = 6\) and \(C_{xy} = 3\), so \(D = 27\). Here \(D > 0\) and \(C_{xx} > 0\), so the critical point is a local minimum. If \(x\) or \(y\) tends to \(0\) or to infinity, then \(C\) tends to infinity. The local minimum is the global minimum for \(x > 0\) and \(y > 0\).
provenance: handout-answer
steps:
  - Cost \(C = 3xy + 2V/x + 2V/y\) after eliminating the height.
  - Critical point \(x = y = (2V/3)^{1/3}\) and \(z = (3/2)x\).
  - Discriminant \(D = 27 > 0\) and \(C_{xx} = 6 > 0\).
  - Cost grows at the edge of the domain, so the critical point is the global minimum.
verification:
  checks:
    - expr: "(diff(3*x*y + 2*V/x + 2*V/y, x).subs({x: (2*V/3)**Rational(1, 3), y: (2*V/3)**Rational(1, 3)}), diff(3*x*y + 2*V/x + 2*V/y, y).subs({x: (2*V/3)**Rational(1, 3), y: (2*V/3)**Rational(1, 3)}))"
      expected: "(0, 0)"
    - expr: "(diff(3*x*y + 2*V/x + 2*V/y, x, 2)*diff(3*x*y + 2*V/x + 2*V/y, y, 2) - diff(3*x*y + 2*V/x + 2*V/y, x, y)**2).subs({x: (2*V/3)**Rational(1, 3), y: (2*V/3)**Rational(1, 3)})"
      expected: 27
    - expr: "V/((2*V/3)**Rational(1, 3))**2 - (Rational(3, 2))*(2*V/3)**Rational(1, 3)"
      expected: 0
    - expr: "((9*V/4)**Rational(1, 3))**3 - 9*V/4"
      expected: 0
:::

::: exercise
id: l6-worded-optimisation.handout-14-7-13
number: "14.7.13"
tier: standard
topics: [worded-optimisation, global-extrema]
statement: |
  A trough is formed by bending up the two sides of a long metal rectangle of width \(2\) metres, so that the cross-section is an isosceles trapezoid. The bottom has width \(y\) and each bent side has width \(x\), with \(2x + y = 2\). Each side makes an angle \(\phi\) with the horizontal. How should the sheet be bent to maximize the volume of the trough?
solution: |
  The sheet is long, so maximizing the volume is the same as maximizing the cross-sectional area. With \(0 \le x \le 1\) and \(0 \le \phi \le \pi\), the height is \(x\sin\phi\) and the top width is \(y + 2x\cos\phi\). The area is
  \[
  A(x, \phi) = x\sin\phi\,(2 - 2x + x\cos\phi).
  \]
  The partial derivatives vanish at \(x = 2/3\) and \(\phi = \pi/3\). Then the bottom is \(y = 2 - 2x = 2/3\). Each bent side has the same width as the bottom, and the angle with the horizontal is \(\pi/3\). The area there is \(\sqrt{3}/3\).

  At that point \(A_{xx} = -3\sqrt{3}/2 < 0\) and \(D = 2 > 0\), so it is a local maximum. On the boundary of the parameter rectangle:

  - The area is \(0\) when \(\phi = 0\), when \(\phi = \pi\), or when \(x = 0\).
  - When \(x = 1\) the bottom has width \(0\), and the triangular cross-section has area at most \(1/2\).

  Since \(\sqrt{3}/3 > 1/2\), the critical point is larger. It is the maximum.
provenance: handout-answer
steps:
  - Area \(A = x\sin\phi\,(2 - 2x + x\cos\phi)\).
  - Critical point \(x = 2/3\), \(\phi = \pi/3\), so the bottom is also \(2/3\).
  - Discriminant \(D = 2 > 0\) and \(A_{xx} < 0\).
  - Boundary areas are \(0\) or at most \(1/2\), both below \(\sqrt{3}/3\).
verification:
  checks:
    - expr: "(diff((2 - 2*x + x*cos(phi))*x*sin(phi), x).subs({x: Rational(2, 3), phi: pi/3}), diff((2 - 2*x + x*cos(phi))*x*sin(phi), phi).subs({x: Rational(2, 3), phi: pi/3}))"
      expected: "(0, 0)"
    - expr: "((2 - 2*x + x*cos(phi))*x*sin(phi)).subs({x: Rational(2, 3), phi: pi/3}) - sqrt(3)/3"
      expected: 0
    - expr: "2 - 2*Rational(2, 3)"
      expected: "Rational(2, 3)"
    - expr: "(diff((2 - 2*x + x*cos(phi))*x*sin(phi), x, 2)*diff((2 - 2*x + x*cos(phi))*x*sin(phi), phi, 2) - diff((2 - 2*x + x*cos(phi))*x*sin(phi), x, phi)**2).subs({x: Rational(2, 3), phi: pi/3})"
      expected: 2
    - expr: "(sqrt(3)/3)**2 - (Rational(1, 2))**2 - Rational(1, 12)"
      expected: 0
:::

::: exercise
id: l6-worded-optimisation.handout-14-7-16
number: "14.7.16"
tier: standard
topics: [worded-optimisation]
statement: |
  Find the shortest distance from the point \((0, b)\) to the parabola \(y = x^2\).
solution: |
  A point on the parabola is \((x, x^2)\). The squared distance from \((0, b)\) is
  \[
  f(x) = x^2 + (x^2 - b)^2.
  \]
  The derivative is
  \[
  f'(x) = 2x(2x^2 - 2b + 1),
  \]
  so the critical points are \(x = 0\) and, when \(b \ge 1/2\), the two points with \(x^2 = b - 1/2\). The second derivative is
  \[
  f''(x) = 12x^2 + 2 - 4b,
  \]
  so \(f''(0) = 2 - 4b\). Now split by the size of \(b\).

  - If \(b < 1/2\), then \(f''(0) > 0\) and \(b - 1/2 < 0\), so the only real critical point is \(x = 0\). There \(f(0) = b^2\). The distance is \(|b|\).
  - If \(b = 1/2\), the extra critical points collapse to \(x = 0\). Both \(|b|\) and \(\sqrt{b - 1/4}\) equal \(1/2\).
  - If \(b > 1/2\), then \(f''(0) < 0\), so \(x = 0\) is a local maximum of \(f\). At \(x^2 = b - 1/2\) the squared distance equals \(b - 1/4\). The comparison \(b^2 - (b - 1/4) = (b - 1/2)^2 > 0\) shows that these two points are closer than the vertex. The distance is \(\sqrt{b - 1/4}\).

  The shortest distance is \(|b|\) when \(b \le 1/2\), and \(\sqrt{b - 1/4}\) otherwise.
provenance: handout-answer
steps:
  - Squared distance \(f(x) = x^2 + (x^2 - b)^2\).
  - Critical points \(x = 0\) and \(x^2 = b - 1/2\) when that quantity is nonnegative.
  - For \(b \le 1/2\) the minimum is at the vertex, with distance \(|b|\).
  - For \(b > 1/2\) the minimum is at \(x^2 = b - 1/2\), with distance \(\sqrt{b - 1/4}\).
verification:
  checks:
    - expr: "factor(diff(x**2 + (x**2 - b)**2, x)) - 2*x*(2*x**2 - 2*b + 1)"
      expected: 0
    - expr: "diff(x**2 + (x**2 - b)**2, x, 2).subs(x, 0) - (2 - 4*b)"
      expected: 0
    - expr: "(x**2 + (x**2 - b)**2).subs(x, 0) - b**2"
      expected: 0
    - expr: "(r + (r - b)**2).subs(r, b - Rational(1, 2)) - (b - Rational(1, 4))"
      expected: 0
    - expr: "b**2 - (b - Rational(1, 4)) - (b - Rational(1, 2))**2"
      expected: 0
    - expr: "sqrt(b - Rational(1, 4)).subs(b, Rational(1, 2)) - Rational(1, 2)"
      expected: 0
    - expr: "sqrt((x**2 + (x**2 - b)**2).subs({x: 0, b: -3})) - 3"
      expected: 0
:::

::: exercise
id: l6-worded-optimisation.handout-14-7-19
number: "14.7.19"
tier: standard
topics: [worded-optimisation, global-extrema]
statement: |
  Find the volume of the largest rectangular box with edges parallel to the axes that can be inscribed in the ellipsoid \(2x^2 + 72y^2 + 18z^2 = 288\).
solution: |
  By symmetry the maximum box is centered at the origin. Its corner in the first octant is \((x, y, z)\) with \(x > 0\), \(y > 0\) and \(z > 0\) on the ellipsoid, and the volume is \(8xyz\). Solving the ellipsoid for the last coordinate gives
  \[
  z^2 = 16 - \frac{x^2}{9} - 4y^2,
  \]
  on the elliptical disk \(x^2/9 + 4y^2 \le 16\). Maximizing \(8xyz\) is the same as maximizing
  \[
  u(x, y) = x^2 y^2\left(16 - \frac{x^2}{9} - 4y^2\right),
  \]
  because the volume is \(8\sqrt{u}\).

  For \(x > 0\) and \(y > 0\),
  \[
  \begin{aligned}
  u_x&= 4xy^2\left(8 - \frac{x^2}{9} - 2y^2\right),\\
  u_y&= 2x^2 y\left(16 - \frac{x^2}{9} - 8y^2\right).
  \end{aligned}
  \]
  The factors in parentheses vanish when \(x^2/9 = 4y^2\) and \(y^2 = 4/3\). The positive solution is \(x = 4\sqrt{3}\) and \(y = 2\sqrt{3}/3\). Then \(z^2 = 16/3\), so \(z = 4\sqrt{3}/3\). The volume is
  \[
  8 \cdot 4\sqrt{3} \cdot \frac{2\sqrt{3}}{3} \cdot \frac{4\sqrt{3}}{3} = \frac{256}{\sqrt{3}}.
  \]

  On the boundary of the elliptical disk, \(z = 0\) and the volume is \(0\). The positive critical value is the maximum.
provenance: handout-answer
steps:
  - The inscribed box has volume \(8xyz\) with the corner on the ellipsoid.
  - The positive critical point is \(x = 4\sqrt{3}\), \(y = 2\sqrt{3}/3\), \(z = 4\sqrt{3}/3\).
  - The volume is \(256/\sqrt{3}\).
  - The boundary \(z = 0\) gives volume \(0\).
verification:
  checks:
    - expr: "(diff(x**2*y**2*(16 - x**2/9 - 4*y**2), x).subs({x: 4*sqrt(3), y: 2*sqrt(3)/3}), diff(x**2*y**2*(16 - x**2/9 - 4*y**2), y).subs({x: 4*sqrt(3), y: 2*sqrt(3)/3}))"
      expected: "(0, 0)"
    - expr: "16 - (4*sqrt(3))**2/9 - 4*(2*sqrt(3)/3)**2 - Rational(16, 3)"
      expected: 0
    - expr: "2*(4*sqrt(3))**2 + 72*(2*sqrt(3)/3)**2 + 18*Rational(16, 3) - 288"
      expected: 0
    - expr: "8*4*sqrt(3)*(2*sqrt(3)/3)*sqrt(Rational(16, 3)) - 256/sqrt(3)"
      expected: 0
:::

::: exercise
id: l6-worded-optimisation.sheet-2-10
number: "sheet 2 exercise 10"
tier: standard
topics: [worded-optimisation, global-extrema]
statement: |
  Pro-T company models monthly profit, in thousands of dollars, by
  \[
  f(x, y) = 48x + 96y - x^2 - 2xy - 9y^2,
  \]
  where \(x\) is the number of golf balls sold, in thousands, and \(y\) is the number of advertising hours. Production cannot pass \(50000\) balls, and advertising cannot pass \(25\) hours, so \(0 \le x \le 50\) and \(0 \le y \le 25\). Find \(x\) and \(y\) that maximize profit, and find the maximum profit.
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&= 48 - 2x - 2y,\\
  f_y&= 96 - 2x - 18y.
  \end{aligned}
  \]
  They vanish at \(x = 21\) and \(y = 3\). This point lies inside the rectangle.

  The second derivatives are \(f_{xx} = -2\), \(f_{yy} = -18\) and \(f_{xy} = -2\), so \(D = 32\). Here \(D > 0\) and \(f_{xx} < 0\) at every point, so \((21, 3)\) is the maximum of \(f\) on the whole plane, and therefore on the rectangle. The profit there is \(f(21, 3) = 648\), in thousands of dollars.

  The edges give smaller values:

  - On \(y = 0\) the maximum is \(576\), at \(x = 24\).
  - On \(x = 0\) the maximum is \(256\), at \(y = 16/3\).
  - On \(x = 50\) the maximum is \(-100\), at \(y = 0\).
  - On \(y = 25\) the maximum is \(-3225\), at \(x = 0\).

  Each of these is below \(648\). The corners are among those edge values. The maximum profit is \(648\) thousand dollars, at \(21000\) balls and \(3\) hours of advertising.
provenance: written-for-site
steps:
  - Critical point \((21, 3)\), inside the rectangle.
  - Discriminant \(D = 32 > 0\) and \(f_{xx} = -2 < 0\).
  - Edge maxima \(576\), \(256\), \(-100\) and \(-3225\), all below \(648\).
  - Maximum profit \(648\) thousand dollars.
verification:
  checks:
    - expr: "(diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, x).subs({x: 21, y: 3}), diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, y).subs({x: 21, y: 3}))"
      expected: "(0, 0)"
    - expr: "(48*x + 96*y - x**2 - 2*x*y - 9*y**2).subs({x: 21, y: 3})"
      expected: 648
    - expr: "diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, x, 2)*diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, y, 2) - diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, x, y)**2"
      expected: 32
    - expr: "(48*x - x**2).subs(x, 24)"
      expected: 576
    - expr: "(96*y - 9*y**2).subs(y, Rational(16, 3))"
      expected: 256
    - expr: "(48*x + 96*y - x**2 - 2*x*y - 9*y**2).subs({x: 50, y: 0})"
      expected: -100
    - expr: "(48*x + 96*y - x**2 - 2*x*y - 9*y**2).subs({x: 0, y: 25})"
      expected: -3225
:::

::: exercise
id: l6-worded-optimisation.sheet-2-11
number: "sheet 2 exercise 11"
tier: standard
topics: [worded-optimisation]
statement: |
  By investing \(x\) units of labor and \(y\) units of capital, a watch manufacturer produces
  \[
  P(x, y) = 50\, x^{0.4} y^{0.6}
  \]
  watches. Labor costs \(100\) dollars per unit and capital costs \(200\) dollars per unit. Find the maximum number of watches that can be produced on a budget of \(20000\) dollars. The level curves of \(P\) meet the budget line in the first quadrant, and the maximizing curve is tangent to that line.
solution: |
  The budget is \(100x + 200y = 20000\) with \(x \ge 0\) and \(y \ge 0\). Equivalently, \(y = 100 - x/2\) and \(0 \le x \le 200\). Then
  \[
  P(x) = 50\, x^{2/5}\left(100 - \frac{x}{2}\right)^{3/5}.
  \]
  For \(0 < x < 200\) the derivative vanishes only at \(x = 80\). The matching capital is \(y = 60\). The budget check is \(100 \cdot 80 + 200 \cdot 60 = 20000\).

  The relation that produces this point is \(0.4 y = 0.3 x\), which is the balance between the exponents \(2/5\) and \(3/5\) and the slope of the budget line. The production is
  \[
  P(80, 60) = 1000 \cdot 2^{4/5} \cdot 3^{3/5}.
  \]

  At the endpoints \(x = 0\) and \(x = 200\), one input is \(0\) and \(P = 0\). The value at \(x = 80\) is positive, and it is the only critical point on the interval, so it is the maximum.

  The budget line runs from \((200, 0)\) to \((0, 100)\). The level curve \(P = 1000 \cdot 2^{4/5} \cdot 3^{3/5}\) touches that line at \((80, 60)\). Nearby level curves of larger \(P\) miss the segment.
provenance: written-for-site
steps:
  - Budget line \(y = 100 - x/2\) for \(0 \le x \le 200\).
  - The only critical point in the open interval is \(x = 80\), \(y = 60\).
  - Production \(1000 \cdot 2^{4/5} \cdot 3^{3/5}\).
  - Endpoints give \(P = 0\), so the critical value is the maximum.
verification:
  checks:
    - expr: "diff(50*x**Rational(2, 5)*(100 - x/2)**Rational(3, 5), x).subs(x, 80)"
      expected: 0
    - expr: "100 - 80/2"
      expected: 60
    - expr: "100*80 + 200*60"
      expected: 20000
    - expr: "(50*x**Rational(2, 5)*(100 - x/2)**Rational(3, 5)).subs(x, 80) - 1000*2**Rational(4, 5)*3**Rational(3, 5)"
      expected: 0
    - expr: "(50*x**Rational(2, 5)*(100 - x/2)**Rational(3, 5)).subs(x, 200)"
      expected: 0
    - expr: "solve(diff(50*x**Rational(2, 5)*(100 - x/2)**Rational(3, 5), x), x)"
      expected: "[80]"
:::

::: exercise
id: l6-worded-optimisation.handout-14-7-12
number: "14.7.12"
tier: exam
topics: [worded-optimisation, second-derivative-test]
examBlock: constrained-optimisation
statement: |
  Find the shortest distance from the point \((x_0, y_0, z_0)\) to the plane \(ax + by + cz = d\). You may assume \(c \ne 0\).
solution: |
  Solve the plane for \(z = (d - ax - by)/c\). The squared distance from \((x_0, y_0, z_0)\) to a point \((x, y, z)\) on the plane is
  \[
  \begin{aligned}
  f(x, y)&= (x - x_0)^2 + (y - y_0)^2\\
  &\quad + \left(\frac{d - ax - by}{c} - z_0\right)^2.
  \end{aligned}
  \]
  This function has one critical point. Its discriminant is
  \[
  D = \frac{4(a^2 + b^2 + c^2)}{c^2} > 0,
  \]
  and \(f_{xx} = 2(1 + a^2/c^2) > 0\), so the critical point is a local minimum. As \(\sqrt{x^2 + y^2}\) tends to infinity, \(f\) tends to infinity, so the local minimum is the global minimum.

  The minimum of \(f\) equals \((ax_0 + by_0 + cz_0 - d)^2/(a^2 + b^2 + c^2)\). The shortest distance is
  \[
  \frac{|ax_0 + by_0 + cz_0 - d|}{\sqrt{a^2 + b^2 + c^2}}.
  \]
provenance: handout-answer
steps:
  - Squared distance after solving the plane for \(z\).
  - Discriminant \(D = 4(a^2 + b^2 + c^2)/c^2 > 0\) and \(f_{xx} > 0\).
  - The squared distance grows at infinity, so the critical point is the global minimum.
  - Distance \(|ax_0 + by_0 + cz_0 - d|/\sqrt{a^2 + b^2 + c^2}\).
verification:
  checks:
    - expr: "diff((x-x0)**2 + (y-y0)**2 + ((d - a*x - b*y)/c - z0)**2, x, 2)*diff((x-x0)**2 + (y-y0)**2 + ((d - a*x - b*y)/c - z0)**2, y, 2) - diff((x-x0)**2 + (y-y0)**2 + ((d - a*x - b*y)/c - z0)**2, x, y)**2 - 4*(a**2 + b**2 + c**2)/c**2"
      expected: 0
    - expr: "((x-x0)**2 + (y-y0)**2 + ((d - a*x - b*y)/c - z0)**2).subs(solve([diff((x-x0)**2 + (y-y0)**2 + ((d - a*x - b*y)/c - z0)**2, x), diff((x-x0)**2 + (y-y0)**2 + ((d - a*x - b*y)/c - z0)**2, y)], [x, y])) - (a*x0 + b*y0 + c*z0 - d)**2/(a**2 + b**2 + c**2)"
      expected: 0
:::

::: exercise
id: l6-worded-optimisation.home-2022-q7
number: "14.7.17 (Home assignment 2022, exercise 7)"
tier: exam
topics: [worded-optimisation]
examBlock: constrained-optimisation
statement: |
  Find the shortest distance from the point \((0, 0, b)\) to the surface \(z = x^2 + y^2\). Assume \(b > 0\).
solution: |
  A point on the surface is \((x, y, x^2 + y^2)\). The squared distance from \((0, 0, b)\) to that point is
  \[ \Theta(x, y) = x^2 + y^2 + (x^2 + y^2 - b)^2. \]
  The shortest distance is the square root of the minimum of \(\Theta\). Set \(r = x^2 + y^2\), with \(r \ge 0\). Then \(\Theta = r + (r - b)^2\), and
  \[ \frac{d\Theta}{dr} = 1 + 2(r - b), \qquad \frac{d^2\Theta}{dr^2} = 2. \]
  The first derivative vanishes at \(r = b - 1/2\). The second derivative is positive, so this critical radius is a minimum of the radial function whenever it lies in \(r \ge 0\).

  The gradient of \(\Theta\) vanishes at the origin for every \(b\), and it vanishes on the circle \(x^2 + y^2 = b - 1/2\) when that radius is positive.

  Now split by the size of \(b\).

  - If \(0 < b < 1/2\), then \(b - 1/2 < 0\). On \(r \ge 0\) the derivative \(1 + 2(r - b)\) stays positive, so \(\Theta\) is smallest at \(r = 0\). There \(\Theta(0, 0) = b^2\). The nearest point on the surface is \((0, 0, 0)\), and the distance is \(b\).
  - If \(b > 1/2\), the minimum sits on the circle \(x^2 + y^2 = b - 1/2\). The squared distance there is \(b - 1/4\), so the distance is \(\sqrt{b - 1/4}\). The origin remains a critical point, with squared distance \(b^2\), and \(b^2 - (b - 1/4) = (b - 1/2)^2 > 0\), so the circle is closer.
  - If \(b = 1/2\), the critical radius is \(0\). The circle shrinks to the origin. Both \(b^2\) and \(b - 1/4\) equal \(1/4\), so the distance is \(1/2\).

  The shortest distance is therefore \(b\) when \(0 < b \le 1/2\), and \(\sqrt{b - 1/4}\) when \(b \ge 1/2\).
provenance: official-key
steps:
  - Squared distance \(\Theta = x^2 + y^2 + (x^2 + y^2 - b)^2\), reduced to a function of \(r = x^2 + y^2\).
  - Critical radius \(r = b - 1/2\), with second derivative \(2\).
  - For \(0 < b < 1/2\) the minimum is at the origin, with distance \(b\).
  - For \(b > 1/2\) the minimum is on the circle \(r = b - 1/2\), with distance \(\sqrt{b - 1/4}\).
  - The case \(b = 1/2\), where the circle shrinks to the origin and the distance is \(1/2\).
verification:
  checks:
    - expr: "(x**2 + y**2 + (x**2 + y**2 - b)**2).subs({x: 0, y: 0})"
      expected: b**2
    - expr: "diff(r + (r - b)**2, r).subs(r, b - Rational(1, 2))"
      expected: 0
    - expr: "(r + (r - b)**2).subs(r, b - Rational(1, 2))"
      expected: b - Rational(1, 4)
    - expr: "diff(r + (r - b)**2, r, 2)"
      expected: 2
    - expr: "b**2 - (b - Rational(1, 4)) - (b - Rational(1, 2))**2"
      expected: 0
    - expr: "(b**2).subs(b, Rational(1, 2))"
      expected: Rational(1, 4)
    - expr: "(b - Rational(1, 4)).subs(b, Rational(1, 2))"
      expected: Rational(1, 4)
    - expr: "sqrt(b - Rational(1, 4)).subs(b, Rational(1, 2))"
      expected: Rational(1, 2)
    - expr: "diff(x**2 + y**2 + (x**2 + y**2 - b)**2, x).subs({y: 0, x: sqrt(b - Rational(1, 2))})"
      expected: 0
    - expr: "diff(x**2 + y**2 + (x**2 + y**2 - b)**2, y).subs({x: 0, y: sqrt(b - Rational(1, 2))})"
      expected: 0
:::

::: exercise
id: l6-worded-optimisation.home-2022-q8
number: "Home assignment 2022, exercise 8"
tier: exam
topics: [worded-optimisation, second-derivative-test]
examBlock: constrained-optimisation
statement: |
  When designing a new aircraft one wants to minimize fuel consumption while maximizing the load and the range. Fuel consumption is \(e^{L + D - 10}\), where \(L\) is the load in hundred tons and \(D\) is the range in thousand kilometres. Give a function \(f(D, L)\), a sum of three terms, whose minimum would minimize fuel consumption while maximizing \(L\) and \(D^2/10\). Compute the critical points of \(f\) and say which kind they are.

  Hint: to minimize \(A\) and maximize \(B\) at the same time, minimize \(A - B\).
solution: |
  Take the fuel term as \(A = e^{L + D - 10}\) and the quantity to maximize as \(B = L + D^2/10\). The hint gives
  \[ f(D, L) = e^{L + D - 10} - L - \frac{D^2}{10}. \]
  The partial derivatives are
  \[
  \begin{aligned}
  f_D&= e^{L + D - 10} - \frac{D}{5},\\
  f_L&= e^{L + D - 10} - 1.
  \end{aligned}
  \]
  Setting \(f_L = 0\) gives \(e^{L + D - 10} = 1\), so \(L + D = 10\). Setting \(f_D = 0\) then gives \(D/5 = 1\). The only critical point is \(D = 5\) and \(L = 5\).

  The second derivatives are
  \[
  \begin{aligned}
  f_{DD}&= e^{L + D - 10} - 1/5,\\
  f_{LL}&= e^{L + D - 10},\\
  f_{DL}&= e^{L + D - 10}.
  \end{aligned}
  \]
  At \(D = 5\) and \(L = 5\) they equal \(4/5\), \(1\) and \(1\). The Hessian determinant is \(4/5 - 1^2 = -1/5\).

  The determinant is negative, so the only critical point is a saddle. A saddle is not a minimum of \(f\).
provenance: official-key
steps:
  - The objective \(f(D, L) = e^{L + D - 10} - L - D^2/10\).
  - The partial derivatives and the only critical point \(D = L = 5\).
  - The Hessian determinant \(-1/5\), hence a saddle.
verification:
  checks:
    - expr: "(diff(exp(L + D - 10) - L - D**2/10, D).subs({D: 5, L: 5}), diff(exp(L + D - 10) - L - D**2/10, L).subs({D: 5, L: 5}))"
      expected: (0, 0)
    - expr: "(diff(exp(L + D - 10) - L - D**2/10, D, 2)*diff(exp(L + D - 10) - L - D**2/10, L, 2) - diff(exp(L + D - 10) - L - D**2/10, D, L)**2).subs({D: 5, L: 5})"
      expected: Rational(-1, 5)
    - expr: "solve([diff(exp(L + D - 10) - L - D**2/10, D), diff(exp(L + D - 10) - L - D**2/10, L)], [D, L])"
      expected: "[(5, 5)]"
:::

::: exercise
id: l6-worded-optimisation.home-2022-q9-1
number: "Home assignment 2022, exercise 9.1"
tier: exam
topics: [worded-optimisation, second-derivative-test]
examBlock: constrained-optimisation
statement: |
  A profit-maximizing firm wants to maximize the profit \(P = p \cdot Q - T_c\). Here \(p > 0\) is the number of units sold, \(Q\) is the income per unit and \(T_c\) is the total cost. Income depends on capital \(k > 0\) and work \(w > 0\) by \(Q = \sqrt{k} + w^{3/4}\). The cost is \(T_c = ak + bw\), where \(a > 0\) is the cost of a unit of capital and \(b > 0\) is the cost of a unit of work. The values of \(a\), \(b\) and \(p\) are known.

  Compute the critical points of \(P\). Which kind are they? Compute the maximum of \(P\).
solution: |
  Substitute the income and the cost:
  \[ P(k, w) = p\left(\sqrt{k} + w^{3/4}\right) - ak - bw. \]
  The partial derivatives are
  \[
  \begin{aligned}
  P_k&= \frac{p}{2\sqrt{k}} - a,\\
  P_w&= \frac{3p}{4}\, w^{-1/4} - b.
  \end{aligned}
  \]
  - \(P_k = 0\) gives \(\sqrt{k} = p/(2a)\), so \(k = p^2/(4a^2)\).
  - \(P_w = 0\) gives \(w^{1/4} = 3p/(4b)\), so \(w = (3p/(4b))^4\).

  This is the only critical point in \(k > 0\), \(w > 0\).

  The second derivatives are \(P_{kk} = -p/(4k^{3/2})\), \(P_{ww} = -3p/(16 w^{5/4})\) and \(P_{kw} = 0\). At the critical point,
  \[
  \begin{aligned}
  P_{kk}&= -\frac{2a^3}{p^2} < 0,\\
  D&= P_{kk} P_{ww} = \frac{128 a^3 b^5}{81 p^6} > 0.
  \end{aligned}
  \]
  The discriminant is positive and \(P_{kk}\) is negative, so the critical point is a local maximum.

  The profit there is
  \[ P = \frac{p^2}{4a} + \frac{27 p^4}{256 b^3}. \]
  For each fixed \(w\), \(P_k\) is positive when \(k\) is below \(p^2/(4a^2)\) and negative when \(k\) is above it. For each fixed \(k\), \(P_w\) has the same pattern about \(w = (3p/(4b))^4\). The critical point is therefore the global maximum on \(k > 0\), \(w > 0\).
provenance: official-key
steps:
  - The profit \(P(k, w) = p(\sqrt{k} + w^{3/4}) - ak - bw\).
  - The only critical point \(k = p^2/(4a^2)\), \(w = (3p/(4b))^4\).
  - 'Hessian test: \(D > 0\) and \(P_{kk} < 0\), so a maximum.'
  - The maximum value \(p^2/(4a) + 27p^4/(256 b^3)\).
verification:
  checks:
    - expr: "diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, k).subs({k: Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)**2), w: (3*Symbol('p', positive=True)/(4*Symbol('b', positive=True)))**4})"
      expected: 0
    - expr: "diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, w).subs({k: Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)**2), w: (3*Symbol('p', positive=True)/(4*Symbol('b', positive=True)))**4})"
      expected: 0
    - expr: "diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, k, 2).subs(k, Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)**2))"
      expected: "-2*Symbol('a', positive=True)**3/Symbol('p', positive=True)**2"
    - expr: "(diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, k, 2)*diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, w, 2) - diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, k, w)**2).subs({k: Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)**2), w: (3*Symbol('p', positive=True)/(4*Symbol('b', positive=True)))**4})"
      expected: "128*Symbol('a', positive=True)**3*Symbol('b', positive=True)**5/(81*Symbol('p', positive=True)**6)"
    - expr: "(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w).subs({k: Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)**2), w: (3*Symbol('p', positive=True)/(4*Symbol('b', positive=True)))**4})"
      expected: "Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)) + 27*Symbol('p', positive=True)**4/(256*Symbol('b', positive=True)**3)"
:::

::: exercise
id: l6-worded-optimisation.mock-2022-q5
tier: exam
topics: [worded-optimisation, global-extrema]
examBlock: constrained-optimisation
pastExam:
  year: 2022
  paper: Mock
  question: "5"
  points: 4
statement: |
  The outcome of a meeting, \(f\), is the product of \(n\) and \(m\). The number of people \(n\) is taken to be a positive real number, and \(m\) is the overall mood. Mood depends on the pace \(p\) and on the space \(s\) given to each member,
  \[ m = 100 - (p - 1)^2 + s^2. \]
  This is submitted to the constraint \(ns = 100\) and \(n \le 100\).

  1. Find the best outcome.
  2. The constraint is relaxed to \(ns \le 100\). Find the best outcome.
solution: |
  The outcome is \(f = n\left(100 - (p - 1)^2 + s^2\right)\) with \(n > 0\). The term \((p - 1)^2\) is subtracted and \(n\) is positive, so for any fixed \(n\) and \(s\) the largest outcome is at \(p = 1\), where \(m = 100 + s^2\).

  ### Under \(ns = 100\)

  One has \(s = 100/n\). At \(p = 1\) the outcome is the function
  \[ g(n) = 100n + \frac{10000}{n} \]
  with \(0 < n \le 100\).
  Then \(g'(n) = 100 - 10000/n^2\), so the only positive critical point is \(n = 10\), where \(s = 10\). The second derivative is \(g''(n) = 20000/n^3 > 0\), and
  \[ g(n) - 2000 = 100\left(\sqrt{n} - \frac{10}{\sqrt{n}}\right)^2. \]
  For \(n > 0\) the right-hand side is nonnegative and equals \(0\) at \(n = 10\), so \(g(10) = 2000\) is a minimum of \(g\). The Hessian determinant of \(f\) in the variables \((n, p)\), after substituting \(s = 100/n\), equals \(-400\) at \((10, 1)\), so that critical point is a saddle of the two-variable function.

  At the endpoint \(n = 100\) one has \(s = 1\) and \(g(100) = 10100\). At \(n = 1/100\) one has \(s = 10000\), the constraint \(ns = 100\) still holds, and \(g(1/100) = 1000001\). As \(n\) approaches \(0\) from above, with \(p = 1\) and \(s = 100/n\), \(g(n)\) tends to \(+\infty\). There is no finite best outcome. The supremum is \(+\infty\).

  ### Under \(ns \le 100\)

  Under the relaxed constraint \(ns \le 100\), keep \(s > 0\). The partial derivative of the outcome with respect to \(s\) is \(2ns\), which is positive. For each fixed \(n\), raising \(s\) raises the outcome, up to the largest allowed space \(s = 100/n\). Every feasible meeting with \(ns < 100\) is beaten by one on \(ns = 100\). The reduced outcome is \(g(n)\) again, and the supremum is \(+\infty\).
provenance: written-for-site
steps:
  - The pace \(p = 1\) maximizes the outcome for fixed \(n\) and \(s\).
  - Under \(ns = 100\) the outcome at \(p = 1\) is \(g(n) = 100n + 10000/n\).
  - The critical point \(n = 10\) gives the minimum value \(2000\), and the Hessian determinant there is \(-400\).
  - The endpoint \(n = 100\) gives \(10100\), and \(g(n)\) tends to \(+\infty\) as \(n\) approaches \(0\).
  - Under \(ns \le 100\) the partial derivative in \(s\) is positive, so the product is driven up to \(100\) and the supremum is again \(+\infty\).
verification:
  checks:
    - expr: "(diff(n*(100 - (pace - 1)**2 + (100/n)**2), n).subs({n: 10, pace: 1}), diff(n*(100 - (pace - 1)**2 + (100/n)**2), pace).subs({n: 10, pace: 1}))"
      expected: (0, 0)
    - expr: "(n*(100 - (pace - 1)**2 + (100/n)**2)).subs({n: 10, pace: 1})"
      expected: 2000
    - expr: "(diff(n*(100 - (pace - 1)**2 + (100/n)**2), n, 2)*diff(n*(100 - (pace - 1)**2 + (100/n)**2), pace, 2) - diff(n*(100 - (pace - 1)**2 + (100/n)**2), n, pace)**2).subs({n: 10, pace: 1})"
      expected: -400
    - expr: "100*n + 10000/n - 2000 - 100*(sqrt(n) - 10/sqrt(n))**2"
      expected: 0
    - expr: "(100*n + 10000/n).subs(n, 100)"
      expected: 10100
    - expr: "(100*n + 10000/n).subs(n, Rational(1, 100))"
      expected: 1000001
    - expr: "diff(n*(100 - (pace - 1)**2 + s**2), s).subs({n: 1, s: 1, pace: 1})"
      expected: 2
:::

::: exercise
id: l6-worded-optimisation.final-2024-q5
tier: exam
topics: [optimisation]
examBlock: constrained-optimisation
pastExam:
  year: 2024
  paper: Final
  question: "5"
  points: 3
statement: |
  [3 points. 20min] A plane of (given) mass \( M \) and surface \( S \) flies at speed \( V \) and hight \( H \). Such a thing is possible if \( M = \frac{1}{2}(L-H)SV^2 C_z \) where \( L \) is the limit of the atmosphere and \( C_z \) a variable coefficient of the plane. Then the fuel consumption \( F \) of the plane follows the law \( F = M \frac{SV^2}{H} C_x \) where \( C_x \) is linked to \( C_z \) as follows : \( C_x = 1 + C_z^2 \). Find the best flight configuration \( V \) and \( H \) minimizing or maximizing \( F \) in terms of \( M, S \) and \( L \). Explain why it is a minimum or a maximum.
solution: |
  The physical domain is \(V>0\) and \(0<H<L\). The lift constraint gives
  \[
  C_z=\frac{2M}{(L-H)SV^2}.
  \]
  Eliminating \(C_z\) and using \(C_x=1+C_z^2\) gives
  \[
  \begin{aligned}
  F(V,H)&=\frac{MS}{H}\\
  &\left(V^2+\frac{4M^2}{S^2(L-H)^2V^2}\right).
  \end{aligned}
  \]

  Put \(W=V^2>0\). For each fixed \(H\),
  \[
  W+\frac{4M^2}{S^2(L-H)^2W}
  \geq\frac{4M}{S(L-H)},
  \]
  with equality when
  \[
  W=\frac{2M}{S(L-H)}.
  \]
  It follows that
  \[
  F\geq\frac{4M^2}{H(L-H)}.
  \]
  Since \(H(L-H)\leq L^2/4\), equality holds at \(H=L/2\). At that altitude,
  \[
  V^2=\frac{4M}{SL},\qquad
  V=2\sqrt{\frac{M}{SL}}.
  \]

  The best flight configuration is
  \[
  H=\frac L2,\qquad V=2\sqrt{\frac{M}{SL}},
  \]
  and the minimum fuel consumption is \(F_{\min}=16M^2/L^2\). This is a global minimum because both inequalities attain equality there. The fuel consumption diverges at the boundary of the domain as \(H\) approaches \(0\) or \(L\), or as \(V\) approaches \(0\) or infinity, so there is no maximum.
provenance: written-for-site
steps:
  - The solution eliminates the lift coefficient using the lift constraint.
  - The solution optimizes the speed for each fixed altitude.
  - The solution optimizes the altitude and gives the resulting speed.
  - The solution identifies a global minimum and explains why no maximum exists.
verification:
  checks:
    - expr: (diff(m*s/h*(w+4*m**2/(s**2*(l-h)**2*w)), w).subs({w:4*m/(s*l),h:l/2}), diff(m*s/h*(w+4*m**2/(s**2*(l-h)**2*w)), h).subs({w:4*m/(s*l),h:l/2}), (m*s/h*(w+4*m**2/(s**2*(l-h)**2*w))).subs({w:4*m/(s*l),h:l/2}))
      expected: "(0, 0, 16*m**2/l**2)"
:::

::: exercise
id: l6-worded-optimisation.final-2025-q5
tier: exam
topics: [optimisation]
examBlock: constrained-optimisation
pastExam:
  year: 2025
  paper: Final
  question: "5"
  points: 4
statement: |
  [4 points. 23min] You want to make a financial investment. You have seen three interesting growth stocks A,B and C you would like to invest in. Say you want to put 1 (unit is thousand dollars) in these three stocks. Let x, y, z (\( \ge 0 \)) be the parts you buy for each of these three stocks. Stock A grows by 300%, B by 200% and C by 100%. However the higher the stock grows the riskier it is and the bigger the loss of income is. Since these stocks are interdependent the overall loss of income reads \( L = 2x^2 - 4xy + y^3 + z^2 \). Optimize your portfolio (find x,y,z maximizing your net income).
  Hint : show that \( x + y \le 1 \). If there is no maximum inside this region then evaluate the net income on the boundaries (\( x = 0 \), \( y = 0 \) and \( x + y = 1 \)) and compare (do not evaluate exact expressions; rather find rough approximations).
solution: |
  The budget constraint is
  \[
  x+y+z=1,\qquad x,y,z\geq0.
  \]
  Thus \(z=1-x-y\), and the feasible region is \(x\geq0\), \(y\geq0\), \(x+y\leq1\). The gain is \(3x+2y+z\), so the net income is
  \[
  \begin{aligned}
  N(x,y)\\
  &=3x+2y+z\\
  &\quad -\left(2x^2-4xy+y^3+z^2\right)\\
  &=4x+3y-3x^2+2xy-y^2-y^3.
  \end{aligned}
  \]

  The interior equations are
  \[
  \begin{aligned}
  N_x&=4-6x+2y=0,\\
  N_y&=3+2x-2y-3y^2=0.
  \end{aligned}
  \]
  Their solutions are \((x,y)=(1,1)\) and \((x,y)=(5/27,-13/9)\), so there is no interior critical point in the feasible triangle.

  On the three boundaries, the maximum values are:

  - On \(x=0\), the maximizer is \(y=\dfrac{\sqrt{10}-1}{3}\) and the maximum net income is \(-\dfrac{29}{27}+\dfrac{20\sqrt{10}}{27}\approx1.268\).
  - On \(y=0\), the maximizer is \(x=\dfrac23\) and the maximum net income is \(\dfrac43\approx1.333\).
  - On \(x+y=1\), the maximizer is \(y=\dfrac{\sqrt{57}-6}{3}\) and the maximum net income is \(-29+\dfrac{38\sqrt{57}}9\approx2.877\).

  The third boundary gives the largest value. The maximizing portfolio is
  \[
  \begin{aligned}
  x&=\frac{9-\sqrt{57}}3\approx0.483,\\
  y&=\frac{\sqrt{57}-6}{3}\approx0.517,\\
  z&=0.
  \end{aligned}
  \]

  The maximum net income is \( -29+\frac{38\sqrt{57}}9\approx2.877 \) thousand dollars.
provenance: written-for-site
steps:
  - The solution uses the budget constraint to obtain the feasible triangular region and the net-income function.
  - The solution checks the interior equations and shows that they give no feasible critical point.
  - The solution maximizes on all three boundaries and compares the resulting rough approximations.
  - The solution states the maximizing allocations and names the maximum net income.
verification:
  checks:
    - expr: (diff(1+7*t-6*t**2-t**3, t).subs(t, (sqrt(57)-6)/3), (1+7*t-6*t**2-t**3).subs(t, (sqrt(57)-6)/3))
      expected: "(0, -29+38*sqrt(57)/9)"
:::

::: sheet-item
id: l6-worded-optimisation.sheet-setup
category: recognition
text: |
  In a worded problem, name the objective, the variables, and the domain before differentiating. An equation constraint is substituted. A cap such as \(x \le 50\) stays in the domain.
:::

::: sheet-item
id: l6-worded-optimisation.sheet-boundary
category: trap
text: |
  On a closed region, an interior critical point is only a candidate. Compare it with every boundary curve, including the endpoints and the corners.
:::

::: sheet-item
id: l6-worded-optimisation.sheet-plane
category: formula
text: |
  The distance from \((x_0, y_0, z_0)\) to \(ax + by + cz = d\) is \(|ax_0 + by_0 + cz_0 - d|/\sqrt{a^2 + b^2 + c^2}\). The same point minimizes the squared distance.
:::

::: exercise
id: l6-worded-optimisation.handout-14-8-11
number: "14.8.11"
tier: standard
topics: [worded-optimisation, second-derivative-test]
statement: |
  A manufacturer makes two models of an item, standard and deluxe. It costs \(\$40\) to manufacture the standard model and \(\$60\) for the deluxe. A market research firm estimates that if the standard model is priced at \(x\) dollars and the deluxe at \(y\) dollars, then the manufacturer will sell \(500(y - x)\) of the standard items and \(45\,000 + 500(x - 2y)\) of the deluxe items each year. How should the items be priced to maximize profit?
solution: |
  The profit is the margin times the number sold, for each model:
  \[
  \begin{aligned}
  P(x, y)&= (x - 40)\cdot 500(y - x)\\
  &\quad + (y - 60)\bigl(45\,000 + 500(x - 2y)\bigr).
  \end{aligned}
  \]
  The partial derivatives are
  \[
  \begin{aligned}
  P_x&= 500(2y - 2x - 20),\\
  P_y&= 1000x - 2000y + 85\,000.
  \end{aligned}
  \]
  Setting \(P_x = 0\) gives \(y - x = 10\). Setting \(P_y = 0\) gives \(x - 2y = -85\). Substituting \(y = x + 10\), the second equation reads \(-x - 20 = -85\), so \(x = 65\) and \(y = 75\).

  The second partials are \(P_{xx} = -1000\), \(P_{yy} = -2000\), \(P_{xy} = 1000\). So \(D = 2\,000\,000 - 1\,000\,000 > 0\) and \(P_{xx} < 0\): a local maximum. The profit is quadratic with a negative definite Hessian, so it is the global maximum.

  Price the standard model at \(\$65\) and the deluxe at \(\$75\). The yearly profit is \(25\cdot 5000 + 15\cdot 2500 = \$162\,500\).
provenance: handout-answer
steps:
  - Profit \(P = (x - 40)\,500(y - x) + (y - 60)(45\,000 + 500(x - 2y))\).
  - \(P_x = 0\) gives \(y - x = 10\), and \(P_y = 0\) gives \(x - 2y = -85\), so \(x = 65\) and \(y = 75\).
  - \(D > 0\) and \(P_{xx} < 0\), so the point is a maximum.
verification:
  checks:
    - expr: "solve([diff((x - 40)*500*(y - x) + (y - 60)*(45000 + 500*(x - 2*y)), x), diff((x - 40)*500*(y - x) + (y - 60)*(45000 + 500*(x - 2*y)), y)], [x, y])[x]"
      expected: 65
    - expr: "solve([diff((x - 40)*500*(y - x) + (y - 60)*(45000 + 500*(x - 2*y)), x), diff((x - 40)*500*(y - x) + (y - 60)*(45000 + 500*(x - 2*y)), y)], [x, y])[y]"
      expected: 75
    - expr: "(diff((x - 40)*500*(y - x) + (y - 60)*(45000 + 500*(x - 2*y)), x, 2)*diff((x - 40)*500*(y - x) + (y - 60)*(45000 + 500*(x - 2*y)), y, 2) - diff((x - 40)*500*(y - x) + (y - 60)*(45000 + 500*(x - 2*y)), x, y)**2)"
      expected: 1000000
    - expr: "((x - 40)*500*(y - x) + (y - 60)*(45000 + 500*(x - 2*y))).subs({x: 65, y: 75})"
      expected: 162500
:::

::: exercise
id: l6-worded-optimisation.handout-14-8-12
number: "14.8.12"
tier: exam
topics: [worded-optimisation, lagrange-multipliers]
examBlock: constrained-optimisation
statement: |
  A length of sheet metal is to be made into a water trough by bending up two sides, as in Figure 14.8.3. Find \(x\) and \(\varphi\) so that the trapezoid-shaped cross section has maximum area, when the width of the metal sheet is \(27\) inches (that is, \(2x + y = 27\)).
solution: |
  The figure shows a flat bottom of width \(y\) and two sides of length \(x\), each bent up and outward so that it makes the angle \(\varphi\) with the horizontal line extending the bottom. Each side rises \(x\sin\varphi\) and moves out \(x\cos\varphi\). The trapezoid has height \(x\sin\varphi\) and parallel sides \(y\) and \(y + 2x\cos\varphi\), so
  \[
  A = x\sin\varphi\,(y + x\cos\varphi).
  \]
  Use the constraint \(y = 27 - 2x\) to remove \(y\):
  \[
  \begin{aligned}
  A(x, \varphi)&= x(27 - 2x)\sin\varphi\\
  &\quad + x^2\sin\varphi\cos\varphi.
  \end{aligned}
  \]
  The partial derivatives are
  \[
  \begin{aligned}
  A_x&= \sin\varphi\,(27 - 4x + 2x\cos\varphi),\\
  A_\varphi&= x(27 - 2x)\cos\varphi\\
  &\quad + x^2(\cos^2\varphi - \sin^2\varphi).
  \end{aligned}
  \]
  In the interior, \(\sin\varphi \neq 0\), so \(A_x = 0\) gives \(\cos\varphi = \dfrac{4x - 27}{2x}\). Substitute into \(A_\varphi/x = (27 - 2x)\cos\varphi + x(2\cos^2\varphi - 1) = 0\) and multiply by \(2x\):
  \[
  \begin{aligned}
  &(27 - 2x)(4x - 27) + (4x - 27)^2 - 2x^2\\
  &= 6x(x - 9) = 0.
  \end{aligned}
  \]
  So \(x = 9\), \(\cos\varphi = \tfrac12\), \(\varphi = \tfrac\pi3\), and \(y = 9\). The area is \(\tfrac{243\sqrt3}{4} \approx 105.2\) square inches.

  The edge cases give less. A rectangular cross section (\(\varphi = \tfrac\pi2\)) has area at most \(\tfrac{729}{8} \approx 91.1\). The case \(y = 0\) has area \(\tfrac12 x^2\sin 2\varphi\) with \(x = 13.5\), at most \(\tfrac{729}{8}\) as well. So \(x = 9\), \(\varphi = \tfrac\pi3\) is the maximum.
provenance: handout-answer
steps:
  - Area \(A = x\sin\varphi\,(y + x\cos\varphi)\) with \(y = 27 - 2x\).
  - \(A_x = 0\) gives \(\cos\varphi = (4x - 27)/(2x)\). Then \(A_\varphi = 0\) reduces to \(6x(x - 9) = 0\).
  - \(x = 9\) and \(\varphi = \pi/3\), area \(243\sqrt3/4\), larger than the boundary values.
verification:
  checks:
    - expr: "diff(x*(27 - 2*x)*sin(p) + x**2*sin(p)*cos(p), x).subs({x: 9, p: pi/3})"
      expected: 0
    - expr: "diff(x*(27 - 2*x)*sin(p) + x**2*sin(p)*cos(p), p).subs({x: 9, p: pi/3})"
      expected: 0
    - expr: "(x*(27 - 2*x)*sin(p) + x**2*sin(p)*cos(p)).subs({x: 9, p: pi/3})"
      expected: "243*sqrt(3)/4"
    - expr: "(x*(27 - 2*x)).subs(x, Rational(27, 4))"
      expected: Rational(729, 8)
:::

::: exercise
id: l6-worded-optimisation.ex-open-box-fixed-area
tier: standard
topics: [lagrange-multipliers, worded-optimisation]
statement: |
  An open rectangular box has a bottom and four sides and no top. The total area of the bottom and the four sides is \(48\). Find the dimensions that give the largest volume, and that volume.
solution: |
  Let the base edges be \(x > 0\) and \(y > 0\), and let the height be \(z > 0\). The volume is \(f = xyz\) and the area is \(g = xy + 2xz + 2yz = 48\). Then
  \[
  \begin{aligned}
  \nabla f&= (yz, xz, xy),\\
  \nabla g&= (y + 2z, x + 2z, 2x + 2y).
  \end{aligned}
  \]
  The conditions \(\nabla f = \lambda \nabla g\) read
  \[
  \begin{aligned}
  yz&= \lambda(y + 2z),\\
  xz&= \lambda(x + 2z),\\
  xy&= \lambda(2x + 2y).
  \end{aligned}
  \]
  Multiply the first by \(x\) and the second by \(y\). The left sides are both \(xyz\), so \(x(y + 2z) = y(x + 2z)\) after dividing by \(\lambda \neq 0\), which gives \(2xz = 2yz\). Since \(z > 0\), \(x = y\).

  With \(x = y\), the third equation is \(x^2 = 4\lambda x\), so \(\lambda = x/4\). The first equation becomes \(xz = \tfrac{x}{4}(x + 2z)\), so \(4z = x + 2z\) and \(z = x/2\).

  The constraint becomes \(x^2 + 4x \cdot \tfrac{x}{2} = 3x^2 = 48\), so \(x = 4\), \(y = 4\) and \(z = 2\). The volume is \(32\).

  This is the maximum. Put \(a = xy\), \(b = 2xz\) and \(c = 2yz\), so \(a + b + c = 48\) and \(abc = 4(xyz)^2\). By the inequality of arithmetic and geometric means, \(abc \le 16^3 = 4096\). Hence \((xyz)^2 \le 1024\) and \(xyz \le 32\), with equality when \(a = b = c = 16\), which is the point found.

  The base is a square of side \(4\), the height is \(2\), and the largest volume is \(32\).
provenance: written-for-site
steps:
  - Objective \(xyz\) and constraint \(xy + 2xz + 2yz = 48\).
  - The multiplier equations give \(x = y\) and \(z = x/2\).
  - The constraint gives \(x = y = 4\), \(z = 2\), and volume \(32\).
  - The arithmetic-geometric mean inequality shows \(32\) is the global maximum.
verification:
  checks:
    - expr: '(x*y+2*x*z+2*y*z).subs({x: 4, y: 4, z: 2})'
      expected: '48'
    - expr: '(x*y*z).subs({x: 4, y: 4, z: 2})'
      expected: '32'
    - expr: 'Tuple(y*z-(y+2*z), x*z-(x+2*z), x*y-(2*x+2*y)).subs({x: 4, y: 4, z: 2})'
      expected: 'Tuple(0, 0, 0)'
    - expr: '(x*y)*(2*x*z)*(2*y*z) - 4*(x*y*z)**2'
      expected: '0'
    - expr: 'sqrt(16**3/4)'
      expected: '32'
:::
