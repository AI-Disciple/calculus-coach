---
id: l5-partial-derivatives
lecture: 5
order: 2
title: Partial derivatives
prerequisites: [l4-functions-several-variables, l1-derivative-rules]
sources:
  - { source: handout, section: "14.3", page: 357 }
  - { source: handout, section: "14.3", page: 359 }
  - { source: lecture-notes-5, page: 1 }
  - { source: lecture-notes-5, page: 2 }
  - { source: sheet-2, page: 1 }
examWeight: medium
examWeightNote: Never a question on its own, but every multivariable block uses partials.
taught: lecture
status: reviewed
notation: |
  \(\frac{df}{dx}\), \(d_x f\) and \(f_x\) are names for the partial derivative of \(f\) with respect to \(x\). The handout holds the other variable constant and writes that same derivative as \(\frac{\partial f}{\partial x}\). The names \(\frac{df}{dy}\), \(d_y f\) and \(f_y\) match \(\frac{\partial f}{\partial y}\).
---

::: section
title: Partial derivatives in \(x\) and \(y\)
:::

::: formal-statement
kind: definition
source:
  source: lecture-notes-5
  page: 1
text: |
  If the limit
  \[
  \lim_{\varepsilon \to 0} \frac{f(x+\varepsilon, y) - f(x, y)}{\varepsilon}
  \]
  exists, then \(f\) has a **partial derivative** with respect to \(x\) at that point. The partial derivative is written \(\frac{df}{dx}\), or \(d_x f\), or \(f_x\).
:::

::: plain-explanation
text: |
  The limit is the slope of the graph in the \(x\) direction. The coordinate \(y\) stays fixed while \(x\) moves by \(\varepsilon\).
:::

::: tip
text: |
  Treating \(y\) as a constant and differentiating in \(x\) computes this same slope.
:::

::: formal-statement
kind: definition
source:
  source: lecture-notes-5
  page: 1
text: |
  If the limit
  \[
  \lim_{\varepsilon \to 0} \frac{f(x, y+\varepsilon) - f(x, y)}{\varepsilon}
  \]
  exists, then \(f\) has a partial derivative with respect to \(y\) at that point. The partial derivative is written \(\frac{df}{dy}\), or \(d_y f\), or \(f_y\).
:::

::: plain-explanation
text: |
  The limit is the slope of the graph in the \(y\) direction. The coordinate \(x\) stays fixed while \(y\) moves by \(\varepsilon\).
:::

::: visual
kind: quadric
caption: |
  On the surface \(z = x^2 + y^2\), the cut axis \(y\) holds \(y\) fixed at the slice value. For a slice between \(-1.5\) and \(1.5\), the flat plot shows the curve \(x \mapsto f(x, y)\), whose slope \(\frac{df}{dx} = 2x\) is \(0\) at \(x = 0\).
params:
  surface: paraboloid
  a: 1
  b: 1
  axis: y
  slice: 1
:::

::: worked-example
title: Partials of \(x^2 + y^2\) from the limit
problem: |
  Let \(f(x, y) = x^2 + y^2\). Compute \(\frac{df}{dx}\) and \(\frac{df}{dy}\) from the limit, and evaluate \(\frac{df}{dx}\) at \((-1, 2)\).
solution: |
  **Partial in \(x\).** The step \((x, y) + \varepsilon(1, 0)\) equals \((x+\varepsilon, y)\). Then
  \[
  \begin{aligned}
  f(x+\varepsilon, y)&=(x+\varepsilon)^2 + y^2,\\
  &=x^2 + 2x\varepsilon + \varepsilon^2 + y^2.
  \end{aligned}
  \]
  The difference \(f(x+\varepsilon, y) - f(x, y)\) equals \(2x\varepsilon + \varepsilon^2\). Dividing by \(\varepsilon\) gives \(2x + \varepsilon\). The limit as \(\varepsilon \to 0\) equals \(2x\). So \(\frac{df}{dx} = 2x\).

  **Partial in \(y\).** The step \((x, y) + \varepsilon(0, 1)\) equals \((x, y+\varepsilon)\). Then
  \[
  \begin{aligned}
  f(x, y+\varepsilon)&=x^2 + (y+\varepsilon)^2,\\
  &=x^2 + y^2 + 2y\varepsilon + \varepsilon^2.
  \end{aligned}
  \]
  The difference equals \(2y\varepsilon + \varepsilon^2\). Dividing by \(\varepsilon\) gives \(2y + \varepsilon\). The limit equals \(2y\). So \(\frac{df}{dy} = 2y\).

  At \((-1, 2)\), the partial \(\frac{df}{dx}\) equals \(2 \cdot (-1) = -2\). The height of the graph there is \(f(-1, 2) = 5\). The slope of the graph in the \(x\) direction at that point is \(-2\).
