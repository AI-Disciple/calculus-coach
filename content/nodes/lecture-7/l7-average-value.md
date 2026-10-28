---
id: l7-average-value
lecture: 7
order: 4
title: Average value
prerequisites: [l7-general-regions]
sources:
  - source: handout
    section: "15.1"
    page: 387
  - source: handout
    section: "15.1"
    page: 392
  - source: sheet-3
    page: 1
  - source: final-2022
    page: 8
  - source: mock-exam-2
    page: 1
examWeight: medium
examWeightNote: The 2022 final asks for an average on a triangle. The formal wording is the handout's and stays provisional until the lecture 7 notes arrive, and placement in this lecture is provisional until the lecture has taken place.
status: reviewed
notation: |
  The average value is the double integral divided by the area of the base. The handout says average height for the same quantity.
---

::: section
title: Average height on a rectangle
:::

::: formal-statement
kind: definition
title: Average height on a rectangle
source:
  source: handout
  section: "15.1"
  page: 387
text: |
  The **average height** of \(f\) on the rectangle \(R = [a, b] \times [c, d]\) is
  \[
  \frac{1}{(b - a)(d - c)} \iint_R f(x, y) \, dA.
  \]
:::

::: plain-explanation
text: |
  The product \((b - a)(d - c)\) is the area of \(R\). The double integral is the volume under the graph of \(f\) and above \(R\). Dividing that volume by the area gives the average height.

  A grid of sample heights leads to the same formula. On each small rectangle the product of a sample height and the small area is the volume of a thin box. The sum of those boxes approaches the double integral, and dividing by the area of \(R\) leaves the average height.
:::

::: guided-example
title: Average value on a rectangle
problem: |
  Find the average value of \(f(x, y) = x + 2\) on the rectangle \([0, 1] \times [0, 2]\). Try each step on paper before you show it.
steps:
  - |
    The rectangle runs from \(x = 0\) to \(x = 1\) and from \(y = 0\) to \(y = 2\), so its area is \(1 \cdot 2 = 2\). The average value is the double integral of \(x + 2\) divided by \(2\).
  - |
    Hold \(x\) fixed and integrate in \(y\): \(\int_0^2 (x + 2) \, dy = 2x + 4\).
  - |
    Integrate in \(x\): \(\int_0^1 (2x + 4) \, dx = \bigl[x^2 + 4x\bigr]_0^1 = 5\). This value \(5\) is the integral over the rectangle.
  - |
    Divide by the area: \(\dfrac{5}{2}\). The average value is \(\dfrac{5}{2}\).
:::

::: trap
text: |
  On the rectangle \([0, 2] \times [0, 1]\),
  \[
  \int_0^1 \int_0^2 x \, dx \, dy = 2.
  \]

  \[
  \begin{aligned}
  \text{area of the rectangle}&=2,\\
  \text{average value of } x&=\dfrac{2}{2}=1.
  \end{aligned}
  \]

  The integral \(2\) is the volume under \(z = x\). Dividing by the area turns that volume into the average value \(1\). An answer that stops at the integral has reported the volume.
:::

::: key-points
text: |
  - The average height of \(f\) on the rectangle \(R = [a, b] \times [c, d]\) is the double integral of \(f\) over \(R\) divided by the area \((b - a)(d - c)\).
  - The double integral is the volume under the graph of \(f\) and above \(R\). Dividing by the area turns that volume into the average height.
  - The usual slip reports the integral \(2\) of \(x\) over \([0, 2] \times [0, 1]\) as the average value. That integral is the volume under \(z = x\), and the average value is \(\dfrac{2}{2} = 1\).
:::

::: concept-question
id: l7-average-value.q-98a9229c
question: |
  The integral of \(f\) over the rectangle \([0, 4] \times [0, 1]\) equals \(12\). What is the average value of \(f\) on that rectangle?
options:
  - text: |
      \(12\)
  - text: |
      \(3\)
    correct: true
  - text: |
      \(48\)
  - text: |
      \(\dfrac{12}{5}\)
explanation: |
  The area of the rectangle is \((4 - 0)(1 - 0) = 4\). The average value is the integral divided by the area, so \(\dfrac{12}{4} = 3\).
:::

