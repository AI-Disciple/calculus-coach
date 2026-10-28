---
id: l7-double-integrals-rectangles
lecture: 7
order: 1
title: Double integrals over rectangles
prerequisites: [l3-fundamental-theorem, l4-graphs-planes]
sources:
  - { source: handout, section: "15.1", page: 385 }
  - { source: sheet-3, page: 1 }
  - { source: final-2024, page: 1 }
  - { source: final-2025, page: 1 }
examWeight: high
examWeightNote: "Double integrals carry 32.5% of the two recent finals. The formal wording is the handout's and stays provisional until the lecture 7 notes arrive, and placement in this lecture is provisional until the lecture has taken place."
status: reviewed
notation: |
  \(dA\) is the area element with no order. \(dx\,dy\) and \(dy\,dx\) name the two iterated orders. The handout does not use a curly partial in this section. Where a partial appears (exercise 31), \(f_x\), \(\frac{df}{dx}\) and \(\frac{\partial f}{\partial x}\) are the same thing.
---

::: formal-statement
kind: definition
title: Double integral over a rectangle
source:
  source: handout
  section: "15.1"
  page: 386
text: |
  Let \(R=[a,b]\times[c,d]\). Divide \(R\) into an \(m\times n\) grid, with \(\Delta x=(b-a)/m\), \(\Delta y=(d-c)/n\), and with a sample point \((x_j,y_i)\) in the subrectangle of column \(j\) and row \(i\). The limit of the corresponding Riemann sum is the **double integral** of \(f\) over the region \(R\):
  \[
  \begin{aligned}
  &\lim_{m,n\to\infty}\sum_{i=0}^{n-1}\sum_{j=0}^{m-1}\\
  &\qquad f(x_j,y_i)\,\Delta x\,\Delta y\\
  &=\iint_R f(x,y)\,dx\,dy\\
  &=\iint_R f(x,y)\,dA.
  \end{aligned}
  \]
  The symbol \(dA\) is a small bit of area, with no specified order of \(x\) and \(y\).
:::

::: plain-explanation
text: |
  Each small rectangle has area \(\Delta x\Delta y\). The product \(f(x_j,y_i)\Delta x\Delta y\) is the volume of a box with that base and with height \(f(x_j,y_i)\). The limit of the sum of these boxes is the volume under the graph of \(f\) above \(R\). The form with \(dA\) uses that small bit of area and specifies no order. The forms \(dx\,dy\) and \(dy\,dx\) name the two iterated orders.
:::

::: key-points
text: |
  - For \(R=[a,b]\times[c,d]\), the double integral \(\iint_R f(x,y)\,dA\) is the limit of the Riemann sums \(\sum_{i=0}^{n-1}\sum_{j=0}^{m-1}f(x_j,y_i)\,\Delta x\,\Delta y\) over the \(m\times n\) grid as \(m,n\to\infty\).
  - Each term \(f(x_j,y_i)\,\Delta x\,\Delta y\) is the volume of a box over one small rectangle. When \(f\) is positive, the double integral is the volume under the graph of \(f\) above \(R\).
  - The symbol \(dA\) is a small bit of area with no order of \(x\) and \(y\). The forms \(dx\,dy\) and \(dy\,dx\) name the two iterated orders.
:::

::: formal-statement
kind: method
title: Iterated integral through a cross-section
source:
  source: handout
  section: "15.1"
  page: 388
text: |
  For \(y\) between \(c\) and \(d\), the cross-section area is
  \[
  G(y)=\int_a^b f(x,y)\,dx,
  \]
  where \(y\) is held constant. Then
  \[
  \int_c^d G(y)\,dy=\int_c^d\int_a^b f(x,y)\,dx\,dy.
  \]
  Compute the inner integral in two steps:

  1. Find an antiderivative in \(x\).
  2. Substitute the limits \(x=a\) and \(x=b\).

  The result is a function of \(y\) alone. The outer integral is taken in \(y\).
:::

