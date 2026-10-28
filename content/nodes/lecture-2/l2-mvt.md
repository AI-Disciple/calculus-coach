---
id: l2-mvt
lecture: 2
order: 11
title: The mean value theorem
prerequisites: [l1-derivative-rules, l1-continuity]
sources:
  - { source: handout, section: "6.5", page: 146 }
examWeight: low
status: reviewed
---

::: section
title: Rolle's theorem
:::

::: formal-statement
kind: theorem
title: "Rolle's theorem"
source: { source: handout, section: "6.5", page: 146 }
text: |
  Suppose:

  - \(f\) has a derivative on \((a,b)\),
  - \(f\) is continuous on \([a,b]\),
  - \(f(a)=f(b)\).

  Then some \(c\in(a,b)\) has
  \[
  f'(c)=0.
  \]
:::

::: plain-explanation
text: |
  Equal endpoint values make the **chord** between them horizontal. Continuity on the closed interval and a derivative on the open interval then give a horizontal tangent at some point strictly between the endpoints. There are two cases:

  - If the graph is flat, that derivative is zero everywhere.
  - If the graph leaves the endpoint height and comes back, it has a horizontal tangent in between.
:::

::: trap
text: |
  Rolle's theorem requires all three of these:

  - a derivative on \((a,b)\),
  - continuity on \([a,b]\),
  - equal endpoint values.

  For \(f(x)=\tan x\) on \([\pi,2\pi]\), the endpoint values are
  \[
  \tan\pi=0,\qquad \tan(2\pi)=0.
  \]
  The function is undefined at \(3\pi/2\), and \(3\pi/2\) lies in \((\pi,2\pi)\), so \(\tan x\) is not continuous on \([\pi,2\pi]\) and it has no derivative on the whole of \((\pi,2\pi)\). Rolle's theorem does not apply.

  Where the derivative exists it equals \(\sec^2 x\), and \(\sec^2 x\ge 1\), so that derivative has no zero. There is no \(c\) in \((\pi,2\pi)\) with \(f'(c)=0\).
:::

::: key-points
text: |
  - Rolle's theorem: if \(f\) has a derivative on \((a,b)\), is continuous on \([a,b]\), and \(f(a)=f(b)\), then some \(c\in(a,b)\) has \(f'(c)=0\).
  - The usual slip applies it to \(\tan x\) on \([\pi,2\pi]\) because \(\tan\pi=\tan(2\pi)=0\). \(\tan x\) is undefined at \(3\pi/2\), so it is not continuous on \([\pi,2\pi]\) and the theorem does not apply. Its derivative \(\sec^2 x\) has no zero.
:::

::: concept-question
id: l2-mvt.q-92b08df0
question: |
  \(\tan\pi=\tan(2\pi)=0\), and no point of \((\pi,2\pi)\) has derivative \(0\). Which hypothesis of Rolle's theorem fails?
options:
  - text: |
      Continuity of \(\tan x\) on \([\pi,2\pi]\).
    correct: true
  - text: |
      The equality \(\tan\pi=\tan(2\pi)\).
  - text: |
      A derivative of \(\tan x\) at the single point \(x=\pi\).
  - text: |
      The conclusion that the derivative is positive.
explanation: |
  \(\tan x\) is undefined at \(3\pi/2\), and \(3\pi/2\) lies in \((\pi,2\pi)\), so \(\tan x\) is not continuous on \([\pi,2\pi]\). Rolle's theorem does not apply.
:::

::: section
title: The mean value theorem
:::

::: formal-statement
kind: theorem
title: The mean value theorem
source: { source: handout, section: "6.5", page: 146 }
text: |
  Suppose:

  - \(f\) has a derivative on \((a,b)\),
  - \(f\) is continuous on \([a,b]\).

  Then some \(c\in(a,b)\) has
  \[
  f'(c)=\frac{f(b)-f(a)}{b-a}.
  \]
:::

::: plain-explanation
text: |
  The fraction
  \[
  \frac{f(b)-f(a)}{b-a}
  \]
  is the slope of the **chord** from \(x=a\) to \(x=b\). The theorem says the graph has that same slope at some interior point.

  Take position as a function of time. If a car goes from one toll booth to the next at average speed 70, that average is a chord slope. Some instant between the booths has instantaneous speed 70. On a road whose limit is 65, the car is over the limit at that instant.
