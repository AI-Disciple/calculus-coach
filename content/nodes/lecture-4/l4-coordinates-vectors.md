---
id: l4-coordinates-vectors
lecture: 4
order: 1
title: Coordinates in space and vectors
prerequisites: []
sources:
  - { source: handout, section: "12.1", page: 299 }
  - { source: handout, section: "12.2", page: 302 }
  - { source: lecture-4-notebook }
examWeight: low
examWeightNote: Supporting geometry for the multivariable lectures.
notation: |
  Angle brackets \(\langle v_1, v_2, v_3\rangle\) are the components of a vector. Round parentheses \((x, y, z)\) are a point.
taught: lecture
status: reviewed
---

::: section
title: Points, planes and distance
:::

::: formal-statement
kind: definition
title: Coordinates of a point
source: { source: handout, section: "12.1", page: 299 }
text: |
  A point in space is identified by three numbers in the order \((x, y, z)\).
:::

::: plain-explanation
text: |
  The coordinates are the signed distances from the origin along the axes, written in the order \(x\), then \(y\), then \(z\).
:::

::: formal-statement
kind: definition
title: Lecture frame
source: { source: lecture-4-notebook }
text: |
  The lecture figures use a **right-handed frame**, with \(z\) up, \(y\) to the right, and \(x\) down-left.
:::

::: plain-explanation
text: |
  The \(x\)-axis is the slanted one. It points out of the page toward the viewer and is drawn running down and to the left.
:::

::: formal-statement
kind: definition
title: The equation x = 1
source: { source: handout, section: "12.1", page: 300 }
text: |
  - In two dimensions, \(x = 1\) is the vertical line through \((1, 0)\).
  - In three dimensions, \(x = 1\) is the plane of all points with \(x\)-coordinate \(1\).
:::

::: plain-explanation
text: |
  Every point of that plane has the form \((1, y, z)\), with \(y\) and \(z\) any real numbers.
:::

::: formal-statement
kind: definition
title: Distance
source: { source: handout, section: "12.1", page: "300-301" }
text: |
  The distance between \(P_1(x_1, y_1, z_1)\) and \(P_2(x_2, y_2, z_2)\) is
  \[
  d(P_1, P_2)=\sqrt{\begin{aligned}
  &(x_1 - x_2)^2 + (y_1 - y_2)^2\\
  &\quad + (z_1 - z_2)^2
  \end{aligned}}.
  \]
:::

::: plain-explanation
text: |
  1. Square the coordinate changes and add them.
  2. Take the square root of that sum. The distance is that square root, and it equals the length of the straight segment from \(P_1\) to \(P_2\).
:::

::: worked-example
title: Distance between two points
problem: |
  Find the distance between \(A = (2, -1, 0)\) and \(B = (0, 2, 4)\).
solution: |
  The points are \(A = (2, -1, 0)\) and \(B = (0, 2, 4)\). The coordinate differences \(2 - 0\), \(-1 - 2\) and \(0 - 4\) equal \(2\), \(-3\) and \(-4\). The distance is
  \[
  \begin{aligned}
  &\sqrt{2^2 + (-3)^2 + (-4)^2}\\
  &=\sqrt{29}.
  \end{aligned}
  \]
:::

::: going-deeper
title: Where the distance formula comes from
text: |
  The distance formula is Pythagoras applied twice. Take two points that differ by \(a\), \(b\) and \(c\) in the three coordinates. The segment across the base of the box between them has length
  \[
  \sqrt{a^2 + b^2}.
  \]
  That segment and the vertical edge of length \(|c|\) are perpendicular, so the box diagonal has length
  \[
  \sqrt{a^2 + b^2 + c^2}.
  \]
  In \(\mathbb{R}^n\) the same argument adds one square per coordinate.
:::

::: key-points
text: |
  - A point in space is written \((x, y, z)\). The coordinates are the signed distances from the origin along the axes, in the order \(x\), then \(y\), then \(z\).
  - In three dimensions, \(x = 1\) is the plane of all points \((1, y, z)\), with \(y\) and \(z\) any real numbers. In two dimensions, the same equation is the vertical line through \((1, 0)\).
  - The distance is \(d(P_1, P_2) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2}\), the length of the straight segment from \(P_1\) to \(P_2\).
:::

::: concept-question
id: l4-coordinates-vectors.q-f2e68001
question: |
  In space, what set of points satisfies \(x = 1\)?
options:
  - text: |
      The plane of all points with \(x\)-coordinate \(1\).
    correct: true
  - text: |
      The vertical line through \((1, 0)\).
  - text: |
      The single point \((1, 0, 0)\).
  - text: |
      The sphere of radius \(1\) centred at the origin.
explanation: |
  - In two dimensions, \(x = 1\) is the vertical line through \((1, 0)\).
  - In three dimensions, \(y\) and \(z\) may be any real numbers, so \(x = 1\) is the plane of points \((1, y, z)\).
:::

::: exercise
id: l4-coordinates-vectors.ex-distance
tier: basic
topics: [distance]
statement: |
  Find the distance between \(P_1 = (3, 1, -2)\) and \(P_2 = (1, -5, 1)\).
