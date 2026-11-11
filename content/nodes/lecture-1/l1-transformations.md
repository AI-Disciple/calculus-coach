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
  - { source: handout, section: "4.1" }
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

::: exercise
id: l1-transformations.handout-1-4-2
number: "1.4.2"
tier: standard
topics:
  - shifts
  - symmetry
statement: |
  Start from the graph of \(y=1/x\). Sketch the graph of \(f(x)=-1-\dfrac{1}{x+2}\).
solution: |
  Build the graph from \(y=1/x\) in three steps.

  1. Shift left by \(2\), which replaces \(x\) by \(x+2\): \(y=\dfrac{1}{x+2}\).
  2. Reflect in the \(x\)-axis, which changes the sign of the height: \(y=-\dfrac{1}{x+2}\).
  3. Shift down by \(1\): \(y=-1-\dfrac{1}{x+2}\).

  The reflection comes before the downward shift. Reflecting after the shift would turn \(-1\) into \(+1\).

  The asymptotes of \(y=1/x\) are the two axes. The shifts move them to the vertical line \(x=-2\) and the horizontal line \(y=-1\).

  The point \((1,1)\) moves to \((-1,1)\), then to \((-1,-1)\), then to \((-1,-2)\). The formula agrees:
  \[
  f(-1)=-1-\frac{1}{1}=-2.
  \]

  The axis crossings are
  \[
  \begin{aligned}
  f(0)&=-1-\tfrac{1}{2}=-\tfrac{3}{2},\\
  f(x)=0&\iff\frac{1}{x+2}=-1\iff x=-3.
  \end{aligned}
  \]

  For \(x>-2\) the term \(\frac{1}{x+2}\) is positive, so \(f(x)<-1\). That branch lies below the line \(y=-1\) and runs from \(-\infty\) at \(x=-2\) up toward \(-1\). For \(x<-2\) the term is negative, so \(f(x)>-1\). That branch lies above the line \(y=-1\), passes through \((-3,0)\), and rises to \(+\infty\) as \(x\) approaches \(-2\) from the left.
provenance: written-for-site
steps:
  - Shift left by \(2\), reflect in the \(x\)-axis, then shift down by \(1\).
  - The asymptotes are \(x=-2\) and \(y=-1\).
  - The graph passes through \((-1,-2)\), \((-3,0)\) and \(\left(0,-\tfrac{3}{2}\right)\).
verification:
  checks:
    - expr: '(-1 - 1/(x + 2)).subs(x, -1)'
      expected: "-2"
    - expr: '(-1 - 1/(x + 2)).subs(x, 0)'
      expected: "-3/2"
    - expr: 'solve(-1 - 1/(x + 2), x)'
      expected: "[-3]"
    - expr: 'limit(-1 - 1/(x + 2), x, oo)'
      expected: "-1"
    - expr: '(1/limit(-1 - 1/(x + 2), x, -2, dir="+"), sign(limit(-1 - 1/(x + 2), x, -2, dir="+")))'
      expected: "(0, -1)"
    - expr: '(1/limit(-1 - 1/(x + 2), x, -2, dir="-"), sign(limit(-1 - 1/(x + 2), x, -2, dir="-")))'
      expected: "(0, 1)"
:::


::: exercise
id: l1-transformations.handout-1-4-4
number: "1.4.4"
tier: standard
topics:
  - shifts
  - symmetry
statement: |
  Start from the graph of \(y=1/x\). Sketch the graph of \(f(x)=\dfrac{x}{1-x}\).
solution: |
  Rewrite the formula so that it contains \(1/(x-1)\). For \(x\neq 1\),
  \[
  \begin{aligned}
  \frac{x}{1-x}&=-\frac{x}{x-1}\\
  &=-\frac{(x-1)+1}{x-1}\\
  &=-1-\frac{1}{x-1}.
  \end{aligned}
  \]

  Build the graph from \(y=1/x\) in three steps.

  1. Shift right by \(1\), which replaces \(x\) by \(x-1\): \(y=\dfrac{1}{x-1}\).
  2. Reflect in the \(x\)-axis: \(y=-\dfrac{1}{x-1}\).
  3. Shift down by \(1\): \(y=-1-\dfrac{1}{x-1}\).

  The asymptotes move to the vertical line \(x=1\) and the horizontal line \(y=-1\).

  The point \((1,1)\) of \(y=1/x\) moves to \((2,1)\), then to \((2,-1)\), then to \((2,-2)\). The original formula agrees:
  \[
  f(2)=\frac{2}{1-2}=-2.
  \]
  The graph passes through the origin, because \(f(0)=0\), and through \(\left(-1,-\tfrac{1}{2}\right)\).

  For \(x>1\) the term \(\frac{1}{x-1}\) is positive, so \(f(x)<-1\). That branch lies below \(y=-1\), falls to \(-\infty\) as \(x\) approaches \(1\) from the right, and passes through \((2,-2)\). For \(x<1\) the term is negative, so \(f(x)>-1\). That branch lies above \(y=-1\), passes through \((0,0)\), and rises to \(+\infty\) as \(x\) approaches \(1\) from the left.
