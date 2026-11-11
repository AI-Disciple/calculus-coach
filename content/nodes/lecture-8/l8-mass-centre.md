---
id: l8-mass-centre
lecture: 8
order: 5
title: Mass and centre of mass
prerequisites: [l7-general-regions]
sources:
  - { source: handout, section: "15.3", page: 399 }
  - { source: handout, section: "15.5", page: 404 }
  - { source: handout, section: "15.6", page: 410 }
  - { source: mock-exam-1, page: 1 }
examWeight: low
examWeightNote: Only the part before Example 15.3.1 is core. Placement in this lecture is provisional until the lecture has taken place. Statements taken from the handout stay provisional until the lecture 8 notes arrive.
status: reviewed
notation: |
  \(f_x\), \(\frac{df}{dx}\) and \(\frac{\partial f}{\partial x}\) all name the partial derivative of \(f\) with respect to \(x\). A derivative in one variable is also written \(f'\). The mass formulas use an ordinary \(d\), as in \(dy\, dx\).
---

::: section
title: Mass and moments of a plate
:::

::: formal-statement
kind: method
title: Mass and moments of a plate
source: { source: handout, section: "15.3", page: "399-400" }
text: |
  Using a single integral we were able to compute the center of mass for a one-dimensional object with variable density, and a two dimensional object with constant density. With a double integral we can handle two dimensions and variable density.

  The key to the computation, just as before, is the approximation of mass. In the two-dimensional case, we treat **density** \(\sigma\) as mass per square area, so when density is constant, mass is (density)(area). If we have a two-dimensional region with varying density given by \(\sigma(x,y)\), and we divide the region into small subregions with area \(\Delta A\), then the mass of one subregion is approximately \(\sigma(x_i,y_j)\Delta A\), the total mass is approximately the sum of many of these, and as usual the sum turns into an integral in the limit:

  \[
  M = \int_{x_0}^{x_1} \int_{y_0}^{y_1} \sigma(x,y)\, dy\, dx,
  \]

  and similarly for computations in cylindrical coordinates. Then as before

  \[
  M_x = \int_{x_0}^{x_1} \int_{y_0}^{y_1} y\,\sigma(x,y)\, dy\, dx,
  \]

  \[
  M_y = \int_{x_0}^{x_1} \int_{y_0}^{y_1} x\,\sigma(x,y)\, dy\, dx.
  \]
:::

::: plain-explanation
text: |
  - The total mass is the double integral of the density.
  - \(M_x\) multiplies the density by \(y\), because that moment is taken around the x-axis.
  - \(M_y\) multiplies the density by \(x\), because that moment is taken around the y-axis.

  The limits in the display are constants. A region with a curved edge uses an inner limit that depends on the outer variable, with the same three integrands.
:::

::: tip
text: |
  When the density is a constant \(\sigma\), it factors out of the integral, and the mass equals \(\sigma\) times the area.
:::

::: key-points
text: |
  - The mass of a plate with density \(\sigma(x,y)\) is the double integral \(M = \int \int \sigma(x,y)\, dy\, dx\) over the plate. A region with a curved edge uses an inner limit that depends on the outer variable, and the integrands of \(M\), \(M_x\) and \(M_y\) stay the same.
  - The moment \(M_x\) integrates \(y\,\sigma(x,y)\) and is taken around the x-axis. The moment \(M_y\) integrates \(x\,\sigma(x,y)\) and is taken around the y-axis.
  - When the density is a constant \(\sigma\), the mass equals \(\sigma\) times the area.
:::

::: concept-question
id: l8-mass-centre.q-487dbebd
question: |
  A plate has constant density \(\sigma\) and area \(A\). What is its mass?
options:
  - text: |
      \(\sigma A\)
    correct: true
  - text: |
      \(A\)
  - text: |
      The integral of \(y\sigma\) over the plate
  - text: |
      \(\sigma\) times the length of the boundary
explanation: |
  A constant density \(\sigma\) on a region of area \(A\) has mass \(\sigma A\). The integral of \(y\sigma\) is the moment \(M_x\).
:::

::: concept-question
id: l8-mass-centre.q-fd29a2af
question: |
  The density of a plate is \(\sigma(x,y) = x + y\). How is the total mass found?
options:
  - text: |
      The double integral of \(x + y\) over the plate
    correct: true
  - text: |
      The value of \(x + y\) at one point, times the area
  - text: |
      The double integral of \(1\) over the plate
  - text: |
      The integral of \(x + y\) along the boundary
explanation: |
  The density is the mass per unit area at each point, so the total mass is the double integral of \(\sigma(x,y)\). The double integral of \(1\) is the area, which equals the mass when the density is \(1\) everywhere.
:::

::: section
title: Centre of a plate
:::

::: formal-statement
kind: method
title: Centre of a plate
source: { source: handout, section: "15.3", page: 400 }
text: |
  Just as before, the coordinates of the **center of mass** are

  \[
  \bar x = \frac{M_y}{M} \qquad \bar y = \frac{M_x}{M},
  \]

  where \(M\) is the total mass, \(M_y\) is the moment around the y-axis, and \(M_x\) is the moment around the x-axis. (You may want to review the concepts in section 9.6.)
:::

::: plain-explanation
text: |
  - \(M_y\) is the moment that carries the factor \(x\), so the x-coordinate of the centre is \(M_y/M\).
  - \(M_x\) is the moment that carries the factor \(y\), so the y-coordinate of the centre is \(M_x/M\).
:::

::: worked-example
title: A rectangle of constant density
problem: |
  A plate occupies the rectangle \(0 \le x \le 2\), \(0 \le y \le 1\) and has constant density \(\sigma = 2\). Find its mass and its centre of mass.
solution: |
  The rectangle has area \(2\). The density is the constant \(2\), so the mass is \(2 \cdot 2 = 4\). The integral of the density gives the same mass:

  \[
  M = \int_0^2 \int_0^1 2\, dy\, dx = \int_0^2 2\, dx = 4.
  \]

  The moment around the x-axis uses the factor \(y\):

  \[
  M_x = \int_0^2 \int_0^1 2y\, dy\, dx = \int_0^2 1\, dx = 2.
  \]

  The moment around the y-axis uses the factor \(x\):

  \[
  M_y = \int_0^2 \int_0^1 2x\, dy\, dx = \int_0^2 2x\, dx = 4.
  \]

  Then
  \[
  \begin{aligned}
  \bar x&=M_y/M=4/4=1,\\
  \bar y&=M_x/M=2/4=1/2.
  \end{aligned}
  \]
  The centre of mass is \((1, 1/2)\), the centre of the rectangle.
:::

::: guided-example
title: Which moment uses which coordinate
problem: |
  A plate occupies the square \(0 \le x \le 1\), \(0 \le y \le 1\) and has density \(\sigma(x,y) = x\). Set up the mass and the two moments, then find the centre of mass.
steps:
  - |
    The region is \(0 \le x \le 1\), \(0 \le y \le 1\). The density is \(\sigma(x,y) = x\).
  - |
    The mass is the integral of the density:
    \[
    M = \int_0^1 \int_0^1 x\, dy\, dx.
    \]
  - |
    \(M_x\) is the moment around the x-axis, so its integrand multiplies the density by \(y\):
    \[
    M_x = \int_0^1 \int_0^1 yx\, dy\, dx.
    \]
    \(M_y\) is the moment around the y-axis, so its integrand multiplies the density by \(x\):
    \[
    M_y = \int_0^1 \int_0^1 x \cdot x\, dy\, dx.
    \]
  - |
    The integrals are
    \[
    \begin{aligned}
    M &= 1/2,\\
    M_x &= 1/4,\\
    M_y &= 1/3.
    \end{aligned}
    \]
  - |
    \[
    \begin{aligned}
    \bar x&=M_y/M=(1/3)/(1/2)=2/3,\\
    \bar y&=M_x/M=(1/4)/(1/2)=1/2.
    \end{aligned}
    \]
    The centre of mass is \((2/3, 1/2)\).
:::

::: trap
text: |
  The x-coordinate of the centre is \(M_y/M\). \(M_y\) is the integral of \(x\) times the density.

  On the rectangle \(0 \le x \le 2\), \(0 \le y \le 1\) with density \(2\),
  \[
  M=4,\qquad M_x=2,\qquad M_y=4,
  \]
  so the centre is \((1, 1/2)\). The quotient \(M_x/M\) equals \(1/2\). That value is \(\bar y\) on this plate. Using it as \(\bar x\) gives the point with x-coordinate \(1/2\). The centre of this rectangle has x-coordinate \(1\).
:::

::: going-deeper
title: Plates after the three mass formulas
text: |
  Example 15.3.1 takes the plate between \(y = \cos x\) and the x-axis, for \(x\) from \(-\pi/2\) to \(\pi/2\), with density \(1\). The plate is symmetric in \(x\), so \(\bar x = 0\). The values are
  \[
  M=2,\qquad M_x=\pi/4,\qquad M_y=0,
  \]
  so \(\bar y = \pi/8\).

  Example 15.3.2 takes the quarter disk \(x^2 + y^2 \le 1\) in the first quadrant, with density \(k(x^2 + y^2)\). The region and the density are symmetric across the line \(y = x\), so \(\bar x = \bar y\). In polar coordinates the area element is \(r\, dr\, d\theta\). The mass is \(k\pi/8\), and each of \(M_x\) and \(M_y\) is \(k/5\), so both coordinates equal \(8/(5\pi)\). In this section the handout's cylindrical coordinates are polar coordinates in the plane.

  Exercises 15.3.1 to 15.3.10 ask for the centre of a plate with a given density, or for a centroid. A **centroid** is the centre of mass when the density is \(1\) everywhere, and then the mass equals the area. Exercises 15.3.11 to 15.3.13 ask for the three polar integrals to be written down, and they stop before those integrals are evaluated.
:::

::: key-points
text: |
  - The centre of mass of a plate is \((\bar x, \bar y)\) with \(\bar x = M_y/M\) and \(\bar y = M_x/M\). Here \(M\) is the total mass, \(M_y\) is the moment around the y-axis and \(M_x\) is the moment around the x-axis.
  - The moment \(M_y\) integrates \(x\) times the density, so it gives the x-coordinate. The moment \(M_x\) integrates \(y\) times the density, so it gives the y-coordinate.
  - The usual slip divides \(M_x\) by \(M\) to get \(\bar x\). That quotient is \(\bar y\), and \(\bar x\) is \(M_y/M\). On the rectangle \(0 \le x \le 2\), \(0 \le y \le 1\) with density \(2\), the quotient \(M_x/M\) is \(1/2\), while \(\bar x = M_y/M = 1\).
:::

::: concept-question
id: l8-mass-centre.q-65f22ab6
question: |
  Which quotient is the x-coordinate of the centre of mass of a plate?
options:
  - text: |
      \(M_y/M\)
    correct: true
  - text: |
      \(M_x/M\)
  - text: |
      \(M/M_y\)
  - text: |
      \(M_x/M_y\)
explanation: |
  \(M_y\) is the moment around the y-axis, built with the factor \(x\). Dividing that moment by the mass gives \(\bar x\). The quotient \(M_x/M\) is \(\bar y\).
:::

::: concept-question
id: l8-mass-centre.q-525a695b
question: |
  For the unit square with density \(\sigma(x,y) = x\), the mass is \(1/2\), \(M_x\) is \(1/4\) and \(M_y\) is \(1/3\). What is \(\bar x\)?
options:
  - text: |
      \(2/3\)
    correct: true
  - text: |
      \(1/2\)
  - text: |
      \(1/4\)
  - text: |
      \(1/3\)
explanation: |
  \(\bar x = M_y/M = (1/3)/(1/2) = 2/3\). The quotient \(M_x/M = 1/2\) is \(\bar y\).
:::

::: concept-question
id: l8-mass-centre.q-827a81dd
question: |
  A plate occupies \(-1 \le x \le 1\), \(0 \le y \le 1\), a region symmetric across the y-axis. Its density is \(\sigma(x,y) = 1 + x\). What is \(\bar x\)?
options:
  - text: |
      \(\bar x = 1/3\)
    correct: true
  - text: |
      \(\bar x = 0\)
  - text: |
      \(\bar x = 2/3\)
  - text: |
      \(\bar x = 1\)
explanation: |
  The mass and the moment are
  \[
  \begin{aligned}
  M&=\int_{-1}^{1}\int_0^1 (1 + x)\, dy\, dx\\
  &= 2,\\
  M_y&=\int_{-1}^{1}\int_0^1 x(1 + x)\, dy\, dx\\
  &= \int_{-1}^{1} (x + x^2)\, dx = 2/3.
  \end{aligned}
  \]
  So \(\bar x = M_y/M = 1/3\).

  - The value \(\bar x = 0\) would need both the region and the density to be symmetric across the y-axis, because then \(x\,\sigma(x,y)\) is odd in \(x\) and \(M_y = 0\). Here the density \(1 + x\) is not symmetric, so the symmetric region alone does not give \(0\).
  - The value \(2/3\) is \(M_y\), which still has to be divided by the mass.
:::

::: section
title: Mass and centre of a solid
:::

::: formal-statement
kind: method
title: Mass and centre of a solid
source: { source: handout, section: "15.5", page: 405 }
text: |
  Pretty much just the way we did for two dimensions we can use triple integration to compute mass, center of mass, and various average quantities.
:::

::: plain-explanation
text: |
  For a solid, the mass is the triple integral of the density over the solid. The centre coordinates are **moments** divided by that mass. Example 15.5.4 builds the moments as follows:

  - \(M_{yz}\) by integrating \(x\) times the density,
  - \(M_{xz}\) by integrating \(y\) times the density,
  - \(M_{xy}\) by integrating \(z\) times the density.

  Then
  \[
  \begin{aligned}
  \bar x&=M_{yz}/M,\\
  \bar y&=M_{xz}/M,\\
  \bar z&=M_{xy}/M.
  \end{aligned}
  \]
:::

::: key-points
text: |
  - The mass \(M\) of a solid is the triple integral of the density over the solid.
  - The coordinates of the centre are moments divided by \(M\): \(\bar x = M_{yz}/M\), \(\bar y = M_{xz}/M\) and \(\bar z = M_{xy}/M\).
  - The moment \(M_{yz}\) integrates \(x\) times the density, \(M_{xz}\) integrates \(y\) times the density and \(M_{xy}\) integrates \(z\) times the density.
:::

::: concept-question
id: l8-mass-centre.q-cd4f170f
question: |
  For a solid, which quotient is \(\bar z\)?
options:
  - text: |
      \(M_{xy}/M\)
    correct: true
  - text: |
      \(M_{yz}/M\)
  - text: |
      \(M_{xz}/M\)
  - text: |
      \(M_{xy}/M_{yz}\)
explanation: |
  \(M_{xy}\) integrates \(z\) times the density. Dividing it by the mass gives \(\bar z\). The quotient \(M_{yz}/M\) is \(\bar x\), and \(M_{xz}/M\) is \(\bar y\).
:::

::: exercise
id: l8-mass-centre.15.5.11
number: "15.5.11"
tier: basic
topics: [mass]
statement: |
  Find the mass of a cube with edge length \(2\) and density equal to the square of the distance from one corner.
solution: |
  Put the chosen corner at the origin and align the edges with the axes, so the cube is \(0 \le x \le 2\), \(0 \le y \le 2\), \(0 \le z \le 2\). The squared distance from that corner is \(x^2 + y^2 + z^2\), and that is the density.

  The mass is

  \[
  M = \int_0^2 \int_0^2 \int_0^2 (x^2 + y^2 + z^2)\, dz\, dy\, dx.
  \]

  The three terms have the same integral. One of them is

  \[
  \int_0^2 x^2\, dx \int_0^2 dy \int_0^2 dz = \frac{8}{3} \cdot 2 \cdot 2 = \frac{32}{3}.
  \]

  The mass is three times that value, so \(M = 32\).
provenance: handout-answer
steps:
  - The cube is placed with one corner at the origin.
  - The density is written as \(x^2 + y^2 + z^2\).
  - The triple integral is evaluated.
verification:
  checks:
    - expr: "integrate(x**2+y**2+z**2,(z,0,2),(y,0,2),(x,0,2))"
      expected: "32"
:::

::: exercise
id: l8-mass-centre.15.5.12
number: "15.5.12"
tier: standard
topics: [mass]
statement: |
  Find the mass of a cube with edge length \(2\) and density equal to the square of the distance from one edge.
solution: |
  Use the cube \(0 \le x \le 2\), \(0 \le y \le 2\), \(0 \le z \le 2\). Take the edge where \(x = 0\) and \(y = 0\), running along the z-axis. The squared distance from that edge is \(x^2 + y^2\), and that is the density.

  The mass is

  \[
  M = \int_0^2 \int_0^2 \int_0^2 (x^2 + y^2)\, dz\, dy\, dx.
  \]

  The integral of \(x^2\) over the cube is \(\frac{8}{3} \cdot 2 \cdot 2 = \frac{32}{3}\), and the integral of \(y^2\) is the same. The mass is \(64/3\).
provenance: handout-answer
steps:
  - An edge of the cube is chosen and the squared distance from it is written.
  - The density \(x^2 + y^2\) is integrated over the cube.
verification:
  checks:
    - expr: "integrate(x**2+y**2,(z,0,2),(y,0,2),(x,0,2))"
      expected: "64/3"
:::

::: exercise
id: l8-mass-centre.15.5.13
number: "15.5.13"
tier: exam
topics: [centre-of-mass]
statement: |
  An object occupies the volume of the upper hemisphere of \(x^2 + y^2 + z^2 = 4\) and has density \(z\) at \((x,y,z)\). Find the centre of mass.
solution: |
  The upper hemisphere has radius \(2\) and \(z \ge 0\). Its shadow in the xy-plane is the disk \(x^2 + y^2 \le 4\). In polar coordinates the area element is \(r\, dr\, d\theta\), and the limits are:

  - \(r\) runs from \(0\) to \(2\),
  - \(\theta\) runs from \(0\) to \(2\pi\),
  - for each \((r,\theta)\), \(z\) runs from \(0\) to \(\sqrt{4 - r^2}\).

  The mass is

  \[
  M = \int_0^{2\pi} \int_0^2 \int_0^{\sqrt{4-r^2}} z\, r\, dz\, dr\, d\theta.
  \]

  The inner integral is \(\frac12(4 - r^2)\). Then

  \[
  \begin{aligned}
  M&= \int_0^{2\pi} \int_0^2 \frac12(4 - r^2)\, r\, dr\, d\theta\\
  &= \pi \int_0^2 (4r - r^3)\, dr\\
  &= \pi\left[2r^2 - \frac{r^4}{4}\right]_0^2\\
  &= \pi(8 - 4) = 4\pi.
  \end{aligned}
  \]

  The hemisphere is symmetric in \(x\) and in \(y\), and the density is \(z\). 
  - The integrand \(xz\) is odd in \(x\), so the moment for \(\bar x\) is \(0\).
  - The integrand \(yz\) is odd in \(y\), so the moment for \(\bar y\) is \(0\).

  Thus \(\bar x = 0\) and \(\bar y = 0\).

  The moment for \(\bar z\) is

  \[
  M_{xy} = \int_0^{2\pi} \int_0^2 \int_0^{\sqrt{4-r^2}} z^2\, r\, dz\, dr\, d\theta.
  \]

  The inner integral is \(\frac13(4 - r^2)^{3/2}\). With \(u = 4 - r^2\),

  \[
  \begin{aligned}
  &\int_0^2 (4 - r^2)^{3/2}\, r\, dr\\
  &= \frac12 \int_0^4 u^{3/2}\, du\\
  &= \frac15 \cdot 4^{5/2} = \frac{32}{5},
  \end{aligned}
  \]

  so \(M_{xy} = 2\pi \cdot \frac13 \cdot \frac{32}{5} = \frac{64\pi}{15}\). Then

  \[
  \bar z = \frac{M_{xy}}{M} = \frac{64\pi/15}{4\pi} = \frac{16}{15}.
  \]

  The centre of mass is \(\left(0, 0, \dfrac{16}{15}\right)\).
provenance: handout-answer
steps:
  - The hemisphere is described in cylindrical coordinates over the disk of radius 2.
  - The mass is computed as the triple integral of \(z\).
  - Symmetry sets the \(x\) and \(y\) moments to 0.
  - The moment \(M_{xy}\) is divided by the mass to obtain \(\bar z\).
verification:
  checks:
    - expr: "integrate(z*r,(z,0,sqrt(4-r**2)),(r,0,2),(t,0,2*pi))"
      expected: "4*pi"
    - expr: "integrate(z**2*r,(z,0,sqrt(4-r**2)),(r,0,2),(t,0,2*pi))"
      expected: "64*pi/15"
    - expr: "integrate(r*cos(t)*z*r,(z,0,sqrt(4-r**2)),(r,0,2),(t,0,2*pi))"
      expected: "0"
    - expr: "integrate(r*sin(t)*z*r,(z,0,sqrt(4-r**2)),(r,0,2),(t,0,2*pi))"
      expected: "0"
    - expr: "(64*pi/15)/(4*pi)"
      expected: "16/15"
:::

::: exercise
id: l8-mass-centre.15.5.14
number: "15.5.14"
tier: standard
topics: [centre-of-mass]
statement: |
  An object occupies the volume of the pyramid with corners at \((1,1,0)\), \((1,-1,0)\), \((-1,-1,0)\), \((-1,1,0)\) and \((0,0,2)\), and has density \(x^2 + y^2\) at \((x,y,z)\). Find the centre of mass.
solution: |
  The base is the square \(-1 \le x \le 1\), \(-1 \le y \le 1\) in the plane \(z = 0\), and the apex is \((0,0,2)\). At height \(z\), the cross-section is the square \(|x| \le 1 - z/2\), \(|y| \le 1 - z/2\), with \(z\) from \(0\) to \(2\).

  - The integrand \(x(x^2 + y^2)\) is odd in \(x\), and the pyramid is symmetric across the plane \(x = 0\), so \(M_{yz} = 0\) and \(\bar x = 0\).
  - The integrand \(y(x^2 + y^2)\) is odd in \(y\), so \(M_{xz} = 0\) and \(\bar y = 0\).


  Write \(s = 1 - z/2\). Over the square \(|x| \le s\), \(|y| \le s\),

  \[
  \int_{-s}^{s} \int_{-s}^{s} (x^2 + y^2)\, dx\, dy = \frac{8}{3}s^4.
  \]

  The mass is

  \[
  M = \int_0^2 \frac{8}{3}\left(1 - \frac{z}{2}\right)^4 dz.
  \]

  The substitution \(u = 1 - z/2\) gives \(M = \frac{16}{15}\). The moment for \(\bar z\) is

  \[
  M_{xy} = \int_0^2 z \cdot \frac{8}{3}\left(1 - \frac{z}{2}\right)^4 dz = \frac{16}{45}.
  \]

  Then \(\bar z = M_{xy}/M = (16/45)/(16/15) = 1/3\). The centre of mass is \(\left(0, 0, \dfrac{1}{3}\right)\).
provenance: handout-answer
steps:
  - The cross-section at height \(z\) is described.
  - Symmetry sets \(\bar x\) and \(\bar y\) to 0.
  - The mass and \(M_{xy}\) are computed and divided.
verification:
  checks:
    - expr: "integrate(x**2+y**2,(y,-(1-z/2),1-z/2),(x,-(1-z/2),1-z/2),(z,0,2))"
      expected: "16/15"
    - expr: "integrate(z*(x**2+y**2),(y,-(1-z/2),1-z/2),(x,-(1-z/2),1-z/2),(z,0,2))"
      expected: "16/45"
    - expr: "integrate(x*(x**2+y**2),(y,-(1-z/2),1-z/2),(x,-(1-z/2),1-z/2),(z,0,2))"
      expected: "0"
    - expr: "integrate(y*(x**2+y**2),(y,-(1-z/2),1-z/2),(x,-(1-z/2),1-z/2),(z,0,2))"
      expected: "0"
    - expr: "(16/45)/(16/15)"
      expected: "1/3"
:::

::: exercise
id: l8-mass-centre.15.5.15
number: "15.5.15"
tier: standard
topics: [centre-of-mass]
statement: |
  Verify the moments \(M_{xy}\), \(M_{xz}\) and \(M_{yz}\) of Example 15.5.4 by evaluating the integrals.
solution: |
  Example 15.5.4 uses the tetrahedron with corners \((0,0,0)\), \((0,1,0)\), \((1,1,0)\) and \((0,1,1)\), and density \(xz\). The limits are:

  - \(x\) from \(0\) to \(1\),
  - \(y\) from \(x\) to \(1\),
  - \(z\) from \(0\) to \(y - x\).

  The moment that carries the factor \(z\) is

  \[
  M_{xy} = \int_0^1 \int_x^1 \int_0^{y-x} xz^2\, dz\, dy\, dx.
  \]

  The inner integral is \(x(y-x)^3/3\), and the triple integral equals \(1/360\).

  The moment that carries the factor \(y\) is

  \[
  M_{xz} = \int_0^1 \int_x^1 \int_0^{y-x} xyz\, dz\, dy\, dx.
  \]

  The inner integral is \(xy(y-x)^2/2\), and the triple integral equals \(1/144\).

  The moment that carries the factor \(x\) is

  \[
  M_{yz} = \int_0^1 \int_x^1 \int_0^{y-x} x^2 z\, dz\, dy\, dx.
  \]

  The inner integral is \(x^2(y-x)^2/2\), and the triple integral equals \(1/360\).

  The mass, the integral of the density \(xz\), equals \(1/120\). Then
  \[
  \begin{aligned}
  \bar x&=M_{yz}/M=1/3,\\
  \bar y&=M_{xz}/M=5/6,\\
  \bar z&=M_{xy}/M=1/3.
  \end{aligned}
  \]
  The centre of mass is \(\left(\dfrac{1}{3}, \dfrac{5}{6}, \dfrac{1}{3}\right)\).
provenance: written-for-site
steps:
  - The tetrahedron and the density \(xz\) are taken from Example 15.5.4.
  - Each moment integral is evaluated.
  - The three moments are divided by the mass.
verification:
  checks:
    - expr: "integrate(x*z**2,(z,0,y-x),(y,x,1),(x,0,1))"
      expected: "1/360"
    - expr: "integrate(x*y*z,(z,0,y-x),(y,x,1),(x,0,1))"
      expected: "1/144"
    - expr: "integrate(x**2*z,(z,0,y-x),(y,x,1),(x,0,1))"
      expected: "1/360"
    - expr: "integrate(x*z,(z,0,y-x),(y,x,1),(x,0,1))"
      expected: "1/120"
    - expr: "Tuple((1/360)/(1/120),(1/144)/(1/120),(1/360)/(1/120))"
      expected: "Tuple(1/3,5/6,1/3)"
:::

::: exercise
id: l8-mass-centre.15.6.10
number: "15.6.10"
tier: standard
topics: [mass]
statement: |
  Find the mass of a right circular cone of height \(h\) and base radius \(a\) if the density is proportional to the distance from the base.
solution: |
  Let the constant of proportionality be \(k\). Place the apex at the origin and the axis along the positive z-axis, so the base is the disk of radius \(a\) in the plane \(z = h\). At height \(z\) the cross-section is a disk of radius \((a/h)z\). The distance from the base is \(h - z\), so the density is \(k(h - z)\).

  In cylindrical coordinates the mass is

  \[
  M = \int_0^h \int_0^{2\pi} \int_0^{(a/h)z} k(h - z)\, r\, dr\, d\theta\, dz.
  \]

  The \(r\)-integral is \(k(h - z) \cdot \frac12 (az/h)^2\). The \(\theta\)-integral multiplies by \(2\pi\), so

  \[
  \begin{aligned}
  M&= \frac{\pi k a^2}{h^2} \int_0^h (hz^2 - z^3)\, dz\\
  &= \frac{\pi k a^2}{h^2}\left[\frac{hz^3}{3} - \frac{z^4}{4}\right]_0^h\\
  &= \frac{\pi k a^2}{h^2}\left(\frac{h^4}{3} - \frac{h^4}{4}\right).
  \end{aligned}
  \]

  The difference \(\frac{h^4}{3} - \frac{h^4}{4}\) equals \(\frac{h^4}{12}\), so

  \[
  M = \frac{\pi k a^2}{h^2} \cdot \frac{h^4}{12} = \frac{\pi k h^2 a^2}{12}.
  \]

  The mass is \(\dfrac{\pi k h^2 a^2}{12}\).
provenance: handout-answer
steps:
  - The cone is placed with its apex at the origin and its base at \(z = h\).
  - The density is written as \(k\) times the distance from the base.
  - The mass is computed in cylindrical coordinates.
verification:
  checks:
    - expr: "integrate(k*(h-z)*r,(r,0,a*z/h),(t,0,2*pi),(z,0,h))"
      expected: "pi*k*h**2*a**2/12"
:::

::: exercise
id: l8-mass-centre.15.6.11
number: "15.6.11"
tier: standard
topics: [mass]
statement: |
  Find the mass of a right circular cone of height \(h\) and base radius \(a\) if the density is proportional to the distance from its axis of symmetry.
solution: |
  Let the constant of proportionality be \(k\). Use the same cone as for the distance from the base: apex at the origin, axis along the positive z-axis, base of radius \(a\) in the plane \(z = h\). The distance from the axis is the cylindrical radius \(r\), so the density is \(kr\). At height \(z\) the radius runs from \(0\) to \((a/h)z\).

  The mass is

  \[
  M = \int_0^h \int_0^{2\pi} \int_0^{(a/h)z} kr \cdot r\, dr\, d\theta\, dz.
  \]

  The \(r\)-integral is \(k(az/h)^3/3\). The \(\theta\)-integral multiplies by \(2\pi\), so

  \[
  \begin{aligned}
  M&= \frac{2\pi k}{3}\left(\frac{a}{h}\right)^3 \int_0^h z^3\, dz\\
  &= \frac{2\pi k}{3} \cdot \frac{a^3}{h^3} \cdot \frac{h^4}{4}\\
  &= \frac{\pi k h a^3}{6}.
  \end{aligned}
  \]

  The mass is \(\dfrac{\pi k h a^3}{6}\).
provenance: handout-answer
steps:
  - The density is written as \(k\) times the distance from the axis.
  - The cone is described in cylindrical coordinates.
  - The mass integral is evaluated.
verification:
  checks:
    - expr: "integrate(k*r*r,(r,0,a*z/h),(t,0,2*pi),(z,0,h))"
      expected: "pi*k*h*a**3/6"
:::

::: sheet-item
id: l8-mass-centre.sheet-mass
category: formula
text: |
  The mass of a plate is the double integral of its density \(\sigma\). The mass of a solid is the triple integral of its density.
:::

::: sheet-item
id: l8-mass-centre.sheet-centre
category: formula
text: |
  The centre of mass is moments divided by mass.

  - For a plate, \(\bar x = M_y/M\) and \(\bar y = M_x/M\).
  - For a solid, \(\bar x = M_{yz}/M\), \(\bar y = M_{xz}/M\) and \(\bar z = M_{xy}/M\).
:::

::: sheet-item
id: l8-mass-centre.sheet-swap
category: trap
text: |
  \(\bar x\) is \(M_y/M\), the moment built with the factor \(x\). Dividing \(M_x\) by the mass gives \(\bar y\).
:::

::: exercise
id: l8-mass-centre.mock-exam-1-q7c
tier: exam
topics: [mass, volumes]
examBlock: triple-integrals-volumes
pastExam:
  year: 2022
  paper: Mock exam
  question: "7c"
  points: 1
statement: |
  Let \( V \) be the solid between the paraboloid \( z = x^2 + y^2 \) and the cone \( z^2 = x^2 + y^2 \). Compute the mass of a medium occupying \( V \) with density \( 1/z^2 \). The mass is \( \iiint_V z^{-2}\,dV \).
solution: |
  The bounded solid lies under the upper cone and above the paraboloid, where \( 0 \le r \le 1 \) and \( r^2 \le z \le r \). In cylindrical coordinates,

  \[
  \int_{z=r^2}^{r} z^{-2}\,dz = \frac{1}{r^2} - \frac{1}{r}.
  \]

  The mass integral is then

  \[
  \int_0^{2\pi}\int_0^1\left(\frac{1}{r}-1\right)\,dr\,d\theta.
  \]

  Cut off at \( r = \varepsilon \in (0, 1) \). The truncated mass is \( 2\pi(\varepsilon - \log\varepsilon - 1) \). As \( \varepsilon \) tends to 0 this grows without bound, because \( -\log\varepsilon \) does. The mass is infinite.
provenance: written-for-site
steps:
  - The solid is \( r^2 \le z \le r \) for \( 0 \le r \le 1 \).
  - The vertical integral of \( z^{-2} \) is \( r^{-2} - r^{-1} \).
  - The truncated mass tends to infinity as the cutoff tends to 0.
verification:
  checks:
    - expr: integrate(2*pi*(1/r - 1), (r, eps, 1))
      expected: "-2*pi*log(eps) - 2*pi + 2*pi*eps"
:::

::: exercise
id: l8-mass-centre.ex-plate-centre
tier: standard
topics: [centre-of-mass, double-integrals]
statement: |
  A plate occupies the region \(0 \le x \le 1\), \(0 \le y \le 1 - x^{2}\) and has density \(\sigma(x,y) = x\). Find its mass \(M\), the moments \(M_x\) and \(M_y\), and the centre of mass \((\bar x, \bar y)\).
solution: |
  The region lies under the parabola \(y = 1 - x^{2}\) in the first quadrant. For each \(x\), \(y\) runs from \(0\) to \(1 - x^{2}\).

  The mass is the integral of the density:

  \[
  \begin{aligned}
  M&= \int_0^1 \int_0^{1-x^{2}} x\, dy\, dx\\
  &= \int_0^1 x(1 - x^{2})\, dx\\
  &= \frac12 - \frac14 = \frac14.
  \end{aligned}
  \]

  The moment \(M_y\) multiplies the density by \(x\):

  \[
  \begin{aligned}
  M_y&= \int_0^1 \int_0^{1-x^{2}} x \cdot x\, dy\, dx\\
  &= \int_0^1 x^{2}(1 - x^{2})\, dx\\
  &= \frac13 - \frac15 = \frac{2}{15}.
  \end{aligned}
  \]

  The moment \(M_x\) multiplies the density by \(y\):

  \[
  \begin{aligned}
  M_x&= \int_0^1 \int_0^{1-x^{2}} y \cdot x\, dy\, dx\\
  &= \int_0^1 \frac{x(1 - x^{2})^{2}}{2}\, dx.
  \end{aligned}
  \]

  With \(u = 1 - x^{2}\) and \(du = -2x\,dx\), this equals \(\frac12 \cdot \frac12 \int_0^1 u^{2}\, du = \frac{1}{12}\).

  Then
  \[
  \begin{aligned}
  \bar x&=M_y/M=\dfrac{2/15}{1/4}=\dfrac{8}{15},\\
  \bar y&=M_x/M=\dfrac{1/12}{1/4}=\dfrac13.
  \end{aligned}
  \]

  The mass is \(\frac14\), the moments are \(M_x = \frac{1}{12}\) and \(M_y = \frac{2}{15}\), and the centre of mass is \(\left(\dfrac{8}{15}, \dfrac13\right)\).
provenance: written-for-site
steps:
  - The solution integrates the density over the region to get \(M = \frac14\).
  - The solution builds \(M_y\) with the factor \(x\) and \(M_x\) with the factor \(y\), and evaluates both.
  - The solution divides to get \((\bar x, \bar y) = (8/15, 1/3)\).
verification:
  checks:
    - expr: "integrate(x, (y, 0, 1 - x**2), (x, 0, 1))"
      expected: "1/4"
    - expr: "integrate(x*x, (y, 0, 1 - x**2), (x, 0, 1))"
      expected: "2/15"
    - expr: "integrate(y*x, (y, 0, 1 - x**2), (x, 0, 1))"
      expected: "1/12"
    - expr: "(Rational(2, 15)/Rational(1, 4), Rational(1, 12)/Rational(1, 4))"
      expected: "(8/15, 1/3)"
:::

::: exercise
id: l8-mass-centre.ex-hemisphere-centroid
tier: standard
topics: [centre-of-mass, triple-integrals, spherical-coordinates]
statement: |
  A solid occupies the upper half of the ball of radius \(R\), that is \(x^{2}+y^{2}+z^{2} \le R^{2}\) with \(z \ge 0\), and has density \(1\). Find its centre of mass.
solution: |
  The solid and its density are symmetric across the planes \(x = 0\) and \(y = 0\). The integrands \(x\) and \(y\) are odd in those variables, so \(M_{yz} = 0\) and \(M_{xz} = 0\). Hence \(\bar x = 0\) and \(\bar y = 0\).

  In spherical coordinates the solid is \(0 \le \rho \le R\), \(0 \le \phi \le \pi/2\) and \(0 \le \theta \le 2\pi\). The mass equals the volume,

  \[
  \begin{aligned}
  M&= \int_0^{2\pi}\int_0^{\pi/2}\int_0^R \rho^{2}\sin\phi\, d\rho\, d\phi\, d\theta\\
  &= \frac{R^{3}}{3}\cdot 1\cdot 2\pi = \frac{2\pi R^{3}}{3}.
  \end{aligned}
  \]

  The moment \(M_{xy}\) multiplies the density by \(z = \rho\cos\phi\):

  \[
  \begin{aligned}
  M_{xy}&= \int_0^{2\pi}\int_0^{\pi/2}\\
  &\quad \int_0^R \rho^{3}\cos\phi\sin\phi\, d\rho\, d\phi\, d\theta\\
  &= \frac{R^{4}}{4}\cdot\frac12\cdot 2\pi = \frac{\pi R^{4}}{4}.
  \end{aligned}
  \]

  The \(\phi\) integral is \(\int_0^{\pi/2}\cos\phi\sin\phi\, d\phi = \frac12\). Then

  \[
  \bar z = \frac{M_{xy}}{M} = \frac{\pi R^{4}/4}{2\pi R^{3}/3} = \frac{3R}{8}.
  \]

  The centre of mass is \(\left(0, 0, \dfrac{3R}{8}\right)\).
provenance: written-for-site
steps:
  - The solution uses symmetry to set \(\bar x = \bar y = 0\).
  - The solution computes \(M = 2\pi R^{3}/3\) and \(M_{xy} = \pi R^{4}/4\) in spherical coordinates.
  - The solution states \(\bar z = 3R/8\).
verification:
  checks:
    - expr: "integrate(rho**2*sin(p), (rho, 0, R), (p, 0, pi/2), (t, 0, 2*pi))"
      expected: "2*pi*R**3/3"
    - expr: "integrate(rho*cos(p)*rho**2*sin(p), (rho, 0, R), (p, 0, pi/2), (t, 0, 2*pi))"
      expected: "pi*R**4/4"
    - expr: "(pi*R**4/4)/(2*pi*R**3/3)"
      expected: "3*R/8"
:::

::: exercise
id: l8-mass-centre.handout-15-3-1
number: "15.3.1"
tier: basic
topics:
  - centre-of-mass
statement: |
  Find the center of mass of a two-dimensional plate that occupies the square \([0, 1] \times [0, 1]\) and has density function \(\sigma(x, y) = xy\).
solution: |
  The mass is the integral of the density:
  \[
  \begin{aligned}
  M &= \int_0^1\int_0^1 xy\, dy\, dx\\
  &= \int_0^1 \frac{x}{2}\, dx = \frac14.
  \end{aligned}
  \]
  The moment \(M_y\) multiplies the density by \(x\):
  \[
  M_y = \int_0^1\int_0^1 x\cdot xy\, dy\, dx = \int_0^1 \frac{x^2}{2}\, dx = \frac16.
  \]
  The moment \(M_x\) multiplies the density by \(y\):
  \[
  M_x = \int_0^1\int_0^1 y\cdot xy\, dy\, dx = \int_0^1 \frac{x}{3}\, dx = \frac16.
  \]
  Then
  \[
  \begin{aligned}
  \bar x &= \frac{M_y}{M} = \frac{1/6}{1/4} = \frac23,\\
  \bar y &= \frac{M_x}{M} = \frac{1/6}{1/4} = \frac23.
  \end{aligned}
  \]
  The center of mass is \(\bigl(\frac23, \frac23\bigr)\).
provenance: handout-answer
steps:
  - |
    The mass is \(M = \int_0^1\int_0^1 xy\, dy\, dx = \frac14\).
  - |
    The moments are \(M_y = \frac16\) and \(M_x = \frac16\).
  - |
    The center of mass is \(\bar x = \bar y = \frac23\).
verification:
  checks:
    - expr: 'integrate(x*y, (y, 0, 1), (x, 0, 1))'
      expected: "Rational(1, 4)"
    - expr: 'integrate(x*x*y, (y, 0, 1), (x, 0, 1))'
      expected: "Rational(1, 6)"
    - expr: 'integrate(y*x*y, (y, 0, 1), (x, 0, 1))'
      expected: "Rational(1, 6)"
    - expr: '(Rational(1, 6)/Rational(1, 4), Rational(1, 6)/Rational(1, 4))'
      expected: "(Rational(2, 3), Rational(2, 3))"
:::


::: exercise
id: l8-mass-centre.handout-15-3-2
number: "15.3.2"
tier: standard
topics:
  - centre-of-mass
statement: |
  Find the center of mass of a two-dimensional plate that occupies the triangle \(0 \le x \le 1\), \(0 \le y \le x\), and has density function \(\sigma(x, y) = xy\).
solution: |
  For each \(x\) from \(0\) to \(1\), \(y\) runs from \(0\) to \(x\). The mass is
  \[
  \begin{aligned}
  M &= \int_0^1\int_0^x xy\, dy\, dx\\
  &= \int_0^1 x\cdot\frac{x^2}{2}\, dx = \frac18.
  \end{aligned}
  \]
  The moment \(M_y\) multiplies the density by \(x\):
  \[
  M_y = \int_0^1\int_0^x x^2 y\, dy\, dx = \int_0^1 \frac{x^4}{2}\, dx = \frac1{10}.
  \]
  The moment \(M_x\) multiplies the density by \(y\):
  \[
  M_x = \int_0^1\int_0^x x y^2\, dy\, dx = \int_0^1 \frac{x^4}{3}\, dx = \frac1{15}.
  \]
  Then
  \[
  \begin{aligned}
  \bar x &= \frac{M_y}{M} = \frac{1/10}{1/8} = \frac45,\\
  \bar y &= \frac{M_x}{M} = \frac{1/15}{1/8} = \frac{8}{15}.
  \end{aligned}
  \]
  The center of mass is \(\bigl(\frac45, \frac{8}{15}\bigr)\).
provenance: handout-answer
steps:
  - |
    The limits are \(0 \le x \le 1\) and \(0 \le y \le x\), and the mass is \(M = \frac18\).
  - |
    The moments are \(M_y = \frac1{10}\) and \(M_x = \frac1{15}\).
  - |
    The center of mass is \(\bar x = \frac45\) and \(\bar y = \frac8{15}\).
verification:
  checks:
    - expr: 'integrate(x*y, (y, 0, x), (x, 0, 1))'
      expected: "Rational(1, 8)"
    - expr: 'integrate(x*x*y, (y, 0, x), (x, 0, 1))'
      expected: "Rational(1, 10)"
    - expr: 'integrate(y*x*y, (y, 0, x), (x, 0, 1))'
      expected: "Rational(1, 15)"
    - expr: '(Rational(1, 10)/Rational(1, 8), Rational(1, 15)/Rational(1, 8))'
      expected: "(Rational(4, 5), Rational(8, 15))"
:::


::: exercise
id: l8-mass-centre.handout-15-3-3
number: "15.3.3"
tier: standard
topics:
  - centre-of-mass
  - double-integrals
statement: |
  Find the center of mass of a two-dimensional plate that occupies the upper unit semicircle centered at \((0, 0)\) and has density function \(\sigma(x, y) = y\).
solution: |
  The plate is the half disk \(x^2 + y^2 \le 1\), \(y \ge 0\). In polar coordinates it is \(0 \le r \le 1\), \(0 \le \theta \le \pi\). Substitute \(x = r\cos\theta\) and \(y = r\sin\theta\), and use the area element \(r\, dr\, d\theta\). The density is \(y = r\sin\theta\).

  The mass is
  \[
  \begin{aligned}
  M &= \int_0^\pi\int_0^1 r\sin\theta\cdot r\, dr\, d\theta\\
  &= \frac13\int_0^\pi \sin\theta\, d\theta = \frac23.
  \end{aligned}
  \]
  The moment \(M_y\) multiplies the density by \(x = r\cos\theta\):
  \[
  \begin{aligned}
  M_y &= \int_0^\pi\int_0^1 r\cos\theta\cdot r\sin\theta\cdot r\, dr\, d\theta\\
  &= \frac14\int_0^\pi \sin\theta\cos\theta\, d\theta = 0.
  \end{aligned}
  \]
  The moment \(M_x\) multiplies the density by \(y = r\sin\theta\):
  \[
  \begin{aligned}
  M_x &= \int_0^\pi\int_0^1 r\sin\theta\cdot r\sin\theta\cdot r\, dr\, d\theta\\
  &= \frac14\int_0^\pi \sin^2\theta\, d\theta = \frac{\pi}{8}.
  \end{aligned}
  \]
  Then \(\bar x = \frac{M_y}{M} = 0\) and
  \[
  \bar y = \frac{M_x}{M} = \frac{\pi/8}{2/3} = \frac{3\pi}{16}.
  \]
  The center of mass is \(\bigl(0, \frac{3\pi}{16}\bigr)\).
provenance: handout-answer
steps:
  - |
    The half disk is \(0 \le r \le 1\), \(0 \le \theta \le \pi\), with density \(r\sin\theta\) and area element \(r\, dr\, d\theta\).
  - |
    The mass is \(\frac23\), \(M_y = 0\) and \(M_x = \frac{\pi}{8}\).
  - |
    The center of mass is \(\bigl(0, \frac{3\pi}{16}\bigr)\).
verification:
  checks:
    - expr: 'integrate(r*sin(t)*r, (r, 0, 1), (t, 0, pi))'
      expected: "Rational(2, 3)"
    - expr: 'integrate(r*cos(t)*r*sin(t)*r, (r, 0, 1), (t, 0, pi))'
      expected: "0"
    - expr: 'integrate(r*sin(t)*r*sin(t)*r, (r, 0, 1), (t, 0, pi))'
      expected: "pi/8"
    - expr: '(pi/8)/Rational(2, 3)'
      expected: "3*pi/16"
:::


::: exercise
id: l8-mass-centre.handout-15-3-4
number: "15.3.4"
tier: standard
topics:
  - centre-of-mass
  - double-integrals
statement: |
  Find the center of mass of a two-dimensional plate that occupies the upper unit semicircle centered at \((0, 0)\) and has density function \(\sigma(x, y) = x^2\).
solution: |
  The plate is the half disk \(0 \le r \le 1\), \(0 \le \theta \le \pi\). Substitute \(x = r\cos\theta\) and \(y = r\sin\theta\), and use the area element \(r\, dr\, d\theta\). The density is \(x^2 = r^2\cos^2\theta\).

  The mass is
  \[
  \begin{aligned}
  M &= \int_0^\pi\int_0^1 r^2\cos^2\theta\cdot r\, dr\, d\theta\\
  &= \frac14\int_0^\pi \cos^2\theta\, d\theta = \frac{\pi}{8}.
  \end{aligned}
  \]
  The moment \(M_y\) multiplies the density by \(x = r\cos\theta\):
  \[
  \begin{aligned}
  M_y &= \int_0^\pi\int_0^1 r\cos\theta\cdot r^2\cos^2\theta\cdot r\, dr\, d\theta\\
  &= \frac15\int_0^\pi \cos^3\theta\, d\theta = 0.
  \end{aligned}
  \]
  The integral of \(\cos^3\theta\) over \([0, \pi]\) is \(0\), since \(\cos^3\theta = (1 - \sin^2\theta)\cos\theta\) has the antiderivative \(\sin\theta - \frac13\sin^3\theta\), which equals \(0\) at both ends.

  The moment \(M_x\) multiplies the density by \(y = r\sin\theta\):
  \[
  \begin{aligned}
  M_x &= \int_0^\pi\int_0^1 r\sin\theta\cdot r^2\cos^2\theta\cdot r\, dr\, d\theta\\
  &= \frac15\int_0^\pi \sin\theta\cos^2\theta\, d\theta = \frac15\cdot\frac23 = \frac{2}{15}.
  \end{aligned}
  \]
  Then \(\bar x = \frac{M_y}{M} = 0\) and
  \[
  \bar y = \frac{M_x}{M} = \frac{2/15}{\pi/8} = \frac{16}{15\pi}.
  \]
  The center of mass is \(\bigl(0, \frac{16}{15\pi}\bigr)\).
provenance: handout-answer
steps:
  - |
    The half disk is \(0 \le r \le 1\), \(0 \le \theta \le \pi\), with density \(r^2\cos^2\theta\).
  - |
    The mass is \(\frac{\pi}{8}\), \(M_y = 0\) and \(M_x = \frac{2}{15}\).
  - |
    The center of mass is \(\bigl(0, \frac{16}{15\pi}\bigr)\).
verification:
  checks:
    - expr: 'integrate(r**2*cos(t)**2*r, (r, 0, 1), (t, 0, pi))'
      expected: "pi/8"
    - expr: 'integrate(r*cos(t)*r**2*cos(t)**2*r, (r, 0, 1), (t, 0, pi))'
      expected: "0"
    - expr: 'integrate(r*sin(t)*r**2*cos(t)**2*r, (r, 0, 1), (t, 0, pi))'
      expected: "Rational(2, 15)"
    - expr: 'Rational(2, 15)/(pi/8)'
      expected: "16/(15*pi)"
:::


::: exercise
id: l8-mass-centre.handout-15-3-5
number: "15.3.5"
tier: standard
topics:
  - centre-of-mass
statement: |
  Find the center of mass of a two-dimensional plate that occupies the triangle formed by \(x = 2\), \(y = x\) and \(y = 2x\), and has density function \(\sigma(x, y) = 2x\).
solution: |
  The lines \(y = x\) and \(y = 2x\) meet at the origin. The line \(x = 2\) meets them at \((2, 2)\) and \((2, 4)\). So the triangle has vertices \((0, 0)\), \((2, 2)\) and \((2, 4)\), and for each \(x\) from \(0\) to \(2\), \(y\) runs from \(x\) to \(2x\).

  The mass is
  \[
  \begin{aligned}
  M &= \int_0^2\int_x^{2x} 2x\, dy\, dx\\
  &= \int_0^2 2x\cdot x\, dx = \frac{16}{3}.
  \end{aligned}
  \]
  The moment \(M_y\) multiplies the density by \(x\):
  \[
  M_y = \int_0^2\int_x^{2x} 2x^2\, dy\, dx = \int_0^2 2x^3\, dx = 8.
  \]
  The moment \(M_x\) multiplies the density by \(y\). The inner integral is \(\int_x^{2x} y\, dy = \frac{(2x)^2 - x^2}{2} = \frac{3x^2}{2}\), so
  \[
  M_x = \int_0^2 2x\cdot\frac{3x^2}{2}\, dx = \int_0^2 3x^3\, dx = 12.
  \]
  Then
  \[
  \begin{aligned}
  \bar x &= \frac{M_y}{M} = \frac{8}{16/3} = \frac32,\\
  \bar y &= \frac{M_x}{M} = \frac{12}{16/3} = \frac94.
  \end{aligned}
  \]
  The center of mass is \(\bigl(\frac32, \frac94\bigr)\).
provenance: handout-answer
steps:
  - |
    The vertices are \((0, 0)\), \((2, 2)\) and \((2, 4)\), so \(0 \le x \le 2\) and \(x \le y \le 2x\).
  - |
    The mass is \(\frac{16}{3}\), \(M_y = 8\) and \(M_x = 12\).
  - |
    The center of mass is \(\bigl(\frac32, \frac94\bigr)\).
verification:
  checks:
    - expr: 'integrate(2*x, (y, x, 2*x), (x, 0, 2))'
      expected: "Rational(16, 3)"
    - expr: 'integrate(x*2*x, (y, x, 2*x), (x, 0, 2))'
      expected: "8"
    - expr: 'integrate(y*2*x, (y, x, 2*x), (x, 0, 2))'
      expected: "12"
    - expr: '(8/Rational(16, 3), 12/Rational(16, 3))'
      expected: "(Rational(3, 2), Rational(9, 4))"
:::


::: exercise
id: l8-mass-centre.handout-15-3-6
number: "15.3.6"
tier: standard
topics:
  - centre-of-mass
statement: |
  Find the center of mass of a two-dimensional plate that occupies the triangle formed by \(x = 0\), \(y = x\) and \(2x + y = 6\), and has density function \(\sigma(x, y) = x^2\).
solution: |
  The lines \(x = 0\) and \(y = x\) meet at the origin. The line \(x = 0\) meets \(2x + y = 6\) at \((0, 6)\). The lines \(y = x\) and \(2x + y = 6\) meet where \(3x = 6\), at \((2, 2)\). So the triangle has vertices \((0, 0)\), \((0, 6)\) and \((2, 2)\), and for each \(x\) from \(0\) to \(2\), \(y\) runs from \(x\) to \(6 - 2x\).

  The mass is
  \[
  \begin{aligned}
  M &= \int_0^2\int_x^{6-2x} x^2\, dy\, dx\\
  &= \int_0^2 x^2(6 - 3x)\, dx = 16 - 12 = 4.
  \end{aligned}
  \]
  The moment \(M_y\) multiplies the density by \(x\):
  \[
  \begin{aligned}
  M_y &= \int_0^2 x^3(6 - 3x)\, dx\\
  &= 6\cdot 4 - 3\cdot\frac{32}{5} = \frac{24}{5}.
  \end{aligned}
  \]
  The moment \(M_x\) multiplies the density by \(y\). The inner integral is
  \[
  \int_x^{6-2x} y\, dy = \frac{(6 - 2x)^2 - x^2}{2} = \frac{36 - 24x + 3x^2}{2},
  \]
  so
  \[
  \begin{aligned}
  M_x &= \frac12\int_0^2 x^2\bigl(36 - 24x + 3x^2\bigr)\, dx\\
  &= \frac12\Bigl(96 - 96 + \frac{96}{5}\Bigr) = \frac{48}{5}.
  \end{aligned}
  \]
  Then
  \[
  \begin{aligned}
  \bar x &= \frac{M_y}{M} = \frac{24/5}{4} = \frac65,\\
  \bar y &= \frac{M_x}{M} = \frac{48/5}{4} = \frac{12}{5}.
  \end{aligned}
  \]
  The center of mass is \(\bigl(\frac65, \frac{12}{5}\bigr)\).
provenance: handout-answer
steps:
  - |
    The vertices are \((0, 0)\), \((0, 6)\) and \((2, 2)\), so \(0 \le x \le 2\) and \(x \le y \le 6 - 2x\).
  - |
    The mass is \(4\), \(M_y = \frac{24}{5}\) and \(M_x = \frac{48}{5}\).
  - |
    The center of mass is \(\bigl(\frac65, \frac{12}{5}\bigr)\).
verification:
  checks:
    - expr: 'solve(Eq(x, 6 - 2*x), x)'
      expected: "[2]"
    - expr: 'integrate(x**2, (y, x, 6 - 2*x), (x, 0, 2))'
      expected: "4"
    - expr: 'integrate(x*x**2, (y, x, 6 - 2*x), (x, 0, 2))'
      expected: "Rational(24, 5)"
    - expr: 'integrate(y*x**2, (y, x, 6 - 2*x), (x, 0, 2))'
      expected: "Rational(48, 5)"
    - expr: '(Rational(24, 5)/4, Rational(48, 5)/4)'
      expected: "(Rational(6, 5), Rational(12, 5))"
:::


::: exercise
id: l8-mass-centre.handout-15-3-7
number: "15.3.7"
tier: standard
topics:
  - centre-of-mass
statement: |
  Find the center of mass of a two-dimensional plate that occupies the region enclosed by the parabolas \(x = y^2\) and \(y = x^2\), and has density function \(\sigma(x, y) = \sqrt{x}\).
solution: |
  The parabolas meet where \(x = y^2 = x^4\), so \(x = 0\) or \(x = 1\). The points are \((0, 0)\) and \((1, 1)\). For \(0 \le x \le 1\) the parabola \(x = y^2\) gives \(y = \sqrt{x}\), which lies above \(y = x^2\). So \(y\) runs from \(x^2\) to \(\sqrt{x}\).

  The mass is
  \[
  \begin{aligned}
  M &= \int_0^1\int_{x^2}^{\sqrt{x}} \sqrt{x}\, dy\, dx\\
  &= \int_0^1 \bigl(x - x^{5/2}\bigr)\, dx = \frac12 - \frac27 = \frac{3}{14}.
  \end{aligned}
  \]
  The moment \(M_y\) multiplies the density by \(x\):
  \[
  \begin{aligned}
  M_y &= \int_0^1 x^{3/2}\bigl(\sqrt{x} - x^2\bigr)\, dx\\
  &= \int_0^1 \bigl(x^2 - x^{7/2}\bigr)\, dx = \frac13 - \frac29 = \frac19.
  \end{aligned}
  \]
  The moment \(M_x\) multiplies the density by \(y\). The inner integral is \(\int_{x^2}^{\sqrt{x}} y\, dy = \frac{x - x^4}{2}\), so
  \[
  \begin{aligned}
  M_x &= \frac12\int_0^1 \sqrt{x}\,\bigl(x - x^4\bigr)\, dx\\
  &= \frac12\int_0^1 \bigl(x^{3/2} - x^{9/2}\bigr)\, dx\\
  &= \frac12\Bigl(\frac25 - \frac2{11}\Bigr) = \frac{6}{55}.
  \end{aligned}
  \]
  Then
  \[
  \begin{aligned}
  \bar x &= \frac{M_y}{M} = \frac{1/9}{3/14} = \frac{14}{27},\\
  \bar y &= \frac{M_x}{M} = \frac{6/55}{3/14} = \frac{28}{55}.
  \end{aligned}
  \]
  The center of mass is \(\bigl(\frac{14}{27}, \frac{28}{55}\bigr)\).
provenance: handout-answer
steps:
  - |
    The parabolas meet at \((0, 0)\) and \((1, 1)\), and the region has \(0 \le x \le 1\), \(x^2 \le y \le \sqrt{x}\).
  - |
    The mass is \(\frac{3}{14}\), \(M_y = \frac19\) and \(M_x = \frac{6}{55}\).
  - |
    The center of mass is \(\bigl(\frac{14}{27}, \frac{28}{55}\bigr)\).
verification:
  checks:
    - expr: 'integrate(sqrt(x), (y, x**2, sqrt(x)), (x, 0, 1))'
      expected: "Rational(3, 14)"
    - expr: 'integrate(x*sqrt(x), (y, x**2, sqrt(x)), (x, 0, 1))'
      expected: "Rational(1, 9)"
    - expr: 'integrate(y*sqrt(x), (y, x**2, sqrt(x)), (x, 0, 1))'
      expected: "Rational(6, 55)"
    - expr: '(Rational(1, 9)/Rational(3, 14), Rational(6, 55)/Rational(3, 14))'
      expected: "(Rational(14, 27), Rational(28, 55))"
:::


::: exercise
id: l8-mass-centre.handout-15-3-8
number: "15.3.8"
tier: standard
topics:
  - centre-of-mass
statement: |
  Find the centroid of the area in the first quadrant bounded by \(x^2 - 8y + 4 = 0\), \(x^2 = 4y\) and \(x = 0\). The centroid is the center of mass when the density is \(1\) everywhere.
solution: |
  Solve each parabola for \(y\): \(y = \frac{x^2 + 4}{8}\) and \(y = \frac{x^2}{4}\). They meet where
  \[
  \frac{x^2 + 4}{8} = \frac{x^2}{4}, \qquad\text{so}\qquad x^2 + 4 = 2x^2 \quad\text{and}\quad x = 2
  \]
  in the first quadrant. For \(0 \le x \le 2\), the parabola \(y = \frac{x^2 + 4}{8}\) lies above \(y = \frac{x^2}{4}\), because their difference is \(\frac{4 - x^2}{8} \ge 0\). So \(y\) runs from \(\frac{x^2}{4}\) to \(\frac{x^2 + 4}{8}\).

  The density is \(1\), so the mass equals the area:
  \[
  M = \int_0^2 \frac{4 - x^2}{8}\, dx = \frac18\Bigl(8 - \frac83\Bigr) = \frac23.
  \]
  The moment \(M_y\) multiplies by \(x\):
  \[
  M_y = \int_0^2 \frac{x(4 - x^2)}{8}\, dx = \frac18(8 - 4) = \frac12.
  \]
  The moment \(M_x\) multiplies by \(y\). The inner integral is
  \[
  \begin{aligned}
  \int_{x^2/4}^{(x^2+4)/8} y\, dy &= \frac12\Bigl(\frac{(x^2 + 4)^2}{64} - \frac{x^4}{16}\Bigr)\\
  &= \frac{16 + 8x^2 - 3x^4}{128},
  \end{aligned}
  \]
  so
  \[
  \begin{aligned}
  M_x &= \frac1{128}\int_0^2\bigl(16 + 8x^2 - 3x^4\bigr)\, dx\\
  &= \frac1{128}\Bigl(32 + \frac{64}{3} - \frac{96}{5}\Bigr) = \frac{4}{15}.
  \end{aligned}
  \]
  Then
  \[
  \begin{aligned}
  \bar x &= \frac{M_y}{M} = \frac{1/2}{2/3} = \frac34,\\
  \bar y &= \frac{M_x}{M} = \frac{4/15}{2/3} = \frac25.
  \end{aligned}
  \]
  The centroid is \(\bigl(\frac34, \frac25\bigr)\).
provenance: handout-answer
steps:
  - |
    The curves meet at \(x = 2\), and the region is \(0 \le x \le 2\), \(\frac{x^2}{4} \le y \le \frac{x^2 + 4}{8}\).
  - |
    The area is \(M = \frac23\), \(M_y = \frac12\) and \(M_x = \frac{4}{15}\).
  - |
    The centroid is \(\bigl(\frac34, \frac25\bigr)\).
verification:
  checks:
    - expr: 'solve(Eq((x**2 + 4)/8, x**2/4), x)'
      expected: "[-2, 2]"
    - expr: 'integrate(1, (y, x**2/4, (x**2 + 4)/8), (x, 0, 2))'
      expected: "Rational(2, 3)"
    - expr: 'integrate(x, (y, x**2/4, (x**2 + 4)/8), (x, 0, 2))'
      expected: "Rational(1, 2)"
    - expr: 'integrate(y, (y, x**2/4, (x**2 + 4)/8), (x, 0, 2))'
      expected: "Rational(4, 15)"
    - expr: '(Rational(1, 2)/Rational(2, 3), Rational(4, 15)/Rational(2, 3))'
      expected: "(Rational(3, 4), Rational(2, 5))"
:::


::: exercise
id: l8-mass-centre.handout-15-3-10
number: "15.3.10"
tier: standard
topics:
  - centre-of-mass
statement: |
  Find the center of mass of a two-dimensional object that occupies the region \(0 \le x \le \pi\), \(0 \le y \le \sin x\), with density \(\sigma = 1\).
solution: |
  The mass equals the area under the arch:
  \[
  M = \int_0^\pi\int_0^{\sin x} 1\, dy\, dx = \int_0^\pi \sin x\, dx = 2.
  \]
  The moment \(M_y\) multiplies by \(x\). Integration by parts, with \(u = x\) and \(dv = \sin x\, dx\), gives
  \[
  \begin{aligned}
  M_y &= \int_0^\pi x\sin x\, dx\\
  &= \bigl[-x\cos x + \sin x\bigr]_0^\pi = \pi.
  \end{aligned}
  \]
  The moment \(M_x\) multiplies by \(y\). The inner integral is \(\int_0^{\sin x} y\, dy = \frac12\sin^2 x\), so
  \[
  M_x = \frac12\int_0^\pi \sin^2 x\, dx = \frac12\cdot\frac{\pi}{2} = \frac{\pi}{4}.
  \]
  Then
  \[
  \begin{aligned}
  \bar x &= \frac{M_y}{M} = \frac{\pi}{2},\\
  \bar y &= \frac{M_x}{M} = \frac{\pi/4}{2} = \frac{\pi}{8}.
  \end{aligned}
  \]
  The value \(\bar x = \frac{\pi}{2}\) agrees with the symmetry of the arch about the line \(x = \frac{\pi}{2}\). The center of mass is \(\bigl(\frac{\pi}{2}, \frac{\pi}{8}\bigr)\).
provenance: handout-answer
steps:
  - |
    The mass is the area \(M = \int_0^\pi \sin x\, dx = 2\).
  - |
    Integration by parts gives \(M_y = \pi\), and \(M_x = \frac{\pi}{4}\).
  - |
    The center of mass is \(\bar x = \frac{\pi}{2}\) and \(\bar y = \frac{\pi}{8}\).
verification:
  checks:
    - expr: 'integrate(1, (y, 0, sin(x)), (x, 0, pi))'
      expected: "2"
    - expr: 'integrate(x, (y, 0, sin(x)), (x, 0, pi))'
      expected: "pi"
    - expr: 'integrate(y, (y, 0, sin(x)), (x, 0, pi))'
      expected: "pi/4"
    - expr: '(pi/2, (pi/4)/2)'
      expected: "(pi/2, pi/8)"
:::


::: exercise
id: l8-mass-centre.handout-15-3-11
number: "15.3.11"
tier: standard
topics:
  - centre-of-mass
  - double-integrals
statement: |
  A two-dimensional object has shape given by \(r = 1 + \cos\theta\) and density \(\sigma(r, \theta) = 2 + \cos\theta\). Set up the three integrals required to compute the center of mass.
solution: |
  The shape \(r = 1 + \cos\theta\) is the cardioid, with \(r \ge 0\), traced once for \(0 \le \theta \le 2\pi\). The object is the region \(0 \le r \le 1 + \cos\theta\).

  In polar coordinates \(x = r\cos\theta\), \(y = r\sin\theta\), and the area element is \(r\, dr\, d\theta\). The mass integrates the density, \(M_x\) integrates \(y\) times the density, and \(M_y\) integrates \(x\) times the density:
  \[
  \begin{aligned}
  M &= \int_0^{2\pi}\int_0^{1+\cos\theta} (2 + \cos\theta)\, r\, dr\, d\theta,\\
  M_x &= \int_0^{2\pi}\int_0^{1+\cos\theta} \sin\theta\,(2 + \cos\theta)\, r^2\, dr\, d\theta,\\
  M_y &= \int_0^{2\pi}\int_0^{1+\cos\theta} \cos\theta\,(2 + \cos\theta)\, r^2\, dr\, d\theta.
  \end{aligned}
  \]
  In \(M_x\) and \(M_y\), one factor \(r\) comes from \(y\) or \(x\), and one from the area element, which gives \(r^2\). Then \(\bar x = M_y/M\) and \(\bar y = M_x/M\).

  As a check on the set-up, the integrals evaluate to \(M = 4\pi\), \(M_x = 0\) and \(M_y = \frac{43\pi}{12}\). So \(\bar y = 0\), as the symmetry of the object about the \(x\)-axis requires, and \(\bar x = \frac{43}{48}\).
provenance: handout-answer
steps:
  - |
    The region is \(0 \le \theta \le 2\pi\), \(0 \le r \le 1 + \cos\theta\), with area element \(r\, dr\, d\theta\).
  - |
    \(M\) integrates \((2 + \cos\theta)\, r\), \(M_x\) integrates \(\sin\theta\,(2 + \cos\theta)\, r^2\), and \(M_y\) integrates \(\cos\theta\,(2 + \cos\theta)\, r^2\).
verification:
  checks:
    - expr: 'integrate((2 + cos(t))*r, (r, 0, 1 + cos(t)), (t, 0, 2*pi))'
      expected: "4*pi"
    - expr: 'integrate(sin(t)*(2 + cos(t))*r**2, (r, 0, 1 + cos(t)), (t, 0, 2*pi))'
      expected: "0"
    - expr: 'integrate(cos(t)*(2 + cos(t))*r**2, (r, 0, 1 + cos(t)), (t, 0, 2*pi))'
      expected: "43*pi/12"
    - expr: '(43*pi/12)/(4*pi)'
      expected: "Rational(43, 48)"
:::


::: exercise
id: l8-mass-centre.handout-15-3-12
number: "15.3.12"
tier: standard
topics:
  - centre-of-mass
  - double-integrals
statement: |
  A two-dimensional object has shape given by \(r = \cos\theta\) and density \(\sigma(r, \theta) = r + 1\). Set up the three integrals required to compute the center of mass.
solution: |
  The shape \(r = \cos\theta\) is the circle with centre \(\bigl(\frac12, 0\bigr)\) and radius \(\frac12\). It has \(r \ge 0\) for \(-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}\), and it is traced once on that interval. The object is the disk \(0 \le r \le \cos\theta\) for those angles.

  In polar coordinates \(x = r\cos\theta\), \(y = r\sin\theta\), and the area element is \(r\, dr\, d\theta\). The density is \(r + 1\), so
  \[
  \begin{aligned}
  M &= \int_{-\pi/2}^{\pi/2}\int_0^{\cos\theta} (r + 1)\, r\, dr\, d\theta,\\
  M_x &= \int_{-\pi/2}^{\pi/2}\int_0^{\cos\theta} \sin\theta\,(r + 1)\, r^2\, dr\, d\theta,\\
  M_y &= \int_{-\pi/2}^{\pi/2}\int_0^{\cos\theta} \cos\theta\,(r + 1)\, r^2\, dr\, d\theta.
  \end{aligned}
  \]
  The factor \(r^2\) in \(M_x\) and \(M_y\) combines the \(r\) from \(y\) or \(x\) with the \(r\) of the area element. Then \(\bar x = M_y/M\) and \(\bar y = M_x/M\).

  As a check on the set-up, the integrals evaluate to \(M = \frac49 + \frac{\pi}{4}\), \(M_x = 0\) and \(M_y = \frac{4}{15} + \frac{\pi}{8}\). The value \(M_x = 0\) agrees with the symmetry of the object about the \(x\)-axis.
