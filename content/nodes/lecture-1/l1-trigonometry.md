---
id: l1-trigonometry
lecture: 1
order: 1
title: Trigonometry and the unit circle
prerequisites: []
sources:
  - { source: handout, section: "4.1", page: 73 }
  - { source: lecture-notes-1, page: 1 }
  - { source: sheet-0, page: 1 }
  - { source: sheet-1, page: 1 }
  - { source: midterm-app }
examWeight: low
examWeightNote: Used inside later questions, never asked on its own.
status: reviewed
notation: |
  Angles are measured in radians. The notes write \(\sin\), \(\cos\), \(\tan\) and the angle \(\theta\).
---

::: section
title: Radians and the unit circle
:::

::: formal-statement
kind: definition
title: Radians
source: { source: handout, section: "4.1", page: 74 }
text: |
  Radian measure on the unit circle: the arc length from \((1,0)\) is the radian measure of the angle. Positive angles are counterclockwise.
:::

::: plain-explanation
text: |
  The positive direction is counterclockwise from \((1,0)\). The angle is the length of that arc. The unit of the length is the **radian**. One full turn has length \(2\pi\), so one full turn is \(2\pi\) radians. A quarter turn has length \(\pi/2\). A half turn has length \(\pi\).
:::

::: formal-statement
kind: definition
title: The unit circle
source: { source: lecture-notes-1, page: 1 }
text: |
  The **unit circle** has radius \(r=1\). The segment \(\sin(\theta)\) is vertical. The segment \(\cos(\theta)\) is horizontal. The total circumference is \(2\pi\).
:::

::: plain-explanation
text: |
  The circle is centred at the origin. After one full turn the point \((\cos\theta,\sin\theta)\) is back where it started. Therefore
  \[
  \begin{aligned}
  \sin(\theta+2\pi)&=\sin\theta,\\
  \cos(\theta+2\pi)&=\cos\theta.
  \end{aligned}
  \]

  On \([0,2\pi]\) the sine takes these values:
  \[
  \begin{aligned}
  \sin 0&=0,\\
  \sin(\pi/2)&=1,\\
  \sin\pi&=0,\\
  \sin(3\pi/2)&=-1,\\
  \sin(2\pi)&=0.
  \end{aligned}
  \]
:::

::: formal-statement
kind: definition
title: Coordinates
source: { source: handout, section: "4.1", page: 74 }
text: |
  The cosine of \(x\) and the sine of \(x\) are the first and second coordinates of the point \(A\).
:::

::: plain-explanation
text: |
  The point \(A\) is where the ray at angle \(x\) meets the unit circle. The first coordinate is horizontal. It equals \(\cos x\). The second coordinate is vertical. It equals \(\sin x\). The radius is \(1\), so
  \[
  \cos^{2} x+\sin^{2} x=1.
  \]
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(\sin x\). Switch on the intercepts and the extrema to see the values \(0\), \(1\) and \(-1\) from the unit circle.
params:
  f: "sin(x)"
  xmin: -1
  xmax: 7
  layers: [intercepts, extrema]
:::

