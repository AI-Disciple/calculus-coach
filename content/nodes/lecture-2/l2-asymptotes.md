---
id: l2-asymptotes
lecture: 2
order: 4
title: Domain, intercepts and asymptotes of a curve
prerequisites: [l1-functions, l1-limit-techniques]
sources:
  - { source: handout, section: "5.5", page: 115 }
  - { source: lecture-notes-2, page: 1 }
  - { source: sheet-1, page: 2 }
  - { source: midterm-app }
examWeight: high
examWeightNote: The sketch is worth 6 of the 20 midterm points.
status: reviewed
---

::: section
title: Domain, vertical asymptotes and holes
:::

::: formal-statement
kind: definition
title: Vertical asymptote
source: { source: handout, section: "5.5", page: 115 }
text: |
  The vertical line \(x = x_0\) is a vertical asymptote of \(f\) when at least one one-sided limit of \(f\) at \(x_0\) equals \(+\infty\) or \(-\infty\).
:::

::: plain-explanation
text: |
  The graph runs off to infinity beside that vertical line. One side is enough, and the two sides may go to opposite infinities. A two-sided limit equal to \(+\infty\) is one special case of this test.
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(1/x\). Switch on the vertical asymptote layer and look at the line \(x = 0\). The graph rises beside it on the right and falls beside it on the left.
params:
  f: "1/x"
  xmin: -4
  xmax: 4
  layers: [vertical]
:::

::: formal-statement
kind: definition
title: Hole
source: { source: handout, section: "5.5", page: 115 }
text: |
  Let \(f(x) = \frac{\sin x}{x}\). The denominator is zero at \(x = 0\), and
  \[
  \lim_{x \to 0} f(x) = 1.
  \]
  The limit is finite, so \(x = 0\) is not a vertical asymptote. That missing point is a **hole**.
:::

::: plain-explanation
text: |
  A zero of the denominator is a candidate. Compute the limit there:

  - An infinite limit produces a vertical asymptote.
  - A finite limit produces a hole, one missing point at a finite height.
:::

::: trap
text: |
  A two-sided limit equal to \(+\infty\) fails on \(f(x) = \frac{1}{x}\) at \(x = 0\):

  - At \(x = \frac{1}{100}\), \(f(x) = 100\).
  - At \(x = -\frac{1}{100}\), \(f(x) = -100\).

  The two-sided limit does not equal \(+\infty\). The right-hand limit is \(+\infty\) and the left-hand limit is \(-\infty\), so the line \(x = 0\) is a vertical asymptote.
:::

::: key-points
text: |
  - The line \(x = x_0\) is a vertical asymptote when at least one one-sided limit of \(f\) at \(x_0\) is \(+\infty\) or \(-\infty\).
  - A zero of the denominator is only a candidate. An infinite limit there gives a vertical asymptote, and a finite limit gives a hole.
  - The usual slip asks for the two-sided limit to equal \(+\infty\). For \(f(x) = \frac{1}{x}\) that fails, yet \(x = 0\) is a vertical asymptote because the right-hand limit is \(+\infty\) and the left-hand limit is \(-\infty\).
:::

::: concept-question
id: l2-asymptotes.q-9eba67f9
question: |
  What is the domain of \(f(x) = \sqrt{x^{2} - 1}\)?
options:
  - text: |
      \((-\infty, -1] \cup [1, +\infty)\)
    correct: true
  - text: |
      \([-1, 1]\)
  - text: |
      \((-\infty, -1) \cup (1, +\infty)\)
  - text: |
      \(\mathbb{R}\)
explanation: |
  The square root needs \(x^{2} - 1 \ge 0\), which is \(|x| \ge 1\). The endpoints \(\pm 1\) are included, because \(\sqrt{0}\) is defined.
:::

::: concept-question
id: l2-asymptotes.q-0f397063
question: |
  What is the domain of \(f(x) = \frac{\sqrt{1 + x}}{x}\)?
options:
  - text: |
      \([-1, +\infty) \setminus \{0\}\)
    correct: true
  - text: |
      \((-1, +\infty)\)
  - text: |
      \([-1, +\infty)\)
  - text: |
      \((0, +\infty)\)