provenance: handout-answer
steps:
  - |
    The disk is \(-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}\), \(0 \le r \le \cos\theta\), with area element \(r\, dr\, d\theta\).
  - |
    \(M\) integrates \((r + 1)\, r\), \(M_x\) integrates \(\sin\theta\,(r + 1)\, r^2\), and \(M_y\) integrates \(\cos\theta\,(r + 1)\, r^2\).
verification:
  checks:
    - expr: 'integrate((r + 1)*r, (r, 0, cos(t)), (t, -pi/2, pi/2))'
      expected: "Rational(4, 9) + pi/4"
    - expr: 'integrate(sin(t)*(r + 1)*r**2, (r, 0, cos(t)), (t, -pi/2, pi/2))'
      expected: "0"
    - expr: 'integrate(cos(t)*(r + 1)*r**2, (r, 0, cos(t)), (t, -pi/2, pi/2))'
      expected: "Rational(4, 15) + pi/8"
:::


::: exercise
id: l8-mass-centre.handout-15-3-13
number: "15.3.13"
tier: exam
topics:
  - centre-of-mass
  - double-integrals
statement: |
  A two-dimensional object sits inside \(r = 1 + \cos\theta\) and outside \(r = \cos\theta\), and has density \(1\) everywhere. Set up the integrals required to compute the center of mass.