solution: |
  The points are \(P_1 = (3, 1, -2)\) and \(P_2 = (1, -5, 1)\). The coordinate differences \(3 - 1\), \(1 - (-5)\) and \(-2 - 1\) equal \(2\), \(6\) and \(-3\). The distance is
  \[
  \begin{aligned}
  &\sqrt{2^2 + 6^2 + (-3)^2}\
  &=\sqrt{49}=7.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Coordinate differences of the two points.
  - Sum of squares under the square root.
  - Distance \(7\).
verification:
  checks:
    - expr: 'sqrt((3-1)**2 + (1-(-5))**2 + ((-2)-1)**2)'
      expected: '7'
:::

::: section
title: Spheres
:::

::: formal-statement
kind: definition
title: Sphere
source: { source: handout, section: "12.1", page: 302 }
text: |
  The sphere of radius \(r\) centred at \((h, k, l)\) has equation
  \[
  r^2 = (x - h)^2 + (y - k)^2 + (z - l)^2.
  \]
:::

::: plain-explanation
text: |
  The right-hand side is the square of the distance from \((x, y, z)\) to the centre \((h, k, l)\). The equation holds when that distance equals the radius \(r\).
:::

::: visual
kind: quadric
caption: |
  The figure starts as the sphere with \(r = 1\) and centre \((0, 0, 0)\), so \(h = k = l = 0\) and the equation reads \(x^2 + y^2 + z^2 = 1\). Move the slicing plane. It meets the sphere in a circle when it is closer than \(1\) to the centre, and the readout says it misses the surface when it is farther away.
params:
  surface: sphere
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 0
:::

::: key-points
text: |
  - The sphere of radius \(r\) centred at \((h, k, l)\) has equation \(r^2 = (x - h)^2 + (y - k)^2 + (z - l)^2\).
  - The right-hand side is the square of the distance from \((x, y, z)\) to the centre, so the equation holds when that distance equals the radius \(r\). The constant on the left is \(r^2\), so a sphere of radius \(3\) has the constant \(9\).
:::

::: concept-question
id: l4-coordinates-vectors.q-cf0b1518
question: |
  Which equation is the sphere of radius \(3\) centred at \((1, 0, -2)\)?
options:
  - text: |
      \((x - 1)^2 + y^2 + (z + 2)^2 = 9\)
    correct: true
  - text: |
      \((x - 1)^2 + y^2 + (z + 2)^2 = 3\)
  - text: |
      \((x + 1)^2 + y^2 + (z - 2)^2 = 9\)
  - text: |
      \((x - 1)^2 + y^2 + (z - 2)^2 = 9\)
explanation: |
  The centre \((1, 0, -2)\) gives the shifts \(x - 1\), \(y - 0\) and \(z - (-2)\). The radius is \(3\), so the constant in the equation is
  \[
  3^2 = 9.
  \]
:::

::: section
title: Vectors and components
:::

::: formal-statement
kind: definition
title: Vector
source: { source: handout, section: "12.2", page: 302 }
text: |
  A vector is a quantity consisting of a non-negative **magnitude** and a **direction**. It does not include a location.
:::

::: plain-explanation
text: |
  The magnitude is the length of the arrow. The direction is which way it points. The tail may sit at any point.
:::

::: formal-statement
kind: definition
title: Component arithmetic
source: { source: handout, section: "12.2", page: 305 }
text: |
  Scalar multiplication, addition, subtraction, and the magnitude act on components by the rules
  \[
  a\langle v_1, v_2, v_3\rangle = \langle a v_1, a v_2, a v_3\rangle,
  \]
  \[
  \begin{aligned}
  \langle v_1, v_2, v_3\rangle\\
  &+ \langle w_1, w_2, w_3\rangle\\
  &=\langle v_1 + w_1, v_2 + w_2, v_3 + w_3\rangle,
  \end{aligned}
  \]
  \[
  \begin{aligned}
  \langle v_1, v_2, v_3\rangle\\
  &- \langle w_1, w_2, w_3\rangle\\
  &=\langle v_1 - w_1, v_2 - w_2, v_3 - w_3\rangle,
  \end{aligned}
  \]
  \[
  \lvert\langle v_1, v_2, v_3\rangle\rvert = \sqrt{v_1^2 + v_2^2 + v_3^2}.
  \]
  If the tail of \(\langle 1, 2, 3\rangle\) is at \((4, 5, 6)\), the head is at \((5, 7, 9)\).
:::

::: plain-explanation
text: |
  The entries of a component vector are the change from the tail to the head. When the arrows are placed head to tail, the sum runs from the tail of the first vector to the head of the second. Adding matching entries gives that sum. A scalar multiplies every entry. A negative scalar reverses the direction. Subtraction adds the scalar multiple by \(-1\). The magnitude equals the distance from the tail to the head.
:::

::: worked-example
title: Scalar multiple and subtraction
problem: |
  Compute \(2\langle 1, -2, 4\rangle - \langle 3, 0, -1\rangle\). Then find the magnitude of the result.
solution: |
  The scalar multiple \(2\langle 1, -2, 4\rangle\) equals \(\langle 2, -4, 8\rangle\). Subtracting \(\langle 3, 0, -1\rangle\) gives
  \[
  \langle 2 - 3, -4 - 0, 8 - (-1)\rangle = \langle -1, -4, 9\rangle.
  \]
  The magnitude of \(\langle -1, -4, 9\rangle\) is
  \[
  \begin{aligned}
  &\sqrt{(-1)^2 + (-4)^2 + 9^2}\\
  &=\sqrt{98}=7\sqrt{2}.
  \end{aligned}
  \]
:::

::: guided-example
title: Add, then take the magnitude
problem: |
  Let \(\mathbf{a} = \langle 2, -1, 2\rangle\) and \(\mathbf{b} = \langle -1, 4, 0\rangle\). Compute \(\mathbf{a} + \mathbf{b}\) and \(\lvert\mathbf{a} + \mathbf{b}\rvert\). Try each step on paper before you show it.
steps:
  - |
    Add matching components. The sum is \(\langle 2 + (-1), -1 + 4, 2 + 0\rangle\).
  - |
    The sum equals \(\mathbf{a} + \mathbf{b} = \langle 1, 3, 2\rangle\).
  - |
    The magnitude is \(\sqrt{1^2 + 3^2 + 2^2} = \sqrt{14}\).
:::

::: key-points
text: |
  - A vector has a non-negative magnitude and a direction. It does not include a location, so the tail may sit at any point and arrows with the same components are the same vector.
  - The entries of a component vector are the change from the tail to the head, so the head of \(\langle 1, 2, 3\rangle\) with its tail at \((4, 5, 6)\) is \((5, 7, 9)\).
  - A scalar multiplies every component, and addition and subtraction combine matching components. For example, \(a\langle v_1, v_2, v_3\rangle = \langle a v_1, a v_2, a v_3\rangle\) and \(\langle v_1, v_2, v_3\rangle + \langle w_1, w_2, w_3\rangle = \langle v_1 + w_1, v_2 + w_2, v_3 + w_3\rangle\).
  - The magnitude is \(\lvert\langle v_1, v_2, v_3\rangle\rvert = \sqrt{v_1^2 + v_2^2 + v_3^2}\), the distance from the tail to the head.
:::

::: concept-question
id: l4-coordinates-vectors.q-f63df7a1
question: |
  Two arrows both have components \(\langle 1, 2, 3\rangle\). One tail is at the origin. The other tail is at \((4, 5, 6)\). Which statement is correct?
options:
  - text: |
      They are the same vector, and the second head is \((5, 7, 9)\).
    correct: true
  - text: |
      They are different vectors, because the tails differ.
  - text: |
      The second head is \((4, 5, 6)\).
  - text: |
      The magnitude of the second arrow is \(\sqrt{4^2 + 5^2 + 6^2}\).
explanation: |
  The same components are the same vector. The tail may sit at any point. Adding \(\langle 1, 2, 3\rangle\) to the tail \((4, 5, 6)\) puts the head at \((5, 7, 9)\). The magnitude is \(\sqrt{1^2 + 2^2 + 3^2} = \sqrt{14}\), taken from the components.
:::

::: section
title: Basis vectors and displacement
:::

::: formal-statement
kind: definition
title: Standard basis
source: { source: handout, section: "12.2", page: 306 }
text: |
  The **standard basis vectors** are
  \[
  \mathbf{i} = \langle 1, 0, 0\rangle, \quad \mathbf{j} = \langle 0, 1, 0\rangle, \quad \mathbf{k} = \langle 0, 0, 1\rangle,
  \]
  and
  \[
  \langle v_1, v_2, v_3\rangle = v_1\mathbf{i} + v_2\mathbf{j} + v_3\mathbf{k}.
  \]
:::

::: plain-explanation
text: |
  \(\mathbf{i}\) is the unit step along the positive \(x\)-axis, \(\mathbf{j}\) along the positive \(y\)-axis, and \(\mathbf{k}\) along the positive \(z\)-axis. Any component vector is a sum of scalar multiples of these basis vectors.
:::

::: formal-statement
kind: definition
title: Displacement
source: { source: handout, section: "12.2", page: 306 }
text: |
  The vector whose tail at \(P\) has its head at \(Q\) is written \(\overrightarrow{PQ}\).
:::

::: plain-explanation
text: |
  The arrow starts at \(P\) and ends at \(Q\). Each component is an end coordinate minus the matching start coordinate.
:::

::: worked-example
title: Displacement from P to Q
problem: |
  Find \(\overrightarrow{PQ}\) for \(P = (1, -2, 4)\) and \(Q = (-2, 1, 3)\).
solution: |
  The tail is \(P = (1, -2, 4)\) and the head is \(Q = (-2, 1, 3)\). The components are \(-2 - 1\), \(1 - (-2)\) and \(3 - 4\). So
  \[
  \begin{aligned}
  \overrightarrow{PQ}&=\langle -2 - 1, 1 - (-2), 3 - 4\rangle,\\
  &=\langle -3, 3, -1\rangle.
  \end{aligned}
  \]
:::

::: trap
text: |
  \(\overrightarrow{PQ}\) runs from \(P\) to \(Q\), so each component is a coordinate of \(Q\) minus the matching coordinate of \(P\). For \(P = (1, -2, 4)\) and \(Q = (-2, 1, 3)\), the first component is \(-2 - 1 = -3\). The subtraction \(1 - (-2) = 3\) is the first component of \(\overrightarrow{QP}\).
:::

::: key-points
text: |
  - The standard basis vectors are \(\mathbf{i} = \langle 1, 0, 0\rangle\), \(\mathbf{j} = \langle 0, 1, 0\rangle\) and \(\mathbf{k} = \langle 0, 0, 1\rangle\), and \(\langle v_1, v_2, v_3\rangle = v_1\mathbf{i} + v_2\mathbf{j} + v_3\mathbf{k}\).
  - The vector \(\overrightarrow{PQ}\) has its tail at \(P\) and its head at \(Q\). Each component is a coordinate of \(Q\) minus the matching coordinate of \(P\), so \(\overrightarrow{PQ} = \langle x_2 - x_1, y_2 - y_1, z_2 - z_1\rangle\) for \(P = (x_1, y_1, z_1)\) and \(Q = (x_2, y_2, z_2)\).
  - The usual slip computes each component as a coordinate of \(P\) minus the matching coordinate of \(Q\). That subtraction gives \(\overrightarrow{QP}\). For \(P = (1, -2, 4)\) and \(Q = (-2, 1, 3)\), the first component of \(\overrightarrow{PQ}\) is \(-2 - 1 = -3\), while \(1 - (-2) = 3\) is the first component of \(\overrightarrow{QP}\).
:::

::: concept-question
id: l4-coordinates-vectors.q-412bc2eb
question: |
  Which vector equals \(2\mathbf{i} - \mathbf{k}\)?
options:
  - text: |
      \(\langle 2, 0, -1\rangle\)
    correct: true
  - text: |
      \(\langle 2, -1, 0\rangle\)
  - text: |
      \(\langle 0, 2, -1\rangle\)
  - text: |
      \(\langle 2, 1, -1\rangle\)
explanation: |
  \(\mathbf{i} = \langle 1, 0, 0\rangle\) and \(\mathbf{k} = \langle 0, 0, 1\rangle\), so
  \[
  \begin{aligned}
  2\mathbf{i} - \mathbf{k}&=\langle 2, 0, 0\rangle + \langle 0, 0, -1\rangle,\\
  &=\langle 2, 0, -1\rangle.
  \end{aligned}
  \]
:::

::: exercise
id: l4-coordinates-vectors.ex-displacement
tier: standard
topics: [vectors, displacement]
statement: |
  Let \(P = (2, -1, 5)\) and \(Q = (5, 3, -7)\). Find \(\overrightarrow{PQ}\) and the magnitude \(\lvert\overrightarrow{PQ}\rvert\).
solution: |
  The tail is \(P = (2, -1, 5)\) and the head is \(Q = (5, 3, -7)\). The displacement is
  \[
  \begin{aligned}
  \overrightarrow{PQ}&=\langle 5 - 2, 3 - (-1), -7 - 5\rangle,\
  &=\langle 3, 4, -12\rangle.
  \end{aligned}
  \]
  The magnitude is
  \[
  \begin{aligned}
  \lvert\overrightarrow{PQ}\rvert&=\sqrt{3^2 + 4^2 + (-12)^2},\
  &=\sqrt{169}=13.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Components of \(\overrightarrow{PQ}\).
  - Magnitude \(13\).
verification:
  checks:
    - expr: '(5 - 2, 3 - (-1), -7 - 5)'
      expected: '(3, 4, -12)'
    - expr: 'sqrt(3**2 + 4**2 + (-12)**2)'
      expected: '13'
:::

::: exercise
id: l4-coordinates-vectors.ex-head-sphere
tier: exam
topics: [vectors, sphere]
statement: |
  The vector \(\langle 1, 2, 3\rangle\) has its tail at \((4, 5, 6)\). Find the head \(H\). The sphere centred at \(H\) passes through \(P = (8, 3, 9)\). Find the squared radius and the equation of the sphere.
solution: |
  The vector \(\langle 1, 2, 3\rangle\) has its tail at \((4, 5, 6)\). The head is
  \[
  \begin{aligned}
  H&=(4 + 1, 5 + 2, 6 + 3),\\
  &=(5, 7, 9).
  \end{aligned}
  \]
  The sphere is centred at \(H\) and passes through \(P = (8, 3, 9)\). The squared radius is
  \[
  \begin{aligned}
  r^2&=(8 - 5)^2 + (3 - 7)^2 + (9 - 9)^2,\\
  &=9 + 16 + 0 = 25.
  \end{aligned}
  \]
  The equation is \((x - 5)^2 + (y - 7)^2 + (z - 9)^2 = 25\).
provenance: written-for-site
steps:
  - Head \(H = (5, 7, 9)\).
  - Squared radius \(25\).
  - Sphere equation with centre \(H\).
verification:
  checks:
    - expr: '(4 + 1, 5 + 2, 6 + 3)'
      expected: '(5, 7, 9)'
    - expr: '(8 - 5)**2 + (3 - 7)**2 + (9 - 9)**2'
      expected: '25'
    - expr: '((x - 5)**2 + (y - 7)**2 + (z - 9)**2).subs({x: 8, y: 3, z: 9})'
      expected: '25'
:::

::: sheet-item
id: l4-coordinates-vectors.sheet-distance
category: formula
text: |
  The distance from \(P_1(x_1, y_1, z_1)\) to \(P_2(x_2, y_2, z_2)\) is \(d(P_1, P_2) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2}\).
:::

::: sheet-item
id: l4-coordinates-vectors.sheet-sphere
category: formula
text: |
  The sphere of radius \(r\) centred at \((h, k, l)\) has equation \(r^2 = (x - h)^2 + (y - k)^2 + (z - l)^2\).
:::

::: sheet-item
id: l4-coordinates-vectors.sheet-magnitude
category: formula
text: |
  The magnitude is \(\lvert\langle v_1, v_2, v_3\rangle\rvert = \sqrt{v_1^2 + v_2^2 + v_3^2}\). A scalar multiplies every component. Addition and subtraction combine matching components.
:::

::: sheet-item
id: l4-coordinates-vectors.sheet-displacement
category: formula
text: |
  The displacement from \(P = (x_1, y_1, z_1)\) to \(Q = (x_2, y_2, z_2)\) is \(\overrightarrow{PQ} = \langle x_2 - x_1, y_2 - y_1, z_2 - z_1\rangle\).
:::

::: sheet-item
id: l4-coordinates-vectors.sheet-plane
category: trap
text: |
  In space, \(x = 1\) is the plane of all points \((1, y, z)\). In two dimensions, the same equation is the vertical line through \((1, 0)\).
:::

::: exercise
id: l4-coordinates-vectors.ex-sphere-from-diameter
tier: standard
topics: [sphere, distance]
statement: |
  The segment from \(A = (1, -2, 4)\) to \(B = (-2, 1, 3)\) is a diameter of a sphere \(S\).

  1. Find the centre and the radius of \(S\), and write its equation.
  2. Decide whether the origin lies inside \(S\), on \(S\) or outside \(S\).
  3. The plane \(z = 3\) meets \(S\) in a circle. Give its equation in \(x\) and \(y\).
solution: |
  ### Centre and radius

  The centre is the midpoint of \(AB\), which is \(\left(\frac{1 + (-2)}{2}, \frac{-2 + 1}{2}, \frac{4 + 3}{2}\right) = \left(-\frac12, -\frac12, \frac72\right)\). The distance between \(A\) and \(B\) satisfies \(\lvert AB\rvert^2 = 3^2 + (-3)^2 + 1^2 = 19\). The radius is half of that distance, so \(r^2 = 19/4\). The equation is
  \[
  \left(x + \tfrac12\right)^2 + \left(y + \tfrac12\right)^2 + \left(z - \tfrac72\right)^2 = \tfrac{19}{4}.
  \]
  Check with \(A\):
  \[
  \begin{aligned}
  &\left(\frac32\right)^2 + \left(-\frac32\right)^2 + \left(\frac12\right)^2\\
  &=\frac94 + \frac94 + \frac14=\frac{19}{4}.
  \end{aligned}
  \]

  ### The origin

  The squared distance from the origin to the centre is \(\frac14 + \frac14 + \frac{49}{4} = \frac{51}{4}\). That is larger than \(r^2 = \frac{19}{4}\), so the origin lies outside \(S\).

  ### The plane \(z = 3\)

  Substituting \(z = 3\) gives \(\left(3 - \frac72\right)^2 = \frac14\). The equation becomes
  \[
  \begin{aligned}
  \left(x + \frac12\right)^2 + \left(y + \frac12\right)^2&=\frac{19}{4} - \frac14,\\
  &=\frac92.
  \end{aligned}
  \]
  This is a circle with centre \(\left(-\frac12, -\frac12\right)\) and radius \(\frac{3}{\sqrt{2}}\). The point \(B\) lies on it, because \(\left(-\frac32\right)^2 + \left(\frac32\right)^2 = \frac92\).
provenance: written-for-site
steps:
  - |
    Centre \(\left(-\frac12, -\frac12, \frac72\right)\) and \(r^2 = 19/4\).
  - |
    Origin outside, because \(51/4 > 19/4\).
  - |
    Circle \(\left(x + \frac12\right)^2 + \left(y + \frac12\right)^2 = \frac92\) in the plane \(z = 3\).
verification:
  checks:
    - expr: "((1 + (-2))/2, (-2 + 1)/2, (4 + 3)/2)"
      expected: "(-Rational(1, 2), -Rational(1, 2), Rational(7, 2))"
    - expr: "((1 - (-2))**2 + (-2 - 1)**2 + (4 - 3)**2)/4"
      expected: "Rational(19, 4)"
    - expr: "(1 + Rational(1, 2))**2 + (-2 + Rational(1, 2))**2 + (4 - Rational(7, 2))**2"
      expected: "Rational(19, 4)"
    - expr: "Rational(1, 4) + Rational(1, 4) + Rational(49, 4)"
      expected: "Rational(51, 4)"
    - expr: "Rational(19, 4) - (3 - Rational(7, 2))**2"
      expected: "Rational(9, 2)"
    - expr: "(-2 + Rational(1, 2))**2 + (1 + Rational(1, 2))**2"
      expected: "Rational(9, 2)"
:::

::: exercise
id: l4-coordinates-vectors.handout-12-1-4
number: "12.1.4"
tier: standard
topics:
  - planes
statement: |
  Describe geometrically the set of points \((x,y,z)\) that satisfy \(x+y=2\).
solution: |
  The equation does not contain \(z\), so \(z\) may be any real number. A point \((x,y,z)\) lies in the set exactly when \((x,y)\) satisfies \(x+y=2\). Solving for \(y\) gives \(y=2-x\), so the points of the set have the form
  \[
  (x,\,2-x,\,z),
  \]
  with \(x\) and \(z\) free.

  In the \(xy\)-plane, the equation \(x+y=2\) is the line through \((2,0)\) and \((0,2)\). Above and below each point of that line, the set contains the whole vertical line through the point. The set is therefore the plane that contains the line \(x+y=2\) of the \(xy\)-plane and runs parallel to the \(z\)-axis.
provenance: written-for-site
steps:
  - The variable \(z\) does not appear, so it is free.
  - Points have the form \((x, 2-x, z)\).
  - The set is the plane through the line \(x+y=2\) of the \(xy\)-plane, parallel to the \(z\)-axis.
verification:
  checks:
    - expr: 'solve(x + y - 2, y)[0]'
      expected: "2 - x"
    - expr: '(x + (2 - x)) - 2'
      expected: "0"
    - expr: '(x + y).subs({x: 2, y: 0}) + (x + y).subs({x: 0, y: 2})'
      expected: "4"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-1-5
number: "12.1.5"
tier: standard
topics:
  - planes
statement: |
  The equation \(x+y+z=1\) describes a collection of points in \(\mathbb{R}^3\). Describe (and sketch) the points that satisfy \(x+y+z=1\) and lie in the \(xy\)-plane, in the \(xz\)-plane, and in the \(yz\)-plane.
solution: |
  Each coordinate plane is described by one coordinate equal to \(0\). Substitute that equation into \(x+y+z=1\).

  - In the \(xy\)-plane, \(z=0\). The equation becomes \(x+y=1\). This is the line through \((1,0,0)\) and \((0,1,0)\).
  - In the \(xz\)-plane, \(y=0\). The equation becomes \(x+z=1\). This is the line through \((1,0,0)\) and \((0,0,1)\).
  - In the \(yz\)-plane, \(x=0\). The equation becomes \(y+z=1\). This is the line through \((0,1,0)\) and \((0,0,1)\).

  For the sketch, mark the points \((1,0,0)\), \((0,1,0)\) and \((0,0,1)\) on the three axes and join them in pairs. The three segments are the edges of a triangle, and the lines continue beyond the vertices.
provenance: written-for-site
steps:
  - Set \(z=0\) to get the line \(x+y=1\) in the \(xy\)-plane.
  - Set \(y=0\) to get the line \(x+z=1\) in the \(xz\)-plane.
  - Set \(x=0\) to get the line \(y+z=1\) in the \(yz\)-plane.
verification:
  checks:
    - expr: '(x + y + z - 1).subs(z, 0)'
      expected: "x + y - 1"
    - expr: '(x + y + z - 1).subs(y, 0)'
      expected: "x + z - 1"
    - expr: '(x + y + z - 1).subs(x, 0)'
      expected: "y + z - 1"
    - expr: '(1 + 0 + 0, 0 + 1 + 0, 0 + 0 + 1)'
      expected: "(1, 1, 1)"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-1-6
number: "12.1.6"
tier: basic
topics:
  - distance
statement: |
  Find the lengths of the sides of the triangle with vertices \((1,0,1)\), \((2,2,-1)\) and \((-3,2,-2)\).
solution: |
  Name the vertices \(A=(1,0,1)\), \(B=(2,2,-1)\) and \(C=(-3,2,-2)\). Each side length is the distance between two vertices.

  The side \(AB\) has coordinate differences \(1-2\), \(0-2\) and \(1-(-1)\), which equal \(-1\), \(-2\) and \(2\). So
  \[
  \begin{aligned}
  \lvert AB\rvert&=\sqrt{(-1)^2+(-2)^2+2^2},\\
  &=\sqrt{9}=3.
  \end{aligned}
  \]
  The side \(BC\) has differences \(2-(-3)\), \(2-2\) and \(-1-(-2)\), which equal \(5\), \(0\) and \(1\). So
  \[
  \begin{aligned}
  \lvert BC\rvert&=\sqrt{5^2+0^2+1^2},\\
  &=\sqrt{26}.
  \end{aligned}
  \]
  The side \(CA\) has differences \(-3-1\), \(2-0\) and \(-2-1\), which equal \(-4\), \(2\) and \(-3\). So
  \[
  \begin{aligned}
  \lvert CA\rvert&=\sqrt{(-4)^2+2^2+(-3)^2},\\
  &=\sqrt{29}.
  \end{aligned}
  \]
  The side lengths are \(3\), \(\sqrt{26}\) and \(\sqrt{29}\).
provenance: handout-answer
steps:
  - Distance \(\lvert AB\rvert = 3\).
  - Distance \(\lvert BC\rvert = \sqrt{26}\).
  - Distance \(\lvert CA\rvert = \sqrt{29}\).
verification:
  checks:
    - expr: 'sqrt((1 - 2)**2 + (0 - 2)**2 + (1 - (-1))**2)'
      expected: "3"
    - expr: 'sqrt((2 - (-3))**2 + (2 - 2)**2 + (-1 - (-2))**2)'
      expected: "sqrt(26)"
    - expr: 'sqrt((-3 - 1)**2 + (2 - 0)**2 + (-2 - 1)**2)'
      expected: "sqrt(29)"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-1-7
number: "12.1.7"
tier: standard
topics:
  - distance
statement: |
  Find the lengths of the sides of the triangle with vertices \((2,2,3)\), \((8,6,5)\) and \((-1,0,2)\). Why do the results tell you that this is not really a triangle?
solution: |
  Name the vertices \(A=(2,2,3)\), \(B=(8,6,5)\) and \(C=(-1,0,2)\).

  The side \(AB\) has differences \(6\), \(4\) and \(2\). So
  \[
  \begin{aligned}
  \lvert AB\rvert&=\sqrt{6^2+4^2+2^2},\\
  &=\sqrt{56}=2\sqrt{14}.
  \end{aligned}
  \]
  The side \(BC\) has differences \(9\), \(6\) and \(3\). So
  \[
  \begin{aligned}
  \lvert BC\rvert&=\sqrt{9^2+6^2+3^2},\\
  &=\sqrt{126}=3\sqrt{14}.
  \end{aligned}
  \]
  The side \(CA\) has differences \(3\), \(2\) and \(1\). So
  \[
  \begin{aligned}
  \lvert CA\rvert&=\sqrt{3^2+2^2+1^2},\\
  &=\sqrt{14}.
  \end{aligned}
  \]
  The side lengths are \(\sqrt{14}\), \(2\sqrt{14}\) and \(3\sqrt{14}\).

  These lengths satisfy
  \[
  \sqrt{14}+2\sqrt{14}=3\sqrt{14},
  \]
  so the two shorter sides add up to the longest side. In a genuine triangle the two shorter sides together are strictly longer than the third side. Here the path from \(C\) to \(A\) to \(B\) has the same length as the direct segment from \(C\) to \(B\), so \(A\) lies on that segment. The three points are collinear. The displacement from \(C\) to \(A\) is \(\langle 3,2,1\rangle\), and the displacement from \(A\) to \(B\) is \(\langle 6,4,2\rangle=2\langle 3,2,1\rangle\), which confirms that the points lie on one line.
provenance: handout-answer
steps:
  - Distances \(\lvert AB\rvert = 2\sqrt{14}\), \(\lvert BC\rvert = 3\sqrt{14}\) and \(\lvert CA\rvert = \sqrt{14}\).
  - The two shorter sides add up to the longest side.
  - The points are collinear, because \(\langle 6,4,2\rangle = 2\langle 3,2,1\rangle\).
verification:
  checks:
    - expr: 'sqrt((8 - 2)**2 + (6 - 2)**2 + (5 - 3)**2)'
      expected: "2*sqrt(14)"
    - expr: 'sqrt((-1 - 8)**2 + (0 - 6)**2 + (2 - 5)**2)'
      expected: "3*sqrt(14)"
    - expr: 'sqrt((2 - (-1))**2 + (2 - 0)**2 + (3 - 2)**2)'
      expected: "sqrt(14)"
    - expr: 'sqrt(14) + 2*sqrt(14) - 3*sqrt(14)'
      expected: "0"
    - expr: '(8 - 2, 6 - 2, 5 - 3)'
      expected: "(2*3, 2*2, 2*1)"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-1-8
number: "12.1.8"
tier: basic
topics:
  - sphere
statement: |
  Find an equation of the sphere with center \((1,1,1)\) and radius \(2\).
solution: |
  The sphere of radius \(r\) centred at \((h,k,l)\) has equation \(r^2=(x-h)^2+(y-k)^2+(z-l)^2\). Here \((h,k,l)=(1,1,1)\) and \(r=2\), so \(r^2=4\). The equation is
  \[
  (x-1)^2+(y-1)^2+(z-1)^2=4.
  \]
provenance: handout-answer
steps:
  - Centre \((1,1,1)\) gives the shifts \(x-1\), \(y-1\) and \(z-1\).
  - The constant is \(r^2=4\).
verification:
  checks:
    - expr: '((x - 1)**2 + (y - 1)**2 + (z - 1)**2).subs({x: 3, y: 1, z: 1})'
      expected: "4"
    - expr: '((x - 1)**2 + (y - 1)**2 + (z - 1)**2).subs({x: 1, y: 1, z: -1})'
      expected: "4"
    - expr: '2**2'
      expected: "4"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-1-9
number: "12.1.9"
tier: basic
topics:
  - sphere
statement: |
  Find an equation of the sphere with center \((2,-1,3)\) and radius \(5\).
solution: |
  The centre \((2,-1,3)\) gives the shifts \(x-2\), \(y-(-1)=y+1\) and \(z-3\). The radius is \(5\), so the constant is \(5^2=25\). The equation is
  \[
  (x-2)^2+(y+1)^2+(z-3)^2=25.
  \]
provenance: handout-answer
steps:
  - Centre \((2,-1,3)\) gives the shifts \(x-2\), \(y+1\) and \(z-3\).
  - The constant is \(r^2=25\).
verification:
  checks:
    - expr: '((x - 2)**2 + (y + 1)**2 + (z - 3)**2).subs({x: 7, y: -1, z: 3})'
      expected: "25"
    - expr: '((x - 2)**2 + (y + 1)**2 + (z - 3)**2).subs({x: 5, y: 3, z: 3})'
      expected: "25"
    - expr: '5**2'
      expected: "25"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-1-10
number: "12.1.10"
tier: standard
topics:
  - sphere
  - distance
statement: |
  Find an equation of the sphere with center \((3,-2,1)\) that goes through the point \((4,2,5)\).
solution: |
  The radius is the distance from the centre \((3,-2,1)\) to the point \((4,2,5)\) on the sphere. The coordinate differences are \(4-3\), \(2-(-2)\) and \(5-1\), which equal \(1\), \(4\) and \(4\). The squared radius is
  \[
  \begin{aligned}
  r^2&=1^2+4^2+4^2,\\
  &=33.
  \end{aligned}
  \]
  The equation is
  \[
  (x-3)^2+(y+2)^2+(z-1)^2=33.
  \]
  The point \((4,2,5)\) satisfies it, because \(1+16+16=33\).
provenance: handout-answer
steps:
  - The squared radius is the squared distance from the centre to the point, \(r^2=33\).
  - The equation is \((x-3)^2+(y+2)^2+(z-1)^2=33\).
verification:
  checks:
    - expr: '(4 - 3)**2 + (2 - (-2))**2 + (5 - 1)**2'
      expected: "33"
    - expr: '((x - 3)**2 + (y + 2)**2 + (z - 1)**2).subs({x: 4, y: 2, z: 5})'
      expected: "33"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-1-11
number: "12.1.11"
tier: standard
topics:
  - sphere
statement: |
  Find an equation of the sphere with center \((2,1,-1)\) and radius \(4\). Find an equation for the intersection of this sphere with the \(yz\)-plane and describe this intersection geometrically.
solution: |
  The centre \((2,1,-1)\) gives the shifts \(x-2\), \(y-1\) and \(z+1\). The radius is \(4\), so the constant is \(16\). The sphere is
  \[
  (x-2)^2+(y-1)^2+(z+1)^2=16.
  \]
  The \(yz\)-plane is the plane \(x=0\). Substituting \(x=0\) gives \((0-2)^2=4\), so
  \[
  \begin{aligned}
  4+(y-1)^2+(z+1)^2&=16,\\
  (y-1)^2+(z+1)^2&=12.
  \end{aligned}
  \]
  In the \(yz\)-plane this is the circle with centre \((y,z)=(1,-1)\) and radius \(\sqrt{12}=2\sqrt{3}\). In space, the circle has centre \((0,1,-1)\).
provenance: handout-answer
steps:
  - Sphere \((x-2)^2+(y-1)^2+(z+1)^2=16\).
  - Setting \(x=0\) gives \((y-1)^2+(z+1)^2=12\).
  - The intersection is a circle of radius \(2\sqrt{3}\) centred at \((0,1,-1)\).
verification:
  checks:
    - expr: '((x - 2)**2 + (y - 1)**2 + (z + 1)**2 - 16).subs(x, 0)'
      expected: "(y - 1)**2 + (z + 1)**2 - 12"
    - expr: 'sqrt(12)'
      expected: "2*sqrt(3)"
    - expr: '((x - 2)**2 + (y - 1)**2 + (z + 1)**2).subs({x: 0, y: 1 + 2*sqrt(3), z: -1})'
      expected: "16"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-1-12
number: "12.1.12"
tier: standard
topics:
  - sphere
statement: |
  Consider the sphere of radius \(5\) centered at \((2,3,4)\). What is the intersection of this sphere with each of the coordinate planes?
solution: |
  The sphere is
  \[
  (x-2)^2+(y-3)^2+(z-4)^2=25.
  \]
  Each coordinate plane sets one variable equal to \(0\).

  - In the \(xy\)-plane, \(z=0\). Then \((z-4)^2=16\), so \((x-2)^2+(y-3)^2=9\). This is a circle of radius \(3\) centred at \((2,3,0)\).
  - In the \(xz\)-plane, \(y=0\). Then \((y-3)^2=9\), so \((x-2)^2+(z-4)^2=16\). This is a circle of radius \(4\) centred at \((2,0,4)\).
  - In the \(yz\)-plane, \(x=0\). Then \((x-2)^2=4\), so \((y-3)^2+(z-4)^2=21\). This is a circle of radius \(\sqrt{21}\) centred at \((0,3,4)\).

  Each plane meets the sphere in a circle, because the distances \(4\), \(3\) and \(2\) from the centre to the three planes are all smaller than the radius \(5\).
provenance: written-for-site
steps:
  - Sphere \((x-2)^2+(y-3)^2+(z-4)^2=25\).
  - Plane \(z=0\) gives a circle of radius \(3\) centred at \((2,3,0)\).
  - Plane \(y=0\) gives a circle of radius \(4\) centred at \((2,0,4)\).
  - Plane \(x=0\) gives a circle of radius \(\sqrt{21}\) centred at \((0,3,4)\).
verification:
  checks:
    - expr: '((x - 2)**2 + (y - 3)**2 + (z - 4)**2 - 25).subs(z, 0)'
      expected: "(x - 2)**2 + (y - 3)**2 - 9"
    - expr: '((x - 2)**2 + (y - 3)**2 + (z - 4)**2 - 25).subs(y, 0)'
      expected: "(x - 2)**2 + (z - 4)**2 - 16"
    - expr: '((x - 2)**2 + (y - 3)**2 + (z - 4)**2 - 25).subs(x, 0)'
      expected: "(y - 3)**2 + (z - 4)**2 - 21"
    - expr: '(sqrt(9), sqrt(16), sqrt(21))'
      expected: "(3, 4, sqrt(21))"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-1-16
number: "12.1.16"
tier: standard
topics:
  - sphere
statement: |
  Is it possible for a plane to intersect a sphere in exactly two points? In exactly one point? Explain.
solution: |
  Let the sphere have centre \(C\) and radius \(r\). Let the plane lie at distance \(d\) from \(C\), and let \(F\) be the point of the plane closest to \(C\). The segment \(CF\) has length \(d\) and is perpendicular to the plane.

  For a point \(P\) of the plane, the segments \(CF\), \(FP\) and \(CP\) form a right triangle with the right angle at \(F\). Pythagoras gives
  \[
  \lvert CP\rvert^2=d^2+\lvert FP\rvert^2.
  \]
  The point \(P\) lies on the sphere exactly when \(\lvert CP\rvert=r\), that is, when
  \[
  \lvert FP\rvert^2=r^2-d^2.
  \]
  There are three cases.

  - If \(d>r\), the right side is negative. No point of the plane lies on the sphere.
  - If \(d=r\), the right side is \(0\), so \(P=F\). The plane meets the sphere in exactly one point, and the plane is tangent to the sphere.
  - If \(d<r\), the points \(P\) with \(\lvert FP\rvert=\sqrt{r^2-d^2}>0\) form a circle around \(F\). The plane meets the sphere in infinitely many points.

  A plane never meets a sphere in exactly two points, because the intersection is empty, one point or a whole circle. Exactly one point is possible, and it occurs when the plane is tangent to the sphere.
provenance: written-for-site
steps:
  - Pythagoras gives \(\lvert CP\rvert^2 = d^2 + \lvert FP\rvert^2\).
  - The intersection is empty for \(d>r\), one point for \(d=r\) and a circle for \(d<r\).
  - Two points are impossible, and one point occurs for a tangent plane.
verification:
  checks:
    - expr: '(r**2 - d**2).subs(d, r)'
      expected: "0"
    - expr: '25 - 5**2'
      expected: "0"
    - expr: '25 - 3**2'
      expected: "16"
    - expr: '25 - 6**2'
      expected: "-11"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-2-6
number: "12.2.6"
tier: basic
topics:
  - vectors
statement: |
  Find \(\lvert\mathbf{v}\rvert\), \(\mathbf{v}+\mathbf{w}\), \(\mathbf{v}-\mathbf{w}\), \(\lvert\mathbf{v}+\mathbf{w}\rvert\), \(\lvert\mathbf{v}-\mathbf{w}\rvert\) and \(-2\mathbf{v}\) for \(\mathbf{v}=\langle 1,3\rangle\) and \(\mathbf{w}=\langle -1,-5\rangle\).
solution: |
  The magnitude of \(\mathbf{v}\) is
  \[
  \lvert\mathbf{v}\rvert=\sqrt{1^2+3^2}=\sqrt{10}.
  \]
  Addition and subtraction act on matching components:
  \[
  \begin{aligned}
  \mathbf{v}+\mathbf{w}&=\langle 1+(-1),\,3+(-5)\rangle=\langle 0,-2\rangle,\\
  \mathbf{v}-\mathbf{w}&=\langle 1-(-1),\,3-(-5)\rangle=\langle 2,8\rangle.
  \end{aligned}
  \]
  Their magnitudes are
  \[
  \begin{aligned}
  \lvert\mathbf{v}+\mathbf{w}\rvert&=\sqrt{0^2+(-2)^2}=2,\\
  \lvert\mathbf{v}-\mathbf{w}\rvert&=\sqrt{2^2+8^2}=\sqrt{68}=2\sqrt{17}.
  \end{aligned}
  \]
  A scalar multiplies every component, so
  \[
  -2\mathbf{v}=\langle -2,-6\rangle.
  \]
provenance: handout-answer
steps:
  - Magnitude \(\lvert\mathbf{v}\rvert = \sqrt{10}\).
  - Sum \(\langle 0,-2\rangle\) and difference \(\langle 2,8\rangle\).
  - Magnitudes \(2\) and \(2\sqrt{17}\).
  - Multiple \(-2\mathbf{v} = \langle -2,-6\rangle\).
verification:
  checks:
    - expr: 'sqrt(1**2 + 3**2)'
      expected: "sqrt(10)"
    - expr: '(1 + (-1), 3 + (-5))'
      expected: "(0, -2)"
    - expr: '(1 - (-1), 3 - (-5))'
      expected: "(2, 8)"
    - expr: 'sqrt(0**2 + (-2)**2)'
      expected: "2"
    - expr: 'sqrt(2**2 + 8**2)'
      expected: "2*sqrt(17)"
    - expr: '(-2*1, -2*3)'
      expected: "(-2, -6)"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-2-7
number: "12.2.7"
tier: basic
topics:
  - vectors
statement: |
  Find \(\lvert\mathbf{v}\rvert\), \(\mathbf{v}+\mathbf{w}\), \(\mathbf{v}-\mathbf{w}\), \(\lvert\mathbf{v}+\mathbf{w}\rvert\), \(\lvert\mathbf{v}-\mathbf{w}\rvert\) and \(-2\mathbf{v}\) for \(\mathbf{v}=\langle 1,2,3\rangle\) and \(\mathbf{w}=\langle -1,2,-3\rangle\).
solution: |
  The magnitude of \(\mathbf{v}\) is
  \[
  \lvert\mathbf{v}\rvert=\sqrt{1^2+2^2+3^2}=\sqrt{14}.
  \]
  Addition and subtraction act on matching components:
  \[
  \begin{aligned}
  \mathbf{v}+\mathbf{w}&=\langle 1+(-1),\,2+2,\,3+(-3)\rangle,\\
  &=\langle 0,4,0\rangle,\\
  \mathbf{v}-\mathbf{w}&=\langle 1-(-1),\,2-2,\,3-(-3)\rangle,\\
  &=\langle 2,0,6\rangle.
  \end{aligned}
  \]
  Their magnitudes are
  \[
  \begin{aligned}
  \lvert\mathbf{v}+\mathbf{w}\rvert&=\sqrt{0^2+4^2+0^2}=4,\\
  \lvert\mathbf{v}-\mathbf{w}\rvert&=\sqrt{2^2+0^2+6^2}=\sqrt{40}=2\sqrt{10}.
  \end{aligned}
  \]
  A scalar multiplies every component, so
  \[
  -2\mathbf{v}=\langle -2,-4,-6\rangle.
  \]
provenance: handout-answer
steps:
  - Magnitude \(\lvert\mathbf{v}\rvert = \sqrt{14}\).
  - Sum \(\langle 0,4,0\rangle\) and difference \(\langle 2,0,6\rangle\).
  - Magnitudes \(4\) and \(2\sqrt{10}\).
  - Multiple \(-2\mathbf{v} = \langle -2,-4,-6\rangle\).
verification:
  checks:
    - expr: 'sqrt(1**2 + 2**2 + 3**2)'
      expected: "sqrt(14)"
    - expr: '(1 + (-1), 2 + 2, 3 + (-3))'
      expected: "(0, 4, 0)"
    - expr: '(1 - (-1), 2 - 2, 3 - (-3))'
      expected: "(2, 0, 6)"
    - expr: 'sqrt(0**2 + 4**2 + 0**2)'
      expected: "4"
    - expr: 'sqrt(2**2 + 0**2 + 6**2)'
      expected: "2*sqrt(10)"
    - expr: '(-2*1, -2*2, -2*3)'
      expected: "(-2, -4, -6)"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-2-8
number: "12.2.8"
tier: standard
topics:
  - vectors
statement: |
  Find \(\lvert\mathbf{v}\rvert\), \(\mathbf{v}+\mathbf{w}\), \(\mathbf{v}-\mathbf{w}\), \(\lvert\mathbf{v}+\mathbf{w}\rvert\), \(\lvert\mathbf{v}-\mathbf{w}\rvert\) and \(-2\mathbf{v}\) for \(\mathbf{v}=\langle 1,0,1\rangle\) and \(\mathbf{w}=\langle -1,-2,2\rangle\).
solution: |
  The magnitude of \(\mathbf{v}\) is
  \[
  \lvert\mathbf{v}\rvert=\sqrt{1^2+0^2+1^2}=\sqrt{2}.
  \]
  Addition and subtraction act on matching components:
  \[
  \begin{aligned}
  \mathbf{v}+\mathbf{w}&=\langle 1+(-1),\,0+(-2),\,1+2\rangle,\\
  &=\langle 0,-2,3\rangle,\\
  \mathbf{v}-\mathbf{w}&=\langle 1-(-1),\,0-(-2),\,1-2\rangle,\\
  &=\langle 2,2,-1\rangle.
  \end{aligned}
  \]
  Their magnitudes are
  \[
  \begin{aligned}
  \lvert\mathbf{v}+\mathbf{w}\rvert&=\sqrt{0^2+(-2)^2+3^2}=\sqrt{13},\\
  \lvert\mathbf{v}-\mathbf{w}\rvert&=\sqrt{2^2+2^2+(-1)^2}=3.
  \end{aligned}
  \]
  A scalar multiplies every component, so
  \[
  -2\mathbf{v}=\langle -2,0,-2\rangle.
  \]
provenance: handout-answer
steps:
  - Magnitude \(\lvert\mathbf{v}\rvert = \sqrt{2}\).
  - Sum \(\langle 0,-2,3\rangle\) and difference \(\langle 2,2,-1\rangle\).
  - Magnitudes \(\sqrt{13}\) and \(3\).
  - Multiple \(-2\mathbf{v} = \langle -2,0,-2\rangle\).
verification:
  checks:
    - expr: 'sqrt(1**2 + 0**2 + 1**2)'
      expected: "sqrt(2)"
    - expr: '(1 + (-1), 0 + (-2), 1 + 2)'
      expected: "(0, -2, 3)"
    - expr: '(1 - (-1), 0 - (-2), 1 - 2)'
      expected: "(2, 2, -1)"
    - expr: 'sqrt(0**2 + (-2)**2 + 3**2)'
      expected: "sqrt(13)"
    - expr: 'sqrt(2**2 + 2**2 + (-1)**2)'
      expected: "3"
    - expr: '(-2*1, -2*0, -2*1)'
      expected: "(-2, 0, -2)"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-2-10
number: "12.2.10"
tier: standard
topics:
  - vectors
statement: |
  Find \(\lvert\mathbf{v}\rvert\), \(\mathbf{v}+\mathbf{w}\), \(\mathbf{v}-\mathbf{w}\), \(\lvert\mathbf{v}+\mathbf{w}\rvert\), \(\lvert\mathbf{v}-\mathbf{w}\rvert\) and \(-2\mathbf{v}\) for \(\mathbf{v}=\langle 3,2,1\rangle\) and \(\mathbf{w}=\langle -1,-1,-1\rangle\).
solution: |
  The magnitude of \(\mathbf{v}\) is
  \[
  \lvert\mathbf{v}\rvert=\sqrt{3^2+2^2+1^2}=\sqrt{14}.
  \]
  Addition and subtraction act on matching components:
  \[
  \begin{aligned}
  \mathbf{v}+\mathbf{w}&=\langle 3+(-1),\,2+(-1),\,1+(-1)\rangle,\\
  &=\langle 2,1,0\rangle,\\
  \mathbf{v}-\mathbf{w}&=\langle 3-(-1),\,2-(-1),\,1-(-1)\rangle,\\
  &=\langle 4,3,2\rangle.
  \end{aligned}
  \]
  Their magnitudes are
  \[
  \begin{aligned}
  \lvert\mathbf{v}+\mathbf{w}\rvert&=\sqrt{2^2+1^2+0^2}=\sqrt{5},\\
  \lvert\mathbf{v}-\mathbf{w}\rvert&=\sqrt{4^2+3^2+2^2}=\sqrt{29}.
  \end{aligned}
  \]
  A scalar multiplies every component, so
  \[
  -2\mathbf{v}=\langle -6,-4,-2\rangle.
  \]
provenance: handout-answer
steps:
  - Magnitude \(\lvert\mathbf{v}\rvert = \sqrt{14}\).
  - Sum \(\langle 2,1,0\rangle\) and difference \(\langle 4,3,2\rangle\).
  - Magnitudes \(\sqrt{5}\) and \(\sqrt{29}\).
  - Multiple \(-2\mathbf{v} = \langle -6,-4,-2\rangle\).
verification:
  checks:
    - expr: 'sqrt(3**2 + 2**2 + 1**2)'
      expected: "sqrt(14)"
    - expr: '(3 + (-1), 2 + (-1), 1 + (-1))'
      expected: "(2, 1, 0)"
    - expr: '(3 - (-1), 2 - (-1), 1 - (-1))'
      expected: "(4, 3, 2)"
    - expr: 'sqrt(2**2 + 1**2 + 0**2)'
      expected: "sqrt(5)"
    - expr: 'sqrt(4**2 + 3**2 + 2**2)'
      expected: "sqrt(29)"
    - expr: '(-2*3, -2*2, -2*1)'
      expected: "(-6, -4, -2)"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-2-11
number: "12.2.11"
tier: standard
topics:
  - vectors
  - displacement
statement: |
  Let \(P=(4,5,6)\) and \(Q=(1,2,-5)\). Find the vector \(\overrightarrow{PQ}\). Find a vector with the same direction as \(\overrightarrow{PQ}\) but length \(1\). Find a vector with the same direction as \(\overrightarrow{PQ}\) but length \(4\).
solution: |
  Each component of \(\overrightarrow{PQ}\) is a coordinate of \(Q\) minus the matching coordinate of \(P\):
  \[
  \begin{aligned}
  \overrightarrow{PQ}&=\langle 1-4,\,2-5,\,-5-6\rangle,\\
  &=\langle -3,-3,-11\rangle.
  \end{aligned}
  \]
  Its length is
  \[
  \begin{aligned}
  \lvert\overrightarrow{PQ}\rvert&=\sqrt{(-3)^2+(-3)^2+(-11)^2},\\
  &=\sqrt{139}.
  \end{aligned}
  \]
  A positive scalar keeps the direction, and it multiplies the length. Multiplying by \(1/\sqrt{139}\) gives length \(1\):
  \[
  \frac{1}{\sqrt{139}}\langle -3,-3,-11\rangle=\left\langle -\frac{3}{\sqrt{139}},\,-\frac{3}{\sqrt{139}},\,-\frac{11}{\sqrt{139}}\right\rangle.
  \]
  Multiplying by \(4/\sqrt{139}\) gives length \(4\):
  \[
  \frac{4}{\sqrt{139}}\langle -3,-3,-11\rangle=\frac{1}{\sqrt{139}}\langle -12,-12,-44\rangle.
  \]
provenance: handout-answer
steps:
  - Displacement \(\overrightarrow{PQ} = \langle -3,-3,-11\rangle\).
  - Length \(\sqrt{139}\).
  - Unit vector \(\langle -3,-3,-11\rangle/\sqrt{139}\).
  - Length-\(4\) vector \(\langle -12,-12,-44\rangle/\sqrt{139}\).
verification:
  checks:
    - expr: '(1 - 4, 2 - 5, -5 - 6)'
      expected: "(-3, -3, -11)"
    - expr: 'sqrt((-3)**2 + (-3)**2 + (-11)**2)'
      expected: "sqrt(139)"
    - expr: 'sqrt((-3/sqrt(139))**2 + (-3/sqrt(139))**2 + (-11/sqrt(139))**2)'
      expected: "1"
    - expr: 'sqrt((-12/sqrt(139))**2 + (-12/sqrt(139))**2 + (-44/sqrt(139))**2)'
      expected: "4"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-2-12
number: "12.2.12"
tier: basic
topics:
  - vectors
  - displacement
statement: |
  If \(A\), \(B\) and \(C\) are three points, find \(\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CA}\) (as vectors).
