---
id: l3-riemann-sums
lecture: 3
order: 4
title: Riemann sums and the definite integral
prerequisites: [l1-functions]
sources:
  - { source: handout, section: "7.1", page: 149 }
  - { source: lecture-notes-3, page: 3 }
  - { source: handout, section: "7.2", page: 155 }
examWeight: low
notation: |
  Widths and sample points are written with ordinary differences, and the integral sign denotes the limit of the sums. The panel width is \((b-a)/n\). The left sample point is \(a + (b-a)j/n\).
status: reviewed
---

::: section
title: Left Riemann sum
:::

::: formal-statement
kind: definition
title: Left Riemann sum
source: { source: lecture-notes-3, page: 3 }
text: |
  For \(x\) in \([a, b]\), \(\int_a^b f(x)\,dx\) is the area under the curve and above the x-axis. The **left Riemann sum** is
  \[
  \lim_{n\to\infty} \frac{b-a}{n} \sum_{j=0}^{n-1} f\bigl(a + \frac{b-a}{n} j\bigr).
  \]
:::

::: plain-explanation
text: |
  Each term of the sum is a **rectangle**:

  - The width of the rectangle is \(\frac{b-a}{n}\).
  - The height is the function value at the left end of the subinterval.

  As \(n\) grows, the rectangles fill the region under the curve and above the x-axis.
:::

::: visual
kind: riemann
caption: |
  Left rectangles for \(y = 3x\) on \([0, 2]\). Increase \(n\) and watch the gap between the sum and the integral shrink.
params:
  f: "3x"
  a: 0
  b: 2
  n: 4
  rule: left
:::

::: worked-example
title: Area under a line
problem: |
  Let \(x > 0\). Find the area under \(y = 3x\) and above the x-axis on \([0, x]\), using left rectangles.
solution: |
  Split \([0, x]\) into \(n\) panels of width \(\frac{x}{n}\). The left endpoint of index \(i\) is \(\frac{ix}{n}\), for \(i = 0, \ldots, n-1\). The height there is \(\frac{3ix}{n}\). The area of that rectangle is
  \[
  \frac{x}{n} \cdot \frac{3ix}{n} = \frac{3ix^2}{n^2}.
  \]

  The rectangle of index \(0\) has height \(0\), so its area is \(0\). Let \(S_n\) be the sum of the areas. Then
  \[
  S_n = \sum_{i=1}^{n-1} \frac{3ix^2}{n^2}.
  \]
  The sample points \(\frac{ix}{n}\) for \(i = 1, \ldots, n-1\) are the right endpoints of the first \(n-1\) panels. The remaining right-endpoint panel sits at \(x\) and has area \(\frac{3x^2}{n}\). Adding that area gives \(S_n + \frac{3x^2}{n}\). The added term tends to \(0\) as \(n \to \infty\), so the two sums have the same limit.

  The sum of the integers from \(1\) to \(n-1\) equals \(\frac{(n-1)n}{2}\). Therefore
  \[
  \begin{aligned}
  S_n&=\frac{3x^2}{n^2} \cdot \frac{(n-1)n}{2}\\
  &=\frac{3x^2}{2} \cdot \frac{n-1}{n}\\
  &=\frac{3x^2}{2}\left(1 - \frac{1}{n}\right).
  \end{aligned}
  \]
  The limit of \(S_n\) as \(n \to \infty\) is \(\frac{3x^2}{2}\). That limit is the area under \(y = 3x\) on \([0, x]\).
:::

::: key-points
text: |
  - The left Riemann sum of \(f\) on \([a, b]\) adds rectangles of width \(\frac{b-a}{n}\) and height \(f\bigl(a + \frac{b-a}{n} j\bigr)\), for \(j = 0, \ldots, n-1\). Its limit as \(n \to \infty\) is the area under the curve and above the x-axis.
  - For \(y = 3x\) and \(x > 0\), the area on \([0, x]\) is \(\frac{3x^2}{2}\).
