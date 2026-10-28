---
id: l7-volumes
lecture: 7
order: 5
title: Volumes with double integrals
prerequisites: [l7-general-regions, l4-quadrics]
sources:
  - { source: handout, section: "15.1", page: 385 }
  - { source: sheet-3, page: 1 }
examWeight: high
examWeightNote: "Double integrals carry 32.5% of the two recent finals, and the volume block another 15%. The formal wording is the handout's and stays provisional until the lecture 7 notes arrive, and placement in this lecture is provisional until the lecture has taken place."
status: reviewed
notation: |
  The volume under \(z = f(x, y)\) and above a region \(D\) in the \(xy\)-plane is \(\iint_D f(x, y)\,dA\). Between \(z = g(x, y)\) and \(z = h(x, y)\), integrate \(h - g\). The handout writes this integral as the limit of boxes of volume \(f(x, y)\,\Delta x\,\Delta y\).
---

::: section
title: Volume under a surface
:::

::: formal-statement
kind: method
title: Volume under a surface
source:
  source: handout
  section: "15.1"
  page: 386
text: |
  Let \(z = f(x, y)\) be positive over a region \(D\) in the \(xy\)-plane. Divide \(D\) into small rectangles of sides \(\Delta x\) and \(\Delta y\), and let \((x_j, y_i)\) be a sample point in one of them. The product \(f(x_j, y_i)\,\Delta x\,\Delta y\) is the volume of a thin box under the surface. The volume under the surface is the limit of the sum of these boxes, and that limit is the **double integral**
  \[
  \begin{aligned}
  &\lim_{m,n\to\infty}\sum_{i=0}^{n-1}\sum_{j=0}^{m-1} f(x_j, y_i)\,\Delta x\,\Delta y\\
  &=\iint_D f(x, y)\,dA.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  Each box has base area \(\Delta x\,\Delta y\) and height equal to the sampled value of \(f\). Adding the boxes, and letting the rectangles shrink, produces the double integral. While \(f\) stays positive, that integral is the volume under the graph and above \(D\).
:::

::: visual
kind: region
caption: |
  This is the triangle \(D\) of the example "A roof over a triangle" below, with \(x\) as the outer variable. Keep the intercept at 1 for that triangle, and choose the order \(dx\,dy\) to see the limits when \(y\) is the outer variable.
params:
  preset: triangle
  order: dy-dx
  intercept: 1
:::

::: worked-example
title: Under a paraboloid, over the unit disk
problem: |
  Find the volume under \(z = 4 - x^2 - y^2\) and above the disk \(x^2 + y^2 \le 1\).
solution: |
  On this disk, \(x^2 + y^2 \le 1\), so \(z = 4 - x^2 - y^2 \ge 3\). The height stays positive, and the volume is the double integral of \(4 - x^2 - y^2\).

  The base is a disk and the height depends only on \(x^2 + y^2\). **Polar coordinates** fit both facts: \(x = r\cos\theta\), \(y = r\sin\theta\), and \(dA = r\,dr\,d\theta\), with \(r\) from 0 to 1 and \(\theta\) from 0 to \(2\pi\). The height is \(4 - r^2\).

  \[
  \begin{aligned}
  &\int_0^{2\pi}\int_0^1 (4 - r^2)\,r\,dr\,d\theta\\
  &=\int_0^{2\pi}\left[2r^2 - \frac{r^4}{4}\right]_0^1 d\theta\\
  &=\int_0^{2\pi}\frac{7}{4}\,d\theta\\
  &=\frac{7\pi}{2}.
  \end{aligned}
  \]

  The volume under the paraboloid and above the disk is \(\frac{7\pi}{2}\).
:::

::: guided-example
title: A roof over a triangle
problem: |
  Find the volume under \(z = 2 - x - y\) and above the triangle \(x \ge 0\), \(y \ge 0\), \(x + y \le 1\). Try each step before you show it.
steps:
  - |
    The triangle \(D\) has vertices \((0, 0)\), \((1, 0)\) and \((0, 1)\). On \(D\), \(x \ge 0\), \(y \ge 0\) and \(x + y \le 1\), so \(z = 2 - x - y \ge 1\). The volume is \(\iint_D (2 - x - y)\,dA\).
  - |
    Take \(x\) as the outer variable. Then \(x\) runs from 0 to 1, and for each fixed \(x\), \(y\) runs from 0 to \(1 - x\).
  - |
    The antiderivative in \(y\) is \((2 - x)y - y^2/2\). At \(y = 1 - x\) it equals \((2 - x)(1 - x) - (1 - x)^2/2\), and at \(y = 0\) it equals 0. Expanding gives
    \[
    \begin{aligned}
    &2 - 3x + x^2\\
    &\quad - (1/2 - x + x^2/2)\\
    &= 3/2 - 2x + x^2/2.
    \end{aligned}
    \]
  - |
    The outer integral is
    \[
    \begin{aligned}
    &\int_0^1\left(\frac{3}{2} - 2x + \frac{x^2}{2}\right)dx\\
    &=\left[\frac{3}{2}x - x^2 + \frac{x^3}{6}\right]_0^1\\
    &=\frac{3}{2} - 1 + \frac{1}{6}\\
    &=\frac{2}{3}.
    \end{aligned}
    \]
    The volume is \(\frac{2}{3}\).
:::

::: trap
text: |
  For the first-octant solid under \(z = y/2\) and inside the parabolic cylinder \(y^2 = 4 - x\), \(y\) runs from 0 to 2 and \(x\) runs from 0 to \(4 - y^2\). The parabola meets the line \(x = 4\) only at \(y = 0\). Letting \(x\) run from 0 to 4 for every \(y\) in \([0, 2]\) fills the rectangle \([0, 4]\times[0, 2]\), and the integral of \(y/2\) over that rectangle equals 4. The volume inside the cylinder is 2.
:::

::: going-deeper
title: Volume by slices and by double integrals
text: |
  For a solid over a region in the plane, the inner integral of a double integral is the area of a cross section. In \(\int_a^b \int_{g(x)}^{h(x)} f(x, y)\, dy\, dx\), the inner integral is the area under the curve in the plane at that \(x\). The outer integral adds up those areas over \(x\). Slicing a solid and integrating the slice areas gives the same volume as the double integral.
:::

::: key-points
text: |
  - When \(f\) is positive over \(D\), the volume under \(z = f(x, y)\) and above \(D\) is \(\iint_D f(x, y)\,dA\), the limit of the sums of the box volumes \(f(x_j, y_i)\,\Delta x\,\Delta y\).
  - A disk base with a height that depends only on \(x^2 + y^2\) fits polar coordinates, with \(dA = r\,dr\,d\theta\).
  - Over the triangle \(x \ge 0\), \(y \ge 0\), \(x + y \le 1\) with \(x\) as the outer variable, \(x\) runs from 0 to 1 and \(y\) runs from 0 to \(1 - x\).
  - For the first-octant solid under \(z = y/2\) and inside \(y^2 = 4 - x\), the usual slip lets \(x\) run from 0 to 4 for every \(y\) in \([0, 2]\). That fills the rectangle \([0, 4]\times[0, 2]\) and gives 4. The correct limits are \(x\) from 0 to \(4 - y^2\), and the volume is 2.
:::

::: concept-question
id: l7-volumes.q-26babdaf
question: |
  The solid is the part of the cylinder \(x^2 + y^2 \le a^2\), with \(a > 0\), that lies in the first octant and under the plane \(z = x + y\). Which region carries the integral?
options:
  - text: |
      The quarter disk \(x \ge 0\), \(y \ge 0\), \(x^2 + y^2 \le a^2\).
    correct: true
  - text: |
      The full disk \(x^2 + y^2 \le a^2\).
  - text: |
      The half disk \(y \ge 0\), \(x^2 + y^2 \le a^2\).
  - text: |
      The square \(0 \le x \le a\), \(0 \le y \le a\).
explanation: |
  The first octant requires \(x \ge 0\), \(y \ge 0\) and \(z \ge 0\). On \(x \ge 0\) and \(y \ge 0\), the plane \(z = x + y\) lies on or above the \(xy\)-plane. The shadow is the quarter disk \(x^2 + y^2 \le a^2\) in that quadrant.
:::

::: exercise
id: l7-volumes.ex-15.1.17
number: "15.1.17 (sheet 3 exercise 3.3)"
tier: basic
topics: [double-integrals]
statement: |
  Find the volume below \(z = 1 - y\) and above the region \(-1 \le x \le 1\), \(0 \le y \le 1 - x^2\).
solution: |
  On this region \(0 \le y \le 1 - x^2\), so the height \(1 - y\) is non-negative. The floor is the \(xy\)-plane and the roof is \(z = 1 - y\). The volume is
  \[
  \int_{-1}^{1}\int_0^{1-x^2}(1 - y)\,dy\,dx.
  \]

  The inner integral equals \((1 - x^2) - (1 - x^2)^2/2 = (1 - x^4)/2\). The integrand \((1 - x^4)/2\) is even, so the outer integral equals
  \[
  \int_0^1 (1 - x^4)\,dx = \left[x - \frac{x^5}{5}\right]_0^1 = \frac{4}{5}.
  \]

  The volume is \(\frac{4}{5}\).
provenance: handout-answer
steps:
  - The height is \(1 - y\) over \(-1 \le x \le 1\) and \(0 \le y \le 1 - x^2\), and that height is non-negative.
  - The volume is the iterated integral of \(1 - y\) with those limits.
  - The inner integral equals \((1 - x^4)/2\), and the outer integral equals \(4/5\).
verification:
  checks:
    - expr: "integrate(1 - y, (y, 0, 1 - x**2), (x, -1, 1))"
      expected: "Rational(4, 5)"
:::

::: section
title: Volume between two surfaces
:::

::: formal-statement
kind: method
title: Volume between two surfaces
source:
  source: handout
  section: "15.1"
  page: 393
text: |
  Let a solid meet each vertical line through a point of a region \(D\) in a segment from height \(g(x, y)\) up to height \(h(x, y)\), with \(h \ge g\) on \(D\). The volume of the solid is the integral of that gap,
  \[
  \iint_D \left(h(x, y) - g(x, y)\right)\,dA.
  \]
:::

::: plain-explanation
text: |
  The limit on page 386 is the volume under one graph, the case \(g = 0\) and \(h = f\) with \(f\) positive. The volume exercises in this section set the solid between two surfaces. The integrand is then the upper surface minus the lower surface, and \(D\) is the **shadow** of the solid in the \(xy\)-plane.
:::

::: visual
kind: solid
caption: |
  A solid over a shadow in the \(xy\)-plane. The volume integral runs over that shadow, and the integrand is the height of the solid.
params:
  preset: plane-paraboloid
  cut: z
:::

::: trap
text: |
  The volume between two surfaces is the integral of the **upper value minus the lower value**. Over the unit disk \(x^2 + y^2 \le 1\), the surface \(z = x^2 + y^2 - 1\) lies on or below the plane \(z = 0\). The gap is \(1 - x^2 - y^2\), and the integral of that gap equals \(\pi/2\). The integral of \(x^2 + y^2 - 1\) equals \(-\pi/2\), the negative of that volume.
:::

::: key-points
text: |
  - If \(h \ge g\) on \(D\), the volume of the solid between \(z = g(x, y)\) and \(z = h(x, y)\) is \(\iint_D (h - g)\,dA\), where \(D\) is the shadow of the solid in the \(xy\)-plane.
  - The volume under one graph is the case \(g = 0\) and \(h = f\) with \(f\) positive.
  - Between the plane \(z = 0\) and \(z = x^2 + y^2 - 1\) over the unit disk, the usual slip integrates the lower value minus the upper value, \(x^2 + y^2 - 1\), and gets \(-\pi/2\). The integrand is the upper value minus the lower value, \(1 - x^2 - y^2\), and its integral equals \(\pi/2\), the volume.
:::

::: concept-question
id: l7-volumes.q-c58e84cb
question: |
  A solid lies between \(z = g(x, y)\) and \(z = h(x, y)\) over \(D\), and \(h \ge g\) on \(D\). Which integral is the volume?
options:
  - text: |
      \(\displaystyle\iint_D (h - g)\,dA\)
    correct: true
  - text: |
      \(\displaystyle\iint_D (g - h)\,dA\)
  - text: |
      \(\displaystyle\iint_D h\,dA\)
  - text: |
      \(\displaystyle\iint_D (h + g)\,dA\)
explanation: |
  The vertical segment at \((x, y)\) runs from the lower value \(g(x, y)\) up to \(h(x, y)\), so its length is \(h - g\). The integral of \(g - h\) equals the negative of that volume.
:::

::: concept-question
id: l7-volumes.q-5554d916
question: |
  Over a region \(D\), the surface \(z = f(x, y)\) is positive on one part and negative on another. You want the volume of the solid lying between that surface and the plane \(z = 0\). What is the integrand?
options:
  - text: |
      \(f(x, y)\)
  - text: |
      \(|f(x, y)|\), the upper value minus the lower value
    correct: true
  - text: |
      \(-f(x, y)\)
  - text: |
      \(f(x, y)^2\)
explanation: |
  Where \(f\) is positive, the graph is the upper surface and the gap is \(f\). Where \(f\) is negative, the plane \(z = 0\) is the upper surface and the gap is \(-f\). In both parts the gap equals \(|f|\). The integral of \(f\) itself counts the part below the plane with a minus sign.
:::

::: concept-question
id: l7-volumes.q-4d465b05
question: |
  The solid lies in the first octant, inside the cylinder \(x^2 + y^2 \le 4\) and under the plane \(z = 1 - x - y\). Which region \(D\) carries the volume integral?
options:
  - text: |
      The quarter disk \(x \ge 0\), \(y \ge 0\), \(x^2 + y^2 \le 4\).
  - text: |
      The triangle \(x \ge 0\), \(y \ge 0\), \(x + y \le 1\).
    correct: true
  - text: |
      The square \(0 \le x \le 1\), \(0 \le y \le 1\).
  - text: |
      The quarter disk \(x \ge 0\), \(y \ge 0\), \(x^2 + y^2 \le 1\).
explanation: |
  The first octant requires \(z \ge 0\), and the plane \(z = 1 - x - y\) is non-negative only where \(x + y \le 1\). With \(x \ge 0\) and \(y \ge 0\), the shadow is the triangle with vertices \((0, 0)\), \((1, 0)\) and \((0, 1)\). That triangle lies inside the cylinder, because \(x^2 + y^2 \le (x + y)^2 \le 1\) there. On the rest of the quarter disk of radius \(2\) the plane lies below the \(xy\)-plane, so those points belong to no part of the solid.
:::

::: sheet-item
id: l7-volumes.sheet-height
category: formula
text: |
  The volume under a non-negative height \(f\) and above \(D\) equals \(\iint_D f\,dA\). Between an upper surface \(h\) and a lower surface \(g\), the volume equals \(\iint_D (h - g)\,dA\).
:::

::: sheet-item
id: l7-volumes.sheet-top-bottom
category: recognition
text: |
  A volume bounded by two graphs has integrand equal to the upper surface minus the lower surface. On the shadow, that difference is positive.
:::

::: exercise
id: l7-volumes.ex-15.1.18
number: "15.1.18 (sheet 3 exercise 3.1)"
tier: standard
topics: [double-integrals]
statement: |
  Find the volume bounded by \(z = x^2 + y^2\) and \(z = 4\).
solution: |
  The surfaces meet when \(x^2 + y^2 = 4\). Inside that circle the paraboloid lies below the plane: at the origin the paraboloid has height 0 and the plane has height 4. The shadow is the disk \(r \le 2\), and the height is \(4 - r^2\).

  Polar coordinates fit the disk, with \(dA = r\,dr\,d\theta\). The volume is
  \[
  \begin{aligned}
  &\int_0^{2\pi}\int_0^2 (4 - r^2)\,r\,dr\,d\theta\\
  &=\int_0^{2\pi}\left[2r^2 - \frac{r^4}{4}\right]_0^2 d\theta\\
  &=\int_0^{2\pi} 4\,d\theta\\
  &=8\pi.
  \end{aligned}
  \]

  The volume is \(8\pi\).
provenance: handout-answer
steps:
  - The surfaces meet on \(x^2 + y^2 = 4\), and inside that circle the plane is above the paraboloid.
  - The integral is \(\int_0^{2\pi}\int_0^2 (4 - r^2)\,r\,dr\,d\theta\).
  - The inner integral equals 4, and the outer integral equals \(8\pi\).
verification:
  checks:
    - expr: "integrate((4 - r**2)*r, (r, 0, 2), (theta, 0, 2*pi))"
      expected: "8*pi"
:::

::: exercise
id: l7-volumes.ex-15.1.19
number: "15.1.19"
tier: standard
topics: [double-integrals]
statement: |
  Find the volume in the first octant bounded by \(y^2 = 4 - x\) and \(y = 2z\).
solution: |
  The first octant forces \(x \ge 0\), \(y \ge 0\) and \(z \ge 0\). The plane \(y = 2z\) is the roof \(z = y/2\), and the floor is \(z = 0\). The cylinder \(x = 4 - y^2\) meets \(x \ge 0\) for \(0 \le y \le 2\). For each such \(y\), \(x\) runs from 0 to \(4 - y^2\).

  The volume is
  \[
  \begin{aligned}
  &\int_0^2\int_0^{4-y^2}\frac{y}{2}\,dx\,dy\\
  &=\int_0^2 \frac{y}{2}(4 - y^2)\,dy\\
  &=\int_0^2 \left(2y - \frac{y^3}{2}\right)dy\\
  &=\left[y^2 - \frac{y^4}{8}\right]_0^2\\
  &=4 - 2\\
  &=2.
  \end{aligned}
  \]

  The volume is 2.
provenance: handout-answer
steps:
  - In the first octant, \(z\) runs from 0 to \(y/2\), \(y\) runs from 0 to 2, and \(x\) runs from 0 to \(4 - y^2\).
  - The integral of the height \(y/2\) over that shadow equals 2.
verification:
  checks:
    - expr: "integrate(y/2, (x, 0, 4 - y**2), (y, 0, 2))"
      expected: "2"
:::

::: exercise
id: l7-volumes.ex-15.1.20
number: "15.1.20"
tier: standard
topics: [double-integrals]
statement: |
  Find the volume in the first octant bounded by \(y^2 = 4x\), \(2x + y = 4\), \(z = y\) and \(y = 0\).
solution: |
  The first octant supplies the floor \(z = 0\), and the plane \(z = y\) is the roof. In the \(xy\)-plane the parabola \(x = y^2/4\) and the line \(x = 2 - y/2\) meet where \(y^2/4 = 2 - y/2\). That equation is \(y^2 + 2y - 8 = 0\), so \((y + 4)(y - 2) = 0\). The root in \(y \ge 0\) is \(y = 2\), where \(x = 1\). The line \(y = 0\) closes the shadow, with \(x\) from 0 to 2.

  For \(y\) from 0 to 2, \(x\) runs from the parabola \(y^2/4\) to the line \(2 - y/2\). The volume is
  \[
  \begin{aligned}
  &\int_0^2\int_{y^2/4}^{2 - y/2} y\,dx\,dy\\
  &=\int_0^2 \left(2y - \frac{y^2}{2} - \frac{y^3}{4}\right)dy\\
  &=\left[y^2 - \frac{y^3}{6} - \frac{y^4}{16}\right]_0^2\\
  &=4 - \frac{4}{3} - 1\\
  &=\frac{5}{3}.
  \end{aligned}
  \]

  The volume is \(\frac{5}{3}\).
provenance: handout-answer
steps:
  - The roof is \(z = y\), the floor is \(z = 0\), and the shadow runs over \(0 \le y \le 2\) with \(x\) from \(y^2/4\) to \(2 - y/2\).
  - The integral of the height \(y\) over that shadow equals \(5/3\).
verification:
  checks:
    - expr: "integrate(y, (x, y**2/4, 2 - y/2), (y, 0, 2))"
      expected: "Rational(5, 3)"
:::

::: exercise
id: l7-volumes.ex-15.1.21
number: "15.1.21 (sheet 3 exercise 3.4)"
tier: standard
topics: [double-integrals]
statement: |
  Find the volume in the first octant bounded by \(x + y + z = 9\), \(2x + 3y = 18\) and \(x + 3y = 9\).
solution: |
  The planes \(x + 3y = 9\) and \(2x + 3y = 18\) are vertical. They meet the \(xy\)-plane in two lines, and those lines both pass through \((9, 0)\). The roof is \(z = 9 - x - y\), and the first octant keeps \(x \ge 0\), \(y \ge 0\) and \(z \ge 0\).

  For \(x\) from 0 to 9, write \(c = 9 - x\). The lower line is \(y = c/3\) and the upper line is \(y = (18 - 2x)/3 = 2c/3\). On the upper line, \(z = c - 2c/3 = c/3 \ge 0\), so the roof stays non-negative on this shadow. The height is \(c - y\), and
  \[
  \begin{aligned}
  &\int_{c/3}^{2c/3}(c - y)\,dy\\
  &=\left[cy - \frac{y^2}{2}\right]_{c/3}^{2c/3}\\
  &=\frac{4c^2}{9} - \frac{5c^2}{18}\\
  &=\frac{c^2}{6}.
  \end{aligned}
  \]
  The volume integral is therefore
  \[
  \int_0^9 \frac{(9 - x)^2}{6}\,dx.
  \]
  The substitution \(t = 9 - x\) turns it into
  \[
  \begin{aligned}
  &\int_0^9 t^2/6\,dt\\
  &=\left[t^3/18\right]_0^9\\
  &=729/18\\
  &=81/2.
  \end{aligned}
  \]

  The volume is \(\frac{81}{2}\).
provenance: handout-answer
steps:
  - The vertical planes meet the \(xy\)-plane in lines through \((9, 0)\), and for \(x\) from 0 to 9 the variable \(y\) runs from \((9 - x)/3\) to \((18 - 2x)/3\).
  - The height is \(z = 9 - x - y\), and the inner integral equals \((9 - x)^2/6\).
  - The outer integral equals \(81/2\).
verification:
  checks:
    - expr: "integrate(9 - x - y, (y, (9 - x)/3, (18 - 2*x)/3), (x, 0, 9))"
      expected: "Rational(81, 2)"
    - expr: "simplify(integrate(9 - x - y, (y, (9 - x)/3, (18 - 2*x)/3)) - (9 - x)**2/6)"
      expected: "0"
:::

::: exercise
id: l7-volumes.ex-15.1.22
number: "15.1.22"
tier: standard
topics: [double-integrals]
statement: |
  Find the volume in the first octant inside the cylinder \(x^2 + y^2 = a^2\), with \(a > 0\), and under the plane \(z = x + y\).
solution: |
  The first octant cuts the disk down to the quarter disk \(x \ge 0\), \(y \ge 0\), \(x^2 + y^2 \le a^2\). On that quarter, \(z = x + y \ge 0\), so the plane is above the \(xy\)-plane. The shadow is a quarter disk and the radius has constant limits in polar coordinates, so take \(x = r\cos\theta\), \(y = r\sin\theta\) and \(dA = r\,dr\,d\theta\), with \(r\) from 0 to \(a\) and \(\theta\) from 0 to \(\pi/2\). The height is \(r(\cos\theta + \sin\theta)\), and the integrand is \(r^2(\cos\theta + \sin\theta)\).

  \[
  \begin{aligned}
  &\int_0^{\pi/2}\int_0^a r^2(\cos\theta + \sin\theta)\,dr\,d\theta\\
  &=\left(\int_0^a r^2\,dr\right)\left(\int_0^{\pi/2}(\cos\theta + \sin\theta)\,d\theta\right)\\
  &=\frac{a^3}{3}\left[\sin\theta - \cos\theta\right]_0^{\pi/2}\\
  &=\frac{a^3}{3}\cdot 2\\
  &=\frac{2a^3}{3}.
  \end{aligned}
  \]

  The volume is \(\frac{2a^3}{3}\).
provenance: handout-answer
steps:
  - The first octant cuts the shadow to the quarter disk \(0 \le r \le a\), \(0 \le \theta \le \pi/2\), where \(z = x + y\) is non-negative.
  - The integrand in polar coordinates is \(r^2(\cos\theta + \sin\theta)\).
  - The integral equals \(2a^3/3\).
verification:
  checks:
    - expr: "integrate(r**2*(cos(theta) + sin(theta)), (r, 0, a), (theta, 0, pi/2))"
      expected: "2*a**3/3"
:::

::: exercise
id: l7-volumes.ex-15.1.23
number: "15.1.23"
tier: standard
topics: [double-integrals]
statement: |
  Find the volume bounded by \(4x^2 + y^2 = 4z\) and \(z = 2\).
solution: |
  The lower surface is \(z = (4x^2 + y^2)/4 = x^2 + y^2/4\), and the upper surface is \(z = 2\). They meet when \(4x^2 + y^2 = 8\), which is the ellipse \(x^2/2 + y^2/8 = 1\). Inside that ellipse the paraboloid is below the plane, since at the origin the paraboloid has height 0. The height is \(2 - x^2 - y^2/4\), and the shadow is \(4x^2 + y^2 \le 8\).

  Set \(x = \sqrt{2}\,u\) and \(y = 2\sqrt{2}\,v\). Then \(u^2 + v^2 \le 1\), and the absolute value of the Jacobian determinant is \(\sqrt{2}\cdot 2\sqrt{2} = 4\). The height becomes \(2 - 2u^2 - 2v^2 = 2(1 - u^2 - v^2)\), so the integrand in the \(uv\)-plane is \(8(1 - u^2 - v^2)\).

  Polar coordinates on the unit disk, \(u = r\cos\theta\) and \(v = r\sin\theta\), give
  \[
  \begin{aligned}
  &\int_0^{2\pi}\int_0^1 8(1 - r^2)\,r\,dr\,d\theta\\
  &=16\pi\left[\frac{r^2}{2} - \frac{r^4}{4}\right]_0^1\\
  &=16\pi\cdot\frac{1}{4}\\
  &=4\pi.
  \end{aligned}
  \]

  The volume is \(4\pi\).
provenance: handout-answer
steps:
  - The height is \(2 - x^2 - y^2/4\) over the ellipse \(4x^2 + y^2 \le 8\).
  - The change of variables \(x = \sqrt{2}\,u\), \(y = 2\sqrt{2}\,v\) has Jacobian 4 and turns the integrand into \(8(1 - u^2 - v^2)\) on the unit disk.
  - The polar integral over that disk equals \(4\pi\).
verification:
  checks:
    - expr: "(2 - (sqrt(2)*u)**2 - (2*sqrt(2)*v)**2/4)*4"
      expected: "8*(1 - u**2 - v**2)"
    - expr: "integrate(8*(1 - r**2)*r, (r, 0, 1), (theta, 0, 2*pi))"
      expected: "4*pi"
:::

::: exercise
id: l7-volumes.ex-15.1.24
number: "15.1.24"
tier: standard
topics: [double-integrals]
statement: |
  Find the volume bounded by \(z = x^2 + y^2\) and \(z = y\).
solution: |
  The surfaces meet when \(x^2 + y^2 = y\), which is the disk \(x^2 + (y - 1/2)^2 = 1/4\). At the center \((0, 1/2)\), the plane has height \(1/2\) and the paraboloid has height \(1/4\), so the plane is the upper surface inside the disk. The gap simplifies as
  \[
  y - x^2 - y^2 = \frac{1}{4} - x^2 - \left(y - \frac{1}{2}\right)^2.
  \]

  Place polar coordinates at \((0, 1/2)\), so the disk is \(0 \le r \le 1/2\) and the height is \(1/4 - r^2\). With \(dA = r\,dr\,d\theta\),
  \[
  \begin{aligned}
  &\int_0^{2\pi}\int_0^{1/2}\left(\frac{1}{4} - r^2\right)r\,dr\,d\theta\\
  &=2\pi\left[\frac{r^2}{8} - \frac{r^4}{4}\right]_0^{1/2}\\
  &=2\pi\left(\frac{1}{32} - \frac{1}{64}\right)\\
  &=2\pi\cdot\frac{1}{64}\\
  &=\frac{\pi}{32}.
  \end{aligned}
  \]

  The volume is \(\frac{\pi}{32}\).
provenance: handout-answer
steps:
  - The surfaces meet on the disk \(x^2 + (y - 1/2)^2 \le 1/4\), and inside it the plane \(z = y\) is above the paraboloid.
  - The height equals \(1/4 - r^2\) in polar coordinates centered at \((0, 1/2)\), with \(0 \le r \le 1/2\).
  - The integral equals \(\pi/32\).
verification:
  checks:
    - expr: "y - x**2 - y**2 - (Rational(1, 4) - x**2 - (y - Rational(1, 2))**2)"
      expected: "0"
    - expr: "integrate((Rational(1, 4) - r**2)*r, (r, 0, Rational(1, 2)), (theta, 0, 2*pi))"
      expected: "pi/32"
:::

::: exercise
id: l7-volumes.ex-15.1.25
number: "15.1.25 (sheet 3 exercise 3.5)"
tier: standard
topics: [double-integrals]
statement: |
  Find the volume under the surface \(z = xy\) and above the triangle with vertices \((1, 1, 0)\), \((4, 1, 0)\) and \((1, 2, 0)\).
solution: |
  The triangle lies in the plane \(z = 0\). The side from \((4, 1, 0)\) to \((1, 2, 0)\) has slope \((2 - 1)/(1 - 4) = -1/3\), so its equation is \(y - 1 = (-1/3)(x - 4)\), which is \(y = (7 - x)/3\). For \(x\) from 1 to 4, \(y\) runs from 1 up to \((7 - x)/3\). On this triangle \(x \ge 1\) and \(y \ge 1\), so \(z = xy\) is positive and is the roof.

  The volume is \(\int_1^4\int_1^{(7-x)/3} xy\,dy\,dx\). The inner integral equals
  \[
  \begin{aligned}
  &\frac{x}{2}\left(\left(\frac{7 - x}{3}\right)^2 - 1\right)\\
  &=\frac{x\bigl((7 - x)^2 - 9\bigr)}{18}\\
  &=\frac{x(4 - x)(10 - x)}{18}.
  \end{aligned}
  \]
  The numerator \(x(4 - x)(10 - x)\) expands to \(x^3 - 14x^2 + 40x\), so the volume is
  \[
  \begin{aligned}
  &\frac{1}{18}\int_1^4\left(x^3 - 14x^2 + 40x\right)dx\\
  &=\frac{1}{18}\left[\frac{x^4}{4} - \frac{14x^3}{3} + 20x^2\right]_1^4.
  \end{aligned}
  \]
  At \(x = 4\) the antiderivative equals \(64 - 896/3 + 320 = 256/3\). At \(x = 1\) it equals \(1/4 - 14/3 + 20 = 187/12\). The difference is \(256/3 - 187/12 = 837/12\), and dividing by 18 gives \(837/216 = 31/8\).

  The volume is \(\frac{31}{8}\).
provenance: handout-answer
steps:
  - For \(x\) from 1 to 4, \(y\) runs from 1 to \((7 - x)/3\), and the height is \(xy\).
  - The inner integral equals \(x(4 - x)(10 - x)/18\).
  - The outer integral equals \(31/8\).
verification:
  checks:
    - expr: "integrate(x*y, (y, 1, (7 - x)/3), (x, 1, 4))"
      expected: "Rational(31, 8)"
:::

::: exercise
id: l7-volumes.ex-15.1.26
number: "15.1.26"
tier: standard
topics: [double-integrals]
statement: |
  Find the volume enclosed by \(y = x^2\), \(y = 4\), \(z = x^2\) and \(z = 0\).
solution: |
  The floor is \(z = 0\) and the roof is \(z = x^2\). The walls are the parabolic cylinder \(y = x^2\) and the plane \(y = 4\), which meet when \(x^2 = 4\), so \(x\) runs from \(-2\) to \(2\). For each such \(x\), \(y\) runs from \(x^2\) to 4, and the height \(x^2\) does not depend on \(y\).

  The volume is
  \[
  \begin{aligned}
  &\int_{-2}^{2}\int_{x^2}^{4} x^2\,dy\,dx\\
  &=\int_{-2}^{2} x^2(4 - x^2)\,dx\\
  &=\int_{-2}^{2}(4x^2 - x^4)\,dx.
  \end{aligned}
  \]
  The integrand is even, so this equals
  \[
  \begin{aligned}
  &2\int_0^2\left(4x^2 - x^4\right)dx\\
  &=2\left[\frac{4x^3}{3} - \frac{x^5}{5}\right]_0^2\\
  &=2\left(\frac{32}{3} - \frac{32}{5}\right)\\
  &=64\cdot\frac{2}{15}\\
  &=\frac{128}{15}.
  \end{aligned}
  \]

  The volume is \(\frac{128}{15}\).
provenance: handout-answer
steps:
  - The height is \(x^2\), with \(x\) from \(-2\) to \(2\) and \(y\) from \(x^2\) to 4.
  - The integral of \(x^2(4 - x^2)\) over that interval equals \(128/15\).
verification:
  checks:
    - expr: "integrate(x**2, (y, x**2, 4), (x, -2, 2))"
      expected: "Rational(128, 15)"
:::

::: exercise
id: l7-volumes.ex-15.1.27
number: "15.1.27"
tier: standard
topics: [double-integrals]
statement: |
  A swimming pool is circular with diameter 40 m. The depth is constant along east-west lines and increases linearly from 2 m at the south end to 7 m at the north end. Find the volume of the pool.
solution: |
  Place the pool as the disk \(x^2 + y^2 \le 400\), with north along the positive \(y\)-axis. The south end is \(y = -20\) and the north end is \(y = 20\). Depth depends only on \(y\). It rises by 5 m over 40 m, so
  \[
  2 + \frac{5}{40}(y + 20) = 2 + \frac{y + 20}{8} = \frac{9}{2} + \frac{y}{8}.
  \]
  At \(y = -20\) this equals 2, and at \(y = 20\) it equals 7.

  The base is a disk, so polar coordinates fit: \(y = r\sin\theta\), \(dA = r\,dr\,d\theta\), \(r\) from 0 to 20 and \(\theta\) from 0 to \(2\pi\). The volume is
  \[
  \int_0^{2\pi}\int_0^{20}\left(\frac{9}{2} + \frac{r\sin\theta}{8}\right)r\,dr\,d\theta.
  \]
  The inner integral equals \(900 + (1000/3)\sin\theta\). The integral of \(\sin\theta\) from 0 to \(2\pi\) equals 0, and \(\int_0^{2\pi} 900\,d\theta = 1800\pi\).

  The volume of the pool is \(1800\pi\) m\(^3\).
provenance: handout-answer
steps:
  - The pool is the disk \(x^2 + y^2 \le 400\), and the depth is \(9/2 + y/8\).
  - In polar coordinates the integral of the depth equals \(1800\pi\).
verification:
  checks:
    - expr: "(Rational(9, 2) - 20/8, Rational(9, 2) + 20/8)"
      expected: "(2, 7)"
    - expr: "integrate((Rational(9, 2) + r*sin(theta)/8)*r, (r, 0, 20), (theta, 0, 2*pi))"
      expected: "1800*pi"
:::

::: exercise
id: l7-volumes.ex-15.1.30
number: "15.1.30"
tier: exam
topics: [double-integrals]
examBlock: triple-integrals-volumes
statement: |
  Three cylinders of radius 1 meet at right angles at the origin. Find the volume contained inside all three.
solution: |
  Take the cylinders \(x^2 + y^2 = 1\), \(x^2 + z^2 = 1\) and \(y^2 + z^2 = 1\). A point inside all three satisfies \(x^2 + y^2 \le 1\) and \(|z| \le \min\bigl(\sqrt{1 - x^2}, \sqrt{1 - y^2}\bigr)\). Over the unit disk the height is \(2\min\bigl(\sqrt{1 - x^2}, \sqrt{1 - y^2}\bigr)\).

  The integrand is symmetric across both axes, so the volume is 4 times the integral over the quarter disk \(x \ge 0\), \(y \ge 0\), \(x^2 + y^2 \le 1\). On that quarter disk, \(\sqrt{1 - y^2} \le \sqrt{1 - x^2}\) when \(y \ge x\). The line \(y = x\) meets the circle at \(\bigl(\sqrt{2}/2, \sqrt{2}/2\bigr)\). Swapping \(x\) and \(y\) exchanges the two sides of the line, and it exchanges the two arguments of the minimum, so the two sides contribute equally. The coefficient is \(4 \times 2 \times 2 = 16\): four quadrants, the two sides of the line, and the 2 in the height.
  \[
  V = 16\int_0^{\sqrt{2}/2}\int_x^{\sqrt{1-x^2}}\sqrt{1 - y^2}\,dy\,dx.
  \]

  The antiderivative of \(\sqrt{1 - y^2}\) is \(\frac{1}{2}\bigl(y\sqrt{1 - y^2} + \arcsin y\bigr)\).

  - At the upper limit \(y = \sqrt{1 - x^2}\), with \(x \ge 0\), \(\sqrt{1 - y^2} = x\) and \(\arcsin\sqrt{1 - x^2} = \pi/2 - \arcsin x\). The antiderivative there equals \(\frac{1}{2}\bigl(x\sqrt{1 - x^2} + \pi/2 - \arcsin x\bigr)\).
  - At the lower limit \(y = x\) it equals \(\frac{1}{2}\bigl(x\sqrt{1 - x^2} + \arcsin x\bigr)\).

  The difference is \(\pi/4 - \arcsin x\).

  Thus
  \[
  \begin{aligned}
  V&=16\int_0^{\sqrt{2}/2}\\
  &\quad\left(\frac{\pi}{4} - \arcsin x\right)\\
  &\quad\,dx\\
  &=16\left[\frac{\pi}{4}x - x\arcsin x - \sqrt{1 - x^2}\right]_0^{\sqrt{2}/2}.
  \end{aligned}
  \]
  At \(x = \sqrt{2}/2\), \(\arcsin(\sqrt{2}/2) = \pi/4\), so the two terms in \(\pi\) cancel and the value is \(-\sqrt{2}/2\). At \(x = 0\) the value is \(-1\). The definite integral equals \(1 - \sqrt{2}/2\), and \(V = 16 - 8\sqrt{2}\).

  The volume inside all three cylinders is \(16 - 8\sqrt{2}\).
provenance: handout-answer
steps:
  - Over the unit disk the height is \(2\min(\sqrt{1 - x^2}, \sqrt{1 - y^2})\).
  - Four quadrants and the two sides of \(y = x\) give a factor 16 in front of the integral of \(\sqrt{1 - y^2}\) for \(0 \le x \le \sqrt{2}/2\) and \(x \le y \le \sqrt{1 - x^2}\).
  - The inner integral equals \(\pi/4 - \arcsin x\), and \(16\) times the outer integral equals \(16 - 8\sqrt{2}\).
verification:
  checks:
    - expr: "16*integrate(pi/4 - asin(x), (x, 0, sqrt(2)/2))"
      expected: "16 - 8*sqrt(2)"
    - expr: "16*((pi/4)*(sqrt(2)/2) - (sqrt(2)/2)*asin(sqrt(2)/2) - sqrt(Rational(1, 2)) + 1)"
      expected: "16 - 8*sqrt(2)"
:::
