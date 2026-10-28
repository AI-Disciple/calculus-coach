---
id: l3-taylor
lecture: 3
order: 2
title: Taylor polynomials
prerequisites: [l1-derivative-rules, l3-real-powers]
sources:
  - { source: lecture-notes-3, page: 1 }
  - { source: lecture-notes-3, page: 2 }
  - { source: sheet-1, page: 2 }
  - { source: midterm-app }
  - { source: midterm-mock-1, page: 1 }
  - { source: midterm-2024, page: 1 }
examWeight: medium
examWeightNote: A Taylor or limit exercise is on some midterms.
notation: |
  The lecture writes the increment as \(\delta x\) and the remainder as the word small. \(f'\) and \(\frac{d}{dx}\) are the same derivative.
status: reviewed
---

::: formal-statement
kind: theorem
title: Order 1
source:
  source: lecture-notes-3
  page: 1
text: |
  \[ f(x+\delta x) = f(x) + \delta x\, f'(x) + \delta x \cdot \mathrm{small}, \]
  where \(\mathrm{small}\) tends to \(0\) as \(\delta x\) tends to \(0\).
:::

::: key-points
text: |
  - The order-1 expansion is \(f(x+\delta x) = f(x) + \delta x\, f'(x) + \delta x \cdot \mathrm{small}\).
  - The factor \(\mathrm{small}\) tends to \(0\) as \(\delta x\) tends to \(0\).
:::

::: formal-statement
kind: theorem
title: Order n
source:
  source: lecture-notes-3
  page: 1
text: |
  \[
  \begin{aligned}
  f(x+\delta x) &= f(x) + \delta x\, f'(x)\\
  &\quad + \frac{\delta x^2}{2} f''(x)\\
  &\quad + \cdots + \frac{\delta x^n}{n!} f^{(n)}(x)\\
  &\quad + \mathrm{small}\cdot \delta x^n.
  \end{aligned}
  \]
  The factor \(\mathrm{small}\) tends to \(0\) as \(\delta x\) tends to \(0\).
:::

::: plain-explanation
text: |
  The polynomial uses the derivatives of \(f\) at the base point. The word **small** means a factor that goes to \(0\) as \(\delta x\) goes to \(0\). The remainder \(\mathrm{small}\cdot \delta x^n\) is then negligible beside \((\delta x)^n\).

  In the square-root example the base point is \(0\). There the increment \(\delta x\) is the variable itself.
:::

::: visual
kind: taylor
caption: |
  The function is \(\sqrt{1+x}\), expanded about 0. Raise the order and watch the polynomial hug the curve near 0.
params:
  f: "sqrt(1+x)"
  a: 0
  order: 2
  xmin: -0.9
  xmax: 2
:::

::: worked-example
title: sqrt(1+y)
problem: |
  Let \(g(y) = \sqrt{1+y}\). Find the order-2 expansion of \(g\) about \(0\).
solution: |
  The first two derivatives are
  \[
  \begin{aligned}
  g'(y) &= \frac{1}{2\sqrt{1+y}},\\
  g''(y) &= -\frac{1}{4}(1+y)^{-3/2}.
  \end{aligned}
  \]

  Their values at the base point are
  \[
  \begin{aligned}
  g'(0) &= \frac{1}{2},\\
  g''(0) &= -\frac{1}{4}.
  \end{aligned}
  \]

  The order-2 formula at the base point \(0\), with increment \(y\), is
  \[
  \begin{aligned}
  g(y) &= g(0) + y\, g'(0)\\
  &\quad + \frac{y^2}{2} g''(0) + y^2 \cdot \mathrm{small}.
  \end{aligned}
  \]
  The three terms are
  \[
  \begin{aligned}
  \text{constant term}&=g(0)=1,\\
  \text{linear term}&=y \cdot \frac{1}{2}=\frac{y}{2},\\
  \text{quadratic term}&=\frac{y^2}{2} \cdot \left(-\frac{1}{4}\right)=-\frac{y^2}{8}.
  \end{aligned}
  \]

  Therefore
  \[ g(y) = 1 + \frac{y}{2} - \frac{y^2}{8} + y^2 \cdot \mathrm{small}. \]
:::

::: guided-example
title: Order-2 polynomial of e^x
problem: |
  Find the order-2 polynomial of \(e^x\) about \(0\).
steps:
  - |
    Let \(f(x) = e^x\). The value \(f(0)\) equals \(1\).
  - |
    The derivative is \(f'(x) = e^x\). The value \(f'(0)\) equals \(1\).
  - |
    The second derivative is \(f''(x) = e^x\). The value \(f''(0)\) equals \(1\).
  - |
    Divide \(f''(0)\) by \(2!\). The quotient is \(\frac{1}{2}\).
  - |
    The order-2 polynomial is \(1 + x + \frac{x^2}{2}\).
:::

::: trap
text: |
  The order-2 polynomial of \(\sqrt{1+y}\) is
  \[ p(y) = 1 + \frac{y}{2} - \frac{y^2}{8}. \]
  A calculation that drops the \(2\) in the denominator of the second term writes
  \[ q(y) = 1 + \frac{y}{2} - \frac{y^2}{4}. \]
  At \(y = 0\) the two polynomials agree:
  \[
  p(0)=1,\qquad q(0)=1.
  \]

  The derivatives of \(p\) are
  \[
  \begin{aligned}
  p'(y) &= \frac{1}{2} - \frac{y}{4},\\
  p''(y) &= -\frac{1}{4},\\
  p''(0) &= -\frac{1}{4}.
  \end{aligned}
  \]

  The derivatives of \(q\) are
  \[
  \begin{aligned}
  q'(y) &= \frac{1}{2} - \frac{y}{2},\\
  q''(y) &= -\frac{1}{2},\\
  q''(0) &= -\frac{1}{2}.
  \end{aligned}
  \]

  For \(g(y) = \sqrt{1+y}\), the value \(g''(0)\) equals \(-\frac{1}{4}\). The second term \(-\frac{y^2}{4}\) produces the second derivative \(-\frac{1}{2}\) at \(0\). That value does not equal \(g''(0)\). The term \(-\frac{y^2}{4}\) is the wrong second term.
:::

::: key-points
text: |
  - The order-\(n\) expansion is \(f(x+\delta x) = f(x) + \delta x\, f'(x) + \frac{\delta x^2}{2} f''(x) + \cdots + \frac{\delta x^n}{n!} f^{(n)}(x) + \mathrm{small}\cdot \delta x^n\).
  - The factor \(\mathrm{small}\) tends to \(0\) as \(\delta x\) tends to \(0\), so the remainder is negligible beside \((\delta x)^n\).
  - For \(g(y)=\sqrt{1+y}\) about \(0\), the order-2 polynomial is \(1 + \frac{y}{2} - \frac{y^2}{8}\).
  - The usual slip drops the \(2\) in the denominator and writes \(-\frac{y^2}{4}\). That term has second derivative \(-\frac{1}{2}\) at \(0\), but \(g''(0)=-\frac{1}{4}\), so the correct term is \(-\frac{y^2}{8}\).
:::

::: exercise
id: l3-taylor.basic-exo1
number: "Exercice 7"
tier: basic
topics: [taylor]
statement: |
  Find the Taylor polynomials of order \(2\) about \(0\) of \(\sin x\), \(\sqrt{1+x}\), \(\ln(1+x)\), \(e^x\), and \(x^9 + 10x + 1\).
solution: |
  **Sine.** Take \(f(x) = \sin x\).
  \[
  \begin{aligned}
  f(0) &= 0,\\
  f'(x) &= \cos x, & f'(0) &= 1,\\
  f''(x) &= -\sin x, & f''(0) &= 0.
  \end{aligned}
  \]
  The order-2 polynomial is \(x\).

  **Square root.** Take \(g(x) = \sqrt{1+x}\).
  \[
  \begin{aligned}
  g(0) &= 1,\\
  g'(0) &= \frac{1}{2},\\
  g''(0) &= -\frac{1}{4}.
  \end{aligned}
  \]
  The quadratic term is \(\frac{x^2}{2} \cdot \left(-\frac{1}{4}\right)\), which equals \(-\frac{x^2}{8}\). The order-2 polynomial is \(1 + \frac{x}{2} - \frac{x^2}{8}\).

  **Logarithm.** Take \(f(x) = \ln(1+x)\).
  \[
  \begin{aligned}
  f(0) &= 0,\\
  f'(x) &= \frac{1}{1+x}, & f'(0) &= 1,\\
  f''(x) &= -\frac{1}{(1+x)^2}, & f''(0) &= -1.
  \end{aligned}
  \]
  Divide by \(2!\). The coefficient of \(x^2\) is \(-\frac{1}{2}\). The order-2 polynomial is \(x - \frac{x^2}{2}\).

  **Exponential.** Take \(f(x) = e^x\).
  \[
  \begin{aligned}
  f(0) &= 1,\\
  f'(0) &= 1,\\
  f''(0) &= 1.
  \end{aligned}
  \]
  Divide \(f''(0)\) by \(2!\). The quotient is \(\frac{1}{2}\). The order-2 polynomial is \(1 + x + \frac{x^2}{2}\).

  **Polynomial.** Take \(f(x) = x^9 + 10x + 1\). The terms of degree at most \(2\) are \(1 + 10x\). The order-2 polynomial about \(0\) is \(1 + 10x\).
provenance: written-for-site
steps:
  - |
    Record \(f(0)\), \(f'(0)\) and \(f''(0)\) for sine, the square root, the logarithm and the exponential.
  - |
    The coefficient of \(x^2\) is \(f''(0)/2!\).
  - |
    For \(x^9 + 10x + 1\), keep the terms of degree at most \(2\).
  - |
    The five polynomials are \(x\), \(1 + \frac{x}{2} - \frac{x^2}{8}\), \(x - \frac{x^2}{2}\), \(1 + x + \frac{x^2}{2}\) and \(1 + 10x\).
verification:
  checks:
    - expr: series(sin(x), x, 0, 3).removeO()
      expected: x
    - expr: series(sqrt(1+x), x, 0, 3).removeO()
      expected: 1 + x/2 - x**2/8
    - expr: series(log(1+x), x, 0, 3).removeO()
      expected: x - x**2/2
    - expr: series(exp(x), x, 0, 3).removeO()
      expected: 1 + x + x**2/2
    - expr: series(x**9 + 10*x + 1, x, 0, 3).removeO()
      expected: 1 + 10*x
:::

::: exercise
id: l3-taylor.standard-sqrt
tier: standard
topics: [taylor]
statement: |
  Derive the order-2 polynomial of \(\sqrt{1+y}\) about \(0\) from \(g'\) and \(g''\), and state \(g'(0)\) and \(g''(0)\).
solution: |
  Let \(g(y) = \sqrt{1+y}\). The first two derivatives are
  \[
  \begin{aligned}
  g'(y) &= \frac{1}{2\sqrt{1+y}},\\
  g''(y) &= -\frac{1}{4}(1+y)^{-3/2}.
  \end{aligned}
  \]

  Their values at \(0\) are
  \[
  \begin{aligned}
  g'(0) &= \frac{1}{2},\\
  g''(0) &= -\frac{1}{4}.
  \end{aligned}
  \]

  The quadratic term is \(\frac{y^2}{2} g''(0)\). That product equals \(-\frac{y^2}{8}\). The order-2 polynomial is \(1 + \frac{y}{2} - \frac{y^2}{8}\).
provenance: written-for-site
steps:
  - |
    Compute \(g'(y)\) and \(g''(y)\).
  - |
    State \(g'(0) = \frac{1}{2}\) and \(g''(0) = -\frac{1}{4}\).
  - |
    Divide \(g''(0)\) by \(2!\) and assemble the polynomial \(1 + \frac{y}{2} - \frac{y^2}{8}\).
verification:
  checks:
    - expr: diff(sqrt(1+y), y).subs(y, 0)
      expected: Rational(1,2)
    - expr: diff(sqrt(1+y), y, 2).subs(y, 0)
      expected: Rational(-1,4)
    - expr: series(sqrt(1+y), y, 0, 3).removeO()
      expected: 1 + y/2 - y**2/8
:::

::: sheet-item
id: l3-taylor.sheet-order-n
category: formula
text: |
  \[
  \begin{aligned}
  f(x+\delta x) &= f(x) + \delta x\, f'(x)\\
  &\quad + \frac{\delta x^2}{2} f''(x)\\
  &\quad + \cdots + \frac{\delta x^n}{n!} f^{(n)}(x)\\
  &\quad + \mathrm{small}\cdot \delta x^n.
  \end{aligned}
  \]
  The factor small tends to \(0\) as \(\delta x\) tends to \(0\).
:::

::: sheet-item
id: l3-taylor.sheet-sqrt
category: formula
text: |
  For \(g(y) = \sqrt{1+y}\), the order-2 expansion about \(0\) is \(1 + \frac{y}{2} - \frac{y^2}{8} + y^2 \cdot \mathrm{small}\).
:::

::: going-deeper
title: Order 2 of a higher-degree polynomial
text: |
  The order-2 polynomial of a polynomial is the sum of its terms of degree at most \(2\). For \(f(x) = x^9 + 10x + 1\), that sum is \(1 + 10x\).
:::

::: concept-question
id: l3-taylor.q-24b1713b
question: |
  Find the Taylor polynomial of order \(2\) for \(f(x) = \frac{1}{1 - x}\) about \(0\).
options:
  - text: |
      \(1 + x + x^{2}\)
    correct: true
  - text: |
      \(1 - x + x^{2}\)
  - text: |
      \(1 + x + \frac{x^{2}}{2}\)
  - text: |
      \(1 + 2x + 3x^{2}\)
explanation: |
  The derivatives at \(0\) are
  \[
  \begin{aligned}
  f(0) &= 1,\\
  f'(0) &= 1,\\
  f''(0) &= 2,
  \end{aligned}
  \]
  so the order-\(2\) polynomial is \(1 + x + x^{2}\).
:::

::: concept-question
id: l3-taylor.q-82154324
question: |
  Find the Taylor polynomial of order \(2\) for \(f(x) = (1 + x)^{1/3}\) about \(0\).
options:
  - text: |
      \(1 + \frac{x}{3} - \frac{x^{2}}{9}\)
    correct: true
  - text: |
      \(1 + \frac{x}{3} + \frac{x^{2}}{9}\)
  - text: |
      \(1 + \frac{x}{3} - \frac{x^{2}}{3}\)
  - text: |
      \(1 + 3x - 9x^{2}\)
explanation: |
  The binomial expansion gives
  \[
  \begin{aligned}
  &1 + \frac{1}{3}x + \frac{(1/3)(1/3 - 1)}{2}x^{2}\\
  &= 1 + \frac{x}{3} - \frac{x^{2}}{9}.
  \end{aligned}
  \]
:::

::: concept-question
id: l3-taylor.q-a593402a
question: |
  Find the Taylor polynomial of order \(2\) for \(f(x) = \sqrt{1 + x}\) about \(0\).
options:
  - text: |
      \(1 + \frac{x}{2} - \frac{x^{2}}{8}\)
    correct: true
  - text: |
      \(1 + \frac{x}{2} + \frac{x^{2}}{8}\)
  - text: |
      \(1 + \frac{x}{2}\)
  - text: |
      \(1 + x - \frac{x^{2}}{2}\)
explanation: |
  The binomial expansion with exponent \(\frac{1}{2}\) gives
  \[
  \begin{aligned}
  &1 + \frac{x}{2} + \frac{(1/2)(-1/2)}{2}x^{2}\\
  &= 1 + \frac{x}{2} - \frac{x^{2}}{8}.
  \end{aligned}
  \]
:::

::: concept-question
id: l3-taylor.q-59a52121
question: |
  Find the Taylor polynomial of order \(2\) for \(f(x) = x^{9} + 10x + 1\) about \(0\).
options:
  - text: |
      \(1 + 10x\)
    correct: true
  - text: |
      \(1 + 10x + x^{9}\)
  - text: |
      \(x^{9} + 10x\)
  - text: |
      \(1 + 10x + 45x^{2}\)
explanation: |
  A polynomial is its own Taylor series. Keeping terms of order at most \(2\) leaves \(1 + 10x\).
:::

::: concept-question
id: l3-taylor.q-03d4335a
question: |
  Find the Taylor polynomial of order \(2\) for \(f(x) = \sin x\) about \(0\).
options:
  - text: |
      \(x\)
    correct: true
  - text: |
      \(x - \frac{x^{2}}{2}\)
  - text: |
      \(x + \frac{x^{2}}{2}\)
  - text: |
      \(1 + x\)
explanation: |
  The expansion is \(\sin x = x - \frac{x^{3}}{6} + \cdots\), so the order-\(2\) polynomial is \(x\). Sine is odd, so every even-power coefficient vanishes.
:::

::: exercise
id: l3-taylor.midterm-mock-1-ex4.1
statement: |
  Compute the Taylor series to the order \(2\) of \(f(x)=\frac{1}{1-x}\) about \(x=0\).
solution: |
  The derivatives are
  \[
  \begin{aligned}
  f'(x)&=\frac{1}{(1-x)^2},\\
  f''(x)&=\frac{2}{(1-x)^3}.
  \end{aligned}
  \]
  At \(0\) one has
  \[
  \begin{aligned}
  f(0) &= 1,\\
  f'(0) &= 1,\\
  f''(0) &= 2.
  \end{aligned}
  \]
  The Taylor polynomial of order \(2\) is \(1+x+x^2\). Equivalently, \(f(x)=1+x+x^2+O(x^3)\).
steps:
  - Derivatives at \(0\).
  - Polynomial \(1+x+x^2\).
verification:
  checks:
    - expr: (1/(1-x)).subs(x, 0)
      expected: 1
    - expr: diff(1/(1-x), x).subs(x, 0)
      expected: 1
    - expr: diff(1/(1-x), x, 2).subs(x, 0)/2
      expected: 1
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "4.1"
  points: 1
:::

::: exercise
id: l3-taylor.midterm-mock-1-ex4.5
statement: |
  Compute the Taylor series to the order \(2\) of \(f(x)=(1+x)^{1/3}\) about \(x=0\).
solution: |
  The derivatives are
  \[
  \begin{aligned}
  f'(x)&=\frac{1}{3}(1+x)^{-2/3},\\
  f''(x)&=-\frac{2}{9}(1+x)^{-5/3}.
  \end{aligned}
  \]
  At \(0\) one has
  \[
  \begin{aligned}
  f(0) &= 1,\\
  f'(0) &= \frac{1}{3},\\
  f''(0) &= -\frac{2}{9}.
  \end{aligned}
  \]
  The Taylor polynomial of order \(2\) is \(1+\frac{x}{3}-\frac{x^2}{9}\).
steps:
  - Derivatives at \(0\).
  - Polynomial \(1+\frac{x}{3}-\frac{x^2}{9}\).
verification:
  checks:
    - expr: ((1+x)**Rational(1,3)).subs(x, 0)
      expected: 1
    - expr: diff((1+x)**Rational(1,3), x).subs(x, 0)
      expected: Rational(1, 3)
    - expr: diff((1+x)**Rational(1,3), x, 2).subs(x, 0)/2
      expected: Rational(-1, 9)
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "4.5"
  points: 1
:::

::: exercise
id: l3-taylor.midterm-2024-ex2.1
statement: |
  Compute the following limit using Taylor expansion or L'hôpital rule:
  \[ \lim_{x \to 0} \frac{\sqrt{x}}{\tan(x)}. \]
tier: exam
topics:
  - taylor
  - lhopital
pastExam:
  year: 2024
  paper: Midterm
  question: "2.1"
  points: 1
solution: |
  The square root is defined for \(x \ge 0\), so the limit as \(x \to 0\) is read from the right.

  The Taylor expansion \(\tan x = x + O(x^3)\) gives
  \[
  \begin{aligned}
  \frac{\sqrt{x}}{\tan x} &= \frac{\sqrt{x}}{x\bigl(1 + O(x^2)\bigr)}\\
  &= x^{-1/2}\bigl(1 + O(x^2)\bigr).
  \end{aligned}
  \]
  The right-hand limit is \(+\infty\).

  The same conclusion follows from L'Hôpital's rule on the \(0/0\) form from the right: the ratio of derivatives is \(\cos^2(x)/(2\sqrt{x})\), which tends to \(+\infty\).
provenance: written-for-site
steps:
  - The expression is defined near \(0\) only for \(x > 0\).
  - The right-hand limit is \(+\infty\).
verification:
  checks:
    - expr: Limit(tan(x)/sqrt(x), x, 0, dir='+').doit()
      expected: 0
    - expr: Limit(x/tan(x), x, 0, dir='+').doit()
      expected: 1
:::

::: exercise
id: l3-taylor.midterm-2024-ex2.2
statement: |
  Compute the following limit using Taylor expansion or L'hôpital rule:
  \[ \lim_{x \to 0} \frac{\cos(x) - 1}{\sin(x) - \tan(x)}. \]
tier: exam
topics:
  - taylor
  - lhopital
pastExam:
  year: 2024
  paper: Midterm
  question: "2.2"
  points: 1
solution: |
  The expansions are
  \[
  \begin{aligned}
  \cos x - 1 &= -x^2/2 + O(x^4),\\
  \sin x - \tan x &= \bigl(x - x^3/6\bigr)\\
  &\quad - \bigl(x + x^3/3\bigr) + O(x^5)\\
  &= -x^3/2 + O(x^5).
  \end{aligned}
  \]
  They give a ratio that behaves as \(1/x\) near \(0\). The right-hand limit is \(+\infty\) and the left-hand limit is \(-\infty\), so the two-sided limit does not exist.

  Truncating the denominator at order \(2\) leaves a \(0/0\) form. The first surviving term in the denominator is of order \(x^3\).
provenance: written-for-site
steps:
  - Taylor expansions through the first non-zero term in each part.
  - The two-sided limit does not exist.
verification:
  checks:
    - expr: Limit(x*(cos(x)-1)/(sin(x)-tan(x)), x, 0).doit()
      expected: 1
:::

::: exercise
id: l3-taylor.midterm-predicted-b-ex2.1
number: "2.1"
statement: |
  Compute \(\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}\) using Taylor expansion or L'Hôpital's rule.
tier: exam
topics:
  - taylor
  - limits
solution: |
  The expansion \(e^x = 1 + x + \frac{x^2}{2} + O(x^3)\) makes the numerator \(\frac{x^2}{2} + O(x^3)\). Dividing by \(x^2\) gives the limit \(\frac12\). The same value follows by applying L'Hôpital twice to the indeterminate form \(0/0\).
provenance: written-for-site
steps:
  - Expand e^x through order 2, or apply L'Hôpital twice.
  - Obtain 1/2.
verification:
  checks:
    - expr: limit((exp(x) - 1 - x)/x**2, x, 0)
      expected: 1/2
:::

::: exercise
id: l3-taylor.midterm-predicted-b-ex2.2
number: "2.2"
statement: |
  Compute \(\displaystyle\lim_{x \to 0} \frac{\tan x - x}{x^3}\) using Taylor expansion or L'Hôpital's rule.
tier: exam
topics:
  - taylor
  - limits
solution: |
  The expansion \(\tan x = x + \frac{x^3}{3} + O(x^5)\) makes the numerator \(\frac{x^3}{3} + O(x^5)\). Dividing by \(x^3\) gives the limit \(\frac13\).
provenance: written-for-site
steps:
  - Expand tan x through order 3.
  - Obtain 1/3.
verification:
  checks:
    - expr: limit((tan(x) - x)/x**3, x, 0)
      expected: 1/3
:::

::: exercise
id: l3-taylor.ex-tan-order-3
tier: standard
topics: [taylor, limits]
statement: |
  (a) Compute \(f(0)\), \(f'(0)\), \(f''(0)\) and \(f'''(0)\) for \(f(x) = \tan x\), and write the Taylor polynomial of order \(3\) of \(\tan x\) about \(0\).

  (b) Use it, together with the polynomial \(x - \frac{x^3}{6}\) of \(\sin x\) of order \(3\), to compute
  \[ \lim_{x \to 0} \frac{\tan x - \sin x}{x^3}. \]
solution: |
  (a) The function is \(f(x) = \tan x\), and \(f(0) = 0\). The first derivative is \(f'(x) = \sec^2 x = 1 + \tan^2 x\), so \(f'(0) = 1\).

  The second derivative is \(f''(x) = 2\tan x\,\sec^2 x\), so \(f''(0) = 0\).

  The third derivative follows from the product rule:
  \[
  \begin{aligned}
  f'''(x) &= 2\sec^2 x\cdot\sec^2 x\\
  &\quad + 2\tan x\cdot 2\sec^2 x\tan x\\
  &= 2\sec^4 x + 4\tan^2 x\,\sec^2 x.
  \end{aligned}
  \]
  At \(0\), \(\sec 0 = 1\) and \(\tan 0 = 0\), so \(f'''(0) = 2\).

  The order-3 polynomial is
  \[ 0 + x\cdot 1 + \frac{x^2}{2}\cdot 0 + \frac{x^3}{3!}\cdot 2 = x + \frac{x^3}{3}. \]

  (b) Tangent and sine are odd functions, so their next terms after order \(3\) have order \(5\). Subtracting the two polynomials gives
  \[
  \begin{aligned}
  \tan x - \sin x &= \left(x + \frac{x^3}{3}\right) - \left(x - \frac{x^3}{6}\right)\\
  &\quad + x^3\cdot\mathrm{small}\\
  &= \frac{x^3}{2} + x^3\cdot\mathrm{small}.
  \end{aligned}
  \]
  The terms \(x\) cancel, so the first surviving term has order \(3\). Dividing by \(x^3\) gives \(\frac{1}{2} + \mathrm{small}\), and the limit is \(\frac{1}{2}\).
provenance: written-for-site
steps:
  - |
    Evaluate \(f\), \(f'\), \(f''\), \(f'''\) at \(0\): the values are \(0, 1, 0, 2\).
  - |
    Assemble the order-3 polynomial \(x + \frac{x^3}{3}\).
  - |
    Subtract the polynomial of \(\sin x\). The terms of order \(1\) cancel and \(\frac{x^3}{2}\) remains.
  - |
    Divide by \(x^3\). The limit is \(\frac{1}{2}\).
verification:
  checks:
    - expr: diff(tan(x), x, 2).subs(x, 0)
      expected: 0
    - expr: diff(tan(x), x, 3).subs(x, 0)
      expected: 2
    - expr: series(tan(x), x, 0, 4).removeO()
      expected: x + x**3/3
    - expr: limit((tan(x) - sin(x))/x**3, x, 0)
      expected: 1/2
:::

::: exercise
id: l3-taylor.ex-binomial-limits
tier: standard
topics: [taylor, limits]
statement: |
  The binomial expansion of order \(2\) about \(0\) is
  \[
  \begin{aligned}
  (1+x)^{\alpha} &= 1 + \alpha x\\
  &\quad + \frac{\alpha(\alpha - 1)}{2}x^2 + x^2\cdot\mathrm{small}.
  \end{aligned}
  \]

  (a) Compute
  \[ \lim_{x \to 0} \frac{\sqrt{1+x} + \sqrt{1-x} - 2}{x^2}. \]

  (b) Compute
  \[ \lim_{x \to 0} \frac{(1+x)^{1/3}(1-x)^{1/3} - 1}{x^2}. \]
solution: |
  (a) With \(\alpha = \frac{1}{2}\), \(\frac{\alpha(\alpha-1)}{2} = -\frac{1}{8}\), so
  \[ \sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + x^2\cdot\mathrm{small}. \]
  Replacing \(x\) by \(-x\) changes the sign of the linear term only:
  \[ \sqrt{1-x} = 1 - \frac{x}{2} - \frac{x^2}{8} + x^2\cdot\mathrm{small}. \]
  The sum minus \(2\) is \(-\frac{x^2}{4} + x^2\cdot\mathrm{small}\). The linear terms cancel and the constants cancel with \(-2\). Dividing by \(x^2\) gives \(-\frac{1}{4}\) in the limit.

  (b) With \(\alpha = \frac{1}{3}\), \(\frac{\alpha(\alpha-1)}{2} = \frac{(1/3)(-2/3)}{2} = -\frac{1}{9}\), so
  \[
  \begin{aligned}
  (1+x)^{1/3} &= 1 + \frac{x}{3} - \frac{x^2}{9} + x^2\cdot\mathrm{small},\\
  (1-x)^{1/3} &= 1 - \frac{x}{3} - \frac{x^2}{9} + x^2\cdot\mathrm{small}.
  \end{aligned}
  \]
  Multiply the two expansions and keep the terms up to order \(2\):

  - The constant term is \(1\).
  - The terms of order \(1\) are \(\frac{x}{3} - \frac{x}{3} = 0\).
  - The terms of order \(2\) are \(-\frac{x^2}{9}\) from the first factor, \(-\frac{x^2}{9}\) from the second factor, and the cross term \(\frac{x}{3}\cdot\left(-\frac{x}{3}\right) = -\frac{x^2}{9}\). Their sum is \(-\frac{x^2}{3}\).

  Hence
  \[
  \begin{aligned}
  &(1+x)^{1/3}(1-x)^{1/3} - 1\\
  &= -\frac{x^2}{3} + x^2\cdot\mathrm{small},
  \end{aligned}
  \]
  and the limit is \(-\frac{1}{3}\).

  Check for (b): the product equals \((1-x^2)^{1/3}\), and the substitution \(u = -x^2\) in \(1 + \frac{u}{3}\) gives \(1 - \frac{x^2}{3}\), the same polynomial.
provenance: written-for-site
steps:
  - |
    Write the order-2 polynomials of \(\sqrt{1+x}\) and \(\sqrt{1-x}\). The limit in (a) is \(-\frac{1}{4}\).
  - |
    Write the order-2 polynomials of \((1+x)^{1/3}\) and \((1-x)^{1/3}\).
  - |
    Multiply them, keeping the cross term \(-\frac{x^2}{9}\). The order-2 coefficient is \(-\frac{1}{3}\).
  - |
    The limit in (b) is \(-\frac{1}{3}\).
verification:
  checks:
    - expr: series(sqrt(1+x), x, 0, 3).removeO()
      expected: 1 + x/2 - x**2/8
    - expr: series(sqrt(1-x), x, 0, 3).removeO()
      expected: 1 - x/2 - x**2/8
    - expr: limit((sqrt(1+x) + sqrt(1-x) - 2)/x**2, x, 0)
      expected: -1/4
    - expr: expand((1 + x/3 - x**2/9)*(1 - x/3 - x**2/9))
      expected: 1 - x**2/3 + x**4/81
    - expr: limit(((1+x)**Rational(1,3)*(1-x)**Rational(1,3) - 1)/x**2, x, 0)
      expected: -1/3
:::