:::

::: worked-example
title: Holding one variable constant
problem: |
  Let \(f(x, y) = x^2 y\). Compute \(\frac{df}{dx}\) and \(\frac{df}{dy}\) by one-variable differentiation.
solution: |
  Hold \(y\) constant. The factor \(y\) stays in place, and the derivative of \(x^2\) is \(2x\). The partial \(\frac{df}{dx}\) equals \(2xy\).

  Hold \(x\) constant. The factor \(x^2\) stays in place, and the derivative of \(y\) is \(1\). The partial \(\frac{df}{dy}\) equals \(x^2\).

  The same two results are \(\frac{\partial f}{\partial x} = 2xy\) and \(\frac{\partial f}{\partial y} = x^2\).
:::

::: guided-example
title: Partials of \(x^3 + 3xy\)
problem: |
  Compute \(\frac{df}{dx}\) and \(\frac{df}{dy}\) for \(f(x, y) = x^3 + 3xy\).
steps:
  - |
    Hold \(y\) constant. The derivative of \(x^3\) is \(3x^2\). The derivative of \(3xy\) is \(3y\).
  - |
    The partial \(\frac{df}{dx}\) equals \(3x^2 + 3y\).
  - |
    Hold \(x\) constant. The term \(x^3\) has \(y\)-partial \(0\). The derivative of \(3xy\) is \(3x\).
  - |
    The partial \(\frac{df}{dy}\) equals \(3x\).
:::

::: key-points
text: |
  - The partial derivative \(\frac{df}{dx}\) is the limit \(\lim_{\varepsilon \to 0} \frac{f(x+\varepsilon, y) - f(x, y)}{\varepsilon}\), when this limit exists. It is the slope of the graph in the \(x\) direction with \(y\) held fixed, and it is also written \(d_x f\) or \(f_x\).
  - The partial derivative \(\frac{df}{dy}\) is the limit \(\lim_{\varepsilon \to 0} \frac{f(x, y+\varepsilon) - f(x, y)}{\varepsilon}\), when this limit exists. It is the slope of the graph in the \(y\) direction with \(x\) held fixed, and it is also written \(d_y f\) or \(f_y\).
  - Treating the other variable as a constant and differentiating in the remaining one computes the same partial derivative. For \(f(x, y) = x^2 y\), this gives \(\frac{df}{dx} = 2xy\) and \(\frac{df}{dy} = x^2\), also written \(\frac{\partial f}{\partial x}\) and \(\frac{\partial f}{\partial y}\).
:::

::: concept-question
id: l5-partial-derivatives.q-8d706ce7
question: |
  For \(f(x, y) = 3x + y^2\), what is \(\frac{df}{dx}\)?
options:
  - text: |
      \(3\)
    correct: true
  - text: |
      \(2y\)
  - text: |
      \(3 + 2y\)
  - text: |
      \(0\)
explanation: |
  Holding \(y\) constant, the derivative of \(3x\) is \(3\), and \(y^2\) contributes \(0\). The partial \(\frac{df}{dx}\) equals \(3\). The term \(2y\) is \(\frac{df}{dy}\).
:::

::: concept-question
id: l5-partial-derivatives.q-9f57e7f8
question: |
  For \(f(x, y) = e^{x+y}\), which pair is \(\bigl(\frac{df}{dx}, \frac{df}{dy}\bigr)\)?
options:
  - text: |
      \(\bigl(e^{x+y},\, e^{x+y}\bigr)\)
    correct: true
  - text: |
      \(\bigl(e^{x+y},\, e^{y}\bigr)\)
  - text: |
      \(\bigl(e^{x} + e^{y},\, e^{x} + e^{y}\bigr)\)
  - text: |
      \(\bigl(xe^{x+y},\, ye^{x+y}\bigr)\)
explanation: |
  The exponent \(x+y\) has derivative \(1\) in \(x\) and derivative \(1\) in \(y\). Each partial equals \(e^{x+y}\).
