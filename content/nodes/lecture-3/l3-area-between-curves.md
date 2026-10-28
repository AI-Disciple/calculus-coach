---
id: l3-area-between-curves
lecture: 3
order: 11
title: Area between curves
prerequisites: [l3-fundamental-theorem]
sources:
  - { source: handout, section: "9.1", page: 191 }
  - { source: midterm-app }
  - { source: midterm-2024, page: 1 }
  - { source: midterm-2025, page: 1 }
  - { source: midterm-2026-key, page: 4 }
examWeight: medium
status: reviewed
---

::: section
title: Area between two graphs
:::

::: formal-statement
kind: method
title: Area between two graphs
source: { source: handout, section: "9.1", page: 191 }
text: |
  Suppose:

  - \(f\) and \(g\) are continuous on \([a,b]\),
  - \(f(x)\ge g(x)\) for every \(x\) in \([a,b]\).

  The **area** of the region below the graph of \(f\) and above the graph of \(g\) is the area under \(f\) minus the area under \(g\),
  \[
  \begin{aligned}
  &\int_a^b f(x)\,dx-\int_a^b g(x)\,dx\\
  &=\int_a^b\bigl(f(x)-g(x)\bigr)\,dx.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  A thin vertical rectangle at \(x_i\) has width \(\Delta x\) and height \(f(x_i)-g(x_i)\). The integral is the limit of the sum of those rectangle areas. The height is still \(f(x_i)-g(x_i)\) when \(g(x_i)\) is negative, because the rectangle then runs from a negative lower value up to \(f(x_i)\).

  The same difference applies when the curves are written as \(x=p(y)\) and \(x=q(y)\). If \(p(y)\ge q(y)\) for \(c\le y\le d\), the area is
  \[
  \int_c^d\bigl(p(y)-q(y)\bigr)\,dy,
  \]
  the right graph minus the left graph.
:::

::: worked-example
title: One graph stays above the other
problem: |
  Find the area of the region below \(f(x)=-x^2+4x+3\) and above \(g(x)=-x^3+7x^2-10x+5\) for \(1\le x\le 2\).
solution: |
  The difference of the two functions is
  \[
  \begin{aligned}
  h(x)&=f(x)-g(x)\\
  &=x^3-8x^2+14x-2.
  \end{aligned}
  \]
  Its derivative is
  \[
  h'(x)=3x^2-16x+14,
  \]
  with roots \((8\pm\sqrt{22})/3\).

  1. Since \(16<22<25\), \(\sqrt{22}\) lies between \(4\) and \(5\).
  2. Then \(8-\sqrt{22}\) lies between \(3\) and \(4\), so the smaller root lies between \(1\) and \(4/3\), hence in \((1,2)\).
  3. The larger root is greater than \((8+4)/3=4\).
  4. The quadratic \(h'\) opens upwards, so \(h'\) is positive to the left of the smaller root and negative between the roots.

  Thus \(h\) increases on \([1,(8-\sqrt{22})/3]\) and decreases on \([(8-\sqrt{22})/3,2]\).

  The minimum of \(h\) on \([1,2]\) is the smaller endpoint value. Here
  \[
  h(1)=5,\qquad h(2)=2,
  \]
  so \(h(x)\ge 2\) on \([1,2]\). The graph of \(f\) stays above the graph of \(g\).

  An antiderivative of \(h\) is
  \[
  x^4/4-8x^3/3+7x^2-2x.
  \]
  Therefore
  \[
  \int_1^2 h(x)\,dx=\left[\frac{x^4}{4}-\frac{8x^3}{3}+7x^2-2x\right]_1^2.
  \]
  At \(x=2\) the antiderivative equals
  \[
  4-64/3+28-4=28-64/3=20/3.
  \]
  At \(x=1\) it equals
  \[
  1/4-8/3+7-2=21/4-8/3=31/12.
  \]
  The area is
  \[
  20/3-31/12=49/12.
  \]
  The same value is \(\int_1^2 f(x)\,dx-\int_1^2 g(x)\,dx\).
:::

::: trap
text: |
  Take \(f(x)=x\) and \(g(x)=2\) on \([0,1]\). On this interval \(g\) lies above \(f\). The integral of \(f-g\) is
  \[
  \begin{aligned}
  \int_0^1(x-2)\,dx&=\left[\frac{x^2}{2}-2x\right]_0^1\\
  &=\frac{1}{2}-2=-\frac{3}{2}.
  \end{aligned}
  \]
  The value \(-\frac{3}{2}\) is negative. Area uses the **upper graph minus the lower graph**. That integral is
  \[
  \begin{aligned}
  \int_0^1(2-x)\,dx&=\left[2x-\frac{x^2}{2}\right]_0^1\\
  &=2-\frac{1}{2}=\frac{3}{2}.
  \end{aligned}
  \]
:::

::: key-points
text: |
  - If \(f\) and \(g\) are continuous on \([a,b]\) and \(f(x)\ge g(x)\) there, the area between the graphs is \(\int_a^b\bigl(f(x)-g(x)\bigr)\,dx\), the upper graph minus the lower graph.
  - For curves \(x=p(y)\) and \(x=q(y)\) with \(p(y)\ge q(y)\) on \([c,d]\), the area is \(\int_c^d\bigl(p(y)-q(y)\bigr)\,dy\), the right graph minus the left graph.
  - The usual slip integrates \(f-g\) with \(g\) on top. For \(f(x)=x\) and \(g(x)=2\) on \([0,1]\) it gives \(-\frac{3}{2}\). The area is \(\int_0^1(2-x)\,dx=\frac{3}{2}\).
:::

::: concept-question
id: l3-area-between-curves.q-b6d8e345
question: |
  Area between the \(x\)-axis and \(y = \sqrt{x}\) for \(0 < x < 1\).
options:
  - text: |
      \(\frac{2}{3}\)
    correct: true
  - text: |
      \(\frac{1}{2}\)
  - text: |
      \(\frac{3}{2}\)
  - text: |
      \(1\)
explanation: |
  \[
  \begin{aligned}
  \int_{0}^{1} x^{1/2}\, dx&=\bigl[\frac{2}{3}x^{3/2}\bigr]_{0}^{1}\\
  &=\frac{2}{3}.
  \end{aligned}
  \]
:::

::: concept-question
id: l3-area-between-curves.q-981efff9
question: |
  Area between the curves \(y = x^{2}\) and \(x = y^{2}\) (first quadrant).
options:
  - text: |
      \(\frac{1}{3}\)
    correct: true
  - text: |
      \(\frac{1}{6}\)
  - text: |
      \(\frac{1}{2}\)
  - text: |
      \(\frac{2}{3}\)
explanation: |
  The curves meet at \((0,0)\) and \((1,1)\). On that interval \(\sqrt{x}\) lies above \(x^{2}\), so the area is
  \[
  \begin{aligned}
  \int_{0}^{1}(\sqrt{x} - x^{2})\, dx&=\frac{2}{3} - \frac{1}{3}\\
  &=\frac{1}{3}.
  \end{aligned}
  \]
:::

::: exercise
id: l3-area-between-curves.s16-1
tier: basic
topics: [area]
number: "Integral bank, Ex. 16.1"
statement: |
  Compute the area between the \(x\)-axis and \(y=\sqrt{x}\) for \(0<x<1\).
solution: |
  \(\sqrt{x}=x^{1/2}\) and \(\sqrt{x}\ge 0\), so the area is the integral of \(\sqrt{x}\).

  \[
  \int_0^1 x^{1/2}\,dx=\left[\frac{2}{3}x^{3/2}\right]_0^1=\frac{2}{3}.
  \]

  On \([0,1]\), \(x\le\sqrt{x}\le 1\), so the area lies between \(\frac{1}{2}\) and \(1\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(sqrt(x), (x, 0, 1))
      expected: "2/3"
:::

::: section
title: Graphs that cross
:::

::: formal-statement
kind: method
title: Graphs that cross
source: { source: handout, section: "9.1", page: 191 }
text: |
  Suppose the graphs of \(f\) and \(g\) cross inside \([a,b]\).

  1. **Split** \([a,b]\) at each crossing.
  2. On each resulting piece, integrate the upper function minus the lower function.

  The area between the graphs is the sum of those integrals.
:::

::: plain-explanation
text: |
  A **crossing** changes which graph is on top. On a piece where \(g\) is above \(f\), the height of a vertical strip is \(g(x)-f(x)\). Adding the piece integrals counts every strip with a positive height. Area is a positive quantity, so the pieces are added.
:::

::: worked-example
title: The graphs cross inside the interval
problem: |
  Find the area between \(f(x)=-x^2+4x\) and \(g(x)=x^2-6x+5\) for \(0\le x\le 1\).
solution: |
  ### The crossing point

  The graphs meet where \(-x^2+4x=x^2-6x+5\), so
  \[
  2x^2-10x+5=0.
  \]
  The roots are \((5\pm\sqrt{15})/2\).

  1. Since \(9<15<16\), \(\sqrt{15}\) lies between \(3\) and \(4\).
  2. Then \(5-\sqrt{15}\) lies between \(1\) and \(2\), so \(a=(5-\sqrt{15})/2\) lies in \((1/2,1)\).
  3. The other root is greater than \((5+3)/2=4\).

  On \([0,1]\) the graphs cross once, at \(x=a\).

  ### The area as an integral

  Let \(u(x)=f(x)-g(x)=-2x^2+10x-5\). Then
  \[
  u(0)=-5,\qquad u(1)=3,
  \]
  so \(g\) lies above \(f\) on \([0,a]\) and \(f\) lies above \(g\) on \([a,1]\). The area is
  \[
  \begin{aligned}
  &\int_0^a\bigl(g(x)-f(x)\bigr)\,dx+\int_a^1\bigl(f(x)-g(x)\bigr)\,dx\\
  &=\int_0^a\bigl(-u(x)\bigr)\,dx+\int_a^1 u(x)\,dx.
  \end{aligned}
  \]
  An antiderivative of \(u\) is
  \[
  U(x)=-2x^3/3+5x^2-5x.
  \]
  The area equals \(U(1)-U(0)-2U(a)\). Here \(U(0)=0\) and \(U(1)=-2/3\), so the area equals \(-2/3-2U(a)\).

  ### The value at the crossing

  The crossing satisfies \(2a^2-10a+5=0\), hence \(a^2=5a-5/2\). Substitute that relation into \(U(a)\):
  \[
  \begin{aligned}
  U(a)&=a\left(-\frac{2a^2}{3}+5a-5\right)\\
  &=a\left(-\frac{10a}{3}+\frac{5}{3}+5a-5\right)\\
  &=a\left(\frac{5a}{3}-\frac{10}{3}\right)\\
  &=\frac{5a}{3}(a-2).
  \end{aligned}
  \]
  Now \(a-2=(1-\sqrt{15})/2\). The product \((5-\sqrt{15})(1-\sqrt{15})\) equals \(20-6\sqrt{15}\), so
  \[
  \begin{aligned}
  U(a)&=\frac{5}{3}\cdot\frac{5-\sqrt{15}}{2}\cdot\frac{1-\sqrt{15}}{2}\\
  &=\frac{5(20-6\sqrt{15})}{12}\\
  &=\frac{100-30\sqrt{15}}{12}\\
  &=\frac{50-15\sqrt{15}}{6}.
  \end{aligned}
  \]
  Twice \(U(a)\) is \((50-15\sqrt{15})/3\). The area is
  \[
  \begin{aligned}
  &-\frac{2}{3}-\frac{50-15\sqrt{15}}{3}\\
  &=\frac{-52+15\sqrt{15}}{3}\\
  &=-\frac{52}{3}+5\sqrt{15}.
  \end{aligned}
  \]
:::

::: guided-example
title: Sine and cosine cross once
problem: |
  Find the area between \(y=\sin x\) and \(y=\cos x\) on \([0,\pi]\).
steps:
  - |
    Where \(\cos x\neq 0\), the equation \(\sin x=\cos x\) is \(\tan x=1\).

    - On \([0,\pi/2)\), \(\tan x\) increases from \(0\) to \(+\infty\), so \(\tan x=1\) only at \(x=\pi/4\).
    - On \((\pi/2,\pi]\), \(\tan x\) is negative.
    - At \(x=\pi/2\), \(\cos x=0\) and \(\sin x=1\), so the graphs do not meet there.
  - |
    - At \(x=0\), \(\cos 0=1\) and \(\sin 0=0\), so \(\cos x\) lies above \(\sin x\) on \([0,\pi/4]\).
    - At \(x=\pi/2\), \(\sin(\pi/2)=1\) and \(\cos(\pi/2)=0\), so \(\sin x\) lies above \(\cos x\) on \([\pi/4,\pi]\).
  - |
    The area is
    \[
    \begin{aligned}
    &\int_0^{\pi/4}(\cos x-\sin x)\,dx\\
    &+\int_{\pi/4}^{\pi}(\sin x-\cos x)\,dx.
    \end{aligned}
    \]
  - |
    An antiderivative of \(\cos x-\sin x\) is \(\sin x+\cos x\). The first integral equals
    \[
    \begin{aligned}
    &\bigl(\sin(\pi/4)+\cos(\pi/4)\bigr)\\
    &\quad-\bigl(\sin 0+\cos 0\bigr)\\
    &=\sqrt{2}-1.
    \end{aligned}
    \]
  - |
    An antiderivative of \(\sin x-\cos x\) is \(-\cos x-\sin x\). The second integral equals
    \[
    \begin{aligned}
    &\bigl(-\cos\pi-\sin\pi\bigr)\\
    &-\bigl(-\cos(\pi/4)-\sin(\pi/4)\bigr)\\
    &=1+\sqrt{2}.
    \end{aligned}
    \]
  - |
    The area is
    \[
    (\sqrt{2}-1)+(1+\sqrt{2})=2\sqrt{2}.
    \]
:::

::: trap
text: |
  The lines \(y=x\) and \(y=1-x\) meet at \(x=\frac{1}{2}\).

  - On \([0,\frac{1}{2}]\) the line \(y=1-x\) is above \(y=x\).
  - On \([\frac{1}{2},1]\) the line \(y=x\) is above \(y=1-x\).

  The single integral of \(x-(1-x)\) over \([0,1]\) is
  \[
  \int_0^1(2x-1)\,dx=\left[x^2-x\right]_0^1=0.
  \]
  The first piece has area
  \[
  \begin{aligned}
  \int_0^{1/2}(1-2x)\,dx&=\left[x-x^2\right]_0^{1/2}\\
  &=\frac{1}{2}-\frac{1}{4}=\frac{1}{4}.
  \end{aligned}
  \]
  The second piece has area
  \[
  \begin{aligned}
  \int_{1/2}^1(2x-1)\,dx&=\left[x^2-x\right]_{1/2}^1\\
  &=0-\left(\frac{1}{4}-\frac{1}{2}\right)\\
  &=0-\left(-\frac{1}{4}\right)=\frac{1}{4}.
  \end{aligned}
  \]
  The area of the region is \(\frac{1}{4}+\frac{1}{4}=\frac{1}{2}\).
:::

::: key-points
text: |
  - If the graphs of \(f\) and \(g\) cross inside \([a,b]\), split \([a,b]\) at each crossing. On each piece integrate the upper function minus the lower function, and add the integrals.
  - The usual slip uses one integral of \(f-g\) over the whole interval. For \(y=x\) and \(y=1-x\) on \([0,1]\) it gives \(0\). The two pieces each have area \(\frac{1}{4}\), so the area is \(\frac{1}{2}\).
:::

::: concept-question
id: l3-area-between-curves.q-ae3efb11
question: |
  Area of the region in the first quadrant lying below both \(y = x\) and \(y = \frac{1}{1 + x^{2}}\).
options:
  - text: |
      \(\frac{x_{0}^{2}}{2} + \frac{\pi}{2} - \arctan(x_{0})\), where \(x_{0}^{3} + x_{0} = 1\) (approximately \(1.205\))
    correct: true
  - text: |
      \(\frac{\pi}{4}\)
  - text: |
      \(\frac{1}{2}\)
  - text: |
      Divergent
explanation: |
  The curves meet where \(x = \frac{1}{1 + x^{2}}\), which is \(x^{3} + x = 1\).

  - For \(0 \leq x \leq x_{0}\) the lower graph is \(y = x\).
  - For \(x \geq x_{0}\) the lower graph is \(y = \frac{1}{1 + x^{2}}\).

  The area is
  \[
  \begin{aligned}
  &\int_{0}^{x_{0}} x\, dx + \int_{x_{0}}^{\infty} \frac{1}{1 + x^{2}}\, dx\\
  &=\frac{x_{0}^{2}}{2} + \frac{\pi}{2} - \arctan x_{0}.
  \end{aligned}
  \]
:::

::: exercise
id: l3-area-between-curves.j1
tier: basic
topics: [area]
statement: |
  Find the area between \(y=x\) and \(y=x^2\) for \(0\le x\le 1\).
solution: |
  On \([0,1]\), \(x\ge x^2\), so the area is the integral of the upper curve minus the lower curve.

  \[
  \begin{aligned}
  \int_0^1(x-x^2)\,dx&=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1\\
  &=\frac{1}{2}-\frac{1}{3}=\frac{1}{6}.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x - x**2, (x, 0, 1))
      expected: "1/6"
:::

::: sheet-item
id: l3-area-between-curves.sheet-upper-lower
category: formula
text: |
  If \(f(x)\ge g(x)\) on \([a,b]\), the area between the graphs is \(\int_a^b\bigl(f(x)-g(x)\bigr)\,dx\).
:::

::: sheet-item
id: l3-area-between-curves.sheet-split
category: formula
text: |
  If the graphs cross, split the interval at each crossing and add the integrals of the upper function minus the lower function.
:::

::: sheet-item
id: l3-area-between-curves.sheet-signed
category: trap
text: |
  If \(g\) stays above \(f\) on \([a,b]\), then \(\int_a^b\bigl(f(x)-g(x)\bigr)\,dx\) equals the negative of the area. The area is \(\int_a^b\bigl(g(x)-f(x)\bigr)\,dx\).
:::

::: sheet-item
id: l3-area-between-curves.sheet-horizontal
category: recognition
text: |
  When the curves are given as \(x\) in terms of \(y\), integrate the right curve minus the left curve with respect to \(y\).
:::

::: sheet-item
id: l3-area-between-curves.sheet-absolute
category: formula
text: |
  The area between \(f\) and \(g\) on \([a,b]\) is \(\int_a^b\bigl|f(x)-g(x)\bigr|\,dx\).
:::

::: exercise
id: l3-area-between-curves.s16-2
tier: standard
topics: [area, improper-integrals]
number: "Integral bank, Ex. 16.2"
statement: |
  Compute the area between the \(x\)-axis and \(y=-\ln x\) for \(0<x<1\).
solution: |
  On \((0,1)\), \(-\ln x>0\), so the area is \(\int_0^1(-\ln x)\,dx\). The integral is improper at \(0\), where \(-\ln x\) tends to \(+\infty\).

  Differentiate \(x\ln x\): \((x\ln x)'=\ln x+1\). The function \(G(x)=x-x\ln x\) then satisfies \(G'(x)=-\ln x\). For \(0<\varepsilon<1\),

  \[
  \begin{aligned}
  \int_\varepsilon^1(-\ln x)\,dx&=G(1)-G(\varepsilon)\\
  &=1-\varepsilon+\varepsilon\ln\varepsilon.
  \end{aligned}
  \]

  As \(\varepsilon\to 0^+\), both \(\varepsilon\) and \(\varepsilon\ln\varepsilon\) tend to \(0\). The area equals \(1\).
provenance: written-for-site
steps:
  - An antiderivative of \(-\ln x\) is \(x-x\ln x\).
  - The integral from \(\varepsilon\) to \(1\) equals \(1-\varepsilon+\varepsilon\ln\varepsilon\).
  - The limit as \(\varepsilon\to 0^+\) equals \(1\).
verification:
  checks:
    - expr: integrate(-log(x), (x, 0, 1))
      expected: "1"
:::

::: exercise
id: l3-area-between-curves.s16-3
tier: standard
topics: [area, improper-integrals]
number: "Integral bank, Ex. 16.3"
statement: |
  Compute the area \(A(L)\) of \(\{(x,y): 1<x<L,\ 0<y<1/x^2\}\), for \(L>1\). What happens when \(L\to\infty\)?
solution: |
  An antiderivative of \(x^{-2}\) is \(-x^{-1}\).

  \[
  A(L)=\int_1^L x^{-2}\,dx=\left[-\frac{1}{x}\right]_1^L=1-\frac{1}{L}.
  \]

  As \(L\to\infty\), \(A(L)\) tends to \(1\). The unbounded region \(\{x>1,\ 0<y<1/x^2\}\) has finite area \(1\), which is the convergent integral \(\int_1^\infty x^{-2}\,dx=1\).

  For the integrand \(1/x\), \(\int_1^L\frac{1}{x}\,dx=\ln L\), and \(\ln L\) tends to infinity.
provenance: written-for-site
steps:
  - An antiderivative of \(x^{-2}\) is \(-x^{-1}\).
  - \(A(L)=1-\frac{1}{L}\).
  - As \(L\to\infty\), the area tends to \(1\).
verification:
  checks:
    - expr: integrate(x**(-2), (x, 1, L))
      expected: "1 - 1/L"
    - expr: integrate(x**(-2), (x, 1, oo))
      expected: "1"
:::

::: exercise
id: l3-area-between-curves.j2
tier: standard
topics: [area]
statement: |
  Find the area of the region enclosed by \(y=x^2\) and \(y=2-x^2\).
solution: |
  The curves meet where \(x^2=2-x^2\), so \(x^2=1\) and \(x=\pm 1\). On \([-1,1]\), \(2-x^2\ge x^2\).

  \[
  \begin{aligned}
  &\int_{-1}^{1}\big((2-x^2)-x^2\big)\,dx\\
  &=\int_{-1}^{1}(2-2x^2)\,dx\\
  &=2\int_0^1(2-2x^2)\,dx\\
  &=2\left[2x-\frac{2}{3}x^3\right]_0^1\\
  &=2\left(2-\frac{2}{3}\right)\\
  &=\frac{8}{3}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The curves meet at \(x=\pm 1\).
  - On \([-1,1]\), the upper curve is \(2-x^2\).
  - The integral of \(2-2x^2\) equals \(\frac{8}{3}\).
verification:
  checks:
    - expr: integrate((2 - x**2) - x**2, (x, -1, 1))
      expected: "8/3"
:::

::: exercise
id: l3-area-between-curves.j3
tier: standard
topics: [area]
statement: |
  Find the area between the curve \(y=x^3-x\) and the \(x\)-axis for \(-1\le x\le 1\).
solution: |
  The integrand \(x^3-x\) is nonnegative on \([-1,0]\) and nonpositive on \([0,1]\). The signed integral \(\int_{-1}^{1}(x^3-x)\,dx\) equals \(0\), because the integrand is odd. The area is the integral of the absolute value.

  \[
  \begin{aligned}
  &\int_{-1}^{1}|x^3-x|\,dx\\
  &=2\int_0^1(x-x^3)\,dx\\
  &=2\left[\frac{x^2}{2}-\frac{x^4}{4}\right]_0^1\\
  &=2\left(\frac{1}{2}-\frac{1}{4}\right)\\
  &=\frac{1}{2}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The curve is nonnegative on \([-1,0]\) and nonpositive on \([0,1]\).
  - The area is twice the integral of \(x-x^3\) from \(0\) to \(1\).
  - That integral equals \(\frac{1}{4}\), so the area is \(\frac{1}{2}\).
verification:
  checks:
    - expr: integrate(Abs(x**3 - x), (x, -1, 1))
      expected: "1/2"
:::

::: exercise
id: l3-area-between-curves.j4
tier: basic
topics: [area, average-value]
statement: |
  Find the average value of \(\sin x\) on \([0,\pi]\).
solution: |
  The **average value** of a function on \([a,b]\) is \(\frac{1}{b-a}\) times its integral. Here

  \[
  \begin{aligned}
  &\frac{1}{\pi}\int_0^\pi\sin x\,dx\\
  &=\frac{1}{\pi}\big[-\cos x\big]_0^\pi\\
  &=\frac{1}{\pi}\big(-\cos\pi-(-\cos 0)\big)\\
  &=\frac{2}{\pi}.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: (1/pi)*integrate(sin(x), (x, 0, pi))
      expected: "2/pi"
:::

::: exercise
id: l3-area-between-curves.j5
tier: standard
topics: [area]
statement: |
  Find the area between \(y=e^x\), \(y=e^{-x}\) and the line \(x=1\).
solution: |
  The curves meet where \(e^x=e^{-x}\), so \(x=0\). For \(x>0\), \(e^x>e^{-x}\), and the line \(x=1\) closes the region on the right.

  \[
  \begin{aligned}
  &\int_0^1(e^x-e^{-x})\,dx\\
  &=\big[e^x+e^{-x}\big]_0^1\\
  &=\left(e+\frac{1}{e}\right)-2\\
  &=e+\frac{1}{e}-2.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The curves meet at \(x=0\), and \(e^x>e^{-x}\) for \(x>0\).
  - An antiderivative of \(e^x-e^{-x}\) is \(e^x+e^{-x}\).
  - Evaluating from \(0\) to \(1\) gives \(e+e^{-1}-2\).
verification:
  checks:
    - expr: integrate(exp(x) - exp(-x), (x, 0, 1))
      expected: "exp(1) + exp(-1) - 2"
:::

::: exercise
id: l3-area-between-curves.j6
tier: standard
topics: [area, improper-integrals]
statement: |
  Is the area of \(\{x\ge 1,\ 0\le y\le 1/x\}\) finite?
solution: |
  The height \(1/x\) is nonnegative for \(x\ge 1\), so the area is \(\int_1^\infty\frac{1}{x}\,dx\).

  \[
  \int_1^R\frac{1}{x}\,dx=\ln R.
  \]

  As \(R\to\infty\), \(\ln R\) tends to infinity. The area is infinite.

  The region under \(1/x^2\) on the same half-line has area \(1\).
provenance: written-for-site
steps:
  - The area is the integral of \(\frac{1}{x}\) from \(1\) to infinity.
  - The integral from \(1\) to \(R\) equals \(\ln R\).
  - \(\ln R\) tends to infinity, so the area is infinite.
verification:
  checkable: false
  reason: The area is infinite, and there is no finite value to compare.
:::

::: exercise
id: l3-area-between-curves.j7
tier: exam
topics: [area]
statement: |
  Find the area between the \(x\)-axis and \(y=\ln x\) for \(\frac{1}{e}\le x\le e\).
solution: |
  \(\ln x<0\) on \([\frac{1}{e},1)\) and \(\ln x>0\) on \((1,e]\), so the area is

  \[
  \int_{1/e}^1(-\ln x)\,dx+\int_1^e\ln x\,dx.
  \]

  An antiderivative of \(\ln x\) is \(x\ln x-x\), and an antiderivative of \(-\ln x\) is \(x-x\ln x\). The first piece evaluates as

  \[
  \begin{aligned}
  &\big[x-x\ln x\big]_{1/e}^1\\
  &=1-\left(\frac{1}{e}-\frac{1}{e}\ln\frac{1}{e}\right)\\
  &=1-\frac{2}{e},
  \end{aligned}
  \]

  because \(\ln(1/e)=-1\). The second piece evaluates as

  \[
  \big[x\ln x-x\big]_1^e=(e-e)-(0-1)=1.
  \]

  The area is \(\left(1-\frac{2}{e}\right)+1=2-\frac{2}{e}\).
provenance: written-for-site
steps:
  - On \([\frac{1}{e},1]\) the logarithm is negative, so use \(-\ln x\).
  - An antiderivative of \(\ln x\) is \(x\ln x-x\).
  - The two pieces equal \(1-\frac{2}{e}\) and \(1\).
  - The area is \(2-\frac{2}{e}\).
verification:
  checks:
    - expr: integrate(-log(x), (x, exp(-1), 1)) + integrate(log(x), (x, 1, exp(1)))
      expected: "2 - 2*exp(-1)"
:::

::: exercise
id: l3-area-between-curves.midterm-2024-ex4.4
statement: |
  Compute the area of the region above the curve \(y = x^2\) and below the curve \(x = y^2\).
tier: exam
topics:
  - area-between-curves
pastExam:
  year: 2024
  paper: Midterm
  question: "4.4"
  points: 1
solution: |
  The curves meet where \(x = (x^2)^2\), so \(x^4 - x = 0\), hence \(x = 0\) or \(x = 1\). Both graphs lie in \(y \ge 0\) on that interval, and \(x = y^2\) is the upper branch \(y = \sqrt{x}\). The bounded region is \(0 \le x \le 1\) with \(x^2 \le y \le \sqrt{x}\). Its area is
  \[
  \begin{aligned}
  &\int_0^1 \bigl(\sqrt{x} - x^2\bigr)\, dx\\
  &= \Bigl[\tfrac{2}{3} x^{3/2} - \tfrac{1}{3} x^3\Bigr]_0^1\\
  &= \tfrac{2}{3} - \tfrac{1}{3} = \tfrac{1}{3}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Intersection points \((0, 0)\) and \((1, 1)\), with \(\sqrt{x}\) above \(x^2\).
  - Area \(1/3\).
verification:
  checks:
    - expr: integrate(sqrt(x) - x**2, (x, 0, 1))
      expected: Rational(1,3)
:::

::: exercise
id: l3-area-between-curves.midterm-2025-ex5.3
number: "5.3"
statement: |
  Compute the area of the region in the first quadrant between the curves \(y=x-\dfrac{1}{x^2+1}\) and \(y=x\).
tier: exam
solution: |
  For \(x\ge 0\) the upper curve is \(y=x\) and the lower curve is \(y=x-1/(x^2+1)\). The vertical gap is \(1/(x^2+1)\). The two graphs do not meet. The first-quadrant region between them has area
  \[
  A=\int_0^{\infty}\frac{1}{1+x^2}\,dx=\frac{\pi}{2}.
  \]
provenance: official-key
steps:
  - Gap \(1/(1+x^2)\) on \(x\ge 0\).
  - The improper integral \(\pi/2\).
verification:
  checks:
    - expr: integrate(1/(1 + x**2), (x, 0, oo))
      expected: pi/2
discrepancy: |
  The official key gives \(A=x_0^2/2+\pi/2-\arctan(x_0)\) where \(x_0\) solves \(x_0=1/(1+x_0^2)\), then approximates \(x_0\) by Newton on \(x+x^3-1\) and concludes \(A\simeq 9/32+\pi/2-\arctan(3/4)\). The verified value for the printed curves is \(\pi/2\). In the Newton step the key uses the numerator \(-\frac14+\frac{9}{16}\), which is the value of \(x+x^2-1\) at \(x=3/4\).
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "5.3"
  points: 1
:::

::: exercise
id: l3-area-between-curves.midterm-2026-ex5.3
number: "5.3"
statement: |
  Compute the area of the region between the curves \(y=\sin x\) and \(y=x\) for \(x\in[0,\pi/2]\).
tier: exam
topics:
  - area-between-curves
pastExam:
  year: 2026
  paper: Midterm
  question: "5.3"
  points: 1
solution: |
  On \([0,\pi/2]\) one has \(x\ge\sin x\), so the area is
  \[
  \begin{aligned}
  A&=\int_0^{\pi/2}(x-\sin x)\,dx\\
  &= \Bigl[\frac{x^2}{2}+\cos x\Bigr]_0^{\pi/2}\\
  &= \frac{\pi^2}{8}-1.
  \end{aligned}
  \]
provenance: official-key
steps:
  - Integrand \(x-\sin x\) on \([0,\pi/2]\) and evaluation, value \(\pi^2/8-1\).
verification:
  checks:
    - expr: integrate(x - sin(x), (x, 0, pi/2))
      expected: pi**2/8 - 1
:::

::: exercise
id: l3-area-between-curves.midterm-predicted-a-ex5.5
number: "5.5"
statement: |
  Compute the area of the region enclosed between \(y = x^2\) and \(y = 2x\).
tier: exam
topics:
  - area-between-curves
solution: |
  The curves meet when \(x^2 = 2x\), so \(x = 0\) and \(x = 2\). On \([0, 2]\) the line lies above the parabola. The area is
  \[
  \begin{aligned}
  &\int_0^2 (2x - x^2)\, dx\\
  &= \Bigl[x^2 - \frac{x^3}{3}\Bigr]_0^2\\
  &= 4 - \frac{8}{3} = \frac{4}{3}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Find the intersection points 0 and 2.
  - Integrate 2x - x^2 to get 4/3.
verification:
  checks:
    - expr: integrate(2*x - x**2, (x, 0, 2))
      expected: 4/3
:::

::: exercise
id: l3-area-between-curves.ex-9-1-1
number: "9.1.1"
tier: standard
topics: [area]
statement: |
  Find the area bounded by the curves \(y=x^4-x^2\) and \(y=x^2\), the part to the right of the \(y\)-axis.
solution: |
  The curves meet where \(x^4-x^2=x^2\), so \(x^2(x^2-2)=0\). The solutions are \(x=0\) and \(x=\pm\sqrt{2}\). To the right of the \(y\)-axis the graphs meet at \(x=0\) and \(x=\sqrt{2}\). For \(x>\sqrt{2}\) they do not meet again, so that side is unbounded. The bounded region is \(0\le x\le\sqrt{2}\).

  On that interval the difference \(x^2-(x^4-x^2)\) equals \(x^2(2-x^2)\), which is nonnegative. The upper curve is \(y=x^2\). At the upper limit, \((\sqrt{2})^3=2\sqrt{2}\) and \((\sqrt{2})^5=4\sqrt{2}\). The area is
  \[
  \begin{aligned}
  &\int_0^{\sqrt{2}}(2x^2-x^4)\,dx\\
  &=\left[\frac{2x^3}{3}-\frac{x^5}{5}\right]_0^{\sqrt{2}}\\
  &=\frac{2\cdot 2\sqrt{2}}{3}-\frac{4\sqrt{2}}{5}\\
  &=\frac{4\sqrt{2}}{3}-\frac{4\sqrt{2}}{5}\\
  &=\frac{8\sqrt{2}}{15}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The bounded region to the right of the \(y\)-axis is \(0\le x\le\sqrt{2}\).
  - On that interval \(y=x^2\) is the upper curve.
  - The integral equals \(\frac{8\sqrt{2}}{15}\).
verification:
  checks:
    - expr: integrate(2*x**2 - x**4, (x, 0, sqrt(2)))
      expected: 8*sqrt(2)/15
:::

::: exercise
id: l3-area-between-curves.ex-9-1-2
number: "9.1.2"
tier: basic
topics: [area]
statement: |
  Find the area bounded by the curves \(x=y^3\) and \(x=y^2\).
solution: |
  The curves meet where \(y^3=y^2\), so \(y^2(y-1)=0\). The solutions are \(y=0\) and \(y=1\). Those are the only intersection points, so the bounded region is \(0\le y\le 1\).

  On \((0,1)\) one has \(y^2>y^3\). The right curve is \(x=y^2\) and the left curve is \(x=y^3\). The area is
  \[
  \begin{aligned}
  \int_0^1(y^2-y^3)\,dy&=\left[\frac{y^3}{3}-\frac{y^4}{4}\right]_0^1\\
  &=\frac{1}{3}-\frac{1}{4}=\frac{1}{12}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The curves meet at \(y=0\) and \(y=1\).
  - On that interval \(x=y^2\) is to the right of \(x=y^3\).
  - The integral equals \(\frac{1}{12}\).
verification:
  checks:
    - expr: integrate(y**2 - y**3, (y, 0, 1))
      expected: 1/12
:::

::: exercise
id: l3-area-between-curves.ex-9-1-3
number: "9.1.3"
tier: standard
topics: [area]
statement: |
  Find the area bounded by the curves \(x=1-y^2\) and \(y=-x-1\).
solution: |
  The line \(y=-x-1\) is the graph \(x=-y-1\). The curves meet where \(1-y^2=-y-1\), so \(y^2-y-2=0\), hence \((y-2)(y+1)=0\). The solutions are \(y=-1\) and \(y=2\).

  The horizontal gap is \((1-y^2)-(-y-1)=2+y-y^2=-(y-2)(y+1)\). For \(-1<y<2\) the factor \(y-2\) is negative and \(y+1\) is positive, so the gap is positive. The parabola lies to the right of the line. The area is
  \[
  \int_{-1}^{2}(2+y-y^2)\,dy=\left[2y+\frac{y^2}{2}-\frac{y^3}{3}\right]_{-1}^{2}.
  \]
  At \(y=2\) the antiderivative equals \(4+2-8/3=10/3\). At \(y=-1\) it equals \(-2+1/2+1/3=-7/6\). The area is \(10/3-(-7/6)=9/2\).
provenance: handout-answer
steps:
  - The curves meet at \(y=-1\) and \(y=2\).
  - On that interval \(x=1-y^2\) is to the right of \(x=-y-1\).
  - The integral equals \(\frac{9}{2}\).
verification:
  checks:
    - expr: integrate((1 - y**2) - (-y - 1), (y, -1, 2))
      expected: 9/2
:::

::: exercise
id: l3-area-between-curves.ex-9-1-4
number: "9.1.4"
tier: standard
topics: [area]
statement: |
  Find the area bounded by the curves \(x=3y-y^2\) and \(x+y=3\).
solution: |
  The line \(x+y=3\) is the graph \(x=3-y\). The curves meet where \(3y-y^2=3-y\), so \(y^2-4y+3=0\), hence \((y-1)(y-3)=0\). The solutions are \(y=1\) and \(y=3\).

  The horizontal gap is \((3y-y^2)-(3-y)=-y^2+4y-3=-(y-1)(y-3)\). For \(1<y<3\), the factor \(y-1\) is positive and \(y-3\) is negative, so the gap is positive. The parabola lies to the right of the line. The area is
  \[
  \begin{aligned}
  &\int_1^3(-y^2+4y-3)\,dy\\
  &=\left[-\frac{y^3}{3}+2y^2-3y\right]_1^3.
  \end{aligned}
  \]
  At \(y=3\) the antiderivative equals \(0\). At \(y=1\) it equals \(-1/3+2-3=-4/3\). The area is \(0-(-4/3)=4/3\).
provenance: handout-answer
steps:
  - The curves meet at \(y=1\) and \(y=3\).
  - On that interval \(x=3y-y^2\) is to the right of \(x=3-y\).
  - The integral equals \(\frac{4}{3}\).
verification:
  checks:
    - expr: integrate((3*y - y**2) - (3 - y), (y, 1, 3))
      expected: 4/3
:::

::: exercise
id: l3-area-between-curves.ex-9-1-5
number: "9.1.5"
tier: standard
topics: [area]
statement: |
  Find the area bounded by the curves \(y=\cos(\pi x/2)\) and \(y=1-x^2\) in the first quadrant.
solution: |
  At \(x=0\) both curves equal \(1\). At \(x=1\) both equal \(0\). For \(x>1\) the value \(1-x^2\) is negative, so that graph has left the first quadrant. The region in the first quadrant is \(0\le x\le 1\).

  Let \(r(x)=1-x^2-\cos(\pi x/2)\). Then
  \[
  \begin{aligned}
  r(0)&=r(1)=0,\\
  r'(x)&=-2x+(\pi/2)\sin(\pi x/2).
  \end{aligned}
  \]
  Also \(r'(0)=0\) and \(r'(1)=\pi/2-2<0\), since \(\pi<4\). The derivative of \(r'\) is
  \[
  r''(x)=-2+(\pi^2/4)\cos(\pi x/2).
  \]
  Its derivative is \(-(\pi^3/8)\sin(\pi x/2)\), which is negative on \((0,1]\), so \(r''\) is strictly decreasing on \([0,1]\). Now \(r''(0)=-2+\pi^2/4>0\), because \(\pi>3\) gives \(\pi^2/4>9/4>2\), and \(r''(1)=-2<0\). Thus \(r''\) has one zero in \((0,1)\), so \(r'\) increases from \(0\) and then decreases through a negative value. Hence \(r'\) has one zero \(c\) in \((0,1)\). The function \(r\) increases on \([0,c]\) and decreases on \([c,1]\). With \(r(0)=r(1)=0\), one has \(r(x)\ge 0\) on \([0,1]\). The upper curve is \(y=1-x^2\).

  The area is
  \[
  \begin{aligned}
  &\int_0^1\left(1-x^2-\cos\frac{\pi x}{2}\right)\,dx\\
  &=\left[x-\frac{x^3}{3}-\frac{2}{\pi}\sin\frac{\pi x}{2}\right]_0^1\\
  &=1-\frac{1}{3}-\frac{2}{\pi}=\frac{2}{3}-\frac{2}{\pi}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - In the first quadrant the curves meet at \(x=0\) and \(x=1\).
  - On \([0,1]\) the upper curve is \(y=1-x^2\).
  - The integral equals \(\frac{2}{3}-\frac{2}{\pi}\).
verification:
  checks:
    - expr: integrate((1 - x**2) - cos(pi*x/2), (x, 0, 1))
      expected: 2/3 - 2/pi
:::

::: exercise
id: l3-area-between-curves.ex-9-1-6
number: "9.1.6"
tier: exam
topics: [area]
statement: |
  Find the area bounded by the curves \(y=\sin(\pi x/3)\) and \(y=x\) in the first quadrant.
solution: |
  The curves meet where \(\sin(\pi x/3)=x\). At \(x=0\) both values are \(0\). At \(x=1/2\), \(\sin(\pi/6)=1/2\), so they meet again at \(x=1/2\).

  Let \(k(x)=\sin(\pi x/3)-x\). Then
  \[
  \begin{aligned}
  k'(x)&=(\pi/3)\cos(\pi x/3)-1,\\
  k'(0)&=\pi/3-1>0,
  \end{aligned}
  \]
  since \(\pi>3\). For \(x>1\), \(\sin(\pi x/3)\le 1<x\), so \(k(x)<0\). On \([1/2,1]\), \(\cos(\pi x/3)\le\cos(\pi/6)=\sqrt{3}/2\), hence \(k'(x)\le\pi\sqrt{3}/6-1\). That upper bound is negative: \(\sqrt{3}<7/4\) because \((7/4)^2=49/16>3\), and \(\pi<22/7\), so \(\pi\sqrt{3}<(22/7)\cdot(7/4)=11/2<6\).   Thus \(k'\) is negative on \([1/2,1]\). Starting from \(k(1/2)=0\), one has \(k(x)<0\) on \((1/2,1]\), and \(k(x)<0\) for \(x>1\).

  On \([0,1/2]\), \(\cos(\pi x/3)\) decreases from \(1\) to \(\sqrt{3}/2\). The equation \(k'(x)=0\) is \(\cos(\pi x/3)=3/\pi\). The bound \(\pi<22/7\) gives \(\pi^2<484/49\), and \(484<12\cdot 49=588\), so \(\pi^2<12\). Together with \(\pi>3\), this puts \(3/\pi\) strictly between \(\sqrt{3}/2\) and \(1\). Cosine takes the value \(3/\pi\) once on \([0,1/2]\), so \(k'\) has one zero there. Thus \(k\) increases and then decreases on \([0,1/2]\). With \(k(0)=k(1/2)=0\), one has \(k(x)\ge 0\) on \([0,1/2]\). The sine lies above the line, and the graphs meet in the first quadrant only at the endpoints of this interval. The area is
  \[
  \begin{aligned}
  &\int_0^{1/2}\left(\sin\frac{\pi x}{3}-x\right)\,dx\\
  &=\left[-\frac{3}{\pi}\cos\frac{\pi x}{3}-\frac{x^2}{2}\right]_0^{1/2}.
  \end{aligned}
  \]
  At \(x=1/2\) the antiderivative equals \(-(3/\pi)(\sqrt{3}/2)-1/8\). At \(x=0\) it equals \(-3/\pi\). The area is
  \[
  -\frac{3\sqrt{3}}{2\pi}-\frac{1}{8}-\left(-\frac{3}{\pi}\right)=\frac{3}{\pi}-\frac{3\sqrt{3}}{2\pi}-\frac{1}{8}.
  \]
provenance: handout-answer
steps:
  - In the first quadrant the curves meet at \(x=0\) and \(x=\frac{1}{2}\).
  - On that interval \(y=\sin(\pi x/3)\) is the upper curve.
  - The integral equals \(\frac{3}{\pi}-\frac{3\sqrt{3}}{2\pi}-\frac{1}{8}\).
verification:
  checks:
    - expr: integrate(sin(pi*x/3) - x, (x, 0, 1/2))
      expected: 3/pi - 3*sqrt(3)/(2*pi) - 1/8
:::

::: exercise
id: l3-area-between-curves.ex-9-1-8
number: "9.1.8"
tier: basic
topics: [area]
statement: |
  Find the area bounded by the curves \(y=\sqrt{x}\) and \(y=\sqrt{x+1}\) for \(0\le x\le 4\).
solution: |
  For \(x\ge 0\) one has \(x+1\ge x\), and the square root is increasing, so \(\sqrt{x+1}\ge\sqrt{x}\). The upper curve is \(y=\sqrt{x+1}\). The area is
  \[
  \begin{aligned}
  &\int_0^4\bigl(\sqrt{x+1}-\sqrt{x}\bigr)\,dx\\
  &=\left[\frac{2}{3}(x+1)^{3/2}-\frac{2}{3}x^{3/2}\right]_0^4.
  \end{aligned}
  \]
  At \(x=4\) the antiderivative equals \((2/3)(5\sqrt{5}-8)\). At \(x=0\) it equals \(2/3\). The area is
  \[
  \begin{aligned}
  &\frac{2}{3}(5\sqrt{5}-8)-\frac{2}{3}\\
  &=\frac{2}{3}(5\sqrt{5}-9)\\
  &=\frac{10\sqrt{5}}{3}-6.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - On \([0,4]\), \(\sqrt{x+1}\) lies above \(\sqrt{x}\).
  - An antiderivative is \(\frac{2}{3}(x+1)^{3/2}-\frac{2}{3}x^{3/2}\).
  - The integral equals \(\frac{10\sqrt{5}}{3}-6\).
verification:
  checks:
    - expr: integrate(sqrt(x + 1) - sqrt(x), (x, 0, 4))
      expected: 10*sqrt(5)/3 - 6
:::

::: exercise
id: l3-area-between-curves.ex-9-1-9
number: "9.1.9"
tier: basic
topics: [area]
statement: |
  Find the area bounded by the curves \(x=0\) and \(x=25-y^2\).
solution: |
  The parabola meets the \(y\)-axis where \(25-y^2=0\), so \(y=\pm 5\). On \([-5,5]\) one has \(25-y^2\ge 0\), so the parabola lies to the right of \(x=0\). The area is
  \[
  \begin{aligned}
  &\int_{-5}^{5}(25-y^2)\,dy\\
  &=2\int_0^5(25-y^2)\,dy\\
  &=2\left[25y-\frac{y^3}{3}\right]_0^5\\
  &=2\left(125-\frac{125}{3}\right)\\
  &=\frac{500}{3}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The curves meet at \(y=\pm 5\).
  - On that interval \(x=25-y^2\) lies to the right of \(x=0\).
  - The integral equals \(\frac{500}{3}\).
verification:
  checks:
    - expr: integrate(25 - y**2, (y, -5, 5))
      expected: 500/3
:::

::: exercise
id: l3-area-between-curves.ex-9-1-10
number: "9.1.10"
tier: standard
topics: [area]
statement: |
  Find the area bounded by the curves \(y=\sin x\cos x\) and \(y=\sin x\) for \(0\le x\le\pi\).
solution: |
  The difference of the curves is \(\sin x-\sin x\cos x=\sin x(1-\cos x)\). On \([0,\pi]\) both \(\sin x\) and \(1-\cos x\) are nonnegative, so \(y=\sin x\) is the upper curve. The difference is zero when \(\sin x=0\) or \(\cos x=1\), hence only at the endpoints \(x=0\) and \(x=\pi\). The graphs do not cross inside the interval.

  An antiderivative of \(\sin x\) gives \(\int_0^\pi\sin x\,dx=2\). The other term is
  \[
  \begin{aligned}
  &\int_0^\pi\sin x\cos x\,dx\\
  &=\frac{1}{2}\int_0^\pi\sin(2x)\,dx\\
  &=\left[-\frac{\cos(2x)}{4}\right]_0^\pi\\
  &=-\frac{1}{4}-\left(-\frac{1}{4}\right)=0.
  \end{aligned}
  \]
  The area is \(2-0=2\).
provenance: handout-answer
steps:
  - On \([0,\pi]\), \(y=\sin x\) lies above \(y=\sin x\cos x\).
  - The integral of \(\sin x\) equals \(2\), and the integral of \(\sin x\cos x\) equals \(0\).
  - The area equals \(2\).
verification:
  checks:
    - expr: integrate(sin(x)*(1 - cos(x)), (x, 0, pi))
      expected: "2"
:::

::: exercise
id: l3-area-between-curves.ex-area-parabola-line
tier: standard
topics: [area]
statement: |
  Let \(R\) be the region bounded by the parabola \(y^2=2x\) and the line \(y=x-4\).

  - (a) Find the area of \(R\) by integrating with respect to \(y\).
  - (b) Find the area of \(R\) by integrating with respect to \(x\), and compare.
solution: |
  The line is \(x=y+4\) and the parabola is \(x=\frac{y^2}{2}\). They meet where \(\frac{y^2}{2}=y+4\), so \(y^2-2y-8=0\), hence \((y-4)(y+2)=0\). The intersection points are \((8,4)\) and \((2,-2)\).

  (a) For \(-2\le y\le 4\), the line lies to the right of the parabola, because \(y+4-\frac{y^2}{2}=-\frac{1}{2}(y-4)(y+2)\ge 0\). The area is
  \[
  \begin{aligned}
  &\int_{-2}^{4}\left(y+4-\frac{y^2}{2}\right)dy\\
  &=\left[\frac{y^2}{2}+4y-\frac{y^3}{6}\right]_{-2}^{4}\\
  &=\left(8+16-\frac{32}{3}\right)-\left(2-8+\frac{4}{3}\right)\\
  &=\frac{40}{3}+\frac{14}{3}=18.
  \end{aligned}
  \]

  (b) Integrating in \(x\), the lower boundary changes at \(x=2\).

  - For \(0\le x\le 2\) the region lies between the lower and upper branches of the parabola, \(y=-\sqrt{2x}\) and \(y=\sqrt{2x}\).
  - For \(2\le x\le 8\) it lies between the line \(y=x-4\) and the upper branch \(y=\sqrt{2x}\).

  The area is
  \[
  \begin{aligned}
  &\int_0^2 2\sqrt{2x}\,dx\\
  &+\int_2^8\bigl(\sqrt{2x}-(x-4)\bigr)dx.
  \end{aligned}
  \]
  An antiderivative of \(\sqrt{2x}\) is \(\frac{2\sqrt{2}}{3}x^{3/2}\). The first integral equals
  \[
  \begin{aligned}
  &2\cdot\frac{2\sqrt{2}}{3}\cdot 2^{3/2}\\
  &=2\cdot\frac{2\sqrt{2}}{3}\cdot 2\sqrt{2}\\
  &=\frac{16}{3}.
  \end{aligned}
  \]
  In the second,
  \[
  \begin{aligned}
  \int_2^8\sqrt{2x}\,dx&=\frac{2\sqrt{2}}{3}\bigl(8^{3/2}-2^{3/2}\bigr)\\
  &=\frac{2\sqrt{2}}{3}\cdot 14\sqrt{2}=\frac{56}{3},\\
  \int_2^8(x-4)\,dx&=\left[\frac{x^2}{2}-4x\right]_2^8\\
  &=0-(-6)=6.
  \end{aligned}
  \]
  The second integral equals \(\frac{56}{3}-6=\frac{38}{3}\).

  The total is \(\frac{16}{3}+\frac{38}{3}=18\). Both directions give area \(18\), and integrating in \(y\) needs one integral where integrating in \(x\) needs two.
provenance: written-for-site
steps:
  - The curves meet at \(y=-2\) and \(y=4\), that is at \((2,-2)\) and \((8,4)\).
  - (a) \(\int_{-2}^{4}\bigl(y+4-\frac{y^2}{2}\bigr)dy=18\).
  - (b) Split at \(x=2\); the pieces are \(\frac{16}{3}\) and \(\frac{38}{3}\), total \(18\).
verification:
  checks:
    - expr: integrate(y + 4 - y**2/2, (y, -2, 4))
      expected: "18"
    - expr: integrate(2*sqrt(2*x), (x, 0, 2)) + integrate(sqrt(2*x) - (x - 4), (x, 2, 8))
      expected: "18"
    - expr: integrate(2*sqrt(2*x), (x, 0, 2))
      expected: "16/3"
:::
