---
id: l4-functions-several-variables
lecture: 4
order: 5
title: Functions of several variables and their domains
prerequisites: [l1-functions, l4-coordinates-vectors]
sources:
  - { source: handout, section: "14.1", page: 349 }
  - { source: lecture-4-board-1 }
  - { source: lecture-4-board-3 }
  - { source: lecture-4-notebook }
  - { source: lecture-notes-4, page: 1 }
  - { source: sheet-2, page: 1 }
examWeight: low
notation: |
  \(D(f)\) is the domain of \(f\), the set of inputs that make sense for the formula. The handout describes that set in words and does not use the letter \(D\).
taught: lecture
status: reviewed
---

::: section
title: Functions, domains and a plane
:::

::: formal-statement
kind: definition
title: Function of two variables
source: { source: lecture-4-board-1 }
text: |
  Let \(f \colon \mathbb{R}^{2} \to \mathbb{R}\). The pair \((x,y)\) maps to the real number \(f(x,y)\).
  \[
  f \colon \mathbb{R}^{2} \to \mathbb{R}, \qquad (x,y) \mapsto f(x,y).
  \]
:::

::: plain-explanation
text: |
  The symbol \(\mathbb{R}^{2}\) means the input is a pair of real numbers. The symbol \(\mathbb{R}\) means the output is one real number. That number is written \(f(x,y)\).
:::

::: formal-statement
kind: definition
title: Function of several variables
source: { source: handout, section: "14.1", page: 349 }
text: |
  A function of several variables has the form
  \[
  f \colon \mathbb{R}^{n} \to \mathbb{R}.
  \]
:::

::: plain-explanation
text: |
  The letter \(n\) counts the real inputs. This section uses \(n = 2\), so the input is \((x,y)\). The same reading of a formula applies when \(n = 3\), and when \(n\) is larger.
:::

::: formal-statement
kind: definition
title: Domain
source: { source: handout, section: "14.1", page: 349 }
text: |
  The **domain** \(D(f)\) is the set of inputs \((x,y)\) for which the formula of \(f\) returns a real number.
:::

::: plain-explanation
text: |
  A square root returns a real number when the quantity inside it is nonnegative. A formula that adds two square roots needs both quantities to be nonnegative at the same input. The graph is drawn over \(D(f)\).
:::

::: formal-statement
title: A plane given by a formula
source: { source: handout, section: "14.1", page: 349 }
text: |
  The function \(f(x,y) = 3x + 4y - 5\) is the plane \(z = 3x + 4y - 5\).
:::

::: plain-explanation
text: |
  The inputs are \(x\) and \(y\). The output is the height \(z\). At \((0,0)\) the height is \(-5\). Products and sums of real numbers are defined for every pair of real numbers, so \(D(f) = \mathbb{R}^{2}\).
:::

::: key-points
text: |
  - A function \(f \colon \mathbb{R}^{2} \to \mathbb{R}\) maps each pair \((x,y)\) to the real number \(f(x,y)\). The domain \(D(f)\) is the set of inputs for which the formula of \(f\) returns a real number.
  - The function \(f(x,y) = 3x + 4y - 5\) is the plane \(z = 3x + 4y - 5\), with height \(-5\) at \((0,0)\). Its domain is \(D(f) = \mathbb{R}^{2}\), because sums and products of real numbers are defined for every pair of real numbers.
:::

::: concept-question
id: l4-functions-several-variables.q-6361f579
question: |
  What is the graph of \(f(x,y) = 3x + 4y - 5\)?
options:
  - text: The plane \(z = 3x + 4y - 5\).
    correct: true
  - text: The plane \(z = 3x + 4y + 5\).
  - text: The plane \(z = 3x + 4y\).
  - text: The plane \(z = -5\).
explanation: |
  The function sets the height equal to \(3x + 4y - 5\). The graph is the plane \(z = 3x + 4y - 5\). At \((0,0)\) that height is \(-5\). The formula \(z = 3x + 4y + 5\) has height \(5\) at the origin. The formula \(z = 3x + 4y\) has height \(0\) at the origin. The constant formula \(z = -5\) has no term \(3x\) and no term \(4y\).
:::

::: section
title: Domains with square roots
:::

