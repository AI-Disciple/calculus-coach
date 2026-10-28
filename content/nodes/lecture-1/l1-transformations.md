---
id: l1-transformations
lecture: 1
order: 4
title: Shifts, dilations, symmetry and absolute value
prerequisites: [l1-functions]
sources:
  - { source: handout, section: "1.4", page: 27 }
  - { source: lecture-notes-1, page: 1 }
  - { source: functions-and-graphs, page: 10 }
  - { source: functions-and-graphs, page: 11 }
  - { source: functions-and-graphs, page: 14 }
  - { source: functions-and-graphs, page: 15 }
  - { source: functions-and-graphs, page: 16 }
  - { source: functions-and-graphs, page: 17 }
  - { source: functions-and-graphs, page: 24 }
  - { source: sheet-0, page: 1 }
  - { source: midterm-app }
examWeight: low
status: reviewed
notation: |
  The formulas below use \(y = f(x)\). The handout writes a horizontal dilation by replacing \(x\) with \(x/A\).
---

::: section
title: Shifts
:::

::: formal-statement
kind: method
title: Horizontal shift
source: { source: handout, section: "1.4", page: 27 }
text: |
  If we replace \(x\) by \(x - C\) everywhere in the formula for \(f(x)\), the graph shifts over \(C\) to the right. If \(C\) is negative, it shifts \(|C|\) to the left.
:::

::: plain-explanation
text: |
  A point \((x, y)\) on the original graph moves to \((x + C, y)\). The height stays \(y\).

  Replacing \(x\) by \(x - 2\) in \(y = x^{2}\) gives \(y = (x - 2)^{2}\). The height at \(x = 2\) is \(0\). The expression \(x - 2^{2}\) equals \(x - 4\), and its height at \(x = 2\) is \(-2\).
:::

::: formal-statement
kind: method
title: Vertical shift
source: { source: handout, section: "1.4", page: 28 }
text: |
  Replace \(y\) by \(y - D\) to move the graph up \(D\) units. Equivalently, the graph of \(y = f(x) + D\) is the graph of \(y = f(x)\) moved \(D\) units up.
:::

::: plain-explanation
text: |
  A point \((x, y)\) moves to \((x, y + D)\). When \(D\) is negative, \(y + D\) is smaller than \(y\), so the graph moves down.

  Both replacements together move a circle. The equation \(x^{2} + y^{2} = r^{2}\) becomes
  \[
  (x - C)^{2} + (y - D)^{2} = r^{2}.
  \]
  The circle has radius \(r\) and is centered at \((C, D)\).
:::

::: formal-statement
kind: method
title: Up or down
source: { source: functions-and-graphs, page: 14 }
text: |
  We can draw the graph of \(y = f(x) + k\) from the graph of \(y = f(x)\), as the addition of the constant \(k\) produces a vertical shift. Adding a constant to a function moves the graph:

  - up \(k\) units if \(k > 0\),
  - down \(k\) units if \(k < 0\).
:::

::: plain-explanation
text: |
  The graph of \(y = x^{2} - 3\) is the graph of \(y = x^{2}\) shifted down by \(3\). The vertex \((0, 0)\) moves to \((0, -3)\).
:::

::: worked-example
title: A shift of \(y = 1/x\)
problem: |
  The graph of \(y = 1/x\) contains the point \((1, 1)\). Shift it right by \(2\). Write the new formula and the image of \((1, 1)\).
solution: |
  Replace \(x\) by \(x - 2\). The new formula is
  \[
  y = 1/(x - 2).
  \]

  A right shift by \(2\) sends \((x, y)\) to \((x + 2, y)\). The image of \((1, 1)\) is \((3, 1)\).

  The height of the new formula at \(x = 3\) is \(1/(3 - 2) = 1\). So \((3, 1)\) lies on \(y = 1/(x - 2)\).
:::