:::

::: concept-question
id: l3-riemann-sums.q-fb102af0
question: |
  On the interval \([a, b]\), what is the factor \(\frac{b-a}{n}\) in the left Riemann sum?
options:
  - text: |
      The height of each rectangle.
  - text: |
      The width of each panel.
    correct: true
  - text: |
      The sample point of index \(j\).
  - text: |
      The number of panels.
explanation: |
  The length of \([a, b]\) is \(b-a\). Splitting that length into \(n\) panels gives each panel the width \(\frac{b-a}{n}\). That factor multiplies the sum of the heights.
:::

::: concept-question
id: l3-riemann-sums.q-96b150f0
question: |
  What is the area under \(y = 3x\) and above the x-axis on \([0, 1]\)?
options:
  - text: |
      \(3\)
  - text: |
      \(\frac{1}{2}\)
  - text: |
      \(\frac{3}{2}\)
    correct: true
  - text: |
      \(1\)
explanation: |
  The area under \(y = 3x\) on \([0, x]\) equals \(\frac{3x^2}{2}\), for \(x > 0\). At \(x = 1\) the area equals \(\frac{3}{2}\).
:::

::: exercise
id: l3-riemann-sums.basic-linear
tier: basic
topics: [riemann-sums]
statement: |
  The sum inside the limit is a Riemann sum. Compute
  \[
  \lim_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}\frac{k}{n}.
  \]
solution: |
  The factor \(\frac{1}{n}\) is the panel width on \([0, 1]\). The sample point of index \(k\) is \(\frac{k}{n}\). The sum is the right-endpoint Riemann sum of \(f(x) = x\) on \([0, 1]\).

  The limit equals
  \[
  \int_0^1 x\,dx = \left[\frac{x^2}{2}\right]_0^1 = \frac{1}{2}.
  \]
provenance: written-for-site
steps:
  - The width is \(\frac{1}{n}\) and the sample point is \(\frac{k}{n}\).
  - The sum is the right-endpoint Riemann sum for \(x\) on \([0, 1]\).
  - The integral \(\int_0^1 x\,dx\) equals \(\frac{1}{2}\).
verification:
  checks:
    - expr: integrate(x, (x, 0, 1))
      expected: Rational(1, 2)
:::

::: section
title: Definite integral
:::

::: formal-statement
kind: definition
title: Definite integral
source: { source: handout, section: "7.2", page: 155 }
text: |
  The **definite integral** \(\int_a^b f(x)\,dx\) is that limit when the limit exists.
:::

::: visual
kind: riemann
caption: |
  Right rectangles for \(y = x^2\) on \([0, 1]\). Increase \(n\) and watch the sum approach the integral.
params:
  f: "x^2"
  a: 0
  b: 1
  n: 4
  rule: right
:::

::: guided-example
title: Right-endpoint sum for a square
problem: |
  Compute
  \[
  \lim_{n\to\infty} \frac{1}{n}\sum_{k=1}^{n}\left(\frac{k}{n}\right)^2.
  \]
steps:
  - |
    The factor \(\frac{1}{n}\) is the width of each panel on \([0, 1]\). The sample point of index \(k\) is \(\frac{k}{n}\).
  - |
    The sum is the right-endpoint Riemann sum for \(x^2\) on \([0, 1]\).
  - |
    The limit equals \(\int_0^1 x^2\,dx\).
  - |
    An antiderivative of \(x^2\) is \(\frac{x^3}{3}\). Evaluating from \(0\) to \(1\) gives \(\frac{1}{3}\).
:::