::: formal-statement
title: Domain of a sum of square roots
source: { source: handout, section: "14.1", page: 350 }
text: |
  The function \(f(x,y) = \sqrt{x} + \sqrt{y}\) has domain
  \[
  D(f) = \{(x,y) : x \ge 0,\ y \ge 0\}.
  \]
:::

::: plain-explanation
text: |
  The formula uses \(\sqrt{x}\) and \(\sqrt{y}\). Both coordinates have to be nonnegative. A coordinate equal to \(0\) is allowed. At \((0,0)\) the value is \(\sqrt{0} + \sqrt{0} = 0\), so the origin lies in \(D(f)\).
:::

::: worked-example
title: Read a domain
problem: |
  Read \(D(f)\) for \(f(x,y) = \sqrt{x} + \sqrt{y}\). Compute \(f(4,9)\). Decide whether \((-1,0)\) lies in \(D(f)\).
solution: |
  Both conditions are required:

  - \(\sqrt{x}\) is real when \(x \ge 0\),
  - \(\sqrt{y}\) is real when \(y \ge 0\).

  So \(D(f) = \{(x,y) : x \ge 0,\ y \ge 0\}\).

  At \((4,9)\) both coordinates are nonnegative.
  \[
  \begin{aligned}
  f(4,9)&=\sqrt{4} + \sqrt{9},\\
  &=2 + 3 = 5.
  \end{aligned}
  \]
  So \(f(4,9) = 5\), and \((4,9)\) lies in \(D(f)\).
  At \((-1,0)\) the first coordinate is negative. No real number has square \(-1\), so \(\sqrt{x}\) is not defined as a real value there. So \((-1,0)\) lies outside \(D(f)\).
:::

::: trap
text: |
  For \(f(x,y) = \sqrt{x} + \sqrt{y}\), both \(x \ge 0\) and \(y \ge 0\) are required. The single inequality \(x + y \ge 0\) holds at \((-1,2)\), where the sum of the coordinates is \(1\). No real number has square \(-1\), so \(\sqrt{x}\) is not defined as a real value at \(x = -1\). The point \((-1,2)\) lies outside \(D(f)\).
:::

::: key-points
text: |
  - A formula that adds two square roots needs both quantities under the roots to be nonnegative at the same input. For \(f(x,y) = \sqrt{x} + \sqrt{y}\) this gives \(D(f) = \{(x,y) : x \ge 0,\ y \ge 0\}\). A coordinate equal to \(0\) is allowed, so the origin lies in \(D(f)\).
  - The usual slip replaces the two conditions by the single inequality \(x + y \ge 0\). That inequality holds at \((-1,2)\), but \(\sqrt{x}\) is not defined as a real value at \(x = -1\). The point \((-1,2)\) lies outside \(D(f)\).
:::

::: concept-question
id: l4-functions-several-variables.q-2461e4a4
question: |
  Which point lies in \(D(f)\) for \(f(x,y) = \sqrt{x} + \sqrt{y}\)?
options:
  - text: The point \((4,9)\).
    correct: true
  - text: The point \((-1,0)\).
  - text: The point \((0,-1)\).
  - text: The point \((-2,-3)\).
explanation: |
  Both coordinates of \((4,9)\) are nonnegative. The value is \(\sqrt{4} + \sqrt{9} = 5\), so \((4,9)\) lies in \(D(f)\). The other points each have a negative coordinate. A square root of a negative number is not a real number, so those points lie outside \(D(f)\).
:::

::: exercise
id: l4-functions-several-variables.ex-sqrt-basic
tier: basic
topics: [domain]
statement: |
  Let \(f(x,y) = \sqrt{x - 1} + \sqrt{y}\). Write \(D(f)\). Compute \(f(2,4)\) and \(f(1,0)\). Decide whether \((0,4)\) lies in \(D(f)\).