:::

::: concept-question
id: l5-partial-derivatives.q-2cfce467
question: |
  Holding \(y\) constant, what is the derivative of \(x^2 + y^2\) in \(x\)?
options:
  - text: |
      \(2x\)
    correct: true
  - text: |
      \(2y\)
  - text: |
      \(2x + 2y\)
  - text: |
      \(x^2\)
explanation: |
  With \(y\) held constant, \(y^2\) contributes \(0\), and the derivative of \(x^2\) is \(2x\). This is \(\frac{df}{dx}\) for \(f(x, y) = x^2 + y^2\), written \(\frac{\partial}{\partial x}(x^2 + y^2)\) in the handout.
:::

::: exercise
id: l5-partial-derivatives.sheet-2-3-1
number: "sheet 2 exercise 3.1"
tier: basic
topics: [partial-derivatives]
statement: |
  Compute the partial derivatives of
  \[
  f(x, y) = \sin(xy) + 3xy.
  \]
solution: |
  Hold \(y\) constant. The chain rule on \(\sin(xy)\) multiplies \(\cos(xy)\) by \(y\), and the term \(3xy\) contributes \(3y\). The partial is
  \[
  \frac{df}{dx}=y\cos(xy) + 3y.
  \]

  Hold \(x\) constant. The chain rule multiplies \(\cos(xy)\) by \(x\), and the term \(3xy\) contributes \(3x\). The partial is
  \[
  \frac{df}{dy}=x\cos(xy) + 3x.
  \]
provenance: written-for-site
steps:
  - The partial df/dx equals y cos(xy) + 3y.
  - The partial df/dy equals x cos(xy) + 3x.
verification:
  checks:
    - expr: diff(sin(x*y) + 3*x*y, x) - (y*cos(x*y) + 3*y)
      expected: "0"
    - expr: diff(sin(x*y) + 3*x*y, y) - (x*cos(x*y) + 3*x)
      expected: "0"
:::

::: exercise
id: l5-partial-derivatives.sheet-2-3-2
number: "sheet 2 exercise 3.2"
tier: basic
topics: [partial-derivatives]
statement: |
  Compute the partial derivatives of
  \[
  f(x, y) = e^{x+y}.
  \]
solution: |
  The exponent \(x+y\) has derivative \(1\) with respect to \(x\). The partial is
  \[
  \frac{df}{dx}=e^{x+y}.
  \]
  The exponent has derivative \(1\) with respect to \(y\). The partial is
  \[
  \frac{df}{dy}=e^{x+y}.
  \]
provenance: written-for-site
steps:
  - Both partials equal e^{x+y}.
verification:
  checks:
    - expr: diff(exp(x + y), x) - exp(x + y)
      expected: "0"
    - expr: diff(exp(x + y), y) - exp(x + y)
      expected: "0"
:::

::: section
title: Stepping along a unit vector
:::

::: formal-statement
kind: method
source:
  source: lecture-notes-5
  page: 2
text: |
  The partial in \(x\) is the step along the unit vector \(\vec{e}_x = (1, 0)\):
  \[
  \begin{aligned}
  \frac{df}{dx}(x, y)&=\lim_{\varepsilon \to 0}\\
  &\frac{f\bigl((x, y) + \varepsilon(1, 0)\bigr) - f(x, y)}{\varepsilon}.
  \end{aligned}
  \]
  The point \((x, y) + \varepsilon(1, 0)\) equals \((x+\varepsilon, y)\). The partial in \(y\) steps along \(\vec{e}_y = (0, 1)\), and the point \((x, y) + \varepsilon(0, 1)\) equals \((x, y+\varepsilon)\).
:::

::: plain-explanation
text: |
  The vector \(\varepsilon(1, 0)\) is added to the point \((x, y)\). The first coordinate becomes \(x+\varepsilon\). The second coordinate stays equal to \(y\). The limit of that quotient is \(\frac{df}{dx}\).
:::