solution: |
  The cardioid \(r = 1 + \cos\theta\) has \(r \ge 0\) and is traced once for \(0 \le \theta \le 2\pi\). The circle \(r = \cos\theta\) has \(r \ge 0\) only for \(-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}\). The cardioid is the outer curve, because \(1 + \cos\theta > \cos\theta\) at every angle.

  The inner radius depends on the angle range, so the region has two pieces.

  - For \(-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}\), the circle is present, and \(r\) runs from \(\cos\theta\) to \(1 + \cos\theta\).
  - For \(\frac{\pi}{2} \le \theta \le \frac{3\pi}{2}\), \(\cos\theta \le 0\). The circle has no points in these directions, because its negative values of \(r\) are plotted back into the angles of the first piece. So \(r\) runs from \(0\) to \(1 + \cos\theta\).

  The density is \(1\) and the area element is \(r\, dr\, d\theta\). The mass is
  \[
  M = \int_{-\pi/2}^{\pi/2}\int_{\cos\theta}^{1+\cos\theta} r\, dr\, d\theta
  + \int_{\pi/2}^{3\pi/2}\int_0^{1+\cos\theta} r\, dr\, d\theta.
  \]
  The moment \(M_x\) adds the factor \(y = r\sin\theta\), and \(M_y\) adds the factor \(x = r\cos\theta\). Each integrand gains a factor \(r\), so \(r\, dr\, d\theta\) becomes \(r^2\sin\theta\, dr\, d\theta\) and \(r^2\cos\theta\, dr\, d\theta\):
  \[
  \begin{aligned}
  M_x &= \int_{-\pi/2}^{\pi/2}\int_{\cos\theta}^{1+\cos\theta} r^2\sin\theta\, dr\, d\theta\\
  &\quad + \int_{\pi/2}^{3\pi/2}\int_0^{1+\cos\theta} r^2\sin\theta\, dr\, d\theta,\\
  M_y &= \int_{-\pi/2}^{\pi/2}\int_{\cos\theta}^{1+\cos\theta} r^2\cos\theta\, dr\, d\theta\\
  &\quad + \int_{\pi/2}^{3\pi/2}\int_0^{1+\cos\theta} r^2\cos\theta\, dr\, d\theta.
  \end{aligned}
  \]
  Then \(\bar x = M_y/M\) and \(\bar y = M_x/M\).

  As a check on the set-up, the mass equals the area of the cardioid minus the area of the disk, \(\frac{3\pi}{2} - \frac{\pi}{4} = \frac{5\pi}{4}\). The moments are \(M_x = 0\) and \(M_y = \frac{9\pi}{8}\), so \(\bar y = 0\) and \(\bar x = \frac{9}{10}\).
