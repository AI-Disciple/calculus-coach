---
id: l1-exp-log
lecture: 1
order: 2
title: Exponentials and logarithms
prerequisites: []
sources:
  - { source: lecture-notes-1, page: 1 }
  - { source: handout, section: "4.6", page: 82 }
  - { source: handout, section: "4.7", page: "84-85" }
  - { source: handout, section: "4.11", page: 102 }
  - { source: handout, section: "4.11", page: 104 }
  - { source: sheet-0, page: 1 }
  - { source: midterm-app }
examWeight: low
examWeightNote: Used inside later questions, never asked on its own.
status: reviewed
notation: |
  The notes write \(\ln(x)=\log_e(x)\) and \(\log_a(x)=\frac{\ln(x)}{\ln(a)}\). In the reminder \(\log(1)=0\), the base is left unwritten. The handout writes \(\exp(x)\) for \(e^x\) when the exponent is hard to read, for example \(\exp(1+x^{2})\). Where the handout writes \(\frac{d}{dx}\), that mark is the same as the curly-d form used in some texts.
---

::: section
title: Logarithms as inverses and change of base
:::

::: formal-statement
kind: definition
title: Logarithms as inverses
source: { source: handout, section: "4.6", page: 82 }
text: |
  An **exponential function** has the form \(a^{x}\), where \(a\) is a positive constant. Examples are \(2^{x}\), \(10^{x}\), \(e^{x}\). The **logarithmic functions** are the inverses of the exponential functions, so each undoes the other. The logarithm is the exponent:
  \[
  \log_a(a^{x})=x,\qquad a^{\log_a(x)}=x,
  \]
  where both sides are defined.
:::

::: plain-explanation
text: |
  The logarithm returns the exponent. For the base 10 and the number 1000, the exponent \(E\) that satisfies \(10^{E}=1000\) is 3, because \(10^{3}=1000\). So \(\log_{10}(1000)=3\), and \(10^{\log_{10}(1000)}=1000\).

  The **natural logarithm** and \(e^{x}\) are this pair in base \(e\). The graph of \(y=\ln(x)\) is the reflection of the graph of \(y=e^{x}\) across the line \(y=x\). The exponential \(e^{x}\) is defined for every real \(x\) and takes positive values. \(\ln(x)\) is defined for positive \(x\).
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(\ln(x)\). Switch on the domain and the intercepts. The graph exists only for \(x>0\) and crosses the \(x\)-axis at \(x=1\).
params:
  f: "ln(x)"
  xmin: -1
  xmax: 8
  layers: [domain, intercepts]
:::

::: formal-statement
kind: definition
title: Logarithm of 1
source: { source: lecture-notes-1, page: 1 }
text: |
  \[
  \log(1)=0.
  \]
:::

::: plain-explanation
text: |
  The base is omitted in \(\log(1)=0\). For a positive base \(a\) with \(a\neq 1\), the power \(a^{0}\) equals 1. The exponent that produces 1 is 0, so \(\log_a(1)=0\). In particular, \(\ln(1)=0\).
:::

