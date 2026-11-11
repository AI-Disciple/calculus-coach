---
id: l4-dot-cross-product
lecture: 4
order: 2
title: Dot product and cross product
prerequisites: [l4-coordinates-vectors]
sources:
  - { source: handout, section: "12.3", page: 307 }
  - { source: handout, section: "12.4", page: 313 }
examWeight: low
examWeightNote: Supporting geometry for the multivariable lectures. Lecture 4 did not cover this paragraph, so it is background reading.
notation: |
  The dot product is written \(\mathbf{A}\cdot\mathbf{B}\). The cross product is written \(\mathbf{A}\times\mathbf{B}\). Length uses absolute value bars, as in \(\lvert\mathbf{A}\rvert\).
optional: true
taught: handout
status: reviewed
---

::: section
title: Dot product, angle and projection
:::

::: formal-statement
kind: definition
title: Dot product
source: { source: handout, section: "12.3", page: 308 }
text: |
  If \(\mathbf{A}=\langle a_1,a_2,a_3\rangle\) and \(\mathbf{B}=\langle b_1,b_2,b_3\rangle\), then
  \[
  \mathbf{A}\cdot\mathbf{B}=a_1 b_1+a_2 b_2+a_3 b_3.
  \]
:::

::: plain-explanation
text: |
  Multiply matching components and add the products. The result is a **scalar**.
:::

::: formal-statement
kind: theorem
title: Angle between two vectors
source: { source: handout, section: "12.3", page: "308-309" }
text: |
  For nonzero vectors \(\mathbf{A}\) and \(\mathbf{B}\), if \(\theta\) is the angle between them, then
  \[
  \cos\theta=\frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{A}\rvert\lvert\mathbf{B}\rvert}.
  \]
  - The cosine formula needs both vectors to be **nonzero**.
  - Two vectors are **perpendicular** exactly when their dot product is \(0\). The zero vector is perpendicular to every vector by convention.
  - Two nonzero vectors are **parallel or anti-parallel** exactly when \(\cos\theta=\pm 1\). The value \(+1\) means the same direction, and \(-1\) means opposite directions.
:::

::: plain-explanation
text: |
  Place the vectors tail to tail. The angle \(\theta\) is the smaller angle between them. For two nonzero vectors, the sign of the dot product tells you the kind of angle:

  - positive: an acute angle,
  - zero: a right angle,
  - negative: an obtuse angle.

  The zero vector has dot product \(0\) with every vector, so by convention it is perpendicular to every vector.
:::

::: worked-example
title: Angle from the dot product
problem: |
  Find the angle \(\theta\) between the vectors of each pair.

  1. \(\mathbf{A}=\langle 1,2,1\rangle\) and \(\mathbf{B}=\langle 3,1,-5\rangle\).
  2. \(\mathbf{A}=\langle 3,3,0\rangle\) and \(\mathbf{B}=\langle 1,0,0\rangle\), starting from \(\cos\theta\).
solution: |
  **First pair.**
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=1\cdot 3+2\cdot 1+1\cdot(-5)=0,\\
  \lvert\mathbf{A}\rvert&=\sqrt{6},\qquad \lvert\mathbf{B}\rvert=\sqrt{35}.
  \end{aligned}
  \]
  Both lengths are positive, so the cosine is \(0\) and the angle is \(\pi/2\).

  **Second pair.**
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=3\cdot 1+3\cdot 0+0\cdot 0=3,\\
  \lvert\mathbf{A}\rvert&=\sqrt{18},\qquad \lvert\mathbf{B}\rvert=1,\\
  \cos\theta&=\frac{3}{\sqrt{18}}=\frac{1}{\sqrt{2}}.
  \end{aligned}
  \]
  The angle is \(\pi/4\).
:::

::: formal-statement
kind: method
title: Unit vector and projection
source: { source: handout, section: "12.3", page: "309-310" }
text: |
  Let \(\mathbf{B}\) be nonzero. The **unit vector** in the direction of \(\mathbf{B}\) is \(\mathbf{B}/\lvert\mathbf{B}\rvert\). The **projection** of \(\mathbf{A}\) onto \(\mathbf{B}\) and its length are
  \[
  \mathbf{V}=\frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{B}\rvert^2}\mathbf{B},
  \qquad
  \lvert\mathbf{V}\rvert=\frac{\lvert\mathbf{A}\cdot\mathbf{B}\rvert}{\lvert\mathbf{B}\rvert}.
  \]
:::

::: plain-explanation
text: |
  Dividing \(\mathbf{B}\) by its length gives a vector of length one that points the same way. The projection \(\mathbf{V}\) lies on the line through \(\mathbf{B}\):

  - When the angle between \(\mathbf{A}\) and \(\mathbf{B}\) is acute, \(\mathbf{V}\) points the same way as \(\mathbf{B}\).
  - When the angle is obtuse, the factor \(\mathbf{A}\cdot\mathbf{B}/\lvert\mathbf{B}\rvert\) is negative, and \(\mathbf{V}\) points opposite \(\mathbf{B}\).

  The length is the absolute value of that factor, so it is never negative.
:::

::: worked-example
title: Projection onto a vector
problem: |
  Find the projection of \(\mathbf{A}=\langle 1,-3,2\rangle\) onto \(\mathbf{B}=\langle 2,1,0\rangle\). Find the length of that projection.
solution: |
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=1\cdot 2+(-3)\cdot 1+2\cdot 0=-1,\\
  \lvert\mathbf{B}\rvert^2&=2^2+1^2+0^2=5,\\
  \mathbf{V}&=\frac{-1}{5}\langle 2,1,0\rangle=\left\langle -\frac{2}{5},-\frac{1}{5},0\right\rangle.
  \end{aligned}
  \]
  The quotient \(\mathbf{A}\cdot\mathbf{B}/\lvert\mathbf{B}\rvert\) equals \(-\frac{1}{\sqrt{5}}\). The length of the projection is its absolute value, \(\frac{1}{\sqrt{5}}\).
:::

::: formal-statement
kind: theorem
title: Properties of the dot product
source: { source: handout, section: "12.3", page: 311 }
text: |
  For vectors \(\mathbf{u}\), \(\mathbf{v}\) and \(\mathbf{w}\), and a real number \(a\),
  \[
  \begin{aligned}
  \mathbf{u}\cdot\mathbf{u}&=\lvert\mathbf{u}\rvert^2,\\
  \mathbf{u}\cdot\mathbf{v}&=\mathbf{v}\cdot\mathbf{u},\\
  \mathbf{u}\cdot(\mathbf{v}+\mathbf{w})&=\mathbf{u}\cdot\mathbf{v}+\mathbf{u}\cdot\mathbf{w},\\
  (a\mathbf{u})\cdot\mathbf{v}&=a(\mathbf{u}\cdot\mathbf{v})=\mathbf{u}\cdot(a\mathbf{v}).
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  Line by line:

  1. The dot product of a vector with itself is the square of its length.
  2. Swapping the two vectors leaves the value unchanged.
  3. The dot product distributes across vector addition.
  4. A real factor can move onto either vector.
:::

::: trap
text: |
  The length of the projection of \(\mathbf{A}\) onto \(\mathbf{B}\) is \(\lvert\mathbf{A}\cdot\mathbf{B}\rvert/\lvert\mathbf{B}\rvert\), **with** the absolute value. Take \(\mathbf{A}=\langle -1,2,2\rangle\) and \(\mathbf{B}=\langle 3,0,0\rangle\):
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=-3,\\
  \lvert\mathbf{B}\rvert&=3,\\
  \frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{B}\rvert}&=-1.
  \end{aligned}
  \]
  The projection vector is \(\frac{-3}{9}\langle 3,0,0\rangle=\langle -1,0,0\rangle\). Its length is the absolute value of the quotient, so the length is \(1\).
:::

::: key-points
text: |
  - The dot product of \(\mathbf{A}=\langle a_1,a_2,a_3\rangle\) and \(\mathbf{B}=\langle b_1,b_2,b_3\rangle\) is the scalar \(a_1 b_1+a_2 b_2+a_3 b_3\). It satisfies \(\mathbf{u}\cdot\mathbf{u}=\lvert\mathbf{u}\rvert^2\) and \(\mathbf{u}\cdot\mathbf{v}=\mathbf{v}\cdot\mathbf{u}\).
  - For nonzero vectors \(\mathbf{A}\) and \(\mathbf{B}\), \(\cos\theta=\frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{A}\rvert\lvert\mathbf{B}\rvert}\). Two vectors are perpendicular exactly when their dot product is \(0\).
  - For nonzero \(\mathbf{B}\), the projection of \(\mathbf{A}\) onto \(\mathbf{B}\) is \(\frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{B}\rvert^2}\mathbf{B}\), and its length is \(\lvert\mathbf{A}\cdot\mathbf{B}\rvert/\lvert\mathbf{B}\rvert\).
  - The usual slip takes the quotient \(\mathbf{A}\cdot\mathbf{B}/\lvert\mathbf{B}\rvert\) as the length of the projection. For \(\mathbf{A}=\langle -1,2,2\rangle\) and \(\mathbf{B}=\langle 3,0,0\rangle\) the quotient is \(-1\), which is not a length. The length is the absolute value of the quotient, so it is \(1\).