provenance: handout-answer
steps:
  - |
    The region has two pieces: \(\cos\theta \le r \le 1 + \cos\theta\) for \(-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}\), and \(0 \le r \le 1 + \cos\theta\) for \(\frac{\pi}{2} \le \theta \le \frac{3\pi}{2}\).
  - |
    \(M\) integrates \(r\), \(M_x\) integrates \(r^2\sin\theta\), and \(M_y\) integrates \(r^2\cos\theta\), over both pieces.
verification:
  checks:
    - expr: 'integrate(r, (r, cos(t), 1 + cos(t)), (t, -pi/2, pi/2)) + integrate(r, (r, 0, 1 + cos(t)), (t, pi/2, 3*pi/2))'
      expected: "5*pi/4"
    - expr: 'integrate(r**2*sin(t), (r, cos(t), 1 + cos(t)), (t, -pi/2, pi/2)) + integrate(r**2*sin(t), (r, 0, 1 + cos(t)), (t, pi/2, 3*pi/2))'
      expected: "0"
    - expr: 'integrate(r**2*cos(t), (r, cos(t), 1 + cos(t)), (t, -pi/2, pi/2)) + integrate(r**2*cos(t), (r, 0, 1 + cos(t)), (t, pi/2, 3*pi/2))'
      expected: "9*pi/8"
    - expr: 'integrate(r, (r, 0, 1 + cos(t)), (t, 0, 2*pi)) - integrate(r, (r, 0, cos(t)), (t, -pi/2, pi/2))'
      expected: "5*pi/4"
    - expr: '(9*pi/8)/(5*pi/4)'
      expected: "Rational(9, 10)"