::: trap
text: |
  A Riemann sum on \([0, 1]\) multiplies by the width \(\frac{1}{n}\). The sum of the heights is \(\sum_{k=1}^{n}\left(\frac{k}{n}\right)^2\). The sum of the first \(n\) squares is \(\frac{n(n+1)(2n+1)}{6}\). Dividing by \(n^2\) gives
  \[
  \begin{aligned}
  &\sum_{k=1}^{n}\left(\frac{k}{n}\right)^2\\
  &=\frac{(n+1)(2n+1)}{6n}\\
  &=\frac{n}{3} + \frac{1}{2} + \frac{1}{6n}.
  \end{aligned}
  \]
  This quantity grows like \(\frac{n}{3}\). It has no finite limit.

  The Riemann sum is that sum of heights multiplied by the width \(\frac{1}{n}\):
  \[
  \begin{aligned}
  &\frac{1}{n}\sum_{k=1}^{n}\left(\frac{k}{n}\right)^2\\
  &=\frac{(n+1)(2n+1)}{6n^2}\\
  &=\frac{1}{3} + \frac{1}{2n} + \frac{1}{6n^2}.
  \end{aligned}
  \]
  The product tends to \(\frac{1}{3}\).
:::

::: going-deeper
title: Three choices of sample point
text: |
  For a continuous function on a closed bounded interval, the left-endpoint sums, the right-endpoint sums and the midpoint sums have the same limit. That common limit is the definite integral.
:::

::: key-points
text: |
  - The definite integral \(\int_a^b f(x)\,dx\) is the limit of the Riemann sums when the limit exists.
  - The sum \(\frac{1}{n}\sum_{k=1}^{n} f\bigl(\frac{k}{n}\bigr)\) is a right-endpoint Riemann sum on \([0, 1]\), and its limit is \(\int_0^1 f(x)\,dx\).
  - The usual slip drops the width \(\frac{1}{n}\) and studies \(\sum_{k=1}^{n}\left(\frac{k}{n}\right)^2\), which grows like \(\frac{n}{3}\) and has no finite limit. With the width \(\frac{1}{n}\) the limit is \(\frac{1}{3}\).
:::

::: concept-question
id: l3-riemann-sums.q-fda1a40b
question: |
  What is the value of \(\lim_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}\left(\frac{k}{n}\right)^2\)?
options:
  - text: |
      \(\frac{1}{2}\)
  - text: |
      \(\frac{1}{3}\)
    correct: true
  - text: |
      \(1\)
  - text: |
      \(\frac{\pi}{4}\)
explanation: |
  The sum is the right-endpoint Riemann sum of \(x^2\) on \([0, 1]\). Its limit equals \(\int_0^1 x^2\,dx\). That integral equals \(\frac{1}{3}\).
:::

::: concept-question
id: l3-riemann-sums.q-4458dae7
question: |
  The width of each panel on \([a, b]\) is \(\frac{b-a}{n}\). Which statement is correct?
options:
  - text: |
      The left index \(j\) runs from \(0\) to \(n-1\) and samples \(b\) at \(j = 0\).
  - text: |
      The right index \(k\) runs from \(1\) to \(n\) and samples \(a\) at \(k = n\).
  - text: |
      The left index \(j\) runs from \(0\) to \(n-1\) and samples \(a\) at \(j = 0\). The right index \(k\) runs from \(1\) to \(n\) and samples \(b\) at \(k = n\).
    correct: true
  - text: |
      Both indices run from \(0\) to \(n\) and sample the midpoint of \([a, b]\).
explanation: |
  - The left sample point is \(a + \frac{b-a}{n} j\). At \(j = 0\) this sample equals \(a\).
  - The right sample point is \(a + \frac{b-a}{n} k\). At \(k = n\) this sample equals \(b\).
:::

::: sheet-item
id: l3-riemann-sums.sheet-left-sum
category: formula
text: |
  On \([a, b]\),
  \[
  \int_a^b f(x)\,dx = \lim_{n\to\infty}\frac{b-a}{n}\sum_{j=0}^{n-1} f\Bigl(a + \frac{b-a}{n} j\Bigr),
  \]
  when the limit exists. The width is \(\frac{b-a}{n}\) and the left sample point is \(a + \frac{b-a}{n} j\).