::: trap
text: |
  The \(x\)-partial steps from \((x, y)\) to \((x, y) + \varepsilon(1, 0)\), the point \((x+\varepsilon, y)\).

  The expression \((x+y) + \varepsilon(1, 0)\) adds the number \(x+y\) to a vector. Take \(f(x, y) = x\) at \((1, 1)\). The correct quotient is
  \[
  \begin{aligned}
  \frac{f(1+\varepsilon, 1) - f(1, 1)}{\varepsilon}&=\frac{(1+\varepsilon) - 1}{\varepsilon},\\
  &=1.
  \end{aligned}
  \]
  The partial \(\frac{df}{dx}(1, 1)\) equals \(1\).

  Reading \((x+y) + \varepsilon(1, 0)\) as the point \((x+y+\varepsilon,\ 0)\) uses \(f(2+\varepsilon, 0) = 2+\varepsilon\). The quotient is
  \[
  \frac{(2+\varepsilon) - 1}{\varepsilon} = \frac{1}{\varepsilon} + 1.
  \]
  That quotient does not tend to \(1\).
:::

::: key-points
text: |
  - The partial in \(x\) is the limit of \(\frac{f\bigl((x, y) + \varepsilon(1, 0)\bigr) - f(x, y)}{\varepsilon}\) as \(\varepsilon \to 0\), when this limit exists. The step is along the unit vector \(\vec{e}_x = (1, 0)\), and the point \((x, y) + \varepsilon(1, 0)\) equals \((x+\varepsilon, y)\).
  - The partial in \(y\) steps along \(\vec{e}_y = (0, 1)\), and the point \((x, y) + \varepsilon(0, 1)\) equals \((x, y+\varepsilon)\).
  - The usual slip writes \((x+y) + \varepsilon(1, 0)\), which adds the number \(x+y\) to a vector. Read as the point \((x+y+\varepsilon,\ 0)\), it gives the quotient \(\frac{1}{\varepsilon} + 1\) for \(f(x, y) = x\) at \((1, 1)\), and that quotient does not tend to \(1\). The correct step is \((x, y) + \varepsilon(1, 0) = (x+\varepsilon, y)\), which gives \(\frac{df}{dx}(1, 1) = 1\).
:::

::: concept-question
id: l5-partial-derivatives.q-ecacdf72
question: |
  Which point is \((x, y) + \varepsilon(1, 0)\)?
options:
  - text: |
      \((x+\varepsilon,\ y)\)
    correct: true
  - text: |
      \((x+y+\varepsilon,\ 0)\)
  - text: |
      \((x+\varepsilon,\ y+\varepsilon)\)
  - text: |
      \((x,\ y+\varepsilon)\)
explanation: |
  The vector \(\varepsilon(1, 0)\) adds \(\varepsilon\) to the first coordinate and adds \(0\) to the second. The new point is \((x+\varepsilon, y)\).
:::

::: exercise
id: l5-partial-derivatives.sheet-2-3-3
number: "sheet 2 exercise 3.3"
tier: standard
topics: [partial-derivatives, domains]
statement: |
  Compute the partial derivatives of
  \[
  f(x, y) = \log(x - y),
  \]
  and give the domain of \(f\).
