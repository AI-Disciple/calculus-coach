---
id: l3-real-powers
lecture: 3
order: 1
title: Real powers
prerequisites: [l1-exp-log]
sources:
  - { source: lecture-notes-3, page: 1 }
  - { source: sheet-1, page: 2 }
examWeight: low
notation: |
  The lecture writes a real power as \(x^a = e^{a \ln x}\) and its derivative as \(f'\). The same derivative is \(\frac{d}{dx} x^a\).
status: reviewed
---

::: section
title: Exponential form
:::

::: formal-statement
kind: definition
title: Exponential form
source:
  source: lecture-notes-3
  page: 1
text: |
  For a real exponent \(a\),
  \[ x^a = e^{\ln(x^a)} = e^{a \ln x}. \]
  This **exponential form** needs \(x > 0\).
:::

::: plain-explanation
text: |
  The factor \(\ln x\) is a real number when \(x > 0\). Every real power written as \(e^{a \ln x}\) uses that logarithm, so the base has to be positive.
:::

::: key-points
text: |
  - For real \(a\) and \(x > 0\), \(x^a = e^{a \ln x}\).
  - The exponential form needs \(x > 0\), because \(\ln x\) is a real number only for \(x > 0\).
:::

::: concept-question
id: l3-real-powers.q-f24d099e
question: |
  For which \(x\) is \(x^a = e^{a \ln x}\) a real number, when \(a\) is real?
options:
  - text: |
      Every real \(x\).
  - text: |
      \(x > 0\).
    correct: true
  - text: |
      \(x \ge 0\).
  - text: |
      \(x \neq 0\).
explanation: |
  The formula uses \(\ln x\).

  - At \(x = 1\), the value \(\ln 1\) equals \(0\), and \(e^{a \cdot 0} = 1\).
  - At \(x = -1\), \(\ln(-1)\) is not a real number.
  - At \(x = 0\), \(\ln 0\) is not a real number.

  The condition that keeps the logarithm real is \(x > 0\).
:::

::: exercise
id: l3-real-powers.basic-exp
tier: basic
topics: [real-powers]
statement: |
  Compute \(e^{(2/3)\ln 8}\).
solution: |
  The expression \(e^{(2/3)\ln 8}\) is the exponential form of \(8^{2/3}\). The real cube root of \(8\) is \(2\). Squaring that root gives \(2^2 = 4\). The value is \(4\).
provenance: written-for-site
steps:
  - |
    Recognise the expression as \(8^{2/3}\).
  - |
    Take the cube root of \(8\).
  - |
    Square the root. The value is \(4\).
verification:
  checks:
    - expr: exp((Rational(2,3))*log(8))
      expected: 4
:::

::: section
title: Odd roots
:::

::: formal-statement
kind: definition
title: Odd roots
source:
  source: lecture-notes-3
  page: 1
text: |
  The identity
  \[ \bigl(x^{1/3}\bigr)^3 = x \]
  defines the **real cube root** on all of \(\mathbb{R}\).

  For an exponent \(p/q\) in lowest terms with \(q\) **odd**,
  \[ x^{p/q} = \bigl(x^{1/q}\bigr)^p \]
  is defined for negative \(x\) as well.

  In particular,
  \[ (x+3)^{2/3} = \bigl((x+3)^{1/3}\bigr)^2 \]
  is defined for every real \(x\). The value at \(x = -3\) equals \(0\).
:::

::: trap
text: |
  The exponential formula is the definition of \(x^a\) only when the base is positive. At \(x = -4\), the expression \(e^{(2/3)\ln(x+3)}\) asks for \(\ln(-1)\). The number \(\ln(-1)\) is not a real number.

  The odd-root reading of \((x+3)^{2/3}\) at \(x = -4\) is
  \[
  \begin{aligned}
  \bigl((-1)^{1/3}\bigr)^2&=(-1)^2\\
  &=1.
  \end{aligned}
  \]
  The real cube root of \(-1\) is \(-1\), and squaring that root gives \(1\).
:::

::: trap
text: |
  The square of the real cube root is \(x^{2/3}\), and cubing it gives
  \[ (x^{2/3})^3 = x^2. \]
  Reading that identity as \((x^{2/3})^3 = x\) fails at \(x = -2\):
  \[ x^{2/3} = (-2)^{2/3} = \bigl((-2)^{1/3}\bigr)^2 > 0. \]
  Its cube is \(4\), the value of \(x^2\), while \(x = -2\) is negative.
:::

::: key-points
text: |
  - The identity \(\bigl(x^{1/3}\bigr)^3 = x\) defines the real cube root on all of \(\mathbb{R}\). For \(p/q\) in lowest terms with \(q\) odd, \(x^{p/q} = \bigl(x^{1/q}\bigr)^p\) is defined for negative \(x\) as well.
  - The usual slip applies the exponential formula to a negative base: at \(x = -4\), \(e^{(2/3)\ln(x+3)}\) asks for \(\ln(-1)\). The odd-root reading gives \(\bigl((-1)^{1/3}\bigr)^2 = 1\).
  - The usual slip also reads \((x^{2/3})^3\) as \(x\). It equals \(x^2\), and at \(x = -2\) the value is \(4\), not \(-2\).
:::

::: going-deeper
title: Rational exponents with an even root
text: |
  When the denominator \(q\) is even and \(p/q\) is in lowest terms, the power \(x^{p/q}\) needs \(x \ge 0\). An even root of a negative number is not a real number.
:::

::: concept-question
id: l3-real-powers.q-b83bb1bc
question: |
  What is the value of \(8^{2/3}\)?
options:
  - text: |
      \(2\)
  - text: |
      \(4\)
    correct: true
  - text: |
      \(16\)
  - text: |
      \(\frac{16}{3}\)
explanation: |
  The cube root of \(8\) is \(2\). Squaring that root gives \(\bigl(8^{1/3}\bigr)^2 = 4\). The exponential form \(e^{(2/3)\ln 8}\) equals the same value.
:::

::: concept-question
id: l3-real-powers.q-e536726a
question: |
  What is \(\bigl(x^{1/3}\bigr)^3\) for a real number \(x\)?
options:
  - text: |
      \(x\)
    correct: true
  - text: |
      \(|x|\)
  - text: |
      \(x^3\)
  - text: |
      \(3x\)
explanation: |
  The identity \(\bigl(x^{1/3}\bigr)^3 = x\) defines the real cube root on all of \(\mathbb{R}\). At \(x = -1\), the real cube root is \(-1\), and \((-1)^3 = -1\). The absolute value \(|-1|\) equals \(1\).
:::

::: section
title: Derivative of a real power
:::

::: worked-example
title: Derivative of a real power
problem: |
  For \(x > 0\), differentiate \(x^a = e^{a \ln x}\), where \(a\) is real. Then take \(a = \frac{1}{2}\).
solution: |
  Let \(a\) be a real constant, and keep \(x > 0\). Write \(x^a = e^{a \ln x}\).

  The derivative of the exponent \(a \ln x\) is \(a \cdot \frac{1}{x}\).

  The chain rule multiplies by the exponential itself. The derivative of \(x^a\) is
  \[ e^{a \ln x} \cdot a \cdot \frac{1}{x}. \]
  That product equals \(a x^{a-1}\).

  Set \(a = \frac{1}{2}\). The function \(x^{1/2}\) is \(\sqrt{x}\). The derivative is \(\frac{1}{2} x^{-1/2}\). The same derivative equals \(\frac{1}{2\sqrt{x}}\).
:::

::: guided-example
title: Derivative of (x+3) to the power 2/3
problem: |
  Differentiate \((x+3)^{2/3}\) for \(x > -3\).
steps:
  - |
    Rewrite the expression as a power \(u^a\) with \(u = x + 3\) and \(a = \frac{2}{3}\).
  - |
    Apply the rule \(a u^{a-1} u'\).
  - |
    The derivative \(u'\) equals \(1\). The exponent \(a - 1\) equals \(-\frac{1}{3}\). The derivative of \((x+3)^{2/3}\) is \(\frac{2}{3}(x+3)^{-1/3}\).
:::

::: trap
text: |
  The derivative of \(x^{-1}\) is \(-x^{-2}\). Differentiating \(x^{-1}\) as \(x^{-2}\) gives a different function. At \(x = 1\), the value of \(x^{-2}\) is \(1\). At \(x = 1\), the correct derivative \(-x^{-2}\) equals \(-1\).
:::

::: key-points
text: |
  - For \(x > 0\) and real \(a\), the derivative of \(x^a\) is \(a x^{a-1}\). With \(u\) depending on \(x\), the derivative of \(u^a\) is \(a u^{a-1} u'\).
  - The usual slip differentiates \(x^{-1}\) as \(x^{-2}\). The derivative is \(-x^{-2}\), which equals \(-1\) at \(x = 1\), and \(x^{-2}\) equals \(1\) there.
:::

::: concept-question
id: l3-real-powers.q-1c164efb
question: |
  What is the derivative of \(x^{1/2}\) at \(x = 4\)?
options:
  - text: |
      \(\frac{1}{2}\)
  - text: |
      \(\frac{1}{4}\)
    correct: true
  - text: |
      \(\frac{1}{8}\)
  - text: |
      \(2\)
explanation: |
  The derivative of \(\sqrt{x}\) is \(\frac{1}{2\sqrt{x}}\). At \(x = 4\), the square root \(\sqrt{4}\) equals \(2\). The value of the derivative is \(\frac{1}{2 \cdot 2} = \frac{1}{4}\). The number \(\frac{1}{2}\) is the derivative at \(x = 1\), where \(\sqrt{1} = 1\).
:::

::: exercise
id: l3-real-powers.standard-sqrt
tier: standard
topics: [real-powers]
statement: |
  By the exponential definition, differentiate \(\sqrt{x}\) for \(x > 0\) and evaluate the derivative at \(x = 4\).
solution: |
  By the exponential definition, \(\sqrt{x} = e^{\frac{1}{2}\ln x}\) for \(x > 0\).

  The derivative of the exponent \(\frac{1}{2}\ln x\) is \(\frac{1}{2x}\). The chain rule multiplies by the exponential. The derivative of \(\sqrt{x}\) is
  \[ e^{\frac{1}{2}\ln x} \cdot \frac{1}{2x} = \frac{1}{2\sqrt{x}}. \]

  At \(x = 4\), the square root \(\sqrt{4}\) equals \(2\). The derivative at \(4\) equals \(\frac{1}{2 \cdot 2} = \frac{1}{4}\).
provenance: written-for-site
steps:
  - |
    Write \(\sqrt{x}\) as an exponential.
  - |
    Differentiate by the chain rule.
  - |
    Evaluate the derivative at \(x = 4\).
verification:
  checks:
    - expr: diff(sqrt(x), x).subs(x, 4)
      expected: Rational(1,4)
:::

::: exercise
id: l3-real-powers.exam-ex8
number: "Ex. 8"
tier: exam
topics: [real-powers]
statement: |
  State the domain of \(f(x) = (x-1)^2 (x+3)^{2/3}\), then differentiate \(f\) for \(x \neq -3\) by the real-power rule. For \(x < -3\), read \((x+3)^{-1/3}\) as the real cube root.
solution: |
  Let \(u(x) = (x-1)^2\) and \(v(x) = (x+3)^{2/3}\). The derivative \(u'(x)\) equals \(2(x-1)\). The real-power rule gives \(v'(x) = \frac{2}{3}(x+3)^{-1/3}\).

  The product rule gives
  \[
  \begin{aligned}
  f'(x) &= 2(x-1)(x+3)^{2/3}\\
  &\quad + (x-1)^2 \cdot \frac{2}{3}(x+3)^{-1/3}.
  \end{aligned}
  \]

  Factor out \((x-1)(x+3)^{-1/3}\):
  \[
  \begin{aligned}
  f'(x) &= (x-1)(x+3)^{-1/3}\\
  &\quad \cdot \left(2(x+3) + \frac{2}{3}(x-1)\right).
  \end{aligned}
  \]

  Call the second factor \(w(x)\). Then
  \[
  \begin{aligned}
  w(x) &= \frac{6(x+3) + 2(x-1)}{3}\\
  &= \frac{8x + 16}{3}\\
  &= \frac{8}{3}(x+2).
  \end{aligned}
  \]

  The derivative is
  \[ f'(x) = \frac{8}{3}(x-1)(x+2)(x+3)^{-1/3}. \]
provenance: written-for-site
steps:
  - |
    Differentiate each factor. The power uses \(a u^{a-1} u'\).
  - |
    Apply the product rule.
  - |
    Factor \((x-1)(x+3)^{-1/3}\) and simplify the remaining linear factor.
verification:
  checks:
    - expr: diff((x-1)**2 * (x+3)**Rational(2,3), x)
      expected: Rational(8,3)*(x-1)*(x+2)*(x+3)**Rational(-1,3)
:::

::: sheet-item
id: l3-real-powers.sheet-exponential
category: formula
text: |
  For \(x > 0\) and \(a\) real, \(x^a = e^{a \ln x}\).
:::

::: sheet-item
id: l3-real-powers.sheet-derivative
category: formula
text: |
  For \(x > 0\), the derivative of \(x^a\) is \(a x^{a-1}\).
:::

::: sheet-item
id: l3-real-powers.sheet-odd-root
category: recognition
text: |
  If \(p/q\) is in lowest terms and \(q\) is odd, then \(x^{p/q} = \bigl(x^{1/q}\bigr)^p\) for negative \(x\) as well. In particular, \((x+3)^{2/3}\) equals \(0\) at \(x = -3\).
:::

::: exercise
id: l3-real-powers.ex-cusp-critical-points
tier: standard
topics: [real-powers]
statement: |
  Let \(f(x) = x^{2/3}(x - 5)\), where \(x^{2/3} = \bigl(x^{1/3}\bigr)^2\) is read with the real cube root.

  (a) State the domain of \(f\) and compute \(f(0)\).

  (b) Compute \(f'(x)\) for \(x \neq 0\) and write it as a product of simple factors.

  (c) Find the points where \(f'\) is zero or does not exist, and decide for each whether \(f\) has a local maximum or a local minimum there.

  (d) Evaluate \(f'(-8)\).
solution: |
  (a) The exponent \(\frac{2}{3}\) has an odd denominator in lowest terms, so \(x^{2/3}\) is defined for every real \(x\). The domain of \(f\) is \(\mathbb{R}\), and \(f(0) = 0\).

  (b) For \(x \neq 0\), the real-power rule and the product rule give
  \[ f'(x) = \frac{2}{3}x^{-1/3}(x - 5) + x^{2/3}. \]
  Write \(x^{2/3} = x^{-1/3}\cdot x\) and factor out \(x^{-1/3}\):
  \[
  \begin{aligned}
  f'(x) &= x^{-1/3}\left(\frac{2}{3}(x - 5) + x\right)\\
  &= x^{-1/3}\cdot\frac{5x - 10}{3}\\
  &= \frac{5}{3}\,x^{-1/3}(x - 2).
  \end{aligned}
  \]

  (c) The derivative is zero at \(x = 2\). At \(x = 0\) the factor \(x^{-1/3}\) is undefined, so \(f'(0)\) does not exist, and \(f\) is defined at \(0\). The critical points are \(0\) and \(2\).

  The factor \(x^{-1/3}\) has the sign of \(x\).

  - For \(x < 0\), both \(x^{-1/3}\) and \(x - 2\) are negative, so \(f' > 0\).
  - For \(0 < x < 2\), \(x^{-1/3} > 0\) and \(x - 2 < 0\), so \(f' < 0\).
  - For \(x > 2\), both factors are positive, so \(f' > 0\).

  Therefore \(f\) increases up to \(0\), decreases from \(0\) to \(2\), and increases after \(2\). There is a local maximum at \(x = 0\) with value \(f(0) = 0\), and a local minimum at \(x = 2\) with value \(f(2) = 2^{2/3}\cdot(-3) = -3\cdot 2^{2/3}\).

  (d) The real cube root of \(-8\) is \(-2\), so \((-8)^{-1/3} = -\frac{1}{2}\). Then
  \[ f'(-8) = \frac{5}{3}\cdot\left(-\frac{1}{2}\right)\cdot(-10) = \frac{25}{3}. \]
provenance: written-for-site
steps:
  - |
    Domain \(\mathbb{R}\), because the denominator of \(\frac{2}{3}\) is odd. \(f(0) = 0\).
  - |
    Differentiate by the product rule and factor out \(x^{-1/3}\): \(f'(x) = \frac{5}{3}x^{-1/3}(x - 2)\).
  - |
    Critical points \(0\) (derivative undefined) and \(2\) (derivative zero). The sign table gives a local maximum at \(0\) and a local minimum at \(2\).
  - |
    \(f'(-8) = \frac{25}{3}\).
verification:
  checks:
    - expr: diff(x**Rational(2,3)*(x - 5), x) - 5*(x - 2)/(3*x**Rational(1,3))
      expected: 0
    - expr: (Rational(5,3)*(x - 2)/real_root(x, 3)).subs(x, -8)
      expected: 25/3
    - expr: (Rational(5,3)*(x - 2)/real_root(x, 3)).subs(x, -1)
      expected: 5
    - expr: (x**Rational(2,3)*(x - 5)).subs(x, 2)
      expected: -3*2**Rational(2,3)
:::