provenance: written-for-site
steps:
  - Rewrite \(\dfrac{x}{1-x}\) as \(-1-\dfrac{1}{x-1}\).
  - Shift right by \(1\), reflect in the \(x\)-axis, then shift down by \(1\).
  - The asymptotes are \(x=1\) and \(y=-1\), and the graph passes through the origin and \((2,-2)\).
verification:
  checks:
    - expr: 'simplify(x/(1 - x) - (-1 - 1/(x - 1)))'
      expected: "0"
    - expr: '(x/(1 - x)).subs(x, 2)'
      expected: "-2"
    - expr: '(x/(1 - x)).subs(x, 0)'
      expected: "0"
    - expr: 'limit(x/(1 - x), x, oo)'
      expected: "-1"
    - expr: '(1/limit(x/(1 - x), x, 1, dir="+"), sign(limit(x/(1 - x), x, 1, dir="+")))'
      expected: "(0, -1)"
    - expr: '(1/limit(x/(1 - x), x, 1, dir="-"), sign(limit(x/(1 - x), x, 1, dir="-")))'
      expected: "(0, 1)"
:::


::: exercise
id: l1-transformations.handout-1-4-5
number: "1.4.5"
tier: standard
topics:
  - symmetry
statement: |
  Start from the graph of \(y=\sqrt{x}\). Sketch the graph of \(f(x)=-\sqrt{-x}\).
solution: |
  Build the graph from \(y=\sqrt{x}\) in two steps.

  1. Reflect in the \(y\)-axis, which replaces \(x\) by \(-x\): \(y=\sqrt{-x}\). The root needs \(-x\ge 0\), so the domain is \((-\infty,0]\).
  2. Reflect in the \(x\)-axis, which changes the sign of the height: \(y=-\sqrt{-x}\).

  The two reflections can be applied in either order, because one changes only the input and the other only the output.

  A point \((x,y)\) moves to \((-x,-y)\). Together the reflections are a half turn about the origin. The point \((1,1)\) moves to \((-1,-1)\), and the formula agrees:
  \[
  f(-1)=-\sqrt{1}=-1.
  \]
  The graph starts at the origin and runs down and to the left through \((-1,-1)\) and \((-4,-2)\). Its domain is \((-\infty,0]\), and every height is at most \(0\).
provenance: written-for-site
steps:
  - Reflect in the \(y\)-axis to get \(\sqrt{-x}\) on the domain \((-\infty,0]\).
  - Reflect in the \(x\)-axis to get \(-\sqrt{-x}\).
  - The graph passes through \((0,0)\), \((-1,-1)\) and \((-4,-2)\).
verification:
  checks:
    - expr: '(-sqrt(-x)).subs(x, -1)'
      expected: "-1"
    - expr: '(-sqrt(-x)).subs(x, -4)'
      expected: "-2"
    - expr: '(-sqrt(-x)).subs(x, 0)'
      expected: "0"
    - expr: '(1/limit(-sqrt(-x), x, -oo), sign(limit(-sqrt(-x), x, -oo)))'
      expected: "(0, -1)"
:::


::: exercise
id: l1-transformations.handout-1-4-6
number: "1.4.6"
tier: standard
topics:
  - shifts
statement: |
  Start from the graph of the upper unit semicircle \(y=\sqrt{1-x^{2}}\). Sketch the graph of \(f(x)=2+\sqrt{1-(x-1)^{2}}\).