::: formal-statement
kind: definition
title: Need-to-know values
source: { source: lecture-notes-1, page: 1 }
text: |
  \[
  \begin{aligned}
  \sin(0)&=0,&\quad\cos(0)&=1,\\
  \sin(\pi)&=0,&\quad\cos(\pi)&=-1,\\
  \sin(\pi/2)&=1,&\quad\cos(\pi/2)&=0,\\
  \sin(-\pi/2)&=-1,&\quad\cos(-\pi/2)&=0.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  These four angles put the point on the axes:

  - At \(0\) the point is \((1,0)\).
  - At \(\pi/2\) it is \((0,1)\).
  - At \(\pi\) it is \((-1,0)\).
  - At \(-\pi/2\) it is \((0,-1)\).

  The displayed formulas are those coordinates.
:::

::: plain-explanation
text: |
  ### The angle \(\pi/4\)

  At \(\pi/4\) the two coordinates are equal. Both are positive. The sum of their squares is \(1\). Each coordinate equals \(\frac{\sqrt{2}}{2}\). Therefore
  \[
  \begin{aligned}
  \sin(\pi/4)&=\frac{\sqrt{2}}{2},\\
  \cos(\pi/4)&=\frac{\sqrt{2}}{2}.
  \end{aligned}
  \]
  The quotient is \(\tan(\pi/4)=1\).

  ### The angles \(\pi/6\) and \(\pi/3\)

  An equilateral triangle of side \(2\) has altitude \(\sqrt{2^{2}-1^{2}}=\sqrt{3}\). The altitude produces two right triangles. The acute angles are \(\pi/6\) and \(\pi/3\). The sides are:

  - The side opposite \(\pi/6\) has length \(1\).
  - The side opposite \(\pi/3\) has length \(\sqrt{3}\).
  - The hypotenuse has length \(2\).

  On \((0,\pi/2)\) the right-triangle ratios agree with the coordinates. Sine is the opposite side divided by the hypotenuse. Cosine is the adjacent side divided by the hypotenuse. Therefore
  \[
  \begin{aligned}
  \sin(\pi/6)&=\frac{1}{2},\\
  \cos(\pi/6)&=\frac{\sqrt{3}}{2},\\
  \sin(\pi/3)&=\frac{\sqrt{3}}{2},\\
  \cos(\pi/3)&=\frac{1}{2}.
  \end{aligned}
  \]
  The quotients are
  \[
  \begin{aligned}
  \tan(\pi/6)&=\frac{1/2}{\sqrt{3}/2}=\frac{\sqrt{3}}{3},\\
  \tan(\pi/3)&=\sqrt{3}.
  \end{aligned}
  \]
:::

::: worked-example
title: A sine equation
problem: |
  Find every \(\theta\) with \(\sin\theta=1\).
solution: |
  The value \(\sin(\pi/2)=1\) gives one solution. Sine has period \(2\pi\), so
  \[
  \theta=\frac{\pi}{2}+2k\pi,\qquad k\in\mathbb{Z}.
  \]
  On the interval \([0,2\pi]\) the solution is \(\theta=\pi/2\). The next return is \(\theta=5\pi/2\), which lies outside that interval.
:::

::: guided-example
title: Solve a sine equation in steps
problem: |
  Find every \(\theta\) with \(\sin\theta=\frac{1}{2}\).
steps:
  - |
    Sine is the vertical coordinate. It equals \(\frac{1}{2}\) at \(\theta=\frac{\pi}{6}\).
  - |
    In \([0,2\pi]\) the other angle with vertical coordinate \(\frac{1}{2}\) is \(\pi-\frac{\pi}{6}=\frac{5\pi}{6}\).
  - |
    Sine has period \(2\pi\). Add \(2k\pi\) to each of those angles, for \(k\in\mathbb{Z}\).
  - |
    The solutions are
    \[
    \begin{aligned}
    \theta&=\frac{\pi}{6}+2k\pi\quad\text{and}\\
    \theta&=\frac{5\pi}{6}+2k\pi.
    \end{aligned}
    \]
:::

::: key-points
text: |
  - Angles are measured in radians along the unit circle from \((1,0)\), counterclockwise. A full turn is \(2\pi\), so \(\sin\) and \(\cos\) have period \(2\pi\).
  - The point at angle \(x\) is \((\cos x,\sin x)\), so \(\cos^{2} x+\sin^{2} x=1\).
  - Know the values at \(0\), \(\pi/2\), \(\pi\) and \(-\pi/2\), and at \(\pi/6\), \(\pi/4\) and \(\pi/3\).
  - To solve \(\sin\theta=c\), find the angles in \([0,2\pi]\) and add \(2k\pi\) to each.
:::

::: concept-question
id: l1-trigonometry.q-293f9370
question: |
  Find every \(\theta\) with \(\sin\theta = -1\).
options:
  - text: |
      \(\theta = \frac{3\pi}{2} + 2k\pi\), \(k \in \mathbb{Z}\).
    correct: true
  - text: |
      \(\theta = \frac{\pi}{2} + 2k\pi\), \(k \in \mathbb{Z}\).
  - text: |
      \(\theta = \pi + 2k\pi\), \(k \in \mathbb{Z}\).
  - text: |
      \(\theta = -\frac{\pi}{2} + k\pi\), \(k \in \mathbb{Z}\).
explanation: |
  Sine equals \(-1\) at \(\frac{3\pi}{2}\), and then at every full turn after that.
:::

::: exercise
id: l1-trigonometry.sheet-0-1-1
number: "sheet 0 exercise 1.1"
tier: basic
topics: [sine-equation]
statement: |
  Find all values of \(\theta\) such that \(\sin(\theta)=-1\). Give the answer in radians.
solution: |
  The value \(\sin(-\pi/2)=-1\) gives one solution. The same point is \(\theta=3\pi/2\). There \(\sin(3\pi/2)=-1\). Sine has period \(2\pi\), so every solution is
  \[
  \theta=\frac{3\pi}{2}+2k\pi,\qquad k\in\mathbb{Z}.
  \]
  The same family is \(\theta=-\frac{\pi}{2}+2k\pi\), because \(\frac{3\pi}{2}=-\frac{\pi}{2}+2\pi\).
provenance: written-for-site
verification:
  checks:
    - expr: "solveset(sin(theta)+1, theta, Interval(0, 2*pi))"
      expected: "FiniteSet(3*pi/2)"
    - expr: "sin(3*pi/2)"
      expected: "-1"
    - expr: "sin(-pi/2)"
      expected: "-1"
    - expr: "sin(3*pi/2+2*pi)"
      expected: "-1"
    - expr: "(3*pi/2)-(-pi/2+2*pi)"
      expected: "0"
:::

::: section
title: Tangent, symmetry and double angles
:::

::: formal-statement
kind: definition
title: Tangent
source: { source: lecture-notes-1, page: 1 }
text: |
  \[
  \tan(\alpha)=\frac{\sin(\alpha)}{\cos(\alpha)}.
  \]
:::

::: plain-explanation
text: |
  ### Where tangent is undefined

  Tangent is **undefined** when \(\cos(\alpha)=0\). At \(\pi/2\), cosine equals \(0\). At \(-\pi/2\), cosine equals \(0\). A half turn replaces \((\cos\alpha,\sin\alpha)\) with \((-\cos\alpha,-\sin\alpha)\). Therefore
  \[
  \begin{aligned}
  \cos(\alpha+\pi)&=-\cos\alpha,\\
  \sin(\alpha+\pi)&=-\sin\alpha.
  \end{aligned}
  \]
  The denominator vanishes at \(\pi/2+\pi\) as well. The undefined angles are \(\pi/2+k\pi\) for \(k\in\mathbb{Z}\).

  ### The period of tangent

  The same half turn leaves the quotient unchanged:
  \[
  \tan(\alpha+\pi)=\frac{-\sin\alpha}{-\cos\alpha}=\tan\alpha.
  \]
  Tangent has **period** \(\pi\).
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(\tan x\). Switch on the domain and the vertical asymptotes to see where cosine vanishes, at \(\pi/2+k\pi\).
params:
  f: "tan(x)"
  xmin: -4
  xmax: 4
  layers: [domain, vertical]
:::

::: formal-statement
kind: definition
title: The four ratios
source: { source: handout, section: "4.1", page: 75 }
text: |
  \[
  \begin{aligned}
  \tan x&=\frac{\sin x}{\cos x},\\
  \cot x&=\frac{\cos x}{\sin x},\\
  \sec x&=\frac{1}{\cos x},\\
  \csc x&=\frac{1}{\sin x}.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  The first formula is tangent, with the angle named \(x\). The others are undefined as follows:

  - **Secant** is undefined when \(\cos x=0\).
  - **Cotangent** and **cosecant** are undefined when \(\sin x=0\), at \(k\pi\) for \(k\in\mathbb{Z}\).
:::

::: formal-statement
kind: definition
title: Odd functions
source: { source: lecture-notes-1, page: 1 }
text: |
  A function is **odd** if
  \[
  f(-x)=-f(x).
  \]
  The function \(f(x)=\sin(x)\) is odd.
:::

::: plain-explanation
text: |
  ### Odd and even

  Therefore \(\sin(-\theta)=-\sin\theta\). The point at angle \(-\theta\) is \((\cos\theta,-\sin\theta)\). The horizontal coordinate agrees with its value at \(\theta\), so \(\cos(-\theta)=\cos\theta\). Cosine is **even**. Then
  \[
  \tan(-\theta)=\frac{\sin(-\theta)}{\cos(-\theta)}=-\tan\theta.
  \]
  Tangent is odd. Sine is odd, so
  \[
  \sin(-\pi)=-\sin\pi=0.
  \]
  Cosine is even, so
  \[
  \cos(-\pi)=\cos\pi=-1.
  \]
:::

::: plain-explanation
text: |
  One **double-angle** formula is
  \[
  \sin(2\theta)=2\sin\theta\cos\theta.
  \]
  Another is
  \[
  \cos(2\theta)=\cos^{2}\theta-\sin^{2}\theta.
  \]
:::

::: tip
text: |
  The product \(\sin\theta\cos\theta\) is half of \(\sin(2\theta)\).
:::

::: worked-example
title: A standard angle
problem: |
  Find the sine and the cosine of \(7\pi/6\). Then find the tangent.
solution: |
  The angle \(7\pi/6\) equals \(\pi+\pi/6\). The point lies in the third quadrant. Let the reference angle be \(\pi/6\). The sine of the reference angle is \(\frac{1}{2}\). The cosine of the reference angle is \(\frac{\sqrt{3}}{2}\). Both coordinates of the point are negative. Therefore
  \[
  \begin{aligned}
  \sin(7\pi/6)&=-\frac{1}{2},\\
  \cos(7\pi/6)&=-\frac{\sqrt{3}}{2}.
  \end{aligned}
  \]
  The quotient of those coordinates is
  \[
  \tan(7\pi/6)=\frac{-1/2}{-\sqrt{3}/2}=\frac{\sqrt{3}}{3}.
  \]
  The tangent is positive.
:::

::: worked-example
title: Rewrite a double angle
problem: |
  Start from \(\cos(2\theta)=\cos^{2}\theta-\sin^{2}\theta\). Derive \(\cos(2\theta)=2\cos^{2}\theta-1\) and \(\cos(2\theta)=1-2\sin^{2}\theta\). Then solve for \(\cos^{2}\theta\) and \(\sin^{2}\theta\).
solution: |
  The unit circle gives \(\sin^{2}\theta=1-\cos^{2}\theta\). Substitute that into the starting formula:
  \[
  \begin{aligned}
  \cos(2\theta)&=\cos^{2}\theta-(1-\cos^{2}\theta)\\
  &=2\cos^{2}\theta-1.
  \end{aligned}
  \]
  The unit circle also gives \(\cos^{2}\theta=1-\sin^{2}\theta\). Substitute that into the starting formula:
  \[
  \begin{aligned}
  \cos(2\theta)&=(1-\sin^{2}\theta)-\sin^{2}\theta\\
  &=1-2\sin^{2}\theta.
  \end{aligned}
  \]
  Solve \(2\cos^{2}\theta-1=\cos(2\theta)\) for the square:
  \[
  \cos^{2}\theta=\frac{1+\cos(2\theta)}{2}.
  \]
  Solve \(1-2\sin^{2}\theta=\cos(2\theta)\) for the square:
  \[
  \sin^{2}\theta=\frac{1-\cos(2\theta)}{2}.
  \]
  Let \(\theta=\pi/6\). Then \(2\theta=\pi/3\) and \(\cos(2\theta)=\frac{1}{2}\). The form \(2\cos^{2}\theta-1\) gives
  \[
  2\cdot\frac{3}{4}-1=\frac{1}{2}.
  \]
  The two sides agree.
:::

::: trap
text: |
  The period of \(\tan^{2} x\) is \(\pi\). A half turn replaces \((\cos x,\sin x)\) with \((-\cos x,-\sin x)\), so
  \[
  \tan(x+\pi)=\frac{-\sin x}{-\cos x}=\tan x.
  \]
  Squaring both sides gives \(\tan^{2}(x+\pi)=\tan^{2} x\).

  Taking the period to be \(\pi/2\) fails. A quarter turn sends \((\cos x,\sin x)\) to \((-\sin x,\cos x)\), so
  \[
  \tan\left(x+\frac{\pi}{2}\right)=\frac{\cos x}{-\sin x}=-\cot x.
  \]
  Squaring both sides gives \(\tan^{2}\left(x+\frac{\pi}{2}\right)=\cot^{2} x\). That is not \(\tan^{2} x\). At \(x=\frac{\pi}{6}\),
  \[
  \begin{aligned}
  \tan^{2}\frac{\pi}{6}&=\frac{1}{3},\\
  \cot^{2}\frac{\pi}{6}&=3.
  \end{aligned}
  \]
:::

::: key-points
text: |
  - \(\tan\alpha=\frac{\sin\alpha}{\cos\alpha}\) is undefined at \(\pi/2+k\pi\), and it has period \(\pi\), while \(\sin\) and \(\cos\) have period \(2\pi\).
  - \(\sin\) and \(\tan\) are odd, and \(\cos\) is even.
  - \(\sin(2\theta)=2\sin\theta\cos\theta\) and \(\cos(2\theta)=\cos^{2}\theta-\sin^{2}\theta=2\cos^{2}\theta-1=1-2\sin^{2}\theta\).
  - The period of \(\tan^{2} x\) is \(\pi\). A shift of \(\pi/2\) gives \(\cot^{2} x\), so \(\pi/2\) fails.
:::

::: concept-question
id: l1-trigonometry.q-fef9e6c9
question: |
  Find every \(\theta\) with \(\cos(2\theta) = \frac{1}{2}\).
options:
  - text: |
      \(\theta = \pm\frac{\pi}{6} + k\pi\), \(k \in \mathbb{Z}\).
    correct: true
  - text: |
      \(\theta = \pm\frac{\pi}{3} + k\pi\), \(k \in \mathbb{Z}\).
  - text: |
      \(\theta = \pm\frac{\pi}{6} + 2k\pi\), \(k \in \mathbb{Z}\).
  - text: |
      \(\theta = \pm\frac{\pi}{12} + \frac{k\pi}{2}\), \(k \in \mathbb{Z}\).
explanation: |
  \(\cos u = \frac{1}{2}\) gives \(u = \pm\frac{\pi}{3} + 2k\pi\). With \(u = 2\theta\), dividing by 2 produces \(\theta = \pm\frac{\pi}{6} + k\pi\).
:::

::: concept-question
id: l1-trigonometry.q-4410d40a
question: |
  Solve \(2\sin t - 1 - \sin^{2} t = 0\) on \([0, 2\pi]\).
options:
  - text: |
      \(t = \frac{\pi}{2}\) only.
    correct: true
  - text: |
      \(t = 0\) and \(t = \pi\).
  - text: |
      \(t = \frac{\pi}{2}\) and \(t = \frac{3\pi}{2}\).
  - text: |
      No solution.
explanation: |
  The left-hand side is \(-\bigl(\sin t - 1\bigr)^{2}\), so \(\sin t = 1\). On \([0, 2\pi]\) that happens only at \(t = \frac{\pi}{2}\).
:::

::: concept-question
id: l1-trigonometry.q-941b954b
question: |
  What is the smallest positive period of \(\tan^{2} x\)?
options:
  - text: |
      \(\pi\)
    correct: true
  - text: |
      \(\frac{\pi}{2}\)
  - text: |
      \(2\pi\)
  - text: |
      \(\tan^{2} x\) is not periodic.
explanation: |
  Since \(\tan(x+\pi)=\tan x\), the square repeats every \(\pi\). A shift by \(\frac{\pi}{2}\) turns \(\tan^{2} x\) into \(\cot^{2} x\). At \(x=\frac{\pi}{6}\), \(\tan^{2} x=\frac{1}{3}\) and \(\cot^{2} x=3\), so \(\frac{\pi}{2}\) is not a period. No smaller shift works, because \(\tan^{2}(0)=0\) forces \(\tan^{2} p=0\), and that holds only for multiples of \(\pi\).
:::

::: exercise
id: l1-trigonometry.sheet-0-1-2
number: "sheet 0 exercise 1.2"
tier: standard
topics: [cosine-equation]
statement: |
  Find all values of \(\theta\) such that \(\cos(2\theta)=\frac{1}{2}\). Give the answer in radians.
solution: |
  Set \(u=2\theta\). The equation becomes \(\cos u=\frac{1}{2}\). Cosine equals \(\frac{1}{2}\) at \(\frac{\pi}{3}\). It equals \(\frac{1}{2}\) at \(-\frac{\pi}{3}\) as well. The period of cosine is \(2\pi\), so
  \[
  u=\pm\frac{\pi}{3}+2k\pi,\qquad k\in\mathbb{Z}.
  \]
  Divide by \(2\). The constant term and the step \(2k\pi\) are both divided by \(2\):
  \[
  \theta=\pm\frac{\pi}{6}+k\pi,\qquad k\in\mathbb{Z}.
  \]
  The representative \(-\frac{\pi}{6}+\pi\) equals \(\frac{5\pi}{6}\). On the interval \([0,\pi]\) the solutions are \(\frac{\pi}{6}\) and \(\frac{5\pi}{6}\).
provenance: written-for-site
verification:
  checks:
    - expr: "solveset(cos(u)-Rational(1,2), u, Interval(-pi, pi))"
      expected: "FiniteSet(-pi/3, pi/3)"
    - expr: "cos(pi/3)"
      expected: "Rational(1,2)"
    - expr: "cos(-pi/3)"
      expected: "Rational(1,2)"
    - expr: "(pi/3+2*k*pi)/2-(pi/6+k*pi)"
      expected: "0"
    - expr: "(-pi/3+2*k*pi)/2-(-pi/6+k*pi)"
      expected: "0"
    - expr: "solveset(cos(2*theta)-Rational(1,2), theta, Interval(0, pi))"
      expected: "FiniteSet(pi/6, 5*pi/6)"
    - expr: "5*pi/6-(-pi/6+pi)"
      expected: "0"
:::

::: exercise
id: l1-trigonometry.sheet-0-1-3
number: "sheet 0 exercise 1.3"
tier: standard
topics: [trig-identity]
statement: |
  Verify \(\dfrac{\cos^{2}(t)}{1-\sin(t)}=1+\sin(t)\).
solution: |
  The quotient is defined when \(\sin t\neq 1\). The product \((1-\sin t)(1+\sin t)\) equals \(1-\sin^{2} t\). The unit circle gives \(\cos^{2} t+\sin^{2} t=1\), so \(1-\sin^{2} t=\cos^{2} t\). Therefore
  \[
  \cos^{2} t=(1-\sin t)(1+\sin t).
  \]
  Divide by \(1-\sin t\):
  \[
  \frac{\cos^{2} t}{1-\sin t}=1+\sin t.
  \]
  The identity holds wherever \(\sin t\neq 1\).
provenance: written-for-site
verification:
  checks:
    - expr: "(1-sin(t))*(1+sin(t))-(1-sin(t)**2)"
      expected: "0"
    - expr: "(1-sin(t))*(1+sin(t))-cos(t)**2"
      expected: "0"
    - expr: "cos(t)**2/(1-sin(t))"
      expected: "1+sin(t)"
:::

::: exercise
id: l1-trigonometry.half-angle-value
tier: standard
topics: [trig-identity]
statement: |
  Use \(\cos^{2}\theta=\frac{1+\cos(2\theta)}{2}\) to find \(\cos(\pi/8)\).
solution: |
  Take \(\theta=\pi/8\), so \(2\theta=\pi/4\) and \(\cos(2\theta)=\frac{\sqrt{2}}{2}\). Then
  \[
  \cos^{2}\frac{\pi}{8}=\frac{1+\frac{\sqrt{2}}{2}}{2}=\frac{2+\sqrt{2}}{4}.
  \]
  The angle \(\pi/8\) lies in the first quadrant, so its cosine is positive. Therefore
  \[
  \cos\frac{\pi}{8}=\frac{\sqrt{2+\sqrt{2}}}{2}.
  \]
provenance: written-for-site
steps:
  - The angle \(2\theta=\pi/4\) has cosine \(\frac{\sqrt{2}}{2}\).
  - The formula gives \(\cos^{2}(\pi/8)=\frac{2+\sqrt{2}}{4}\).
  - The positive root is taken because \(\pi/8\) is in the first quadrant.
verification:
  checks:
    - expr: cos(pi/8)**2
      expected: (2 + sqrt(2))/4
    - expr: cos(pi/8)
      expected: sqrt(2 + sqrt(2))/2
:::

::: exercise
id: l1-trigonometry.sheet-0-1-5
number: "sheet 0 exercise 1.5"
tier: exam
topics: [sine-equation]
statement: |
  Find all solutions of \(2\sin(t)-1-\sin^{2}(t)=0\) in \([0,2\pi]\).
solution: |
  The left side equals \(-(\sin t-1)^{2}\):
  \[
  \begin{aligned}
  -(\sin t-1)^{2}&=-(\sin^{2} t-2\sin t+1)\\
  &=2\sin t-1-\sin^{2} t.
  \end{aligned}
  \]
  The equation holds when \((\sin t-1)^{2}=0\), so \(\sin t=1\). The value \(\sin(\pi/2)=1\) gives \(t=\pi/2\). Sine returns to \(1\) after a full turn, at \(t=5\pi/2\), which lies outside \([0,2\pi]\). The solution in the interval is \(t=\pi/2\).

  At \(t=3\pi/2\), sine equals \(-1\). The left side equals \(-4\). That value is different from \(0\).
provenance: written-for-site
steps:
  - |
    Rewrite \(2\sin t-1-\sin^{2} t\) as \(-(\sin t-1)^{2}\).
  - |
    Solve \(\sin t=1\) on \([0,2\pi]\). The solution is \(t=\pi/2\).
verification:
  checks:
    - expr: "(2*sin(t)-1-sin(t)**2)+(sin(t)-1)**2"
      expected: "0"
    - expr: "solveset(2*sin(t)-1-sin(t)**2, t, Interval(0, 2*pi))"
      expected: "FiniteSet(pi/2)"
    - expr: "2*sin(3*pi/2)-1-sin(3*pi/2)**2"
      expected: "-4"
:::

::: sheet-item
id: l1-trigonometry.sheet-values
category: formula
text: |
  The need-to-know values are
  \[
  \begin{aligned}
  \sin 0&=0,&\ \cos 0&=1,\\
  \sin(\pi/2)&=1,&\ \cos(\pi/2)&=0,\\
  \sin\pi&=0,&\ \cos\pi&=-1,\\
  \sin(-\pi/2)&=-1,&\ \cos(-\pi/2)&=0.
  \end{aligned}
  \]
:::

::: sheet-item
id: l1-trigonometry.sheet-tan-period
category: trap
text: |
  The period of \(\tan^{2} x\) is \(\pi\), because \(\tan(x+\pi)=\tan x\). A period of \(\pi/2\) fails, because \(\tan^{2}(x+\pi/2)=\cot^{2} x\). At \(x=\pi/6\), \(\tan^{2}(\pi/6)=\frac{1}{3}\) and \(\cot^{2}(\pi/6)=3\).
:::

::: exercise
id: l1-trigonometry.ex-double-angle-uses
tier: exam
topics: [trig-identity, double-angle, sine-equation]
statement: |
  (a) Find the exact value of \(\sin\frac{\pi}{8}\cos\frac{\pi}{8}\).

  (b) Find the exact value of \(\sin^{2}\frac{\pi}{12}\), using \(\sin^{2}\theta=\frac{1-\cos(2\theta)}{2}\).

  (c) Solve \(\sin x+\cos x=1\) for \(x\) in \([0,2\pi]\).
solution: |
  (a) The identity \(\sin(2\theta)=2\sin\theta\cos\theta\) gives \(\sin\theta\cos\theta=\frac{1}{2}\sin(2\theta)\). With \(\theta=\frac{\pi}{8}\), \(2\theta=\frac{\pi}{4}\), so the value is \(\frac{1}{2}\cdot\frac{\sqrt{2}}{2}=\frac{\sqrt{2}}{4}\).

  (b) With \(\theta=\frac{\pi}{12}\), \(2\theta=\frac{\pi}{6}\) and \(\cos\frac{\pi}{6}=\frac{\sqrt{3}}{2}\). Then
  \[
  \sin^{2}\frac{\pi}{12}=\frac{1-\frac{\sqrt{3}}{2}}{2}=\frac{2-\sqrt{3}}{4}.
  \]

  (c) Square both sides: \((\sin x+\cos x)^{2}=1\). The left side is \(\sin^{2}x+2\sin x\cos x+\cos^{2}x=1+\sin(2x)\). So \(1+\sin(2x)=1\) and \(\sin(2x)=0\). On \([0,2\pi]\) this gives \(2x\in\{0,\pi,2\pi,3\pi,4\pi\}\), so \(x\in\{0,\frac{\pi}{2},\pi,\frac{3\pi}{2},2\pi\}\).

  Squaring can add roots, so check each in the original equation:

  - At \(x=0\), \(0+1=1\).
  - At \(x=\frac{\pi}{2}\), \(1+0=1\).
  - At \(x=\pi\), \(0-1=-1\), which fails.
  - At \(x=\frac{3\pi}{2}\), \(-1+0=-1\), which fails.
  - At \(x=2\pi\), \(0+1=1\).

  The solutions are \(x=0\), \(x=\frac{\pi}{2}\) and \(x=2\pi\).
provenance: written-for-site
steps:
  - In (a), use \(\sin\theta\cos\theta=\frac{1}{2}\sin(2\theta)\) with \(\theta=\frac{\pi}{8}\).
  - In (b), use \(\cos\frac{\pi}{6}=\frac{\sqrt{3}}{2}\) in the half-angle formula.
  - In (c), square, solve \(\sin(2x)=0\), and check the five candidates.
verification:
  checks:
    - expr: sin(pi/8)*cos(pi/8)
      expected: sqrt(2)/4
    - expr: sin(pi/12)**2
      expected: (2 - sqrt(3))/4
    - expr: solveset(sin(x) + cos(x) - 1, x, Interval(0, 2*pi))
      expected: FiniteSet(0, pi/2, 2*pi)
:::

::: exercise
id: l1-trigonometry.ex-trig-equations
tier: standard
topics: [sine-equation, trig-identity]
statement: |
  (a) Solve \(\sin(2\theta)=\sin\theta\) for \(\theta\) in \([0,2\pi]\).

  (b) Solve \(2\sin^{2}\theta+\sin\theta-1=0\) for \(\theta\) in \([0,2\pi]\).

  (c) Show that \(\dfrac{1-\cos(2t)}{\sin(2t)}=\tan t\) wherever \(\sin(2t)\neq 0\).
solution: |
  (a) The double-angle formula turns the equation into \(2\sin\theta\cos\theta-\sin\theta=0\), which is \(\sin\theta\,(2\cos\theta-1)=0\). A product is zero when a factor is zero. There are two cases:

  - \(\sin\theta=0\), giving \(\theta=0,\pi,2\pi\).
  - \(\cos\theta=\frac{1}{2}\), giving \(\theta=\frac{\pi}{3},\frac{5\pi}{3}\).

  The solutions are \(0,\frac{\pi}{3},\pi,\frac{5\pi}{3},2\pi\).

  (b) The left side factors as \((2\sin\theta-1)(\sin\theta+1)\). There are two cases:

  - \(\sin\theta=\frac{1}{2}\), giving \(\theta=\frac{\pi}{6},\frac{5\pi}{6}\).
  - \(\sin\theta=-1\), giving \(\theta=\frac{3\pi}{2}\).

  The solutions are \(\frac{\pi}{6},\frac{5\pi}{6},\frac{3\pi}{2}\).

  (c) The identity \(\cos(2t)=1-2\sin^{2}t\) gives \(1-\cos(2t)=2\sin^{2}t\). The identity \(\sin(2t)=2\sin t\cos t\) gives the denominator. Then
  \[
  \begin{aligned}
  \frac{1-\cos(2t)}{\sin(2t)}&=\frac{2\sin^{2}t}{2\sin t\cos t}\\
  &=\frac{\sin t}{\cos t}=\tan t.
  \end{aligned}
  \]
  The condition \(\sin(2t)\neq 0\) means \(\sin t\neq 0\) and \(\cos t\neq 0\), so every step is allowed.
provenance: written-for-site
steps:
  - In (a), factor as \(\sin\theta\,(2\cos\theta-1)\) and list the five solutions.
  - In (b), factor as \((2\sin\theta-1)(\sin\theta+1)\) and list the three solutions.
  - In (c), apply the two double-angle formulas and cancel \(2\sin t\).
verification:
  checks:
    - expr: solveset(sin(2*x) - sin(x), x, Interval(0, 2*pi))
      expected: FiniteSet(0, pi/3, pi, 5*pi/3, 2*pi)
    - expr: expand((2*sin(x) - 1)*(sin(x) + 1))
      expected: 2*sin(x)**2 + sin(x) - 1
    - expr: solveset(sin(x) - Rational(1, 2), x, Interval(0, 2*pi))
      expected: FiniteSet(pi/6, 5*pi/6)
    - expr: solveset(sin(x) + 1, x, Interval(0, 2*pi))
      expected: FiniteSet(3*pi/2)
    - expr: simplify((1 - cos(2*t))/sin(2*t))
      expected: tan(t)
:::

::: exercise
id: l1-trigonometry.ex-periods
tier: standard
topics: [trigonometry, periodicity]
statement: |
  Find the smallest positive period of each function and justify it.

  (a) \(|\sin x|\)

  (b) \(\sin(3x)+\cos(2x)\)

  (c) \(\sin^{2}x\)
solution: |
  (a) Since \(\sin(x+\pi)=-\sin x\), the absolute values agree: \(|\sin(x+\pi)|=|\sin x|\). So \(\pi\) is a period. A period \(p\) with \(0<p<\pi\) would give \(|\sin p|=|\sin 0|=0\), but \(\sin p\neq 0\) on \((0,\pi)\). The smallest period is \(\pi\).

  (b) The term \(\sin(3x)\) has period \(\frac{2\pi}{3}\), so its periods are \(\frac{2\pi k}{3}\). The term \(\cos(2x)\) has period \(\pi\), so its periods are \(\pi m\). A common period of the sum is a number in both lists. The smallest is \(2\pi\), because \(\frac{2\pi k}{3}=\pi m\) needs \(2k=3m\), whose smallest positive solution is \(k=3\), \(m=2\). The sum repeats every \(2\pi\), and no smaller number works.

  (c) The identity \(\sin^{2}x=\frac{1-\cos(2x)}{2}\) gives a function of \(\cos(2x)\), which has period \(\pi\). Check: \(\cos\bigl(2(x+\pi)\bigr)=\cos(2x+2\pi)=\cos(2x)\). At \(x=0\), \(\sin^{2}0=0\) and \(\sin^{2}p=0\) only for multiples of \(\pi\), so no period is smaller than \(\pi\). The smallest period is \(\pi\).
provenance: written-for-site
steps:
  - In (a), the sign change at a shift by \(\pi\) disappears under the absolute value, so the period is \(\pi\).
  - In (b), match the periods \(\frac{2\pi}{3}\) and \(\pi\) to get \(2\pi\).
  - In (c), rewrite with \(\cos(2x)\) to get the period \(\pi\).
verification:
  checks:
    - expr: periodicity(Abs(sin(x)), x)
      expected: pi
    - expr: periodicity(sin(3*x) + cos(2*x), x)
      expected: 2*pi
    - expr: sin(x)**2 - (1 - cos(2*x))/2
      expected: "0"
    - expr: (1 - cos(2*(x + pi)))/2 - (1 - cos(2*x))/2
      expected: "0"
:::

::: exercise
id: l1-trigonometry.sheet-1-4-5
number: "sheet 1 exercise 4.5"
tier: basic
topics:
  - trigonometry
  - periodicity
statement: |
  Give the domain of \(x\mapsto\sin(x)\) and of \(x\mapsto\cos(x)\), and sketch both graphs.
solution: |
  Sine and cosine are the coordinates of a point on the unit circle, and every angle \(x\) gives such a point. The domain of \(\sin\) is every real number, and so is the domain of \(\cos\).

  Both graphs are waves with the same shape:

  - The values lie between \(-1\) and \(1\), so the range of each is \([-1,1]\).
  - Both repeat with period \(2\pi\).

  The sine graph:

  - It passes through \((0,0)\) and rises to the maximum \(1\) at \(x=\pi/2\).
  - It returns to \(0\) at \(x=\pi\), reaches the minimum \(-1\) at \(x=3\pi/2\), and returns to \(0\) at \(x=2\pi\).
  - It is odd: \(\sin(-x)=-\sin x\), so the graph is symmetric about the origin.

  The cosine graph:

  - It starts at its maximum, \(\cos 0=1\).
  - It is \(0\) at \(x=\pi/2\), reaches the minimum \(-1\) at \(x=\pi\), is \(0\) at \(x=3\pi/2\) and is back at \(1\) at \(x=2\pi\).
  - It is even: \(\cos(-x)=\cos x\), so the graph is symmetric about the \(y\)-axis.

  The cosine graph is the sine graph shifted left by \(\pi/2\), because \(\cos x=\sin\bigl(x+\tfrac{\pi}{2}\bigr)\).
provenance: written-for-site
steps:
  - The domain of each function is every real number.
  - The range \([-1,1]\), the period \(2\pi\), the key values and the symmetry of each graph are described.
  - The cosine graph is the sine graph shifted left by \(\pi/2\).
verification:
  checks:
    - expr: (sin(0), sin(pi/2), sin(pi), sin(3*pi/2), sin(2*pi))
      expected: "(0, 1, 0, -1, 0)"
    - expr: (cos(0), cos(pi/2), cos(pi), cos(3*pi/2), cos(2*pi))
      expected: "(1, 0, -1, 0, 1)"
    - expr: sin(x + pi/2) - cos(x)
      expected: "0"
    - expr: (periodicity(sin(x), x), periodicity(cos(x), x))
      expected: "(2*pi, 2*pi)"
:::

::: exercise
id: l1-trigonometry.handout-4-1-3
number: "4.1.3"
tier: standard
topics:
  - trig-identity
statement: |
  Use an angle sum identity to compute \(\cos(\pi/12)\).
solution: |
  Write \(\frac{\pi}{12}\) as a difference of two standard angles:
  \[
  \frac{\pi}{12}=\frac{\pi}{4}-\frac{\pi}{6}.
  \]
  The angle sum identity is \(\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta\). Put \(\beta=-\gamma\). Cosine is even and sine is odd, so
  \[
  \cos(\alpha-\gamma)=\cos\alpha\cos\gamma+\sin\alpha\sin\gamma.
  \]
  With \(\alpha=\frac{\pi}{4}\) and \(\gamma=\frac{\pi}{6}\),
  \[
  \begin{aligned}
  \cos\frac{\pi}{12}&=\cos\frac{\pi}{4}\cos\frac{\pi}{6}+\sin\frac{\pi}{4}\sin\frac{\pi}{6}\\
  &=\frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2}+\frac{\sqrt{2}}{2}\cdot\frac{1}{2}\\
  &=\frac{\sqrt{6}+\sqrt{2}}{4}.
  \end{aligned}
  \]

  For a check, the half-angle formula gives
  \[
  \cos^{2}\frac{\pi}{12}=\frac{1+\cos\frac{\pi}{6}}{2}=\frac{2+\sqrt{3}}{4}.
  \]
  The square of \(\frac{\sqrt{6}+\sqrt{2}}{4}\) is \(\frac{8+2\sqrt{12}}{16}=\frac{2+\sqrt{3}}{4}\), which agrees. The angle \(\frac{\pi}{12}\) lies in the first quadrant, so the cosine is positive.
provenance: handout-answer
steps:
  - Write \(\frac{\pi}{12}=\frac{\pi}{4}-\frac{\pi}{6}\).
  - Apply \(\cos(\alpha-\gamma)=\cos\alpha\cos\gamma+\sin\alpha\sin\gamma\) with the standard values.
  - The result is \(\frac{\sqrt{6}+\sqrt{2}}{4}\), and its square matches the half-angle formula.
verification:
  checks:
    - expr: 'cos(pi/12)'
      expected: "(sqrt(2) + sqrt(6))/4"
    - expr: 'cos(pi/4)*cos(pi/6) + sin(pi/4)*sin(pi/6)'
      expected: "(sqrt(2) + sqrt(6))/4"
    - expr: '((sqrt(2) + sqrt(6))/4)**2'
      expected: "(1 + cos(pi/6))/2"
:::


::: exercise
id: l1-trigonometry.handout-4-1-4
number: "4.1.4"
tier: standard
topics:
  - trig-identity
statement: |
  Use an angle sum identity to compute \(\tan(5\pi/12)\).
solution: |
  Write \(\frac{5\pi}{12}\) as a sum of two standard angles:
  \[
  \frac{5\pi}{12}=\frac{\pi}{4}+\frac{\pi}{6}.
  \]
  The angle sum identities are
  \[
  \begin{aligned}
  \sin(\alpha+\beta)&=\sin\alpha\cos\beta+\cos\alpha\sin\beta,\\
  \cos(\alpha+\beta)&=\cos\alpha\cos\beta-\sin\alpha\sin\beta.
  \end{aligned}
  \]
  With \(\alpha=\frac{\pi}{4}\) and \(\beta=\frac{\pi}{6}\),
  \[
  \begin{aligned}
  \sin\frac{5\pi}{12}&=\frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2}+\frac{\sqrt{2}}{2}\cdot\frac{1}{2}\\
  &=\frac{\sqrt{6}+\sqrt{2}}{4},\\
  \cos\frac{5\pi}{12}&=\frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2}-\frac{\sqrt{2}}{2}\cdot\frac{1}{2}\\
  &=\frac{\sqrt{6}-\sqrt{2}}{4}.
  \end{aligned}
  \]
  The tangent is the quotient. Multiply the numerator and the denominator by \(\sqrt{6}+\sqrt{2}\):
  \[
  \begin{aligned}
  \tan\frac{5\pi}{12}&=\frac{\sqrt{6}+\sqrt{2}}{\sqrt{6}-\sqrt{2}}\\
  &=\frac{(\sqrt{6}+\sqrt{2})^{2}}{6-2}\\
  &=\frac{8+4\sqrt{3}}{4}\\
  &=2+\sqrt{3}.
  \end{aligned}
  \]
  The form \(-\dfrac{1+\sqrt{3}}{1-\sqrt{3}}\) is the same number. It equals \(\dfrac{1+\sqrt{3}}{\sqrt{3}-1}\), and multiplying the numerator and the denominator by \(\sqrt{3}+1\) gives \(\dfrac{4+2\sqrt{3}}{2}=2+\sqrt{3}\).