:::

::: concept-question
id: l4-dot-cross-product.q-c6138a2b
question: |
  The vectors are \(\mathbf{0}\) and \(\langle 1,0,0\rangle\). Which statement holds?
options:
  - text: |
      The zero vector is perpendicular to \(\langle 1,0,0\rangle\).
    correct: true
  - text: |
      The cosine of the angle between them is \(0\).
  - text: |
      The cosine of the angle between them is \(1\).
  - text: |
      Their dot product is undefined.
explanation: |
  The dot product is \(0\cdot 1+0\cdot 0+0\cdot 0=0\). The vectors are perpendicular. The cosine formula needs both vectors to be nonzero. It assigns no cosine to this pair.
:::

::: concept-question
id: l4-dot-cross-product.q-d0d94112
question: |
  The cosine of the angle between two nonzero vectors equals \(-1\). How are the vectors related?
options:
  - text: |
      They point in the same direction.
  - text: |
      They are perpendicular.
  - text: |
      They point in opposite directions.
    correct: true
  - text: |
      Their cross product has length \(\lvert\mathbf{A}\rvert\lvert\mathbf{B}\rvert\).
explanation: |
  The cosine equals \(-1\), so the angle is \(\pi\). The vectors are anti-parallel. The sine of \(\pi\) is \(0\), so the cross product is the zero vector.
:::

::: exercise
id: l4-dot-cross-product.ex-angle
tier: basic
topics: [dot-product, angle]
statement: |
  Find the angle between \(\mathbf{A}=\langle 4,-2,1\rangle\) and \(\mathbf{B}=\langle 1,3,2\rangle\).
solution: |
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=4\cdot 1+(-2)\cdot 3+1\cdot 2=0,\\
  \lvert\mathbf{A}\rvert&=\sqrt{16+4+1}=\sqrt{21},\\
  \lvert\mathbf{B}\rvert&=\sqrt{1+9+4}=\sqrt{14}.
  \end{aligned}
  \]
  Both lengths are positive and the dot product is \(0\), so the angle is \(\pi/2\).
provenance: written-for-site
steps:
  - |
    Compute the dot product from the components.
  - |
    Check that both lengths are positive.
  - |
    State the angle.
verification:
  checks:
    - expr: '4*1 + (-2)*3 + 1*2'
      expected: '0'
    - expr: 'acos((4*1 + (-2)*3 + 1*2)/(sqrt(4**2 + (-2)**2 + 1**2)*sqrt(1**2 + 3**2 + 2**2)))'
      expected: 'pi/2'
:::

::: section
title: Cross product and area
:::

::: formal-statement
kind: definition
title: Cross product
source: { source: handout, section: "12.4", page: 313 }
text: |
  For \(\mathbf{A}=\langle a_1,a_2,a_3\rangle\) and \(\mathbf{B}=\langle b_1,b_2,b_3\rangle\),
  \[
  \begin{aligned}
  \mathbf{A}\times\mathbf{B}&=\langle a_2 b_3-b_2 a_3,\\
  &\qquad b_1 a_3-a_1 b_3,\\
  &\qquad a_1 b_2-b_1 a_2\rangle.
  \end{aligned}
  \]
  **Determinant mnemonic.** Put the basis vectors in the first row and expand along it. Each \(2\times 2\) block follows the rule \(\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-cb\):
  \[
  \begin{aligned}
  \begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}&=(a_2 b_3-b_2 a_3)\mathbf{i}\\
  &\qquad-(a_1 b_3-b_1 a_3)\mathbf{j}\\
  &\qquad+(a_1 b_2-b_1 a_2)\mathbf{k}.
  \end{aligned}
  \]
  The **\(\mathbf{j}\) component carries a minus**. It is \(-(a_1 b_3-b_1 a_3)\), which equals \(b_1 a_3-a_1 b_3\).
:::

::: plain-explanation
text: |
  To find the direction of \(\mathbf{A}\times\mathbf{B}\) with the **right-hand rule**:

  1. Put the heel of your right hand at the joined tails.
  2. Curl the fingers from \(\mathbf{A}\) toward \(\mathbf{B}\).
  3. The thumb points along \(\mathbf{A}\times\mathbf{B}\).

  The component formula and the determinant give the same vector.
:::

::: tip
text: |
  The middle component is the one that is subtracted.
:::

::: worked-example
title: A cross product
problem: |
  Compute \(\mathbf{A}\times\mathbf{B}\) for \(\mathbf{A}=\langle 1,2,0\rangle\) and \(\mathbf{B}=\langle 0,1,3\rangle\).
solution: |
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=2\cdot 3-1\cdot 0=6,\\
  \mathbf{j}\text{ component}&=-(1\cdot 3-0\cdot 0)=-3,\\
  \mathbf{k}\text{ component}&=1\cdot 1-0\cdot 2=1.
  \end{aligned}
  \]
  The cross product is \(\langle 6,-3,1\rangle\).
:::

::: formal-statement
kind: theorem
title: Length and order
source: { source: handout, section: "12.4", page: "314-316" }
text: |
  The length \(\lvert\mathbf{A}\times\mathbf{B}\rvert\) is the **area of the parallelogram** spanned by \(\mathbf{A}\) and \(\mathbf{B}\) placed tail to tail. When both vectors are nonzero and \(\theta\) is the angle between them,
  \[
  \lvert\mathbf{A}\times\mathbf{B}\rvert=\lvert\mathbf{A}\rvert\lvert\mathbf{B}\rvert\sin\theta.
  \]
  The cross product **changes sign** when the factors swap:
  \[
  \mathbf{A}\times\mathbf{B}=-(\mathbf{B}\times\mathbf{A}).
  \]
  Two nonzero vectors have cross product \(\mathbf{0}\) exactly when they are parallel or anti-parallel.
:::

::: plain-explanation
text: |
  The angle used here lies between \(0\) and \(\pi\), so \(\sin\theta\) is nonnegative. Reversing the order of the factors reverses the cross product. Nonzero vectors on the same line give the zero cross product, and the parallelogram they span has area \(0\).
:::

::: worked-example
title: Area of a parallelogram
problem: |
  Find the area of the parallelogram spanned by \(\mathbf{A}=\langle 2,0,0\rangle\) and \(\mathbf{B}=\langle 1,2,0\rangle\).
solution: |
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=0\cdot 0-2\cdot 0=0,\\
  \mathbf{j}\text{ component}&=-(2\cdot 0-1\cdot 0)=0,\\
  \mathbf{k}\text{ component}&=2\cdot 2-1\cdot 0=4.
  \end{aligned}
  \]
  The cross product is \(\langle 0,0,4\rangle\). The area is the length of that vector, so the area is \(4\).
:::

::: guided-example
title: Cross product, then area
problem: |
  Compute \(\mathbf{A}\times\mathbf{B}\) for \(\mathbf{A}=\langle 1,0,2\rangle\) and \(\mathbf{B}=\langle 3,-1,1\rangle\). Then find the area of the parallelogram they span.
steps:
  - |
    The \(\mathbf{i}\) component is \(a_2 b_3-b_2 a_3=0\cdot 1-(-1)\cdot 2=2\).
  - |
    The \(\mathbf{j}\) component carries a minus: \(-(1\cdot 1-3\cdot 2)=-(1-6)=5\).
  - |
    The \(\mathbf{k}\) component is \(1\cdot(-1)-3\cdot 0=-1\). The cross product is \(\langle 2,5,-1\rangle\).
  - |
    The area is the length of the cross product. That length is \(\sqrt{2^2+5^2+(-1)^2}=\sqrt{30}\).
:::

::: trap
text: |
  The \(\mathbf{j}\) component of \(\mathbf{A}\times\mathbf{B}\) is \(-(a_1 b_3-b_1 a_3)\). Take \(\mathbf{A}=\langle 2,1,0\rangle\) and \(\mathbf{B}=\langle 1,3,1\rangle\):
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=1\cdot 1-3\cdot 0=1,\\
  \mathbf{j}\text{ component}&=-(2\cdot 1-1\cdot 0)=-2,\\
  \mathbf{k}\text{ component}&=2\cdot 3-1\cdot 1=5.
  \end{aligned}
  \]
  The cross product is \(\langle 1,-2,5\rangle\). Writing the \(\mathbf{j}\) component as \(+(2\cdot 1-1\cdot 0)\) produces \(\langle 1,2,5\rangle\), which is a different vector.