solution: |
  In this course \(\log\) is the natural logarithm. The argument \(x - y\) is positive when \(x > y\), so the domain of \(f\) is the half-plane \(x > y\).

  Let \(u = x - y\). The derivative of \(\log u\) is \(\frac{1}{u}\) times the derivative of \(u\). The partial of \(u\) in \(x\) equals \(1\), and the partial of \(u\) in \(y\) equals \(-1\). So
  \[
  \begin{aligned}
  \frac{df}{dx}&=\frac{1}{x - y},\\
  \frac{df}{dy}&=-\frac{1}{x - y}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The domain is the half-plane x > y, since log is the natural logarithm.
  - The partial df/dx equals 1/(x - y), and df/dy equals -1/(x - y).
verification:
  checks:
    - expr: diff(log(x - y), x) - 1/(x - y)
      expected: "0"
    - expr: diff(log(x - y), y) + 1/(x - y)
      expected: "0"
:::

::: exercise
id: l5-partial-derivatives.sheet-2-3-4
number: "sheet 2 exercise 3.4"
tier: standard
topics: [partial-derivatives, domains]
statement: |
  Compute the partial derivatives of
  \[
  f(x, y) = \sqrt{1 - x^2 - y^2}.
  \]
solution: |
  The expression under the square root is nonnegative when \(x^2 + y^2 \le 1\). The domain of \(f\) is that closed disk.

  Write \(f = (1 - x^2 - y^2)^{1/2}\). The chain rule in \(x\) multiplies \(\frac{1}{2}(1 - x^2 - y^2)^{-1/2}\) by the inner derivative \(-2x\). That product equals \(-\frac{x}{\sqrt{1 - x^2 - y^2}}\). So
  \[
  \begin{aligned}
  \frac{df}{dx}&=-\frac{x}{\sqrt{1 - x^2 - y^2}},\\
  \frac{df}{dy}&=-\frac{y}{\sqrt{1 - x^2 - y^2}}.
  \end{aligned}
  \]
  The square root in the denominator is positive when \(x^2 + y^2 < 1\). The partials are defined on that open disk.
provenance: written-for-site
steps:
  - The domain of f is the closed disk x^2 + y^2 <= 1.
  - The partial df/dx equals -x over the square root, and df/dy equals -y over the square root, on the open disk.
verification:
  checks:
    - expr: diff(sqrt(1 - x**2 - y**2), x) + x/sqrt(1 - x**2 - y**2)
      expected: "0"
    - expr: diff(sqrt(1 - x**2 - y**2), y) + y/sqrt(1 - x**2 - y**2)
      expected: "0"
:::

::: exercise
id: l5-partial-derivatives.quotient-partial
tier: exam
topics: [partial-derivatives]
statement: |
  Compute the partial derivatives of
  \[
  f(x, y) = \frac{xy}{x + y}.
  \]
solution: |
  The denominator \(x + y\) is zero on the line \(x + y = 0\). The function \(f\) is defined off that line.

  Hold \(y\) constant and apply the quotient rule. The numerator of the rule is \(y(x + y) - xy \cdot 1\), which equals \(y^2\). The partial is
  \[
  \frac{df}{dx}=\frac{y^2}{(x + y)^2}.
  \]

  Hold \(x\) constant. The numerator of the quotient rule is \(x(x + y) - xy \cdot 1\), which equals \(x^2\). The partial is
  \[
  \frac{df}{dy}=\frac{x^2}{(x + y)^2}.
  \]
provenance: written-for-site
steps:
  - The partial df/dx equals y^2 / (x + y)^2.
  - The partial df/dy equals x^2 / (x + y)^2.
verification:
  checks:
    - expr: diff(x*y/(x + y), x) - y**2/(x + y)**2
      expected: "0"
    - expr: diff(x*y/(x + y), y) - x**2/(x + y)**2
      expected: "0"
:::

::: sheet-item
id: l5-partial-derivatives.sheet-limit
category: formula
text: |
  The \(x\)-partial is
  \[
  \begin{aligned}
  \dfrac{df}{dx}&=\lim_{\varepsilon \to 0}\\
  &\dfrac{f(x+\varepsilon, y) - f(x, y)}{\varepsilon},
  \end{aligned}
  \]
  also written \(d_x f\) or \(f_x\). The \(y\)-partial steps \(y\) by \(\varepsilon\).
:::

::: sheet-item
id: l5-partial-derivatives.sheet-increment
category: formula
text: |
  The \(x\)-partial uses the point \((x, y) + \varepsilon(1, 0) = (x+\varepsilon, y)\). The \(y\)-partial uses \((x, y) + \varepsilon(0, 1) = (x, y+\varepsilon)\).
:::

::: sheet-item
id: l5-partial-derivatives.sheet-curly
category: recognition
text: |
  \(\frac{df}{dx}\), \(d_x f\), \(f_x\) and \(\frac{\partial f}{\partial x}\) are the same derivative. The curly form is ordinary differentiation with the other variable held constant.
:::

::: exercise
id: l5-partial-derivatives.ex-log-sqrt-partials
tier: standard
topics: [partial-derivatives, domains, tangent-planes]
statement: |
  Let \(f(x, y) = \ln(y - x^2) + \sqrt{4 - y}\).
  a) Give the domain of \(f\).
  b) Compute \(\frac{df}{dx}\) and \(\frac{df}{dy}\), and say where they are defined.
  c) Give the tangent plane to the graph of \(f\) at \((1, 2)\).
