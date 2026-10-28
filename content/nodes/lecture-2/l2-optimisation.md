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
