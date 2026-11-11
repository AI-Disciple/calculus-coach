---
id: l7-polar-integrals
lecture: 7
order: 6
title: Double integrals in polar coordinates
prerequisites: [l7-general-regions, l4-cylindrical-spherical]
sources:
  - { source: handout, section: "10.1", page: 241 }
  - { source: handout, section: "15.2", page: 395 }
  - { source: sheet-3, page: 1 }
  - { source: final-2024, page: 1 }
  - { source: final-2025, page: 1 }
  - { source: retake-2023, page: 1 }
  - { source: mock-exam-1, page: 1 }
examWeight: high
examWeightNote: |
  Double integrals are 32.5% of the two recent finals, and every recent final has a polar integral. The formal wording is the handout's. Lecture 7 covered only handout 15.1, so polar coordinates are background reading until the lecture that teaches them.
optional: true
taught: handout
status: reviewed
notation: |
  The handout calls these coordinates cylindrical coordinates. In the plane, the course calls them polar coordinates. A point satisfies \(x = r\cos\theta\) and \(y = r\sin\theta\), and the area element is \(dA = r\,dr\,d\theta\).
---

::: section
title: Polar coordinates
:::

::: formal-statement
kind: definition
title: Polar coordinates
source:
  source: handout
  section: "10.1"
  page: 241
text: |
  In **polar coordinates** a point in the plane is identified by a pair \((r, \theta)\):

  - \(\theta\) measures the angle between the positive \(x\)-axis and a ray through the point.
  - \(r\) measures the distance from the origin to the point.
:::

::: plain-explanation
text: |
  The pair \((r, \theta)\) records a direction and a distance. Each point has one rectangular pair and infinitely many polar pairs. The pairs \((2, 0)\) and \((2, 2\pi)\) name the same point.

  A negative value of \(r\) means travel in the opposite direction, so \((-2, \pi/4)\), \((2, 5\pi/4)\) and \((2, -3\pi/4)\) name one point. A negative angle is measured clockwise from the positive \(x\)-axis.
:::

::: formal-statement
kind: method
title: Rectangular coordinates from polar coordinates
source:
  source: handout
  section: "10.1"
  page: 242
text: |
  The point with polar coordinates \((r, \theta)\) has rectangular coordinates
  \[
  x = r\cos\theta, \qquad y = r\sin\theta.
  \]
  This follows from the definition of sine and cosine.
:::

::: plain-explanation
text: |
  Drop a perpendicular from the point to the \(x\)-axis. The side along the \(x\)-axis has length \(r\cos\theta\), and that length is \(x\). The vertical side has length \(r\sin\theta\), and that length is \(y\). The rectangular point \((1, \sqrt{3})\) has polar coordinates \((2, \pi/3)\), since \(2\cos(\pi/3) = 1\) and \(2\sin(\pi/3) = \sqrt{3}\).
:::

::: visual
kind: polar-region
caption: |
  The disk \(x^2 + y^2 = 2\) is the set \(0 \le r \le \sqrt{2}\), \(0 \le \theta \le 2\pi\). The viewer also shows the sector of that disk cut by \(0 \le y \le x\), with \(0 \le \theta \le \pi/4\), and an annulus.
params:
  shape: disk
:::

::: trap
text: |
  The sector \(0 \le y \le x\) inside the disk \(x^2 + y^2 \le 2\) has bounds \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le \pi/4\). Its area is
  \[
  \int_0^{\pi/4}\int_0^{\sqrt{2}} r\, dr\, d\theta = \frac{\pi}{4}.
  \]
  The bounds \(0 \le \theta \le 2\pi\), with the same radial limit, describe the whole disk \(x^2 + y^2 \le 2\). That integral equals \(2\pi\). Using a full turn on this sector changes the value from \(\pi/4\) to \(2\pi\).
:::

::: key-points
text: |
  - In polar coordinates \(r\) is the distance from the origin to the point, and \(\theta\) is the angle from the positive \(x\)-axis. The rectangular coordinates are \(x = r\cos\theta\) and \(y = r\sin\theta\).
  - Each point has infinitely many polar pairs. A negative \(r\) means travel in the opposite direction, so \((-2, \pi/4)\) and \((2, 5\pi/4)\) name one point.
  - The disk \(x^2 + y^2 \le 2\) has the bounds \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le 2\pi\). The sector of it cut by \(0 \le y \le x\) has the same radial bounds and \(0 \le \theta \le \pi/4\).
  - The usual slip uses the full turn \(0 \le \theta \le 2\pi\) for the sector \(0 \le y \le x\). That gives \(2\pi\), the area of the whole disk, while the sector has area \(\pi/4\).
:::

::: concept-question
id: l7-polar-integrals.q-59faf514
question: |
  The region inside \(x^2 + y^2 = 2\) and inside \(0 \le y \le x\) has which polar bounds?
options:
  - text: |
      \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le 2\pi\)
  - text: |
      \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le \pi/2\)
  - text: |
      \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le \pi/4\)
    correct: true
  - text: |
      \(0 \le r \le 2\) and \(0 \le \theta \le \pi/4\)
explanation: |
  The circle \(x^2 + y^2 = 2\) has radius \(\sqrt{2}\). The ray \(y = 0\), with \(x \ge 0\), is \(\theta = 0\). The ray \(y = x\) in the first quadrant is \(\theta = \pi/4\). The bounds are \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le \pi/4\).
:::

::: section
title: Double integral in polar coordinates
:::

::: formal-statement
kind: method
title: Double integral in polar coordinates
source:
  source: handout
  section: "15.2"
  page: 396
text: |
  A polar grid divides the region into small cells. Near \((r, \theta)\), each cell has area about \(r\,\Delta r\,\Delta\theta\), and the volume under \(z = f(r, \theta)\) is approximately
  \[
  \sum\sum f(r_i, \theta_j)\, r_i\, \Delta r\, \Delta\theta.
  \]
  In the limit this turns into the double integral
  \[
  \int_{\theta_0}^{\theta_1}\int_{r_0}^{r_1} f(r, \theta)\, r\, dr\, d\theta.
  \]
  The extra factor \(r\) is the **area Jacobian**.
:::

::: plain-explanation
text: |
  A small polar cell has two straight sides of length \(\Delta r\) and two arcs of length about \(r\Delta\theta\). Those sides give the area \(r\,\Delta r\,\Delta\theta\). Multiplying by the height \(f(r, \theta)\) and passing to the limit leaves the factor \(r\) in the integral. Constant bounds on \(r\) and \(\theta\) describe a disk or a sector of a disk.
:::

::: tip
text: |
  When the outer radius depends on the angle, the same formula uses the limits \(0 \le r \le r(\theta)\).
:::

::: worked-example
title: Constant bounds
problem: |
  Find the volume under \(z = \sqrt{4 - r^2}\) above the quarter disk bounded by the two axes and \(x^2 + y^2 = 4\) in the first quadrant.
solution: |
  The quarter disk has bounds \(0 \le r \le 2\) and \(0 \le \theta \le \pi/2\). The volume is
  \[
  \int_0^{\pi/2}\int_0^2 \sqrt{4 - r^2}\, r\, dr\, d\theta.
  \]
  The inner antiderivative is \(-\frac13 (4 - r^2)^{3/2}\).

  - At \(r = 2\), \((4 - r^2)^{3/2}\) equals \(0\).
  - At \(r = 0\), \((4 - r^2)^{3/2}\) equals \(8\), so the antiderivative equals \(-\frac83\).

  The definite inner integral is
  \[
  0 - \bigl(-\frac83\bigr) = \frac83.
  \]

  The outer integral is \(\int_0^{\pi/2} \frac83\, d\theta\). The length of the \(\theta\) interval is \(\pi/2\), so the volume is \(\frac{4\pi}{3}\).

  The same value comes from the sphere of radius \(2\). Its volume is \(\frac43 \pi \cdot 2^3 = \frac{32\pi}{3}\). The solid here is one eighth of that ball, and one eighth of \(\frac{32\pi}{3}\) is \(\frac{4\pi}{3}\).
:::

::: worked-example
title: A Cartesian integral in polar coordinates
problem: |
  Compute \(\displaystyle\int_0^1\int_0^{\sqrt{1 - x^2}} (x^2 + y^2)\, dy\, dx\) by converting to polar coordinates.
solution: |
  The region is the quarter disk \(x \ge 0\), \(y \ge 0\), \(x^2 + y^2 \le 1\). In polar coordinates, \(0 \le \theta \le \pi/2\) and \(0 \le r \le 1\). The integrand \(x^2 + y^2\) equals \(r^2\), and the area element contributes another factor \(r\), so the integrand becomes \(r^3\).

  The integral is
  \[
  \int_0^{\pi/2}\int_0^1 r^3\, dr\, d\theta.
  \]
  The inner integral equals \(\frac14\). The outer integral multiplies by \(\pi/2\). The value is \(\frac{\pi}{8}\).
:::

::: worked-example
title: A variable radial limit
problem: |
  Find the volume under \(z = \sqrt{4 - r^2}\) above the region enclosed by \(r = 2\cos\theta\) for \(-\pi/2 \le \theta \le \pi/2\).
solution: |
  The curve \(r = 2\cos\theta\) on \(-\pi/2 \le \theta \le \pi/2\) is the disk of radius \(1\) centred at \((1, 0)\). For each \(\theta\) the radius runs from \(0\) to \(2\cos\theta\). The volume is symmetric about the \(x\)-axis, so
  \[
  \begin{aligned}
  &\int_{-\pi/2}^{\pi/2}\int_0^{2\cos\theta} \sqrt{4 - r^2}\, r\, dr\, d\theta\\
  &=2\int_0^{\pi/2}\int_0^{2\cos\theta} \sqrt{4 - r^2}\, r\, dr\, d\theta.
  \end{aligned}
  \]
  ### The inner integral

  The inner antiderivative is \(-\frac13 (4 - r^2)^{3/2}\). On \([0, \pi/2]\), the upper limit \(r = 2\cos\theta\) gives \(4 - r^2 = 4\sin^2\theta\), so \((4 - r^2)^{3/2} = 8\sin^3\theta\). At \(r = 0\) the same power equals \(8\). The inner integral equals
  \[
  -\frac83\sin^3\theta + \frac83 = \frac83\bigl(1 - \sin^3\theta\bigr).
  \]
  ### The outer integral

  Because \(\sin^3\theta = (1 - \cos^2\theta)\sin\theta\), an antiderivative of \(\sin^3\theta\) is \(-\cos\theta + \frac13\cos^3\theta\). Subtract \(\frac83\) times that antiderivative from \(\frac83\theta\). An antiderivative of \(\frac83(1 - \sin^3\theta)\) is
  \[
  \frac83\Bigl(\theta + \cos\theta - \frac13\cos^3\theta\Bigr).
  \]
  - At \(\theta = \pi/2\) this equals \(\frac83 \cdot \frac{\pi}{2} = \frac{4\pi}{3}\).
  - At \(\theta = 0\) it equals \(\frac83\bigl(1 - \frac13\bigr) = \frac{16}{9}\).

  The difference is \(\frac{4\pi}{3} - \frac{16}{9}\).

  The volume is that difference doubled:
  \[
  2\Bigl(\frac{4\pi}{3} - \frac{16}{9}\Bigr) = \frac{8\pi}{3} - \frac{32}{9}.
  \]
:::

::: trap
text: |
  The area element in polar coordinates is \(dA = r\, dr\, d\theta\). Over the unit disk the integral of the constant \(1\) is
  \[
  \int_0^{2\pi}\int_0^1 r\, dr\, d\theta = \pi.
  \]
  That value is the area of the disk. The same bounds with the factor \(r\) omitted give
  \[
  \int_0^{2\pi}\int_0^1 1\, dr\, d\theta = 2\pi.
  \]
  The two values differ. Omitting \(r\) changes the result.
:::

::: going-deeper
title: Where the factor r comes from
text: |
  A small polar piece spans \(\Delta r\) in the radius and \(\Delta\theta\) in the angle. At radius \(r\) it is nearly a rectangle with sides \(\Delta r\) and \(r\,\Delta\theta\), so its area is about \(r\,\Delta r\,\Delta\theta\). Summing and taking the limit turns this into \(dA = r\,dr\,d\theta\). The extra \(r\) is the width of the piece in the angular direction, which grows with the radius.
:::

::: key-points
text: |
  - A region with the bounds \(\theta_0 \le \theta \le \theta_1\) and \(r_0 \le r \le r_1\) gives the double integral \(\int_{\theta_0}^{\theta_1}\int_{r_0}^{r_1} f(r, \theta)\, r\, dr\, d\theta\). The area element is \(dA = r\, dr\, d\theta\).
  - When the outer radius depends on the angle, the limits are \(0 \le r \le r(\theta)\).
  - To convert a Cartesian integrand, substitute \(x = r\cos\theta\) and \(y = r\sin\theta\), and keep the factor \(r\) from the area element.
  - The usual slip drops the factor \(r\) and integrates \(\int_0^{2\pi}\int_0^1 1\, dr\, d\theta = 2\pi\) over the unit disk. The area of the disk is \(\int_0^{2\pi}\int_0^1 r\, dr\, d\theta = \pi\).
