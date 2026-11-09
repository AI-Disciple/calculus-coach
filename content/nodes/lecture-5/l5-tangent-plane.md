---
id: l5-tangent-plane
lecture: 5
order: 5
title: Tangent planes to graphs and implicit surfaces
prerequisites: [l5-partial-derivatives, l4-lines-planes, l4-level-sets]
sources:
  - { source: handout, section: "14.3", page: 357 }
  - { source: handout, section: "14.3", page: 361 }
  - { source: handout, section: "14.5", page: 366 }
  - { source: handout, section: "14.5", page: 368 }
  - { source: handout, section: "14.5", page: 370 }
  - { source: handout, section: "14.5", page: 371 }
  - { source: lecture-notes-5, page: 2 }
  - { source: sheet-2, page: 1 }
  - { source: final-2024, page: 1 }
  - { source: final-2025, page: 1 }
  - { source: final-2021, page: 1 }
  - { source: mock-2022, page: 1 }
  - { source: final-2022, page: "2-3" }
  - { source: mock-exam-2, page: 1 }
  - { source: retake-2023, page: 1 }
  - { source: mock-exam-1, page: 1 }
  - { source: lecture-notes-6, page: 1 }
  - { source: lecture-notes-6, page: 2 }
examWeight: medium
examWeightNote: The tangent plane carries 5% of the two recent finals.
notation: |
  \(f_x\), \(\frac{df}{dx}\), \(d_x f\) and \(\frac{\partial f}{\partial x}\) are four names for the partial derivative of \(f\) with respect to \(x\). The same four patterns name the partial derivative with respect to \(y\).
taught: lecture
status: reviewed
---

::: section
title: Tangent plane to a graph
:::

::: formal-statement
kind: theorem
title: Tangent plane to a graph
source: { source: lecture-notes-5, page: 2 }
text: |
  The equation of the **tangent plane** to \(f\) at \((x_0, y_0)\) is
  \[
  \begin{aligned}
  Z&=f(x_0, y_0)\\
  &\quad+(x - x_0)\frac{df}{dx}(x_0, y_0)\\
  &\quad+(y - y_0)\frac{df}{dy}(x_0, y_0).
  \end{aligned}
  \]
  The partial derivatives are evaluated at \((x_0, y_0)\). The letter \(Z\) is the height on the plane.
:::

::: plain-explanation
text: |
  \(\frac{df}{dx}\) is the slope of the graph in the \(x\)-direction, and \(\frac{df}{dy}\) is the slope in the \(y\)-direction. The plane passes through the point \((x_0, y_0, f(x_0, y_0))\) and matches both slopes there.
:::

::: visual
kind: tangent-plane
caption: |
  Move the point \((x_0, y_0)\). The plane follows the graph \(z = x^2 + y^2\). Its equation is the course formula, with the height and the two partials filled in at that point.
params:
  x0: 1
  y0: 1
:::

::: worked-example
title: Tangent plane to \(z = x^2 + y^2\)
problem: |
  Find the tangent plane to \(z = x^2 + y^2\) at \((1, 1)\).
solution: |
  Let \(f(x, y) = x^2 + y^2\). The height at the point is \(f(1, 1) = 2\).

  The partial derivatives are \(\frac{df}{dx} = 2x\) and \(\frac{df}{dy} = 2y\). At \((1, 1)\) their values are \(2\) and \(2\).

  The tangent plane is
  \[
  \begin{aligned}
  Z&=2 + 2(x - 1) + 2(y - 1)\\
  &=2x + 2y - 2.
  \end{aligned}
  \]
:::

::: trap
text: |
  The graph formula includes the **height** \(f(x_0, y_0)\). For \(f(x, y) = x^2 + y^2\) at \((1, 1)\), the height is \(2\), and both partials equal \(2\). The plane is
  \[
  Z = 2 + 2(x - 1) + 2(y - 1).
  \]
  The version that drops the height is
  \[
  Z = 2(x - 1) + 2(y - 1).
  \]
  At \((1, 1)\) that version equals \(0\). The graph has height \(2\) there. The dropped-height plane misses the point \((1, 1, 2)\).
:::

::: key-points
text: |
  - The tangent plane to the graph of \(f\) at \((x_0, y_0)\) is \(Z = f(x_0, y_0) + (x - x_0)\frac{df}{dx}(x_0, y_0) + (y - y_0)\frac{df}{dy}(x_0, y_0)\), with both partials evaluated at \((x_0, y_0)\).
  - The plane passes through the point \((x_0, y_0, f(x_0, y_0))\) and matches the slope \(\frac{df}{dx}\) in the \(x\)-direction and the slope \(\frac{df}{dy}\) in the \(y\)-direction there.
  - The usual slip drops the height \(f(x_0, y_0)\). For \(f(x, y) = x^2 + y^2\) at \((1, 1)\) it gives \(Z = 2(x - 1) + 2(y - 1)\), which equals \(0\) at \((1, 1)\) and misses the point \((1, 1, 2)\). The plane keeps the height and is \(Z = 2 + 2(x - 1) + 2(y - 1)\).
:::

::: concept-question
id: l5-tangent-plane.q-c78bfcf4
question: |
  Let \(f(x, y) = x^2 + y\). Which equation is the tangent plane to the graph at \((1, 2)\)?
options:
  - text: |
      \(Z = 3 + 2(x - 1) + (y - 2)\)
    correct: true
  - text: |
      \(Z = 2(x - 1) + (y - 2)\)
  - text: |
      \(Z = 3 + 2x + y\)
  - text: |
      \(Z = x^2 + y\)
explanation: |
  The height is \(f(1, 2) = 3\). The partials are \(\frac{df}{dx} = 2x\) and \(\frac{df}{dy} = 1\), so at \((1, 2)\) they equal \(2\) and \(1\). The plane is
  \[
  Z = 3 + 2(x - 1) + (y - 2).
  \]
:::

::: exercise
id: l5-tangent-plane.sheet-4-2
number: "sheet 2 exercise 4.2"
tier: basic
topics: [tangent-planes]
statement: |
  Find an equation for the tangent plane to \(f(x, y) = \sin(xy)\) at the point \(\left(\pi, \dfrac{1}{2}, 1\right)\).
solution: |
  Let \(f(x, y) = \sin(xy)\). The height at the base point is \(f\left(\pi, \dfrac{1}{2}\right) = \sin\left(\dfrac{\pi}{2}\right) = 1\), so the third coordinate matches the graph.

  The partial derivatives are \(\frac{df}{dx} = y\cos(xy)\) and \(\frac{df}{dy} = x\cos(xy)\). At \(\left(\pi, \dfrac{1}{2}\right)\) both equal \(0\), because \(\cos\left(\dfrac{\pi}{2}\right) = 0\).

  The tangent plane is
  \[
  Z = 1.
  \]
provenance: written-for-site
steps:
  - The height \(f(\pi, 1/2)\) equals \(1\).
  - Both partials at \((\pi, 1/2)\) equal \(0\).
  - The plane is the horizontal plane \(Z = 1\).
  - The point \((\pi, 1/2, 1)\) lies on that plane.
verification:
  checks:
    - expr: 'sin(x*y).subs({x: pi, y: Rational(1, 2)})'
      expected: "1"
    - expr: 'Tuple(diff(sin(x*y), x).subs({x: pi, y: Rational(1, 2)}), diff(sin(x*y), y).subs({x: pi, y: Rational(1, 2)}))'
      expected: "Tuple(0, 0)"
    - expr: '1 + 0*(x - pi) + 0*(y - Rational(1, 2))'
      expected: "1"
:::

::: section
title: Tangent plane and normal line to a level surface
:::

::: formal-statement
kind: theorem
title: Tangent plane and normal line to a level surface
source: { source: handout, section: "14.5", page: 368 }
text: |
  Let \(F(x, y, z) = c\), and let \((x_0, y_0, z_0)\) be a point of this surface. Write \(F_x\), \(F_y\) and \(F_z\) for the partial derivatives of \(F\), each evaluated at that point. The **tangent plane** is
  \[
  \begin{aligned}
  &F_x(x - x_0) + F_y(y - y_0)\\
  &\quad+F_z(z - z_0) = 0.
  \end{aligned}
  \]
  The gradient \(\nabla F = (F_x, F_y, F_z)\) is a **normal vector** to the plane. The **normal line** is
  \[
  (x, y, z) = (x_0, y_0, z_0) + t\,\nabla F.
  \]