solution: |
  The square root \(\sqrt{x - 1}\) is real when \(x \ge 1\), and \(\sqrt{y}\) is real when \(y \ge 0\). Both are required, so \(D(f) = \{(x,y) : x \ge 1,\ y \ge 0\}\).
  At \((2,4)\) the value is
  \[
  \begin{aligned}
  f(2,4)&=\sqrt{2 - 1} + \sqrt{4},\
  &=1 + 2 = 3.
  \end{aligned}
  \]
  At \((1,0)\) the value is
  \[
  \begin{aligned}
  f(1,0)&=\sqrt{1 - 1} + \sqrt{0},\
  &=0.
  \end{aligned}
  \]
  So \(f(1,0) = 0\), and \((1,0)\) lies in \(D(f)\).
  At \((0,4)\) the quantity under the first root is \(0 - 1 = -1\). No real number has square \(-1\), so \(\sqrt{x - 1}\) is not defined as a real value there. The point \((0,4)\) lies outside \(D(f)\), even though its coordinates are nonnegative.
provenance: written-for-site
steps:
  - Domain written with \(x \ge 1\) and \(y \ge 0\).
  - Value \(f(2,4) = 3\).
  - Value \(f(1,0) = 0\).
  - Point \((0,4)\) excluded because \(\sqrt{x - 1}\) is not real for \(x < 1\).
verification:
  checks:
    - expr: 'sqrt(2 - 1)+sqrt(4)'
      expected: "3"
    - expr: 'sqrt(1 - 1)+sqrt(0)'
      expected: "0"
    - expr: '0 - 1'
      expected: "-1"
:::

::: section
title: Domains from circles and the hemisphere
:::

::: formal-statement
title: Upper hemisphere
source: { source: handout, section: "14.1", page: 350 }
text: |
  The upper hemisphere of the sphere \(x^{2} + y^{2} + z^{2} = 4\) is
  \[
  \begin{aligned}
  f(x,y)&=\sqrt{4 - x^{2} - y^{2}},\\
  D(f)&=\{(x,y) : x^{2} + y^{2} \le 4\}.
  \end{aligned}
  \]
  The full sphere is not the graph of one function.
:::

::: plain-explanation
text: |
  On the open disk \(x^{2} + y^{2} < 4\) the sphere has a second height, \(-\sqrt{4 - x^{2} - y^{2}}\). The upper function keeps the nonnegative height. At \((0,0)\) that height is \(2\). At \((2,0)\) the radicand is \(0\). The value is \(f(2,0) = 0\). The boundary point is included.
:::

::: visual
kind: quadric
caption: |
  The sphere \(x^2 + y^2 + z^2 = 4\) is drawn with \(a = b = c = 2\). Move the slice from \(z = 1\) to \(z = -1\): both cuts are the circle \(x^2 + y^2 = 3\), so each input on that circle has the two heights \(1\) and \(-1\).
params:
  surface: sphere
  a: 2
  b: 2
  c: 2
  axis: z
  slice: 1
:::

::: formal-statement
title: Domain outside the unit circle
source: { source: lecture-4-board-3 }
text: |
  The formula \(z = \sqrt{x^{2} + y^{2} - 1}\) returns a real number when \(x^{2} + y^{2} \ge 1\). The same condition applies to the negative root.
:::

::: plain-explanation
text: |
  The quantity under the square root is \(x^{2} + y^{2} - 1\). It is nonnegative when \(x^{2} + y^{2} \ge 1\). At the origin that quantity equals \(-1\). No real number has square \(-1\), so the origin lies outside this domain.
:::

::: guided-example
title: Upper hemisphere
problem: |
  Let \(f(x,y) = \sqrt{4 - x^{2} - y^{2}}\). Find \(D(f)\) and \(f(0,0)\). Explain why the sphere \(x^{2} + y^{2} + z^{2} = 4\) is not the graph of one function.
steps:
  - |
    The quantity under the square root is \(4 - x^{2} - y^{2}\). It is nonnegative when \(x^{2} + y^{2} \le 4\).
  - |
    So \(D(f) = \{(x,y) : x^{2} + y^{2} \le 4\}\).
  - |
    At the origin,
    \[
    f(0,0)=\sqrt{4 - 0 - 0}=\sqrt{4}=2.
    \]
  - |
    Solving \(x^{2} + y^{2} + z^{2} = 4\) for \(z\) produces \(\sqrt{4 - x^{2} - y^{2}}\) and \(-\sqrt{4 - x^{2} - y^{2}}\). On the open disk \(x^{2} + y^{2} < 4\) the two heights differ. One function returns one height, so the full sphere is not the graph of one function.
:::