:::

::: concept-question
id: l7-polar-integrals.q-481d16b5
question: |
  Which expression is the area element \(dA\) in polar coordinates?
options:
  - text: |
      \(dr\, d\theta\)
  - text: |
      \(r\, dr\, d\theta\)
    correct: true
  - text: |
      \(r^2\, dr\, d\theta\)
  - text: |
      \(\frac12 r^2\, d\theta\)
explanation: |
  A polar cell has sides \(\Delta r\) and \(r\Delta\theta\), so its area is \(r\,\Delta r\,\Delta\theta\). The area element is \(r\, dr\, d\theta\). The expression \(\frac12 r(\theta)^2\, d\theta\) is what remains after the \(r\) integral has been carried out for a region \(0 \le r \le r(\theta)\).
:::

::: concept-question
id: l7-polar-integrals.q-4bbdfc85
question: |
  The curve \(r = \cos\theta\) bounds a disk. Which bounds describe the interior of that disk, with each point counted once?
options:
  - text: |
      \(0 \le r \le \cos\theta\) and \(0 \le \theta \le 2\pi\)
  - text: |
      \(0 \le r \le \cos\theta\) and \(-\pi/2 \le \theta \le \pi/2\)
    correct: true
  - text: |
      \(0 \le r \le \cos\theta\) and \(0 \le \theta \le \pi/2\)
  - text: |
      \(0 \le r \le \tfrac{1}{2}\) and \(0 \le \theta \le 2\pi\)
explanation: |
  The curve \(r = \cos\theta\) is the circle of radius \(\tfrac{1}{2}\) centred at \(\bigl(\tfrac{1}{2}, 0\bigr)\). The upper limit \(\cos\theta\) is non-negative only for \(-\pi/2 \le \theta \le \pi/2\), and on that interval the radius sweeps the disk once. The other options fail for these reasons:

  - The range \(0 \le \theta \le \pi/2\) covers only the half of the disk above the \(x\)-axis.
  - For angles outside \(-\pi/2 \le \theta \le \pi/2\), \(\cos\theta\) is negative and no point of the disk lies in that direction. The formula would still return a positive number there, since \(\int_0^{\cos\theta} r\, dr = \tfrac{1}{2}\cos^2\theta\). A full turn therefore gives the area \(\tfrac{\pi}{2}\), twice the area \(\tfrac{\pi}{4}\) of the disk.
  - The bounds \(0 \le r \le \tfrac{1}{2}\) and \(0 \le \theta \le 2\pi\) describe a disk centred at the origin.
:::

::: exercise
id: l7-polar-integrals.15.2.1
number: "15.2.1"
tier: basic
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume above the \(xy\)-plane, under the surface \(r^2 = 2z\), and inside \(r = 2\).
solution: |
  The surface \(r^2 = 2z\) is the paraboloid \(z = r^2/2\). The region inside \(r = 2\), above \(z = 0\), is the disk \(0 \le r \le 2\), \(0 \le \theta \le 2\pi\).

  The volume is
  \[
  \int_0^{2\pi}\int_0^2 \frac{r^2}{2}\, r\, dr\, d\theta
  = \int_0^{2\pi}\int_0^2 \frac{r^3}{2}\, dr\, d\theta.
  \]
  The inner integral equals \(\frac18 r^4\) evaluated from \(0\) to \(2\), which is \(2\). The outer integral is \(\int_0^{2\pi} 2\, d\theta\). The volume is \(4\pi\).
provenance: handout-answer
steps:
  - |
    The surface is \(z = r^2/2\), and the disk has bounds \(0 \le r \le 2\), \(0 \le \theta \le 2\pi\).
  - |
    The integrand is \(\frac{r^2}{2} \cdot r\).
  - |
    The inner integral equals \(2\), and the volume is \(4\pi\).
verification:
  checks:
    - expr: integrate((r**2/2)*r, (r, 0, 2), (theta, 0, 2*pi))
      expected: "4*pi"
:::

::: exercise
id: l7-polar-integrals.15.2.2
number: "15.2.2"
tier: basic
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume inside both \(r = 1\) and \(r^2 + z^2 = 4\).
solution: |
  The cylinder \(r = 1\) cuts the sphere \(r^2 + z^2 = 4\). On the sphere, \(z = \pm\sqrt{4 - r^2}\), so the height at radius \(r\) is \(2\sqrt{4 - r^2}\). The cylinder keeps \(0 \le r \le 1\), and \(\theta\) runs from \(0\) to \(2\pi\).

  The volume is
  \[
  \int_0^{2\pi}\int_0^1 2\sqrt{4 - r^2}\, r\, dr\, d\theta.
  \]
  For the inner integral, set \(u = 4 - r^2\). Then \(du = -2r\, dr\), so the factor \(2r\, dr\) in the integrand equals \(-du\). The limits change:

  - \(r = 0\) becomes \(u = 4\),
  - \(r = 1\) becomes \(u = 3\).

  The inner integral equals
  \[
  \begin{aligned}
  \int_4^3 -\sqrt{u}\, du &= \int_3^4 \sqrt{u}\, du\\
  &= \frac23\bigl(8 - 3\sqrt{3}\bigr)\\
  &= \frac{16}{3} - 2\sqrt{3}.
  \end{aligned}
  \]
  Multiplication by the length \(2\pi\) of the outer interval gives the volume \(\frac{32\pi}{3} - 4\sqrt{3}\,\pi\).
provenance: handout-answer
steps:
  - |
    The height inside the cylinder and the sphere is \(2\sqrt{4 - r^2}\), with \(0 \le r \le 1\) and \(0 \le \theta \le 2\pi\).
  - |
    The substitution \(u = 4 - r^2\) evaluates the inner integral.
  - |
    The volume is \(\frac{32\pi}{3} - 4\sqrt{3}\,\pi\).
verification:
  checks:
    - expr: integrate(2*sqrt(4-r**2)*r, (r, 0, 1), (theta, 0, 2*pi))
      expected: "32*pi/3 - 4*sqrt(3)*pi"
:::

::: exercise
id: l7-polar-integrals.15.2.3
number: "15.2.3"
tier: basic
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume below \(z = \sqrt{1 - r^2}\) and above the top half of the cone \(z = r\).
solution: |
  The surfaces meet when \(\sqrt{1 - r^2} = r\). Squaring gives \(1 - r^2 = r^2\), so \(r^2 = \frac12\). Since \(r \ge 0\), the meeting radius is \(r = \frac{1}{\sqrt{2}}\). The angle \(\theta\) runs from \(0\) to \(2\pi\), and the height is \(\sqrt{1 - r^2} - r\).

  The volume is
  \[
  \int_0^{2\pi}\int_0^{1/\sqrt{2}} \bigl(\sqrt{1 - r^2} - r\bigr) r\, dr\, d\theta.
  \]
  The antiderivative of \(r\sqrt{1 - r^2}\) is \(-\frac13(1 - r^2)^{3/2}\). On the interval from \(0\) to \(\frac{1}{\sqrt{2}}\):

  - the integral of \(r\sqrt{1 - r^2}\) equals \(\frac13 - \frac{\sqrt{2}}{12}\),
  - the integral of \(r^2\) equals \(\frac{\sqrt{2}}{12}\).

  Subtracting the second from the first gives
  \[
  \frac13 - \frac{\sqrt{2}}{12} - \frac{\sqrt{2}}{12} = \frac13 - \frac{\sqrt{2}}{6} = \frac{2 - \sqrt{2}}{6}.
  \]
  Multiplication by \(2\pi\) gives the volume \(\dfrac{(2 - \sqrt{2})\pi}{3}\).
provenance: handout-answer
steps:
  - |
    The surfaces meet at \(r = 1/\sqrt{2}\), and \(\theta\) runs from \(0\) to \(2\pi\).
  - |
    The integrand is \((\sqrt{1 - r^2} - r)\, r\).
  - |
    The volume is \(\dfrac{(2 - \sqrt{2})\pi}{3}\).
verification:
  checks:
    - expr: integrate((sqrt(1-r**2)-r)*r, (r, 0, 1/sqrt(2)), (theta, 0, 2*pi))
      expected: "(2-sqrt(2))*pi/3"
:::

::: exercise
id: l7-polar-integrals.15.2.6
number: "15.2.6"
tier: basic
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume between \(x^2 + y^2 = z^2\) and \(x^2 + y^2 = z\).
solution: |
  In polar coordinates the cone \(x^2 + y^2 = z^2\), with \(z \ge 0\), is \(z = r\), and the paraboloid \(x^2 + y^2 = z\) is \(z = r^2\). They meet when \(r = r^2\) and \(r \ge 0\), so \(r = 0\) or \(r = 1\). On \(0 \le r \le 1\) the cone lies above the paraboloid, because \(r \ge r^2\). The angle runs from \(0\) to \(2\pi\).

  The volume is
  \[
  \begin{aligned}
  &\int_0^{2\pi}\int_0^1 (r - r^2)\, r\, dr\, d\theta\\
  &=2\pi\int_0^1 (r^2 - r^3)\, dr.
  \end{aligned}
  \]
  The antiderivative of \(r^2 - r^3\) is \(\frac{r^3}{3} - \frac{r^4}{4}\). From \(0\) to \(1\) it equals \(\frac13 - \frac14 = \frac{1}{12}\). The volume is \(2\pi \cdot \frac{1}{12} = \frac{\pi}{6}\).
provenance: handout-answer
steps:
  - |
    The surfaces are \(z = r\) and \(z = r^2\), meeting at \(r = 1\), with \(0 \le \theta \le 2\pi\).
  - |
    The height is \(r - r^2\), and the integrand includes the factor \(r\).
  - |
    The volume is \(\frac{\pi}{6}\).
verification:
  checks:
    - expr: integrate((r - r**2)*r, (r, 0, 1), (theta, 0, 2*pi))
      expected: "pi/6"
:::

::: exercise
id: l7-polar-integrals.15.2.13
number: "15.2.13"
tier: basic
topics: [double-integrals, polar-coordinates]
statement: |
  Compute \(\displaystyle\int_0^{a}\int_{-\sqrt{a^2 - x^2}}^{0} x^2 y\, dy\, dx\) by converting to polar coordinates, with \(a > 0\).
solution: |
  The region is the quarter disk of radius \(a\) in the fourth quadrant: \(0 \le x \le a\) and \(-\sqrt{a^2 - x^2} \le y \le 0\). In polar coordinates, \(\theta\) runs from \(-\pi/2\) to \(0\) and \(r\) runs from \(0\) to \(a\).

  Here \(x^2 y = r^3\cos^2\theta\sin\theta\). The Jacobian contributes another factor \(r\), so the integrand is \(r^4\cos^2\theta\sin\theta\). The integral is
  \[
  \int_{-\pi/2}^{0}\int_0^a r^4\cos^2\theta\sin\theta\, dr\, d\theta.
  \]
  The inner integral equals \(\frac{a^5}{5}\). For the outer integral, set \(v = \cos\theta\), so \(dv = -\sin\theta\, d\theta\). The limits change:

  - \(\theta = -\pi/2\) gives \(v = 0\),
  - \(\theta = 0\) gives \(v = 1\).

  Then
  \[
  \int_{-\pi/2}^{0} \cos^2\theta\sin\theta\, d\theta = -\int_0^1 v^2\, dv = -\frac13.
  \]
  The product is \(-\dfrac{a^5}{15}\).
provenance: handout-answer
steps:
  - |
    The region is the fourth-quadrant quarter disk, \(\theta\) from \(-\pi/2\) to \(0\) and \(r\) from \(0\) to \(a\).
  - |
    The integrand is \(r^4\cos^2\theta\sin\theta\).
  - |
    The value is \(-\dfrac{a^5}{15}\).
verification:
  checks:
    - expr: integrate(r**4*cos(theta)**2*sin(theta), (r, 0, a), (theta, -pi/2, 0))
      expected: "-a**5/15"
:::

::: exercise
id: l7-polar-integrals.15.2.14
number: "15.2.14"
tier: basic
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume under \(z = y^2 + x + 2\) above the region \(x^2 + y^2 \le 4\).
solution: |
  The region is the disk of radius \(2\), so \(0 \le r \le 2\) and \(0 \le \theta \le 2\pi\). In polar coordinates, \(z = r^2\sin^2\theta + r\cos\theta + 2\). Including the Jacobian, the integral is
  \[
  \int_0^{2\pi}\int_0^2 (r^2\sin^2\theta + r\cos\theta + 2)\, r\, dr\, d\theta.
  \]
  The inner integral, evaluated at \(r = 2\), equals \(4\sin^2\theta + \frac83\cos\theta + 4\).

  Integrate each term from \(0\) to \(2\pi\):

  - The integral of \(4\sin^2\theta = 2(1 - \cos 2\theta)\) equals \(4\pi\).
  - The integral of \(\frac83\cos\theta\) equals \(0\).
  - The integral of \(4\) equals \(8\pi\).

  The volume is \(4\pi + 8\pi = 12\pi\).
provenance: handout-answer
steps:
  - |
    The disk of radius \(2\) has bounds \(0 \le r \le 2\) and \(0 \le \theta \le 2\pi\).
  - |
    The integrand is \((r^2\sin^2\theta + r\cos\theta + 2)\, r\).
  - |
    The cosine term integrates to \(0\), and the volume is \(12\pi\).