::: formal-statement
kind: definition
title: Natural logarithm and change of base
source: { source: lecture-notes-1, page: 1 }
text: |
  \[
  \begin{aligned}
  \ln(x)&=\log_e(x),\\
  \ln(e)&=1,\\
  \log_a(a)&=1,\\
  \log_a(x)&=\frac{\ln(x)}{\ln(a)}.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  \(\ln(x)\) is the logarithm of \(x\) in base \(e\). The value \(\ln(e)\) is 1. For a positive base \(a\) with \(a\neq 1\), the value \(\log_a(a)\) is 1, because \(a^{1}=a\). The last formula is the **change of base formula**. It writes \(\log_a(x)\) as the quotient of \(\ln(x)\) by \(\ln(a)\). Two conditions apply:

  - The argument \(x\) is positive.
  - The condition \(a\neq 1\) keeps the denominator \(\ln(a)\) nonzero.
:::

::: worked-example
title: Change of base
problem: |
  Evaluate \(\log_{4}(8)\) by changing to the natural logarithm.
solution: |
  The change of base formula and the power law give
  \[
  \begin{aligned}
  \log_{4}(8)&=\frac{\ln(8)}{\ln(4)},\\
  \ln(8)&=\ln(2^{3})=3\ln(2),\\
  \ln(4)&=\ln(2^{2})=2\ln(2).
  \end{aligned}
  \]
  The quotient of those coefficients is \(3/2\).

  So \(\log_{4}(8)=3/2\). For a check,
  \[
  4^{3/2}=(2^{2})^{3/2}=2^{3}=8.
  \]
  The power \(4^{3/2}\) recovers 8, which agrees with the logarithm.
:::

::: guided-example
title: An exponential equation
problem: |
  Solve \(5^{x^{2}}=25\). The exponent is the square \(x^{2}\).
steps:
  - |
    Write 25 as a power of 5. Since \(5^{2}=25\), the equation is \(5^{x^{2}}=5^{2}\).
  - |
    Apply \(\log_{5}\). Inverse cancellation gives
    \[
    \begin{aligned}
    \log_{5}(5^{x^{2}})&=x^{2},\\
    \log_{5}(5^{2})&=2,
    \end{aligned}
    \]
    so \(x^{2}=2\).
  - |
    The solutions are \(x=\sqrt{2}\) and \(x=-\sqrt{2}\). Each square equals 2, so each value satisfies \(5^{x^{2}}=5^{2}=25\).
:::

::: trap
text: |
  The change of base formula is \(\log_a(x)=\ln(x)/\ln(a)\). Take \(a=10\) and \(x=100\). Then \(\log_{10}(100)\) equals 2, because \(10^{2}=100\). Exchanging the numerator and the denominator produces \(\ln(10)/\ln(100)\), which equals \(1/2\). The logarithm equals 2 and the exchanged quotient equals \(1/2\). Those values disagree, so the numerator in the change of base formula is \(\ln(x)\).
:::

::: key-points
text: |
  - Logarithm and exponential undo each other: \(\log_a(a^{x})=x\) and \(a^{\log_a(x)}=x\), where both sides are defined.
  - For a positive base \(a\) with \(a\neq 1\), \(\log_a(1)=0\) and \(\log_a(a)=1\). In particular \(\ln(1)=0\) and \(\ln(e)=1\).
  - Change of base: \(\log_a(x)=\ln(x)/\ln(a)\) for positive \(x\) and \(a\neq 1\). The numerator is \(\ln(x)\). The usual slip turns the quotient upside down: \(\log_{10}(100)=2\), and the flipped quotient \(\ln(10)/\ln(100)\) gives \(1/2\).
:::

::: going-deeper
title: The construction of e
text: |
  Consider
  \[
  \lim_{\Delta x\to 0}\frac{a^{\Delta x}-1}{\Delta x}.
  \]
  The limit is a constant depending on the base \(a\):

  - For \(a=2\) the limit is about 0.7.
  - For \(a=3\) the limit is about 1.1.

  Somewhere between \(a=2\) and \(a=3\) the limit equals 1. The base at which this happens is called **\(e\)**, so
  \[
  \lim_{\Delta x\to 0}\frac{e^{\Delta x}-1}{\Delta x}=1.
  \]
  This is the definition of \(e\) used here. The number \(e\) is closer to 3 than to 2, and \(e\approx 2.718\).
:::

::: going-deeper
title: Hyperbolic functions
text: |
  The hyperbolic cosine and the hyperbolic sine are
  \[
  \begin{aligned}
  \cosh x&=\frac{e^{x}+e^{-x}}{2},\\
  \sinh x&=\frac{e^{x}-e^{-x}}{2}.
  \end{aligned}
  \]
  These formulas define \(\cosh\) and \(\sinh\) for every real \(x\).

  - \(\cosh\) is **even**, since \(\cosh(-x)=\cosh x\).
  - \(\sinh\) is **odd**, since \(\sinh(-x)=-\sinh x\).

  For every real \(x\),
  \[
  \cosh^{2} x-\sinh^{2} x=1.
  \]
  Their derivatives are
  \[
  \begin{aligned}
  \frac{d}{dx}\cosh x&=\sinh x,\\
  \frac{d}{dx}\sinh x&=\cosh x.
  \end{aligned}
  \]
  The derivative of \(\cosh\) is \(\sinh\). There is no minus sign.
:::

::: concept-question
id: l1-exp-log.q-6cc1a6d2
question: |
  Solve \(2^{x^{2}} = 8\) for \(x\).
options:
  - text: |
      \(x = \pm\sqrt{3}\)
    correct: true
  - text: |
      \(x = 3\)
  - text: |
      \(x = \pm 3\)
  - text: |
      \(x = \pm\sqrt{2}\)
explanation: |
  \(8 = 2^{3}\), so \(x^{2} = 3\) and \(x = \pm\sqrt{3}\). Both signs work, because the unknown appears only as \(x^{2}\).
:::

::: section
title: Product, power and quotient laws
:::

::: formal-statement
kind: theorem
title: Product law
source: { source: handout, section: "4.6", page: 83 }
text: |
  Let \(a\) be a positive number. Then
  \[
  a^{m}a^{n}=a^{m+n},
  \]
  and, for positive \(A\) and \(B\),
  \[
  \log_a(AB)=\log_a A+\log_a B.
  \]
:::

::: plain-explanation
text: |
  A sum of exponents is a product of powers. The logarithm converts that product into a sum of logarithms. In base \(e\) the same law reads \(e^{m+n}=e^{m}e^{n}\) and \(\ln(AB)=\ln A+\ln B\). The case of a zero exponent is the same law: \(a^{0}a^{x}=a^{x}\), which holds for every \(x\) when \(a^{0}=1\).
:::

::: worked-example
title: Expanding a product
problem: |
  Expand \(\log_{2}(8\cdot 4)\) and evaluate it.
solution: |
  The product inside the logarithm is \(8\cdot 4\). Call this product \(P\). Then \(P=32\).

  The product law says
  \[
  \log_{2}(P)=\log_{2}(8)+\log_{2}(4).
  \]
  The first logarithm equals 3, because \(2^{3}=8\). The second equals 2, because \(2^{2}=4\). Their sum is 5.

  The direct logarithm is \(\log_{2}(32)\). It equals 5, because \(2^{5}=32\). The expanded value and the direct value agree.
:::

::: formal-statement
kind: theorem
title: Power law
source: { source: handout, section: "4.6", page: 83 }
text: |
  \[
  (a^{m})^{n}=a^{mn}.
  \]
  If \(A\) is positive and \(A=a^{x}\), then \(A^{y}=(a^{x})^{y}=a^{xy}\), so
  \[
  \log_a(A^{y})=y\log_a A.
  \]
:::

::: plain-explanation
text: |
  A power of a power multiplies the exponents. The logarithm brings the outer exponent down as a factor on that one logarithm. For a rational exponent, \(a^{p/q}=(a^{1/q})^{p}\). The product law and the power law hold for real exponents as well: \(2^{x}2^{y}=2^{x+y}\) and \((2^{x})^{y}=2^{xy}\).
:::

::: worked-example
title: A power in a logarithm
problem: |
  Evaluate \(\log_{3}(9^{4})\).
solution: |
  The power law says \(\log_{3}(9^{4})=4\log_{3}(9)\). The logarithm \(\log_{3}(9)\) equals 2, because \(3^{2}=9\). The product \(4\cdot 2\) equals 8.

  For a check, write \(9^{4}=(3^{2})^{4}=3^{8}\). Then \(\log_{3}(9^{4})=8\). The power law and the direct logarithm agree.
:::

::: formal-statement
kind: theorem
title: Quotient law
source: { source: handout, section: "4.6", page: 82 }
text: |
  For a positive number \(a\), and for positive \(A\) and \(B\),
  \[
  \begin{aligned}
  a^{-x}&=\frac{1}{a^{x}},\\
  \frac{a^{m}}{a^{n}}&=a^{m-n},\\
  \log_a\left(\frac{A}{B}\right)&=\log_a A-\log_a B.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  ### Exponents

  The negative exponent is the reciprocal, \(a^{-x}=1/a^{x}\). Division by \(a^{n}\) is multiplication by that reciprocal, so
  \[
  \frac{a^{m}}{a^{n}}=a^{m}a^{-n}=a^{m-n}.
  \]

  ### Logarithms

  For logarithms, \(A/B=A\cdot B^{-1}\). The product law splits the logarithm, and the power law with exponent \(-1\) converts \(\log_a(B^{-1})\) into \(-\log_a B\). Together,
  \[
  \log_a\left(\frac{A}{B}\right)=\log_a A-\log_a B.
  \]

  ### A check

  For a check, the quotient \(2^{5}/2^{3}\) equals 4, and \(2^{5-3}\) equals 4. The logarithm \(\log_{2}(32/8)\) equals 2, and \(\log_{2}(32)-\log_{2}(8)\) equals 2.
:::

::: trap
text: |
  The product law says \(e^{a+b}=e^{a}e^{b}\). Take \(a=1\) and \(b=1\). The product \(e^{a}e^{b}\) equals \(e\cdot e\), which is \(e^{2}\). The sum \(e^{a}+e^{b}\) equals \(e+e\), which is \(2e\). Dividing \(e^{2}\) by \(e\) leaves \(e\). Dividing \(2e\) by \(e\) leaves \(2\). Those quotients disagree, so the sum is the wrong expansion of \(e^{a+b}\).
:::

::: trap
text: |
  In the tower \(2^{x^{2}}\), the exponent is \(x^{2}\). The power law gives \((2^{x})^{2}=2^{2x}\). At \(x=3\), the tower equals \(2^{9}\), which is 512. At the same \(x\), \((2^{x})^{2}\) equals \(2^{6}\), which is 64. The values 512 and 64 disagree, so \((2^{x})^{2}\) is a different expression from the tower.
:::

::: key-points
text: |
  - Product law: \(a^{m}a^{n}=a^{m+n}\) and \(\log_a(AB)=\log_a A+\log_a B\) for positive \(A\) and \(B\).
  - Power law: \((a^{m})^{n}=a^{mn}\) and \(\log_a(A^{y})=y\log_a A\) for positive \(A\).
  - Quotient law: \(a^{m}/a^{n}=a^{m-n}\) and \(\log_a(A/B)=\log_a A-\log_a B\) for positive \(A\) and \(B\).
  - The usual slips: \(e^{a+b}\) is the product \(e^{a}e^{b}\), and the sum \(e^{a}+e^{b}\) is a different expression. In \(2^{x^{2}}\) the exponent is \(x^{2}\), so \((2^{x})^{2}=2^{2x}\) is a different expression.
:::

::: concept-question
id: l1-exp-log.q-850f3799
question: |
  Expand \(\log_{10}\bigl((x + 45)^{7}(x - 2)\bigr)\).
options:
  - text: |
      \(7\log_{10}(x + 45) + \log_{10}(x - 2)\)
    correct: true
  - text: |
      \(7\log_{10}(x + 45) \cdot \log_{10}(x - 2)\)
  - text: |
      \(\log_{10}\bigl(7(x + 45)\bigr) + \log_{10}(x - 2)\)
  - text: |
      \(7\bigl[\log_{10}(x + 45) + \log_{10}(x - 2)\bigr]\)
explanation: |
  The logarithm of a product is a sum of logarithms, and the exponent 7 comes down as a factor on the first term only.
:::

::: concept-question
id: l1-exp-log.q-f3885772
question: |
  Which identities hold, where defined?
options:
  - text: |
      \(e^{a+b} = e^{a}\,e^{b}\), \(\bigl(e^{a}\bigr)^{b} = e^{ab}\), and \(\frac{\cos^{2} t}{1 - \sin t} = 1 + \sin t\).
    correct: true
  - text: |
      \(e^{a+b} = e^{a}\,e^{b}\) and \(e^{a+b} = e^{a} + e^{b}\).
  - text: |
      \(\bigl(e^{a}\bigr)^{b} = e^{ab}\) and \(e^{a+b} = e^{a} + e^{b}\).
  - text: |
      \(e^{a+b} = e^{a} + e^{b}\) and \(\frac{\cos^{2} t}{1 - \sin t} = 1 + \sin t\).
explanation: |
  Sums in the exponent become products, and a power of a power multiplies the exponents. For the trigonometric identity, \(\cos^{2} t = 1 - \sin^{2} t = (1 - \sin t)(1 + \sin t)\), so dividing by \(1 - \sin t\) leaves \(1 + \sin t\). The rule \(e^{a+b} = e^{a} + e^{b}\) is false.
:::

::: exercise
id: l1-exp-log.sheet-0-2-1
number: "sheet 0 exercise 2.1"
tier: basic
topics: [exponentials]
statement: |
  Expand \(e^{a+b}\).
solution: |
  The product law gives \(e^{a+b}=e^{a}e^{b}\).
provenance: written-for-site
verification:
  checks:
    - expr: "exp(a + b) - exp(a)*exp(b)"
      expected: "0"
:::

::: exercise
id: l1-exp-log.sheet-0-2-2
number: "sheet 0 exercise 2.2"
tier: basic
topics: [exponentials]
statement: |
  Reduce \((e^{a})^{b}\).
solution: |
  The power law gives \((e^{a})^{b}=e^{ab}\).
provenance: written-for-site
verification:
  checks:
    - expr: "powdenest(exp(a)**b, force=True) - exp(a*b)"
      expected: "0"
    - expr: "(exp(2))**5 - exp(10)"
      expected: "0"
:::

::: exercise
id: l1-exp-log.sheet-0-2-3
number: "sheet 0 exercise 2.3"
tier: basic
topics: [logarithms]
statement: |
  Expand \(\log_{10}\bigl((x+45)^{7}(x-2)\bigr)\).
solution: |
  The argument is a product, so the product law splits the logarithm:
  \[
  \begin{aligned}
  &\log_{10}\bigl((x+45)^{7}(x-2)\bigr)\\
  &=\log_{10}\bigl((x+45)^{7}\bigr)\\
  &\quad+\log_{10}(x-2).
  \end{aligned}
  \]
  The power law converts the first term, \(\log_{10}\bigl((x+45)^{7}\bigr)=7\log_{10}(x+45)\). The expansion is \(7\log_{10}(x+45)+\log_{10}(x-2)\). It is defined for \(x>2\), where both \(x+45\) and \(x-2\) are positive.
provenance: written-for-site
verification:
  checks:
    - expr: "expand_log(log((x + 45)**7 * (x - 2), 10), force=True) - (7*log(x + 45, 10) + log(x - 2, 10))"
      expected: "0"
    - expr: "(log((x + 45)**7 * (x - 2), 10) - (7*log(x + 45, 10) + log(x - 2, 10))).subs(x, 3)"
      expected: "0"
:::

::: exercise
id: l1-exp-log.sheet-0-2-4
number: "sheet 0 exercise 2.4"
tier: standard
topics: [exponentials]
statement: |
  Solve \(2^{x^{2}}=8\) for \(x\). The exponent is the square \(x^{2}\).
solution: |
  Write 8 as a power of 2. Since \(2^{3}=8\), the equation is \(2^{x^{2}}=2^{3}\). The bases agree, so the exponents agree, and \(x^{2}=3\). The solutions are \(x=\sqrt{3}\) and \(x=-\sqrt{3}\). Both satisfy the original equation, because the unknown appears only as \(x^{2}\), and each square equals 3.
provenance: written-for-site
steps:
  - Write \(8=2^{3}\), so \(2^{x^{2}}=2^{3}\).
  - Match the exponents to get \(x^{2}=3\).
  - Report both roots \(x=\pm\sqrt{3}\).
verification:
  checks:
    - expr: "log(8)/log(2) - 3"
      expected: "0"
    - expr: "FiniteSet(*solve(2**(x**2) - 8, x))"
      expected: "FiniteSet(-sqrt(3), sqrt(3))"
    - expr: "2**(sqrt(3)**2) - 8"
      expected: "0"
    - expr: "2**((-sqrt(3))**2) - 8"
      expected: "0"
:::

::: exercise
id: l1-exp-log.change-of-base
tier: exam
topics: [logarithms, change-of-base]
statement: |
  Solve \(\log_{4}(x^{2})+\log_{2}(x)=5\) for \(x>0\).
solution: |
  The power law gives \(\log_{4}(x^{2})=2\log_{4}(x)\). Change of base gives
  \[
  \log_{4}(x)=\frac{\ln(x)}{\ln(4)}=\frac{\log_{2}(x)}{\log_{2}(4)}.
  \]
  The denominator \(\log_{2}(4)\) equals 2, because \(2^{2}=4\). So \(\log_{4}(x)=\frac{1}{2}\log_{2}(x)\), and twice that logarithm is \(\log_{2}(x)\). The original equation becomes
  \[
  \begin{aligned}
  \log_{2}(x)+\log_{2}(x)&=5,\\
  2\log_{2}(x)&=5,\\
  \log_{2}(x)&=\frac{5}{2}.
  \end{aligned}
  \]
  Inverse cancellation gives \(x=2^{5/2}\). This value is positive, so it meets the condition \(x>0\). The same number equals \(4\sqrt{2}\).

  At this \(x\), the two logarithms in the original equation are equal. Each equals \(5/2\), and their sum is 5.
provenance: written-for-site
steps:
  - Apply the power law to \(\log_{4}(x^{2})\).
  - Change base 4 to base 2, using \(\log_{2}(4)=2\).
  - Reduce the equation to \(2\log_{2}(x)=5\).
  - Solve to get \(x=2^{5/2}\), and keep it because it is positive.
verification:
  checks:
    - expr: "2**Rational(5, 2) - 4*sqrt(2)"
      expected: "0"
    - expr: "log((2**Rational(5, 2))**2, 4) - log(2**Rational(5, 2), 2)"
      expected: "0"
    - expr: "log((2**Rational(5, 2))**2, 4) + log(2**Rational(5, 2), 2) - 5"
      expected: "0"
:::

::: sheet-item
id: l1-exp-log.formula-change-base
category: formula
text: |
  \[
  \log_a(x)=\frac{\ln(x)}{\ln(a)}.
  \]
  Here \(x>0\), and the base \(a\) is positive with \(a\neq 1\).
:::

::: sheet-item
id: l1-exp-log.formula-log-one
category: formula
text: |
  \[
  \log(1)=0.
  \]
  For every allowed base, the logarithm of 1 is 0. In particular, \(\ln(1)=0\).
:::

::: sheet-item
id: l1-exp-log.formula-product
category: formula
text: |
  \[
  \begin{aligned}
  a^{m}a^{n}&=a^{m+n},\\
  \log_a(AB)&=\log_a A+\log_a B.
  \end{aligned}
  \]
:::

::: sheet-item
id: l1-exp-log.formula-power
category: formula
text: |
  \[
  (a^{m})^{n}=a^{mn},\qquad\log_a(A^{y})=y\log_a A.
  \]
:::

::: sheet-item
id: l1-exp-log.formula-quotient
category: formula
text: |
  \[
  \frac{a^{m}}{a^{n}}=a^{m-n},\qquad\log_a\left(\frac{A}{B}\right)=\log_a A-\log_a B.
  \]
:::

::: sheet-item
id: l1-exp-log.formula-inverse
category: formula
text: |
  \[
  \log_a(a^{x})=x,\qquad a^{\log_a(x)}=x,
  \]
  where both sides are defined.
:::

::: sheet-item
id: l1-exp-log.trap-exp-sum
category: trap
text: |
  \(e^{a+b}\) expands as the product \(e^{a}e^{b}\). The sum \(e^{a}+e^{b}\) is a different expression. At \(a=1\) and \(b=1\), the product is \(e^{2}\) and the sum is \(2e\).
:::

::: exercise
id: l1-exp-log.ex-exp-log-equations
tier: standard
topics: [logarithms, exponentials, change-of-base]
statement: |
  Solve each equation.

  (a) \(\ln x+\ln(x-2)=\ln 3\)

  (b) \(e^{2x}-5e^{x}+6=0\)

  (c) \(\log_{2}(x)+\log_{4}(x)=3\), for \(x>0\)
solution: |
  (a) Both logarithms need a positive argument, so \(x>2\). The product law turns the left side into \(\ln\bigl(x(x-2)\bigr)\). Equal logarithms have equal arguments, so
  \[
  \begin{aligned}
  x^{2}-2x&=3,\\
  x^{2}-2x-3&=0,\\
  (x-3)(x+1)&=0.
  \end{aligned}
  \]
  The roots are \(x=3\) and \(x=-1\). The root \(-1\) violates \(x>2\). The solution is \(x=3\), and the check is \(\ln 3+\ln 1=\ln 3\).

  (b) The power law gives \(e^{2x}=(e^{x})^{2}\). With \(u=e^{x}\), which is positive, the equation is
  \[
  \begin{aligned}
  u^{2}-5u+6&=0,\\
  (u-2)(u-3)&=0.
  \end{aligned}
  \]
  So \(u=2\) or \(u=3\). Both are positive. Then \(x=\ln 2\) or \(x=\ln 3\).

  (c) Change of base gives
  \[
  \log_{4}(x)=\frac{\log_{2}(x)}{\log_{2}(4)}=\frac{1}{2}\log_{2}(x).
  \]
  The equation becomes \(\frac{3}{2}\log_{2}(x)=3\), so \(\log_{2}(x)=2\) and \(x=4\). The check is \(\log_{2}(4)+\log_{4}(4)=2+1=3\).
provenance: written-for-site
steps:
  - In (a), find the roots \(3\) and \(-1\) and reject \(-1\) by the domain.
  - In (b), substitute \(u=e^{x}\) and solve the quadratic.
  - In (c), change base to combine the two logarithms and get \(x=4\).
verification:
  checks:
    - expr: FiniteSet(*solve(x**2 - 2*x - 3, x))
      expected: FiniteSet(-1, 3)
    - expr: log(3) + log(3 - 2) - log(3)
      expected: "0"
    - expr: FiniteSet(*solve(u**2 - 5*u + 6, u))
      expected: FiniteSet(2, 3)
    - expr: exp(2*log(2)) - 5*exp(log(2)) + 6
      expected: "0"
    - expr: exp(2*log(3)) - 5*exp(log(3)) + 6
      expected: "0"
    - expr: log(4, 2) + log(4, 4)
      expected: "3"
:::

::: exercise
id: l1-exp-log.ex-hyperbolic-identities
tier: standard
topics: [exponentials, derivative-table]
statement: |
  Let
  \[
  \begin{aligned}
  \sinh x&=\dfrac{e^{x}-e^{-x}}{2},\\
  \cosh x&=\dfrac{e^{x}+e^{-x}}{2}.
  \end{aligned}
  \]

  (a) Show that \(\cosh^{2}x-\sinh^{2}x=1\) for every real \(x\).

  (b) Show that \(\dfrac{d}{dx}\sinh x=\cosh x\) and \(\dfrac{d}{dx}\cosh x=\sinh x\).

  (c) Let \(\tanh x=\dfrac{\sinh x}{\cosh x}\). Show that \(\dfrac{d}{dx}\tanh x=\dfrac{1}{\cosh^{2}x}\).
solution: |
  (a) Expand the squares:
  \[
  \begin{aligned}
  (e^{x}+e^{-x})^{2}&=e^{2x}+2+e^{-2x},\\
  (e^{x}-e^{-x})^{2}&=e^{2x}-2+e^{-2x}.
  \end{aligned}
  \]
  The difference is \(4\), so
  \[
  \cosh^{2}x-\sinh^{2}x=\frac{4}{4}=1.
  \]

  (b) Differentiate term by term. The derivative of \(e^{x}\) is \(e^{x}\), and the derivative of \(e^{-x}\) is \(-e^{-x}\) by the chain rule. Then
  \[
  \begin{aligned}
  \frac{d}{dx}\sinh x&=\frac{e^{x}+e^{-x}}{2}=\cosh x,\\
  \frac{d}{dx}\cosh x&=\frac{e^{x}-e^{-x}}{2}=\sinh x.
  \end{aligned}
  \]
  There is no minus sign.

  (c) The quotient rule with \(u=\sinh x\) and \(v=\cosh x\) gives
  \[
  \begin{aligned}
  &\frac{d}{dx}\tanh x\\
  &=\frac{\cosh x\cdot\cosh x-\sinh x\cdot\sinh x}{\cosh^{2}x}\\
  &=\frac{\cosh^{2}x-\sinh^{2}x}{\cosh^{2}x}\\
  &=\frac{1}{\cosh^{2}x},
  \end{aligned}
  \]
  by (a). The denominator \(\cosh x\) is at least \(1\), so it is never \(0\).
provenance: written-for-site
steps:
  - Expand both squares to get \(\cosh^{2}x-\sinh^{2}x=1\).
  - Differentiate the exponentials term by term.
  - Apply the quotient rule and use the identity from (a).
verification:
  checks:
    - expr: simplify((exp(x) + exp(-x))**2/4 - (exp(x) - exp(-x))**2/4)
      expected: "1"
    - expr: (diff((exp(x) - exp(-x))/2, x) - (exp(x) + exp(-x))/2, diff((exp(x) + exp(-x))/2, x) - (exp(x) - exp(-x))/2)
      expected: (0, 0)
    - expr: simplify(diff((exp(x) - exp(-x))/(exp(x) + exp(-x)), x) - 4/(exp(x) + exp(-x))**2)
      expected: "0"
:::

::: exercise
id: l1-exp-log.sheet-1-4-3
number: "sheet 1 exercise 4.3"
tier: basic
topics:
  - exponentials
statement: |
  Give the domain of \(f(x)=e^x\) and sketch its graph.
solution: |
  The power \(e^x\) is defined for every real exponent \(x\). The domain of \(f(x)=e^x\) is every real number.

  The graph has these features:

  - The values are always positive, so the graph stays above the \(x\)-axis and has no \(x\)-intercept. The range is every real \(y>0\).
  - The \(y\)-intercept is \(f(0)=e^0=1\). The graph also passes through \((1,e)\), with \(e\approx 2.72\), and through \((-1,1/e)\), with \(1/e\approx 0.37\).
  - The function is increasing: a larger \(x\) gives a larger \(e^x\).
  - As \(x\) decreases without bound, \(e^x\) approaches \(0\) from above. The line \(y=0\) is a horizontal asymptote on the left.
  - As \(x\) grows, \(e^x\) grows without bound, faster than any line.

  The graph is the reflection of \(y=\ln x\) across the line \(y=x\).
provenance: written-for-site
steps:
  - The domain is stated in a full sentence as every real number.
  - The graph is described, with the point \((0,1)\), the asymptote \(y=0\) and the range \(y>0\).
verification:
  checks:
    - expr: limit(exp(x), x, -oo)
      expected: "0"
    - expr: limit(x*exp(-x), x, oo)
      expected: "0"
    - expr: exp(0)
      expected: "1"
    - expr: solve(exp(x), x)
      expected: "[]"
    - expr: diff(exp(x), x) - exp(x)
      expected: "0"
:::

::: exercise
id: l1-exp-log.handout-4-6-2
number: "4.6.2"
tier: standard
topics:
  - logarithms
statement: |
  Expand \(\log_{2}\!\left(\dfrac{x^{3}}{3x-5+\frac{7}{x}}\right)\).
solution: |
  The argument is a quotient, so the quotient law splits the logarithm:
  \[
  \begin{aligned}
  &\log_{2}\!\left(\frac{x^{3}}{3x-5+\frac{7}{x}}\right)\\
  &=\log_{2}(x^{3})-\log_{2}\!\left(3x-5+\frac{7}{x}\right).
  \end{aligned}
  \]
  The power law converts the first term, \(\log_{2}(x^{3})=3\log_{2}(x)\). The second term is the logarithm of a sum, and the laws give no rule for a sum, so it stays as it is. The expansion is
  \[
  3\log_{2}(x)-\log_{2}\!\left(3x-5+\frac{7}{x}\right).
  \]

  The expression needs \(x>0\) for \(\log_{2}(x)\) and for the fraction \(\frac{7}{x}\). On \(x>0\),
  \[
  3x-5+\frac{7}{x}=\frac{3x^{2}-5x+7}{x}.
  \]
  The quadratic \(3x^{2}-5x+7\) has discriminant \(25-84=-59<0\) and a positive leading coefficient, so it is positive for every \(x\). The denominator is therefore positive for \(x>0\), and the expansion holds for every \(x>0\).
provenance: written-for-site
steps:
  - Apply the quotient law to separate the numerator and the denominator.
  - Apply the power law to \(\log_{2}(x^{3})\) and leave the logarithm of the sum alone.
  - Check that the expansion holds for every \(x>0\).
verification:
  checks:
    - expr: '(log(x**3/(3*x - 5 + 7/x), 2) - (3*log(x, 2) - log(3*x - 5 + 7/x, 2))).subs(x, 2)'
      expected: "0"
    - expr: 'simplify(expand_log(log(x**3/(3*x - 5 + 7/x), 2), force=True) - (3*log(x, 2) - log(3*x - 5 + 7/x, 2)))'
      expected: "0"
    - expr: 'discriminant(3*x**2 - 5*x + 7, x)'
      expected: "-59"
    - expr: 'simplify(3*x - 5 + 7/x - (3*x**2 - 5*x + 7)/x)'
      expected: "0"
:::


::: exercise
id: l1-exp-log.handout-4-6-3
number: "4.6.3"
tier: basic
topics:
  - logarithms
statement: |
  Write \(\log_{2}(3x)+17\log_{2}(x-2)-2\log_{2}(x^{2}+4x+1)\) as a single logarithm.
solution: |
  Move the coefficients into the arguments with the power law:
  \[
  \begin{aligned}
  17\log_{2}(x-2)&=\log_{2}\bigl((x-2)^{17}\bigr),\\
  2\log_{2}(x^{2}+4x+1)&=\log_{2}\bigl((x^{2}+4x+1)^{2}\bigr).
  \end{aligned}
  \]
  The product law combines the first two terms, and the quotient law absorbs the third:
  \[
  \begin{aligned}
  &\log_{2}(3x)+\log_{2}\bigl((x-2)^{17}\bigr)\\
  &\quad-\log_{2}\bigl((x^{2}+4x+1)^{2}\bigr)\\
  &=\log_{2}\!\left(\frac{3x\,(x-2)^{17}}{(x^{2}+4x+1)^{2}}\right).
  \end{aligned}
  \]

  The original expression needs \(3x>0\) and \(x-2>0\), so \(x>2\). On that range \(x^{2}+4x+1>0\) as well. The single logarithm equals the original expression for \(x>2\).
provenance: written-for-site
steps:
  - Use the power law to put \(17\) and \(2\) into exponents.
  - Use the product law for the sum and the quotient law for the difference.
  - The result is valid for \(x>2\).
verification:
  checks:
    - expr: '(log(3*x, 2) + 17*log(x - 2, 2) - 2*log(x**2 + 4*x + 1, 2) - log(3*x*(x - 2)**17/(x**2 + 4*x + 1)**2, 2)).subs(x, 3)'
      expected: "0"
    - expr: 'simplify(expand_log(log(3*x*(x - 2)**17/(x**2 + 4*x + 1)**2, 2), force=True) - (log(3*x, 2) + 17*log(x - 2, 2) - 2*log(x**2 + 4*x + 1, 2)))'
      expected: "0"
:::


::: exercise
id: l1-exp-log.handout-4-6-4
number: "4.6.4"
tier: basic
topics:
  - logarithms
statement: |
  Solve \(\log_{2}\bigl(1+\sqrt{x}\bigr)=6\) for \(x\).
solution: |
  The expression needs \(x\ge 0\). Inverse cancellation says \(2^{\log_{2}(u)}=u\) for \(u>0\). Take the power of \(2\) of both sides:
  \[
  \begin{aligned}
  1+\sqrt{x}&=2^{6}\\
  &=64.
  \end{aligned}
  \]
  Then \(\sqrt{x}=63\), and squaring gives
  \[
  x=63^{2}=3969.
  \]
  The value is nonnegative. For a check, \(\sqrt{3969}=63\), so \(1+\sqrt{3969}=64\) and \(\log_{2}(64)=6\). The solution is \(x=3969\).
provenance: written-for-site
steps:
  - "Convert to exponential form: \\(1+\\sqrt{x}=2^{6}=64\\)."
  - Solve \(\sqrt{x}=63\), so \(x=3969\).
  - Check that \(\log_{2}(64)=6\).
verification:
  checks:
    - expr: 'solve(1 + sqrt(x) - 2**6, x)'
      expected: "[3969]"
    - expr: 'log(1 + sqrt(3969), 2)'
      expected: "6"
:::


::: exercise
id: l1-exp-log.handout-4-6-6
number: "4.6.6"
tier: standard
topics:
  - logarithms
statement: |
  Solve \(\log_{2}\bigl(\log_{3}(x)\bigr)=1\) for \(x\).
solution: |
  The outer logarithm needs a positive argument, so \(\log_{3}(x)>0\), which means \(x>1\).

  Unwrap the outer logarithm first. Take the power of \(2\) of both sides:
  \[
  \log_{3}(x)=2^{1}=2.
  \]
  Unwrap the inner logarithm. Take the power of \(3\) of both sides:
  \[
  x=3^{2}=9.
  \]
  The value satisfies \(x>1\). For a check, \(\log_{3}(9)=2\) and \(\log_{2}(2)=1\). The solution is \(x=9\).
provenance: written-for-site
steps:
  - The domain is \(x>1\), so that \(\log_{3}(x)>0\).
  - Unwrap the outer logarithm to get \(\log_{3}(x)=2\).
  - Unwrap the inner logarithm to get \(x=3^{2}=9\).
verification:
  checks:
    - expr: 'log(log(9, 3), 2)'
      expected: "1"
    - expr: 'log(9, 3)'
      expected: "2"
    - expr: 'solve(log(x, 3) - 2, x)'
      expected: "[9]"
:::
