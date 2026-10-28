---
id: l8-cylindrical-spherical-integrals
lecture: 8
order: 3
title: Triple integrals in cylindrical and spherical coordinates
prerequisites: [l8-triple-integrals, l4-cylindrical-spherical]
sources:
  - { source: handout, section: "15.6", page: 407 }
  - { source: sheet-3, page: 2 }
examWeight: high
examWeightNote: |
  Triple integrals and volumes carry 15% of the two recent finals. Placement in this lecture is provisional until the lecture has taken place. Handout wording stays provisional until the lecture 8 notes arrive.
status: reviewed
notation: |
  \(\frac{df}{dx}\), \(f_x\) and \(f'\) are the course's names for a derivative. The handout writes the same derivative as \(\frac{\partial f}{\partial x}\).
  Cylindrical coordinates are \(r\), \(\theta\) and \(z\). Spherical coordinates are \(\rho\), \(\phi\) and \(\theta\).
---

::: section
title: Cylindrical coordinates
:::

::: formal-statement
kind: theorem
title: Cylindrical volume element
source: { source: handout, section: "15.6", page: 407 }
text: |
  A typical small unit of volume is the shape shown in figure 15.2.1, "fattened up" in the \(z\) direction, so its volume is \(r\,\Delta r\,\Delta\theta\,\Delta z\), or in the limit, \(r\,dr\,d\theta\,dz\).
:::

::: plain-explanation
text: |
  **Cylindrical coordinates** keep the height \(z\) and use polar coordinates in the \(xy\)-plane. The relations are
  \[
  \begin{aligned}
  x&=r\cos\theta,\\
  y&=r\sin\theta,
  \end{aligned}
  \]
  so \(x^2 + y^2 = r^2\). A small piece has base area about \(r\,\Delta r\,\Delta\theta\) and thickness \(\Delta z\). The product is the volume element \(r\,dr\,d\theta\,dz\).
:::

::: tip
text: |
  In an iterated integral the factor stays \(r\), and the differentials follow the order of the bounds. When the top is a function of \(r\) and \(\theta\), \(z\) is the inner integral.
:::

::: visual
kind: cylindrical-region
caption: |
  The figure shows the cylinder \(x^2 + y^2 = 1\) from \(z = 0\) up to the top height. The top starts at \(z = 5\).
params:
  top: 5
:::

::: worked-example
title: Example 15.6.1
problem: |
  Find the volume under \(z = \sqrt{4 - r^2}\) and above the quarter disk \(x^2 + y^2 \le 4\) in the first quadrant.
solution: |
  The quarter disk is \(0 \le r \le 2\) and \(0 \le \theta \le \pi/2\). The surface \(z = \sqrt{4 - r^2}\) is the upper hemisphere of radius \(2\), so the solid runs from \(z = 0\) up to that surface. The volume is
  \[
  V = \int_0^{\pi/2} \int_0^2 \int_0^{\sqrt{4 - r^2}} r \, dz \, dr \, d\theta.
  \]
  The inner integral equals \(r\sqrt{4 - r^2}\). For the \(r\) integral, set \(u = 4 - r^2\), so \(du = -2r\,dr\). The limits change from \(r = 0\) to \(r = 2\) into \(u = 4\) to \(u = 0\), and
  \[
  \begin{aligned}
  \int_0^2 r\sqrt{4 - r^2} \, dr&=\frac12 \int_0^4 u^{1/2} \, du,\\
  &=\frac13 \cdot 8=\frac83.
  \end{aligned}
  \]
  The \(\theta\) integral equals \(\pi/2\). Therefore \(V = (\pi/2) \cdot (8/3) = 4\pi/3\).

  The volume is \(4\pi/3\). The solid is one eighth of the ball of radius \(2\).
:::

::: trap
text: |
  The cylindrical volume element is \(r\,dr\,d\theta\,dz\). Over the cylinder \(x^2 + y^2 \le 1\), \(0 \le z \le 1\), the integral written without the factor \(r\) is
  \[
  \int_0^{2\pi} \int_0^1 \int_0^1 1 \, dz \, dr \, d\theta = 2\pi.
  \]
  With the factor \(r\), the same bounds give
  \[
  \int_0^{2\pi} \int_0^1 \int_0^1 r \, dz \, dr \, d\theta = \pi.
  \]
  The volume of this cylinder is \(\pi\).
:::

::: key-points
text: |
  - Cylindrical coordinates keep the height \(z\) and use polar coordinates in the \(xy\)-plane, with \(x = r\cos\theta\), \(y = r\sin\theta\) and \(x^2 + y^2 = r^2\).
  - The volume element is \(r\,dr\,d\theta\,dz\).
  - In an iterated integral the differentials follow the order of the bounds. When the top is a function of \(r\) and \(\theta\), \(z\) is the inner integral.
  - The usual slip integrates \(1\) over the cylinder \(x^2 + y^2 \le 1\), \(0 \le z \le 1\), without the factor \(r\) and gets \(2\pi\). With the factor \(r\), the same bounds give the volume \(\pi\).
:::

::: concept-question
id: l8-cylindrical-spherical-integrals.q-67ce8823
question: |
  The volume of the cylinder \(x^2 + y^2 \le 1\), \(0 \le z \le 1\), is written as \(\int_0^{2\pi} \int_0^1 \int_0^1 1 \, dz \, dr \, d\theta\). What is the volume?
options:
  - text: |
      The volume is \(2\pi\).
  - text: |
      The volume is \(\pi\).
    correct: true
  - text: |
      The volume is \(\pi/2\).
  - text: |
      The volume is \(4\pi/3\).
explanation: |
  The written integral leaves out the factor \(r\), and that integral equals \(2\pi\). The volume element is \(r\,dr\,d\theta\,dz\), so the volume is \(\int_0^{2\pi} \int_0^1 \int_0^1 r \, dz \, dr \, d\theta = \pi\).
:::

::: exercise
id: l8-cylindrical-spherical-integrals.15-6-4
number: "15.6.4"
tier: basic
topics: [triple-integrals, cylindrical-coordinates]
statement: |
  Evaluate \(\iiint xy \, dV\) over the interior of the cylinder \(x^2 + y^2 = 1\) between \(z = 0\) and \(z = 5\).
solution: |
  The solid is \(0 \le r \le 1\), \(0 \le \theta \le 2\pi\) and \(0 \le z \le 5\). The integrand is \(xy = r^2\cos\theta\sin\theta\), and the volume element contributes another factor \(r\), so the integral is
  \[
  \begin{aligned}
  &\int_0^{2\pi} \int_0^1 \int_0^5 r^3 \cos\theta\sin\theta \, dz \, dr \, d\theta\\
  &\quad = 5 \int_0^1 r^3 \, dr \int_0^{2\pi} \cos\theta\sin\theta \, d\theta.
  \end{aligned}
  \]
  The \(r\) integral equals \(1/4\). The \(\theta\) integral equals \(\frac12 \int_0^{2\pi} \sin(2\theta) \, d\theta = 0\).

  The value of the integral is \(0\).
provenance: handout-answer
steps:
  - The solution gives cylindrical bounds for the cylinder.
  - The solution includes the factor \(r\) and the integrand \(r^2\cos\theta\sin\theta\).
  - The solution evaluates the integral and states the value \(0\).
verification:
  checks:
    - expr: integrate(r**3*cos(t)*sin(t), (z, 0, 5), (r, 0, 1), (t, 0, 2*pi))
      expected: "0"
:::

::: section
title: Spherical coordinates
:::

::: formal-statement
kind: theorem
title: Spherical volume element
source: { source: handout, section: "15.6", page: 407 }
text: |
  When \(\Delta\rho\), \(\Delta\phi\) and \(\Delta\theta\) are small, the region is approximately a box with one side \(\Delta\rho\) and two circular arcs. The volume of the little box is approximately
  \[
  \begin{aligned}
  \Delta V&\approx\Delta\rho\,(\rho\,\Delta\phi)\,(\rho\sin\phi\,\Delta\theta),\\
  &=\rho^2\sin\phi\,\Delta\rho\,\Delta\phi\,\Delta\theta.
  \end{aligned}
  \]
  In the limit, the volume element is \(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\).
:::

::: plain-explanation
text: |
  Here \(\rho\) is the distance from the origin, \(\phi\) is the angle from the positive \(z\)-axis, and \(\theta\) is the angle around that axis. The coordinate formulas are
  \[
  \begin{aligned}
  x&=\rho\sin\phi\cos\theta,\\
  y&=\rho\sin\phi\sin\theta,\\
  z&=\rho\cos\phi,
  \end{aligned}
  \]
  so \(x^2 + y^2 + z^2 = \rho^2\).

  The distance from the point to the \(z\)-axis is \(\rho\sin\phi\). That distance is the radius of the arc swept by \(\theta\), and it supplies the factor \(\sin\phi\) in \(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\).
:::

::: visual
kind: spherical-region
caption: |
  The figure shows the part of the ball above the \(xy\)-plane and below the cone \(z = \sqrt{x^2 + y^2}\). The outer radius \(\rho\) starts at \(1\).
params:
  rho: 1
:::

::: worked-example
title: Example 15.6.3
problem: |
  The temperature is \(T = 1/(1 + x^2 + y^2 + z^2)\). Find the average temperature in the solid unit sphere \(x^2 + y^2 + z^2 \le 1\) centred at the origin.
solution: |
  The average is the integral of \(T\) divided by the volume. In spherical coordinates, \(T = 1/(1 + \rho^2)\) and the volume element is \(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\), with \(0 \le \rho \le 1\), \(0 \le \phi \le \pi\) and \(0 \le \theta \le 2\pi\).

  ### The volume

  The volume is the integral of \(1\),
  \[
  V = \int_0^{2\pi} \int_0^{\pi} \int_0^1 \rho^2\sin\phi \, d\rho \, d\phi \, d\theta.
  \]
  The \(\rho\) integral equals \(1/3\), the \(\phi\) integral equals \(2\), and the \(\theta\) integral equals \(2\pi\). So \(V = 4\pi/3\).

  ### The integral of \(T\)

  Let \(J\) be the integral of \(T\):
  \[
  J = \int_0^{2\pi} \int_0^{\pi} \int_0^1 \frac{\rho^2}{1 + \rho^2} \sin\phi \, d\rho \, d\phi \, d\theta.
  \]
  The integrand separates. The identity \(\rho^2/(1 + \rho^2) = 1 - 1/(1 + \rho^2)\) gives
  \[
  \int_0^1 \frac{\rho^2}{1 + \rho^2} \, d\rho = \bigl[\rho - \arctan\rho\bigr]_0^1 = 1 - \frac{\pi}{4}.
  \]
  The \(\phi\) integral equals \(2\) and the \(\theta\) integral equals \(2\pi\), so \(J = 4\pi\bigl(1 - \pi/4\bigr) = 4\pi - \pi^2\).

  The average is \(J/V = (4\pi - \pi^2)/(4\pi/3) = 3(4\pi - \pi^2)/(4\pi) = 3 - 3\pi/4\). The average temperature is \(3 - 3\pi/4\).
:::

::: guided-example
title: Volume inside a cone and the unit sphere
problem: |
  Find the volume of the set of points whose angle \(\phi\) from the positive \(z\)-axis is at most \(\pi/4\), and whose distance \(\rho\) from the origin is at most \(1\).
steps:
  - |
    The bounds are constant in spherical coordinates: \(0 \le \rho \le 1\), \(0 \le \phi \le \pi/4\) and \(0 \le \theta \le 2\pi\). The volume element is \(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\).
  - |
    The volume integral is \(\int_0^{2\pi} \int_0^{\pi/4} \int_0^1 \rho^2\sin\phi \, d\rho \, d\phi \, d\theta\). The \(\rho\) integral equals \(1/3\).
  - |
    The \(\phi\) integral equals \(\int_0^{\pi/4} \sin\phi \, d\phi = 1 - \sqrt{2}/2\). The \(\theta\) integral equals \(2\pi\).
  - |
    The volume is \(2\pi \cdot (1 - \sqrt{2}/2) \cdot (1/3) = \pi(2 - \sqrt{2})/3\).
:::

::: trap
text: |
  The spherical volume element is \(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\). Over the unit ball, the integral written without \(\rho^2\sin\phi\) is
  \[
  \int_0^{2\pi} \int_0^{\pi} \int_0^1 1 \, d\rho \, d\phi \, d\theta = 2\pi^2.
  \]
  With the factor \(\rho^2\sin\phi\), the same bounds give
  \[
  \int_0^{2\pi} \int_0^{\pi} \int_0^1 \rho^2\sin\phi \, d\rho \, d\phi \, d\theta = \frac{4\pi}{3}.
  \]
  The volume of the unit ball is \(4\pi/3\).
:::

::: trap
text: |
  The bounds \(0 \le r \le 1\), \(0 \le \theta \le 2\pi\) and \(-1 \le z \le 1\) describe the cylinder \(x^2 + y^2 \le 1\) between \(z = -1\) and \(z = 1\). Its volume is
  \[
  \int_0^{2\pi} \int_0^1 \int_{-1}^{1} r \, dz \, dr \, d\theta = 2\pi.
  \]
  The unit ball \(x^2 + y^2 + z^2 \le 1\) has volume \(4\pi/3\).

  - A right circular cylinder uses cylindrical coordinates.
  - A ball centred at the origin uses spherical coordinates, with \(\rho\) from \(0\) to the radius.
  - A cone of constant \(\phi\) uses spherical coordinates, with \(\phi\) running from the positive \(z\)-axis out to the cone.
:::

::: going-deeper
title: The two arcs in the spherical box
text: |
  Take a small range of \(\rho\), \(\phi\) and \(\theta\). One edge has length \(\Delta\rho\). The edge in the \(\phi\) direction is an arc of radius \(\rho\), so its length is \(\rho\,\Delta\phi\). Seen along the \(z\)-axis, the \(\theta\) edge is an arc whose radius is the distance to the \(z\)-axis, \(\rho\sin\phi\), so its length is \(\rho\sin\phi\,\Delta\theta\). The product of the three lengths is \(\rho^2\sin\phi\,\Delta\rho\,\Delta\phi\,\Delta\theta\).

  In the limit, the volume element is \(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\). The cylindrical element is the polar area \(r\,dr\,d\theta\) extended through a height \(dz\).
:::

::: key-points
text: |
  - The coordinate \(\rho\) is the distance from the origin, \(\phi\) is the angle from the positive \(z\)-axis, and \(\theta\) is the angle around that axis. The formulas are \(x = \rho\sin\phi\cos\theta\), \(y = \rho\sin\phi\sin\theta\) and \(z = \rho\cos\phi\), so \(x^2 + y^2 + z^2 = \rho^2\).
  - The volume element is \(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\). The factor \(\sin\phi\) comes from the distance \(\rho\sin\phi\) between the point and the \(z\)-axis.
  - A ball centred at the origin uses spherical coordinates, with \(\rho\) from \(0\) to the radius. A cone of constant \(\phi\) uses spherical coordinates, with \(\phi\) running from the positive \(z\)-axis out to the cone. A right circular cylinder uses cylindrical coordinates.
  - The usual slip integrates \(1\) over the unit ball without the factor \(\rho^2\sin\phi\) and gets \(2\pi^2\). With the factor, the same bounds \(0 \le \rho \le 1\), \(0 \le \phi \le \pi\) and \(0 \le \theta \le 2\pi\) give the volume \(4\pi/3\).
:::

::: concept-question
id: l8-cylindrical-spherical-integrals.q-f04b3a7f
question: |
  In spherical coordinates, where is \(\phi = 0\)?
options:
  - text: |
      On the positive \(z\)-axis.
    correct: true
  - text: |
      On the positive \(x\)-axis.
  - text: |
      In the \(xy\)-plane.
  - text: |
      On the negative \(z\)-axis.
explanation: |
  \(\phi\) is measured from the positive \(z\)-axis, so \(\phi = 0\) lies on that axis. The \(xy\)-plane is \(\phi = \pi/2\), and the negative \(z\)-axis is \(\phi = \pi\).
:::

::: concept-question
id: l8-cylindrical-spherical-integrals.q-708abebf
question: |
  The volume of the unit ball is written as \(\int_0^{2\pi} \int_0^{\pi} \int_0^1 1 \, d\rho \, d\phi \, d\theta\). What is the volume?
options:
  - text: |
      The volume is \(2\pi^2\).
  - text: |
      The volume is \(4\pi/3\).
    correct: true
  - text: |
      The volume is \(\pi\).
  - text: |
      The volume is \(2\pi\).
explanation: |
  The written integral leaves out \(\rho^2\sin\phi\), and that integral equals \(2\pi^2\). With the spherical volume element the volume is \(\int_0^{2\pi} \int_0^{\pi} \int_0^1 \rho^2\sin\phi \, d\rho \, d\phi \, d\theta = 4\pi/3\).
:::

::: concept-question
id: l8-cylindrical-spherical-integrals.q-ee734c2b
question: |
  Which coordinates keep the bounds constant for a right circular cylinder, for a ball centred at the origin, and for a cone of constant \(\phi\)?
options:
  - text: |
      The cylinder uses cylindrical coordinates. The ball uses spherical coordinates. The cone uses spherical coordinates, with \(\phi\) running from the positive \(z\)-axis out to the cone.
    correct: true
  - text: |
      All three solids use cylindrical coordinates, with constant bounds on \(r\) and \(z\).
  - text: |
      All three solids use spherical coordinates, with \(\phi\) running from \(0\) to \(\pi\).
  - text: |
      The cone uses cylindrical coordinates with constant \(r\), and the ball uses cylindrical coordinates with \(z\) from \(-\rho\) to \(\rho\).
explanation: |
  - A cylinder \(x^2 + y^2 \le a^2\) between two constant heights has constant bounds on \(r\), \(\theta\) and \(z\).
  - A ball centred at the origin has constant bounds on \(\rho\), \(\phi\) and \(\theta\).
  - A cone \(\phi = \alpha\) inside a sphere centred at the origin has \(\phi\) from \(0\) to \(\alpha\) and \(\rho\) from \(0\) to the radius of the sphere.
:::

::: exercise
id: l8-cylindrical-spherical-integrals.15-6-3
number: "15.6.3; sheet 3 exercise 5.1"
tier: standard
topics: [triple-integrals, cylindrical-coordinates]
examBlock: triple-integrals-volumes
statement: |
  Evaluate \(\iiint x^2 \, dV\) over the interior of the cylinder \(x^2 + y^2 = 1\) between \(z = 0\) and \(z = 5\). Sheet 3 exercise 5.1 asks for this integral.
solution: |
  The solid is \(0 \le r \le 1\), \(0 \le \theta \le 2\pi\) and \(0 \le z \le 5\). Since \(x = r\cos\theta\), the integrand is \(x^2 = r^2\cos^2\theta\). With the volume element the integral is
  \[
  \begin{aligned}
  &\int_0^{2\pi} \int_0^1 \int_0^5 r^3\cos^2\theta \, dz \, dr \, d\theta\\
  &\quad = 5 \int_0^{2\pi} \cos^2\theta \, d\theta \int_0^1 r^3 \, dr.
  \end{aligned}
  \]
  The \(r\) integral equals \(1/4\). On a full turn, \(\cos^2\theta = (1 + \cos 2\theta)/2\), so \(\int_0^{2\pi} \cos^2\theta \, d\theta = \pi\).

  The value of the integral is \(5 \cdot \pi \cdot (1/4) = 5\pi/4\).
provenance: handout-answer
steps:
  - The solution gives cylindrical bounds for the cylinder.
  - The solution includes the factor \(r\) and \(x^2 = r^2\cos^2\theta\).
  - The solution evaluates the integral and states the value \(5\pi/4\).
verification:
  checks:
    - expr: integrate(r**3*cos(t)**2, (z, 0, 5), (r, 0, 1), (t, 0, 2*pi))
      expected: "5*pi/4"
:::

::: exercise
id: l8-cylindrical-spherical-integrals.15-6-1
number: "15.6.1"
tier: standard
topics: [triple-integrals, cylindrical-coordinates]
statement: |
  Evaluate
  \[
  \int_0^1 \int_0^x \int_0^{\sqrt{x^2 + y^2}} \frac{(x^2 + y^2)^{3/2}}{x^2 + y^2 + z^2} \, dz \, dy \, dx.
  \]
solution: |
  The shadow is \(0 \le x \le 1\) and \(0 \le y \le x\). In cylindrical coordinates that is \(0 \le \theta \le \pi/4\), and \(r\) runs from \(0\) to the line \(x = 1\), which is \(r = 1/\cos\theta\). The upper limit on \(z\) is \(\sqrt{x^2 + y^2} = r\).

  The integrand is \(r^3/(r^2 + z^2)\). With the volume element the integral is
  \[
  \int_0^{\pi/4} \int_0^{1/\cos\theta} \int_0^r \frac{r^4}{r^2 + z^2} \, dz \, dr \, d\theta.
  \]
  The inner integral equals \(r^3 \arctan(z/r)\) evaluated from \(0\) to \(r\), which is \(r^3 \cdot (\pi/4)\). The \(r\) integral is then
  \[
  \int_0^{1/\cos\theta} \frac{\pi}{4} r^3 \, dr = \frac{\pi}{16\cos^4\theta}.
  \]
  For the \(\theta\) integral, use \(1/\cos^2\theta = 1 + \tan^2\theta\), so \(1/\cos^4\theta = (1 + \tan^2\theta)/\cos^2\theta\). Set \(u = \tan\theta\). Then \(du = d\theta/\cos^2\theta\), and \(\int (1 + u^2) \, du = u + u^3/3\). From \(0\) to \(\pi/4\), \(u\) runs from \(0\) to \(1\), so \(\int_0^{\pi/4} 1/\cos^4\theta \, d\theta = 1 + 1/3 = 4/3\).

  The value of the integral is \((\pi/16) \cdot (4/3) = \pi/12\).
provenance: handout-answer
steps:
  - The solution describes the shadow as \(0 \le \theta \le \pi/4\) and \(0 \le r \le 1/\cos\theta\), with \(z\) from \(0\) to \(r\).
  - The solution includes the factor \(r\) and integrates in \(z\) and \(r\).
  - The solution evaluates the \(\theta\) integral and states the value \(\pi/12\).
verification:
  checks:
    - expr: diff(r**3*atan(z/r), z) - r**4/(r**2 + z**2)
      expected: "0"
    - expr: r**3*atan(1) - r**3*atan(0) - pi*r**3/4
      expected: "0"
    - expr: integrate((pi/4)*r**3, (r, 0, 1/cos(t)), (t, 0, pi/4))
      expected: "pi/12"
:::

::: exercise
id: l8-cylindrical-spherical-integrals.15-6-2
number: "15.6.2"
tier: exam
topics: [triple-integrals, spherical-coordinates]
examBlock: triple-integrals-volumes
statement: |
  Evaluate
  \[
  \begin{aligned}
  &\int_{-1}^{1} \int_0^{\sqrt{1 - x^2}} \int_{\sqrt{x^2 + y^2}}^{\sqrt{2 - x^2 - y^2}}\\
  &\quad \sqrt{x^2 + y^2 + z^2} \, dz \, dy \, dx.
  \end{aligned}
  \]
solution: |
  The shadow is the upper half-disk \(x^2 + y^2 \le 1\), \(y \ge 0\). On that shadow, \(z\) runs from the cone \(z = \sqrt{x^2 + y^2}\) up to the hemisphere \(z = \sqrt{2 - x^2 - y^2}\).

  In spherical coordinates the cone is \(\phi = \pi/4\) and the hemisphere belongs to the sphere \(\rho = \sqrt{2}\). Above the cone and inside the sphere means \(0 \le \phi \le \pi/4\) and \(0 \le \rho \le \sqrt{2}\). The condition \(y \ge 0\) cuts this to \(0 \le \theta \le \pi\). The integrand \(\sqrt{x^2 + y^2 + z^2}\) equals \(\rho\). With the volume element the integral is
  \[
  \int_0^{\pi} \int_0^{\pi/4} \int_0^{\sqrt{2}} \rho^3 \sin\phi \, d\rho \, d\phi \, d\theta.
  \]
  The \(\rho\) integral equals \((\sqrt{2})^4/4 = 1\). The \(\phi\) integral equals \(1 - \sqrt{2}/2\). The \(\theta\) integral equals \(\pi\).

  The value of the integral is \(\pi\bigl(1 - \sqrt{2}/2\bigr)\).
provenance: handout-answer
steps:
  - The solution reads the region as \(0 \le \rho \le \sqrt{2}\), \(0 \le \phi \le \pi/4\) and \(0 \le \theta \le \pi\).
  - The solution uses the integrand \(\rho\) and the factor \(\rho^2\sin\phi\).
  - The solution evaluates the integral and states the value \(\pi(1 - \sqrt{2}/2)\).
verification:
  checks:
    - expr: integrate(rho**3*sin(p), (rho, 0, sqrt(2)), (p, 0, pi/4), (t, 0, pi))
      expected: "pi*(1 - sqrt(2)/2)"
:::

::: exercise
id: l8-cylindrical-spherical-integrals.15-6-5
number: "15.6.5; sheet 3 exercise 5.2"
tier: exam
topics: [triple-integrals, cylindrical-coordinates]
examBlock: triple-integrals-volumes
statement: |
  Evaluate \(\iiint z \, dV\) over the region above the \(xy\)-plane, inside \(x^2 + y^2 - 2x = 0\) and under \(x^2 + y^2 + z^2 = 4\). Sheet 3 exercise 5.2 asks for this integral.
solution: |
  The cylinder \(x^2 + y^2 - 2x = 0\) is \((x - 1)^2 + y^2 = 1\). Use shifted cylindrical coordinates \(x = 1 + r\cos\theta\) and \(y = r\sin\theta\), with \(0 \le r \le 1\) and \(0 \le \theta \le 2\pi\). Then \(x^2 + y^2 = 1 + r^2 + 2r\cos\theta\), so the upper surface from the sphere is
  \[
  z = \sqrt{3 - r^2 - 2r\cos\theta}.
  \]
  The solid sits above \(z = 0\). The volume element is still \(r\,dz\,dr\,d\theta\). The integral of \(z\) is
  \[
  \begin{aligned}
  &\int_0^{2\pi} \int_0^1\\
  &\quad \int_0^{\sqrt{3 - r^2 - 2r\cos\theta}}\\
  &\qquad z \, r \, dz \, dr \, d\theta\\
  &\quad = \frac12 \int_0^{2\pi} \int_0^1\\
  &\qquad (3r - r^3 - 2r^2\cos\theta) \, dr \, d\theta.
  \end{aligned}
  \]
  The \(r\) integral equals \(3/2 - 1/4 - (2/3)\cos\theta = 5/4 - (2/3)\cos\theta\). The integral of \(\cos\theta\) from \(0\) to \(2\pi\) equals \(0\), so
  \[
  \frac12 \int_0^{2\pi} \frac54 \, d\theta = \frac12 \cdot \frac54 \cdot 2\pi = \frac{5\pi}{4}.
  \]
  The value of the integral is \(5\pi/4\).
provenance: handout-answer
steps:
  - The solution rewrites the cylinder as \((x - 1)^2 + y^2 = 1\) and gives shifted cylindrical bounds.
  - The solution gives the upper limit \(\sqrt{3 - r^2 - 2r\cos\theta}\) and the factor \(r\).
  - The solution evaluates the integral and states the value \(5\pi/4\).
verification:
  checks:
    - expr: integrate(z*r, (z, 0, sqrt(3 - r**2 - 2*r*cos(t))), (r, 0, 1), (t, 0, 2*pi))
      expected: "5*pi/4"
:::

::: exercise
id: l8-cylindrical-spherical-integrals.15-6-6
number: "15.6.6"
tier: exam
topics: [triple-integrals, cylindrical-coordinates]
examBlock: triple-integrals-volumes
statement: |
  Evaluate \(\iiint yz \, dV\) over the region in the first octant, inside \(x^2 + y^2 - 2x = 0\) and under \(x^2 + y^2 + z^2 = 4\).
solution: |
  The cylinder is again \((x - 1)^2 + y^2 = 1\), and it lies in \(x \ge 0\). In the first octant, \(y \ge 0\) and \(z \ge 0\), so in the shifted coordinates \(x = 1 + r\cos\theta\) and \(y = r\sin\theta\) the angle \(\theta\) runs from \(0\) to \(\pi\), with \(0 \le r \le 1\). The upper limit on \(z\) is the same square root as in 15.6.5,
  \[
  z = \sqrt{3 - r^2 - 2r\cos\theta}.
  \]
  The integrand contributes \(y = r\sin\theta\), and the volume element contributes \(r\). Integrating \(z\) first produces half the square of the upper limit, so the integral is
  \[
  \begin{aligned}
  &\frac12 \int_0^{\pi} \sin\theta\\
  &\quad \int_0^1 (3r^2 - r^4 - 2r^3\cos\theta) \, dr \, d\theta.
  \end{aligned}
  \]
  The \(r\) integral equals \(1 - 1/5 - (1/2)\cos\theta = 4/5 - (1/2)\cos\theta\). The integral is then
  \[
  \frac12 \int_0^{\pi} \sin\theta \left(\frac45 - \frac12\cos\theta\right) d\theta.
  \]
  Set \(u = \cos\theta\), so \(du = -\sin\theta \, d\theta\). The limits change from \(\theta = 0\) to \(\theta = \pi\) into \(u = 1\) to \(u = -1\), and the integral becomes
  \[
  \begin{aligned}
  &\frac12 \int_{-1}^{1} \left(\frac45 - \frac{u}{2}\right) du\\
  &=\frac12 \left[\frac45 u - \frac{u^2}{4}\right]_{-1}^{1}\\
  &=\frac12 \cdot \frac85 = \frac45.
  \end{aligned}
  \]
  The value of the integral is \(4/5\).
provenance: handout-answer
steps:
  - The solution restricts the shifted cylinder to \(\theta\) from \(0\) to \(\pi\).
  - The solution includes \(y = r\sin\theta\), the factor \(r\), and the sphere as the upper limit on \(z\).
  - The solution evaluates the integral and states the value \(4/5\).
verification:
  checks:
    - expr: integrate(r**2*sin(t)*z, (z, 0, sqrt(3 - r**2 - 2*r*cos(t))), (r, 0, 1), (t, 0, pi))
      expected: "4/5"
:::

::: exercise
id: l8-cylindrical-spherical-integrals.sheet-5-3
number: "sheet 3 exercise 5.3"
tier: exam
topics: [triple-integrals, spherical-coordinates]
examBlock: triple-integrals-volumes
statement: |
  Evaluate \(\iiint (x^2 + y^2)^a \, dV\) over the ball of radius \(2\) centred at the origin, for \(a = 1\) and for \(a = 1/2\).
solution: |
  The ball is \(0 \le \rho \le 2\), \(0 \le \phi \le \pi\) and \(0 \le \theta \le 2\pi\). Since \(x^2 + y^2 = \rho^2\sin^2\phi\), the integrand is \(\rho^{2a}\sin^{2a}\phi\). With the volume element it becomes \(\rho^{2a + 2}\sin^{2a + 1}\phi\).

  For \(a = 1\) the integral is
  \[
  \int_0^{2\pi} \int_0^{\pi} \int_0^2 \rho^4 \sin^3\phi \, d\rho \, d\phi \, d\theta.
  \]
  The \(\rho\) integral equals \(32/5\). The identity \(\sin^3\phi = (1 - \cos^2\phi)\sin\phi\) and the substitution \(u = \cos\phi\) give \(\int_0^{\pi} \sin^3\phi \, d\phi = 4/3\). The \(\theta\) integral equals \(2\pi\). The product is \(2\pi \cdot (4/3) \cdot (32/5) = 256\pi/15\).

  For \(a = 1/2\) the integrand is \(\rho^3\sin^2\phi\). The \(\rho\) integral equals \(4\). The identity \(\sin^2\phi = (1 - \cos 2\phi)/2\) gives \(\int_0^{\pi} \sin^2\phi \, d\phi = \pi/2\). The product is \(2\pi \cdot (\pi/2) \cdot 4 = 4\pi^2\).

  The value for \(a = 1\) is \(256\pi/15\). The value for \(a = 1/2\) is \(4\pi^2\).
provenance: handout-answer
steps:
  - The solution gives spherical bounds for the ball of radius \(2\) centred at the origin.
  - The solution writes \((x^2 + y^2)^a\) as \(\rho^{2a}\sin^{2a}\phi\) and includes \(\rho^2\sin\phi\).
  - The solution states \(256\pi/15\) for \(a = 1\) and \(4\pi^2\) for \(a = 1/2\).
verification:
  checks:
    - expr: integrate(rho**4*sin(p)**3, (rho, 0, 2), (p, 0, pi), (t, 0, 2*pi))
      expected: "256*pi/15"
    - expr: integrate(rho**3*sin(p)**2, (rho, 0, 2), (p, 0, pi), (t, 0, 2*pi))
      expected: "4*pi**2"
:::

::: sheet-item
id: l8-cylindrical-spherical-integrals.sheet-cylindrical-element
category: formula
text: |
  In cylindrical coordinates, \(x = r\cos\theta\), \(y = r\sin\theta\), and the volume element is \(r\,dr\,d\theta\,dz\).
:::

::: sheet-item
id: l8-cylindrical-spherical-integrals.sheet-spherical-element
category: formula
text: |
  In spherical coordinates, \(x = \rho\sin\phi\cos\theta\), \(y = \rho\sin\phi\sin\theta\), \(z = \rho\cos\phi\), and the volume element is \(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\).
:::

::: sheet-item
id: l8-cylindrical-spherical-integrals.sheet-which-coordinates
category: recognition
text: |
  A right circular cylinder uses cylindrical coordinates. A ball centred at the origin, and a cone of constant \(\phi\), use spherical coordinates.
:::

::: sheet-item
id: l8-cylindrical-spherical-integrals.sheet-missing-factors
category: trap
text: |
  The integral of \(1\) over \(x^2 + y^2 \le 1\), \(0 \le z \le 1\), equals \(2\pi\) when the factor \(r\) is omitted. With the factor \(r\), the volume is \(\pi\). The integral of \(1\) over the unit ball equals \(2\pi^2\) when \(\rho^2\sin\phi\) is omitted. With that factor, the volume is \(4\pi/3\).
:::

::: exercise
id: l8-cylindrical-spherical-integrals.ex-cylinder-ball-cone
tier: standard
topics: [triple-integrals, cylindrical-coordinates, spherical-coordinates]
examBlock: triple-integrals-volumes
statement: |
  (a) Find the volume of the part of the ball \(x^{2}+y^{2}+z^{2} \le 4\) that lies inside the cylinder \(x^{2}+y^{2} \le 1\).

  (b) Compute \(\iiint z\, dV\) over the part of the ball \(x^{2}+y^{2}+z^{2} \le 4\) that lies above the cone \(z = \sqrt{x^{2}+y^{2}}\).
solution: |
  (a) The cylinder suggests cylindrical coordinates. For \(0 \le r \le 1\), \(z\) runs from \(-\sqrt{4 - r^{2}}\) to \(\sqrt{4 - r^{2}}\). With the factor \(r\),
  \[
  \begin{aligned}
  V&=\int_0^{2\pi}\int_0^1 2\sqrt{4 - r^{2}}\, r\, dr\, d\theta\\
  &=4\pi\int_0^1 r\sqrt{4 - r^{2}}\, dr.
  \end{aligned}
  \]
  With \(u = 4 - r^{2}\) and \(du = -2r\,dr\), the \(r\) integral equals \(\frac12\int_3^4 \sqrt u\, du = \frac13\left(8 - 3\sqrt3\right)\). So
  \[
  V = \frac{4\pi}{3}\left(8 - 3\sqrt3\right).
  \]

  (b) The ball and the cone suggest spherical coordinates. The cone is \(\phi = \pi/4\), and above the cone means \(0 \le \phi \le \pi/4\). The ball is \(0 \le \rho \le 2\), and \(z = \rho\cos\phi\). With the factor \(\rho^{2}\sin\phi\),
  \[
  \begin{aligned}
  \iiint z\, dV&=\int_0^{2\pi}\int_0^{\pi/4}\int_0^2\\
  &\qquad \rho^{3}\cos\phi\sin\phi\, d\rho\, d\phi\, d\theta.
  \end{aligned}
  \]
  The \(\rho\) integral equals \(4\). The \(\phi\) integral equals \(\left[\frac{\sin^{2}\phi}{2}\right]_0^{\pi/4} = \frac14\). The \(\theta\) integral equals \(2\pi\). The product is \(2\pi\).

  The volume in (a) is \(\dfrac{4\pi}{3}\left(8 - 3\sqrt3\right)\), and the integral in (b) is \(2\pi\).
provenance: written-for-site
steps:
  - The solution uses cylindrical coordinates for (a), with \(z\) between \(\pm\sqrt{4 - r^{2}}\) and the factor \(r\).
  - The solution evaluates (a) as \(4\pi(8 - 3\sqrt3)/3\).
  - The solution uses spherical coordinates for (b), with \(0 \le \phi \le \pi/4\), the factor \(\rho^{2}\sin\phi\) and the integrand \(\rho\cos\phi\), and finds \(2\pi\).
verification:
  checks:
    - expr: "2*2*pi*integrate(r*sqrt(4 - r**2), (r, 0, 1))"
      expected: "4*pi*(8 - 3*sqrt(3))/3"
    - expr: "integrate(rho**3*cos(p)*sin(p), (rho, 0, 2), (p, 0, pi/4), (t, 0, 2*pi))"
      expected: "2*pi"
:::