::: trap
text: |
  A formula \(z = f(x,y)\) gives one height at each input. On the sphere \(x^{2} + y^{2} + z^{2} = 4\), the input \((0,0)\) produces \(z^{2} = 4\), so the heights are \(z = 2\) and \(z = -2\). Two heights at one input cannot be the values of one function. The upper hemisphere keeps the nonnegative height \(f(x,y) = \sqrt{4 - x^{2} - y^{2}}\). At the origin that value is \(2\).
:::

::: going-deeper
title: The domain of a composition
text: |
  For a composition \(f \circ g\), a point belongs to the domain exactly when it lies in the domain of \(g\) and \(g\) of that point lies in the domain of \(f\). For \(h(x, y) = \ln(x^2 + y^2 - 1)\), the inner function is defined everywhere. The outer function \(\ln\) needs a positive argument. So \(D(h)\) is the set where \(x^2 + y^2 > 1\), the outside of the unit disk.
:::

::: key-points
text: |
  - The upper hemisphere \(f(x,y) = \sqrt{4 - x^{2} - y^{2}}\) has \(D(f) = \{(x,y) : x^{2} + y^{2} \le 4\}\). The points with \(x^{2} + y^{2} = 4\) belong to \(D(f)\), and \(f(2,0) = 0\).
  - The formula \(z = \sqrt{x^{2} + y^{2} - 1}\) returns a real number when \(x^{2} + y^{2} \ge 1\), so the origin lies outside its domain.
  - The usual slip reads the full sphere \(x^{2} + y^{2} + z^{2} = 4\) as the graph of one function. The input \((0,0)\) has the two heights \(2\) and \(-2\), and the upper hemisphere \(f(x,y) = \sqrt{4 - x^{2} - y^{2}}\) keeps the nonnegative height.
:::

::: concept-question
id: l4-functions-several-variables.q-6708711a
question: |
  For \(f(x,y) = \sqrt{4 - x^{2} - y^{2}}\), which statement is true?
options:
  - text: The point \((2,0)\) lies in \(D(f)\), and \(f(2,0) = 0\).
    correct: true
  - text: The point \((2,0)\) lies outside \(D(f)\) because the radicand is \(0\).
  - text: The point \((2,0)\) lies in \(D(f)\), and \(f(2,0) = 2\).
  - text: The point \((0,0)\) lies outside \(D(f)\).
explanation: |
  At \((2,0)\) the radicand is \(4 - 4 - 0 = 0\). The square root of \(0\) is \(0\). The domain inequality is \(\le\), so \((2,0)\) is included. The value is \(f(2,0) = 0\). At \((0,0)\) the value is \(\sqrt{4} = 2\), so the origin is included.
:::

::: concept-question
id: l4-functions-several-variables.q-077f27db
question: |
  Can the sphere \(x^{2} + y^{2} + z^{2} = 4\) be written as the graph of one function \(z = f(x,y)\)?
options:
  - text: No. The input \((0,0)\) has the two heights \(2\) and \(-2\).
    correct: true
  - text: Yes, by \(f(x,y) = \sqrt{4 - x^{2} - y^{2}}\), which solves the equation for \(z\).
  - text: Yes, by \(f(x,y) = \pm\sqrt{4 - x^{2} - y^{2}}\), which takes both heights.
  - text: Yes, on the domain \(x^{2} + y^{2} \le 4\), where every input has a height.
explanation: |
  Solving for \(z\) gives \(z = \sqrt{4 - x^{2} - y^{2}}\) and \(z = -\sqrt{4 - x^{2} - y^{2}}\). On the open disk \(x^{2} + y^{2} < 4\) these two heights differ, so the input \((0,0)\) has the heights \(2\) and \(-2\). A function returns one height at each input, so no single function describes the whole sphere. The first formula gives only the upper hemisphere, and the sign \(\pm\) does not define a single value at an input. Restricting the domain does not help, because the two heights remain at every input inside the open disk.
:::

::: exercise
id: l4-functions-several-variables.ex-hemisphere-standard
tier: standard
topics: [domain, hemisphere]
statement: |
  Let \(f(x,y) = \sqrt{9 - x^{2} - y^{2}}\). Write \(D(f)\). Compute \(f(0,0)\) and \(f(0,3)\). Decide whether \((2,2)\) and \((3,1)\) lie in \(D(f)\).