:::

::: sheet-item
id: l3-riemann-sums.sheet-unit-interval
category: recognition
text: |
  The sum \(\frac{1}{n}\sum_{k=1}^{n} f\bigl(\frac{k}{n}\bigr)\) is a right-endpoint Riemann sum for \(f\) on \([0, 1]\).
:::

::: exercise
id: l3-riemann-sums.l6
tier: standard
topics: [riemann-sums]
statement: |
  Compute
  \[
  \lim_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}\left(\frac{k}{n}\right)^2.
  \]
solution: |
  The sum is the right-endpoint Riemann sum of \(f(x)=x^2\) on \([0,1]\), with width \(\frac{1}{n}\) and sample points \(\frac{k}{n}\). The limit equals the integral

  \[
  \int_0^1 x^2\,dx=\left[\frac{x^3}{3}\right]_0^1=\frac{1}{3}.
  \]
provenance: written-for-site
steps:
  - Recognise a right-endpoint Riemann sum for \(x^2\) on \([0,1]\).
  - The limit equals \(\int_0^1 x^2\,dx\).
  - The integral equals \(\frac{1}{3}\).
verification:
  checks:
    - expr: integrate(x**2, (x, 0, 1))
      expected: "1/3"
:::

::: exercise
id: l3-riemann-sums.l7
tier: exam
topics: [riemann-sums]
statement: |
  Compute
  \[
  \lim_{n\to\infty}\sum_{k=1}^{n}\frac{n}{n^2+k^2}.
  \]
solution: |
  Factor \(n^2\) in the denominator:

  \[
  \frac{n}{n^2+k^2}=\frac{1}{n}\cdot\frac{1}{1+(k/n)^2}.
  \]

  The sum is the right-endpoint Riemann sum of \(\frac{1}{1+x^2}\) on \([0,1]\). The limit equals

  \[
  \int_0^1\frac{1}{1+x^2}\,dx=\big[\arctan x\big]_0^1=\frac{\pi}{4}.
  \]
provenance: written-for-site
steps:
  - Factor the summand as \(\frac{1}{n}\cdot\frac{1}{1+(k/n)^2}\).
  - Recognise the Riemann sum for \(\frac{1}{1+x^2}\) on \([0,1]\).
  - The integral equals \(\frac{\pi}{4}\).
verification:
  checks:
    - expr: integrate(1/(1 + x**2), (x, 0, 1))
      expected: "pi/4"
:::

::: exercise
id: l3-riemann-sums.l8
tier: standard
topics: [riemann-sums]
statement: |
  Compute
  \[
  \lim_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}\sin\left(\frac{k\pi}{n}\right).
  \]