verification:
  checks:
    - expr: integrate((r**2*sin(theta)**2 + r*cos(theta) + 2)*r, (r, 0, 2), (theta, 0, 2*pi))
      expected: "12*pi"
:::

::: exercise
id: l7-polar-integrals.15.2.15
number: "15.2.15"
tier: basic
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume between \(z = x^2 y^3\) and \(z = 1\) above the region \(x^2 + y^2 \le 1\).
solution: |
  The region \(D\) is the unit disk. The volume between the surfaces is
  \[
  \iint_D \bigl(1 - x^2 y^3\bigr)\, dA.
  \]
  The term \(x^2 y^3\) is odd in \(y\). The unit disk is symmetric in \(y\), so that term integrates to \(0\). The remaining integral is the area of the disk. The area is \(\pi\), and the volume is \(\pi\).
provenance: handout-answer
steps:
  - |
    The volume is the integral of \(1 - x^2 y^3\) over the unit disk.
  - |
    The term \(x^2 y^3\) is odd in \(y\) and integrates to \(0\).
  - |
    The remaining integral is the area \(\pi\).
verification:
  checks:
    - expr: integrate((1 - r**5*cos(theta)**2*sin(theta)**3)*r, (r, 0, 1), (theta, 0, 2*pi))
      expected: "pi"
:::

::: exercise
id: l7-polar-integrals.sheet-3-1-6
number: "15.1.8 (sheet 3, exercise 1.6)"
tier: basic
topics: [double-integrals, polar-coordinates]
statement: |
  Compute
  \[
  \int_0^{\pi/2}\int_0^{\cos\theta} r^2(\cos\theta - r)\, dr\, d\theta.
  \]
solution: |
  The inner integral is
  \[
  \begin{aligned}
  &\int_0^{\cos\theta} \bigl(r^2\cos\theta - r^3\bigr)\, dr\\
  &=\frac13\cos^4\theta - \frac14\cos^4\theta\\
  &=\frac{1}{12}\cos^4\theta.
  \end{aligned}
  \]
  The power-reduction formula gives
  \[
  \cos^4\theta = \frac38 + \frac12\cos 2\theta + \frac18\cos 4\theta.
  \]
  On \([0, \pi/2]\) the integrals of \(\cos 2\theta\) and \(\cos 4\theta\) equal \(0\), and
  \[
  \int_0^{\pi/2} \cos^4\theta\, d\theta = \frac38 \cdot \frac{\pi}{2} = \frac{3\pi}{16}.
  \]
  The original integral equals \(\frac{1}{12} \cdot \frac{3\pi}{16} = \frac{\pi}{64}\).
provenance: handout-answer
steps:
  - |
    The inner integral equals \(\frac{1}{12}\cos^4\theta\).
  - |
    The integral of \(\cos^4\theta\) from \(0\) to \(\pi/2\) equals \(\frac{3\pi}{16}\).
  - |
    The value is \(\frac{\pi}{64}\).
verification:
  checks:
    - expr: integrate(r**2*(cos(theta) - r), (r, 0, cos(theta)), (theta, 0, pi/2))
      expected: "pi/64"
:::

::: section
title: Area as a volume
:::

::: formal-statement
kind: method
title: Area as a volume
source:
  source: handout
  section: "15.2"
  page: 397
text: |
  It is possible to compute **areas as volumes**. Take the surface \(z = 1\). The volume under this plane and above a region in the \(xy\)-plane equals the area of the region, so
  \[
  \text{area} = \iint_D 1 \cdot r\, dr\, d\theta.
  \]
:::

::: plain-explanation
text: |
  The height is the constant \(1\), so the volume equals the area of \(D\). The factor \(r\) remains, because it belongs to the area element.
:::

::: tip
text: |
  For a region \(0 \le r \le r(\theta)\) the inner integral produces the familiar form \(\frac12 \int r(\theta)^2\, d\theta\).
:::

::: worked-example
title: Area between two polar curves
problem: |
  Find the area outside \(r = 2\) and inside \(r = 4\sin\theta\).
solution: |
  The curves meet when \(4\sin\theta = 2\), so \(\sin\theta = \frac12\). On the circle of diameter \(4\) along the positive \(y\)-axis, those angles are \(\theta = \pi/6\) and \(\theta = 5\pi/6\). The region has \(\pi/6 \le \theta \le 5\pi/6\) and \(2 \le r \le 4\sin\theta\). The area is the volume under \(z = 1\):
  \[
  \begin{aligned}
  &\int_{\pi/6}^{5\pi/6}\int_2^{4\sin\theta} r\, dr\, d\theta\\
  &=\int_{\pi/6}^{5\pi/6}\bigl(8\sin^2\theta - 2\bigr)\, d\theta.
  \end{aligned}
  \]
  The integrand simplifies by \(\sin^2\theta = \frac{1 - \cos 2\theta}{2}\):
  \[
  8\sin^2\theta - 2 = 2 - 4\cos 2\theta.
  \]
  An antiderivative is \(2\theta - 2\sin 2\theta\).

  - At \(\theta = 5\pi/6\), \(\sin 2\theta = \sin\frac{5\pi}{3} = -\frac{\sqrt{3}}{2}\), so the antiderivative equals \(\frac{5\pi}{3} + \sqrt{3}\).
  - At \(\theta = \pi/6\), \(\sin 2\theta = \sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}\), so the antiderivative equals \(\frac{\pi}{3} - \sqrt{3}\).

  The difference is \(\frac{4\pi}{3} + 2\sqrt{3}\). That difference is the area.
:::

::: guided-example
title: Area inside a cardioid
problem: |
  Find the area of the region inside \(r = 1 + \cos\theta\). Try each step on paper before you show it.
steps:
  - |
    The cardioid is traced once as \(\theta\) runs from \(0\) to \(2\pi\), with \(0 \le r \le 1 + \cos\theta\). Since \(\cos\theta \ge -1\), this \(r\) stays nonnegative. The area is the volume under \(z = 1\).
  - |
    The area integral is \(\int_0^{2\pi}\int_0^{1+\cos\theta} r\, dr\, d\theta\). The inner integral equals \(\frac12(1 + \cos\theta)^2\).
  - |
    Expand the integrand in \(\theta\):
    \[
    \begin{aligned}
    &\frac12(1 + \cos\theta)^2\\
    &=\frac34 + \cos\theta + \frac14\cos 2\theta.
    \end{aligned}
    \]
  - |
    Integrate from \(0\) to \(2\pi\). The integrals of \(\cos\theta\) and \(\cos 2\theta\) equal \(0\). The integral of \(\frac34\) equals \(\frac34 \cdot 2\pi = \frac{3\pi}{2}\). The area is \(\frac{3\pi}{2}\).
:::

::: key-points
text: |
  - The volume under the plane \(z = 1\) above a region \(D\) equals the area of \(D\), so \(\text{area} = \iint_D 1 \cdot r\, dr\, d\theta\).
  - The factor \(r\) stays in the integrand, because it belongs to the area element.
  - For a region \(0 \le r \le r(\theta)\) the inner integral leaves \(\frac12 \int r(\theta)^2\, d\theta\).
:::

::: concept-question
id: l7-polar-integrals.q-e5265fac
question: |
  The volume under the plane \(z = 1\) and above a region \(D\) equals which quantity?
options:
  - text: |
      The perimeter of \(D\).
  - text: |
      The area of \(D\).
    correct: true
  - text: |
      The integral of \(r\) along the boundary of \(D\).
explanation: |
  The height is \(1\), so the volume equals the area of \(D\). In polar coordinates that volume is \(\iint_D r\, dr\, d\theta\).
:::

::: sheet-item
id: l7-polar-integrals.sheet-polar-formula
category: formula
text: |
  \(x = r\cos\theta\), \(y = r\sin\theta\), and \(dA = r\, dr\, d\theta\). The integral of \(f\) is
  \[
  \int_{\theta_0}^{\theta_1}\int_{r_0}^{r_1} f(r, \theta)\, r\, dr\, d\theta.
  \]
  The area of \(D\) is
  \[
  \iint_D r\, dr\, d\theta.
  \]
:::

::: sheet-item
id: l7-polar-integrals.sheet-factor-r
category: trap
text: |
  The area element is \(r\, dr\, d\theta\). Over the unit disk, \(\int_0^{2\pi}\int_0^1 r\, dr\, d\theta = \pi\). The same bounds with the factor \(r\) omitted give \(2\pi\).
:::

::: sheet-item
id: l7-polar-integrals.sheet-disk-bounds
category: recognition
text: |
  - The **disk** \(x^2 + y^2 \le a^2\) has bounds \(0 \le r \le a\) and \(0 \le \theta \le 2\pi\).
  - A **sector** shortens the interval for \(\theta\).
  - An **annulus** starts \(r\) at a positive inner radius.
:::

::: exercise
id: l7-polar-integrals.15.2.4
number: "15.2.4"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume below \(z = r\), above the \(xy\)-plane, and inside \(r = \cos\theta\).
solution: |
  The curve \(r = \cos\theta\) for \(-\pi/2 \le \theta \le \pi/2\) is the disk of radius \(\frac12\) centred at \(\bigl(\frac12, 0\bigr)\). For each such \(\theta\), the radius runs from \(0\) to \(\cos\theta\). The height is \(z = r\), so the integrand, including the Jacobian, is \(r^2\).

  The volume is
  \[
  \int_{-\pi/2}^{\pi/2}\int_0^{\cos\theta} r^2\, dr\, d\theta
  = \int_{-\pi/2}^{\pi/2} \frac13\cos^3\theta\, d\theta.
  \]
  Write \(\cos^3\theta = \cos\theta\,(1 - \sin^2\theta)\). An antiderivative is \(\sin\theta - \frac13\sin^3\theta\).

  - At \(\pi/2\) it equals \(\frac23\).
  - At \(-\pi/2\) it equals \(-\frac23\).

  The difference is \(\frac43\).

  Multiplication by \(\frac13\) gives the volume \(\frac49\).
provenance: handout-answer
steps:
  - |
    The disk \(r = \cos\theta\) has \(-\pi/2 \le \theta \le \pi/2\) and \(0 \le r \le \cos\theta\).
  - |
    The integrand is \(r \cdot r = r^2\).
  - |
    The volume is \(\frac49\).
verification:
  checks:
    - expr: integrate(r**2, (r, 0, cos(theta)), (theta, -pi/2, pi/2))
      expected: "Rational(4, 9)"
:::

::: exercise
id: l7-polar-integrals.15.2.5
number: "15.2.5"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume below \(z = r\), above the \(xy\)-plane, and inside \(r = 1 + \cos\theta\).
solution: |
  The cardioid \(r = 1 + \cos\theta\) is traced for \(0 \le \theta \le 2\pi\), with \(0 \le r \le 1 + \cos\theta\). The height is \(z = r\), so the integrand, including the Jacobian, is \(r^2\).

  The volume is
  \[
  \begin{aligned}
  &\int_0^{2\pi}\int_0^{1+\cos\theta} r^2\, dr\, d\theta\\
  &=\int_0^{2\pi} \frac13(1 + \cos\theta)^3\, d\theta.
  \end{aligned}
  \]
  Expand
  \[
  \begin{aligned}
  (1 + \cos\theta)^3 &= 1 + 3\cos\theta + 3\cos^2\theta\\
  &\quad + \cos^3\theta.
  \end{aligned}
  \]
  On \([0, 2\pi]\):

  - The integral of \(1\) equals \(2\pi\).
  - The integrals of \(\cos\theta\) and \(\cos^3\theta\) equal \(0\).
  - The integral of \(\cos^2\theta = \frac{1 + \cos 2\theta}{2}\) equals \(\pi\).

  The integral of \((1 + \cos\theta)^3\) is therefore \(2\pi + 3\pi = 5\pi\). Multiplication by \(\frac13\) gives the volume \(\frac{5\pi}{3}\).
provenance: handout-answer
steps:
  - |
    The cardioid has \(0 \le \theta \le 2\pi\) and \(0 \le r \le 1 + \cos\theta\).
  - |
    The integrand is \(r^2\), so the \(\theta\) integrand is \(\frac13(1 + \cos\theta)^3\).
  - |
    The volume is \(\frac{5\pi}{3}\).
verification:
  checks:
    - expr: integrate(r**2, (r, 0, 1+cos(theta)), (theta, 0, 2*pi))
      expected: "5*pi/3"
:::

::: exercise
id: l7-polar-integrals.15.2.12
number: "15.2.12"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  Compute \(\displaystyle\int_{-3}^{3}\int_0^{\sqrt{9 - x^2}} \sin(x^2 + y^2)\, dy\, dx\) by converting to polar coordinates.
solution: |
  The region is the upper half-disk of radius \(3\): \(x\) runs from \(-3\) to \(3\), and \(y\) runs from \(0\) to \(\sqrt{9 - x^2}\). In polar coordinates, \(\theta\) runs from \(0\) to \(\pi\) and \(r\) runs from \(0\) to \(3\).

  The integrand \(\sin(x^2 + y^2)\) equals \(\sin(r^2)\). The area element contributes a factor \(r\), so the integral is
  \[
  \int_0^{\pi}\int_0^3 \sin(r^2)\, r\, dr\, d\theta.
  \]
  Set \(u = r^2\). Then \(du = 2r\, dr\). The inner integral equals
  \[
  \frac12\int_0^9 \sin u\, du = \frac12(1 - \cos 9).
  \]
  Multiplication by the length \(\pi\) of the outer interval gives \(\dfrac{(1 - \cos 9)\pi}{2}\).
