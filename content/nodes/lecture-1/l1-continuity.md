---
id: l1-continuity
lecture: 1
order: 7
title: Continuity
prerequisites: [l1-limits]
sources:
  - { source: handout, section: "2.5", page: 53 }
  - { source: lecture-notes-1, page: 2 }
  - { source: midterm-app }
examWeight: low
status: reviewed
notation: |
  \(\lim_{x \to a^{+}} f(x)\) is the limit from the right, and \(\lim_{x \to a^{-}} f(x)\) is the limit from the left.
---

::: section
title: Continuity at a point
:::

::: formal-statement
kind: definition
title: Continuity at a point
source: { source: lecture-notes-1, page: 2 }
text: |
  \(f\) is **continuous** at \(x_0\) if \(L = f(x_0)\), where \(L\) is the limit of \(f\) at \(x_0\).
:::

::: plain-explanation
text: |
  \(L\) is the number \(f(x)\) approaches as \(x\) approaches \(x_0\). \(f\) is continuous at \(x_0\) when that limit equals the value \(f(x_0)\).
:::

::: worked-example
title: The jump figure
problem: |
  In the jump figure, \(\lim_{x \to x_0} f(x) = L\), and the filled point sits at a different height \(f(x_0)\). Take \(x_0 = 0\), \(L = 1\) and \(f(0) = 3\), with \(f(x) = 1\) for every \(x \neq 0\). Is \(f\) continuous at \(0\)?
solution: |
  \[
  \begin{aligned}
  \lim_{x \to 0} f(x)&=1,\\
  f(0)&=3.
  \end{aligned}
  \]
  The limit and the value differ, so \(f\) is discontinuous at \(0\).
:::

::: guided-example
title: A filled value off the limit
problem: |
  Let \(f(x) = 2x\) when \(x \neq 3\), and let \(f(3) = 0\). Decide whether \(f\) is continuous at \(3\).
steps:
  - |
    For every \(x \neq 3\), the formula is \(2x\), so the limit at \(3\) is the limit of \(2x\).
  - |
    The limit is \(\lim_{x \to 3} 2x = 6\).
  - |
    The defined value is \(f(3) = 0\).
  - |
    The limit is \(6\) and the value is \(0\). They differ, so \(f\) is discontinuous at \(3\).
:::

::: key-points
text: |
  - \(f\) is continuous at \(x_0\) when the limit \(L\) at \(x_0\) equals \(f(x_0)\).
  - Both parts are needed: the limit has to exist and its value has to equal \(f(x_0)\).
  - The usual slip is to stop at the limit. When \(L \neq f(x_0)\), as in the jump figure, \(f\) is discontinuous at \(x_0\).
:::

::: concept-question
id: l1-continuity.q-cb71bfaa
question: |
  The limit of \(f\) at \(x_0\) is \(2\), and \(f(x_0) = 5\). Which statement follows?
options:
  - text: |
      \(f\) is discontinuous at \(x_0\).
    correct: true
  - text: |
      \(f\) is continuous at \(x_0\), because the limit exists.
  - text: |
      \(f\) is continuous at \(x_0\), because \(f(x_0)\) is defined.
  - text: |
      The limit equals \(f(x_0)\).
explanation: |
  Continuity at \(x_0\) requires the limit to equal \(f(x_0)\). Here the limit is \(2\) and the value is \(5\), so \(f\) is discontinuous at \(x_0\).
:::

::: exercise
id: l1-continuity.polynomial-at-a-point
tier: basic
topics: [continuity]
statement: |
  Let \(f(x) = x^2 + 1\). Show that \(f\) is continuous at \(x = 2\).
solution: |
  \[
  \begin{aligned}
  f(2)&=2^2 + 1=5,\\
  \lim_{x \to 2} (x^2 + 1)&=5.
  \end{aligned}
  \]
  The limit equals \(f(2)\), so \(f\) is continuous at \(2\).
provenance: written-for-site
steps:
  - The value \(f(2)\) is \(5\).
  - The limit at \(2\) is \(5\).
  - The limit equals the value, so \(f\) is continuous at \(2\).
verification:
  checks:
    - expr: limit(x**2 + 1, x, 2)
      expected: "5"
    - expr: (x**2 + 1).subs(x, 2)
      expected: "5"
:::

::: section
title: Continuity on the domain and two theorems
:::