solution: |
  a) The domain needs two conditions:

  - the logarithm needs \(y - x^2 > 0\),
  - the square root needs \(4 - y \ge 0\).

  The domain is \(x^2 < y \le 4\).

  b) Hold \(y\) constant. The inner function \(y - x^2\) has \(x\)-derivative \(-2x\), and the square root does not depend on \(x\). So
  \[
  \frac{df}{dx} = -\frac{2x}{y - x^2}.
  \]
  Hold \(x\) constant. The inner function \(y - x^2\) has \(y\)-derivative \(1\). The inner function \(4 - y\) has \(y\)-derivative \(-1\), so the square root contributes \(\frac{-1}{2\sqrt{4 - y}}\). So
  \[
  \frac{df}{dy} = \frac{1}{y - x^2} - \frac{1}{2\sqrt{4 - y}}.
  \]
  The partials are defined on these sets:

  - the first partial on \(x^2 < y \le 4\),
  - the second partial on \(x^2 < y < 4\), because \(\sqrt{4 - y}\) is in a denominator.

  c) The point \((1, 2)\) lies in the open region, because \(1 < 2 < 4\). The height and the partials there are
  \[
  \begin{aligned}
  f(1, 2)&=\ln 1 + \sqrt{2}=\sqrt{2},\\
  \frac{df}{dx}(1, 2)&=-2,\\
  \frac{df}{dy}(1, 2)&=1 - \frac{1}{2\sqrt{2}}=1 - \frac{\sqrt{2}}{4}.
  \end{aligned}
  \]
  The tangent plane is
  \[
  Z = \sqrt{2} - 2(x - 1) + \left(1 - \frac{\sqrt{2}}{4}\right)(y - 2).
  \]
provenance: written-for-site
steps:
  - The domain is x^2 < y <= 4.
  - df/dx = -2x/(y - x^2) and df/dy = 1/(y - x^2) - 1/(2 sqrt(4 - y)), the second on x^2 < y < 4.
  - At (1, 2) the height is sqrt(2) and the partials are -2 and 1 - sqrt(2)/4.
  - The tangent plane is Z = sqrt(2) - 2(x - 1) + (1 - sqrt(2)/4)(y - 2).
verification:
  checks:
    - expr: 'simplify(diff(log(y - x**2) + sqrt(4 - y), x) + 2*x/(y - x**2))'
      expected: "0"
    - expr: 'simplify(diff(log(y - x**2) + sqrt(4 - y), y) - (1/(y - x**2) - 1/(2*sqrt(4 - y))))'
      expected: "0"
    - expr: '(log(y - x**2) + sqrt(4 - y)).subs({x: 1, y: 2})'
      expected: sqrt(2)
    - expr: 'Tuple(diff(log(y - x**2) + sqrt(4 - y), x).subs({x: 1, y: 2}), diff(log(y - x**2) + sqrt(4 - y), y).subs({x: 1, y: 2}))'
      expected: Tuple(-2, 1 - sqrt(2)/4)
:::

::: exercise
id: l5-partial-derivatives.handout-14-3-1
number: "14.3.1"
tier: basic
topics:
  - partial-derivatives
statement: |
  Find \(f_x\) and \(f_y\) where \(f(x,y)=\cos(x^2y)+y^3\).
solution: |
  Hold \(y\) constant. The chain rule on \(\cos(x^2y)\) multiplies \(-\sin(x^2y)\) by the inner derivative \(2xy\), and \(y^3\) contributes \(0\). The partial is
  \[
  f_x=-2xy\sin(x^2y).
  \]

  Hold \(x\) constant. The inner derivative of \(x^2y\) in \(y\) is \(x^2\), and \(y^3\) contributes \(3y^2\). The partial is
  \[
  f_y=-x^2\sin(x^2y)+3y^2.
  \]
provenance: handout-answer
steps:
  - The partial f_x equals -2xy sin(x^2 y).
  - The partial f_y equals -x^2 sin(x^2 y) + 3y^2.
verification:
  checks:
    - expr: 'diff(cos(x**2*y) + y**3, x) + 2*x*y*sin(x**2*y)'
      expected: "0"
    - expr: 'diff(cos(x**2*y) + y**3, y) - (-x**2*sin(x**2*y) + 3*y**2)'
      expected: "0"
:::


::: exercise
id: l5-partial-derivatives.handout-14-3-2
number: "14.3.2"
tier: standard
topics:
  - partial-derivatives
statement: |
  Find \(f_x\) and \(f_y\) where \(f(x,y)=\dfrac{xy}{x^2+y}\).