:::

::: plain-explanation
text: |
  The vector from \((x_0, y_0, z_0)\) to a point of the tangent plane is perpendicular to \(\nabla F\). That is the plane equation. The normal line passes through the point in the direction of the same gradient. For a graph \(z = f(x, y)\), the level function \(F = f(x, y) - z\) has gradient
  \[
  \nabla F = \left(\frac{df}{dx}, \frac{df}{dy}, -1\right),
  \]
  and the plane equation is the graph formula.
:::

::: worked-example
title: Plane and normal line to \(x^2 + yz = 4\)
problem: |
  Find the tangent plane and the normal line to \(x^2 + yz = 4\) at \((1, 1, 3)\).
solution: |
  Let \(F(x, y, z) = x^2 + yz - 4\). Then \(F(1, 1, 3) = 1 + 3 - 4 = 0\), so the point lies on the surface.

  The gradient and its value at the point are
  \[
  \begin{aligned}
  \nabla F&=(2x, z, y),\\
  \nabla F(1, 1, 3)&=(2, 3, 1).
  \end{aligned}
  \]

  The tangent plane is
  \[
  \begin{aligned}
  2(x - 1) + 3(y - 1) + (z - 3)&=0,\\
  2x + 3y + z&=8.
  \end{aligned}
  \]

  The normal line is
  \[
  (x, y, z) = (1, 1, 3) + t(2, 3, 1).
  \]
:::

::: guided-example
title: Tangent plane to \(z = xy\)
problem: |
  Find the tangent plane to \(z = xy\) at \((2, 3)\). Compute the height, then the partials, then the plane.
steps:
  - |
    Let \(f(x, y) = xy\). The height is \(f(2, 3) = 6\). The point on the graph is \((2, 3, 6)\).
  - |
    The partial derivatives are
    \[
    \frac{df}{dx} = y, \qquad \frac{df}{dy} = x.
    \]
    At \((2, 3)\) they equal \(3\) and \(2\).
  - |
    The tangent plane is
    \[
    Z = 6 + 3(x - 2) + 2(y - 3).
    \]
  - |
    Expanding gives
    \[
    Z = 3x + 2y - 6.
    \]
:::

::: trap
text: |
  - On a graph \(z = f(x, y)\) the normal is \(\left(\frac{df}{dx}, \frac{df}{dy}, -1\right)\).
  - On a level surface \(F = c\) the normal is \(\nabla F\).

  For \(F = x^2 + y^2 + z^2 - 4\) at \((1, 1, \sqrt{2})\), the gradient is
  \[
  \nabla F = (2, 2, 2\sqrt{2}).
  \]
  The vector \((\sqrt{2}, 0, -1)\) is tangent to the sphere, because its dot product with this gradient is \(0\). Its dot product with \((2, 2, -1)\) is \(2\sqrt{2} + 1\). A normal has dot product \(0\) with every tangent vector, so \((2, 2, -1)\) fails that test at this point.
:::

::: key-points
text: |
  - At a point \((x_0, y_0, z_0)\) of the level surface \(F(x, y, z) = c\), the tangent plane is \(F_x(x - x_0) + F_y(y - y_0) + F_z(z - z_0) = 0\), with each partial evaluated at that point.
  - The gradient \(\nabla F\) is a normal vector to the plane, and the normal line is \((x, y, z) = (x_0, y_0, z_0) + t\,\nabla F\).
  - For a graph \(z = f(x, y)\), the level function \(F = f(x, y) - z\) has gradient \(\left(\frac{df}{dx}, \frac{df}{dy}, -1\right)\), and the plane equation is the graph formula.
  - The usual slip carries the graph normal over to a level surface and takes \((2, 2, -1)\) as a normal to \(x^2 + y^2 + z^2 = 4\) at \((1, 1, \sqrt{2})\). On \(F = c\) the normal is \(\nabla F\), which is \((2, 2, 2\sqrt{2})\) there. The vector \((2, 2, -1)\) has dot product \(2\sqrt{2} + 1\) with the tangent vector \((\sqrt{2}, 0, -1)\), so it is not normal.
:::

::: concept-question
id: l5-tangent-plane.q-228c7ebb
question: |
  The surface \(xyz = 6\) passes through \((1, 2, 3)\). Which vector is normal to the tangent plane there?
options:
  - text: |
      \((6, 3, 2)\)
    correct: true
  - text: |
      \((1, 2, 3)\)
  - text: |
      \((yz, xz, xy)\)
  - text: |
      \((1, 1, 1)\)
explanation: |
  Let \(F = xyz - 6\). The gradient and its value at \((1, 2, 3)\) are
  \[
  \begin{aligned}
  \nabla F&=(yz, xz, xy),\\
  \nabla F(1, 2, 3)&=(6, 3, 2).
  \end{aligned}
  \]
:::

::: concept-question
id: l5-tangent-plane.q-55646e99
question: |
  At a point of the level surface \(F(x, y, z) = c\), what is the direction of the normal line?
options:
  - text: |
      The direction of \(\nabla F\) at that point.
    correct: true
  - text: |
      A direction perpendicular to \(\nabla F\) at that point.
  - text: |
      The direction \((1, 0, 0)\).
  - text: |
      The direction of \(\nabla F\) at the origin.
explanation: |
  \(\nabla F\) at the point is normal to the tangent plane. The normal line passes through the point in that direction.
:::

::: concept-question
id: l5-tangent-plane.q-03d4f576
question: |
  The surface \(z = x^2 + y^2\) is the graph of \(f(x, y) = x^2 + y^2\). Which vector is normal to its tangent plane at \((1, 1, 2)\)?
options:
  - text: |
      \((2,\, 2,\, -1)\)
    correct: true
  - text: |
      \((2,\, 2,\, 1)\)
  - text: |
      \((1,\, 1,\, 2)\)
  - text: |
      \((2,\, 2,\, 0)\)
explanation: |
  Write the surface as \(F = f(x, y) - z = 0\). Then
  \[
  \nabla F = \left(\frac{df}{dx}, \frac{df}{dy}, -1\right),
  \]
  which equals \((2, 2, -1)\) at the point. Check it against the tangent vector \((1, 0, 2)\), which follows the slope \(2\) in the \(x\)-direction:
  \[
  \begin{aligned}
  (2, 2, -1)\cdot(1, 0, 2)&=2 + 0 - 2 = 0,\\
  (2, 2, 1)\cdot(1, 0, 2)&=2 + 0 + 2 = 4.
  \end{aligned}
  \]
  The vector \((2, 2, 1)\) gives \(4\) with that tangent vector, so it is not normal.
:::

::: exercise
id: l5-tangent-plane.handout-14-5-11
number: "14.5.11"
tier: basic
topics: [tangent-planes, implicit-surfaces]
statement: |
  Find an equation for the plane tangent to \(x^2 - 3y^2 + z^2 = 7\) at \((1, 1, 3)\).
solution: |
  Let \(F(x, y, z) = x^2 - 3y^2 + z^2 - 7\). Then \(F(1, 1, 3) = 1 - 3 + 9 - 7 = 0\), so the point lies on the surface.

  The gradient is \(\nabla F = (2x, -6y, 2z)\). At the point its value is \((2, -6, 6)\).

  The tangent plane is
  \[
  2(x - 1) - 6(y - 1) + 6(z - 3) = 0.
  \]
provenance: handout-answer
steps:
  - The point \((1, 1, 3)\) lies on the surface.
  - The gradient there is \((2, -6, 6)\).
  - The plane is \(2(x - 1) - 6(y - 1) + 6(z - 3) = 0\).
  - Expanding gives \(2x - 6y + 6z = 14\).
verification:
  checks:
    - expr: '(x**2 - 3*y**2 + z**2 - 7).subs({x: 1, y: 1, z: 3})'
      expected: "0"
    - expr: 'Tuple(diff(x**2 - 3*y**2 + z**2 - 7, x).subs({x: 1, y: 1, z: 3}), diff(x**2 - 3*y**2 + z**2 - 7, y).subs({x: 1, y: 1, z: 3}), diff(x**2 - 3*y**2 + z**2 - 7, z).subs({x: 1, y: 1, z: 3}))'
      expected: "Tuple(2, -6, 6)"
    - expr: 'expand(2*(x - 1) - 6*(y - 1) + 6*(z - 3))'
      expected: "2*x - 6*y + 6*z - 14"