::: formal-statement
kind: definition
title: Continuous at a point and on the domain
source: { source: handout, section: "2.5", page: 55 }
text: |
  A function \(f\) is **continuous at a point** \(a\) if
  \[
  \lim_{x \to a} f(x) = f(a).
  \]

  A function \(f\) is **continuous** if it is continuous at every point in its domain.
:::

::: plain-explanation
text: |
  The point \(a\) has to belong to the domain, because the test uses the number \(f(a)\). On the domain, that test is required at every point. At an endpoint, compare \(f(a)\) with the one-sided limit from inside the domain. For \(\sqrt{x}\), the domain is \(x \ge 0\), and
  \[
  \begin{aligned}
  \lim_{x \to 0^{+}} \sqrt{x}&=0,\\
  \sqrt{0}&=0.
  \end{aligned}
  \]
  The right-hand limit at \(0\) equals \(\sqrt{0}\), so \(\sqrt{x}\) is continuous from the right at \(0\).
:::

::: visual
kind: limit
caption: |
  Look at the graph of \(\frac{1}{x}\) near \(x = 0\): the right-hand values grow without bound, and \(0\) is not in the domain.
params:
  f: "1/x"
  a: 0
:::

::: worked-example
title: The reciprocal on its domain
problem: |
  Where is \(f(x) = \frac{1}{x}\) continuous?
solution: |
  The domain is every real number except \(0\), so \(0\) is not in the domain. Let \(a\) be a point of the domain.
  \[
  \begin{aligned}
  \lim_{x \to a} \frac{1}{x}&=\frac{1}{a},\\
  f(a)&=\frac{1}{a}.
  \end{aligned}
  \]
  Those are equal, so \(f\) is continuous at \(a\). The line \(x = 0\) is a vertical asymptote. As \(x\) approaches \(0\) from the right, \(\frac{1}{x}\) grows without bound:
  \[
  \lim_{x \to 0^{+}} \frac{1}{x} = +\infty.
  \]
  Continuity is decided on the domain, so \(f\) is continuous at every point of its domain.
:::

::: trap
text: |
  \(f\) is continuous at a point of its domain when the limit there equals the value there. For \(f(x) = \frac{1}{x}\), the domain is every real number except \(0\). At \(x = 2\),
  \[
  \begin{aligned}
  \lim_{x \to 2} \frac{1}{x}&=\frac{1}{2},\\
  f(2)&=\frac{1}{2},
  \end{aligned}
  \]
  so \(f\) is continuous at \(2\). Removing the asymptote \(x = 0\) from the domain does not make \(\frac{1}{x}\) discontinuous at the points that remain. A wrong version says that the asymptote makes \(\frac{1}{x}\) discontinuous at every remaining point. That version fails at \(x = 2\), where the limit equals the value.
:::

::: formal-statement
kind: definition
title: Bounded
source: { source: handout, section: "2.5", page: 54 }
text: |
  A function \(f\) is **bounded** if there is a number \(M\) such that
  \[
  |f(x)| < M
  \]
  for every \(x\) in the domain of \(f\).
:::

::: plain-explanation
text: |
  Some number \(M\) has to satisfy \(|f(x)| < M\) at every point of the domain.
:::

::: formal-statement
kind: theorem
title: Intermediate value theorem
source: { source: handout, section: "2.5", page: 55 }
text: |
  If \(f\) is continuous on the interval \([a, b]\) and \(d\) is between \(f(a)\) and \(f(b)\), then there is a number \(c\) in \([a, b]\) such that
  \[
  f(c) = d.
  \]
:::

::: plain-explanation
text: |
  When \(f(a)\) and \(f(b)\) have opposite signs, \(d = 0\) lies between them, so some \(c\) in \([a, b]\) satisfies \(f(c) = 0\).
:::

::: key-points
text: |
  - \(f\) is continuous at a point \(a\) when \(\lim_{x \to a} f(x) = f(a)\), and \(a\) has to belong to the domain.
  - \(f\) is continuous when it is continuous at every point of its domain, so \(\frac{1}{x}\) is continuous at every real \(x\) except \(0\).
  - The usual slip is to call \(\frac{1}{x}\) discontinuous because of the asymptote \(x = 0\). The point \(0\) is outside the domain, and at every point of the domain, such as \(x = 2\), the limit equals the value.
  - If \(f\) is continuous on \([a, b]\) and \(d\) is between \(f(a)\) and \(f(b)\), some \(c\) in \([a, b]\) has \(f(c) = d\).
:::