solution: |
  Build the graph from the semicircle in two steps.

  1. Shift right by \(1\), which replaces \(x\) by \(x-1\): \(y=\sqrt{1-(x-1)^{2}}\).
  2. Shift up by \(2\): \(y=2+\sqrt{1-(x-1)^{2}}\).

  The root needs \(1-(x-1)^{2}\ge 0\), so \(|x-1|\le 1\) and the domain is \([0,2]\). The heights run from \(2\) to \(3\).

  The shifts carry three points of the semicircle:
  \[
  \begin{aligned}
  (-1,0)&\mapsto(0,2),\\
  (0,1)&\mapsto(1,3),\\
  (1,0)&\mapsto(2,2).
  \end{aligned}
  \]
  The graph is the upper half of the circle of radius \(1\) centred at \((1,2)\). It starts at \((0,2)\), reaches the top \((1,3)\) and ends at \((2,2)\).
provenance: written-for-site
steps:
  - Shift right by \(1\), then up by \(2\).
  - The domain is \([0,2]\).
  - The graph is the upper half of the circle of radius \(1\) with centre \((1,2)\).
verification:
  checks:
    - expr: '(2 + sqrt(1 - (x - 1)**2)).subs(x, 0)'
      expected: "2"
    - expr: '(2 + sqrt(1 - (x - 1)**2)).subs(x, 1)'
      expected: "3"
    - expr: '(2 + sqrt(1 - (x - 1)**2)).subs(x, 2)'
      expected: "2"
    - expr: '(x - 1)**2 + (sqrt(1 - (x - 1)**2))**2'
      expected: "1"
:::


::: exercise
id: l1-transformations.handout-1-4-8
number: "1.4.8"
tier: standard
topics:
  - dilations
statement: |
  Start from the graph of the upper unit semicircle \(y=\sqrt{1-x^{2}}\). Sketch the graph of \(f(x)=2\sqrt{1-\left(\dfrac{x}{3}\right)^{2}}\).
solution: |
  Build the graph from the semicircle in two steps.

  1. Replace \(x\) by \(x/3\). This is a horizontal dilation with \(A=3\): distances from the \(y\)-axis are multiplied by \(3\), and the heights stay. The formula is \(y=\sqrt{1-(x/3)^{2}}\).
  2. Multiply the height by \(2\). This is a vertical dilation with \(B=2\), and the formula is \(y=2\sqrt{1-(x/3)^{2}}\).

  The root needs \(|x/3|\le 1\), so the domain is \([-3,3]\). The dilations carry three points of the semicircle:
  \[
  \begin{aligned}
  (-1,0)&\mapsto(-3,0),\\
  (0,1)&\mapsto(0,2),\\
  (1,0)&\mapsto(3,0).
  \end{aligned}
  \]
  Squaring the equation \(y=f(x)\) gives
  \[
  \left(\frac{x}{3}\right)^{2}+\left(\frac{y}{2}\right)^{2}=1,\qquad y\ge 0.
  \]
  The graph is the upper half of the ellipse with half-width \(3\) and half-height \(2\), centred at the origin.
provenance: written-for-site
steps:
  - Dilate horizontally by \(3\), then vertically by \(2\).
  - The domain is \([-3,3]\) and the top point is \((0,2)\).
  - The graph is the upper half of the ellipse \(\frac{x^{2}}{9}+\frac{y^{2}}{4}=1\).
verification:
  checks:
    - expr: '(2*sqrt(1 - (x/3)**2)).subs(x, 3)'
      expected: "0"
    - expr: '(2*sqrt(1 - (x/3)**2)).subs(x, -3)'
      expected: "0"
    - expr: '(2*sqrt(1 - (x/3)**2)).subs(x, 0)'
      expected: "2"
    - expr: '(x/3)**2 + (2*sqrt(1 - (x/3)**2)/2)**2'
      expected: "1"
:::


::: exercise
id: l1-transformations.handout-1-4-10
number: "1.4.10"
tier: standard
topics:
  - dilations
  - shifts
statement: |
  Start from the graph of the upper unit semicircle \(y=\sqrt{1-x^{2}}\). Sketch the graph of \(f(x)=4+2\sqrt{1-\dfrac{(x-5)^{2}}{9}}\).