:::

::: sheet-item
id: l5-tangent-plane.sheet-graph
category: formula
text: |
  The tangent plane to the graph of \(f\) at \((x_0, y_0)\) is
  \[
  \begin{aligned}
  Z&=f(x_0, y_0)\\
  &\quad+(x - x_0)\frac{df}{dx}(x_0, y_0)\\
  &\quad+(y - y_0)\frac{df}{dy}(x_0, y_0).
  \end{aligned}
  \]
:::

::: sheet-item
id: l5-tangent-plane.sheet-implicit
category: formula
text: |
  On \(F(x, y, z) = c\) at \((x_0, y_0, z_0)\), the tangent plane is
  \[
  \begin{aligned}
  &F_x(x - x_0) + F_y(y - y_0)\\
  &\quad+F_z(z - z_0) = 0,
  \end{aligned}
  \]
  with the partials evaluated at the point. The normal line is
  \[
  (x, y, z) = (x_0, y_0, z_0) + t\nabla F.
  \]
:::

::: sheet-item
id: l5-tangent-plane.sheet-which
category: recognition
text: |
  - A surface given as \(z = f(x, y)\) uses the graph formula, with height \(Z\).
  - A surface given as \(F(x, y, z) = c\) uses \(\nabla F\) as the normal.
:::

::: sheet-item
id: l5-tangent-plane.sheet-height
category: trap
text: |
  The graph formula includes the height \(f(x_0, y_0)\). For \(f(x, y) = x^2 + y^2\) at \((1, 1)\) the height is \(2\). Dropping it gives a plane whose height at \((1, 1)\) is \(0\), so the plane misses \((1, 1, 2)\).
:::

::: exercise
id: l5-tangent-plane.sheet-4-1
number: "sheet 2 exercise 4.1"
tier: standard
topics: [tangent-planes, implicit-surfaces]
statement: |
  Find an equation for the tangent plane to \(x^2 + y^2 + z^2 = 4\) at the point \((1, 1, \sqrt{2})\).
solution: |
  Let \(F(x, y, z) = x^2 + y^2 + z^2 - 4\). At the given point, \(F(1, 1, \sqrt{2}) = 1 + 1 + 2 - 4 = 0\), so the point lies on the sphere.

  The gradient is \(\nabla F = (2x, 2y, 2z)\). Its value at the point is \((2, 2, 2\sqrt{2})\).

  The tangent plane is
  \[
  \begin{aligned}
  &2(x - 1) + 2(y - 1)\\
  &\quad+2\sqrt{2}\,(z - \sqrt{2}) = 0.
  \end{aligned}
  \]
  Dividing by \(2\) gives \(x + y + \sqrt{2}\, z = 4\).
provenance: written-for-site
steps:
  - The point \((1, 1, \sqrt{2})\) lies on the sphere.
  - The gradient there is \((2, 2, 2\sqrt{2})\).
  - The plane is \(2(x - 1) + 2(y - 1) + 2\sqrt{2}(z - \sqrt{2}) = 0\).
  - The same plane is \(x + y + \sqrt{2}\, z = 4\).
verification:
  checks:
    - expr: '(x**2 + y**2 + z**2 - 4).subs({x: 1, y: 1, z: sqrt(2)})'
      expected: "0"
    - expr: 'Tuple(diff(x**2 + y**2 + z**2 - 4, x).subs({x: 1, y: 1, z: sqrt(2)}), diff(x**2 + y**2 + z**2 - 4, y).subs({x: 1, y: 1, z: sqrt(2)}), diff(x**2 + y**2 + z**2 - 4, z).subs({x: 1, y: 1, z: sqrt(2)}))'
      expected: "Tuple(2, 2, 2*sqrt(2))"
    - expr: 'expand(2*(x - 1) + 2*(y - 1) + 2*sqrt(2)*(z - sqrt(2)))'
      expected: "2*x + 2*y + 2*sqrt(2)*z - 8"
:::

::: exercise
id: l5-tangent-plane.sheet-4-3
number: "sheet 2 exercise 4.3"
tier: standard
topics: [tangent-planes]
statement: |
  Show that any tangent plane to the cone \(z = \sqrt{x^2 + y^2}\) passes through the origin.
solution: |
  Let \(f(x, y) = \sqrt{x^2 + y^2}\), and let \((x_0, y_0)\) be a point other than the origin. Set \(z_0 = \sqrt{x_0^2 + y_0^2}\). This is the height of the cone at \((x_0, y_0)\).

  The partial derivatives are
  \[
  \frac{df}{dx} = \frac{x}{\sqrt{x^2 + y^2}}, \qquad \frac{df}{dy} = \frac{y}{\sqrt{x^2 + y^2}}.
  \]
  At \((x_0, y_0)\) they equal \(x_0/z_0\) and \(y_0/z_0\).

  The tangent plane is
  \[
  Z = z_0 + (x - x_0)\frac{x_0}{z_0} + (y - y_0)\frac{y_0}{z_0}.
  \]
  At \((x, y) = (0, 0)\) the height on the plane is
  \[
  Z = z_0 - \frac{x_0^2}{z_0} - \frac{y_0^2}{z_0} = z_0 - \frac{z_0^2}{z_0} = 0.
  \]
  The plane contains the point \((0, 0, 0)\), so it passes through the origin.

  At the origin, the difference quotient along \(y = 0\) is \(|\varepsilon|/\varepsilon\). That quotient has no limit as \(\varepsilon \to 0\). The partial \(\frac{df}{dx}\) does not exist at the tip.
provenance: written-for-site
steps:
  - Away from the origin, the partials at \((x_0, y_0)\) are \(x_0/z_0\) and \(y_0/z_0\).
  - The plane formula at \((x_0, y_0)\) has height \(0\) when \((x, y) = (0, 0)\).
  - That plane contains the origin.
  - At the origin the partial with respect to \(x\) does not exist.
verification:
  checks:
    - expr: 'Tuple(diff(sqrt(x**2 + y**2), x), diff(sqrt(x**2 + y**2), y))'
      expected: "Tuple(x/sqrt(x**2 + y**2), y/sqrt(x**2 + y**2))"
    - expr: 'simplify(sqrt(x0**2 + y0**2) + (0 - x0)*(x0/sqrt(x0**2 + y0**2)) + (0 - y0)*(y0/sqrt(x0**2 + y0**2)))'
      expected: "0"
:::

::: exercise
id: l5-tangent-plane.handout-14-5-7
number: "14.5.7"
tier: standard
topics: [tangent-planes]
statement: |
  A plane perpendicular to the \(xy\)-plane contains the point \((2, 1, 8)\) on the paraboloid \(z = x^2 + 4y^2\). The cross-section of the paraboloid created by this plane has slope \(0\) at this point. Find an equation of the plane.
solution: |
  Let \(f(x, y) = x^2 + 4y^2\). Then \(f(2, 1) = 8\), so \((2, 1, 8)\) lies on the paraboloid.

  A plane perpendicular to the \(xy\)-plane and through this point has equation \(a(x - 2) + b(y - 1) = 0\). Its direction in the \(xy\)-plane is perpendicular to \((a, b)\).

  The cross-section has slope \(0\) at the point, so that direction is perpendicular to \(\nabla f(2, 1)\). The vector \((a, b)\) is parallel to the gradient.

  The partial derivatives are \(\frac{df}{dx} = 2x\) and \(\frac{df}{dy} = 8y\). At \((2, 1)\) the gradient is \((4, 8)\).

  The plane is
  \[
  4(x - 2) + 8(y - 1) = 0.
  \]
provenance: handout-answer
steps:
  - The point \((2, 1, 8)\) lies on \(z = x^2 + 4y^2\).
  - The gradient at \((2, 1)\) is \((4, 8)\).
  - A vertical plane of slope \(0\) has horizontal normal parallel to that gradient.
  - The plane is \(4(x - 2) + 8(y - 1) = 0\).