:::

::: going-deeper
title: Length of the cross product from the dot product
text: |
  For vectors \(\mathbf{A}\) and \(\mathbf{B}\) in space,
  \[
  \lvert\mathbf{A}\times\mathbf{B}\rvert^{2} = \lvert\mathbf{A}\rvert^{2}\lvert\mathbf{B}\rvert^{2} - (\mathbf{A}\cdot\mathbf{B})^{2}.
  \]
  Check with \(\mathbf{A} = (1, 2, 0)\) and \(\mathbf{B} = (0, 1, 3)\). The cross product is \((6, -3, 1)\), with squared length \(46\). The right side is \(5\cdot 10 - 2^{2} = 46\).

  With \(\mathbf{A}\cdot\mathbf{B} = \lvert\mathbf{A}\rvert\lvert\mathbf{B}\rvert\cos\theta\), the identity gives
  \[
  \lvert\mathbf{A}\times\mathbf{B}\rvert^{2} = \lvert\mathbf{A}\rvert^{2}\lvert\mathbf{B}\rvert^{2}\sin^{2}\theta.
  \]
  That is why the cross product has length equal to the area of the parallelogram spanned by the two vectors.
:::

::: key-points
text: |
  - For \(\mathbf{A}=\langle a_1,a_2,a_3\rangle\) and \(\mathbf{B}=\langle b_1,b_2,b_3\rangle\), \(\mathbf{A}\times\mathbf{B}=\langle a_2 b_3-b_2 a_3,\ b_1 a_3-a_1 b_3,\ a_1 b_2-b_1 a_2\rangle\). The thumb of the right hand points along \(\mathbf{A}\times\mathbf{B}\) when the fingers curl from \(\mathbf{A}\) toward \(\mathbf{B}\).
  - The length \(\lvert\mathbf{A}\times\mathbf{B}\rvert\) is the area of the parallelogram spanned by \(\mathbf{A}\) and \(\mathbf{B}\) placed tail to tail. When both vectors are nonzero, it equals \(\lvert\mathbf{A}\rvert\lvert\mathbf{B}\rvert\sin\theta\).
  - Swapping the factors changes the sign: \(\mathbf{A}\times\mathbf{B}=-(\mathbf{B}\times\mathbf{A})\). Nonzero parallel or anti-parallel vectors have cross product \(\mathbf{0}\).
  - The usual slip writes the \(\mathbf{j}\) component as \(+(a_1 b_3-b_1 a_3)\). For \(\mathbf{A}=\langle 2,1,0\rangle\) and \(\mathbf{B}=\langle 1,3,1\rangle\) that gives \(\langle 1,2,5\rangle\). The \(\mathbf{j}\) component is \(-(a_1 b_3-b_1 a_3)\), and the cross product is \(\langle 1,-2,5\rangle\).
:::

::: concept-question
id: l4-dot-cross-product.q-d9d4d276
question: |
  \(\mathbf{A}\times\mathbf{B}=\langle 1,0,-2\rangle\). Which vector equals \(\mathbf{B}\times\mathbf{A}\)?
options:
  - text: |
      \(\langle 1,0,-2\rangle\)
  - text: |
      \(\langle -1,0,2\rangle\)
    correct: true
  - text: |
      \(\langle 0,0,0\rangle\)
  - text: |
      \(\langle 2,0,-1\rangle\)
explanation: |
  The cross product changes sign when the factors swap. \(\mathbf{B}\times\mathbf{A}=-(\mathbf{A}\times\mathbf{B})=\langle -1,0,2\rangle\).
:::

::: exercise
id: l4-dot-cross-product.ex-projection
tier: standard
topics: [projection]
statement: |
  Find the projection of \(\mathbf{A}=\langle 2,-1,2\rangle\) onto \(\mathbf{B}=\langle 1,2,-1\rangle\). Find the length of that projection.
solution: |
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=2\cdot 1+(-1)\cdot 2+2\cdot(-1)\\
  &=-2,\\
  \lvert\mathbf{B}\rvert^2&=1^2+2^2+(-1)^2\\
  &=6,\\
  \mathbf{V}&=\frac{-2}{6}\langle 1,2,-1\rangle\\
  &=\left\langle -\frac{1}{3},-\frac{2}{3},\frac{1}{3}\right\rangle.
  \end{aligned}
  \]
  The quotient \(\mathbf{A}\cdot\mathbf{B}/\lvert\mathbf{B}\rvert\) equals \(-\frac{2}{\sqrt{6}}\). The length is its absolute value, \(\frac{\sqrt{6}}{3}\).
provenance: written-for-site
steps:
  - |
    Compute the dot product and the squared length of \(\mathbf{B}\).
  - |
    Form the projection vector.
  - |
    Take the absolute value to obtain the length.
verification:
  checks:
    - expr: '((2*1 + (-1)*2 + 2*(-1))/(1**2 + 2**2 + (-1)**2) * 1, (2*1 + (-1)*2 + 2*(-1))/(1**2 + 2**2 + (-1)**2) * 2, (2*1 + (-1)*2 + 2*(-1))/(1**2 + 2**2 + (-1)**2) * (-1))'
      expected: '(-Rational(1, 3), -Rational(2, 3), Rational(1, 3))'
    - expr: 'Abs(2*1 + (-1)*2 + 2*(-1))/sqrt(1**2 + 2**2 + (-1)**2)'
      expected: 'sqrt(6)/3'
:::

::: exercise
id: l4-dot-cross-product.ex-area
tier: exam
topics: [cross-product, area]
statement: |
  Compute \(\mathbf{A}\times\mathbf{B}\) for \(\mathbf{A}=\langle 1,2,-1\rangle\) and \(\mathbf{B}=\langle 2,0,3\rangle\). Find the area of the parallelogram spanned by these vectors.
solution: |
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=2\cdot 3-0\cdot(-1)\\
  &=6,\\
  \mathbf{j}\text{ component}&=-(1\cdot 3-2\cdot(-1))\\
  &=-5,\\
  \mathbf{k}\text{ component}&=1\cdot 0-2\cdot 2\\
  &=-4.
  \end{aligned}
  \]
  The cross product is \(\langle 6,-5,-4\rangle\). The area is the length of that vector, so the area is \(\sqrt{77}\).
provenance: written-for-site
steps:
  - |
    Compute each component, with the minus on the \(\mathbf{j}\) component.
  - |
    State the cross product.
  - |
    Take the length of the cross product as the area.
verification:
  checks:
    - expr: '(2*3 - 0*(-1), -(1*3 - 2*(-1)), 1*0 - 2*2)'
      expected: '(6, -5, -4)'
    - expr: 'sqrt(6**2 + (-5)**2 + (-4)**2)'
      expected: 'sqrt(77)'
:::

::: sheet-item
id: l4-dot-cross-product.sheet-angle
category: formula
text: |
  For \(\mathbf{A}=\langle a_1,a_2,a_3\rangle\) and \(\mathbf{B}=\langle b_1,b_2,b_3\rangle\), the dot product is \(a_1 b_1+a_2 b_2+a_3 b_3\). For nonzero vectors, \(\cos\theta=\frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{A}\rvert\lvert\mathbf{B}\rvert}\). Two vectors are perpendicular exactly when their dot product is \(0\).
:::

::: sheet-item
id: l4-dot-cross-product.sheet-properties
category: formula
text: |
  The dot product of a vector with itself equals the square of its length. Swapping the factors leaves the product unchanged. The product distributes over vector addition. A scalar factor can move onto either vector.
:::

::: sheet-item
id: l4-dot-cross-product.sheet-cross
category: formula
text: |
  \(\mathbf{A}\times\mathbf{B}=\langle a_2 b_3-b_2 a_3,\ -(a_1 b_3-b_1 a_3),\ a_1 b_2-b_1 a_2\rangle\). The length \(\lvert\mathbf{A}\times\mathbf{B}\rvert=\lvert\mathbf{A}\rvert\lvert\mathbf{B}\rvert\sin\theta\) is the area of the parallelogram.
:::

::: sheet-item
id: l4-dot-cross-product.sheet-length
category: trap
text: |
  The length of the projection of \(\mathbf{A}\) onto \(\mathbf{B}\) is \(\frac{\lvert\mathbf{A}\cdot\mathbf{B}\rvert}{\lvert\mathbf{B}\rvert}\). The absolute value keeps that length positive when the angle is obtuse.
:::