solution: |
  Write the square under the root as \(\dfrac{(x-5)^{2}}{9}=\left(\dfrac{x-5}{3}\right)^{2}\). Then
  \[
  f(x)=4+2\sqrt{1-\left(\frac{x-5}{3}\right)^{2}}.
  \]

  Build the graph from the semicircle. The dilations come first and the shifts after them.

  1. Replace \(x\) by \(x/3\), a horizontal dilation with \(A=3\): \(y=\sqrt{1-(x/3)^{2}}\).
  2. Multiply the height by \(2\): \(y=2\sqrt{1-(x/3)^{2}}\).
  3. Shift right by \(5\), which replaces \(x\) by \(x-5\): \(y=2\sqrt{1-\left(\frac{x-5}{3}\right)^{2}}\).
  4. Shift up by \(4\).

  The root needs \(|x-5|\le 3\), so the domain is \([2,8]\), and the heights run from \(4\) to \(6\). After the dilations the semicircle has the endpoints \((\pm 3,0)\) and the top \((0,2)\). The shifts move them:
  \[
  \begin{aligned}
  (-3,0)&\mapsto(2,4),\\
  (0,2)&\mapsto(5,6),\\
  (3,0)&\mapsto(8,4).
  \end{aligned}
  \]
  The graph is the upper half of the ellipse with half-width \(3\) and half-height \(2\), centred at \((5,4)\).
provenance: written-for-site
steps:
  - Write the square as \(\left(\frac{x-5}{3}\right)^{2}\).
  - Dilate by \(3\) horizontally and by \(2\) vertically, then shift right by \(5\) and up by \(4\).
  - The graph is the upper half of an ellipse centred at \((5,4)\), from \((2,4)\) over \((5,6)\) to \((8,4)\).
verification:
  checks:
    - expr: '(4 + 2*sqrt(1 - (x - 5)**2/9)).subs(x, 2)'
      expected: "4"
    - expr: '(4 + 2*sqrt(1 - (x - 5)**2/9)).subs(x, 5)'
      expected: "6"
    - expr: '(4 + 2*sqrt(1 - (x - 5)**2/9)).subs(x, 8)'
      expected: "4"
    - expr: '((x - 5)/3)**2 + ((2*sqrt(1 - (x - 5)**2/9))/2)**2'
      expected: "1"
:::


::: exercise
id: l1-transformations.handout-1-4-12
number: "1.4.12"
tier: standard
topics:
  - dilations
  - shifts
statement: |
  Start from the graph of the upper unit semicircle \(y=\sqrt{1-x^{2}}\). Sketch the graph of \(f(x)=\sqrt{100-25(x-1)^{2}}+2\).
solution: |
  Factor \(100\) out of the root so that the form \(1-(\cdot)^{2}\) appears:
  \[
  \begin{aligned}
  \sqrt{100-25(x-1)^{2}}&=\sqrt{100\left(1-\frac{(x-1)^{2}}{4}\right)}\\
  &=10\sqrt{1-\left(\frac{x-1}{2}\right)^{2}}.
  \end{aligned}
  \]
  So
  \[
  f(x)=10\sqrt{1-\left(\frac{x-1}{2}\right)^{2}}+2.
  \]

  Build the graph from the semicircle. The dilations come first and the shifts after them.

  1. Replace \(x\) by \(x/2\), a horizontal dilation with \(A=2\).
  2. Multiply the height by \(10\).
  3. Shift right by \(1\).
  4. Shift up by \(2\).

  The root needs \(|x-1|\le 2\), so the domain is \([-1,3]\), and the heights run from \(2\) to \(12\). After the dilations the semicircle has the endpoints \((\pm 2,0)\) and the top \((0,10)\). The shifts move them:
  \[
  \begin{aligned}
  (-2,0)&\mapsto(-1,2),\\
  (0,10)&\mapsto(1,12),\\
  (2,0)&\mapsto(3,2).
  \end{aligned}
  \]
  The graph is the upper half of the ellipse with half-width \(2\) and half-height \(10\), centred at \((1,2)\). It is tall and narrow.
provenance: written-for-site
steps:
  - Factor to get \(f(x)=10\sqrt{1-\left(\frac{x-1}{2}\right)^{2}}+2\).
  - Dilate by \(2\) horizontally and by \(10\) vertically, then shift right by \(1\) and up by \(2\).
  - The graph is the upper half of an ellipse from \((-1,2)\) over \((1,12)\) to \((3,2)\).