solution: |
  The radicand \(9 - x^{2} - y^{2}\) is nonnegative when \(x^{2} + y^{2} \le 9\). So \(D(f) = \{(x,y) : x^{2} + y^{2} \le 9\}\).
  At \((0,0)\) the radicand is \(9\). The square root equals \(3\). So \(f(0,0) = 3\).
  At \((0,3)\) the radicand is \(9 - 0 - 9 = 0\). So \(f(0,3) = 0\), and \((0,3)\) lies in \(D(f)\).
  \[
  \begin{aligned}
  f(0,3)&=\sqrt{9 - 0^{2} - 3^{2}},\
  &=\sqrt{0}=0.
  \end{aligned}
  \]
  At \((2,2)\) the radicand is \(9 - 4 - 4 = 1\), which is nonnegative, so \((2,2)\) lies in \(D(f)\). Here \(f(2,2) = 1\).
  At \((3,1)\) the radicand is \(9 - 9 - 1 = -1\). A negative radicand has no real square root, so \((3,1)\) lies outside \(D(f)\).
provenance: written-for-site
steps:
  - Domain written as the closed disk \(x^{2} + y^{2} \le 9\).
  - Value \(f(0,0) = 3\).
  - Value \(f(0,3) = 0\).
  - Point \((2,2)\) included, with radicand \(1\).
  - Point \((3,1)\) excluded because the radicand is \(-1\).
verification:
  checks:
    - expr: 'sqrt(9 - 0**2 - 0**2)'
      expected: "3"
    - expr: 'sqrt(9 - 0**2 - 3**2)'
      expected: "0"
    - expr: '9 - 2**2 - 2**2'
      expected: "1"
    - expr: 'sqrt(9 - 2**2 - 2**2)'
      expected: "1"
    - expr: '9 - 3**2 - 1**2'
      expected: "-1"
:::

::: exercise
id: l4-functions-several-variables.ex-mixed-domain-exam
tier: exam
topics: [domain, hemisphere]
statement: |
  Let \(f(x,y) = \sqrt{x} + \sqrt{4 - x^{2} - y^{2}}\). Write \(D(f)\). Compute \(f(0,0)\) and \(f(1,0)\). Decide whether \((-1,0)\) and \((2,2)\) lie in \(D(f)\).
solution: |
  The square root \(\sqrt{x}\) is real when \(x \ge 0\). The square root \(\sqrt{4 - x^{2} - y^{2}}\) is real when \(x^{2} + y^{2} \le 4\). A point of \(D(f)\) satisfies both conditions, so
  \[
  D(f) = \{(x,y) : x \ge 0,\ x^{2} + y^{2} \le 4\}.
  \]
  At \((0,0)\) the value is
  \[
  \begin{aligned}
  f(0,0)&=\sqrt{0} + \sqrt{4},\\
  &=2.
  \end{aligned}
  \]
  At \((1,0)\) the value is
  \[
  \begin{aligned}
  f(1,0)&=\sqrt{1} + \sqrt{4 - 1},\\
  &=1 + \sqrt{3}.
  \end{aligned}
  \]
  At \((-1,0)\) the sum of squares is \((-1)^{2} + 0^{2} = 1\), so the hemisphere square root is real there. No real number has square \(-1\), so \(\sqrt{x}\) is not real. The point \((-1,0)\) lies outside \(D(f)\).
  At \((2,2)\) the coordinate \(x = 2\) is nonnegative, so \(\sqrt{x}\) is real. The hemisphere radicand is \(4 - 2^{2} - 2^{2} = -4\). The point \((2,2)\) lies outside \(D(f)\).
provenance: written-for-site
steps:
  - Both conditions stated, and \(D(f)\) written as their combination.
  - Value \(f(0,0) = 2\).
  - Value \(f(1,0) = 1 + \sqrt{3}\).
  - Point \((-1,0)\) excluded.
  - Point \((2,2)\) excluded.
verification:
  checks:
    - expr: 'sqrt(0)+sqrt(4 - 0**2 - 0**2)'
      expected: "2"
    - expr: 'sqrt(1)+sqrt(4 - 1**2 - 0**2)'
      expected: "1+sqrt(3)"
    - expr: '(-1)**2 + 0**2'
      expected: "1"
    - expr: 'sqrt(2)**2'
      expected: "2"
    - expr: '4 - 2**2 - 2**2'
      expected: "-4"