::: exercise
id: l4-dot-cross-product.ex-triangle-normal-plane
tier: standard
topics: [cross-product, area, planes]
statement: |
  Let \(P = (1, 0, 0)\), \(Q = (0, 2, 0)\) and \(R = (0, 0, 3)\).

  1. Compute \(\overrightarrow{PQ}\), \(\overrightarrow{PR}\) and \(\overrightarrow{PQ}\times\overrightarrow{PR}\).
  2. Find the area of the triangle \(PQR\).
  3. Give a unit vector perpendicular to the plane through \(P\), \(Q\) and \(R\), and write the equation of that plane.
  4. Find the distance from the origin to the plane.
solution: |
  **Displacements and cross product.** The displacements are \(\overrightarrow{PQ} = \langle -1, 2, 0\rangle\) and \(\overrightarrow{PR} = \langle -1, 0, 3\rangle\). The components of the cross product are
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=2\cdot 3-0\cdot 0\\
  &=6,\\
  \mathbf{j}\text{ component}&=-\bigl((-1)\cdot 3-(-1)\cdot 0\bigr)\\
  &=3,\\
  \mathbf{k}\text{ component}&=(-1)\cdot 0-(-1)\cdot 2\\
  &=2.
  \end{aligned}
  \]
  So \(\overrightarrow{PQ}\times\overrightarrow{PR} = \langle 6, 3, 2\rangle\).

  **Area.** The length of the cross product is \(\sqrt{36 + 9 + 4} = 7\). That is the area of the parallelogram spanned by \(\overrightarrow{PQ}\) and \(\overrightarrow{PR}\). The triangle is half of it, so its area is \(7/2\).

  **Unit normal and plane.** The cross product is perpendicular to both displacements, so it is a normal to the plane. Dividing by its length \(7\) gives the unit vector \(\langle 6/7, 3/7, 2/7\rangle\). The plane through \(P\) with normal \(\langle 6, 3, 2\rangle\) is \(6x + 3y + 2z = 6\cdot 1 + 3\cdot 0 + 2\cdot 0 = 6\). The points \(Q\) and \(R\) satisfy it, because \(3\cdot 2 = 6\) and \(2\cdot 3 = 6\).

  **Distance from the origin.** Take \(P\) on the plane. The vector from \(P\) to the origin is \(\langle -1, 0, 0\rangle\), and its dot product with \(\langle 6, 3, 2\rangle\) is \(-6\). The distance is \(\lvert -6\rvert/7 = 6/7\).
provenance: written-for-site
steps:
  - |
    Cross product \(\langle 6, 3, 2\rangle\), with the minus on the \(\mathbf{j}\) component.
  - |
    Triangle area \(7/2\), half of the length \(7\).
  - |
    Unit normal \(\langle 6/7, 3/7, 2/7\rangle\) and plane \(6x + 3y + 2z = 6\).
  - |
    Distance \(6/7\), with the absolute value.
verification:
  checks:
    - expr: "(2*3 - 0*0, -((-1)*3 - (-1)*0), (-1)*0 - (-1)*2)"
      expected: "(6, 3, 2)"
    - expr: "sqrt(6**2 + 3**2 + 2**2)"
      expected: "7"
    - expr: "sqrt(6**2 + 3**2 + 2**2)/2"
      expected: "Rational(7, 2)"
    - expr: "(6*1, 3*2, 2*3)"
      expected: "(6, 6, 6)"
    - expr: "Abs((-1)*6 + 0*3 + 0*2)/7"
      expected: "Rational(6, 7)"
:::

::: exercise
id: l4-dot-cross-product.handout-12-3-1
number: "12.3.1"
tier: basic
topics:
  - dot-product
statement: |
  Find \(\langle 1,1,1\rangle\cdot\langle 2,-3,4\rangle\).
solution: |
  Multiply the matching components and add the products.
  \[
  \begin{aligned}
  \langle 1,1,1\rangle\cdot\langle 2,-3,4\rangle&=1\cdot 2+1\cdot(-3)+1\cdot 4\\
  &=2-3+4=3.
  \end{aligned}
  \]
  The dot product is \(3\).
provenance: handout-answer
steps:
  - Multiply matching components.
  - Add the three products.
verification:
  checks:
    - expr: 'Matrix([1, 1, 1]).dot(Matrix([2, -3, 4]))'
      expected: "3"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-2
number: "12.3.2"
tier: basic
topics:
  - dot-product
statement: |
  Find \(\langle 1,2,0\rangle\cdot\langle 0,0,57\rangle\).
solution: |
  \[
  \begin{aligned}
  \langle 1,2,0\rangle\cdot\langle 0,0,57\rangle&=1\cdot 0+2\cdot 0+0\cdot 57\\
  &=0.
  \end{aligned}
  \]
  The dot product is \(0\), so the two vectors are perpendicular.
provenance: handout-answer
steps:
  - Multiply matching components and add.
  - A dot product of \(0\) means the vectors are perpendicular.
verification:
  checks:
    - expr: 'Matrix([1, 2, 0]).dot(Matrix([0, 0, 57]))'
      expected: "0"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-4
number: "12.3.4"
tier: basic
topics:
  - dot-product
statement: |
  Find \(\langle -1,-2,5\rangle\cdot\langle 1,0,-1\rangle\).
solution: |
  \[
  \begin{aligned}
  \langle -1,-2,5\rangle\cdot\langle 1,0,-1\rangle&=(-1)\cdot 1+(-2)\cdot 0+5\cdot(-1)\\
  &=-1+0-5=-6.
  \end{aligned}
  \]
  The dot product is \(-6\). It is negative, so the angle between the vectors is obtuse.
provenance: handout-answer
steps:
  - Multiply matching components and add.
  - A negative dot product means an obtuse angle.
verification:
  checks:
    - expr: 'Matrix([-1, -2, 5]).dot(Matrix([1, 0, -1]))'
      expected: "-6"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-5
number: "12.3.5"
tier: basic
topics:
  - dot-product
statement: |
  Find \(\langle 3,4,6\rangle\cdot\langle 2,3,4\rangle\).
solution: |
  \[
  \begin{aligned}
  \langle 3,4,6\rangle\cdot\langle 2,3,4\rangle&=3\cdot 2+4\cdot 3+6\cdot 4\\
  &=6+12+24=42.
  \end{aligned}
  \]
  The dot product is \(42\).
provenance: handout-answer
steps:
  - Multiply matching components.
  - Add the three products.
verification:
  checks:
    - expr: 'Matrix([3, 4, 6]).dot(Matrix([2, 3, 4]))'
      expected: "42"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-6
number: "12.3.6"
tier: basic
topics:
  - dot-product
  - angle
statement: |
  Find the cosine of the angle between \(\langle 1,2,3\rangle\) and \(\langle 1,1,1\rangle\). Use a calculator if necessary to find the angle.
solution: |
  Let \(\mathbf{A}=\langle 1,2,3\rangle\) and \(\mathbf{B}=\langle 1,1,1\rangle\). Then
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=1+2+3=6,\\
  \lvert\mathbf{A}\rvert&=\sqrt{1+4+9}=\sqrt{14},\\
  \lvert\mathbf{B}\rvert&=\sqrt{1+1+1}=\sqrt{3}.
  \end{aligned}
  \]
  Both vectors are nonzero, so the cosine formula applies.
  \[
  \begin{aligned}
  \cos\theta&=\frac{6}{\sqrt{14}\sqrt{3}}=\frac{6}{\sqrt{42}}\\
  &=\sqrt{\frac{36}{42}}=\frac{\sqrt{6}}{\sqrt{7}}.
  \end{aligned}
  \]
  A calculator gives \(\theta=\arccos\sqrt{6/7}\approx 0.39\) rad.
provenance: handout-answer
steps:
  - Dot product \(6\) and lengths \(\sqrt{14}\), \(\sqrt{3}\).
  - Cosine \(\sqrt{6}/\sqrt{7}\).
  - Angle about \(0.39\) rad.
verification:
  checks:
    - expr: 'Matrix([1, 2, 3]).dot(Matrix([1, 1, 1]))'
      expected: "6"
    - expr: 'Matrix([1, 2, 3]).dot(Matrix([1, 1, 1]))/(sqrt(14)*sqrt(3))'
      expected: "sqrt(6)/sqrt(7)"
    - expr: 'round(100*acos(sqrt(6)/sqrt(7)).evalf())'
      expected: "39"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-7
number: "12.3.7"
tier: standard
topics:
  - dot-product
  - angle
statement: |
  Find the cosine of the angle between \(\langle -1,-2,-3\rangle\) and \(\langle 5,0,2\rangle\). Use a calculator if necessary to find the angle.