solution: |
  The sum is the right-endpoint Riemann sum of \(\sin(\pi x)\) on \([0,1]\), with width \(\frac{1}{n}\) and sample points \(\frac{k}{n}\). The limit equals

  \[
  \begin{aligned}
  &\int_0^1\sin(\pi x)\,dx\\
  &=\left[-\frac{\cos(\pi x)}{\pi}\right]_0^1\\
  &=-\frac{\cos\pi}{\pi}-\left(-\frac{\cos 0}{\pi}\right)\\
  &=\frac{2}{\pi}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Recognise a right-endpoint Riemann sum for \(\sin(\pi x)\) on \([0,1]\).
  - The limit equals \(\int_0^1\sin(\pi x)\,dx\).
  - The integral equals \(\frac{2}{\pi}\).
verification:
  checks:
    - expr: integrate(sin(pi*x), (x, 0, 1))
      expected: "2/pi"
:::

::: exercise
id: l3-riemann-sums.ex-left-sum-x2
tier: standard
topics: [riemann-sums]
statement: |
  Let \(f(x) = x^2\) on \([1, 3]\).

  - (a) Write the left Riemann sum \(L_n\) with \(n\) panels, and compute it in closed form using \(\sum_{j=0}^{n-1} j = \frac{(n-1)n}{2}\) and \(\sum_{j=0}^{n-1} j^2 = \frac{(n-1)n(2n-1)}{6}\).
  - (b) Find \(\lim_{n\to\infty} L_n\) and compare it with \(\int_1^3 x^2\,dx\).
  - (c) Show that the right Riemann sum \(R_n\) satisfies \(R_n - L_n = \frac{16}{n}\), and deduce \(R_n\) in closed form.
solution: |
  (a) The panel width is \(\frac{3-1}{n} = \frac{2}{n}\) and the left sample point of index \(j\) is \(1 + \frac{2j}{n}\), for \(j = 0, \ldots, n-1\). So
  \[ L_n = \frac{2}{n}\sum_{j=0}^{n-1}\left(1 + \frac{4j}{n} + \frac{4j^2}{n^2}\right). \]
  The three sums are \(n\), \(\frac{4}{n}\cdot\frac{(n-1)n}{2} = 2(n-1)\) and \(\frac{4}{n^2}\cdot\frac{(n-1)n(2n-1)}{6} = \frac{2(n-1)(2n-1)}{3n}\). Hence
  \[
  \begin{aligned}
  L_n&=2 + \frac{4(n-1)}{n}\\
  &\quad+ \frac{4(n-1)(2n-1)}{3n^2}.
  \end{aligned}
  \]
  Expanding, \(\frac{4(n-1)}{n} = 4 - \frac{4}{n}\) and \(\frac{4(2n^2 - 3n + 1)}{3n^2} = \frac{8}{3} - \frac{4}{n} + \frac{4}{3n^2}\). Therefore
  \[ L_n = \frac{26}{3} - \frac{8}{n} + \frac{4}{3n^2}. \]

  (b) The terms \(\frac{8}{n}\) and \(\frac{4}{3n^2}\) tend to \(0\), so \(L_n \to \frac{26}{3}\). The integral is \(\left[\frac{x^3}{3}\right]_1^3 = \frac{27 - 1}{3} = \frac{26}{3}\). The two values agree.

  (c) The right sum uses the sample points \(1 + \frac{2k}{n}\) for \(k = 1, \ldots, n\). Compared with the left sum, the term at \(x = 1\) is dropped and the term at \(x = 3\) is added, and all other terms are shared. So
  \[
  \begin{aligned}
  R_n - L_n&=\frac{2}{n}\bigl(f(3) - f(1)\bigr)\\
  &=\frac{2}{n}(9 - 1) = \frac{16}{n}.
  \end{aligned}
  \]
  Therefore \(R_n = \frac{26}{3} + \frac{8}{n} + \frac{4}{3n^2}\), which also tends to \(\frac{26}{3}\).
provenance: written-for-site
steps:
  - |
    Width \(\frac{2}{n}\), sample points \(1 + \frac{2j}{n}\), and expand the square.
  - |
    Insert the sums of \(1\), \(j\) and \(j^2\) and simplify to \(\frac{26}{3} - \frac{8}{n} + \frac{4}{3n^2}\).
  - |
    The limit is \(\frac{26}{3}\), equal to the integral.
  - |
    Right minus left is \(\frac{2}{n}\bigl(f(3) - f(1)\bigr) = \frac{16}{n}\).
verification:
  checks:
    - expr: simplify(summation((2/n)*(1 + 2*j/n)**2, (j, 0, n - 1)) - (Rational(26,3) - 8/n + Rational(4,3)/n**2))
      expected: 0
    - expr: simplify(summation((2/n)*(1 + 2*j/n)**2, (j, 1, n)) - (Rational(26,3) + 8/n + Rational(4,3)/n**2))
      expected: 0
    - expr: limit(Rational(26,3) - 8/n + Rational(4,3)/n**2, n, oo)
      expected: 26/3
    - expr: integrate(x**2, (x, 1, 3))
      expected: 26/3
:::