:::

::: sheet-item
id: l4-functions-several-variables.sheet-sqrt
category: formula
text: |
  For \(f(x,y) = \sqrt{x} + \sqrt{y}\), the domain is \(D(f) = \{(x,y) : x \ge 0,\ y \ge 0\}\).
:::

::: sheet-item
id: l4-functions-several-variables.sheet-hemisphere
category: formula
text: |
  The upper hemisphere \(f(x,y) = \sqrt{4 - x^{2} - y^{2}}\) has domain \(D(f) = \{(x,y) : x^{2} + y^{2} \le 4\}\).
:::

::: sheet-item
id: l4-functions-several-variables.sheet-plane
category: formula
text: |
  The function \(f(x,y) = 3x + 4y - 5\) has graph the plane \(z = 3x + 4y - 5\).
:::

::: exercise
id: l4-functions-several-variables.ex-annulus-domain-range
tier: exam
topics: [domain, hemisphere]
statement: |
  Let \(f(x,y) = \sqrt{x^{2} + y^{2} - 1} + \sqrt{4 - x^{2} - y^{2}}\).

  1. Write \(D(f)\) and describe it.
  2. Compute \(f(1,0)\) and \(f(1,1)\).
  3. Find the largest and the smallest value of \(f\) on \(D(f)\), and say where each is attained.
solution: |
  **Domain.** The first root needs \(x^{2} + y^{2} \ge 1\) and the second needs \(x^{2} + y^{2} \le 4\). Both hold at once, so \(D(f) = \{(x,y) : 1 \le x^{2} + y^{2} \le 4\}\). This is the closed ring between the circles of radius \(1\) and \(2\) around the origin, boundary included.

  **Values.** At \((1,0)\) the sum of squares is \(1\), so \(f(1,0) = \sqrt{0} + \sqrt{3} = \sqrt{3}\). At \((1,1)\) the sum of squares is \(2\), so \(f(1,1) = \sqrt{1} + \sqrt{2} = 1 + \sqrt{2}\).

  **Largest and smallest value.** The function depends only on \(s = x^{2} + y^{2}\), with \(1 \le s \le 4\):
  \[
  f = \sqrt{s - 1} + \sqrt{4 - s}.
  \]
  Both terms are nonnegative, so \(f\) and \(f^{2}\) have their extremes at the same \(s\). Squaring gives
  \[
  \begin{aligned}
  f^{2}&=(s - 1) + (4 - s)\\
  &\quad+ 2\sqrt{(s - 1)(4 - s)},\\
  &=3 + 2\sqrt{-s^{2} + 5s - 4}.
  \end{aligned}
  \]
  The quadratic \(-s^{2} + 5s - 4\) is nonnegative on \([1, 4]\) and has its maximum at \(s = 5/2\), where it equals \(9/4\). It equals \(0\) at \(s = 1\) and \(s = 4\). So \(f^{2}\) has the largest value \(3 + 2\cdot\frac32 = 6\), and the smallest value \(3\).

  The largest value is \(f = \sqrt{6}\), attained on the circle \(x^{2} + y^{2} = 5/2\). The smallest value is \(f = \sqrt{3}\), attained on both boundary circles \(x^{2} + y^{2} = 1\) and \(x^{2} + y^{2} = 4\).
provenance: written-for-site
steps:
  - |
    Domain \(1 \le x^{2} + y^{2} \le 4\).
  - |
    Values \(f(1,0) = \sqrt{3}\) and \(f(1,1) = 1 + \sqrt{2}\).
  - |
    Substitution \(s = x^{2} + y^{2}\) and \(f^{2} = 3 + 2\sqrt{-s^{2} + 5s - 4}\).
  - |
    Largest value \(\sqrt{6}\) at \(s = 5/2\), smallest value \(\sqrt{3}\) at \(s = 1\) and \(s = 4\).