solution: |
  Let \(\mathbf{A}=\langle -1,-2,-3\rangle\) and \(\mathbf{B}=\langle 5,0,2\rangle\). Then
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=-5+0-6=-11,\\
  \lvert\mathbf{A}\rvert&=\sqrt{1+4+9}=\sqrt{14},\\
  \lvert\mathbf{B}\rvert&=\sqrt{25+0+4}=\sqrt{29}.
  \end{aligned}
  \]
  Both vectors are nonzero, so
  \[
  \begin{aligned}
  \cos\theta&=\frac{-11}{\sqrt{14}\sqrt{29}}\\
  &=-\frac{11\sqrt{14}\sqrt{29}}{406}.
  \end{aligned}
  \]
  The cosine is negative, so the angle is obtuse. A calculator gives \(\theta\approx 2.15\) rad.
provenance: handout-answer
steps:
  - Dot product \(-11\) and lengths \(\sqrt{14}\), \(\sqrt{29}\).
  - Rationalise the cosine to \(-11\sqrt{14}\sqrt{29}/406\).
  - The cosine is negative, so the angle is obtuse, about \(2.15\) rad.
verification:
  checks:
    - expr: 'Matrix([-1, -2, -3]).dot(Matrix([5, 0, 2]))'
      expected: "-11"
    - expr: 'Matrix([-1, -2, -3]).dot(Matrix([5, 0, 2]))/(sqrt(14)*sqrt(29))'
      expected: "-11*sqrt(14)*sqrt(29)/406"
    - expr: 'round(100*acos(-11*sqrt(14)*sqrt(29)/406).evalf())'
      expected: "215"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-8
number: "12.3.8"
tier: basic
topics:
  - dot-product
  - angle
statement: |
  Find the cosine of the angle between \(\langle 47,100,0\rangle\) and \(\langle 0,0,5\rangle\). Use a calculator if necessary to find the angle.
solution: |
  Let \(\mathbf{A}=\langle 47,100,0\rangle\) and \(\mathbf{B}=\langle 0,0,5\rangle\). Then
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=47\cdot 0+100\cdot 0+0\cdot 5\\
  &=0.
  \end{aligned}
  \]
  Both vectors are nonzero, so the cosine formula applies and \(\cos\theta=0\). The angle is \(\theta=\pi/2\), and the vectors are perpendicular.
provenance: handout-answer
steps:
  - The dot product is \(0\).
  - Both vectors are nonzero, so the cosine is \(0\).
  - The angle is \(\pi/2\).
verification:
  checks:
    - expr: 'Matrix([47, 100, 0]).dot(Matrix([0, 0, 5]))'
      expected: "0"
    - expr: 'acos(Matrix([47, 100, 0]).dot(Matrix([0, 0, 5]))/(sqrt(47**2 + 100**2)*5))'
      expected: "pi/2"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-9
number: "12.3.9"
tier: basic
topics:
  - dot-product
  - angle
statement: |
  Find the cosine of the angle between \(\langle 1,0,1\rangle\) and \(\langle 0,1,1\rangle\). Use a calculator if necessary to find the angle.
solution: |
  Let \(\mathbf{A}=\langle 1,0,1\rangle\) and \(\mathbf{B}=\langle 0,1,1\rangle\). Then
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=0+0+1=1,\\
  \lvert\mathbf{A}\rvert&=\sqrt{2},\qquad\lvert\mathbf{B}\rvert=\sqrt{2},\\
  \cos\theta&=\frac{1}{\sqrt{2}\sqrt{2}}=\frac{1}{2}.
  \end{aligned}
  \]
  The angle with cosine \(1/2\) in \([0,\pi]\) is \(\theta=\pi/3\).
provenance: handout-answer
steps:
  - Dot product \(1\) and both lengths \(\sqrt{2}\).
  - Cosine \(1/2\).
  - Angle \(\pi/3\).
verification:
  checks:
    - expr: 'Matrix([1, 0, 1]).dot(Matrix([0, 1, 1]))/(sqrt(2)*sqrt(2))'
      expected: "1/2"
    - expr: 'acos(Rational(1, 2))'
      expected: "pi/3"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-10
number: "12.3.10"
tier: standard
topics:
  - dot-product
  - angle
statement: |
  Find the cosine of the angle between \(\langle 2,0,0\rangle\) and \(\langle -1,1,-1\rangle\). Use a calculator if necessary to find the angle.
solution: |
  Let \(\mathbf{A}=\langle 2,0,0\rangle\) and \(\mathbf{B}=\langle -1,1,-1\rangle\). Then
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=-2+0+0=-2,\\
  \lvert\mathbf{A}\rvert&=2,\qquad\lvert\mathbf{B}\rvert=\sqrt{3},\\
  \cos\theta&=\frac{-2}{2\sqrt{3}}=-\frac{1}{\sqrt{3}}.
  \end{aligned}
  \]
  The cosine is negative, so the angle is obtuse. A calculator gives \(\theta=\arccos\bigl(-1/\sqrt{3}\bigr)\approx 2.19\) rad.
provenance: handout-answer
steps:
  - Dot product \(-2\) and lengths \(2\), \(\sqrt{3}\).
  - Cosine \(-1/\sqrt{3}\).
  - The angle is obtuse, about \(2.19\) rad.
verification:
  checks:
    - expr: 'Matrix([2, 0, 0]).dot(Matrix([-1, 1, -1]))/(2*sqrt(3))'
      expected: "-1/sqrt(3)"
    - expr: 'round(100*acos(-1/sqrt(3)).evalf())'
      expected: "219"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-11
number: "12.3.11"
tier: standard
topics:
  - angle
statement: |
  Find the angle between the diagonal of a cube and one of the edges adjacent to the diagonal.
solution: |
  Take the cube \([0,1]^3\). One diagonal runs from the origin to \((1,1,1)\), so it has direction \(\mathbf{D}=\langle 1,1,1\rangle\). The edge \(\mathbf{E}=\langle 1,0,0\rangle\) starts at the same corner. By symmetry, every other edge at that corner gives the same angle.
  \[
  \begin{aligned}
  \mathbf{D}\cdot\mathbf{E}&=1,\\
  \lvert\mathbf{D}\rvert&=\sqrt{3},\qquad\lvert\mathbf{E}\rvert=1,\\
  \cos\theta&=\frac{1}{\sqrt{3}}.
  \end{aligned}
  \]
  The angle is \(\theta=\arccos\bigl(1/\sqrt{3}\bigr)\approx 0.96\) rad.
provenance: handout-answer
steps:
  - Place the cube at \([0,1]^3\) with diagonal \(\langle 1,1,1\rangle\) and edge \(\langle 1,0,0\rangle\).
  - Cosine \(1/\sqrt{3}\).
  - Angle about \(0.96\) rad.
verification:
  checks:
    - expr: 'Matrix([1, 1, 1]).dot(Matrix([1, 0, 0]))/(sqrt(3)*1)'
      expected: "1/sqrt(3)"
    - expr: 'round(100*acos(1/sqrt(3)).evalf())'
      expected: "96"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-12
number: "12.3.12"
tier: standard
topics:
  - projection
statement: |
  Find the scalar and vector projections of \(\langle 1,2,3\rangle\) onto \(\langle 1,2,0\rangle\).
solution: |
  Let \(\mathbf{A}=\langle 1,2,3\rangle\) and \(\mathbf{B}=\langle 1,2,0\rangle\). Then
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=1+4+0=5,\\
  \lvert\mathbf{B}\rvert^2&=1+4+0=5.
  \end{aligned}
  \]
  The scalar projection is
  \[
  \frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{B}\rvert}=\frac{5}{\sqrt{5}}=\sqrt{5}.
  \]
  The vector projection is
  \[
  \frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{B}\rvert^2}\mathbf{B}=\frac{5}{5}\langle 1,2,0\rangle=\langle 1,2,0\rangle.
  \]
  The scalar projection is \(\sqrt{5}\) and the vector projection is \(\langle 1,2,0\rangle\).
provenance: handout-answer
steps:
  - Dot product \(5\) and \(\lvert\mathbf{B}\rvert^2=5\).
  - Scalar projection \(5/\sqrt{5}=\sqrt{5}\).
  - Vector projection \(\langle 1,2,0\rangle\).
verification:
  checks:
    - expr: 'Matrix([1, 2, 3]).dot(Matrix([1, 2, 0]))/sqrt(5)'
      expected: "sqrt(5)"
    - expr: '(Matrix([1, 2, 3]).dot(Matrix([1, 2, 0]))/5*Matrix([1, 2, 0]) - Matrix([1, 2, 0])).norm()'
      expected: "0"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-13
number: "12.3.13"
tier: standard
topics:
  - projection
