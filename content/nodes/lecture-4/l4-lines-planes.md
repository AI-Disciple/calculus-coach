---
id: l4-lines-planes
lecture: 4
order: 3
title: Lines and planes in space
prerequisites: [l4-dot-cross-product]
sources:
  - { source: handout, section: "12.5", page: 317 }
examWeight: low
examWeightNote: Supporting geometry. Tangent planes reuse the plane equation. Lecture 4 did not cover this paragraph, so it is background reading.
notation: |
  A point is \((x, y, z)\). Its position vector is \(\langle x, y, z \rangle\). The vector from a point \(Q\) to a point \(P\) is \(\overrightarrow{QP}\). A normal to a plane is \(\mathbf{n}\). A direction vector of a line is \(\mathbf{A}\). The parameter on a line is the real number \(t\).
optional: true
taught: handout
status: reviewed
---

::: section
title: Planes and normal vectors
:::

::: formal-statement
kind: definition
title: A linear equation in three variables
source: { source: handout, section: "12.5", page: 317 }
text: |
  The equation \(ax + by + cz = d\) describes a plane in space. Adding a \(z\) term to a line equation \(ax + by = c\) from the coordinate plane does not produce a line in space.
:::

::: plain-explanation
text: |
  In the coordinate plane, \(2x + y = 4\) describes a line. The equation \(2x + y + z = 4\) adds a \(z\) term.

  Check the left side at each of three points:

  - At \((2, 0, 0)\) it is \(2 \cdot 2 + 0 + 0 = 4\).
  - At \((0, 4, 0)\) it is \(0 + 4 + 0 = 4\).
  - At \((0, 0, 4)\) it is \(0 + 0 + 4 = 4\).

  All three points satisfy the equation.

  ### Do the three points lie on a line?

  The displacements from \((0, 0, 4)\) are
  \[
  \begin{aligned}
  \text{to } (2, 0, 0)&=\langle 2, 0, -4 \rangle,\\
  \text{to } (0, 4, 0)&=\langle 0, 4, -4 \rangle.
  \end{aligned}
  \]
  The only scalar that turns the first component \(2\) into \(0\) is \(0\). That scalar sends the second component to \(0\). The second displacement has second component \(4\). The two displacements are not parallel. The three points do not lie on one line.

  ### What the equation describes

  The equation \(2x + y + z = 4\) describes a plane. A line in space is fixed by a point and a direction.
:::

::: formal-statement
kind: definition
title: Normal vector
source: { source: handout, section: "12.5", page: 317 }
text: |
  A **normal** to a plane is a nonzero vector perpendicular to the plane. Any two normals to the same plane are parallel or anti-parallel.
:::

::: plain-explanation
text: |
  A plane contains many directions. A normal stands perpendicular to all of them. If \(\mathbf{n}\) is a normal, then so are these two vectors:

  - \(2\mathbf{n}\), which is parallel to \(\mathbf{n}\),
  - \(-\mathbf{n}\), which is anti-parallel to \(\mathbf{n}\).

  The coefficients in \(2x - 3y + z = 15\) are \(2\), \(-3\) and \(1\), so \(\langle 2, -3, 1 \rangle\) is a normal. The vector \(\langle -4, 6, -2 \rangle\) is a normal to the same plane, because
  \[
  \langle -4, 6, -2 \rangle = -2\langle 2, -3, 1 \rangle.
  \] Every normal to this plane is a scalar multiple of \(\langle 2, -3, 1 \rangle\).

  A zero coefficient is allowed. The equation \(y + 2z = 4\) has normal \(\langle 0, 1, 2 \rangle\). The point \((0, 4, 0)\) lies on that plane, because the left side equals \(4\).
:::

::: formal-statement
kind: method
title: Plane through a point
source: { source: handout, section: "12.5", page: 317 }
text: |
  Suppose \(\langle a, b, c \rangle\) is normal to a plane through \((v_1, v_2, v_3)\). A point \((x, y, z)\) lies in the plane exactly when
  \[
  a(x - v_1) + b(y - v_2) + c(z - v_3) = 0.
  \]
  Expanding and collecting the constant terms gives
  \[
  ax + by + cz = a v_1 + b v_2 + c v_3.
  \]
:::

::: plain-explanation
text: |
  The point \((x, y, z)\) lies in the plane when the vector from the known point to \((x, y, z)\) is perpendicular to the normal. Their dot product is then zero. That single condition is the equation of the plane.

  The right-hand side \(a v_1 + b v_2 + c v_3\) is the left-hand side evaluated at the known point.
:::

::: tip
text: |
  To find a point on a plane \(ax + by + cz = d\), set two variables to \(0\) and solve for the third, provided that third coefficient is nonzero.
:::

::: worked-example
title: Plane from a point and a normal
problem: |
  Find the equation of the plane through \((5, 0, 7)\) with normal \(\langle 1, 2, 3 \rangle\).
solution: |
  The vector from \((5, 0, 7)\) to \((x, y, z)\) is \(\langle x - 5, y, z - 7 \rangle\). Its dot product with the normal is zero when
  \[
  (x - 5) + 2y + 3(z - 7) = 0.
  \]
  The constant on the right, after expanding, is the normal evaluated at the known point. That value is \(1 \cdot 5 + 2 \cdot 0 + 3 \cdot 7 = 26\).

  The plane is
  \[
  x + 2y + 3z = 26.
  \]
  The known point satisfies the equation, since \(5 + 0 + 21 = 26\).
:::

::: key-points
text: |
  - The equation \(ax + by + cz = d\) describes a plane in space, and \(\langle a, b, c \rangle\) is a normal to it when that vector is nonzero. Any two normals to the same plane are parallel or anti-parallel.
  - The plane through \((v_1, v_2, v_3)\) with normal \(\langle a, b, c \rangle\) is \(a(x - v_1) + b(y - v_2) + c(z - v_3) = 0\). Expanding gives \(ax + by + cz = a v_1 + b v_2 + c v_3\).
  - The usual slip reads \(2x + y + z = 4\) as a line, because \(2x + y = 4\) is a line in the coordinate plane. The equation \(2x + y + z = 4\) describes a plane, and a line in space is fixed by a point and a direction.
:::

::: concept-question
id: l4-lines-planes.q-0542c8a4
question: |
  What does the equation \(2x - 3y + z = 15\) describe in space?
options:
  - text: |
      A plane with normal \(\langle 2, -3, 1 \rangle\).
    correct: true
  - text: |
      A line with direction \(\langle 2, -3, 1 \rangle\).
  - text: |
      The single point \((2, -3, 1)\).
  - text: |
      A plane with normal \(\langle 15, 15, 15 \rangle\).
explanation: |
  The equation \(2x - 3y + z = 15\) describes a plane. A normal is the coefficient vector \(\langle 2, -3, 1 \rangle\).
:::

::: exercise
id: l4-lines-planes.ex-plane-basic
tier: basic
topics: [planes]
statement: |
  The plane through \((2, -1, 4)\) has normal \(\langle 3, 1, -2 \rangle\). Find the number \(d\) for which the plane has equation \(3x + y - 2z = d\).