::: concept-question
id: l1-continuity.q-fccea1c2
question: |
  Is \(f(x) = \frac{1}{x}\) continuous at \(x = 0\), and what is \(\lim_{x \to 0^{+}} \frac{1}{x}\)?
options:
  - text: |
      Not continuous (\(0\) is not in the domain). The right-hand limit is \(+\infty\).
    correct: true
  - text: |
      Continuous, with limit \(0\).
  - text: |
      Not continuous. The right-hand limit is \(-\infty\).
  - text: |
      Continuous, with limit \(+\infty\).
explanation: |
  Continuity at \(0\) requires \(0\) to be in the domain. Approaching from the right, the values grow without bound, so the one-sided limit is \(+\infty\).
:::

::: concept-question
id: l1-continuity.q-8d255824
question: |
  Evaluate \(\lim_{x \to 0^{+}} \sqrt{x}\).
options:
  - text: |
      The limit is \(0\), and \(\sqrt{x}\) is continuous from the right at \(0\).
    correct: true
  - text: |
      The limit is \(0\), and \(\sqrt{x}\) is not continuous at \(0\).
  - text: |
      The limit does not exist, because \(\sqrt{x}\) is undefined for \(x < 0\).
  - text: |
      \(1\)
explanation: |
  \(\sqrt{x} \to 0\) as \(x \to 0^{+}\) and \(\sqrt{0} = 0\), so the function is right-continuous at the endpoint. The domain is \(x \ge 0\).
:::

::: exercise
id: l1-continuity.reciprocal
tier: standard
topics: [continuity]
statement: |
  Where is \(f(x) = \frac{1}{x}\) continuous?
solution: |
  The domain is every real number except \(0\). At each such point the limit equals the value. At \(x = 2\),
  \[
  \begin{aligned}
  \lim_{x \to 2} \frac{1}{x}&=\frac{1}{2},\\
  f(2)&=\frac{1}{2}.
  \end{aligned}
  \]
  So \(\frac{1}{x}\) is continuous at every real \(x\) except \(0\).
provenance: written-for-site
steps:
  - The domain is every real \(x\) except \(0\).
  - At \(x = 2\), the limit equals \(\frac{1}{2}\).
verification:
  checks:
    - expr: limit(1/x, x, 2)
      expected: "1/2"
:::

::: exercise
id: l1-continuity.piecewise-jump
tier: exam
topics: [continuity]
statement: |
  Let
  \[
  f(x) =
  \begin{cases}
  x^2 & \text{if } x \neq 1, \\
  4 & \text{if } x = 1.
  \end{cases}
  \]
  Find \(\lim_{x \to 1} f(x)\) and \(f(1)\), and decide whether \(f\) is continuous at \(1\).
solution: |
  For every \(x \neq 1\), \(f(x) = x^2\), so
  \[
  \begin{aligned}
  \lim_{x \to 1} f(x)&=\lim_{x \to 1} x^2 = 1,\\
  f(1)&=4.
  \end{aligned}
  \]
  The limit and the value differ, so \(f\) is discontinuous at \(1\).
provenance: written-for-site
steps:
  - The limit of \(x^2\) at \(1\) is \(1\).
  - The value \(f(1)\) is \(4\).
  - The two numbers differ, so \(f\) is discontinuous at \(1\).
verification:
  checks:
    - expr: limit(x**2, x, 1)
      expected: "1"
    - expr: "4"
      expected: "4"
    - expr: limit(x**2, x, 1) - 4
      expected: "-3"
:::

::: sheet-item
id: l1-continuity.sheet-definition
category: formula
text: |
  \(f\) is continuous at \(x_0\) when the limit \(L\) equals \(f(x_0)\). At a point \(a\) in the domain, \(\lim_{x \to a} f(x) = f(a)\).
:::

::: sheet-item
id: l1-continuity.sheet-jump
category: recognition
text: |
  The jump figure shows an open circle at height \(L\) and a filled dot at a different height \(f(x_0)\). The limit is \(L\) and \(L \neq f(x_0)\), so \(f\) is discontinuous at \(x_0\).
:::

::: sheet-item
id: l1-continuity.sheet-asymptote
category: trap
text: |
  Removing the asymptote \(x = 0\) from the domain of \(\frac{1}{x}\) leaves \(\frac{1}{x}\) continuous at the points that remain. A wrong version says the asymptote makes every remaining point discontinuous. It fails at \(x = 2\), where the limit equals \(\frac{1}{2}\).
:::