verification:
  checks:
    - expr: '(sqrt(100 - 25*(x - 1)**2) + 2).subs(x, -1)'
      expected: "2"
    - expr: '(sqrt(100 - 25*(x - 1)**2) + 2).subs(x, 1)'
      expected: "12"
    - expr: '(sqrt(100 - 25*(x - 1)**2) + 2).subs(x, 3)'
      expected: "2"
    - expr: 'simplify(sqrt(100 - 25*(x - 1)**2)**2 - (10*sqrt(1 - ((x - 1)/2)**2))**2)'
      expected: "0"
:::


::: exercise
id: l1-transformations.handout-1-4-13
number: "1.4.13"
tier: basic
topics:
  - shifts
statement: |
  The function \(f\) is defined on about \([0,3.3]\). Its graph starts very low near \((0,-1.4)\) and rises steeply, crossing zero at about \(x=0.1\), up to a local maximum of \(2\) at about \(x=0.55\). It then falls to a local minimum of about \(0.45\) at \(x=1.75\), rises to a second local maximum of \(2\) at about \(x=2.9\), and falls to about \(1\) at the right end \(x=3.3\).

  Sketch the graph of \(y=f(x-1)\).
solution: |
  Replacing \(x\) by \(x-1\) shifts the graph right by \(1\). A point \((a,b)\) of the graph of \(f\) moves to \((a+1,b)\), and the heights stay.

  - The start \((0,-1.4)\) moves to \((1,-1.4)\).
  - The zero near \(x=0.1\) moves to \(x=1.1\).
  - The first local maximum \((0.55,2)\) moves to \((1.55,2)\).
  - The local minimum \((1.75,0.45)\) moves to \((2.75,0.45)\).
  - The second local maximum \((2.9,2)\) moves to \((3.9,2)\).
  - The right end \((3.3,1)\) moves to \((4.3,1)\).

  The new graph is defined on about \([1,4.3]\). It has the same shape as the graph of \(f\), moved one unit to the right.
provenance: written-for-site
steps:
  - Add \(1\) to every \(x\)-coordinate and keep the heights.
  - The domain becomes about \([1,4.3]\).
  - The maxima are at \(x=1.55\) and \(x=3.9\), and the minimum is at \(x=2.75\).
verification:
  checks:
    - expr: '(0 + 1, Rational(1, 10) + 1, Rational(11, 20) + 1, Rational(7, 4) + 1, Rational(29, 10) + 1, Rational(33, 10) + 1)'
      expected: "(1, 11/10, 31/20, 11/4, 39/10, 43/10)"
:::


::: exercise
id: l1-transformations.handout-1-4-16
number: "1.4.16"
tier: standard
topics:
  - dilations
statement: |
  The function \(f\) is defined on about \([0,3.3]\). Its graph starts very low near \((0,-1.4)\) and rises steeply, crossing zero at about \(x=0.1\), up to a local maximum of \(2\) at about \(x=0.55\). It then falls to a local minimum of about \(0.45\) at \(x=1.75\), rises to a second local maximum of \(2\) at about \(x=2.9\), and falls to about \(1\) at the right end \(x=3.3\).

  Sketch the graph of \(y=2f(3x)\).
solution: |
  Two dilations act on the graph.

  - Replacing \(x\) by \(3x\) is the horizontal dilation with \(A=1/3\), because \(x/A=3x\). Distances from the \(y\)-axis are divided by \(3\).
  - The factor \(2\) in front is the vertical dilation with \(B=2\). Every height is multiplied by \(2\).

  A point \((a,b)\) of the graph of \(f\) moves to \((a/3,\,2b)\).

  - The start \((0,-1.4)\) moves to \((0,-2.8)\).
  - The zero near \(x=0.1\) moves to \(x=1/30\), about \(0.03\).
  - The first local maximum \((0.55,2)\) moves to \(\left(\frac{11}{60},4\right)\), about \((0.18,4)\).
  - The local minimum \((1.75,0.45)\) moves to \(\left(\frac{7}{12},0.9\right)\), about \((0.58,0.9)\).
  - The second local maximum \((2.9,2)\) moves to \(\left(\frac{29}{30},4\right)\), about \((0.97,4)\).
  - The right end \((3.3,1)\) moves to \((1.1,2)\).

  The new graph is defined on about \([0,1.1]\). It is the graph of \(f\) squeezed horizontally by the factor \(3\) and stretched vertically by the factor \(2\).