provenance: handout-answer
steps:
  - |
    The region is the upper half-disk of radius \(3\), so \(0 \le \theta \le \pi\) and \(0 \le r \le 3\).
  - |
    The integrand is \(\sin(r^2)\, r\).
  - |
    The value is \(\dfrac{(1 - \cos 9)\pi}{2}\).
verification:
  checks:
    - expr: integrate(sin(r**2)*r, (r, 0, 3), (theta, 0, pi))
      expected: "(1-cos(9))*pi/2"
:::

::: exercise
id: l7-polar-integrals.15.2.16
number: "15.2.16"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume inside both \(x^2 + y^2 = 1\) and \(x^2 + z^2 = 1\).
solution: |
  The solid is the intersection of the two cylinders. In polar coordinates on the unit disk in the \(xy\)-plane, the second cylinder gives the height \(2\sqrt{1 - x^2} = 2\sqrt{1 - r^2\cos^2\theta}\), with \(0 \le r \le 1\) and \(0 \le \theta \le 2\pi\).

  Cross-sections perpendicular to the \(x\)-axis evaluate the volume directly. For \(x\) between \(-1\) and \(1\), both \(y\) and \(z\) run from \(-\sqrt{1 - x^2}\) to \(\sqrt{1 - x^2}\). The cross-section is a square of side \(2\sqrt{1 - x^2}\), so its area is \(4(1 - x^2)\).

  The volume is
  \[
  \int_{-1}^{1} 4(1 - x^2)\, dx = 8\int_0^1 (1 - x^2)\, dx.
  \]
  The antiderivative of \(1 - x^2\) is \(x - \frac{x^3}{3}\). From \(0\) to \(1\) it equals \(\frac23\). The volume is \(8 \cdot \frac23 = \frac{16}{3}\).
provenance: handout-answer
steps:
  - |
    For each \(x\) in \([-1, 1]\), the cross-section is a square of area \(4(1 - x^2)\).
  - |
    The volume integral is \(8\int_0^1 (1 - x^2)\, dx\).
  - |
    The volume is \(\frac{16}{3}\).
verification:
  checks:
    - expr: 8*integrate(1 - x**2, (x, 0, 1))
      expected: "Rational(16, 3)"
:::

::: exercise
id: l7-polar-integrals.15.2.18
number: "15.2.18"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  Consider the curve \(r = 1 + 4\sin(5\theta)\).

  a. Describe the graph from the equation. Give the maximum and minimum values of \(r\), the number of leaves, and how the inner leaves sit inside the outer leaves.

  b. Give an integral, or integrals, for the area outside a smaller leaf and inside a larger leaf.

  c. In the family \(r = 1 + a\cos(5\theta)\) with \(a \ge 1\), how does changing \(a\) change the relative sizes of the inner and outer leaves? Use the maximum and minimum values of \(r\).
solution: |
  a. The sine factor \(\sin(5\theta)\) ranges over \([-1, 1]\), so \(r = 1 + 4\sin(5\theta)\) ranges over \([-3, 5]\). The maximum value of \(r\) is \(5\). The minimum value of \(r\) is \(-3\).

  As \(\theta\) runs through \([0, 2\pi]\), the argument \(5\theta\) runs through an interval of length \(10\pi\), so \(\sin(5\theta)\) completes five periods. The curve meets the origin where \(r = 0\), that is where \(\sin(5\theta) = -\frac14\). Because the coefficient \(4\) is greater than \(1\), \(r\) changes sign in each period. Each period contributes:

  - one **outer leaf**, where \(r \ge 0\) and the leaf reaches distance \(5\) from the origin,
  - one **inner leaf**, where \(r \le 0\).

  A negative \(r\) is plotted in the opposite direction, so each inner leaf reaches distance \(3\) from the origin and sits inside an outer leaf. The graph has five outer leaves and five inner leaves.

  b. Let \(\alpha = \arcsin\frac14\). One pair of leaves corresponds to \(0 \le \theta \le \frac{2\pi}{5}\). On that interval the inner leaf is traced for \(\frac{\pi + \alpha}{5} \le \theta \le \frac{2\pi - \alpha}{5}\), and the outer leaf is traced on the rest of the interval. The area outside the smaller leaf and inside the larger leaf is
  \[
  \begin{aligned}
  &\frac12\int_0^{(\pi+\alpha)/5} (1 + 4\sin(5\theta))^2\, d\theta\\
  &\quad+ \frac12\int_{(2\pi-\alpha)/5}^{2\pi/5} (1 + 4\sin(5\theta))^2\, d\theta\\
  &\quad- \frac12\int_{(\pi+\alpha)/5}^{(2\pi-\alpha)/5} (1 + 4\sin(5\theta))^2\, d\theta.
  \end{aligned}
  \]

  c. For \(r = 1 + a\cos(5\theta)\) with \(a \ge 1\), the maximum of \(r\) is \(1 + a\) and the minimum is \(1 - a\). The outer leaves reach distance \(1 + a\).

  - When \(a = 1\), the minimum is \(0\), so each inner leaf shrinks to the origin.
  - When \(a > 1\), the minimum is negative, and each inner leaf reaches distance \(a - 1\).

  The ratio of the inner reach to the outer reach is \(\frac{a - 1}{a + 1}\). As \(a\) increases through \(a \ge 1\), this ratio increases, so the inner leaves become a larger fraction of the outer leaves.
provenance: written-for-site
steps:
  - |
    The range of \(r\) is \([-3, 5]\), with five outer leaves and five inner leaves.
  - |
    The area between one outer leaf and its inner leaf is written as a difference of \(\frac12\int r^2\, d\theta\).
  - |
    For \(a \ge 1\) the outer reach is \(1 + a\) and the inner reach is \(a - 1\), so the ratio is \(\frac{a - 1}{a + 1}\).
verification:
  checks:
    - expr: "(1 + 4*sin(5*t)).subs(t, pi/10)"
      expected: 5
    - expr: "(1 + 4*sin(5*t)).subs(t, 3*pi/10)"
      expected: -3
    - expr: "(1 + 4*sin(5*t)).subs(t, (pi + asin(Rational(1, 4)))/5)"
      expected: 0
    - expr: "(1 + 4*sin(5*t)).subs(t, (2*pi - asin(Rational(1, 4)))/5)"
      expected: 0
    - expr: "(1 + a*cos(5*t)).subs(t, 0) - (1 + a)"
      expected: 0
:::

::: exercise
id: l7-polar-integrals.15.2.19a
number: "15.2.19a"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  Consider \(\displaystyle\iint_D \frac{1}{\sqrt{x^2 + y^2}}\, dA\), where \(D\) is the unit disk centred at the origin. Why might this integral be considered improper?
solution: |
  The integrand \(\frac{1}{\sqrt{x^2 + y^2}}\) becomes arbitrarily large as \((x, y)\) approaches the origin. The unit disk contains the origin. The integral is improper because the integrand is unbounded at a point of the region.
provenance: written-for-site
steps:
  - |
    The integrand is unbounded at the origin, and the origin lies in the unit disk.
verification:
  checkable: false
  reason: |
    The answer is a reason the integral is improper, namely that the integrand is unbounded at the origin.
:::

::: exercise
id: l7-polar-integrals.15.2.19b
number: "15.2.19b"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  Let \(D\) be the unit disk centred at the origin, and consider the integrand \(\dfrac{1}{\sqrt{x^2 + y^2}}\). Compute the integral of this integrand over the annulus of outer radius \(1\) and inner radius \(\delta\), with \(0 < \delta < 1\).
solution: |
  On the annulus, \(\delta \le r \le 1\) and \(0 \le \theta \le 2\pi\). The integrand equals \(\frac{1}{r}\). Multiplication by the Jacobian \(r\) cancels that factor and leaves \(1\).

  The integral is
  \[
  \int_0^{2\pi}\int_{\delta}^{1} 1\, dr\, d\theta = 2\pi(1 - \delta).
  \]
provenance: written-for-site
steps:
  - |
    In polar coordinates the integrand \(1/r\) times the Jacobian \(r\) equals \(1\).
  - |
    The annulus has \(\delta \le r \le 1\) and \(0 \le \theta \le 2\pi\).
  - |
    The value is \(2\pi(1 - \delta)\).
verification:
  checks:
    - expr: integrate(1, (r, delta, 1), (theta, 0, 2*pi))
      expected: "2*pi*(1-delta)"
:::

::: exercise
id: l7-polar-integrals.15.2.19c
number: "15.2.19c"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  The integral of \(\dfrac{1}{\sqrt{x^2 + y^2}}\) over the annulus \(\delta \le \sqrt{x^2 + y^2} \le 1\) equals \(2\pi(1 - \delta)\). Find the value of the improper integral over the whole unit disk by letting \(\delta\) approach \(0\).
solution: |
  The value on the disk is the limit of the annulus integral as the inner radius \(\delta\) approaches \(0\):
  \[
  \lim_{\delta \to 0} 2\pi(1 - \delta) = 2\pi.
  \]
  The improper integral equals \(2\pi\).
provenance: handout-answer
steps:
  - |
    The disk integral is the limit of \(2\pi(1 - \delta)\) as \(\delta\) approaches \(0\).
  - |
    The limit equals \(2\pi\).
verification:
  checks:
    - expr: limit(2*pi*(1 - delta), delta, 0)
      expected: "2*pi"
:::

::: exercise
id: l7-polar-integrals.15.2.19d
number: "15.2.19d"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  Consider the improper integral of \(\dfrac{1}{(x^2 + y^2)^{\lambda}}\) over the unit disk centred at the origin. For which \(\lambda\) is this integral finite?
solution: |
  In polar coordinates, \((x^2 + y^2)^{\lambda} = r^{2\lambda}\), so the integrand is \(r^{-2\lambda}\). The Jacobian contributes a factor \(r\), and the product is \(r^{1 - 2\lambda}\). The angular integral contributes a factor \(2\pi\). Convergence is decided by the radial integral \(\int_0^1 r^{1 - 2\lambda}\, dr\).

  Near \(0\), the power \(r^{1 - 2\lambda}\) has a finite integral when the exponent is greater than \(-1\):
  \[
  1 - 2\lambda > -1.
  \]
  Subtracting \(1\) gives \(-2\lambda > -2\). Dividing by \(-2\) reverses the inequality, so \(\lambda < 1\).

  The improper integral is finite for \(\lambda < 1\).
provenance: written-for-site
steps:
  - |
    After multiplication by the Jacobian, the radial integrand is \(r^{1 - 2\lambda}\).
  - |
    The integral \(\int_0^1 r^{1 - 2\lambda}\, dr\) converges when \(\lambda < 1\).
verification:
  checkable: false
  reason: |
    The answer is the condition \(\lambda < 1\), obtained from the radial integrand \(r^{1 - 2\lambda}\).
:::

::: exercise
id: l7-polar-integrals.sheet-3-3-6
number: "sheet 3, exercise 3.6"
tier: standard
topics: [double-integrals, polar-coordinates]
statement: |
  Find the volume between \(x^2 + y^2 = z^2\) and \(x^2 + y^2 = z\).
solution: |
  Take the cone with \(z \ge 0\), so \(z = r\), and the paraboloid \(z = r^2\). They meet when \(r = r^2\) with \(r \ge 0\), hence at \(r = 0\) and at \(r = 1\). For \(0 \le r \le 1\), the inequality \(r \ge r^2\) puts the cone above the paraboloid. The angle runs through a full turn.

  The volume is
  \[
  \begin{aligned}
  &\int_0^{2\pi}\int_0^1 (r - r^2)\, r\, dr\, d\theta\\
  &=2\pi\int_0^1 \bigl(r^2 - r^3\bigr)\, dr\\
  &=2\pi\Bigl[\frac{r^3}{3} - \frac{r^4}{4}\Bigr]_0^1\\
  &=2\pi\cdot\frac{1}{12}\\
  &=\frac{\pi}{6}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - |
    The cone \(z = r\) lies above the paraboloid \(z = r^2\) for \(0 \le r \le 1\).
  - |
    The integrand is \((r - r^2)\, r\), and \(\theta\) runs from \(0\) to \(2\pi\).
  - |
    The volume is \(\frac{\pi}{6}\).
verification:
  checks:
    - expr: integrate((r - r**2)*r, (r, 0, 1), (theta, 0, 2*pi))
      expected: "pi/6"
:::

::: exercise
id: l7-polar-integrals.final-2024-q4c
tier: exam
topics: [double-integrals, polar-coordinates]
examBlock: double-integrals
pastExam:
  year: 2024
  paper: Final
  question: "4c"
  points: 2
statement: |
  Compute the integral

  c) of \( x^2 \) in the domain bounded by the curve \( x^2 + y^2 = 2 \).