::: exercise
id: l7-average-value.ex-15.1.29
number: "15.1.29"
tier: basic
topics: [average-value]
statement: |
  Figure 15.1.5 is a temperature map of Colorado. Estimate the average temperature in the state using 4, 16 and 25 subdivisions. Give an upper estimate and a lower estimate. Why is Colorado convenient for this problem, and what other states might you treat the same way?
solution: |
  Colorado is nearly rectangular, so a grid of rectangles sits on the state with the cells inside the outline. Read a sample temperature in each cell. The average of the sample values estimates the average temperature.

  - For an upper estimate, take a high reading in every cell and average those readings.
  - For a lower estimate, take a low reading in every cell and average those.

  Do this for a grid of 4 rectangles, then 16, then 25. A finer grid uses more of the color field.

  The figure prints a handful of readings and leaves the rest as color, so the numerical averages depend on how those colors are read. Any other state with a nearly rectangular outline, such as Wyoming or Utah, takes the same kind of grid.
provenance: written-for-site
steps:
  - A grid of rectangles is placed on the state.
  - A high reading and a low reading are chosen in each cell.
  - Those readings are averaged for 4, 16 and 25 subdivisions.
  - The near-rectangular outline is given as the reason a rectangular grid fits.
verification:
  checkable: false
  reason: |
    The figure is a color field with scattered printed readings. A general cell on a grid of 4, 16 or 25 rectangles has no temperature fixed by the figure, so there is no single numeric average to check.
:::

::: exercise
id: l7-average-value.sheet-2.1
number: "sheet 3 exercise 2.1"
tier: basic
topics: [average-value, double-integrals]
statement: |
  Find the average value of \(f(x, y) = x e^y + e^y\) on the rectangle \([0, 4] \times [0, 1]\).
solution: |
  The rectangle has area \(4 \cdot 1 = 4\). The integrand is \((x + 1)e^y\).

  Hold \(x\) fixed and integrate in \(y\):
  \[
  \int_0^1 (x + 1)e^y \, dy = (x + 1)(e - 1).
  \]
  Then
  \[
  \begin{aligned}
  \int_0^4 (x + 1)(e - 1) \, dx\\
  &= (e - 1)\\
  &\quad\left[\frac{x^2}{2} + x\right]_0^4,\\
  &= (e - 1)(8 + 4) = 12(e - 1).
  \end{aligned}
  \]
  Divide by the area: \(\dfrac{12(e - 1)}{4} = 3(e - 1)\). The average value is \(3(e - 1)\).
provenance: written-for-site
steps:
  - The area of the rectangle is \(4\).
  - The integral of \(x e^y + e^y\) over the rectangle equals \(12(e - 1)\).
  - Dividing by \(4\) gives the average value \(3(e - 1)\).
verification:
  checks:
    - expr: integrate(x*exp(y) + exp(y), (y, 0, 1), (x, 0, 4))
      expected: 12*(exp(1) - 1)
    - expr: integrate(x*exp(y) + exp(y), (y, 0, 1), (x, 0, 4))/4
      expected: 3*(exp(1) - 1)
:::

::: section
title: Average height over a general base
:::

::: formal-statement
kind: definition
title: Average height over a general base
source:
  source: handout
  section: "15.1"
  page: 392
text: |
  The **average height** of \(f\) over a base \(D\) is the volume under the surface divided by the area of the base:
  \[
  \frac{1}{\text{area of } D} \iint_D f(x, y) \, dA.
  \]
:::

::: plain-explanation
text: |
  The double integral is the volume. Divide it by the area of \(D\), computed on its own.
:::

::: tip
text: |
  On a rectangle the area of \(D\) is \((b - a)(d - c)\). When the base is a region under a curve, the area is an ordinary one-variable integral.
:::

::: worked-example
title: Average height over a parabolic base
problem: |
  The surface \(z = x + 2y^2\) lies over the base \(0 \le x \le 1\), \(0 \le y \le x^2\). Find the average height.
solution: |
  The base is the region under \(y = x^2\) from \(x = 0\) to \(x = 1\). Its area is
  \[
  \int_0^1 x^2 \, dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3}.
  \]

  The volume under the surface is
  \[
  \int_0^1 \int_0^{x^2} \bigl(x + 2y^2\bigr) \, dy \, dx.
  \]
  The inner integral is \(\bigl[xy + \frac{2}{3}y^3\bigr]_0^{x^2} = x^3 + \frac{2}{3}x^6\). The outer integral is
  \[
  \begin{aligned}
  &\left[\frac{x^4}{4} + \frac{2}{21}x^7\right]_0^1\\
  &=\frac{1}{4} + \frac{2}{21}\\
  &=\frac{21}{84} + \frac{8}{84} = \frac{29}{84}.
  \end{aligned}
  \]

  The average height is the volume divided by the area:
  \[
  \frac{29/84}{1/3} = \frac{29}{84} \cdot 3 = \frac{29}{28}.
  \]
  The average height is \(\dfrac{29}{28}\).