:::

::: worked-example
title: Endpoint slope of \(x^2\)
problem: |
  Let \(f(x)=x^2\) on \([-1,2]\). Find \(c\in(-1,2)\) such that \(f'(c)\) equals the slope of the line through the endpoints.
solution: |
  \[
  \begin{aligned}
  f(-1)&=1,\\
  f(2)&=4,\\
  \text{chord slope}&=\frac{4-1}{2-(-1)}=\frac{3}{3}=1.
  \end{aligned}
  \]
  The derivative is \(f'(x)=2x\). The equation \(2c=1\) gives \(c=\frac{1}{2}\). This value lies in \((-1,2)\), since \(-1<\frac{1}{2}<2\).

  At \(c=\frac{1}{2}\), the derivative of \(x^2\) equals the slope of the chord from \(x=-1\) to \(x=2\).
:::

::: guided-example
title: A rational function on a closed interval
problem: |
  Let \(f(x)=\frac{x}{x+2}\) on \([1,4]\). Check the hypotheses of the mean value theorem, and find every \(c\) in \((1,4)\) at which \(f'(c)\) equals the chord slope.
steps:
  - |
    The denominator \(x+2\) is zero at \(x=-2\), which lies outside \([1,4]\). On \([1,4]\), \(x+2\ge 3\), so \(f\) is continuous on \([1,4]\).
  - |
    The same bound keeps the denominator away from zero on \((1,4)\), so \(f\) has a derivative there. The quotient rule gives
    \[
    \begin{aligned}
    f'(x)&=\frac{(1)(x+2)-x(1)}{(x+2)^2}\\
    &=\frac{2}{(x+2)^2}.
    \end{aligned}
    \]
  - |
    \[
    \begin{aligned}
    f(1)&=\frac{1}{3},\\
    f(4)&=\frac{4}{6}=\frac{2}{3},\\
    \text{chord slope}&=\frac{\frac{2}{3}-\frac{1}{3}}{4-1}=\frac{\frac{1}{3}}{3}=\frac{1}{9}.
    \end{aligned}
    \]
  - |
    Set \(\frac{2}{(c+2)^2}=\frac{1}{9}\). Then
    \[
    \begin{aligned}
    (c+2)^2&=18,\\
    c+2&=\pm\sqrt{18}=\pm 3\sqrt{2}.
    \end{aligned}
    \]
    The candidates are \(c=-2+3\sqrt{2}\) and \(c=-2-3\sqrt{2}\).
  - |
    The candidates are checked against \((1,4)\) separately:

    - Since \(1<2<4\), taking square roots gives \(1<\sqrt{2}<2\), and then \(3<3\sqrt{2}<6\). Subtracting 2 gives \(1<-2+3\sqrt{2}<4\), so this value lies in \((1,4)\).
    - The other candidate satisfies \(-2-3\sqrt{2}<-2-3=-5\), which is less than \(1\), so it lies outside \((1,4)\).

    The mean value theorem point is \(c=-2+3\sqrt{2}\).
:::

::: trap
text: |
  The mean value theorem requires both of these:

  - continuity on the whole closed interval,
  - a derivative on the open interval.

  Let \(f(x)=(x-3)^{-2}\) on \([1,4]\). The endpoint values and the chord slope are
  \[
  \begin{aligned}
  f(1)&=\frac{1}{4},\\
  f(4)&=1,\\
  \text{chord slope}&=\frac{1-\frac{1}{4}}{4-1}=\frac{\frac{3}{4}}{3}=\frac{1}{4}.
  \end{aligned}
  \]
  The derivative is \(f'(x)=-2(x-3)^{-3}\). The equation \(f'(c)=\frac{1}{4}\) reads
  \[
  \begin{aligned}
  -\frac{2}{(c-3)^3}&=\frac{1}{4},\\
  (c-3)^3&=-8,\\
  c-3&=-2.
  \end{aligned}
  \]
  Thus \(c=1\), which lies outside \((1,4)\). The function is undefined at \(x=3\), and \(3\) lies in \([1,4]\), so \(f\) is not continuous on \([1,4]\). The mean value theorem does not apply.
:::

::: key-points
text: |
  - The mean value theorem: if \(f\) has a derivative on \((a,b)\) and is continuous on \([a,b]\), then some \(c\in(a,b)\) has \(f'(c)=\frac{f(b)-f(a)}{b-a}\), the chord slope.
  - With position as a function of time, the average speed between two points is a chord slope, and some instant between them has that instantaneous speed.
  - The usual slip applies it to \(f(x)=(x-3)^{-2}\) on \([1,4]\) and looks for a solution of \(f'(c)=\frac{1}{4}\) in \((1,4)\). \(f\) is undefined at \(x=3\), which lies in \([1,4]\), so \(f\) is not continuous on \([1,4]\) and the theorem does not apply. The equation gives \(c=1\), which lies outside \((1,4)\).
:::

::: concept-question
id: l2-mvt.q-959f5f94
question: |
  \(f\) is continuous on \([a,b]\) and has a derivative on \((a,b)\). What does the mean value theorem guarantee?
options:
  - text: |
      Some \(c\) in \((a,b)\) with \(f'(c)\) equal to \(\frac{f(b)-f(a)}{b-a}\).
    correct: true
  - text: |
      \(f'(x)\) equals \(\frac{f(b)-f(a)}{b-a}\) at every \(x\) in \((a,b)\).
  - text: |
      \(f(a)=f(b)\).
  - text: |
      A point where \(f'(c)=0\).
explanation: |
  The chord slope is \(\frac{f(b)-f(a)}{b-a}\). The mean value theorem says the derivative takes this value at some \(c\) in \((a,b)\).
:::

::: concept-question
id: l2-mvt.q-032a335b
question: |
  A car's average speed between two toll booths is 70. Which conclusion follows from the mean value theorem?
options:
  - text: |
      At some instant between the booths the speed is 70.
    correct: true
  - text: |
      The speed is 70 at every instant between the booths.
  - text: |
      The speed is above 70 at every instant between the booths.
  - text: |
      The car stops somewhere between the booths.
explanation: |
  Average speed is the chord slope of position against time. The mean value theorem gives an instant when the instantaneous speed equals that average.
:::

::: concept-question
id: l2-mvt.q-8d12a6fc
question: |
  For \(f(x)=(x-3)^{-2}\) on \([1,4]\), the chord slope is \(\frac{1}{4}\) and no point of \((1,4)\) has derivative \(\frac{1}{4}\). Which hypothesis of the mean value theorem fails?
options:
  - text: |
      \(f\) is undefined at \(x=3\), which lies in \([1,4]\), so \(f\) is not continuous on \([1,4]\).
    correct: true
  - text: |
      The mean value theorem applies only to polynomials.
  - text: |
      \(f(1)=f(4)\).
  - text: |
      \(f'(x)=0\) at every point of \((1,4)\).
explanation: |
  The endpoint values are \(f(1)=\frac{1}{4}\) and \(f(4)=1\), so the chord slope is \(\frac{1}{4}\). The derivative equals \(\frac{1}{4}\) at \(c=1\), which lies outside \((1,4)\). Because \(f\) is undefined at \(x=3\), the continuity hypothesis fails and the theorem does not apply.
:::

::: exercise
id: l2-mvt.ex-polynomial
tier: basic
topics: [mean-value-theorem]
statement: |
  Let \(f(x)=x^2+2x\) on \([0,2]\). Find \(c\) in \((0,2)\) such that \(f'(c)\) equals the slope of the line through the endpoints.
solution: |
  A polynomial is continuous on \([0,2]\) and has a derivative on \((0,2)\), so the mean value theorem applies.
  \[
  \begin{aligned}
  f(0)&=0,\\
  f(2)&=8,\\
  \text{chord slope}&=\frac{8-0}{2-0}=4,\\
  f'(x)&=2x+2.
  \end{aligned}
  \]
  The equation \(2c+2=4\) gives \(2c=2\), so \(c=1\). This value lies in \((0,2)\).

  At \(c=1\), the derivative equals the chord slope.
provenance: written-for-site
steps:
  - Chord slope from the endpoint values.
  - Solve \(f'(c)=4\).
  - Check that \(c=1\) lies in \((0,2)\).
verification:
  checks:
    - expr: ((2**2 + 2*2) - (0**2 + 2*0))/(2 - 0)
      expected: "4"
    - expr: (4 - 2)/2
      expected: "1"
    - expr: 2*1 + 2
      expected: "4"
:::

::: section
title: Functions with the same derivative
:::

::: formal-statement
kind: theorem
title: Functions with the same derivative
source: { source: handout, section: "6.5", page: 148 }
text: |
  If \(f'(x)=g'(x)\) for every \(x\in(a,b)\), then for some **constant** \(k\),
  \[
  f(x)=g(x)+k\quad\text{on }(a,b).
  \]
:::

::: plain-explanation
text: |
  Take \(u<v\) in \((a,b)\). The mean value theorem gives a point where \(f'\) equals the chord slope \((f(v)-f(u))/(v-u)\). If \(f'\) is \(0\) at every point of \((a,b)\), that slope is \(0\), so \(f(v)=f(u)\). Thus \(f\) is constant on \((a,b)\).

  When \(f'\) and \(g'\) agree on \((a,b)\), the difference \(f-g\) has derivative \(0\). That difference is a constant \(k\), and \(f(x)=g(x)+k\) on \((a,b)\).
:::

::: key-points
text: |
  - If \(f'(x)=0\) for every \(x\) in \((a,b)\), then \(f\) is constant on \((a,b)\).
  - If \(f'(x)=g'(x)\) for every \(x\in(a,b)\), then \(f(x)=g(x)+k\) on \((a,b)\) for some constant \(k\).
:::

::: going-deeper
title: All functions with a given derivative
text: |
  Differentiating \(\frac{5}{2}x^2-3x+k\) returns \(5x-3\) for every constant \(k\). Theorem 6.5.4 says these are all the functions with derivative \(5x-3\).

  Differentiating \(-\cos x+e^x+k\) returns \(\sin x+e^x\). Every function with that derivative is \(-\cos x+e^x+k\).
:::

::: concept-question
id: l2-mvt.q-e046f810
question: |
  \(f'\) and \(g'\) agree at every point of an open interval \((a,b)\). What follows?
options:
  - text: |
      \(f(x)=g(x)+k\) on \((a,b)\) for some constant \(k\).
    correct: true
  - text: |
      \(f(x)=g(x)\) for every \(x\) in \((a,b)\).
  - text: |
      \(f'(x)=0\) for every \(x\) in \((a,b)\).
  - text: |
      The constant \(k\) has to be \(0\).
explanation: |
  The difference \(f-g\) has derivative \(0\) on \((a,b)\), so \(f-g\) is a constant \(k\) there. That is the statement of theorem 6.5.4.
:::

::: exercise
id: l2-mvt.ex-same-derivative
tier: basic
topics: [mean-value-theorem]
statement: |
  A function \(f\) satisfies \(f'(x)=\sin x+e^x\) for every \(x\) in \((-1,1)\), and \(f(0)=3\). Find \(f(x)\) on \((-1,1)\).
solution: |
  Let \(F(x)=-\cos x+e^x\). Then
  \[
  F'(x)=\sin x+e^x=f'(x)
  \]
  for every \(x\) in \((-1,1)\). By the theorem on functions with the same derivative, there is a constant \(k\) with \(f(x)=F(x)+k\) on \((-1,1)\).

  The point \(0\) lies in \((-1,1)\), and
  \[
  F(0)=-\cos 0+e^0=-1+1=0.
  \]
  The condition \(f(0)=3\) gives \(0+k=3\), so \(k=3\). Therefore
  \[
  f(x)=-\cos x+e^x+3.
  \]
provenance: written-for-site
steps:
  - A function \(F\) with \(F'=f'\).
  - The constant \(k\) from \(f(0)=3\).
  - The result \(f(x)=-\cos x+e^x+3\).
verification:
  checks:
    - expr: diff(-cos(x) + exp(x) + 3, x) - (sin(x) + exp(x))
      expected: "0"
    - expr: (-cos(x) + exp(x) + 3).subs(x, 0)
      expected: "3"
:::

::: sheet-item
id: l2-mvt.sheet-mvt
category: formula
text: |
  If \(f\) is continuous on \([a,b]\) and has a derivative on \((a,b)\), then some \(c\) in \((a,b)\) satisfies
  \[
  f'(c)=\frac{f(b)-f(a)}{b-a}.
  \]
:::

::: exercise
id: l2-mvt.ex-rational
number: "6.5 exercise 3"
tier: standard
topics: [mean-value-theorem]
statement: |
  Let \(f(x)=\frac{3x}{x+7}\) on \([-2,6]\). Check the hypotheses of the mean value theorem, and find every \(c\) in \((-2,6)\) at which \(f'(c)\) equals the chord slope.
solution: |
  The denominator \(x+7\) is zero at \(x=-7\), which lies outside \([-2,6]\). On \([-2,6]\) the denominator runs from \(5\) to \(13\), so \(f\) is continuous on \([-2,6]\) and has a derivative on \((-2,6)\). The mean value theorem applies.

  The quotient rule gives
  \[
  f'(x)=\frac{3(x+7)-3x}{(x+7)^2}=\frac{21}{(x+7)^2}.
  \]
  \[
  \begin{aligned}
  f(-2)&=-\frac{6}{5},\\
  f(6)&=\frac{18}{13},\\
  \text{chord slope}&=\frac{\frac{18}{13}-\left(-\frac{6}{5}\right)}{6-(-2)}\\
  &=\frac{\frac{18}{13}+\frac{6}{5}}{8}\\
  &=\frac{\frac{168}{65}}{8}\\
  &=\frac{21}{65}.
  \end{aligned}
  \]
  Set \(\frac{21}{(c+7)^2}=\frac{21}{65}\). Then \((c+7)^2=65\), so \(c=-7+\sqrt{65}\) or \(c=-7-\sqrt{65}\).

  The candidates are checked against \((-2,6)\) separately:

  - Taking square roots of \(49<65<81\) gives \(7<\sqrt{65}<9\), and then \(0<-7+\sqrt{65}<2\). This value lies in \((-2,6)\).
  - The other candidate satisfies \(-7-\sqrt{65}<-7-7=-14\), which is less than \(-2\), so it lies outside \((-2,6)\).

  The mean value theorem point is \(c=-7+\sqrt{65}\).
provenance: written-for-site
steps:
  - Hypotheses on \([-2,6]\), using the pole at \(x=-7\).
  - Chord slope \(\frac{21}{65}\) and derivative \(\frac{21}{(x+7)^2}\).
  - The root in \((-2,6)\) is \(c=-7+\sqrt{65}\).
verification:
  checks:
    - expr: (Rational(18, 13) + Rational(6, 5))/8
      expected: Rational(21, 65)
    - expr: 21/((-7 + sqrt(65) + 7)**2)
      expected: Rational(21, 65)
    - expr: diff(3*x/(x + 7), x) - 21/(x + 7)**2
      expected: "0"
:::

::: exercise
id: l2-mvt.ex-one-root
number: "6.5 exercise 11"
tier: exam
topics: [mean-value-theorem]
statement: |
  Suppose \(f\) is differentiable at every real number and \(f'(x)\ne 0\) for every real \(x\). Show that \(f\) has at most one real root.
solution: |
  Suppose \(a\) and \(b\) are roots with \(a<b\). Then
  \[
  f(a)=f(b)=0.
  \]
  Differentiability on the whole line gives continuity on \([a,b]\) and a derivative on \((a,b)\). Rolle's theorem supplies a point \(c\) in \((a,b)\) with \(f'(c)=0\). That contradicts the hypothesis that the derivative is never zero. So \(f\) cannot have two distinct real roots.

  For example, \(f(x)=e^x\) has derivative \(e^x\), which is never zero, and \(e^x=0\) has no solution. The argument rules out two or more roots.
provenance: written-for-site
steps:
  - Assume two roots \(a<b\).
  - Apply Rolle's theorem on \([a,b]\).
  - A zero of \(f'\) contradicts the hypothesis.
verification:
  checkable: false
  reason: |
    The solution is a proof by contradiction from Rolle's theorem. There is no number or identity for SymPy to compare.
:::

::: exercise
id: l2-mvt.ex-mvt-estimate-sqrt
tier: standard
topics: [mean-value-theorem]
statement: |
  Apply the mean value theorem to \(f(x) = \sqrt{x}\) on \([100, 101]\) to show that
  \[
  10 + \frac{1}{22} < \sqrt{101} < 10 + \frac{1}{20}.
  \]
solution: |
  The function \(\sqrt{x}\) is continuous on \([100, 101]\) and has the derivative \(f'(x) = \frac{1}{2\sqrt{x}}\) on \((100, 101)\). The mean value theorem gives a point \(c\) in \((100, 101)\) with
  \[
  \begin{aligned}
  \sqrt{101} - \sqrt{100} &= f'(c)\,(101 - 100)\\
  &= \frac{1}{2\sqrt{c}}.
  \end{aligned}
  \]
  The point \(c\) is not known, so bound it. Since \(100 < c < 101\), we have \(10 < \sqrt{c}\), and \(\sqrt{c} < \sqrt{101} < 11\) because \(101 < 121\). Then
  \[
  \frac{1}{2 \cdot 11} < \frac{1}{2\sqrt{c}} < \frac{1}{2 \cdot 10},
  \]
  that is, \(\frac{1}{22} < \sqrt{101} - 10 < \frac{1}{20}\). Adding \(10\) gives the claim. Numerically, \(\sqrt{101} \approx 10.0499\), between \(10.0455\) and \(10.05\).
provenance: written-for-site
steps:
  - Hypotheses on \([100, 101]\) and the equation \(\sqrt{101} - 10 = 1/(2\sqrt{c})\).
  - Bound \(10 < \sqrt{c} < 11\).
  - Conclude \(1/22 < \sqrt{101} - 10 < 1/20\).
verification:
  checks:
    - expr: diff(sqrt(x), x).subs(x, 100)
      expected: Rational(1, 20)
    - expr: sign(sqrt(101) - 10 - Rational(1, 22))
      expected: "1"
    - expr: sign(Rational(1, 20) - (sqrt(101) - 10))
      expected: "1"
    - expr: sign(11 - sqrt(101))
      expected: "1"
:::

::: exercise
id: l2-mvt.ex-mvt-one-real-root
tier: standard
topics: [mean-value-theorem]
statement: |
  Show that \(p(x) = x^{3} + 3x + 1\) has exactly one real root, and find an interval of length \(1\) that contains it.
solution: |
  **Existence.** The polynomial \(p\) is continuous. The values are \(p(-1) = -1 - 3 + 1 = -3\), which is negative, and \(p(0) = 1\), which is positive. By the intermediate value theorem there is a root in \((-1, 0)\).

  **At most one.** Suppose \(p\) had two roots \(a < b\). Then \(p(a) = p(b) = 0\). The polynomial is continuous on \([a, b]\) and has a derivative on \((a, b)\), so Rolle's theorem gives a point \(c\) in \((a, b)\) with \(p'(c) = 0\). But
  \[
  p'(x) = 3x^{2} + 3 \ge 3
  \]
  for every real \(x\), so \(p'\) is never \(0\). This is a contradiction.

  So \(p\) has exactly one real root, and it lies in \((-1, 0)\).
provenance: written-for-site
steps:
  - Sign change \(p(-1) = -3\), \(p(0) = 1\), so a root exists in \((-1, 0)\).
  - Two roots would give \(p'(c) = 0\) by Rolle's theorem.
  - \(p'(x) = 3x^{2} + 3 \ge 3\), so there is at most one root.
verification:
  checks:
    - expr: (x**3 + 3*x + 1).subs(x, -1)
      expected: "-3"
    - expr: (x**3 + 3*x + 1).subs(x, 0)
      expected: "1"
    - expr: diff(x**3 + 3*x + 1, x)
      expected: 3*x**2 + 3
:::