solution: |
  The domain bounded by the curve is the disk \(x^2+y^2\leq2\). In polar coordinates,
  \[
  \begin{aligned}
  x&=r\cos\theta,\qquad dA=r\,dr\,d\theta,\\
  0&\leq r\leq\sqrt2,\quad 0\leq\theta\leq2\pi.
  \end{aligned}
  \]
  Hence,
  \[
  \begin{aligned}
  I&=\int_0^{2\pi}\int_0^{\sqrt2}r^2\cos^2\theta\,r\,dr\,d\theta\\
  &=\left[\frac{r^4}{4}\right]_0^{\sqrt2}\int_0^{2\pi}\cos^2\theta\,d\theta\\
  &=1\cdot\pi=\pi.
  \end{aligned}
  \]

  The value of the integral over the disk is \( \pi \).
provenance: written-for-site
steps:
  - The solution identifies the disk and gives its polar-coordinate bounds.
  - The solution includes the polar Jacobian, evaluates the integral and states its value.
verification:
  checks:
    - expr: integrate(r**3*cos(t)**2, (r, 0, sqrt(2)), (t, 0, 2*pi))
      expected: "pi"
:::

::: exercise
id: l7-polar-integrals.final-2025-q4c
tier: exam
topics: [double-integrals, polar-coordinates]
examBlock: double-integrals
pastExam:
  year: 2025
  paper: Final
  question: "4c"
  points: 2
statement: |
  Compute the integral

  c) of \( y/x \) in the domain bounded by \( x^2 + y^2 = 2 \) and \( 0 \leq y \leq x \).
solution: |
  The inequalities \(0\leq y\leq x\) cut from the disk \(x^2+y^2\leq2\) the sector
  \[
  0\leq r\leq\sqrt2,\qquad 0\leq\theta\leq\frac{\pi}{4}.
  \]
  Since \(y/x=\tan\theta\) and \(dA=r\,dr\,d\theta\),
  \[
  \begin{aligned}
  I&=\int_0^{\pi/4}\int_0^{\sqrt2}r\tan\theta\,dr\,d\theta\\
  &=\left[\frac{r^2}{2}\right]_0^{\sqrt2}\left[-\log(\cos\theta)\right]_0^{\pi/4}\\
  &=\log\sqrt2=\frac{\log2}{2}.
  \end{aligned}
  \]

  The value of the integral over the sector is \( \frac{\log2}{2} \).
provenance: written-for-site
steps:
  - The solution identifies the sector of the disk and gives its polar-coordinate bounds.
  - The solution includes the polar Jacobian, evaluates the integral and states its value.
verification:
  checks:
    - expr: integrate(r*tan(t), (r, 0, sqrt(2)), (t, 0, pi/4))
      expected: "log(2)/2"
:::

::: exercise
id: l7-polar-integrals.retake-2023-q4
tier: exam
topics: [double-integrals, polar-coordinates]
examBlock: double-integrals
pastExam:
  year: 2023
  paper: Retake
  question: "4"
  points: 3
statement: |
  Compute the integral of \(\sqrt{x^2 + y^2}\) on the first-quadrant region bounded by \(x^2 + y^2 = 2\).
solution: |
  The region is the quarter disk \(x \ge 0\), \(y \ge 0\), \(x^2 + y^2 \le 2\). Its polar bounds are \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le \pi/2\).

  The integrand \(\sqrt{x^2 + y^2}\) equals \(r\). The area element contributes another factor \(r\), so the integrand is \(r^2\). The integral is
  \[
  \int_0^{\pi/2}\int_0^{\sqrt{2}} r^2\, dr\, d\theta.
  \]
  The inner integral equals \(\frac{r^3}{3}\) at \(r = \sqrt{2}\), which is \(\frac{2\sqrt{2}}{3}\). The outer integral multiplies by \(\frac{\pi}{2}\). The value is \(\dfrac{\pi\sqrt{2}}{3}\).
provenance: written-for-site
steps:
  - |
    The region is the first-quadrant quarter disk, \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le \pi/2\).
  - |
    The integrand, including the Jacobian, is \(r^2\).
  - |
    The value is \(\dfrac{\pi\sqrt{2}}{3}\).
verification:
  checks:
    - expr: integrate(r**2, (r, 0, sqrt(2)), (theta, 0, pi/2))
      expected: "pi*sqrt(2)/3"
:::

::: exercise
id: l7-polar-integrals.mock-exam-1-q3
number: "mock exam 1, exercise 3"
tier: exam
topics: [double-integrals, polar-coordinates]
examBlock: double-integrals
pastExam:
  year: 2022
  paper: Mock exam
  question: "3"
  points: 1
statement: |
  Compute the integral of \(\sqrt{x^2 + y^2}\) on the disk \(x^2 + y^2 = 2\).
solution: |
  The domain is the full disk \(x^2 + y^2 \le 2\). Its polar bounds are \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le 2\pi\).

  The integrand \(\sqrt{x^2 + y^2}\) equals \(r\), and the Jacobian contributes another factor \(r\). The integral is
  \[
  \int_0^{2\pi}\int_0^{\sqrt{2}} r^2\, dr\, d\theta.
  \]
  The inner integral equals \(\frac{2\sqrt{2}}{3}\). The outer integral multiplies by \(2\pi\). The value is \(\dfrac{4\pi\sqrt{2}}{3}\).
provenance: written-for-site
steps:
  - |
    The region is the full disk, \(0 \le r \le \sqrt{2}\) and \(0 \le \theta \le 2\pi\).
  - |
    The integrand, including the Jacobian, is \(r^2\).
  - |
    The value is \(\dfrac{4\pi\sqrt{2}}{3}\).
verification:
  checks:
    - expr: integrate(r**2, (r, 0, sqrt(2)), (theta, 0, 2*pi))
      expected: "4*pi*sqrt(2)/3"
:::

::: exercise
id: l7-polar-integrals.handout-10-1-1
number: "10.1.1"
tier: basic
topics:
  - polar-coordinates
statement: |
  Plot these polar points \((r, \theta)\) on one graph and give the rectangular coordinates of each: \(\bigl(2, \tfrac{\pi}{3}\bigr)\), \(\bigl(-3, \tfrac{\pi}{2}\bigr)\), \(\bigl(-2, -\tfrac{\pi}{4}\bigr)\), \(\bigl(\tfrac12, \pi\bigr)\), \(\bigl(1, \tfrac{4\pi}{3}\bigr)\) and \(\bigl(0, \tfrac{3\pi}{2}\bigr)\).
solution: |
  Each point has rectangular coordinates \(x = r\cos\theta\) and \(y = r\sin\theta\). A negative \(r\) places the point on the ray opposite to the angle \(\theta\).

  - \(\bigl(2, \tfrac{\pi}{3}\bigr)\): \(x = 2\cos\frac{\pi}{3} = 1\) and \(y = 2\sin\frac{\pi}{3} = \sqrt{3}\). The point \((1, \sqrt{3})\) lies in the first quadrant, at distance \(2\) from the origin along the ray at \(60^\circ\).
  - \(\bigl(-3, \tfrac{\pi}{2}\bigr)\): \(x = -3\cos\frac{\pi}{2} = 0\) and \(y = -3\sin\frac{\pi}{2} = -3\). The ray \(\theta = \pi/2\) is the positive \(y\)-axis, and the negative \(r\) reverses it, so the point \((0, -3)\) lies on the negative \(y\)-axis.
  - \(\bigl(-2, -\tfrac{\pi}{4}\bigr)\): \(x = -2\cos\bigl(-\frac{\pi}{4}\bigr) = -\sqrt{2}\) and \(y = -2\sin\bigl(-\frac{\pi}{4}\bigr) = \sqrt{2}\). The ray at \(-45^\circ\) points into the fourth quadrant, and the negative \(r\) reverses it, so the point \((-\sqrt{2}, \sqrt{2})\) lies in the second quadrant.
  - \(\bigl(\tfrac12, \pi\bigr)\): \(x = \frac12\cos\pi = -\frac12\) and \(y = \frac12\sin\pi = 0\). The point \(\bigl(-\frac12, 0\bigr)\) lies on the negative \(x\)-axis.
  - \(\bigl(1, \tfrac{4\pi}{3}\bigr)\): \(x = \cos\frac{4\pi}{3} = -\frac12\) and \(y = \sin\frac{4\pi}{3} = -\frac{\sqrt{3}}{2}\). The point \(\bigl(-\frac12, -\frac{\sqrt{3}}{2}\bigr)\) lies in the third quadrant, on the unit circle.
  - \(\bigl(0, \tfrac{3\pi}{2}\bigr)\): \(x = 0\) and \(y = 0\). Every pair with \(r = 0\) is the origin, whatever the angle.

  The rectangular coordinates are \((1, \sqrt{3})\), \((0, -3)\), \((-\sqrt{2}, \sqrt{2})\), \(\bigl(-\frac12, 0\bigr)\), \(\bigl(-\frac12, -\frac{\sqrt{3}}{2}\bigr)\) and \((0, 0)\).
provenance: written-for-site
steps:
  - |
    The conversion is \(x = r\cos\theta\), \(y = r\sin\theta\).
  - |
    A negative \(r\) reverses the direction of the ray.
  - |
    The six points are \((1, \sqrt{3})\), \((0, -3)\), \((-\sqrt{2}, \sqrt{2})\), \(\bigl(-\frac12, 0\bigr)\), \(\bigl(-\frac12, -\frac{\sqrt{3}}{2}\bigr)\) and the origin.
verification:
  checks:
    - expr: '(2*cos(pi/3), 2*sin(pi/3))'
      expected: "(1, sqrt(3))"
    - expr: '(-3*cos(pi/2), -3*sin(pi/2))'
      expected: "(0, -3)"
    - expr: '(-2*cos(-pi/4), -2*sin(-pi/4))'
      expected: "(-sqrt(2), sqrt(2))"
    - expr: '(Rational(1, 2)*cos(pi), Rational(1, 2)*sin(pi))'
      expected: "(-Rational(1, 2), 0)"
    - expr: '(cos(4*pi/3), sin(4*pi/3))'
      expected: "(-Rational(1, 2), -sqrt(3)/2)"
    - expr: '(0*cos(3*pi/2), 0*sin(3*pi/2))'
      expected: "(0, 0)"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-2
number: "10.1.2"
tier: basic
topics:
  - polar-coordinates
statement: |
  Find an equation in polar coordinates that has the same graph as the rectangular equation \(y = 3x\).
solution: |
  Substitute \(x = r\cos\theta\) and \(y = r\sin\theta\):
  \[
  r\sin\theta = 3r\cos\theta.
  \]
  The origin satisfies the equation, and the origin is the point with \(r = 0\). For \(r \ne 0\), divide by \(r\) to get \(\sin\theta = 3\cos\theta\). If \(\cos\theta\) were \(0\), then \(\sin\theta\) would be \(0\) as well, and no angle has both. So \(\cos\theta \ne 0\), and dividing by it gives
  \[
  \tan\theta = 3.
  \]
  The line through the origin with slope \(3\) is the set of points with \(\theta = \arctan 3\), where \(r\) takes every real value. The origin belongs to it at \(r = 0\).

  The polar equation is \(\theta = \arctan 3\).
provenance: handout-answer
steps:
  - |
    Substituting gives \(r\sin\theta = 3r\cos\theta\).
  - |
    For \(r \ne 0\) this gives \(\tan\theta = 3\).
  - |
    The line is \(\theta = \arctan 3\), with \(r\) any real number.
verification:
  checks:
    - expr: 'tan(atan(3))'
      expected: "3"
    - expr: 'sin(atan(3))/cos(atan(3))'
      expected: "3"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-6
number: "10.1.6"
tier: standard
topics:
  - polar-coordinates
statement: |
  Find a polar equation with the same graph as \(y = x^3\).
solution: |
  Substitute \(x = r\cos\theta\) and \(y = r\sin\theta\):
  \[
  r\sin\theta = r^3\cos^3\theta.
  \]
  The origin satisfies this equation. For \(r \ne 0\), divide by \(r\):
  \[
  \sin\theta = r^2\cos^3\theta.
  \]
  Solve for \(r^2\) at the angles with \(\cos\theta \ne 0\):
  \[
  r^2 = \frac{\sin\theta}{\cos^3\theta} = \sin\theta\,\sec^3\theta.
  \]
  At \(\theta = 0\) this gives \(r = 0\), so the origin is on the curve. The right side is nonnegative only when \(\sin\theta\) and \(\cos\theta\) have the same sign, which is the first and third quadrants. The two signs of \(r\) give the two branches of the cubic.

  Check at \(\theta = \pi/4\). Then \(r^2 = \frac{\sqrt{2}/2}{(\sqrt{2}/2)^3} = 2\), so \(r = \sqrt{2}\), and the point is \((1, 1)\). It satisfies \(y = x^3\).

  The polar equation is \(r^2 = \sin\theta\,\sec^3\theta\).
provenance: handout-answer
steps:
  - |
    Substituting gives \(r\sin\theta = r^3\cos^3\theta\).
  - |
    Dividing by \(r\) and solving for \(r^2\) gives \(r^2 = \sin\theta\sec^3\theta\).
  - |
    At \(\theta = \pi/4\) the point is \((1, 1)\), which lies on \(y = x^3\).
