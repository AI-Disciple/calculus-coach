---
id: l8-volumes-between-surfaces
lecture: 8
order: 4
title: Volumes between two surfaces
prerequisites: [l8-triple-integrals, l4-cross-sections]
sources:
  - { source: handout, section: "15.5", page: 404 }
  - { source: handout, section: "15.5", page: 407 }
  - { source: retake-2023, page: 1 }
  - { source: final-2024, page: 1 }
  - { source: final-2025, page: 2 }
  - { source: final-2021, page: 2 }
  - { source: final-2022, page: 16 }
  - { source: mock-exam-2, page: 1 }
  - { source: retake-2023, page: 1 }
  - { source: mock-exam-1, page: 1 }
  - { source: mock-2022, page: 2 }
examWeight: high
examWeightNote: The last block of every recent final, with a sketch of a cut. Placement in this lecture is provisional until the lecture has taken place. Statements taken from the handout stay provisional until the lecture 8 notes arrive.
status: reviewed
notation: |
  \(\frac{df}{dx}\), \(f_x\) and \(f'\) are the course's names for a derivative. The handout writes that derivative as \(\frac{\partial f}{\partial x}\). The volume integrals on this page use an ordinary \(d\), as in \(dz\, dy\, dx\).
---

::: section
title: Volume of a solid
:::

::: formal-statement
kind: method
title: Volume of a solid
source:
  source: handout
  section: "15.5"
  page: 404
text: |
  It will come as no surprise that we can also do triple integrals, integrals over a three-dimensional region. The simplest application allows us to compute volumes in an alternate way.

  To approximate a volume in three dimensions, we can divide the three-dimensional region into small rectangular boxes, each \(\Delta x \times \Delta y \times \Delta z\) with volume \(\Delta x\Delta y\Delta z\). Then we add them all up and take the limit, to get an integral:
  \[
  \int_{x_0}^{x_1} \int_{y_0}^{y_1} \int_{z_0}^{z_1} dz\, dy\, dx.
  \]
  If the limits are constant, we are simply computing the volume of a rectangular box.

  The integrand is the constant 1, so the volume of a solid is the triple integral of 1. When the solid lies between an upper surface \(z = h(x,y)\) and a lower surface \(z = g(x,y)\) over a **shadow** \(D\) in the \(xy\)-plane, the volume is the integral of \(h(x,y) - g(x,y)\) over \(D\):
  \[
  V = \iint_D \bigl(h(x,y) - g(x,y)\bigr)\, dA.
  \]
:::

::: plain-explanation
text: |
  Integrating 1 in \(z\) replaces each column by its height, the upper value of \(z\) minus the lower value. The volume is that height, integrated over the shadow. Example 15.5.1 is the box with opposite corners \((0,0,0)\) and \((1,2,3)\). The integral of 1 over that box equals \(1 \cdot 2 \cdot 3 = 6\).

  On an exam the first picture is a cut by a coordinate plane, such as \(y = 0\). The cut shows the two curves and the \(x\)-value where the upper curve changes. When the upper surface changes, the shadow splits along the curve where the surfaces meet, and each piece uses its own upper surface.
:::

::: visual
kind: solid
caption: |
  The cut by \(y = 0\) of the solid above the \(xy\)-plane, inside the sphere \(x^2 + y^2 + z^2 = 1\), and below the cone \(z^2 = x^2 + y^2\). The cone and the sphere meet at \(x = 1/\sqrt{2}\) and at \(x = -1/\sqrt{2}\). For \(|x| \le 1/\sqrt{2}\) the upper curve is the cone \(z = |x|\). For \(1/\sqrt{2} \le |x| \le 1\) the upper curve is the sphere.
params:
  preset: sphere-cone
  cut: "y"
:::

::: key-points
text: |
  - The volume of a solid is the triple integral of the constant 1. Between an upper surface \(z = h(x,y)\) and a lower surface \(z = g(x,y)\) over a shadow \(D\), the volume is the integral of \(h(x,y) - g(x,y)\) over \(D\).
  - The cut by a coordinate plane such as \(y = 0\) shows the two curves and the \(x\)-value where the upper curve changes.
  - Where the upper surface changes, the shadow splits along the curve where the surfaces meet, and each piece uses its own upper surface.
:::

::: concept-question
id: l8-volumes-between-surfaces.q-5216f522
question: |
  What does the cut by \(y = 0\) show, before the limits are written?
options:
  - text: |
      The curves that bound the section, and the \(x\)-values where the upper curve changes.
    correct: true
  - text: |
      The shadow of the solid in the \(xy\)-plane.
  - text: |
      The numerical value of the volume.
  - text: |
      The centre of mass of the solid.
explanation: |
  The plane \(y = 0\) meets the solid in a region of the \(xz\)-plane. The \(x\)-coordinates where the curves meet are the radii at which the shadow splits. The shadow itself is the cut by \(z = 0\).
:::

::: concept-question
id: l8-volumes-between-surfaces.q-98c3a60e
question: |
  In the sphere-and-cone solid, above the \(xy\)-plane, inside \(x^2 + y^2 + z^2 = 1\) and below the cone, which surface is upper for \(r \le 1/\sqrt{2}\)?
options:
  - text: |
      The cone \(z = \sqrt{x^2 + y^2}\).
    correct: true
  - text: |
      The sphere \(z = \sqrt{1 - x^2 - y^2}\).
  - text: |
      The plane \(z = 0\).
  - text: |
      The plane \(z = 1\).
explanation: |
  On \(0 \le r \le 1/\sqrt{2}\), the inequality \(r \le \sqrt{1 - r^2}\) holds, so the cone's graph lies under the sphere's graph. The solid stops at the cone, and the upper surface is \(z = r\). Past that radius the sphere is the upper surface, out to \(r = 1\).
:::

::: exercise
id: l8-volumes-between-surfaces.basic-under-plane
tier: basic
topics: [volumes]
statement: |
  Find the volume under the plane \(z = 1 - x\) and above \(z = 0\), over the rectangle \(0 \le x \le 1\), \(0 \le y \le 1\).
solution: |
  On this rectangle, \(1 - x \ge 0\), so the plane \(z = 1 - x\) is the upper surface and \(z = 0\) is the lower surface. The height is \(1 - x\). The shadow is the unit square, and
  \[
  \begin{aligned}
  V&=\int_0^1 \int_0^1 (1 - x)\, dy\, dx\\
  &=\int_0^1 (1 - x)\, dx\\
  &=\left[x - \frac{x^2}{2}\right]_0^1\\
  &=\frac{1}{2}.
  \end{aligned}
  \]
  The volume is \(\frac{1}{2}\).
provenance: written-for-site
steps:
  - The upper surface is \(z = 1 - x\) and the lower surface is \(z = 0\).
  - The height is integrated over the rectangle.
  - The volume is stated as \(1/2\).
verification:
  checks:
    - expr: integrate((1 - x), (y, 0, 1), (x, 0, 1))
      expected: "1/2"
:::

::: section
title: Splitting the shadow
:::

::: visual
kind: region
caption: |
  This is the shadow of the solid in the guided example below, the triangle \(x \ge 0\), \(y \ge 0\), \(x + y \le 1\), split by the curve \(x^2 + y^2 = 1 - x - y\). Over the piece around the origin the ceiling is the paraboloid \(z = x^2 + y^2\), and over the other piece it is the plane \(z = 1 - x - y\).
params:
  preset: exam-shadow
  order: dy-dx
:::

::: worked-example
title: Volume between a paraboloid and a cone
problem: |
  Let \(V\) be the volume above the \(xy\)-plane between the paraboloid \(z = 1 - x^2 - y^2\) and the cone \(z^2 = x^2 + y^2\). Sketch the cross section with the \(xz\)-plane, and compute \(V\).
solution: |
  ### The cross section

  In the plane \(y = 0\), the paraboloid cuts as the parabola \(z = 1 - x^2\), and the cone cuts as the lines \(z = \pm x\). Above the \(xy\)-plane the cone contributes the rays \(z = |x|\).

  Let \(t = |x|\). The parabola and the ray meet when \(1 - t^2 = t\), so \(t^2 + t - 1 = 0\). The positive root is
  \[
  \alpha = \frac{\sqrt{5} - 1}{2}.
  \]
  The parabola meets \(z = 0\) at \(|x| = 1\). The section has two parts:

  - For \(0 \le x \le \alpha\) the section runs from the line \(z = x\) up to the parabola \(z = 1 - x^2\).
  - For \(\alpha \le x \le 1\) the section runs from the parabola up to the line \(z = x\).

  The part with \(x < 0\) is the mirror image across the \(z\)-axis.

  ### The shadow and the two surfaces

  Let \(r = \sqrt{x^2 + y^2}\). The paraboloid lies above the \(xy\)-plane on the disk \(r \le 1\), and that disk is the shadow of the bounded solid. Outside this disk the paraboloid lies below the plane, and the set of points above the plane and under the cone is unbounded. The surfaces meet on the circle \(r = \alpha\).

  - On \(0 \le r \le \alpha\) the upper surface is \(z = 1 - r^2\) and the lower surface is \(z = r\).
  - On \(\alpha \le r \le 1\) the upper surface is \(z = r\) and the lower surface is \(z = 1 - r^2\).

  ### The integral

  The polar area element is \(r\, dr\, d\theta\), so
  \[
  \begin{aligned}
  V&=\int_0^{2\pi} \int_0^{\alpha} (1 - r^2 - r)\, r\, dr\, d\theta\\
  &\quad+\int_0^{2\pi} \int_{\alpha}^{1} \bigl(r - (1 - r^2)\bigr)\, r\, dr\, d\theta.
  \end{aligned}
  \]
  The integral in \(\theta\) contributes a factor \(2\pi\). The radial integrals are
  \[
  \int_0^{\alpha} (r - r^2 - r^3)\, dr = \frac{\alpha^2}{2} - \frac{\alpha^3}{3} - \frac{\alpha^4}{4}
  \]
  and
  \[
  \begin{aligned}
  &\int_{\alpha}^{1} (r^2 - r + r^3)\, dr\\
  &=\frac{1}{12} + \frac{\alpha^2}{2} - \frac{\alpha^3}{3} - \frac{\alpha^4}{4}.
  \end{aligned}
  \]
  Their sum is
  \[
  \alpha^2 - \frac{2}{3}\alpha^3 - \frac{1}{2}\alpha^4 + \frac{1}{12}.
  \]
  The relation \(\alpha^2 + \alpha - 1 = 0\) gives
  \[
  \begin{aligned}
  \alpha^2&=1-\alpha,\\
  \alpha^3&=2\alpha-1,\\
  \alpha^4&=2-3\alpha.
  \end{aligned}
  \]
  Substituting these powers reduces the sum to \(\frac{3}{4} - \frac{5}{6}\alpha\). Therefore
  \[
  \begin{aligned}
  V&=2\pi\left(\frac{3}{4} - \frac{5}{6}\alpha\right)\\
  &=\frac{\pi}{6}(9 - 10\alpha).
  \end{aligned}
  \]
  Since \(10\alpha = 5(\sqrt{5} - 1)\), the factor \(9 - 10\alpha\) equals \(14 - 5\sqrt{5}\). The volume is \(\frac{\pi}{6}(14 - 5\sqrt{5})\).
:::

::: guided-example
title: Reading the 2025 split shadow
problem: |
  Final 2025, question 6, asks for the integral setups of \(\int_V x\, dV\). The solid \(V\) lies above the first quadrant of the \(xy\)-plane, so \(x \ge 0\), \(y \ge 0\) and \(z \ge 0\), and it lies below both \(z = 1 - x - y\) and \(z = x^2 + y^2\). Sketch the cut by \(y = 0\), then the shadow, then the curve that separates the two ceilings. Try each step on paper before you show it.
steps:
  - |
    In the cut \(y = 0\), the solid lies above \(z = 0\) and below both \(z = 1 - x\) and \(z = x^2\). Its upper boundary is the lower of those two curves. They meet when \(x^2 + x - 1 = 0\). The root in \([0, 1]\) is \(\alpha = (\sqrt{5} - 1)/2\).

    - From \(x = 0\) to \(x = \alpha\) the upper boundary is \(z = x^2\).
    - From \(x = \alpha\) to \(x = 1\) the upper boundary is \(z = 1 - x\).
  - |
    The plane \(z = 1 - x - y\) stays non-negative on the triangle \(D = \{(x, y) : x \ge 0,\ y \ge 0,\ x + y \le 1\}\). That triangle is the shadow. Outside it the plane lies below \(z = 0\), so the solid above the \(xy\)-plane stops at the line \(x + y = 1\).
  - |
    The ceiling changes where the surfaces meet, \(x^2 + y^2 = 1 - x - y\). Rearranging gives \(y^2 + y + x^2 + x - 1 = 0\). The root with \(y \ge 0\) is
    \[
    g(x) = \frac{-1 + \sqrt{5 - 4x - 4x^2}}{2}.
    \]
    The curve \(y = g(x)\) joins \((0, \alpha)\) to \((\alpha, 0)\). It separates two pieces:

    - Between the axes and this curve the paraboloid is the lower surface, so it is the ceiling.
    - Between the curve and the line \(x + y = 1\) the plane is the lower surface, so it is the ceiling.
  - |
    The integrand is \(x\) in each piece.

    - For \(0 \le x \le \alpha\), let \(z\) run from 0 to \(x^2 + y^2\) on \(0 \le y \le g(x)\), and from 0 to \(1 - x - y\) on \(g(x) \le y \le 1 - x\).
    - For \(\alpha \le x \le 1\) the separating curve has met the \(x\)-axis, so \(z\) runs from 0 to \(1 - x - y\) on \(0 \le y \le 1 - x\).

    The three integrals add up:
    \[
    \begin{aligned}
    &\int_V x\, dV\\
    &=\int_0^\alpha \int_0^{g(x)}\\
    &\qquad\int_0^{x^2 + y^2} x\, dz\, dy\, dx\\
    &\quad+\int_0^\alpha \int_{g(x)}^{1 - x}\\
    &\qquad\int_0^{1 - x - y} x\, dz\, dy\, dx\\
    &\quad+\int_\alpha^1 \int_0^{1 - x}\\
    &\qquad\int_0^{1 - x - y} x\, dz\, dy\, dx.
    \end{aligned}
    \]
:::

::: trap
text: |
  The volume between two surfaces uses the **higher surface minus the lower surface** on each piece of the shadow. On the solid between \(z = 1 - r^2\) and \(z = r\), with \(\alpha = (\sqrt{5} - 1)/2\), the higher surface changes at \(r = \alpha\):

  - the paraboloid is higher for \(0 \le r \le \alpha\),
  - the cone is higher for \(\alpha \le r \le 1\).

  The integral of \((1 - r^2) - r\) over the disk \(r \le 1\), including the polar factor \(r\), equals \(-\pi/6\). On the outer piece that difference is negative, so the outer contribution is subtracted. The volume is the positive value \(\frac{\pi}{6}(14 - 5\sqrt{5})\), taken with the higher surface on each piece.
:::

::: key-points
text: |
  - The upper surface changes along the curve where the two surfaces meet, and the shadow splits along that curve. For the paraboloid \(z = 1 - r^2\) and the cone \(z = r\), the curve is the circle \(r = \alpha\) with \(\alpha = (\sqrt{5} - 1)/2\). The paraboloid is higher for \(0 \le r \le \alpha\) and the cone is higher for \(\alpha \le r \le 1\).
  - A solid below both \(z = 1 - x - y\) and \(z = x^2 + y^2\) has the lower of the two surfaces as its ceiling. The ceiling changes along the curve \(x^2 + y^2 = 1 - x - y\).
  - The usual slip integrates \((1 - r^2) - r\) over the whole disk \(r \le 1\) and gets \(-\pi/6\). The difference is negative on the outer piece, so the outer contribution is subtracted. The correct volume uses the higher surface minus the lower surface on each piece and equals \(\frac{\pi}{6}(14 - 5\sqrt{5})\).
:::

::: concept-question
id: l8-volumes-between-surfaces.q-c0bda954
question: |
  For the volume above the \(xy\)-plane between \(z = 1 - x^2 - y^2\) and \(z = \sqrt{x^2 + y^2}\), which surface is upper on the disk \(r \le (\sqrt{5} - 1)/2\)?
options:
  - text: |
      The paraboloid \(z = 1 - x^2 - y^2\).
    correct: true
  - text: |
      The cone \(z = \sqrt{x^2 + y^2}\).
  - text: |
      The plane \(z = 0\).
  - text: |
      The plane \(z = 1\).
explanation: |
  At the origin the paraboloid has height 1 and the cone has height 0. They meet at \(r = (\sqrt{5} - 1)/2\). On the disk inside that circle the paraboloid is the upper surface.
:::

::: concept-question
id: l8-volumes-between-surfaces.q-24f98987
question: |
  Where do you split the shadow of that same solid, the region between the paraboloid \(z = 1 - r^2\) and the cone \(z = r\)?
options:
  - text: |
      On the circle \(r = (\sqrt{5} - 1)/2\), where the paraboloid meets the cone.
    correct: true
  - text: |
      Only on the unit circle, where the paraboloid meets the \(xy\)-plane.
  - text: |
      Along the line \(y = x\).
  - text: |
      The upper surface is the same on the whole disk \(r \le 1\), so the shadow stays in one piece.
explanation: |
  The upper surface changes on the circle where \(1 - r^2 = r\), that is \(r = (\sqrt{5} - 1)/2\). The unit circle is where the paraboloid meets \(z = 0\), which closes the shadow.
:::

::: concept-question
id: l8-volumes-between-surfaces.q-c60e68f4
question: |
  The 2025 solid lies below both \(z = 1 - x - y\) and \(z = x^2 + y^2\). Near the origin, which surface is the upper boundary of the solid?
options:
  - text: |
      The paraboloid \(z = x^2 + y^2\).
    correct: true
  - text: |
      The plane \(z = 1 - x - y\).
  - text: |
      The plane \(z = 0\).
  - text: |
      The cone \(z = \sqrt{x^2 + y^2}\).
explanation: |
  At the origin the paraboloid has height 0 and the plane has height 1. The solid stops at the lower graph, so near the origin the ceiling is the paraboloid. The ceiling becomes the plane past the curve \(x^2 + y^2 = 1 - x - y\).
:::

::: exercise
id: l8-volumes-between-surfaces.15.5.9
number: "15.5.9"
tier: standard
topics: [volumes]
statement: |
  For each integral below, give a description of the volume, both algebraic and geometric, that is the domain of integration. These are exercises 15.5.1 to 15.5.8.

  **15.5.1.** \(\displaystyle \int_0^1 \int_0^x \int_0^{x+y} (2x + y - 1)\, dz\, dy\, dx.\)

  **15.5.2.** \(\displaystyle \int_0^2 \int_{-1}^{x^2} \int_1^y xyz\, dz\, dy\, dx.\)

  **15.5.3.** \(\displaystyle \int_0^1 \int_0^x \int_0^{\ln y} e^{x+y+z}\, dz\, dy\, dx.\)

  **15.5.4.** \(\displaystyle \int_0^{\pi/2} \int_0^{\sin\theta} \int_0^{r\cos\theta} r^2\, dz\, dr\, d\theta.\)

  **15.5.5.** \(\displaystyle \int_0^{\pi} \int_0^{\sin\theta} \int_0^{r\sin\theta} r\cos^2\theta\, dz\, dr\, d\theta.\)

  **15.5.6.** \(\displaystyle \int_0^1 \int_0^{y^2} \int_0^{x+y} x\, dz\, dx\, dy.\)

  **15.5.7.** \(\displaystyle \int_1^2 \int_y^{y^2} \int_0^{\ln(y+z)} e^x\, dx\, dz\, dy.\)

  **15.5.8.** \(\displaystyle \int_0^{\pi} \int_0^{\pi/2} \int_0^1 (z\sin x + z\cos y)\, dz\, dy\, dx.\)
solution: |
  **15.5.1.** The limits are \(0 \le x \le 1\), \(0 \le y \le x\) and \(0 \le z \le x + y\): the shadow is the triangle with vertices \((0,0)\), \((1,0)\) and \((1,1)\), and the solid lies under the plane \(z = x + y\).

  **15.5.2.** The limits are \(0 \le x \le 2\), \(-1 \le y \le x^2\) and \(z\) from 1 to \(y\): the shadow lies between the line \(y = -1\) and the parabola \(y = x^2\), the part \(y \ge 1\) stands from the plane \(z = 1\) up to \(z = y\), and the part \(y < 1\) has those \(z\) limits running downward.

  **15.5.3.** The limits are \(0 \le x \le 1\), \(0 \le y \le x\) and \(z\) from 0 to \(\ln y\): the shadow is the triangle under \(y = x\) in the unit square, and whenever \(0 < y \le 1\), \(\ln y \le 0\), so the vertical interval runs from the plane \(z = 0\) down to the surface \(z = \ln y\).

  **15.5.4.** The limits are \(0 \le \theta \le \pi/2\), \(0 \le r \le \sin\theta\) and \(0 \le z \le r\cos\theta\): the base is the part \(x \ge 0\) of the disk \(x^2 + (y - 1/2)^2 \le 1/4\), and the solid lies under the plane \(z = x\).

  **15.5.5.** The limits are \(0 \le \theta \le \pi\), \(0 \le r \le \sin\theta\) and \(0 \le z \le r\sin\theta\): the base is the full disk \(x^2 + (y - 1/2)^2 \le 1/4\), and the solid lies under the plane \(z = y\).

  **15.5.6.** The limits are \(0 \le y \le 1\), \(0 \le x \le y^2\) and \(0 \le z \le x + y\): the shadow lies between the \(y\)-axis and the parabola \(x = y^2\), and the solid lies under the plane \(z = x + y\).

  **15.5.7.** The limits are \(1 \le y \le 2\), \(y \le z \le y^2\) and \(0 \le x \le \ln(y + z)\): the base in the \(yz\)-plane lies between the line \(z = y\) and the parabola \(z = y^2\), and \(x\) runs from the plane \(x = 0\) out to the surface \(x = \ln(y + z)\).

  **15.5.8.** The limits are the constants \(0 \le x \le \pi\), \(0 \le y \le \pi/2\) and \(0 \le z \le 1\): the domain is the rectangular box with those edge lengths.
provenance: written-for-site
steps:
  - Algebraic limits are stated for each of 15.5.1 to 15.5.8.
  - Each description names the base region and the surface or plane that closes the solid.
  - For 15.5.2 and 15.5.3, the solution records that the inner \(z\) interval runs downward.
verification:
  checkable: false
  reason: The answer is a description of each solid.
:::

::: exercise
id: l8-volumes-between-surfaces.retake-2023-q7
tier: exam
topics: [volumes]
examBlock: triple-integrals-volumes
pastExam:
  year: 2023
  paper: Retake
  question: "7"
  points: 3
statement: |
  Let \(V\) be the volume above the \(xy\)-plane between the paraboloid \(z = 1 - x^2 - y^2\) and the cone \(z^2 = x^2 + y^2\).

  (a) Sketch the cross section of the volume with the \(xz\)-plane.

  (b) Compute \(V\).
solution: |
  In the plane \(y = 0\), the paraboloid cuts as the parabola \(z = 1 - x^2\) and the cone cuts as the lines \(z = \pm x\). Above the \(xy\)-plane the cone contributes the rays \(z = |x|\). These meet when \(1 - t^2 = t\) for \(t = |x|\), so \(t^2 + t - 1 = 0\). The positive root is \(\alpha = (\sqrt{5} - 1)/2\). The parabola meets \(z = 0\) at \(|x| = 1\).

  The cross section is symmetric about the \(z\)-axis.

  - For \(0 \le x \le \alpha\) it runs from the line \(z = x\) up to the parabola \(z = 1 - x^2\).
  - For \(\alpha \le x \le 1\) it runs from the parabola up to the line \(z = x\).

  Let \(r = \sqrt{x^2 + y^2}\). The bounded solid has shadow \(r \le 1\), the disk on which the paraboloid is above the \(xy\)-plane.

  - On \(0 \le r \le \alpha\) the upper surface is \(z = 1 - r^2\) and the lower surface is \(z = r\).
  - On \(\alpha \le r \le 1\) the upper surface is \(z = r\) and the lower surface is \(z = 1 - r^2\).

  With polar area element \(r\, dr\, d\theta\),
  \[
  \begin{aligned}
  V&=\int_0^{2\pi} \int_0^{\alpha} (1 - r^2 - r)\, r\, dr\, d\theta\\
  &\quad+\int_0^{2\pi} \int_{\alpha}^{1} \bigl(r - (1 - r^2)\bigr)\, r\, dr\, d\theta.
  \end{aligned}
  \]
  The factor from \(\theta\) is \(2\pi\). The sum of the radial integrals is \(\alpha^2 - \frac{2}{3}\alpha^3 - \frac{1}{2}\alpha^4 + \frac{1}{12}\). From \(\alpha^2 = 1 - \alpha\) this sum equals \(\frac{3}{4} - \frac{5}{6}\alpha\), so
  \[
  \begin{aligned}
  V&=2\pi\left(\frac{3}{4} - \frac{5}{6}\alpha\right)\\
  &=\frac{\pi}{6}(9 - 10\alpha)\\
  &=\frac{\pi}{6}(14 - 5\sqrt{5}),
  \end{aligned}
  \]
  because \(10\alpha = 5(\sqrt{5} - 1)\).

  The volume is \(\frac{\pi}{6}(14 - 5\sqrt{5})\).
provenance: written-for-site
steps:
  - The \(xz\) cut shows the parabola \(z = 1 - x^2\), the rays \(z = |x|\), the crossing at \(|x| = (\sqrt{5} - 1)/2\), and the section closing at \(|x| = 1\).
  - The shadow \(r \le 1\) is split at \(r = (\sqrt{5} - 1)/2\), and the upper surface is named on each piece.
  - The value \(V = \pi(14 - 5\sqrt{5})/6\) is computed.
verification:
  checks:
    - expr: integrate((1 - r**2 - r)*r, (r, 0, (-1 + sqrt(5))/2), (t, 0, 2*pi)) + integrate((r - (1 - r**2))*r, (r, (-1 + sqrt(5))/2, 1), (t, 0, 2*pi))
      expected: "pi*(14 - 5*sqrt(5))/6"
    - expr: (1 - r**2 - r).subs(r, (-1 + sqrt(5))/2)
      expected: "0"
:::

::: exercise
id: l8-volumes-between-surfaces.final-2024-q6
tier: exam
topics: [volumes]
examBlock: triple-integrals-volumes
pastExam:
  year: 2024
  paper: Final
  question: "6"
  points: 3
statement: |
  [3 points. 20min] Compute \( \displaystyle \int_V xz\, dV \) where \( V \) is the volume above the \( xy \) plane in the sphere \( x^2 + y^2 + z^2 = 1 \) and below the cone \( z^2 = x^2 + y^2 \). (sketch \( V \))
solution: |
  The solid is rotationally symmetric around the \(z\)-axis. In the coordinate-plane cut \(y=0\), its upper half-plane section lies inside \(x^2+z^2\leq1\), above \(z=0\), and below \(z=|x|\). This cut shows that \(z=0\) is the lower surface. In cylindrical coordinates the upper surface is:

  - \(z=r\) for \(0\leq r\leq1/\sqrt2\),
  - \(z=\sqrt{1-r^2}\) for \(1/\sqrt2\leq r\leq1\).

  With \(x=r\cos\theta\) and \(dV=r\,dz\,dr\,d\theta\), a setup that displays both parts of the solid is
  \[
  \begin{aligned}
  &I\\
  &=\int_0^{2\pi}\int_0^{1/\sqrt2}\\
  &\qquad\int_0^r r^2z\cos\theta\,dz\,dr\,d\theta\\
  &\quad+\int_0^{2\pi}\int_{1/\sqrt2}^{1}\\
  &\qquad\int_0^{\sqrt{1-r^2}} r^2z\cos\theta\,dz\,dr\,d\theta.
  \end{aligned}
  \]
  Each radial and vertical slice is paired with its reflection across the \(yz\)-plane. The factor \(xz\) changes sign under this reflection, so the two contributions cancel.

  The value of the volume integral is \(0\).
provenance: written-for-site
steps:
  - The solution describes the solid and a coordinate-plane cut showing the lower and piecewise upper surfaces.
  - The solution gives a cylindrical-coordinate setup with the correct split radius and Jacobian.
  - The solution uses symmetry to compute and state the value of the integral.
verification:
  checks:
    - expr: integrate(r**2*z*cos(t), (t, 0, 2*pi), (z, 0, r), (r, 0, 1/sqrt(2))) + integrate(r**2*z*cos(t), (t, 0, 2*pi), (z, 0, sqrt(1-r**2)), (r, 1/sqrt(2), 1))
      expected: "0"
:::

::: exercise
id: l8-volumes-between-surfaces.final-2025-q6
tier: exam
topics: [volumes]
examBlock: triple-integrals-volumes
pastExam:
  year: 2025
  paper: Final
  question: "6"
  points: 3
statement: |
  [3 points. 20min] Set up the three integrals to compute \( \int_V xdV \) where \( V \) is the volume above the first quadrant of the \( xy \)-plane (\( x \ge 0 \), \( y \ge 0 \), \( z \ge 0 \)) and below \( z = 1-x-y \) and \( z = x^2+y^2 \).
  Hint : sketch the cut of \( V \) by \( y = 0 \). Then sketch the "shadow" \( D \) of \( V \) in the \( xy \)-plane (that is the part of the volume seen from above) and a line separating two regions in \( D \).
solution: |
  In the cut \(y=0\), the solid lies above \(z=0\) and below both \(z=1-x\) and \(z=x^2\). The curves meet at
  \[
  \alpha=\frac{\sqrt5-1}{2}.
  \]
  The sketch uses the upper boundary:

  - \(z=x^2\) from \(x=0\) to \(x=\alpha\),
  - \(z=1-x\) from \(x=\alpha\) to \(x=1\).

  The shadow is the triangle
  \[
  D=\{(x,y):x\geq0,\ y\geq0,\ x+y\leq1\}.
  \]
  The separating curve is
  \[
  \begin{aligned}
  x^2+y^2&=1-x-y,\\
  y&=g(x)\\
  &=\frac{-1+\sqrt{5-4x-4x^2}}{2},
  \end{aligned}
  \]
  joining \((0,\alpha)\) to \((\alpha,0)\).

  - The paraboloid is lower between the coordinate axes and this curve.
  - The plane is lower between the curve and the line \(x+y=1\).

  The requested three integral setups are
  \[
  \begin{aligned}
  &\int_Vx\,dV\\
  &=\int_0^\alpha\int_0^{g(x)}\\
  &\qquad\int_0^{x^2+y^2} x\,dz\,dy\,dx\\
  &\quad+\int_0^\alpha\int_{g(x)}^{1-x}\\
  &\qquad\int_0^{1-x-y} x\,dz\,dy\,dx\\
  &\quad+\int_\alpha^1\int_0^{1-x}\\
  &\qquad\int_0^{1-x-y} x\,dz\,dy\,dx.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The solution describes the cut by the vertical coordinate plane and marks where its two upper curves meet.
  - The solution describes the triangular shadow and the curve separating the two upper surfaces.
  - The solution gives the three requested integral setups with valid limits.
verification:
  checkable: false
  reason: The answer is a sketch and three integral setups.
:::

::: sheet-item
id: l8-volumes-between-surfaces.sheet-volume
category: formula
text: |
  The volume of a solid is the triple integral of 1. Between an upper surface \(z = h(x,y)\) and a lower surface \(z = g(x,y)\) over a shadow \(D\), the volume is \(\iint_D \bigl(h(x,y) - g(x,y)\bigr)\, dA\).
:::

::: sheet-item
id: l8-volumes-between-surfaces.sheet-split
category: trap
text: |
  Split the shadow where the upper surface changes. On each piece, integrate the higher surface minus the lower surface. Carrying one difference across the crossing counts the second piece with a negative height.
:::

::: exercise
id: l8-volumes-between-surfaces.final-2021-q8
tier: exam
topics: [volumes]
examBlock: triple-integrals-volumes
pastExam:
  year: 2021
  paper: Final
  question: "8"
  points: 2
statement: |
  Let \( S \) be the surface \( z^2 + x^4 + y^4 = 1 \). Set up the volume \( V \) enclosed by \( S \), using \( D = \{(x, y) : x^4 + y^4 \le 1\} \). A sketch of \( S \) and \( D \) on the same graph is part of the question. Using symmetry, express \( V \) using only \( D_+ = D \cap (\mathbb{R}_+)^2 \).
solution: |
  The sketch shows \( D \) as a squarish disk in the \( xy \)-plane, with \( S \) closing above and below it. The upper graph is \( z = \sqrt{1 - x^4 - y^4} \) and the lower graph is the negative of that, so

  \[
  V = 2\iint_D \sqrt{1 - x^4 - y^4}\,dx\,dy.
  \]

  The integrand is even in \( x \) and even in \( y \). The four quadrants of \( D \) therefore contribute the same amount, and

  \[
  V = 8\iint_{D_+} \sqrt{1 - x^4 - y^4}\,dx\,dy.
  \]
provenance: official-key
steps:
  - The enclosed volume is twice the integral of the upper graph over \( D \).
  - Evenness in each horizontal coordinate reduces the integral to \( D_+ \) with factor 8.
verification:
  checks:
    - expr: "(sqrt(1 - x**4 - y**4) - (-sqrt(1 - x**4 - y**4)))/sqrt(1 - x**4 - y**4)"
      expected: "2"
    - expr: "sqrt(1 - x**4 - y**4) + sqrt(1 - (-x)**4 - y**4) + sqrt(1 - x**4 - (-y)**4) + sqrt(1 - (-x)**4 - (-y)**4)"
      expected: "4*sqrt(1 - x**4 - y**4)"
:::

::: exercise
id: l8-volumes-between-surfaces.final-2022-q8
tier: exam
topics: [volumes]
examBlock: triple-integrals-volumes
pastExam:
  year: 2022
  paper: Final
  question: "8"
  points: 2
statement: |
  Compute the volume \( V \) above the \( xy \)-plane, inside the cylinder \( x^2 + y^2 < R^2 \), and between the hyperboloid \( z^2 = x^2 + y^2 + 1 \) and the cone \( z^2 = x^2 + y^2 \). A cut in the \( zy \)-plane shows the solid. Then compute \( \lim_{R \to \infty} V/R \), using the Taylor expansion of \( (1 + u)^{3/2} \) about \( u = 0 \).
solution: |
  Above the \( xy \)-plane the hyperboloid is \( z = \sqrt{r^2 + 1} \) and the cone is \( z = r \). In the \( zy \)-cut the hyperboloid sits outside the cone, and the cylinder cuts the picture at \( |y| = R \). The hyperboloid is the upper surface, so

  \[
  \begin{aligned}
  V&=\int_0^{2\pi}\int_0^R\\
  &\qquad\bigl(\sqrt{1 + r^2} - r\bigr) r\,dr\,d\theta\\
  &=\frac{2\pi}{3}\bigl((1 + R^2)^{3/2} - R^3 - 1\bigr).
  \end{aligned}
  \]

  For the limit, write \( (1 + R^2)^{3/2} = R^3(1 + R^{-2})^{3/2} \) and expand

  \[
  (1 + R^{-2})^{3/2} = 1 + \frac{3}{2}R^{-2} + \cdots.
  \]

  Then \( V = \dfrac{2\pi}{3}\bigl(\dfrac{3}{2}R - 1 + \text{a remainder of order } 1/R\bigr) \), and

  \[
  \lim_{R \to \infty} \frac{V}{R} = \pi.
  \]
provenance: official-key
steps:
  - The height is \( \sqrt{1 + r^2} - r \) on the disk of radius \( R \).
  - The integral equals \( (2\pi/3)\bigl((1 + R^2)^{3/2} - R^3 - 1\bigr) \).
  - The limit of \( V/R \) is \( \pi \).
verification:
  checks:
    - expr: "integrate(2*pi*(sqrt(1 + r**2) - r)*r, (r, 0, R))"
      expected: "(2*pi/3)*((1 + R**2)**(Rational(3, 2)) - R**3 - 1)"
    - expr: "limit((2*pi/3)*((1 + R**2)**(Rational(3, 2)) - R**3 - 1)/R, R, oo)"
      expected: "pi"
:::

::: exercise
id: l8-volumes-between-surfaces.mock-exam-1-q7
tier: exam
topics: [volumes]
examBlock: triple-integrals-volumes
pastExam:
  year: 2022
  paper: Mock exam
  question: "7"
  points: 1
statement: |
  Let \( V \) be the volume between the paraboloid \( z = x^2 + y^2 \) and the cone \( z^2 = x^2 + y^2 \). Sketch the cross section of \( V \) with the \( xz \)-plane, and compute \( V \).
solution: |
  In the plane \( y = 0 \) the paraboloid is \( z = x^2 \) and the cone is the pair of lines \( z = \pm |x| \). They meet the parabola at the origin and at \( (\pm 1, 1) \). The bounded solid is the region under the upper lines and above the parabola, for \( |x| \le 1 \).

  In cylindrical coordinates, \( 0 \le r \le 1 \) and \( r^2 \le z \le r \), so

  \[
  V = \int_0^{2\pi}\int_0^1 (r - r^2)\,r\,dr\,d\theta = \frac{\pi}{6}.
  \]
provenance: written-for-site
steps:
  - The \( xz \)-cut lies between \( z = x^2 \) and \( z = |x| \) for \( |x| \le 1 \).
  - The volume is \( \pi/6 \).
verification:
  checks:
    - expr: integrate(2*pi*(r - r**2)*r, (r, 0, 1))
      expected: "pi/6"
:::

::: exercise
id: l8-volumes-between-surfaces.mock-2022-q8
tier: exam
topics: [volumes]
examBlock: triple-integrals-volumes
pastExam:
  year: 2022
  paper: Mock
  question: "8"
  points: 1
statement: |
  Compute the volume above the \( xy \)-plane bounded by the sphere \( x^2 + y^2 + z^2 = 1 \) and the cone \( z^2 = x^2 + y^2 \). The solid is the ice cream: inside the sphere and above the cone.
solution: |
  Above the \( xy \)-plane, above the cone means \( z \ge r \). The cone meets the sphere where \( 2r^2 = 1 \), so \( r = 1/\sqrt{2} \) and \( z = 1/\sqrt{2} \). The solid runs from the cone up to the upper hemisphere:

  \[
  \begin{aligned}
  V&=\int_0^{2\pi}\int_0^{1/\sqrt{2}}\\
  &\qquad\bigl(\sqrt{1 - r^2} - r\bigr) r\,dr\,d\theta\\
  &=\frac{\pi}{3}\bigl(2 - \sqrt{2}\bigr).
  \end{aligned}
  \]

  The same value comes from spherical coordinates, with polar angle from \( 0 \) to \( \pi/4 \) and radius from \( 0 \) to \( 1 \).
provenance: written-for-site
steps:
  - The solid is inside the sphere and above the cone \( z = r \).
  - The cone meets the sphere at \( r = 1/\sqrt{2} \).
  - The volume is \( \pi(2 - \sqrt{2})/3 \).
verification:
  checks:
    - expr: "integrate(2*pi*(sqrt(1 - r**2) - r)*r, (r, 0, 1/sqrt(2)))"
      expected: "pi*(2 - sqrt(2))/3"
:::

::: exercise
id: l8-volumes-between-surfaces.mock-2022-q9
tier: exam
topics: [volumes, change-of-variables]
examBlock: triple-integrals-volumes
pastExam:
  year: 2022
  paper: Mock
  question: "9"
  points: 4
statement: |
  Let \( S \) be the surface \( z^2 + x^4 + y^4 = 1 \).

  1. Give the range of \( x \), \( y \) and \( z \) on \( S \), and set up the volume \( V \) enclosed by \( S \).
  2. Using symmetry, express \( V \) using only \( D_+ = D \cap (\mathbb{R}_+)^2 \).
  3. Using \( \varphi(r, \theta) = \bigl(r\sqrt{\cos\theta},\, r\sqrt{\sin\theta}\bigr) \), express \( V \) as a product of two integrals.
  4. Compute the integral in \( r \) by the substitution \( r = \sqrt{\sin\phi} \).
  5. Use \( t = \sqrt{\sin\theta} \) to express the integral in \( \theta \) by means of \( \displaystyle\int_0^1 \frac{dt}{\sqrt{1 - t^4}} \).
solution: |
  On \( S \), \( x^4 \le 1 \), \( y^4 \le 1 \) and \( z^2 \le 1 \), so \( |x| \le 1 \), \( |y| \le 1 \) and \( |z| \le 1 \). With \( D = \{x^4 + y^4 \le 1\} \),

  \[
  V = 2\iint_D \sqrt{1 - x^4 - y^4}\,dx\,dy.
  \]

  The integrand is even in \( x \) and in \( y \), so

  \[
  V = 8\iint_{D_+} \sqrt{1 - x^4 - y^4}\,dx\,dy.
  \]

  Under \( \varphi \), \( x^4 + y^4 = r^4 \) and the Jacobian determinant is \( r/(2\sqrt{\sin\theta}\sqrt{\cos\theta}) \). For \( 0 \le r \le 1 \) and \( 0 \le \theta \le \pi/2 \),

  \[
  \begin{aligned}
  V&=4\left(\int_0^1 r\sqrt{1 - r^4}\,dr\right)\\
  &\quad\left(\int_0^{\pi/2}\frac{d\theta}{\sqrt{\sin\theta\cos\theta}}\right).
  \end{aligned}
  \]

  The substitution \( w = r^2 \) turns the radial integral into half the area of a quarter circle of radius 1, so it equals \( \pi/8 \).

  The angular factor is \( \sqrt{2}/\sqrt{\sin 2\theta} \). The change \( \alpha = 2\theta \), followed by symmetry of \( \sin \) on \( [0, \pi] \), gives

  \[
  \begin{aligned}
  &\int_0^{\pi/2}\frac{d\theta}{\sqrt{\sin\theta\cos\theta}}\\
  &=\sqrt{2}\int_0^{\pi/2}(\sin\phi)^{-1/2}\,d\phi.
  \end{aligned}
  \]

  With \( t = \sqrt{\sin\phi} \), the integrand \( (\sin\phi)^{-1/2}\,d\phi \) pulls back to \( 2\,dt/\sqrt{1 - t^4} \). The angular integral is therefore

  \[
  2\sqrt{2}\int_0^1\frac{dt}{\sqrt{1 - t^4}}.
  \]

  Combining the two integrals,

  \[
  V = \pi\sqrt{2}\int_0^1\frac{dt}{\sqrt{1 - t^4}}.
  \]
provenance: written-for-site
steps:
  - The setup over \( D \) and the reduction to \( D_+ \) use the factors 2 and 4.
  - The Jacobian of \( \varphi \) produces the product with prefactor 4.
  - The radial integral equals \( \pi/8 \), and the angular integral is \( 2\sqrt{2} \) times \( \int_0^1 dt/\sqrt{1 - t^4} \).
verification:
  checks:
    - expr: "(sqrt(1 - x**4 - y**4) - (-sqrt(1 - x**4 - y**4)))/sqrt(1 - x**4 - y**4)"
      expected: "2"
    - expr: "sqrt(1 - x**4 - y**4) + sqrt(1 - (-x)**4 - y**4) + sqrt(1 - x**4 - (-y)**4) + sqrt(1 - (-x)**4 - (-y)**4)"
      expected: "4*sqrt(1 - x**4 - y**4)"
    - expr: "Matrix([[diff(r*sqrt(cos(theta)), r), diff(r*sqrt(cos(theta)), theta)], [diff(r*sqrt(sin(theta)), r), diff(r*sqrt(sin(theta)), theta)]]).det()"
      expected: "r/(2*sqrt(sin(theta))*sqrt(cos(theta)))"
    - expr: "(r*sqrt(cos(theta)))**4 + (r*sqrt(sin(theta)))**4"
      expected: "r**4"
    - expr: "integrate(sqrt(1 - w**2), (w, 0, 1))/2"
      expected: "pi/8"
    - expr: "sin(theta)*cos(theta) - sin(2*theta)/2"
      expected: "0"
    - expr: "(Symbol('tt', positive=True)**2)**(Rational(-1, 2))*2*Symbol('tt', positive=True)/sqrt(1 - Symbol('tt', positive=True)**4)"
      expected: "2/sqrt(1 - Symbol('tt', positive=True)**4)"
    - expr: "4*(pi/8)*2*sqrt(2)"
      expected: "pi*sqrt(2)"
:::

::: exercise
id: l8-volumes-between-surfaces.ex-paraboloid-cone-cap
tier: exam
topics: [volumes, triple-integrals, cylindrical-coordinates]
examBlock: triple-integrals-volumes
statement: |
  Let \(V\) be the solid above the cone \(z = \sqrt{x^{2}+y^{2}}\) and below the paraboloid \(z = 2 - x^{2} - y^{2}\).

  (a) Sketch the cut of \(V\) by the plane \(y = 0\) and find where the two surfaces meet.

  (b) Compute the volume of \(V\).

  (c) Compute \(\iiint_V z\, dV\) and the height \(\bar z\) of the centroid of \(V\).
solution: |
  (a) In the plane \(y = 0\) the cone is the pair of lines \(z = |x|\), and the paraboloid is the parabola \(z = 2 - x^{2}\). The solid lies between the V-shaped cone below and the parabola above. The surfaces meet where \(2 - r^{2} = r\) with \(r = \sqrt{x^{2}+y^{2}}\), that is
  \[
  \begin{aligned}
  r^{2} + r - 2&=0,\\
  (r+2)(r-1)&=0.
  \end{aligned}
  \]
  Only \(r = 1\) is possible, so the surfaces meet on the circle \(r = 1\) at height \(z = 1\). The cut is the region between \(z = |x|\) and \(z = 2 - x^{2}\) for \(|x| \le 1\). At the origin the paraboloid has height \(2\) and the cone has height \(0\), so the paraboloid is the upper surface on the whole disk \(r \le 1\).

  (b) The shadow is the disk \(r \le 1\), and the height is \((2 - r^{2}) - r\). With the polar factor \(r\),
  \[
  \begin{aligned}
  V&=\int_0^{2\pi}\int_0^1 (2 - r^{2} - r)\, r\, dr\, d\theta\\
  &=2\pi\left(1 - \frac14 - \frac13\right)\\
  &=\frac{5\pi}{6}.
  \end{aligned}
  \]

  (c) In cylindrical coordinates the integral of \(z\) from \(r\) to \(2 - r^{2}\) is \(\dfrac{(2 - r^{2})^{2} - r^{2}}{2} = \dfrac{4 - 5r^{2} + r^{4}}{2}\). Then
  \[
  \begin{aligned}
  \iiint_V z\, dV&=2\pi\int_0^1 \frac{4r - 5r^{3} + r^{5}}{2}\, dr\\
  &=\pi\left(2 - \frac54 + \frac16\right)\\
  &=\frac{11\pi}{12}.
  \end{aligned}
  \]
  The **centroid** height is
  \[
  \bar z = \dfrac{11\pi/12}{5\pi/6} = \dfrac{11}{10}.
  \]

  The volume is \(\dfrac{5\pi}{6}\), the integral of \(z\) is \(\dfrac{11\pi}{12}\), and \(\bar z = \dfrac{11}{10}\).
provenance: written-for-site
steps:
  - The solution finds the meeting circle \(r = 1\) and names the paraboloid as the upper surface.
  - The solution integrates the height \(2 - r^{2} - r\) with the polar factor to get \(5\pi/6\).
  - The solution computes the integral of \(z\) as \(11\pi/12\) and \(\bar z = 11/10\).
verification:
  checks:
    - expr: "(2 - r**2 - r).subs(r, 1)"
      expected: "0"
    - expr: "2*pi*integrate((2 - r**2 - r)*r, (r, 0, 1))"
      expected: "5*pi/6"
    - expr: "2*pi*integrate(((2 - r**2)**2 - r**2)/2*r, (r, 0, 1))"
      expected: "11*pi/12"
    - expr: "(11*pi/12)/(5*pi/6)"
      expected: "11/10"
:::