explanation: |
  - The root needs \(1 + x \ge 0\), so \(x \ge -1\).
  - The denominator forbids \(x = 0\).

  At \(x = -1\) the value is \(0\).
:::

::: concept-question
id: l2-asymptotes.q-f4208f23
question: |
  What is the domain of \(f(x) = x^{1/4} \ln x\)?
options:
  - text: |
      \((0, +\infty)\)
    correct: true
  - text: |
      \([0, +\infty)\)
  - text: |
      \(\mathbb{R} \setminus \{0\}\)
  - text: |
      \((1, +\infty)\)
explanation: |
  - The fourth root allows \(x \ge 0\).
  - The logarithm \(\ln x\) needs \(x > 0\).

  The intersection is \(x > 0\).
:::

::: concept-question
id: l2-asymptotes.q-9ae74917
question: |
  What is the domain of \(f(x) = \sqrt{x^{2} + 3x + 1}\)?
options:
  - text: |
      \(\left(-\infty, \frac{-3 - \sqrt{5}}{2}\right] \cup \left[\frac{-3 + \sqrt{5}}{2}, +\infty\right)\)
    correct: true
  - text: |
      \(\mathbb{R}\)
  - text: |
      \(\left[\frac{-3 - \sqrt{5}}{2}, \frac{-3 + \sqrt{5}}{2}\right]\)
  - text: |
      \((-\infty, -3] \cup [1, +\infty)\)
explanation: |
  The quadratic has roots \(\frac{-3 \pm \sqrt{5}}{2}\) and opens upwards, so it is nonnegative outside those roots.
:::

::: concept-question
id: l2-asymptotes.q-a11b071e
question: |
  What is the domain of \(f(x) = \frac{1}{1 - x^{2}}\)?
options:
  - text: |
      \(\mathbb{R} \setminus \{-1, 1\}\)
    correct: true
  - text: |
      \((-1, 1)\)
  - text: |
      \(\mathbb{R} \setminus \{0\}\)
  - text: |
      \([-1, 1]\)
explanation: |
  The zeros of the denominator are excluded: \(1 - x^{2} = 0\) at \(x = \pm 1\). Everywhere else the function is defined.
:::

::: concept-question
id: l2-asymptotes.q-94570150
question: |
  What is the domain of \(f(x) = \tan^{2} x\)?
options:
  - text: |
      \(\mathbb{R} \setminus \left\{\frac{\pi}{2} + k\pi : k \in \mathbb{Z}\right\}\)
    correct: true
  - text: |
      \(\mathbb{R}\)
  - text: |
      \([0, \pi]\)
  - text: |
      \(\mathbb{R} \setminus \{k\pi : k \in \mathbb{Z}\}\)
explanation: |
  \(\tan x = \frac{\sin x}{\cos x}\) is undefined where \(\cos x = 0\), that is at \(\frac{\pi}{2} + k\pi\). Squaring does not restore those points.
:::

::: exercise
id: l2-asymptotes.basic-sin-over-x
tier: basic
topics: [asymptotes]
statement: |
  Evaluate \(\lim_{x \to 0} \frac{\sin x}{x}\). Decide whether \(x = 0\) is a vertical asymptote of \(f(x) = \frac{\sin x}{x}\).
solution: |
  The limit equals \(1\). A vertical asymptote needs an infinite one-sided limit. This limit is finite, so \(x = 0\) is not a vertical asymptote. The missing point at \(x = 0\) is a hole.
provenance: written-for-site
verification:
  checks:
    - expr: limit(sin(x)/x, x, 0)
      expected: "1"
:::

::: section
title: Horizontal and oblique asymptotes
:::

::: formal-statement
kind: definition
title: Horizontal asymptote
source: { source: handout, section: "5.5", page: 115 }
text: |
  - If \(\lim_{x \to +\infty} f(x) = L\) with \(L\) finite, the line \(y = L\) is a **horizontal asymptote** at \(+\infty\).
  - If \(\lim_{x \to -\infty} f(x) = L\) with \(L\) finite, the line \(y = L\) is a horizontal asymptote at \(-\infty\).