verification:
  checks:
    - expr: 'sin(t) - (sin(t)/cos(t)**3)*cos(t)**3'
      expected: "0"
    - expr: '(sqrt(2)*sin(pi/4), (sqrt(2)*cos(pi/4))**3)'
      expected: "(1, 1)"
    - expr: '(sin(pi/4)/cos(pi/4)**3)'
      expected: "2"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-8
number: "10.1.8"
tier: standard
topics:
  - polar-coordinates
statement: |
  Find a polar equation with the same graph as \(y = 5x + 2\).
solution: |
  Substitute \(x = r\cos\theta\) and \(y = r\sin\theta\):
  \[
  r\sin\theta = 5r\cos\theta + 2.
  \]
  The line does not pass through the origin, so no factor \(r\) cancels. Collect the terms in \(r\):
  \[
  r\,(\sin\theta - 5\cos\theta) = 2.
  \]
  At the angles where \(\sin\theta \ne 5\cos\theta\), divide by the bracket:
  \[
  r = \frac{2}{\sin\theta - 5\cos\theta}.
  \]
  The angle \(\theta = \arctan 5\) (and \(\theta = \arctan 5 + \pi\)) is excluded, since the ray in that direction is parallel to the line and never meets it.

  Check two points. At \(\theta = \pi/2\) the formula gives \(r = 2\), the point \((0, 2)\), and \(2 = 5\cdot 0 + 2\). At \(\theta = \pi\) it gives \(r = \frac{2}{5}\), the point \(\bigl(-\frac25, 0\bigr)\), and \(0 = 5\bigl(-\frac25\bigr) + 2\).

  The polar equation is \(r = \dfrac{2}{\sin\theta - 5\cos\theta}\).
provenance: handout-answer
steps:
  - |
    Substituting gives \(r\sin\theta = 5r\cos\theta + 2\).
  - |
    Collecting the terms in \(r\) gives \(r(\sin\theta - 5\cos\theta) = 2\).
  - |
    Dividing gives \(r = 2/(\sin\theta - 5\cos\theta)\).
verification:
  checks:
    - expr: '(2/(sin(t) - 5*cos(t)))*(sin(t) - 5*cos(t))'
      expected: "2"
    - expr: '2*sin(pi/2) - (5*2*cos(pi/2) + 2)'
      expected: "0"
    - expr: '(2*cos(pi)/(sin(pi) - 5*cos(pi)), 2*sin(pi)/(sin(pi) - 5*cos(pi)))'
      expected: "(-Rational(2, 5), 0)"
    - expr: 'sin(atan(5)) - 5*cos(atan(5))'
      expected: "0"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-9
number: "10.1.9"
tier: basic
topics:
  - polar-coordinates
statement: |
  Find a polar equation with the same graph as \(x = 2\).
solution: |
  Substitute \(x = r\cos\theta\):
  \[
  r\cos\theta = 2.
  \]
  The origin does not lie on the line, so no factor \(r\) cancels. At the angles with \(\cos\theta \ne 0\), divide by \(\cos\theta\):
  \[
  r = \frac{2}{\cos\theta} = 2\sec\theta.
  \]
  The curve is the vertical line through \((2, 0)\). The angle \(\theta = 0\) gives the point \((2, 0)\), and \(\theta\) between \(-\pi/2\) and \(\pi/2\) gives the whole line, since \(y = 2\tan\theta\) takes every real value.

  The polar equation is \(r = 2\sec\theta\).
provenance: handout-answer
steps:
  - |
    Substituting gives \(r\cos\theta = 2\).
  - |
    Dividing by \(\cos\theta\) gives \(r = 2\sec\theta\).
verification:
  checks:
    - expr: '(2/cos(t))*cos(t)'
      expected: "2"
    - expr: '(2/cos(t))*sin(t)'
      expected: "2*tan(t)"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-10
number: "10.1.10"
tier: standard
topics:
  - polar-coordinates
statement: |
  Find a polar equation with the same graph as \(y = x^2 + 1\).
solution: |
  Substitute \(x = r\cos\theta\) and \(y = r\sin\theta\):
  \[
  r\sin\theta = r^2\cos^2\theta + 1.
  \]
  Move every term to one side:
  \[
  0 = r^2\cos^2\theta - r\sin\theta + 1.
  \]
  This is a quadratic equation in \(r\). The parabola does not pass through the origin, so no factor \(r\) cancels, and the equation stays in this implicit form.

  The quadratic formula would give \(r\) when \(\cos\theta \ne 0\), with discriminant \(\sin^2\theta - 4\cos^2\theta\). The discriminant is nonnegative exactly when \(\tan^2\theta \ge 4\), so only the directions steeper than slope \(2\) in absolute value meet the parabola. At \(\theta = \arctan 2\) the discriminant is \(0\): \(\sin^2\theta = \frac45\) and \(\cos^2\theta = \frac15\). The double root is \(r = \sqrt{5}\), and the point \((1, 2)\) is where the line \(y = 2x\) touches the parabola.

  The polar equation is \(0 = r^2\cos^2\theta - r\sin\theta + 1\).
provenance: handout-answer
steps:
  - |
    Substituting gives \(r\sin\theta = r^2\cos^2\theta + 1\).
  - |
    Moving all terms to one side gives \(0 = r^2\cos^2\theta - r\sin\theta + 1\).
  - |
    The point \((1, 2)\) at \(\theta = \arctan 2\), \(r = \sqrt{5}\) satisfies the equation.
verification:
  checks:
    - expr: 'sqrt(5)**2*cos(atan(2))**2 - sqrt(5)*sin(atan(2)) + 1'
      expected: "0"
    - expr: 'sin(atan(2))**2 - 4*cos(atan(2))**2'
      expected: "0"
    - expr: '(1**2*cos(pi/2)**2 - 1*sin(pi/2) + 1)'
      expected: "0"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-12
number: "10.1.12"
tier: standard
topics:
  - polar-coordinates
statement: |
  Find a polar equation with the same graph as \(y = x^2 + y^2\).
solution: |
  Substitute \(y = r\sin\theta\) and \(x^2 + y^2 = r^2\):
  \[
  r\sin\theta = r^2.
  \]
  The origin satisfies this equation. For \(r \ne 0\), divide by \(r\):
  \[
  r = \sin\theta.
  \]
  At \(\theta = 0\) this gives \(r = 0\), so the origin lies on the curve \(r = \sin\theta\) as well, and the two graphs agree.

  The curve is a circle. Multiplying \(r = \sin\theta\) by \(r\) gives \(x^2 + y^2 = y\), which is \(x^2 + \bigl(y - \frac12\bigr)^2 = \frac14\), the circle with centre \(\bigl(0, \frac12\bigr)\) and radius \(\frac12\). It is traced once as \(\theta\) runs from \(0\) to \(\pi\).

  The polar equation is \(r = \sin\theta\).
provenance: handout-answer
steps:
  - |
    Substituting gives \(r\sin\theta = r^2\).
  - |
    Dividing by \(r\) gives \(r = \sin\theta\).
  - |
    The graph is the circle with centre \(\bigl(0, \frac12\bigr)\) and radius \(\frac12\).
verification:
  checks:
    - expr: '((sin(pi/6)*cos(pi/6))**2 + (sin(pi/6)*sin(pi/6))**2) - sin(pi/6)*sin(pi/6)'
      expected: "0"
    - expr: 'expand(x**2 + (y - Rational(1, 2))**2 - Rational(1, 4) - (x**2 + y**2 - y))'
      expected: "0"
    - expr: 'sin(pi/2)'
      expected: "1"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-13
number: "10.1.13"
tier: basic
topics:
  - polar-coordinates
statement: |
  Sketch the curve \(r = \cos\theta\). Describe it: name the curve, give its centre and radius, and give the interval of \(\theta\) over which it is traced once.
solution: |
  Multiply the equation by \(r\):
  \[
  r^2 = r\cos\theta.
  \]
  In rectangular coordinates this is \(x^2 + y^2 = x\). Completing the square gives
  \[
  \Bigl(x - \frac12\Bigr)^2 + y^2 = \frac14.
  \]
  The curve is the circle with centre \(\bigl(\frac12, 0\bigr)\) and radius \(\frac12\).

  The sketch follows from a few values.

  - At \(\theta = 0\), \(r = 1\), the point \((1, 0)\) on the \(x\)-axis. This is the largest value of \(r\) and the point of the circle farthest from the origin.
  - At \(\theta = \pm\frac{\pi}{3}\), \(r = \frac12\), the points \(\bigl(\frac14, \pm\frac{\sqrt{3}}{4}\bigr)\).
  - At \(\theta = \pm\frac{\pi}{2}\), \(r = 0\), so the curve passes through the origin, tangent to the \(y\)-axis.

  For \(\theta\) between \(-\frac{\pi}{2}\) and \(\frac{\pi}{2}\), \(r \ge 0\), and the curve runs once around the circle. For \(\theta\) between \(\frac{\pi}{2}\) and \(\frac{3\pi}{2}\), \(r\) is negative and the same points are traced again.

  The curve is the circle with centre \(\bigl(\frac12, 0\bigr)\) and radius \(\frac12\), traced once for \(-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}\).
provenance: written-for-site
steps:
  - |
    Multiplying by \(r\) gives \(x^2 + y^2 = x\).
  - |
    Completing the square gives the circle with centre \(\bigl(\frac12, 0\bigr)\) and radius \(\frac12\).
  - |
    The curve is traced once for \(-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}\).
verification:
  checks:
    - expr: 'expand((x - Rational(1, 2))**2 + y**2 - Rational(1, 4) - (x**2 + y**2 - x))'
      expected: "0"
    - expr: '(cos(0), cos(pi/3), cos(pi/2), cos(-pi/2))'
      expected: "(1, Rational(1, 2), 0, 0)"
    - expr: '((cos(pi/3)*cos(pi/3) - Rational(1, 2))**2 + (cos(pi/3)*sin(pi/3))**2)'
      expected: "Rational(1, 4)"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-14
number: "10.1.14"
tier: standard
topics:
  - polar-coordinates
statement: |
  Sketch the curve \(r = \sin\bigl(\theta + \tfrac{\pi}{4}\bigr)\). Describe it: name the curve, give its centre and radius, the largest value of \(r\), and the angles at which it passes through the origin.
solution: |
  The sine addition formula gives
  \[
  \sin\Bigl(\theta + \frac{\pi}{4}\Bigr) = \frac{\sin\theta + \cos\theta}{\sqrt{2}}.
  \]
  So the equation is \(r = \frac{\sin\theta + \cos\theta}{\sqrt{2}}\). Multiply by \(r\) and substitute \(x = r\cos\theta\), \(y = r\sin\theta\):
  \[
  x^2 + y^2 = \frac{x + y}{\sqrt{2}}.
  \]
  Completing the square in \(x\) and in \(y\) gives
  \[
  \Bigl(x - \frac{1}{2\sqrt{2}}\Bigr)^2 + \Bigl(y - \frac{1}{2\sqrt{2}}\Bigr)^2 = \frac14.
  \]
  The curve is the circle with centre \(\bigl(\frac{1}{2\sqrt{2}}, \frac{1}{2\sqrt{2}}\bigr)\) and radius \(\frac12\). The centre is at distance \(\sqrt{2\cdot\frac18} = \frac12\) from the origin, so the circle passes through the origin.

  The sketch follows from the sine of \(\theta + \frac{\pi}{4}\).

  - The largest value \(r = 1\) occurs when \(\theta + \frac{\pi}{4} = \frac{\pi}{2}\), that is at \(\theta = \frac{\pi}{4}\). The point is \(\bigl(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\bigr)\), the end of the diameter through the origin.
  - The value \(r = 0\) occurs when \(\theta + \frac{\pi}{4} = 0\) or \(\pi\), that is at \(\theta = -\frac{\pi}{4}\) and \(\theta = \frac{3\pi}{4}\). The circle is tangent to the line \(y = -x\) at the origin.
  - For \(-\frac{\pi}{4} \le \theta \le \frac{3\pi}{4}\), \(r \ge 0\) and the circle is traced once. For the next half turn \(r\) is negative and the same points are traced again.

  The curve is the circle with centre \(\bigl(\frac{1}{2\sqrt{2}}, \frac{1}{2\sqrt{2}}\bigr)\) and radius \(\frac12\). It is the circle \(r = \sin\theta\) turned clockwise by \(\frac{\pi}{4}\) about the origin.
provenance: written-for-site
steps:
  - |
    The addition formula gives \(r = (\sin\theta + \cos\theta)/\sqrt{2}\).
  - |
    Multiplying by \(r\) gives \(x^2 + y^2 = (x + y)/\sqrt{2}\), a circle of radius \(\frac12\) through the origin.
  - |
    The largest \(r\) is \(1\) at \(\theta = \pi/4\), and \(r = 0\) at \(\theta = -\pi/4\) and \(3\pi/4\).