solution: |
  The function is defined where \(x^2+y\neq 0\).

  Hold \(y\) constant and apply the quotient rule. The numerator \(xy\) has \(x\)-derivative \(y\), and the denominator has \(x\)-derivative \(2x\):
  \[
  \begin{aligned}
  f_x&=\frac{y(x^2+y)-xy\cdot 2x}{(x^2+y)^2}\\
  &=\frac{y^2-x^2y}{(x^2+y)^2}.
  \end{aligned}
  \]

  Hold \(x\) constant. The numerator has \(y\)-derivative \(x\), and the denominator has \(y\)-derivative \(1\):
  \[
  \begin{aligned}
  f_y&=\frac{x(x^2+y)-xy\cdot 1}{(x^2+y)^2}\\
  &=\frac{x^3}{(x^2+y)^2}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The quotient rule in x gives f_x = (y^2 - x^2 y)/(x^2 + y)^2.
  - The quotient rule in y gives f_y = x^3/(x^2 + y)^2.
verification:
  checks:
    - expr: 'simplify(diff(x*y/(x**2 + y), x) - (y**2 - x**2*y)/(x**2 + y)**2)'
      expected: "0"
    - expr: 'simplify(diff(x*y/(x**2 + y), y) - x**3/(x**2 + y)**2)'
      expected: "0"
:::


::: exercise
id: l5-partial-derivatives.handout-14-3-4
number: "14.3.4"
tier: standard
topics:
  - partial-derivatives
statement: |
  Find \(f_x\) and \(f_y\) where \(f(x,y)=xy\ln(xy)\).
solution: |
  The function is defined where \(xy>0\).

  Hold \(y\) constant. The product rule treats \(xy\) and \(\ln(xy)\) as two factors. The factor \(xy\) has \(x\)-derivative \(y\), and the factor \(\ln(xy)\) has \(x\)-derivative \(\frac{y}{xy}=\frac1x\):
  \[
  \begin{aligned}
  f_x&=y\ln(xy)+xy\cdot\frac1x\\
  &=y\ln(xy)+y.
  \end{aligned}
  \]

  Hold \(x\) constant. The factor \(xy\) has \(y\)-derivative \(x\), and \(\ln(xy)\) has \(y\)-derivative \(\frac1y\):
  \[
  \begin{aligned}
  f_y&=x\ln(xy)+xy\cdot\frac1y\\
  &=x\ln(xy)+x.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The product rule in x gives f_x = y ln(xy) + y.
  - The product rule in y gives f_y = x ln(xy) + x.
verification:
  checks:
    - expr: 'simplify(diff(x*y*log(x*y), x) - (y*log(x*y) + y))'
      expected: "0"
    - expr: 'simplify(diff(x*y*log(x*y), y) - (x*log(x*y) + x))'
      expected: "0"
:::


::: exercise
id: l5-partial-derivatives.handout-14-3-6
number: "14.3.6"
tier: basic
topics:
  - partial-derivatives
statement: |
  Find \(f_x\) and \(f_y\) where \(f(x,y)=x\tan y\).
solution: |
  The function is defined where \(\cos y\neq 0\).

  Hold \(y\) constant. The factor \(\tan y\) stays in place, so
  \[
  f_x=\tan y.
  \]
  Hold \(x\) constant. The factor \(x\) stays in place, and the derivative of \(\tan y\) is \(\sec^2 y\), so
  \[
  f_y=x\sec^2 y.
  \]
provenance: handout-answer
steps:
  - The partial f_x equals tan y.
  - The partial f_y equals x sec^2 y.
verification:
  checks:
    - expr: 'diff(x*tan(y), x) - tan(y)'
      expected: "0"
    - expr: 'simplify(diff(x*tan(y), y) - x/cos(y)**2)'
      expected: "0"
:::


::: exercise
id: l5-partial-derivatives.handout-14-3-14
number: "14.3.14"
tier: basic
topics:
  - partial-derivatives
statement: |
  Let \(f(x,y)\) be a differentiable function. Give a geometric interpretation of \(f_x(a,b)\) and of \(f_y(a,b)\) as they relate to the graph of \(f\).
solution: |
  The graph of \(f\) is the surface \(z=f(x,y)\).

  **The partial in \(x\).** The plane \(y=b\) cuts the surface in the curve \(z=f(x,b)\). This is a curve in that plane, with \(x\) as its variable. By definition, \(f_x(a,b)\) is the derivative of \(x\mapsto f(x,b)\) at \(x=a\). So \(f_x(a,b)\) is the slope of the tangent line to that curve at the point \((a,b,f(a,b))\). It is the slope of the graph in the \(x\)-direction.

  **The partial in \(y\).** The plane \(x=a\) cuts the surface in the curve \(z=f(a,y)\). The value \(f_y(a,b)\) is the derivative of \(y\mapsto f(a,y)\) at \(y=b\), the slope of the tangent line to that curve at the same point. It is the slope of the graph in the \(y\)-direction.

  Both tangent lines lie in the tangent plane to the graph at \((a,b,f(a,b))\).

  **Example.** Let \(f(x,y)=xy^3\) and \((a,b)=(2,1)\). The cut \(y=1\) is the line \(z=x\), with slope \(1\), and \(f_x=y^3\) equals \(1\) at the point. The cut \(x=2\) is the curve \(z=2y^3\), with slope \(6\) at \(y=1\), and \(f_y=3xy^2\) equals \(6\) at the point.
provenance: written-for-site
steps:
  - The plane y = b cuts the graph in z = f(x, b), and f_x(a, b) is the slope of that curve at x = a.
  - The plane x = a cuts the graph in z = f(a, y), and f_y(a, b) is the slope of that curve at y = b.
  - For f = x y^3 at (2, 1) the slopes are 1 and 6.
verification:
  checks:
    - expr: '(diff(x*y**3, x).subs({x: 2, y: 1}), diff(x*y**3, y).subs({x: 2, y: 1}))'
      expected: "(1, 6)"
    - expr: '(diff(x*1**3, x).subs(x, 2), diff(2*y**3, y).subs(y, 1))'
      expected: "(1, 6)"
:::


::: exercise
id: l5-partial-derivatives.handout-14-3-17
number: "14.3.17"
tier: standard
topics:
  - partial-derivatives
  - chain-rule
statement: |
  Let \(f(t)\) and \(g(t)\) be differentiable functions of one variable. Find the partial derivatives \(z_x\) and \(z_y\) for each of the following.

  - a) \(z=f(x)\,g(y)\)
  - b) \(z=f(xy)\)
  - c) \(z=f(x/y)\)
