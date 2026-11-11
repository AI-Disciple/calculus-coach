---
id: l2-inverse-functions
lecture: 2
order: 1
title: Derivative of an inverse function
prerequisites: [l1-derivative-rules]
sources:
  - { source: handout, section: "4.9", page: 94 }
  - { source: lecture-notes-2, page: 1 }
  - { source: sheet-1, page: 2 }
  - { source: midterm-app }
examWeight: low
status: reviewed
notation: |
  \(f'\), \(y'\) and \(\frac{d}{dx}\) all name the derivative: \(y' = \frac{dy}{dx}\) and \(f'(x) = \frac{d}{dx} f(x)\).
---

::: section
title: Derivative of an inverse
:::

::: formal-statement
kind: theorem
title: Derivative of an inverse
source:
  source: lecture-notes-2
  page: 1
text: |
  Suppose \(f^{-1}\) is differentiable at \(y\) and \(f'(f^{-1}(y)) \neq 0\). Then
  \[ (f^{-1})'(y) = \frac{1}{f'(f^{-1}(y))}. \]
:::

::: plain-explanation
text: |
  Start from the identity \(f^{-1}(f(x)) = x\). Differentiate both sides with respect to \(x\). This step uses the differentiability of \(f^{-1}\). The chain rule gives
  \[ (f^{-1})'(f(x)) \cdot f'(x) = 1. \]

  Set \(y = f(x)\), so \(x = f^{-1}(y)\). Substitution produces
  \[ (f^{-1})'(y) \cdot f'(f^{-1}(y)) = 1. \]
  The hypothesis \(f'(f^{-1}(y)) \neq 0\) allows division by that factor, and the formula follows.
:::

::: worked-example
title: Square and square root
problem: |
  Let \(f(x) = x^2\) for \(x \in [0, \infty)\). Find \((f^{-1})'(y)\) for \(y > 0\).
solution: |
  The equation \(x^2 = y\) has two solutions, \(x = \sqrt{y}\) and \(x = -\sqrt{y}\). Restricting the original function to \([0, \infty)\) selects one **branch**, and the inverse is \(f^{-1}(y) = \sqrt{y}\).

  The derivative of \(f\) and its value at the inverse point are
  \[
  \begin{aligned}
  f'(x)&=2x,\\
  f'(\sqrt{y})&=2\sqrt{y}.
  \end{aligned}
  \]
  For \(y > 0\) this value satisfies \(2\sqrt{y} \neq 0\), so the inverse rule gives
  \[ (f^{-1})'(y) = \frac{1}{2\sqrt{y}}. \]
  Differentiating \(\sqrt{y}\) with respect to \(y\) gives the same derivative.

  At \(y = 0\), \(f'(0) = 0\), so the hypothesis of the inverse rule fails.
:::

::: key-points
text: |
  - If \(f^{-1}\) is differentiable at \(y\) and \(f'(f^{-1}(y)) \neq 0\), then \((f^{-1})'(y) = \frac{1}{f'(f^{-1}(y))}\).
  - The rule comes from differentiating \(f^{-1}(f(x)) = x\) with the chain rule.
  - For \(f(x) = x^2\) on \([0, \infty)\), the rule gives \((f^{-1})'(y) = \frac{1}{2\sqrt{y}}\) for \(y > 0\). At \(y = 0\) we have \(f'(0) = 0\), so the hypothesis fails.
:::

::: concept-question
id: l2-inverse-functions.q-37d6945e
question: |
  Let \(f(x) = x^2\) on \([0, \infty)\). Where does \(f'(f^{-1}(y)) = 0\)?
options:
  - text: |
      At \(y = 0\).
    correct: true
  - text: |
      At \(y = 1\).
  - text: |
      For every \(y > 0\).
  - text: |
      Nowhere on \([0, \infty)\).
explanation: |
  On this restriction, \(f^{-1}(y) = \sqrt{y}\) and \(f'(x) = 2x\), so
  \[ f'(f^{-1}(y)) = 2\sqrt{y}. \]
  This value:

  - equals \(0\) when \(y = 0\),
  - is positive when \(y > 0\).
:::

::: section
title: Derivative of arcsin and arccos
:::

::: formal-statement
kind: theorem
title: Derivative of arcsin
source:
  source: handout
  section: "4.9"
  page: 95
text: |
  Sine, restricted to \([-\pi/2, \pi/2]\), is invertible, and the inverse is \(\arcsin\). For \(x \in (-1, 1)\),
  \[ \frac{d}{dx} \arcsin x = \frac{1}{\sqrt{1 - x^2}}. \]
  For such an \(x\), \(\arcsin x\) lies in \((-\pi/2, \pi/2)\), so \(\cos(\arcsin x) > 0\). That sign selects the positive square root.
:::

::: worked-example
title: Deriving the arcsin derivative
problem: |
  Derive \(\frac{d}{dx} \arcsin x\) for \(x \in (-1, 1)\).
solution: |
  Let \(y = \arcsin x\). Then \(\sin y = x\), and \(y\) lies in \([-\pi/2, \pi/2]\). Differentiate both sides with respect to \(x\). The chain rule gives
  \[ y' \cos y = 1, \]
  so \(y' = \frac{1}{\cos y}\) wherever \(\cos y \neq 0\).

  The identity \(\cos^2 y = 1 - \sin^2 y\) gives
  \[ \cos^2 y = 1 - x^2. \]
  For \(x \in (-1, 1)\), the value \(y\) lies in \((-\pi/2, \pi/2)\), where \(\cos y > 0\). So \(\cos y = \sqrt{1 - x^2}\). Substituting that value gives
  \[ y' = \frac{1}{\sqrt{1 - x^2}}. \]
:::

::: formal-statement
kind: theorem
title: Derivative of arccos
source:
  source: handout
  section: "4.9"
  page: 96
text: |
  Cosine, restricted to \([0, \pi]\), is invertible, and the inverse is \(\arccos\). For \(x \in (-1, 1)\),
  \[ \frac{d}{dx} \arccos x = -\frac{1}{\sqrt{1 - x^2}}. \]
  For such an \(x\), \(\arccos x\) lies in \((0, \pi)\), so \(\sin(\arccos x) > 0\). Differentiating \(\cos y = x\) produces the minus sign. The positive value of sine is the square root in the denominator.
:::

::: trap
text: |
  For \(x \in (-1, 1)\), the derivative of \(\arccos x\) is
  \[ -\frac{1}{\sqrt{1 - x^2}}. \]
  The range \([0, \pi]\) makes \(\arccos\) decreasing, so the derivative is negative. The wrong version uses the sign from \(\arcsin\) and writes \(\frac{1}{\sqrt{1 - x^2}}\).

  At \(x = 0\):

  - the correct derivative equals \(-1\), because \(-\frac{1}{\sqrt{1 - 0}} = -1\),
  - the wrong version equals \(1\).
:::

::: key-points
text: |
  - For \(x \in (-1, 1)\), \(\frac{d}{dx} \arcsin x = \frac{1}{\sqrt{1 - x^2}}\) and \(\frac{d}{dx} \arccos x = -\frac{1}{\sqrt{1 - x^2}}\).
  - The ranges \([-\pi/2, \pi/2]\) and \([0, \pi]\) fix the signs of \(\cos(\arcsin x)\) and \(\sin(\arccos x)\), and so the positive square root.
  - The usual slip writes \(\frac{1}{\sqrt{1 - x^2}}\) for \(\arccos\). The correct derivative is negative, and at \(x = 0\) it equals \(-1\).
:::

::: concept-question
id: l2-inverse-functions.q-7f468e2f
question: |
  For \(x \in (-1, 1)\), which fact selects \(\cos(\arcsin x) = \sqrt{1 - x^2}\)?
options:
  - text: |
      \(\arcsin x\) lies in \((-\pi/2, \pi/2)\), where cosine is positive.
    correct: true
  - text: |
      \(\arcsin x\) lies in \([0, \pi]\), where sine is positive.
  - text: |
      The identity \(\cos^2 y + \sin^2 y = 1\) selects the sign by itself.
  - text: |
      \(\arcsin\) is an odd function.
explanation: |
  If \(y = \arcsin x\) and \(x \in (-1, 1)\), then \(y \in (-\pi/2, \pi/2)\) and \(\cos y > 0\). The identity \(\cos^2 y = 1 - x^2\) leaves two possibilities:
  \[
  \begin{aligned}
  \cos y &= \sqrt{1 - x^2},\\
  &\quad\text{and}\quad \cos y = -\sqrt{1 - x^2}.
  \end{aligned}
  \]
  The positive cosine selects the first. The interval \([0, \pi]\) is the range of \(\arccos\).
:::

::: concept-question
id: l2-inverse-functions.q-38371207
question: |
  What is the derivative of \(\arccos(2x)\) at \(x = 0\)?
options:
  - text: |
      \(-2\)
    correct: true
  - text: |
      \(2\)
  - text: |
      \(-1\)
  - text: |
      \(1\)
explanation: |
  For \(|x| < \frac{1}{2}\), the chain rule gives
  \[
  \begin{aligned}
  \frac{d}{dx} \arccos(2x)&=-\frac{1}{\sqrt{1 - (2x)^{2}}} \cdot 2\\
  &=-\frac{2}{\sqrt{1 - 4x^{2}}}.
  \end{aligned}
  \]
  At \(x = 0\) this equals \(-2\). The derivative of \(\arccos\) is negative, because \(\arccos\) decreases on \((-1, 1)\). The factor \(2\) comes from the inner function \(2x\).
:::

::: exercise
id: l2-inverse-functions.ex-4-9-5
number: "4.9.5"
tier: basic
topics: [inverse-functions, inverse-trigonometric]
statement: |
  Find the derivative of \(\arcsin(x^2)\).
solution: |
  The outer function is \(\arcsin\), and the inner function is \(x^2\). For \(|x| < 1\), the chain rule gives
  \[
  \begin{aligned}
  \frac{d}{dx} \arcsin(x^2)&=\frac{1}{\sqrt{1 - (x^2)^2}} \cdot 2x\\
  &=\frac{2x}{\sqrt{1 - x^4}}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The outer function is \(\arcsin\) and the inner function is \(x^2\).
  - The derivative is \(\frac{2x}{\sqrt{1 - x^4}}\) for \(|x| < 1\).
verification:
  checks:
    - expr: 'diff(asin(x**2), x)'
      expected: '2*x/sqrt(1 - x**4)'
:::

::: section
title: Derivative of arctan and arccot
:::

::: formal-statement
kind: theorem
title: Derivative of arctan
source:
  source: handout
  section: "4.9"
  page: 96
text: |
  Tangent, restricted to \((-\pi/2, \pi/2)\), is invertible, and the inverse is \(\arctan\). For every real \(x\),
  \[ \frac{d}{dx} \arctan x = \frac{1}{1 + x^2}. \]
:::

::: guided-example
title: Deriving the arctan derivative
problem: |
  Derive \(\frac{d}{dx} \arctan x\). The range of \(\arctan\) is \((-\pi/2, \pi/2)\). Try each step before you reveal it.
steps:
  - |
    Let \(y = \arctan x\). Then \(\tan y = x\), and \(y\) lies in \((-\pi/2, \pi/2)\).
  - |
    Differentiate both sides with respect to \(x\). The chain rule gives
    \[ y' \sec^2 y = 1. \]
  - |
    Solve for the derivative:
    \[ y' = \frac{1}{\sec^2 y}. \]
    On \((-\pi/2, \pi/2)\), \(\sec y\) is defined and \(\sec^2 y > 0\).
  - |
    Apply \(\sec^2 y = 1 + \tan^2 y\), and replace \(\tan y\) by \(x\). The result is
    \[ y' = \frac{1}{1 + x^2}. \]
:::

::: formal-statement
kind: theorem
title: Derivative of arccot
source:
  source: handout
  section: "4.9"
  page: 97
text: |
  Cotangent, restricted to \((0, \pi)\), is invertible, and the inverse is \(\arccot\). For every real \(x\),
  \[ \frac{d}{dx} \arccot x = -\frac{1}{1 + x^2}. \]
  Cotangent decreases on \((0, \pi)\), so this inverse decreases, and the derivative is negative.
:::

::: going-deeper
title: Arcsecant and arccosecant
text: |
  Arcsecant and arccosecant are omitted from this course. The inverse trigonometric derivatives used here are those of \(\arcsin\), \(\arccos\), \(\arctan\) and \(\arccot\).
:::

::: key-points
text: |
  - For every real \(x\), \(\frac{d}{dx} \arctan x = \frac{1}{1 + x^2}\) and \(\frac{d}{dx} \arccot x = -\frac{1}{1 + x^2}\).
  - The ranges are \((-\pi/2, \pi/2)\) for \(\arctan\) and \((0, \pi)\) for \(\arccot\).
  - The derivation differentiates \(\tan y = x\) and uses \(\sec^2 y = 1 + \tan^2 y\).
:::

::: concept-question
id: l2-inverse-functions.q-5bc1c15b
question: |
  Differentiate \(f(x) = \arctan x\).
options:
  - text: |
      \(\frac{1}{1 + x^{2}}\)
    correct: true
  - text: |
      \(\frac{1}{1 - x^{2}}\)
  - text: |
      \(-\frac{1}{1 + x^{2}}\)
  - text: |
      \(\frac{1}{\sqrt{1 + x^{2}}}\)
explanation: |
  Differentiating the identity \(\tan(\arctan x) = x\) gives
  \[ \arctan'(x) \cdot (1 + \tan^{2}(\arctan x)) = 1, \]
  hence
  \[ \arctan'(x) = \frac{1}{1 + x^{2}}. \]
:::

::: exercise
id: l2-inverse-functions.ex-4-9-6
number: "4.9.6"
tier: standard
topics: [inverse-functions, inverse-trigonometric]
statement: |
  Find the derivative of \(\arctan(e^x)\).
solution: |
  The outer function is \(\arctan\), and the inner function is \(e^x\). The chain rule multiplies \(\frac{1}{1 + (e^x)^2}\) by \(e^x\). Since \((e^x)^2 = e^{2x}\),
  \[ \frac{d}{dx} \arctan(e^x) = \frac{e^x}{1 + e^{2x}}. \]
provenance: handout-answer
steps:
  - The outer function is \(\arctan\) and the inner function is \(e^x\).
  - The derivative is \(\frac{e^x}{1 + e^{2x}}\).
verification:
  checks:
    - expr: 'diff(atan(exp(x)), x)'
      expected: 'exp(x)/(1 + exp(2*x))'
:::

::: exercise
id: l2-inverse-functions.ex-cubic
tier: exam
topics: [inverse-functions]
statement: |
  Let \(f(x) = x^3 + x\). Check that \(f(1) = 2\), and find \((f^{-1})'(2)\).
solution: |
  The value \(f(1)\) equals \(1^3 + 1 = 2\), so \(f^{-1}(2) = 1\).

  The derivative and its value at \(1\) are
  \[
  \begin{aligned}
  f'(x)&=3x^2 + 1,\\
  f'(1)&=4.
  \end{aligned}
  \]
  This value satisfies \(4 \neq 0\). The inverse rule at \(y = 2\) gives
  \[ (f^{-1})'(2) = \frac{1}{f'(f^{-1}(2))} = \frac{1}{f'(1)} = \frac{1}{4}. \]

  Because \(f'(x) = 3x^2 + 1 \ge 1\) for every real \(x\), \(f\) is strictly increasing, and \(x = 1\) is the only input with \(f(x) = 2\).
provenance: written-for-site
steps:
  - The value \(f(1)\) is \(2\), so \(f^{-1}(2) = 1\).
  - The derivative \(f'(1)\) is \(4\), and \(4 \neq 0\).
  - The inverse rule gives \((f^{-1})'(2) = \frac{1}{4}\).
verification:
  checks:
    - expr: '1**3 + 1'
      expected: '2'
    - expr: 'diff(x**3 + x, x).subs(x, 1)'
      expected: '4'
    - expr: '1/diff(x**3 + x, x).subs(x, 1)'
      expected: 'Rational(1, 4)'
:::

::: sheet-item
id: l2-inverse-functions.sheet-inverse-rule
category: formula
text: |
  If \(f'(f^{-1}(y)) \neq 0\), then \((f^{-1})'(y) = \frac{1}{f'(f^{-1}(y))}\).
:::

::: sheet-item
id: l2-inverse-functions.sheet-inverse-trig
category: formula
text: |
  For \(x \in (-1, 1)\),
  \[
  \begin{aligned}
  \frac{d}{dx} \arcsin x&=\frac{1}{\sqrt{1 - x^2}},\\
  \frac{d}{dx} \arccos x&=-\frac{1}{\sqrt{1 - x^2}}.
  \end{aligned}
  \]
  For every real \(x\),
  \[
  \begin{aligned}
  \frac{d}{dx} \arctan x&=\frac{1}{1 + x^2},\\
  \frac{d}{dx} \arccot x&=-\frac{1}{1 + x^2}.
  \end{aligned}
  \]
  The ranges are \([-\pi/2, \pi/2]\), \([0, \pi]\), \((-\pi/2, \pi/2)\) and \((0, \pi)\).
:::

::: sheet-item
id: l2-inverse-functions.sheet-arccos-sign
category: trap
text: |
  The derivative of \(\arccos x\) carries a minus sign. At \(x = 0\) that derivative equals \(-1\).
:::

::: exercise
id: l2-inverse-functions.ex-inverse-trig-sum
tier: standard
topics: [inverse-functions, inverse-trigonometric]
statement: |
  - (a) Find the derivatives of \(\arcsin(\sqrt{x})\) and \(\arccos(\sqrt{x})\) for \(0 < x < 1\).
  - (b) Deduce that \(\arcsin(\sqrt{x}) + \arccos(\sqrt{x})\) is constant on \((0, 1)\), and find the constant.
  - (c) Find the derivative of \(\arccot(e^{x})\).
solution: |
  (a) For \(0 < x < 1\), the inner function \(\sqrt{x}\) lies in \((0, 1)\), so the derivatives of \(\arcsin\) and \(\arccos\) apply. The chain rule gives
  \[
  \begin{aligned}
  \frac{d}{dx} \arcsin(\sqrt{x})&=\frac{1}{\sqrt{1 - x}} \cdot \frac{1}{2\sqrt{x}}\\
  &=\frac{1}{2\sqrt{x(1 - x)}},\\
  \frac{d}{dx} \arccos(\sqrt{x})&=-\frac{1}{\sqrt{1 - x}} \cdot \frac{1}{2\sqrt{x}}\\
  &=-\frac{1}{2\sqrt{x(1 - x)}}.
  \end{aligned}
  \]

  (b) The derivative of the sum is \(0\) on the interval \((0, 1)\), so the sum is constant there. At \(x = \frac{1}{2}\), \(\sqrt{x} = \frac{\sqrt{2}}{2}\), and
  \[
  \begin{aligned}
  \arcsin\frac{\sqrt{2}}{2}&=\frac{\pi}{4},\\
  \arccos\frac{\sqrt{2}}{2}&=\frac{\pi}{4}.
  \end{aligned}
  \]
  The constant is \(\frac{\pi}{2}\).

  (c) The outer function is \(\arccot\), with derivative \(-\frac{1}{1 + u^{2}}\), and the inner function is \(u = e^{x}\). The chain rule gives
  \[ \frac{d}{dx} \arccot(e^{x}) = -\frac{e^{x}}{1 + e^{2x}}. \]
provenance: written-for-site
steps:
  - The derivatives are \(\pm\frac{1}{2\sqrt{x(1 - x)}}\) for \(\arcsin(\sqrt{x})\) and \(\arccos(\sqrt{x})\).
  - The sum has derivative \(0\), and its value at \(x = \frac{1}{2}\) is \(\frac{\pi}{2}\).
  - The derivative of \(\arccot(e^{x})\) is \(-\frac{e^{x}}{1 + e^{2x}}\).
verification:
  checks:
    - expr: diff(asin(sqrt(x)), x)
      expected: 1/(2*sqrt(x)*sqrt(1 - x))
    - expr: diff(acos(sqrt(x)), x)
      expected: -1/(2*sqrt(x)*sqrt(1 - x))
    - expr: diff(asin(sqrt(x)) + acos(sqrt(x)), x)
      expected: "0"
    - expr: asin(sqrt(Rational(1, 2))) + acos(sqrt(Rational(1, 2)))
      expected: pi/2
    - expr: diff(acot(exp(x)), x)
      expected: -exp(x)/(1 + exp(2*x))
:::

::: exercise
id: l2-inverse-functions.ex-inverse-second-derivative
tier: exam
topics: [inverse-functions]
statement: |
  Let \(f(x) = x + e^{x}\), and write \(g = f^{-1}\).
  - (a) Show that \(f\) is strictly increasing, so \(g\) exists.
  - (b) Find \(g(1)\).
  - (c) Find \(g'(1)\).
  - (d) Find \(g''(1)\).
solution: |
  (a) The derivative is \(f'(x) = 1 + e^{x} > 1 > 0\) for every real \(x\), so \(f\) is strictly increasing on \(\mathbb{R}\) and has an inverse \(g\) defined on the range of \(f\).

  (b) The value \(f(0) = 0 + e^{0} = 1\), so \(g(1) = 0\).

  (c) We have \(f'(g(1)) = f'(0) = 2 \neq 0\). The inverse rule gives
  \[ g'(1) = \frac{1}{f'(g(1))} = \frac{1}{2}. \]

  (d) The inverse rule holds for every \(y\) in the range, \(g'(y) = \frac{1}{f'(g(y))}\). Differentiate both sides with respect to \(y\). The chain rule gives
  \[ g''(y) = -\frac{f''(g(y)) \, g'(y)}{f'(g(y))^{2}} = -\frac{f''(g(y))}{f'(g(y))^{3}}. \]
  Here \(f''(x) = e^{x}\), so \(f''(g(1)) = f''(0) = 1\). Then
  \[ g''(1) = -\frac{1}{2^{3}} = -\frac{1}{8}. \]
provenance: written-for-site
steps:
  - The derivative \(1 + e^{x}\) is positive, so \(f\) is strictly increasing and \(g\) exists.
  - Since \(f(0) = 1\), \(g(1) = 0\).
  - The inverse rule gives \(g'(1) = \frac{1}{f'(0)} = \frac{1}{2}\).
  - Differentiating the inverse rule gives \(g''(1) = -\frac{f''(0)}{f'(0)^{3}} = -\frac{1}{8}\).
verification:
  checks:
    - expr: (x + exp(x)).subs(x, 0)
      expected: "1"
    - expr: diff(x + exp(x), x).subs(x, 0)
      expected: "2"
    - expr: 1/diff(x + exp(x), x).subs(x, 0)
      expected: 1/2
    - expr: (-diff(x + exp(x), x, 2)/diff(x + exp(x), x)**3).subs(x, 0)
      expected: -1/8
:::

::: exercise
id: l2-inverse-functions.handout-4-9-4
number: "4.9.4"
tier: standard
topics:
  - inverse-functions
  - inverse-trigonometric
statement: |
  Show that \(\arccot x + \arctan x = \frac{\pi}{2}\) for every real \(x\). Here \(\arccot\) takes values in \((0, \pi)\).
solution: |
  Both \(\arccot\) and \(\arctan\) are differentiable at every real \(x\), and their derivatives are
  \[
  \begin{aligned}
  \frac{d}{dx} \arccot x&=-\frac{1}{1 + x^2},\\
  \frac{d}{dx} \arctan x&=\frac{1}{1 + x^2}.
  \end{aligned}
  \]
  So the sum has derivative
  \[
  \frac{d}{dx}\bigl(\arccot x + \arctan x\bigr) = -\frac{1}{1 + x^2} + \frac{1}{1 + x^2} = 0
  \]
  on the interval \((-\infty, \infty)\). A function with derivative \(0\) on an interval is constant there, so there is a constant \(k\) with \(\arccot x + \arctan x = k\) for every real \(x\).

  To find \(k\), evaluate at \(x = 0\). Since \(\cot\frac{\pi}{2} = 0\) and \(\frac{\pi}{2}\) lies in \((0, \pi)\), we have \(\arccot 0 = \frac{\pi}{2}\). Also \(\arctan 0 = 0\). Hence
  \[
  k = \frac{\pi}{2} + 0 = \frac{\pi}{2}.
  \]
  Therefore \(\arccot x + \arctan x = \frac{\pi}{2}\) for every real \(x\).
provenance: written-for-site
steps:
  - The derivatives of \(\arccot x\) and \(\arctan x\) are opposite, so the sum has derivative \(0\) on \(\mathbb{R}\).
  - The sum is a constant \(k\).
  - At \(x = 0\) the sum is \(\frac{\pi}{2} + 0\), so \(k = \frac{\pi}{2}\).
verification:
  checks:
    - expr: 'diff(atan(x), x)'
      expected: '1/(1 + x**2)'
    - expr: 'diff(pi/2 - atan(x), x)'
      expected: '-1/(1 + x**2)'
    - expr: 'diff(pi/2 - atan(x) + atan(x), x)'
      expected: '0'
    - expr: 'acot(0) + atan(0)'
      expected: 'pi/2'
:::


::: exercise
id: l2-inverse-functions.handout-4-9-7
number: "4.9.7"
tier: standard
topics:
  - inverse-functions
  - inverse-trigonometric
statement: |
  Find the derivative of \(\arccos(\sin(x^3))\).
solution: |
  The outer function is \(\arccos\), the middle function is \(\sin\), and the inner function is \(x^3\). Write \(u = \sin(x^3)\). The derivative of \(\arccos u\) is \(-\frac{1}{\sqrt{1 - u^2}}\) for \(|u| < 1\), which here means \(\cos(x^3) \neq 0\). The chain rule gives \(u' = 3x^2 \cos(x^3)\), so
  \[
  \begin{aligned}
  \frac{d}{dx} \arccos(\sin(x^3))&=-\frac{1}{\sqrt{1 - \sin^2(x^3)}} \cdot 3x^2 \cos(x^3)\\
  &=-\frac{3x^2 \cos(x^3)}{\sqrt{1 - \sin^2(x^3)}}.
  \end{aligned}
  \]
  The identity \(1 - \sin^2(x^3) = \cos^2(x^3)\) gives \(\sqrt{1 - \sin^2(x^3)} = |\cos(x^3)|\), so the same derivative is
  \[
  -\frac{3x^2 \cos(x^3)}{|\cos(x^3)|}.
  \]
  This equals \(-3x^2\) where \(\cos(x^3) > 0\) and \(3x^2\) where \(\cos(x^3) < 0\). At \(x = 1\) the cosine \(\cos 1\) is positive, so the derivative is \(-3\).
provenance: handout-answer
steps:
  - The outer function is \(\arccos\), the middle function is \(\sin\) and the inner function is \(x^3\).
  - The derivative is \(-\frac{3x^2 \cos(x^3)}{\sqrt{1 - \sin^2(x^3)}}\) wherever \(\cos(x^3) \neq 0\).
  - Since \(\sqrt{1 - \sin^2(x^3)} = |\cos(x^3)|\), the derivative is \(-3x^2\) where \(\cos(x^3) > 0\).
verification:
  checks:
    - expr: 'diff(acos(sin(x**3)), x)'
      expected: '-3*x**2*cos(x**3)/sqrt(1 - sin(x**3)**2)'
    - expr: 'diff(sin(x**3), x)'
      expected: '3*x**2*cos(x**3)'
    - expr: 'diff(acos(sin(x**3)), x).subs(x, 1)'
      expected: '-3'
    - expr: 'diff(acos(sin(x**3)), x).subs(x, 2)'
      expected: '12'
:::


::: exercise
id: l2-inverse-functions.handout-4-9-8
number: "4.9.8"
tier: standard
topics:
  - inverse-functions
  - inverse-trigonometric
statement: |
  Find the derivative of \(\ln\bigl((\arcsin x)^2\bigr)\).
solution: |
  The expression is defined for \(x \in [-1, 1]\) with \(x \neq 0\), because \(\arcsin x = 0\) only at \(x = 0\). It is differentiable for \(x \in (-1, 1)\) with \(x \neq 0\).

  Write \(u = \arcsin x\). The outer function is \(\ln\), applied to \(u^2\). The chain rule gives
  \[
  \begin{aligned}
  \frac{d}{dx} \ln(u^2)&=\frac{1}{u^2} \cdot 2u \cdot u'\\
  &=\frac{2u'}{u}.
  \end{aligned}
  \]
  The derivative of \(u = \arcsin x\) is \(\frac{1}{\sqrt{1 - x^2}}\). Substituting gives
  \[
  \frac{d}{dx} \ln\bigl((\arcsin x)^2\bigr) = \frac{2}{(\arcsin x)\sqrt{1 - x^2}}.
  \]
provenance: handout-answer
steps:
  - The outer function is \(\ln\) applied to \(u^2\) with \(u = \arcsin x\), so the derivative is \(2u'/u\).
  - The derivative of \(\arcsin x\) is \(\frac{1}{\sqrt{1 - x^2}}\).
  - The result is \(\frac{2}{(\arcsin x)\sqrt{1 - x^2}}\) for \(x \in (-1, 1)\), \(x \neq 0\).
verification:
  checks:
    - expr: 'diff(log(asin(x)**2), x)'
      expected: '2/(asin(x)*sqrt(1 - x**2))'
    - expr: 'diff(asin(x), x)'
      expected: '1/sqrt(1 - x**2)'
    - expr: 'diff(log(asin(x)**2), x).subs(x, Rational(1, 2))'
      expected: '8*sqrt(3)/pi'
:::


::: exercise
id: l2-inverse-functions.handout-4-9-9
number: "4.9.9"
tier: basic
topics:
  - inverse-functions
  - inverse-trigonometric
statement: |
  Find the derivative of \(\arccos(e^x)\).
solution: |
  The outer function is \(\arccos\), and the inner function is \(e^x\). The function \(\arccos(e^x)\) is defined for \(e^x \le 1\), that is \(x \le 0\), and differentiable for \(e^x < 1\), that is \(x < 0\). For such \(x\), the chain rule gives
  \[
  \begin{aligned}
  \frac{d}{dx} \arccos(e^x)&=-\frac{1}{\sqrt{1 - (e^x)^2}} \cdot e^x\\
  &=-\frac{e^x}{\sqrt{1 - e^{2x}}}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The outer function is \(\arccos\) and the inner function is \(e^x\), with \(e^x < 1\) for \(x < 0\).
  - The derivative is \(-\frac{e^x}{\sqrt{1 - e^{2x}}}\) for \(x < 0\).
verification:
  checks:
    - expr: 'diff(acos(exp(x)), x)'
      expected: '-exp(x)/sqrt(1 - exp(2*x))'
    - expr: 'diff(acos(exp(x)), x).subs(x, -log(2))'
      expected: '-1/sqrt(3)'
:::


::: exercise
id: l2-inverse-functions.handout-4-9-11
number: "4.9.11"
tier: standard
topics:
  - inverse-functions
  - inverse-trigonometric
statement: |
  Find the derivative of \(\log_5\bigl(\arctan(x^x)\bigr)\).
solution: |
  The function is defined for \(x > 0\). There \(x^x > 0\), so \(\arctan(x^x) > 0\) and the logarithm is defined. The function is a chain of four steps: \(x \mapsto x^x\), then \(\arctan\), then \(\ln\), then division by \(\ln 5\), since \(\log_5 w = \frac{\ln w}{\ln 5}\).

  **The derivative of \(x^x\).** For \(x > 0\), \(x^x = e^{x \ln x}\). The chain rule and the product rule give
  \[
  \begin{aligned}
  \frac{d}{dx} x^x&=e^{x \ln x}\Bigl(\ln x + x \cdot \frac{1}{x}\Bigr)\\
  &=x^x (1 + \ln x).
  \end{aligned}
  \]

  **The derivative of \(\arctan(x^x)\).** The derivative of \(\arctan u\) is \(\frac{1}{1 + u^2}\), and \((x^x)^2 = x^{2x}\), so
  \[
  \frac{d}{dx} \arctan(x^x) = \frac{x^x (1 + \ln x)}{1 + x^{2x}}.
  \]

  **The logarithm.** The derivative of \(\frac{\ln w}{\ln 5}\) is \(\frac{w'}{w \ln 5}\), with \(w = \arctan(x^x)\). Therefore
  \[
  \frac{d}{dx} \log_5\bigl(\arctan(x^x)\bigr) = \frac{(1 + \ln x)\, x^x}{\ln 5 \,\bigl(1 + x^{2x}\bigr) \arctan(x^x)}.
  \]
provenance: handout-answer
steps:
  - The derivative of \(x^x = e^{x \ln x}\) is \(x^x (1 + \ln x)\).
  - The derivative of \(\arctan(x^x)\) is \(\frac{x^x (1 + \ln x)}{1 + x^{2x}}\).
  - Dividing by \(w \ln 5\) with \(w = \arctan(x^x)\) gives \(\frac{(1 + \ln x)\, x^x}{\ln 5 (1 + x^{2x}) \arctan(x^x)}\).
verification:
  checks:
    - expr: 'diff(x**x, x)'
      expected: 'x**x*(1 + log(x))'
    - expr: 'diff(atan(x**x), x)'
      expected: 'x**x*(1 + log(x))/(1 + x**(2*x))'
    - expr: 'diff(log(atan(x**x), 5), x)'
      expected: '(1 + log(x))*x**x/(log(5)*(1 + x**(2*x))*atan(x**x))'
    - expr: 'diff(log(atan(x**x), 5), x).subs(x, 1)'
      expected: '2/(pi*log(5))'
:::