::: plain-explanation
text: |
  Hold \(y\) fixed and integrate in \(x\). The value \(G(y)\) is the area of the slice of the solid at that \(y\). A slice of thickness \(\Delta y\) then has volume \(G(y)\Delta y\). Integrating \(G\) from \(c\) to \(d\) adds those slices. Slices perpendicular to the \(x\)-direction give the other iterated order, \(\int_a^b\int_c^d f(x,y)\,dy\,dx\).
:::

::: formal-statement
kind: theorem
title: Fubini's theorem on a rectangle
source:
  source: handout
  section: "15.1"
  page: 389
text: |
  On the rectangle \(R=[a,b]\times[c,d]\), for a reasonably nice function \(f\),
  \[
  \begin{aligned}
  &\iint_R f(x,y)\,dA\\
  &=\int_c^d\int_a^b f(x,y)\,dx\,dy\\
  &=\int_a^b\int_c^d f(x,y)\,dy\,dx.
  \end{aligned}
  \]
  The equality of the double integral with these two single integrals, in either order, has not really been proved. The result is called **Fubini's Theorem**.
:::

::: plain-explanation
text: |
  On a rectangle, the limits are constants, so the range of each variable does not depend on the other variable. The inner integral treats the outer variable as a constant. When \(f\) is reasonably nice, the order \(dx\,dy\) and the order \(dy\,dx\) both equal the double integral, provided each variable keeps its own limits.
:::

::: worked-example
title: Both orders on a rectangle
problem: |
  Compute \(\displaystyle\iint_R \bigl(1+(x-1)^2+4y^2\bigr)\,dA\) on the rectangle \(R=[0,3]\times[0,2]\), in both orders.
solution: |
  The integrand is \(1+(x-1)^2+4y^2\). The rectangle is \(R=[0,3]\times[0,2]\).

  ### Order \(dy\,dx\) first

  With \(x\) held constant, the inner integral is
  \[
  \begin{aligned}
  &\int_0^2\bigl(1+(x-1)^2+4y^2\bigr)\,dy\\
  &=\left[y+(x-1)^2 y+\frac{4}{3}y^3\right]_0^2\\
  &=2+2(x-1)^2+\frac{32}{3}.
  \end{aligned}
  \]
  An antiderivative of that function of \(x\) is \(2x+\frac{2}{3}(x-1)^3+\frac{32}{3}x\). At \(x=3\) this antiderivative equals \(\frac{130}{3}\). At \(x=0\) it equals \(-\frac{2}{3}\). The difference is \(44\).

  ### Order \(dx\,dy\)

  With \(y\) held constant, an antiderivative in \(x\) is \(x+\frac{(x-1)^3}{3}+4y^2 x\). At \(x=3\) it equals \(3+\frac{8}{3}+12y^2\). At \(x=0\) it equals \(-\frac{1}{3}\). The difference is
  \[
  3+\frac{8}{3}+12y^2-\left(-\frac{1}{3}\right)=6+12y^2.
  \]
  The outer integral of \(6+12y^2\) from \(0\) to \(2\) equals \(12+32\), which equals \(44\).

  Both orders give the same number. The value of the double integral is \(44\).
:::

::: guided-example
title: One order on a short rectangle
problem: |
  Compute \(\displaystyle\int_0^1\int_0^2 (3x+y)\,dy\,dx\). Try each step before you show it.
steps:
  - |
    The region is the rectangle \(0\le x\le 1\), \(0\le y\le 2\). The order \(dy\,dx\) integrates \(y\) first, and \(x\) stays constant during that step.
  - |
    The inner integral is
    \[
    \begin{aligned}
    \int_0^2 (3x+y)\,dy&=\left[3xy+\frac{y^2}{2}\right]_0^2\\
    &=6x+2.
    \end{aligned}
    \]
  - |
    The outer integral is
    \[
    \begin{aligned}
    \int_0^1 (6x+2)\,dx&=\left[3x^2+2x\right]_0^1\\
    &=5.
    \end{aligned}
    \]
  - |
    The value of the integral is \(5\).
:::