:::


::: exercise
id: l8-mass-centre.handout-15-6-12
number: "15.6.12"
tier: standard
topics:
  - mass
  - spherical-coordinates
statement: |
  An object occupies the region inside the unit sphere at the origin, and has density equal to the distance from the \(x\)-axis. Find the mass.
solution: |
  The density is the distance from the \(x\)-axis, \(\sqrt{y^2 + z^2}\). Choose spherical coordinates with the polar axis along the \(x\)-axis:
  \[
  x = \rho\cos\phi, \qquad y = \rho\sin\phi\cos\theta, \qquad z = \rho\sin\phi\sin\theta.
  \]
  Then \(y^2 + z^2 = \rho^2\sin^2\phi\), so the density is \(\rho\sin\phi\) (with \(\sin\phi \ge 0\) for \(0 \le \phi \le \pi\)). The volume element keeps the form \(\rho^2\sin\phi\, d\rho\, d\phi\, d\theta\). The unit ball is \(0 \le \rho \le 1\), \(0 \le \phi \le \pi\), \(0 \le \theta \le 2\pi\).

  The mass is
  \[
  \begin{aligned}
  M &= \int_0^{2\pi}\int_0^\pi\int_0^1 \rho\sin\phi\cdot\rho^2\sin\phi\, d\rho\, d\phi\, d\theta\\
  &= \int_0^1 \rho^3\, d\rho\cdot\int_0^\pi \sin^2\phi\, d\phi\cdot\int_0^{2\pi} d\theta.
  \end{aligned}
  \]
  The three factors are \(\frac14\), \(\frac{\pi}{2}\) and \(2\pi\). The mass is \(\frac{\pi^2}{4}\).

  Cylindrical coordinates about the \(x\)-axis give the same value. With \(s\) the distance from the axis, the density is \(s\), the ball is \(|x| \le \sqrt{1 - s^2}\), and
  \[
  M = \int_0^{2\pi}\int_0^1 s\cdot s\cdot 2\sqrt{1 - s^2}\, ds\, d\theta = \frac{\pi^2}{4}.
  \]