provenance: written-for-site
steps:
  - Divide every \(x\)-coordinate by \(3\).
  - Multiply every height by \(2\).
  - The domain becomes about \([0,1.1]\), the maxima have height \(4\) and the minimum has height \(0.9\).
verification:
  checks:
    - expr: '(Rational(1, 10)/3, Rational(11, 20)/3, Rational(7, 4)/3, Rational(29, 10)/3, Rational(33, 10)/3)'
      expected: "(1/30, 11/60, 7/12, 29/30, 11/10)"
    - expr: '(2*Rational(-7, 5), 2*2, 2*Rational(9, 20), 2*1)'
      expected: "(-14/5, 4, 9/10, 2)"
:::


::: exercise
id: l1-transformations.handout-1-4-17
number: "1.4.17"
tier: standard
topics:
  - dilations
  - shifts
statement: |
  The function \(f\) is defined on about \([0,3.3]\). Its graph starts very low near \((0,-1.4)\) and rises steeply, crossing zero at about \(x=0.1\), up to a local maximum of \(2\) at about \(x=0.55\). It then falls to a local minimum of about \(0.45\) at \(x=1.75\), rises to a second local maximum of \(2\) at about \(x=2.9\), and falls to about \(1\) at the right end \(x=3.3\).

  Sketch the graph of \(y=2f(3(x-2))+1\).
solution: |
  Do the dilations first and the shifts after them.

  1. Replace \(x\) by \(3x\), the horizontal dilation with \(A=1/3\). Distances from the \(y\)-axis are divided by \(3\).
  2. Multiply every height by \(2\).
  3. Shift right by \(2\), which replaces \(x\) by \(x-2\). The formula is now \(2f(3(x-2))\).
  4. Shift up by \(1\).

  A point \((a,b)\) of the graph of \(f\) moves to \(\left(\dfrac{a}{3}+2,\ 2b+1\right)\).

  - The start \((0,-1.4)\) moves to \((2,-1.8)\).
  - The zero near \(x=0.1\) moves to \(\left(2+\frac{1}{30},\,1\right)\), about \((2.03,1)\).
  - The first local maximum \((0.55,2)\) moves to \(\left(2+\frac{11}{60},\,5\right)\), about \((2.18,5)\).
  - The local minimum \((1.75,0.45)\) moves to \(\left(2+\frac{7}{12},\,1.9\right)\), about \((2.58,1.9)\).
  - The second local maximum \((2.9,2)\) moves to \(\left(2+\frac{29}{30},\,5\right)\), about \((2.97,5)\).
  - The right end \((3.3,1)\) moves to \((3.1,3)\).

  The new graph is defined on about \([2,3.1]\).
provenance: written-for-site
steps:
  - Divide every \(x\)-coordinate by \(3\) and multiply every height by \(2\).
  - Then add \(2\) to every \(x\)-coordinate and add \(1\) to every height.
  - The domain becomes about \([2,3.1]\), and the maxima have height \(5\).
verification:
  checks:
    - expr: '(Rational(0)/3 + 2, Rational(1, 10)/3 + 2, Rational(11, 20)/3 + 2, Rational(7, 4)/3 + 2, Rational(29, 10)/3 + 2, Rational(33, 10)/3 + 2)'
      expected: "(2, 61/30, 131/60, 31/12, 89/30, 31/10)"
    - expr: '(2*Rational(-7, 5) + 1, 2*0 + 1, 2*2 + 1, 2*Rational(9, 20) + 1, 2*1 + 1)'
      expected: "(-9/5, 1, 5, 19/10, 3)"
:::


::: exercise
id: l1-transformations.handout-1-4-18
number: "1.4.18"
tier: standard
topics:
  - dilations
  - shifts
statement: |
  The function \(f\) is defined on about \([0,3.3]\). Its graph starts very low near \((0,-1.4)\) and rises steeply, crossing zero at about \(x=0.1\), up to a local maximum of \(2\) at about \(x=0.55\). It then falls to a local minimum of about \(0.45\) at \(x=1.75\), rises to a second local maximum of \(2\) at about \(x=2.9\), and falls to about \(1\) at the right end \(x=3.3\).

  Sketch the graph of \(y=\dfrac{1}{2}f(3x-3)\).