::: trap
text: |
  The limits stay with their variable. On the rectangle \(0\le x\le 1\), \(0\le y\le 2\),
  \[
  \int_0^1\int_0^2 y\,dy\,dx=2.
  \]
  The same differentials with those numbers swapped are
  \[
  \int_0^2\int_0^1 y\,dy\,dx=1.
  \]
  The values differ, so the second integral runs over the different rectangle \(0\le x\le 2\), \(0\le y\le 1\). Fubini's theorem changes \(dy\,dx\) into \(dx\,dy\) and keeps \(y\) from \(0\) to \(2\) and \(x\) from \(0\) to \(1\).
:::

::: key-points
text: |
  - The iterated integral \(\int_c^d\int_a^b f(x,y)\,dx\,dy\) holds \(y\) constant and integrates in \(x\) from \(a\) to \(b\) first. The inner integral \(G(y)=\int_a^b f(x,y)\,dx\) is the area of the slice at \(y\) and is a function of \(y\) alone. The outer integral is \(\int_c^d G(y)\,dy\).
  - On \(R=[a,b]\times[c,d]\), a reasonably nice \(f\) satisfies \(\iint_R f(x,y)\,dA=\int_c^d\int_a^b f(x,y)\,dx\,dy=\int_a^b\int_c^d f(x,y)\,dy\,dx\). Both orders hold when each variable keeps its own limits.
  - The usual slip swaps the numbers of the limits and keeps the differentials, so it writes \(\int_0^2\int_0^1 y\,dy\,dx\) for \(\int_0^1\int_0^2 y\,dy\,dx\). The integral it writes runs over the different rectangle \(0\le x\le 2\), \(0\le y\le 1\) and equals \(1\), while the original equals \(2\). Changing \(dy\,dx\) to \(dx\,dy\) keeps \(y\) from \(0\) to \(2\) and \(x\) from \(0\) to \(1\).
:::

::: concept-question
id: l7-double-integrals-rectangles.q-ded16d76
question: |
  In \(\int_c^d\int_a^b f(x,y)\,dx\,dy\), which description matches the inner integral?
options:
  - text: |
      Integrate in \(x\) from \(a\) to \(b\), holding \(y\) constant.
    correct: true
  - text: |
      Integrate in \(y\) from \(c\) to \(d\), holding \(x\) constant.
  - text: |
      Integrate in \(x\) and in \(y\) in one step.
  - text: |
      Integrate in \(y\) from \(a\) to \(b\).
explanation: |
  The inner differential is \(dx\), and the inner limits are \(a\) and \(b\). During that integration, \(y\) is held constant. The outer integral then runs in \(y\) from \(c\) to \(d\).
:::

::: concept-question
id: l7-double-integrals-rectangles.q-49f3aae2
question: |
  Fubini's theorem applies to a reasonably nice function on a rectangle. What does it conclude?
options:
  - text: |
      The double integral equals either iterated integral, when each variable keeps its own limits.
    correct: true
  - text: |
      The double integral equals the product of the side lengths of the rectangle.
  - text: |
      The mixed partial derivatives of \(f\) are equal.
  - text: |
      The value changes when the order of the differentials changes.
explanation: |
  On a rectangle, a reasonably nice function has one double integral. The order \(dx\,dy\) and the order \(dy\,dx\) both equal it when each variable keeps its own limits.
:::

::: concept-question
id: l7-double-integrals-rectangles.q-e02de61c
question: |
  The inner integral of \(\int_a^b\int_c^d f(x,y)\,dy\,dx\) has been computed, and the outer integral has not. What is left?
options:
  - text: |
      A function of \(x\) alone.
    correct: true
  - text: |
      A function of \(y\) alone.
  - text: |
      A constant, with the outer integral already finished.
  - text: |
      The summand \(f(x,y)\Delta x\Delta y\).
explanation: |
  The inner integral is in \(y\), so \(x\) is constant during that step and the result depends on \(x\). The outer integral then integrates that function of \(x\) from \(a\) to \(b\).
:::

::: exercise
id: l7-double-integrals-rectangles.ex-15.1.1
number: "15.1.1 (sheet 3, exercise 1.1)"
tier: basic
topics: [double-integrals]
statement: |
  Compute \(\displaystyle\int_0^2\int_0^4 (1+x)\,dy\,dx\).