verification:
  checks:
    - expr: '(x**2 + 4*y**2).subs({x: 2, y: 1})'
      expected: "8"
    - expr: 'Tuple(diff(x**2 + 4*y**2, x).subs({x: 2, y: 1}), diff(x**2 + 4*y**2, y).subs({x: 2, y: 1}))'
      expected: "Tuple(4, 8)"
    - expr: 'expand(4*(x - 2) + 8*(y - 1))'
      expected: "4*x + 8*y - 16"
:::

::: exercise
id: l5-tangent-plane.handout-14-5-8
number: "14.5.8"
tier: standard
topics: [tangent-planes]
statement: |
  A plane perpendicular to the \(xy\)-plane contains the point \((3, 2, 2)\) on the paraboloid \(36z = 4x^2 + 9y^2\). The cross-section of the paraboloid created by this plane has slope \(0\) at this point. Find an equation of the plane.
solution: |
  Let \(f(x, y) = (4x^2 + 9y^2)/36\), so the surface is \(z = f(x, y)\). Then \(f(3, 2) = 2\), and the point lies on the paraboloid.

  The partial derivatives are \(\frac{df}{dx} = 2x/9\) and \(\frac{df}{dy} = y/2\). At \((3, 2)\) the gradient is \(\left(\dfrac{2}{3}, 1\right)\).

  The vector \((2, 3)\) is \(3\) times this gradient, so it is normal to the same vertical plane. The plane is \(2(x - 3) + 3(y - 2) = 0\).
provenance: handout-answer
steps:
  - The point \((3, 2, 2)\) lies on the paraboloid.
  - The gradient at \((3, 2)\) is \((2/3, 1)\).
  - The vector \((2, 3)\) is \(3\) times that gradient.
  - The plane is \(2(x - 3) + 3(y - 2) = 0\).
verification:
  checks:
    - expr: '((4*x**2 + 9*y**2)/36).subs({x: 3, y: 2})'
      expected: "2"
    - expr: 'Tuple(diff((4*x**2 + 9*y**2)/36, x).subs({x: 3, y: 2}), diff((4*x**2 + 9*y**2)/36, y).subs({x: 3, y: 2}))'
      expected: "Tuple(2/3, 1)"
    - expr: 'Tuple(3*diff((4*x**2 + 9*y**2)/36, x).subs({x: 3, y: 2}), 3*diff((4*x**2 + 9*y**2)/36, y).subs({x: 3, y: 2}))'
      expected: "Tuple(2, 3)"
    - expr: 'expand(2*(x - 3) + 3*(y - 2))'
      expected: "2*x + 3*y - 12"
:::

::: exercise
id: l5-tangent-plane.handout-14-5-12
number: "14.5.12"
tier: standard
topics: [tangent-planes, implicit-surfaces]
statement: |
  Find an equation for the plane tangent to \(xyz = 6\) at \((1, 2, 3)\).
solution: |
  Let \(F(x, y, z) = xyz - 6\). Then \(F(1, 2, 3) = 6 - 6 = 0\), so the point lies on the surface.

  The gradient is \(\nabla F = (yz, xz, xy)\). At the point its value is \((6, 3, 2)\).

  The tangent plane is
  \[
  6(x - 1) + 3(y - 2) + 2(z - 3) = 0.
  \]
provenance: handout-answer
steps:
  - The point \((1, 2, 3)\) lies on \(xyz = 6\).
  - The gradient there is \((6, 3, 2)\).
  - The plane is \(6(x - 1) + 3(y - 2) + 2(z - 3) = 0\).
  - Expanding gives \(6x + 3y + 2z = 18\).
verification:
  checks:
    - expr: '(x*y*z - 6).subs({x: 1, y: 2, z: 3})'
      expected: "0"
    - expr: 'Tuple(diff(x*y*z - 6, x).subs({x: 1, y: 2, z: 3}), diff(x*y*z - 6, y).subs({x: 1, y: 2, z: 3}), diff(x*y*z - 6, z).subs({x: 1, y: 2, z: 3}))'
      expected: "Tuple(6, 3, 2)"
    - expr: 'expand(6*(x - 1) + 3*(y - 2) + 2*(z - 3))'
      expected: "6*x + 3*y + 2*z - 18"
:::

::: exercise
id: l5-tangent-plane.handout-14-5-13
number: "14.5.13"
tier: standard
topics: [tangent-planes, normal-lines]
statement: |
  Find a vector function for the line normal to \(x^2 + 2y^2 + 4z^2 = 26\) at \((2, -3, -1)\).
solution: |
  Let \(F(x, y, z) = x^2 + 2y^2 + 4z^2 - 26\). Then \(F(2, -3, -1) = 4 + 18 + 4 - 26 = 0\), so the point lies on the surface.

  The gradient is \(\nabla F = (2x, 4y, 8z)\). At the point its value is \((4, -12, -8)\).

  The normal line is
  \[
  (2 + 4t,\ -3 - 12t,\ -1 - 8t).
  \]
provenance: handout-answer
steps:
  - The point \((2, -3, -1)\) lies on the surface.
  - The gradient there is \((4, -12, -8)\).
  - The normal line uses that gradient as its direction.
  - A vector function is \((2 + 4t, -3 - 12t, -1 - 8t)\).
verification:
  checks:
    - expr: '(x**2 + 2*y**2 + 4*z**2 - 26).subs({x: 2, y: -3, z: -1})'
      expected: "0"
    - expr: 'Tuple(diff(x**2 + 2*y**2 + 4*z**2 - 26, x).subs({x: 2, y: -3, z: -1}), diff(x**2 + 2*y**2 + 4*z**2 - 26, y).subs({x: 2, y: -3, z: -1}), diff(x**2 + 2*y**2 + 4*z**2 - 26, z).subs({x: 2, y: -3, z: -1}))'
      expected: "Tuple(4, -12, -8)"
    - expr: 'Tuple(diff(2 + 4*t, t), diff(-3 - 12*t, t), diff(-1 - 8*t, t))'
      expected: "Tuple(4, -12, -8)"
:::

::: exercise
id: l5-tangent-plane.handout-14-5-14
number: "14.5.14"
tier: standard
topics: [tangent-planes, normal-lines]
statement: |
  Find a vector function for the line normal to \(x^2 + y^2 + 9z^2 = 56\) at \((4, 2, -2)\).
solution: |
  Let \(F(x, y, z) = x^2 + y^2 + 9z^2 - 56\). Then \(F(4, 2, -2) = 16 + 4 + 36 - 56 = 0\), so the point lies on the surface.

  The gradient is \(\nabla F = (2x, 2y, 18z)\). At the point its value is \((8, 4, -36)\).

  The normal line is
  \[
  (4 + 8t,\ 2 + 4t,\ -2 - 36t).
  \]
provenance: handout-answer
steps:
  - The point \((4, 2, -2)\) lies on the surface.
  - The gradient there is \((8, 4, -36)\).
  - The normal line uses that gradient as its direction.
  - A vector function is \((4 + 8t, 2 + 4t, -2 - 36t)\).
verification:
  checks:
    - expr: '(x**2 + y**2 + 9*z**2 - 56).subs({x: 4, y: 2, z: -2})'
      expected: "0"
    - expr: 'Tuple(diff(x**2 + y**2 + 9*z**2 - 56, x).subs({x: 4, y: 2, z: -2}), diff(x**2 + y**2 + 9*z**2 - 56, y).subs({x: 4, y: 2, z: -2}), diff(x**2 + y**2 + 9*z**2 - 56, z).subs({x: 4, y: 2, z: -2}))'
      expected: "Tuple(8, 4, -36)"
    - expr: 'Tuple(diff(4 + 8*t, t), diff(2 + 4*t, t), diff(-2 - 36*t, t))'
      expected: "Tuple(8, 4, -36)"
:::

::: exercise
id: l5-tangent-plane.handout-14-5-15
number: "14.5.15"
tier: standard
topics: [tangent-planes, normal-lines]
statement: |
  Find a vector function for the line normal to \(x^2 + 5y^2 - z^2 = 0\) at \((4, 2, 6)\).
solution: |
  Let \(F(x, y, z) = x^2 + 5y^2 - z^2\). Then \(F(4, 2, 6) = 16 + 20 - 36 = 0\), so the point lies on the surface.

  The gradient is \(\nabla F = (2x, 10y, -2z)\). At the point its value is \((8, 20, -12)\).

  The normal line is
  \[
  (4 + 8t,\ 2 + 20t,\ 6 - 12t).
  \]