:::

::: plain-explanation
text: |
  Compute the limit at each infinity on its own. A finite value is the height of the horizontal line the graph approaches on that side. The two heights can differ.
:::

::: formal-statement
kind: method
title: Oblique asymptote
source: { source: lecture-notes-2, page: 1 }
text: |
  The line \(y = ax + b\), where \(a\) is a finite nonzero number, is an **oblique asymptote** of \(f\) at \(+\infty\) when
  \[
  \lim_{x \to +\infty}\bigl(f(x) - (ax + b)\bigr) = 0.
  \]
  The same difference test at \(-\infty\) is a separate computation. The course finds the coefficients at the infinity in question by
  \[
  a = \lim \frac{f(x)}{x}, \qquad b = \lim \bigl(f(x) - ax\bigr).
  \]
:::

::: plain-explanation
text: |
  1. Divide by \(x\) and read the slope \(a\).
  2. Subtract \(ax\) and read the constant \(b\).
  3. Repeat the two limits at the other infinity, because the slope there can change sign.

  The difference \(f(x) - (ax + b)\) is the check that the graph approaches the line.
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(\sqrt{x^2+3x+1}\). Switch on the domain and the asymptotes. The two ends have different oblique asymptotes.
params:
  f: "sqrt(x^2+3x+1)"
  xmin: -6
  xmax: 4
  layers: [domain, end-behaviour]
:::

::: worked-example
title: Both oblique asymptotes of a square root
problem: |
  Find the oblique asymptotes of \(f(x) = \sqrt{x^{2} + 3x + 1}\).
solution: |
  The formula is defined for all large positive \(x\) and all large negative \(x\), so both infinities can be tested.

  **At \(+\infty\).** The slope is
  \[
  \begin{aligned}
  a&= \lim_{x \to +\infty} \frac{f(x)}{x}\\
  &= \lim_{x \to +\infty} \sqrt{1 + \frac{3}{x} + \frac{1}{x^{2}}}\\
  &= 1.
  \end{aligned}
  \]
  The constant term is the next limit. The difference equals
  \[
  f(x) - x = \frac{3x + 1}{\sqrt{x^{2} + 3x + 1} + x}.
  \]
  For \(x > 0\), divide the numerator and the denominator by \(x\):
  \[
  \frac{3 + \frac{1}{x}}{\sqrt{1 + \frac{3}{x} + \frac{1}{x^{2}}} + 1} \to \frac{3}{2}.
  \]
  So \(b = \frac{3}{2}\), and the candidate line is \(y = x + \frac{3}{2}\). The check is
  \[
  \lim_{x \to +\infty} \left(f(x) - \left(x + \frac{3}{2}\right)\right) = 0.
  \]
  The right-hand oblique asymptote is \(y = x + \frac{3}{2}\).

  **At \(-\infty\).** Here \(\sqrt{x^{2}} = -x\), so
  \[
  \frac{f(x)}{x} = -\sqrt{1 + \frac{3}{x} + \frac{1}{x^{2}}} \to -1.
  \]
  The slope is \(a = -1\). Then
  \[
  f(x) + x = \frac{3x + 1}{\sqrt{x^{2} + 3x + 1} - x}.
  \]
  Divide the numerator and the denominator by \(x\):

  - The numerator tends to \(3\).
  - In the denominator, \(\sqrt{x^{2} + 3x + 1}/x\) tends to \(-1\), so the denominator tends to \(-2\).

  The quotient tends to \(-\frac{3}{2}\), so \(b = -\frac{3}{2}\). The candidate is \(y = -x - \frac{3}{2}\). The check is
  \[
  \lim_{x \to -\infty} \left(f(x) - \left(-x - \frac{3}{2}\right)\right) = 0.
  \]
  The left-hand oblique asymptote is \(y = -x - \frac{3}{2}\).

  The same two limits for \(\sqrt{x^{2} + px + q}\) give

  - the right-hand line \(y = x + \frac{p}{2}\),
  - the left-hand line \(y = -x - \frac{p}{2}\).