verification:
  checks:
    - expr: "sqrt(1**2 + 0**2 - 1) + sqrt(4 - 1**2 - 0**2)"
      expected: "sqrt(3)"
    - expr: "sqrt(1 + 1 - 1) + sqrt(4 - 1 - 1)"
      expected: "1 + sqrt(2)"
    - expr: "(sqrt(3 - 1) + sqrt(4 - 3))**2 - (3 + 2*sqrt((3 - 1)*(4 - 3)))"
      expected: "0"
    - expr: "(-s**2 + 5*s - 4).subs(s, Rational(5, 2))"
      expected: "Rational(9, 4)"
    - expr: "diff(-s**2 + 5*s - 4, s).subs(s, Rational(5, 2))"
      expected: "0"
    - expr: "sqrt(3 + 2*sqrt(Rational(9, 4)))"
      expected: "sqrt(6)"
    - expr: "sqrt(1 - 1) + sqrt(4 - 1)"
      expected: "sqrt(3)"
    - expr: "sqrt(4 - 1) + sqrt(4 - 4)"
      expected: "sqrt(3)"
:::

::: exercise
id: l4-functions-several-variables.handout-14-1-6
number: "14.1.6"
tier: standard
topics:
  - domain
statement: |
  Find the domain of each of the following functions of two variables:

  1. \(f(x,y)=\sqrt{9-x^2}+\sqrt{y^2-4}\),
  2. \(g(x,y)=\arcsin(x^2+y^2-2)\),
  3. \(h(x,y)=\sqrt{16-x^2-4y^2}\).
solution: |
  ### Part 1

  The root \(\sqrt{9-x^2}\) is real when \(9-x^2\ge 0\), that is, \(x^2\le 9\), so \(-3\le x\le 3\). The root \(\sqrt{y^2-4}\) is real when \(y^2\ge 4\), that is, \(y\le -2\) or \(y\ge 2\). Both roots must be real at the same point, so
  \[
  D(f)=\{(x,y):\lvert x\rvert\le 3\text{ and }\lvert y\rvert\ge 2\}.
  \]
  This is the vertical strip \(-3\le x\le 3\) with the horizontal band \(-2<y<2\) removed. Two pieces remain, one above the line \(y=2\) and one below the line \(y=-2\), boundaries included.

  ### Part 2

  The function \(\arcsin u\) is defined for \(-1\le u\le 1\). Here \(u=x^2+y^2-2\), so the condition is
  \[
  -1\le x^2+y^2-2\le 1.
  \]
  Adding \(2\) to all three parts gives
  \[
  D(g)=\{(x,y):1\le x^2+y^2\le 3\}.
  \]
  This is the closed ring between the circle of radius \(1\) and the circle of radius \(\sqrt{3}\), both centred at the origin, with both circles included.

  ### Part 3

  The root is real when \(16-x^2-4y^2\ge 0\), that is, \(x^2+4y^2\le 16\). Dividing by \(16\) gives
  \[
  D(h)=\left\{(x,y):\frac{x^2}{16}+\frac{y^2}{4}\le 1\right\}.
  \]
  This is the closed region bounded by the ellipse with semi-axes \(4\) along the \(x\)-axis and \(2\) along the \(y\)-axis, boundary included.
provenance: handout-answer
steps:
  - Part 1, two conditions \(x^2\le 9\) and \(y^2\ge 4\) hold together.
  - Part 2, the condition \(-1\le x^2+y^2-2\le 1\) gives \(1\le x^2+y^2\le 3\).
  - Part 3, the condition \(x^2+4y^2\le 16\) gives the filled ellipse.
verification:
  checks:
    - expr: 'solve_univariate_inequality(9 - x**2 >= 0, x, relational=False)'
      expected: "Interval(-3, 3)"
    - expr: 'solve_univariate_inequality(y**2 - 4 >= 0, y, relational=False)'
      expected: "Union(Interval(-oo, -2), Interval(2, oo))"
    - expr: 'solve_univariate_inequality(Abs(u - 2) <= 1, u, relational=False)'
      expected: "Interval(1, 3)"
    - expr: 'sqrt(9 - 3**2) + sqrt(2**2 - 4)'
      expected: "0"
    - expr: '(asin(1**2 + 0**2 - 2), asin(sqrt(3)**2 + 0**2 - 2))'
      expected: "(-pi/2, pi/2)"
    - expr: '(16 - 4**2 - 4*0**2, 16 - 0**2 - 4*2**2)'
      expected: "(0, 0)"
:::