:::

::: trap
text: |
  The triangle in the first quadrant bounded by \(x + 2y = 2\) has vertices \((0, 0)\), \((2, 0)\) and \((0, 1)\). Its area is \(1\), so the average of \(\sin(x + y)\) equals the integral of \(\sin(x + y)\) over the triangle.

  The antiderivative of \(\sin(x + y)\) in \(y\) is \(-\cos(x + y)\). From \(y = 0\) to \(y = 1 - x/2\) the upper limit contributes \(-\cos(1 + x/2)\) and the lower limit contributes \(-\cos x\), so the inner integral is \(\cos x - \cos(1 + x/2)\). Integrating that from \(x = 0\) to \(x = 2\) gives \(2\sin 1 - \sin 2\). The average is \(2\sin 1 - \sin 2\).

  Stopping at the inner expression \(1 - \cos(1 + x/2)\) and integrating from \(0\) to \(2\) produces \(2 + 2\sin 1 - 2\sin 2\).
:::

::: going-deeper
title: The mean value theorem for integrals
text: |
  If \(f\) is continuous on a closed bounded region \(D\) that is connected, some point \((x_0, y_0)\) of \(D\) has \(f(x_0, y_0)\) equal to the average value of \(f\) over \(D\). The average lies between the smallest and the largest value of \(f\), and a continuous function on a connected region takes every value between those two.
:::

::: key-points
text: |
  - The average height of \(f\) over a base \(D\) is the volume under the surface divided by the area of \(D\). In symbols, it is \(\dfrac{1}{\text{area of } D} \iint_D f(x, y) \, dA\), and the area of \(D\) is computed on its own.
  - On a rectangle the area is \((b - a)(d - c)\). When the base is a region under a curve, the area is an ordinary one-variable integral.
  - When \(D\) has area \(1\), the average value equals the double integral.
  - On the triangle bounded by \(x + 2y = 2\) in the first quadrant, the usual slip takes \(1 - \cos(1 + x/2)\) as the inner integral of \(\sin(x + y)\) and gets \(2 + 2\sin 1 - 2\sin 2\). The inner integral is \(\cos x - \cos(1 + x/2)\), and the average is \(2\sin 1 - \sin 2\).
:::

::: concept-question
id: l7-average-value.q-cfadc9d9
question: |
  A region \(D\) has area \(1\), and \(\iint_D f(x, y) \, dA = 2\sin 1 - \sin 2\). What is the average value of \(f\) on \(D\)?
options:
  - text: |
      \(2\sin 1 - \sin 2\)
    correct: true
  - text: |
      \(\dfrac{1}{2}\bigl(2\sin 1 - \sin 2\bigr)\)
  - text: |
      \(1\)
  - text: |
      \(2 + 2\sin 1 - 2\sin 2\)
explanation: |
  The average value is the integral divided by the area. The area is \(1\), so the average value equals \(2\sin 1 - \sin 2\).
:::

::: concept-question
id: l7-average-value.q-f14b7033
question: |
  With \(x\) held fixed, what is \(\displaystyle\int_0^{1 - x/2} \sin(x + y) \, dy\)?
options:
  - text: |
      \(1 - \cos(1 + x/2)\)
  - text: |
      \(\cos x - \cos(1 + x/2)\)
    correct: true
  - text: |
      \(\sin x - \sin(1 + x/2)\)
  - text: |
      \(-\cos(1 + x/2)\)
explanation: |
  The antiderivative in \(y\) is \(-\cos(x + y)\). At \(y = 1 - x/2\) it equals \(-\cos(1 + x/2)\), and at \(y = 0\) it equals \(-\cos x\). Subtracting the lower value from the upper value gives \(\cos x - \cos(1 + x/2)\).
:::