provenance: handout-answer
steps:
  - Write \(\frac{5\pi}{12}=\frac{\pi}{4}+\frac{\pi}{6}\).
  - Use the sum identities to get the sine and the cosine of \(\frac{5\pi}{12}\).
  - Divide and rationalise the denominator to get \(2+\sqrt{3}\).
verification:
  checks:
    - expr: 'sin(pi/4)*cos(pi/6) + cos(pi/4)*sin(pi/6)'
      expected: "(sqrt(6) + sqrt(2))/4"
    - expr: 'cos(pi/4)*cos(pi/6) - sin(pi/4)*sin(pi/6)'
      expected: "(sqrt(6) - sqrt(2))/4"
    - expr: 'tan(5*pi/12)'
      expected: "2 + sqrt(3)"
    - expr: '-(1 + sqrt(3))/(1 - sqrt(3))'
      expected: "2 + sqrt(3)"
:::


::: exercise
id: l1-trigonometry.handout-4-1-6
number: "4.1.6"
tier: standard
topics:
  - trig-identity
  - double-angle
statement: |
  Verify the identity \(2\csc(2\theta)=\sec(\theta)\csc(\theta)\).
solution: |
  Both sides are defined when \(\sin\theta\neq 0\) and \(\cos\theta\neq 0\). Then \(\sin(2\theta)=2\sin\theta\cos\theta\) is nonzero as well, so the left side is defined too.

  Start from the left side and write the cosecant as the reciprocal of the sine:
  \[
  \begin{aligned}
  2\csc(2\theta)&=\frac{2}{\sin(2\theta)}\\
  &=\frac{2}{2\sin\theta\cos\theta}\\
  &=\frac{1}{\sin\theta\cos\theta}.
  \end{aligned}
  \]
  Split the product in the denominator and use \(\sec\theta=\frac{1}{\cos\theta}\) and \(\csc\theta=\frac{1}{\sin\theta}\):
  \[
  \frac{1}{\sin\theta\cos\theta}=\frac{1}{\cos\theta}\cdot\frac{1}{\sin\theta}=\sec\theta\csc\theta.
  \]
  The left side equals the right side wherever both are defined.