solution: |
  The right-hand side is the normal evaluated at the known point. That value is \(3 \cdot 2 + 1 \cdot (-1) + (-2) \cdot 4 = 6 - 1 - 8 = -3\).

  Expanding \(3(x - 2) + (y + 1) - 2(z - 4) = 0\) gives \(3x + y - 2z + 3 = 0\). So \(d\) equals \(-3\), and the plane is
  \[
  3x + y - 2z = -3.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: "3*2 + 1*(-1) + (-2)*4"
      expected: "-3"
    - expr: "3*2 + 1*(-1) + (-2)*4 + 3"
      expected: "0"
:::

::: section
title: Lines in space
:::

::: formal-statement
kind: method
title: Parametric equations of a line
source: { source: handout, section: "12.5", page: "319-320" }
text: |
  The line through \((v_1, v_2, v_3)\) parallel to \(\langle a, b, c \rangle\) consists of the points
  \[
  \langle v_1, v_2, v_3 \rangle + t \langle a, b, c \rangle
  \]
  as \(t\) runs through the real numbers. The **parametric equations** are
  \[
  \begin{aligned}
  x&=v_1+t a,\\
  y&=v_2+t b,\\
  z&=v_3+t c.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  Each real number \(t\) marks one point of the line. The three scalar equations are that same vector equation, one coordinate at a time.

  In the \(xy\)-plane the same description is \(\langle v_1, v_2 \rangle + t\langle a, b \rangle\), which in space is \(\langle v_1, v_2, 0 \rangle + t\langle a, b, 0 \rangle\).
:::

::: tip
text: |
  Two points determine a direction. Subtract their position vectors. Either point may be the base point of the vector equation.
:::

::: worked-example
title: Line through two points
problem: |
  Write a vector equation and parametric equations for the line through \((6, 1, -3)\) and \((2, 4, 5)\).
solution: |
  A direction is the difference of the position vectors, \(\langle 6, 1, -3 \rangle - \langle 2, 4, 5 \rangle\). That difference is \(\langle 4, -3, -8 \rangle\).

  With base point \((2, 4, 5)\), the line is \(\langle 2, 4, 5 \rangle + t\langle 4, -3, -8 \rangle\). The parametric equations are
  \[
  \begin{aligned}
  x&=2+4t,\\
  y&=4-3t,\\
  z&=5-8t.
  \end{aligned}
  \]
  At \(t = 1\) these equations give \((6, 1, -3)\), the other given point.

  The vector equation \(\langle 6, 1, -3 \rangle + t\langle 4, -3, -8 \rangle\) describes the same line. At \(t = -1\) it gives \((2, 4, 5)\).
:::

::: trap
text: |
  The equation \(x + 2y + 3z = 26\) is the plane through \((5, 0, 7)\) with normal \(\langle 1, 2, 3 \rangle\). The line through that point parallel to \(\langle 1, 2, 3 \rangle\) is
  \[
  \langle 5, 0, 7 \rangle + t\langle 1, 2, 3 \rangle.
  \]

  At \(t = 1\) the line reaches \((6, 2, 10)\). The left side of the plane equation at that point is \(6 + 2 \cdot 2 + 3 \cdot 10 = 40\). The value \(40\) differs from \(26\), so \((6, 2, 10)\) lies off the plane. The parametric line and the linear equation describe different sets.
:::

::: key-points
text: |
  - The line through \((v_1, v_2, v_3)\) parallel to \(\langle a, b, c \rangle\) consists of the points \(\langle v_1, v_2, v_3 \rangle + t\langle a, b, c \rangle\) as \(t\) runs through the real numbers. In coordinates, \(x = v_1 + t a\), \(y = v_2 + t b\) and \(z = v_3 + t c\).
  - For the line through two points, subtract their position vectors to get a direction. Either point may be the base point.
  - The usual slip treats the line \(\langle 5, 0, 7 \rangle + t\langle 1, 2, 3 \rangle\) and the plane \(x + 2y + 3z = 26\) as the same set. At \(t = 1\) the line reaches \((6, 2, 10)\), where the left side of the plane equation equals \(40\) and the plane requires \(26\). The line and the plane are different sets.
:::

::: concept-question
id: l4-lines-planes.q-243573a4
question: |
  Which point lies on the line \(\langle 2, 4, 5 \rangle + t\langle 4, -3, -8 \rangle\)?
options:
  - text: |
      \((6, 1, -3)\)
    correct: true
  - text: |
      \((4, -3, -8)\)
  - text: |
      \((2, 4, 13)\)
  - text: |
      \((8, 1, -3)\)
explanation: |
  At \(t = 1\) the line is at \((2 + 4, 4 - 3, 5 - 8) = (6, 1, -3)\). The vector \(\langle 4, -3, -8 \rangle\) is the direction. At \(t = 1/2\) the line is at \((4, 5/2, 1)\). That point is different from \((4, -3, -8)\).
:::

::: section
title: Distance from a point to a plane or line
:::

::: formal-statement
kind: method
title: Distance from a point to a plane
source: { source: handout, section: "12.5", page: 321 }
text: |
  The distance from a point \(P\) to a plane is
  \[
  \frac{\lvert \overrightarrow{QP} \cdot \mathbf{n} \rvert}{\lvert \mathbf{n} \rvert},
  \]
  where \(Q\) is any point on the plane and \(\mathbf{n}\) is a normal. The absolute value is required.
:::

::: plain-explanation
text: |
  The distance is the length of the perpendicular from \(P\) to the plane. That length is the absolute value of the **scalar projection** of \(\overrightarrow{QP}\) onto \(\mathbf{n}\).

  The dot product \(\overrightarrow{QP} \cdot \mathbf{n}\) can have either sign:

  - positive, when \(\overrightarrow{QP}\) has a component in the direction of \(\mathbf{n}\),
  - negative, when that component points the opposite way.

  A negative number is not a distance. The formula uses the absolute value.
:::

::: tip
text: |
  Any point of the plane may be used as \(Q\).
:::

::: worked-example
title: Distance from a point to a plane
problem: |
  Find the distance from \(P = (1, 2, 3)\) to the plane \(2x - y + 3z = 5\).
solution: |
  A normal is \(\mathbf{n} = \langle 2, -1, 3 \rangle\). The point \(Q = (1, 0, 1)\) lies on the plane, because the left side there is \(2 \cdot 1 - 0 + 3 \cdot 1 = 5\).

  \[
  \begin{aligned}
  \overrightarrow{QP}&=\langle 1 - 1, 2 - 0, 3 - 1 \rangle\\
  &=\langle 0, 2, 2 \rangle,\\
  \overrightarrow{QP}\cdot\mathbf{n}&=0 \cdot 2 + 2 \cdot (-1) + 2 \cdot 3\\
  &=4,\\
  \lvert\mathbf{n}\rvert&=\sqrt{4 + 1 + 9}=\sqrt{14}.
  \end{aligned}
  \]

  The distance is \(\lvert 4 \rvert / \sqrt{14} = 4 / \sqrt{14}\).
:::

::: trap
text: |
  Take the plane \(2x - y + 3z = 5\), the normal \(\mathbf{n} = \langle 2, -1, 3 \rangle\), and the point \(Q = (1, 0, 1)\) on the plane. Let \(P = (1, -2, -1)\).

  The left side at \(P\) is \(2 \cdot 1 - (-2) + 3 \cdot (-1) = 1\). The plane requires \(5\), so \(P\) is off the plane. The vector and dot product are
  \[
  \begin{aligned}
  \overrightarrow{QP}&=\langle 0, -2, -2 \rangle,\\
  \overrightarrow{QP}\cdot\mathbf{n}\\
  &=0 \cdot 2 + (-2) \cdot (-1)\\
  &\quad+ (-2) \cdot 3\\
  &=-4,\\
  \lvert\mathbf{n}\rvert&=\sqrt{14}.
  \end{aligned}
  \]
  The scalar projection is \(-4 / \sqrt{14}\). A negative number is not a distance. The distance is \(4 / \sqrt{14}\).
:::

::: formal-statement
kind: method
title: Distance from a point to a line
source: { source: handout, section: "12.5", page: 321 }
text: |
  The distance from a point \(P\) to the line through \(Q\) with direction \(\mathbf{A}\) is
  \[
  \frac{\lvert \overrightarrow{QP} \times \mathbf{A} \rvert}{\lvert \mathbf{A} \rvert}.
  \]
:::

::: plain-explanation
text: |
  Let \(\theta\) be the angle between \(\overrightarrow{QP}\) and \(\mathbf{A}\). The perpendicular distance from \(P\) to the line is \(\lvert \overrightarrow{QP} \rvert \sin \theta\).

  The length of the cross product is
  \[
  \lvert \overrightarrow{QP} \times \mathbf{A} \rvert = \lvert \overrightarrow{QP} \rvert \, \lvert \mathbf{A} \rvert \sin \theta.
  \]
  Dividing by \(\lvert \mathbf{A} \rvert\) leaves that distance. The numerator is a length, so it is already nonnegative.
:::

::: guided-example
title: Distance from a point to a line
problem: |
  Find the distance from \(P = (-1, 2, 1)\) to the line \(\langle 1, 1, 1 \rangle + t\langle 2, 3, -1 \rangle\). Work each step before you reveal it.
steps:
  - |
    A point on the line is \(Q = (1, 1, 1)\), the point at \(t = 0\). The direction is \(\mathbf{A} = \langle 2, 3, -1 \rangle\).
  - |
    The vector from \(Q\) to \(P\) is \(\overrightarrow{QP} = \langle -1 - 1, 2 - 1, 1 - 1 \rangle = \langle -2, 1, 0 \rangle\).
  - |
    With \(\langle a_1, a_2, a_3 \rangle = \langle -2, 1, 0 \rangle\) and \(\langle b_1, b_2, b_3 \rangle = \langle 2, 3, -1 \rangle\), the cross product components are
    \[
    \begin{aligned}
    a_2 b_3 - a_3 b_2 &= 1 \cdot (-1) - 0 \cdot 3\\
    &= -1,\\
    a_3 b_1 - a_1 b_3 &= 0 \cdot 2 - (-2) \cdot (-1)\\
    &= -2,\\
    a_1 b_2 - a_2 b_1 &= (-2) \cdot 3 - 1 \cdot 2\\
    &= -8.
    \end{aligned}
    \]
    The cross product is \(\langle -1, -2, -8 \rangle\). The sum of the squares of its components is \(1 + 4 + 64 = 69\). Its length is \(\sqrt{69}\).
  - |
    The sum of the squares of the components of \(\mathbf{A}\) is \(4 + 9 + 1 = 14\). The length of \(\mathbf{A}\) is \(\sqrt{14}\). The distance is \(\sqrt{69} / \sqrt{14}\).
:::

::: going-deeper
title: Distance between two skew lines
text: |
  Two lines that are not parallel and do not meet are **skew**. Let the lines pass through \(P_1\) and \(P_2\) with direction vectors \(\mathbf{d}_1\) and \(\mathbf{d}_2\). The cross product \(\mathbf{d}_1 \times \mathbf{d}_2\) is perpendicular to both lines. The distance between the lines is the length of the projection of \(P_2 - P_1\) onto that direction:
  \[
  \frac{|(P_2 - P_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)|}{|\mathbf{d}_1 \times \mathbf{d}_2|}.
  \]
:::

::: key-points
text: |
  - The distance from a point \(P\) to a plane is \(\lvert \overrightarrow{QP} \cdot \mathbf{n} \rvert / \lvert \mathbf{n} \rvert\), where \(Q\) is any point on the plane and \(\mathbf{n}\) is a normal. The absolute value is required.
  - The distance from \(P\) to the line through \(Q\) with direction \(\mathbf{A}\) is \(\lvert \overrightarrow{QP} \times \mathbf{A} \rvert / \lvert \mathbf{A} \rvert\). The numerator is a length, so it is already nonnegative.
  - The usual slip reports the scalar projection \(-4 / \sqrt{14}\) as the distance from \(P = (1, -2, -1)\) to the plane \(2x - y + 3z = 5\). A negative number is not a distance, and the distance is \(4 / \sqrt{14}\).
:::

::: concept-question
id: l4-lines-planes.q-36a7e7fe
question: |
  The vector \(\langle 2, -3, 1 \rangle\) is a normal to \(2x - 3y + z = 15\). Which of these is a normal to the same plane?
options:
  - text: |
      \(\langle -4, 6, -2 \rangle\)
    correct: true
  - text: |
      \(\langle 2, 3, 1 \rangle\)
  - text: |
      \(\langle 2, -3, 0 \rangle\)
  - text: |
      \(\langle 15, 0, 0 \rangle\)
explanation: |
  \(\langle -4, 6, -2 \rangle = -2\langle 2, -3, 1 \rangle\). The two vectors are anti-parallel, so both are normals. If \(\langle 2, 3, 1 \rangle = k\langle 2, -3, 1 \rangle\), the first components give \(2k = 2\), so \(k = 1\). The second component of \(\langle 2, -3, 1 \rangle\) is \(-3\). The vector \(\langle 2, 3, 1 \rangle\) has second component \(3\). The components disagree, so \(\langle 2, 3, 1 \rangle\) is not a normal to this plane.
:::

::: exercise
id: l4-lines-planes.ex-line-two-points
tier: standard
topics: [lines]
statement: |
  Write parametric equations for the line through \((1, -2, 0)\) and \((4, 1, 3)\). Use the displacement from \((1, -2, 0)\) to \((4, 1, 3)\) as the direction, and use \((1, -2, 0)\) as the base point.
solution: |
  The direction is \(\langle 4 - 1, 1 - (-2), 3 - 0 \rangle = \langle 3, 3, 3 \rangle\).

  The parametric equations are
  \[
  \begin{aligned}
  x&=1+3t,\\
  y&=-2+3t,\\
  z&=3t.
  \end{aligned}
  \]
  At \(t = 0\) the point is \((1, -2, 0)\). At \(t = 1\) the point is \((4, 1, 3)\).
provenance: written-for-site
steps:
  - Direction \(\langle 3, 3, 3 \rangle\) computed from the two points.
  - Parametric equations written from the base point \((1, -2, 0)\).
  - The second point recovered at \(t = 1\).
verification:
  checks:
    - expr: "(4 - 1, 1 - (-2), 3 - 0)"
      expected: "(3, 3, 3)"
    - expr: "(1 + 3*0, -2 + 3*0, 3*0)"
      expected: "(1, -2, 0)"
    - expr: "(1 + 3*1, -2 + 3*1, 3*1)"
      expected: "(4, 1, 3)"
:::

::: exercise
id: l4-lines-planes.ex-plane-distance
tier: standard
topics: [planes, distance]
statement: |
  Find the distance from \(P = (1, 1, 1)\) to the plane \(x + 2y + 2z = 9\).
solution: |
  A normal is \(\mathbf{n} = \langle 1, 2, 2 \rangle\). Setting \(y = 0\) and \(z = 0\) gives the candidate point \(Q = (9, 0, 0)\). The left side at \(Q\) is \(9 + 0 + 0 = 9\), so \(Q\) lies on the plane.

  The left side at \(P\) is \(1 + 2 + 2 = 5\), so \(P\) is off the plane. The vector and dot product are
  \[
  \begin{aligned}
  \overrightarrow{QP}&=\langle 1 - 9, 1 - 0, 1 - 0 \rangle\\
  &=\langle -8, 1, 1 \rangle,\\
  \overrightarrow{QP}\cdot\mathbf{n}&=-8 + 2 + 2\\
  &=-4,\\
  \lvert\mathbf{n}\rvert&=\sqrt{1 + 4 + 4}=3.
  \end{aligned}
  \]

  The scalar projection is \(-4/3\). A negative number is not a distance. The distance is \(\lvert -4/3 \rvert = 4/3\).
provenance: written-for-site
steps:
  - Normal read off, and a point \(Q\) on the plane named.
  - Dot product computed, with the negative sign kept.
  - Absolute value taken, and the distance \(4/3\) stated.
verification:
  checks:
    - expr: "9 + 2*0 + 2*0"
      expected: "9"
    - expr: "1 + 2*1 + 2*1"
      expected: "5"
    - expr: "((-8)*1 + 1*2 + 1*2)/sqrt(1**2 + 2**2 + 2**2)"
      expected: "Rational(-4, 3)"
    - expr: "Abs((-8)*1 + 1*2 + 1*2)/sqrt(1**2 + 2**2 + 2**2)"
      expected: "Rational(4, 3)"
:::

::: exercise
id: l4-lines-planes.ex-line-distance
tier: exam
topics: [lines, distance]
statement: |
  Find the distance from \(P = (1, -1, 0)\) to the line through the origin parallel to \(\langle 1, 1, 1 \rangle\).
solution: |
  Take \(Q = (0, 0, 0)\) and \(\mathbf{A} = \langle 1, 1, 1 \rangle\). Then \(\overrightarrow{QP} = \langle 1, -1, 0 \rangle\).

  The cross product components are
  \[
  \begin{aligned}
  \text{first component}&=(-1) \cdot 1 - 0 \cdot 1\\
  &=-1,\\
  \text{second component}&=0 \cdot 1 - 1 \cdot 1\\
  &=-1,\\
  \text{third component}&=1 \cdot 1 - (-1) \cdot 1\\
  &=2.
  \end{aligned}
  \]
  The cross product is \(\langle -1, -1, 2 \rangle\). The sum of the squares of its components is \(1 + 1 + 4 = 6\), so its length is \(\sqrt{6}\). The sum of the squares of the components of \(\mathbf{A}\) is \(1 + 1 + 1 = 3\), so the length of \(\mathbf{A}\) is \(\sqrt{3}\).

  The distance is \(\sqrt{6} / \sqrt{3} = \sqrt{2}\).
provenance: written-for-site
steps:
  - Point \(Q\) and direction \(\mathbf{A}\) named, and \(\overrightarrow{QP}\) computed.
  - Cross product \(\langle -1, -1, 2 \rangle\) computed.
  - Lengths divided, and the distance \(\sqrt{2}\) stated.
verification:
  checks:
    - expr: "(1 - 0, -1 - 0, 0 - 0)"
      expected: "(1, -1, 0)"
    - expr: "((-1)*1 - 0*1, 0*1 - 1*1, 1*1 - (-1)*1)"
      expected: "(-1, -1, 2)"
    - expr: "sqrt((-1)**2 + (-1)**2 + 2**2)"
      expected: "sqrt(6)"
    - expr: "sqrt(1**2 + 1**2 + 1**2)"
      expected: "sqrt(3)"
    - expr: "sqrt(6)/sqrt(3)"
      expected: "sqrt(2)"
:::

::: sheet-item
id: l4-lines-planes.sheet-plane
category: formula
text: |
  The plane through \((v_1, v_2, v_3)\) with normal \(\langle a, b, c \rangle\) is \(a(x - v_1) + b(y - v_2) + c(z - v_3) = 0\). The equation \(ax + by + cz = d\) has normal \(\langle a, b, c \rangle\).
:::

::: sheet-item
id: l4-lines-planes.sheet-line
category: formula
text: |
  The line through \((v_1, v_2, v_3)\) parallel to \(\langle a, b, c \rangle\) is \(\langle v_1, v_2, v_3 \rangle + t\langle a, b, c \rangle\), so \(x = v_1 + ta\), \(y = v_2 + tb\), \(z = v_3 + tc\).
:::

::: sheet-item
id: l4-lines-planes.sheet-distances
category: formula
text: |
  Distance from \(P\) to a plane: \(\lvert \overrightarrow{QP} \cdot \mathbf{n} \rvert / \lvert \mathbf{n} \rvert\), with \(Q\) on the plane. Distance from \(P\) to a line through \(Q\) with direction \(\mathbf{A}\): \(\lvert \overrightarrow{QP} \times \mathbf{A} \rvert / \lvert \mathbf{A} \rvert\).
:::

::: sheet-item
id: l4-lines-planes.sheet-absolute-value
category: trap
text: |
  The scalar projection \(\overrightarrow{QP} \cdot \mathbf{n} / \lvert \mathbf{n} \rvert\) can be negative. The distance from the point to the plane is the absolute value of that number.
:::

::: exercise
id: l4-lines-planes.ex-line-plane-intersection
tier: standard
topics: [lines, planes]
statement: |
  Let \(L\) be the line through \(A = (2, 1, 3)\) and \(B = (4, 0, 7)\).

  1. Write parametric equations of \(L\) with base point \(A\).
  2. Find the point where \(L\) meets the plane \(x + 2y - z = 5\).
  3. Find the equation of the plane that contains \(L\) and the origin.
solution: |
  **Parametric equations.** The direction is \(\overrightarrow{AB} = \langle 4 - 2, 0 - 1, 7 - 3\rangle = \langle 2, -1, 4\rangle\). With base point \(A\), the line is
  \[
  \begin{aligned}
  x&=2+2t,\\
  y&=1-t,\\
  z&=3+4t.
  \end{aligned}
  \]

  **Intersection with the plane.** Substitute the line into \(x + 2y - z\):
  \[
  \begin{aligned}
  &(2 + 2t) + 2(1 - t) - (3 + 4t)\\
  &= 2 + 2t + 2 - 2t - 3 - 4t\\
  &= 1 - 4t.
  \end{aligned}
  \]
  The equation \(1 - 4t = 5\) gives \(t = -1\). The point is \((2 - 2, 1 + 1, 3 - 4) = (0, 2, -1)\). Check: \(0 + 2\cdot 2 - (-1) = 5\).

  **Plane through the line and the origin.** The plane contains the vector \(\overrightarrow{OA} = \langle 2, 1, 3\rangle\) and the direction \(\langle 2, -1, 4\rangle\). Their cross product is a normal:
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=1\cdot 4-3\cdot(-1)\\
  &=7,\\
  \mathbf{j}\text{ component}&=-\bigl(2\cdot 4-3\cdot 2\bigr)\\
  &=-2,\\
  \mathbf{k}\text{ component}&=2\cdot(-1)-1\cdot 2\\
  &=-4.
  \end{aligned}
  \]
  The normal is \(\langle 7, -2, -4\rangle\). The plane passes through the origin, so its equation is \(7x - 2y - 4z = 0\). Check with \(B\): \(7\cdot 4 - 2\cdot 0 - 4\cdot 7 = 28 - 0 - 28 = 0\).
provenance: written-for-site
steps:
  - |
    Direction \(\langle 2, -1, 4\rangle\) and the parametric equations.
  - |
    Parameter \(t = -1\) and the point \((0, 2, -1)\).
  - |
    Normal \(\langle 7, -2, -4\rangle\) and the plane \(7x - 2y - 4z = 0\).
verification:
  checks:
    - expr: "(4 - 2, 0 - 1, 7 - 3)"
      expected: "(2, -1, 4)"
    - expr: "((2 + 2*t) + 2*(1 - t) - (3 + 4*t)).subs(t, -1)"
      expected: "5"
    - expr: "(2 + 2*(-1), 1 - (-1), 3 + 4*(-1))"
      expected: "(0, 2, -1)"
    - expr: "(1*4 - 3*(-1), -(2*4 - 3*2), 2*(-1) - 1*2)"
      expected: "(7, -2, -4)"
    - expr: "(7*4 - 2*0 - 4*7, 7*2 - 2*1 - 4*3)"
      expected: "(0, 0)"
:::

::: exercise
id: l4-lines-planes.handout-12-5-1
number: "12.5.1"
tier: basic
topics:
  - planes
statement: |
  Find an equation of the plane containing \((6,2,1)\) and perpendicular to \(\langle 1,1,1\rangle\).
solution: |
  The vector \(\langle 1,1,1\rangle\) is a normal to the plane. The vector from \((6,2,1)\) to \((x,y,z)\) is \(\langle x-6,\,y-2,\,z-1\rangle\). It is perpendicular to the normal exactly when
  \[
  (x-6)+(y-2)+(z-1)=0.
  \]
  The right-hand side after expanding is the normal evaluated at the known point, \(1\cdot 6+1\cdot 2+1\cdot 1=9\).

  The plane is
  \[
  x+y+z=9.
  \]
provenance: handout-answer
steps:
  - The normal is \(\langle 1,1,1\rangle\).
  - The point-normal equation is \((x-6)+(y-2)+(z-1)=0\).
  - Expanding gives \(x+y+z=9\).
verification:
  checks:
    - expr: 'expand((x - 6) + (y - 2) + (z - 1))'
      expected: "x + y + z - 9"
    - expr: '1*6 + 1*2 + 1*1'
      expected: "9"
:::


::: exercise
id: l4-lines-planes.handout-12-5-2
number: "12.5.2"
tier: basic
topics:
  - planes
statement: |
  Find an equation of the plane containing \((-1,2,-3)\) and perpendicular to \(\langle 4,5,-1\rangle\).
solution: |
  The vector \(\langle 4,5,-1\rangle\) is a normal to the plane. The vector from \((-1,2,-3)\) to \((x,y,z)\) is \(\langle x+1,\,y-2,\,z+3\rangle\). It is perpendicular to the normal exactly when
  \[
  4(x+1)+5(y-2)-(z+3)=0.
  \]
  Expanding gives
  \[
  \begin{aligned}
  4x+4+5y-10-z-3&=0,\\
  4x+5y-z-9&=0.
  \end{aligned}
  \]
  The constant on the right is the normal evaluated at the known point, \(4\cdot(-1)+5\cdot 2+(-1)\cdot(-3)=-4+10+3=9\).

  The plane is
  \[
  4x+5y-z=9.
  \]
provenance: handout-answer
steps:
  - The normal is \(\langle 4,5,-1\rangle\).
  - The point-normal equation is \(4(x+1)+5(y-2)-(z+3)=0\).
  - Expanding gives \(4x+5y-z=9\).
verification:
  checks:
    - expr: 'expand(4*(x + 1) + 5*(y - 2) - (z + 3))'
      expected: "4*x + 5*y - z - 9"
    - expr: '4*(-1) + 5*2 + (-1)*(-3)'
      expected: "9"
discrepancy: |
  The printed answer is \(4x+5y-z=3\). The verified value is \(4x+5y-z=9\).
:::


::: exercise
id: l4-lines-planes.handout-12-5-3
number: "12.5.3"
tier: standard
topics:
  - planes
statement: |
  Find an equation of the plane containing \((1,2,-3)\), \((0,1,-2)\) and \((1,2,-2)\).
solution: |
  Name the points \(A=(1,2,-3)\), \(B=(0,1,-2)\) and \(C=(1,2,-2)\). Two vectors in the plane are
  \[
  \begin{aligned}
  \overrightarrow{AB}&=\langle -1,-1,1\rangle,\\
  \overrightarrow{AC}&=\langle 0,0,1\rangle.
  \end{aligned}
  \]
  Their cross product is a normal to the plane. The components are
  \[
  \begin{aligned}
  (-1)\cdot 1-1\cdot 0&=-1,\\
  1\cdot 0-(-1)\cdot 1&=1,\\
  (-1)\cdot 0-(-1)\cdot 0&=0.
  \end{aligned}
  \]
  The normal is \(\langle -1,1,0\rangle\). With the point \(A\), the plane is
  \[
  -(x-1)+(y-2)=0,
  \]
  which expands to \(-x+y-1=0\). So the plane is
  \[
  x-y=-1.
  \]
  The left side \(x-y\) equals \(-1\) at \(A\), at \(B\) (\(0-1\)) and at \(C\) (\(1-2\)).
provenance: handout-answer
steps:
  - Vectors \(\overrightarrow{AB}=\langle -1,-1,1\rangle\) and \(\overrightarrow{AC}=\langle 0,0,1\rangle\) computed.
  - Cross product \(\langle -1,1,0\rangle\) computed as the normal.
  - Plane \(x-y=-1\) written and checked at all three points.
verification:
  checks:
    - expr: '(0 - 1, 1 - 2, -2 - (-3))'
      expected: "(-1, -1, 1)"
    - expr: '(1 - 1, 2 - 2, -2 - (-3))'
      expected: "(0, 0, 1)"
    - expr: '((-1)*1 - 1*0, 1*0 - (-1)*1, (-1)*0 - (-1)*0)'
      expected: "(-1, 1, 0)"
    - expr: 'expand(-(x - 1) + (y - 2))'
      expected: "-x + y - 1"
    - expr: '(1 - 2, 0 - 1, 1 - 2)'
      expected: "(-1, -1, -1)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-4
number: "12.5.4"
tier: standard
topics:
  - planes
statement: |
  Find an equation of the plane containing \((1,0,0)\), \((4,2,0)\) and \((3,2,1)\).
solution: |
  Name the points \(A=(1,0,0)\), \(B=(4,2,0)\) and \(C=(3,2,1)\). Two vectors in the plane are
  \[
  \begin{aligned}
  \overrightarrow{AB}&=\langle 3,2,0\rangle,\\
  \overrightarrow{AC}&=\langle 2,2,1\rangle.
  \end{aligned}
  \]
  Their cross product is a normal to the plane. The components are
  \[
  \begin{aligned}
  2\cdot 1-0\cdot 2&=2,\\
  0\cdot 2-3\cdot 1&=-3,\\
  3\cdot 2-2\cdot 2&=2.
  \end{aligned}
  \]
  The normal is \(\langle 2,-3,2\rangle\). With the point \(A\), the plane is
  \[
  2(x-1)-3y+2z=0,
  \]
  so
  \[
  2x-3y+2z=2.
  \]
  The left side equals \(2\) at \(A\), \(8-6+0=2\) at \(B\), and \(6-6+2=2\) at \(C\).
provenance: handout-answer
steps:
  - Vectors \(\langle 3,2,0\rangle\) and \(\langle 2,2,1\rangle\) computed from \(A\).
  - Cross product \(\langle 2,-3,2\rangle\) computed as the normal.
  - Plane \(2x-3y+2z=2\) written and checked at \(B\) and \(C\).
verification:
  checks:
    - expr: '(4 - 1, 2 - 0, 0 - 0)'
      expected: "(3, 2, 0)"
    - expr: '(3 - 1, 2 - 0, 1 - 0)'
      expected: "(2, 2, 1)"
    - expr: '(2*1 - 0*2, 0*2 - 3*1, 3*2 - 2*2)'
      expected: "(2, -3, 2)"
    - expr: 'expand(2*(x - 1) - 3*y + 2*z)'
      expected: "2*x - 3*y + 2*z - 2"
    - expr: '(2*1 - 3*0 + 2*0, 2*4 - 3*2 + 2*0, 2*3 - 3*2 + 2*1)'
      expected: "(2, 2, 2)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-5
number: "12.5.5"
tier: standard
topics:
  - planes
  - lines
statement: |
  Find an equation of the plane containing the point \((1,0,0)\) and the line \(\langle 1,0,2\rangle + t\langle 3,2,1\rangle\).
solution: |
  The plane contains the direction \(\mathbf{d}=\langle 3,2,1\rangle\) of the line. It also contains the vector from \((1,0,0)\) to the point \((1,0,2)\) of the line, which is \(\mathbf{w}=\langle 0,0,2\rangle\).

  The cross product \(\mathbf{d}\times\mathbf{w}\) is a normal. Its components are
  \[
  \begin{aligned}
  2\cdot 2-1\cdot 0&=4,\\
  1\cdot 0-3\cdot 2&=-6,\\
  3\cdot 0-2\cdot 0&=0.
  \end{aligned}
  \]
  The normal is \(\langle 4,-6,0\rangle\). With the point \((1,0,0)\), the plane is
  \[
  4(x-1)-6y=0.
  \]
  Dividing by \(2\) gives
  \[
  2x-3y=2.
  \]
  A different multiple of the normal gives an equivalent equation. The point \((1,0,2)\) satisfies it, because \(2-0=2\). A general point of the line has \(2(1+3t)-3\cdot 2t=2\), so the whole line lies in the plane.
provenance: handout-answer
steps:
  - Direction \(\langle 3,2,1\rangle\) and connecting vector \(\langle 0,0,2\rangle\) found.
  - Cross product \(\langle 4,-6,0\rangle\) computed as the normal.
  - Plane \(2x-3y=2\) written and checked on the line.
verification:
  checks:
    - expr: '(1 - 1, 0 - 0, 2 - 0)'
      expected: "(0, 0, 2)"
    - expr: '(2*2 - 1*0, 1*0 - 3*2, 3*0 - 2*0)'
      expected: "(4, -6, 0)"
    - expr: 'expand(4*(x - 1) - 6*y)'
      expected: "4*x - 6*y - 4"
    - expr: 'expand(2*(1 + 3*t) - 3*(2*t))'
      expected: "2"
    - expr: '2*1 - 3*0'
      expected: "2"
:::


::: exercise
id: l4-lines-planes.handout-12-5-6
number: "12.5.6"
tier: exam
topics:
  - planes
  - lines
statement: |
  Find an equation of the plane containing the line of intersection of the planes \(x+y+z=1\) and \(x-y+2z=2\), and perpendicular to the \(xy\)-plane.
solution: |
  **Direction of the line.** The normals of the two given planes are \(\mathbf{n}_1=\langle 1,1,1\rangle\) and \(\mathbf{n}_2=\langle 1,-1,2\rangle\). The line of intersection lies in both planes, so its direction \(\mathbf{d}\) is perpendicular to both normals. The cross product \(\mathbf{n}_1\times\mathbf{n}_2\) has components
  \[
  \begin{aligned}
  1\cdot 2-1\cdot(-1)&=3,\\
  1\cdot 1-1\cdot 2&=-1,\\
  1\cdot(-1)-1\cdot 1&=-2.
  \end{aligned}
  \]
  The direction is \(\mathbf{d}=\langle 3,-1,-2\rangle\).

  **A point on the line.** Set \(z=0\) in both equations. Then \(x+y=1\) and \(x-y=2\), so \(x=3/2\) and \(y=-1/2\). The point \((3/2,-1/2,0)\) lies on the line.

  **Normal of the required plane.** The required plane contains the line, so its normal \(\mathbf{n}\) is perpendicular to \(\mathbf{d}\). The plane is perpendicular to the \(xy\)-plane, whose normal is \(\mathbf{k}=\langle 0,0,1\rangle\). So \(\mathbf{n}\) is perpendicular to \(\mathbf{k}\) as well. The cross product \(\mathbf{d}\times\mathbf{k}\) has components
  \[
  \begin{aligned}
  (-1)\cdot 1-(-2)\cdot 0&=-1,\\
  (-2)\cdot 0-3\cdot 1&=-3,\\
  3\cdot 0-(-1)\cdot 0&=0.
  \end{aligned}
  \]
  A normal is \(\langle 1,3,0\rangle\), the negative of this vector.

  **The plane.** Through \((3/2,-1/2,0)\) with normal \(\langle 1,3,0\rangle\), the right-hand side is \(\tfrac32+3\cdot(-\tfrac12)=0\). The plane is
  \[
  x+3y=0.
  \]
  A general point of the line is \((3/2+3t,\,-1/2-t,\,-2t)\). There \(x+3y=\tfrac32+3t-\tfrac32-3t=0\), so the whole line lies in the plane.
provenance: handout-answer
steps:
  - Direction \(\langle 3,-1,-2\rangle\) of the line of intersection found as \(\mathbf{n}_1\times\mathbf{n}_2\).
  - Point \((3/2,-1/2,0)\) found on the line.
  - Normal \(\langle 1,3,0\rangle\) found perpendicular to the direction and to \(\mathbf{k}\).
  - Plane \(x+3y=0\) written and checked on the line.
verification:
  checks:
    - expr: '(1*2 - 1*(-1), 1*1 - 1*2, 1*(-1) - 1*1)'
      expected: "(3, -1, -2)"
    - expr: '(Rational(3, 2) + (-Rational(1, 2)), Rational(3, 2) - (-Rational(1, 2)))'
      expected: "(1, 2)"
    - expr: '((-1)*1 - (-2)*0, (-2)*0 - 3*1, 3*0 - (-1)*0)'
      expected: "(-1, -3, 0)"
    - expr: 'expand((Rational(3, 2) + 3*t) + 3*(-Rational(1, 2) - t))'
      expected: "0"
    - expr: 'expand((Rational(3, 2) + 3*t) + (-Rational(1, 2) - t) + (-2*t))'
      expected: "1"
    - expr: 'expand((Rational(3, 2) + 3*t) - (-Rational(1, 2) - t) + 2*(-2*t))'
      expected: "2"
:::


::: exercise
id: l4-lines-planes.handout-12-5-7
number: "12.5.7"
tier: basic
topics:
  - lines
statement: |
  Find an equation of the line through \((1,0,3)\) and \((1,2,4)\).
solution: |
  A direction is the difference of the position vectors,
  \[
  \langle 1,2,4\rangle-\langle 1,0,3\rangle=\langle 0,2,1\rangle.
  \]
  With base point \((1,0,3)\), the line is
  \[
  \langle 1,0,3\rangle+t\langle 0,2,1\rangle.
  \]
  The parametric equations are
  \[
  \begin{aligned}
  x&=1,\\
  y&=2t,\\
  z&=3+t.
  \end{aligned}
  \]
  At \(t=1\) the line is at \((1,2,4)\), the other given point.
provenance: handout-answer
steps:
  - Direction \(\langle 0,2,1\rangle\) computed from the two points.
  - Line written from the base point \((1,0,3)\).
  - The second point recovered at \(t=1\).
verification:
  checks:
    - expr: '(1 - 1, 2 - 0, 4 - 3)'
      expected: "(0, 2, 1)"
    - expr: '(1 + 0*1, 0 + 2*1, 3 + 1*1)'
      expected: "(1, 2, 4)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-8
number: "12.5.8"
tier: basic
topics:
  - lines
  - planes
statement: |
  Find an equation of the line through \((1,0,3)\) and perpendicular to the plane \(x+2y-z=1\).
solution: |
  A normal to the plane is the coefficient vector \(\langle 1,2,-1\rangle\). A line perpendicular to the plane is parallel to a normal, so \(\langle 1,2,-1\rangle\) is a direction of the line.

  With base point \((1,0,3)\), the line is
  \[
  \langle 1,0,3\rangle+t\langle 1,2,-1\rangle.
  \]
  The parametric equations are
  \[
  \begin{aligned}
  x&=1+t,\\
  y&=2t,\\
  z&=3-t.
  \end{aligned}
  \]
  As a check, the vectors \(\langle 2,-1,0\rangle\) and \(\langle 1,0,1\rangle\) are parallel to the plane, because \(2-2-0=0\) and \(1+0-1=0\). Their dot products with the direction \(\langle 1,2,-1\rangle\) are
  \[
  \begin{aligned}
  2-2+0&=0,\\
  1+0-1&=0.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Normal \(\langle 1,2,-1\rangle\) read off from the plane equation.
  - The normal used as the direction of the line.
  - Line written from the base point \((1,0,3)\).
verification:
  checks:
    - expr: '(1*2 + 2*(-1) + (-1)*0, 1*1 + 2*0 + (-1)*1)'
      expected: "(0, 0)"
    - expr: '(1 + 1*0, 0 + 2*0, 3 - 1*0)'
      expected: "(1, 0, 3)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-9
number: "12.5.9"
tier: basic
topics:
  - lines
  - planes
statement: |
  Find an equation of the line through the origin and perpendicular to the plane \(x+y-z=2\).
solution: |
  A normal to the plane is the coefficient vector \(\langle 1,1,-1\rangle\). A line perpendicular to the plane is parallel to a normal, so \(\langle 1,1,-1\rangle\) is a direction of the line.

  The line passes through the origin, so the base point is \(\langle 0,0,0\rangle\) and the line is
  \[
  t\langle 1,1,-1\rangle.
  \]
  The parametric equations are
  \[
  \begin{aligned}
  x&=t,\\
  y&=t,\\
  z&=-t.
  \end{aligned}
  \]
  As a check, the vectors \(\langle 1,-1,0\rangle\) and \(\langle 1,0,1\rangle\) are parallel to the plane, because \(1-1-0=0\) and \(1+0-1=0\). Their dot products with the direction \(\langle 1,1,-1\rangle\) are
  \[
  \begin{aligned}
  1-1+0&=0,\\
  1+0-1&=0.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Normal \(\langle 1,1,-1\rangle\) read off from the plane equation.
  - The normal used as the direction of the line.
  - Line through the origin written as \(t\langle 1,1,-1\rangle\).
verification:
  checks:
    - expr: '(1*1 + 1*(-1) + (-1)*0, 1*1 + 1*0 + (-1)*1)'
      expected: "(0, 0)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-10
number: "12.5.10"
tier: standard
topics:
  - lines
statement: |
  Find \(a\) and \(c\) so that \((a,1,c)\) is on the line through \((0,2,3)\) and \((2,7,5)\).
solution: |
  A direction is \(\langle 2,7,5\rangle-\langle 0,2,3\rangle=\langle 2,5,2\rangle\). With base point \((0,2,3)\), the line has parametric equations
  \[
  \begin{aligned}
  x&=2t,\\
  y&=2+5t,\\
  z&=3+2t.
  \end{aligned}
  \]
  The point \((a,1,c)\) lies on the line when some \(t\) gives \(y=1\). The equation \(2+5t=1\) gives \(t=-1/5\). Then
  \[
  \begin{aligned}
  a&=2\cdot\left(-\frac15\right)=-\frac25,\\
  c&=3+2\cdot\left(-\frac15\right)=\frac{13}{5}.
  \end{aligned}
  \]
  So \(a=-2/5\) and \(c=13/5\).
provenance: handout-answer
steps:
  - Direction \(\langle 2,5,2\rangle\) and the parametric equations written.
  - Parameter \(t=-1/5\) found from \(y=1\).
  - Values \(a=-2/5\) and \(c=13/5\) read off.
verification:
  checks:
    - expr: '(2 - 0, 7 - 2, 5 - 3)'
      expected: "(2, 5, 2)"
    - expr: 'solve(2 + 5*t - 1, t)[0]'
      expected: "Rational(-1, 5)"
    - expr: '(2*Rational(-1, 5), 3 + 2*Rational(-1, 5))'
      expected: "(Rational(-2, 5), Rational(13, 5))"
    - expr: '(2*1, 2 + 5*1, 3 + 2*1)'
      expected: "(2, 7, 5)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-12
number: "12.5.12"
tier: standard
topics:
  - lines
statement: |
  Determine whether the lines \(\langle 1,3,-1\rangle+t\langle 1,1,0\rangle\) and \(\langle 0,0,0\rangle+s\langle 1,4,5\rangle\) are parallel, intersect, or neither.
solution: |
  **Parallel test.** The lines are parallel exactly when the directions are multiples of each other. If \(\langle 1,4,5\rangle=k\langle 1,1,0\rangle\), the first component gives \(k=1\), and then the third component would be \(0\). It is \(5\). The lines are not parallel.

  **Common point.** The two lines use different parameters, \(t\) and \(s\), because a common point need not have equal parameters. A common point satisfies
  \[
  \begin{aligned}
  1+t&=s,\\
  3+t&=4s,\\
  -1&=5s.
  \end{aligned}
  \]
  Subtracting the first equation from the second gives \(2=3s\). So \(s=2/3\) and \(t=-1/3\). The third equation requires \(s=-1/5\). The value \(s=2/3\) gives \(5s=10/3\), which differs from \(-1\). The system has no solution, so the lines do not meet.

  The lines are not parallel and do not meet, so they are **skew**.
provenance: handout-answer
steps:
  - Directions \(\langle 1,1,0\rangle\) and \(\langle 1,4,5\rangle\) shown not to be multiples of each other.
  - First two coordinates solved for \(s=2/3\) and \(t=-1/3\).
  - Third coordinate fails, so the lines are skew.
verification:
  checks:
    - expr: 'solve([1 + t - s, 3 + t - 4*s], [t, s])[t]'
      expected: "Rational(-1, 3)"
    - expr: 'solve([1 + t - s, 3 + t - 4*s], [t, s])[s]'
      expected: "Rational(2, 3)"
    - expr: '(-1) - 5*Rational(2, 3)'
      expected: "Rational(-13, 3)"
    - expr: '(1*5 - 1*4, 1*1 - 0*5, 1*4 - 1*1)'
      expected: "(1, 1, 3)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-13
number: "12.5.13"
tier: standard
topics:
  - lines
statement: |
  Determine whether the lines \(\langle 1,0,2\rangle+t\langle -1,-1,2\rangle\) and \(\langle 4,4,2\rangle+s\langle 2,2,-4\rangle\) are parallel, intersect, or neither.
solution: |
  **Parallel test.** The second direction is a multiple of the first:
  \[
  \langle 2,2,-4\rangle=-2\langle -1,-1,2\rangle.
  \]
  The lines are parallel or they are the same line.

  **Same line?** The same line would contain \((4,4,2)\). On the first line, \(x=1-t\) and \(y=-t\). The equation \(1-t=4\) gives \(t=-3\). The equation \(-t=4\) gives \(t=-4\). No single \(t\) works, so \((4,4,2)\) is not on the first line.

  The lines are parallel and distinct, so they do not intersect.
provenance: handout-answer
steps:
  - Direction \(\langle 2,2,-4\rangle\) shown to equal \(-2\langle -1,-1,2\rangle\).
  - Point \((4,4,2)\) tested on the first line and rejected.
  - The lines are parallel and distinct.
verification:
  checks:
    - expr: '(-2*(-1), -2*(-1), -2*2)'
      expected: "(2, 2, -4)"
    - expr: '(solve(1 - t - 4, t)[0], solve(-t - 4, t)[0])'
      expected: "(-3, -4)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-14
number: "12.5.14"
tier: standard
topics:
  - lines
statement: |
  Determine whether the lines \(\langle 1,2,-1\rangle+t\langle 1,2,3\rangle\) and \(\langle 1,0,1\rangle+s\langle 2/3,2,4/3\rangle\) are parallel, intersect, or neither.
solution: |
  **Parallel test.** The first components of the directions are \(1\) and \(2/3\), so a multiple would be \(2/3\). The second components are \(2\) and \(2\), so a multiple would be \(1\). The multiples differ, so the lines are not parallel.

  **Common point.** Use the parameters \(t\) and \(s\). A common point satisfies
  \[
  \begin{aligned}
  1+t&=1+\tfrac23 s,\\
  2+2t&=2s,\\
  -1+3t&=1+\tfrac43 s.
  \end{aligned}
  \]
  The first equation gives \(t=\tfrac23 s\). Substituting into the second gives \(2+\tfrac43 s=2s\), so \(\tfrac23 s=2\) and \(s=3\). Then \(t=2\).

  The third equation at these values reads \(-1+6=1+4\), which is \(5=5\). The system is consistent.

  The lines intersect at the point reached at \(t=2\) on the first line,
  \[
  (1+2,\,2+4,\,-1+6)=(3,6,5).
  \]
  At \(s=3\) the second line gives \((1+2,\,6,\,1+4)=(3,6,5)\).
provenance: handout-answer
steps:
  - Directions compared and found not to be multiples.
  - First two coordinates solved for \(t=2\) and \(s=3\).
  - Third coordinate confirmed, and the point \((3,6,5)\) found.
verification:
  checks:
    - expr: 'solve([1 + t - (1 + 2*s/3), 2 + 2*t - 2*s], [t, s])[t]'
      expected: "2"
    - expr: 'solve([1 + t - (1 + 2*s/3), 2 + 2*t - 2*s], [t, s])[s]'
      expected: "3"
    - expr: '(-1 + 3*2) - (1 + Rational(4, 3)*3)'
      expected: "0"
    - expr: '(1 + 2, 2 + 2*2, -1 + 3*2)'
      expected: "(3, 6, 5)"
    - expr: '(1 + Rational(2, 3)*3, 0 + 2*3, 1 + Rational(4, 3)*3)'
      expected: "(3, 6, 5)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-15
number: "12.5.15"
tier: standard
topics:
  - lines
statement: |
  Determine whether the lines \(\langle 1,1,2\rangle+t\langle 1,2,-3\rangle\) and \(\langle 2,3,-1\rangle+s\langle 2,4,-6\rangle\) are parallel, intersect, or neither.
solution: |
  **Parallel test.** The second direction is a multiple of the first:
  \[
  \langle 2,4,-6\rangle=2\langle 1,2,-3\rangle.
  \]
  The lines are parallel or they are the same line.

  **Same line?** Test whether \((2,3,-1)\) is on the first line. The first line has \(x=1+t\), \(y=1+2t\) and \(z=2-3t\). At \(t=1\) these give
  \[
  (1+1,\,1+2,\,2-3)=(2,3,-1).
  \]
  So \((2,3,-1)\) lies on the first line. Two parallel lines with a common point are the same line.

  The lines are the same line, so every point of one is a point of the other.
provenance: handout-answer
steps:
  - Direction \(\langle 2,4,-6\rangle\) shown to equal \(2\langle 1,2,-3\rangle\).
  - Point \((2,3,-1)\) found on the first line at \(t=1\).
  - The lines coincide.
verification:
  checks:
    - expr: '(2*1, 2*2, 2*(-3))'
      expected: "(2, 4, -6)"
    - expr: '(1 + 1, 1 + 2*1, 2 - 3*1)'
      expected: "(2, 3, -1)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-16
number: "12.5.16"
tier: basic
topics:
  - planes
statement: |
  Find a unit normal vector to each of the coordinate planes.
solution: |
  Each coordinate plane has an equation whose coefficient vector is a normal.

  - The \(xy\)-plane is \(z=0\), with normal \(\langle 0,0,1\rangle\).
  - The \(xz\)-plane is \(y=0\), with normal \(\langle 0,1,0\rangle\).
  - The \(yz\)-plane is \(x=0\), with normal \(\langle 1,0,0\rangle\).

  Each of these vectors has length \(1\). The negative of a unit normal is also a unit normal. The unit normals are
  \[
  \begin{aligned}
  xy\text{-plane}:&\ \pm\langle 0,0,1\rangle,\\
  xz\text{-plane}:&\ \pm\langle 0,1,0\rangle,\\
  yz\text{-plane}:&\ \pm\langle 1,0,0\rangle.
  \end{aligned}
  \]
  As a check, the cross product \(\langle 1,0,0\rangle\times\langle 0,1,0\rangle\) has components \(0\cdot 0-0\cdot 1=0\), \(0\cdot 0-1\cdot 0=0\) and \(1\cdot 1-0\cdot 0=1\). It is \(\langle 0,0,1\rangle\), the normal of the \(xy\)-plane spanned by the two vectors.
provenance: written-for-site
steps:
  - Equation of each coordinate plane written.
  - Coefficient vector read off as a normal of length \(1\).
  - Both signs listed.
verification:
  checks:
    - expr: '(sqrt(0**2 + 0**2 + 1**2), sqrt(0**2 + 1**2 + 0**2), sqrt(1**2 + 0**2 + 0**2))'
      expected: "(1, 1, 1)"
    - expr: '(0*0 - 0*1, 0*0 - 1*0, 1*1 - 0*0)'
      expected: "(0, 0, 1)"
    - expr: '(0*1 - 0*0, 0*0 - 1*1, 1*0 - 0*0)'
      expected: "(0, -1, 0)"
    - expr: '(1*1 - 0*0, 0*0 - 0*1, 0*0 - 1*0)'
      expected: "(1, 0, 0)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-19
number: "12.5.19"
tier: standard
topics:
  - planes
  - distance
statement: |
  Find the distance from \((2,2,2)\) to the plane \(x+y+z=-1\).
solution: |
  A normal is \(\mathbf{n}=\langle 1,1,1\rangle\). Setting \(y=0\) and \(z=0\) gives the point \(Q=(-1,0,0)\), which lies on the plane because \(-1+0+0=-1\).

  With \(P=(2,2,2)\), the vector and dot product are
  \[
  \begin{aligned}
  \overrightarrow{QP}&=\langle 2+1,\,2-0,\,2-0\rangle\\
  &=\langle 3,2,2\rangle,\\
  \overrightarrow{QP}\cdot\mathbf{n}&=3+2+2\\
  &=7,\\
  \lvert\mathbf{n}\rvert&=\sqrt{1+1+1}=\sqrt{3}.
  \end{aligned}
  \]
  The distance is \(\lvert 7\rvert/\sqrt{3}=7/\sqrt{3}=7\sqrt{3}/3\).
provenance: handout-answer
steps:
  - Normal \(\langle 1,1,1\rangle\) and a point \(Q=(-1,0,0)\) on the plane named.
  - Dot product \(7\) and length \(\sqrt{3}\) computed.
  - Distance \(7/\sqrt{3}\) stated.
verification:
  checks:
    - expr: '(-1) + 0 + 0'
      expected: "-1"
    - expr: '(2 - (-1), 2 - 0, 2 - 0)'
      expected: "(3, 2, 2)"
    - expr: 'Abs(3*1 + 2*1 + 2*1)/sqrt(1**2 + 1**2 + 1**2)'
      expected: "7/sqrt(3)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-20
number: "12.5.20"
tier: standard
topics:
  - planes
  - distance
statement: |
  Find the distance from \((2,-1,-1)\) to the plane \(2x-3y+z=2\).
solution: |
  A normal is \(\mathbf{n}=\langle 2,-3,1\rangle\). Setting \(y=0\) and \(z=0\) gives \(x=1\), so \(Q=(1,0,0)\) lies on the plane, because \(2\cdot 1=2\).

  With \(P=(2,-1,-1)\), the vector and dot product are
  \[
  \begin{aligned}
  \overrightarrow{QP}&=\langle 2-1,\,-1-0,\,-1-0\rangle\\
  &=\langle 1,-1,-1\rangle,\\
  \overrightarrow{QP}\cdot\mathbf{n}&=2+3-1\\
  &=4,\\
  \lvert\mathbf{n}\rvert&=\sqrt{4+9+1}=\sqrt{14}.
  \end{aligned}
  \]
  The distance is \(\lvert 4\rvert/\sqrt{14}=4/\sqrt{14}\).
provenance: handout-answer
steps:
  - Normal \(\langle 2,-3,1\rangle\) and a point \(Q=(1,0,0)\) on the plane named.
  - Dot product \(4\) and length \(\sqrt{14}\) computed.
  - Distance \(4/\sqrt{14}\) stated.
verification:
  checks:
    - expr: '2*1 - 3*0 + 0'
      expected: "2"
    - expr: '(2 - 1, -1 - 0, -1 - 0)'
      expected: "(1, -1, -1)"
    - expr: 'Abs(1*2 + (-1)*(-3) + (-1)*1)/sqrt(2**2 + (-3)**2 + 1**2)'
      expected: "4/sqrt(14)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-21
number: "12.5.21"
tier: standard
topics:
  - lines
  - distance
statement: |
  Find the distance from \((2,-1,1)\) to the line \(\langle 2,2,0\rangle+t\langle 1,2,3\rangle\).
solution: |
  A point on the line is \(Q=(2,2,0)\), at \(t=0\). The direction is \(\mathbf{A}=\langle 1,2,3\rangle\). With \(P=(2,-1,1)\),
  \[
  \overrightarrow{QP}=\langle 0,-3,1\rangle.
  \]
  The cross product \(\overrightarrow{QP}\times\mathbf{A}\) has components
  \[
  \begin{aligned}
  (-3)\cdot 3-1\cdot 2&=-11,\\
  1\cdot 1-0\cdot 3&=1,\\
  0\cdot 2-(-3)\cdot 1&=3.
  \end{aligned}
  \]
  The cross product is \(\langle -11,1,3\rangle\). The sum of the squares of its components is \(121+1+9=131\), so its length is \(\sqrt{131}\). The sum of the squares of the components of \(\mathbf{A}\) is \(1+4+9=14\), so \(\lvert\mathbf{A}\rvert=\sqrt{14}\).

  The distance is \(\sqrt{131}/\sqrt{14}\).
provenance: handout-answer
steps:
  - Point \(Q\), direction \(\mathbf{A}\) and \(\overrightarrow{QP}=\langle 0,-3,1\rangle\) named.
  - Cross product \(\langle -11,1,3\rangle\) computed.
  - Lengths divided, and the distance \(\sqrt{131}/\sqrt{14}\) stated.
verification:
  checks:
    - expr: '(2 - 2, -1 - 2, 1 - 0)'
      expected: "(0, -3, 1)"
    - expr: '((-3)*3 - 1*2, 1*1 - 0*3, 0*2 - (-3)*1)'
      expected: "(-11, 1, 3)"
    - expr: 'sqrt((-11)**2 + 1**2 + 3**2)/sqrt(1**2 + 2**2 + 3**2)'
      expected: "sqrt(131)/sqrt(14)"
:::


::: exercise
id: l4-lines-planes.handout-12-5-22
number: "12.5.22"
tier: standard
topics:
  - lines
  - distance
statement: |
  Find the distance from \((1,0,1)\) to the line \(\langle 3,2,1\rangle+t\langle 2,-1,-2\rangle\).
solution: |
  A point on the line is \(Q=(3,2,1)\), at \(t=0\). The direction is \(\mathbf{A}=\langle 2,-1,-2\rangle\). With \(P=(1,0,1)\),
  \[
  \overrightarrow{QP}=\langle -2,-2,0\rangle.
  \]
  The cross product \(\overrightarrow{QP}\times\mathbf{A}\) has components
  \[
  \begin{aligned}
  (-2)\cdot(-2)-0\cdot(-1)&=4,\\
  0\cdot 2-(-2)\cdot(-2)&=-4,\\
  (-2)\cdot(-1)-(-2)\cdot 2&=6.
  \end{aligned}
  \]
  The cross product is \(\langle 4,-4,6\rangle\). The sum of the squares of its components is \(16+16+36=68\), so its length is \(\sqrt{68}\). The sum of the squares of the components of \(\mathbf{A}\) is \(4+1+4=9\), so \(\lvert\mathbf{A}\rvert=3\).

  The distance is \(\sqrt{68}/3=2\sqrt{17}/3\).
provenance: handout-answer
steps:
  - Point \(Q\), direction \(\mathbf{A}\) and \(\overrightarrow{QP}=\langle -2,-2,0\rangle\) named.
  - Cross product \(\langle 4,-4,6\rangle\) computed.
  - Lengths divided, and the distance \(\sqrt{68}/3\) stated.
verification:
  checks:
    - expr: '(1 - 3, 0 - 2, 1 - 1)'
      expected: "(-2, -2, 0)"
    - expr: '((-2)*(-2) - 0*(-1), 0*2 - (-2)*(-2), (-2)*(-1) - (-2)*2)'
      expected: "(4, -4, 6)"
    - expr: 'sqrt(4**2 + (-4)**2 + 6**2)/sqrt(2**2 + (-1)**2 + (-2)**2)'
      expected: "sqrt(68)/3"
:::


::: exercise
id: l4-lines-planes.handout-12-5-23
number: "12.5.23"
tier: standard
topics:
  - planes
statement: |
  Find the cosine of the angle between the planes \(x+y+z=2\) and \(x+2y+3z=8\).
solution: |
  The angle between two planes is the angle between their normals. The normals are \(\mathbf{n}_1=\langle 1,1,1\rangle\) and \(\mathbf{n}_2=\langle 1,2,3\rangle\). The dot product and lengths are
  \[
  \begin{aligned}
  \mathbf{n}_1\cdot\mathbf{n}_2&=1+2+3=6,\\
  \lvert\mathbf{n}_1\rvert&=\sqrt{3},\\
  \lvert\mathbf{n}_2\rvert&=\sqrt{1+4+9}=\sqrt{14}.
  \end{aligned}
  \]
  So
  \[
  \begin{aligned}
  \cos\theta&=\frac{6}{\sqrt{3}\sqrt{14}}\\
  &=\frac{6}{\sqrt{42}}\\
  &=\frac{6\sqrt{42}}{42}=\frac{\sqrt{42}}{7}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Normals \(\langle 1,1,1\rangle\) and \(\langle 1,2,3\rangle\) read off.
  - Dot product \(6\) and lengths \(\sqrt{3}\), \(\sqrt{14}\) computed.
  - Cosine \(\sqrt{42}/7\) stated.
verification:
  checks:
    - expr: '1*1 + 1*2 + 1*3'
      expected: "6"
    - expr: '(1*1 + 1*2 + 1*3)/(sqrt(1**2 + 1**2 + 1**2)*sqrt(1**2 + 2**2 + 3**2))'
      expected: "sqrt(42)/7"
:::


::: exercise
id: l4-lines-planes.handout-12-5-24
number: "12.5.24"
tier: standard
topics:
  - planes
statement: |
  Find the cosine of the angle between the planes \(x-y+2z=2\) and \(3x-2y+z=5\).
solution: |
  The angle between two planes is the angle between their normals. The normals are \(\mathbf{n}_1=\langle 1,-1,2\rangle\) and \(\mathbf{n}_2=\langle 3,-2,1\rangle\). The dot product and lengths are
  \[
  \begin{aligned}
  \mathbf{n}_1\cdot\mathbf{n}_2&=3+2+2=7,\\
  \lvert\mathbf{n}_1\rvert&=\sqrt{1+1+4}=\sqrt{6},\\
  \lvert\mathbf{n}_2\rvert&=\sqrt{9+4+1}=\sqrt{14}.
  \end{aligned}
  \]
  So
  \[
  \begin{aligned}
  \cos\theta&=\frac{7}{\sqrt{6}\sqrt{14}}\\
  &=\frac{7}{\sqrt{84}}=\frac{7}{2\sqrt{21}}\\
  &=\frac{7\sqrt{21}}{42}=\frac{\sqrt{21}}{6}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Normals \(\langle 1,-1,2\rangle\) and \(\langle 3,-2,1\rangle\) read off.
  - Dot product \(7\) and lengths \(\sqrt{6}\), \(\sqrt{14}\) computed.
  - Cosine \(\sqrt{21}/6\) stated.
verification:
  checks:
    - expr: '1*3 + (-1)*(-2) + 2*1'
      expected: "7"
    - expr: '(1*3 + (-1)*(-2) + 2*1)/(sqrt(1**2 + (-1)**2 + 2**2)*sqrt(3**2 + (-2)**2 + 1**2))'
      expected: "sqrt(21)/6"
:::