solution: |
  **a)** In \(z_x\), the factor \(g(y)\) is constant. In \(z_y\), the factor \(f(x)\) is constant. So
  \[
  \begin{aligned}
  z_x&=f'(x)\,g(y),\\
  z_y&=f(x)\,g'(y).
  \end{aligned}
  \]

  **b)** Let \(u=xy\), so \(z=f(u)\). The one-variable chain rule gives \(\frac{\partial z}{\partial x}=f'(u)\,u_x\). Here \(u_x=y\) and \(u_y=x\), so
  \[
  \begin{aligned}
  z_x&=y\,f'(xy),\\
  z_y&=x\,f'(xy).
  \end{aligned}
  \]

  **c)** Let \(u=x/y\) for \(y\neq 0\), so \(z=f(u)\). Here \(u_x=\frac1y\) and \(u_y=-\frac{x}{y^2}\), so
  \[
  \begin{aligned}
  z_x&=\frac{1}{y}\,f'\!\left(\frac{x}{y}\right),\\
  z_y&=-\frac{x}{y^2}\,f'\!\left(\frac{x}{y}\right).
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - In a) one factor is constant in each partial, so z_x = f'(x) g(y) and z_y = f(x) g'(y).
  - In b) the inner function xy has partials y and x, so z_x = y f'(xy) and z_y = x f'(xy).
  - In c) the inner function x/y has partials 1/y and -x/y^2.
verification:
  checks:
    - expr: 'diff(Function("f")(x)*Function("g")(y), x) - Derivative(Function("f")(x), x)*Function("g")(y)'
      expected: "0"
    - expr: 'diff(Function("f")(x)*Function("g")(y), y) - Function("f")(x)*Derivative(Function("g")(y), y)'
      expected: "0"
    - expr: 'simplify(diff(Function("f")(x*y), x) - y*Subs(Derivative(Function("f")(u), u), u, x*y))'
      expected: "0"
    - expr: 'simplify(diff(Function("f")(x*y), y) - x*Subs(Derivative(Function("f")(u), u), u, x*y))'
      expected: "0"
    - expr: 'simplify(diff(Function("f")(x/y), x) - Subs(Derivative(Function("f")(u), u), u, x/y)/y)'
      expected: "0"
    - expr: 'simplify(diff(Function("f")(x/y), y) + x/y**2*Subs(Derivative(Function("f")(u), u), u, x/y))'
      expected: "0"
:::
