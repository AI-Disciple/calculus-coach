---
id: l2-linear-approximation
lecture: 2
order: 13
title: Linear approximation
prerequisites: [l1-derivative]
sources:
  - { source: handout, section: "6.4", page: 143 }
  - { source: handout, section: "6.4", page: 144 }
  - { source: midterm-app }
examWeight: low
status: reviewed
---

::: section
title: Linear approximation
:::

::: formal-statement
kind: definition
title: Linear approximation
source:
  source: handout
  section: "6.4"
  page: 143
text: |
  The **linear approximation** of \(f\) at \(a\) is the tangent line
  \[
  L(x) = f'(a)(x - a) + f(a).
  \]
  It is useful when \(f\) is differentiable at \(a\) and \(x\) is close to \(a\).
:::

::: plain-explanation
text: |
  \(L(x)\) is the tangent line to the graph of \(f\) at \(x = a\). The slope is \(f'(a)\), and the line passes through the point \((a, f(a))\). When \(x\) stays close to \(a\), the graph stays close to this line, so \(L(x)\) estimates \(f(x)\).
:::

::: visual
kind: taylor
caption: |
  The function is \(\sqrt{x + 4}\) at \(a = 5\). Keep the order at 1 to see the tangent line \(L\), and read the error at the probe point \(x = 6\).
params:
  f: "sqrt(x+4)"
  a: 5
  order: 1
  xmin: -3
  xmax: 10
  probe: 6
:::

::: worked-example
title: Estimating a square root
problem: |
  Estimate \(\sqrt{10}\) from the linear approximation of \(f(x) = \sqrt{x + 4}\) at \(a = 5\).
solution: |
  Let \(f(x) = \sqrt{x + 4}\), and take the base point \(a = 5\).
  \[
  \begin{aligned}
  f(5)&=3,\\
  f'(x)&=1/(2\sqrt{x + 4}),\\
  f'(5)&=1/6,\\
  L(x)&=(x - 5)/6 + 3,\\
  L(6)&=19/6.
  \end{aligned}
  \]
  At \(x = 6\) the approximation gives \(L(6) = 19/6\), which estimates \(f(6) = \sqrt{10}\). The true value \(\sqrt{10}\) is about 3.162, and \(19/6\) is about 3.167. The approximation and the true value agree to within 0.005.
:::

::: guided-example
title: Sine near zero
problem: |
  Find the linear approximation of \(f(x) = \sin x\) at \(a = 0\).
steps:
  - |
    The value at \(0\) is \(\sin 0 = 0\).
  - |
    The derivative of \(\sin x\) is \(\cos x\), so the derivative at \(0\) is \(\cos 0 = 1\).
  - |
    The formula gives \(L(x) = 1 \cdot (x - 0) + 0 = x\).
:::

::: key-points
text: |
  - The linear approximation of \(f\) at \(a\) is the tangent line \(L(x) = f'(a)(x - a) + f(a)\).
  - It is useful when \(f\) is differentiable at \(a\) and \(x\) is close to \(a\).
:::

::: concept-question
id: l2-linear-approximation.q-0abc53fb
question: |
  Find the equation of the tangent to \(f(x) = 5 - x - 3x^{2}\) at \(x = 2\).
options:
  - text: |
      \(y = -13x + 17\)
    correct: true
  - text: |
      \(y = -13x - 9\)
  - text: |
      \(y = -9x + 17\)
  - text: |
      \(y = 13x - 35\)
explanation: |
  The value is \(f(2) = -9\) and the derivative is \(f'(x) = -1 - 6x\), so \(f'(2) = -13\). The tangent is \(y = -9 - 13(x - 2) = -13x + 17\).
:::

::: concept-question
id: l2-linear-approximation.q-fa081de3
question: |
  Which formula is the linear approximation of \(f\) at \(a\)?
options:
  - text: |
      \(L(x) = f'(a)(x - a) + f(a)\)
    correct: true
  - text: |
      \(L(x) = f'(x)(x - a) + f(x)\)
  - text: |
      \(L(x) = f(a)(x - a) + f'(a)\)
  - text: |
      \(L(x) = f'(a)(x - a) - f(a)\)
explanation: |
  The slope is the derivative at \(a\), and the line passes through \((a, f(a))\). The linear approximation is \(L(x) = f'(a)(x - a) + f(a)\).
:::

::: concept-question
id: l2-linear-approximation.q-7d001ead
question: |
  What is the linear approximation of \(\sin x\) at \(0\)?
options:
  - text: |
      \(L(x) = x\)
    correct: true
  - text: |
      \(L(x) = 1\)
  - text: |
      \(L(x) = 0\)
  - text: |
      \(L(x) = 1 - x\)
explanation: |
  The value is \(\sin 0 = 0\), and the derivative at \(0\) is \(\cos 0 = 1\). The linear approximation is \(L(x) = x\).
:::

::: exercise
id: l2-linear-approximation.ex-build
tier: basic
topics: [linear-approximation]
statement: |
  Let \(f(x) = x^{2} + 2x\). Build the linear approximation \(L\) at \(a = 1\), and evaluate \(L(2)\).
solution: |
  Let \(f(x) = x^{2} + 2x\), and take the point \(a = 1\).
  \[
  \begin{aligned}
  f(1)&=3,\\
  f'(x)&=2x + 2,\\
  f'(1)&=4,\\
  L(x)&=4(x - 1) + 3 = 4x - 1.
  \end{aligned}
  \]
  At \(x = 2\) the value is \(L(2) = 7\).
provenance: written-for-site
steps:
  - |
    The value \(f(1) = 3\) and the slope \(f'(1) = 4\).
  - |
    The formula \(L(x) = 4x - 1\), and the value \(L(2) = 7\).
verification:
  checks:
    - expr: 1**2 + 2*1
      expected: "3"
    - expr: diff(x**2 + 2*x, x).subs(x, 1)
      expected: "4"
    - expr: 4*(2 - 1) + 3
      expected: "7"
:::

::: section
title: Differentials
:::

::: formal-statement
kind: definition
title: Differentials
source:
  source: handout
  section: "6.4"
  page: 144
text: |
  Let \(y = f(x)\) be differentiable. The **differential** of \(y\) is
  \[
  dy = f'(x)\, dx,
  \]
  where \(dx\) is a new independent variable (Definition 6.4.3). If \(dx = \Delta x\), then \(dy = f'(a)\, dx\) approximates \(\Delta y = f(x) - f(a)\).
:::

::: plain-explanation
text: |
  The symbol \(dx\) is a change in the input, and you may choose its size. Multiplying by the derivative produces \(dy\), the change in output along the tangent. For a step from \(a\) to a nearby \(x\), the increment is \(\Delta x = x - a\) and the true change in the function is \(\Delta y = f(x) - f(a)\). Set \(dx = \Delta x\) and read the derivative at \(a\). Then \(dy = L(x) - f(a)\), the vertical change along the tangent, and that change approximates \(\Delta y\).
:::

::: trap
text: |
  The differential \(dy\) approximates the increment \(\Delta y\). Treating \(dy = \Delta y\) as an equality fails. Take \(f(x) = x^{4}\), the point \(a = 1\) and the increment \(dx = 1/2\).
  \[
  \begin{aligned}
  f'(x)&=4x^{3},\\
  f'(1)&=4,\\
  dy&=f'(1) \cdot (1/2) = 2,\\
  f(1.5)&=5.0625,\\
  \Delta y&=f(1.5) - f(1)\\
  &=5.0625 - 1 = 4.0625.
  \end{aligned}
  \]
  The values \(2\) and \(4.0625\) are not equal.
:::

::: key-points
text: |
  - If \(dx = \Delta x\), then \(dy = f'(a)\, dx\) approximates \(\Delta y = f(x) - f(a)\).
  - The usual slip treats \(dy = \Delta y\) as an equality. For \(f(x) = x^{4}\) at \(a = 1\) with \(dx = 1/2\), \(dy = 2\) and \(\Delta y = 4.0625\), so the two differ.
:::

::: going-deeper
title: Paint on a large sphere
text: |
  A coat of paint \(0.02\) cm thick covers a sphere of diameter \(40\) m. The radius is \(r = 20\) m. The thickness \(0.02\) cm is \(0.0002\) m, so \(dr = 0.0002\) m. The volume of a sphere is \(V = \frac{4}{3}\pi r^{3}\), and its differential is
  \[
  dV = 4\pi r^{2}\, dr.
  \]
  Substituting the radius and the thickness gives
  \[
  dV = 4\pi (20)^{2} (0.0002) = 8\pi/25.
  \]
  The volume is \(8\pi/25\) cubic metres, about \(1.005\) m\(^{3}\).
:::

::: concept-question
id: l2-linear-approximation.q-c9b24cfb
question: |
  For a differentiable \(f\), with \(dx = \Delta x\), which statement holds?
options:
  - text: |
      \(dy\) approximates \(\Delta y = f(x) - f(a)\).
    correct: true
  - text: |
      \(dy = \Delta y\) for every differentiable \(f\).
  - text: |
      \(dy = f''(x)\, dx\).
  - text: |
      \(dy = f(a) + dx\).
explanation: |
  With \(dx = \Delta x\), the differential \(dy = f'(a)\, dx\) is the change along the tangent. It approximates the true change \(\Delta y = f(x) - f(a)\).
:::

::: exercise
id: l2-linear-approximation.ex-dy-delta
number: "6.4 exercise 2"
tier: standard
topics: [linear-approximation, differentials]
statement: |
  Let \(f(x) = \sqrt{x}\), with \(a = 1\) and \(dx = \Delta x = 1/10\). Compute \(dy\) and \(\Delta y\), and show that they differ.
solution: |
  Let \(f(x) = \sqrt{x}\), with base point \(a = 1\) and increment \(dx = \Delta x = 1/10\).
  \[
  \begin{aligned}
  f'(x)&=1/(2\sqrt{x}),\\
  f'(1)&=1/2,\\
  dy&=(1/2) \cdot (1/10) = 1/20,\\
  \Delta y&=f(11/10) - f(1)\\
  &=\sqrt{11/10} - 1.
  \end{aligned}
  \]
  The value \(dy\) is \(0.05\), and \(\Delta y\) is about \(0.04881\). If the two were equal, then \(\sqrt{11/10}\) would equal \(21/20\). Squaring both sides and clearing the denominator leaves
  \[
  400 \cdot (11/10) - 441 = -1.
  \]
  The two changes differ.
provenance: written-for-site
steps:
  - |
    The slope \(f'(1) = 1/2\) and the differential \(dy = 1/20\).
  - |
    The increment \(\Delta y = \sqrt{11/10} - 1\).
  - |
    The cleared comparison \(400 \cdot (11/10) - 441 = -1\), so the two changes differ.
verification:
  checks:
    - expr: Rational(1, 2) * Rational(1, 10)
      expected: Rational(1, 20)
    - expr: sqrt(Rational(11, 10)) - 1
      expected: sqrt(11)/sqrt(10) - 1
    - expr: 400 * Rational(11, 10) - 441
      expected: "-1"
:::

::: exercise
id: l2-linear-approximation.ex-sqrt10
tier: exam
topics: [linear-approximation]
statement: |
  Use the linear approximation of \(f(x) = \sqrt{x + 4}\) at \(a = 5\) to estimate \(\sqrt{10}\). Give the estimate \(L(6)\) and the error \(\sqrt{10} - 19/6\).
solution: |
  Let \(f(x) = \sqrt{x + 4}\), and take the point \(a = 5\).
  \[
  \begin{aligned}
  f(5)&=3,\\
  f'(x)&=1/(2\sqrt{x + 4}),\\
  f'(5)&=1/6,\\
  L(x)&=(x - 5)/6 + 3,\\
  L(6)&=19/6.
  \end{aligned}
  \]
  At \(x = 6\) this gives \(L(6) = 19/6\), the estimate of \(\sqrt{10}\). The error is
  \[
  \sqrt{10} - 19/6 = (6\sqrt{10} - 19)/6.
  \]
provenance: handout-answer
steps:
  - |
    The value \(f(5) = 3\) and the slope \(f'(5) = 1/6\).
  - |
    The estimate \(L(6) = 19/6\).
  - |
    The error \((6\sqrt{10} - 19)/6\).
verification:
  checks:
    - expr: sqrt(5 + 4)
      expected: "3"
    - expr: diff(sqrt(x + 4), x).subs(x, 5)
      expected: Rational(1, 6)
    - expr: (6 - 5)/6 + 3
      expected: Rational(19, 6)
    - expr: sqrt(10) - Rational(19, 6)
      expected: (6*sqrt(10) - 19)/6
:::

::: sheet-item
id: l2-linear-approximation.sheet-tangent
category: formula
text: |
  The linear approximation of \(f\) at \(a\) is the tangent line \(L(x) = f'(a)(x - a) + f(a)\).
:::

::: exercise
id: l2-linear-approximation.ex-linear-trig-estimates
tier: standard
topics: [linear-approximation]
statement: |
  (a) Find the linear approximation of \(\sin x\) at \(a = 0\), and the linear approximation of \(\cos x\) at \(a = 0\).

  (b) Use them to estimate \(\sin(0.1)\) and \(\cos(0.1)\).

  (c) The true values are \(\sin(0.1) = 0.0998334\ldots\) and \(\cos(0.1) = 0.9950042\ldots\). Find the two errors and say which estimate is worse.
solution: |
  (a) For \(\sin x\), the value at \(0\) is \(\sin 0 = 0\) and the derivative at \(0\) is \(\cos 0 = 1\), so \(L_{\sin}(x) = x\). For \(\cos x\), the value at \(0\) is \(\cos 0 = 1\) and the derivative at \(0\) is \(-\sin 0 = 0\), so \(L_{\cos}(x) = 1\).

  (b) The estimates are \(L_{\sin}(0.1) = 0.1\) and \(L_{\cos}(0.1) = 1\).

  (c)
  \[
  \begin{aligned}
  \text{sine error}&=0.1 - 0.0998334\ldots\\
  &= 0.000167 \approx 1.7 \times 10^{-4},\\
  \text{cosine error}&=1 - 0.9950042\ldots\\
  &= 0.004996 \approx 5.0 \times 10^{-3}.
  \end{aligned}
  \]
  The cosine estimate is worse, by a factor of about \(30\).

  The tangent to \(\cos x\) at \(0\) is the horizontal line \(y = 1\), because the slope is \(0\). The graph of \(\cos x\) bends down from this line, and at \(x = 0.1\) it has already dropped by about \(0.005\). The tangent to \(\sin x\) at \(0\) has slope \(1\), and the graph stays much closer to it for small \(x\).
provenance: written-for-site
steps:
  - \(L_{\sin}(x) = x\) and \(L_{\cos}(x) = 1\).
  - Estimates \(0.1\) and \(1\).
  - Errors about \(1.7 \times 10^{-4}\) and \(5.0 \times 10^{-3}\), so the cosine estimate is worse.
verification:
  checks:
    - expr: diff(sin(x), x).subs(x, 0)
      expected: "1"
    - expr: diff(cos(x), x).subs(x, 0)
      expected: "0"
    - expr: floor(10**7*(Rational(1, 10) - sin(Rational(1, 10))))
      expected: "1665"
    - expr: floor(10**6*(1 - cos(Rational(1, 10))))
      expected: "4995"
:::

::: exercise
id: l2-linear-approximation.ex-linear-differentials-gap-paint
tier: standard
topics: [linear-approximation, differentials]
statement: |
  (a) For \(f(x) = x^{4}\) at \(a = 1\) with \(dx = \Delta x = \frac{1}{2}\), compute \(dy\) and \(\Delta y\).

  (b) Repeat (a) with \(dx = \Delta x = \frac{1}{10}\), and say which of the two cases has \(dy\) closer to \(\Delta y\) in relative terms.

  (c) A coat of paint \(0.02\) cm thick covers a sphere of diameter \(40\) m. Use a differential to estimate the volume of the paint. Then find the exact volume of the coat, and compare the two.
solution: |
  (a) The derivative is \(f'(x) = 4x^{3}\), so \(f'(1) = 4\). The differential is \(dy = 4 \cdot \frac{1}{2} = 2\). The true change is
  \[
  \begin{aligned}
  \Delta y&=f\bigl(\frac{3}{2}\bigr) - f(1)\\
  &=\frac{81}{16} - 1 = \frac{65}{16} = 4.0625.
  \end{aligned}
  \]
  The two values differ.

  (b) Now \(dy = 4 \cdot \frac{1}{10} = \frac{2}{5}\), and \(\Delta y = \bigl(\frac{11}{10}\bigr)^{4} - 1 = \frac{4641}{10000} = 0.4641\). The ratio \(dy / \Delta y\) is about \(0.86\) here and about \(0.49\) in (a). The smaller increment gives the closer match.

  (c) The radius is \(r = 20\) m, and the thickness \(0.02\) cm is \(0.0002\) m, so \(dr = 0.0002\) m. The volume of a sphere is \(V = \frac{4}{3}\pi r^{3}\), and its differential is \(dV = 4\pi r^{2}\, dr\). Substituting gives
  \[
  \begin{aligned}
  dV&=4\pi (20)^{2} (0.0002)\\
  &=\frac{8\pi}{25} \text{ m}^{3}\\
  &\approx 1.0053 \text{ m}^{3}.
  \end{aligned}
  \]
  The exact volume is \(\Delta V = \frac{4}{3}\pi\bigl((20.0002)^{3} - 20^{3}\bigr)\). Expanding \((20 + \varepsilon)^{3}\) with \(\varepsilon = 0.0002\) gives
  \[
  \Delta V = \frac{4}{3}\pi\bigl(3 \cdot 20^{2}\varepsilon + 3 \cdot 20\,\varepsilon^{2} + \varepsilon^{3}\bigr).
  \]
  The first term inside is \(0.24\), and \(\frac{4}{3}\pi \cdot 0.24 = dV\). The other two terms add a relative amount \(\frac{\varepsilon}{r} + \frac{\varepsilon^{2}}{3r^{2}}\), which is about \(10^{-5}\). So \(\Delta V\) and \(dV\) differ by about one part in \(10^{5}\), and the differential is an excellent estimate here.
provenance: written-for-site
steps:
  - 'Part (a): \(dy = 2\) and \(\Delta y = 65/16\).'
  - 'Part (b): \(dy = 2/5\) and \(\Delta y = 4641/10000\), with a closer match.'
  - 'Part (c): \(dV = 8\pi/25\) cubic metres, and \(\Delta V / dV - 1\) is about \(10^{-5}\).'
verification:
  checks:
    - expr: diff(x**4, x).subs(x, 1)*Rational(1, 2)
      expected: "2"
    - expr: Rational(3, 2)**4 - 1
      expected: Rational(65, 16)
    - expr: diff(x**4, x).subs(x, 1)*Rational(1, 10)
      expected: Rational(2, 5)
    - expr: Rational(11, 10)**4 - 1
      expected: Rational(4641, 10000)
    - expr: 4*pi*20**2*Rational(2, 10000)
      expected: 8*pi/25
    - expr: (Rational(4, 3)*pi*(Rational(200002, 10000)**3 - 20**3))/(4*pi*20**2*Rational(2, 10000)) - 1
      expected: Rational(1, 100000) + Rational(1, 30000000000)
:::