provenance: handout-answer
steps:
  - The point \((4, 2, 6)\) lies on the surface.
  - The gradient there is \((8, 20, -12)\).
  - The normal line uses that gradient as its direction.
  - A vector function is \((4 + 8t, 2 + 20t, 6 - 12t)\).
verification:
  checks:
    - expr: '(x**2 + 5*y**2 - z**2).subs({x: 4, y: 2, z: 6})'
      expected: "0"
    - expr: 'Tuple(diff(x**2 + 5*y**2 - z**2, x).subs({x: 4, y: 2, z: 6}), diff(x**2 + 5*y**2 - z**2, y).subs({x: 4, y: 2, z: 6}), diff(x**2 + 5*y**2 - z**2, z).subs({x: 4, y: 2, z: 6}))'
      expected: "Tuple(8, 20, -12)"
    - expr: 'Tuple(diff(4 + 8*t, t), diff(2 + 20*t, t), diff(6 - 12*t, t))'
      expected: "Tuple(8, 20, -12)"
:::

::: exercise
id: l5-tangent-plane.handout-14-5-17
number: "14.5.17"
tier: standard
topics: [tangent-planes]
statement: |
  Show that the curve \(\mathbf{r}(t) = \langle \ln t,\ t\ln t,\ t\rangle\) is tangent to the surface \(xz^2 - yz + \cos(xy) = 1\) at the point \((0, 0, 1)\).
solution: |
  The third coordinate of \(\mathbf{r}(t)\) equals \(1\) when \(t = 1\). Then \(\ln 1 = 0\) and \(1\cdot\ln 1 = 0\), so \(\mathbf{r}(1) = (0, 0, 1)\).

  Let \(F(x, y, z) = xz^2 - yz + \cos(xy) - 1\). Then \(F(0, 0, 1) = \cos 0 - 1 = 0\), so the point lies on the surface.

  The derivative is \(\mathbf{r}'(t) = \left(\dfrac{1}{t},\ \ln t + 1,\ 1\right)\). At \(t = 1\) this equals \((1, 1, 1)\).

  The gradient is \(\nabla F = \left(z^2 - y\sin(xy),\ -z - x\sin(xy),\ 2xz - y\right)\). At \((0, 0, 1)\) it equals \((1, -1, 0)\).

  The dot product is \(1\cdot 1 + (-1)\cdot 1 + 0\cdot 1 = 0\). The velocity lies in the tangent plane. The curve meets the surface at \((0, 0, 1)\) and is tangent to the surface there.
provenance: written-for-site
steps:
  - At \(t = 1\) the curve passes through \((0, 0, 1)\).
  - The point lies on the surface.
  - The velocity there is \((1, 1, 1)\), and the gradient is \((1, -1, 0)\).
  - Their dot product is \(0\), so the curve is tangent to the surface.
verification:
  checks:
    - expr: 'Tuple(log(t).subs(t, 1), (t*log(t)).subs(t, 1), t.subs(t, 1))'
      expected: "Tuple(0, 0, 1)"
    - expr: 'Tuple(diff(log(t), t).subs(t, 1), diff(t*log(t), t).subs(t, 1), diff(t, t).subs(t, 1))'
      expected: "Tuple(1, 1, 1)"
    - expr: '(x*z**2 - y*z + cos(x*y) - 1).subs({x: 0, y: 0, z: 1})'
      expected: "0"
    - expr: 'Tuple(diff(x*z**2 - y*z + cos(x*y) - 1, x).subs({x: 0, y: 0, z: 1}), diff(x*z**2 - y*z + cos(x*y) - 1, y).subs({x: 0, y: 0, z: 1}), diff(x*z**2 - y*z + cos(x*y) - 1, z).subs({x: 0, y: 0, z: 1}))'
      expected: "Tuple(1, -1, 0)"
    - expr: 'Matrix([1, -1, 0]).dot(Matrix([1, 1, 1]))'
      expected: "0"
:::

::: exercise
id: l5-tangent-plane.final-2024-q1b
tier: exam
topics: [tangent-planes, implicit-surfaces]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2024
  paper: Final
  question: "1b"
  points: 1
statement: |
  b) Give the equation of the tangent plane of the surface \( z(x^2 + y^2) - x^3 = 0 \) at \( (1, 1, 1/2) \).
solution: |
  Let \(F(x,y,z)=z(x^2+y^2)-x^3\), so the surface is \(F=0\). The given point satisfies \(F(1,1,1/2)=0\).

  The normal vector is the gradient
  \[
  \nabla F=(2xz-3x^2,\,2yz,\,x^2+y^2).
  \]
  Its value at the point is
  \[
  \nabla F(1,1,1/2)=(-2,1,2).
  \]
  The tangent-plane equation is
  \[
  -2(x-1)+(y-1)+2\left(z-\frac12\right)=0.
  \]
  Therefore the tangent plane is \( -2x+y+2z=0 \).
provenance: written-for-site
steps:
  - The surface is written as the zero set of \(F\).
  - The gradient is evaluated at the given point.
  - The normal vector is used to form and simplify the plane equation.
verification:
  checks:
    - expr: (z*(x**2+y**2)-x**3).subs({x:1,y:1,z:1/2})
      expected: "0"
    - expr: Tuple(diff(z*(x**2+y**2)-x**3,x).subs({x:1,y:1,z:1/2}),diff(z*(x**2+y**2)-x**3,y).subs({x:1,y:1,z:1/2}),diff(z*(x**2+y**2)-x**3,z).subs({x:1,y:1,z:1/2}))
      expected: "Tuple(-2,1,2)"
    - expr: expand(-2*(x-1)+(y-1)+2*(z-1/2))
      expected: "-2*x+y+2*z"
:::

::: exercise
id: l5-tangent-plane.final-2025-q1b
tier: exam
topics: [tangent-planes, implicit-surfaces]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2025
  paper: Final
  question: "1b"
  points: 1
statement: |
  b) Give the equation of the tangent plane of the surface defined in a) at \( (1, 1, 1) \).
solution: |
  Let \(F(x,y,z)=2zx-y^2-x^2\), so the surface is \(F=0\). The given point satisfies \(F(1,1,1)=0\).

  The normal vector is the gradient
  \[
  \nabla F=(2z-2x,\,-2y,\,2x).
  \]
  Its value at the point is
  \[
  \nabla F(1,1,1)=(0,-2,2).
  \]
  The tangent-plane equation is
  \[
  0(x-1)-2(y-1)+2(z-1)=0.
  \]
  Therefore the tangent plane is \(z=y\).
provenance: written-for-site
steps:
  - The implicit surface is written as the zero set of \(F\).
  - The gradient is evaluated at the given point.
  - The normal vector is used to obtain the plane \(z=y\).
verification:
  checks:
    - expr: (2*z*x-y**2-x**2).subs({x:1,y:1,z:1})
      expected: "0"
    - expr: Tuple(diff(2*z*x-y**2-x**2,x).subs({x:1,y:1,z:1}),diff(2*z*x-y**2-x**2,y).subs({x:1,y:1,z:1}),diff(2*z*x-y**2-x**2,z).subs({x:1,y:1,z:1}))
      expected: "Tuple(0,-2,2)"
    - expr: expand(0*(x-1)-2*(y-1)+2*(z-1))
      expected: "-2*y+2*z"
:::

::: exercise
id: l5-tangent-plane.final-2021-q2
tier: exam
topics: [tangent-plane, implicit-surfaces]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2021
  paper: Final
  question: "2"
  points: 1
statement: |
  Find the equation of the tangent plane to the surface \(x^2 + y^2 - 6y - z^2 + xy + 7 = 0\) at the point \((1, 1, 2)\).
solution: |
  Let \(F(x, y, z) = x^2 + y^2 - 6y - z^2 + xy + 7\). Then \(F(1, 1, 2) = 0\), so the point lies on the surface.

  The gradient is \(\nabla F = (2x + y,\ 2y - 6 + x,\ -2z)\). At the point, \(\nabla F(1, 1, 2) = (3, -3, -4)\).

  The tangent plane is
  \[ 3(x - 1) - 3(y - 1) - 4(z - 2) = 0. \]
