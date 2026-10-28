---
id: visuals-one-variable-stand-in
lecture: 4
order: 98
title: One-variable visuals (stand-in)
prerequisites: []
sources: []
examWeight: low
status: draft
hidden: true
---

::: key-points
text: |
  - The graph of \(f(x) = x^2/(x-1)\) has a vertical asymptote at \(x = 1\), where the denominator is zero and the numerator is not. Division gives \(f(x) = x + 1 + \frac{1}{x-1}\), so \(y = x + 1\) is an oblique asymptote.
  - \(f'(x) = \frac{x(x-2)}{(x-1)^2}\) is zero at \(x = 0\) and \(x = 2\). The sign of \(f'\) changes from plus to minus at \(0\), a local maximum with \(f(0) = 0\), and from minus to plus at \(2\), a local minimum with \(f(2) = 4\).
:::

::: visual
kind: curve-sketch
caption: |
  Turn the layers on one at a time for \(f(x) = x^2/(x-1)\). Where the sign layers are on, blue pieces of the curve rise and red pieces fall. Type another function to sketch it.
params:
  f: "x^2/(x-1)"
:::

::: tip
text: |
  To find an oblique asymptote, divide the numerator by the denominator before taking any limit. For \(f(x) = x^2/(x-1)\) the quotient is \(x + 1\), and the remainder term \(\frac{1}{x-1}\) tends to \(0\) as \(x \to \pm\infty\).
:::

::: visual
kind: limit
caption: |
  The function \(\sin(x)/x\) is not defined at \(x = 0\), yet the values on both sides settle at 1. The open circle marks the limit that the graph never reaches. Narrow the zoom and read the table.
params:
  f: "sin(x)/x"
  a: 0
:::

::: visual
kind: newton
caption: |
  Newton's method for \(x^2 - 2 = 0\). Each tangent line meets the axis at the next iterate. Move the starting point and watch the iterates.
params:
  f: "x^2-2"
  x0: 1
  n: 4
:::

::: visual
kind: taylor
caption: |
  The function \(\ln(\cos x)\) with its Taylor polynomial at \(x = 0\). Raise the order and compare the values at one point.
params:
  f: "ln(cos(x))"
  a: 0
  order: 4
  xmin: -1.4
  xmax: 1.4
:::

::: visual
kind: riemann
caption: |
  Rectangles under \(x^2\) on \([0, 1]\). The left sum is below the integral because the function is increasing. Increase \(n\) and the sum approaches \(1/3\).
params:
  f: "x^2"
  a: 0
  b: 1
  n: 4
  rule: left
:::