provenance: handout-answer
steps:
  - |
    With the polar axis along the \(x\)-axis, the density is \(\rho\sin\phi\) and the volume element is \(\rho^2\sin\phi\, d\rho\, d\phi\, d\theta\).
  - |
    The integral factors as \(\frac14\cdot\frac{\pi}{2}\cdot 2\pi\).
  - |
    The mass is \(\frac{\pi^2}{4}\).
verification:
  checks:
    - expr: 'integrate(rho*sin(p)*rho**2*sin(p), (rho, 0, 1), (p, 0, pi), (t, 0, 2*pi))'
      expected: "pi**2/4"
    - expr: '2*pi*integrate(2*sin(u)**2*cos(u)**2, (u, 0, pi/2))'
      expected: "pi**2/4"
    - expr: 'simplify((rho*sin(p)*cos(t))**2 + (rho*sin(p)*sin(t))**2 - (rho*sin(p))**2)'
      expected: "0"
:::


::: exercise
id: l8-mass-centre.handout-15-6-13
number: "15.6.13"
tier: basic
topics:
  - mass
  - spherical-coordinates
statement: |
  An object occupies the region inside the unit sphere at the origin, and has density equal to the square of the distance from the origin. Find the mass.
solution: |
  In spherical coordinates the distance from the origin is \(\rho\), so the density is \(\rho^2\). The unit ball is \(0 \le \rho \le 1\), \(0 \le \phi \le \pi\), \(0 \le \theta \le 2\pi\), and the volume element is \(\rho^2\sin\phi\, d\rho\, d\phi\, d\theta\).

  The mass is
  \[
  \begin{aligned}
  M &= \int_0^{2\pi}\int_0^\pi\int_0^1 \rho^2\cdot\rho^2\sin\phi\, d\rho\, d\phi\, d\theta\\
  &= \int_0^1 \rho^4\, d\rho\cdot\int_0^\pi \sin\phi\, d\phi\cdot\int_0^{2\pi} d\theta.
  \end{aligned}
  \]
  The three factors are \(\frac15\), \(2\) and \(2\pi\). The mass is \(\frac{4\pi}{5}\).