provenance: official-key
steps:
  - The point \((1, 1, 2)\) satisfies the surface equation.
  - The gradient at that point is \((3, -3, -4)\).
  - The plane is \(3(x - 1) - 3(y - 1) - 4(z - 2) = 0\).
verification:
  checks:
    - expr: '(x**2 + y**2 - 6*y - z**2 + x*y + 7).subs({x: 1, y: 1, z: 2})'
      expected: 0
    - expr: '(diff(x**2 + y**2 - 6*y - z**2 + x*y + 7, x).subs({x: 1, y: 1, z: 2}), diff(x**2 + y**2 - 6*y - z**2 + x*y + 7, y).subs({x: 1, y: 1, z: 2}), diff(x**2 + y**2 - 6*y - z**2 + x*y + 7, z).subs({x: 1, y: 1, z: 2}))'
      expected: (3, -3, -4)
:::

::: exercise
id: l5-tangent-plane.final-2022-q2
tier: exam
topics: [tangent-plane, implicit-surfaces]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2022
  paper: Final
  question: "2"
  points: 1
statement: |
  Give the equation of the tangent plane to the surface \(z^2 + x^4 + y^4 = 1\) at \(\left(\dfrac{1}{2}, \dfrac{1}{2}, \dfrac{\sqrt{14}}{4}\right)\).
solution: |
  Let \(F(x, y, z) = z^2 + x^4 + y^4 - 1\). At the given point,
  \[
  \begin{aligned}
  &\left(\frac{\sqrt{14}}{4}\right)^2 + \left(\frac{1}{2}\right)^4\\
  &\quad+\left(\frac{1}{2}\right)^4\\
  &=\frac{14}{16} + \frac{1}{16} + \frac{1}{16}\\
  &=1,
  \end{aligned}
  \]
  so the point lies on the surface.

  The gradient is \(\nabla F = (4x^3, 4y^3, 2z)\). At the point it equals \(\left(\dfrac{1}{2}, \dfrac{1}{2}, \dfrac{\sqrt{14}}{2}\right)\).

  The tangent plane is
  \[
  \begin{aligned}
  &\frac{1}{2}\left(x - \frac{1}{2}\right)\\
  &\quad+\frac{1}{2}\left(y - \frac{1}{2}\right)\\
  &\quad+\frac{\sqrt{14}}{2}\left(z - \frac{\sqrt{14}}{4}\right) = 0.
  \end{aligned}
  \]
provenance: official-key
steps:
  - The given point lies on \(z^2 + x^4 + y^4 = 1\).
  - The gradient there is \(\left(\dfrac{1}{2}, \dfrac{1}{2}, \dfrac{\sqrt{14}}{2}\right)\).
  - The plane uses that vector as its normal.
verification:
  checks:
    - expr: '(z**2 + x**4 + y**4 - 1).subs({x: Rational(1, 2), y: Rational(1, 2), z: sqrt(14)/4})'
      expected: 0
    - expr: '(diff(z**2 + x**4 + y**4 - 1, x).subs({x: Rational(1, 2), y: Rational(1, 2), z: sqrt(14)/4}), diff(z**2 + x**4 + y**4 - 1, y).subs({x: Rational(1, 2), y: Rational(1, 2), z: sqrt(14)/4}), diff(z**2 + x**4 + y**4 - 1, z).subs({x: Rational(1, 2), y: Rational(1, 2), z: sqrt(14)/4}))'
      expected: (1/2, 1/2, sqrt(14)/2)
:::

::: exercise
id: l5-tangent-plane.final-2022-q3b
tier: exam
topics: [tangent-plane]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2022
  paper: Final
  question: "3b"
  points: 1
statement: |
  Let \(f(x, y) = x^2 - y^2\). Compute the tangent plane to the surface \(z = f(x, y)\) at \((2, 1)\).
solution: |
  The value is \(f(2, 1) = 4 - 1 = 3\). The partial derivatives are \(f_x = 2x\) and \(f_y = -2y\), so \(\nabla f(2, 1) = (4, -2)\).

  The tangent plane to the graph is
  \[ z = 3 + 4(x - 2) - 2(y - 1). \]
provenance: official-key
steps:
  - \(f(2, 1) = 3\).
  - The gradient at \((2, 1)\) is \((4, -2)\).
  - The plane is \(z = 3 + 4(x - 2) - 2(y - 1)\).
verification:
  checks:
    - expr: '(x**2 - y**2).subs({x: 2, y: 1})'
      expected: 3
    - expr: '(diff(x**2 - y**2, x).subs({x: 2, y: 1}), diff(x**2 - y**2, y).subs({x: 2, y: 1}))'
      expected: (4, -2)
:::

::: exercise
id: l5-tangent-plane.retake-2023-q1a
tier: exam
topics: [tangent-plane, implicit-surfaces]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2023
  paper: Retake
  question: "1a"
  points: 2
statement: |
  Give the equation of the tangent plane to the surface \(z^2 + 2x^2 + y^2 = 1\) at a point \((x^{*}, y^{*}, z^{*})\) of the surface.
solution: |
  Let \(F(x, y, z) = z^2 + 2x^2 + y^2 - 1\). The gradient is \(\nabla F = (4x, 2y, 2z)\).

  At \((x^{*}, y^{*}, z^{*})\) the tangent plane is
  \[
  \begin{aligned}
  &4x^{*}(x - x^{*}) + 2y^{*}(y - y^{*})\\
  &\quad+2z^{*}(z - z^{*}) = 0.
  \end{aligned}
  \]

  The point lies on the surface, so \(2(x^{*})^2 + (y^{*})^2 + (z^{*})^2 = 1\). Expanding the plane equation and using that identity gives the same plane in the form
  \[ 2x^{*} x + y^{*} y + z^{*} z = 1. \]
provenance: written-for-site
steps:
  - The gradient of \(z^2 + 2x^2 + y^2 - 1\) is \((4x, 2y, 2z)\).
  - The plane at a general point uses that gradient as its normal.
  - On the surface the equation simplifies to \(2x^{*} x + y^{*} y + z^{*} z = 1\).
verification:
  checks:
    - expr: '(diff(z**2 + 2*x**2 + y**2 - 1, x), diff(z**2 + 2*x**2 + y**2 - 1, y), diff(z**2 + 2*x**2 + y**2 - 1, z))'
      expected: (4*x, 2*y, 2*z)
    - expr: 'simplify(4*xs*(x - xs) + 2*ys*(y - ys) + 2*zs*(z - zs) - 2*(2*xs*x + ys*y + zs*z - 1) + 2*(zs**2 + 2*xs**2 + ys**2 - 1))'
      expected: 0
:::

::: exercise
id: l5-tangent-plane.retake-2023-q1b
tier: exam
topics: [tangent-plane, parallel-planes]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2023
  paper: Retake
  question: "1b"
  points: 1
statement: |
  The surface \(z^2 + 2x^2 + y^2 = 1\) has a tangent plane at each of its points \((x^{*}, y^{*}, z^{*})\). Find every such point at which that plane is parallel to \(x + y + z = 0\).
solution: |
  The tangent plane has normal \((4x^{*}, 2y^{*}, 2z^{*})\), and \(x + y + z = 0\) has normal \((1, 1, 1)\). The planes are parallel when these normals are scalar multiples of each other:
  \[ 4x^{*} = 2y^{*} = 2z^{*}. \]
  Hence \(y^{*} = 2x^{*}\) and \(z^{*} = 2x^{*}\).

  The point lies on the surface, so
  \[
  \begin{aligned}
  &(2x^{*})^2 + 2(x^{*})^2 + (2x^{*})^2\\
  &=10(x^{*})^2 = 1.
  \end{aligned}
  \]
  The solutions are \(x^{*} = 1/\sqrt{10}\) and \(x^{*} = -1/\sqrt{10}\). The corresponding points are
  \[
  \begin{aligned}
  &\left(\frac{1}{\sqrt{10}}, \frac{2}{\sqrt{10}}, \frac{2}{\sqrt{10}}\right),\\
  &\left(-\frac{1}{\sqrt{10}}, -\frac{2}{\sqrt{10}}, -\frac{2}{\sqrt{10}}\right).
  \end{aligned}
  \]

  A zero normal would require \(x^{*} = y^{*} = z^{*} = 0\). There \(F(0, 0, 0) = -1\), so the origin lies off the surface.