::: exercise
id: l7-average-value.ex-15.1.28
number: "15.1.28"
tier: standard
topics: [average-value, double-integrals]
statement: |
  Find the average value of \(f(x, y) = e^y \sqrt{x + e^y}\) on the rectangle with vertices \((0, 0)\), \((4, 0)\), \((4, 1)\) and \((0, 1)\).
solution: |
  The rectangle is \([0, 4] \times [0, 1]\), so its area is \(4\). The average value is the integral of \(e^y \sqrt{x + e^y}\) divided by \(4\).

  Hold \(y\) fixed and integrate in \(x\). The substitution \(u = x + e^y\) has \(du = dx\), and
  \[
  \int e^y \sqrt{x + e^y} \, dx = e^y \cdot \frac{2}{3} \bigl(x + e^y\bigr)^{3/2}.
  \]
  From \(x = 0\) to \(x = 4\) the inner integral equals
  \[
  \frac{2}{3} e^y \bigl(4 + e^y\bigr)^{3/2} - \frac{2}{3} e^{5y/2}.
  \]

  ### Outer integral in \(y\)

  Integrate in \(y\) from \(0\) to \(1\). For the first term set \(w = 4 + e^y\), so \(dw = e^y \, dy\). Then
  \[
  \begin{aligned}
  &\frac{2}{3} \int_0^1 e^y \bigl(4 + e^y\bigr)^{3/2} \, dy\\
  &=\frac{4}{15} \Bigl[(4 + e)^{5/2} - 5^{5/2}\Bigr].
  \end{aligned}
  \]
  Since \(5^{5/2} = 25\sqrt{5}\), this equals \(\dfrac{4}{15}(4 + e)^{5/2} - \dfrac{20}{3}\sqrt{5}\).

  The second term integrates as
  \[
  \frac{2}{3} \int_0^1 e^{5y/2} \, dy = \frac{4}{15}\bigl(e^{5/2} - 1\bigr).
  \]
  The volume is the first result with the second subtracted:
  \[
  \frac{4}{15}(4 + e)^{5/2} - \frac{20}{3}\sqrt{5} - \frac{4}{15}e^{5/2} + \frac{4}{15}.
  \]

  Divide by the area \(4\):
  \[
  \frac{1}{15}(4 + e)^{5/2} - \frac{5}{3}\sqrt{5} - \frac{1}{15}e^{5/2} + \frac{1}{15}.
  \]
  Now \((4 + e)^{5/2} = (e^2 + 8e + 16)\sqrt{e + 4}\), so the average value is
  \[
  \begin{aligned}
  &\frac{e^2 + 8e + 16}{15}\sqrt{e + 4}\\
  &\qquad - \frac{5\sqrt{5}}{3} - \frac{e^{5/2}}{15}\\
  &\qquad + \frac{1}{15}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The area of the rectangle is \(4\).
  - The inner integral in \(x\) is \(\frac{2}{3}e^y(4 + e^y)^{3/2} - \frac{2}{3}e^{5y/2}\).
  - The outer integral in \(y\) is computed from \(0\) to \(1\).
  - The volume is divided by \(4\), and the average value is stated in closed form.
verification:
  checks:
    - expr: integrate(exp(y)*sqrt(x + exp(y)), (x, 0, 4), (y, 0, 1))/4
      expected: '(exp(2) + 8*exp(1) + 16)/15 * sqrt(exp(1) + 4) - 5*sqrt(5)/3 - exp(Rational(5, 2))/15 + Rational(1, 15)'
:::

::: exercise
id: l7-average-value.sheet-2.2
number: "sheet 3 exercise 2.2"
tier: standard
topics: [average-value, triple-integrals]
statement: |
  Find the average value of \(f(x, y, z) = xyz\) on the cube with opposite corners \((0, 0, 0)\) and \((2, 2, 2)\).
solution: |
  The cube is \(0 \le x \le 2\), \(0 \le y \le 2\), \(0 \le z \le 2\). Its volume is \(2 \cdot 2 \cdot 2 = 8\). The average value is the triple integral of \(xyz\) divided by this volume.

  Integrate in \(z\), then \(y\), then \(x\):
  \[
  \int_0^2 \int_0^2 \int_0^2 xyz \, dz \, dy \, dx.
  \]
  The inner integral is \(\bigl[xy \cdot \frac{z^2}{2}\bigr]_0^2 = 2xy\). The integral in \(y\) is \(\bigl[x y^2\bigr]_0^2 = 4x\). The integral in \(x\) is \(\bigl[2x^2\bigr]_0^2 = 8\).

  Divide by the volume: \(\dfrac{8}{8} = 1\). The average value is \(1\).
provenance: written-for-site
steps:
  - The volume of the cube is \(8\).
  - The triple integral of \(xyz\) over the cube equals \(8\).
  - Dividing by \(8\) gives the average value \(1\).
verification:
  checks:
    - expr: integrate(x*y*z, (z, 0, 2), (y, 0, 2), (x, 0, 2))
      expected: 8
    - expr: integrate(x*y*z, (z, 0, 2), (y, 0, 2), (x, 0, 2))/8
      expected: 1
:::

::: exercise
id: l7-average-value.final-2022-q6
tier: exam
topics: [average-value, double-integrals]
examBlock: double-integrals
pastExam:
  year: 2022
  paper: Final
  question: "6"
  points: 2
statement: |
  Compute the average of \(f(x, y) = \sin(x + y)\) in the domain \(D\) in the first quadrant bounded by \(x + 2y = 2\).
solution: |
  \(D\) meets the axes at \((2, 0)\) and \((0, 1)\), so \(D\) is the triangle with vertices \((0, 0)\), \((2, 0)\) and \((0, 1)\). The legs have lengths \(2\) and \(1\), and the area is \(\frac{1}{2} \cdot 2 \cdot 1 = 1\).

  The average is the integral of \(\sin(x + y)\) divided by this area. The area is \(1\), so the average equals
  \[
  \int_0^2 \int_0^{1 - x/2} \sin(x + y) \, dy \, dx.
  \]
  For each fixed \(x\) between \(0\) and \(2\), \(y\) runs from \(0\) up to the line \(x + 2y = 2\).

  The antiderivative in \(y\) is \(-\cos(x + y)\). Evaluated from \(0\) to \(1 - x/2\),
  \[
  \begin{aligned}
  &\bigl[-\cos(x + y)\bigr]_0^{1 - x/2}\\
  &=-\cos\bigl(1 + \tfrac{x}{2}\bigr) - \bigl(-\cos x\bigr)\\
  &=\cos x - \cos\bigl(1 + \tfrac{x}{2}\bigr).
  \end{aligned}
  \]

  ### Outer integral

  The outer integral is
  \[
  \begin{aligned}
  &\int_0^2 \Bigl(\cos x - \cos\bigl(1 + \tfrac{x}{2}\bigr)\Bigr) \, dx\\
  &=\Bigl[\sin x - 2\sin\bigl(1 + \tfrac{x}{2}\bigr)\Bigr]_0^2.
  \end{aligned}
  \]
  At \(x = 2\) the antiderivative equals \(\sin 2 - 2\sin 2 = -\sin 2\). At \(x = 0\) it equals \(-2\sin 1\). Subtracting gives
  \[
  -\sin 2 - (-2\sin 1) = 2\sin 1 - \sin 2.
  \]
  The average is \(2\sin 1 - \sin 2\).

  Mock exam 2, exercise 6, has this same statement.
provenance: official-key
steps:
  - The domain is the triangle of area \(1\).
  - The inner integral equals \(\cos x - \cos(1 + x/2)\).
  - The outer integral equals \(2\sin 1 - \sin 2\).
  - The average is \(2\sin 1 - \sin 2\).
verification:
  checks:
    - expr: integrate(1, (y, 0, 1 - x/2), (x, 0, 2))
      expected: 1
    - expr: integrate(sin(x + y), (y, 0, 1 - x/2), (x, 0, 2))
      expected: 2*sin(1) - sin(2)
discrepancy: |
  The handwritten line on the paper equals \(2 - 2\sin 2\). The verified value is \(2\sin 1 - \sin 2\).
:::

::: sheet-item
id: l7-average-value.sheet-formula
category: formula
text: |
  The average value of \(f\) over a base \(D\) is the integral of \(f\) over \(D\) divided by the area of \(D\). On the rectangle \([a, b] \times [c, d]\) that area is \((b - a)(d - c)\). The handout calls this quantity the average height.
:::

::: sheet-item
id: l7-average-value.sheet-divide
category: trap
text: |
  The double integral of \(f\) is the volume under the surface. The average value is that volume divided by the area of the base. Stopping at the integral reports the volume.
:::