provenance: handout-answer
steps:
  - |
    The density is \(\rho^2\), and the integrand is \(\rho^2\cdot\rho^2\sin\phi\).
  - |
    The integral factors as \(\frac15\cdot 2\cdot 2\pi\).
  - |
    The mass is \(\frac{4\pi}{5}\).
verification:
  checks:
    - expr: 'integrate(rho**2*rho**2*sin(p), (rho, 0, 1), (p, 0, pi), (t, 0, 2*pi))'
      expected: "4*pi/5"
    - expr: 'integrate(rho**4, (rho, 0, 1))'
      expected: "Rational(1, 5)"
:::


::: exercise
id: l8-mass-centre.handout-15-6-14
number: "15.6.14"
tier: basic
topics:
  - mass
  - spherical-coordinates
statement: |
  An object occupies the region between the unit sphere at the origin and a sphere of radius \(2\) with center at the origin, and has density equal to the distance from the origin. Find the mass.
solution: |
  In spherical coordinates the distance from the origin is \(\rho\), so the density is \(\rho\). The region between the spheres is \(1 \le \rho \le 2\), \(0 \le \phi \le \pi\), \(0 \le \theta \le 2\pi\).

  The mass is
  \[
  \begin{aligned}
  M &= \int_0^{2\pi}\int_0^\pi\int_1^2 \rho\cdot\rho^2\sin\phi\, d\rho\, d\phi\, d\theta\\
  &= \int_1^2 \rho^3\, d\rho\cdot\int_0^\pi \sin\phi\, d\phi\cdot\int_0^{2\pi} d\theta.
  \end{aligned}
  \]
  The first factor is \(\frac{2^4 - 1}{4} = \frac{15}{4}\). The other factors are \(2\) and \(2\pi\). The mass is \(\frac{15}{4}\cdot 2\cdot 2\pi = 15\pi\).
