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
examWeightNote: Supporting geometry for the multivariable lectures.
notation: |
  The dot product is written \(\mathbf{A}\cdot\mathbf{B}\). The cross product is written \(\mathbf{A}\times\mathbf{B}\). Length uses absolute value bars, as in \(\lvert\mathbf{A}\rvert\).
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
