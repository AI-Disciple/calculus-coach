---
id: l4-cylindrical-spherical
lecture: 4
order: 4
title: Cylindrical and spherical coordinates
prerequisites: [l4-coordinates-vectors, l1-trigonometry]
sources:
  - { source: handout, section: "12.6", page: 323 }
  - { source: handout, section: "12.1" }
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
  Find cylindrical coordinates \((r, \theta, z)\) of the rectangular point \((2, 2, -1)\), with \(r > 0\) and \(0 \le \theta < 2\pi\). Convert those coordinates back to \(x\) and \(y\).
solution: |
  The squared radius is
  \[
  r^2 = 2^2 + 2^2 = 8,
  \]
  so the positive radius is \(r = 2\sqrt{2}\). The coordinates \(x = 2\) and \(y = 2\) are both positive. Then
  \[
  \tan\theta = y/x = 1,
  \]
  so \(\theta = \pi/4\). The height is \(z = -1\). The cylindrical coordinates are \((2\sqrt{2}, \pi/4, -1)\). Converting back,
  \[
  \begin{aligned}
  x&=2\sqrt{2}\cos(\pi/4)=2\sqrt{2}\cdot\frac{\sqrt{2}}{2}=2,\
  y&=2\sqrt{2}\sin(\pi/4)=2\sqrt{2}\cdot\frac{\sqrt{2}}{2}=2.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - |
    The squared radius is \(r^2 = 8\), so \(r = 2\sqrt{2}\).
  - |
    The angle is \(\theta = \pi/4\), from the first quadrant and \(\tan\theta = 1\).
  - |
    The height is \(z = -1\).
  - |
    Converting back gives \(x = 2\) and \(y = 2\).
verification:
  checks:
    - expr: "sqrt(2**2 + 2**2)"
      expected: "2*sqrt(2)"
    - expr: "atan2(2, 2)"
      expected: "pi/4"
    - expr: "2*sqrt(2)*cos(pi/4)"
      expected: "2"
    - expr: "2*sqrt(2)*sin(pi/4)"
      expected: "2"
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
  Find spherical coordinates \((\rho, \theta, \phi)\) of the rectangular point \((\sqrt{3}, 1, 2)\), with \(\rho > 0\), \(0 \le \theta < 2\pi\), and \(0 \le \phi \le \pi\). Convert those coordinates back to \((x, y, z)\).
solution: |
  The squared distance from the origin is
  \[
  \rho^2 = (\sqrt{3})^2 + 1^2 + 2^2 = 8,
  \]
  so \(\rho = 2\sqrt{2}\). The point \((\sqrt{3}, 1)\) lies in the first quadrant and \(\tan\theta = 1/\sqrt{3}\), so \(\theta = \pi/6\). The cylindrical radius is \(r = \sqrt{3 + 1} = 2\) and the height is \(z = 2\), so
  \[
  \tan\phi = r/z = 1.
  \]
  The height \(z\) is positive, so \(0 < \phi < \pi/2\). Therefore \(\phi = \pi/4\). Then
  \[
  \begin{aligned}
  \cos\phi &= z/\rho = \frac{2}{2\sqrt{2}}=\frac{\sqrt{2}}{2},\
  \sin\phi &= r/\rho = \frac{2}{2\sqrt{2}}=\frac{\sqrt{2}}{2}.
  \end{aligned}
  \]
  Converting back, \(\rho\sin\phi = 2\sqrt{2}\cdot\frac{\sqrt{2}}{2} = 2\), so
  \[
  \begin{aligned}
  x&=2\cos(\pi/6)=\sqrt{3},\
  y&=2\sin(\pi/6)=1,\
  z&=2\sqrt{2}\cos(\pi/4)=2.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - |
    The distance is \(\rho = 2\sqrt{2}\).
  - |
    The angle \(\theta\) is \(\pi/6\).
  - |
    The angle \(\phi\) is \(\pi/4\), from \(\tan\phi = r/z = 1\).
  - |
    Converting back recovers \(x = \sqrt{3}\), \(y = 1\), and \(z = 2\).
verification:
  checks:
    - expr: "sqrt(sqrt(3)**2 + 1**2 + 2**2)"
      expected: "2*sqrt(2)"
    - expr: "atan2(1, sqrt(3))"
      expected: "pi/6"
    - expr: "atan(2/2)"
      expected: "pi/4"
    - expr: "cos(pi/4)"
      expected: "2/(2*sqrt(2))"
    - expr: "sin(pi/4)"
      expected: "2/(2*sqrt(2))"
    - expr: "2*sqrt(2)*sin(pi/4)*cos(pi/6)"
      expected: "sqrt(3)"
    - expr: "2*sqrt(2)*sin(pi/4)*sin(pi/6)"
      expected: "1"
    - expr: "2*sqrt(2)*cos(pi/4)"
      expected: "2"
:::

::: exercise
id: l4-cylindrical-spherical.ex-cylinder
tier: exam
topics: [cylindrical-coordinates, spherical-coordinates]
statement: |
  Write the cylinder \(x^2 + y^2 = 9\) in cylindrical coordinates and in spherical coordinates. Include both signs in each description.
solution: |
  In cylindrical coordinates, \(x^2 + y^2 = r^2\), so the equation is \(r^2 = 9\). The solutions are \(r = 3\) and \(r = -3\).

  - For \(r = 3\), \(x^2 + y^2 = 9\cos^2\theta + 9\sin^2\theta = 9\).
  - For \(r = -3\), \(x = -3\cos\theta\) and \(y = -3\sin\theta\), so \(x^2 + y^2 = 9\cos^2\theta + 9\sin^2\theta = 9\).

  In spherical coordinates, \(x^2 + y^2 = \rho^2\sin^2\phi\), so the equation is \(\rho^2\sin^2\phi = 9\). Equivalently, \(\rho\sin\phi = 3\) or \(\rho\sin\phi = -3\). If \(\sin\phi = 0\), then \(x^2 + y^2 = 0\), which is not \(9\), so no point of the cylinder has \(\sin\phi = 0\). Therefore \(\sin\phi \neq 0\), and \(\rho = 3/\sin\phi\) or \(\rho = -3/\sin\phi\).
provenance: written-for-site
steps:
  - |
    In cylindrical coordinates the equation is \(r^2 = 9\), so \(r = 3\) or \(r = -3\).
  - |
    Both signs satisfy \(x^2 + y^2 = 9\).
  - |
    In spherical coordinates the equation is \(\rho^2\sin^2\phi = 9\), so \(\rho\sin\phi = 3\) or \(\rho\sin\phi = -3\).
  - |
    Since \(\sin\phi \neq 0\) on the cylinder, \(\rho = 3/\sin\phi\) or \(\rho = -3/\sin\phi\).
verification:
  checks:
    - expr: "(r*cos(theta))**2 + (r*sin(theta))**2"
      expected: "r**2"
    - expr: "(3*cos(theta))**2 + (3*sin(theta))**2"
      expected: "9"
    - expr: "((-3)*cos(theta))**2 + ((-3)*sin(theta))**2"
      expected: "9"
    - expr: "(rho*sin(phi)*cos(theta))**2 + (rho*sin(phi)*sin(theta))**2"
      expected: "rho**2 * sin(phi)**2"
    - expr: "(3/sin(phi))**2 * sin(phi)**2"
      expected: "9"
    - expr: "((-3)/sin(phi))**2 * sin(phi)**2"
      expected: "9"
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

::: exercise
id: l4-cylindrical-spherical.handout-12-1-13
number: "12.1.13"
tier: standard
topics:
  - spherical-coordinates
statement: |
  Let \(a > 0\). Show that for all values of \(\theta\) and \(\phi\), the point
  \[
  (a\sin\phi\cos\theta,\; a\sin\phi\sin\theta,\; a\cos\phi)
  \]
  lies on the sphere \(x^2 + y^2 + z^2 = a^2\).
solution: |
  Write \(x = a\sin\phi\cos\theta\), \(y = a\sin\phi\sin\theta\) and \(z = a\cos\phi\). The first two squares share the factor \(a^2\sin^2\phi\), so
  \[
  \begin{aligned}
  x^2+y^2&=a^2\sin^2\phi\cos^2\theta+a^2\sin^2\phi\sin^2\theta\\
  &=a^2\sin^2\phi(\cos^2\theta+\sin^2\theta)\\
  &=a^2\sin^2\phi.
  \end{aligned}
  \]
  Adding \(z^2 = a^2\cos^2\phi\) gives
  \[
  \begin{aligned}
  x^2+y^2+z^2&=a^2\sin^2\phi+a^2\cos^2\phi\\
  &=a^2(\sin^2\phi+\cos^2\phi)=a^2.
  \end{aligned}
  \]
  This holds for every \(\theta\) and \(\phi\), so every such point lies on the sphere of radius \(a\) centred at the origin. These are the spherical coordinates \((\rho, \theta, \phi)\) with \(\rho = a\).
provenance: written-for-site
steps:
  - The first two squares sum to \(a^2\sin^2\phi\), using \(\cos^2\theta + \sin^2\theta = 1\).
  - Adding \(z^2 = a^2\cos^2\phi\) gives \(a^2(\sin^2\phi + \cos^2\phi)\).
  - The sum is \(a^2\) for all \(\theta\) and \(\phi\).
verification:
  checks:
    - expr: '(a*sin(phi)*cos(theta))**2 + (a*sin(phi)*sin(theta))**2'
      expected: 'a**2*sin(phi)**2'
    - expr: '(a*sin(phi)*cos(theta))**2 + (a*sin(phi)*sin(theta))**2 + (a*cos(phi))**2'
      expected: 'a**2'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-1
number: "12.6.1"
tier: standard
topics:
  - cylindrical-coordinates
  - spherical-coordinates
statement: |
  Convert the following points from rectangular to cylindrical and to spherical coordinates, with \(r \ge 0\), \(\rho \ge 0\), \(0 \le \theta < 2\pi\) and \(0 \le \phi \le \pi\). On the \(z\)-axis the angle \(\theta\) is arbitrary, so take \(\theta = 0\) there.

  1. \((1, 1, 1)\)
  2. \((7, -7, 5)\)
  3. \((\cos 1, \sin 1, 1)\)
  4. \((0, 0, -\pi)\)
solution: |
  For each point, \(r = \sqrt{x^2 + y^2}\) and \(z\) is unchanged. The angle \(\theta\) is the polar angle of \((x, y)\). The spherical data are \(\rho = \sqrt{x^2 + y^2 + z^2}\) and \(\cos\phi = z/\rho\).

  **(a) \((1, 1, 1)\).** The radius is \(r = \sqrt{2}\). Both \(x\) and \(y\) are positive and \(\tan\theta = 1\), so \(\theta = \pi/4\). The height is \(z = 1\). The distance is \(\rho = \sqrt{3}\), and \(\cos\phi = 1/\sqrt{3}\) gives \(\phi = \arccos(1/\sqrt{3})\).
  \[
  \text{cylindrical } (\sqrt{2}, \pi/4, 1), \qquad \text{spherical } \bigl(\sqrt{3}, \pi/4, \arccos(1/\sqrt{3})\bigr).
  \]

  **(b) \((7, -7, 5)\).** The radius is \(r = \sqrt{49 + 49} = 7\sqrt{2}\). Here \(x > 0\) and \(y < 0\), so \((x, y)\) lies in the fourth quadrant. The value \(\arctan(-1) = -\pi/4\) is shifted by \(2\pi\) into \([0, 2\pi)\), so \(\theta = 7\pi/4\). The height is \(z = 5\). The distance is
  \[
  \rho = \sqrt{49 + 49 + 25} = \sqrt{123},
  \]
  and \(\phi = \arccos(5/\sqrt{123})\).
  \[
  \text{cylindrical } (7\sqrt{2}, 7\pi/4, 5), \qquad \text{spherical } \bigl(\sqrt{123}, 7\pi/4, \arccos(5/\sqrt{123})\bigr).
  \]

  **(c) \((\cos 1, \sin 1, 1)\).** The radius is
  \[
  r = \sqrt{\cos^2 1 + \sin^2 1} = 1.
  \]
  The point \((\cos 1, \sin 1)\) lies on the unit circle at the angle \(\theta = 1\), and \(0 < 1 < \pi/2\) agrees with both coordinates being positive. The height is \(z = 1\). The distance is \(\rho = \sqrt{1 + 1} = \sqrt{2}\), and \(\cos\phi = 1/\sqrt{2}\) gives \(\phi = \pi/4\).
  \[
  \text{cylindrical } (1, 1, 1), \qquad \text{spherical } (\sqrt{2}, 1, \pi/4).
  \]

  **(d) \((0, 0, -\pi)\).** The point lies on the \(z\)-axis, so \(r = 0\), and we take \(\theta = 0\). The height is \(z = -\pi\). The distance is \(\rho = \pi\), and \(\cos\phi = -\pi/\pi = -1\) gives \(\phi = \pi\), which is the negative \(z\)-axis.
  \[
  \text{cylindrical } (0, 0, -\pi), \qquad \text{spherical } (\pi, 0, \pi).
  \]
provenance: handout-answer
steps:
  - Point (a) has cylindrical coordinates \((\sqrt{2}, \pi/4, 1)\) and spherical coordinates \((\sqrt{3}, \pi/4, \arccos(1/\sqrt{3}))\).
  - Point (b) lies in the fourth quadrant, so \(\theta = 7\pi/4\). Its spherical radius is \(\sqrt{123}\).
  - Point (c) has \(r = 1\), \(\theta = 1\), \(\rho = \sqrt{2}\) and \(\phi = \pi/4\).
  - Point (d) lies on the negative \(z\)-axis, so \(r = 0\), \(\rho = \pi\) and \(\phi = \pi\).
verification:
  checks:
    - expr: '(sqrt(1**2 + 1**2), atan2(1, 1), 1)'
      expected: '(sqrt(2), pi/4, 1)'
    - expr: '(sqrt(1 + 1 + 1), acos(1/sqrt(3)))'
      expected: '(sqrt(3), acos(1/sqrt(3)))'
    - expr: 'sqrt(3)*sin(acos(1/sqrt(3)))'
      expected: 'sqrt(2)'
    - expr: '(sqrt(7**2 + 7**2), atan2(-7, 7) + 2*pi)'
      expected: '(7*sqrt(2), 7*pi/4)'
    - expr: '(sqrt(7**2 + 7**2 + 5**2), cos(7*pi/4), sin(7*pi/4))'
      expected: '(sqrt(123), sqrt(2)/2, -sqrt(2)/2)'
    - expr: 'sqrt(123)*sin(acos(5/sqrt(123)))'
      expected: '7*sqrt(2)'
    - expr: '(sqrt(cos(1)**2 + sin(1)**2), sqrt(cos(1)**2 + sin(1)**2 + 1**2))'
      expected: '(1, sqrt(2))'
    - expr: 'acos(1/sqrt(2))'
      expected: 'pi/4'
    - expr: '(sqrt(2)*sin(pi/4)*cos(1), sqrt(2)*sin(pi/4)*sin(1), sqrt(2)*cos(pi/4))'
      expected: '(cos(1), sin(1), 1)'
    - expr: '(sqrt(0**2 + 0**2 + (-pi)**2), acos(-pi/pi))'
      expected: '(pi, pi)'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-2
number: "12.6.2"
tier: basic
topics:
  - cylindrical-coordinates
statement: |
  Find an equation for the sphere \(x^2 + y^2 + z^2 = 4\) in cylindrical coordinates.
solution: |
  In cylindrical coordinates \(x^2 + y^2 = r^2\) and \(z\) is unchanged. Substitute into the left side:
  \[
  \begin{aligned}
  x^2+y^2+z^2&=r^2\cos^2\theta+r^2\sin^2\theta+z^2\\
  &=r^2+z^2.
  \end{aligned}
  \]
  The equation of the sphere is
  \[
  r^2 + z^2 = 4.
  \]
  The angle \(\theta\) does not appear, since the sphere is symmetric about the \(z\)-axis.
provenance: handout-answer
steps:
  - Replace \(x^2 + y^2\) by \(r^2\) and keep \(z\).
  - The equation is \(r^2 + z^2 = 4\).
verification:
  checks:
    - expr: '(r*cos(theta))**2 + (r*sin(theta))**2 + z**2'
      expected: 'r**2 + z**2'
    - expr: 'solve(r**2 + z**2 - 4, z)'
      expected: '[-sqrt(4 - r**2), sqrt(4 - r**2)]'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-3
number: "12.6.3"
tier: basic
topics:
  - cylindrical-coordinates
statement: |
  Find an equation for the \(yz\)-plane in cylindrical coordinates.
solution: |
  The \(yz\)-plane is the set of points with \(x = 0\). Substitute \(x = r\cos\theta\):
  \[
  r\cos\theta = 0.
  \]
  This is the equation of the plane. It holds when \(r = 0\), which is the \(z\)-axis, or when \(\cos\theta = 0\), that is \(\theta = \pi/2\) or \(\theta = 3\pi/2\). With \(r\) allowed to be negative, \(\theta = \pi/2\) alone already gives every point \((0, r, z)\) of the plane.
provenance: handout-answer
steps:
  - The plane is \(x = 0\).
  - Substituting \(x = r\cos\theta\) gives \(r\cos\theta = 0\).
verification:
  checks:
    - expr: '(r*cos(pi/2), r*cos(3*pi/2))'
      expected: '(0, 0)'
    - expr: 'solve(cos(theta), theta)'
      expected: '[pi/2, 3*pi/2]'
    - expr: '(r*cos(pi/2), r*sin(pi/2))'
      expected: '(0, r)'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-4
number: "12.6.4"
tier: standard
topics:
  - cylindrical-coordinates
statement: |
  Find an equation equivalent to \(x^2 + y^2 + 2z^2 + 2z - 5 = 0\) in cylindrical coordinates.
solution: |
  Only the first two terms involve \(x\) and \(y\). With \(x = r\cos\theta\) and \(y = r\sin\theta\),
  \[
  \begin{aligned}
  x^2+y^2&=r^2\cos^2\theta+r^2\sin^2\theta\\
  &=r^2.
  \end{aligned}
  \]
  The terms in \(z\) stay as they are. The equation becomes
  \[
  r^2 + 2z^2 + 2z - 5 = 0.
  \]
provenance: handout-answer
steps:
  - Replace \(x^2 + y^2\) by \(r^2\).
  - Keep the terms in \(z\).
verification:
  checks:
    - expr: '(r*cos(theta))**2 + (r*sin(theta))**2 + 2*z**2 + 2*z - 5'
      expected: 'r**2 + 2*z**2 + 2*z - 5'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-5
number: "12.6.5"
tier: standard
topics:
  - cylindrical-coordinates
statement: |
  The curve \(z = e^{-x^2}\) in the \(xz\)-plane is rotated around the \(z\)-axis. Find an equation for the resulting surface in cylindrical coordinates.
solution: |
  Rotating around the \(z\)-axis keeps the height \(z\) of each point and carries the point at distance \(|x|\) from the axis around a circle of that radius. So a point \((x, y, z)\) lies on the surface when the point \((\sqrt{x^2 + y^2}, 0, z)\) of the \(xz\)-plane lies on the curve. In cylindrical coordinates the distance from the axis is \(r\), so the condition is
  \[
  z = e^{-r^2}.
  \]
  The points of the curve with \(x < 0\) give the same equation, since \(e^{-x^2}\) depends only on \(x^2\). In rectangular coordinates the surface is
  \[
  z = e^{-(x^2+y^2)}.
  \]
provenance: handout-answer
steps:
  - Rotation about the \(z\)-axis keeps \(z\) and replaces \(|x|\) by \(r\).
  - The surface is \(z = e^{-r^2}\).
verification:
  checks:
    - expr: 'exp(-(r*cos(theta))**2 - (r*sin(theta))**2)'
      expected: 'exp(-r**2)'
    - expr: 'exp(-(x**2 + y**2)).subs({x: r*cos(theta), y: r*sin(theta)})'
      expected: 'exp(-r**2)'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-6
number: "12.6.6"
tier: standard
topics:
  - cylindrical-coordinates
statement: |
  The line \(z = x\) in the \(xz\)-plane is rotated around the \(z\)-axis. Find an equation for the resulting surface in cylindrical coordinates, and describe the whole surface.
solution: |
  The line contains points with \(x > 0\), which have \(z = x > 0\), and points with \(x < 0\), which have \(z = x < 0\). A point \((x, y, z)\) lies on the surface when the point \((\pm\sqrt{x^2 + y^2}, 0, z)\) of the \(xz\)-plane lies on the line. The distance from the axis is \(r\), so
  \[
  z = r \quad\text{or}\quad z = -r, \qquad r \ge 0.
  \]
  Squaring both gives one equation for the whole surface:
  \[
  z^2 = r^2.
  \]
  In rectangular coordinates this is \(z^2 = x^2 + y^2\). It is a double cone with its vertex at the origin. The equation \(z = r\) with \(r \ge 0\) describes only the upper half, the part with \(z \ge 0\). If negative values of \(r\) are allowed, the point \((r, \theta, z)\) with \(r < 0\) equals \((|r|, \theta + \pi, z)\), so \(z = r\) also covers the lower half.
provenance: handout-answer
steps:
  - The rotated line gives the points with \(z = r\) and the points with \(z = -r\), for \(r \ge 0\).
  - Together the surface is \(z^2 = r^2\), a double cone.
  - The equation \(z = r\) with \(r \ge 0\) is the upper half.
verification:
  checks:
    - expr: '(z**2 - (x**2 + y**2)).subs({x: r*cos(theta), y: r*sin(theta)})'
      expected: 'z**2 - r**2'
    - expr: 'solve(z**2 - r**2, z)'
      expected: '[-r, r]'
    - expr: '(z**2 - (x**2 + y**2)).subs({x: 3, y: 4, z: -5})'
      expected: '0'
discrepancy: |
  The printed answer is \(z = r\), which describes only the upper half of the cone. The verified full surface is \(z = \pm r\), that is \(z^2 = r^2\).
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-7
number: "12.6.7"
tier: standard
topics:
  - spherical-coordinates
statement: |
  Find an equation for the plane \(y = 0\) in spherical coordinates.
solution: |
  Substitute \(y = \rho\sin\phi\sin\theta\):
  \[
  \rho\sin\phi\sin\theta = 0.
  \]
  The product is zero when one factor is zero:

  - \(\rho = 0\) is the origin,
  - \(\sin\phi = 0\) is the \(z\)-axis,
  - \(\sin\theta = 0\) means \(\theta = 0\) or \(\theta = \pi\).

  The origin and the \(z\)-axis lie in the plane \(y = 0\). The third condition gives the whole plane. For \(\theta = 0\) and \(0 \le \phi \le \pi\), the points are \((\rho\sin\phi, 0, \rho\cos\phi)\), the half-plane with \(x \ge 0\). For \(\theta = \pi\) they are \((-\rho\sin\phi, 0, \rho\cos\phi)\), the half-plane with \(x \le 0\). The plane is described by
  \[
  \sin\theta = 0.
  \]
provenance: handout-answer
steps:
  - Substitute \(y = \rho\sin\phi\sin\theta\).
  - The factors \(\rho = 0\) and \(\sin\phi = 0\) give points already in the plane.
  - The condition \(\sin\theta = 0\), with \(\theta = 0\) and \(\theta = \pi\), gives the two half-planes that make up the plane.
verification:
  checks:
    - expr: '(rho*sin(phi)*sin(theta)).subs(theta, 0)'
      expected: '0'
    - expr: 'solve(sin(theta), theta)'
      expected: '[0, pi]'
    - expr: '(rho*sin(phi)*sin(0), rho*sin(phi)*sin(pi))'
      expected: '(0, 0)'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-8
number: "12.6.8"
tier: basic
topics:
  - spherical-coordinates
statement: |
  Find an equation for the plane \(z = 1\) in spherical coordinates.
solution: |
  Substitute \(z = \rho\cos\phi\):
  \[
  \rho\cos\phi = 1.
  \]
  The right side is not zero, so \(\cos\phi \neq 0\), and the equation can be solved for \(\rho\):
  \[
  \rho = \frac{1}{\cos\phi}.
  \]
  With \(\rho \ge 0\), this needs \(\cos\phi > 0\), that is \(0 \le \phi < \pi/2\). The plane lies above the \(xy\)-plane, which matches this range.
provenance: handout-answer
steps:
  - Substitute \(z = \rho\cos\phi\) to get \(\rho\cos\phi = 1\).
  - Solve for \(\rho = 1/\cos\phi\), with \(0 \le \phi < \pi/2\).
verification:
  checks:
    - expr: '(rho*cos(phi)).subs({rho: 2, phi: pi/3})'
      expected: '1'
    - expr: 'solve(rho*cos(phi) - 1, rho)'
      expected: '[1/cos(phi)]'
    - expr: '(1/cos(pi/3))*cos(pi/3)'
      expected: '1'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-9
number: "12.6.9"
tier: standard
topics:
  - spherical-coordinates
statement: |
  Find an equation for the sphere with radius \(1\) and centre \((0, 1, 0)\) in spherical coordinates.
solution: |
  In rectangular coordinates the sphere is \(x^2 + (y - 1)^2 + z^2 = 1\). Expanding the square gives
  \[
  \begin{aligned}
  x^2+y^2-2y+1+z^2&=1,\\
  x^2+y^2+z^2&=2y.
  \end{aligned}
  \]
  Substitute \(x^2 + y^2 + z^2 = \rho^2\) and \(y = \rho\sin\phi\sin\theta\):
  \[
  \rho^2 = 2\rho\sin\phi\sin\theta.
  \]
  Move everything to one side and factor:
  \[
  \rho\left(\rho - 2\sin\phi\sin\theta\right) = 0.
  \]
  The factor \(\rho = 0\) is the origin. The origin lies on the sphere, and it also satisfies the second factor when \(\theta = 0\), so nothing is lost by dropping it. The sphere is
  \[
  \rho = 2\sin\theta\sin\phi.
  \]
  Since \(\rho \ge 0\) and \(\sin\phi \ge 0\), this needs \(\sin\theta \ge 0\), that is \(0 \le \theta \le \pi\). This matches a sphere lying in the half-space \(y \ge 0\).
provenance: handout-answer
steps:
  - Expand to \(x^2 + y^2 + z^2 = 2y\).
  - Substitute to get \(\rho^2 = 2\rho\sin\phi\sin\theta\).
  - Divide by \(\rho\) to get \(\rho = 2\sin\theta\sin\phi\), keeping the origin as the case \(\theta = 0\).
verification:
  checks:
    - expr: 'expand(x**2 + (y - 1)**2 + z**2 - 1)'
      expected: 'x**2 + y**2 + z**2 - 2*y'
    - expr: '(x**2 + y**2 + z**2 - 2*y).subs({x: rho*sin(phi)*cos(theta), y: rho*sin(phi)*sin(theta), z: rho*cos(phi)})'
      expected: 'rho**2 - 2*rho*sin(phi)*sin(theta)'
    - expr: 'factor(rho**2 - 2*rho*sin(phi)*sin(theta))'
      expected: 'rho*(rho - 2*sin(phi)*sin(theta))'
    - expr: '(rho**2 - 2*rho*sin(phi)*sin(theta)).subs(rho, 2*sin(phi)*sin(theta))'
      expected: '0'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-11
number: "12.6.11"
tier: standard
topics:
  - spherical-coordinates
statement: |
  The line \(z = x\) in the \(xz\)-plane is rotated around the \(z\)-axis. Find an equation for the resulting surface in spherical coordinates, and describe the whole surface.
solution: |
  Rotating the line around the \(z\)-axis gives the double cone \(z^2 = x^2 + y^2\), as for the same line in cylindrical coordinates, where the surface is \(z^2 = r^2\). Substitute \(z = \rho\cos\phi\) and \(x^2 + y^2 = \rho^2\sin^2\phi\):
  \[
  \rho^2\cos^2\phi = \rho^2\sin^2\phi.
  \]
  For \(\rho \neq 0\), divide by \(\rho^2\) and rearrange:
  \[
  \cos^2\phi - \sin^2\phi = 0, \qquad \cos^2\phi = \sin^2\phi.
  \]
  So \(\sin\phi\) and \(\cos\phi\) have the same absolute value. For \(0 \le \phi \le \pi\) the solutions are
  \[
  \phi = \frac{\pi}{4} \quad\text{or}\quad \phi = \frac{3\pi}{4}.
  \]
  The angle \(\phi = \pi/4\) gives the upper cone, where \(z > 0\), and \(\phi = 3\pi/4\) gives the lower cone, where \(z < 0\). The origin has \(\rho = 0\) and is the vertex of both. The equation \(\phi = \pi/4\) alone with \(\rho \ge 0\) describes only the upper half. If negative \(\rho\) is allowed, the point \((-\rho, \theta, \pi/4)\) is \((\rho, \theta + \pi, 3\pi/4)\), so \(\phi = \pi/4\) then also covers the lower half.
provenance: handout-answer
steps:
  - The rotated line is the double cone \(z^2 = x^2 + y^2\).
  - Substituting gives \(\rho^2\cos^2\phi = \rho^2\sin^2\phi\), so \(\cos^2\phi = \sin^2\phi\) for \(\rho \neq 0\).
  - The solutions are \(\phi = \pi/4\) (upper cone) and \(\phi = 3\pi/4\) (lower cone).
verification:
  checks:
    - expr: '(z**2 - (x**2 + y**2)).subs({x: rho*sin(phi)*cos(theta), y: rho*sin(phi)*sin(theta), z: rho*cos(phi)})'
      expected: 'rho**2*(cos(phi)**2 - sin(phi)**2)'
    - expr: '(cos(pi/4)**2 - sin(pi/4)**2, cos(3*pi/4)**2 - sin(3*pi/4)**2)'
      expected: '(0, 0)'
    - expr: '(cos(pi/4) - sin(pi/4), cos(3*pi/4) + sin(3*pi/4))'
      expected: '(0, 0)'
    - expr: 'solve(cos(phi) - sin(phi), phi)'
      expected: '[pi/4]'
discrepancy: |
  The printed answer is \(\phi = \pi/4\), which describes only the upper half of the cone. The verified full surface is \(\phi = \pi/4\) or \(\phi = 3\pi/4\).
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-12
number: "12.6.12"
tier: standard
topics:
  - cylindrical-coordinates
statement: |
  Plot the polar equations \(r = \sin\theta\) and \(r = \cos\theta\) and comment on their similarities. Hint: multiply both sides of each equation by \(r\) and convert back to rectangular coordinates.
solution: |
  **The curve \(r = \sin\theta\).** Multiply both sides by \(r\):
  \[
  r^2 = r\sin\theta.
  \]
  Replace \(r^2\) by \(x^2 + y^2\) and \(r\sin\theta\) by \(y\), then complete the square:
  \[
  \begin{aligned}
  x^2+y^2&=y,\\
  x^2+\left(y-\tfrac{1}{2}\right)^2&=\tfrac{1}{4}.
  \end{aligned}
  \]
  This is the circle of radius \(\tfrac{1}{2}\) with centre \((0, \tfrac{1}{2})\). Multiplying by \(r\) adds the solution \(r = 0\), the origin, which lies on the circle (the curve passes through it at \(\theta = 0\)), so no point is added.

  **The curve \(r = \cos\theta\).** Multiply by \(r\) and replace \(r\cos\theta\) by \(x\):
  \[
  \begin{aligned}
  x^2+y^2&=x,\\
  \left(x-\tfrac{1}{2}\right)^2+y^2&=\tfrac{1}{4}.
  \end{aligned}
  \]
  This is the circle of radius \(\tfrac{1}{2}\) with centre \((\tfrac{1}{2}, 0)\). It also passes through the origin, at \(\theta = \pi/2\).

  **The plots.** Plot a few points \((r\cos\theta, r\sin\theta)\):

  - for \(r = \sin\theta\), the angle \(\theta = 0\) gives the origin, \(\theta = \pi/6\) gives \(r = \tfrac{1}{2}\), \(\theta = \pi/2\) gives the top point \((0, 1)\), and \(\theta = \pi\) returns to the origin,
  - for \(r = \cos\theta\), the angle \(\theta = 0\) gives the right point \((1, 0)\), \(\theta = \pi/3\) gives \(r = \tfrac{1}{2}\), and \(\theta = \pi/2\) gives the origin.

  As \(\theta\) runs through \(0 \le \theta \le \pi\), each curve traces its circle once. For \(\pi < \theta < 2\pi\) the radius is negative for \(r = \sin\theta\), and the points retrace the same circle.

  **Similarities.** Both curves are circles of radius \(\tfrac{1}{2}\) through the origin, one with its diameter along the \(y\)-axis and the other along the \(x\)-axis. Since \(\cos\theta = \sin(\theta + \pi/2)\), the second circle is the first rotated by \(\pi/2\) clockwise about the origin.
provenance: written-for-site
steps:
  - Multiplying \(r = \sin\theta\) by \(r\) gives \(x^2 + y^2 = y\), the circle with centre \((0, 1/2)\) and radius \(1/2\).
  - Multiplying \(r = \cos\theta\) by \(r\) gives \(x^2 + y^2 = x\), the circle with centre \((1/2, 0)\) and radius \(1/2\).
  - Both circles have radius \(1/2\) and pass through the origin. The second is the first rotated by \(\pi/2\) clockwise.
verification:
  checks:
    - expr: '(r**2 - r*sin(theta))'
      expected: '(x**2 + y**2 - y).subs({x: r*cos(theta), y: r*sin(theta)})'
    - expr: '(r**2 - r*cos(theta))'
      expected: '(x**2 + y**2 - x).subs({x: r*cos(theta), y: r*sin(theta)})'
    - expr: 'expand(x**2 + (y - Rational(1, 2))**2 - Rational(1, 4))'
      expected: 'x**2 + y**2 - y'
    - expr: 'expand((x - Rational(1, 2))**2 + y**2 - Rational(1, 4))'
      expected: 'x**2 + y**2 - x'
    - expr: '(sqrt(3)/4)**2 + (Rational(1, 4) - Rational(1, 2))**2'
      expected: '1/4'
    - expr: 'cos(theta) - sin(theta + pi/2)'
      expected: '0'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-13
number: "12.6.13"
tier: standard
topics:
  - cylindrical-coordinates
  - spherical-coordinates
statement: |
  Let \(m\) be a real number. Rotate the line \(z = mx\) in the \(xz\)-plane around the \(z\)-axis, and convert the resulting surface to cylindrical coordinates and to spherical coordinates. Treat the case \(m = 0\) separately.
solution: |
  **The surface.** The rotated line contains the points \((x, 0, mx)\) for every real \(x\), and the distance of such a point from the axis is \(|x|\). A point \((x, y, z)\) lies on the surface when \(z = \pm m\sqrt{x^2 + y^2}\), so
  \[
  z^2 = m^2\left(x^2 + y^2\right).
  \]
  For \(m \neq 0\) this is a double cone with its vertex at the origin. For \(m = 0\) it is the plane \(z = 0\).

  **Cylindrical coordinates.** Replace \(x^2 + y^2\) by \(r^2\):
  \[
  z^2 = m^2r^2, \qquad\text{that is}\qquad z = mr \ \text{ or }\ z = -mr, \quad r \ge 0.
  \]
  The equation \(z = mr\) with \(r \ge 0\) is one nappe (the part above the \(xy\)-plane when \(m > 0\)). The other sign gives the other nappe.

  **Spherical coordinates.** Substitute \(z = \rho\cos\phi\) and \(x^2 + y^2 = \rho^2\sin^2\phi\):
  \[
  \rho^2\cos^2\phi = m^2\rho^2\sin^2\phi.
  \]
  The origin \(\rho = 0\) satisfies it. For \(\rho \neq 0\), divide by \(\rho^2\):
  \[
  \cos^2\phi = m^2\sin^2\phi.
  \]
  - If \(m \neq 0\), then \(\sin\phi \neq 0\), since \(\sin\phi = 0\) would force \(\cos^2\phi = 0\), which is impossible. Divide by \(\sin^2\phi\) to get \(\cot^2\phi = m^2\), so
    \[
    \cot\phi = m \quad\text{or}\quad \cot\phi = -m.
    \]
    On \(0 < \phi < \pi\) the function \(\cot\) is one-to-one, so \(\phi = \operatorname{arccot} m\) or \(\phi = \pi - \operatorname{arccot} m\), where \(\operatorname{arccot}\) takes values in \((0, \pi)\). The equation \(\cot\phi = m\) alone is one nappe.
  - If \(m = 0\), the equation is \(\cos^2\phi = 0\), so \(\phi = \pi/2\), the \(xy\)-plane.
provenance: handout-answer
steps:
  - The surface is \(z^2 = m^2(x^2 + y^2)\), a double cone for \(m \neq 0\) and the plane \(z = 0\) for \(m = 0\).
  - In cylindrical coordinates it is \(z^2 = m^2r^2\), that is \(z = \pm mr\).
  - In spherical coordinates \(\cos^2\phi = m^2\sin^2\phi\), so \(\cot\phi = \pm m\) for \(m \neq 0\).
  - For \(m = 0\) the equation gives \(\phi = \pi/2\).
verification:
  checks:
    - expr: '(z**2 - m**2*(x**2 + y**2)).subs({x: r*cos(theta), y: r*sin(theta)})'
      expected: 'z**2 - m**2*r**2'
    - expr: 'solve(z**2 - m**2*r**2, z)'
      expected: '[-m*r, m*r]'
    - expr: '(z**2 - m**2*(x**2 + y**2)).subs({x: rho*sin(phi)*cos(theta), y: rho*sin(phi)*sin(theta), z: rho*cos(phi)})'
      expected: 'rho**2*(cos(phi)**2 - m**2*sin(phi)**2)'
    - expr: 'simplify(cos(acot(m))**2 - m**2*sin(acot(m))**2)'
      expected: '0'
    - expr: 'simplify(cos(pi - acot(m))**2 - m**2*sin(pi - acot(m))**2)'
      expected: '0'
    - expr: 'solve(cos(phi)**2, phi)'
      expected: '[pi/2, 3*pi/2]'
discrepancy: |
  The printed answer \(z = mr\) and \(\cot\phi = m\) describes only one nappe, and it gives \(\phi = 0\) for \(m = 0\). The verified surface is \(z^2 = m^2r^2\) in cylindrical and \(\cot\phi = \pm m\) in spherical coordinates, and for \(m = 0\) it is \(\phi = \pi/2\), the \(xy\)-plane.
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-14
number: "12.6.14"
tier: standard
topics:
  - spherical-coordinates
statement: |
  Convert the spherical formula \(\rho = \sin\theta\sin\phi\) to rectangular coordinates and describe the surface. Hint: multiply both sides by \(\rho\).
solution: |
  Multiply both sides by \(\rho\):
  \[
  \rho^2 = \rho\sin\phi\sin\theta.
  \]
  The left side is \(x^2 + y^2 + z^2\) and the right side is \(y\), so
  \[
  x^2 + y^2 + z^2 = y.
  \]
  Complete the square in \(y\):
  \[
  \begin{aligned}
  x^2+\left(y^2-y+\tfrac{1}{4}\right)+z^2&=\tfrac{1}{4},\\
  x^2+\left(y-\tfrac{1}{2}\right)^2+z^2&=\tfrac{1}{4}.
  \end{aligned}
  \]
  The surface is the sphere of radius \(\tfrac{1}{2}\) with centre \((0, \tfrac{1}{2}, 0)\). Multiplying by \(\rho\) adds the solution \(\rho = 0\), the origin, which already lies on the surface (take \(\theta = 0\)), so the sphere is the whole surface. The restriction \(\rho \ge 0\) forces \(\sin\theta \ge 0\), so the formula describes the sphere with \(0 \le \theta \le \pi\).
provenance: handout-answer
steps:
  - Multiplying by \(\rho\) gives \(\rho^2 = \rho\sin\phi\sin\theta\), that is \(x^2 + y^2 + z^2 = y\).
  - Completing the square gives \(x^2 + (y - 1/2)^2 + z^2 = 1/4\).
  - The surface is a sphere of radius \(1/2\) centred at \((0, 1/2, 0)\).
verification:
  checks:
    - expr: '(x**2 + y**2 + z**2 - y).subs({x: rho*sin(phi)*cos(theta), y: rho*sin(phi)*sin(theta), z: rho*cos(phi)})'
      expected: 'rho**2 - rho*sin(phi)*sin(theta)'
    - expr: 'expand(x**2 + (y - Rational(1, 2))**2 + z**2 - Rational(1, 4))'
      expected: 'x**2 + y**2 + z**2 - y'
    - expr: '0**2 + (1 - Rational(1, 2))**2 + 0**2'
      expected: '1/4'
    - expr: '(Rational(1, 2)*sin(pi/2)*sin(pi/2))'
      expected: '1/2'
:::


::: exercise
id: l4-cylindrical-spherical.handout-12-6-15
number: "12.6.15"
tier: standard
topics:
  - cylindrical-coordinates
  - spherical-coordinates
statement: |
  The points of the first octant are described by \(x > 0\), \(y > 0\) and \(z > 0\). Give the similar inequalities for the first octant in cylindrical coordinates and in spherical coordinates. Use \(r > 0\), \(\rho > 0\), \(0 \le \theta < 2\pi\) and \(0 \le \phi \le \pi\).
solution: |
  **Cylindrical coordinates.** The height is \(z\), so \(z > 0\). With \(r > 0\), the conditions \(x = r\cos\theta > 0\) and \(y = r\sin\theta > 0\) say \(\cos\theta > 0\) and \(\sin\theta > 0\). In \([0, 2\pi)\) both hold exactly for \(0 < \theta < \pi/2\). The first octant is
  \[
  r > 0, \qquad 0 < \theta < \frac{\pi}{2}, \qquad z > 0.
  \]

  **Spherical coordinates.** Here \(x = \rho\sin\phi\cos\theta\), \(y = \rho\sin\phi\sin\theta\) and \(z = \rho\cos\phi\). On \(0 \le \phi \le \pi\), \(\sin\phi \ge 0\), and \(\sin\phi = 0\) puts the point on the \(z\)-axis, where \(x = y = 0\). So \(x > 0\) and \(y > 0\) force \(\sin\phi > 0\), and then \(\cos\theta > 0\) and \(\sin\theta > 0\), which gives \(0 < \theta < \pi/2\) as before. The condition \(z = \rho\cos\phi > 0\) gives \(\cos\phi > 0\), that is \(\phi < \pi/2\). Together with \(\sin\phi > 0\), this is \(0 < \phi < \pi/2\). The first octant is
  \[
  \rho > 0, \qquad 0 < \theta < \frac{\pi}{2}, \qquad 0 < \phi < \frac{\pi}{2}.
  \]

  **Check.** The values \(\rho = 2\), \(\theta = \pi/6\) and \(\phi = \pi/3\) lie in these ranges and give
  \[
  (x, y, z) = \left(\tfrac{3}{2}, \tfrac{\sqrt{3}}{2}, 1\right),
  \]
  and all three coordinates are positive.
provenance: handout-answer
steps:
  - In cylindrical coordinates, \(z > 0\), \(r > 0\) and \(0 < \theta < \pi/2\).
  - In spherical coordinates, \(\rho > 0\), \(0 < \theta < \pi/2\) and \(0 < \phi < \pi/2\).
  - A test point with \(\rho = 2\), \(\theta = \pi/6\), \(\phi = \pi/3\) lies in the first octant.
verification:
  checks:
    - expr: '(2*sin(pi/3)*cos(pi/6), 2*sin(pi/3)*sin(pi/6), 2*cos(pi/3))'
      expected: '(3/2, sqrt(3)/2, 1)'
    - expr: '(cos(pi/6), sin(pi/6), cos(pi/3), sin(pi/3))'
      expected: '(sqrt(3)/2, 1/2, 1/2, sqrt(3)/2)'
    - expr: '(sin(pi/2), cos(pi/2))'
      expected: '(1, 0)'
:::