verification:
  checks:
    - expr: 'expand_trig(sin(t + pi/4))'
      expected: "(sin(t) + cos(t))/sqrt(2)"
    - expr: 'expand((x - 1/(2*sqrt(2)))**2 + (y - 1/(2*sqrt(2)))**2 - Rational(1, 4) - (x**2 + y**2 - (x + y)/sqrt(2)))'
      expected: "0"
    - expr: 'sqrt(2*(1/(2*sqrt(2)))**2)'
      expected: "Rational(1, 2)"
    - expr: '(sin(pi/4 + pi/4), sin(-pi/4 + pi/4), sin(3*pi/4 + pi/4))'
      expected: "(1, 0, 0)"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-15
number: "10.1.15"
tier: basic
topics:
  - polar-coordinates
statement: |
  Sketch the curve \(r = -\sec\theta\). Describe it: name the curve and give the angles at which it is defined.
solution: |
  Write \(\sec\theta = \frac{1}{\cos\theta}\) and multiply by \(\cos\theta\):
  \[
  r\cos\theta = -1.
  \]
  Since \(x = r\cos\theta\), this is the line \(x = -1\).

  The sketch follows from a few values.

  - At \(\theta = 0\), \(r = -1\). The negative \(r\) reverses the ray, so the point is \((-1, 0)\).
  - At \(\theta = \frac{\pi}{4}\), \(r = -\sqrt{2}\), and the point is \(\bigl(-\sqrt{2}\cos\frac{\pi}{4}, -\sqrt{2}\sin\frac{\pi}{4}\bigr) = (-1, -1)\).
  - As \(\theta\) approaches \(\pm\frac{\pi}{2}\), \(|r|\) grows without bound, so the curve runs off along the line and never reaches the \(y\)-axis.

  The curve is defined for \(\cos\theta \ne 0\). The angles between \(-\frac{\pi}{2}\) and \(\frac{\pi}{2}\) already give the whole line, because \(y = r\sin\theta = -\tan\theta\) takes every real value there. The angles \(\theta + \pi\) repeat the same points.

  The curve is the vertical line \(x = -1\).
provenance: written-for-site
steps:
  - |
    Multiplying \(r = -\sec\theta\) by \(\cos\theta\) gives \(r\cos\theta = -1\).
  - |
    Since \(x = r\cos\theta\), the curve is the vertical line \(x = -1\).
verification:
  checks:
    - expr: '(-1/cos(t))*cos(t)'
      expected: "-1"
    - expr: '(-1/cos(t))*sin(t)'
      expected: "-tan(t)"
    - expr: '(-sqrt(2)*cos(pi/4), -sqrt(2)*sin(pi/4))'
      expected: "(-1, -1)"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-18
number: "10.1.18"
tier: standard
topics:
  - polar-coordinates
statement: |
  Sketch the curve \(r = \cot\theta\,\csc\theta\). Describe it: rewrite it in rectangular coordinates, name the curve, and say at which angles \(r\) is undefined.
solution: |
  Write the equation with sines and cosines:
  \[
  r = \frac{\cos\theta}{\sin^2\theta}.
  \]
  Clear the denominator, then multiply by \(r\):
  \[
  r\sin^2\theta = \cos\theta, \qquad r^2\sin^2\theta = r\cos\theta.
  \]
  Since \(y = r\sin\theta\) and \(x = r\cos\theta\), the second equation is
  \[
  y^2 = x.
  \]
  The curve lies on the parabola \(y^2 = x\), which opens to the right with vertex at the origin.

  The parametrisation shows that the whole parabola occurs. Along the curve,
  \[
  x = r\cos\theta = \cot^2\theta, \qquad y = r\sin\theta = \cot\theta,
  \]
  and \(\cot\theta\) takes every real value. The vertex is reached at \(\theta = \pm\frac{\pi}{2}\), where \(r = 0\). The angle \(\theta = \frac{\pi}{4}\) gives \(r = 1\cdot\sqrt{2} = \sqrt{2}\), the point \((1, 1)\).

  The value \(r\) is undefined at \(\theta = 0\) and \(\theta = \pi\), where \(\sin\theta = 0\). As \(\theta\) approaches those angles, \(y = \cot\theta\) grows without bound, so the two halves of the parabola run off to infinity.

  The curve is the parabola \(y^2 = x\).
provenance: written-for-site
steps:
  - |
    The equation becomes \(r = \cos\theta/\sin^2\theta\).
  - |
    Multiplying by \(r\sin^2\theta\) gives \(r^2\sin^2\theta = r\cos\theta\), which is \(y^2 = x\).
  - |
    The curve is the parabola \(y^2 = x\), and \(r\) is undefined at \(\theta = 0, \pi\).
verification:
  checks:
    - expr: '(cos(t)/sin(t)**2)*cos(t) - ((cos(t)/sin(t)**2)*sin(t))**2'
      expected: "0"
    - expr: 'cot(t)*csc(t)'
      expected: "cos(t)/sin(t)**2"
    - expr: '(cot(pi/4)*csc(pi/4)*cos(pi/4), cot(pi/4)*csc(pi/4)*sin(pi/4))'
      expected: "(1, 1)"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-19
number: "10.1.19"
tier: basic
topics:
  - polar-coordinates
statement: |
  Sketch the curve \(r = \dfrac{1}{\sin\theta + \cos\theta}\). Describe it: rewrite it in rectangular coordinates, give its intercepts, and give its smallest distance from the origin.
solution: |
  Clear the denominator:
  \[
  r\sin\theta + r\cos\theta = 1.
  \]
  Since \(y = r\sin\theta\) and \(x = r\cos\theta\), this is
  \[
  x + y = 1.
  \]
  The curve is a line. It is defined whenever \(\sin\theta + \cos\theta \ne 0\), that is for \(\theta \ne -\frac{\pi}{4}\) modulo \(\pi\). The excluded direction is parallel to the line.

  The sketch follows from a few values.

  - At \(\theta = 0\), \(r = 1\), the intercept \((1, 0)\).
  - At \(\theta = \frac{\pi}{2}\), \(r = 1\), the intercept \((0, 1)\).
  - At \(\theta = \frac{\pi}{4}\), \(r = \frac{1}{\sqrt{2}/2 + \sqrt{2}/2} = \frac{1}{\sqrt{2}}\). This is the smallest value of \(r\) on the line, because the ray at \(\frac{\pi}{4}\) is perpendicular to the line \(x + y = 1\). The nearest point is \(\bigl(\frac12, \frac12\bigr)\).

  The curve is the line \(x + y = 1\), with intercepts \((1, 0)\) and \((0, 1)\) and distance \(\frac{1}{\sqrt{2}}\) from the origin.
provenance: written-for-site
steps:
  - |
    Clearing the denominator gives \(r\sin\theta + r\cos\theta = 1\), which is \(x + y = 1\).
  - |
    The intercepts are \((1, 0)\) and \((0, 1)\).
  - |
    The nearest point is \(\bigl(\frac12, \frac12\bigr)\), at distance \(1/\sqrt{2}\).
verification:
  checks:
    - expr: '(1/(sin(t) + cos(t)))*sin(t) + (1/(sin(t) + cos(t)))*cos(t)'
      expected: "1"
    - expr: '(1/(sin(0) + cos(0)), 1/(sin(pi/2) + cos(pi/2)))'
      expected: "(1, 1)"
    - expr: '1/(sin(pi/4) + cos(pi/4))'
      expected: "sqrt(2)/2"
    - expr: 'sqrt(2)/2*cos(pi/4) + sqrt(2)/2*sin(pi/4)'
      expected: "1"
:::


::: exercise
id: l7-polar-integrals.handout-10-1-20
number: "10.1.20"
tier: standard
topics:
  - polar-coordinates
statement: |
  Sketch the curve \(r^2 = -2\sec\theta\csc\theta\). Describe it: rewrite it in rectangular coordinates, name the curve, and say in which quadrants it lies.
solution: |
  Write the equation with sines and cosines:
  \[
  r^2 = -\frac{2}{\sin\theta\cos\theta}.
  \]
  Clear the denominator:
  \[
  r^2\sin\theta\cos\theta = -2.
  \]
  Since \(r^2\sin\theta\cos\theta = (r\cos\theta)(r\sin\theta) = xy\), this is
  \[
  xy = -2.
  \]
  The curve is a hyperbola with the coordinate axes as asymptotes.

  The quadrants follow from the sign condition. The left side \(r^2\) is positive, so the equation has a real \(r\) only when \(\sin\theta\cos\theta < 0\). That happens for \(\theta\) in the second and fourth quadrants. For example, at \(\theta = \frac{\pi}{6}\) the right side equals \(-\frac{8\sqrt{3}}{3}\), which is negative, so no point exists in that direction. Both signs of \(r\) are allowed, and each reverses the ray into the opposite quadrant, which is again a second or fourth quadrant.

  The vertices lie on the line \(y = -x\). At \(\theta = \frac{3\pi}{4}\), \(\sin\theta\cos\theta = -\frac12\), so \(r^2 = 4\) and \(r = \pm 2\). The points are \((-\sqrt{2}, \sqrt{2})\) and \((\sqrt{2}, -\sqrt{2})\), the points of the hyperbola nearest to the origin.

  The curve is the hyperbola \(xy = -2\), with one branch in the second quadrant and one in the fourth.
provenance: written-for-site
steps:
  - |
    The equation becomes \(r^2\sin\theta\cos\theta = -2\), which is \(xy = -2\).
  - |
    A real \(r\) requires \(\sin\theta\cos\theta < 0\), so the curve lies in the second and fourth quadrants.
  - |
    The vertices \((-\sqrt{2}, \sqrt{2})\) and \((\sqrt{2}, -\sqrt{2})\) lie at distance \(2\) from the origin.
verification:
  checks:
    - expr: '(-2/(sin(t)*cos(t)))*sin(t)*cos(t)'
      expected: "-2"
    - expr: '-2/(sin(pi/6)*cos(pi/6))'
      expected: "-8*sqrt(3)/3"
    - expr: '-2/(sin(3*pi/4)*cos(3*pi/4))'
      expected: "4"
    - expr: '(2*cos(3*pi/4))*(2*sin(3*pi/4))'
      expected: "-2"
:::


::: exercise
id: l7-polar-integrals.handout-15-2-7
number: "15.2.7"
tier: standard
topics:
  - double-integrals
  - polar-coordinates
statement: |
  Find the area inside \(r = 1 + \sin\theta\) and outside \(r = 2\sin\theta\).
solution: |
  The cardioid \(r = 1 + \sin\theta\) has \(r \ge 0\), and it is traced once for \(0 \le \theta \le 2\pi\). The circle \(r = 2\sin\theta\) has \(r \ge 0\) for \(0 \le \theta \le \pi\), and it is traced once on that interval. For \(\pi < \theta < 2\pi\) the value \(r\) is negative, and the same circle is traced again.

  Compare the two radii at each angle:
  \[
  (1 + \sin\theta) - 2\sin\theta = 1 - \sin\theta \ge 0.
  \]
  The difference is zero only at \(\theta = \frac{\pi}{2}\), the point \((0, 2)\). So the circle lies inside the cardioid and touches it at that one point. The region is the cardioid with the disk removed, and the angle range needs no split.

  The area of the cardioid is
  \[
  \begin{aligned}
  \int_0^{2\pi}\int_0^{1+\sin\theta} r\, dr\, d\theta
  &= \frac12\int_0^{2\pi}(1 + \sin\theta)^2\, d\theta\\
  &= \frac12\int_0^{2\pi}\bigl(1 + 2\sin\theta + \sin^2\theta\bigr)\, d\theta.
  \end{aligned}
  \]
  Over \([0, 2\pi]\), the integral of \(1\) equals \(2\pi\), the integral of \(\sin\theta\) equals \(0\), and the integral of \(\sin^2\theta\) equals \(\pi\). The area of the cardioid is \(\frac12(2\pi + \pi) = \frac{3\pi}{2}\).

  The area of the disk is
  \[
  \int_0^{\pi}\int_0^{2\sin\theta} r\, dr\, d\theta
  = 2\int_0^{\pi}\sin^2\theta\, d\theta = 2\cdot\frac{\pi}{2} = \pi.
  \]
  The area inside the cardioid and outside the circle is \(\frac{3\pi}{2} - \pi = \frac{\pi}{2}\).
provenance: handout-answer
steps:
  - |
    The difference of the radii is \(1 - \sin\theta \ge 0\), so the circle lies inside the cardioid, tangent at \(\theta = \pi/2\).
  - |
    The cardioid has area \(\frac{3\pi}{2}\), and the circle has area \(\pi\).
  - |
    The area is \(\frac{3\pi}{2} - \pi = \frac{\pi}{2}\).
verification:
  checks:
    - expr: 'integrate(r, (r, 0, 1 + sin(t)), (t, 0, 2*pi))'
      expected: "3*pi/2"
    - expr: 'integrate(r, (r, 0, 2*sin(t)), (t, 0, pi))'
      expected: "pi"
    - expr: 'integrate(r, (r, 0, 1 + sin(t)), (t, 0, 2*pi)) - integrate(r, (r, 0, 2*sin(t)), (t, 0, pi))'
      expected: "pi/2"
    - expr: '(1 + sin(pi/2)) - 2*sin(pi/2)'
      expected: "0"
:::