::: trap
text: |
  A right shift by \(2\) sends \((x, y)\) to \((x + 2, y)\). On \(y = 1/x\), the point \((1, 1)\) moves to \((3, 1)\), and the height of \(y = 1/(x - 2)\) at \(x = 3\) is \(1\).

  The point \((1, 3)\) is \((1, 1)\) moved up by \(2\). On the shifted graph \(y = 1/(x - 2)\), the height at \(x = 1\) is \(1/(1 - 2) = -1\). The height \(-1\) is different from \(3\), so \((1, 3)\) does not lie on \(y = 1/(x - 2)\).
:::

::: trap
text: |
  The graph of \(y = f(x) + D\) is a vertical move. The graph of \(y = f(x + D)\) is a horizontal move.

  Take \(f(x) = x^{2}\) and \(D = 2\). The point \((1, 1)\) lies on \(y = x^{2}\). On \(y = x^{2} + 2\) the image is \((1, 3)\), because the height is \(1 + 2 = 3\).

  The formula \(y = (x + 2)^{2}\) replaces \(x\) by \(x + 2\), so the shift is left by \(2\). The image of \((1, 1)\) is \((-1, 1)\). The height of \((x + 2)^{2}\) at \(x = 1\) is \(9\). The point \((1, 3)\) does not lie on \(y = (x + 2)^{2}\).
:::

::: key-points
text: |
  - Replacing \(x\) by \(x - C\) shifts the graph right by \(C\), and a point \((x, y)\) moves to \((x + C, y)\). If \(C\) is negative, the shift is left by \(|C|\).
  - Adding \(D\) to the height, \(y = f(x) + D\), moves the graph up by \(D\), and a point \((x, y)\) moves to \((x, y + D)\).
  - The usual slip is to mix up the two: \(y = x^{2} + 2\) is a move up, while \(y = (x + 2)^{2}\) is a move left by \(2\).
:::

::: exercise
id: l1-transformations.shift-point
tier: basic
topics: [shifts]
statement: |
  The point \((1, 1)\) lies on the graph of \(y = f(x)\). Give the coordinates of its image on the graph of \(y = f(x - 2)\).
solution: |
  Replacing \(x\) by \(x - 2\) shifts the graph right by \(2\). A point \((x, y)\) moves to \((x + 2, y)\).

  The image of \((1, 1)\) is \((3, 1)\). The new \(x\)-coordinate is \(1 + 2 = 3\). The \(y\)-coordinate stays \(1\).
provenance: written-for-site
verification:
  checks:
    - expr: "(1 + 2, 1)"
      expected: "(3, 1)"
:::

::: section
title: Dilations and combining transformations
:::

::: formal-statement
kind: method
title: Horizontal dilation
source: { source: handout, section: "1.4", page: 28 }
text: |
  Replace \(x\) by \(x/A\).

  - If \(A > 1\), expand by a factor of \(A\) away from the \(y\)-axis.
  - If \(0 < A < 1\), contract by \(1/A\).
  - If \(A\) is negative, dilate by \(|A|\) and flip about the \(y\)-axis.
:::

::: plain-explanation
text: |
  Horizontal distances from the \(y\)-axis are multiplied by \(A\). The heights stay the same.

  ### A worked case

  For \(A = 1/2\), the formula is \(y = f(2x)\). On \(y = x^{2}\), the point \((2, 4)\) moves to \((1, 4)\). The height of \(y = (2x)^{2}\) at \(x = 1\) is \(4\). The factor \(1/A\) is \(2\), and the distance from the \(y\)-axis is halved.

  ### Flips

  For \(A = -1\) the formula is \(y = f(-x)\), a flip about the \(y\)-axis.

  ### Sine as an example

  The formula \(\sin(3x)\) is the case \(A = 1/3\), because \(x/A = 3x\). One cycle of sine uses an argument change of \(2\pi\), so \(x\) changes by \(2\pi/3\). The amplitude stays \(1\).
:::

::: worked-example
title: A horizontal dilation of \(y = x^{2}\)
problem: |
  The graph of \(y = x^{2}\) contains \((2, 4)\). Replace \(x\) by \(x/2\) and give the image of that point.