provenance: written-for-site
steps:
  - Write \(2\csc(2\theta)=\frac{2}{\sin(2\theta)}\) and use \(\sin(2\theta)=2\sin\theta\cos\theta\).
  - Cancel the factor \(2\) to get \(\frac{1}{\sin\theta\cos\theta}\).
  - Split into \(\sec\theta\csc\theta\).
verification:
  checks:
    - expr: 'expand_trig(sin(2*theta)) - 2*sin(theta)*cos(theta)'
      expected: "0"
    - expr: 'simplify(expand_trig(2/sin(2*theta)) - 1/(sin(theta)*cos(theta)))'
      expected: "0"
    - expr: 'simplify(2/sin(2*theta) - 1/(cos(theta)*sin(theta)))'
      expected: "0"
:::


::: exercise
id: l1-trigonometry.handout-4-1-7
number: "4.1.7"
tier: standard
topics:
  - trig-identity
statement: |
  Verify the identity \(\sin(3\theta)-\sin(\theta)=2\cos(2\theta)\sin(\theta)\).
solution: |
  Write the two angles in terms of \(2\theta\) and \(\theta\):
  \[
  3\theta=2\theta+\theta,\qquad\theta=2\theta-\theta.
  \]
  The angle sum identity is \(\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta\). Sine is odd and cosine is even, so replacing \(\beta\) by \(-\beta\) gives \(\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta\). With \(\alpha=2\theta\) and \(\beta=\theta\),
  \[
  \begin{aligned}
  \sin(3\theta)&=\sin(2\theta)\cos\theta+\cos(2\theta)\sin\theta,\\
  \sin\theta&=\sin(2\theta)\cos\theta-\cos(2\theta)\sin\theta.
  \end{aligned}
  \]
  Subtract the second line from the first. The terms \(\sin(2\theta)\cos\theta\) cancel, and the terms \(\cos(2\theta)\sin\theta\) add:
  \[
  \sin(3\theta)-\sin\theta=2\cos(2\theta)\sin\theta.
  \]
  This is the identity, and it holds for every real \(\theta\).
provenance: written-for-site
steps:
  - Write \(3\theta=2\theta+\theta\) and \(\theta=2\theta-\theta\).
  - Expand both sines with the angle sum identity.
  - "Subtract: the \\(\\sin(2\\theta)\\cos\\theta\\) terms cancel and \\(2\\cos(2\\theta)\\sin\\theta\\) remains."
verification:
  checks:
    - expr: 'expand_trig(sin(2*theta + theta)) - (sin(2*theta)*cos(theta) + cos(2*theta)*sin(theta))'
      expected: "0"
    - expr: 'expand_trig(sin(2*theta - theta)) - (sin(2*theta)*cos(theta) - cos(2*theta)*sin(theta))'
      expected: "0"
    - expr: 'simplify(expand_trig(sin(3*theta) - sin(theta) - 2*cos(2*theta)*sin(theta)))'
      expected: "0"
:::
