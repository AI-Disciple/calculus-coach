---
id: l5-higher-derivatives
lecture: 5
order: 3
title: "Higher-order derivatives and Clairaut's theorem"
prerequisites: [l5-partial-derivatives]
sources:
  - { source: handout, section: "14.6", page: 371 }
  - { source: handout, section: "14.6", page: 372 }
  - { source: lecture-notes-5, page: 4 }
examWeight: medium
status: reviewed
notation: |
  \(\frac{df}{dx}\), \(d_x f\), \(f_x\) and the handout symbol \(\frac{\partial f}{\partial x}\) are the same partial derivative. The mixed partial \(\frac{d}{dy}\bigl(\frac{df}{dx}\bigr)\) is written \(f_{xy}\) and \(\frac{\partial^2 f}{\partial y\,\partial x}\).
---

::: section
title: Second partial derivatives
:::

::: formal-statement
kind: definition
title: Second partial derivatives
source:
  source: lecture-notes-5
  page: 4
text: |
  Differentiating a first partial again produces a **second partial**. The four second partials are written
  \[
  \begin{aligned}
  f_{xx}&=\frac{d^2 f}{dx^2}\\
  &=\frac{d}{dx}\left(\frac{df}{dx}\right),\\
  f_{xy}&=\frac{d}{dy}\left(\frac{df}{dx}\right),\\
  f_{yx}&=\frac{d}{dx}\left(\frac{df}{dy}\right),\\
  f_{yy}&=\frac{d^2 f}{dy^2}\\
  &=\frac{d}{dy}\left(\frac{df}{dy}\right).
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  The subscript records the order of differentiation, from the first letter to the second. For \(f_{xy}\), compute \(\frac{df}{dx}\), then differentiate that result in \(y\). For \(f_{yx}\), compute \(\frac{df}{dy}\), then differentiate that result in \(x\). With two variables there are these four second partials.
:::

::: worked-example
title: Mixed partials of \(x^2 + xy\)
problem: |
  Let \(f(x, y) = x^2 + xy\). Compute the four second partials.
solution: |
  The first partial \(\frac{df}{dx}\) equals \(2x + y\). Differentiating \(2x + y\) in \(x\) gives \(\frac{d^2 f}{dx^2} = 2\). Differentiating \(2x + y\) in \(y\) gives \(f_{xy} = 1\).

  The first partial \(\frac{df}{dy}\) equals \(x\). Differentiating \(x\) in \(x\) gives \(f_{yx} = 1\). Differentiating \(x\) in \(y\) gives \(\frac{d^2 f}{dy^2} = 0\).

  The two mixed partials both equal \(1\).
:::

::: trap
text: |
  The mixed partial \(f_{xy}\) is the derivative of \(\frac{df}{dx}\) with respect to \(y\). For \(f(x, y) = x^2 + xy\), the partial \(\frac{df}{dx}\) equals \(2x + y\). Differentiating \(2x + y\) in \(x\) produces \(f_{xx} = 2\). Differentiating \(2x + y\) in \(y\) produces \(f_{xy} = 1\). The value \(2\) is \(f_{xx}\). The mixed partial equals \(1\).
:::

::: going-deeper
title: Heat and wave checks
text: |
  These two checks are optional. Each one is a second-partial calculation that simplifies to zero.

  Let \(\alpha\) and \(k\) be constants, and set
  \[
  u(x, t) = e^{-\alpha^{2} k^{2} t}\sin(kx).
  \]
  The heat equation asks for the difference \(u_t - \alpha^{2} u_{xx}\) to equal \(0\).

  Let \(a\) be a constant, and set
  \[
  u(x, t) = \sin(x - at) + \ln(x + at).
  \]
  The logarithm is defined for \(x + at > 0\). The wave equation asks for the difference \(u_{tt} - a^{2} u_{xx}\) to equal \(0\).
:::

::: key-points
text: |
  - With two variables there are four second partials, \(f_{xx}\), \(f_{xy}\), \(f_{yx}\) and \(f_{yy}\). The mixed partial \(f_{xy}\) is \(\frac{d}{dy}\bigl(\frac{df}{dx}\bigr)\): differentiate in \(x\) first, then in \(y\).
  - The usual slip computes \(f_{xy}\) for \(f(x, y) = x^2 + xy\) by differentiating \(\frac{df}{dx} = 2x + y\) in \(x\), which gives \(2\). That value is \(f_{xx}\). The mixed partial \(f_{xy}\) differentiates \(2x + y\) in \(y\) and equals \(1\).
:::

::: concept-question
id: l5-higher-derivatives.q-79003e7c
question: |
  For \(f(x, y) = x^2 + xy\), what is \(f_{yx}\)?
options:
  - text: |
      \(1\)
    correct: true
  - text: |
      \(2\)
  - text: |
      \(2x + y\)
  - text: |
      \(x\)
explanation: |
  The partial \(\frac{df}{dy}\) equals \(x\). Differentiating \(x\) in \(x\) gives \(f_{yx} = 1\). The value \(2\) is \(f_{xx}\), and \(2x + y\) is still the first partial \(\frac{df}{dx}\).
:::

::: exercise
id: l5-higher-derivatives.cubic-seconds
tier: basic
topics: [second-partials]
statement: |
  Compute the four second partials of \(f(x, y) = x^3 + y^2\).
solution: |
  The first partial \(\frac{df}{dx}\) equals \(3x^2\), and \(\frac{df}{dy}\) equals \(2y\). Differentiating again gives \(f_{xx} = 6x\) and \(f_{yy} = 2\). Each first partial is free of the other variable, so \(f_{xy} = 0\) and \(f_{yx} = 0\). The mixed partials both equal \(0\).
provenance: written-for-site
steps:
  - f_xx = 6x and f_yy = 2.
  - Both mixed partials equal 0.
verification:
  checks:
    - expr: diff(x**3 + y**2, x, 2) - 6*x
      expected: "0"
    - expr: diff(x**3 + y**2, x, y)
      expected: "0"
    - expr: diff(x**3 + y**2, y, x)
      expected: "0"
    - expr: diff(x**3 + y**2, y, 2) - 2
      expected: "0"
:::

::: section
title: Equality of mixed partials
:::

::: formal-statement
kind: theorem
title: Equality of mixed partials
source:
  source: lecture-notes-5
  page: 4
text: |
  If \(f\) is twice differentiable and its second partial derivatives are continuous, then
  \[
  \frac{d}{dy}\left(\frac{df}{dx}\right) = \frac{d}{dx}\left(\frac{df}{dy}\right),
  \]
  that is, \(f_{xy} = f_{yx}\).
:::

::: plain-explanation
text: |
  For a twice differentiable function with continuous second partials, differentiating \(\frac{df}{dx}\) in \(y\) gives the same function as differentiating \(\frac{df}{dy}\) in \(x\).
:::

::: formal-statement
kind: theorem
title: Clairaut's theorem
source:
  source: handout
  section: "14.6"
  page: 372
text: |
  If the mixed partial derivatives are continuous, then they are equal.
:::

::: plain-explanation
text: |
  The hypothesis is continuity of \(f_{xy}\) and of \(f_{yx}\). Under that hypothesis, \(f_{xy}\) and \(f_{yx}\) are the same function.
:::

::: guided-example
title: Second partials of \(x^2 y^2\)
problem: |
  Let \(f(x, y) = x^2 y^2\). Compute \(f_{xx}\), \(f_{xy}\), \(f_{yx}\) and \(f_{yy}\).
steps:
  - |
    The partial \(\frac{df}{dx}\) equals \(2x y^2\). Differentiating it in \(x\) and in \(y\) gives
    \[
    \begin{aligned}
    f_{xx}&=2y^2,\\
    f_{xy}&=4xy.
    \end{aligned}
    \]
  - |
    The partial \(\frac{df}{dy}\) equals \(2y x^2\). Differentiating it in \(y\) and in \(x\) gives
    \[
    \begin{aligned}
    f_{yy}&=2x^2,\\
    f_{yx}&=4xy.
    \end{aligned}
    \]
  - |
    The mixed partials both equal \(4xy\), so \(f_{xy} = f_{yx}\).
:::

::: key-points
text: |
  - If \(f\) is twice differentiable and its second partials are continuous, then \(\frac{d}{dy}\bigl(\frac{df}{dx}\bigr) = \frac{d}{dx}\bigl(\frac{df}{dy}\bigr)\), that is, \(f_{xy} = f_{yx}\).
  - The hypothesis is continuity of \(f_{xy}\) and of \(f_{yx}\). Under that hypothesis, \(f_{xy}\) and \(f_{yx}\) are the same function.
:::

::: concept-question
id: l5-higher-derivatives.q-50ec5944
question: |
  Theorem 14.6.2 says the mixed partials are equal under which hypothesis?
options:
  - text: |
      The mixed partials are continuous.
    correct: true
  - text: |
      The first partials exist at the point.
  - text: |
      \(f\) is a polynomial.
  - text: |
      \(f(0, 0) = 0\).
explanation: |
  The handout hypothesis is continuity of the mixed partials. When that holds, \(f_{xy} = f_{yx}\).
:::

::: concept-question
id: l5-higher-derivatives.q-c7b7d8c1
question: |
  For \(f(x, y) = x^2 y^2\), what is \(f_{xy}\)?
options:
  - text: |
      \(4xy\)
    correct: true
  - text: |
      \(2y^2\)
  - text: |
      \(2x^2\)
  - text: |
      \(4x^2 y\)
explanation: |
  The partial \(\frac{df}{dx}\) equals \(2x y^2\). Differentiating in \(y\) multiplies by \(2y\) and leaves \(2x\), so \(f_{xy} = 4xy\). The value \(2y^2\) is \(f_{xx}\), and \(2x^2\) is \(f_{yy}\).
:::

::: exercise
id: l5-higher-derivatives.exp-seconds
tier: standard
topics: [second-partials, clairaut]
statement: |
  Compute the four second partials of \(f(x, y) = x e^{y}\), and compare \(f_{xy}\) with \(f_{yx}\).
solution: |
  The partial \(\frac{df}{dx}\) equals \(e^{y}\). The partial \(\frac{df}{dy}\) equals \(x e^{y}\). Then \(f_{xx} = 0\) and \(f_{yy} = x e^{y}\). Differentiating \(e^{y}\) in \(y\) gives \(f_{xy} = e^{y}\). Differentiating \(x e^{y}\) in \(x\) gives \(f_{yx} = e^{y}\). The mixed partials both equal \(e^{y}\).
provenance: written-for-site
steps:
  - f_xx = 0, f_xy = e^y, f_yx = e^y, and f_yy = x e^y.
  - The mixed partials agree.
verification:
  checks:
    - expr: diff(x*exp(y), x, 2)
      expected: "0"
    - expr: diff(x*exp(y), x, y) - exp(y)
      expected: "0"
    - expr: diff(x*exp(y), y, x) - exp(y)
      expected: "0"
    - expr: diff(x*exp(y), y, 2) - x*exp(y)
      expected: "0"
:::

::: exercise
id: l5-higher-derivatives.sin-mixed
tier: exam
topics: [second-partials, clairaut]
statement: |
  Let \(f(x, y) = \sin(xy)\). Compute \(f_{xy}\) and \(f_{yx}\).
solution: |
  The partial \(\frac{df}{dx}\) equals \(y\cos(xy)\). Differentiate that product in \(y\). The factor \(y\) contributes \(\cos(xy)\). The factor \(\cos(xy)\) contributes \(y \cdot \bigl(-\sin(xy) \cdot x\bigr)\). So
  \[
  f_{xy} = \cos(xy) - xy\sin(xy).
  \]
  The partial \(\frac{df}{dy}\) equals \(x\cos(xy)\). The same product rule in \(x\) gives
  \[
  f_{yx} = \cos(xy) - xy\sin(xy).
  \]
  The two mixed partials are equal.
provenance: written-for-site
steps:
  - f_x = y cos(xy) and f_y = x cos(xy).
  - Both mixed partials equal cos(xy) - xy sin(xy).
verification:
  checks:
    - expr: diff(sin(x*y), x, y) - (cos(x*y) - x*y*sin(x*y))
      expected: "0"
    - expr: diff(sin(x*y), y, x) - (cos(x*y) - x*y*sin(x*y))
      expected: "0"
:::

::: exercise
id: l5-higher-derivatives.heat-14-6-10
number: "14.6.10"
tier: standard
topics: [second-partials, heat-equation]
statement: |
  Let \(\alpha\) and \(k\) be constants. Show that
  \[
  u(x, t) = e^{-\alpha^{2} k^{2} t}\sin(kx)
  \]
  satisfies \(u_t - \alpha^{2} u_{xx} = 0\).
solution: |
  The factor \(\sin(kx)\) does not depend on \(t\). Differentiating the exponential in \(t\) multiplies \(u\) by \(-\alpha^{2} k^{2}\). The partial \(u_t\) equals \(-\alpha^{2} k^{2}\, u\).

  The exponential does not depend on \(x\). Differentiating \(\sin(kx)\) twice in \(x\) multiplies \(u\) by \(-k^{2}\). The partial \(u_{xx}\) equals \(-k^{2} u\), so \(\alpha^{2} u_{xx}\) equals \(-\alpha^{2} k^{2}\, u\).

  The difference \(u_t - \alpha^{2} u_{xx}\) equals \(0\).
provenance: written-for-site
steps:
  - u_t equals -alpha^2 k^2 u.
  - alpha^2 u_xx equals the same quantity, so the difference is 0.
verification:
  checks:
    - expr: diff(exp(-alpha**2 * k**2 * t)*sin(k*x), t) - alpha**2 * diff(exp(-alpha**2 * k**2 * t)*sin(k*x), x, 2)
      expected: "0"
:::

::: exercise
id: l5-higher-derivatives.wave-14-6-11
number: "14.6.11"
tier: standard
topics: [second-partials, wave-equation]
statement: |
  Let \(a\) be a constant. Show that
  \[
  u(x, t) = \sin(x - at) + \ln(x + at)
  \]
  satisfies \(u_{tt} - a^{2} u_{xx} = 0\) where \(x + at > 0\).
solution: |
  The logarithm is the natural logarithm, defined when \(x + at > 0\).

  Differentiating in \(t\) gives
  \[
  u_t = -a\cos(x - at) + \frac{a}{x + at}.
  \]
  Differentiating again, the cosine term contributes \(-a^{2}\sin(x - at)\), and the second term contributes \(-\frac{a^{2}}{(x + at)^{2}}\). So
  \[
  u_{tt} = -a^{2}\sin(x - at) - \frac{a^{2}}{(x + at)^{2}}.
  \]

  Differentiating in \(x\) gives
  \[
  u_x = \cos(x - at) + \frac{1}{x + at},
  \]
  and
  \[
  u_{xx} = -\sin(x - at) - \frac{1}{(x + at)^{2}}.
  \]
  Multiplying by \(a^{2}\) reproduces \(u_{tt}\). The difference \(u_{tt} - a^{2} u_{xx}\) equals \(0\).
provenance: written-for-site
steps:
  - u_tt equals -a^2 sin(x - at) - a^2 / (x + at)^2.
  - a^2 u_xx equals the same expression, so the difference is 0.
verification:
  checks:
    - expr: diff(sin(x - a*t) + log(x + a*t), t, 2) - a**2 * diff(sin(x - a*t) + log(x + a*t), x, 2)
      expected: "0"
:::

::: sheet-item
id: l5-higher-derivatives.sheet-clairaut
category: formula
text: |
  If \(f\) is twice differentiable with continuous second partials, then \(\frac{d}{dy}\bigl(\frac{df}{dx}\bigr) = \frac{d}{dx}\bigl(\frac{df}{dy}\bigr)\), that is \(f_{xy} = f_{yx}\). For \(f(x, y) = x^2 + xy\), both mixed partials equal \(1\).
:::

::: sheet-item
id: l5-higher-derivatives.sheet-order
category: recognition
text: |
  \(f_{xy}\) differentiates \(\frac{df}{dx}\) in \(y\). \(f_{xx}\) differentiates \(\frac{df}{dx}\) in \(x\). On \(f = x^2 + xy\), those values are \(1\) and \(2\).
:::

::: sheet-item
id: l5-higher-derivatives.sheet-continuous
category: formula
text: |
  Theorem 14.6.2: if the mixed partials are continuous, then they are equal.
:::

::: exercise
id: l5-higher-derivatives.ex-power-xy-seconds
tier: standard
topics: [second-partials, clairaut]
statement: |
  Let \(f(x, y) = x^y\) for \(x > 0\). Compute the four second partials, and check that \(f_{xy} = f_{yx}\).
solution: |
  Differentiating in \(x\) treats \(y\) as an exponent that stays fixed, so \(f_x = y\,x^{y-1}\). Differentiating in \(y\) treats \(x^y = e^{y\ln x}\) as an exponential in \(y\), so \(f_y = x^y\ln x\).

  Differentiating \(f_x\) in \(x\) gives \(f_{xx} = y(y-1)\,x^{y-2}\). Differentiating \(f_y\) in \(y\) gives \(f_{yy} = x^y(\ln x)^2\).

  Differentiating \(f_x = y\,x^{y-1}\) in \(y\) uses the product rule. The factor \(y\) contributes \(x^{y-1}\), and the factor \(x^{y-1}\) contributes \(y\,x^{y-1}\ln x\). So
  \[
  f_{xy} = x^{y-1}(1 + y\ln x).
  \]
  Differentiating \(f_y = x^y\ln x\) in \(x\) uses the product rule. The factor \(x^y\) contributes \(y\,x^{y-1}\ln x\), and the factor \(\ln x\) contributes \(\frac{x^y}{x} = x^{y-1}\). So
  \[
  \begin{aligned}
  f_{yx}&=y\,x^{y-1}\ln x + x^{y-1}\\
  &=x^{y-1}(1 + y\ln x).
  \end{aligned}
  \]
  The two mixed partials are equal.
provenance: written-for-site
steps:
  - f_x = y x^(y-1) and f_y = x^y ln x.
  - f_xx = y(y-1) x^(y-2) and f_yy = x^y (ln x)^2.
  - Both mixed partials equal x^(y-1)(1 + y ln x).
verification:
  checks:
    - expr: 'simplify(diff(x**y, x, 2) - y*(y - 1)*x**(y - 2))'
      expected: "0"
    - expr: 'simplify(diff(x**y, y, 2) - x**y*log(x)**2)'
      expected: "0"
    - expr: 'simplify(diff(x**y, x, y) - x**(y - 1)*(1 + y*log(x)))'
      expected: "0"
    - expr: 'simplify(diff(x**y, y, x) - x**(y - 1)*(1 + y*log(x)))'
      expected: "0"
:::