solution: |
  The replacement \(x/2\) is a horizontal dilation with \(A = 2\). The new formula is \(y = (x/2)^{2}\).

  Distances from the \(y\)-axis are multiplied by \(2\), and the height stays \(4\). The image of \((2, 4)\) is \((4, 4)\).

  The height of \(y = (x/2)^{2}\) at \(x = 4\) is \((4/2)^{2} = 4\). So \((4, 4)\) lies on the dilated graph.
:::

::: formal-statement
kind: method
title: Vertical dilation
source: { source: handout, section: "1.4", page: 29 }
text: |
  Replace \(y\) by \(y/B\), equivalent to \(y = B f(x)\).

  - Expand away from the \(x\)-axis if \(B > 1\).
  - Contract toward it if \(0 < B < 1\).
  - If \(B\) is negative, dilate by \(|B|\) and flip about the \(x\)-axis.
:::

::: plain-explanation
text: |
  Every height is multiplied by \(B\). The \(x\)-coordinates stay the same.

  A horizontal factor \(a\) and a vertical factor \(b\) turn the unit circle into an ellipse. Replace \(x\) by \(x/a\) and \(y\) by \(y/b\) in \(x^{2} + y^{2} = 1\). The equation is
  \[
  \left(\frac{x}{a}\right)^{2} + \left(\frac{y}{b}\right)^{2} = 1.
  \]
:::

::: formal-statement
kind: method
title: Vertical stretch
source: { source: functions-and-graphs, page: 15 }
text: |
  We can sketch the graph of a function \(y = bf(x)\) (\(b > 0\)) if we know the graph of \(y = f(x)\), as multiplying by the constant \(b\) will have the effect of stretching the graph in the \(y\)-direction by a factor of \(b\).
:::

::: plain-explanation
text: |
  When \(B > 0\), \(y = B f(x)\) is this stretch. All the \(y\)-values are multiplied by \(B\). The \(x\)-values are unchanged.
:::

::: worked-example
title: A vertical dilation of \(y = x^{2}\)
problem: |
  The graph of \(y = x^{2}\) contains \((1, 1)\). Write \(y = 2x^{2}\) as a vertical dilation and give the image of \((1, 1)\).
solution: |
  This is \(y = B f(x)\) with \(B = 2\) and \(f(x) = x^{2}\).

  The \(x\)-coordinate stays \(1\). The height is multiplied by \(2\), so the image is \((1, 2)\).

  The new formula at \(x = 1\) equals \(2 \cdot 1^{2} = 2\). So \((1, 2)\) lies on \(y = 2x^{2}\).
:::

::: formal-statement
kind: method
title: Dilations, then shifts
source: { source: handout, section: "1.4", page: 29 }
text: |
  It is usually simplest to work with the dilations first, and then the shifts.
:::

::: plain-explanation
text: |
  Replace \(x\) by \(x/A\) first. Then replace \(x\) by \(x - C\). The formula is
  \[
  y = f\left(\frac{x - C}{A}\right).
  \]

  The input \(\frac{x}{A} - h\) is a different replacement. It equals \(\frac{x - Ah}{A}\), a dilation by \(A\) followed by a shift right by \(Ah\).
:::

::: guided-example
title: Dilation, then a shift
problem: |
  Start from \(y = x^{2}\), which contains the point \((2, 4)\). Dilate horizontally with \(A = 2\), then shift right by \(1\). Compare the result with \(y = \left(\frac{x}{2} - 1\right)^{2}\).
steps:
  - |
    Do the dilation first. Replace \(x\) by \(x/2\). The formula is
    \[
    y = (x/2)^{2}.
    \]
    Distances from the \(y\)-axis double, so \((2, 4)\) moves to \((4, 4)\).
  - |
    Then shift right by \(1\). Replace \(x\) by \(x - 1\) in the dilated formula. The formula is
    \[
    y = \left(\frac{x - 1}{2}\right)^{2}.
    \]
    The point \((4, 4)\) moves to \((5, 4)\).
  - |
    The height at \(x = 5\) is \(\left(\frac{5 - 1}{2}\right)^{2} = 4\). So \((5, 4)\) lies on the graph from the dilation followed by the shift of \(1\).
  - |
    The other replacement is \(y = \left(\frac{x}{2} - 1\right)^{2}\). Rewrite the input:
    \[
    \frac{x}{2} - 1 = \frac{x - 2}{2}.
    \]
    That is a dilation by \(2\) followed by a shift right by \(2\). At \(x = 5\) the height is
    \[
    \left(\frac{5}{2} - 1\right)^{2} = \frac{9}{4}.
    \]
    The height \(\frac{9}{4}\) differs from \(4\), so \((5, 4)\) does not lie on this second graph.