::: exercise
id: l7-polar-integrals.handout-15-2-8
number: "15.2.8"
tier: standard
topics:
  - double-integrals
  - polar-coordinates
statement: |
  Find the area inside both \(r = 2\sin\theta\) and \(r = 2\cos\theta\).
solution: |
  Both curves are circles of radius \(1\): \(r = 2\sin\theta\) is centred at \((0, 1)\), and \(r = 2\cos\theta\) is centred at \((1, 0)\). In the first quadrant, \(0 \le \theta \le \frac{\pi}{2}\), both have \(r \ge 0\), and the common region lies there.

  The circles meet where \(2\sin\theta = 2\cos\theta\), so \(\tan\theta = 1\) and \(\theta = \frac{\pi}{4}\). The radius there is \(\sqrt{2}\), the point \((1, 1)\).

  A point lies inside both circles when its radius is below both curves, so the outer limit is the smaller of the two.

  - For \(0 \le \theta \le \frac{\pi}{4}\), \(\sin\theta \le \cos\theta\), so the outer limit is \(2\sin\theta\).
  - For \(\frac{\pi}{4} \le \theta \le \frac{\pi}{2}\), \(\cos\theta \le \sin\theta\), so the outer limit is \(2\cos\theta\).

  The region is symmetric across the line \(y = x\), and the two pieces have equal area. The area is
  \[
  \begin{aligned}
  2\int_0^{\pi/4}\int_0^{2\sin\theta} r\, dr\, d\theta
  &= 2\int_0^{\pi/4} 2\sin^2\theta\, d\theta\\
  &= 2\int_0^{\pi/4}(1 - \cos 2\theta)\, d\theta.
  \end{aligned}
  \]
  An antiderivative is \(\theta - \frac12\sin 2\theta\). At \(\theta = \frac{\pi}{4}\) it equals \(\frac{\pi}{4} - \frac12\), and at \(\theta = 0\) it equals \(0\). The area is \(2\bigl(\frac{\pi}{4} - \frac12\bigr) = \frac{\pi}{2} - 1\).
provenance: handout-answer
steps:
  - |
    The circles meet at \(\theta = \pi/4\), and the outer limit is \(2\sin\theta\) before that angle and \(2\cos\theta\) after it.
  - |
    By symmetry the area is \(2\int_0^{\pi/4}\int_0^{2\sin\theta} r\, dr\, d\theta\).
  - |
    The area is \(\frac{\pi}{2} - 1\).
verification:
  checks:
    - expr: '(2*sin(pi/4) - 2*cos(pi/4), 2*sin(pi/4))'
      expected: "(0, sqrt(2))"
    - expr: '2*integrate(r, (r, 0, 2*sin(t)), (t, 0, pi/4))'
      expected: "pi/2 - 1"
    - expr: 'integrate(r, (r, 0, 2*sin(t)), (t, 0, pi/4)) + integrate(r, (r, 0, 2*cos(t)), (t, pi/4, pi/2))'
      expected: "pi/2 - 1"
:::


::: exercise
id: l7-polar-integrals.handout-15-2-9
number: "15.2.9"
tier: exam
topics:
  - double-integrals
  - polar-coordinates
statement: |
  Find the area inside the four-leaf rose \(r = \cos 2\theta\) and outside \(r = \frac12\).
solution: |
  The rose has four petals, centred on the directions \(\theta = 0, \frac{\pi}{2}, \pi, \frac{3\pi}{2}\). Where \(\cos 2\theta\) is negative, the point is plotted in the opposite direction, so the petals along the \(y\)-axis come from negative values of \(r\). Turning the plane through \(\frac{\pi}{2}\) sends \(r = \cos 2\theta\) to \(r = -\cos 2\theta\), which is the same set of points. So the four petals are congruent, and the circle \(r = \frac12\) cuts each petal in the same way. The required area is four times the area of one petal outside the circle.

  Take the petal around the positive \(x\)-axis. A point of the petal is outside the circle when its distance from the origin, \(\cos 2\theta\), exceeds \(\frac12\). That happens when \(\cos 2\theta \ge \frac12\), that is \(-\frac{\pi}{3} \le 2\theta \le \frac{\pi}{3}\), so
  \[
  -\frac{\pi}{6} \le \theta \le \frac{\pi}{6}.
  \]
  On that interval the radius runs from \(\frac12\) to \(\cos 2\theta\). The integrand is even in \(\theta\), so the interval can be halved. The total area is
  \[
  \begin{aligned}
  4\cdot 2\int_0^{\pi/6}\int_{1/2}^{\cos 2\theta} r\, dr\, d\theta
  &= 4\int_0^{\pi/6}\Bigl(\cos^2 2\theta - \frac14\Bigr)\, d\theta.
  \end{aligned}
  \]
  Use \(\cos^2 2\theta = \frac{1 + \cos 4\theta}{2}\). The integrand becomes \(\frac14 + \frac12\cos 4\theta\), with antiderivative \(\frac{\theta}{4} + \frac18\sin 4\theta\).

  - At \(\theta = \frac{\pi}{6}\) it equals \(\frac{\pi}{24} + \frac18\sin\frac{2\pi}{3} = \frac{\pi}{24} + \frac{\sqrt{3}}{16}\).
  - At \(\theta = 0\) it equals \(0\).

  Multiplication by \(4\) gives the area \(\frac{\pi}{6} + \frac{\sqrt{3}}{4}\).
provenance: handout-answer
steps:
  - |
    The four petals are congruent, so the area is four times the part of one petal outside \(r = \frac12\).
  - |
    On the petal around the \(x\)-axis, \(\cos 2\theta \ge \frac12\) gives \(-\frac{\pi}{6} \le \theta \le \frac{\pi}{6}\).
  - |
    The area is \(4\int_0^{\pi/6}\bigl(\cos^2 2\theta - \frac14\bigr)\, d\theta = \frac{\pi}{6} + \frac{\sqrt{3}}{4}\).
verification:
  checks:
    - expr: 'cos(2*(pi/6))'
      expected: "Rational(1, 2)"
    - expr: '4*2*integrate(r, (r, Rational(1, 2), cos(2*t)), (t, 0, pi/6))'
      expected: "sqrt(3)/4 + pi/6"
    - expr: '4*integrate(cos(2*t)**2 - Rational(1, 4), (t, 0, pi/6))'
      expected: "sqrt(3)/4 + pi/6"
:::


::: exercise
id: l7-polar-integrals.handout-15-2-10
number: "15.2.10"
tier: standard
topics:
  - double-integrals
  - polar-coordinates
statement: |
  Find the area inside the cardioid \(r = 2(1 + \cos\theta)\) and outside \(r = 2\).
solution: |
  The curves meet where \(2(1 + \cos\theta) = 2\), so \(\cos\theta = 0\) and \(\theta = \pm\frac{\pi}{2}\). For \(-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}\), \(\cos\theta \ge 0\), so the cardioid has \(r \ge 2\) and lies outside the circle \(r = 2\). For the other angles the cardioid is inside the circle. The region has
  \[
  -\frac{\pi}{2} \le \theta \le \frac{\pi}{2}, \qquad 2 \le r \le 2(1 + \cos\theta).
  \]
  The area is
  \[
  \begin{aligned}
  \int_{-\pi/2}^{\pi/2}\int_2^{2(1+\cos\theta)} r\, dr\, d\theta
  &= \frac12\int_{-\pi/2}^{\pi/2}\bigl(4(1 + \cos\theta)^2 - 4\bigr)\, d\theta\\
  &= 2\int_{-\pi/2}^{\pi/2}\bigl(2\cos\theta + \cos^2\theta\bigr)\, d\theta.
  \end{aligned}
  \]
  On \(\bigl[-\frac{\pi}{2}, \frac{\pi}{2}\bigr]\), the integral of \(2\cos\theta\) equals \(4\). The integral of \(\cos^2\theta = \frac{1 + \cos 2\theta}{2}\) equals \(\frac{\pi}{2}\). The area is \(2\bigl(4 + \frac{\pi}{2}\bigr) = 8 + \pi\).
provenance: handout-answer
steps:
  - |
    The curves meet at \(\theta = \pm\pi/2\), and the cardioid is the outer curve between those angles.
  - |
    The area integral is \(\int_{-\pi/2}^{\pi/2}\int_2^{2(1+\cos\theta)} r\, dr\, d\theta\).
  - |
    The area is \(8 + \pi\).
verification:
  checks:
    - expr: '2*(1 + cos(pi/2)) - 2'
      expected: "0"
    - expr: 'integrate(r, (r, 2, 2*(1 + cos(t))), (t, -pi/2, pi/2))'
      expected: "8 + pi"
    - expr: '2*integrate(2*cos(t) + cos(t)**2, (t, -pi/2, pi/2))'
      expected: "8 + pi"
:::


::: exercise
id: l7-polar-integrals.handout-15-2-11
number: "15.2.11"
tier: basic
topics:
  - double-integrals
  - polar-coordinates
statement: |
  Find the area of one loop of the three-leaf rose \(r = \cos 3\theta\).
solution: |
  One loop is traced while \(\cos 3\theta \ge 0\) on an interval around \(\theta = 0\). The radius is \(0\) when \(3\theta = \pm\frac{\pi}{2}\), so the loop has
  \[
  -\frac{\pi}{6} \le \theta \le \frac{\pi}{6}, \qquad 0 \le r \le \cos 3\theta.
  \]
  The area is
  \[
  \int_{-\pi/6}^{\pi/6}\int_0^{\cos 3\theta} r\, dr\, d\theta
  = \frac12\int_{-\pi/6}^{\pi/6}\cos^2 3\theta\, d\theta.
  \]
  Use \(\cos^2 3\theta = \frac{1 + \cos 6\theta}{2}\). An antiderivative of the integrand \(\frac12\cos^2 3\theta\) is
  \[
  \frac{\theta}{4} + \frac{\sin 6\theta}{24}.
  \]
  At \(\theta = \pm\frac{\pi}{6}\) the sine term is \(\sin(\pm\pi) = 0\), so only \(\frac{\theta}{4}\) contributes. The difference is \(\frac14\cdot\frac{\pi}{6} - \frac14\cdot\bigl(-\frac{\pi}{6}\bigr) = \frac{\pi}{12}\).

  The area of one loop is \(\frac{\pi}{12}\).
provenance: handout-answer
steps:
  - |
    One loop has \(-\frac{\pi}{6} \le \theta \le \frac{\pi}{6}\) and \(0 \le r \le \cos 3\theta\).
  - |
    The area is \(\frac12\int_{-\pi/6}^{\pi/6}\cos^2 3\theta\, d\theta\).
  - |
    The area is \(\frac{\pi}{12}\).
verification:
  checks:
    - expr: '(cos(3*(-pi/6)), cos(3*(pi/6)))'
      expected: "(0, 0)"
    - expr: 'integrate(r, (r, 0, cos(3*t)), (t, -pi/6, pi/6))'
      expected: "pi/12"
:::


::: exercise
id: l7-polar-integrals.handout-15-2-17
number: "15.2.17"
tier: standard
topics:
  - double-integrals
  - polar-coordinates
statement: |
  Find the volume under \(z = r\) above the region inside \(r = 3 + \cos\theta\).
solution: |
  The curve \(r = 3 + \cos\theta\) has \(r \ge 2\), so it is traced once for \(0 \le \theta \le 2\pi\), and the region inside it has \(0 \le r \le 3 + \cos\theta\). The height is \(z = r\), so the integrand, including the Jacobian, is \(r\cdot r = r^2\).

  The volume is
  \[
  \begin{aligned}
  \int_0^{2\pi}\int_0^{3+\cos\theta} r^2\, dr\, d\theta
  &= \frac13\int_0^{2\pi}(3 + \cos\theta)^3\, d\theta.
  \end{aligned}
  \]
  Expand the cube:
  \[
  \begin{aligned}
  (3 + \cos\theta)^3 &= 27 + 27\cos\theta + 9\cos^2\theta\\
  &\quad + \cos^3\theta.
  \end{aligned}
  \]
  On \([0, 2\pi]\):

  - The integral of \(27\) equals \(54\pi\).
  - The integrals of \(\cos\theta\) and \(\cos^3\theta\) equal \(0\).
  - The integral of \(\cos^2\theta\) equals \(\pi\), so the term \(9\cos^2\theta\) contributes \(9\pi\).

  The integral of \((3 + \cos\theta)^3\) is \(54\pi + 9\pi = 63\pi\). Multiplication by \(\frac13\) gives the volume \(21\pi\).
provenance: handout-answer
steps:
  - |
    The region is \(0 \le \theta \le 2\pi\), \(0 \le r \le 3 + \cos\theta\), and the integrand is \(r^2\).
  - |
    The volume is \(\frac13\int_0^{2\pi}(3 + \cos\theta)^3\, d\theta\).
  - |
    The integral equals \(63\pi\), so the volume is \(21\pi\).
verification:
  checks:
    - expr: 'integrate(r**2, (r, 0, 3 + cos(t)), (t, 0, 2*pi))'
      expected: "21*pi"
    - expr: 'integrate(expand((3 + cos(t))**3), (t, 0, 2*pi))'
      expected: "63*pi"
:::