statement: |
  Find the scalar and vector projections of \(\langle 1,1,1\rangle\) onto \(\langle 3,2,1\rangle\).
solution: |
  Let \(\mathbf{A}=\langle 1,1,1\rangle\) and \(\mathbf{B}=\langle 3,2,1\rangle\). Then
  \[
  \begin{aligned}
  \mathbf{A}\cdot\mathbf{B}&=3+2+1=6,\\
  \lvert\mathbf{B}\rvert^2&=9+4+1=14.
  \end{aligned}
  \]
  The scalar projection is
  \[
  \frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{B}\rvert}=\frac{6}{\sqrt{14}}=\frac{6\sqrt{14}}{14}=\frac{3\sqrt{14}}{7}.
  \]
  The vector projection is
  \[
  \begin{aligned}
  \frac{\mathbf{A}\cdot\mathbf{B}}{\lvert\mathbf{B}\rvert^2}\mathbf{B}&=\frac{6}{14}\langle 3,2,1\rangle\\
  &=\left\langle\frac{9}{7},\frac{6}{7},\frac{3}{7}\right\rangle.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Dot product \(6\) and \(\lvert\mathbf{B}\rvert^2=14\).
  - Scalar projection \(6/\sqrt{14}=3\sqrt{14}/7\).
  - Vector projection \(\tfrac{3}{7}\langle 3,2,1\rangle\).
verification:
  checks:
    - expr: 'Matrix([1, 1, 1]).dot(Matrix([3, 2, 1]))/sqrt(14)'
      expected: "3*sqrt(14)/7"
    - expr: '(Matrix([1, 1, 1]).dot(Matrix([3, 2, 1]))/14*Matrix([3, 2, 1]) - Matrix([Rational(9, 7), Rational(6, 7), Rational(3, 7)])).norm()'
      expected: "0"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-16
number: "12.3.16"
tier: standard
topics:
  - dot-product
  - cross-product
statement: |
  Use the dot product to find a non-zero vector \(\mathbf{w}\) perpendicular to both \(\mathbf{u}=\langle 1,2,-3\rangle\) and \(\mathbf{v}=\langle 2,0,1\rangle\).
solution: |
  Write \(\mathbf{w}=\langle w_1,w_2,w_3\rangle\). Perpendicular means the dot product is \(0\), so
  \[
  \begin{aligned}
  \mathbf{w}\cdot\mathbf{u}&=w_1+2w_2-3w_3=0,\\
  \mathbf{w}\cdot\mathbf{v}&=2w_1+w_3=0.
  \end{aligned}
  \]
  The second equation gives \(w_3=-2w_1\). Substituting into the first,
  \[
  \begin{aligned}
  w_1+2w_2+6w_1&=0,\\
  w_2&=-\frac{7}{2}w_1.
  \end{aligned}
  \]
  Put \(w_1=a\). Then \(\mathbf{w}=\bigl\langle a,\,-\tfrac{7}{2}a,\,-2a\bigr\rangle\), and any \(a\neq 0\) gives a non-zero solution. For example \(a=2\) gives \(\mathbf{w}=\langle 2,-7,-4\rangle\).

  Check: \(\langle 2,-7,-4\rangle\cdot\langle 1,2,-3\rangle=2-14+12=0\) and \(\langle 2,-7,-4\rangle\cdot\langle 2,0,1\rangle=4+0-4=0\).
provenance: handout-answer
steps:
  - Write the two equations \(\mathbf{w}\cdot\mathbf{u}=0\) and \(\mathbf{w}\cdot\mathbf{v}=0\).
  - Solve for \(w_2\) and \(w_3\) in terms of \(w_1\).
  - Pick any non-zero \(w_1\) and check both dot products.
verification:
  checks:
    - expr: 'solve([w1 + 2*w2 - 3*w3, 2*w1 + w3], [w2, w3])[w2]'
      expected: "-7*w1/2"
    - expr: 'solve([w1 + 2*w2 - 3*w3, 2*w1 + w3], [w2, w3])[w3]'
      expected: "-2*w1"
    - expr: '(Matrix([2, -7, -4]).dot(Matrix([1, 2, -3])), Matrix([2, -7, -4]).dot(Matrix([2, 0, 1])))'
      expected: "(0, 0)"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-17
number: "12.3.17"
tier: standard
topics:
  - cross-product
  - dot-product
statement: |
  Let \(\mathbf{x}=\langle 1,1,0\rangle\) and \(\mathbf{y}=\langle 2,4,2\rangle\). Find a unit vector that is perpendicular to both \(\mathbf{x}\) and \(\mathbf{y}\).
solution: |
  Write \(\mathbf{w}=\langle w_1,w_2,w_3\rangle\) with
  \[
  \begin{aligned}
  \mathbf{w}\cdot\mathbf{x}&=w_1+w_2=0,\\
  \mathbf{w}\cdot\mathbf{y}&=2w_1+4w_2+2w_3=0.
  \end{aligned}
  \]
  The first equation gives \(w_2=-w_1\). The second becomes \(2w_1-4w_1+2w_3=0\), so \(w_3=w_1\). Every solution is a multiple of \(\langle 1,-1,1\rangle\).

  The length of \(\langle 1,-1,1\rangle\) is \(\sqrt{3}\). Dividing by it gives a unit vector:
  \[
  \mathbf{n}=\left\langle\frac{1}{\sqrt{3}},-\frac{1}{\sqrt{3}},\frac{1}{\sqrt{3}}\right\rangle.
  \]
  The vector \(-\mathbf{n}\) also works. Check: \(\langle 1,-1,1\rangle\cdot\langle 1,1,0\rangle=0\) and \(\langle 1,-1,1\rangle\cdot\langle 2,4,2\rangle=2-4+2=0\).
provenance: handout-answer
steps:
  - Solve \(\mathbf{w}\cdot\mathbf{x}=0\) and \(\mathbf{w}\cdot\mathbf{y}=0\) to get the direction \(\langle 1,-1,1\rangle\).
  - Divide by the length \(\sqrt{3}\).
  - The negative vector is the other answer.
verification:
  checks:
    - expr: 'solve([w1 + w2, 2*w1 + 4*w2 + 2*w3], [w2, w3])[w3]'
      expected: "w1"
    - expr: '(Matrix([1, -1, 1]).dot(Matrix([1, 1, 0])), Matrix([1, -1, 1]).dot(Matrix([2, 4, 2])))'
      expected: "(0, 0)"
    - expr: 'sqrt(1 + 1 + 1)'
      expected: "sqrt(3)"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-18
number: "12.3.18"
tier: standard
topics:
  - dot-product
  - angle
statement: |
  Do the three points \((1,2,0)\), \((-2,1,1)\) and \((0,3,-1)\) form a right triangle?
solution: |
  Name the points \(P=(1,2,0)\), \(Q=(-2,1,1)\) and \(R=(0,3,-1)\). The triangle has a right angle exactly when the two side vectors at one vertex have dot product \(0\). The side vectors are
  \[
  \begin{aligned}
  \overrightarrow{PQ}&=\langle -3,-1,1\rangle,\\
  \overrightarrow{PR}&=\langle -1,1,-1\rangle,\\
  \overrightarrow{QR}&=\langle 2,2,-2\rangle.
  \end{aligned}
  \]
  Test each vertex with the two vectors that leave it:
  \[
  \begin{aligned}
  \text{at }P:\quad\overrightarrow{PQ}\cdot\overrightarrow{PR}&=3-1-1=1,\\
  \text{at }Q:\quad\overrightarrow{QP}\cdot\overrightarrow{QR}&=\langle 3,1,-1\rangle\cdot\langle 2,2,-2\rangle\\
  &=6+2+2=10,\\
  \text{at }R:\quad\overrightarrow{RP}\cdot\overrightarrow{RQ}&=\langle 1,-1,1\rangle\cdot\langle -2,-2,2\rangle\\
  &=-2+2+2=2.
  \end{aligned}
  \]
  No dot product equals \(0\), so no angle is a right angle. The points do not form a right triangle.
provenance: handout-answer
steps:
  - Form the three side vectors.
  - Take the dot product at each vertex.
  - None is \(0\), so the answer is no.
verification:
  checks:
    - expr: '(Matrix([-3, -1, 1]).dot(Matrix([-1, 1, -1])), Matrix([3, 1, -1]).dot(Matrix([2, 2, -2])), Matrix([1, -1, 1]).dot(Matrix([-2, -2, 2])))'
      expected: "(1, 10, 2)"
:::


::: exercise
id: l4-dot-cross-product.handout-12-3-19
number: "12.3.19"
tier: standard
topics:
  - dot-product
  - angle
statement: |
  Do the three points \((1,1,1)\), \((2,3,2)\) and \((5,0,-1)\) form a right triangle?
solution: |
  Name the points \(P=(1,1,1)\), \(Q=(2,3,2)\) and \(R=(5,0,-1)\). The side vectors at \(P\) are
  \[
  \begin{aligned}
  \overrightarrow{PQ}&=\langle 1,2,1\rangle,\\
  \overrightarrow{PR}&=\langle 4,-1,-2\rangle.
  \end{aligned}
  \]
  Their dot product is
  \[
  \overrightarrow{PQ}\cdot\overrightarrow{PR}=4-2-2=0.
  \]
  Both vectors are nonzero and perpendicular, so the angle at \(P\) is a right angle. The points form a right triangle with the right angle at \((1,1,1)\).
provenance: handout-answer
steps:
  - Form the side vectors at \((1,1,1)\).
  - Their dot product is \(0\).
  - The right angle is at \((1,1,1)\), so the answer is yes.
verification:
  checks:
    - expr: '(Matrix([2, 3, 2]) - Matrix([1, 1, 1])).dot(Matrix([5, 0, -1]) - Matrix([1, 1, 1]))'
      expected: "0"
    - expr: '(Matrix([5, 0, -1]) - Matrix([1, 1, 1]) - Matrix([4, -1, -2])).norm()'
      expected: "0"
:::


::: exercise
id: l4-dot-cross-product.handout-12-4-1
number: "12.4.1"
tier: basic
topics:
  - cross-product
statement: |
  Find the cross product of \(\langle 1,1,1\rangle\) and \(\langle 1,2,3\rangle\).
solution: |
  Let \(\mathbf{A}=\langle 1,1,1\rangle\) and \(\mathbf{B}=\langle 1,2,3\rangle\). The components are
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=1\cdot 3-2\cdot 1=1,\\
  \mathbf{j}\text{ component}&=-(1\cdot 3-1\cdot 1)=-2,\\
  \mathbf{k}\text{ component}&=1\cdot 2-1\cdot 1=1.
  \end{aligned}
  \]
  The cross product is \(\langle 1,-2,1\rangle\).
