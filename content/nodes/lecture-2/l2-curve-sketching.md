---
id: l2-curve-sketching
lecture: 2
order: 7
title: The full curve-sketching procedure
prerequisites: [l2-asymptotes, l2-monotonicity-extrema, l2-concavity]
sources:
  - { source: handout, section: "5.5", page: 115 }
  - { source: lecture-notes-2, page: 1 }
  - { source: lecture-notes-3, page: 1 }
  - { source: sheet-1, page: 2 }
  - { source: curves-revision }
  - { source: midterm-app }
  - { source: midterm-mock-1, page: 1 }
  - { source: midterm-2021, page: 1 }
  - { source: midterm-2022, page: 1 }
  - { source: midterm-2024, page: 1 }
  - { source: midterm-2025, page: 1 }
  - { source: midterm-2026-key, page: 1 }
examWeight: high
examWeightNote: The sketch is worth 6 of the 20 midterm points.
status: reviewed
---

::: formal-statement
kind: method
title: Write-up order
source: { source: curves-revision }
text: |
  On the paper, write these lines, in this order, for each function. A blank line is a lost mark. Draw from the finished chart.

  1. Domain. Even root: inside \(\ge 0\). Denominator \(\ne 0\). \(\ln\): argument \(> 0\). \(\tan\): \(\cos x \ne 0\). Intersect them.
  2. Symmetry or period. Even, odd, or periodic: study one piece and copy it. Say which.
  3. Rewrite before differentiating, if a rewrite exists.
  4. Limits at every hole in the domain, and at \(+\infty\) and \(-\infty\) when those are ends. Each limit is an asymptote, a hole, or a finite end.
  5. \(f'\), factored. Sign chart. A local extremum is a sign change of \(f'\), with the value \(f(c)\) written on the chart.
  6. \(f''\) when the prompt says inflexion, and whenever \(f'(c) = f''(c) = 0\). Inflexion means \(f''\) changes sign.
  7. Intercepts. \(f(0)\) if \(0\) is allowed. Roots if they factor. If a root is ugly, bracket it between two values you already have.
  8. Draw asymptotes and the labelled points first. Then the curve. At a finite end, look at \(f'\): a blow-up is a vertical tangent.

  One model chart, the 2025 quartic. Same grid for every other function.

  | \(x\) | \(-\infty\) |  | \(-\sqrt{2}\) |  | \(0\) |  | \(\sqrt{2}\) |  | \(+\infty\) |
  | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  | \(f'\) |  | \(-\) | \(0\) | \(+\) | \(0\) | \(-\) | \(0\) | \(+\) |  |
  | \(f\) | \(+\infty\) | falls | \(-3\) | rises | \(1\) | falls | \(-3\) | rises | \(+\infty\) |

  Local min at \(\pm\sqrt{2}\), local max at \(0\). The arrows are the sentence "decreasing, then increasing".
:::

::: plain-explanation
text: |
  The midterm sketch is worth 6 of 20 points. On the paper, write these, in this order:

  1. the domain,
  2. the derivative,
  3. the sign chart,
  4. the asymptotes,
  5. the intercepts,
  6. the inflection, when the question asks for it,
  7. the sketch.

  A blank line in that list is a lost mark. The **sign chart** records where the derivative is positive, negative, or zero, together with the value of the function at each critical point. Draw the asymptotes and the labelled points, then draw the curve.
:::

::: visual
kind: curve-sketch
caption: |
  Switch the layers on one at a time, in the order of the midterm template. The function is \(\frac{x^2}{x-1}\). Type another function to practise.
params:
  f: "x^2/(x-1)"
  xmin: -5
  xmax: 6
  layers: [domain, vertical]
:::

::: sheet-item
id: l2-curve-sketching.check-01
category: recognition
text: |
  Write the domain before any derivative, and intersect every condition.
:::

::: sheet-item
id: l2-curve-sketching.check-02
category: recognition
text: |
  Test even, odd, and period. Copy the half you have earned. The cubic has no symmetry.
:::

::: sheet-item
id: l2-curve-sketching.check-03
category: recognition
text: |
  Rewrite or substitute when the form is one of the twelve. Split powers, set \(t = \sqrt{x}\), set \(X = x^{2}\).
:::

::: sheet-item
id: l2-curve-sketching.check-04
category: recognition
text: |
  Classify every gap: vertical asymptote, hole, or vertical tangent. Value and slope, separately.
:::

::: sheet-item
id: l2-curve-sketching.check-05
category: trap
text: |
  Factor \(f'\). Read the sign from the numerator. A squared factor does not give a max or a min.
:::

::: sheet-item
id: l2-curve-sketching.check-06
category: recognition
text: |
  Put the value \(f(c)\) on the variation table, not only the arrow.
:::

::: sheet-item
id: l2-curve-sketching.check-07
category: trap
text: |
  Call a point an inflexion only after \(f''\) changes sign.
:::

::: sheet-item
id: l2-curve-sketching.check-08
category: recognition
text: |
  Give intercepts, or a bracket when the root is ugly. \(f(0)\) only if \(0\) is in the domain.
:::

::: sheet-item
id: l2-curve-sketching.check-09
category: formula
text: |
  For \(\sqrt{x^{2} + px + q}\), the right asymptote is \(y = x + p/2\). Check the candidate stationary point is actually in the domain.
:::

::: sheet-item
id: l2-curve-sketching.check-10
category: recognition
text: |
  Draw asymptotes and labelled points first. Eight minutes a function is enough for a 6-point opening.
:::

::: worked-example
title: A full sketch of \(x + 1/x\)
problem: |
  Sketch \(f(x) = x + \frac{1}{x}\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts.
solution: |
  **Domain.** The domain is \(\mathbb{R} \setminus \{0\}\).

  **Derivative.** The derivative is
  \[
  f'(x) = 1 - \frac{1}{x^{2}} = \frac{(x-1)(x+1)}{x^{2}}.
  \]
  The critical points are \(x = -1\) and \(x = 1\).

  **Sign chart.** For \(x \neq 0\) the denominator \(x^{2}\) is positive, so \(f'\) has the sign of \((x-1)(x+1)\). The derivative is:

  - positive on \((-\infty, -1)\),
  - negative on \((-1, 0)\) and on \((0, 1)\),
  - positive on \((1, \infty)\).

  It changes from positive to negative at \(x = -1\), where \(f(-1) = -2\), so \((-1, -2)\) is a **local maximum**. It changes from negative to positive at \(x = 1\), where \(f(1) = 2\), so \((1, 2)\) is a **local minimum**.

  **Asymptotes.** As \(x \to 0^{-}\), \(f(x) \to -\infty\), and as \(x \to 0^{+}\), \(f(x) \to +\infty\), so \(x = 0\) is a **vertical asymptote**. The difference from the line \(y = x\) is
  \[
  f(x) - x = \frac{1}{x},
  \]
  which tends to \(0\) as \(x \to +\infty\) and as \(x \to -\infty\). Thus \(y = x\) is an **oblique asymptote** at both ends.

  - On \((0, \infty)\) one has \(\frac{1}{x} > 0\), so the graph lies above \(y = x\).
  - On \((-\infty, 0)\) one has \(\frac{1}{x} < 0\), so the graph lies below \(y = x\).

  There is no horizontal asymptote: \(f(x) \to +\infty\) as \(x \to +\infty\), and \(f(x) \to -\infty\) as \(x \to -\infty\).

  **Intercepts.**

  - The equation \(f(x) = 0\) has no solution, so there is no x-intercept.
  - The number \(0\) is outside the domain, so there is no y-intercept.

  **Inflection.** The second derivative is
  \[
  f''(x) = \frac{2}{x^{3}}.
  \]
  It is negative on \((-\infty, 0)\) and positive on \((0, \infty)\), so the left branch is concave down and the right branch is concave up. The sign change of \(f''\) sits at the vertical asymptote \(x = 0\), and \(f\) is undefined there. The graph has no inflection point.

  **Conclusion.** The left branch comes up from \(-\infty\), below the asymptote \(y = x\), reaches the local maximum \((-1, -2)\), and then falls to \(-\infty\) as \(x\) approaches \(0\). The right branch falls from \(+\infty\) to the local minimum \((1, 2)\), and then rises toward \(y = x\) from above.
:::

::: guided-example
title: A full sketch of \(x e^{x}\)
problem: |
  Sketch \(f(x) = x e^{x}\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts.
steps:
  - |
    The domain is \(\mathbb{R}\).
  - |
    The derivative is
    \[
    f'(x) = (1 + x)e^{x}.
    \]
  - |
    The factor \(e^{x}\) is positive, so \(f'\) has the sign of \(1 + x\). The derivative is negative on \((-\infty, -1)\) and positive on \((-1, \infty)\).
  - |
    The sign of \(f'\) changes from negative to positive at \(x = -1\), so this critical point is a minimum. The value is \(f(-1) = -\frac{1}{e}\).
  - |
    As \(x \to -\infty\), \(f(x) \to 0\) from below, because \(x < 0\) and \(e^{x}\) tends to \(0\). As \(x \to +\infty\), \(f(x) \to +\infty\).
  - |
    There is no vertical asymptote. The line \(y = 0\) is a horizontal asymptote as \(x \to -\infty\).
  - |
    The only intercept is the origin: \(f(0) = 0\), and \(e^{x}\) never vanishes.
  - |
    The second derivative is
    \[
    f''(x) = (x + 2)e^{x}.
    \]
    It changes sign at \(x = -2\), from negative to positive, so the inflection point is \(\left(-2, -\frac{2}{e^{2}}\right)\). The graph is concave down on \((-\infty, -2)\) and concave up on \((-2, \infty)\).
:::

::: concept-question
id: l2-curve-sketching.q-14f25ebf
question: |
  For \(f(x) = x e^{x}\), identify the minimum and the asymptotic behaviour.
options:
  - text: |
      Minimum at \(x = -1\) with value \(-\frac{1}{e}\). \(f \to 0^{-}\) as \(x \to -\infty\).
    correct: true
  - text: |
      Minimum at \(x = 0\) with value \(0\). \(f \to 0\) as \(x \to -\infty\).
  - text: |
      Maximum at \(x = -1\) with value \(-\frac{1}{e}\). \(f \to -\infty\) as \(x \to -\infty\).
  - text: |
      No extremum. \(f \to 0\) as \(x \to -\infty\).
explanation: |
  The derivative is
  \[
  f' = (1 + x)e^{x}.
  \]
  It vanishes only at \(x = -1\), and the sign of \(f'\) changes from negative to positive there, so that point is a minimum, with value \(f(-1) = -\frac{1}{e}\). As \(x \to -\infty\), \(e^{x}\) goes to \(0\) faster than \(|x|\) grows, so \(f\) approaches \(0\) from below.
:::

::: trap
text: |
  If \(x^{2/3}\) means the square of the **real cube root**, then
  \[
  \left(x^{2/3}\right)^{3} = x^{2}
  \]
  for every real \(x\). The identity \(\left(x^{2/3}\right)^{3} = x\) fails for negative numbers. At \(x = -8\), the real cube root is \(-2\), so \(x^{2/3} = 4\) and \(4^{3} = 64\). The same value is \(x^{2} = 64\). The exponential formula \(e^{(2/3)\ln(x+3)}\) only covers \(x + 3 > 0\).
:::

::: key-points
text: |
  - Write the domain, the derivative, the sign chart, the asymptotes, the intercepts, the inflection when the question asks for it, and then the sketch. The sign chart carries the value \(f(c)\) at each critical point.
  - A local extremum is a sign change of \(f'\), and an inflection point is a sign change of \(f''\) at a point of the graph. For \(f(x) = x + \frac{1}{x}\) the sign change of \(f''\) sits at \(x = 0\), where \(f\) is undefined, so there is no inflection point.
  - The usual slip writes \(\left(x^{2/3}\right)^{3} = x\). For every real \(x\) it equals \(x^{2}\), and at \(x = -8\) the value is \(64\), not \(-8\).
:::

::: concept-question
id: l2-curve-sketching.q-aef68b13
question: |
  For \(f(x) = x + \frac{1}{x}\), where is the inflection point?
options:
  - text: |
      The graph has no inflection point.
    correct: true
  - text: |
      At \(x = 0\).
  - text: |
      At \(x = -1\) and \(x = 1\).
  - text: |
      At \(x = 1\).
explanation: |
  The second derivative is
  \[
  f''(x) = \frac{2}{x^{3}}.
  \]
  It is negative on \((-\infty, 0)\) and positive on \((0, \infty)\). That sign change lies on the vertical asymptote \(x = 0\). An inflection point has to lie on the graph, and \(f\) is undefined at \(0\).
:::

::: concept-question
id: l2-curve-sketching.q-078d3ab5
question: |
  For \(f(x) = x^{5} - 5x^{4} + 5x^{3}\), what is true at \(x = 0\)?
options:
  - text: |
      The origin is an inflection with a horizontal tangent, and \(f'\) stays positive on both sides of \(0\).
    correct: true
  - text: |
      The origin is a local minimum.
  - text: |
      The origin is a local maximum.
  - text: |
      The line \(x = 0\) is a vertical asymptote.
explanation: |
  The derivative is
  \[
  f'(x) = 5x^{2}(x - 1)(x - 3).
  \]
  The factor \(x^{2}\) vanishes at the origin and is positive on both sides, and \((x - 1)(x - 3)\) is positive for \(x < 1\), so \(f'\) stays positive on \((-\infty, 0)\) and on \((0, 1)\). The second derivative is
  \[
  f''(x) = 10x(2x^{2} - 6x + 3).
  \]
  It changes from negative to positive at \(0\). The origin is an inflection point, and the tangent there is horizontal.
:::

::: concept-question
id: l2-curve-sketching.q-52e994c8
question: |
  Let \(f(x) = x^{1/3}\), with the real cube root, defined for every real \(x\). Then \(f'(x) = \frac{1}{3x^{2/3}}\) for \(x \neq 0\), and \(f'(x) \to +\infty\) as \(x \to 0\). What does the graph do at \(x = 0\)?
options:
  - text: |
      It has a vertical tangent at \((0, 0)\).
    correct: true
  - text: |
      The line \(x = 0\) is a vertical asymptote.
  - text: |
      It has a horizontal tangent at \((0, 0)\).
  - text: |
      It has a hole at \(x = 0\).
explanation: |
  A vertical asymptote needs \(f\) itself to tend to \(+\infty\) or \(-\infty\). Here \(f(x) \to 0\) as \(x \to 0\), so the graph passes through the origin, where \(f(0) = 0\) is finite. The slope \(f'(x)\) is unbounded near \(0\), so the tangent at the origin is the vertical line \(x = 0\). The function is defined at \(0\), so there is no hole, and the tangent is not horizontal.
:::

::: exercise
id: l2-curve-sketching.curve-01
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = \sqrt{1-x^{2}}\). Determine its domain, derivative, monotonicity, asymptotes, intercepts, concavity and main features for a sketch.
solution: |
  **Domain.** The domain is \([-1,1]\), the range is \([0,1]\), and the function is even.

  **Derivative.** For \(-1<x<1\), the derivative is
  \[
  f'(x)=-\frac{x}{\sqrt{1-x^{2}}}.
  \]

  **Sign chart.** The derivative is positive on \((-1,0)\), zero at \(x=0\), and negative on \((0,1)\). Therefore, the function increases to the maximum \((0,1)\), then decreases. The endpoint values \(f(-1)=f(1)=0\) are the minimum values.

  **Asymptotes.** There are no asymptotes. The endpoint tangent lines are vertical at \(x=-1\) and \(x=1\), since \(f'\) is unbounded as each endpoint is approached from within the domain.

  **Intercepts.** The \(x\)-intercepts are \((-1,0)\) and \((1,0)\). The \(y\)-intercept is \((0,1)\).

  **Inflection.** The second derivative is
  \[
  f''(x)=-\frac{1}{(1-x^{2})^{3/2}}<0
  \]
  on \((-1,1)\). The graph is concave down throughout its interior and has no inflexion point.

  **Conclusion.** The graph is the upper semicircle \(x^{2}+y^{2}=1\). It is symmetric about the \(y\)-axis, has its maximum at \((0,1)\), and has vertical endpoint tangents.
provenance: written-for-site
steps:
  - |
    Domain. State the domain, range and symmetry.
  - |
    Derivative. Derive \(f'(x)\) on the interior of the domain.
  - |
    Sign chart. Give the sign of \(f'\) and identify the extrema.
  - |
    Asymptotes. Decide whether asymptotes exist and identify the endpoint tangents.
  - |
    Intercepts. Find both \(x\)-intercepts and the \(y\)-intercept.
  - |
    Inflection. Compute \(f''\), determine concavity and decide whether an inflexion point exists.
  - |
    Conclusion. Describe the complete curve and its main sketch features.
verification:
  checks:
    - expr: diff(sqrt(1-x**2), x)
      expected: -x/sqrt(1-x**2)
    - expr: sqrt(1-x**2).subs(x, 0)
      expected: "1"
    - expr: sqrt(1-x**2).subs(x, 1)
      expected: "0"
    - expr: sqrt(1-x**2).subs(x, -1)
      expected: "0"
    - expr: diff(sqrt(1-x**2), x).subs(x, Rational(-1, 2))
      expected: sqrt(3)/3
    - expr: diff(sqrt(1-x**2), x).subs(x, Rational(1, 2))
      expected: -sqrt(3)/3
    - expr: diff(sqrt(1-x**2), x, 2)
      expected: -1/(1-x**2)**Rational(3, 2)
    - expr: 1/limit(diff(sqrt(1-x**2), x), x, -1, dir='+')
      expected: "0"
    - expr: 1/limit(diff(sqrt(1-x**2), x), x, 1, dir='-')
      expected: "0"
:::

::: exercise
id: l2-curve-sketching.drill-01
tier: basic
topics: [curve-sketching]
statement: |
  For \(f(x) = \frac{\sqrt{x}+1}{x}\), what is the first move when analysing the curve?
solution: |
  Split the quotient into powers:
  \[
  f(x) = x^{-1/2}+x^{-1}.
  \]
  This form makes differentiation and sign analysis direct.
provenance: written-for-site
steps:
  - Rewrite \(\frac{\sqrt{x}+1}{x}\) as a sum of powers.
verification:
  checks:
    - expr: (sqrt(x)+1)/x
      expected: x**Rational(-1,2) + x**-1
:::

::: exercise
id: l2-curve-sketching.curve-02
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = \sqrt{x^{2}-1}\). Determine its domain, derivative, monotonicity, asymptotes, intercepts, concavity and main features for a sketch.
solution: |
  **Domain.** The domain is \((-\infty,-1]\cup[1,\infty)\), the range is \([0,\infty)\), and the function is even.

  **Derivative.** For \(x<-1\) or \(x>1\), the derivative is
  \[
  f'(x)=\frac{x}{\sqrt{x^{2}-1}}.
  \]

  **Sign chart.** The derivative is negative on \((-\infty,-1)\) and positive on \((1,\infty)\). There is no stationary point because \(f'(x)=0\) would require \(x=0\), which is outside the domain. Each branch has its minimum value \(0\) at its endpoint.

  **Asymptotes.** The right branch has the oblique asymptote \(y=x\), since \(\lim_{x\to\infty}(f(x)-x)=0\). The left branch has the oblique asymptote \(y=-x\), since \(\lim_{x\to-\infty}(f(x)+x)=0\). The graph lies below both lines. The endpoint tangent lines \(x=-1\) and \(x=1\) are vertical, but they are not asymptotes because the function has the finite value \(0\) there.

  **Intercepts.** The \(x\)-intercepts are \((-1,0)\) and \((1,0)\). There is no \(y\)-intercept because \(0\) is outside the domain.

  **Inflection.** The second derivative is
  \[
  f''(x)=-\frac{1}{(x^{2}-1)^{3/2}}<0
  \]
  on both branches. Each branch is concave down, and there is no inflexion point.

  **Conclusion.** The graph is the upper half of the hyperbola \(x^{2}-y^{2}=1\). It has two branches symmetric about the \(y\)-axis, endpoint minima at \((\pm1,0)\), vertical endpoint tangents and the oblique asymptotes \(y=\pm x\).
provenance: written-for-site
steps:
  - |
    Domain. State the domain, range and symmetry.
  - |
    Derivative. Derive \(f'(x)\) where the derivative exists.
  - |
    Sign chart. Give the sign of \(f'\), rule out stationary points and identify the branch minima.
  - |
    Asymptotes. Find both oblique asymptotes and distinguish the vertical endpoint tangents from asymptotes.
  - |
    Intercepts. Find the \(x\)-intercepts and decide whether a \(y\)-intercept exists.
  - |
    Inflection. Compute \(f''\), determine concavity and decide whether an inflexion point exists.
  - |
    Conclusion. Describe the two branches and the main sketch features.
verification:
  checks:
    - expr: diff(sqrt(x**2-1), x)
      expected: x/sqrt(x**2-1)
    - expr: sqrt(x**2-1).subs(x, -1)
      expected: "0"
    - expr: sqrt(x**2-1).subs(x, 1)
      expected: "0"
    - expr: diff(sqrt(x**2-1), x).subs(x, -2)
      expected: -2/sqrt(3)
    - expr: diff(sqrt(x**2-1), x).subs(x, 2)
      expected: 2/sqrt(3)
    - expr: limit(sqrt(x**2-1)-x, x, oo)
      expected: "0"
    - expr: limit(sqrt(x**2-1)+x, x, -oo)
      expected: "0"
    - expr: diff(sqrt(x**2-1), x, 2)
      expected: -1/(x**2-1)**Rational(3, 2)
    - expr: 1/limit(diff(sqrt(x**2-1), x), x, -1, dir='-')
      expected: "0"
    - expr: 1/limit(diff(sqrt(x**2-1), x), x, 1, dir='+')
      expected: "0"
:::

::: exercise
id: l2-curve-sketching.drill-02
tier: basic
topics: [curve-sketching]
statement: |
  Name the curve \(y = \sqrt{1-x^{2}}\) on its domain.
solution: |
  Squaring gives \(x^{2}+y^{2}=1\), and the square root requires \(y \geq 0\). The curve is the upper semicircle of the unit circle, with domain \([-1,1]\).
provenance: written-for-site
steps:
  - Square the relation and keep \(y \ge 0\), then name the upper semicircle.
verification:
  checks:
    - expr: (sqrt(1-x**2))**2 + x**2
      expected: 1
:::

::: exercise
id: l2-curve-sketching.curve-03
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = \sqrt{x^{2}+3x+1}\). Determine its domain, derivative, monotonicity, asymptotes, intercepts, concavity and main features for a sketch.
solution: |
  **Domain.** Let
  \[
  \alpha=\frac{-3-\sqrt{5}}{2}
  \quad\text{and}\quad
  \beta=\frac{-3+\sqrt{5}}{2}.
  \]
  The domain is \((-\infty,\alpha]\cup[\beta,\infty)\), and the range is \([0,\infty)\).

  **Derivative.** For \(x<\alpha\) or \(x>\beta\), the derivative is
  \[
  f'(x)=\frac{2x+3}{2\sqrt{x^{2}+3x+1}}.
  \]

  **Sign chart.** The derivative is negative on \((-\infty,\alpha)\) and positive on \((\beta,\infty)\). Its numerator vanishes at \(x=-\frac{3}{2}\), which lies in the gap \((\alpha,\beta)\), so there is no stationary point. The left branch decreases to \((\alpha,0)\), and the right branch increases from \((\beta,0)\).

  **Asymptotes.** The left branch has the oblique asymptote \(y=-x-\frac{3}{2}\), and the right branch has the oblique asymptote \(y=x+\frac{3}{2}\). The graph lies below both lines because
  \[
  x^{2}+3x+1=\left(x+\frac{3}{2}\right)^{2}-\frac{5}{4}.
  \]
  The endpoint tangent lines \(x=\alpha\) and \(x=\beta\) are vertical.

  **Intercepts.** The \(x\)-intercepts are \((\alpha,0)\) and \((\beta,0)\). The \(y\)-intercept is \((0,1)\).

  **Inflection.** The second derivative is
  \[
  f''(x)=-\frac{5}{4(x^{2}+3x+1)^{3/2}}<0
  \]
  on both branches. Each branch is concave down, and there is no inflexion point.

  **Conclusion.** The graph is the upper half of the shifted hyperbola
  \[
  \left(x+\frac{3}{2}\right)^{2}-y^{2}=\frac{5}{4}.
  \]
  It has two concave-down branches separated by \((\alpha,\beta)\), vertical endpoint tangents and one oblique asymptote for each branch.
provenance: written-for-site
steps:
  - |
    Domain. Solve the radicand inequality and state the range.
  - |
    Derivative. Derive \(f'(x)\) where the derivative exists.
  - |
    Sign chart. Give the sign of \(f'\), locate its numerator zero and explain why there is no stationary point.
  - |
    Asymptotes. Find both oblique asymptotes and identify the vertical endpoint tangents.
  - |
    Intercepts. Find both \(x\)-intercepts and the \(y\)-intercept.
  - |
    Inflection. Compute \(f''\), determine concavity and decide whether an inflexion point exists.
  - |
    Conclusion. Describe the two branches and the main sketch features.
verification:
  checks:
    - expr: diff(sqrt(x**2+3*x+1), x)
      expected: (2*x+3)/(2*sqrt(x**2+3*x+1))
    - expr: (x**2+3*x+1).subs(x, (-3-sqrt(5))/2)
      expected: "0"
    - expr: (x**2+3*x+1).subs(x, (-3+sqrt(5))/2)
      expected: "0"
    - expr: diff(sqrt(x**2+3*x+1), x).subs(x, -3)
      expected: -Rational(3, 2)
    - expr: diff(sqrt(x**2+3*x+1), x).subs(x, 0)
      expected: Rational(3, 2)
    - expr: limit(sqrt(x**2+3*x+1)-(x+Rational(3, 2)), x, oo)
      expected: "0"
    - expr: limit(sqrt(x**2+3*x+1)-(-x-Rational(3, 2)), x, -oo)
      expected: "0"
    - expr: sqrt(x**2+3*x+1).subs(x, 0)
      expected: "1"
    - expr: diff(sqrt(x**2+3*x+1), x, 2)
      expected: -Rational(5, 4)/(x**2+3*x+1)**Rational(3, 2)
:::

::: exercise
id: l2-curve-sketching.drill-03
tier: basic
topics: [curve-sketching]
statement: |
  What is the first move when analysing \(f(x) = x-3\sqrt{x}+1\)?
solution: |
  Set \(t=\sqrt{x}\), where \(t \geq 0\). Then
  \[
  f(x)=t^{2}-3t+1.
  \]
  The quadratic has its vertex at \(t=\frac{3}{2}\), which corresponds to \(x=\frac{9}{4}\) and \(f(x)=-\frac{5}{4}\).
provenance: written-for-site
steps:
  - Set \(t = \sqrt{x}\) and read the vertex of the resulting quadratic.
verification:
  checks:
    - expr: (t**2 - 3*t + 1).subs(t, sqrt(x))
      expected: x - 3*sqrt(x) + 1
    - expr: ((t**2 - 3*t + 1).subs(t, Rational(3,2)), Rational(3,2)**2)
      expected: (-Rational(5,4), Rational(9,4))
:::

::: exercise
id: l2-curve-sketching.curve-04
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = \frac{\sqrt{x}+1}{x}\). Determine its domain, derivative, monotonicity, asymptotes, intercepts, concavity and main features for a sketch.
solution: |
  **Domain.** The domain is \((0,\infty)\), and the range is also \((0,\infty)\).

  **Derivative.** Since \(f(x)=x^{-1/2}+x^{-1}\), the derivative is
  \[
  f'(x)=-\frac{1}{2x^{3/2}}-\frac{1}{x^{2}}.
  \]

  **Sign chart.** Both terms in \(f'(x)\) are negative for \(x>0\). Therefore, the function is strictly decreasing on its domain and has no stationary point, maximum or minimum.

  **Asymptotes.** The line \(x=0\) is a vertical asymptote because \(f\) is unbounded as \(x\to0^{+}\). The line \(y=0\) is a horizontal asymptote because \(\lim_{x\to\infty}f(x)=0\). The graph approaches the horizontal asymptote from above.

  **Intercepts.** There are no intercepts because the domain excludes \(x=0\) and \(\sqrt{x}+1>0\) throughout the domain. A useful point for the sketch is \((1,2)\).

  **Inflection.** The second derivative is
  \[
  f''(x)=\frac{3}{4x^{5/2}}+\frac{2}{x^{3}}>0
  \]
  for \(x>0\). The graph is convex throughout its domain and has no inflexion point.

  **Conclusion.** The graph stays in the first quadrant. It decreases from values unbounded above near \(x=0\), passes through \((1,2)\), and approaches \(y=0\) from above.
provenance: written-for-site
steps:
  - |
    Domain. State the domain and range.
  - |
    Derivative. Rewrite the function using powers and derive \(f'(x)\).
  - |
    Sign chart. Give the sign of \(f'\) and state the monotonicity and extrema.
  - |
    Asymptotes. Find the vertical and horizontal asymptotes, including the direction of approach.
  - |
    Intercepts. Decide whether any intercepts exist and give one useful point.
  - |
    Inflection. Compute \(f''\), determine convexity and decide whether an inflexion point exists.
  - |
    Conclusion. Describe the position and limiting behaviour of the curve.
verification:
  checks:
    - expr: diff((sqrt(x)+1)/x, x)
      expected: -1/(2*x*sqrt(x))-1/x**2
    - expr: diff((sqrt(x)+1)/x, x).subs(x, 1)
      expected: -Rational(3, 2)
    - expr: ((sqrt(x)+1)/x).subs(x, 1)
      expected: "2"
    - expr: limit((sqrt(x)+1)/x, x, oo)
      expected: "0"
    - expr: 1/limit((sqrt(x)+1)/x, x, 0, dir='+')
      expected: "0"
    - expr: diff((sqrt(x)+1)/x, x, 2)
      expected: Rational(3, 4)/(x**2*sqrt(x))+2/x**3
:::

::: exercise
id: l2-curve-sketching.drill-04
tier: basic
topics: [curve-sketching]
statement: |
  Classify the gap at \(x=1\) for \(f(x) = \frac{x-1}{\ln x}\).
solution: |
  The function is undefined at \(x=1\), while
  \[
  \lim_{x\to 1}\frac{x-1}{\ln x}=1.
  \]
  The graph has a removable discontinuity, or hole, at \((1,1)\).
provenance: written-for-site
steps:
  - Evaluate the limit at \(x = 1\) and classify the gap as a hole.
verification:
  checks:
    - expr: limit((x-1)/log(x), x, 1)
      expected: 1
:::

::: exercise
id: l2-curve-sketching.curve-05
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = \frac{x^{2}}{x^{2}+9}\).
solution: |
  **Domain.** The domain is \(\mathbb{R}\), since \(x^{2}+9\) is positive for every real \(x\).

  **Derivative.** The derivative is
  \[
  f'(x)=\frac{18x}{(x^{2}+9)^{2}}.
  \]

  **Sign chart.** The derivative is:

  - negative for \(x<0\),
  - zero at \(x=0\),
  - positive for \(x>0\).

  The function is decreasing on \((-\infty,0)\) and increasing on \((0,\infty)\). The global minimum is \((0,0)\).

  **Asymptotes.** The horizontal asymptote is \(y=1\), since \(f(x)-1=-\frac{9}{x^{2}+9}\) tends to \(0\) as \(x\) tends to either end of the real line. There is no vertical asymptote because the denominator never vanishes.

  **Intercepts.** The \(x\)-intercept and the \(y\)-intercept are both the origin.

  **Inflection.** The second derivative is
  \[
  f''(x)=\frac{54(3-x^{2})}{(x^{2}+9)^{3}}.
  \]
  The graph is concave up on \((-\sqrt{3},\sqrt{3})\) and concave down on \((-\infty,-\sqrt{3})\) and \((\sqrt{3},\infty)\). The inflection points are \(\left(-\sqrt{3},\frac14\right)\) and \(\left(\sqrt{3},\frac14\right)\).

  **Conclusion.** The graph is even, has range \([0,1)\), and approaches \(y=1\) from below at both ends.
provenance: written-for-site
steps:
  - Domain. State the domain and justify why the denominator does not vanish.
  - Derivative. Compute \(f'(x)\).
  - Sign chart. Give the sign of \(f'\), the monotonicity intervals, and the global minimum.
  - Asymptotes. Find every asymptote and state how the graph approaches it.
  - Intercepts. Find the \(x\)-intercepts and the \(y\)-intercept.
  - Inflection. Compute \(f''\), give the concavity intervals, and find the inflection points.
  - Conclusion. Combine the symmetry, range, and end behaviour into a sketch.
verification:
  checks:
    - expr: diff(x**2/(x**2 + 9), x)
      expected: 18*x/(x**2 + 9)**2
    - expr: diff(x**2/(x**2 + 9), x, 2)
      expected: 54*(3 - x**2)/(x**2 + 9)**3
    - expr: limit(x**2/(x**2 + 9) - 1, x, oo)
      expected: 0
    - expr: limit(x**2/(x**2 + 9) - 1, x, -oo)
      expected: 0
    - expr: (x**2/(x**2 + 9)).subs(x, sqrt(3))
      expected: Rational(1, 4)
    - expr: (x**2/(x**2 + 9)).subs(x, 0)
      expected: 0
:::

::: exercise
id: l2-curve-sketching.drill-05
tier: basic
topics: [curve-sketching]
statement: |
  Find the horizontal asymptote of \(f(x) = \frac{x^{2}}{x^{2}+9}\).
solution: |
  Rewrite the function as
  \[
  f(x)=1-\frac{9}{x^{2}+9}.
  \]
  The final term tends to \(0\) as \(x\to\pm\infty\), so the horizontal asymptote is \(y=1\).
provenance: written-for-site
steps:
  - Rewrite \(f\) and read the horizontal asymptote from the limits at both ends.
verification:
  checks:
    - expr: (limit(x**2/(x**2+9), x, oo), limit(x**2/(x**2+9), x, -oo))
      expected: (1, 1)
:::

::: exercise
id: l2-curve-sketching.curve-06
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = x-3\sqrt{x}+1\).
solution: |
  **Domain.** The domain is \([0,\infty)\). The endpoint value is \(f(0)=1\).

  **Derivative.** For \(x>0\), the derivative is
  \[
  f'(x)=1-\frac{3}{2\sqrt{x}}.
  \]
  The critical number is \(x=\frac94\). The right-hand limit of \(f'\) at \(0\) is negative and unbounded, so the graph has a vertical tangent at \((0,1)\).

  **Sign chart.** The derivative is negative on \(\left(0,\frac94\right)\), zero at \(x=\frac94\), and positive on \(\left(\frac94,\infty\right)\). The function decreases from the endpoint to the global minimum \(\left(\frac94,-\frac54\right)\), then increases.

  **Asymptotes.** There is no vertical asymptote at \(x=0\), since the right-hand limit of \(f\) is \(1\). There is no horizontal or oblique asymptote as \(x\) tends to infinity. In particular, \(f(x)-x=1-3\sqrt{x}\) has no finite limit.

  **Intercepts.** The \(y\)-intercept is \((0,1)\). Setting \(t=\sqrt{x}\) gives \(t^{2}-3t+1=0\), so the \(x\)-intercepts have coordinates
  \[
  \left(\frac{7-3\sqrt{5}}{2},0\right)
  \quad\text{and}\quad
  \left(\frac{7+3\sqrt{5}}{2},0\right).
  \]

  **Inflection.** For \(x>0\), the second derivative is
  \[
  f''(x)=\frac{3}{4x^{3/2}},
  \]
  which is positive. The graph is concave up on \((0,\infty)\) and has no inflection point.

  **Conclusion.** The range is \(\left[-\frac54,\infty\right)\). The graph starts at \((0,1)\) with a vertical tangent, crosses the axis, reaches its global minimum, crosses the axis again, and then increases without bound.
provenance: written-for-site
steps:
  - Domain. State the domain and evaluate the endpoint.
  - Derivative. Compute \(f'(x)\), find the critical number, and examine the right-hand behaviour at the endpoint.
  - Sign chart. Give the sign of \(f'\), the monotonicity intervals, and the global minimum.
  - Asymptotes. Decide whether the curve has vertical, horizontal, or oblique asymptotes.
  - Intercepts. Find the \(x\)-intercepts and the \(y\)-intercept.
  - Inflection. Compute \(f''\), state the concavity, and decide whether there is an inflection point.
  - Conclusion. Combine the endpoint, tangent, intercepts, minimum, and end behaviour into a sketch.
verification:
  checks:
    - expr: diff(x - 3*sqrt(x) + 1, x)
      expected: 1 - 3/(2*sqrt(x))
    - expr: diff(x - 3*sqrt(x) + 1, x).subs(x, Rational(9, 4))
      expected: 0
    - expr: (x - 3*sqrt(x) + 1).subs(x, Rational(9, 4))
      expected: Rational(-5, 4)
    - expr: (x - 3*sqrt(x) + 1).subs(x, (7 - 3*sqrt(5))/2)
      expected: 0
    - expr: (x - 3*sqrt(x) + 1).subs(x, (7 + 3*sqrt(5))/2)
      expected: 0
    - expr: diff(x - 3*sqrt(x) + 1, x, 2)
      expected: 3/(4*x**Rational(3, 2))
    - expr: limit(1/diff(x - 3*sqrt(x) + 1, x), x, 0, dir='+')
      expected: 0
    - expr: limit(x - 3*sqrt(x) + 1, x, 0, dir='+')
      expected: 1
:::

::: exercise
id: l2-curve-sketching.drill-06
tier: standard
topics: [curve-sketching]
statement: |
  Find the oblique asymptote of \(f(x) = \sqrt{x^{2}+3x+1}\) as \(x\to+\infty\).
solution: |
  The candidate line is \(y=x+\frac{3}{2}\). Rationalising the difference gives
  \[
  \begin{aligned}
  &f(x)-\left(x+\frac{3}{2}\right)\\
  &=\frac{-\frac{5}{4}}{\sqrt{x^{2}+3x+1}+x+\frac{3}{2}},
  \end{aligned}
  \]
  which tends to \(0\) as \(x\to+\infty\). The oblique asymptote is \(y=x+\frac{3}{2}\).
provenance: written-for-site
steps:
  - Show that \(f(x) - \left(x + \frac{3}{2}\right)\) tends to \(0\) as \(x \to +\infty\).
verification:
  checks:
    - expr: limit(sqrt(x**2+3*x+1) - (x + Rational(3,2)), x, oo)
      expected: 0
:::

::: exercise
id: l2-curve-sketching.curve-07
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = x^{4}-4x^{2}+1\).
solution: |
  **Domain.** The domain is \(\mathbb{R}\).

  **Derivative.** The derivative is
  \[
  \begin{aligned}
  f'(x)&=4x(x^{2}-2)\\
  &=4x(x-\sqrt{2})(x+\sqrt{2}).
  \end{aligned}
  \]
  The critical numbers are \(x=-\sqrt{2}\), \(x=0\), and \(x=\sqrt{2}\).

  **Sign chart.** The derivative is:

  - negative on \((-\infty,-\sqrt{2})\),
  - positive on \((-\sqrt{2},0)\),
  - negative on \((0,\sqrt{2})\),
  - positive on \((\sqrt{2},\infty)\).

  The local maximum is \((0,1)\). The global minima are \((-\sqrt{2},-3)\) and \((\sqrt{2},-3)\).

  **Asymptotes.** There are no vertical, horizontal, or oblique asymptotes. The function tends to positive infinity at both ends of the real line.

  **Intercepts.** The \(y\)-intercept is \((0,1)\). Setting \(X=x^{2}\) gives \(X=2\pm\sqrt{3}\), so the four \(x\)-intercepts are
  \[
  \begin{aligned}
  &\left(\pm\sqrt{2-\sqrt{3}},0\right)\quad\text{and}\\
  &\left(\pm\sqrt{2+\sqrt{3}},0\right).
  \end{aligned}
  \]

  **Inflection.** The second derivative is
  \[
  f''(x)=4(3x^{2}-2).
  \]
  The graph is concave down on \(\left(-\sqrt{\frac23},\sqrt{\frac23}\right)\) and concave up outside this interval. The inflection points are \(\left(-\sqrt{\frac23},-\frac{11}{9}\right)\) and \(\left(\sqrt{\frac23},-\frac{11}{9}\right)\).

  **Conclusion.** The graph is even, has a central local maximum between two global minima, and has range \([-3,\infty)\).
provenance: written-for-site
steps:
  - Domain. State the domain.
  - Derivative. Factor \(f'(x)\) and find every critical number.
  - Sign chart. Give the sign of \(f'\), the monotonicity intervals, and all extrema.
  - Asymptotes. Decide whether the polynomial has any asymptotes and state its end behaviour.
  - Intercepts. Find the \(x\)-intercepts and the \(y\)-intercept.
  - Inflection. Compute \(f''\), give the concavity intervals, and find the inflection points.
  - Conclusion. Combine the symmetry, extrema, intercepts, and end behaviour into a sketch.
verification:
  checks:
    - expr: diff(x**4 - 4*x**2 + 1, x)
      expected: 4*x*(x**2 - 2)
    - expr: (x**4 - 4*x**2 + 1).subs(x, sqrt(2))
      expected: -3
    - expr: (x**4 - 4*x**2 + 1).subs(x, 0)
      expected: 1
    - expr: (x**4 - 4*x**2 + 1).subs(x, sqrt(2 - sqrt(3)))
      expected: 0
    - expr: (x**4 - 4*x**2 + 1).subs(x, sqrt(2 + sqrt(3)))
      expected: 0
    - expr: diff(x**4 - 4*x**2 + 1, x, 2)
      expected: 4*(3*x**2 - 2)
    - expr: (x**4 - 4*x**2 + 1).subs(x, sqrt(Rational(2, 3)))
      expected: Rational(-11, 9)
:::

::: exercise
id: l2-curve-sketching.drill-07
tier: basic
topics: [curve-sketching]
statement: |
  Find the smallest period of \(f(x) = \tan^{2} x\).
solution: |
  Since \(\tan(x+\pi)=\tan x\), the number \(\pi\) is a period. The zeros occur at \(x=k\pi\), where \(k\in\mathbb{Z}\). Any positive period must carry this zero set to itself, so the smallest period is \(\pi\).
provenance: written-for-site
steps:
  - Show that \(\pi\) is a period, and that it is the smallest positive period.
verification:
  checks:
    - expr: trigsimp(tan(x+pi)**2 - tan(x)**2)
      expected: 0
    - expr: tan(pi/6 + pi/2)**2 - tan(pi/6)**2
      expected: Rational(8,3)
:::

::: exercise
id: l2-curve-sketching.curve-08
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = x^{3}-3x^{2}-9x+5\).
solution: |
  **Domain.** The domain is \(\mathbb{R}\).

  **Derivative.** The derivative is
  \[
  \begin{aligned}
  f'(x)&=3x^{2}-6x-9\\
  &=3(x+1)(x-3).
  \end{aligned}
  \]
  The critical numbers are \(x=-1\) and \(x=3\).

  **Sign chart.** The derivative is:

  - positive on \((-\infty,-1)\),
  - negative on \((-1,3)\),
  - positive on \((3,\infty)\).

  The local maximum is \((-1,10)\), and the local minimum is \((3,-22)\).

  **Asymptotes.** There are no vertical, horizontal, or oblique asymptotes. The function tends to negative infinity as \(x\) tends to negative infinity, and it tends to positive infinity as \(x\) tends to positive infinity.

  **Intercepts.** The \(y\)-intercept is \((0,5)\). The three \(x\)-intercepts do not have simple radical forms suitable for the sketch. Their \(x\)-coordinates are approximately \(-2.180\), \(0.489\), and \(4.691\). They lie in \((-3,-2)\), \((0,1)\), and \((4,5)\), respectively.

  **Inflection.** The second derivative is
  \[
  f''(x)=6(x-1).
  \]
  The graph is concave down on \((-\infty,1)\) and concave up on \((1,\infty)\). The inflection point is \((1,-6)\).

  **Conclusion.** The graph rises from negative infinity to the local maximum, falls through the inflection point to the local minimum, and then rises to positive infinity. It crosses the \(x\)-axis once on each monotonic branch.
provenance: written-for-site
steps:
  - Domain. State the domain.
  - Derivative. Factor \(f'(x)\) and find every critical number.
  - Sign chart. Give the sign of \(f'\), the monotonicity intervals, and both extrema.
  - Asymptotes. Decide whether the polynomial has any asymptotes and state its end behaviour.
  - Intercepts. Find the \(y\)-intercept and locate all three \(x\)-intercepts.
  - Inflection. Compute \(f''\), give the concavity intervals, and find the inflection point.
  - Conclusion. Combine the intercepts, extrema, inflection point, and end behaviour into a sketch.
verification:
  checks:
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x)
      expected: 3*(x + 1)*(x - 3)
    - expr: (x**3 - 3*x**2 - 9*x + 5).subs(x, -1)
      expected: 10
    - expr: (x**3 - 3*x**2 - 9*x + 5).subs(x, 3)
      expected: -22
    - expr: diff(x**3 - 3*x**2 - 9*x + 5, x, 2)
      expected: 6*(x - 1)
    - expr: (x**3 - 3*x**2 - 9*x + 5).subs(x, 1)
      expected: -6
    - expr: (x**3 - 3*x**2 - 9*x + 5).subs(x, -3)
      expected: -22
    - expr: (x**3 - 3*x**2 - 9*x + 5).subs(x, -2)
      expected: 3
    - expr: (x**3 - 3*x**2 - 9*x + 5).subs(x, 0)
      expected: 5
    - expr: (x**3 - 3*x**2 - 9*x + 5).subs(x, 4)
      expected: -15
    - expr: (x**3 - 3*x**2 - 9*x + 5).subs(x, 5)
      expected: 10
:::

::: exercise
id: l2-curve-sketching.drill-08
tier: standard
topics: [curve-sketching]
statement: |
  Evaluate \(\displaystyle\lim_{x\to 0^{+}} x^{1/4}\ln x\), including the side from which the values approach the limit.
solution: |
  Write the expression as \(\frac{\ln x}{x^{-1/4}}\). L'Hôpital's rule gives
  \[
  \lim_{x\to 0^{+}}\frac{1/x}{-\frac{1}{4}x^{-5/4}}
  =\lim_{x\to 0^{+}}-4x^{1/4}=0.
  \]
  Since \(\ln x<0\) near \(0\), the values approach \(0\) from below.
provenance: written-for-site
steps:
  - Rewrite the product as a quotient, apply L'Hôpital's rule, and name the side from which the values approach \(0\).
verification:
  checks:
    - expr: limit(x**Rational(1,4)*log(x), x, 0, dir='+')
      expected: 0
:::

::: exercise
id: l2-curve-sketching.curve-09
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = (1-x^{2})^{1/4}\).
solution: |
  **Domain.** The domain is \([-1,1]\). The function is even, and its range is \([0,1]\).

  **Derivative.** The derivative is
  \[
  f'(x)=-\frac{x}{2(1-x^{2})^{3/4}}
  \]
  for \(-1<x<1\). The derivative tends to \(+\infty\) as \(x\to-1^+\), and it tends to \(-\infty\) as \(x\to1^-\). The endpoint tangents are vertical.

  **Sign chart.** The derivative is positive on \((-1,0)\), zero at \(x=0\), and negative on \((0,1)\). The global maximum is \((0,1)\), and the global minima are \((-1,0)\) and \((1,0)\).

  **Asymptotes.** The graph has no asymptotes. Its values remain finite at both endpoints of its bounded domain.

  **Intercepts.** The \(x\)-intercepts are \((-1,0)\) and \((1,0)\). The \(y\)-intercept is \((0,1)\).

  **Inflection.** The second derivative is
  \[
  f''(x)=-\frac{x^{2}+2}{4(1-x^{2})^{7/4}},
  \]
  which is negative on \((-1,1)\). The graph is concave throughout its interior and has no inflection point.

  **Conclusion.** The graph is an even cap. It rises from \((-1,0)\) to \((0,1)\), then falls to \((1,0)\), meeting the \(x\)-axis with vertical endpoint tangents.
provenance: written-for-site
steps:
  - Domain. Find the domain, range, and symmetry.
  - Derivative. Compute \(f'\) and determine its endpoint behaviour.
  - Sign chart. Use the sign of \(f'\) to find the monotonicity and extrema.
  - Asymptotes. Determine every asymptote.
  - Intercepts. Find every intercept.
  - Inflection. Compute \(f''\) and determine the concavity and inflection points.
  - Conclusion. Combine the results into a labelled sketch.
verification:
  checks:
    - expr: diff((1-x**2)**Rational(1,4), x)
      expected: -x/(2*(1-x**2)**Rational(3,4))
    - expr: diff((1-x**2)**Rational(1,4), x, 2)
      expected: -(x**2+2)/(4*(1-x**2)**Rational(7,4))
    - expr: ((1-x**2)**Rational(1,4)).subs(x, 0)
      expected: "1"
    - expr: ((1-x**2)**Rational(1,4)).subs(x, 1)
      expected: "0"
    - expr: limit(1/diff((1-x**2)**Rational(1,4), x), x, -1, dir='+')
      expected: "0"
    - expr: limit(1/diff((1-x**2)**Rational(1,4), x), x, 1, dir='-')
      expected: "0"
:::

::: exercise
id: l2-curve-sketching.drill-09
tier: standard
topics: [curve-sketching]
statement: |
  Suppose \(f''(c) = 0\). What does this fact allow you to claim about \(x=c\)?
solution: |
  This fact alone gives no conclusion. For \(f(x)=x^{3}\), the second derivative is \(f''(x)=6x\). It vanishes at \(0\) and changes sign there, so \(x^{3}\) changes concavity at \(0\). For \(f(x)=x^{4}\), the second derivative is \(f''(x)=12x^{2}\). It also vanishes at \(0\), but it is positive on both sides, so \(x^{4}\) does not change concavity there. You must check whether \(f''\) changes sign.
provenance: written-for-site
steps:
  - Compare \(x^{3}\) with \(x^{4}\) and require a sign change of \(f''\) before naming an inflection.
verification:
  checks:
    - expr: (diff(x**3, x, 2).subs(x, 0), diff(x**4, x, 2).subs(x, 0))
      expected: (0, 0)
    - expr: (diff(x**3, x, 2).subs(x, -1), diff(x**3, x, 2).subs(x, 1), diff(x**4, x, 2).subs(x, -1), diff(x**4, x, 2).subs(x, 1))
      expected: (-6, 6, 12, 12)
:::

::: exercise
id: l2-curve-sketching.curve-10
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = \tan^{2} x\).
solution: |
  **Domain.** The domain is
  \[
  \mathbb{R}\setminus\left\{\frac{\pi}{2}+k\pi:k\in\mathbb{Z}\right\}.
  \]
  The function is even, nonnegative, and periodic with period \(\pi\).

  **Derivative.** The derivative is
  \[
  f'(x)=2\tan x\sec^{2}x
  \]
  at every point in the domain.

  **Sign chart.** For each \(k\in\mathbb{Z}\), the derivative is:

  - negative on \((k\pi-\frac{\pi}{2},k\pi)\),
  - zero at \(x=k\pi\),
  - positive on \((k\pi,k\pi+\frac{\pi}{2})\).

  The minimum value is \(0\) at every \(x=k\pi\). There is no maximum.

  **Asymptotes.** The vertical asymptotes are \(x=\frac{\pi}{2}+k\pi\), where \(k\in\mathbb{Z}\). The function tends to \(+\infty\) from both sides of each asymptote.

  **Intercepts.** The \(x\)-intercepts are \((k\pi,0)\), where \(k\in\mathbb{Z}\). The \(y\)-intercept is \((0,0)\).

  **Inflection.** The second derivative is
  \[
  f''(x)=2\sec^{2}x\left(1+3\tan^{2}x\right),
  \]
  which is positive throughout the domain. Every branch is convex, and there are no inflection points.

  **Conclusion.** Each period contains one convex arch with minimum \((k\pi,0)\). The arch rises without bound towards the vertical asymptotes on both sides.
provenance: written-for-site
steps:
  - Domain. Find the domain, symmetry, sign, and period.
  - Derivative. Compute \(f'\).
  - Sign chart. Use the sign of \(f'\) to find the monotonicity and extrema.
  - Asymptotes. Determine every asymptote and the relevant one-sided behaviour.
  - Intercepts. Find every intercept.
  - Inflection. Compute \(f''\) and determine the concavity and inflection points.
  - Conclusion. Combine the results into a periodic labelled sketch.
verification:
  checks:
    - expr: diff(tan(x)**2, x)
      expected: 2*tan(x)/cos(x)**2
    - expr: diff(tan(x)**2, x, 2)
      expected: 2*(1+tan(x)**2)*(1+3*tan(x)**2)
    - expr: tan(x+pi)**2
      expected: tan(x)**2
    - expr: tan(0)**2
      expected: "0"
    - expr: limit(1/tan(x)**2, x, pi/2, dir='-')
      expected: "0"
    - expr: limit(1/tan(x)**2, x, pi/2, dir='+')
      expected: "0"
:::

::: exercise
id: l2-curve-sketching.drill-10
tier: basic
topics: [curve-sketching]
statement: |
  For \(f(x) = \sqrt{x^{2}+3x+1}\), the numerator of \(f'\) vanishes at the candidate \(x=-\frac{3}{2}\). Classify this candidate.
solution: |
  At \(x=-\frac{3}{2}\), the radicand is
  \[
  x^{2}+3x+1=-\frac{5}{4}<0.
  \]
  The candidate lies outside the real domain of \(f\), so it is not a stationary point.
provenance: written-for-site
steps:
  - Evaluate the radicand at \(x = -\frac{3}{2}\) and leave out a candidate that lies outside the domain.
verification:
  checks:
    - expr: (x**2+3*x+1).subs(x, -Rational(3,2))
      expected: -Rational(5,4)
:::

::: exercise
id: l2-curve-sketching.curve-11
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = x^{1/4}\ln x\).
solution: |
  **Domain.** The domain is \((0,\infty)\). The function is negative on \((0,1)\), zero at \(x=1\), and positive on \((1,\infty)\).

  **Derivative.** The derivative is
  \[
  f'(x)=\frac{\ln x+4}{4x^{3/4}}.
  \]
  The derivative tends to \(-\infty\) as \(x\to0^+\), so the graph approaches the excluded endpoint \((0,0)\) with a vertical limiting direction.

  **Sign chart.** The derivative is negative on \((0,\exp(-4))\), zero at \(x=\exp(-4)\), and positive on \((\exp(-4),\infty)\). The global minimum is
  \[
  \left(\exp(-4),-\frac{4}{\exp(1)}\right).
  \]

  **Asymptotes.** The limit at the left endpoint is \(\lim_{x\to0^+}f(x)=0\), while \(f(x)\to+\infty\) as \(x\to+\infty\). The graph has no asymptotes.

  **Intercepts.** The only \(x\)-intercept is \((1,0)\). There is no \(y\)-intercept because \(x=0\) is outside the domain.

  **Inflection.** The second derivative is
  \[
  f''(x)=-\frac{3\ln x+8}{16x^{7/4}}.
  \]
  It is positive on \((0,\exp(-8/3))\) and negative on \((\exp(-8/3),\infty)\). The inflection point is
  \[
  \left(\exp(-8/3),-\frac{8}{3\exp(2/3)}\right).
  \]

  **Conclusion.** The graph approaches \((0,0)\) from below, falls to its minimum, crosses the \(x\)-axis at \(x=1\), and then rises without bound. Its concavity changes once, after the minimum and before the intercept.
provenance: written-for-site
steps:
  - Domain. Find the domain and the sign of the function.
  - Derivative. Compute \(f'\) and determine its behaviour near \(x=0\).
  - Sign chart. Use the sign of \(f'\) to find the monotonicity and extrema.
  - Asymptotes. Determine every asymptote and the endpoint behaviour.
  - Intercepts. Find every intercept.
  - Inflection. Compute \(f''\) and determine the concavity and inflection points.
  - Conclusion. Combine the results into a labelled sketch.
verification:
  checks:
    - expr: diff(x**Rational(1,4)*log(x), x)
      expected: x**Rational(-3,4)*(log(x)+4)/4
    - expr: diff(x**Rational(1,4)*log(x), x, 2)
      expected: x**Rational(-7,4)*(-3*log(x)-8)/16
    - expr: diff(x**Rational(1,4)*log(x), x).subs(x, exp(-4))
      expected: "0"
    - expr: (x**Rational(1,4)*log(x)).subs(x, exp(-4))
      expected: -4/exp(1)
    - expr: limit(x**Rational(1,4)*log(x), x, 0, dir='+')
      expected: "0"
    - expr: limit(1/(x**Rational(1,4)*log(x)), x, oo)
      expected: "0"
    - expr: diff(x**Rational(1,4)*log(x), x, 2).subs(x, exp(Rational(-8,3)))
      expected: "0"
    - expr: (x**Rational(1,4)*log(x)).subs(x, exp(Rational(-8,3)))
      expected: -8/(3*exp(Rational(2,3)))
:::

::: exercise
id: l2-curve-sketching.drill-11
tier: standard
topics: [curve-sketching]
statement: |
  Describe the graph of \(f(x) = (1-x^{2})^{1/4}\) at the ends \(x=\pm1\).
solution: |
  The endpoint values are \(f(-1)=f(1)=0\). On \((-1,1)\),
  \[
  f'(x)=-\frac{x}{2(1-x^{2})^{3/4}}.
  \]
  The derivative tends to \(+\infty\) as \(x\to-1^{+}\) and to \(-\infty\) as \(x\to1^{-}\). The graph has vertical tangents at both endpoints.
provenance: written-for-site
steps:
  - Evaluate the endpoints and the one-sided limits of \(f'\), then name the vertical tangents.
verification:
  checks:
    - expr: (((1-x**2)**Rational(1,4)).subs(x, -1), ((1-x**2)**Rational(1,4)).subs(x, 1))
      expected: (0, 0)
    - expr: (limit(1/diff((1-x**2)**Rational(1,4), x), x, -1, dir='+'), limit(1/diff((1-x**2)**Rational(1,4), x), x, 1, dir='-'))
      expected: (0, 0)
:::

::: exercise
id: l2-curve-sketching.curve-12
tier: exam
topics: [curve-sketching]
statement: |
  Discuss \(f(x) = \frac{x-1}{\ln x}\).
solution: |
  **Domain.** The domain is \((0,1)\cup(1,\infty)\). The function is positive throughout its domain, and \(x=1\) is excluded.

  **Derivative.** The derivative is
  \[
  f'(x)=\frac{\ln x-1+1/x}{(\ln x)^{2}}.
  \]
  If \(g(x)=\ln x-1+1/x\), then \(g'(x)=(x-1)/x^{2}\). The function \(g\) decreases to \(g(1)=0\) and then increases, so \(g(x)>0\) for every \(x\ne1\).

  **Sign chart.** The derivative is positive on both \((0,1)\) and \((1,\infty)\). The function is strictly increasing on each interval and has no extrema. The derivative tends to \(+\infty\) as \(x\to0^+\), tends to \(1/2\) as \(x\to1\), and tends to \(0\) as \(x\to+\infty\).

  **Asymptotes.** The endpoint limits are
  \[
  \lim_{x\to0^+}f(x)=0,\qquad \lim_{x\to1}f(x)=1,
  \]
  and \(f(x)\to+\infty\) as \(x\to+\infty\). The point \((1,1)\) is a hole, and the graph has no asymptotes.

  **Intercepts.** The function has no intercepts. The numerator vanishes only at the excluded point \(x=1\), and \(x=0\) is outside the domain.

  **Inflection.** The second derivative is
  \[
  f''(x)=\frac{2(x-1)-(x+1)\ln x}{x^{2}(\ln x)^{3}}.
  \]
  The numerator decreases through \(0\) at \(x=1\), while \((\ln x)^{3}\) changes from negative to positive there. Thus \(f''(x)<0\) on both intervals of the domain. The graph is concave throughout each branch and has no inflection point.

  **Conclusion.** The first branch rises from the excluded endpoint \((0,0)\) to the hole at \((1,1)\). The second branch rises from the same hole without bound. Both branches are concave, the limiting slope at the hole is \(1/2\), and the limiting direction at the origin is vertical.
provenance: written-for-site
steps:
  - Domain. Find the domain and the sign of the function.
  - Derivative. Compute \(f'\) and establish the sign of its numerator.
  - Sign chart. Use the sign of \(f'\) to find the monotonicity and extrema.
  - Asymptotes. Determine every asymptote, endpoint limit, and removable hole.
  - Intercepts. Find every intercept.
  - Inflection. Compute \(f''\) and determine the concavity and inflection points.
  - Conclusion. Combine the results into a labelled sketch.
verification:
  checks:
    - expr: diff((x-1)/log(x), x)
      expected: (log(x)-1+1/x)/log(x)**2
    - expr: diff((x-1)/log(x), x, 2)
      expected: (2*(x-1)-(x+1)*log(x))/(x**2*log(x)**3)
    - expr: limit((x-1)/log(x), x, 0, dir='+')
      expected: "0"
    - expr: limit((x-1)/log(x), x, 1)
      expected: "1"
    - expr: limit(1/((x-1)/log(x)), x, oo)
      expected: "0"
    - expr: limit(diff((x-1)/log(x), x), x, 1)
      expected: Rational(1,2)
    - expr: limit(1/diff((x-1)/log(x), x), x, 0, dir='+')
      expected: "0"
    - expr: limit(diff((x-1)/log(x), x), x, oo)
      expected: "0"
:::

::: exercise
id: l2-curve-sketching.drill-12
tier: standard
topics: [curve-sketching]
statement: |
  Evaluate \(\displaystyle\lim_{x\to1}\left(\frac{x-1}{\ln x}\right)'\), the limiting slope at the hole.
solution: |
  Differentiation gives
  \[
  \left(\frac{x-1}{\ln x}\right)'
  =\frac{\ln x-\frac{x-1}{x}}{(\ln x)^{2}}.
  \]
  Set \(x=1+t\). The numerator is \(\frac{t^{2}}{2}+O(t^{3})\), and the denominator is \(t^{2}+O(t^{3})\). Their quotient tends to \(\frac{1}{2}\).
provenance: written-for-site
steps:
  - Differentiate, then evaluate the limit of \(f'\) at the hole.
verification:
  checks:
    - expr: limit(diff((x-1)/log(x), x), x, 1)
      expected: Rational(1,2)
:::

::: exercise
id: l2-curve-sketching.midterm-mock-1-ex1.1
statement: |
  Find the domain of definition of \(f(x)=\tan^2(x)\) and sketch its graph. Identify clearly any interesting features, including local maximum and minimum points, asymptotes, and intercepts.
solution: |
  The function is even, nonnegative, and \(\pi\)-periodic. The tangent is undefined at \(x=\frac{\pi}{2}+k\pi\) for \(k\in\mathbb{Z}\), so the domain is \(\mathbb{R}\setminus\{\frac{\pi}{2}+k\pi:k\in\mathbb{Z}\}\). Differentiating gives \(f'(x)=2\tan(x)/\cos^2(x)\). On \((-\pi/2,\pi/2)\) the derivative is negative on \((-\pi/2,0)\), zero at \(0\), and positive on \((0,\pi/2)\). Each connected piece of the domain is a U-shaped branch that tends to \(+\infty\) at both ends and meets a local minimum \(f(k\pi)=0\). The vertical asymptotes are the lines \(x=\frac{\pi}{2}+k\pi\). The intercepts are the points \((k\pi,0)\). There is no horizontal asymptote.
steps:
  - Domain \(\mathbb{R}\setminus\{\frac{\pi}{2}+k\pi:k\in\mathbb{Z}\}\).
  - Derivative \(f'(x)=2\tan(x)/\cos^2(x)\).
  - "Sign of \\(f'\\): negative then positive on each interval between consecutive vertical asymptotes, with a zero at \\(k\\pi\\)."
  - Vertical asymptotes \(x=\frac{\pi}{2}+k\pi\). No horizontal asymptote.
  - Intercepts \((k\pi,0)\). Local minima \(0\) at those points.
verification:
  checkable: false
  reason: The answer is a sketch.
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "1.1"
  points: 1.5
:::

::: exercise
id: l2-curve-sketching.midterm-mock-1-ex1.2
statement: |
  Find the domain of definition of \(f(x)=\frac{x^2}{x^2+9}\) and sketch its graph. Identify clearly any interesting features, including local maximum and minimum points, asymptotes, and intercepts.
solution: |
  The denominator is always at least \(9\), so the domain is \(\mathbb{R}\). The function is even. The quotient rule gives \(f'(x)=\frac{18x}{(x^2+9)^2}\). The derivative has the sign of \(x\), and \(f'(0)=0\). Thus \(f\) decreases on \((-\infty,0]\) and increases on \([0,+\infty)\). The global minimum is \(f(0)=0\). As \(x\to\pm\infty\), \(f(x)\to 1\), so \(y=1\) is a horizontal asymptote, approached from below. There is no vertical asymptote. The only intercept is the origin.
steps:
  - Domain \(\mathbb{R}\).
  - Derivative \(f'(x)=\frac{18x}{(x^2+9)^2}\).
  - "Sign of \\(f'\\): negative for \\(x<0\\), zero at \\(0\\), positive for \\(x>0\\)."
  - Horizontal asymptote \(y=1\). No vertical asymptote.
  - Intercept \((0,0)\), the global minimum.
verification:
  checkable: false
  reason: The answer is a sketch.
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "1.2"
  points: 1.5
:::

::: exercise
id: l2-curve-sketching.midterm-mock-1-ex1.5
statement: |
  Find the domain of definition of \(f(x)=x^3-3x^2-9x+5\) and sketch its graph. Identify clearly any interesting features, including local maximum and minimum points, asymptotes, and intercepts.
solution: |
  The domain is \(\mathbb{R}\). The derivative is \(f'(x)=3x^2-6x-9=3(x+1)(x-3)\). The derivative is positive on \((-\infty,-1)\), negative on \((-1,3)\), and positive on \((3,+\infty)\). There is a local maximum at \(x=-1\) with value \(10\), and a local minimum at \(x=3\) with value \(-22\). A cubic polynomial has no asymptotes. The \(y\)-intercept is \(f(0)=5\). The graph crosses the \(x\)-axis three times.
steps:
  - Domain \(\mathbb{R}\).
  - Derivative \(f'(x)=3(x+1)(x-3)\).
  - "Sign of \\(f'\\): positive on \\((-\\infty,-1)\\), negative on \\((-1,3)\\), positive on \\((3,+\\infty)\\)."
  - No asymptotes.
  - \(y\)-intercept \(5\). Local maximum \((-1,10)\). Local minimum \((3,-22)\). Three \(x\)-intercepts.
verification:
  checkable: false
  reason: The answer is a sketch.
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "1.5"
  points: 1.5
:::

::: exercise
id: l2-curve-sketching.midterm-mock-1-ex1.6
statement: |
  Find the domain of definition of \(f(x)=(1-x^2)^{1/4}\) and sketch its graph. Identify clearly any interesting features, including local maximum and minimum points, asymptotes, and intercepts.
solution: |
  The fourth root requires \(1-x^2\ge 0\), so the domain is \([-1,1]\). The function is even. Differentiating on \((-1,1)\) gives \(f'(x)=\frac{-x}{2(1-x^2)^{3/4}}\). The derivative is positive on \((-1,0)\) and negative on \((0,1)\), with \(f'(0)=0\). As \(x\to -1^+\) one has \(f'(x)\to+\infty\), and as \(x\to 1^-\) one has \(f'(x)\to-\infty\), so the graph has vertical tangents at the endpoints. The maximum is \(f(0)=1\). The intercepts are \((\pm 1,0)\) and \((0,1)\). There is no asymptote.
steps:
  - Domain \([-1,1]\).
  - Derivative \(f'(x)=\frac{-x}{2(1-x^2)^{3/4}}\) on \((-1,1)\).
  - "Sign of \\(f'\\): positive on \\((-1,0)\\), zero at \\(0\\), negative on \\((0,1)\\). Vertical tangents at \\(x=\\pm 1\\)."
  - No asymptotes.
  - Intercepts \((\pm 1,0)\) and \((0,1)\). Maximum \(f(0)=1\).
verification:
  checkable: false
  reason: The answer is a sketch.
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "1.6"
  points: 1.5
:::

::: exercise
id: l2-curve-sketching.midterm-2021-ex3.1
number: "3.1"
statement: |
  Let \(\mathcal{S}\) be the curve \(x^4 + y^4 = 1\). Compute the point of \(\mathcal{S}\) such that \(x = y\). Compute the point of \(\mathcal{S}\) for which \(y = 0\).
tier: exam
topics:
  - curve-sketching
solution: |
  If \(x = y\), then \(2x^4 = 1\), so \(x = \pm 2^{-1/4}\). The two real points are \(\bigl(2^{-1/4},\, 2^{-1/4}\bigr)\) and \(\bigl(-2^{-1/4},\, -2^{-1/4}\bigr)\). If \(y = 0\), then \(x^4 = 1\), so the two real points are \((1, 0)\) and \((-1, 0)\).
provenance: written-for-site
steps:
  - Solve 2x^4 = 1 for the diagonal points.
  - Solve x^4 = 1 for the intercepts on y = 0.
verification:
  checks:
    - expr: 2*(2**(-Rational(1, 4)))**4 - 1
      expected: "0"
    - expr: 1**4 + 0**4 - 1
      expected: "0"
    - expr: ((-1)**4 + 0**4) - 1
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "3.1"
  points: 1
:::

::: exercise
id: l2-curve-sketching.midterm-2021-ex3.2
number: "3.2"
statement: |
  What are the symmetries of \(\mathcal{S}\) given by \(x^4 + y^4 = 1\)? Sketch the graph of \(\mathcal{S}\).
tier: exam
topics:
  - curve-sketching
  - symmetry
solution: |
  The equation is unchanged under \((x, y) \mapsto (\pm x, \pm y)\) in either sign, so \(\mathcal{S}\) is symmetric with respect to both axes and to the origin. It is also unchanged under \((x, y) \mapsto (y, x)\) and under \((x, y) \mapsto (-y, x)\), so it is symmetric with respect to both diagonals. The intercepts are \((\pm 1, 0)\) and \((0, \pm 1)\). Along \(y = x\) the first-quadrant point is at distance \(2^{1/4}\) from the origin, farther than 1. The curve looks like a square with sides parallel to the axes and with rounded corners pointing along the diagonals.
provenance: written-for-site
steps:
  - Name symmetry in both axes, the origin, and both diagonals.
  - Sketch the rounded square through (\pm 1, 0) and (0, \pm 1).
verification:
  checkable: false
  reason: The answer is a list of symmetries and a sketch.
pastExam:
  year: 2021
  paper: Midterm
  question: "3.2"
  points: 1
:::

::: exercise
id: l2-curve-sketching.midterm-2021-ex3.3
number: "3.3"
statement: |
  Consider the part \(\mathcal{S}^+\) of \(\mathcal{S}\) for which \(x > 0\) and \(y > 0\). Check that \(x = \sqrt{\cos\theta}\) and \(y = \sqrt{\sin\theta}\) is a convenient parameterization of \(\mathcal{S}^+\). To which interval does \(\theta\) belong?
tier: exam
topics:
  - curve-sketching
  - parameterization
solution: |
  For \(\cos\theta \ge 0\) and \(\sin\theta \ge 0\),
  \[
  \begin{aligned}
  &x^4 + y^4\\
  &= \bigl(\sqrt{\cos\theta}\bigr)^4 + \bigl(\sqrt{\sin\theta}\bigr)^4\\
  &= \cos^2\theta + \sin^2\theta\\
  &= 1,
  \end{aligned}
  \]
  so the pair lies on \(\mathcal{S}\). The conditions \(x > 0\) and \(y > 0\) need \(\cos\theta > 0\) and \(\sin\theta > 0\), hence \(\theta \in (0, \pi/2)\). At the endpoints \(\theta = 0\) and \(\theta = \pi/2\) one recovers \((1, 0)\) and \((0, 1)\), which are not in the open first-quadrant arc \(\mathcal{S}^+\).
provenance: written-for-site
steps:
  - Check x^4 + y^4 = 1.
  - Give the interval (0, pi/2).
verification:
  checks:
    - expr: sqrt(cos(theta))**4 + sqrt(sin(theta))**4 - 1
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "3.3"
  points: 1
:::

::: exercise
id: l2-curve-sketching.midterm-2022-ex1i
statement: |
  Let \(f(x)=\sqrt{1-x^2}\). Give the domain and range of \(f\).
tier: exam
topics:
  - curve-sketching
  - domain-range
pastExam:
  year: 2022
  paper: Midterm
  question: 1i
  points: 1
solution: |
  The square root is defined when \(1-x^2\ge 0\), which is \(x\in[-1,1]\). On this interval \(f(-1)=f(1)=0\) and \(f(0)=1\). The values of \(f\) fill \([0,1]\). The domain is \([-1,1]\) and the range is \([0,1]\).
provenance: official-key
steps:
  - Domain from \(1-x^2\ge 0\).
  - Endpoint and midpoint values, then the range.
verification:
  checkable: false
  reason: Domain and range are stated in words, matching the sketch part of the paper.
:::

::: exercise
id: l2-curve-sketching.midterm-2022-ex1ii
statement: |
  Let \(f(x)=\sqrt{1-x^2}\). Compute the derivative \(f'\) of \(f\).
tier: exam
topics:
  - curve-sketching
  - derivative
pastExam:
  year: 2022
  paper: Midterm
  question: 1ii
  points: 1
solution: |
  Write \(f(x)=(1-x^2)^{1/2}\). Differentiating gives
  \[
  \begin{aligned}
  f'(x)&=\frac{(1-x^2)'}{2\sqrt{1-x^2}}\\
  &=\frac{-2x}{2\sqrt{1-x^2}}\\
  &=\frac{-x}{\sqrt{1-x^2}},
  \end{aligned}
  \]
  for \(x\in(-1,1)\).
provenance: official-key
steps:
  - Chain rule, then simplification to \(-x/\sqrt{1-x^2}\).
verification:
  checks:
    - expr: simplify(diff(sqrt(1-x**2), x) - (-x/sqrt(1-x**2)))
      expected: "0"
:::

::: exercise
id: l2-curve-sketching.midterm-2022-ex1iv
statement: |
  Let \(f(x)=\sqrt{1-x^2}\). Plot \(f\) and indicate the maxima and minima, the tangent at \(x=-1\) and at \(x=1\), convexity (\(f''>0\)) and concavity (\(f''<0\)).
tier: exam
topics:
  - curve-sketching
  - extrema
  - concavity
pastExam:
  year: 2022
  paper: Midterm
  question: 1iv
  points: 1
solution: |
  On \((-1,0)\) one has \(f'>0\), and on \((0,1)\) one has \(f'<0\). Also \(f'(0)=0\), so \(x=0\) is a maximum, with \(f(0)=1\). On the closed interval the endpoint values \(f(-1)=f(1)=0\) are minima. The limits of \(f'\) at the endpoints are infinite, so the tangents at \(x=-1\) and at \(x=1\) are vertical. Differentiating \(f'(x)=-x(1-x^2)^{-1/2}\) gives
  \[
  \begin{aligned}
  f''(x)&=-\frac{1}{(1-x^2)^{3/2}}\bigl(1-x^2+x^2\bigr)\\
  &=-\frac{1}{(1-x^2)^{3/2}}<0
  \end{aligned}
  \]
  on \((-1,1)\). The graph is concave on the whole open interval, and there is no interval of convexity. The graph is the upper unit semicircle from \((-1,0)\) to \((1,0)\).
provenance: official-key
steps:
  - Sign of \(f'\), maximum at \(x=0\), minima at the endpoints.
  - Vertical tangents at \(x=\pm 1\).
  - Sign of \(f''\), concavity on \((-1,1)\).
  - Sketch of the upper semicircle.
verification:
  checkable: false
  reason: The asked output is a labelled sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-2022-ex2i
statement: |
  Let \(f(x)=\frac{x-1}{\ln(x)}\). Give the domain of \(f\).
tier: exam
topics:
  - curve-sketching
  - domain-range
pastExam:
  year: 2022
  paper: Midterm
  question: 2i
  points: 0.5
solution: |
  The logarithm is defined for \(x>0\). The denominator vanishes at \(x=1\). The domain is \((0,1)\cup(1,+\infty)\).
provenance: official-key
steps:
  - Condition \(x>0\).
  - Exclusion of \(x=1\).
verification:
  checks:
    - expr: solveset(x > 0, x, Reals)
      expected: Interval.open(0, oo)
    - expr: solveset(log(x), x, Reals)
      expected: FiniteSet(1)
discrepancy: |
  The official key writes the domain as \(\mathbb{R}_+^*\). The verified domain is \((0,1)\cup(1,+\infty)\), because \(\ln 1=0\).
:::

::: exercise
id: l2-curve-sketching.midterm-2022-ex2ii
statement: |
  Let \(f(x)=\frac{x-1}{\ln(x)}\). Compute the derivative \(f'\) of \(f\).
tier: exam
topics:
  - curve-sketching
  - derivative
pastExam:
  year: 2022
  paper: Midterm
  question: 2ii
  points: 1
solution: |
  The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&=\frac{\ln x-(x-1)\cdot\frac{1}{x}}{(\ln x)^2}\\
  &=\frac{\ln x-1+\frac{1}{x}}{(\ln x)^2},
  \end{aligned}
  \]
  for \(x>0\) with \(x\neq 1\). Equivalently,
  \[ f'(x)=\frac{x\ln x-x+1}{x(\ln x)^2}. \]
provenance: official-key
steps:
  - Quotient rule, then the compact form of the numerator.
verification:
  checks:
    - expr: simplify(diff((x-1)/log(x), x) - (log(x) - (x-1)/x)/log(x)**2)
      expected: "0"
:::

::: exercise
id: l2-curve-sketching.midterm-2022-ex2v
statement: |
  Let \(f(x)=\frac{x-1}{\ln(x)}\) and \(g(x)=\ln(x)-1+1/x\). Compute \(g'\) and deduce the sign of \(g\). Deduce the sign of \(f'\).
tier: exam
topics:
  - curve-sketching
  - monotonicity
pastExam:
  year: 2022
  paper: Midterm
  question: 2v
  points: 1
solution: |
  Differentiating gives \(g'(x)=1/x-1/x^2=(x-1)/x^2\). Thus \(g'<0\) on \((0,1)\) and \(g'>0\) on \((1,+\infty)\). So \(g\) has a minimum at \(x=1\). Direct evaluation gives \(g(1)=0\). Therefore \(g(x)\ge 0\) for all \(x>0\), with equality only at \(x=1\).

  From the quotient rule, \(f'(x)=g(x)/(\ln x)^2\) on the domain of \(f\). The square of the logarithm is positive for \(x\neq 1\). Hence \(f'\ge 0\) on each connected piece of the domain, and \(f\) is increasing on \((0,1)\) and on \((1,+\infty)\).
provenance: official-key
steps:
  - Formula for \(g'\).
  - Sign chart of \(g'\), minimum at \(x=1\), and \(g(1)=0\).
  - Conclusion \(g\ge 0\), then \(f'\ge 0\).
verification:
  checkable: false
  reason: The asked output is a sign chart for \(g\) and for \(f'\).
:::

::: exercise
id: l2-curve-sketching.midterm-2022-ex2vi
statement: |
  Let \(f(x)=\frac{x-1}{\ln(x)}\). Plot \(f\), indicating the domain, the limits, and the sign of \(f'\).
tier: exam
topics:
  - curve-sketching
pastExam:
  year: 2022
  paper: Midterm
  question: 2vi
  points: 0.5
solution: |
  The graph has two branches, on \((0,1)\) and on \((1,+\infty)\). As \(x\to 0^+\) one has \(f(x)\to 0^+\) with a vertical tangent, because \(f'\to+\infty\). On \((0,1)\) the function increases toward \(1\). On \((1,+\infty)\) it increases from values near \(1\), with limiting slope \(\frac12\) at \(x=1\), and \(f(x)\to+\infty\) as \(x\to+\infty\). The point \(x=1\) is missing from the graph of the given formula.
provenance: official-key
steps:
  - Two branches, and the behaviour as \(x\to 0^+\).
  - Increase toward \(1\) on \((0,1)\).
  - Increase from \(1\) on \((1,+\infty)\), with slope \(\frac12\) in the limit at \(x=1\).
verification:
  checkable: false
  reason: The asked output is a labelled sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-2024-ex1.1
statement: |
  Find the domain of definition of
  \[ f(x) = x^{1/4} \ln(x) \]
  and sketch its graph. Identify clearly any interesting features, including local maximum and minimum points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
pastExam:
  year: 2024
  paper: Midterm
  question: "1.1"
  points: 2
solution: |
  The fourth root and the logarithm both require \(x > 0\), so the domain is \((0, +\infty)\).

  Differentiating the product gives
  \[ f'(x) = \frac{1}{4} x^{-3/4} \ln x + x^{-3/4} = \frac{\ln x + 4}{4 x^{3/4}}. \]
  The denominator is positive on the domain, so the only critical point is \(\ln x = -4\), that is \(x = e^{-4}\).

  For \(0 < x < e^{-4}\) one has \(f' < 0\), and for \(x > e^{-4}\) one has \(f' > 0\). There is a local minimum at \(x = e^{-4}\), with value \(f(e^{-4}) = -4/e\). There is no local maximum.

  As \(x \to 0^+\), rewrite \(x^{1/4} \ln x = \ln x / x^{-1/4}\). This is an \(\infty/\infty\) form, and L'Hôpital's rule gives \(-4 x^{1/4} \to 0\). The graph approaches the origin. As \(x \to +\infty\), \(f(x) \to +\infty\). There is no vertical, horizontal or oblique asymptote.

  The only intercept is \(f(1) = 0\).

  The graph comes in from the origin, falls to the minimum \((e^{-4}, -4/e)\), and then rises through \((1, 0)\) to \(+\infty\).
provenance: written-for-site
steps:
  - Domain \((0, +\infty)\).
  - Derivative \(f'(x) = (\ln x + 4)/(4 x^{3/4})\).
  - Sign of \(f'\) and local minimum at \(x = e^{-4}\), value \(-4/e\).
  - "Asymptotes: the graph approaches the origin as \\(x \\to 0^+\\), and there is none at infinity."
  - Intercept \(f(1) = 0\).
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-2024-ex1.2
statement: |
  Find the domain of definition of
  \[ f(x) = \sqrt{x^2 + 3x + 1} \]
  and sketch its graph. Identify clearly any interesting features, including local maximum and minimum points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
pastExam:
  year: 2024
  paper: Midterm
  question: "1.2"
  points: 2
solution: |
  The square root requires \(x^2 + 3x + 1 \ge 0\). The roots of the quadratic are \((-3 \pm \sqrt{5})/2\). The parabola opens upwards, so the domain is
  \[ \left(-\infty, \frac{-3-\sqrt{5}}{2}\right] \cup \left[\frac{-3+\sqrt{5}}{2}, +\infty\right). \]

  The derivative is
  \[ f'(x) = \frac{x + 3/2}{\sqrt{x^2 + 3x + 1}}. \]
  The numerator vanishes at \(x = -3/2\), which lies between the two roots and is outside the domain. There is no interior critical point.

  On the left component \(f'\) is negative, so \(f\) decreases from \(+\infty\) to \(0\). On the right component \(f'\) is positive, so \(f\) increases from \(0\) to \(+\infty\). The two endpoints of the domain are local minima, each with value \(0\). At each endpoint the tangent is vertical.

  As \(x \to +\infty\), \(f(x) - (x + 3/2) \to 0\), so \(y = x + 3/2\) is an oblique asymptote. As \(x \to -\infty\), \(f(x) - (-x - 3/2) \to 0\), so \(y = -x - 3/2\) is an oblique asymptote.

  The y-intercept is \(f(0) = 1\). The x-intercepts are the two domain endpoints.
provenance: written-for-site
steps:
  - Domain \(\bigl(-\infty, (-3-\sqrt{5})/2\bigr] \cup \bigl[(-3+\sqrt{5})/2, +\infty\bigr)\).
  - Derivative \(f'(x) = (x + 3/2)/\sqrt{x^2 + 3x + 1}\).
  - "Sign of \\(f'\\): decreasing on the left component, increasing on the right, minima of value \\(0\\) at the endpoints."
  - Oblique asymptotes \(y = x + 3/2\) and \(y = -x - 3/2\).
  - Intercepts \(f(0) = 1\) and the two domain endpoints.
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-2024-ex1.5
statement: |
  Find the domain of definition of
  \[ f(x) = x - 3\sqrt{x} + 1 \]
  and sketch its graph. Identify clearly any interesting features, including local maximum and minimum points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
pastExam:
  year: 2024
  paper: Midterm
  question: "1.5"
  points: 2
solution: |
  The square root requires \(x \ge 0\), so the domain is \([0, +\infty)\).

  The derivative is \(f'(x) = 1 - 3/(2\sqrt{x})\). It vanishes when \(\sqrt{x} = 3/2\), that is \(x = 9/4\).

  For \(0 < x < 9/4\) one has \(f' < 0\), and for \(x > 9/4\) one has \(f' > 0\). There is a local minimum at \(x = 9/4\), with value \(f(9/4) = -5/4\). As \(x \to 0^+\) one has \(f'(x) \to -\infty\), so the graph has a vertical tangent at the endpoint \((0, 1)\). On the domain that endpoint is a local maximum.

  There is no horizontal or oblique asymptote. As \(x \to +\infty\), \(f(x) \to +\infty\).

  The y-intercept is \(f(0) = 1\). Setting \(u = \sqrt{x}\) in \(x - 3\sqrt{x} + 1 = 0\) gives \(u^2 - 3u + 1 = 0\), so \(u = (3 \pm \sqrt{5})/2\). Both roots are positive, and the x-intercepts are \(x = (7 \pm 3\sqrt{5})/2\).
provenance: written-for-site
steps:
  - Domain \([0, +\infty)\).
  - Derivative \(f'(x) = 1 - 3/(2\sqrt{x})\).
  - "Sign of \\(f'\\): local maximum at the endpoint \\(x = 0\\) with value \\(1\\), local minimum at \\(x = 9/4\\) with value \\(-5/4\\)."
  - No horizontal or oblique asymptote.
  - Intercepts \(f(0) = 1\) and \(x = (7 \pm 3\sqrt{5})/2\).
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-2025-ex1.1
number: "1.1"
statement: |
  Find the domain of \(f(x)=\dfrac{\sqrt{x+1}}{x}\) and sketch its graph. Identify local maximum and minimum points, inflexion points, asymptotes and intercepts.
tier: exam
solution: |
  The square root needs \(x+1\ge 0\) and the denominator needs \(x\neq 0\), so \(D(f)=[-1,+\infty)\setminus\{0\}\).

  \[
  \begin{aligned}
  f'(x)&=\frac{1}{2x\sqrt{x+1}}-\frac{\sqrt{x+1}}{x^2}\\
  &=-\frac{x+2}{2x^2\sqrt{x+1}}.
  \end{aligned}
  \]
  On the domain, \(x+2>0\) and \(x^2\sqrt{x+1}>0\), so \(f'<0\). The function decreases on \([-1,0)\) and on \((0,+\infty)\).

  \(f(-1)=0\). As \(x\to 0^-\), \(f\to-\infty\). As \(x\to 0^+\), \(f\to+\infty\). As \(x\to+\infty\), \(f\to 0^+\). There is a vertical asymptote \(x=0\) and a horizontal asymptote \(y=0\). The only intercept is \((-1,0)\). There is no local extremum.

  \[
  f''(x)=\frac{3x^2+12x+8}{4x^3(x+1)^{3/2}}.
  \]
  The in-domain root of \(f''=0\) is \(x=-2+\dfrac{2\sqrt{3}}{3}\). The second derivative changes sign there, so that point is an inflexion. On \((0,+\infty)\) one has \(f''>0\).

  The left branch falls from \(0\) to \(-\infty\). The right branch falls from \(+\infty\) toward \(y=0\).
provenance: official-key
steps:
  - Domain stated.
  - Derivative and monotonicity.
  - Local extrema.
  - Inflexion points.
  - Asymptotes.
  - Intercepts.
  - Sketch.
verification:
  checkable: false
  reason: The answer is a sketch.
discrepancy: |
  The official key gives the inflexion equation \(3x^2+12x+4=0\) and the abscissa \(x\sim -1/3\). The verified equation is \(3x^2+12x+8=0\), with in-domain root \(x=-2+2\sqrt{3}/3\).
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "1.1"
  points: 2
:::

::: exercise
id: l2-curve-sketching.midterm-2025-ex1.2
number: "1.2"
statement: |
  Find the domain of \(f(x)=x^4-4x^2+1\) and sketch its graph. Identify local maximum and minimum points, inflexion points, asymptotes and intercepts.
tier: exam
solution: |
  The domain is \(\mathbb{R}\). The function is even.

  \(f'(x)=4x^3-8x=4x(x-\sqrt{2})(x+\sqrt{2})\). Critical points \(x=0,\pm\sqrt{2}\). Then \(f(0)=1\) is a local maximum and \(f(\pm\sqrt{2})=-3\) are global minima.

  \(f''(x)=12x^2-8=4(3x^2-2)\), so inflexion at \(x=\pm\sqrt{2/3}=\pm\sqrt{6}/3\).

  Putting \(X=x^2\), the equation \(X^2-4X+1=0\) gives \(X=2\pm\sqrt{3}\), hence intercepts \(x=\pm\sqrt{2\pm\sqrt{3}}\). There is no vertical or oblique asymptote. As \(|x|\to\infty\), \(f\to+\infty\). The graph is a symmetric W.
provenance: official-key
steps:
  - Domain stated.
  - Derivative and monotonicity.
  - Local extrema.
  - Inflexion points.
  - Asymptotes.
  - Intercepts.
  - Sketch.
verification:
  checkable: false
  reason: The answer is a sketch.
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "1.2"
  points: 2
:::

::: exercise
id: l2-curve-sketching.midterm-2025-ex1.3
number: "1.3"
statement: |
  Find the domain of \(f(x)=\sqrt{x^2-1}\) and sketch its graph. Identify local maximum and minimum points, inflexion points, asymptotes and intercepts.
tier: exam
solution: |
  One needs \(x^2-1\ge 0\), so \(D(f)=\mathbb{R}\setminus{]-1,1[}=(-\infty,-1]\cup[1,+\infty)\).

  \(f'(x)=x/f(x)\). The left branch decreases from \(+\infty\) to \(f(-1)=0\). The right branch increases from \(f(1)=0\) to \(+\infty\). The endpoints \((\pm 1,0)\) are global minima, with vertical tangents.

  \(f''(x)=-1/(x^2-1)^{3/2}<0\) on the domain, so each branch is concave. There is no inflexion.

  \(\lim_{|x|\to\infty}f(x)/|x|=1\), so \(y=|x|\) is an oblique asymptote, that is \(y=x\) on the right and \(y=-x\) on the left. The graph is the upper half of the hyperbola \(x^2-y^2=1\).
provenance: official-key
steps:
  - Domain stated.
  - Derivative and monotonicity.
  - Local extrema.
  - Inflexion points.
  - Asymptotes.
  - Intercepts.
  - Sketch.
verification:
  checkable: false
  reason: The answer is a sketch.
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "1.3"
  points: 2
:::

::: exercise
id: l2-curve-sketching.midterm-2026-ex1.1
number: "1.1"
statement: |
  Find the domain of definition of
  \[ f(x) = \frac{x}{\sqrt{x^2-1}} \]
  and sketch its graph. Identify clearly any interesting features, including local maximum and minimum points, inflexion points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
pastExam:
  year: 2026
  paper: Midterm
  question: "1.1"
  points: 3
solution: |
  The domain is \(D_f = (-\infty,-1)\cup(1,+\infty)\), because \(x^2-1\) must be strictly positive.

  The derivative is
  \[ f'(x) = \frac{-1}{(x^2-1)^{3/2}} < 0 \]
  on the domain, so \(f\) is strictly decreasing on each interval of the domain.

  The limits are
  \[
  \begin{aligned}
  \lim_{x\to -1^-} f(x) &= -\infty,\\
  \lim_{x\to 1^+} f(x) &= +\infty,\\
  \lim_{x\to\pm\infty} f(x) &= \pm 1.
  \end{aligned}
  \]

  The vertical asymptotes are \(x=-1\) and \(x=1\). The horizontal asymptotes are \(y=-1\) on the left and \(y=1\) on the right.

  There is no zero and no \(y\)-intercept. There is no local extremum.

  There is no inflexion point. The second derivative is \(f''(x)=3x(x^2-1)^{-5/2}\), which does not vanish on the domain.

  The left branch decreases from the line \(y=-1\) to \(-\infty\) as \(x\) approaches \(-1\) from the left. The right branch decreases from \(+\infty\) toward the line \(y=1\) as \(x\to+\infty\).
provenance: official-key
steps:
  - Domain \(D_f=(-\infty,-1)\cup(1,+\infty)\).
  - Derivative \(f'(x)=-1/(x^2-1)^{3/2}<0\), strictly decreasing on each interval of the domain.
  - Limits at \(\pm 1\) and at \(\pm\infty\).
  - Vertical asymptotes \(x=\pm 1\) and horizontal asymptotes \(y=-1\) on the left, \(y=1\) on the right.
  - No zero, no \(y\)-intercept, no local extremum.
  - "No inflexion point: \\(f''(x)=3x(x^2-1)^{-5/2}\\) does not vanish on the domain."
  - Sketch.
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-2026-ex1.2
number: "1.2"
statement: |
  Find the domain of definition of
  \[ f(x) = \frac{x^2+x-1}{x-3} \]
  and sketch its graph. Identify clearly any interesting features, including local maximum and minimum points, inflexion points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
pastExam:
  year: 2026
  paper: Midterm
  question: "1.2"
  points: 3
solution: |
  The domain is \(D_f=\mathbb{R}\setminus\{3\}\).

  Polynomial division gives
  \[ f(x) = x+4+\frac{11}{x-3}. \]
  The vertical asymptote is \(x=3\). The oblique asymptote is \(y=x+4\).

  The derivative is
  \[
  \begin{aligned}
  f'(x) &= 1-\frac{11}{(x-3)^2}\\
  &= \frac{(x-3)^2-11}{(x-3)^2}\\
  &= \frac{x^2-6x-2}{(x-3)^2}.
  \end{aligned}
  \]
  The critical points are \(x=3\pm\sqrt{11}\), with
  \[
  \begin{aligned}
  f(3-\sqrt{11})&=7-2\sqrt{11},\\
  f(3+\sqrt{11})&=7+2\sqrt{11}.
  \end{aligned}
  \]
  There is a local maximum at \((3-\sqrt{11},\,7-2\sqrt{11})\) and a local minimum at \((3+\sqrt{11},\,7+2\sqrt{11})\).

  The axis intercepts come from \(f(x)=0\), hence \(x^2+x-1=0\), so
  \[ x=\frac{-1\pm\sqrt{5}}{2}. \]
  The \(x\)-intercepts are \(\bigl(\frac{-1-\sqrt{5}}{2},0\bigr)\) and \(\bigl(\frac{-1+\sqrt{5}}{2},0\bigr)\). Also \(f(0)=\frac{1}{3}\), so the \(y\)-intercept is \(\bigl(0,\frac{1}{3}\bigr)\).

  The second derivative is \(f''(x)=\frac{22}{(x-3)^3}\), which does not vanish on the domain, so there is no inflexion point.

  To the left of \(x=3\) the graph follows \(y=x+4\), rises to the local maximum, then falls to \(-\infty\) as \(x\to 3^-\). To the right it falls from \(+\infty\) to the local minimum, then follows \(y=x+4\).
provenance: official-key
steps:
  - Domain \(\mathbb{R}\setminus\{3\}\).
  - Division \(f(x)=x+4+11/(x-3)\).
  - Vertical asymptote \(x=3\) and oblique asymptote \(y=x+4\).
  - Derivative and critical points \(x=3\pm\sqrt{11}\).
  - Local maximum \((3-\sqrt{11},\,7-2\sqrt{11})\) and local minimum \((3+\sqrt{11},\,7+2\sqrt{11})\).
  - Intercepts \(\bigl(\frac{-1\pm\sqrt{5}}{2},0\bigr)\) and \(\bigl(0,\frac{1}{3}\bigr)\).
  - "No inflexion point: \\(f''(x)=22/(x-3)^3\\) does not vanish on the domain."
  - Sketch.
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-predicted-a-ex1.1
number: "1.1"
statement: |
  Find the domain of \(f(x) = \dfrac{\sqrt{x - 1}}{x}\) and sketch the graph. Identify local maximum and minimum points, inflexion points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
solution: |
  The radicand needs \(x - 1 \ge 0\) and the denominator needs \(x \ne 0\), so the domain is \([1, +\infty)\). Differentiating gives
  \[
  f'(x) = \frac{2 - x}{2x^2\sqrt{x - 1}}.
  \]
  Thus \(f' > 0\) on \((1, 2)\) and \(f' < 0\) on \((2, +\infty)\). There is a local maximum at \(x = 2\), with \(f(2) = \frac12\). The intercept is \(f(1) = 0\), and \(f'(x) \to +\infty\) as \(x \to 1^+\), so the curve leaves the intercept with a vertical tangent. As \(x \to +\infty\), \(f(x) \to 0^+\), so \(y = 0\) is a horizontal asymptote. The second derivative vanishes where \(3x^2 - 12x + 8 = 0\), at \(x = 2 \pm \frac{2\sqrt{3}}{3}\). Only \(x = 2 + \frac{2\sqrt{3}}{3}\) lies in the domain, and it is an inflexion point.
provenance: written-for-site
steps:
  - Domain [1, +\infty).
  - Derivative (2 - x)/(2 x^2 sqrt(x - 1)), sign change at x = 2.
  - Local maximum (2, 1/2).
  - Horizontal asymptote y = 0.
  - Intercept f(1) = 0 with a vertical tangent.
  - Inflexion at x = 2 + 2\sqrt{3}/3.
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-predicted-a-ex1.2
number: "1.2"
statement: |
  Find the domain of \(f(x) = x^4 - 2x^2 - 3\) and sketch the graph. Identify local maximum and minimum points, inflexion points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
solution: |
  The domain is \(\mathbb{R}\). The function is even. The derivative is \(f'(x) = 4x(x^2 - 1)\), with critical points \(x = 0\) and \(x = \pm 1\). Then \(f(0) = -3\) is a local maximum, and \(f(\pm 1) = -4\) are local minima. The second derivative \(f''(x) = 12x^2 - 4\) vanishes at \(x = \pm \frac{1}{\sqrt{3}}\), two inflexion points. Factoring \(f(x) = (x^2 - 3)(x^2 + 1)\) gives intercepts \(\bigl(\pm\sqrt{3},\, 0\bigr)\) and \(f(0) = -3\). There is no asymptote. The graph is a symmetric W, with \(f(x) \to +\infty\) as \(|x| \to \infty\).
provenance: written-for-site
steps:
  - Domain R, even function.
  - Derivative 4x(x^2 - 1), critical values -3 and -4.
  - Inflexions at \pm 1/\sqrt{3}.
  - Intercepts \pm\sqrt{3}.
  - Sketch the W.
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-predicted-a-ex1.3
number: "1.3"
statement: |
  Find the domain of \(f(x) = x^2 e^{-x}\) and sketch the graph. Identify local maximum and minimum points, inflexion points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
solution: |
  The domain is \(\mathbb{R}\), and \(f(x) \ge 0\). The derivative is \(f'(x) = x(2 - x)e^{-x}\). There is a local minimum at \(x = 0\) with \(f(0) = 0\), and a local maximum at \(x = 2\) with \(f(2) = 4e^{-2}\). The second derivative vanishes at \(x = 2 \pm \sqrt{2}\), two inflexion points. The intercept is the origin. As \(x \to +\infty\), \(f(x) \to 0^+\), so \(y = 0\) is a horizontal asymptote. As \(x \to -\infty\), \(f(x) \to +\infty\).
provenance: written-for-site
steps:
  - Domain R.
  - Derivative x(2 - x)e^{-x}, min at 0 and max at 2.
  - Inflexions at 2 \pm \sqrt{2}.
  - Horizontal asymptote y = 0 as x \to +\infty.
  - Sketch.
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-predicted-b-ex1.1
number: "1.1"
statement: |
  Find the domain of \(f(x) = \ln(x^2 - 1)\) and sketch the graph. Identify local maxima and minima, inflexion points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
solution: |
  One needs \(x^2 - 1 > 0\), so the domain is \((-\infty, -1) \cup (1, +\infty)\). The function is even. The derivative is \(f'(x) = \dfrac{2x}{x^2 - 1}\), which is negative on \((-\infty, -1)\) and positive on \((1, +\infty)\). There is no critical point in the domain, so there is no local extremum. The second derivative is \(f''(x) = \dfrac{-2(x^2 + 1)}{(x^2 - 1)^2}\), which never vanishes, so there is no inflexion. As \(x \to \pm 1\) from outside the interval \((-1, 1)\), \(f(x) \to -\infty\), so \(x = \pm 1\) are vertical asymptotes. As \(|x| \to \infty\), \(f(x) \to +\infty\). The intercepts are \(\bigl(\pm\sqrt{2},\, 0\bigr)\), from \(x^2 - 1 = 1\).
provenance: written-for-site
steps:
  - Domain (-\infty, -1) \cup (1, +\infty), even.
  - Sign of f' on each branch, no extremum.
  - Vertical asymptotes x = \pm 1.
  - Intercepts \pm\sqrt{2}.
  - No inflexion, then sketch both branches.
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-predicted-b-ex1.2
number: "1.2"
statement: |
  Find the domain of \(f(x) = \dfrac{x}{x^2 + 1}\) and sketch the graph. Identify local maxima and minima, inflexion points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
solution: |
  The domain is \(\mathbb{R}\), since \(x^2 + 1\) never vanishes. The function is odd. The derivative is \(f'(x) = \dfrac{1 - x^2}{(x^2 + 1)^2}\). There is a local maximum at \(x = 1\) with \(f(1) = \frac12\), and a local minimum at \(x = -1\) with \(f(-1) = -\frac12\). The second derivative vanishes at \(x = 0\) and at \(x = \pm\sqrt{3}\), three inflexion points. The intercept is the origin. As \(|x| \to \infty\), \(f(x) \to 0\), so \(y = 0\) is a horizontal asymptote.
provenance: written-for-site
steps:
  - Domain R, odd function.
  - Critical values \pm 1/2.
  - Inflexions at 0 and \pm\sqrt{3}.
  - Horizontal asymptote y = 0, intercept at the origin.
  - Sketch.
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l2-curve-sketching.midterm-predicted-b-ex1.3
number: "1.3"
statement: |
  Find the domain of \(f(x) = \sqrt{x}\,(x - 3)\) and sketch the graph. Identify local maxima and minima, inflexion points, asymptotes and intercepts.
tier: exam
topics:
  - curve-sketching
solution: |
  The domain is \([0, +\infty)\). Writing \(f(x) = x^{3/2} - 3x^{1/2}\), the derivative is \(f'(x) = \dfrac{3(x - 1)}{2\sqrt{x}}\) for \(x > 0\). Thus \(f' < 0\) on \((0, 1)\) and \(f' > 0\) on \((1, +\infty)\). There is a local minimum at \(x = 1\) with \(f(1) = -2\). At the endpoint, \(f(0) = 0\) and \(f'(x) \to -\infty\) as \(x \to 0^+\), so the curve leaves the origin with a vertical tangent. The second derivative is \(f''(x) = \dfrac{3(x + 1)}{4x^{3/2}}\), which is positive for all \(x > 0\), so there is no inflexion in the domain. A further intercept is \(x = 3\). As \(x \to +\infty\), \(f(x) \to +\infty\). There is no horizontal or vertical asymptote on \((0, +\infty)\).
provenance: written-for-site
steps:
  - Domain [0, +\infty).
  - Derivative 3(x - 1)/(2\sqrt{x}), minimum (1, -2).
  - Vertical tangent at the origin, intercepts 0 and 3.
  - No inflexion in the domain.
  - Sketch.
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: going-deeper
title: sinh on sheet 1
text: |
  Handout section 4.11 defines \(\sinh\) and \(\cosh\), and that section is optional. Sheet 1 writes \(\sinh x := \frac{e^{x} - e^{-x}}{2}\) as an ordinary formula to sketch. The derivative of that formula is \(\frac{e^{x} + e^{-x}}{2}\), which is positive for every real \(x\).
:::

::: exercise
id: l2-curve-sketching.sheet1-5-1
number: "sheet 1 exercise 5.1"
tier: standard
topics: [curve-sketching]
statement: |
  Sketch the curve of \(f(x) = x^{5} - 5x^{4} + 5x^{3}\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts.
solution: |
  **Domain.** The domain is \(\mathbb{R}\).

  **Derivative.** The derivative is
  \[
  f'(x) = 5x^{2}(x - 1)(x - 3).
  \]
  The critical numbers are \(x = 0\), \(x = 1\), and \(x = 3\).

  **Sign chart.** For \(x \neq 0\) the factor \(x^{2}\) is positive. The product \((x - 1)(x - 3)\) is positive outside \([1, 3]\) and negative on \((1, 3)\). So \(f'\) is:

  - positive on \((-\infty, 0)\) and on \((0, 1)\),
  - negative on \((1, 3)\),
  - positive on \((3, \infty)\).

  The derivative does not change sign at \(x = 0\). The local maximum is \((1, 1)\). The local minimum is \((3, -27)\).

  **Asymptotes.** There is no vertical, horizontal, or oblique asymptote. As \(x \to -\infty\), \(f(x) \to -\infty\), and as \(x \to +\infty\), \(f(x) \to +\infty\).

  **Intercepts.** \(f(0) = 0\), so the origin is the y-intercept. Factoring gives \(f(x) = x^{3}(x^{2} - 5x + 5)\), so the x-intercepts are \(x = 0\) and
  \[
  x = \frac{5 \pm \sqrt{5}}{2}.
  \]

  **Inflection.** The second derivative is
  \[
  f''(x) = 10x(2x^{2} - 6x + 3).
  \]
  Its zeros are \(x = 0\) and \(x = \frac{3 \pm \sqrt{3}}{2}\). The second derivative is:

  - negative on \(\left(-\infty, 0\right)\),
  - positive on \(\left(0, \frac{3 - \sqrt{3}}{2}\right)\),
  - negative on \(\left(\frac{3 - \sqrt{3}}{2}, \frac{3 + \sqrt{3}}{2}\right)\),
  - positive on \(\left(\frac{3 + \sqrt{3}}{2}, \infty\right)\).

  Each zero is a sign change, so the inflection points are
  \[
  \begin{aligned}
  &(0, 0),\\
  &\left(\frac{3 - \sqrt{3}}{2}, \frac{-63 + 39\sqrt{3}}{8}\right),\\
  &\left(\frac{3 + \sqrt{3}}{2}, \frac{-63 - 39\sqrt{3}}{8}\right).
  \end{aligned}
  \]
  The tangent at the origin is horizontal.

  **Conclusion.** The graph rises from \(-\infty\), passes the inflection at the origin and the inflection at \(\frac{3 - \sqrt{3}}{2}\), and reaches the local maximum \((1, 1)\). It then falls, crosses \(x = \frac{5 - \sqrt{5}}{2}\), passes the inflection at \(\frac{3 + \sqrt{3}}{2}\), and reaches the local minimum \((3, -27)\). From there it rises, crosses \(x = \frac{5 + \sqrt{5}}{2}\), and tends to \(+\infty\).
provenance: written-for-site
steps:
  - |
    Domain. State the domain.
  - |
    Derivative. Factor \(f'\) and list the critical numbers.
  - |
    Sign chart. Give the sign of \(f'\) on each interval, and name the local maximum and the local minimum.
  - |
    Asymptotes. State the end behaviour and decide whether any asymptote exists.
  - |
    Intercepts. Find the intercepts.
  - |
    Inflection. Compute \(f''\), give the concavity intervals, and find the inflection points.
  - |
    Conclusion. Describe the curve for the sketch.
verification:
  checks:
    - expr: diff(x**5 - 5*x**4 + 5*x**3, x)
      expected: 5*x**2*(x - 3)*(x - 1)
    - expr: diff(x**5 - 5*x**4 + 5*x**3, x, 2)
      expected: 10*x*(2*x**2 - 6*x + 3)
    - expr: (x**5 - 5*x**4 + 5*x**3).subs(x, 0)
      expected: 0
    - expr: (x**5 - 5*x**4 + 5*x**3).subs(x, 1)
      expected: 1
    - expr: (x**5 - 5*x**4 + 5*x**3).subs(x, 3)
      expected: -27
    - expr: diff(x**5 - 5*x**4 + 5*x**3, x).subs(x, Rational(1, 2))
      expected: Rational(25, 16)
    - expr: diff(x**5 - 5*x**4 + 5*x**3, x).subs(x, 2)
      expected: -20
    - expr: (x**5 - 5*x**4 + 5*x**3).subs(x, (3 - sqrt(3))/2)
      expected: (-63 + 39*sqrt(3))/8
    - expr: (x**5 - 5*x**4 + 5*x**3).subs(x, (3 + sqrt(3))/2)
      expected: (-63 - 39*sqrt(3))/8
    - expr: (x**5 - 5*x**4 + 5*x**3).subs(x, (5 - sqrt(5))/2)
      expected: 0
    - expr: (x**5 - 5*x**4 + 5*x**3).subs(x, (5 + sqrt(5))/2)
      expected: 0
    - expr: sign(limit(x**5 - 5*x**4 + 5*x**3, x, -oo))
      expected: -1
    - expr: sign(limit(x**5 - 5*x**4 + 5*x**3, x, oo))
      expected: 1
:::

::: exercise
id: l2-curve-sketching.sheet1-5-2
number: "sheet 1 exercise 5.2"
tier: standard
topics: [curve-sketching]
statement: |
  Sketch the curve of \(f(x) = (x - 1)^{2}(x + 3)^{2/3}\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts.
solution: |
  **Domain.** The power \((x + 3)^{2/3}\) means the square of the real cube root of \(x + 3\), so the domain is \(\mathbb{R}\). The identity \(\left(x^{2/3}\right)^{3} = x\) fails for negative numbers. The correct identity is \(\left(x^{2/3}\right)^{3} = x^{2}\). The exponential formula \(e^{(2/3)\ln(x + 3)}\) only covers \(x + 3 > 0\).

  **Derivative.** For \(x \neq -3\), with \((x + 3)^{1/3}\) the real cube root,
  \[
  f'(x) = \frac{8(x - 1)(x + 2)}{3(x + 3)^{1/3}}.
  \]
  This is zero at \(x = -2\) and at \(x = 1\). At \(x = -3\) the derivative is undefined.

  **Sign chart.** The real cube root is negative for \(x < -3\) and positive for \(x > -3\). The product \((x - 1)(x + 2)\) is positive on \((-\infty, -2)\) and on \((1, \infty)\), and negative on \((-2, 1)\). Therefore \(f'\) is:

  - negative on \((-\infty, -3)\),
  - positive on \((-3, -2)\),
  - negative on \((-2, 1)\),
  - positive on \((1, \infty)\).

  The local maximum is \((-2, 9)\). The local minima are \((-3, 0)\) and \((1, 0)\). As \(x \to -3^{-}\), \(f'(x) \to -\infty\), and as \(x \to -3^{+}\), \(f'(x) \to +\infty\). The value \(f(-3) = 0\) is finite, so the tangent at \(x = -3\) is vertical. Both \((x - 1)^{2}\) and the square of the real cube root are nonnegative, so \(f(x) \ge 0\) everywhere, and these two minima are the smallest values on the graph.

  **Asymptotes.** The function is defined and finite at every real number, so there is no vertical asymptote. As \(x \to \pm\infty\), \(f(x) \to +\infty\). The quotient \(f(x)/x\) tends to \(+\infty\) as \(x \to +\infty\) and to \(-\infty\) as \(x \to -\infty\), so there is no horizontal or oblique asymptote.

  **Intercepts.** \(f(x) = 0\) at \(x = -3\) and at \(x = 1\). The y-intercept is \(f(0) = 3^{2/3}\).

  **Inflection.** For \(x \neq -3\),
  \[
  f''(x) = \frac{8(5x^{2} + 20x + 11)}{9\left(\sqrt[3]{x + 3}\right)^{4}},
  \]
  where the cube root is real. The denominator is a fourth power, hence positive. The numerator vanishes at
  \[
  x = -2 \pm \frac{3\sqrt{5}}{5}.
  \]
  The quadratic \(5x^{2} + 20x + 11\) is positive outside those roots and negative between them. Thus \(f''\) is:

  - positive on \(\left(-\infty, -2 - \frac{3\sqrt{5}}{5}\right)\),
  - negative on \(\left(-2 - \frac{3\sqrt{5}}{5}, -3\right)\) and on \(\left(-3, -2 + \frac{3\sqrt{5}}{5}\right)\),
  - positive on \(\left(-2 + \frac{3\sqrt{5}}{5}, \infty\right)\).

  Both intervals next to the vertical tangent are concave down. The inflection points, with real cube roots, are
  \[
  \begin{aligned}
  &\Bigl(-2 - \frac{3\sqrt{5}}{5},\\
  &\quad \frac{18}{5}(3 + \sqrt{5})\left(\sqrt[3]{\frac{5 - 3\sqrt{5}}{5}}\right)^{2}\Bigr)
  \end{aligned}
  \]
  and
  \[
  \begin{aligned}
  &\Bigl(-2 + \frac{3\sqrt{5}}{5},\\
  &\quad \frac{18}{5}(3 - \sqrt{5})\left(\sqrt[3]{\frac{5 + 3\sqrt{5}}{5}}\right)^{2}\Bigr).
  \end{aligned}
  \]

  **Conclusion.** The graph decreases from \(+\infty\) to the vertical-tangent minimum at \((-3, 0)\), rises to the local maximum at \((-2, 9)\), falls to the minimum at \((1, 0)\), and then rises to \(+\infty\). It meets the y-axis at \(3^{2/3}\).
provenance: written-for-site
steps:
  - |
    Domain. Say that the real power is the square of the real cube root, and state the domain.
  - |
    Derivative. Compute \(f'\) for \(x \neq -3\), using the real cube root.
  - |
    Sign chart. Give the sign of \(f'\) and identify the extrema, including the vertical tangent at \(x = -3\).
  - |
    Asymptotes. Decide whether any asymptote exists, and state the end behaviour.
  - |
    Intercepts. Find the intercepts.
  - |
    Inflection. Compute \(f''\), give the concavity intervals, and find the inflection points.
  - |
    Conclusion. Describe the curve for the sketch.
verification:
  checks:
    - expr: (real_root(-8, 3))**2
      expected: 4
    - expr: ((real_root(-8, 3))**2)**3
      expected: 64
    - expr: (-8)**2
      expected: 64
    - expr: diff((x - 1)**2*(x + 3)**Rational(2, 3), x)
      expected: 8*(x - 1)*(x + 2)/(3*(x + 3)**Rational(1, 3))
    - expr: limit((((-4 + h - 1)**2*real_root(-4 + h + 3, 3)**2 - 25)/h), h, 0)
      expected: -80/3
    - expr: (8*(x - 1)*(x + 2)/(3*real_root(x + 3, 3))).subs(x, -4)
      expected: -80/3
    - expr: ((x - 1)**2*real_root(x + 3, 3)**2).subs(x, -2)
      expected: 9
    - expr: ((x - 1)**2*real_root(x + 3, 3)**2).subs(x, 1)
      expected: 0
    - expr: ((x - 1)**2*real_root(x + 3, 3)**2).subs(x, -3)
      expected: 0
    - expr: ((x - 1)**2*real_root(x + 3, 3)**2).subs(x, 0)
      expected: 3**Rational(2, 3)
    - expr: sign(limit(8*(x - 1)*(x + 2)/(3*real_root(x + 3, 3)), x, -3, dir='+'))
      expected: 1
    - expr: sign(limit(8*(x - 1)*(x + 2)/(3*real_root(x + 3, 3)), x, -3, dir='-'))
      expected: -1
    - expr: sign(limit((x - 1)**2*Abs(x + 3)**Rational(2, 3), x, oo))
      expected: 1
    - expr: sign(limit((x - 1)**2*Abs(x + 3)**Rational(2, 3), x, -oo))
      expected: 1
    - expr: sign(limit(((x - 1)**2*Abs(x + 3)**Rational(2, 3))/x, x, oo))
      expected: 1
    - expr: sign(limit(((x - 1)**2*Abs(x + 3)**Rational(2, 3))/x, x, -oo))
      expected: -1
    - expr: diff(8*(x - 1)*(x + 2)/(3*(x + 3)**Rational(1, 3)), x)
      expected: 8*(5*x**2 + 20*x + 11)/(9*(x + 3)**Rational(4, 3))
    - expr: (5*x**2 + 20*x + 11).subs(x, -2 - 3*sqrt(5)/5)
      expected: 0
    - expr: (5*x**2 + 20*x + 11).subs(x, -2 + 3*sqrt(5)/5)
      expected: 0
    - expr: ((x - 1)**2*real_root(x + 3, 3)**2).subs(x, -2 - 3*sqrt(5)/5)
      expected: Rational(18, 5)*(3 + sqrt(5))*real_root((5 - 3*sqrt(5))/5, 3)**2
    - expr: ((x - 1)**2*real_root(x + 3, 3)**2).subs(x, -2 + 3*sqrt(5)/5)
      expected: Rational(18, 5)*(3 - sqrt(5))*real_root((5 + 3*sqrt(5))/5, 3)**2
    - expr: real_root(-1, 3)**4
      expected: 1
:::

::: exercise
id: l2-curve-sketching.sheet1-5-3
number: "sheet 1 exercise 5.3"
tier: standard
topics: [curve-sketching]
statement: |
  Sketch the curve of \(f(x) = x e^{x}\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts.
solution: |
  **Domain.** The domain is \(\mathbb{R}\).

  **Derivative.** The derivative is \(f'(x) = (1 + x)e^{x}\). It vanishes only at \(x = -1\).

  **Sign chart.** The factor \(e^{x}\) is positive, so \(f'\) has the sign of \(1 + x\). The derivative is negative on \((-\infty, -1)\) and positive on \((-1, \infty)\). The sign changes from negative to positive at \(x = -1\), and \(f(-1) = -\frac{1}{e}\), so this point is a minimum. There is no local maximum.

  **Asymptotes.** There is no vertical asymptote. As \(x \to -\infty\), \(f(x) \to 0\) from below, so \(y = 0\) is a horizontal asymptote on the left. As \(x \to +\infty\), \(f(x) \to +\infty\), so there is no horizontal asymptote on the right and no oblique asymptote.

  **Intercepts.** \(f(0) = 0\), and \(e^{x}\) never vanishes, so the only intercept is the origin.

  **Inflection.** The second derivative is \(f''(x) = (x + 2)e^{x}\). It is negative on \((-\infty, -2)\), zero at \(x = -2\), and positive on \((-2, \infty)\). The inflection point is \(\left(-2, -\frac{2}{e^{2}}\right)\).

  **Conclusion.** The graph comes up from the asymptote \(y = 0\) through negative values, passes the inflection at \(x = -2\), reaches the minimum \(\left(-1, -\frac{1}{e}\right)\), crosses the origin, and then rises to \(+\infty\). The range is \(\left[-\frac{1}{e}, \infty\right)\).
provenance: written-for-site
steps:
  - |
    Domain. State the domain.
  - |
    Derivative. Compute \(f'\) and find the critical number.
  - |
    Sign chart. Give the sign of \(f'\) and identify the minimum.
  - |
    Asymptotes. Find the horizontal asymptote and decide whether any other asymptote exists.
  - |
    Intercepts. Find the intercepts.
  - |
    Inflection. Compute \(f''\), give the concavity intervals, and find the inflection point.
  - |
    Conclusion. Describe the curve for the sketch.
verification:
  checks:
    - expr: diff(x*exp(x), x)
      expected: (x + 1)*exp(x)
    - expr: diff(x*exp(x), x, 2)
      expected: (x + 2)*exp(x)
    - expr: (x*exp(x)).subs(x, -1)
      expected: -exp(-1)
    - expr: (x*exp(x)).subs(x, -2)
      expected: -2*exp(-2)
    - expr: (x*exp(x)).subs(x, 0)
      expected: 0
    - expr: diff(x*exp(x), x).subs(x, -2)
      expected: -exp(-2)
    - expr: diff(x*exp(x), x).subs(x, 0)
      expected: 1
    - expr: limit(x*exp(x), x, -oo)
      expected: 0
    - expr: sign(limit(x*exp(x), x, oo))
      expected: 1
:::

::: exercise
id: l2-curve-sketching.sheet1-5-4
number: "sheet 1 exercise 5.4"
tier: standard
topics: [curve-sketching]
statement: |
  Sketch the curve of \(f(x) = e^{-x}\cos x\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts.
solution: |
  **Domain.** The domain is \(\mathbb{R}\).

  **Derivative.** The product rule gives
  \[
  \begin{aligned}
  f'(x) &= -e^{-x}(\sin x + \cos x)\\
  &= -\sqrt{2}\, e^{-x}\sin\left(x + \frac{\pi}{4}\right).
  \end{aligned}
  \]
  The exponential factor never vanishes, so the critical points are \(x = k\pi - \frac{\pi}{4}\) for \(k \in \mathbb{Z}\).

  **Sign chart.** Since \(e^{-x} > 0\), the sign of \(f'\) is the opposite of the sign of \(\sin\left(x + \frac{\pi}{4}\right)\). For each integer \(k\), \(f'\) is negative on \(\left(2k\pi - \frac{\pi}{4},\ 2k\pi + \frac{3\pi}{4}\right)\) and positive on \(\left(2k\pi + \frac{3\pi}{4},\ (2k + 2)\pi - \frac{\pi}{4}\right)\). The local maxima are
  \[
  \left(2k\pi - \frac{\pi}{4},\ \frac{\sqrt{2}}{2}e^{\pi/4 - 2k\pi}\right),
  \]
  and the local minima are
  \[
  \left(2k\pi + \frac{3\pi}{4},\ -\frac{\sqrt{2}}{2}e^{-3\pi/4 - 2k\pi}\right).
  \]
  For \(k = 0\), the local maximum is \(\left(-\frac{\pi}{4}, \frac{\sqrt{2}}{2}e^{\pi/4}\right)\) and the local minimum is \(\left(\frac{3\pi}{4}, -\frac{\sqrt{2}}{2}e^{-3\pi/4}\right)\).

  **Asymptotes.** As \(x \to +\infty\), \(f(x) \to 0\), so \(y = 0\) is a horizontal asymptote. As \(x \to -\infty\), the critical values become arbitrarily large positive and arbitrarily large negative, so there is no horizontal asymptote on the left. The function is continuous on \(\mathbb{R}\), so there is no vertical asymptote.

  **Intercepts.** \(f(0) = 1\). The x-intercepts are the zeros of \(\cos x\), namely \(x = \frac{\pi}{2} + k\pi\) for \(k \in \mathbb{Z}\).

  **Inflection.** The second derivative is \(f''(x) = 2e^{-x}\sin x\). It vanishes at \(x = k\pi\), and \(\sin x\) changes sign at each of those points. The inflection points are
  \[
  \left(k\pi,\ (-1)^{k}e^{-k\pi}\right), \qquad k \in \mathbb{Z}.
  \]
  The graph is concave up on \((2k\pi,\ (2k + 1)\pi)\) and concave down on \(((2k + 1)\pi,\ (2k + 2)\pi)\).

  **Conclusion.** On the right the oscillations shrink toward the asymptote \(y = 0\). On the left the local maxima tend to \(+\infty\) and the local minima tend to \(-\infty\).
provenance: written-for-site
steps:
  - |
    Domain. State the domain.
  - |
    Derivative. Compute \(f'\) and describe every critical point.
  - |
    Sign chart. Give the sign of \(f'\) on each interval between consecutive critical points, and name the local maxima and minima.
  - |
    Asymptotes. Find the horizontal asymptote and describe the behaviour as \(x \to -\infty\).
  - |
    Intercepts. Find the intercepts.
  - |
    Inflection. Compute \(f''\), give the concavity intervals, and find the inflection points.
  - |
    Conclusion. Describe the curve for the sketch.
verification:
  checks:
    - expr: diff(exp(-x)*cos(x), x)
      expected: -sqrt(2)*exp(-x)*sin(x + pi/4)
    - expr: -exp(-x)*(sin(x) + cos(x)) + sqrt(2)*exp(-x)*sin(x + pi/4)
      expected: 0
    - expr: diff(exp(-x)*cos(x), x, 2)
      expected: 2*exp(-x)*sin(x)
    - expr: (exp(-x)*cos(x)).subs(x, -pi/4)
      expected: sqrt(2)*exp(pi/4)/2
    - expr: (exp(-x)*cos(x)).subs(x, 3*pi/4)
      expected: -sqrt(2)*exp(-3*pi/4)/2
    - expr: (exp(-x)*cos(x)).subs(x, -5*pi/4)
      expected: -sqrt(2)*exp(5*pi/4)/2
    - expr: diff(exp(-x)*cos(x), x).subs(x, -pi/4)
      expected: 0
    - expr: diff(exp(-x)*cos(x), x).subs(x, 3*pi/4)
      expected: 0
    - expr: limit(exp(-x)*cos(x), x, oo)
      expected: 0
    - expr: sign(limit(exp(-x), x, -oo))
      expected: 1
    - expr: (exp(-x)*cos(x)).subs(x, 0)
      expected: 1
    - expr: (exp(-x)*cos(x)).subs(x, pi/2)
      expected: 0
    - expr: (exp(-x)*cos(x)).subs(x, pi)
      expected: -exp(-pi)
:::

::: exercise
id: l2-curve-sketching.sheet1-5-5
number: "sheet 1 exercise 5.5"
tier: standard
topics: [curve-sketching]
statement: |
  Sketch the curve of \(f(x) = (x + 1)\sqrt{5x^{2} + 35}\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts.
solution: |
  **Domain.** The radicand is \(5x^{2} + 35 = 5(x^{2} + 7)\), which is positive for every real \(x\). The domain is \(\mathbb{R}\).

  **Derivative.** The derivative is
  \[
  f'(x) = \sqrt{5}\,\frac{2x^{2} + x + 7}{\sqrt{x^{2} + 7}}.
  \]
  The denominator is positive. The quadratic \(2x^{2} + x + 7\) has discriminant \(1 - 56 = -55\) and a positive leading coefficient, so it is positive for every real \(x\). Thus \(f'(x) > 0\) on \(\mathbb{R}\), and there is no critical point.

  **Sign chart.** The derivative is positive on the whole domain, so \(f\) is strictly increasing. There is no local maximum and no local minimum.

  **Asymptotes.** There is no vertical asymptote. As \(x \to -\infty\), \(f(x) \to -\infty\), and as \(x \to +\infty\), \(f(x) \to +\infty\). The quotient \(f(x)/x\) tends to \(+\infty\) at both ends, so there is no horizontal or oblique asymptote.

  **Intercepts.** \(f(-1) = 0\), so the x-intercept is \((-1, 0)\). The y-intercept is \(f(0) = \sqrt{35}\).

  **Inflection.** The second derivative is
  \[
  f''(x) = \sqrt{5}\,\frac{2x^{3} + 21x + 7}{(x^{2} + 7)^{3/2}}.
  \]
  The denominator is positive. The numerator has derivative \(6x^{2} + 21 > 0\), so it is strictly increasing and has one real zero
  \[
  c = \sqrt[3]{\frac{7(\sqrt{15} - 1)}{4}} - \sqrt[3]{\frac{7(\sqrt{15} + 1)}{4}}.
  \]
  This \(c\) lies in \((-1, 0)\). Thus \(f''\) is negative on \((-\infty, c)\) and positive on \((c, \infty)\). The inflection point is \(\bigl(c, f(c)\bigr)\), where \(f(c) = (c + 1)\sqrt{5c^{2} + 35}\).

  **Conclusion.** The graph rises from \(-\infty\) to \(+\infty\). It crosses the x-axis at \((-1, 0)\), changes from concave down to concave up at \(x = c\), and crosses the y-axis at \(\sqrt{35}\).
provenance: written-for-site
steps:
  - |
    Domain. State the domain from the radicand.
  - |
    Derivative. Compute \(f'\) and show that it has no real zero.
  - |
    Sign chart. Give the sign of \(f'\) and state the monotonicity.
  - |
    Asymptotes. State the end behaviour and decide whether any asymptote exists.
  - |
    Intercepts. Find the intercepts.
  - |
    Inflection. Compute \(f''\), locate its real zero, and name the inflection point.
  - |
    Conclusion. Describe the curve for the sketch.
verification:
  checks:
    - expr: diff((x + 1)*sqrt(5*x**2 + 35), x)
      expected: sqrt(5)*(2*x**2 + x + 7)/sqrt(x**2 + 7)
    - expr: diff((x + 1)*sqrt(5*x**2 + 35), x, 2)
      expected: sqrt(5)*(2*x**3 + 21*x + 7)/(x**2 + 7)**Rational(3, 2)
    - expr: discriminant(2*x**2 + x + 7)
      expected: -55
    - expr: solveset(2*x**2 + x + 7, x, Reals)
      expected: EmptySet
    - expr: diff((x + 1)*sqrt(5*x**2 + 35), x).subs(x, 0)
      expected: sqrt(35)
    - expr: (2*x**3 + 21*x + 7).subs(x, real_root(7*(sqrt(15) - 1)/4, 3) + real_root(-7*(sqrt(15) + 1)/4, 3))
      expected: 0
    - expr: sign(real_root(7*(sqrt(15) - 1)/4, 3) + real_root(-7*(sqrt(15) + 1)/4, 3))
      expected: -1
    - expr: sign(1 + real_root(7*(sqrt(15) - 1)/4, 3) + real_root(-7*(sqrt(15) + 1)/4, 3))
      expected: 1
    - expr: ((x + 1)*sqrt(5*x**2 + 35)).subs(x, -1)
      expected: 0
    - expr: ((x + 1)*sqrt(5*x**2 + 35)).subs(x, 0)
      expected: sqrt(35)
    - expr: sign(limit((x + 1)*sqrt(5*x**2 + 35), x, oo))
      expected: 1
    - expr: sign(limit((x + 1)*sqrt(5*x**2 + 35), x, -oo))
      expected: -1
    - expr: sign(limit(((x + 1)*sqrt(5*x**2 + 35))/x, x, oo))
      expected: 1
    - expr: sign(limit(((x + 1)*sqrt(5*x**2 + 35))/x, x, -oo))
      expected: 1
:::

::: exercise
id: l2-curve-sketching.sheet1-5-6
number: "sheet 1 exercise 5.6"
tier: standard
topics: [curve-sketching]
statement: |
  Sketch the curve of \(f(x) = \sinh x := \frac{e^{x} - e^{-x}}{2}\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts.
solution: |
  **Domain.** The domain is \(\mathbb{R}\). The formula is odd, because \(f(-x) = -f(x)\).

  **Derivative.** The derivative is
  \[
  f'(x) = \frac{e^{x} + e^{-x}}{2}.
  \]
  Both terms are positive, so \(f'(x) > 0\) for every real \(x\). There is no critical point. At the origin the slope is \(f'(0) = 1\).

  **Sign chart.** The derivative is positive on \(\mathbb{R}\), so \(f\) is strictly increasing. There is no local maximum and no local minimum.

  **Asymptotes.** There is no vertical asymptote. As \(x \to +\infty\), \(f(x) \to +\infty\), and as \(x \to -\infty\), \(f(x) \to -\infty\). The quotient \(f(x)/x\) tends to \(+\infty\) at both ends, so there is no horizontal or oblique asymptote.

  **Intercepts.** \(f(0) = 0\). A strictly increasing function can cross zero only once, so the only intercept is the origin.

  **Inflection.** The second derivative is
  \[
  f''(x) = \frac{e^{x} - e^{-x}}{2} = f(x).
  \]
  Since \(f\) is strictly increasing and \(f(0) = 0\), one has \(f''(x) < 0\) on \((-\infty, 0)\) and \(f''(x) > 0\) on \((0, \infty)\). The graph is concave down on the left of the origin and concave up on the right. The inflection point is the origin.

  **Conclusion.** The graph is an odd curve through the origin with slope \(1\), concave down on \((-\infty, 0)\) and concave up on \((0, \infty)\), and it has no asymptote. The range is \(\mathbb{R}\).
provenance: written-for-site
steps:
  - |
    Domain. State the domain and the symmetry.
  - |
    Derivative. Compute \(f'\) from the exponential formula and show that it stays positive.
  - |
    Sign chart. Give the sign of \(f'\) and state the monotonicity.
  - |
    Asymptotes. State the end behaviour and decide whether any asymptote exists.
  - |
    Intercepts. Find the intercepts.
  - |
    Inflection. Compute \(f''\), give the concavity intervals, and find the inflection point.
  - |
    Conclusion. Describe the curve for the sketch.
verification:
  checks:
    - expr: diff((exp(x) - exp(-x))/2, x)
      expected: (exp(x) + exp(-x))/2
    - expr: diff((exp(x) - exp(-x))/2, x, 2)
      expected: (exp(x) - exp(-x))/2
    - expr: solveset(exp(x) + exp(-x), x, Reals)
      expected: EmptySet
    - expr: ((exp(x) - exp(-x))/2).subs(x, 0)
      expected: 0
    - expr: ((exp(x) + exp(-x))/2).subs(x, 0)
      expected: 1
    - expr: ((exp(x) - exp(-x))/2).subs(x, -x) + (exp(x) - exp(-x))/2
      expected: 0
    - expr: sign((exp(1) - exp(-1))/2)
      expected: 1
    - expr: sign((exp(-1) - exp(1))/2)
      expected: -1
    - expr: sign(limit((exp(x) - exp(-x))/2, x, oo))
      expected: 1
    - expr: sign(limit((exp(x) - exp(-x))/2, x, -oo))
      expected: -1
    - expr: sign(limit(((exp(x) - exp(-x))/2)/x, x, oo))
      expected: 1
    - expr: sign(limit(((exp(x) - exp(-x))/2)/x, x, -oo))
      expected: 1
:::

::: exercise
id: l2-curve-sketching.sheet1-5-7
number: "sheet 1 exercise 5.7"
tier: standard
topics: [curve-sketching]
statement: |
  Sketch the curve of \(f(x) = \frac{1}{1 - x^{2}}\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts.
solution: |
  **Domain.** The denominator vanishes at \(x = \pm 1\), so the domain is \(\mathbb{R} \setminus \{-1, 1\}\).

  **Derivative.** The derivative is
  \[
  f'(x) = \frac{2x}{(1 - x^{2})^{2}}.
  \]
  The denominator is positive wherever \(f\) is defined, so \(f'\) has the sign of \(x\). The only critical point is \(x = 0\).

  **Sign chart.** The derivative is negative on \((-\infty, -1)\) and on \((-1, 0)\), and positive on \((0, 1)\) and on \((1, \infty)\). On the middle branch the sign changes from negative to positive at \(x = 0\), where \(f(0) = 1\), so \((0, 1)\) is a local minimum. The outer branches have no critical point, and there is no local maximum.

  **Asymptotes.** The one-sided limits are
  \[
  \begin{aligned}
  \lim_{x \to -1^{-}} f(x) &= -\infty,\\
  \lim_{x \to -1^{+}} f(x) &= +\infty,\\
  \lim_{x \to 1^{-}} f(x) &= +\infty,\\
  \lim_{x \to 1^{+}} f(x) &= -\infty.
  \end{aligned}
  \]
  The lines \(x = -1\) and \(x = 1\) are vertical asymptotes. As \(x \to \pm\infty\), \(f(x) \to 0\). For \(|x| > 1\) the denominator \(1 - x^{2}\) is negative, so the values are negative, and the graph approaches the horizontal asymptote \(y = 0\) through negative values at both ends.

  **Intercepts.** The numerator is \(1\), so there is no x-intercept. The y-intercept is \((0, 1)\).

  **Inflection.** The second derivative is
  \[
  f''(x) = \frac{-2(3x^{2} + 1)}{(x^{2} - 1)^{3}}.
  \]
  The factor \(3x^{2} + 1\) is positive for every real \(x\), so \(f''\) has no zero. On \((-1, 1)\) the factor \((x^{2} - 1)^{3}\) is negative, hence \(f'' > 0\) and the middle branch is concave up. On \((-\infty, -1)\) and on \((1, \infty)\) that factor is positive, hence \(f'' < 0\) and those branches are concave down. The sign changes of \(f''\) sit on the vertical asymptotes. The graph has no inflection point.

  **Conclusion.** The left branch decreases from the asymptote \(y = 0\) to \(-\infty\). The middle branch falls from \(+\infty\) to the local minimum \((0, 1)\) and then rises to \(+\infty\). The right branch increases from \(-\infty\) toward \(y = 0\).
provenance: written-for-site
steps:
  - |
    Domain. State the domain by excluding the zeros of the denominator.
  - |
    Derivative. Compute \(f'\) and find the critical point.
  - |
    Sign chart. Give the sign of \(f'\) on each piece of the domain, and name the local minimum.
  - |
    Asymptotes. Find the vertical and horizontal asymptotes, including the one-sided limits.
  - |
    Intercepts. Find the intercepts.
  - |
    Inflection. Compute \(f''\) and decide whether an inflection point exists.
  - |
    Conclusion. Describe the three branches for the sketch.
verification:
  checks:
    - expr: diff(1/(1 - x**2), x)
      expected: 2*x/(1 - x**2)**2
    - expr: diff(1/(1 - x**2), x, 2)
      expected: -2*(3*x**2 + 1)/(x**2 - 1)**3
    - expr: (1/(1 - x**2)).subs(x, 0)
      expected: 1
    - expr: solveset(3*x**2 + 1, x, Reals)
      expected: EmptySet
    - expr: limit(1/(1 - x**2), x, oo)
      expected: 0
    - expr: limit(1/(1 - x**2), x, -oo)
      expected: 0
    - expr: sign(limit(1/(1 - x**2), x, 1, dir='+'))
      expected: -1
    - expr: sign(limit(1/(1 - x**2), x, 1, dir='-'))
      expected: 1
    - expr: sign(limit(1/(1 - x**2), x, -1, dir='+'))
      expected: 1
    - expr: sign(limit(1/(1 - x**2), x, -1, dir='-'))
      expected: -1
    - expr: diff(1/(1 - x**2), x).subs(x, 2)
      expected: Rational(4, 9)
    - expr: diff(1/(1 - x**2), x).subs(x, -2)
      expected: Rational(-4, 9)
:::

::: exercise
id: l2-curve-sketching.sheet1-5-8
number: "sheet 1 exercise 5.8"
tier: standard
topics: [curve-sketching]
statement: |
  Sketch the curve of \(f(x) = \arctan x\). Mark the local maxima and minima, the inflection points, the asymptotes, and the intercepts. Hint: \(f(\tan x) = x\).
solution: |
  **Domain.** The domain is \(\mathbb{R}\). The function is odd, because \(f(-x) = -f(x)\).

  **Derivative.** The derivative is
  \[
  f'(x) = \frac{1}{1 + x^{2}}.
  \]
  This is positive for every real \(x\), so there is no critical point.

  **Sign chart.** The derivative is positive on \(\mathbb{R}\), so \(f\) is strictly increasing. There is no local maximum and no local minimum.

  **Asymptotes.** There is no vertical asymptote. As \(x \to +\infty\), \(f(x) \to \frac{\pi}{2}\), and as \(x \to -\infty\), \(f(x) \to -\frac{\pi}{2}\). The lines \(y = \frac{\pi}{2}\) and \(y = -\frac{\pi}{2}\) are horizontal asymptotes.

  **Intercepts.** \(f(0) = 0\). A strictly increasing function crosses zero only once, so the only intercept is the origin.

  **Inflection.** The second derivative is
  \[
  f''(x) = \frac{-2x}{(1 + x^{2})^{2}}.
  \]
  The denominator is positive. Thus \(f''\) is positive on \((-\infty, 0)\), zero at \(x = 0\), and negative on \((0, \infty)\). The graph is concave up on the left of the origin and concave down on the right. The inflection point is the origin.

  **Conclusion.** The graph rises from the asymptote \(y = -\frac{\pi}{2}\) to the asymptote \(y = \frac{\pi}{2}\), with an inflection at the origin. The range is \(\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)\). The hint \(f(\tan x) = x\) holds when \(x\) is in \(\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)\).
provenance: written-for-site
steps:
  - |
    Domain. State the domain and the symmetry.
  - |
    Derivative. Compute \(f'\) and show that it has no zero.
  - |
    Sign chart. Give the sign of \(f'\) and state the monotonicity.
  - |
    Asymptotes. Find both horizontal asymptotes.
  - |
    Intercepts. Find the intercepts.
  - |
    Inflection. Compute \(f''\), give the concavity intervals, and find the inflection point.
  - |
    Conclusion. Describe the curve, and state where the hint \(f(\tan x) = x\) holds.
verification:
  checks:
    - expr: diff(atan(x), x)
      expected: 1/(1 + x**2)
    - expr: diff(atan(x), x, 2)
      expected: -2*x/(1 + x**2)**2
    - expr: limit(atan(x), x, oo)
      expected: pi/2
    - expr: limit(atan(x), x, -oo)
      expected: -pi/2
    - expr: atan(0)
      expected: 0
    - expr: atan(tan(pi/6))
      expected: pi/6
    - expr: solveset(1/(1 + x**2), x, Reals)
      expected: EmptySet
    - expr: diff(atan(x), x, 2).subs(x, -1)
      expected: Rational(1, 2)
    - expr: diff(atan(x), x, 2).subs(x, 1)
      expected: Rational(-1, 2)
:::