solution: |
  The rectangle is \(0\le x\le 2\), \(0\le y\le 4\), in the order \(dy\,dx\).

  The inner integral treats \(x\) as constant:
  \[
  \begin{aligned}
  \int_0^4 (1+x)\,dy&=\bigl[(1+x)y\bigr]_0^4\\
  &=4+4x.
  \end{aligned}
  \]
  The outer integral is
  \[
  \begin{aligned}
  \int_0^2 (4+4x)\,dx&=\bigl[4x+2x^2\bigr]_0^2\\
  &=8+8=16.
  \end{aligned}
  \]
  The value of the integral is \(16\).
provenance: handout-answer
steps:
  - The inner integral treats \(x\) as constant and equals \(4+4x\).
  - The outer integral equals \(16\).
verification:
  checks:
    - expr: integrate(1 + x, (y, 0, 4), (x, 0, 2))
      expected: "16"
:::

::: exercise
id: l7-double-integrals-rectangles.ex-15.1.2
number: "15.1.2 (sheet 3, exercise 1.2)"
tier: basic
topics: [double-integrals]
statement: |
  Compute \(\displaystyle\int_{-1}^1\int_0^2 (x+y)\,dy\,dx\). Sheet 3 writes the integrand as \(y+x\).
solution: |
  The rectangle is \(-1\le x\le 1\), \(0\le y\le 2\), in the order \(dy\,dx\). The integrand \(x+y\) is the sheet's \(y+x\).

  The inner integral treats \(x\) as constant:
  \[
  \int_0^2 (x+y)\,dy=\left[xy+\frac{y^2}{2}\right]_0^2=2x+2.
  \]
  An antiderivative of \(2x+2\) is \(x^2+2x\). At \(x=1\) it equals \(3\). At \(x=-1\) it equals \(-1\). The difference is \(4\).

  The value of the integral is \(4\).
provenance: handout-answer
steps:
  - The inner integral treats \(x\) as constant and equals \(2x+2\).
  - The outer integral equals \(4\).
verification:
  checks:
    - expr: integrate(x + y, (y, 0, 2), (x, -1, 1))
      expected: "4"
:::

::: exercise
id: l7-double-integrals-rectangles.ex-15.1.31
number: "15.1.31"
tier: standard
topics: [double-integrals]
statement: |
  Prove that if \(f(x,y)\) is integrable and
  \[
  g(x,y)=\int_a^x\int_b^y f(s,t)\,dt\,ds,
  \]
  then \(g_{xy}=g_{yx}=f(x,y)\).
solution: |
  The function \(f\) is integrable, so on the rectangle with these limits the iterated integral may be written in either order:
  \[
  \begin{aligned}
  g(x,y)&=\int_a^x\int_b^y f(s,t)\,dt\,ds\\
  &=\int_b^y\int_a^x f(s,t)\,ds\,dt.
  \end{aligned}
  \]

  Start from the first order. The fundamental theorem, applied at the upper limit \(x\), gives
  \[
  g_x(x,y)=\int_b^y f(x,t)\,dt.
  \]
  A second application, at the upper limit \(y\), gives \(g_{xy}(x,y)=f(x,y)\).

  Start from the second order. The fundamental theorem, applied at the upper limit \(y\), gives
  \[
  g_y(x,y)=\int_a^x f(s,y)\,ds.
  \]
  A second application, at the upper limit \(x\), gives \(g_{yx}(x,y)=f(x,y)\).

  Therefore \(g_{xy}=g_{yx}=f(x,y)\).
provenance: written-for-site
steps:
  - The solution writes the integral in both orders and applies the fundamental theorem at the upper limit in \(x\), then in \(y\), to obtain \(g_{xy}=f\).
  - The solution applies the fundamental theorem at the upper limit in \(y\), then in \(x\), to obtain \(g_{yx}=f\).
verification:
  checkable: false
  reason: |
    The claim is a proof about a general integrable function, so there is no single expression to compare with an expected value.
:::