provenance: handout-answer
steps:
  - Compute each component, with the minus on the \(\mathbf{j}\) component.
  - State the cross product.
verification:
  checks:
    - expr: '(Matrix([1, 1, 1]).cross(Matrix([1, 2, 3])) - Matrix([1, -2, 1])).norm()'
      expected: "0"
:::


::: exercise
id: l4-dot-cross-product.handout-12-4-2
number: "12.4.2"
tier: basic
topics:
  - cross-product
statement: |
  Find the cross product of \(\langle 1,0,2\rangle\) and \(\langle -1,-2,4\rangle\).
solution: |
  Let \(\mathbf{A}=\langle 1,0,2\rangle\) and \(\mathbf{B}=\langle -1,-2,4\rangle\). The components are
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=0\cdot 4-(-2)\cdot 2=4,\\
  \mathbf{j}\text{ component}&=-\bigl(1\cdot 4-(-1)\cdot 2\bigr)=-6,\\
  \mathbf{k}\text{ component}&=1\cdot(-2)-(-1)\cdot 0=-2.
  \end{aligned}
  \]
  The cross product is \(\langle 4,-6,-2\rangle\).
provenance: handout-answer
steps:
  - Compute each component, with the minus on the \(\mathbf{j}\) component.
  - State the cross product.
verification:
  checks:
    - expr: '(Matrix([1, 0, 2]).cross(Matrix([-1, -2, 4])) - Matrix([4, -6, -2])).norm()'
      expected: "0"
:::


::: exercise
id: l4-dot-cross-product.handout-12-4-3
number: "12.4.3"
tier: standard
topics:
  - cross-product
statement: |
  Find the cross product of \(\langle -2,1,3\rangle\) and \(\langle 5,2,-1\rangle\).
solution: |
  Let \(\mathbf{A}=\langle -2,1,3\rangle\) and \(\mathbf{B}=\langle 5,2,-1\rangle\). The components are
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=1\cdot(-1)-2\cdot 3=-7,\\
  \mathbf{j}\text{ component}&=-\bigl((-2)\cdot(-1)-5\cdot 3\bigr)\\
  &=-(2-15)=13,\\
  \mathbf{k}\text{ component}&=(-2)\cdot 2-5\cdot 1=-9.
  \end{aligned}
  \]
  The cross product is \(\langle -7,13,-9\rangle\).

  Check: the dot product with \(\mathbf{A}\) is \(14+13-27=0\), and with \(\mathbf{B}\) it is \(-35+26+9=0\). The cross product is perpendicular to both factors.
provenance: handout-answer
steps:
  - Compute each component, with the minus on the \(\mathbf{j}\) component.
  - Check that the result is perpendicular to both factors.
verification:
  checks:
    - expr: '(Matrix([-2, 1, 3]).cross(Matrix([5, 2, -1])) - Matrix([-7, 13, -9])).norm()'
      expected: "0"
    - expr: '(Matrix([-7, 13, -9]).dot(Matrix([-2, 1, 3])), Matrix([-7, 13, -9]).dot(Matrix([5, 2, -1])))'
      expected: "(0, 0)"
:::


::: exercise
id: l4-dot-cross-product.handout-12-4-4
number: "12.4.4"
tier: basic
topics:
  - cross-product
statement: |
  Find the cross product of \(\langle 1,0,0\rangle\) and \(\langle 0,0,1\rangle\).
solution: |
  Let \(\mathbf{A}=\langle 1,0,0\rangle\) and \(\mathbf{B}=\langle 0,0,1\rangle\). The components are
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=0\cdot 1-0\cdot 0=0,\\
  \mathbf{j}\text{ component}&=-(1\cdot 1-0\cdot 0)=-1,\\
  \mathbf{k}\text{ component}&=1\cdot 0-0\cdot 0=0.
  \end{aligned}
  \]
  The cross product is \(\langle 0,-1,0\rangle\), that is \(\mathbf{i}\times\mathbf{k}=-\mathbf{j}\).

  The right-hand rule agrees. Curl the fingers of the right hand from the \(x\)-axis toward the \(z\)-axis, and the thumb points along the negative \(y\)-axis.
provenance: handout-answer
steps:
  - Compute each component, with the minus on the \(\mathbf{j}\) component.
  - The result is \(-\mathbf{j}\), which matches the right-hand rule.
verification:
  checks:
    - expr: '(Matrix([1, 0, 0]).cross(Matrix([0, 0, 1])) - Matrix([0, -1, 0])).norm()'
      expected: "0"
:::


::: exercise
id: l4-dot-cross-product.handout-12-4-5
number: "12.4.5"
tier: basic
topics:
  - cross-product
  - area
statement: |
  Two vectors \(\mathbf{u}\) and \(\mathbf{v}\) are separated by an angle of \(\pi/6\), with \(\lvert\mathbf{u}\rvert=2\) and \(\lvert\mathbf{v}\rvert=3\). Find \(\lvert\mathbf{u}\times\mathbf{v}\rvert\).
solution: |
  Both vectors are nonzero, so
  \[
  \begin{aligned}
  \lvert\mathbf{u}\times\mathbf{v}\rvert&=\lvert\mathbf{u}\rvert\lvert\mathbf{v}\rvert\sin\theta\\
  &=2\cdot 3\cdot\sin\frac{\pi}{6}\\
  &=6\cdot\frac{1}{2}=3.
  \end{aligned}
  \]
  The length is \(3\). It is the area of the parallelogram spanned by \(\mathbf{u}\) and \(\mathbf{v}\).
provenance: handout-answer
steps:
  - Use \(\lvert\mathbf{u}\times\mathbf{v}\rvert=\lvert\mathbf{u}\rvert\lvert\mathbf{v}\rvert\sin\theta\).
  - Substitute \(\sin(\pi/6)=1/2\).
verification:
  checks:
    - expr: '2*3*sin(pi/6)'
      expected: "3"
:::


::: exercise
id: l4-dot-cross-product.handout-12-4-6
number: "12.4.6"
tier: basic
topics:
  - cross-product
  - area
statement: |
  Two vectors \(\mathbf{u}\) and \(\mathbf{v}\) are separated by an angle of \(\pi/4\), with \(\lvert\mathbf{u}\rvert=3\) and \(\lvert\mathbf{v}\rvert=7\). Find \(\lvert\mathbf{u}\times\mathbf{v}\rvert\).
solution: |
  Both vectors are nonzero, so
  \[
  \begin{aligned}
  \lvert\mathbf{u}\times\mathbf{v}\rvert&=\lvert\mathbf{u}\rvert\lvert\mathbf{v}\rvert\sin\theta\\
  &=3\cdot 7\cdot\sin\frac{\pi}{4}\\
  &=21\cdot\frac{\sqrt{2}}{2}.
  \end{aligned}
  \]
  The length is \(\dfrac{21\sqrt{2}}{2}\).