provenance: handout-answer
steps:
  - |
    The region is \(1 \le \rho \le 2\), and the integrand is \(\rho\cdot\rho^2\sin\phi\).
  - |
    The integral factors as \(\frac{15}{4}\cdot 2\cdot 2\pi\).
  - |
    The mass is \(15\pi\).
verification:
  checks:
    - expr: 'integrate(rho*rho**2*sin(p), (rho, 1, 2), (p, 0, pi), (t, 0, 2*pi))'
      expected: "15*pi"
    - expr: 'integrate(rho**3, (rho, 1, 2))'
      expected: "Rational(15, 4)"
:::


::: exercise
id: l8-mass-centre.handout-15-6-15
number: "15.6.15"
tier: standard
topics:
  - mass
  - spherical-coordinates
statement: |
  An object occupies the region in the first octant bounded by the cones \(\phi = \frac{\pi}{4}\) and \(\phi = \arctan 2\), and the sphere \(\rho = \sqrt{6}\), and has density proportional to the distance from the origin, \(\sigma = k\rho\). Find the mass.
solution: |
  The angle \(\phi\) is measured from the positive \(z\)-axis. Since \(\arctan 2 \approx 63.4^\circ\) exceeds \(\frac{\pi}{4} = 45^\circ\), the region lies between the cone \(\phi = \frac{\pi}{4}\) and the cone \(\phi = \arctan 2\). The sphere gives \(0 \le \rho \le \sqrt{6}\). The first octant restricts \(\theta\) to \(0 \le \theta \le \frac{\pi}{2}\).

  The mass is
  \[
  \begin{aligned}
  M &= \int_0^{\pi/2}\int_{\pi/4}^{\arctan 2}\int_0^{\sqrt{6}} k\rho\cdot\rho^2\sin\phi\, d\rho\, d\phi\, d\theta\\
  &= k\int_0^{\sqrt{6}} \rho^3\, d\rho\cdot\int_{\pi/4}^{\arctan 2} \sin\phi\, d\phi\cdot\int_0^{\pi/2} d\theta.
  \end{aligned}
  \]
  The factors are as follows.

  - The \(\rho\) integral is \(\frac{(\sqrt{6})^4}{4} = \frac{36}{4} = 9\).
  - The \(\phi\) integral is \(\cos\frac{\pi}{4} - \cos(\arctan 2) = \frac{\sqrt{2}}{2} - \frac{1}{\sqrt{5}}\), because \(\cos(\arctan 2) = \frac{1}{\sqrt{5}}\).
  - The \(\theta\) integral is \(\frac{\pi}{2}\).

  The mass is
  \[
  M = \frac{9k\pi}{2}\Bigl(\frac{\sqrt{2}}{2} - \frac{\sqrt{5}}{5}\Bigr)
  = \frac{9k\pi\,\bigl(5\sqrt{2} - 2\sqrt{5}\bigr)}{20}.
  \]
provenance: handout-answer
steps:
  - |
    The region is \(0 \le \rho \le \sqrt{6}\), \(\frac{\pi}{4} \le \phi \le \arctan 2\), \(0 \le \theta \le \frac{\pi}{2}\), with integrand \(k\rho\cdot\rho^2\sin\phi\).
  - |
    The factors are \(9\), \(\frac{\sqrt{2}}{2} - \frac{1}{\sqrt{5}}\) and \(\frac{\pi}{2}\).
  - |
    The mass is \(\frac{9k\pi(5\sqrt{2} - 2\sqrt{5})}{20}\).
verification:
  checks:
    - expr: 'integrate(k*rho*rho**2*sin(p), (rho, 0, sqrt(6)), (p, pi/4, atan(2)), (t, 0, pi/2))'
      expected: "9*k*pi*(5*sqrt(2) - 2*sqrt(5))/20"
    - expr: 'cos(atan(2))'
      expected: "sqrt(5)/5"
    - expr: 'integrate(rho**3, (rho, 0, sqrt(6)))'
      expected: "9"
:::