:::

::: key-points
text: |
  - Replacing \(x\) by \(x/A\) is a horizontal dilation: distances from the \(y\)-axis are multiplied by \(A\) and the heights stay. Writing \(y = B f(x)\) is a vertical dilation: every height is multiplied by \(B\) and the \(x\)-coordinates stay.
  - When dilations and shifts are combined, do the dilation first and then the shift, which gives \(y = f\left(\frac{x - C}{A}\right)\).
  - The input \(\frac{x}{A} - h\) is a different replacement. It equals \(\frac{x - Ah}{A}\), a dilation by \(A\) followed by a shift right by \(Ah\).
:::

::: concept-question
id: l1-transformations.q-824df11d
question: |
  Compared with \(y = \sin x\), what changes for \(y = \sin(3x)\)?
options:
  - text: |
      The period shrinks from \(2\pi\) to \(\frac{2\pi}{3}\). The amplitude is unchanged.
    correct: true
  - text: |
      The amplitude triples. The period is unchanged.
  - text: |
      The period triples to \(6\pi\). The amplitude is unchanged.
  - text: |
      Both amplitude and period triple.
explanation: |
  A factor inside the argument compresses the graph horizontally. \(\sin(3x)\) completes a cycle when \(3x\) runs through \(2\pi\), so the period is \(\frac{2\pi}{3}\). The amplitude stays \(1\).
:::

::: concept-question
id: l1-transformations.q-591eced3
question: |
  The graph of \(y=f\left(\frac{x}{2}-1\right)\) comes from the graph of \(y=f(x)\) by which steps, dilation first?
options:
  - text: |
      A horizontal dilation by \(2\), then a shift right by \(2\).
    correct: true
  - text: |
      A horizontal dilation by \(2\), then a shift right by \(1\).
  - text: |
      A horizontal dilation by \(\frac{1}{2}\), then a shift right by \(1\).
  - text: |
      A horizontal dilation by \(2\), then a shift left by \(2\).
explanation: |
  Rewrite the input as \(\frac{x}{2}-1=\frac{x-2}{2}\). Replacing \(x\) by \(\frac{x}{2}\) is the dilation by \(2\). Replacing \(x\) by \(x-2\) then gives \(f\left(\frac{x-2}{2}\right)\), a shift right by \(2\). The shift is \(Ah\) with \(A=2\) and \(h=1\).
:::

::: section
title: Reflections, symmetry and absolute value
:::

::: formal-statement
kind: method
title: Reflection in the x-axis
source: { source: functions-and-graphs, page: 16 }
text: |
  We can sketch the function \(y = -f(x)\) if we know the graph of \(y = f(x)\), as a minus sign in front of \(f(x)\) has the effect of reflecting the whole graph in the \(x\)-axis.
:::

::: plain-explanation
text: |
  This is the vertical dilation with \(B = -1\). The point \((1, 1)\) on \(y = |x|\) moves to \((1, -1)\) on \(y = -|x|\).
:::

::: formal-statement
kind: method
title: Reflection in the y-axis
source: { source: functions-and-graphs, page: 16 }
text: |
  We can sketch the graph of \(y = f(-x)\) if we know the graph of \(y = f(x)\), as the graph of \(y = f(-x)\) is the reflection of \(y = f(x)\) in the \(y\)-axis.
:::

::: plain-explanation
text: |
  This is the horizontal dilation with \(A = -1\). Take \(f(x) = x + 1\). The point \((2, 3)\) reflects to \((-2, 3)\). The height of \(y = f(-x) = -x + 1\) at \(x = -2\) is \(3\).
:::