solution: |
  Factor the input first, because a shift is read from the form \(x-C\):
  \[
  3x-3=3(x-1).
  \]
  So \(y=\tfrac{1}{2}f(3(x-1))\). The input \(3(x-1)\) is zero at \(x=1\), so the start of the graph moves to \(x=1\). A shift of \(3\) would put the start at \(x=3\).

  Do the dilations first and the shift after them.

  1. Replace \(x\) by \(3x\), the horizontal dilation with \(A=1/3\).
  2. Multiply every height by \(\tfrac{1}{2}\).
  3. Shift right by \(1\).

  A point \((a,b)\) of the graph of \(f\) moves to \(\left(\dfrac{a}{3}+1,\ \dfrac{b}{2}\right)\).

  - The start \((0,-1.4)\) moves to \((1,-0.7)\).
  - The zero near \(x=0.1\) moves to \(\left(1+\frac{1}{30},\,0\right)\), about \((1.03,0)\).
  - The first local maximum \((0.55,2)\) moves to \(\left(1+\frac{11}{60},\,1\right)\), about \((1.18,1)\).
  - The local minimum \((1.75,0.45)\) moves to \(\left(1+\frac{7}{12},\,0.225\right)\), about \((1.58,0.23)\).
  - The second local maximum \((2.9,2)\) moves to \(\left(1+\frac{29}{30},\,1\right)\), about \((1.97,1)\).
  - The right end \((3.3,1)\) moves to \((2.1,0.5)\).

  The new graph is defined on about \([1,2.1]\), and its maxima have height \(1\).
provenance: written-for-site
steps:
  - Factor \(3x-3=3(x-1)\), so the shift is right by \(1\).
  - Divide every \(x\)-coordinate by \(3\), add \(1\), and halve every height.
  - The domain becomes about \([1,2.1]\), and the maxima have height \(1\).
verification:
  checks:
    - expr: 'expand(3*(x - 1) - (3*x - 3))'
      expected: "0"
    - expr: '(Rational(0)/3 + 1, Rational(1, 10)/3 + 1, Rational(11, 20)/3 + 1, Rational(7, 4)/3 + 1, Rational(29, 10)/3 + 1, Rational(33, 10)/3 + 1)'
      expected: "(1, 31/30, 71/60, 19/12, 59/30, 21/10)"
    - expr: '(Rational(-7, 5)/2, Rational(0)/2, Rational(2)/2, Rational(9, 20)/2, Rational(1)/2)'
      expected: "(-7/10, 0, 1, 9/40, 1/2)"
:::


::: exercise
id: l1-transformations.handout-4-1-8
number: "4.1.8"
tier: basic
topics:
  - dilations
  - trigonometry
statement: |
  Sketch \(y=2\sin(x)\).
solution: |
  The factor \(2\) is a vertical dilation with \(B=2\). Every height of \(y=\sin x\) is multiplied by \(2\), and the \(x\)-coordinates stay.

  The graph keeps the zeros of sine and the period of sine:
  \[
  \begin{aligned}
  2\sin x=0&\iff x=k\pi,\quad k\in\mathbb{Z},\\
  2\sin(x+2\pi)&=2\sin x.
  \end{aligned}
  \]
  The extreme values double. The maximum \(2\) occurs at \(x=\frac{\pi}{2}+2k\pi\) and the minimum \(-2\) occurs at \(x=\frac{3\pi}{2}+2k\pi\). The graph oscillates between \(-2\) and \(2\), so the amplitude is \(2\).

  Over one period from \(0\) to \(2\pi\), the graph rises from \((0,0)\) to \(\left(\frac{\pi}{2},2\right)\), falls through \((\pi,0)\) to \(\left(\frac{3\pi}{2},-2\right)\), and returns to \((2\pi,0)\).
provenance: written-for-site
steps:
  - Multiply every height of \(y=\sin x\) by \(2\).
  - The zeros stay at \(k\pi\), and the period stays \(2\pi\).
  - The graph oscillates between \(-2\) and \(2\).
verification:
  checks:
    - expr: '(2*sin(pi/2), 2*sin(3*pi/2))'
      expected: "(2, -2)"
    - expr: 'solveset(2*sin(x), x, Interval(0, 2*pi))'
      expected: "FiniteSet(0, pi, 2*pi)"
    - expr: 'simplify(2*sin(x + 2*pi) - 2*sin(x))'
      expected: "0"
    - expr: '(maximum(2*sin(x), x, Interval(0, 2*pi)), minimum(2*sin(x), x, Interval(0, 2*pi)))'
      expected: "(2, -2)"
:::
