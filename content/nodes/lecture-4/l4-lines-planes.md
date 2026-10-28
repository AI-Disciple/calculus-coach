---
id: l4-lines-planes
lecture: 4
order: 3
title: Lines and planes in space
prerequisites: [l4-dot-cross-product]
sources:
  - { source: handout, section: "12.5", page: 317 }
examWeight: low
examWeightNote: Supporting geometry. Tangent planes reuse the plane equation.
notation: |
  A point is \((x, y, z)\). Its position vector is \(\langle x, y, z \rangle\). The vector from a point \(Q\) to a point \(P\) is \(\overrightarrow{QP}\). A normal to a plane is \(\mathbf{n}\). A direction vector of a line is \(\mathbf{A}\). The parameter on a line is the real number \(t\).
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
  Let \(L\) be the line through \(A = (2, 4, 5)\) and \(B = (6, 1, -3)\).

  1. Write parametric equations of \(L\) with base point \(A\).
  2. Find the point where \(L\) meets the plane \(2x - y + z = 2\).
  3. Find the equation of the plane that contains \(L\) and the origin.
solution: |
  **Parametric equations.** The direction is \(\overrightarrow{AB} = \langle 6 - 2, 1 - 4, -3 - 5\rangle = \langle 4, -3, -8\rangle\). With base point \(A\), the line is
  \[
  \begin{aligned}
  x&=2+4t,\\
  y&=4-3t,\\
  z&=5-8t.
  \end{aligned}
  \]

  **Intersection with the plane.** Substitute the line into \(2x - y + z\):
  \[
  \begin{aligned}
  &2(2 + 4t) - (4 - 3t) + (5 - 8t)\\
  &= 4 + 8t - 4 + 3t + 5 - 8t\\
  &= 5 + 3t.
  \end{aligned}
  \]
  The equation \(5 + 3t = 2\) gives \(t = -1\). The point is \((2 - 4, 4 + 3, 5 + 8) = (-2, 7, 13)\). Check: \(2\cdot(-2) - 7 + 13 = 2\).

  **Plane through the line and the origin.** The plane contains the vector \(\overrightarrow{OA} = \langle 2, 4, 5\rangle\) and the direction \(\langle 4, -3, -8\rangle\). Their cross product is a normal:
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=4\cdot(-8)-5\cdot(-3)\\
  &=-17,\\
  \mathbf{j}\text{ component}&=-\bigl(2\cdot(-8)-5\cdot 4\bigr)\\
  &=36,\\
  \mathbf{k}\text{ component}&=2\cdot(-3)-4\cdot 4\\
  &=-22.
  \end{aligned}
  \]
  Multiplying by \(-1\) gives the normal \(\langle 17, -36, 22\rangle\). The plane passes through the origin, so its equation is \(17x - 36y + 22z = 0\). Check with \(B\): \(17\cdot 6 - 36\cdot 1 + 22\cdot(-3) = 102 - 36 - 66 = 0\).
provenance: written-for-site
steps:
  - |
    Direction \(\langle 4, -3, -8\rangle\) and the parametric equations.
  - |
    Parameter \(t = -1\) and the point \((-2, 7, 13)\).
  - |
    Normal \(\langle 17, -36, 22\rangle\) and the plane \(17x - 36y + 22z = 0\).
verification:
  checks:
    - expr: "(6 - 2, 1 - 4, -3 - 5)"
      expected: "(4, -3, -8)"
    - expr: "(2*(2 + 4*t) - (4 - 3*t) + (5 - 8*t)).subs(t, -1)"
      expected: "2"
    - expr: "(2 + 4*(-1), 4 - 3*(-1), 5 - 8*(-1))"
      expected: "(-2, 7, 13)"
    - expr: "(4*(-8) - 5*(-3), -(2*(-8) - 5*4), 2*(-3) - 4*4)"
      expected: "(-17, 36, -22)"
    - expr: "(17*6 - 36*1 + 22*(-3), 17*2 - 36*4 + 22*5)"
      expected: "(0, 0)"
:::