::: formal-statement
kind: definition
title: Even function
source: { source: functions-and-graphs, page: 24 }
text: |
  A function, \(y = f(x)\), is **even** if \(f(x) = f(-x)\) for all \(x\) in the domain of \(f\).
:::

::: plain-explanation
text: |
  The graph is symmetric about the \(y\)-axis. For \(f(x) = x^{2}\), \(f(-x) = (-x)^{2} = x^{2} = f(x)\). The point \((2, 4)\) matches \((-2, 4)\).
:::

::: formal-statement
kind: definition
title: Odd function
source: { source: functions-and-graphs, page: 24 }
text: |
  A function, \(y = f(x)\), is **odd** if \(f(-x) = -f(x)\) for all \(x\) in the domain of \(f\).
:::

::: plain-explanation
text: |
  The graph is symmetric about the origin. For \(f(x) = x\), \(f(-x) = -x = -f(x)\). The point \((2, 2)\) matches \((-2, -2)\).
:::

::: formal-statement
kind: definition
title: Sine is odd
source: { source: lecture-notes-1, page: 1 }
text: |
  A function is odd if \(f(-x) = -f(x)\). The function \(f(x) = \sin(x)\) is odd.
:::

::: plain-explanation
text: |
  Sine is odd, so \(\sin(-x) = -\sin x\). The graph of \(y = \sin(-x)\) is the graph of \(y = \sin x\) reflected in the \(x\)-axis.
:::

::: formal-statement
kind: definition
title: Absolute value
source: { source: functions-and-graphs, page: 10 }
text: |
  \[
  |x| = x \text{ if } x \ge 0, \qquad |x| = -x \text{ if } x < 0.
  \]
:::

::: plain-explanation
text: |
  The value \(|x|\) is the distance of \(x\) from \(0\). For example, \(|4| = 4\) and \(|-2| = 2\). The distance from \(a\) is \(|x - a|\), and \(|a - x| = |x - a|\).

  The graph of \(y = |x|\) follows:

  - \(y = x\) for \(x \ge 0\),
  - \(y = -x\) for \(x < 0\).
:::

::: formal-statement
kind: method
title: Absolute value of a function
source: { source: functions-and-graphs, page: 17 }
text: |
  We can sketch the graph of \(y = |f(x)|\) if we know the graph of \(y = f(x)\), as the effect of the absolute value is to reflect all of the negative values of \(f(x)\) in the \(x\)-axis.
:::

::: plain-explanation
text: |
  - Where \(f(x) \ge 0\), the graph stays.
  - Where \(f(x) < 0\), the point \((x, f(x))\) moves to \((x, -f(x))\).
:::

::: worked-example
title: Classifying symmetry
problem: |
  Classify \(f(x) = 3x^{2} - 4\), \(g(x) = 1/(2x)\), and \(h(x) = x^{3} - x^{2}\).
solution: |
  **\(f\).**
  \[
  f(-x) = 3(-x)^{2} - 4 = 3x^{2} - 4.
  \]
  This equals \(f(x)\). So \(f\) is even. At \(x = 1\), both \(f(1)\) and \(f(-1)\) equal \(-1\).

  **\(g\).**
  \[
  g(-x) = 1/(2(-x)) = -1/(2x).
  \]
  This equals \(-g(x)\). The domain excludes \(0\), and the identity holds for every other \(x\). So \(g\) is odd. At \(x = 1\), the value \(g(1)\) is \(1/2\) and \(g(-1)\) is \(-1/2\).

  **\(h\).**
  \[
  \begin{aligned}
  h(1) &= 0,\\
  h(-1) &= -2.
  \end{aligned}
  \]
  An even function would have \(h(-1) = h(1) = 0\). An odd function would have \(h(-1) = -h(1) = 0\). Here \(h(-1) = -2\), so \(h\) is neither even nor odd.
:::

::: worked-example
title: The graph of \(y = |x - 2|\)
problem: |
  Sketch \(y = |x - 2|\) from the line \(y = x - 2\).
