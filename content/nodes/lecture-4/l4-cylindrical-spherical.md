---
id: l4-cylindrical-spherical
lecture: 4
order: 4
title: Cylindrical and spherical coordinates
prerequisites: [l4-coordinates-vectors, l1-trigonometry]
sources:
  - { source: handout, section: "12.6", page: 323 }
examWeight: medium
examWeightNote: These coordinates set up the cylindrical and spherical integrals of lecture 8, which appear on every recent final. Lecture 4 skipped this paragraph, and the professor said to read it before it is used.
notation: |
  Cylindrical coordinates are written \((r, \theta, z)\). The coordinates \(r\) and \(\theta\) are polar coordinates in the \(xy\)-plane. The coordinate \(z\) is the signed height. Spherical coordinates are written \((\rho, \theta, \phi)\). The coordinate \(\rho\) is the signed distance from the origin. The angle \(\theta\) is the same angle as in cylindrical coordinates. The angle \(\phi\) is measured from the positive \(z\)-axis. Some texts swap \(\phi\) and \(\theta\).
optional: true
taught: handout
status: reviewed
---

::: section
title: Polar and cylindrical coordinates
:::

::: formal-statement
kind: definition
title: Polar coordinates
source: { source: handout, section: "12.6", page: 323 }
text: |
  **Polar coordinates** identify a point in the plane by a pair \((r, \theta)\). The angle \(\theta\) is measured from the positive \(x\)-axis. The coordinate \(r\) is a signed distance from the origin along that direction.
:::

::: plain-explanation
text: |
  These angles are in radians. The sign of \(\theta\) sets the direction:

  - a positive value of \(\theta\) is measured counterclockwise from the positive \(x\)-axis,
  - a negative value of \(\theta\) is measured clockwise from the positive \(x\)-axis.

  A negative value of \(r\) places the point at distance \(|r|\) in the direction \(\theta + \pi\).
:::

::: formal-statement
kind: definition
title: Cylindrical coordinates
source: { source: handout, section: "12.6", page: 323 }
text: |
  **Cylindrical coordinates** of a point in space are \((r, \theta, z)\). The pair \((r, \theta)\) gives the polar coordinates of the projection on the \(xy\)-plane. The coordinate \(z\) is the signed height relative to that plane.
:::

::: plain-explanation
text: |
  The sign of \(z\) sets the side of the \(xy\)-plane:

  - when \(z > 0\), the point is \(z\) units above the \(xy\)-plane,
  - when \(z < 0\), the point is \(|z|\) units below the \(xy\)-plane.

  Moving the point parallel to the \(z\)-axis changes \(z\). The coordinates \(r\) and \(\theta\) stay fixed.
:::

::: visual
kind: cylindrical-region
caption: |
  Move the top height: the marked point on the unit cylinder \(r = 1\) moves with it, so \(z\) changes while \(r\) and \(\theta\) stay fixed and the readout keeps \(x = 0\) and \(y = 1\).
params:
  top: 5
:::

::: key-points
text: |
  - Polar coordinates \((r, \theta)\) give a point in the plane. The angle \(\theta\) is in radians and is measured from the positive \(x\)-axis, counterclockwise when \(\theta\) is positive and clockwise when it is negative.
  - A negative \(r\) places the point at distance \(|r|\) in the direction \(\theta + \pi\).
  - Cylindrical coordinates \((r, \theta, z)\) combine the polar coordinates \((r, \theta)\) of the projection on the \(xy\)-plane with the signed height \(z\).
  - Moving the point parallel to the \(z\)-axis changes \(z\) and leaves \(r\) and \(\theta\) fixed.
:::

::: concept-question
id: l4-cylindrical-spherical.q-f13b6c2e
question: |
  Which cylindrical triple names the same point as \((2, \pi/3, 3)\)?
options:
  - text: |
      \((-2, \pi/3, 3)\)
  - text: |
      \((-2, \pi/3 + \pi, 3)\)
    correct: true
  - text: |
      \((2, \pi/3, -3)\)
  - text: |
      \((-2, \pi/3, -3)\)
explanation: |
  A negative radius reverses direction. The matching positive radius uses the angle shifted by \(\pi\). Take \(r = -2\) and \(\theta = \pi/3 + \pi\). Then
  \[
  \begin{aligned}
  x&=-2\cos(\pi/3+\pi)=1,\\
  y&=-2\sin(\pi/3+\pi)=\sqrt{3}.
  \end{aligned}
  \]
  The height is \(z = 3\). This is the point \((2, \pi/3, 3)\). For \((-2, \pi/3, 3)\),
  \[
  \begin{aligned}
  x&=-2\cos(\pi/3)=-1,\\
  y&=-2\sin(\pi/3)=-\sqrt{3}.
  \end{aligned}
  \]
  Changing the sign of \(z\) changes the height.
