---
id: l2-optimisation
lecture: 2
order: 8
title: Optimisation in one variable
prerequisites: [l2-monotonicity-extrema]
sources:
  - { source: handout, section: "6.1", page: 119 }
  - { source: sheet-1, page: 2 }
  - { source: midterm-app }
  - { source: midterm-mock-1, page: 1 }
  - { source: midterm-2022, page: 1 }
  - { source: midterm-2024, page: 1 }
  - { source: midterm-2025, page: 1 }
  - { source: midterm-2026-key, page: 1 }
examWeight: high
examWeightNote: A worded optimisation is worth 3 to 5 midterm points.
status: reviewed
---

::: section
title: Extreme value theorem and the closed-interval method
:::

::: formal-statement
kind: theorem
title: Theorem 6.1.2 (extreme value theorem)
source: { source: handout, section: "6.1", page: 121 }
text: |
  If \(f\) is continuous on a closed interval \([a, b]\), then it has both a **minimum** and a **maximum** point. That is, there are real numbers \(c\) and \(d\) in \([a, b]\) so that for every \(x\) in \([a, b]\),
  \[
  f(x) \le f(c) \quad\text{and}\quad f(x) \ge f(d).
  \]
:::

::: plain-explanation
text: |
  Continuity on a closed interval guarantees a highest value and a lowest value.

  - The point \(c\) is a maximum point, because \(f(x) \le f(c)\) for every \(x\) in \([a, b]\).
  - The point \(d\) is a minimum point, because \(f(x) \ge f(d)\).

  Global and absolute name the same thing here: an extreme value of \(f\) on the whole interval.
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(-x^2 + 4x - 3\). Switch on the extrema, then restrict to a closed interval and move its ends to compare the endpoint values with the critical point.
params:
  f: "-x^2+4x-3"
  xmin: -2
  xmax: 5
  layers: [extrema]
:::

::: formal-statement
kind: method
title: Closed-interval method
source: { source: handout, section: "6.1", page: 120 }
text: |
  Local extrema occur only where \(f'(x)\) is zero or where \(f'(x)\) is undefined. If the endpoints are finite, a maximum or a minimum can also occur at an endpoint.

  1. Compute the value of \(f\) at every critical value in the interval and at every finite endpoint.
  2. The largest of these values is the **global maximum**, and the smallest is the **global minimum**.
:::

::: plain-explanation
text: |
  Build the **candidate list**, then compare the numbers on it.

  1. Solve \(f'(x) = 0\), and include any point where \(f'\) is undefined. A critical value stays on the list when it lies in the interval.
  2. Add the endpoints when they are finite numbers.

  The global maximum is the largest value on the list, and the global minimum is the smallest.
:::

::: worked-example
title: Maximum and minimum on a closed interval
problem: |
  Find the global maximum and the global minimum of \(f(x) = x^2\) on the closed interval \([-2, 1]\).