solution: |
  The line \(y = x - 2\) meets the \(x\)-axis at \(x = 2\). For \(x \ge 2\) the height is already nonnegative, so that ray stays: \(y = x - 2\). At \(x = 4\) the height is \(2\), and \(|4 - 2| = 2\).

  For \(x < 2\) the line is negative. Reflecting those points in the \(x\)-axis changes the sign, so the height \(x - 2\) becomes \(2 - x\). At \(x = 0\) the line has height \(-2\). After the reflection the height is \(2\), and \(|0 - 2| = 2\).

  The corner is at \((2, 0)\). That matches the distance reading: \(|x - 2|\) is the distance of \(x\) from \(2\).
:::

::: key-points
text: |
  - The graph of \(y = -f(x)\) is the reflection of \(y = f(x)\) in the \(x\)-axis, and the graph of \(y = f(-x)\) is its reflection in the \(y\)-axis.
  - A function is even if \(f(-x) = f(x)\) for all \(x\) in the domain, with a graph symmetric about the \(y\)-axis. It is odd if \(f(-x) = -f(x)\), with a graph symmetric about the origin. Sine is odd.
  - The graph of \(y = |f(x)|\) keeps the points where \(f(x) \ge 0\) and reflects the points where \(f(x) < 0\) in the \(x\)-axis.
:::

::: concept-question
id: l1-transformations.q-f708f0c5
question: |
  What is the graph of \(y = \sin(-x)\)?
options:
  - text: |
      The graph of \(\sin x\) reflected in the \(x\)-axis, which is \(y = -\sin x\).
    correct: true
  - text: |
      The graph of \(\sin x\) reflected in the \(y\)-axis, giving a different curve from \(y = -\sin x\).
  - text: |
      The same graph as \(y = \sin x\), because sine is even.
  - text: |
      The graph of \(\sin x\) shifted right by \(\frac{\pi}{2}\).
explanation: |
  Sine is odd, so \(\sin(-x) = -\sin x\). Reflecting the graph of \(\sin x\) in the \(x\)-axis gives that same curve.
:::

::: exercise
id: l1-transformations.sheet-0-1-4
number: "1.4"
tier: standard
topics: [trigonometry]
statement: |
  Sketch \(y = \sin(3x)\) and \(y = \sin(-x)\).
solution: |
  The graph of \(y = \sin(3x)\) oscillates between \(-1\) and \(1\). A full cycle of sine is an increase of \(2\pi\) in the argument, so \(3x\) runs through \(2\pi\) when \(x\) runs through \(2\pi/3\). The period is \(\frac{2\pi}{3}\). The zeros are \(x = \frac{k\pi}{3}\) for \(k \in \mathbb{Z}\).

  Sine is odd, so \(\sin(-x) = -\sin x\). The graph of \(y = \sin(-x)\) is the graph of \(y = \sin x\) reflected in the \(x\)-axis.
provenance: written-for-site
verification:
  checkable: false
  reason: The answer is a graph.
:::

::: exercise
id: l1-transformations.dilate-then-shift
tier: exam
topics: [dilations, shifts]
statement: |
  Let \(f(x) = x^{2}\). The point \((3, 9)\) lies on its graph. Dilate horizontally by replacing \(x\) with \(x/3\), then shift the result right by \(6\). Give the new formula and the image of \((3, 9)\).
solution: |
  The dilation comes first. Replacing \(x\) by \(x/3\) gives \(y = (x/3)^{2}\). The shift right by \(6\) then replaces \(x\) by \(x - 6\), so the new formula is
  \[
  y = \left(\frac{x - 6}{3}\right)^{2}.
  \]

  The dilation multiplies the \(x\)-coordinate by \(3\), and the shift adds \(6\). The image of \((3, 9)\) is \((15, 9)\).

  The height of the new formula at \(x = 15\) is \(\left(\frac{15 - 6}{3}\right)^{2} = 9\). So \((15, 9)\) lies on the new graph.
provenance: written-for-site
verification:
  checks:
    - expr: "(3*3 + 6, ((15 - 6)/3)**2)"
      expected: "(15, 9)"
:::

::: sheet-item
id: l1-transformations.horizontal-shift
category: formula
text: |
  Replacing \(x\) by \(x - C\) shifts the graph right by \(C\). A point \((x, y)\) moves to \((x + C, y)\).
:::