:::

::: section
title: Cylindrical and rectangular coordinates
:::

::: formal-statement
kind: method
title: Cylindrical and rectangular coordinates
source: { source: handout, section: "12.6", page: 324 }
text: |
  Cylindrical coordinates \((r, \theta, z)\) and **rectangular coordinates** \((x, y, z)\) satisfy
  \[
  x = r\cos\theta, \qquad y = r\sin\theta, \qquad z = z
  \]
  and
  \[
  r^2 = x^2 + y^2.
  \]
  When \(r > 0\) and \(x \neq 0\), \(\tan\theta = y/x\). The signs of \(x\) and \(y\) fix the quadrant of \(\theta\).
:::

::: plain-explanation
text: |
  To convert a rectangular equation:

  1. replace \(x\) by \(r\cos\theta\) and \(y\) by \(r\sin\theta\),
  2. leave \(z\) unchanged.

  When \(x^2 + y^2 > 0\), the equation \(r^2 = x^2 + y^2\) has a positive root and a negative root. The negative root describes the same point at angle \(\theta + \pi\). On the \(z\)-axis, \(r = 0\) and any angle \(\theta\) may be used.
:::

::: worked-example
title: Rectangular to cylindrical
problem: |
  Convert the rectangular point \((1, \sqrt{3}, 3)\) to cylindrical coordinates \((r, \theta, z)\) with \(r > 0\) and \(0 \le \theta < 2\pi\).
solution: |
  The squared radius in the \(xy\)-plane is
  \[
  r^2 = x^2 + y^2 = 1^2 + (\sqrt{3})^2 = 4,
  \]
  so the positive radius is \(r = 2\). Both \(x = 1\) and \(y = \sqrt{3}\) are positive, so \((x, y)\) lies in the first quadrant, where
  \[
  \tan\theta = y/x = \sqrt{3}.
  \]
  Thus \(\theta = \pi/3\). The height is the rectangular coordinate \(z = 3\). The cylindrical coordinates are \((2, \pi/3, 3)\).
:::

::: worked-example
title: Cylindrical to rectangular
problem: |
  Convert the cylindrical point \((2, \pi/3, 3)\) to rectangular coordinates.
solution: |
  The radius is \(r = 2\). The angle is \(\theta = \pi/3\). The height is \(z = 3\). Then
  \[
  \begin{aligned}
  x&=r\cos\theta=2\cos(\pi/3)=2 \cdot \frac{1}{2}=1,\\
  y&=r\sin\theta=2\sin(\pi/3)=2 \cdot \frac{\sqrt{3}}{2}=\sqrt{3}.
  \end{aligned}
  \]
  The rectangular point is \((1, \sqrt{3}, 3)\).
:::

::: worked-example
title: The cylinder \(x^2 + y^2 = 4\)
problem: |
  Write the surface \(x^2 + y^2 = 4\) in cylindrical coordinates.
solution: |
  Substitute \(x = r\cos\theta\) and \(y = r\sin\theta\). The left side is
  \[
  \begin{aligned}
  x^2+y^2&=r^2\cos^2\theta+r^2\sin^2\theta,\\
  &=r^2(\cos^2\theta+\sin^2\theta)=r^2.
  \end{aligned}
  \]
  The equation is \(r^2 = 4\). The solutions are \(r = 2\) and \(r = -2\).
:::

::: trap
text: |
  Start from the cylinder \(x^2 + y^2 = 4\). In cylindrical coordinates the left side is \(r^2\), so \(r^2 = 4\). The solutions are \(r = 2\) and \(r = -2\).

  - For \(r = 2\), the coordinates are \(x = 2\cos\theta\) and \(y = 2\sin\theta\). Then \(x^2 + y^2 = 4\cos^2\theta + 4\sin^2\theta = 4\).
  - For \(r = -2\), the coordinates are \(x = -2\cos\theta\) and \(y = -2\sin\theta\). Then \(x^2 + y^2 = 4\cos^2\theta + 4\sin^2\theta = 4\).

  Both equations describe the cylinder \(x^2 + y^2 = 4\).
:::

::: key-points
text: |
  - Cylindrical and rectangular coordinates satisfy \(x = r\cos\theta\), \(y = r\sin\theta\) and \(z = z\), together with \(r^2 = x^2 + y^2\).
  - When \(r > 0\) and \(x \neq 0\), \(\tan\theta = y/x\), and the signs of \(x\) and \(y\) fix the quadrant of \(\theta\).
  - To convert a rectangular equation, replace \(x\) by \(r\cos\theta\) and \(y\) by \(r\sin\theta\), and leave \(z\) unchanged. When \(x^2 + y^2 > 0\), the equation \(r^2 = x^2 + y^2\) has a positive root and a negative root, and the negative root describes the same point at angle \(\theta + \pi\).
  - The usual slip treats the root \(r = -2\) of \(r^2 = 4\) as a different surface from \(r = 2\). Both equations describe the cylinder \(x^2 + y^2 = 4\).