provenance: written-for-site
steps:
  - Parallel planes have collinear normals, so \(4x^{*} = 2y^{*} = 2z^{*}\).
  - The surface then gives \(10(x^{*})^2 = 1\).
  - The two points are \(\left(\pm 1/\sqrt{10},\ \pm 2/\sqrt{10},\ \pm 2/\sqrt{10}\right)\), with matching signs.
verification:
  checks:
    - expr: '(4*(1/sqrt(10)) - 2*(2/sqrt(10)), 2*(2/sqrt(10)) - 2*(2/sqrt(10)), (2/sqrt(10))**2 + 2*(1/sqrt(10))**2 + (2/sqrt(10))**2 - 1)'
      expected: (0, 0, 0)
    - expr: '(4*(-1/sqrt(10)) - 2*(-2/sqrt(10)), 2*(-2/sqrt(10)) - 2*(-2/sqrt(10)), (-2/sqrt(10))**2 + 2*(-1/sqrt(10))**2 + (-2/sqrt(10))**2 - 1)'
      expected: (0, 0, 0)
    - expr: 'solve(10*xs**2 - 1, xs)'
      expected: "[-sqrt(10)/10, sqrt(10)/10]"
    - expr: 'simplify((2*xs)**2 + 2*xs**2 + (2*xs)**2 - 10*xs**2)'
      expected: 0
:::

::: exercise
id: l5-tangent-plane.mock-exam-1-q1a
tier: exam
topics: [tangent-plane, implicit-surfaces]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2022
  paper: "Mock exam"
  question: "1a"
  points: 1
statement: |
  Give the equation of the tangent plane to the surface \(z^4 + 2x^2 + y^2 = 1\) at a point \((x^{*}, y^{*}, z^{*})\) of the surface.
solution: |
  Let \(F(x, y, z) = z^4 + 2x^2 + y^2 - 1\). The gradient is \(\nabla F = (4x, 2y, 4z^3)\).

  At \((x^{*}, y^{*}, z^{*})\) the tangent plane is
  \[
  \begin{aligned}
  &4x^{*}(x - x^{*}) + 2y^{*}(y - y^{*})\\
  &\quad+4(z^{*})^3 (z - z^{*}) = 0.
  \end{aligned}
  \]

  The point lies on the surface, so \(2(x^{*})^2 + (y^{*})^2 = 1 - (z^{*})^4\). Expanding the plane and using that identity gives
  \[ 2x^{*} x + y^{*} y + 2(z^{*})^3 z = 1 + (z^{*})^4. \]
provenance: written-for-site
steps:
  - The gradient of \(z^4 + 2x^2 + y^2 - 1\) is \((4x, 2y, 4z^3)\).
  - The plane at a general point uses that gradient as its normal.
  - On the surface the equation simplifies to \(2x^{*} x + y^{*} y + 2(z^{*})^3 z = 1 + (z^{*})^4\).
verification:
  checks:
    - expr: '(diff(z**4 + 2*x**2 + y**2 - 1, x), diff(z**4 + 2*x**2 + y**2 - 1, y), diff(z**4 + 2*x**2 + y**2 - 1, z))'
      expected: (4*x, 2*y, 4*z**3)
    - expr: 'simplify(4*xs*(x - xs) + 2*ys*(y - ys) + 4*zs**3*(z - zs) - 2*(2*xs*x + ys*y + 2*zs**3*z - 1 - zs**4) + 2*(zs**4 + 2*xs**2 + ys**2 - 1))'
      expected: 0
:::

::: exercise
id: l5-tangent-plane.mock-exam-1-q1b
tier: exam
topics: [tangent-plane, parallel-planes]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2022
  paper: "Mock exam"
  question: "1b"
  points: 1
statement: |
  The surface \(z^4 + 2x^2 + y^2 = 1\) has a tangent plane at each of its points \((x^{*}, y^{*}, z^{*})\). Find every such point at which that plane is parallel to \(x + y + z = 0\). The normals of the two planes are collinear.
solution: |
  The tangent plane has normal \((4x^{*}, 2y^{*}, 4(z^{*})^3)\), and \(x + y + z = 0\) has normal \((1, 1, 1)\). Collinear normals mean
  \[ 4x^{*} = 2y^{*} = 4(z^{*})^3. \]
  Hence \(y^{*} = 2x^{*}\) and \(x^{*} = (z^{*})^3\).

  If \(z^{*} = 0\), then \(x^{*} = y^{*} = 0\). There \(F(0, 0, 0) = -1\), so the origin lies off the surface.

  With \(x^{*} = (z^{*})^3\) and \(y^{*} = 2(z^{*})^3\), the surface equation becomes
  \[
  \begin{aligned}
  &(z^{*})^4 + 2(z^{*})^6 + 4(z^{*})^6\\
  &=(z^{*})^4 + 6(z^{*})^6 = 1.
  \end{aligned}
  \]
  Set \(u = (z^{*})^2\). Then \(6u^3 + u^2 - 1 = 0\), which factors as \((2u - 1)(3u^2 + 2u + 1) = 0\). The discriminant of \(3u^2 + 2u + 1\) is \(-8\), so that quadratic equation has no real solution. The real solution of the cubic is \(u = 1/2\).

  Thus \((z^{*})^2 = 1/2\), so \(z^{*} = \pm \sqrt{2}/2\). Then \(x^{*} = z^{*}/2\) and \(y^{*} = z^{*}\). The points are
  \[
  \begin{aligned}
  &\left(\frac{\sqrt{2}}{4}, \frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right),\\
  &\left(-\frac{\sqrt{2}}{4}, -\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right).
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Collinear normals give \(4x^{*} = 2y^{*} = 4(z^{*})^3\).
  - Substituting into the surface produces \(6u^3 + u^2 - 1 = 0\) with \(u = (z^{*})^2\).
  - The only real root is \(u = 1/2\), and the two points have coordinates \(\pm(\sqrt{2}/4,\ \sqrt{2}/2,\ \sqrt{2}/2)\).
verification:
  checks:
    - expr: '(4*(sqrt(2)/4) - 2*(sqrt(2)/2), 2*(sqrt(2)/2) - 4*(sqrt(2)/2)**3, (sqrt(2)/2)**4 + 2*(sqrt(2)/4)**2 + (sqrt(2)/2)**2 - 1)'
      expected: (0, 0, 0)
    - expr: '(4*(-sqrt(2)/4) - 2*(-sqrt(2)/2), 2*(-sqrt(2)/2) - 4*(-sqrt(2)/2)**3, (-sqrt(2)/2)**4 + 2*(-sqrt(2)/4)**2 + (-sqrt(2)/2)**2 - 1)'
      expected: (0, 0, 0)
    - expr: 'factor(6*u**3 + u**2 - 1)'
      expected: (2*u - 1)*(3*u**2 + 2*u + 1)
    - expr: 'discriminant(3*u**2 + 2*u + 1, u)'
      expected: -8
    - expr: 'simplify(zs**4 + 2*(zs**3)**2 + (2*zs**3)**2 - (6*zs**6 + zs**4))'
      expected: 0
:::

::: exercise
id: l5-tangent-plane.ex-ellipsoid-parallel-planes
tier: standard
topics: [tangent-planes, implicit-surfaces, parallel-planes]
statement: |
  The surface \(x^2 + 2y^2 + 3z^2 = 6\) has a tangent plane at each of its points.

  - a) Find every point at which that plane is parallel to the plane \(x + 2y + 3z = 0\).
  - b) Give the equations of the two tangent planes found in a).
  - c) Find the distance between these two planes.