::: sheet-item
id: l1-transformations.horizontal-dilation
category: formula
text: |
  A horizontal dilation replaces \(x\) by \(x/A\). The new formula is \(y = f(x/A)\).
:::

::: sheet-item
id: l1-transformations.even-odd
category: recognition
text: |
  \(f\) is even if \(f(-x) = f(x)\). \(f\) is odd if \(f(-x) = -f(x)\). \(\sin x\) is odd.
:::

::: sheet-item
id: l1-transformations.swapped-coordinates
category: trap
text: |
  A right shift by \(2\) sends \((1, 1)\) to \((3, 1)\). The point \((1, 3)\) is a move up by \(2\). On \(y = 1/(x - 2)\), the height at \(x = 1\) is \(-1\), so \((1, 3)\) does not lie on that graph.
:::

::: exercise
id: l1-transformations.ex-transformation-order
tier: standard
topics: [shifts, dilations, symmetry]
statement: |
  Start from the graph of \(y=\sqrt{x}\), which contains the point \((1,1)\).

  (a) Reflect the graph in the \(y\)-axis, then shift it right by \(2\), then stretch it vertically by the factor \(3\). Give the new formula, its domain and the image of \((1,1)\).

  (b) Shift the graph right by \(2\) first, then reflect it in the \(y\)-axis. Give the formula and the domain.

  (c) Classify each function as even, odd or neither: \(f(x)=\dfrac{x^{3}}{x^{2}+1}\), \(g(x)=x^{4}-|x|\) and \(k(x)=x^{2}+x\).
solution: |
  (a)

  1. Reflecting in the \(y\)-axis replaces \(x\) by \(-x\): \(y=\sqrt{-x}\).
  2. Shifting right by \(2\) replaces \(x\) by \(x-2\): \(y=\sqrt{-(x-2)}=\sqrt{2-x}\).
  3. Stretching vertically by \(3\) multiplies the height: \(y=3\sqrt{2-x}\).

  The root needs \(2-x\geq 0\), so the domain is \((-\infty,2]\). The point moves in three steps: \((1,1)\) to \((-1,1)\), then to \((1,1)\), then to \((1,3)\). The formula agrees: \(3\sqrt{2-1}=3\).

  (b)

  1. Shifting right by \(2\) gives \(y=\sqrt{x-2}\).
  2. Reflecting in the \(y\)-axis replaces \(x\) by \(-x\): \(y=\sqrt{-x-2}\).

  The domain is \(-x-2\geq 0\), that is \((-\infty,-2]\). The graph differs from the one in (a). The point \((1,1)\) goes to \((3,1)\) and then to \((-3,1)\), and \(\sqrt{3-2}=1\).

  (c)

  - For \(f\): \(f(-x)=\frac{-x^{3}}{x^{2}+1}=-f(x)\), so \(f\) is odd.
  - For \(g\): \(g(-x)=x^{4}-|x|=g(x)\), so \(g\) is even.
  - For \(k\): \(k(1)=2\) and \(k(-1)=0\). An even function would have \(k(-1)=2\) and an odd function would have \(k(-1)=-2\). Neither holds, so \(k\) is neither even nor odd.
provenance: written-for-site
steps:
  - In (a), apply the reflection, the shift and the stretch in order to get \(3\sqrt{2-x}\).
  - In (b), apply the shift and then the reflection to get \(\sqrt{-x-2}\).
  - In (c), compare \(f(-x)\) with \(f(x)\) and \(-f(x)\), and use \(k(1)\) and \(k(-1)\).
verification:
  checks:
    - expr: (3*sqrt(2 - 1), 3*sqrt(2 - (-2)))
      expected: (3, 6)
    - expr: (sqrt(-(-3) - 2), sqrt(-(-2) - 2))
      expected: (1, 0)
    - expr: (-x)**3/((-x)**2 + 1) + x**3/(x**2 + 1)
      expected: "0"
    - expr: (-x)**4 - Abs(-x) - (x**4 - Abs(x))
      expected: "0"
    - expr: (1**2 + 1, (-1)**2 + (-1))
      expected: (2, 0)
:::
