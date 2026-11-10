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