:::

::: guided-example
title: Asymptotes of a rational function
problem: |
  Find the asymptotes of \(f(x) = \frac{1}{1 - x^{2}}\).
steps:
  - |
    The denominator \(1 - x^{2}\) is zero at \(x = \pm 1\), so the lines \(x = \pm 1\) are the candidates for vertical asymptotes.
  - |
    - As \(x \to 1^{-}\), \(f(x) \to +\infty\).
    - As \(x \to 1^{+}\), \(f(x) \to -\infty\).
    - As \(x \to -1^{-}\), \(f(x) \to -\infty\).
    - As \(x \to -1^{+}\), \(f(x) \to +\infty\).

    Both \(x = 1\) and \(x = -1\) are vertical asymptotes.
  - |
    The numerator stays \(1\) while the denominator grows like \(x^{2}\). As \(x \to +\infty\) and as \(x \to -\infty\), \(f(x) \to 0\). The line \(y = 0\) is a horizontal asymptote in both directions.
:::

::: trap
text: |
  Take \(f(x) = \sqrt{x^{2} + x}\). The ratio limit is
  \[
  \lim_{x \to +\infty} \frac{f(x)}{x} = 1,
  \]
  so a ratio test accepts the line \(t(x) = x\). The difference tends to a nonzero constant:
  \[
  \lim_{x \to +\infty} \bigl(f(x) - x\bigr) = \frac{1}{2}.
  \]
  The graph stays \(\frac{1}{2}\) away from \(y = x\). The line it approaches is \(y = x + \frac{1}{2}\), because
  \[
  \lim_{x \to +\infty} \left(f(x) - \left(x + \frac{1}{2}\right)\right) = 0.
  \]
:::

::: key-points
text: |
  - If \(\lim_{x \to +\infty} f(x) = L\) with \(L\) finite, then \(y = L\) is a horizontal asymptote at \(+\infty\). The same test at \(-\infty\) is a separate computation, and the two heights can differ.
  - The line \(y = ax + b\) is an oblique asymptote when \(f(x) - (ax + b) \to 0\), with \(a = \lim \frac{f(x)}{x}\) and \(b = \lim \bigl(f(x) - ax\bigr)\) computed at the infinity in question.
  - The usual slip stops after the ratio limit and accepts \(y = x\) for \(\sqrt{x^{2} + x}\). The difference \(f(x) - x\) tends to \(\frac{1}{2}\), so the line approached is \(y = x + \frac{1}{2}\).
:::

::: going-deeper
title: Lines the handout sets aside
text: |
  The handout names lines that are neither horizontal nor vertical, and then sets them aside. The course still computes those lines by the test \(f(x) - (ax + b) \to 0\).
:::

::: concept-question
id: l2-asymptotes.q-077c94d7
question: |
  What is the horizontal asymptote of \(f(x) = \frac{x^{2}}{x^{2} + 9}\)?
options:
  - text: |
      \(y = 1\)
    correct: true
  - text: |
      \(y = 0\)
  - text: |
      \(y = 9\)
  - text: |
      No horizontal asymptote.
explanation: |
  Numerator and denominator have the same degree, so the limit at \(\pm\infty\) is the ratio of leading coefficients, \(1\).
:::

::: concept-question
id: l2-asymptotes.q-4060bf5a
question: |
  For \(f(x) = \sqrt{x^{2} + 4x}\), \(\lim_{x \to +\infty} \frac{f(x)}{x} = 1\). Which line is the oblique asymptote at \(+\infty\)?
options:
  - text: |
      \(y = x + 2\)
    correct: true
  - text: |
      \(y = x\)
  - text: |
      \(y = x + 4\)
  - text: |
      \(y = 2x\)
explanation: |
  The ratio limit gives only the slope \(a = 1\). The constant comes from
  \[
  \begin{aligned}
  f(x) - x&= \frac{4x}{\sqrt{x^{2} + 4x} + x}\\
  &= \frac{4}{\sqrt{1 + \frac{4}{x}} + 1}\\
  &\to 2.
  \end{aligned}
  \]
  So \(b = 2\), and \(f(x) - (x + 2) \to 0\).

  - The line \(y = x\) stays \(2\) away from the graph.
  - The line \(y = x + 4\) is the numerator limit without the denominator \(\sqrt{1 + 4/x} + 1 \to 2\).