::: exercise
id: l7-double-integrals-rectangles.ex-15.1.33
number: "15.1.33"
tier: standard
topics: [double-integrals]
statement: |
  What are the parallels between Fubini's Theorem and Clairaut's Theorem?
solution: |
  Fubini's Theorem is about integrals on a rectangle. For a reasonably nice function, the integral in the order \(dx\,dy\) agrees with the integral in the order \(dy\,dx\), and both equal the double integral, when each variable keeps its own limits.

  Clairaut's Theorem is about derivatives. When the mixed partial derivatives are continuous, \(f_{xy}\) agrees with \(f_{yx}\).

  In each theorem, a regularity condition on the function makes the two orders agree. The link is concrete in exercise 31. If \(g\) is obtained by integrating an integrable function \(f\) in both variables, then \(g_{xy}\) and \(g_{yx}\) both equal \(f\), so those mixed partials agree.
provenance: written-for-site
steps:
  - The solution states Fubini's conclusion for a reasonably nice function on a rectangle, with each variable keeping its own limits.
  - The solution states Clairaut's conclusion when the mixed partials are continuous, and links the two theorems by the integrated function in exercise 31.
verification:
  checkable: false
  reason: |
    The answer is a comparison of two theorems in prose, so there is no expression to check.
:::

::: exercise
id: l7-double-integrals-rectangles.final-2024-q4a
tier: exam
topics: [double-integrals]
examBlock: double-integrals
pastExam:
  year: 2024
  paper: Final
  question: "4a"
  points: 1
statement: |
  [7 points. 38min] Compute the integral

  a) \( \displaystyle \int_0^1 \int_1^2 \frac{x}{y}\, dydx \)
solution: |
  The domain is the rectangle \(0\leq x\leq 1\), \(1\leq y\leq 2\), with the order \(dy\,dx\).

  \[
  \begin{aligned}
  I&=\int_0^1\int_1^2\frac{x}{y}\,dy\,dx\\
  &=\int_0^1 x\bigl[\log y\bigr]_1^2\,dx\\
  &=\log 2\int_0^1x\,dx\\
  &=\frac{\log 2}{2}.
  \end{aligned}
  \]

  The value of the integral is \( \frac{\log 2}{2} \).
provenance: written-for-site
steps:
  - The solution identifies the rectangular region and keeps the printed order of integration.
  - The solution evaluates both integrations and states the value of the integral.
verification:
  checks:
    - expr: integrate(x/y, (y, 1, 2), (x, 0, 1))
      expected: "log(2)/2"
:::

::: exercise
id: l7-double-integrals-rectangles.final-2025-q4a
tier: exam
topics: [double-integrals]
examBlock: double-integrals
pastExam:
  year: 2025
  paper: Final
  question: "4a"
  points: 1
statement: |
  [6 points. 35min] Compute the integral

  a) \( \displaystyle \int_0^1 \int_1^2 \sqrt{x}\,y^2\, dydx \)
solution: |
  The domain is the rectangle \(0\leq x\leq1\), \(1\leq y\leq2\), with the order \(dy\,dx\). The integrand \(\sqrt{x}\,y^2\) is a function of \(x\) times a function of \(y\), so the double integral is a product of two single integrals.

  \[
  \begin{aligned}
  I&=\int_0^1\int_1^2\sqrt{x}\,y^2\,dy\,dx\\
  &=\left[\frac{y^3}{3}\right]_1^2\int_0^1\sqrt{x}\,dx\\
  &=\frac73\cdot\frac23=\frac{14}{9}.
  \end{aligned}
  \]

  The value of the integral is \(\frac{14}{9}\).
provenance: written-for-site
steps:
  - The solution identifies the rectangular region and splits the integrand into a function of x times a function of y.
  - The solution evaluates both integrations and states the value of the integral.
verification:
  checks:
    - expr: integrate(sqrt(x)*y**2, (y, 1, 2), (x, 0, 1))
      expected: "14/9"
:::

::: going-deeper
title: Why the double integral is a limit of box volumes
text: |
  Cut the rectangle into small rectangles of area \(\Delta A\), pick a sample point in each, and add up \(f\) at the sample point times \(\Delta A\). Each term is the volume of a thin box. The double integral is the limit of these sums as the pieces shrink. Fubini's theorem says that for a continuous function this limit can be computed by integrating in one variable and then in the other, in either order.