solution: |
  Write the points as \(A=(a_1,a_2,a_3)\), \(B=(b_1,b_2,b_3)\) and \(C=(c_1,c_2,c_3)\). Each displacement has components equal to end minus start:
  \[
  \begin{aligned}
  \overrightarrow{AB}&=\langle b_1-a_1,\,b_2-a_2,\,b_3-a_3\rangle,\\
  \overrightarrow{BC}&=\langle c_1-b_1,\,c_2-b_2,\,c_3-b_3\rangle,\\
  \overrightarrow{CA}&=\langle a_1-c_1,\,a_2-c_2,\,a_3-c_3\rangle.
  \end{aligned}
  \]
  Add the first components. The sum \((b_1-a_1)+(c_1-b_1)+(a_1-c_1)\) equals \(0\), because each coordinate appears once with a plus sign and once with a minus sign. The second and third components cancel in the same way. So
  \[
  \overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CA}=\langle 0,0,0\rangle.
  \]
  Geometrically, the three arrows placed head to tail go around the triangle and return to the starting point, so the total displacement is the zero vector.
provenance: handout-answer
steps:
  - Write each displacement as end minus start.
  - In each component, every coordinate appears once with each sign.
  - The sum is the zero vector \(\langle 0,0,0\rangle\).
verification:
  checks:
    - expr: '((b1 - a1) + (c1 - b1) + (a1 - c1), (b2 - a2) + (c2 - b2) + (a2 - c2), (b3 - a3) + (c3 - b3) + (a3 - c3))'
      expected: "(0, 0, 0)"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-2-13