:::

::: exercise
id: l4-cylindrical-spherical.ex-rect-to-cyl
tier: basic
topics: [cylindrical-coordinates]
statement: |
  Find cylindrical coordinates \((r, \theta, z)\) of the rectangular point \((1, \sqrt{3}, 3)\), with \(r > 0\) and \(0 \le \theta < 2\pi\). Convert those coordinates back to \(x\) and \(y\).
solution: |
  The squared radius is
  \[
  r^2 = 1^2 + (\sqrt{3})^2 = 4,
  \]
  so the positive radius is \(r = 2\). The coordinates \(x = 1\) and \(y = \sqrt{3}\) are both positive. Then
  \[
  \tan\theta = y/x = \sqrt{3},
  \]
  so \(\theta = \pi/3\). The height is \(z = 3\). The cylindrical coordinates are \((2, \pi/3, 3)\). Converting back,
  \[
  \begin{aligned}
  x&=2\cos(\pi/3)=1,\\
  y&=2\sin(\pi/3)=\sqrt{3}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - |
    The squared radius is \(r^2 = 4\), so \(r = 2\).
  - |
    The angle is \(\theta = \pi/3\), from the first quadrant and \(\tan\theta = \sqrt{3}\).
  - |
    The height is \(z = 3\).
  - |
    Converting back gives \(x = 1\) and \(y = \sqrt{3}\).
verification:
  checks:
    - expr: "sqrt(1**2 + sqrt(3)**2)"
      expected: "2"
    - expr: "atan2(sqrt(3), 1)"
      expected: "pi/3"
    - expr: "2*cos(pi/3)"
      expected: "1"
    - expr: "2*sin(pi/3)"
      expected: "sqrt(3)"
:::

::: section
title: Spherical coordinates
:::

::: formal-statement
kind: definition
title: Spherical coordinates
source: { source: handout, section: "12.6", page: 325 }
text: |
  **Spherical coordinates** of a point are \((\rho, \theta, \phi)\), with:

  - the coordinate \(\rho\) is the signed distance from the origin,
  - the angle \(\theta\) is measured from the positive \(x\)-axis,
  - the angle \(\phi\) is measured from the positive \(z\)-axis.
:::

::: plain-explanation
text: |
  With \(\rho > 0\), the angle \(\phi\) places the point as follows:

  - \(\phi = 0\) lies on the positive \(z\)-axis,
  - \(\phi = \pi/2\) lies in the \(xy\)-plane,
  - \(\phi = \pi\) lies on the negative \(z\)-axis.

  If the angles are held fixed, changing the sign of \(\rho\) sends \((x, y, z)\) to \((-x, -y, -z)\).
:::

::: visual
kind: spherical-region
caption: |
  Move the outer \(\rho\) of this model region: the flat disk lies where \(\phi = \pi/2\), the cone lies where \(\phi = \pi/4\), and the readout names \(\phi\) as the angle from the positive \(z\)-axis.
params:
  rho: 1
:::

::: key-points
text: |
  - Spherical coordinates \((\rho, \theta, \phi)\) have \(\rho\) as the signed distance from the origin, \(\theta\) measured from the positive \(x\)-axis and \(\phi\) measured from the positive \(z\)-axis.
  - With \(\rho > 0\), the angle \(\phi = 0\) lies on the positive \(z\)-axis, \(\phi = \pi/2\) lies in the \(xy\)-plane and \(\phi = \pi\) lies on the negative \(z\)-axis.
  - If the angles are held fixed, changing the sign of \(\rho\) sends \((x, y, z)\) to \((-x, -y, -z)\).
:::

::: concept-question
id: l4-cylindrical-spherical.q-fd517257
question: |
  In spherical coordinates \((\rho, \theta, \phi)\), from which direction is \(\phi\) measured?
options:
  - text: |
      From the positive \(x\)-axis.
  - text: |
      From the positive \(z\)-axis.
    correct: true
  - text: |
      From the positive \(y\)-axis.
  - text: |
      From the \(xy\)-plane toward the positive \(z\)-axis.
explanation: |
  The angle \(\phi\) is measured from the positive \(z\)-axis. The angle \(\theta\) is measured from the positive \(x\)-axis. With \(\rho > 0\), the positive \(z\)-axis has \(\phi = 0\). The \(xy\)-plane has \(\phi = \pi/2\).
:::

::: section
title: Spherical and rectangular coordinates
:::

::: formal-statement
kind: method
title: Spherical and rectangular coordinates
source: { source: handout, section: "12.6", page: 326 }
text: |
  Spherical coordinates \((\rho, \theta, \phi)\) and rectangular coordinates \((x, y, z)\) satisfy
  \[
  \begin{aligned}
  x&=\rho\sin\phi\cos\theta,\\
  y&=\rho\sin\phi\sin\theta,\\
  z&=\rho\cos\phi.
  \end{aligned}
  \]
  The cylindrical radius and height are
  \[
  r = \rho\sin\phi, \qquad z = \rho\cos\phi.
  \]
  In the other direction,
  \[
  \rho^2 = x^2 + y^2 + z^2,
  \]
  and \(\cos\phi = z/\rho\) when \(\rho \neq 0\).
:::

::: plain-explanation
text: |
  Substitute these formulas for \(x\), \(y\), and \(z\) into a rectangular equation. For a point with \(\rho > 0\), take \(\rho = \sqrt{x^2 + y^2 + z^2}\). The formula \(\cos\phi = z/\rho\) requires \(\rho \neq 0\). The origin is the point \(\rho = 0\).
:::

::: visual
kind: quadric
caption: |
  The sphere \(\rho = 2\) is printed as \(x^2/4 + y^2/4 + z^2/4 = 1\), and moving the slicing plane away from \(z = 0\) shrinks the circular cut from radius \(2\).
params:
  surface: sphere
  a: 2
  b: 2
  c: 2
  axis: z
  slice: 0
:::

::: tip
text: |
  When \(z \neq 0\), the relations \(r = \rho\sin\phi\) and \(z = \rho\cos\phi\) give \(\tan\phi = r/z\).
:::

::: worked-example
title: Rectangular to spherical
problem: |
  Convert the rectangular point \((1, \sqrt{3}, 3)\) to spherical coordinates \((\rho, \theta, \phi)\) with \(\rho > 0\), \(0 \le \theta < 2\pi\), and \(0 \le \phi \le \pi\).
solution: |
  The squared distance from the origin is
  \[
  \rho^2 = 1^2 + (\sqrt{3})^2 + 3^2 = 13,
  \]
  so \(\rho = \sqrt{13}\). The angle \(\theta\) agrees with the cylindrical angle of \((1, \sqrt{3})\), so \(\theta = \pi/3\). The cylindrical radius is \(r = \sqrt{1^2 + (\sqrt{3})^2} = 2\), and the height is \(z = 3\). Then
  \[
  \tan\phi = r/z = 2/3.
  \]
  Both \(z\) and \(r\) are positive, so \(0 < \phi < \pi/2\). Therefore \(\phi = \arctan(2/3)\). The same angle satisfies
  \[
  \cos\phi = z/\rho = 3/\sqrt{13}.
  \]
  The spherical coordinates are \(\left(\sqrt{13}, \pi/3, \arctan(2/3)\right)\).
:::

::: guided-example
title: A sphere in spherical coordinates
problem: |
  Rewrite the sphere \(x^2 + y^2 + z^2 = 4\) in spherical coordinates, and find both values of \(\rho\).
steps:
  - |
    Replace the rectangular coordinates by \(x = \rho\sin\phi\cos\theta\), \(y = \rho\sin\phi\sin\theta\), and \(z = \rho\cos\phi\).
  - |
    The sum of squares is
    \[
    \begin{aligned}
    x^2+y^2+z^2&=\rho^2\sin^2\phi\cos^2\theta\\
    &\quad+\rho^2\sin^2\phi\sin^2\theta\\
    &\quad+\rho^2\cos^2\phi.
    \end{aligned}
    \]
  - |
    The first two terms factor as
    \[
    \begin{aligned}
    &\rho^2\sin^2\phi\cos^2\theta\\
    &\quad+\rho^2\sin^2\phi\sin^2\theta\\
    &=\rho^2\sin^2\phi(\cos^2\theta+\sin^2\theta)\\
    &=\rho^2\sin^2\phi.
    \end{aligned}
    \]
    The left side is then \(\rho^2\sin^2\phi + \rho^2\cos^2\phi\).
  - |
    Factor
    \[
    \rho^2(\sin^2\phi+\cos^2\phi)=\rho^2.
    \]
    The equation is \(\rho^2 = 4\).
  - |
    The solutions are \(\rho = 2\) and \(\rho = -2\). For either value,
    \[
    x^2+y^2+z^2=\rho^2=4.
    \]
    The right side is \(2^2\), so both equations describe the sphere of radius \(2\).
:::

::: going-deeper
title: Where the coordinates are not unique
text: |
  A point has many cylindrical and spherical descriptions. The angle \(\theta\) can be changed by any multiple of \(2\pi\). Two cases need care:

  - On the \(z\)-axis the radius \(r\) is \(0\) and \(\theta\) can be anything.
  - At the origin the spherical radius \(\rho\) is \(0\) and both angles can be anything.

  Conversions from rectangular coordinates need a rule to pick one description, and formulas that divide by \(r\) or \(\rho\) fail at those points.
:::

::: key-points
text: |
  - Spherical and rectangular coordinates satisfy \(x = \rho\sin\phi\cos\theta\), \(y = \rho\sin\phi\sin\theta\) and \(z = \rho\cos\phi\). The cylindrical radius and height are \(r = \rho\sin\phi\) and \(z = \rho\cos\phi\).
  - In the other direction, \(\rho^2 = x^2 + y^2 + z^2\), and \(\cos\phi = z/\rho\) when \(\rho \neq 0\). When \(z \neq 0\), \(\tan\phi = r/z\).
  - Substituting these formulas into \(x^2 + y^2 + z^2 = 4\) gives \(\rho^2 = 4\). Both \(\rho = 2\) and \(\rho = -2\) describe the sphere of radius \(2\).
:::

::: concept-question
id: l4-cylindrical-spherical.q-135178e9
question: |
  The rectangular point \((1, \sqrt{3}, 3)\) has cylindrical radius \(r = 2\) and height \(z = 3\). Which value is \(\phi\), taking \(0 < \phi < \pi/2\)?
options:
  - text: |
      \(\pi/3\)
  - text: |
      \(\arctan(2/3)\)
    correct: true
  - text: |
      \(\arctan(3/2)\)
  - text: |
      \(\sqrt{13}\)
explanation: |
  The cylindrical radius is \(r = 2\) and the height is \(z = 3\), so
  \[
  \tan\phi = r/z = 2/3.
  \]
  With \(z > 0\), \(\phi = \arctan(2/3)\). The value \(\pi/3\) is the angle \(\theta\). The value \(\sqrt{13}\) is the spherical radius \(\rho\). The value \(\arctan(3/2)\) has tangent \(z/r\).
:::

::: concept-question
id: l4-cylindrical-spherical.q-2d736697
question: |
  For which points does \(\cos\phi = z/\rho\) determine \(\phi\)?
options:
  - text: |
      Every point in space, including the origin.
  - text: |
      Every point with \(\rho \neq 0\).
    correct: true
  - text: |
      Every point with \(\phi = 0\).
  - text: |
      Every point in the \(xy\)-plane.
explanation: |
  The formula \(\cos\phi = z/\rho\) divides by \(\rho\). It applies when \(\rho \neq 0\). At the origin, \(\rho = 0\).
:::

::: exercise
id: l4-cylindrical-spherical.ex-rect-to-sph
tier: standard
topics: [spherical-coordinates]
statement: |
  Find spherical coordinates \((\rho, \theta, \phi)\) of the rectangular point \((1, \sqrt{3}, 3)\), with \(\rho > 0\), \(0 \le \theta < 2\pi\), and \(0 \le \phi \le \pi\). Convert those coordinates back to \((x, y, z)\).
solution: |
  The squared distance from the origin is
  \[
  \rho^2 = 1^2 + (\sqrt{3})^2 + 3^2 = 13,
  \]
  so \(\rho = \sqrt{13}\). The angle \(\theta\) is the cylindrical angle \(\pi/3\). The cylindrical radius is \(r = 2\) and the height is \(z = 3\), so
  \[
  \tan\phi = r/z = 2/3.
  \]
  The height \(z\) is positive, so \(0 < \phi < \pi/2\). Therefore \(\phi = \arctan(2/3)\). Then
  \[
  \begin{aligned}
  \cos\phi &= z/\rho = 3/\sqrt{13},\\
  \sin\phi &= r/\rho = 2/\sqrt{13}.
  \end{aligned}
  \]
  Converting back,
  \[
  \begin{aligned}
  x&=\sqrt{13}\cdot\frac{2}{\sqrt{13}}\\
  &\qquad\cdot\cos(\pi/3)=1,\\
  y&=\sqrt{13}\cdot\frac{2}{\sqrt{13}}\\
  &\qquad\cdot\sin(\pi/3)=\sqrt{3},\\
  z&=\sqrt{13}\cdot\frac{3}{\sqrt{13}}=3.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - |
    The distance is \(\rho = \sqrt{13}\).
  - |
    The angle \(\theta\) is \(\pi/3\).
  - |
    The angle \(\phi\) is \(\arctan(2/3)\), with \(\cos\phi = 3/\sqrt{13}\).
  - |
    Converting back recovers \(x = 1\), \(y = \sqrt{3}\), and \(z = 3\).
verification:
  checks:
    - expr: "sqrt(1**2 + sqrt(3)**2 + 3**2)"
      expected: "sqrt(13)"
    - expr: "atan2(sqrt(3), 1)"
      expected: "pi/3"
    - expr: "cos(atan(Rational(2, 3)))"
      expected: "3/sqrt(13)"
    - expr: "sin(atan(Rational(2, 3)))"
      expected: "2/sqrt(13)"
    - expr: "sqrt(13)*sin(atan(Rational(2, 3)))*cos(pi/3)"
      expected: "1"
    - expr: "sqrt(13)*sin(atan(Rational(2, 3)))*sin(pi/3)"
      expected: "sqrt(3)"
    - expr: "sqrt(13)*cos(atan(Rational(2, 3)))"
      expected: "3"
:::

::: exercise
id: l4-cylindrical-spherical.ex-cylinder
tier: exam
topics: [cylindrical-coordinates, spherical-coordinates]
statement: |
  Write the cylinder \(x^2 + y^2 = 4\) in cylindrical coordinates and in spherical coordinates. Include both signs in each description.
solution: |
  In cylindrical coordinates, \(x^2 + y^2 = r^2\), so the equation is \(r^2 = 4\). The solutions are \(r = 2\) and \(r = -2\).

  - For \(r = 2\), \(x^2 + y^2 = 4\cos^2\theta + 4\sin^2\theta = 4\).
  - For \(r = -2\), \(x = -2\cos\theta\) and \(y = -2\sin\theta\), so \(x^2 + y^2 = 4\cos^2\theta + 4\sin^2\theta = 4\).

  In spherical coordinates, \(x^2 + y^2 = \rho^2\sin^2\phi\), so the equation is \(\rho^2\sin^2\phi = 4\). Equivalently, \(\rho\sin\phi = 2\) or \(\rho\sin\phi = -2\). If \(\sin\phi \neq 0\), then \(\rho = 2/\sin\phi\) or \(\rho = -2/\sin\phi\). If \(\sin\phi = 0\), then \(x^2 + y^2 = 0\). Points on the cylinder satisfy \(x^2 + y^2 = 4\).
provenance: written-for-site
steps:
  - |
    In cylindrical coordinates the equation is \(r^2 = 4\), so \(r = 2\) or \(r = -2\).
  - |
    Both signs satisfy \(x^2 + y^2 = 4\).
  - |
    In spherical coordinates the equation is \(\rho^2\sin^2\phi = 4\), so \(\rho\sin\phi = 2\) or \(\rho\sin\phi = -2\).
  - |
    When \(\sin\phi \neq 0\), \(\rho = 2/\sin\phi\) or \(\rho = -2/\sin\phi\).
verification:
  checks:
    - expr: "(r*cos(theta))**2 + (r*sin(theta))**2"
      expected: "r**2"
    - expr: "(2*cos(theta))**2 + (2*sin(theta))**2"
      expected: "4"
    - expr: "((-2)*cos(theta))**2 + ((-2)*sin(theta))**2"
      expected: "4"
    - expr: "(rho*sin(phi)*cos(theta))**2 + (rho*sin(phi)*sin(theta))**2"
      expected: "rho**2 * sin(phi)**2"
    - expr: "(2/sin(phi))**2 * sin(phi)**2"
      expected: "4"
    - expr: "((-2)/sin(phi))**2 * sin(phi)**2"
      expected: "4"
:::

::: sheet-item
id: l4-cylindrical-spherical.sheet-cylindrical
category: formula
text: |
  Cylindrical coordinates \((r, \theta, z)\) satisfy
  \[
  x = r\cos\theta, \qquad y = r\sin\theta, \qquad z = z,
  \]
  together with \(r^2 = x^2 + y^2\). For \(r > 0\), \(\theta\) is the polar angle of \((x, y)\).
:::

::: sheet-item
id: l4-cylindrical-spherical.sheet-spherical
category: formula
text: |
  In spherical coordinates \((\rho, \theta, \phi)\), the angle \(\phi\) is measured from the positive \(z\)-axis. The conversions are
  \[
  \begin{aligned}
  x&=\rho\sin\phi\cos\theta,\\
  y&=\rho\sin\phi\sin\theta,\\
  z&=\rho\cos\phi,
  \end{aligned}
  \]
  together with \(\rho^2 = x^2 + y^2 + z^2\) and \(\cos\phi = z/\rho\) when \(\rho \neq 0\).
:::

::: sheet-item
id: l4-cylindrical-spherical.sheet-surfaces
category: recognition
text: |
  If \(a > 0\), then \(r = a\) and \(r = -a\) describe the cylinder \(x^2 + y^2 = a^2\). The equations \(\rho = a\) and \(\rho = -a\) describe the sphere \(x^2 + y^2 + z^2 = a^2\).
:::

::: exercise
id: l4-cylindrical-spherical.ex-cyl-sph-second-quadrant
tier: standard
topics: [cylindrical-coordinates, spherical-coordinates]
statement: |
  Let \(P\) be the rectangular point \((-1, 1, \sqrt{2})\).

  1. Find cylindrical coordinates \((r, \theta, z)\) of \(P\) with \(r > 0\) and \(0 \le \theta < 2\pi\).
  2. Find spherical coordinates \((\rho, \theta, \phi)\) of \(P\) with \(\rho > 0\), \(0 \le \theta < 2\pi\) and \(0 \le \phi \le \pi\).
  3. Give a second cylindrical description of \(P\) with \(r < 0\) and \(-\pi < \theta < 0\).
solution: |
  **Cylindrical coordinates.** The squared radius is
  \[
  r^2 = x^2 + y^2 = (-1)^2 + 1^2 = 2,
  \]
  so \(r = \sqrt{2}\). The height is \(z = \sqrt{2}\). The ratio \(y/x = -1\) gives
  \[
  \tan\theta = -1.
  \]
  Here \(x < 0\) and \(y > 0\), so \((x, y)\) lies in the second quadrant, and \(\theta = 3\pi/4\). The value \(-\pi/4\) from \(\arctan(-1)\) points into the fourth quadrant, so it is the wrong angle. The cylindrical coordinates are \((\sqrt{2}, 3\pi/4, \sqrt{2})\).

  **Spherical coordinates.** The squared distance from the origin is
  \[
  \rho^2 = (-1)^2 + 1^2 + (\sqrt{2})^2 = 4,
  \]
  so \(\rho = 2\). The angle \(\theta\) is the cylindrical angle \(3\pi/4\). The cylindrical radius is \(r = \sqrt{2}\) and the height is \(z = \sqrt{2}\), so
  \[
  \tan\phi = r/z = 1.
  \]
  The height is positive, so \(0 < \phi < \pi/2\) and \(\phi = \pi/4\). Check:
  \[
  \cos\phi = z/\rho = \sqrt{2}/2.
  \]
  The spherical coordinates are \((2, 3\pi/4, \pi/4)\). Converting back,
  \[
  \begin{aligned}
  x&=2\sin(\pi/4)\cos(3\pi/4)\\
  &=2\cdot\frac{\sqrt{2}}{2}\cdot\left(-\frac{\sqrt{2}}{2}\right)=-1,\\
  y&=2\sin(\pi/4)\sin(3\pi/4)=1,\\
  z&=2\cos(\pi/4)=\sqrt{2}.
  \end{aligned}
  \]

  **A negative radius.** A negative radius places the point at distance \(|r|\) in the direction \(\theta + \pi\). Take \(r = -\sqrt{2}\) and the angle \(3\pi/4 - \pi = -\pi/4\), which lies in \((-\pi, 0)\). Then
  \[
  \begin{aligned}
  x&=-\sqrt{2}\cos(-\pi/4)\\
  &=-\sqrt{2}\cdot\frac{\sqrt{2}}{2}=-1,\\
  y&=-\sqrt{2}\sin(-\pi/4)=1.
  \end{aligned}
  \]
  The height stays \(\sqrt{2}\). The second description is \((-\sqrt{2}, -\pi/4, \sqrt{2})\).
provenance: written-for-site
steps:
  - |
    Radius \(r = \sqrt{2}\) and the angle \(\theta = 3\pi/4\), from the second quadrant.
  - |
    Distance \(\rho = 2\).
  - |
    Angle \(\phi = \pi/4\), from \(\tan\phi = r/z = 1\).
  - |
    Negative-radius description \((-\sqrt{2}, -\pi/4, \sqrt{2})\), checked by converting back.
verification:
  checks:
    - expr: "sqrt((-1)**2 + 1**2)"
      expected: "sqrt(2)"
    - expr: "sqrt(2)*cos(3*pi/4)"
      expected: "-1"
    - expr: "sqrt(2)*sin(3*pi/4)"
      expected: "1"
    - expr: "sqrt((-1)**2 + 1**2 + sqrt(2)**2)"
      expected: "2"
    - expr: "acos(sqrt(2)/2)"
      expected: "pi/4"
    - expr: "2*sin(pi/4)*cos(3*pi/4)"
      expected: "-1"
    - expr: "2*sin(pi/4)*sin(3*pi/4)"
      expected: "1"
    - expr: "2*cos(pi/4)"
      expected: "sqrt(2)"
    - expr: "-sqrt(2)*cos(-pi/4)"
      expected: "-1"
    - expr: "-sqrt(2)*sin(-pi/4)"
      expected: "1"
:::

::: exercise
id: l4-cylindrical-spherical.ex-cyl-sph-paraboloid
tier: exam
topics: [cylindrical-coordinates, spherical-coordinates]
statement: |
  Write the paraboloid \(z = x^2 + y^2\) in cylindrical coordinates and in spherical coordinates. In spherical coordinates take \(\rho \ge 0\) and \(0 \le \phi \le \pi\), solve for \(\rho\) in terms of \(\phi\), and say which values of \(\phi\) occur. Check your answer on the point \((1, 0, 1)\).
solution: |
  **Cylindrical coordinates.** Substitute \(x = r\cos\theta\) and \(y = r\sin\theta\). Then
  \[
  \begin{aligned}
  x^2+y^2&=r^2\cos^2\theta+r^2\sin^2\theta,\\
  &=r^2,
  \end{aligned}
  \]
  and \(z\) stays \(z\). The equation is \(z = r^2\).

  **Spherical coordinates.** Substitute \(x = \rho\sin\phi\cos\theta\), \(y = \rho\sin\phi\sin\theta\) and \(z = \rho\cos\phi\). Then \(x^2 + y^2 = \rho^2\sin^2\phi\), so the equation is
  \[
  \rho\cos\phi = \rho^2\sin^2\phi.
  \]
  Move everything to one side and factor out \(\rho\):
  \[
  \rho\left(\cos\phi - \rho\sin^2\phi\right) = 0.
  \]
  The factor \(\rho = 0\) gives the origin. The other factor gives \(\rho\sin^2\phi = \cos\phi\). Dividing by \(\sin^2\phi\) requires \(\sin\phi \neq 0\). If \(\sin\phi = 0\), the equation reads \(\cos\phi = 0\), which is false for \(\phi = 0\) and \(\phi = \pi\). So no point of the surface other than the origin lies on the \(z\)-axis, and for the other points
  \[
  \rho = \frac{\cos\phi}{\sin^2\phi}.
  \]
  Since \(\rho \ge 0\) and \(\sin^2\phi > 0\), the angle must satisfy \(\cos\phi \ge 0\), that is \(0 < \phi \le \pi/2\). At \(\phi = \pi/2\) the formula gives \(\rho = 0\), so the origin belongs to this description and the factor \(\rho = 0\) adds nothing new. The surface is \(\rho = \cos\phi/\sin^2\phi\) with \(0 < \phi \le \pi/2\).

  **Check.** The point \((1, 0, 1)\) satisfies \(z = x^2 + y^2\), because \(1 = 1\). Its cylindrical radius is \(r = 1\) and \(z = 1 = r^2\). Its distance from the origin is \(\rho = \sqrt{2}\), and \(\cos\phi = z/\rho = \sqrt{2}/2\), so \(\phi = \pi/4\). The formula gives
  \[
  \begin{aligned}
  \cos(\pi/4)/\sin^2(\pi/4)&=(\sqrt{2}/2)/(1/2)\\
  &=\sqrt{2},
  \end{aligned}
  \]
  which equals \(\rho\).
provenance: written-for-site
steps:
  - |
    Cylindrical equation \(z = r^2\).
  - |
    Spherical equation \(\rho\cos\phi = \rho^2\sin^2\phi\), factored as \(\rho(\cos\phi - \rho\sin^2\phi) = 0\).
  - |
    Solution \(\rho = \cos\phi/\sin^2\phi\), with the case \(\sin\phi = 0\) excluded and the origin kept.
  - |
    Range \(0 < \phi \le \pi/2\), checked on \((1, 0, 1)\).
verification:
  checks:
    - expr: "(r*cos(theta))**2 + (r*sin(theta))**2"
      expected: "r**2"
    - expr: "(rho*sin(phi)*cos(theta))**2 + (rho*sin(phi)*sin(theta))**2"
      expected: "rho**2*sin(phi)**2"
    - expr: "(rho*cos(phi) - rho**2*sin(phi)**2) - rho*(cos(phi) - rho*sin(phi)**2)"
      expected: "0"
    - expr: "simplify((rho*cos(phi) - (rho*sin(phi))**2).subs(rho, cos(phi)/sin(phi)**2))"
      expected: "0"
    - expr: "cos(pi/4)/sin(pi/4)**2"
      expected: "sqrt(2)"
    - expr: "sqrt(2)*cos(pi/4) - (sqrt(2)*sin(pi/4))**2"
      expected: "0"
    - expr: "cos(pi/2)/sin(pi/2)**2"
      expected: "0"
:::