solution: |
  The derivative is
  \[
  f'(x) = 2x.
  \]
  This derivative is defined for every real \(x\). The equation \(f'(x) = 0\) has the solution \(x = 0\), and \(0\) lies in \([-2, 1]\). The endpoints \(x = -2\) and \(x = 1\) are finite, so both belong on the candidate list.

  The three values are
  \[
  \begin{aligned}
  f(-2)&=4,\\
  f(0)&=0,\\
  f(1)&=1.
  \end{aligned}
  \]

  On \([-2, 1]\), the global maximum is \(4\) at \(x = -2\), and the global minimum is \(0\) at \(x = 0\).
:::

::: guided-example
title: Critical value outside the interval
problem: |
  Find the largest value of \(f(x) = -x^2 + 4x - 3\) on the closed interval \([-1, 1]\).
steps:
  - |
    The derivative is \(f'(x) = -2x + 4\). It is defined for every \(x\), and \(f'(x) = 0\) at \(x = 2\).
  - |
    The critical value \(x = 2\) lies outside \([-1, 1]\). A candidate has to lie in the interval, so the list is the endpoints \(x = -1\) and \(x = 1\).
  - |
    The endpoint values are
    \[
    \begin{aligned}
    f(-1)&=-8,\\
    f(1)&=0.
    \end{aligned}
    \]
  - |
    The largest value of \(f\) on \([-1, 1]\) is \(f(1) = 0\).
:::

::: trap
text: |
  A critical value outside the interval is ignored, and the extreme on the interval can sit at an endpoint. Take \(f(x) = -x^2 + 4x - 3\) on \([-1, 1]\). Then
  \[
  f'(x) = -2x + 4,
  \]
  so \(f'(x) = 0\) at \(x = 2\). The number \(2\) lies outside \([-1, 1]\). The value \(f(2) = 1\) is taken at that outside point. On the interval the candidates are
  \[
  f(-1) = -8, \qquad f(1) = 0.
  \]
  The largest value on \([-1, 1]\) is \(0\), attained at the endpoint \(x = 1\).
:::

::: key-points
text: |
  - On a closed interval \([a, b]\), a continuous \(f\) has a maximum point and a minimum point.
  - Closed-interval method: list the critical values that lie in the interval and the finite endpoints. The largest value of \(f\) on the list is the global maximum, and the smallest is the global minimum.
  - The usual slip takes the critical value \(x = 2\) of \(-x^2 + 4x - 3\) as the maximiser on \([-1, 1]\). The point \(2\) lies outside the interval, and the largest value is \(f(1) = 0\) at the endpoint.
:::

::: concept-question
id: l2-optimisation.q-49d14934
question: |
  You find a single interior critical point of a continuous function on a closed bounded region. Is it the maximum?
options:
  - text: |
      Not necessarily. You must also check the boundary.
    correct: true
  - text: |
      Yes, a unique critical point is always the global maximum.
  - text: |
      Yes, provided the second derivative is negative there.
  - text: |
      Only if the function is a polynomial.
explanation: |
  A continuous function on a closed bounded region attains its maximum at an interior critical point or on the boundary. The two have to be compared.
:::

::: concept-question
id: l2-optimisation.q-11eaba7f
question: |
  A box with \(0 \leq c \leq b \leq a\) has \(a + b + c = 20\) cm and total surface \(2(ab + bc + ca) = 200\,\mathrm{cm}^{2}\). Which \(c\) maximises the volume?
options:
  - text: |
      \(c = \frac{10}{3}\), giving volume \(\frac{4000}{27} \approx 148.1\,\mathrm{cm}^{3}\)
    correct: true
  - text: |
      \(c = 10\), giving volume \(1000\,\mathrm{cm}^{3}\)
  - text: |
      \(c = \frac{20}{3}\), giving volume \(200\,\mathrm{cm}^{3}\)
  - text: |
      \(c = 5\), giving volume \(125\,\mathrm{cm}^{3}\)
explanation: |
  From \(ab + c(a + b) = 100\) and \(a + b = 20 - c\) you get
  \[
  \begin{aligned}
  ab&=c^{2} - 20c + 100,\\
  V&=c^{3} - 20c^{2} + 100c.
  \end{aligned}
  \]
  Then \(V' = 3c^{2} - 40c + 100\) vanishes at \(c = \frac{10}{3}\) and \(c = 10\).

  - At \(c = 10\) the volume is \(0\).
  - At \(c = \frac{10}{3}\) one has \(a = \frac{40}{3}\), \(b = c = \frac{10}{3}\), and \(V = \frac{4000}{27}\).
:::

::: concept-question
id: l2-optimisation.q-a4745559
question: |
  Maximise \(f = 2T + H - C\) with \(H = N - T^{3}\) and \(C = \frac{2T + N}{3}\), over \(T, N \geq 0\) with \(T + N \leq 2\).
options:
  - text: |
      At \(T = \frac{\sqrt{2}}{3}\) on the edge \(T + N = 2\)
    correct: true
  - text: |
      At \(T = \frac{2}{3}\) in the interior of the region
  - text: |
      At \(T = 2\), \(N = 0\)
  - text: |
      At \(T = 0\), \(N = 2\)
explanation: |
  Simplifying gives
  \[
  f = \frac{4}{3}T - T^{3} + \frac{2}{3}N.
  \]
  The coefficient of \(N\) is positive, so the maximum lies on the edge \(N = 2 - T\). There
  \[
  f' = \frac{2}{3} - 3T^{2}
  \]
  vanishes at \(T = \frac{\sqrt{2}}{3}\). That value is \(\frac{4\sqrt{2}}{27} + \frac{4}{3}\), which is larger than the value \(\frac{40}{27}\) at \(T = \frac{2}{3}\) on the same edge.
:::

::: concept-question
id: l2-optimisation.q-dad3e421
question: |
  For \(P = p_{a} - \frac{1}{10}\bigl[(p_{a} - 5)^{3} + (p_{a} - 10)^{2}\bigr]\), find the maximum \(P\) to one decimal place.
options:
  - text: |
      \(P \approx 5.4\), at \(p_{a} \approx 7.3\)
    correct: true
  - text: |
      \(P \approx 7.3\), at \(p_{a} \approx 5.4\)
  - text: |
      \(P \approx 10.0\), at \(p_{a} = 10\)
  - text: |
      \(P \approx 2.1\), at \(p_{a} \approx 2.1\)
explanation: |
  Differentiating gives \(1 - \frac{1}{10}\bigl[3(p_{a} - 5)^{2} + 2(p_{a} - 10)\bigr] = 0\), whose roots are \(\frac{14 \pm \sqrt{61}}{3}\). The larger root \(p_{a} = \frac{14 + \sqrt{61}}{3} \approx 7.3\) has \(P'' < 0\), and there \(P \approx 5.4\).
:::

::: concept-question
id: l2-optimisation.q-676dfca7
question: |
  Let \(f(x) = x\) for \(0 \le x < 1\), and \(f(1) = 0\). Does \(f\) have a maximum point on \([0, 1]\)?
options:
  - text: |
      No, because \(f\) is not continuous at \(1\).
    correct: true
  - text: |
      Yes, because \([0, 1]\) is closed.
  - text: |
      Yes, at \(x = 1\), with value \(1\).
  - text: |
      No, because the theorem needs an open interval.
explanation: |
  The interval is closed, but \(f\) is not continuous at \(1\), so the extreme value theorem does not apply. The values \(f(x) = x\) come as close to \(1\) as you like and never reach it. For every \(x\) in \([0, 1)\), the number \(\frac{x + 1}{2}\) lies in \([0, 1)\) and gives a larger value, so no point is a maximum point. The minimum point exists: \(f = 0\) at \(x = 0\) and at \(x = 1\).
:::

::: exercise
id: l2-optimisation.basic-parabola
tier: basic
topics:
  - optimisation
statement: |
  Find the global maximum and the global minimum of \(f(x) = -x^2 + 6x - 5\) on the closed interval \([0, 5]\).
solution: |
  The derivative is \(f'(x) = -2x + 6\). It is defined for every \(x\), and \(f'(x) = 0\) at \(x = 3\). That critical value lies in \([0, 5]\). The candidates are \(x = 0\), \(x = 3\) and \(x = 5\).

  The values are
  \[
  \begin{aligned}
  f(0)&=-5,\\
  f(3)&=4,\\
  f(5)&=0.
  \end{aligned}
  \]

  On \([0, 5]\), the global maximum is \(4\) at \(x = 3\), and the global minimum is \(-5\) at \(x = 0\).
provenance: written-for-site
steps:
  - Derivative \(f'(x) = -2x + 6\), critical value \(x = 3\).
  - Values \(f(0) = -5\), \(f(3) = 4\), \(f(5) = 0\).
  - Global maximum \(4\) at \(x = 3\), global minimum \(-5\) at \(x = 0\).
verification:
  checks:
    - expr: diff(-x**2 + 6*x - 5, x)
      expected: -2*x + 6
    - expr: diff(-x**2 + 6*x - 5, x).subs(x, 3)
      expected: 0
    - expr: (-x**2 + 6*x - 5).subs(x, 0)
      expected: -5
    - expr: (-x**2 + 6*x - 5).subs(x, 3)
      expected: 4
    - expr: (-x**2 + 6*x - 5).subs(x, 5)
      expected: 0
:::

::: section
title: One critical value
:::

::: formal-statement
kind: method
title: One critical value
source: { source: handout, section: "6.1", page: 121 }
text: |
  If \(f\) is continuous and has a **single critical value**, then

  - a local maximum there is a global maximum,
  - a local minimum there is a global minimum.

  In the first case a global minimum may still exist, and in the second case a global maximum may still exist. That other extreme takes a separate check. On an open or unbounded interval, a global maximum or a global minimum may fail to exist.
:::

::: plain-explanation
text: |
  Classify the single critical value first. A local maximum there is the global maximum, and a local minimum there is the global minimum.

  - If the critical value is a global maximum, a global minimum may still sit at an end of the domain.
  - If it is a global minimum, a global maximum may still sit at an end.

  For a rectangle of area \(100\), the perimeter is \(f(x) = 2x + 200/x\) with \(x > 0\). Then the only positive solution of
  \[
  f'(x) = 2 - 200/x^2 = 0
  \]
  is \(x = 10\), and \(f''(x) = 400/x^3\) is positive for \(x > 0\). The domain has no endpoints. The perimeter is minimised by the square of side \(10\).
:::

::: trap
text: |
  On an open interval, a local extreme need not be global. Take \(f(x) = x^3 - x\) on \((-2, 2)\). Then \(f'(x) = 3x^2 - 1\), so the critical values are \(x = -\sqrt{3}/3\) and \(x = \sqrt{3}/3\). The value \(f(-\sqrt{3}/3) = 2\sqrt{3}/9\) is a local maximum, and \(f(\sqrt{3}/3) = -2\sqrt{3}/9\) is a local minimum. The numbers \(\pm 2\) lie outside \((-2, 2)\).

  - At \(x = 1.9\), \(f(1.9) = 4.959\). Since \(2\sqrt{3} < 9\), the local maximum satisfies \(2\sqrt{3}/9 < 1 < 4.959\).
  - At \(x = -1.9\), \(f(-1.9) = -4.959\), and \(-4.959 < -1 < -2\sqrt{3}/9\).

  The function has no global maximum and no global minimum on \((-2, 2)\).
:::

::: concept-question
id: l2-optimisation.q-6e44da39
question: |
  Minimise \(f(x) = x + \frac{1}{x}\) for \(x > 0\).
options:
  - text: |
      Minimum value \(2\), at \(x = 1\)
    correct: true
  - text: |
      Minimum value \(1\), at \(x = 1\)
  - text: |
      Minimum value \(0\), at \(x = 0\)
  - text: |
      No minimum. It decreases without bound.
explanation: |
  The derivative \(f' = 1 - \frac{1}{x^{2}}\) vanishes at \(x = 1\), the only critical point in the domain. There \(f'' = \frac{2}{x^{3}} > 0\), so the point is a minimum, with value \(2\).
:::

::: concept-question
id: l2-optimisation.q-b660e8ad
question: |
  Two positive numbers have a fixed sum \(S\). What is their largest possible product?
options:
  - text: |
      \(\frac{S^{2}}{4}\), when both equal \(\frac{S}{2}\)
    correct: true
  - text: |
      \(\frac{S^{2}}{2}\), when both equal \(\frac{S}{2}\)
  - text: |
      \(S^{2}\), when one is \(S\) and the other \(0\)
  - text: |
      There is no largest product
explanation: |
  With the two numbers \(x\) and \(S - x\), the product is \(x(S - x)\). Its derivative \(S - 2x\) vanishes at \(x = \frac{S}{2}\), where the product is \(\frac{S^{2}}{4}\).
:::

::: concept-question
id: l2-optimisation.q-ad39d4c9
question: |
  A wire of length \(L\) is cut into two pieces, one bent into a square and one into a circle. What does the interior critical point of the total area give?
options:
  - text: |
      The minimum total area. The maximum is at an endpoint, using the whole wire for the circle.
    correct: true
  - text: |
      The maximum total area
  - text: |
      Both, since the area is symmetric
  - text: |
      Nothing. There is no critical point.
explanation: |
  If \(x\) is the length used for the square, then \(A = \frac{x^{2}}{16} + \frac{(L - x)^{2}}{4\pi}\) and \(A'' = \frac{1}{8} + \frac{1}{2\pi} > 0\), so the critical point is a minimum. The maximum is therefore at an endpoint. Using the whole wire as a circle gives area \(\frac{L^{2}}{4\pi}\), which is larger than the all-square value \(\frac{L^{2}}{16}\).
:::

::: key-points
text: |
  - If \(f\) is continuous and has a single critical value, a local maximum there is a global maximum, and a local minimum there is a global minimum.
  - The other extreme takes a separate check. On an open or unbounded interval, a global maximum or a global minimum may fail to exist.
  - The usual slip calls a local extreme of \(x^3 - x\) on \((-2, 2)\) global. That function has two critical values, and on \((-2, 2)\) it has no global maximum and no global minimum.
:::

::: section
title: Steps for a worded optimisation
:::

::: formal-statement
kind: method
title: Steps for a worded optimisation
source: { source: handout, section: "6.1", page: 128 }
text: |
  1. Name the variables and the constants. Draw a diagram when one is needed, and state clearly what is to be maximised or minimised.
  2. Write a formula for the quantity to be maximised or minimised.
  3. Express that formula in terms of one variable, as a function \(f(x)\).
  4. Set \(f'(x) = 0\) and solve. Check all critical values and endpoints to determine the extreme value.
:::

::: plain-explanation
text: |
  The derivative comes after the model. Name the quantity, write a formula that still contains every variable, and use a **constraint** to remove variables until one remains. Record the domain while you do that. Endpoints appear when a variable may reach the edge of the constraint, and those endpoints belong on the candidate list. When the domain is open, state that there are no endpoints.
:::

::: worked-example
title: Maximum profit
problem: |
  An item sells at a price of \(x\) dollars, with \(0 \le x \le 1.5\). When the price is \(1.5\) dollars, \(5000\) items are sold. For every \(0.10\) dollars the price is lowered, \(1000\) more items are sold. The fixed cost is \(2000\) dollars, and each item costs \(0.50\) dollars to make. Which price maximises the profit, and what is that profit?
solution: |
  Let \(n\) be the number of items sold. The quantity to maximise is the profit
  \[
  P = nx - 2000 - 0.50 n.
  \]
  The number sold is \(5000\) at the price \(1.5\), plus \(1000\) items for every \(0.10\) dollars the price lies below \(1.5\), so
  \[
  \begin{aligned}
  n(x)&=5000 + 1000 \cdot \frac{1.5 - x}{0.10}\\
  &=20000 - 10000x.
  \end{aligned}
  \]
  Substitute \(n(x)\) into the profit before differentiating:
  \[
  \begin{aligned}
  P(x)&=(20000 - 10000x)\left(x - \frac{1}{2}\right)\\
  &\quad - 2000\\
  &=-10000x^2 + 25000x - 12000,
  \end{aligned}
  \]
  on the closed interval \([0, 1.5]\).

  The derivative is
  \[
  P'(x) = -20000x + 25000.
  \]
  It is defined for every \(x\), and \(P'(x) = 0\) at \(x = 1.25\). That critical value lies in \([0, 1.5]\). The second derivative is \(P''(x) = -20000\), so \(x = 1.25\) is a local maximum. The closed-interval candidates are this critical value and the two endpoints:
  \[
  \begin{aligned}
  P(0)&=-12000,\\
  P(1.25)&=3625,\\
  P(1.5)&=3000.
  \end{aligned}
  \]
  At the price \(1.25\) dollars the number sold is \(n = 20000 - 10000 \cdot 1.25 = 7500\).

  The maximum profit is \(3625\) dollars, at a price of \(1.25\) dollars, when \(7500\) items are sold.
:::

::: trap
text: |
  For the plane, power and speed satisfy \(p = v + 1/(V_s - v)\) with \(v < V_s\). Multiplying by \(V_s - v\) gives \(p(V_s - v) = v(V_s - v) + 1\), so
  \[
  v^2 - (p + V_s)v + p V_s - 1 = 0.
  \]
  The roots are
  \[
  v = \bigl(p + V_s \pm \sqrt{(p - V_s)^2 + 4}\bigr)/2,
  \]
  and the minus sign is the branch below \(V_s\).

  Replacing \(V_s\) by \(V_s/2\) in that quadratic produces
  \[
  v^2 - (p + V_s/2)v + p V_s/2 - 1 = 0.
  \]
  That equation fails on the speed that really uses the power. Take \(V_s = 300\) and \(p = 300\). The minus branch of the correct formula is
  \[
  v = (600 - 2)/2 = 299.
  \]
  Check the model:
  \[
  299 + 1/(300 - 299) = 300.
  \]
  Substitute \(v = 299\) into the \(V_s/2\) quadratic:
  \[
  299^2 - 450\cdot 299 + 45000 - 1 = -150,
  \]
  which is not \(0\). So \(v = 299\) is not a root of the altered quadratic.
:::

::: concept-question
id: l2-optimisation.q-bff3f19c
question: |
  A box has square front and back of side \(x\), and length \(L\). The post office requires that length plus girth is at most \(108\) inches. Which choice maximises the volume?
options:
  - text: |
      \(x = 18\), \(L = 36\), volume \(11664\) cubic inches
    correct: true
  - text: |
      \(x = 27\), \(L = 0\), volume \(0\)
  - text: |
      \(x = 12\), \(L = 60\), volume \(8640\) cubic inches
  - text: |
      \(x = 9\), \(L = 72\), volume \(5832\) cubic inches
explanation: |
  The girth of the square cross-section is \(4x\), so
  \[
  \begin{aligned}
  L&=108 - 4x,\\
  V&=x^{2}(108 - 4x).
  \end{aligned}
  \]
  Then \(V' = 12x(18 - x)\), which vanishes at \(x = 18\) in \((0, 27)\). That gives \(L = 36\) and \(V = 11664\).
:::

::: concept-question
id: l2-optimisation.q-bb2d6df3
question: |
  At a price of \(10\) dollars you sell nothing, and \(500\) more items for each dollar below \(10\). Fixed costs are \(3000\) dollars, and each item costs \(2\) dollars. What is the maximum profit?
options:
  - text: |
      \(5000\) dollars, at a price of \(6\) dollars
    correct: true
  - text: |
      \(8000\) dollars, at a price of \(6\) dollars
  - text: |
      \(5000\) dollars, at a price of \(4\) dollars
  - text: |
      \(3000\) dollars, at a price of \(5\) dollars
explanation: |
  Sales are \(n = 500(10 - p)\), so the profit is \(500(10 - p)(p - 2) - 3000\). The derivative \(500(12 - 2p)\) vanishes at \(p = 6\). There \(n = 2000\) and the profit is \(5000\) dollars.
:::

::: concept-question
id: l2-optimisation.q-19bf7163
question: |
  An object has position \(f(t) = -\frac{49}{10}t^{2} + 5t + 10\). Give its speed and acceleration.
options:
  - text: |
      Speed \(-\frac{49}{5}t + 5\), acceleration \(-\frac{49}{5}\)
    correct: true
  - text: |
      Speed \(-\frac{49}{10}t + 5\), acceleration \(-\frac{49}{10}\)
  - text: |
      Speed \(-98t + 5\), acceleration \(-98\)
  - text: |
      Speed \(-\frac{49}{5}t + 5\), acceleration \(0\)
explanation: |
  The first derivative is \(-\frac{49}{5}t + 5\). Differentiating again gives the constant acceleration \(-\frac{49}{5}\).
:::

::: concept-question
id: l2-optimisation.q-55b26e14
question: |
  A rectangular field is fenced against a straight river, so only three sides need fencing. With \(120\) m of fence, which dimensions maximise the area?
options:
  - text: |
      \(60\) m along the river by \(30\) m deep, area \(1800\,\mathrm{m}^{2}\)
    correct: true
  - text: |
      \(40\) m by \(40\) m, area \(1600\,\mathrm{m}^{2}\)
  - text: |
      \(30\) m along the river by \(60\) m deep, area \(1800\,\mathrm{m}^{2}\)
  - text: |
      \(50\) m by \(35\) m, area \(1750\,\mathrm{m}^{2}\)
explanation: |
  With depth \(y\) and river side \(x\), the constraint is \(x + 2y = 120\). Then \(A = (120 - 2y)y\), and \(A' = 120 - 4y\) vanishes at \(y = 30\). That gives \(x = 60\) and \(A = 1800\).
:::

::: key-points
text: |
  - Name the quantity, write a formula for it, and use the constraint to remove variables until one remains, as a function \(f(x)\). Record the domain, and state that there are no endpoints when it is open.
  - Set \(f'(x) = 0\) and compare the values at the critical values and at the endpoints.
  - The usual slip replaces \(V_s\) by \(V_s/2\) in the quadratic \(v^2 - (p + V_s)v + p V_s - 1 = 0\). For \(V_s = p = 300\) the correct quadratic gives \(v = 299\), and \(299\) is not a root of the altered one.
:::

::: section
title: Geometry and distance problems
:::

::: going-deeper
title: A path across sand, and a cone in a sphere
text: |
  ### Road and sand

  The first problem is a trip that is partly on a road and partly across sand. The road is straight, \(C\) is the point on the road closest to the destination \(A\), and the distance \(AC\) is \(b\). You start at \(D\), with \(DC = a\). You may leave the road at a point \(B\) with \(BC = x\), then cross the sand in a straight line to \(A\). Speed on the road is \(v\), and speed on the sand is \(w\), with \(0 < w < v\). The time is a function of the leaving point on the closed interval \([0, a]\):
  \[
  f(x) = \frac{a - x}{v} + \frac{\sqrt{x^2 + b^2}}{w}.
  \]
  The derivative is
  \[
  f'(x) = -\frac{1}{v} + \frac{x}{w\sqrt{x^2 + b^2}}.
  \]
  Setting \(f'(x) = 0\) gives \(vx = w\sqrt{x^2 + b^2}\). Both sides are positive for \(x > 0\). Squaring and rearranging produces the positive critical value \(x = wb/\sqrt{v^2 - w^2}\), and it is independent of the length \(a\). Differentiating again gives
  \[
  f''(x) = \frac{b^2}{(x^2 + b^2)^{3/2}\, w},
  \]
  which is positive when \(b > 0\). So \(f'\) is increasing, and the critical point is a local minimum.

  - If \(wb/\sqrt{v^2 - w^2}\) lies in \([0, a]\), then \(f\) decreases up to that point and increases after it, and the global minimum on \([0, a]\) is there.
  - If that critical value is larger than \(a\), then \(f'\) is negative on \([0, a]\), because \(f'\) is increasing and its only zero lies beyond \(a\). The minimum is then at the endpoint \(x = a\).

  The endpoint times are
  \[
  \begin{aligned}
  f(0)&=a/v + b/w,\\
  f(a)&=\sqrt{a^2 + b^2}/w.
  \end{aligned}
  \]

  - If you start farther from \(C\) than \(wb/\sqrt{v^2 - w^2}\), the fastest path leaves the road at that distance from \(C\).
  - If you start closer to \(C\) than that distance, the fastest path leaves the road at once and crosses the sand directly.

  ### Cone in a sphere

  The second problem is the largest right circular cone inscribed in a sphere of radius \(R\). Let the cone have height \(h\) and base radius \(r\), with \(0 \le h \le 2R\). The cross-section through the axis gives
  \[
  r^2 = R^2 - (h - R)^2.
  \]
  The volume, written in the single variable \(h\) before any derivative, is
  \[
  V(h) = \frac{\pi r^2 h}{3} = -\frac{\pi}{3}h^3 + \frac{2}{3}\pi R h^2.
  \]
  Then
  \[
  V'(h) = -\pi h^2 + \frac{4}{3}\pi R h,
  \]
  so \(V'(h) = 0\) at \(h = 0\) and at \(h = 4R/3\). Both lie in \([0, 2R]\). The endpoint volumes are \(V(0) = 0\) and \(V(2R) = 0\), while \(V(4R/3) = (32/81)\pi R^3\). The sphere has volume \((4/3)\pi R^3\), so the largest cone occupies the fraction
  \[
  \frac{(32/81)\pi R^3}{(4/3)\pi R^3} = \frac{8}{27}
  \]
  of the sphere.
:::

::: key-points
text: |
  - Write the quantity in the single variable before differentiating, and state the closed interval it lives on.
  - For the road and sand problem, the critical value \(x = wb/\sqrt{v^2 - w^2}\) does not depend on \(a\). If it lies in \([0, a]\), the global minimum is there. If it is larger than \(a\), the minimum is at the endpoint \(x = a\).
  - For the cone in a sphere of radius \(R\), the volume \(V(h)\) on \([0, 2R]\) is largest at \(h = 4R/3\), and the cone fills the fraction \(8/27\) of the sphere.
:::

::: concept-question
id: l2-optimisation.q-030d4f12
question: |
  An open-top box is made from a \(12 \times 12\) sheet by cutting a square of side \(x\) from each corner and folding up. Which \(x\) maximises the volume?
options:
  - text: |
      \(x = 2\), volume \(128\)
    correct: true
  - text: |
      \(x = 3\), volume \(108\)
  - text: |
      \(x = 6\), volume \(0\)
  - text: |
      \(x = 1\), volume \(100\)
explanation: |
  The volume is \(V = x(12 - 2x)^{2}\), so \(V' = (12 - 2x)(12 - 6x)\), vanishing at \(x = 2\) and \(x = 6\). At \(x = 6\) the volume is \(0\). At \(x = 2\) the volume is \(128\).
:::

::: concept-question
id: l2-optimisation.q-2557c1b7
question: |
  A rectangle sits with its base on the diameter of a semicircle of radius \(r\). What is its largest possible area?
options:
  - text: |
      \(r^{2}\), reached when the half-width is \(\frac{r}{\sqrt{2}}\)
    correct: true
  - text: |
      \(\frac{r^{2}}{2}\), reached when the half-width is \(\frac{r}{2}\)
  - text: |
      \(\frac{\pi r^{2}}{2}\), the whole semicircle
  - text: |
      \(2r^{2}\), reached when the half-width is \(r\)
explanation: |
  With half-width \(x\) the height is \(\sqrt{r^{2} - x^{2}}\), so \(A = 2x\sqrt{r^{2} - x^{2}}\). The square \(A^{2} = 4x^{2}(r^{2} - x^{2})\) has a critical point at \(x^{2} = \frac{r^{2}}{2}\), and there \(A = r^{2}\).
:::

::: concept-question
id: l2-optimisation.q-346b6f2a
question: |
  A closed cylinder must hold a fixed volume. What shape minimises the total surface area?
options:
  - text: |
      Height equal to the diameter, \(h = 2r\)
    correct: true
  - text: |
      Height equal to the radius, \(h = r\)
  - text: |
      A very tall thin cylinder
  - text: |
      Height equal to half the radius, \(h = \frac{r}{2}\)
explanation: |
  With \(\pi r^{2} h = V\) fixed, \(S = 2\pi r^{2} + \frac{2V}{r}\) and \(S' = 4\pi r - \frac{2V}{r^{2}} = 0\) gives \(h = 2r\). The optimal cylinder has height equal to its diameter.
:::

::: concept-question
id: l2-optimisation.q-0691ebf2
question: |
  Which point on the parabola \(y = x^{2}\) is closest to \((0, 2)\)?
options:
  - text: |
      The two points with \(x^{2} = \frac{3}{2}\), at distance \(\frac{\sqrt{7}}{2} \approx 1.323\)
    correct: true
  - text: |
      The vertex \((0, 0)\), at distance \(2\)
  - text: |
      The point \((1, 1)\), at distance \(\sqrt{2}\)
  - text: |
      The point \((2, 4)\), at distance \(2\)
explanation: |
  Minimise the squared distance \(d^{2} = x^{2} + (x^{2} - 2)^{2}\). Then \(\frac{d}{dx}(d^{2}) = 2x(2x^{2} - 3)\), so \(x = 0\) or \(x^{2} = \frac{3}{2}\). At \(x^{2} = \frac{3}{2}\) one has \(d^{2} = \frac{7}{4}\), which is smaller than \(d^{2} = 4\) at the vertex.
:::

::: sheet-item
id: l2-optimisation.sheet-closed-interval
category: formula
text: |
  On a closed interval, evaluate \(f\) at every critical value in the interval, where \(f'\) is zero or undefined, and at the finite endpoints. The largest value is the global maximum. The smallest value is the global minimum.
:::

::: sheet-item
id: l2-optimisation.sheet-endpoint
category: trap
text: |
  A critical value outside the interval is ignored, and the extreme can sit at an endpoint. For \(f(x) = -x^2 + 4x - 3\) on \([-1, 1]\), the critical value \(x = 2\) is outside, and the largest value is the endpoint value \(f(1) = 0\).
:::

::: sheet-item
id: l2-optimisation.sheet-word-steps
category: formula
text: |
  For a word problem, name the variables, write the quantity, reduce it to one variable, then set the derivative equal to zero and check the critical values and the endpoints.
:::

::: sheet-item
id: l2-optimisation.sheet-open-interval
category: trap
text: |
  On an open interval a local extreme need not be global. The function \(f(x) = x^3 - x\) on \((-2, 2)\) has a local maximum and a local minimum, and it has no global maximum and no global minimum.
:::

::: exercise
id: l2-optimisation.standard-perimeter-100
number: "6.1 exercise 2"
tier: standard
topics:
  - optimisation
statement: |
  A rectangle has perimeter \(100\). Which side lengths give the largest area, and what is that area?
solution: |
  Let the side lengths be \(x\) and \(y\). The perimeter constraint is \(2x + 2y = 100\), so \(y = 50 - x\). A side length may be zero, so \(x\) lies in the closed interval \([0, 50]\). The quantity to maximise is the area
  \[
  A(x) = x(50 - x) = 50x - x^2.
  \]
  The derivative is \(A'(x) = 50 - 2x\). It equals zero at \(x = 25\), which lies in \([0, 50]\). The candidate values are
  \[
  \begin{aligned}
  A(0)&=0,\\
  A(25)&=625,\\
  A(50)&=0.
  \end{aligned}
  \]

  The largest area is \(625\), when both sides equal \(25\). The rectangle of largest area is the square of side \(25\).
provenance: handout-answer
steps:
  - Constraint \(y = 50 - x\) and area \(A(x) = x(50 - x)\) on \([0, 50]\).
  - Critical value \(x = 25\), with \(A(25) = 625\).
  - Endpoint areas \(0\), so the maximum is the square of side \(25\).
verification:
  checks:
    - expr: diff(x*(50 - x), x)
      expected: 50 - 2*x
    - expr: diff(x*(50 - x), x).subs(x, 25)
      expected: 0
    - expr: (x*(50 - x)).subs(x, 25)
      expected: 625
    - expr: (50 - x).subs(x, 25)
      expected: 25
    - expr: (x*(50 - x)).subs(x, 0)
      expected: 0
    - expr: (x*(50 - x)).subs(x, 50)
      expected: 0
:::

::: exercise
id: l2-optimisation.midterm-mock-1-ex5
statement: |
  The U.S. post office will accept a box for shipment only if the sum of the length and girth (distance around) is at most \(108\) in. Find the dimensions of the largest acceptable box with square front and back.
solution: |
  Let the square ends have side \(x\) inches and let the length be \(\ell\) inches. The girth is the perimeter \(4x\) of a square end. The constraint at equality is \(\ell+4x=108\), so \(\ell=108-4x\). The volume is
  \[
  V(x)=x^2(108-4x)=108x^2-4x^3
  \]
  on \(0<x<27\). The derivative is
  \[
  V'(x)=216x-12x^2=12x(18-x).
  \]
  The only critical point in the open interval is \(x=18\). The corresponding length is \(36\). The second derivative \(V''(x)=216-24x\) is negative at \(x=18\), so the critical point is a maximum. The largest acceptable box measures \(18\times 18\times 36\) inches. The official key writes "Done in class" and gives no dimensions.
steps:
  - Constraint \(\ell+4x=108\) and volume \(V(x)=108x^2-4x^3\).
  - Critical point \(x=18\).
  - Dimensions \(18\times 18\times 36\).
verification:
  checks:
    - expr: diff(108*x**2 - 4*x**3, x).subs(x, 18)
      expected: 0
    - expr: 108 - 4*18
      expected: 36
    - expr: 18**2 * 36
      expected: 11664
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "5"
  points: 3
:::

::: exercise
id: l2-optimisation.midterm-2022-ex5
statement: |
  A rectangular box of dimension \(a,b,c\) (we assume \(0\le c\le b\le a\)) has perimeter \(a+b+c=20\,\mathrm{cm}\) and a surface of \(200\,\mathrm{cm}^2\). For which value of \(c\) is the volume maximum?

  Hint: express \(ab\) using the equation of the surface of the box in terms of \(c\), the perimeter and the surface.
tier: exam
topics:
  - optimisation
pastExam:
  year: 2022
  paper: Midterm
  question: "5"
  points: 3
solution: |
  The volume is \(V=abc\). The perimeter constraint is \(a+b+c=20\). The closed surface is \(2(ab+ac+bc)=200\), so \(ab+c(a+b)=100\). With \(a+b=20-c\) this gives
  \[ ab=100-(20-c)c=c^2-20c+100. \]
  Hence \(V(c)=c\bigl(c^2-20c+100\bigr)=c^3-20c^2+100c\). Differentiating,
  \[ V'(c)=3c^2-40c+100. \]
  The zeros are \(c=\frac{10}{3}\) and \(c=10\). A sign chart of \(V'\) is positive on \((0,10/3)\) and negative just after \(10/3\), so \(c=10/3\) is a maximum. At \(c=10\) one has \(V=0\), a degenerate box.

  At \(c=10/3\) one has
  \[
  \begin{aligned}
  a+b&=50/3,\\
  ab&=400/9,
  \end{aligned}
  \]
  so \(\{a,b\}=\{40/3,10/3\}\). The ordering \(0\le c\le b\le a\) holds with \(a=40/3\) and \(b=c=10/3\). The maximum volume is \(4000/27\). The value of \(c\) that maximises the volume is \(10/3\).
provenance: official-key
steps:
  - Express \(ab\) from the surface and \(a+b=20-c\).
  - Formula for \(V(c)\) and for \(V'\).
  - Critical points, sign of \(V'\), and the maximiser \(c=10/3\).
verification:
  checks:
    - expr: simplify(100-(20-c)*c - (c**2-20*c+100))
      expected: "0"
    - expr: diff(c*(c**2-20*c+100), c)
      expected: 3*c**2-40*c+100
    - expr: sorted(solve(3*c**2-40*c+100, c))
      expected: "[Rational(10,3), 10]"
    - expr: (c*(100-(20-c)*c)).subs(c, Rational(10,3))
      expected: Rational(4000, 27)
    - expr: (c*(100-(20-c)*c)).subs(c, 10)
      expected: "0"
    - expr: sorted(solve(t**2 - Rational(50,3)*t + Rational(400,9), t))
      expected: "[Rational(10,3), Rational(40,3)]"
    - expr: Rational(40,3)+Rational(10,3)+Rational(10,3)
      expected: "20"
    - expr: 2*(Rational(40,3)*Rational(10,3)+Rational(40,3)*Rational(10,3)+Rational(10,3)*Rational(10,3))
      expected: "200"
    - expr: Rational(40,3)*Rational(10,3)*Rational(10,3)
      expected: Rational(4000, 27)
:::

::: exercise
id: l2-optimisation.midterm-2024-ex3
statement: |
  The price \(P\) of a stock market asset is the sum of two terms: an absolute price \(p_a\) and a speculating price \(p_s\). The speculating price is linked to the absolute price as follows
  \[ p_s = -\frac{1}{10}\bigl[(p_a - p_0/2)^3 + (p_a - p_0)^2\bigr] \]
  where \(p_0 = 10\). Find the maximum price \(P\) you can sell the asset to one decimal place.
tier: exam
topics:
  - optimisation
pastExam:
  year: 2024
  paper: Midterm
  question: "3"
  points: 5
solution: |
  With \(p_0 = 10\),
  \[
  \begin{aligned}
  P(p_a)&=p_a\\
  &\quad-\frac{1}{10}\bigl[(p_a - 5)^3 + (p_a - 10)^2\bigr].
  \end{aligned}
  \]
  An absolute price satisfies \(p_a \ge 0\).

  Differentiating gives
  \[
  \begin{aligned}
  P'(p_a)&=1\\
  &\quad-\frac{1}{10}\bigl[3(p_a - 5)^2\bigr]\\
  &\quad-\frac{1}{10}\bigl[2(p_a - 10)\bigr].
  \end{aligned}
  \]
  Setting \(P' = 0\) is equivalent to \(3(p_a - 5)^2 + 2(p_a - 10) = 10\), which rearranges to \(3p_a^2 - 28p_a + 45 = 0\). The roots are
  \[ p_a = \frac{14 \pm \sqrt{61}}{3}. \]

  The leading coefficient of \(P'\) is negative, so \(P'\) is positive between the roots and negative outside them. On \([0, +\infty)\) the function increases up to the larger root and decreases after it. The global maximum on that half-line is at \(p_a = (14 + \sqrt{61})/3\).

  The value there is
  \[ P = \frac{493 + 122\sqrt{61}}{270} \approx 5.355, \]
  which to one decimal place is \(5.4\). At the endpoint \(p_a = 0\) one has \(P = 5/2\), which is smaller.
provenance: written-for-site
steps:
  - \(P\) written as a function of \(p_a\), with \(p_a \ge 0\).
  - Derivative and the quadratic \(3p_a^2 - 28p_a + 45 = 0\).
  - The two critical points \((14 \pm \sqrt{61})/3\).
  - Sign of \(P'\) identifies the larger root as the maximum on \([0, +\infty)\).
  - Maximum sale price \(5.4\) to one decimal place.
verification:
  checks:
    - expr: diff(pa - Rational(1,10)*((pa-5)**3 + (pa-10)**2), pa).subs(pa, (14+sqrt(61))/3)
      expected: 0
    - expr: diff(pa - Rational(1,10)*((pa-5)**3 + (pa-10)**2), pa).subs(pa, (14-sqrt(61))/3)
      expected: 0
    - expr: (pa - Rational(1,10)*((pa-5)**3 + (pa-10)**2)).subs(pa, (14+sqrt(61))/3)
      expected: (493 + 122*sqrt(61))/270
    - expr: sign(diff(pa - Rational(1,10)*((pa-5)**3 + (pa-10)**2), pa, 2).subs(pa, (14+sqrt(61))/3))
      expected: -1
    - expr: floor(10*((pa - Rational(1,10)*((pa-5)**3 + (pa-10)**2)).subs(pa, (14+sqrt(61))/3)) + Rational(1,2))
      expected: 54
    - expr: (pa - Rational(1,10)*((pa-5)**3 + (pa-10)**2)).subs(pa, 0)
      expected: Rational(5,2)
:::

::: exercise
id: l2-optimisation.midterm-2025-ex4
number: "4"
statement: |
  Human taste makes him prefer tasty food rather then untasty but necessary food for the organism. Tasty food usually harms somebody to the cube of the swallowed amount while necessary food serves the body in an equal amount as that swallowed. Besides each unit of tasty food costs twice as much as a unit of needed food whose cost factor is \(1/3\) of its eaten amount. Finally a man can eat both foods daily in an amount of \(2\,\mathrm{kg}\).

  Which maximum proportion of tasty food can a man eat a day while minimizing the food costs and maximising his health?

  Hint: maximize the function \(2T+H-C\) where \(T\) stands for the daily amount of tasty food eaten, \(H\) stands for the food healthiness: it is the good done to the body by the needed food less the harm done by the tasty food and \(C\) stands for the daily food costs.
tier: exam
solution: |
  Let \(T\ge 0\) be the daily amount of tasty food and let \(N\) be the daily amount of needed food, with \(T+N\le 2\). Healthiness is \(H=N-T^3\). Cost is \(C=\frac13(2T+N)\). Then
  \[
  f=2T+H-C=\frac43 T-T^3+\frac23 N.
  \]
  The coefficient of \(N\) is positive, so on each slice of fixed \(T\) the maximum lies as far toward \(N=2-T\) as the constraint allows.

  For fixed \(N\), \(\partial f/\partial T=4/3-3T^2=0\) gives \(T=2/3\), admissible while \(N\le 2-2/3=4/3\). On that range \(f\) increases with \(N\), and at \(T=2/3\), \(N=4/3\) one has \(f=40/27\).

  When \(N\ge 4/3\) the admissible \(T\) cannot reach \(2/3\), so the maximum is on \(T+N=2\):
  \[
  f=\frac23 T-T^3+\frac43,\qquad f'=\frac23-3T^2.
  \]
  The critical point in \((0,2)\) is \(T=\sqrt{2}/3\). There \(f=(36+4\sqrt{2})/27>40/27\).

  The maximum of \(f\) is therefore at \(T=\sqrt{2}/3\) with \(T+N=2\). The proportion of tasty food is \(T/2=\sqrt{2}/6\).

  The key notes that imposing \(T+N=2\) from the start does not lose marks.
provenance: official-key
steps:
  - Model \(H=N-T^3\), \(C=\frac13(2T+N)\), \(T+N\le 2\).
  - Interior candidate \(T=2/3\) and the edge \(T+N=2\).
  - Maximum at \(T=\sqrt{2}/3\) on that edge, proportion \(\sqrt{2}/6\).
verification:
  checks:
    - expr: diff((Rational(2,3))*tt - tt**3 + Rational(4,3), tt).subs(tt, sqrt(2)/3)
      expected: "0"
    - expr: (sqrt(2)/3)/2
      expected: sqrt(2)/6
    - expr: "(Rational(4,3)*tt - tt**3 + Rational(2,3)*nn).subs({tt: sqrt(2)/3, nn: 2 - sqrt(2)/3})"
      expected: (36 + 4*sqrt(2))/27
    - expr: Rational(4,3)*Rational(2,3) - (Rational(2,3))**3 + Rational(2,3)*Rational(4,3)
      expected: Rational(40, 27)
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "4"
  points: 3
:::

::: exercise
id: l2-optimisation.midterm-2026-ex3
number: "3"
statement: |
  When reaching the sound velocity \(V_s\approx 300\,\mathrm{ms}^{-1}\) planes undergo a huge drag. The velocity is a function of the power \(p\) and the drag \(d\) as follows \(v=p-d\). In turn, the drag is a function of the speed: \(d=1/(V_s-v)\). Which maximum velocity can the plane reach? Which power must you feed?

  Help: \(\sqrt{x^2+1}\) is equivalent to \(x\) as \(x\to\infty\).
tier: exam
topics:
  - optimisation
pastExam:
  year: 2026
  paper: Midterm
  question: "3"
  points: 3
solution: |
  Rearrangement gives
  \[ p = v+\frac{1}{V_s-v}. \]
  Multiplying by \(V_s-v\) produces \(p(V_s-v)=v(V_s-v)+1\), hence
  \[ v^2-\bigl(p+V_s\bigr)v+p V_s-1=0. \]
  The solutions are
  \[ v(p)=\frac{p+V_s\pm\sqrt{(p-V_s)^2+4}}{2}. \]
  The physically relevant branch \(v<V_s\) is
  \[ v(p)=\frac{p+V_s-\sqrt{(p-V_s)^2+4}}{2}. \]

  Differentiating gives
  \[ v'(p)=\frac12\Biggl(1-\frac{p-V_s}{\sqrt{(p-V_s)^2+4}}\Biggr). \]
  The absolute value of the second term is strictly less than \(1\), so \(v'(p)>0\) and \(v\) is strictly increasing. As \(p\to+\infty\),
  \[ \sqrt{(p-V_s)^2+4}\sim p-V_s, \]
  and therefore
  \[ \lim_{p\to+\infty} v(p)=V_s. \]

  Equivalently, \(p(v)=v+1/(V_s-v)\) has derivative
  \[ p'(v)=1+\frac{1}{(V_s-v)^2}>0 \]
  for \(v<V_s\). So \(p\) is strictly increasing on that interval, and as \(v\to V_s\) one has \(p\to+\infty\).

  The plane can approach \(V_s\approx 300\,\mathrm{m\,s}^{-1}\) arbitrarily closely, and it cannot reach that speed with finite power.
provenance: official-key
steps:
  - The identity \(p=v+1/(V_s-v)\) and the minus branch of \(v(p)\).
  - The derivative \(v'(p)>0\) and the limit \(V_s\).
  - Finite power never attains \(V_s\).
verification:
  checks:
    - expr: (p + vs - sqrt((p - vs)**2 + 4))/2 + 1/(vs - (p + vs - sqrt((p - vs)**2 + 4))/2)
      expected: p
    - expr: limit((p + vs - sqrt((p - vs)**2 + 4))/2, p, oo)
      expected: vs
    - expr: diff(v + 1/(vs - v), v)
      expected: 1 + 1/(vs - v)**2
:::

::: exercise
id: l2-optimisation.midterm-2026-ex4
number: "4"
statement: |
  You have \(10\$\) that you want to invest in two shares. Let \(x\) be the amount you invest in the first. The shares are interdependent and have a loss \(L_1\) and \(L_2\) depending on the amount you invest on it. If you invest \(x\) on the first and \(y\) on the second the corresponding losses are \(L_1(x,y)=x^2+xy\) and \(L_2(x,y)=2y+xy\). Find \(x\) minimizing the total loss.
tier: exam
topics:
  - optimisation
pastExam:
  year: 2026
  paper: Midterm
  question: "4"
  points: 3
solution: |
  The budget is \(x+y=10\), so \(y=10-x\) with \(x\in[0,10]\). The total loss is
  \[
  \begin{aligned}
  L(x)&=x^2+2x(10-x)+2(10-x)\\
  &=-x^2+18x+20.
  \end{aligned}
  \]
  Then \(L'(x)=-2x+18\), so \(x=9\). This is a maximum, because \(L''(x)=-2<0\). The values at the endpoints are
  \[
  \begin{aligned}
  L(0)&=20,\\
  L(10)&=100.
  \end{aligned}
  \]
  The total loss is therefore minimal at \(x=0\), where \(L=20\).
provenance: official-key
steps:
  - The reduced loss \(L(x)=-x^2+18x+20\).
  - The critical point \(x=9\) is a maximum.
  - Comparison of the endpoints, minimum \(20\) at \(x=0\).
verification:
  checks:
    - expr: expand(x**2 + x*(10-x) + 2*(10-x) + x*(10-x))
      expected: -x**2 + 18*x + 20
    - expr: (-x**2 + 18*x + 20).subs(x, 0)
      expected: 20
    - expr: (-x**2 + 18*x + 20).subs(x, 10)
      expected: 100
    - expr: diff(-x**2 + 18*x + 20, x).subs(x, 9)
      expected: 0
    - expr: diff(-x**2 + 18*x + 20, x, 2)
      expected: -2
:::

::: exercise
id: l2-optimisation.midterm-predicted-a-ex4
number: "4"
statement: |
  A closed cylindrical can must hold \(1000\,\mathrm{cm}^3\). Which radius minimises the total surface area (both ends plus the side), and what is that area?
tier: exam
topics:
  - optimisation
solution: |
  The constraint \(\pi r^2 h = 1000\) gives \(h = 1000/(\pi r^2)\) for \(r > 0\). The area is
  \[
  A(r) = 2\pi r^2 + \frac{2000}{r}.
  \]
  Then
  \[
  A'(r) = 4\pi r - 2000/r^2,
  \]
  and \(A'(r) = 0\) yields
  \[
  r^3 = 500/\pi, \qquad r = (500/\pi)^{1/3}.
  \]
  The second derivative \(A''(r) = 4\pi + 4000/r^3\) is positive, so this critical point is a minimum. The matching height is \(h = 2r\). The minimal area is
  \[
  A = 6\pi r^2 = 300(2\pi)^{1/3}.
  \]
  At both ends of the domain, \(A(r) \to +\infty\) as \(r \to 0^+\) and as \(r \to +\infty\), so the interior critical point is the global minimum.
provenance: written-for-site
steps:
  - Write A(r) = 2\pi r^2 + 2000/r.
  - Solve A' = 0 to get r = (500/\pi)^{1/3}.
  - Check A'' > 0, obtain h = 2r and the minimal area.
verification:
  checks:
    - expr: 4*pi*(500/pi)**(Rational(1, 3)) - 2000/((500/pi)**(Rational(2, 3)))
      expected: "0"
    - expr: 1000/(pi*((500/pi)**(Rational(2, 3)))) - 2*(500/pi)**(Rational(1, 3))
      expected: "0"
    - expr: 6*pi*((500/pi)**(Rational(2, 3))) - 300*(2*pi)**(Rational(1, 3))
      expected: "0"
:::

::: exercise
id: l2-optimisation.midterm-predicted-b-ex3
number: "3"
statement: |
  A wire of length \(100\,\mathrm{cm}\) is cut into two pieces. One piece is bent into a square, the other into a circle. Where should you cut to maximise the total enclosed area, and where to minimise it?
tier: exam
topics:
  - optimisation
solution: |
  Let \(x\) be the length used for the square, with \(x \in [0, 100]\), and use \(100 - x\) for the circle. The enclosed area is
  \[
  A(x) = \frac{x^2}{16} + \frac{(100 - x)^2}{4\pi}.
  \]
  Then
  \[
  A'(x) = \frac{x}{8} - \frac{100 - x}{2\pi}.
  \]
  Setting \(A' = 0\) gives \(x = \dfrac{400}{\pi + 4}\). The second derivative \(A''(x) = \frac18 + \frac{1}{2\pi}\) is positive, so this interior point is a local minimum, with value \(A = \dfrac{2500}{\pi + 4}\). Comparing the endpoints:

  - \(A(0) = \dfrac{2500}{\pi}\) (the whole wire used for the circle),
  - \(A(100) = 625\) (the whole wire used for the square).

  The larger endpoint is \(A(0)\), so the enclosed area is maximised by making only the circle, and it is minimised by cutting at square length \(\dfrac{400}{\pi + 4}\).
provenance: written-for-site
steps:
  - Write A(x) on [0, 100].
  - Find the interior critical point and check it is a minimum.
  - Compare the endpoints and identify the maximum at the all-circle end.
verification:
  checks:
    - expr: (400/(pi + 4))/8 - (100 - 400/(pi + 4))/(2*pi)
      expected: "0"
    - expr: (400/(pi + 4))**2/16 + (100 - 400/(pi + 4))**2/(4*pi) - 2500/(pi + 4)
      expected: "0"
    - expr: 100**2/(4*pi) - 2500/pi
      expected: "0"
    - expr: 100**2/16 - 625
      expected: "0"
:::

::: exercise
id: l2-optimisation.ex-optimisation-cubic-intervals
tier: standard
topics: [optimisation, extrema]
statement: |
  Let \(f(x) = x^{3} - x\).

  (a) Find the local maximum and the local minimum of \(f\).

  (b) Does \(f\) have a global maximum or a global minimum on the open interval \((-2, 2)\)?

  (c) Find the global maximum and the global minimum of \(f\) on the closed interval \([-2, 2]\).
solution: |
  (a) The derivative is \(f'(x) = 3x^{2} - 1\), which is defined for every \(x\). It vanishes at \(x = \pm\frac{\sqrt{3}}{3}\). The derivative is

  - positive for \(x < -\frac{\sqrt{3}}{3}\),
  - negative between the two roots,
  - positive for \(x > \frac{\sqrt{3}}{3}\).

  The sign changes from positive to negative at \(x = -\frac{\sqrt{3}}{3}\), a local maximum with value \(f\bigl(-\frac{\sqrt{3}}{3}\bigr) = \frac{2\sqrt{3}}{9}\). The sign changes from negative to positive at \(x = \frac{\sqrt{3}}{3}\), a local minimum with value \(-\frac{2\sqrt{3}}{9}\).

  (b) Since \(2\sqrt{3} < 9\), the local maximum satisfies \(\frac{2\sqrt{3}}{9} < 1\). At \(x = 1.9\), which lies in \((-2, 2)\), \(f(1.9) = 6.859 - 1.9 = 4.959\), which is larger. So the local maximum is not the largest value, and the only other candidates are the endpoints, which are not in the interval. Hence no point is a global maximum. At \(x = -1.9\), \(f(-1.9) = -4.959\), which is smaller than the local minimum \(-\frac{2\sqrt{3}}{9}\) in the same way. On \((-2, 2)\), \(f\) has no global maximum and no global minimum.

  (c) The interval is closed and \(f\) is continuous, so both exist. The candidates are the critical values \(\pm\frac{\sqrt{3}}{3}\), which lie in \([-2, 2]\), and the endpoints. The values are
  \[
  \begin{aligned}
  f(-2)&=-6,\\
  f\bigl(-\frac{\sqrt{3}}{3}\bigr)&=\frac{2\sqrt{3}}{9},\\
  f\bigl(\frac{\sqrt{3}}{3}\bigr)&=-\frac{2\sqrt{3}}{9},\\
  f(2)&=6.
  \end{aligned}
  \]
  On \([-2, 2]\), the global maximum is \(6\) at \(x = 2\), and the global minimum is \(-6\) at \(x = -2\). Both sit at the endpoints.
provenance: written-for-site
steps:
  - Critical values \(\pm\sqrt{3}/3\), with the local maximum \(2\sqrt{3}/9\) and the local minimum \(-2\sqrt{3}/9\).
  - Values \(f(\pm 1.9) = \pm 4.959\) beat the local extrema, so there is no global extremum on \((-2, 2)\).
  - Candidate values on \([-2, 2]\), with maximum \(6\) at \(x = 2\) and minimum \(-6\) at \(x = -2\).
verification:
  checks:
    - expr: diff(x**3 - x, x).subs(x, sqrt(3)/3)
      expected: "0"
    - expr: (x**3 - x).subs(x, -sqrt(3)/3)
      expected: 2*sqrt(3)/9
    - expr: (x**3 - x).subs(x, sqrt(3)/3)
      expected: -2*sqrt(3)/9
    - expr: (x**3 - x).subs(x, Rational(19, 10))
      expected: Rational(4959, 1000)
    - expr: (x**3 - x).subs(x, Rational(-19, 10))
      expected: -Rational(4959, 1000)
    - expr: (x**3 - x).subs(x, 2)
      expected: "6"
    - expr: (x**3 - x).subs(x, -2)
      expected: "-6"
:::

::: exercise
id: l2-optimisation.ex-optimisation-rectangle-area-100
tier: standard
topics: [optimisation]
statement: |
  A rectangle has area \(100\).

  (a) Which side lengths give the smallest perimeter, and what is that perimeter?

  (b) Justify that the answer to (a) is a global minimum, and decide whether a rectangle of area \(100\) with the largest perimeter exists.
solution: |
  (a) Let the sides be \(x\) and \(y\). The constraint \(xy = 100\) gives \(y = \frac{100}{x}\), and \(x > 0\), so the domain is the open interval \((0, \infty)\) with no endpoints. The perimeter is
  \[
  P(x) = 2x + \frac{200}{x}.
  \]
  The derivative is \(P'(x) = 2 - \frac{200}{x^{2}}\). It equals zero when \(x^{2} = 100\), and the only positive solution is \(x = 10\). Then \(y = 10\) and \(P(10) = 40\). The smallest perimeter is \(40\), for the square of side \(10\).

  (b) The second derivative is \(P''(x) = \frac{400}{x^{3}}\), which is positive for \(x > 0\), and \(P''(10) = \frac{2}{5}\). So the single critical value \(x = 10\) is a local minimum. For a continuous function with one critical value, a local minimum there is the global minimum. Alternatively, \(P(x) \to \infty\) as \(x \to 0^+\) and as \(x \to \infty\), so the smallest value is attained inside the domain, and the only candidate is \(x = 10\).

  The same limits show that \(P\) has no upper bound. For every number \(M\), a thin rectangle has perimeter larger than \(M\). No rectangle of area \(100\) has the largest perimeter.
provenance: written-for-site
steps:
  - Constraint \(y = 100/x\) and perimeter \(P(x) = 2x + 200/x\) on \(x > 0\).
  - Critical value \(x = 10\), with \(P(10) = 40\) and \(P''(10) > 0\).
  - Single critical value gives the global minimum, and \(P \to \infty\) at both ends gives no maximum.
verification:
  checks:
    - expr: diff(2*x + 200/x, x).subs(x, 10)
      expected: "0"
    - expr: (2*x + 200/x).subs(x, 10)
      expected: "40"
    - expr: diff(2*x + 200/x, x, 2).subs(x, 10)
      expected: Rational(2, 5)
    - expr: limit(1/(2*x + 200/x), x, 0, dir='+')
      expected: "0"
    - expr: limit(1/(2*x + 200/x), x, oo)
      expected: "0"
:::

::: exercise
id: l2-optimisation.ex-optimisation-profit-model
tier: standard
topics: [optimisation]
statement: |
  An item sells at a price of \(x\) dollars, with \(0 \le x \le 1.5\). When the price is \(1.5\) dollars, \(5000\) items are sold. For every \(0.10\) dollars the price is lowered, \(1000\) more items are sold. The fixed cost is \(2000\) dollars, and each item costs \(0.50\) dollars to make.

  (a) Write the profit as a function of the price \(x\).

  (b) Which price maximises the profit, how many items are sold, and what is the profit?
solution: |
  (a) Let \(n\) be the number of items sold. The number sold is \(5000\) at the price \(1.5\), plus \(1000\) for every \(0.10\) dollars below \(1.5\), so
  \[
  \begin{aligned}
  n(x)&=5000 + 1000\cdot\frac{1.5 - x}{0.10}\\
  &=20000 - 10000x.
  \end{aligned}
  \]
  The profit is revenue minus costs, \(P = nx - 2000 - 0.50n\). Substituting \(n(x)\) gives
  \[
  \begin{aligned}
  P(x)&=(20000 - 10000x)\left(x - \frac{1}{2}\right)\\
  &\quad - 2000\\
  &=-10000x^{2} + 25000x - 12000
  \end{aligned}
  \]
  on the closed interval \([0, 1.5]\).

  (b) The derivative is \(P'(x) = -20000x + 25000\), which vanishes at \(x = 1.25\). This value lies in \([0, 1.5]\). The candidate values are
  \[
  \begin{aligned}
  P(0)&=-12000,\\
  P(1.25)&=3625,\\
  P(1.5)&=3000.
  \end{aligned}
  \]
  The maximum profit is \(3625\) dollars, at the price \(1.25\) dollars. At that price \(n = 20000 - 10000\cdot 1.25 = 7500\) items are sold.
provenance: written-for-site
steps:
  - Number sold \(n(x) = 20000 - 10000x\).
  - Profit \(P(x) = -10000x^{2} + 25000x - 12000\) on \([0, 1.5]\).
  - Critical value \(1.25\), compared with the endpoints, gives profit \(3625\) with \(7500\) items sold.
verification:
  checks:
    - expr: expand((20000 - 10000*x)*(x - Rational(1, 2)) - 2000)
      expected: -10000*x**2 + 25000*x - 12000
    - expr: diff(-10000*x**2 + 25000*x - 12000, x).subs(x, Rational(5, 4))
      expected: "0"
    - expr: (-10000*x**2 + 25000*x - 12000).subs(x, Rational(5, 4))
      expected: "3625"
    - expr: (-10000*x**2 + 25000*x - 12000).subs(x, 0)
      expected: "-12000"
    - expr: (-10000*x**2 + 25000*x - 12000).subs(x, Rational(3, 2))
      expected: "3000"
    - expr: (20000 - 10000*x).subs(x, Rational(5, 4))
      expected: "7500"
:::

::: exercise
id: l2-optimisation.ex-optimisation-moving-interval
tier: standard
topics: [optimisation]
statement: |
  Let \(f(x) = -x^{2} + 4x - 3\), and for a real number \(a\) let \(M(a)\) be the largest value of \(f\) on the closed interval \([a, a + 2]\).

  (a) Find \(M(-1)\), \(M(1)\) and \(M(3)\).

  (b) Find \(M(a)\) for every real \(a\).
solution: |
  The derivative is \(f'(x) = -2x + 4\), which vanishes only at \(x = 2\), where \(f(2) = 1\). Because \(f'\) is positive for \(x < 2\) and negative for \(x > 2\), \(f\) increases up to \(2\) and decreases after it.

  (a) For \(a = -1\) the interval is \([-1, 1]\). The critical value \(2\) lies outside, so the maximum is at an endpoint: \(f(-1) = -8\) and \(f(1) = 0\), and \(M(-1) = 0\). For \(a = 1\) the interval is \([1, 3]\), which contains \(2\), so \(M(1) = f(2) = 1\). For \(a = 3\) the interval is \([3, 5]\). Again \(2\) lies outside, and \(f(3) = 0\) is larger than \(f(5) = -8\), so \(M(3) = 0\).

  (b) There are three cases.

  If \(a + 2 < 2\), that is \(a < 0\), the whole interval lies where \(f\) increases, so the maximum is at the right end:
  \[
  \begin{aligned}
  M(a)&=f(a + 2)\\
  &=-(a + 2)^{2} + 4(a + 2) - 3\\
  &=1 - a^{2}.
  \end{aligned}
  \]
  If \(a \le 2 \le a + 2\), that is \(0 \le a \le 2\), the interval contains \(2\), so \(M(a) = f(2) = 1\).

  If \(a > 2\), the whole interval lies where \(f\) decreases, so the maximum is at the left end: \(M(a) = f(a) = -a^{2} + 4a - 3\).

  The cases fit together: at \(a = 0\), \(1 - a^{2} = 1\), and at \(a = 2\), \(-a^{2} + 4a - 3 = 1\). The checks in (a) agree: \(M(-1) = 1 - 1 = 0\) and \(M(3) = -9 + 12 - 3 = 0\).
provenance: written-for-site
steps:
  - Critical value \(x = 2\) with \(f(2) = 1\), and \(f\) increases before it and decreases after it.
  - 'Part (a): \(M(-1) = 0\), \(M(1) = 1\), \(M(3) = 0\).'
  - 'Part (b): \(1 - a^{2}\) for \(a < 0\), \(1\) for \(0 \le a \le 2\), \(-a^{2} + 4a - 3\) for \(a > 2\).'
verification:
  checks:
    - expr: diff(-x**2 + 4*x - 3, x).subs(x, 2)
      expected: "0"
    - expr: (-x**2 + 4*x - 3).subs(x, 2)
      expected: "1"
    - expr: (-x**2 + 4*x - 3).subs(x, -1)
      expected: "-8"
    - expr: (-x**2 + 4*x - 3).subs(x, 3)
      expected: "0"
    - expr: expand((-x**2 + 4*x - 3).subs(x, a + 2)) - (1 - a**2)
      expected: "0"
    - expr: (1 - a**2).subs(a, 0)
      expected: "1"
    - expr: (-a**2 + 4*a - 3).subs(a, 2)
      expected: "1"
:::

::: exercise
id: l2-optimisation.handout-6-1-1
number: "6.1.1"
tier: standard
topics:
  - optimisation
  - extrema
statement: |
  Let \(f(x) = 1 + 4x - x^2\) for \(x \le 3\) and \(f(x) = \dfrac{x+5}{2}\) for \(x > 3\). Find the maximum and minimum values of \(f(x)\) for \(x\) in \([0, 4]\). Sketch the graph of \(f\) to check your answers.
solution: |
  Both pieces give \(4\) at \(x = 3\), because \(1 + 12 - 9 = 4\) and \(\frac{3+5}{2} = 4\). So \(f\) is continuous on \([0, 4]\), and the closed-interval method applies.

  The derivative on each piece is
  \[
  \begin{aligned}
  f'(x)&=4 - 2x \quad (0 \le x < 3),\\
  f'(x)&=\tfrac{1}{2} \quad (3 < x \le 4).
  \end{aligned}
  \]
  The first piece has \(f'(x) = 0\) at \(x = 2\), which lies in \([0, 3)\). The second piece has no zero of \(f'\). At \(x = 3\) the left slope is \(4 - 6 = -2\) and the right slope is \(\frac{1}{2}\). The slopes differ, so \(f'(3)\) is undefined and \(x = 3\) is a critical value.

  The candidates are the critical values \(2\) and \(3\) and the endpoints \(0\) and \(4\):
  \[
  \begin{aligned}
  f(0)&=1,\\
  f(2)&=5,\\
  f(3)&=4,\\
  f(4)&=\tfrac{9}{2}.
  \end{aligned}
  \]
  The graph rises from \((0, 1)\) to the peak \((2, 5)\), falls to a corner at \((3, 4)\), and then rises along a straight line to \((4, \frac{9}{2})\). This agrees with the values.

  The maximum value is \(5\), at \(x = 2\), and the minimum value is \(1\), at \(x = 0\).
provenance: handout-answer
steps:
  - Both pieces equal 4 at x = 3, so f is continuous on [0, 4].
  - Critical values x = 2 (zero of f') and x = 3 (corner, f' undefined).
  - Values f(0) = 1, f(2) = 5, f(3) = 4, f(4) = 9/2.
  - Maximum 5 at x = 2, minimum 1 at x = 0.
verification:
  checks:
    - expr: (1 + 4*x - x**2).subs(x, 3)
      expected: 4
    - expr: ((x + 5)/2).subs(x, 3)
      expected: 4
    - expr: diff(1 + 4*x - x**2, x).subs(x, 2)
      expected: 0
    - expr: diff(1 + 4*x - x**2, x).subs(x, 3)
      expected: -2
    - expr: diff((x + 5)/2, x)
      expected: Rational(1, 2)
    - expr: (1 + 4*x - x**2).subs(x, 2)
      expected: 5
    - expr: (1 + 4*x - x**2).subs(x, 0)
      expected: 1
    - expr: ((x + 5)/2).subs(x, 4)
      expected: Rational(9, 2)
    - expr: Max(1, 5, 4, Rational(9, 2))
      expected: 5
    - expr: Min(1, 5, 4, Rational(9, 2))
      expected: 1
:::


::: exercise
id: l2-optimisation.handout-6-1-4
number: "6.1.4"
tier: standard
topics:
  - optimisation
statement: |
  A box with a square base and no top is to hold a volume \(100\). Find the dimensions of the box that requires the least material for the five sides. Also find the ratio of the height to the side of the base.
solution: |
  Let the base have side \(w\) and let the height be \(h\), with \(w > 0\) and \(h > 0\). The material is the base \(w^2\) plus four sides of area \(wh\), so the quantity to minimise is
  \[
  A = w^2 + 4wh.
  \]
  The volume condition \(w^2 h = 100\) gives \(h = \dfrac{100}{w^2}\). In one variable,
  \[
  A(w) = w^2 + \frac{400}{w}, \qquad w > 0.
  \]
  The domain is open, so there are no endpoints.

  The derivative is
  \[
  A'(w) = 2w - \frac{400}{w^2} = \frac{2w^3 - 400}{w^2}.
  \]
  It vanishes only when \(w^3 = 200\), that is \(w = 200^{1/3} = 2\cdot 5^{2/3}\), because \(8 \cdot 25 = 200\). The second derivative \(A''(w) = 2 + \dfrac{800}{w^3}\) is positive for \(w > 0\), so this single critical value is a local minimum, and therefore the global minimum.

  The height is
  \[
  \begin{aligned}
  h&=\frac{100}{w^2}=\frac{100}{4\cdot 5^{4/3}}\\
  &=5^{2/3}.
  \end{aligned}
  \]
  The box has a square base of side \(w = 2\cdot 5^{2/3} \approx 5.85\) and height \(h = 5^{2/3} \approx 2.92\). The ratio is \(\dfrac{h}{w} = \dfrac{1}{2}\).
provenance: handout-answer
steps:
  - Area A = w^2 + 4wh with h = 100/w^2, so A(w) = w^2 + 400/w for w > 0.
  - A'(w) = 0 gives w^3 = 200, w = 2 * 5^(2/3).
  - A'' > 0, so the single critical value is the global minimum.
  - Height h = 5^(2/3), ratio h/w = 1/2.
verification:
  checks:
    - expr: diff(w**2 + 400/w, w).subs(w, 2*5**Rational(2, 3))
      expected: 0
    - expr: (2*5**Rational(2, 3))**3
      expected: 200
    - expr: sign(diff(w**2 + 400/w, w, 2).subs(w, 2*5**Rational(2, 3)))
      expected: 1
    - expr: 100/(2*5**Rational(2, 3))**2
      expected: 5**Rational(2, 3)
    - expr: 5**Rational(2, 3)/(2*5**Rational(2, 3))
      expected: Rational(1, 2)
    - expr: (w**2 + 4*w*(100/w**2)).subs(w, 2*5**Rational(2, 3)) - (w**2 + 400/w).subs(w, 2*5**Rational(2, 3))
      expected: 0
:::


::: exercise
id: l2-optimisation.handout-6-1-5
number: "6.1.5"
tier: standard
topics:
  - optimisation
statement: |
  A box with a square base is to hold a volume \(200\). The bottom and top are formed by folding in flaps from all four sides, so that the bottom and the top each consist of two layers of cardboard. Find the dimensions of the box that requires the least material. Also find the ratio of the height to the side of the base.
solution: |
  Let the base have side \(s\) and let the height be \(h\), with \(s > 0\). The bottom and the top each use two layers, so each counts \(2s^2\) of material. The four sides use \(sh\) each. The quantity to minimise is
  \[
  A = 2s^2 + 2s^2 + 4sh = 4s^2 + 4sh.
  \]
  The volume condition \(s^2 h = 200\) gives \(h = \dfrac{200}{s^2}\), so
  \[
  A(s) = 4s^2 + \frac{800}{s}, \qquad s > 0.
  \]
  The domain is open, so there are no endpoints.

  The derivative is
  \[
  A'(s) = 8s - \frac{800}{s^2} = \frac{8s^3 - 800}{s^2}.
  \]
  It vanishes only when \(s^3 = 100\), that is \(s = 100^{1/3} \approx 4.64\). The second derivative \(A''(s) = 8 + \dfrac{1600}{s^3}\) is positive, so this single critical value is the global minimum.

  Since \(200 = 2s^3\) at this value, the height is
  \[
  h = \frac{200}{s^2} = \frac{2s^3}{s^2} = 2s = 2\cdot 100^{1/3}.
  \]
  The box measures \(100^{1/3} \times 100^{1/3} \times 2\cdot 100^{1/3}\), about \(4.64 \times 4.64 \times 9.28\). The ratio of the height to the side of the base is \(\dfrac{h}{s} = 2\).
provenance: handout-answer
steps:
  - Material A = 4s^2 + 4sh with h = 200/s^2, so A(s) = 4s^2 + 800/s for s > 0.
  - A'(s) = 0 gives s^3 = 100, and A'' > 0.
  - Height h = 2s = 2 * 100^(1/3), ratio h/s = 2.
verification:
  checks:
    - expr: diff(4*s**2 + 800/s, s).subs(s, 100**Rational(1, 3))
      expected: 0
    - expr: sign(diff(4*s**2 + 800/s, s, 2).subs(s, 100**Rational(1, 3)))
      expected: 1
    - expr: 200/(100**Rational(1, 3))**2
      expected: 2*100**Rational(1, 3)
    - expr: (200/(100**Rational(1, 3))**2)/100**Rational(1, 3)
      expected: 2
    - expr: expand(4*s**2 + 4*s*(200/s**2)) - (4*s**2 + 800/s)
      expected: 0
:::


::: exercise
id: l2-optimisation.handout-6-1-7
number: "6.1.7"
tier: basic
topics:
  - optimisation
statement: |
  You have \(100\) feet of fence to make a rectangular play area alongside the wall of your house. The wall of the house bounds one side. What is the largest area possible, in square feet, for the play area?
solution: |
  Let the two sides perpendicular to the wall have length \(y\) and let the side parallel to the wall have length \(x\). Only three sides are fenced, so the constraint is \(x + 2y = 100\), that is \(x = 100 - 2y\). Both lengths are at least \(0\), so \(y\) lies in \([0, 50]\). The area is
  \[
  A(y) = (100 - 2y)y = 100y - 2y^2.
  \]
  The derivative is \(A'(y) = 100 - 4y\). It equals zero at \(y = 25\), which lies in \([0, 50]\). The candidate values are
  \[
  \begin{aligned}
  A(0)&=0,\\
  A(25)&=1250,\\
  A(50)&=0.
  \end{aligned}
  \]
  The largest possible area is \(1250\) square feet, with \(y = 25\) and \(x = 50\).
provenance: handout-answer
steps:
  - Constraint x = 100 - 2y and area A(y) = 100y - 2y^2 on [0, 50].
  - Critical value y = 25, with A(25) = 1250.
  - Endpoint areas are 0, so the maximum is 1250 square feet.
verification:
  checks:
    - expr: diff((100 - 2*y)*y, y)
      expected: 100 - 4*y
    - expr: diff((100 - 2*y)*y, y).subs(y, 25)
      expected: 0
    - expr: ((100 - 2*y)*y).subs(y, 25)
      expected: 1250
    - expr: ((100 - 2*y)*y).subs(y, 0)
      expected: 0
    - expr: ((100 - 2*y)*y).subs(y, 50)
      expected: 0
    - expr: (100 - 2*y).subs(y, 25)
      expected: 50
:::


::: exercise
id: l2-optimisation.handout-6-1-10
number: "6.1.10"
tier: standard
topics:
  - optimisation
statement: |
  Find the area of the largest rectangle that fits inside a semicircle of radius \(10\), with one side of the rectangle along the diameter of the semicircle.
solution: |
  Place the centre of the semicircle at the origin, so the arc is \(y = \sqrt{100 - x^2}\). Let the rectangle have its two lower corners at \((\pm x, 0)\) and its two upper corners on the arc at height \(\sqrt{100 - x^2}\), with \(x\) in \([0, 10]\). The area is
  \[
  A(x) = 2x\sqrt{100 - x^2}.
  \]
  The area is never negative, so \(A\) and \(A^2\) have the same maximum point. The square is a polynomial:
  \[
  A(x)^2 = 4x^2(100 - x^2) = 400x^2 - 4x^4.
  \]
  Its derivative is
  \[
  \frac{d}{dx}A^2 = 800x - 16x^3 = 16x(50 - x^2),
  \]
  which vanishes at \(x = 0\) and at \(x = \sqrt{50} = 5\sqrt{2} \approx 7.07\). Both lie in \([0, 10]\). The candidate values of \(A^2\) are
  \[
  \begin{aligned}
  A(0)^2&=0,\\
  A(5\sqrt{2})^2&=4\cdot 50\cdot 50=10000,\\
  A(10)^2&=0.
  \end{aligned}
  \]
  The largest rectangle has half-width \(5\sqrt{2}\) and height \(5\sqrt{2}\), and its area is \(\sqrt{10000} = 100\).
provenance: handout-answer
steps:
  - Area A(x) = 2x sqrt(100 - x^2) on [0, 10].
  - Maximise A^2 = 400x^2 - 4x^4, with critical value x = 5 sqrt(2).
  - A^2 = 10000 there and 0 at the endpoints, so the largest area is 100.
verification:
  checks:
    - expr: diff(400*x**2 - 4*x**4, x).subs(x, 5*sqrt(2))
      expected: 0
    - expr: expand(4*x**2*(100 - x**2))
      expected: 400*x**2 - 4*x**4
    - expr: (400*x**2 - 4*x**4).subs(x, 5*sqrt(2))
      expected: 10000
    - expr: (2*x*sqrt(100 - x**2)).subs(x, 5*sqrt(2))
      expected: 100
    - expr: sqrt(100 - (5*sqrt(2))**2)
      expected: 5*sqrt(2)
:::


::: exercise
id: l2-optimisation.handout-6-1-12
number: "6.1.12"
tier: standard
topics:
  - optimisation
statement: |
  For a cylinder with surface area \(50\), including the top and the bottom, find the ratio of the height to the base radius that maximises the volume.
solution: |
  Let the base radius be \(r\) and the height \(h\). The surface area is the two ends plus the side, so
  \[
  2\pi r^2 + 2\pi r h = 50, \qquad h = \frac{25 - \pi r^2}{\pi r}.
  \]
  The height is at least \(0\) exactly when \(r \le 5/\sqrt{\pi}\), so \(r\) lies in \([0, 5/\sqrt{\pi}]\). The volume is
  \[
  V(r) = \pi r^2 h = 25r - \pi r^3.
  \]
  The derivative is \(V'(r) = 25 - 3\pi r^2\). It vanishes at
  \[
  r = \frac{5}{\sqrt{3\pi}} \approx 1.63,
  \]
  which lies in \([0, 5/\sqrt{\pi}]\). At both endpoints \(V = r(25 - \pi r^2) = 0\), while \(V > 0\) at the critical value, so the critical value gives the maximum.

  At this value \(\pi r^2 = \frac{25}{3}\). The ratio is
  \[
  \begin{aligned}
  \frac{h}{r}&=\frac{25 - \pi r^2}{\pi r^2}\\
  &=\frac{25 - 25/3}{25/3}=2.
  \end{aligned}
  \]
  The volume is largest when the height equals the diameter, \(\dfrac{h}{r} = 2\).
provenance: handout-answer
steps:
  - Surface condition gives h = (25 - pi r^2)/(pi r), so V(r) = 25r - pi r^3 on [0, 5/sqrt(pi)].
  - V'(r) = 0 gives r = 5/sqrt(3 pi), and V = 0 at both endpoints.
  - At this radius h/r = (25 - pi r^2)/(pi r^2) = 2.
verification:
  checks:
    - expr: expand(pi*r**2*(25 - pi*r**2)/(pi*r)) - (25*r - pi*r**3)
      expected: 0
    - expr: diff(25*r - pi*r**3, r).subs(r, 5/sqrt(3*pi))
      expected: 0
    - expr: ((25 - pi*r**2)/(pi*r**2)).subs(r, 5/sqrt(3*pi))
      expected: 2
    - expr: (2*pi*r**2 + 2*pi*r*(2*r)).subs(r, 5/sqrt(3*pi))
      expected: 50
    - expr: (25*r - pi*r**3).subs(r, 5/sqrt(3*pi))
      expected: 250/(3*sqrt(3*pi))
    - expr: (25*r - pi*r**3).subs(r, 5/sqrt(pi))
      expected: 0
:::


::: exercise
id: l2-optimisation.handout-6-1-14
number: "6.1.14"
tier: standard
topics:
  - optimisation
statement: |
  You want to make cylindrical containers to hold \(1\) liter (\(1000\) cubic centimeters) using the least amount of construction material. The side is made from a rectangular piece of material, and this can be done with no material wasted. However, the top and bottom are cut from squares of side \(2r\), so that \(2(2r)^2 = 8r^2\) of material is needed, rather than the \(2\pi r^2\) that is the total area of the top and bottom. Find the dimensions of the container that uses the least amount of material, and find the ratio of the height to the radius for this container.
solution: |
  Let the radius be \(r > 0\) and the height \(h\). The side is a rectangle of area \(2\pi r h\), and the ends need \(8r^2\), so the material is
  \[
  M = 2\pi r h + 8r^2.
  \]
  The volume condition \(\pi r^2 h = 1000\) gives \(h = \dfrac{1000}{\pi r^2}\). Then \(2\pi r h = \dfrac{2000}{r}\), and
  \[
  M(r) = \frac{2000}{r} + 8r^2, \qquad r > 0.
  \]
  The domain is open, so there are no endpoints.

  The derivative is
  \[
  M'(r) = -\frac{2000}{r^2} + 16r = \frac{16r^3 - 2000}{r^2}.
  \]
  It vanishes only when \(r^3 = 125\), that is \(r = 5\). The second derivative \(M''(r) = \dfrac{4000}{r^3} + 16\) is positive, so this single critical value is the global minimum.

  The height is
  \[
  h = \frac{1000}{25\pi} = \frac{40}{\pi} \approx 12.7.
  \]
  The container has radius \(5\) cm and height \(\dfrac{40}{\pi}\) cm, and the ratio is \(\dfrac{h}{r} = \dfrac{8}{\pi}\). The material used is \(M(5) = 600\) cm\(^2\).
provenance: handout-answer
steps:
  - Material M = 2 pi r h + 8 r^2 with h = 1000/(pi r^2), so M(r) = 2000/r + 8 r^2.
  - M'(r) = 0 gives r^3 = 125, r = 5, and M'' > 0.
  - Height h = 40/pi, ratio h/r = 8/pi.
verification:
  checks:
    - expr: diff(2000/r + 8*r**2, r).subs(r, 5)
      expected: 0
    - expr: sign(diff(2000/r + 8*r**2, r, 2).subs(r, 5))
      expected: 1
    - expr: 1000/(pi*5**2)
      expected: 40/pi
    - expr: (1000/(pi*5**2))/5
      expected: 8/pi
    - expr: (2000/r + 8*r**2).subs(r, 5)
      expected: 600
    - expr: expand(2*pi*r*(1000/(pi*r**2)) + 8*r**2) - (2000/r + 8*r**2)
      expected: 0
:::


::: exercise
id: l2-optimisation.handout-6-1-16
number: "6.1.16"
tier: standard
topics:
  - optimisation
statement: |
  Given a right circular cone, you put an upside-down cone inside it so that its vertex is at the centre of the base of the larger cone and its base is parallel to the base of the larger cone. If you choose the upside-down cone to have the largest possible volume, what fraction of the volume of the larger cone does it occupy? Let \(H\) and \(R\) be the height and base radius of the larger cone, and let \(h\) and \(r\) be the height and base radius of the smaller cone. Hint: use similar triangles to get an equation relating \(h\) and \(r\).
solution: |
  Measure heights from the base of the larger cone. The smaller cone has its vertex at height \(0\) and its base, a circle of radius \(r\), at height \(h\), with \(h\) in \([0, H]\). The rim of that circle lies on the surface of the larger cone. At height \(h\) the larger cone has radius \(R\dfrac{H - h}{H}\), because its radius falls linearly from \(R\) at height \(0\) to \(0\) at height \(H\). This is the similar-triangles relation:
  \[
  r = R\,\frac{H - h}{H}.
  \]
  The volume of the smaller cone is
  \[
  V(h) = \frac{\pi r^2 h}{3} = \frac{\pi R^2}{3H^2}\,h(H - h)^2.
  \]
  The derivative of \(h(H - h)^2\) is
  \[
  \begin{aligned}
  (H - h)^2 - 2h(H - h)&=(H - h)(H - 3h),
  \end{aligned}
  \]
  so \(V'(h) = 0\) at \(h = H\) and at \(h = \dfrac{H}{3}\). Both lie in \([0, H]\). The volume is \(0\) at \(h = 0\) and at \(h = H\), so the maximum is at \(h = \dfrac{H}{3}\). There \(r = \dfrac{2R}{3}\) and
  \[
  \begin{aligned}
  V\!\left(\tfrac{H}{3}\right)&=\frac{\pi R^2}{3H^2}\cdot\frac{H}{3}\cdot\frac{4H^2}{9}\\
  &=\frac{4\pi R^2 H}{81}.
  \end{aligned}
  \]
  The larger cone has volume \(\dfrac{\pi R^2 H}{3}\), so the fraction is
  \[
  \frac{4\pi R^2 H/81}{\pi R^2 H/3} = \frac{4}{27}.
  \]
provenance: handout-answer
steps:
  - Similar triangles give r = R(H - h)/H, so V(h) = pi R^2 h (H - h)^2 / (3 H^2) on [0, H].
  - V'(h) = 0 at h = H/3, and V = 0 at both endpoints.
  - V(H/3) = 4 pi R^2 H / 81, which is 4/27 of the larger cone.
verification:
  checks:
    - expr: simplify(diff(h*(H - h)**2, h) - (H - h)*(H - 3*h))
      expected: 0
    - expr: diff(pi*R**2*h*(H - h)**2/(3*H**2), h).subs(h, H/3)
      expected: 0
    - expr: simplify((pi*R**2*h*(H - h)**2/(3*H**2)).subs(h, H/3))
      expected: 4*pi*R**2*H/81
    - expr: simplify((pi*R**2*h*(H - h)**2/(3*H**2)).subs(h, H/3)/(pi*R**2*H/3))
      expected: Rational(4, 27)
    - expr: (R*(H - h)/H).subs(h, H/3)
      expected: 2*R/3
:::


::: exercise
id: l2-optimisation.handout-6-1-18
number: "6.1.18"
tier: exam
topics:
  - optimisation
statement: |
  A container holding a fixed volume is being made in the shape of a cylinder with a hemispherical top. The hemispherical top has the same radius as the cylinder. Find the ratio of the height to the radius of the cylinder that minimises the cost of the container if

  (a) the cost per unit area of the top is twice as great as the cost per unit area of the side, and the container is made with no bottom;

  (b) the same as in (a), except that the container is made with a circular bottom, for which the cost per unit area is \(1.5\) times the cost per unit area of the side.
solution: |
  Let the radius be \(r > 0\), the height of the cylinder part \(h\), and the fixed volume \(V\). Let \(c\) be the cost per unit area of the side. The volume is the cylinder plus the hemisphere,
  \[
  V = \pi r^2 h + \tfrac{2}{3}\pi r^3, \qquad h = \frac{V}{\pi r^2} - \frac{2r}{3}.
  \]
  The side has area \(2\pi r h\), the hemispherical top has area \(2\pi r^2\), and the bottom disc has area \(\pi r^2\). Then
  \[
  2\pi r h = \frac{2V}{r} - \frac{4}{3}\pi r^2.
  \]

  (a) The top costs \(2c\) per unit area and there is no bottom, so
  \[
  \begin{aligned}
  \frac{C}{c}&=2\pi r h + 2\cdot 2\pi r^2\\
  &=\frac{2V}{r} + \frac{8}{3}\pi r^2.
  \end{aligned}
  \]
  The derivative is
  \[
  \frac{d}{dr}\frac{C}{c} = -\frac{2V}{r^2} + \frac{16}{3}\pi r,
  \]
  and it vanishes only when \(r^3 = \dfrac{3V}{8\pi}\), that is \(V = \dfrac{8\pi r^3}{3}\). The second derivative \(\dfrac{4V}{r^3} + \dfrac{16\pi}{3}\) is positive, so the derivative increases and changes sign from negative to positive at this value. It is the global minimum. With \(V = \frac{8\pi r^3}{3}\),
  \[
  h = \frac{8r}{3} - \frac{2r}{3} = 2r.
  \]
  The ratio is \(\dfrac{h}{r} = 2\).

  (b) The bottom costs \(1.5c\) per unit area, which adds \(\frac{3}{2}\pi r^2\). So
  \[
  \begin{aligned}
  \frac{C}{c}&=\frac{2V}{r} + \frac{8}{3}\pi r^2 + \frac{3}{2}\pi r^2\\
  &=\frac{2V}{r} + \frac{25}{6}\pi r^2.
  \end{aligned}
  \]
  The derivative is \(-\dfrac{2V}{r^2} + \dfrac{25}{3}\pi r\), which vanishes only when \(r^3 = \dfrac{6V}{25\pi}\), that is \(V = \dfrac{25\pi r^3}{6}\). The second derivative is again positive, so this value is the global minimum. Then
  \[
  h = \frac{25r}{6} - \frac{4r}{6} = \frac{7r}{2}.
  \]
  The ratio is \(\dfrac{h}{r} = \dfrac{7}{2}\).
provenance: handout-answer
steps:
  - Volume gives h = V/(pi r^2) - 2r/3, so 2 pi r h = 2V/r - (4/3) pi r^2.
  - Part (a) cost C/c = 2V/r + (8/3) pi r^2, critical value V = 8 pi r^3 / 3, h = 2r.
  - Part (b) cost C/c = 2V/r + (25/6) pi r^2, critical value V = 25 pi r^3 / 6, h = 7r/2.
  - Ratios 2 and 7/2.
verification:
  checks:
    - expr: expand(2*pi*r*(V/(pi*r**2) - 2*r/3) + 2*(2*pi*r**2)) - (2*V/r + 8*pi*r**2/3)
      expected: 0
    - expr: diff(2*V/r + 8*pi*r**2/3, r).subs(V, 8*pi*r**3/3)
      expected: 0
    - expr: ((V/(pi*r**2) - 2*r/3)/r).subs(V, 8*pi*r**3/3)
      expected: 2
    - expr: Rational(8, 3) + Rational(3, 2)
      expected: Rational(25, 6)
    - expr: diff(2*V/r + 25*pi*r**2/6, r).subs(V, 25*pi*r**3/6)
      expected: 0
    - expr: ((V/(pi*r**2) - 2*r/3)/r).subs(V, 25*pi*r**3/6)
      expected: Rational(7, 2)
:::


::: exercise
id: l2-optimisation.handout-6-1-19
number: "6.1.19"
tier: standard
topics:
  - optimisation
statement: |
  A piece of cardboard is \(1\) meter by \(\frac{1}{2}\) meter. A square is to be cut from each corner and the sides folded up to make an open-top box. What are the dimensions of the box with the maximum possible volume?
solution: |
  Let the side of each cut square be \(x\) metres. The box has height \(x\), length \(1 - 2x\) and width \(\frac{1}{2} - 2x\). Both lengths must be at least \(0\), so \(x\) lies in \([0, \frac{1}{4}]\). The volume is
  \[
  \begin{aligned}
  V(x)&=x(1 - 2x)\left(\tfrac{1}{2} - 2x\right)\\
  &=4x^3 - 3x^2 + \tfrac{1}{2}x.
  \end{aligned}
  \]
  The derivative is
  \[
  V'(x) = 12x^2 - 6x + \tfrac{1}{2},
  \]
  and \(V'(x) = 0\) is the same as \(24x^2 - 12x + 1 = 0\). The quadratic formula gives
  \[
  x = \frac{12 \pm \sqrt{48}}{48} = \frac{1}{4} \pm \frac{\sqrt{3}}{12}.
  \]
  The root with the plus sign exceeds \(\frac{1}{4}\), so it is outside the interval. The other root,
  \[
  x = \frac{1}{4} - \frac{\sqrt{3}}{12} \approx 0.106,
  \]
  lies in \([0, \frac{1}{4}]\). The volume is \(0\) at both endpoints \(x = 0\) and \(x = \frac{1}{4}\) and positive in between, so this critical value gives the maximum, with
  \[
  V = \frac{\sqrt{3}}{72} \approx 0.024\ \text{m}^3.
  \]
  At \(x = \frac{1}{4} - \frac{\sqrt{3}}{12}\) the other two dimensions are
  \[
  \begin{aligned}
  1 - 2x&=\frac{1}{2} + \frac{\sqrt{3}}{6},\\
  \tfrac{1}{2} - 2x&=\frac{\sqrt{3}}{6}.
  \end{aligned}
  \]
  The box measures \(\dfrac{\sqrt{3}}{6}\) by \(\left(\dfrac{\sqrt{3}}{6} + \dfrac{1}{2}\right)\) by \(\left(\dfrac{1}{4} - \dfrac{\sqrt{3}}{12}\right)\) metres, about \(0.289 \times 0.789 \times 0.106\).
provenance: handout-answer
steps:
  - Cut square x gives V(x) = x(1 - 2x)(1/2 - 2x) on [0, 1/4].
  - V'(x) = 12x^2 - 6x + 1/2 = 0 has roots 1/4 plus or minus sqrt(3)/12, and only the smaller root is in the interval.
  - Dimensions sqrt(3)/6 by (sqrt(3)/6 + 1/2) by (1/4 - sqrt(3)/12) metres.
verification:
  checks:
    - expr: expand(x*(1 - 2*x)*(Rational(1, 2) - 2*x))
      expected: 4*x**3 - 3*x**2 + x/2
    - expr: diff(4*x**3 - 3*x**2 + x/2, x)
      expected: 12*x**2 - 6*x + Rational(1, 2)
    - expr: sorted(solve(24*x**2 - 12*x + 1, x))
      expected: "[Rational(1, 4) - sqrt(3)/12, Rational(1, 4) + sqrt(3)/12]"
    - expr: (1 - 2*x).subs(x, Rational(1, 4) - sqrt(3)/12)
      expected: Rational(1, 2) + sqrt(3)/6
    - expr: (Rational(1, 2) - 2*x).subs(x, Rational(1, 4) - sqrt(3)/12)
      expected: sqrt(3)/6
    - expr: (x*(1 - 2*x)*(Rational(1, 2) - 2*x)).subs(x, Rational(1, 4) - sqrt(3)/12)
      expected: sqrt(3)/72
    - expr: (x*(1 - 2*x)*(Rational(1, 2) - 2*x)).subs(x, Rational(1, 4))
      expected: 0
    - expr: sign(sqrt(3)/12)
      expected: 1
:::


::: exercise
id: l2-optimisation.handout-6-1-20
number: "6.1.20"
tier: standard
topics:
  - optimisation
statement: |
  (a) A square piece of cardboard of side \(a\) is used to make an open-top box by cutting out a small square from each corner and bending up the sides. How large a square should be cut from each corner in order that the box have maximum volume?

  (b) What if the piece of cardboard used to make the box is a rectangle of sides \(a\) and \(b\)?
solution: |
  (a) Let the cut square have side \(x\). The box has height \(x\) and a square base of side \(a - 2x\), so \(x\) lies in \([0, a/2]\) and
  \[
  V(x) = x(a - 2x)^2.
  \]
  The derivative is
  \[
  \begin{aligned}
  V'(x)&=(a - 2x)^2 - 4x(a - 2x)\\
  &=(a - 2x)(a - 6x).
  \end{aligned}
  \]
  It vanishes at \(x = \frac{a}{2}\) and at \(x = \frac{a}{6}\). The volume is \(0\) at \(x = 0\) and at \(x = \frac{a}{2}\), and \(V\!\left(\frac{a}{6}\right) = \frac{2a^3}{27}\) is positive. The square to cut has side \(\dfrac{a}{6}\).

  (b) Take \(a \ge b\), so the shorter side is \(b\). The box has height \(x\), length \(a - 2x\) and width \(b - 2x\), with \(x\) in \([0, \frac{b}{2}]\). The volume is
  \[
  V(x) = x(a - 2x)(b - 2x) = 4x^3 - 2(a + b)x^2 + abx.
  \]
  The derivative is
  \[
  V'(x) = 12x^2 - 4(a + b)x + ab.
  \]
  The quadratic formula gives the roots
  \[
  x_\pm = \frac{(a + b) \pm \sqrt{a^2 - ab + b^2}}{6},
  \]
  because the discriminant is \(16(a + b)^2 - 48ab = 16(a^2 - ab + b^2)\).

  Only one root lies in the interval. The parabola \(V'\) opens upward, \(V'(0) = ab > 0\), and
  \[
  V'\!\left(\tfrac{b}{2}\right) = 3b^2 - 2(a + b)b + ab = b(b - a) \le 0.
  \]
  So \(V'\) is positive at the left end and is not positive at the right end, and the smaller root satisfies \(x_- \le \frac{b}{2} \le x_+\). Then \(V' > 0\) on \([0, x_-)\) and \(V' < 0\) just after \(x_-\), up to \(\frac{b}{2}\). The maximum is at \(x_-\):
  \[
  x = \frac{a + b - \sqrt{a^2 - ab + b^2}}{6}.
  \]
  For \(a = b\) this gives \(\frac{2a - a}{6} = \frac{a}{6}\), which agrees with (a).
provenance: handout-answer
steps:
  - Part (a) V(x) = x(a - 2x)^2 has V' = (a - 2x)(a - 6x), so the cut is a/6.
  - Part (b) V'(x) = 12x^2 - 4(a + b)x + ab with roots (a + b plus or minus sqrt(a^2 - ab + b^2))/6.
  - V'(0) > 0 and V'(b/2) = b(b - a) is at most 0, so the smaller root is the maximum point.
verification:
  checks:
    - expr: simplify(diff(x*(a - 2*x)**2, x) - (a - 2*x)*(a - 6*x))
      expected: 0
    - expr: simplify((x*(a - 2*x)**2).subs(x, a/6))
      expected: 2*a**3/27
    - expr: expand(x*(a - 2*x)*(b - 2*x))
      expected: 4*x**3 - 2*(a + b)*x**2 + a*b*x
    - expr: simplify(diff(x*(a - 2*x)*(b - 2*x), x).subs(x, (a + b - sqrt(a**2 - a*b + b**2))/6))
      expected: 0
    - expr: simplify(diff(x*(a - 2*x)*(b - 2*x), x).subs(x, b/2))
      expected: b*(b - a)
    - expr: expand(16*(a + b)**2 - 48*a*b - 16*(a**2 - a*b + b**2))
      expected: 0
    - expr: '((a + b - sqrt(a**2 - a*b + b**2))/6).subs({a: 3, b: 3})'
      expected: Rational(1, 2)
    - expr: '((a + b - sqrt(a**2 - a*b + b**2))/6).subs({a: 2, b: 1})'
      expected: (3 - sqrt(3))/6
:::


::: exercise
id: l2-optimisation.handout-6-1-21
number: "6.1.21"
tier: exam
topics:
  - optimisation
  - extrema
statement: |
  A window consists of a rectangular piece of clear glass with a semicircular piece of coloured glass on top. The coloured glass transmits only \(\frac{1}{2}\) as much light per unit area as the clear glass. The distance from top to bottom, across both the rectangle and the semicircle, is \(2\) meters, and the window may be no more than \(1.5\) meters wide. Find the dimensions of the rectangular portion of the window that lets through the most light.
solution: |
  Let the rectangle have width \(w\) and height \(y\) metres. The semicircle sits on the top side of width \(w\), so its radius is \(\frac{w}{2}\). The total height is
  \[
  y + \frac{w}{2} = 2, \qquad y = 2 - \frac{w}{2}.
  \]
  The width satisfies \(0 \le w \le 1.5\), and then \(y \ge 1.25 > 0\).

  Measure the light in units of one square metre of clear glass. The rectangle contributes its area \(wy\). The semicircle has area \(\frac{\pi}{2}\left(\frac{w}{2}\right)^2 = \frac{\pi w^2}{8}\), and it transmits half as much, so it contributes \(\frac{\pi w^2}{16}\). The light is
  \[
  \begin{aligned}
  L(w)&=w\left(2 - \frac{w}{2}\right) + \frac{\pi w^2}{16}\\
  &=2w - \frac{8 - \pi}{16}\,w^2.
  \end{aligned}
  \]
  The derivative is
  \[
  L'(w) = 2 - \frac{8 - \pi}{8}\,w.
  \]
  It vanishes at \(w = \dfrac{16}{8 - \pi} \approx 3.29\), which lies outside \([0, 1.5]\). On the interval, \(L'\) decreases as \(w\) grows, and
  \[
  L'(1.5) = 2 - \frac{3(8 - \pi)}{16} > 2 - \frac{15}{16} > 0,
  \]
  because \(8 - \pi < 5\). So \(L' > 0\) on \([0, 1.5]\), and \(L\) is increasing. The candidates are the endpoints, and the larger value is at \(w = 1.5\).

  The rectangular portion should be \(1.5\) m wide and \(y = 2 - 0.75 = 1.25\) m tall.
provenance: handout-answer
steps:
  - Constraint y = 2 - w/2 with 0 <= w <= 1.5.
  - Light L(w) = w y + pi w^2 / 16 = 2w - (8 - pi) w^2 / 16.
  - The zero of L' is w = 16/(8 - pi), outside the interval, and L' > 0 on it, so the maximum is at the endpoint w = 1.5.
  - Dimensions 1.5 m by 1.25 m.
verification:
  checks:
    - expr: expand(w*(2 - w/2) + pi*w**2/16) - (2*w - (8 - pi)*w**2/16)
      expected: 0
    - expr: diff(2*w - (8 - pi)*w**2/16, w)
      expected: 2 - (8 - pi)*w/8
    - expr: solve(2 - (8 - pi)*w/8, w)
      expected: "[16/(8 - pi)]"
    - expr: floor((16/(8 - pi)).evalf()*100)
      expected: 329
    - expr: sign((2 - (8 - pi)*w/8).subs(w, Rational(3, 2)).evalf())
      expected: 1
    - expr: (2 - w/2).subs(w, Rational(3, 2))
      expected: Rational(5, 4)
:::


::: exercise
id: l2-optimisation.handout-6-1-23
number: "6.1.23"
tier: standard
topics:
  - optimisation
statement: |
  You are designing a poster to contain a fixed amount \(A\) of printing, measured in square centimetres, and have margins of \(a\) centimetres at the top and bottom and \(b\) centimetres at the sides. Find the ratio of the vertical dimension to the horizontal dimension of the printed area on the poster if you want to minimise the amount of posterboard needed.
solution: |
  Let the printed area have height \(u\) and width \(v\) centimetres, with \(uv = A\). The margins add \(2a\) to the height and \(2b\) to the width, so the poster measures \((u + 2a)\) by \((v + 2b)\). The condition gives \(v = \dfrac{A}{u}\) for \(u > 0\), and the posterboard area is
  \[
  \begin{aligned}
  P(u)&=(u + 2a)\left(\frac{A}{u} + 2b\right)\\
  &=A + 2bu + \frac{2aA}{u} + 4ab.
  \end{aligned}
  \]
  The domain is open, so there are no endpoints. The derivative is
  \[
  P'(u) = 2b - \frac{2aA}{u^2}.
  \]
  It vanishes only when \(u^2 = \dfrac{aA}{b}\), so \(u = \sqrt{aA/b}\). The second derivative \(P''(u) = \dfrac{4aA}{u^3}\) is positive, so this single critical value is the global minimum.

  The width is
  \[
  v = \frac{A}{u} = \sqrt{\frac{Ab}{a}}.
  \]
  The ratio of the vertical to the horizontal dimension of the printed area is
  \[
  \frac{u}{v} = \frac{u^2}{A} = \frac{a}{b}.
  \]
provenance: handout-answer
steps:
  - Poster area P(u) = (u + 2a)(A/u + 2b) with printed height u and width A/u.
  - P'(u) = 0 gives u^2 = aA/b, and P'' > 0.
  - Ratio u/v = u^2/A = a/b.
verification:
  checks:
    - expr: expand((u + 2*a)*(A/u + 2*b)) - (A + 2*b*u + 2*a*A/u + 4*a*b)
      expected: 0
    - expr: simplify(diff((u + 2*a)*(A/u + 2*b), u).subs(u, sqrt(a*A/b)))
      expected: 0
    - expr: simplify(sqrt(a*A/b)**2/A)
      expected: a/b
    - expr: simplify(diff((u + 2*a)*(A/u + 2*b), u, 2) - 4*a*A/u**3)
      expected: 0
:::


::: exercise
id: l2-optimisation.handout-6-1-24
number: "6.1.24"
tier: standard
topics:
  - optimisation
statement: |
  The strength of a rectangular beam is proportional to the product of its width \(w\) times the square of its depth \(d\). Find the dimensions of the strongest beam that can be cut from a cylindrical log of radius \(r\). The cross-section of the beam is a rectangle \(w\) by \(d\) inscribed in the circular cross-section of the log.
solution: |
  The corners of the rectangle lie on the circle of radius \(r\), so the diagonal is the diameter \(2r\):
  \[
  w^2 + d^2 = 4r^2, \qquad d^2 = 4r^2 - w^2.
  \]
  The width lies in \([0, 2r]\). The strength is \(k\,w d^2\) for a constant \(k > 0\), and the constant does not change where the maximum is. In the variable \(w\),
  \[
  S(w) = k\,w\,(4r^2 - w^2).
  \]
  The derivative is
  \[
  S'(w) = k\,(4r^2 - 3w^2).
  \]
  It vanishes at \(w = \dfrac{2r}{\sqrt{3}}\) in the interval. The strength is \(0\) at both endpoints \(w = 0\) and \(w = 2r\) and positive inside, so this critical value gives the maximum.

  The depth satisfies
  \[
  d^2 = 4r^2 - \frac{4r^2}{3} = \frac{8r^2}{3},
  \]
  so \(d = \dfrac{2\sqrt{2}\,r}{\sqrt{3}}\). The strongest beam has width \(\dfrac{2r}{\sqrt{3}}\) and depth \(\dfrac{2\sqrt{2}\,r}{\sqrt{3}}\), so the depth is \(\sqrt{2}\) times the width.
provenance: handout-answer
steps:
  - Circle gives d^2 = 4 r^2 - w^2, so the strength is k w (4 r^2 - w^2) on [0, 2r].
  - S'(w) = 0 gives w = 2r/sqrt(3), and S = 0 at both endpoints.
  - Depth d = 2 sqrt(2) r / sqrt(3).
verification:
  checks:
    - expr: diff(w*(4*r**2 - w**2), w)
      expected: 4*r**2 - 3*w**2
    - expr: simplify(diff(w*(4*r**2 - w**2), w).subs(w, 2*r/sqrt(3)))
      expected: 0
    - expr: simplify((4*r**2 - w**2).subs(w, 2*r/sqrt(3)))
      expected: 8*r**2/3
    - expr: simplify((2*sqrt(2)*r/sqrt(3))**2 - 8*r**2/3)
      expected: 0
    - expr: (w*(4*r**2 - w**2)).subs(w, 2*r)
      expected: 0
:::


::: exercise
id: l2-optimisation.handout-6-1-25
number: "6.1.25"
tier: standard
topics:
  - optimisation
statement: |
  What fraction of the volume of a sphere is taken up by the largest cylinder that can be fit inside the sphere?
solution: |
  Let the sphere have radius \(R\). The largest cylinder has the same axis and centre as the sphere, so take a cylinder of radius \(\rho\) and half-height \(z\). Its rim lies on the sphere, which gives
  \[
  \rho^2 + z^2 = R^2, \qquad \rho^2 = R^2 - z^2.
  \]
  The half-height lies in \([0, R]\). The volume of the cylinder is
  \[
  V(z) = \pi\rho^2 \cdot 2z = 2\pi z(R^2 - z^2).
  \]
  The derivative is
  \[
  V'(z) = 2\pi(R^2 - 3z^2),
  \]
  which vanishes at \(z = \dfrac{R}{\sqrt{3}}\) in the interval. The volume is \(0\) at both endpoints \(z = 0\) and \(z = R\), so the critical value gives the maximum:
  \[
  \begin{aligned}
  V\!\left(\tfrac{R}{\sqrt{3}}\right)&=2\pi\cdot\frac{R}{\sqrt{3}}\cdot\frac{2R^2}{3}\\
  &=\frac{4\pi R^3}{3\sqrt{3}}.
  \end{aligned}
  \]
  The sphere has volume \(\dfrac{4\pi R^3}{3}\). The fraction is
  \[
  \frac{4\pi R^3/(3\sqrt{3})}{4\pi R^3/3} = \frac{1}{\sqrt{3}} \approx 0.577,
  \]
  so the largest cylinder takes up about \(58\%\) of the sphere.
provenance: handout-answer
steps:
  - Rim on the sphere gives rho^2 = R^2 - z^2, so V(z) = 2 pi z (R^2 - z^2) on [0, R].
  - V'(z) = 0 gives z = R/sqrt(3), and V = 0 at both endpoints.
  - Maximum volume 4 pi R^3 / (3 sqrt(3)), fraction 1/sqrt(3).
verification:
  checks:
    - expr: simplify(diff(2*pi*z*(R**2 - z**2), z).subs(z, R/sqrt(3)))
      expected: 0
    - expr: simplify((2*pi*z*(R**2 - z**2)).subs(z, R/sqrt(3)))
      expected: 4*pi*R**3/(3*sqrt(3))
    - expr: simplify((2*pi*z*(R**2 - z**2)).subs(z, R/sqrt(3))/(4*pi*R**3/3))
      expected: 1/sqrt(3)
    - expr: floor((1/sqrt(3)).evalf()*100)
      expected: 57
:::


::: exercise
id: l2-optimisation.handout-6-1-27
number: "6.1.27"
tier: standard
topics:
  - optimisation
statement: |
  Find the dimensions of the lightest cylindrical can containing \(0.25\) litre (\(250\) cm\(^3\)) if the top and bottom are made of a material that is twice as heavy per unit area as the material used for the side.
solution: |
  Let the radius be \(r > 0\) and the height \(h\), in centimetres. Let \(\rho\) be the weight per unit area of the side material. The side has area \(2\pi r h\), and the top and bottom have total area \(2\pi r^2\) at weight \(2\rho\). The weight is
  \[
  W = \rho\left(2\pi r h + 4\pi r^2\right).
  \]
  The volume condition \(\pi r^2 h = 250\) gives \(h = \dfrac{250}{\pi r^2}\), so \(2\pi r h = \dfrac{500}{r}\). The constant \(\rho\) does not move the minimum, and we minimise
  \[
  f(r) = \frac{500}{r} + 4\pi r^2, \qquad r > 0.
  \]
  The domain is open, so there are no endpoints. The derivative is
  \[
  f'(r) = -\frac{500}{r^2} + 8\pi r = \frac{8\pi r^3 - 500}{r^2}.
  \]
  It vanishes only when
  \[
  r^3 = \frac{125}{2\pi}, \qquad r = \frac{5}{(2\pi)^{1/3}} \approx 2.71.
  \]
  The second derivative \(f''(r) = \dfrac{1000}{r^3} + 8\pi\) is positive, so this single critical value is the global minimum.

  Since \(\pi r^3 = \frac{125}{2}\), we have \(250 = 4\pi r^3\), and
  \[
  h = \frac{250}{\pi r^2} = \frac{4\pi r^3}{\pi r^2} = 4r \approx 10.8.
  \]
  The lightest can has radius \(\dfrac{5}{(2\pi)^{1/3}}\) cm, about \(2.7\) cm, and height \(4r\), about \(10.8\) cm.
provenance: handout-answer
steps:
  - Weight proportional to 2 pi r h + 4 pi r^2 with h = 250/(pi r^2), so f(r) = 500/r + 4 pi r^2.
  - f'(r) = 0 gives r^3 = 125/(2 pi), and f'' > 0.
  - Height h = 4r, about 10.8 cm.
verification:
  checks:
    - expr: simplify(diff(500/r + 4*pi*r**2, r).subs(r, 5/(2*pi)**Rational(1, 3)))
      expected: 0
    - expr: simplify((5/(2*pi)**Rational(1, 3))**3)
      expected: 125/(2*pi)
    - expr: simplify((250/(pi*r**2) - 4*r).subs(r, 5/(2*pi)**Rational(1, 3)))
      expected: 0
    - expr: floor(10*(5/(2*pi)**Rational(1, 3)).evalf())
      expected: 27
    - expr: floor(10*(4*5/(2*pi)**Rational(1, 3)).evalf())
      expected: 108
:::


::: exercise
id: l2-optimisation.handout-6-1-29
number: "6.1.29"
tier: exam
topics:
  - optimisation
statement: |
  A conical paper cup is to hold a fixed volume of water. Find the ratio of the height to the base radius of the cone that minimises the amount of paper needed to make the cup. Use the formula \(\pi r\sqrt{r^2 + h^2}\) for the area of the side of a cone, the lateral area.
solution: |
  Let the base radius be \(r > 0\), the height \(h\), and the fixed volume \(V\). The volume of the cone is \(\frac{1}{3}\pi r^2 h = V\), so \(h = \dfrac{3V}{\pi r^2}\). The paper is the lateral area
  \[
  A = \pi r\sqrt{r^2 + h^2}.
  \]
  The area is positive, so \(A\) and \(A^2\) have the same minimum point. The square has no root:
  \[
  \begin{aligned}
  A^2&=\pi^2 r^2\left(r^2 + \frac{9V^2}{\pi^2 r^4}\right)\\
  &=\pi^2 r^4 + \frac{9V^2}{r^2}.
  \end{aligned}
  \]
  Call this function \(g(r)\), for \(r > 0\). The domain is open, so there are no endpoints. The derivative is
  \[
  g'(r) = 4\pi^2 r^3 - \frac{18V^2}{r^3} = \frac{4\pi^2 r^6 - 18V^2}{r^3}.
  \]
  It vanishes only when \(r^6 = \dfrac{9V^2}{2\pi^2}\). The second derivative \(g''(r) = 12\pi^2 r^2 + \dfrac{54V^2}{r^4}\) is positive, so this single critical value is the global minimum.

  At this value \(\dfrac{9V^2}{\pi^2} = 2r^6\), so
  \[
  h^2 = \frac{9V^2}{\pi^2 r^4} = \frac{2r^6}{r^4} = 2r^2.
  \]
  The ratio is \(\dfrac{h}{r} = \sqrt{2}\).
provenance: handout-answer
steps:
  - h = 3V/(pi r^2), and minimising the lateral area A is the same as minimising A^2 = pi^2 r^4 + 9V^2/r^2.
  - Derivative zero gives r^6 = 9V^2/(2 pi^2), and the second derivative is positive.
  - Then h^2 = 2r^2, so h/r = sqrt(2).
verification:
  checks:
    - expr: expand(pi**2*r**2*(r**2 + (3*V/(pi*r**2))**2)) - (pi**2*r**4 + 9*V**2/r**2)
      expected: 0
    - expr: diff(pi**2*r**4 + 9*V**2/r**2, r).subs(V, sqrt(2)*pi*r**3/3)
      expected: 0
    - expr: ((3*V/(pi*r**2))/r).subs(V, sqrt(2)*pi*r**3/3)
      expected: sqrt(2)
    - expr: (9*V**2/(2*pi**2)).subs(V, sqrt(2)*pi*r**3/3)
      expected: r**6
:::


::: exercise
id: l2-optimisation.handout-6-1-32
number: "6.1.32"
tier: standard
topics:
  - optimisation
statement: |
  Find the fraction of the area of a triangle that is occupied by the largest rectangle that can be drawn in the triangle, with one of its sides along a side of the triangle. Show that this fraction does not depend on the dimensions of the given triangle.
solution: |
  Let the side of the triangle that carries the rectangle have length \(b\), and let \(H\) be the height of the triangle above that side. The triangle has area \(\dfrac{bH}{2}\).

  Let the rectangle have height \(y\), with \(y\) in \([0, H]\), and width \(w\). The part of the triangle above the rectangle is a smaller triangle of height \(H - y\), similar to the whole one. Similar triangles give
  \[
  \frac{w}{b} = \frac{H - y}{H}, \qquad w = \frac{b(H - y)}{H}.
  \]
  The area of the rectangle is
  \[
  A(y) = \frac{b}{H}\,y(H - y).
  \]
  The derivative is
  \[
  A'(y) = \frac{b}{H}(H - 2y),
  \]
  which vanishes at \(y = \dfrac{H}{2}\). The area is \(0\) at both endpoints \(y = 0\) and \(y = H\), so the critical value gives the maximum:
  \[
  A\!\left(\tfrac{H}{2}\right) = \frac{b}{H}\cdot\frac{H}{2}\cdot\frac{H}{2} = \frac{bH}{4}.
  \]
  The fraction is
  \[
  \frac{bH/4}{bH/2} = \frac{1}{2}.
  \]
  The letters \(b\) and \(H\) cancel, so the largest rectangle fills one half of the triangle for every triangle.
provenance: handout-answer
steps:
  - Similar triangles give w = b(H - y)/H, so A(y) = (b/H) y (H - y) on [0, H].
  - A'(y) = 0 gives y = H/2, and A = 0 at both endpoints.
  - A(H/2) = bH/4, which is 1/2 of the triangle area bH/2, whatever b and H are.
verification:
  checks:
    - expr: diff(b*y*(H - y)/H, y).subs(y, H/2)
      expected: 0
    - expr: simplify((b*y*(H - y)/H).subs(y, H/2))
      expected: b*H/4
    - expr: simplify((b*y*(H - y)/H).subs(y, H/2)/(b*H/2))
      expected: Rational(1, 2)
    - expr: (b*y*(H - y)/H).subs(y, 0)
      expected: 0
:::


::: exercise
id: l2-optimisation.handout-6-1-33
number: "6.1.33"
tier: standard
topics:
  - optimisation
statement: |
  If you set the price of an item at \(\$10\), you cannot sell it, but you can sell \(500\) items for each dollar below \(\$10\) that you set the price. The fixed costs total \(\$3000\), and the marginal cost is \(\$2\) per item. How is the answer affected if the cost per item for \(n\) items, instead of being simply \(\$2\), decreases below \(\$2\) in proportion to \(n\), by \(1\) cent for each \(25\) items produced, because of economy of scale and volume discounts?
solution: |
  Let the price be \(p\) dollars, with \(0 \le p \le 10\). The number of items sold is
  \[
  n = 500(10 - p).
  \]
  The cost per item falls by \(0.01\) for each \(25\) items, so for \(n\) items it is
  \[
  2 - \frac{0.01}{25}\,n = 2 - \frac{n}{2500}.
  \]
  Substituting \(n = 500(10 - p)\) gives \(2 - \dfrac{10 - p}{5} = \dfrac{p}{5}\) dollars per item. The profit is revenue minus the fixed cost and the item costs:
  \[
  \begin{aligned}
  P(p)&=500(10 - p)\left(p - \frac{p}{5}\right) - 3000\\
  &=400p(10 - p) - 3000\\
  &=-400p^2 + 4000p - 3000.
  \end{aligned}
  \]
  The derivative is \(P'(p) = -800p + 4000\), which vanishes at \(p = 5\) in \([0, 10]\). The candidate values are
  \[
  \begin{aligned}
  P(0)&=-3000,\\
  P(5)&=7000,\\
  P(10)&=-3000.
  \end{aligned}
  \]
  The most profit is \(7000\) dollars, at the price \(\$5\), when \(n = 2500\) items are sold and each costs \(\$1\) to make. With the constant cost of \(\$2\) the maximum is \(5000\) dollars at the price \(\$6\), so the volume discount raises the maximum profit by \(2000\) dollars and lowers the best price by \(\$1\).
provenance: handout-answer
steps:
  - Items sold n = 500(10 - p), and the cost per item is 2 - n/2500 = p/5.
  - Profit P(p) = 400p(10 - p) - 3000 on [0, 10].
  - Critical value p = 5 gives 7000, compared with 5000 at p = 6 under the constant cost.
verification:
  checks:
    - expr: simplify(2 - 500*(10 - p)/2500 - p/5)
      expected: 0
    - expr: expand(500*(10 - p)*(p - p/5) - 3000)
      expected: -400*p**2 + 4000*p - 3000
    - expr: diff(-400*p**2 + 4000*p - 3000, p).subs(p, 5)
      expected: 0
    - expr: (-400*p**2 + 4000*p - 3000).subs(p, 5)
      expected: 7000
    - expr: (-400*p**2 + 4000*p - 3000).subs(p, 0)
      expected: -3000
    - expr: (-400*p**2 + 4000*p - 3000).subs(p, 10)
      expected: -3000
    - expr: (500*(10 - p)).subs(p, 5)
      expected: 2500
    - expr: diff(500*(10 - p)*(p - 2) - 3000, p).subs(p, 6)
      expected: 0
    - expr: (500*(10 - p)*(p - 2) - 3000).subs(p, 6)
      expected: 5000
:::


::: exercise
id: l2-optimisation.sheet-1-12
number: "sheet 1 exercise 12"
tier: standard
topics:
  - optimisation
statement: |
  Marketing tells you that if you set the price of an item at \(\$10\) then you will be unable to sell it, but that you can sell \(500\) items for each dollar below \(\$10\) that you set the price. Suppose your fixed costs total \(\$3000\), and your marginal cost is \(\$2\) per item. What is the most profit you can make?
solution: |
  Let the price be \(p\) dollars, with \(0 \le p \le 10\). Each dollar below \(10\) sells \(500\) items, so the number sold is
  \[
  n = 500(10 - p).
  \]
  The profit is revenue minus the fixed cost and the item costs:
  \[
  \begin{aligned}
  P(p)&=pn - 3000 - 2n\\
  &=500(10 - p)(p - 2) - 3000\\
  &=-500p^2 + 6000p - 13000.
  \end{aligned}
  \]
  The derivative is \(P'(p) = -1000p + 6000\), which vanishes at \(p = 6\) in \([0, 10]\). The candidate values are
  \[
  \begin{aligned}
  P(0)&=-13000,\\
  P(6)&=5000,\\
  P(10)&=-3000.
  \end{aligned}
  \]
  The most profit is \(5000\) dollars, at the price \(\$6\), when \(n = 500\cdot 4 = 2000\) items are sold.
provenance: written-for-site
steps:
  - Items sold n = 500(10 - p) and profit P(p) = -500p^2 + 6000p - 13000 on [0, 10].
  - Critical value p = 6, compared with the endpoint values -13000 and -3000.
  - Maximum profit 5000 dollars at price 6, with 2000 items sold.
verification:
  checks:
    - expr: expand(500*(10 - p)*(p - 2) - 3000)
      expected: -500*p**2 + 6000*p - 13000
    - expr: diff(-500*p**2 + 6000*p - 13000, p).subs(p, 6)
      expected: 0
    - expr: (-500*p**2 + 6000*p - 13000).subs(p, 6)
      expected: 5000
    - expr: (-500*p**2 + 6000*p - 13000).subs(p, 0)
      expected: -13000
    - expr: (-500*p**2 + 6000*p - 13000).subs(p, 10)
      expected: -3000
    - expr: (500*(10 - p)).subs(p, 6)
      expected: 2000
:::


::: exercise
id: l2-optimisation.sheet-1-14
number: "sheet 1 exercise 14"
tier: basic
topics:
  - optimisation
statement: |
  Suppose the position of an object at time \(t\) is given by \(f(t) = -\dfrac{49t^2}{10} + 5t + 10\). Find a function giving the speed of the object at time \(t\). The acceleration of an object is the rate at which its speed is changing, which means it is given by the derivative of the speed function. Find the acceleration of the object at time \(t\).
solution: |
  The speed is the derivative of the position:
  \[
  \begin{aligned}
  v(t)&=f'(t)\\
  &=-\frac{49}{10}\cdot 2t + 5\\
  &=-\frac{49}{5}t + 5.
  \end{aligned}
  \]
  Here the speed is signed. It is positive while the object moves toward larger values of \(f\) and negative afterwards. It starts at \(v(0) = 5\) and decreases linearly.

  The acceleration is the derivative of the speed:
  \[
  a(t) = v'(t) = -\frac{49}{5}.
  \]
  The acceleration is the constant \(-\dfrac{49}{5} = -9.8\).
provenance: written-for-site
steps:
  - Speed v(t) = f'(t) = -49t/5 + 5.
  - Acceleration a(t) = v'(t) = -49/5, a constant.
verification:
  checks:
    - expr: diff(-49*t**2/10 + 5*t + 10, t)
      expected: -49*t/5 + 5
    - expr: diff(-49*t**2/10 + 5*t + 10, t, 2)
      expected: -Rational(49, 5)
    - expr: diff(-49*t**2/10 + 5*t + 10, t).subs(t, 0)
      expected: 5
:::