number: "12.2.13"
tier: standard
topics:
  - vectors
statement: |
  Consider the 12 vectors that have their tails at the center of a clock and their heads at each of the 12 digits. What is the sum of these vectors? What if we remove the vector corresponding to 4 o'clock? What if, instead, all vectors have their tails at 12 o'clock and their heads on the remaining 11 digits? (Let \(r\) be the radius of the clock, with the \(x\)-axis pointing to 3 o'clock and the \(y\)-axis pointing to 12 o'clock.)
solution: |
  Put the centre of the clock at the origin. The digit \(h\) sits at angle \(\frac{\pi}{2}-\frac{h\pi}{6}\) from the positive \(x\)-axis, so the vector to digit \(h\) is
  \[
  \mathbf{v}_h=r\left\langle\cos\left(\tfrac{\pi}{2}-\tfrac{h\pi}{6}\right),\ \sin\left(\tfrac{\pi}{2}-\tfrac{h\pi}{6}\right)\right\rangle.
  \]
  For example \(\mathbf{v}_{12}=\langle 0,r\rangle\) and \(\mathbf{v}_3=\langle r,0\rangle\).

  ### All 12 vectors

  Digits \(h\) and \(h+6\) sit on opposite ends of a diameter, so \(\mathbf{v}_{h+6}=-\mathbf{v}_h\). The twelve vectors split into six opposite pairs, and each pair adds to \(\langle 0,0\rangle\). The sum is
  \[
  \mathbf{v}_1+\dots+\mathbf{v}_{12}=\langle 0,0\rangle.
  \]

  ### Without 4 o'clock

  The sum of the other eleven vectors is the full sum minus \(\mathbf{v}_4\), so it equals \(-\mathbf{v}_4\). The angle of digit \(4\) is \(\frac{\pi}{2}-\frac{2\pi}{3}=-\frac{\pi}{6}\), so
  \[
  \mathbf{v}_4=r\left\langle\tfrac{\sqrt{3}}{2},\,-\tfrac12\right\rangle.
  \]
  The sum without the 4 o'clock vector is
  \[
  -\mathbf{v}_4=\left\langle -\frac{r\sqrt{3}}{2},\,\frac{r}{2}\right\rangle.
  \]

  ### Tails at 12 o'clock

  The tail is now at \(T=(0,r)\). The vector from \(T\) to digit \(h\) is \(\mathbf{v}_h-\langle 0,r\rangle\). The digit \(12\) gives the zero vector, so the sum over the other eleven digits is the sum over all twelve:
  \[
  \begin{aligned}
  \sum_{h=1}^{12}\bigl(\mathbf{v}_h-\langle 0,r\rangle\bigr)&=\langle 0,0\rangle-12\langle 0,r\rangle,\\
  &=\langle 0,-12r\rangle.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Opposite digits give opposite vectors, so the sum of all twelve is \(\langle 0,0\rangle\).
  - Removing 4 o'clock leaves \(-\mathbf{v}_4=\langle -r\sqrt{3}/2,\,r/2\rangle\).
  - With tails at 12 o'clock, the sum is \(-12\langle 0,r\rangle=\langle 0,-12r\rangle\).
verification:
  checks:
    - expr: '(Sum(cos(pi/2 - h*pi/6), (h, 1, 12)).doit(), Sum(sin(pi/2 - h*pi/6), (h, 1, 12)).doit())'
      expected: "(0, 0)"
    - expr: '(-r*cos(pi/2 - 4*pi/6), -r*sin(pi/2 - 4*pi/6))'
      expected: "(-sqrt(3)*r/2, r/2)"
    - expr: '(r*Sum(cos(pi/2 - h*pi/6), (h, 1, 11)).doit(), r*Sum(sin(pi/2 - h*pi/6), (h, 1, 11)).doit() - 11*r)'
      expected: "(0, -12*r)"
:::


::: exercise
id: l4-coordinates-vectors.handout-12-2-15
number: "12.2.15"
tier: standard
topics:
  - vectors
statement: |
  In the plane, every vector \(\mathbf{c}\) can be written as \(s\mathbf{a}+t\mathbf{b}\) for two non-parallel vectors \(\mathbf{a}\) and \(\mathbf{b}\), with real numbers \(s\) and \(t\). Does this statement still hold if \(\mathbf{a}\), \(\mathbf{b}\) and \(\mathbf{c}\) are three-dimensional vectors? Explain.
solution: |
  The statement does not hold in three dimensions.

  Take the non-parallel vectors \(\mathbf{a}=\langle 1,0,0\rangle\) and \(\mathbf{b}=\langle 0,1,0\rangle\), and the vector \(\mathbf{c}=\langle 0,0,1\rangle\). For any real \(s\) and \(t\),
  \[
  \begin{aligned}
  s\mathbf{a}+t\mathbf{b}&=\langle s,\,0,\,0\rangle+\langle 0,\,t,\,0\rangle,\\
  &=\langle s,\,t,\,0\rangle.
  \end{aligned}
  \]
  The third component is always \(0\), so \(s\mathbf{a}+t\mathbf{b}\) never equals \(\langle 0,0,1\rangle\).

  The same happens for every pair of non-parallel vectors. The vectors \(s\mathbf{a}+t\mathbf{b}\) have the two free parameters \(s\) and \(t\), and with the tail at the origin their heads fill only a plane through the origin. Three-dimensional space is larger than a plane, so a vector \(\mathbf{c}\) outside that plane cannot be written as \(s\mathbf{a}+t\mathbf{b}\). In three dimensions, three vectors that do not lie in one plane are needed.
provenance: written-for-site
steps:
  - Choose \(\mathbf{a}=\langle 1,0,0\rangle\), \(\mathbf{b}=\langle 0,1,0\rangle\) and \(\mathbf{c}=\langle 0,0,1\rangle\).
  - Every combination \(s\mathbf{a}+t\mathbf{b}\) has third component \(0\).
  - Combinations of two vectors fill only a plane through the origin, so the statement fails.
verification:
  checks:
    - expr: '(s*1 + t*0, s*0 + t*1, s*0 + t*0)'
      expected: "(s, t, 0)"
    - expr: '(s*1 + t*0, s*0 + t*1, s*0 + t*0)[2] - 1'
      expected: "-1"
:::
