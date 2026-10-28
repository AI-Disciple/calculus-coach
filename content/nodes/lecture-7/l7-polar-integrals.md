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
  Double integrals are 32.5% of the two recent finals, and every recent final has a polar integral. The formal wording is the handout's and stays provisional until the lecture 7 notes arrive, and placement in this lecture is provisional until the lecture has taken place.
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