provenance: handout-answer
steps:
  - Use \(\lvert\mathbf{u}\times\mathbf{v}\rvert=\lvert\mathbf{u}\rvert\lvert\mathbf{v}\rvert\sin\theta\).
  - Substitute \(\sin(\pi/4)=\sqrt{2}/2\).
verification:
  checks:
    - expr: '3*7*sin(pi/4)'
      expected: "21*sqrt(2)/2"
:::


::: exercise
id: l4-dot-cross-product.handout-12-4-7
number: "12.4.7"
tier: standard
topics:
  - cross-product
  - area
statement: |
  Find the area of the parallelogram with vertices \((0,0)\), \((1,2)\), \((3,7)\) and \((2,5)\).
solution: |
  The sum of the points \((1,2)\) and \((2,5)\) is \((3,7)\), so \((0,0)\) and \((3,7)\) are opposite vertices. The two sides at the origin are the vectors \(\mathbf{A}=\langle 1,2,0\rangle\) and \(\mathbf{B}=\langle 2,5,0\rangle\), written in space with third component \(0\).
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=2\cdot 0-5\cdot 0=0,\\
  \mathbf{j}\text{ component}&=-(1\cdot 0-2\cdot 0)=0,\\
  \mathbf{k}\text{ component}&=1\cdot 5-2\cdot 2=1.
  \end{aligned}
  \]
  The cross product is \(\langle 0,0,1\rangle\). The area is its length, so the area is \(1\).
provenance: handout-answer
steps:
  - Take the two sides at the origin, \(\langle 1,2,0\rangle\) and \(\langle 2,5,0\rangle\).
  - Compute their cross product \(\langle 0,0,1\rangle\).
  - The area is its length, \(1\).
verification:
  checks:
    - expr: '(Matrix([1, 2, 0]).cross(Matrix([2, 5, 0])) - Matrix([0, 0, 1])).norm()'
      expected: "0"
    - expr: 'Matrix([1, 2, 0]).cross(Matrix([2, 5, 0])).norm()'
      expected: "1"
    - expr: 'Abs(Matrix([[1, 2], [2, 5]]).det())'
      expected: "1"
:::


::: exercise
id: l4-dot-cross-product.handout-12-4-8
number: "12.4.8"
tier: standard
topics:
  - cross-product
statement: |
  Find and explain the value of \((\mathbf{i}\times\mathbf{j})\times\mathbf{k}\) and \((\mathbf{i}+\mathbf{j})\times(\mathbf{i}-\mathbf{j})\).
solution: |
  **First product.** Write \(\mathbf{i}=\langle 1,0,0\rangle\), \(\mathbf{j}=\langle 0,1,0\rangle\) and \(\mathbf{k}=\langle 0,0,1\rangle\). The inner product is
  \[
  \begin{aligned}
  \mathbf{i}\times\mathbf{j}&=\langle 0\cdot 0-1\cdot 0,\ -(1\cdot 0-0\cdot 0),\ 1\cdot 1-0\cdot 0\rangle\\
  &=\langle 0,0,1\rangle=\mathbf{k}.
  \end{aligned}
  \]
  Then \((\mathbf{i}\times\mathbf{j})\times\mathbf{k}=\mathbf{k}\times\mathbf{k}\). The two factors are the same vector, so they are parallel, and a cross product of parallel vectors is \(\mathbf{0}\). So
  \[
  (\mathbf{i}\times\mathbf{j})\times\mathbf{k}=\mathbf{0}.
  \]

  **Second product.** The vectors are \(\mathbf{i}+\mathbf{j}=\langle 1,1,0\rangle\) and \(\mathbf{i}-\mathbf{j}=\langle 1,-1,0\rangle\). The components are
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=1\cdot 0-(-1)\cdot 0=0,\\
  \mathbf{j}\text{ component}&=-(1\cdot 0-1\cdot 0)=0,\\
  \mathbf{k}\text{ component}&=1\cdot(-1)-1\cdot 1=-2.
  \end{aligned}
  \]
  So \((\mathbf{i}+\mathbf{j})\times(\mathbf{i}-\mathbf{j})=\langle 0,0,-2\rangle=-2\mathbf{k}.\)

  **Why.** Both vectors lie in the \(xy\)-plane, so the cross product is along the \(z\)-axis. Its length is \(2\), which is the area of the parallelogram they span: each has length \(\sqrt{2}\), and they are perpendicular because \(\langle 1,1,0\rangle\cdot\langle 1,-1,0\rangle=0\). Turning from \(\mathbf{i}+\mathbf{j}\) to \(\mathbf{i}-\mathbf{j}\) is a clockwise quarter turn seen from the positive \(z\)-axis. By the right-hand rule the thumb then points down, along \(-\mathbf{k}\).
provenance: written-for-site
steps:
  - \(\mathbf{i}\times\mathbf{j}=\mathbf{k}\), and \(\mathbf{k}\times\mathbf{k}=\mathbf{0}\) because the factors are parallel.
  - Compute \(\langle 1,1,0\rangle\times\langle 1,-1,0\rangle=\langle 0,0,-2\rangle\).
  - Explain the length \(2\) and the sign with the area and the right-hand rule.
verification:
  checks:
    - expr: 'Matrix([1, 0, 0]).cross(Matrix([0, 1, 0])).cross(Matrix([0, 0, 1])).norm()'
      expected: "0"
    - expr: '(Matrix([1, 0, 0]).cross(Matrix([0, 1, 0])) - Matrix([0, 0, 1])).norm()'
      expected: "0"
    - expr: '(Matrix([1, 1, 0]).cross(Matrix([1, -1, 0])) - Matrix([0, 0, -2])).norm()'
      expected: "0"
:::


::: exercise
id: l4-dot-cross-product.handout-12-4-11
number: "12.4.11"
tier: standard
topics:
  - cross-product
  - dot-product
statement: |
  Define the triple product of three vectors \(\mathbf{x}\), \(\mathbf{y}\), \(\mathbf{z}\) to be the scalar \(\mathbf{x}\cdot(\mathbf{y}\times\mathbf{z})\). The three vectors lie in the same plane exactly when their triple product is zero. Verify that \(\langle 1,5,-2\rangle\), \(\langle 4,3,0\rangle\) and \(\langle 6,13,-4\rangle\) are coplanar.
solution: |
  Let \(\mathbf{x}=\langle 1,5,-2\rangle\), \(\mathbf{y}=\langle 4,3,0\rangle\) and \(\mathbf{z}=\langle 6,13,-4\rangle\). First the cross product \(\mathbf{y}\times\mathbf{z}\):
  \[
  \begin{aligned}
  \mathbf{i}\text{ component}&=3\cdot(-4)-13\cdot 0=-12,\\
  \mathbf{j}\text{ component}&=-\bigl(4\cdot(-4)-6\cdot 0\bigr)=16,\\
  \mathbf{k}\text{ component}&=4\cdot 13-6\cdot 3=34.
  \end{aligned}
  \]
  So \(\mathbf{y}\times\mathbf{z}=\langle -12,16,34\rangle\). The triple product is
  \[
  \begin{aligned}
  \mathbf{x}\cdot(\mathbf{y}\times\mathbf{z})&=1\cdot(-12)+5\cdot 16+(-2)\cdot 34\\
  &=-12+80-68=0.
  \end{aligned}
  \]
  The triple product is zero, so the three vectors are coplanar.

  Check by hand: \(2\mathbf{x}+\mathbf{y}=\langle 2+4,\,10+3,\,-4+0\rangle=\langle 6,13,-4\rangle=\mathbf{z}\). The vector \(\mathbf{z}\) is a combination of \(\mathbf{x}\) and \(\mathbf{y}\), so it lies in their plane.
provenance: written-for-site
steps:
  - Compute \(\mathbf{y}\times\mathbf{z}=\langle -12,16,34\rangle\).
  - Dot with \(\mathbf{x}\) to get \(-12+80-68=0\).
  - The triple product is zero, so the vectors are coplanar.
verification:
  checks:
    - expr: '(Matrix([4, 3, 0]).cross(Matrix([6, 13, -4])) - Matrix([-12, 16, 34])).norm()'
      expected: "0"
    - expr: 'Matrix([1, 5, -2]).dot(Matrix([4, 3, 0]).cross(Matrix([6, 13, -4])))'
      expected: "0"
    - expr: '(2*Matrix([1, 5, -2]) + Matrix([4, 3, 0]) - Matrix([6, 13, -4])).norm()'
      expected: "0"
:::