:::

::: sheet-item
id: l7-double-integrals-rectangles.sheet-fubini
category: formula
text: |
  On a rectangle \(R=[a,b]\times[c,d]\), a reasonably nice function satisfies
  \[
  \begin{aligned}
  \iint_R f(x,y)\,dA&=\int_c^d\int_a^b f(x,y)\,dx\,dy\\
  &=\int_a^b\int_c^d f(x,y)\,dy\,dx.
  \end{aligned}
  \]
:::

::: sheet-item
id: l7-double-integrals-rectangles.sheet-da
category: recognition
text: |
  \(dA\) is the area element with no order. The symbol \(dx\,dy\) means the inner integral is in \(x\). The symbol \(dy\,dx\) means the inner integral is in \(y\).
:::

::: sheet-item
id: l7-double-integrals-rectangles.sheet-bounds
category: trap
text: |
  The limits stay with their variable. For \(0\le x\le 1\) and \(0\le y\le 2\), \(\int_0^1\int_0^2 y\,dy\,dx=2\). Swapping the numbers and keeping \(dy\,dx\) gives \(\int_0^2\int_0^1 y\,dy\,dx=1\).
:::

::: exercise
id: l7-double-integrals-rectangles.ex-rect-both-orders
tier: standard
topics: [double-integrals]
statement: |
  Let \(R = [0, 3] \times [0, 2]\). Compute
  \[
  \iint_R \bigl(1 + (x - 1)^2 + 4y^2\bigr)\, dA
  \]
  first in the order \(dy\,dx\) and then in the order \(dx\,dy\), and check that the two values agree.
solution: |
  In the order \(dy\,dx\), hold \(x\) constant. The inner integral is
  \[
  \begin{aligned}
  &\int_0^2 \bigl(1 + (x - 1)^2 + 4y^2\bigr)\, dy\\
  &=2 + 2(x - 1)^2 + \frac{32}{3}.
  \end{aligned}
  \]
  The outer integral uses \(\int_0^3 (x - 1)^2\, dx = \bigl[\tfrac{(x - 1)^3}{3}\bigr]_0^3 = \tfrac{8}{3} + \tfrac{1}{3} = 3\), so
  \[
  \begin{aligned}
  &\int_0^3 \Bigl(2 + 2(x - 1)^2 + \frac{32}{3}\Bigr)\, dx\\
  &=6 + 2 \cdot 3 + 32\\
  &=44.
  \end{aligned}
  \]

  In the order \(dx\,dy\), hold \(y\) constant. The inner integral is
  \[
  \begin{aligned}
  &\int_0^3 \bigl(1 + (x - 1)^2 + 4y^2\bigr)\, dx\\
  &=3 + 3 + 12y^2\\
  &=6 + 12y^2.
  \end{aligned}
  \]
  The outer integral is \(\int_0^2 (6 + 12y^2)\, dy = \bigl[6y + 4y^3\bigr]_0^2 = 12 + 32 = 44\).

  Both orders give \(44\), which is what Fubini's theorem requires on a rectangle.
provenance: written-for-site
steps:
  - The inner integral in the order dy dx equals 2 + 2(x - 1)^2 + 32/3.
  - The outer integral in the order dy dx equals 44.
  - The order dx dy gives the inner integral 6 + 12y^2 and the same value 44.
verification:
  checks:
    - expr: integrate(1 + (x - 1)**2 + 4*y**2, (y, 0, 2), (x, 0, 3))
      expected: "44"
    - expr: integrate(1 + (x - 1)**2 + 4*y**2, (x, 0, 3), (y, 0, 2))
      expected: "44"
    - expr: integrate(1 + (x - 1)**2 + 4*y**2, (y, 0, 2))
      expected: "2 + 2*(x - 1)**2 + Rational(32, 3)"
    - expr: integrate(1 + (x - 1)**2 + 4*y**2, (x, 0, 3))
      expected: "6 + 12*y**2"
:::