:::

::: exercise
id: l2-asymptotes.standard-oblique-sqrt
tier: standard
topics: [asymptotes]
statement: |
  Find both oblique asymptotes of \(f(x) = \sqrt{x^{2} + 3x + 1}\).
solution: |
  **At \(+\infty\).**
  \[
  \begin{aligned}
  \lim f(x)/x&= 1,\\
  \lim\bigl(f(x) - x\bigr)&= \frac{3}{2}.
  \end{aligned}
  \]
  The difference check is
  \[
  \lim_{x \to +\infty} \left(f(x) - \left(x + \frac{3}{2}\right)\right) = 0,
  \]
  so the right-hand asymptote is \(y = x + \frac{3}{2}\).

  **At \(-\infty\).**
  \[
  \begin{aligned}
  \lim f(x)/x&= -1,\\
  \lim\bigl(f(x) + x\bigr)&= -\frac{3}{2}.
  \end{aligned}
  \]
  The difference check is
  \[
  \lim_{x \to -\infty} \left(f(x) - \left(-x - \frac{3}{2}\right)\right) = 0,
  \]
  so the left-hand asymptote is \(y = -x - \frac{3}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: limit(sqrt(x**2 + 3*x + 1) - (x + Rational(3, 2)), x, oo)
      expected: "0"
    - expr: limit(sqrt(x**2 + 3*x + 1) - (-x - Rational(3, 2)), x, -oo)
      expected: "0"
:::

::: exercise
id: l2-asymptotes.exam-x-plus-reciprocal
tier: exam
topics: [asymptotes]
statement: |
  Find the vertical, horizontal and oblique asymptotes of \(f(x) = x + \frac{1}{x}\).
solution: |
  The expression is undefined at \(x = 0\).

  - As \(x \to 0^{+}\), \(f(x) \to +\infty\).
  - As \(x \to 0^{-}\), \(f(x) \to -\infty\).

  The line \(x = 0\) is a vertical asymptote.

  At both infinities,
  \[
  f(x) - x = \frac{1}{x} \to 0.
  \]
  The line \(y = x\) is an oblique asymptote at \(+\infty\) and at \(-\infty\).

  - As \(x \to +\infty\), \(f(x) \to +\infty\).
  - As \(x \to -\infty\), \(f(x) \to -\infty\).

  Neither limit is a finite height, so \(f\) has no horizontal asymptote.
provenance: written-for-site
verification:
  checks:
    - expr: limit((x + 1/x) - x, x, oo)
      expected: "0"
    - expr: limit((x + 1/x) - x, x, -oo)
      expected: "0"
    - expr: limit(1/(x + 1/x), x, oo)
      expected: "0"
    - expr: sign((x + 1/x).subs(x, 10))
      expected: "1"
    - expr: limit(1/(x + 1/x), x, -oo)
      expected: "0"
    - expr: sign((x + 1/x).subs(x, -10))
      expected: "-1"
    - expr: limit(1/(x + 1/x), x, 0, dir='+')
      expected: "0"
    - expr: sign((x + 1/x).subs(x, Rational(1, 10)))
      expected: "1"
    - expr: limit(1/(x + 1/x), x, 0, dir='-')
      expected: "0"
    - expr: sign((x + 1/x).subs(x, -Rational(1, 10)))
      expected: "-1"
:::

::: sheet-item
id: l2-asymptotes.sheet-vertical
category: formula
text: |
  The line \(x = x_0\) is a vertical asymptote when at least one one-sided limit of \(f\) is \(+\infty\) or \(-\infty\).
:::

::: sheet-item
id: l2-asymptotes.sheet-horizontal
category: formula
text: |
  A finite limit \(\lim_{x \to +\infty} f(x) = L\), or the same limit at \(-\infty\), means the horizontal asymptote \(y = L\) on that side.
:::

::: sheet-item
id: l2-asymptotes.sheet-oblique
category: formula
text: |
  The line \(y = ax + b\) is an oblique asymptote when \(f(x) - (ax + b) \to 0\). Compute \(a = \lim f(x)/x\) and \(b = \lim\bigl(f(x) - ax\bigr)\) separately at \(+\infty\) and at \(-\infty\).
:::

::: sheet-item
id: l2-asymptotes.sheet-hole
category: trap
text: |
  A zero denominator with a finite limit is a hole. For \(\frac{\sin x}{x}\) at \(0\), the limit equals \(1\), so \(x = 0\) is not a vertical asymptote.
:::

::: exercise
id: l2-asymptotes.ex-asymptotes-sqrt-scaled
tier: standard
topics: [asymptotes]
statement: |
  Let \(f(x) = \sqrt{4x^{2} + 4x + 3}\). Find its domain, and find all vertical, horizontal and oblique asymptotes.
solution: |
  The quadratic \(4x^{2} + 4x + 3\) has discriminant
  \[
  16 - 48 = -32 < 0
  \]
  and a positive leading coefficient, so it is positive for every real \(x\). The domain is \(\mathbb{R}\). The function is continuous on \(\mathbb{R}\), so there is no vertical asymptote.

  **At \(+\infty\).** The slope is
  \[
  \begin{aligned}
  a&= \lim_{x \to +\infty} \frac{f(x)}{x}\\
  &= \lim_{x \to +\infty} \sqrt{4 + \frac{4}{x} + \frac{3}{x^{2}}}\\
  &= 2.
  \end{aligned}
  \]
  The constant term comes from
  \[
  \begin{aligned}
  f(x) - 2x&= \frac{4x + 3}{\sqrt{4x^{2} + 4x + 3} + 2x}\\
  &= \frac{4 + \frac{3}{x}}{\sqrt{4 + \frac{4}{x} + \frac{3}{x^{2}}} + 2}\\
  &\to \frac{4}{4} = 1.
  \end{aligned}
  \]
  So \(b = 1\), and \(\lim_{x \to +\infty} \bigl(f(x) - (2x + 1)\bigr) = 0\). The line \(y = 2x + 1\) is an oblique asymptote at \(+\infty\).

  **At \(-\infty\).** Here \(\sqrt{x^{2}} = -x\), so
  \[
  \begin{aligned}
  a&= \lim_{x \to -\infty} \frac{f(x)}{x}\\
  &= -\lim_{x \to -\infty} \sqrt{4 + \frac{4}{x} + \frac{3}{x^{2}}}\\
  &= -2.
  \end{aligned}
  \]
  Then
  \[
  f(x) + 2x = \frac{4x + 3}{\sqrt{4x^{2} + 4x + 3} - 2x}.
  \]
  Divide the numerator and the denominator by \(x\):

  - The numerator tends to \(4\).
  - In the denominator, \(\sqrt{4x^{2} + 4x + 3}/x \to -2\), so the denominator tends to \(-2 - 2 = -4\).

  The quotient tends to \(-1\), so \(b = -1\), and \(\lim_{x \to -\infty} \bigl(f(x) - (-2x - 1)\bigr) = 0\). The line \(y = -2x - 1\) is an oblique asymptote at \(-\infty\).

  The slopes \(\pm 2\) are not zero, and \(f(x) \to +\infty\) at both infinities, so there is no horizontal asymptote.
provenance: written-for-site
steps:
  - The domain is \(\mathbb{R}\), because the discriminant is negative, so there is no vertical asymptote.
  - At \(+\infty\), the slope is \(2\) and the constant is \(1\), giving \(y = 2x + 1\).
  - At \(-\infty\), the slope is \(-2\) and the constant is \(-1\), giving \(y = -2x - 1\).
  - There is no horizontal asymptote.
verification:
  checks:
    - expr: limit(sqrt(4*x**2 + 4*x + 3)/x, x, oo)
      expected: "2"
    - expr: limit(sqrt(4*x**2 + 4*x + 3) - 2*x, x, oo)
      expected: "1"
    - expr: limit(sqrt(4*x**2 + 4*x + 3)/x, x, -oo)
      expected: "-2"
    - expr: limit(sqrt(4*x**2 + 4*x + 3) + 2*x, x, -oo)
      expected: "-1"
    - expr: limit(sqrt(4*x**2 + 4*x + 3) - (2*x + 1), x, oo)
      expected: "0"
    - expr: limit(sqrt(4*x**2 + 4*x + 3) - (-2*x - 1), x, -oo)
      expected: "0"
    - expr: discriminant(4*x**2 + 4*x + 3, x)
      expected: "-32"
:::

::: exercise
id: l2-asymptotes.ex-asymptotes-reciprocal-quadratic
tier: standard
topics: [asymptotes]
statement: |
  Let \(f(x) = \frac{1}{1 - x^{2}}\).

  - (a) Find the domain of \(f\) and the four one-sided limits at the points that are not in it.
  - (b) Find all vertical and horizontal asymptotes.
  - (c) Find the range of \(f\).
solution: |
  **(a)** The denominator \(1 - x^{2}\) vanishes at \(x = \pm 1\), so the domain is \(\mathbb{R} \setminus \{-1, 1\}\). The sign of \(1 - x^{2}\) is

  - positive on \((-1, 1)\),
  - negative for \(|x| > 1\).

  The four one-sided limits are:

  - As \(x \to 1^{-}\), the denominator tends to \(0\) through positive values, so \(f(x) \to +\infty\).
  - As \(x \to 1^{+}\), it tends to \(0\) through negative values, so \(f(x) \to -\infty\).
  - As \(x \to -1^{-}\), we have \(|x| > 1\), so \(f(x) \to -\infty\).
  - As \(x \to -1^{+}\), we have \(|x| < 1\), so \(f(x) \to +\infty\).

  **(b)** At each of \(x = 1\) and \(x = -1\) the one-sided limits are infinite, so both lines are vertical asymptotes. As \(x \to \pm\infty\), the numerator stays \(1\) and the denominator has absolute value tending to \(+\infty\), so \(f(x) \to 0\). The line \(y = 0\) is a horizontal asymptote at both infinities. The graph never meets it, because \(f(x) = 0\) has no solution.

  **(c)**

  - On \((-1, 1)\), the value \(1 - x^{2}\) takes every value in \((0, 1]\), with the maximum \(1\) at \(x = 0\), so \(f\) takes every value in \([1, +\infty)\).
  - For \(|x| > 1\), the value \(1 - x^{2}\) takes every value in \((-\infty, 0)\), so \(f\) takes every value in \((-\infty, 0)\).

  The range is
  \[
  (-\infty, 0) \cup [1, +\infty).
  \]
provenance: written-for-site
steps:
  - The domain is \(\mathbb{R} \setminus \{-1, 1\}\), and the four one-sided limits are \(+\infty\), \(-\infty\), \(-\infty\), \(+\infty\) in the order given.
  - The lines \(x = 1\) and \(x = -1\) are vertical asymptotes, and \(y = 0\) is a horizontal asymptote at both ends.
  - The range is \((-\infty, 0) \cup [1, +\infty)\).
verification:
  checks:
    - expr: limit(1-x**2, x, 1, dir='-')
      expected: "0"
    - expr: sign((1-x**2).subs(x, Rational(9,10)))
      expected: "1"
    - expr: sign((1-x**2).subs(x, Rational(11,10)))
      expected: "-1"
    - expr: sign((1-x**2).subs(x, -Rational(11,10)))
      expected: "-1"
    - expr: sign((1-x**2).subs(x, -Rational(9,10)))
      expected: "1"
    - expr: limit(1/(1-x**2), x, oo)
      expected: "0"
    - expr: limit(1/(1-x**2), x, -oo)
      expected: "0"
    - expr: (1/(1-x**2)).subs(x, 0)
      expected: "1"
    - expr: sign((1/(1-x**2)).subs(x, 2))
      expected: "-1"
    - expr: sign((1/(1-x**2)).subs(x, -3))
      expected: "-1"
:::