solution: |
  a) Let \(F(x, y, z) = x^2 + 2y^2 + 3z^2 - 6\). The gradient is \(\nabla F = (2x, 4y, 6z)\), the normal of the tangent plane. The plane \(x + 2y + 3z = 0\) has normal \((1, 2, 3)\). The planes are parallel when the normals are scalar multiples of each other, so
  \[
  (2x, 4y, 6z) = k(1, 2, 3)
  \]
  for some \(k\). Then
  \[
  x = \frac{k}{2}, \qquad y = \frac{k}{2}, \qquad z = \frac{k}{2},
  \]
  so \(x = y = z = t\).

  The point lies on the surface, so \(t^2 + 2t^2 + 3t^2 = 6t^2 = 6\). Then \(t = 1\) or \(t = -1\). The points are \((1, 1, 1)\) and \((-1, -1, -1)\). The origin gives the zero normal and lies off the surface, because \(0 \neq 6\).

  b) At \((1, 1, 1)\) the gradient is \((2, 4, 6)\), and the plane is
  \[
  \begin{aligned}
  2(x - 1) + 4(y - 1) + 6(z - 1)&=0,\\
  x + 2y + 3z&=6.
  \end{aligned}
  \]

  At \((-1, -1, -1)\) the gradient is \((-2, -4, -6)\), and the plane is
  \[
  \begin{aligned}
  -2(x + 1) - 4(y + 1) - 6(z + 1)&=0,\\
  x + 2y + 3z&=-6.
  \end{aligned}
  \]

  c) The planes \(x + 2y + 3z = 6\) and \(x + 2y + 3z = -6\) share the normal \((1, 2, 3)\), whose length is \(\sqrt{14}\). The distance between them is the difference of the right-hand sides divided by that length:
  \[
  \frac{6 - (-6)}{\sqrt{14}} = \frac{12}{\sqrt{14}} = \frac{6\sqrt{14}}{7}.
  \]
provenance: written-for-site
steps:
  - Parallel planes have collinear normals, so (2x, 4y, 6z) is a multiple of (1, 2, 3) and x = y = z = t.
  - The surface gives 6t^2 = 6, so the points are (1, 1, 1) and (-1, -1, -1).
  - The planes are x + 2y + 3z = 6 and x + 2y + 3z = -6.
  - The distance is 12/sqrt(14) = 6 sqrt(14)/7.
verification:
  checks:
    - expr: '(x**2 + 2*y**2 + 3*z**2 - 6).subs({x: 1, y: 1, z: 1})'
      expected: "0"
    - expr: '(x**2 + 2*y**2 + 3*z**2 - 6).subs({x: -1, y: -1, z: -1})'
      expected: "0"
    - expr: 'solve(6*t**2 - 6, t)'
      expected: "[-1, 1]"
    - expr: 'Tuple(diff(x**2 + 2*y**2 + 3*z**2 - 6, x).subs({x: 1, y: 1, z: 1}), diff(x**2 + 2*y**2 + 3*z**2 - 6, y).subs({x: 1, y: 1, z: 1}), diff(x**2 + 2*y**2 + 3*z**2 - 6, z).subs({x: 1, y: 1, z: 1}))'
      expected: Tuple(2, 4, 6)
    - expr: 'expand(2*(x - 1) + 4*(y - 1) + 6*(z - 1))'
      expected: 2*x + 4*y + 6*z - 12
    - expr: 'expand(-2*(x + 1) - 4*(y + 1) - 6*(z + 1))'
      expected: -2*x - 4*y - 6*z - 12
    - expr: '12/sqrt(14)'
      expected: 6*sqrt(14)/7
:::

::: exercise
id: l5-tangent-plane.ex-homogeneous-planes-origin
tier: standard
topics: [tangent-planes]
statement: |
  Let \(f(x, y) = \dfrac{x^2}{y}\) for \(y \neq 0\).

  - a) Show that every tangent plane to the graph \(z = f(x, y)\) passes through the origin.
  - b) Give the tangent plane at \((2, 1)\) and check it with a).
solution: |
  a) Let \((a, b)\) be a point with \(b \neq 0\). The height is \(f(a, b) = \frac{a^2}{b}\). The partial derivatives are
  \[
  \frac{df}{dx} = \frac{2x}{y}, \qquad \frac{df}{dy} = -\frac{x^2}{y^2}.
  \]
  At \((a, b)\) they equal \(\frac{2a}{b}\) and \(-\frac{a^2}{b^2}\). The tangent plane is
  \[
  Z = \frac{a^2}{b} + \frac{2a}{b}(x - a) - \frac{a^2}{b^2}(y - b).
  \]
  At \((x, y) = (0, 0)\) the height on the plane is
  \[
  Z = \frac{a^2}{b} - \frac{2a^2}{b} + \frac{a^2}{b} = 0.
  \]
  The plane contains the point \((0, 0, 0)\), so it passes through the origin. The origin itself is not a point of the graph, because \(f\) is not defined at \(y = 0\).

  b) At \((2, 1)\) the height is \(f(2, 1) = 4\) and the partials are \(\frac{df}{dx} = 4\) and \(\frac{df}{dy} = -4\). The tangent plane is
  \[
  \begin{aligned}
  Z&=4 + 4(x - 2) - 4(y - 1)\\
  &=4x - 4y.
  \end{aligned}
  \]
  At \((0, 0)\) this plane has height \(0\), as a) predicts.
provenance: written-for-site
steps:
  - The partials at (a, b) are 2a/b and -a^2/b^2.
  - The plane at (a, b) has height 0 at (x, y) = (0, 0).
  - At (2, 1) the plane is Z = 4x - 4y.
verification:
  checks:
    - expr: 'Tuple(diff(x**2/y, x), diff(x**2/y, y))'
      expected: Tuple(2*x/y, -x**2/y**2)
    - expr: 'simplify(a**2/b + (0 - a)*(2*a/b) + (0 - b)*(-a**2/b**2))'
      expected: "0"
    - expr: '(x**2/y).subs({x: 2, y: 1})'
      expected: "4"
    - expr: 'Tuple(diff(x**2/y, x).subs({x: 2, y: 1}), diff(x**2/y, y).subs({x: 2, y: 1}))'
      expected: Tuple(4, -4)
    - expr: 'expand(4 + 4*(x - 2) - 4*(y - 1))'
      expected: 4*x - 4*y
:::

::: exercise
id: l5-tangent-plane.ex-vertical-planes-saddle
tier: standard
topics: [tangent-planes, gradients]
statement: |
  The point \((2, 1, 2)\) lies on the surface \(z = xy\). A plane perpendicular to the \(xy\)-plane through this point cuts the surface in a curve.

  - a) Find an equation of the plane for which the curve has slope \(0\) at the point.
  - b) Find an equation of the plane for which the curve has the largest possible slope at the point, and give that slope.
solution: |
  Let \(f(x, y) = xy\). Then \(f(2, 1) = 2\), so the point lies on the surface. The partial derivatives are \(\frac{df}{dx} = y\) and \(\frac{df}{dy} = x\), so \(\nabla f(2, 1) = (1, 2)\).

  A vertical plane through the point contains a horizontal direction given by a unit vector \(\mathbf{u}\). The slope of the cross-section at the point is the directional derivative \(\nabla f(2, 1)\cdot\mathbf{u}\).

  a) The slope is \(0\) when \(\mathbf{u}\) is perpendicular to \((1, 2)\), for example \(\mathbf{u}\) along \((2, -1)\). The plane has the horizontal normal \((1, 2)\), so it is
  \[
  \begin{aligned}
  (x - 2) + 2(y - 1)&=0,\\
  x + 2y&=4.
  \end{aligned}
  \]

  b) The slope is largest when \(\mathbf{u}\) points along \(\nabla f(2, 1)\), that is along \((1, 2)\). The largest slope is \(|\nabla f(2, 1)| = \sqrt{5}\). The plane has the horizontal normal \((2, -1)\), which is perpendicular to \((1, 2)\), so it is
  \[
  \begin{aligned}
  2(x - 2) - (y - 1)&=0,\\
  2x - y&=3.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The gradient at (2, 1) is (1, 2).
  - Slope 0 needs a direction perpendicular to the gradient, which gives x + 2y = 4.
  - The largest slope sqrt(5) needs the direction of the gradient, which gives 2x - y = 3.
verification:
  checks:
    - expr: '(x*y).subs({x: 2, y: 1})'
      expected: "2"
    - expr: 'Tuple(diff(x*y, x).subs({x: 2, y: 1}), diff(x*y, y).subs({x: 2, y: 1}))'
      expected: Tuple(1, 2)
    - expr: 'Matrix([1, 2]).dot(Matrix([2, -1]))'
      expected: "0"
    - expr: '(2 + 2*1) - 4'
      expected: "0"
    - expr: '(2*2 - 1) - 3'
      expected: "0"
    - expr: 'sqrt(1**2 + 2**2)'
      expected: sqrt(5)
:::
