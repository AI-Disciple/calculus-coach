---
id: l2-related-rates
lecture: 2
order: 12
title: Related rates
prerequisites: [l2-implicit-differentiation]
sources:
  - { source: handout, section: "6.2", page: 131 }
examWeight: low
status: reviewed
notation: |
  \(\dot x\) means \(\frac{dx}{dt}\). The same dot on another letter means that quantity's derivative with respect to \(t\). Both \(\dot x\) and \(\frac{dx}{dt}\) name this rate.
---

::: formal-statement
kind: method
title: Related rates
source:
  source: handout
  section: "6.2"
  page: 132
text: |
  If \(y = f(x)\), the chain rule gives the unknown rate directly:
  \[
  \dot y = \frac{dy}{dt} = \frac{dy}{dx}\cdot\frac{dx}{dt} = \frac{dy}{dx}\,\dot x.
  \]

  When the two quantities are tied by an equation, the method has five steps.

  1. Decide what the two variables are.
  2. Find an equation relating them.
  3. Take \(d/dt\) of both sides.
  4. Plug in all known values at the instant in question.
  5. Solve for the unknown rate.
:::

::: plain-explanation
text: |
  Two quantities are both changing with time. You know one rate at a given instant, and you want the other. An equation between the quantities is the link. Differentiate both sides with respect to \(t\) while the letters are still variables. After that, substitute the numbers that hold at the instant, including the known rate. A number put in too early is a constant, and the derivative of a constant is 0, so the unknown rate disappears.

  If one quantity is a function of the other, that differentiation is the chain rule in one line. Evaluate \(\frac{dy}{dx}\) at the current \(x\), then multiply by the given \(\frac{dx}{dt}\).
:::

::: worked-example
title: A plane flying away
problem: |
  A plane flies directly away from you at constant altitude. How fast is the plane's distance from you increasing at the moment when the plane is flying over a point on the ground 4 miles from you?
solution: |
  The altitude is the vertical leg of a right triangle, and it stays 3 miles. Call the horizontal distance \(x\) and the slant distance from you to the plane \(y\). The speed of the plane is the rate \(\dot x\), and that rate is 500 mph. At the instant in question the horizontal distance is 4 miles.

  Pythagoras gives
  \[
  x^{2} + 3^{2} = y^{2},\quad\text{that is}\quad x^{2} + 9 = y^{2}.
  \]
  At this instant \(4^{2} + 3^{2} = y^{2}\), so the slant distance is 5 miles.

  Differentiate both sides with respect to \(t\). The altitude is constant, so the derivative of 9 is 0, and
  \[
  2x\dot x = 2y\dot y.
  \]
  Substitute the known values:
  \[
  2\cdot 4\cdot 500 = 2\cdot 5\cdot\dot y.
  \]
  Therefore \(\dot y = 400\) mph. The rate is positive, so the distance from you to the plane is increasing.
:::

::: guided-example
title: Inflating a sphere
problem: |
  A spherical balloon is inflated at a constant rate. How fast is the radius increasing when the radius is 4 cm? The volume increases at 7 cm\(^{3}\)/s. Take the steps one at a time.
steps:
  - |
    The two variables are the volume \(V\) and the radius \(r\). The known rate is \(\frac{dV}{dt}\), and that rate is 7 cm\(^{3}\)/s. At the instant in question the radius is 4 cm. The unknown rate is \(\dot r\).
  - |
    The volume of a sphere relates the two variables:
    \[
    V = \frac{4}{3}\pi r^{3}.
    \]
  - |
    Differentiate both sides with respect to \(t\). The derivative of \(r^{3}\) contributes \(3r^{2}\dot r\), so
    \[
    \frac{dV}{dt} = 4\pi r^{2}\dot r.
    \]
  - |
    Substitute the known values. The radius is 4 cm, so \(r^{2} = 16\), and \(\frac{dV}{dt} = 7\). The equation becomes
    \[
    \begin{aligned}
    7 &= 4\pi\cdot 16\cdot\dot r,\\
    &\text{that is}\quad 7 = 64\pi\dot r.
    \end{aligned}
    \]
  - |
    Solve for the unknown rate:
    \[
    \dot r = \frac{7}{64\pi}\text{ cm/s}.
    \]
    The rate is positive, so the radius is increasing.
:::

::: trap
text: |
  Two cars move on roads that cross at right angles at a point \(P\). The distance of car A north of \(P\) is \(a = 10\) km, and that distance is increasing at \(\dot a = 80\) km/h. The distance of car B east of \(P\) is \(b = 15\) km, and that distance is increasing at \(\dot b = 100\) km/h. The distance between the cars is \(c\).

  Pythagoras gives
  \[
  \begin{aligned}
  c &= \sqrt{a^{2} + b^{2}}\\
  &= \sqrt{10^{2} + 15^{2}} = \sqrt{325}\\
  &= 5\sqrt{13}\text{ km}.
  \end{aligned}
  \]
  Differentiating \(c^{2} = a^{2} + b^{2}\) gives \(\dot c = (a\dot a + b\dot b)/c\). The numerator is \(10\cdot 80 + 15\cdot 100 = 2300\), so
  \[
  \dot c = \frac{2300}{5\sqrt{13}} = \frac{460}{\sqrt{13}}
  \]
  km/h, about 127.6 km/h. The rate is positive, so the distance is increasing.

  Two wrong figures fail against this result:

  - The figure \(2300/\sqrt{13}\) is about 637.9 km/h. It fails against \(c = 5\sqrt{13}\), because it drops the factor 5 and divides by \(\sqrt{13}\) alone.
  - The figure \(92/\sqrt{13}\) is about 25.5 km/h. It fails against the same \(c\), because \((a\dot a + b\dot b)/c = 460/\sqrt{13}\).
:::

::: key-points
text: |
  - If \(y = f(x)\), then \(\dot y = \frac{dy}{dx}\,\dot x\). Evaluate \(\frac{dy}{dx}\) at the current \(x\) and multiply by the given \(\dot x\).
  - When an equation ties the quantities together, differentiate both sides with respect to \(t\) while the letters are still variables. Then substitute the values that hold at the instant and solve for the unknown rate.
  - The usual slip puts the instant's number in before differentiating. That turns the letter into a constant, its derivative is 0, and the unknown rate disappears. The correct order is to differentiate first and substitute afterwards.
:::

::: concept-question
id: l2-related-rates.q-cda8bb8d
question: |
  A point moves on the parabola \(y = x^{2}\). At one instant the \(x\)-coordinate is 6 and \(\frac{dx}{dt} = 3\). What is \(\frac{dy}{dt}\)?
options:
  - text: |
      \(12\)
  - text: |
      \(18\)
  - text: |
      \(36\)
    correct: true
  - text: |
      \(72\)
explanation: |
  The chain rule gives \(\frac{dy}{dt} = 2x\frac{dx}{dt}\). At this instant the product is \(2\cdot 6\cdot 3 = 36\).
:::

::: concept-question
id: l2-related-rates.q-2ada4e9f
question: |
  You know that \(x = 4\) at the instant you care about. When should that 4 enter the calculation?
options:
  - text: |
      Before any differentiation, so every letter has already been replaced by a number.
  - text: |
      After both sides have been differentiated with respect to \(t\).
    correct: true
  - text: |
      Only when you write the final sentence, after the rate is already known.
explanation: |
  Differentiate while \(x\) is still a variable. If \(x\) is replaced by 4 first, that part of the equation is a constant, its derivative is 0, and the unknown rate drops out.
:::

::: concept-question
id: l2-related-rates.q-c8b3db64
question: |
  A balloon's volume increases at 7 cm\(^{3}\)/s. The radius is 4 cm. What is the radius doing?
options:
  - text: |
      The radius is increasing.
    correct: true
  - text: |
      The radius is decreasing.
  - text: |
      The radius is constant.
explanation: |
  \(\dot r = \frac{7}{64\pi}\), which is positive, so the radius is increasing.
:::

::: concept-question
id: l2-related-rates.q-684be825
question: |
  One car is 10 km north of a crossing and the other is 15 km east of it. What is the distance between them?
options:
  - text: |
      \(\sqrt{13}\) km
  - text: |
      \(5\sqrt{13}\) km
    correct: true
  - text: |
      25 km
  - text: |
      325 km
explanation: |
  The distance is \(\sqrt{10^{2} + 15^{2}} = \sqrt{325} = \sqrt{25\cdot 13} = 5\sqrt{13}\) km.
:::

::: concept-question
id: l2-related-rates.q-25265dc1
question: |
  Those cars move at 80 km/h north and 100 km/h east. How fast is the distance between them changing?
options:
  - text: |
      \(\dfrac{92}{\sqrt{13}}\) km/h
  - text: |
      \(\dfrac{460}{\sqrt{13}}\) km/h
    correct: true
  - text: |
      \(\dfrac{2300}{\sqrt{13}}\) km/h
  - text: |
      25 km/h
explanation: |
  The distance is \(c = 5\sqrt{13}\) km. The numerator \(a\dot a + b\dot b\) is \(10\cdot 80 + 15\cdot 100 = 2300\). Dividing by \(c\) gives
  \[
  \frac{2300}{5\sqrt{13}} = \frac{460}{\sqrt{13}}\text{ km/h}.
  \]
  The rate is positive, so the distance is increasing.
:::

::: going-deeper
title: Water poured into a cone
text: |
  Water is poured into a cone that points down. The container's height is 30 cm and its base radius is 10 cm. Water enters at 10 cm\(^{3}\)/s. When the depth is 4 cm, similar triangles make the surface radius one third of the depth, and the volume of water is
  \[
  V = \pi h^{3}/27.
  \]
  Differentiating with respect to \(t\) and substituting the known rate and this depth gives
  \[
  \frac{dh}{dt} = \frac{90}{16\pi}\text{ cm/s},
  \]
  so the level is rising. Ladders, shadows and scissors are further problems in the same section.
:::

::: exercise
id: l2-related-rates.ex-parabola
number: "Example 6.2.1"
tier: basic
topics: [related-rates]
statement: |
  An object moves on the path \(y = x^{2}\). At \(t = 5\) the \(x\)-coordinate is 6 and \(\frac{dx}{dt} = 3\). How fast is the \(y\)-coordinate changing?
solution: |
  The path is \(y = x^{2}\). At the instant in question the \(x\)-coordinate is 6, and the rate \(\frac{dx}{dt}\) is 3.

  The chain rule gives
  \[
  \begin{aligned}
  \frac{dy}{dt}&= 2x\frac{dx}{dt},\\
  \frac{dy}{dt}&= 2\cdot 6\cdot 3 = 36.
  \end{aligned}
  \]
  The rate is positive, so the \(y\)-coordinate is increasing.
provenance: handout-answer
steps:
  - |
    The path is \(y = x^{2}\), with \(x = 6\) and \(\frac{dx}{dt} = 3\).
  - |
    \(\frac{dy}{dt} = 2x\frac{dx}{dt} = 36\), and the \(y\)-coordinate is increasing.
verification:
  checks:
    - expr: "2*6*3"
      expected: "36"
:::

::: exercise
id: l2-related-rates.ex-ladder
number: "6.2 exercise 3"
tier: standard
topics: [related-rates]
statement: |
  A ladder 13 m long rests on horizontal ground and leans against a vertical wall. The foot of the ladder is pulled away from the wall at 0.6 m/s. How fast is the top sliding down the wall when the foot is 5 m from the wall?
solution: |
  The two variables are the distance \(x\) from the wall to the foot and the height \(y\) of the top. The length of the ladder is the constant 13 m. The known rate is \(\dot x = 0.6\) m/s, which equals \(\frac{3}{5}\) m/s. At the instant in question the foot is 5 m from the wall. The unknown rate is \(\dot y\).

  The relation is
  \[
  x^{2} + y^{2} = 13^{2} = 169.
  \]
  At this instant
  \[
  \begin{aligned}
  5^{2} + y^{2}&= 169,\\
  y^{2}&= 144,
  \end{aligned}
  \]
  so the height is 12 m.

  Differentiate both sides with respect to \(t\):
  \[
  \begin{aligned}
  2x\dot x + 2y\dot y&= 0,\\
  \dot y&= -\frac{x\dot x}{y}.
  \end{aligned}
  \]
  Substitute the known values:
  \[
  \dot y = -\frac{5\cdot(3/5)}{12} = -\frac{1}{4}.
  \]
  The height is decreasing at \(\frac{1}{4}\) m/s, so the top slides down the wall at that speed.
provenance: written-for-site
steps:
  - |
    The ladder gives \(x^{2} + y^{2} = 169\), with \(x = 5\) and \(\dot x = 3/5\).
  - |
    The height is 12 m.
  - |
    \(\dot y = -1/4\) m/s, so the top slides down at \(1/4\) m/s.
verification:
  checks:
    - expr: "sqrt(13**2 - 5**2)"
      expected: "12"
    - expr: "-5*(3/5)/12"
      expected: "-1/4"
:::

::: exercise
id: l2-related-rates.ex-cone
tier: standard
topics: [related-rates]
statement: |
  A tank is a cone with its point down, \(10\) m high, with a top of radius \(5\) m. Water is pumped in at \(8\) m\(^{3}\)/min. How fast is the water level rising when the water is \(4\) m deep?
solution: |
  The two variables are the volume \(V\) of the water and its depth \(h\). The water also has a surface radius \(r\). The known rate is \(\dot V = 8\) m\(^{3}\)/min, and the unknown rate is \(\dot h\).

  The water forms a cone similar to the tank, so \(\frac{r}{h} = \frac{5}{10}\) and \(r = \frac{h}{2}\). The volume of the water is
  \[
  V = \frac{1}{3}\pi r^{2} h = \frac{1}{3}\pi\left(\frac{h}{2}\right)^{2} h = \frac{\pi h^{3}}{12}.
  \]
  The radius \(r\) changes with \(h\), so it has to be replaced before differentiating.

  Differentiate both sides with respect to \(t\):
  \[
  \dot V = \frac{\pi h^{2}}{4}\dot h.
  \]
  Substitute \(h = 4\) and \(\dot V = 8\). Then
  \[
  8 = \frac{\pi\cdot 16}{4}\dot h = 4\pi\dot h,
  \]
  so \(\dot h = \frac{2}{\pi}\) m/min, about \(0.64\) m/min. The rate is positive, so the level is rising.
provenance: written-for-site
steps:
  - |
    Similar triangles give \(r = h/2\), so \(V = \pi h^{3}/12\).
  - |
    \(\dot V = \frac{\pi h^{2}}{4}\dot h\).
  - |
    With \(h = 4\) and \(\dot V = 8\), \(\dot h = 2/\pi\) m/min, and the level is rising.
verification:
  checks:
    - expr: simplify(Rational(1, 3)*pi*(h/2)**2*h - pi*h**3/12)
      expected: "0"
    - expr: diff(pi*h**3/12, h).subs(h, 4)
      expected: "4*pi"
    - expr: 8/(4*pi)
      expected: "2/pi"
:::

::: exercise
id: l2-related-rates.ex-cars
number: "Example 6.2.6"
tier: exam
topics: [related-rates]
statement: |
  Two straight roads cross at right angles at \(P\). At one instant car A is 10 km north of \(P\) and driving north at 80 km/h, and car B is 15 km east of \(P\) and driving east at 100 km/h. How fast is the distance between the cars changing? Is that distance increasing or decreasing?
solution: |
  The distance of car A north of \(P\) is \(a = 10\) km, and it increases at \(\dot a = 80\) km/h. The distance of car B east of \(P\) is \(b = 15\) km, and it increases at \(\dot b = 100\) km/h. Let \(c\) be the distance between the cars.

  The roads are perpendicular, so \(c^{2} = a^{2} + b^{2}\). At this instant the distance is
  \[
  c = \sqrt{10^{2} + 15^{2}} = \sqrt{325} = 5\sqrt{13}\text{ km}.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \begin{aligned}
  2c\dot c&= 2a\dot a + 2b\dot b,\\
  \dot c&= (a\dot a + b\dot b)/c.
  \end{aligned}
  \]
  The numerator is \(10\cdot 80 + 15\cdot 100 = 2300\). Therefore
  \[
  \dot c = \frac{2300}{5\sqrt{13}} = \frac{460}{\sqrt{13}}\text{ km/h},
  \]
  about 127.6 km/h. The rate is positive, so the distance between the cars is increasing.
provenance: written-for-site
steps:
  - |
    The distance is \(c = 5\sqrt{13}\) km.
  - |
    \(\dot c = (a\dot a + b\dot b)/c = 460/\sqrt{13}\) km/h.
  - |
    The rate is positive, so the distance is increasing.
verification:
  checks:
    - expr: "sqrt(10**2 + 15**2)"
      expected: "5*sqrt(13)"
    - expr: "(10*80 + 15*100)/(5*sqrt(13))"
      expected: "460/sqrt(13)"
:::

::: sheet-item
id: l2-related-rates.sheet-steps
category: formula
text: |
  1. Name the two variables.
  2. Write an equation relating them.
  3. Differentiate both sides with respect to \(t\).
  4. Plug in the known values at that instant.
  5. Solve for the unknown rate.

  If \(y = f(x)\), then
  \[
  \frac{dy}{dt} = \frac{dy}{dx}\cdot\frac{dx}{dt}.
  \]
:::

::: exercise
id: l2-related-rates.ex-related-rates-plane-angle
tier: standard
topics: [related-rates]
statement: |
  A plane flies directly away from you at constant altitude \(3\) miles and speed \(500\) mph. At the moment when the plane is over a point on the ground \(4\) miles from you:

  (a) How fast is the distance from you to the plane increasing?

  (b) How fast is the angle of elevation \(\theta\) of the plane, seen from where you stand, changing?
solution: |
  Let \(x\) be the horizontal distance, \(y\) the slant distance from you to the plane, and \(\theta\) the angle of elevation. The altitude is the constant \(3\), and \(\dot x = 500\) mph. At the instant in question \(x = 4\), so \(y = \sqrt{4^{2} + 3^{2}} = 5\) miles.

  (a) Pythagoras gives \(x^{2} + 9 = y^{2}\). Differentiate both sides with respect to \(t\). The derivative of \(9\) is \(0\), so
  \[
  2x\dot x = 2y\dot y.
  \]
  Substitute the known values:
  \[
  2\cdot 4\cdot 500 = 2\cdot 5\cdot\dot y.
  \]
  Therefore \(\dot y = 400\) mph. The rate is positive, so the distance is increasing.

  (b) The angle satisfies
  \[
  \tan\theta = \frac{3}{x}.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \sec^{2}\theta\,\dot\theta = -\frac{3}{x^{2}}\dot x.
  \]
  Since \(\cos\theta = \frac{x}{y}\), we have \(\sec^{2}\theta = \frac{y^{2}}{x^{2}}\), and so
  \[
  \dot\theta = -\frac{3\dot x}{y^{2}}.
  \]
  Substitute \(\dot x = 500\) and \(y = 5\):
  \[
  \dot\theta = -\frac{3\cdot 500}{25} = -60
  \]
  radians per hour, which is \(-1\) radian per minute. The rate is negative, so the angle of elevation is decreasing.
provenance: written-for-site
steps:
  - The slant distance is \(y = 5\) miles.
  - From \(x^{2} + 9 = y^{2}\), \(\dot y = x\dot x / y = 400\) mph.
  - From \(\tan\theta = 3/x\), \(\dot\theta = -3\dot x / y^{2} = -60\) radians per hour.
verification:
  checks:
    - expr: sqrt(4**2 + 3**2)
      expected: "5"
    - expr: 4*500/5
      expected: "400"
    - expr: diff(atan(3/x), x).subs(x, 4)*500
      expected: "-60"
    - expr: 3*500/5**2
      expected: "60"
:::

::: exercise
id: l2-related-rates.ex-related-rates-balloon
tier: standard
topics: [related-rates]
statement: |
  A spherical balloon is inflated so that its volume increases at \(7\) cm\(^{3}\)/s.

  (a) How fast is the radius increasing when the radius is \(4\) cm?

  (b) How fast is the surface area increasing at that moment?

  (c) By what factor does the rate of the radius change when the radius is \(8\) cm, with the same volume rate?
solution: |
  The volume and the surface area are
  \[
  V = \frac{4}{3}\pi r^{3},\qquad S = 4\pi r^{2}.
  \]
  The known rate is \(\dot V = 7\) cm\(^{3}\)/s.

  (a) Differentiate with respect to \(t\):
  \[
  \dot V = 4\pi r^{2}\dot r.
  \]
  Substitute \(r = 4\) and \(\dot V = 7\):
  \[
  7 = 64\pi\dot r,
  \]
  so \(\dot r = \frac{7}{64\pi}\) cm/s, about \(0.035\) cm/s. The rate is positive, so the radius is increasing.

  (b) Differentiate \(S = 4\pi r^{2}\):
  \[
  \dot S = 8\pi r\dot r.
  \]
  Substitute \(r = 4\) and \(\dot r = \frac{7}{64\pi}\):
  \[
  \dot S = 8\pi\cdot 4\cdot\frac{7}{64\pi} = \frac{7}{2} \text{ cm}^{2}/\text{s}.
  \]
  The surface area is increasing at \(3.5\) cm\(^{2}\)/s.

  (c) From (a),
  \[
  \dot r = \frac{\dot V}{4\pi r^{2}}.
  \]
  With the same \(\dot V\), doubling \(r\) from \(4\) to \(8\) multiplies the denominator by \(4\), so \(\dot r\) is multiplied by \(\frac{1}{4}\). At \(r = 8\), \(\dot r = \frac{7}{256\pi}\) cm/s.
provenance: written-for-site
steps:
  - 'Part (a): \(\dot V = 4\pi r^{2}\dot r\), so \(\dot r = 7/(64\pi)\) cm/s.'
  - 'Part (b): \(\dot S = 8\pi r\dot r = 7/2\) cm\(^{2}\)/s.'
  - 'Part (c): \(\dot r\) is multiplied by \(1/4\).'
verification:
  checks:
    - expr: 7/(4*pi*4**2)
      expected: 7/(64*pi)
    - expr: 8*pi*4*7/(64*pi)
      expected: Rational(7, 2)
    - expr: (7/(4*pi*8**2))/(7/(4*pi*4**2))
      expected: Rational(1, 4)
    - expr: 7/(4*pi*8**2)
      expected: 7/(256*pi)
:::

::: exercise
id: l2-related-rates.handout-6-2-1
number: "6.2.1"
tier: basic
topics:
  - related-rates
statement: |
  A cylindrical tank standing upright, with one circular base on the ground, has radius \(20\) cm. How fast does the water level in the tank drop when the water is being drained at \(25\) cm\(^3\)/sec?
solution: |
  The two variables are the volume \(V\) of the water and its depth \(h\). The radius \(20\) cm is constant. The known rate is \(\dot V = -25\) cm\(^3\)/s, negative because the water is leaving. The unknown rate is \(\dot h\).

  The volume of a cylinder of radius \(20\) and height \(h\) is
  \[
  V = \pi\cdot 20^2\,h = 400\pi h.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \dot V = 400\pi\,\dot h.
  \]
  Substitute \(\dot V = -25\):
  \[
  \dot h = \frac{-25}{400\pi} = -\frac{1}{16\pi}.
  \]
  The level drops at \(\dfrac{1}{16\pi}\) cm/s, about \(0.02\) cm/s. The rate does not depend on the depth.
provenance: handout-answer
steps:
  - V = 400 pi h, so dV/dt = 400 pi dh/dt with dV/dt = -25.
  - dh/dt = -1/(16 pi) cm/s, so the level drops at 1/(16 pi) cm/s.
verification:
  checks:
    - expr: diff(pi*20**2*h, h)
      expected: 400*pi
    - expr: -25/(400*pi)
      expected: -1/(16*pi)
:::


::: exercise
id: l2-related-rates.handout-6-2-4
number: "6.2.4"
tier: standard
topics:
  - related-rates
statement: |
  A ladder \(13\) meters long rests on horizontal ground and leans against a vertical wall. The top of the ladder is being pulled up the wall at \(0.1\) meters per second. How fast is the foot of the ladder approaching the wall when the foot of the ladder is \(5\) m from the wall?
solution: |
  The two variables are the distance \(x\) from the wall to the foot and the height \(y\) of the top. The ladder has constant length \(13\) m. The known rate is \(\dot y = 0.1 = \frac{1}{10}\) m/s, positive because the top rises. The unknown rate is \(\dot x\). At the instant in question \(x = 5\).

  The relation is
  \[
  x^2 + y^2 = 13^2 = 169.
  \]
  At this instant
  \[
  \begin{aligned}
  5^2 + y^2&=169,\\
  y^2&=144,
  \end{aligned}
  \]
  so the height is \(12\) m.

  Differentiate both sides with respect to \(t\):
  \[
  \begin{aligned}
  2x\dot x + 2y\dot y&=0,\\
  \dot x&=-\frac{y\dot y}{x}.
  \end{aligned}
  \]
  Substitute the known values:
  \[
  \dot x = -\frac{12\cdot(1/10)}{5} = -\frac{6}{25}.
  \]
  The rate is negative, so the foot approaches the wall at \(\dfrac{6}{25} = 0.24\) m/s.
provenance: handout-answer
steps:
  - x^2 + y^2 = 169 with x = 5 gives y = 12, and dy/dt = 1/10.
  - Differentiating, dx/dt = -y (dy/dt) / x = -6/25 m/s.
  - The foot approaches the wall at 6/25 m/s.
verification:
  checks:
    - expr: sqrt(13**2 - 5**2)
      expected: 12
    - expr: -12*Rational(1, 10)/5
      expected: -Rational(6, 25)
:::


::: exercise
id: l2-related-rates.handout-6-2-5
number: "6.2.5"
tier: standard
topics:
  - related-rates
statement: |
  A rotating beacon is located \(2\) miles out in the water. Let \(A\) be the point on the shore that is closest to the beacon. As the beacon rotates at \(10\) rev/min, the beam of light sweeps down the shore once each time it revolves. Assume that the shore is straight. How fast is the point where the beam hits the shore moving at an instant when the beam is lighting up a point \(2\) miles along the shore from the point \(A\)?
solution: |
  Let \(x\) be the distance along the shore from \(A\) to the lit point, in miles. Let \(\theta\) be the angle between the beam and the line from the beacon to \(A\). That line has length \(2\) and meets the shore at a right angle, so
  \[
  x = 2\tan\theta.
  \]
  The beam turns \(10\) revolutions per minute, and one revolution is \(2\pi\) radians, so
  \[
  \dot\theta = 10\cdot 2\pi = 20\pi \text{ rad/min}.
  \]
  The formula \(\frac{d}{d\theta}\tan\theta = \sec^2\theta\) needs radians. Differentiate both sides with respect to \(t\):
  \[
  \dot x = 2\sec^2\theta\,\dot\theta.
  \]
  At the instant in question \(x = 2\), so \(\tan\theta = 1\) and \(\sec^2\theta = 1 + \tan^2\theta = 2\). Then
  \[
  \dot x = 2\cdot 2\cdot 20\pi = 80\pi.
  \]
  The lit point moves along the shore at \(80\pi\) miles per minute, about \(251\) miles per minute.
provenance: handout-answer
steps:
  - x = 2 tan(theta), and theta' = 10 * 2 pi = 20 pi rad/min.
  - dx/dt = 2 sec^2(theta) theta', with tan(theta) = 1, so sec^2(theta) = 2.
  - dx/dt = 80 pi miles per minute.
verification:
  checks:
    - expr: diff(2*tan(th), th).subs(th, pi/4)
      expected: 4
    - expr: diff(2*tan(th), th).subs(th, pi/4)*10*2*pi
      expected: 80*pi
:::


::: exercise
id: l2-related-rates.handout-6-2-6
number: "6.2.6"
tier: standard
topics:
  - related-rates
statement: |
  A baseball diamond is a square \(90\) ft on a side. A player runs from first base to second base at \(15\) ft/sec. At what rate is the player's distance from third base decreasing when she is half way from first to second base?
solution: |
  Second base is a corner of the square, and the sides from second base to first base and from second base to third base meet at a right angle. Let \(s\) be the distance from the runner to second base, and let \(d\) be the distance from the runner to third base. The side from second to third base has length \(90\), so
  \[
  d^2 = s^2 + 90^2.
  \]
  The runner moves toward second base, so \(\dot s = -15\) ft/s. Half way from first to second base, \(s = 45\), and
  \[
  d = \sqrt{45^2 + 90^2} = \sqrt{10125} = 45\sqrt{5}.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \begin{aligned}
  2d\dot d&=2s\dot s,\\
  \dot d&=\frac{s\dot s}{d}.
  \end{aligned}
  \]
  Substitute the known values:
  \[
  \dot d = \frac{45\cdot(-15)}{45\sqrt{5}} = -\frac{15}{\sqrt{5}} = -3\sqrt{5}.
  \]
  The distance from third base is decreasing at \(3\sqrt{5} \approx 6.7\) ft/s.
provenance: handout-answer
steps:
  - d^2 = s^2 + 90^2 with s the distance to second base, s = 45, ds/dt = -15.
  - Then d = 45 sqrt(5).
  - dd/dt = s (ds/dt) / d = -3 sqrt(5) ft/s, so the distance decreases at 3 sqrt(5) ft/s.
verification:
  checks:
    - expr: sqrt(45**2 + 90**2)
      expected: 45*sqrt(5)
    - expr: 45*(-15)/(45*sqrt(5))
      expected: -3*sqrt(5)
:::


::: exercise
id: l2-related-rates.handout-6-2-8
number: "6.2.8"
tier: standard
topics:
  - related-rates
statement: |
  A boat is pulled in to a dock by a rope with one end attached to the front of the boat and the other end passing through a ring attached to the dock at a point \(5\) ft higher than the front of the boat. The rope is being pulled through the ring at the rate of \(0.6\) ft/sec. How fast is the boat approaching the dock when \(13\) ft of rope are out?
solution: |
  Let \(L\) be the length of rope between the boat and the ring, and let \(x\) be the horizontal distance from the front of the boat to the point of the dock directly below the ring. The ring is \(5\) ft above the front of the boat, so the rope is the hypotenuse of a right triangle:
  \[
  x^2 + 5^2 = L^2.
  \]
  The rope is pulled through the ring at \(0.6\) ft/s, so the length out shrinks at \(\dot L = -0.6 = -\frac{3}{5}\) ft/s. When \(L = 13\),
  \[
  \begin{aligned}
  x^2&=13^2 - 5^2=144,\\
  x&=12.
  \end{aligned}
  \]
  Differentiate both sides with respect to \(t\). The height \(5\) is constant, so
  \[
  \begin{aligned}
  2x\dot x&=2L\dot L,\\
  \dot x&=\frac{L\dot L}{x}.
  \end{aligned}
  \]
  Substitute the known values:
  \[
  \dot x = \frac{13\cdot(-3/5)}{12} = -\frac{13}{20}.
  \]
  The boat approaches the dock at \(\dfrac{13}{20} = 0.65\) ft/s.
provenance: handout-answer
steps:
  - x^2 + 25 = L^2 with L = 13 gives x = 12, and dL/dt = -3/5.
  - dx/dt = L (dL/dt) / x = -13/20 ft/s.
  - The boat approaches the dock at 13/20 ft/s.
verification:
  checks:
    - expr: sqrt(13**2 - 5**2)
      expected: 12
    - expr: 13*(-Rational(3, 5))/12
      expected: -Rational(13, 20)
:::


::: exercise
id: l2-related-rates.handout-6-2-9
number: "6.2.9"
tier: standard
topics:
  - related-rates
statement: |
  A balloon is at a height of \(50\) meters, and is rising at the constant rate of \(5\) m/sec. A bicyclist passes beneath it, traveling in a straight line at the constant speed of \(10\) m/sec. How fast is the distance between the bicyclist and the balloon increasing \(2\) seconds later?
solution: |
  Let \(t\) be the time in seconds after the bicyclist passes beneath the balloon. Let \(x\) be the horizontal distance of the bicyclist from the point under the balloon's starting position, \(y\) the height of the balloon, and \(D\) the distance between them. The rates are \(\dot x = 10\) and \(\dot y = 5\), and
  \[
  \begin{aligned}
  x&=10t,\\
  y&=50 + 5t.
  \end{aligned}
  \]
  The bicyclist travels in a straight line and the balloon rises vertically, so
  \[
  D^2 = x^2 + y^2.
  \]
  At \(t = 2\), \(x = 20\) and \(y = 60\), so
  \[
  D = \sqrt{20^2 + 60^2} = \sqrt{4000} = 20\sqrt{10}.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \begin{aligned}
  2D\dot D&=2x\dot x + 2y\dot y,\\
  \dot D&=\frac{x\dot x + y\dot y}{D}.
  \end{aligned}
  \]
  Substitute the known values:
  \[
  \dot D = \frac{20\cdot 10 + 60\cdot 5}{20\sqrt{10}} = \frac{500}{20\sqrt{10}} = \frac{25}{\sqrt{10}} = \frac{5\sqrt{10}}{2}.
  \]
  The distance is increasing at \(\dfrac{5\sqrt{10}}{2} \approx 7.9\) m/s.
provenance: handout-answer
steps:
  - At t = 2 the horizontal distance is 20, the height is 60, and D = 20 sqrt(10).
  - From D^2 = x^2 + y^2, dD/dt = (x x' + y y')/D.
  - dD/dt = 500/(20 sqrt(10)) = 5 sqrt(10)/2 m/s, increasing.
verification:
  checks:
    - expr: sqrt(20**2 + 60**2)
      expected: 20*sqrt(10)
    - expr: (20*10 + 60*5)/(20*sqrt(10))
      expected: 5*sqrt(10)/2
    - expr: diff(sqrt((10*t)**2 + (50 + 5*t)**2), t).subs(t, 2)
      expected: 5*sqrt(10)/2
:::


::: exercise
id: l2-related-rates.handout-6-2-10
number: "6.2.10"
tier: standard
topics:
  - related-rates
statement: |
  A pyramid-shaped vat has square cross-section and stands on its tip. The dimensions at the top are \(2\) m by \(2\) m, and the depth is \(5\) m. If water is flowing into the vat at \(3\) m\(^3\)/min, how fast is the water level rising when the depth of water at the deepest point is \(4\) m? The volume of any conical shape, including pyramids, is \(\frac{1}{3}\)(height)(area of base).
solution: |
  The two variables are the volume \(V\) of the water and its depth \(h\). The known rate is \(\dot V = 3\) m\(^3\)/min, and the unknown rate is \(\dot h\).

  The water forms a pyramid similar to the vat. The vat has top side \(2\) at depth \(5\), so at depth \(h\) the square surface has side
  \[
  s = \frac{2}{5}h.
  \]
  The base area of the water pyramid is \(s^2 = \frac{4h^2}{25}\), and its volume is
  \[
  V = \frac{1}{3}\cdot h\cdot\frac{4h^2}{25} = \frac{4h^3}{75}.
  \]
  The side \(s\) changes with \(h\), so it is replaced before differentiating. Differentiate both sides with respect to \(t\):
  \[
  \dot V = \frac{4h^2}{25}\,\dot h.
  \]
  Substitute \(h = 4\) and \(\dot V = 3\):
  \[
  3 = \frac{4\cdot 16}{25}\,\dot h = \frac{64}{25}\,\dot h,
  \]
  so \(\dot h = \dfrac{75}{64}\) m/min, about \(1.17\) m/min. The rate is positive, so the level is rising.
provenance: handout-answer
steps:
  - Similar pyramids give the surface side s = 2h/5, so V = (1/3) h s^2 = 4h^3/75.
  - dV/dt = (4h^2/25) dh/dt, with h = 4 and dV/dt = 3.
  - dh/dt = 75/64 m/min, and the level is rising.
verification:
  checks:
    - expr: Rational(1, 3)*h*(2*h/5)**2
      expected: 4*h**3/75
    - expr: diff(4*h**3/75, h).subs(h, 4)
      expected: Rational(64, 25)
    - expr: 3/Rational(64, 25)
      expected: Rational(75, 64)
:::


::: exercise
id: l2-related-rates.handout-6-2-11
number: "6.2.11"
tier: standard
topics:
  - related-rates
statement: |
  The sun is rising at the rate of \(\frac{1}{4}\) deg/min, and appears to be climbing into the sky perpendicular to the horizon, so the sun's angle of elevation \(\theta\) increases at \(\frac{1}{4}\) degree per minute. How fast is the shadow of a \(200\) meter building shrinking at the moment when the shadow is \(500\) meters long?
solution: |
  Let \(s\) be the length of the shadow in metres. The building is \(200\) m tall, and the sun's rays make the angle \(\theta\) with the ground, so
  \[
  \tan\theta = \frac{200}{s}, \qquad s = 200\cot\theta.
  \]
  The angle changes by \(\frac{1}{4}\) degree per minute, and the derivative formulas need radians:
  \[
  \dot\theta = \frac{1}{4}\cdot\frac{\pi}{180} = \frac{\pi}{720} \text{ rad/min}.
  \]
  Differentiate both sides with respect to \(t\), using \(\frac{d}{d\theta}\cot\theta = -\csc^2\theta\):
  \[
  \dot s = -200\csc^2\theta\,\dot\theta.
  \]
  At the instant in question \(s = 500\), so \(\cot\theta = \frac{5}{2}\) and
  \[
  \csc^2\theta = 1 + \cot^2\theta = \frac{29}{4}.
  \]
  Then
  \[
  \begin{aligned}
  \dot s&=-200\cdot\frac{29}{4}\cdot\frac{\pi}{720}\\
  &=-\frac{145\pi}{72}.
  \end{aligned}
  \]
  The shadow is shrinking at \(\dfrac{145\pi}{72}\) m/min, about \(6.3\) m/min.
provenance: handout-answer
steps:
  - s = 200 cot(theta), and theta' = (1/4)(pi/180) = pi/720 rad/min.
  - ds/dt = -200 csc^2(theta) theta', with cot(theta) = 5/2, so csc^2(theta) = 29/4.
  - ds/dt = -145 pi / 72 m/min, so the shadow shrinks at 145 pi / 72 m/min.
verification:
  checks:
    - expr: diff(200*cot(th), th)
      expected: -200/sin(th)**2
    - expr: (1 + Rational(5, 2)**2)
      expected: Rational(29, 4)
    - expr: -200*Rational(29, 4)*pi/720
      expected: -145*pi/72
    - expr: floor((145*pi/72).evalf()*10)
      expected: 63
discrepancy: |
  The printed answer gives the unit as m/s. The verified value is \(\frac{145\pi}{72}\) m/min, because the angle rate is \(\frac{1}{4}\) degree per minute.
:::


::: exercise
id: l2-related-rates.handout-6-2-13
number: "6.2.13"
tier: exam
topics:
  - related-rates
statement: |
  A trough is \(10\) ft long. Its cross-section is a trapezoid made of three boards, each \(1\) ft wide: a horizontal bottom of width \(1\) ft and two side boards of length \(1\) ft, each making an angle \(\theta\) with the vertical. The ends are walls. The angle \(\theta\) was originally \(30\) degrees, but the sides are collapsing outward. The trough is full of water. At what rate, in ft\(^3\)/sec, is the water spilling out over the top when the sides have each fallen to an angle of \(45\) degrees and are collapsing at the rate of \(1\) degree per second?
solution: |
  Each side board has length \(1\) and makes the angle \(\theta\) with the vertical. It rises \(\cos\theta\) and leans out \(\sin\theta\) horizontally. The trapezoid cross-section has bottom width \(1\), top width \(1 + 2\sin\theta\), and height \(\cos\theta\). Its area is
  \[
  \begin{aligned}
  A(\theta)&=\frac{1 + (1 + 2\sin\theta)}{2}\cos\theta\\
  &=(1 + \sin\theta)\cos\theta.
  \end{aligned}
  \]
  The trough stays full to the top, so the water in it has volume \(V = 10A(\theta)\). The water spills at the rate \(-\dot V\).

  Differentiate with respect to \(t\), using the product rule:
  \[
  \begin{aligned}
  \dot V&=10\bigl(\cos^2\theta - \sin\theta(1 + \sin\theta)\bigr)\dot\theta\\
  &=10(\cos 2\theta - \sin\theta)\dot\theta.
  \end{aligned}
  \]
  The sides fall at \(1\) degree per second, so
  \[
  \dot\theta = \frac{\pi}{180} \text{ rad/s}.
  \]
  At \(\theta = 45^\circ\), \(\cos 2\theta = 0\) and \(\sin\theta = \frac{\sqrt{2}}{2}\), so
  \[
  \dot V = 10\cdot\left(-\frac{\sqrt{2}}{2}\right)\cdot\frac{\pi}{180} = -\frac{\pi\sqrt{2}}{36}.
  \]
  The volume that the trough can hold is shrinking, so the water spills out at \(\dfrac{\pi\sqrt{2}}{36}\) ft\(^3\)/s, about \(0.12\) ft\(^3\)/s. The starting angle of \(30\) degrees is not needed.
provenance: handout-answer
steps:
  - Cross-section area A(theta) = (1 + sin(theta)) cos(theta), and the full trough holds V = 10 A.
  - dV/dt = 10 (cos 2 theta - sin theta) theta', with theta' = pi/180 rad/s.
  - At 45 degrees dV/dt = -pi sqrt(2)/36, so water spills at pi sqrt(2)/36 ft^3/s.
verification:
  checks:
    - expr: simplify(diff((1 + sin(th))*cos(th), th) - (cos(2*th) - sin(th)))
      expected: 0
    - expr: diff(10*(1 + sin(th))*cos(th), th).subs(th, pi/4)*pi/180
      expected: -pi*sqrt(2)/36
    - expr: ((1 + (1 + 2*sin(th)))/2*cos(th)).subs(th, pi/4) - ((1 + sin(th))*cos(th)).subs(th, pi/4)
      expected: 0
:::


::: exercise
id: l2-related-rates.handout-6-2-14
number: "6.2.14"
tier: standard
topics:
  - related-rates
statement: |
  A woman \(5\) ft tall walks at the rate of \(3.5\) ft/sec away from a streetlight that is \(12\) ft above the ground. At what rate is the tip of her shadow moving? At what rate is her shadow lengthening?
solution: |
  Let \(x\) be the distance from the woman to the base of the streetlight and let \(s\) be the length of her shadow. The tip of the shadow is at distance \(x + s\) from the base of the light. The known rate is \(\dot x = 3.5 = \frac{7}{2}\) ft/s.

  The light, the top of her head and the tip of the shadow lie on one line. The triangle formed by the light has height \(12\) and base \(x + s\), and the triangle formed by the woman has height \(5\) and base \(s\). They are similar, so
  \[
  \frac{12}{x + s} = \frac{5}{s}.
  \]
  Cross-multiplying,
  \[
  \begin{aligned}
  12s&=5x + 5s,\\
  7s&=5x,\\
  s&=\frac{5}{7}x.
  \end{aligned}
  \]
  The tip is at \(x + s = \frac{12}{7}x\). Differentiate both sides with respect to \(t\):
  \[
  \begin{aligned}
  \frac{d}{dt}(x + s)&=\frac{12}{7}\dot x=\frac{12}{7}\cdot\frac{7}{2}=6,\\
  \dot s&=\frac{5}{7}\dot x=\frac{5}{7}\cdot\frac{7}{2}=\frac{5}{2}.
  \end{aligned}
  \]
  The tip of the shadow moves at \(6\) ft/s, and the shadow lengthens at \(\dfrac{5}{2}\) ft/s. Neither rate depends on how far she has walked.
provenance: handout-answer
steps:
  - Similar triangles give 12/(x + s) = 5/s, so s = 5x/7 and the tip is at 12x/7.
  - Tip speed (12/7) x' = 6 ft/s.
  - Shadow lengthening s' = (5/7) x' = 5/2 ft/s.
verification:
  checks:
    - expr: solve(Eq(12*s, 5*(x + s)), s)
      expected: "[5*x/7]"
    - expr: Rational(12, 7)*Rational(7, 2)
      expected: 6
    - expr: Rational(5, 7)*Rational(7, 2)
      expected: Rational(5, 2)
:::


::: exercise
id: l2-related-rates.handout-6-2-16
number: "6.2.16"
tier: standard
topics:
  - related-rates
statement: |
  A police helicopter is flying at \(150\) mph at a constant altitude of \(0.5\) mile above a straight road. The pilot uses radar to determine that an oncoming car is at a distance of exactly \(1\) mile from the helicopter, and that this distance is decreasing at \(190\) mph. Find the speed of the car.
solution: |
  Let \(g\) be the horizontal gap along the road between the helicopter and the car, and let \(D\) be the distance between them. The altitude \(0.5\) is constant, so
  \[
  g^2 + 0.5^2 = D^2.
  \]
  At the instant in question \(D = 1\), so
  \[
  g = \sqrt{1 - \tfrac{1}{4}} = \frac{\sqrt{3}}{2}.
  \]
  The radar gives \(\dot D = -190\). Differentiate both sides with respect to \(t\). The altitude is constant, so
  \[
  \begin{aligned}
  2g\dot g&=2D\dot D,\\
  \dot g&=\frac{D\dot D}{g}=\frac{1\cdot(-190)}{\sqrt{3}/2}=-\frac{380}{\sqrt{3}}.
  \end{aligned}
  \]
  The gap along the road shrinks at \(\frac{380}{\sqrt{3}} \approx 219.4\) mph. The helicopter and the car move toward each other, so this closing speed is the speed of the helicopter plus the speed \(u\) of the car:
  \[
  150 + u = \frac{380}{\sqrt{3}}.
  \]
  The speed of the car is
  \[
  u = \frac{380}{\sqrt{3}} - 150 \approx 69.4 \text{ mph}.
  \]
provenance: handout-answer
steps:
  - g^2 + 1/4 = D^2 with D = 1 gives g = sqrt(3)/2, and dD/dt = -190.
  - dg/dt = D (dD/dt) / g = -380/sqrt(3), the closing speed along the road.
  - Closing speed is 150 + u, so u = 380/sqrt(3) - 150, about 69.4 mph.
verification:
  checks:
    - expr: sqrt(1 - Rational(1, 4))
      expected: sqrt(3)/2
    - expr: 1*(-190)/(sqrt(3)/2)
      expected: -380/sqrt(3)
    - expr: 380/sqrt(3) - 150
      expected: 380*sqrt(3)/3 - 150
    - expr: floor((380/sqrt(3) - 150).evalf()*10)
      expected: 693
:::


::: exercise
id: l2-related-rates.handout-6-2-18
number: "6.2.18"
tier: standard
topics:
  - related-rates
statement: |
  A light shines from the top of a pole \(20\) m high. A ball is falling, \(10\) meters horizontally from the pole, casting a shadow on a building \(30\) meters from the pole. The wall of the building is vertical and its top is above the light. When the ball is \(25\) meters from the ground it is falling at \(6\) meters per second. How fast is its shadow moving up the building wall?
solution: |
  Let \(y\) be the height of the ball and let \(z\) be the height of its shadow on the wall, both in metres. Look at the plane that holds the pole, the ball and the wall. The light is at height \(20\), the ball is \(10\) m away horizontally, and the wall is \(30\) m away. The light, the ball and the shadow lie on one line, so the height above the light grows in proportion to the horizontal distance:
  \[
  \frac{z - 20}{30} = \frac{y - 20}{10}.
  \]
  Therefore
  \[
  z = 20 + 3(y - 20) = 3y - 40.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \dot z = 3\dot y.
  \]
  The ball falls at \(6\) m/s, so \(\dot y = -6\), and
  \[
  \dot z = 3\cdot(-6) = -18.
  \]
  The shadow moves down the wall at \(18\) m/s. At the instant in question \(y = 25\), so the shadow is at height \(z = 35\). The rate is the same at every height, because \(\dot z = 3\dot y\) holds throughout the fall.
provenance: handout-answer
steps:
  - Similar triangles from the light give (z - 20)/30 = (y - 20)/10, so z = 3y - 40.
  - dz/dt = 3 dy/dt = 3(-6) = -18 m/s.
  - The shadow moves down the wall at 18 m/s.
verification:
  checks:
    - expr: solve(Eq((z - 20)/30, (y - 20)/10), z)
      expected: "[3*y - 40]"
    - expr: diff(3*y - 40, y)*(-6)
      expected: -18
    - expr: (3*y - 40).subs(y, 25)
      expected: 35
:::


::: exercise
id: l2-related-rates.handout-6-2-19
number: "6.2.19"
tier: standard
topics:
  - related-rates
statement: |
  Two straight roads meet at a point \(P\). Car A is \(10\) km from \(P\) on one road and moving away from \(P\) at \(80\) km/h. Car B is \(15\) km from \(P\) on the other road and moving away from \(P\) at \(100\) km/h. The angle between the two roads is \(120\) degrees. How fast is the distance between the cars changing? The law of cosines gives \(c^2 = a^2 + b^2 - 2ab\cos\theta\).
solution: |
  Let \(a\) and \(b\) be the distances of cars A and B from \(P\), and let \(c\) be the distance between the cars. The known rates are \(\dot a = 80\) km/h and \(\dot b = 100\) km/h. The angle at \(P\) is \(120^\circ\), and \(\cos 120^\circ = -\frac{1}{2}\), so the law of cosines gives
  \[
  c^2 = a^2 + b^2 + ab.
  \]
  At the instant in question \(a = 10\) and \(b = 15\), so
  \[
  c^2 = 100 + 225 + 150 = 475, \qquad c = \sqrt{475} = 5\sqrt{19}.
  \]
  Differentiate both sides with respect to \(t\). The product \(ab\) needs the product rule:
  \[
  2c\dot c = 2a\dot a + 2b\dot b + \dot a b + a\dot b.
  \]
  Substitute the known values:
  \[
  \begin{aligned}
  2c\dot c&=2\cdot 10\cdot 80 + 2\cdot 15\cdot 100\\
  &\quad + 80\cdot 15 + 10\cdot 100\\
  &=1600 + 3000 + 1200 + 1000=6800.
  \end{aligned}
  \]
  Therefore
  \[
  \dot c = \frac{6800}{2\sqrt{475}} = \frac{3400}{\sqrt{475}} = \frac{680}{\sqrt{19}} = \frac{136\sqrt{475}}{19}.
  \]
  This is about \(156\) km/h. The rate is positive, so the distance between the cars is increasing.
provenance: handout-answer
steps:
  - cos 120 degrees = -1/2, so c^2 = a^2 + b^2 + ab, and c^2 = 475 at a = 10, b = 15.
  - 2c c' = 2a a' + 2b b' + a' b + a b' = 6800.
  - c' = 3400/sqrt(475) = 136 sqrt(475)/19, about 156 km/h, increasing.
verification:
  checks:
    - expr: cos(2*pi/3)
      expected: -Rational(1, 2)
    - expr: 10**2 + 15**2 + 10*15
      expected: 475
    - expr: 2*10*80 + 2*15*100 + 80*15 + 10*100
      expected: 6800
    - expr: 6800/(2*sqrt(475))
      expected: 136*sqrt(475)/19
    - expr: diff(sqrt((10 + 80*t)**2 + (15 + 100*t)**2 + (10 + 80*t)*(15 + 100*t)), t).subs(t, 0)
      expected: 136*sqrt(475)/19
    - expr: floor((136*sqrt(475)/19).evalf())
      expected: 156
:::


::: exercise
id: l2-related-rates.handout-6-2-20
number: "6.2.20"
tier: basic
topics:
  - related-rates
statement: |
  Two straight roads cross at right angles at \(P\). Car A is \(300\) meters north of \(P\) and car B is \(400\) meters east of \(P\). Both cars are going at constant speed toward \(P\), and the two cars will collide in \(10\) seconds. How fast is the distance between the cars changing?
solution: |
  Let \(a\) be the distance of car A from \(P\), \(b\) the distance of car B from \(P\), and \(c\) the distance between the cars. Both cars reach \(P\) after \(10\) s at constant speed, so
  \[
  \begin{aligned}
  \dot a&=-\frac{300}{10}=-30,\\
  \dot b&=-\frac{400}{10}=-40
  \end{aligned}
  \]
  in m/s. The roads are perpendicular, so
  \[
  c^2 = a^2 + b^2, \qquad c = \sqrt{300^2 + 400^2} = 500.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \begin{aligned}
  2c\dot c&=2a\dot a + 2b\dot b,\\
  \dot c&=\frac{a\dot a + b\dot b}{c}.
  \end{aligned}
  \]
  Substitute the known values:
  \[
  \dot c = \frac{300\cdot(-30) + 400\cdot(-40)}{500} = \frac{-25000}{500} = -50.
  \]
  The distance between the cars decreases at \(50\) m/s. This agrees with the direct count: the distance is \(500 - 50t\) metres, which reaches \(0\) at \(t = 10\).
provenance: handout-answer
steps:
  - Speeds a' = -30 and b' = -40 m/s, and c = 500 m.
  - c' = (a a' + b b')/c = -25000/500 = -50 m/s.
  - The distance decreases at 50 m/s, in agreement with c(t) = 500 - 50t.
verification:
  checks:
    - expr: sqrt(300**2 + 400**2)
      expected: 500
    - expr: (300*(-30) + 400*(-40))/500
      expected: -50
    - expr: diff(sqrt((300 - 30*t)**2 + (400 - 40*t)**2), t).subs(t, 0)
      expected: -50
    - expr: sqrt((300 - 30*10)**2 + (400 - 40*10)**2)
      expected: 0
:::


::: exercise
id: l2-related-rates.handout-6-2-21
number: "6.2.21"
tier: exam
topics:
  - related-rates
statement: |
  Two straight roads cross at right angles at \(P\). Car A is on the north road and car B is on the east road. Eight seconds ago car A started from rest at \(P\) and has been picking up speed at the steady rate of \(5\) m/s\(^2\). Six seconds after car A started, car B passed \(P\) moving east at the constant speed \(60\) m/s. How fast is the distance between the cars changing now?
solution: |
  Measure time \(t\) in seconds from the moment car A started, so "now" is \(t = 8\). Let \(a\) be the distance of car A north of \(P\) and \(b\) the distance of car B east of \(P\).

  Car A starts from rest with acceleration \(5\), so
  \[
  \begin{aligned}
  \dot a&=5t,\\
  a&=\tfrac{5}{2}t^2.
  \end{aligned}
  \]
  Car B passes \(P\) at \(t = 6\) at the constant speed \(60\), so for \(t \ge 6\)
  \[
  \begin{aligned}
  \dot b&=60,\\
  b&=60(t - 6).
  \end{aligned}
  \]
  At \(t = 8\),
  \[
  \begin{aligned}
  a&=\tfrac{5}{2}\cdot 64=160,\\
  \dot a&=40,\\
  b&=120,\\
  \dot b&=60.
  \end{aligned}
  \]
  Let \(c\) be the distance between the cars. The roads are perpendicular, so \(c^2 = a^2 + b^2\), and
  \[
  c = \sqrt{160^2 + 120^2} = 200.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \dot c = \frac{a\dot a + b\dot b}{c}.
  \]
  Substitute the known values:
  \[
  \dot c = \frac{160\cdot 40 + 120\cdot 60}{200} = \frac{13600}{200} = 68.
  \]
  The distance between the cars is increasing at \(68\) m/s.
provenance: handout-answer
steps:
  - a = (5/2) t^2 and b = 60 (t - 6), so at t = 8 a = 160, a' = 40, b = 120, b' = 60.
  - c = 200 and c' = (a a' + b b')/c.
  - c' = 13600/200 = 68 m/s, increasing.
verification:
  checks:
    - expr: (Rational(5, 2)*t**2).subs(t, 8)
      expected: 160
    - expr: diff(Rational(5, 2)*t**2, t).subs(t, 8)
      expected: 40
    - expr: (60*(t - 6)).subs(t, 8)
      expected: 120
    - expr: sqrt(160**2 + 120**2)
      expected: 200
    - expr: diff(sqrt((Rational(5, 2)*t**2)**2 + (60*(t - 6))**2), t).subs(t, 8)
      expected: 68
:::


::: exercise
id: l2-related-rates.handout-6-2-22
number: "6.2.22"
tier: standard
topics:
  - related-rates
statement: |
  Car A is \(10\) km north of \(P\) on a straight road and moving north at \(80\) km/h. Instead of a second car, an airplane is flying east, away from \(P\), at speed \(200\) km/h at an altitude of \(2\) km. At the instant of interest the airplane is \(15\) km east of \(P\), measured horizontally. How fast is the distance between the car and the airplane changing?
solution: |
  Use coordinates with \(P\) at the origin, the \(x\)-axis pointing east, the \(y\)-axis pointing north and the \(z\)-axis pointing up. The car is at \((0, a, 0)\), with \(a = 10\) and \(\dot a = 80\). The airplane is at \((b, 0, 2)\), with \(b = 15\) and \(\dot b = 200\). The altitude \(2\) is constant.

  Let \(d\) be the distance between them. Then
  \[
  d^2 = a^2 + b^2 + 2^2.
  \]
  At the instant of interest
  \[
  d = \sqrt{100 + 225 + 4} = \sqrt{329}.
  \]
  Differentiate both sides with respect to \(t\). The altitude is constant, so the term \(2^2\) has derivative \(0\):
  \[
  \begin{aligned}
  2d\dot d&=2a\dot a + 2b\dot b,\\
  \dot d&=\frac{a\dot a + b\dot b}{d}.
  \end{aligned}
  \]
  Substitute the known values:
  \[
  \dot d = \frac{10\cdot 80 + 15\cdot 200}{\sqrt{329}} = \frac{3800}{\sqrt{329}}.
  \]
  The distance is increasing at \(\dfrac{3800}{\sqrt{329}} \approx 209.5\) km/h.
provenance: handout-answer
steps:
  - d^2 = a^2 + b^2 + 4, with a = 10, b = 15, so d = sqrt(329).
  - The altitude is constant, so d' = (a a' + b b')/d.
  - d' = 3800/sqrt(329), about 209.5 km/h, increasing.
verification:
  checks:
    - expr: sqrt(10**2 + 15**2 + 2**2)
      expected: sqrt(329)
    - expr: (10*80 + 15*200)/sqrt(329)
      expected: 3800/sqrt(329)
    - expr: diff(sqrt((10 + 80*t)**2 + (15 + 200*t)**2 + 4), t).subs(t, 0)
      expected: 3800/sqrt(329)
    - expr: floor((3800/sqrt(329)).evalf()*10)
      expected: 2095
:::


::: exercise
id: l2-related-rates.handout-6-2-24
number: "6.2.24"
tier: standard
topics:
  - related-rates
statement: |
  A light shines from the top of a pole \(20\) m high. An object is dropped from the same height from a point \(10\) m away, so that its height at time \(t\) seconds is \(h(t) = 20 - \dfrac{9.8t^2}{2}\). How fast is the object's shadow moving on the ground one second later?
solution: |
  Let \(x\) be the distance from the pole to the shadow on the ground. The light is at height \(20\) and the object is \(10\) m from the pole at height \(h\). The light, the object and the shadow lie on one line. From the light, the line drops \(20 - h\) over a horizontal distance of \(10\), and it drops \(20\) over the horizontal distance \(x\). So
  \[
  \frac{20 - h}{10} = \frac{20}{x}, \qquad x = \frac{200}{20 - h}.
  \]
  Here \(20 - h = 4.9t^2\), and the known rate is \(\dot h = -9.8t\).

  Differentiate both sides with respect to \(t\), using the chain rule:
  \[
  \dot x = \frac{200}{(20 - h)^2}\,\dot h.
  \]
  At \(t = 1\), \(20 - h = 4.9\) and \(\dot h = -9.8\). Then
  \[
  \dot x = \frac{200\cdot(-9.8)}{4.9^2} = -\frac{1960}{24.01} = -\frac{4000}{49}.
  \]
  The shadow moves toward the pole at \(\dfrac{4000}{49} \approx 81.6\) m/s.
provenance: handout-answer
steps:
  - Similar triangles give x = 200/(20 - h), with 20 - h = 4.9 t^2.
  - dx/dt = 200 h' / (20 - h)^2, with h' = -9.8 t.
  - At t = 1, dx/dt = -4000/49 m/s, so the shadow moves toward the pole at about 81.6 m/s.
verification:
  checks:
    - expr: diff(200/(Rational(49, 10)*t**2), t).subs(t, 1)
      expected: -Rational(4000, 49)
    - expr: 200*(-Rational(98, 10))/Rational(49, 10)**2
      expected: -Rational(4000, 49)
:::


::: exercise
id: l2-related-rates.handout-6-2-25
number: "6.2.25"
tier: exam
topics:
  - related-rates
statement: |
  The two blades of a pair of scissors are fastened at the point \(A\). Let \(a\) denote the distance from \(A\) to the tip of the blade, the point \(B\). Let \(\beta\) denote the angle at the tip of the blade formed by the line \(AB\) and the bottom edge of the blade, the line \(BC\), and let \(\theta\) denote the angle at \(A\) between \(AB\) and the horizontal line \(AC\). The centre \(A\) is fixed, and the paper is fixed. As the blades close, \(\theta\) decreases, and the distance \(x\) between \(A\) and \(C\) increases, cutting the paper.

  (a) Express \(x\) in terms of \(a\), \(\theta\) and \(\beta\).

  (b) Express \(\dfrac{dx}{dt}\) in terms of \(a\), \(\theta\), \(\beta\) and \(\dfrac{d\theta}{dt}\).

  (c) Suppose \(a = 20\) cm, \(\beta = 5\) degrees, and \(\theta\) is decreasing at \(50\) deg/sec. At the instant when \(\theta = 30\) degrees, find the rate in cm/sec at which the paper is being cut.
solution: |
  (a) The points \(A\), \(B\), \(C\) form a triangle with the angle \(\theta\) at \(A\) and the angle \(\beta\) at \(B\). The angle at \(C\) is \(\pi - \theta - \beta\). The side \(AB = a\) is opposite the angle at \(C\), and the side \(AC = x\) is opposite the angle at \(B\). The law of sines gives
  \[
  \frac{x}{\sin\beta} = \frac{a}{\sin(\pi - \theta - \beta)} = \frac{a}{\sin(\theta + \beta)},
  \]
  so
  \[
  x = \frac{a\sin\beta}{\sin(\theta + \beta)}.
  \]

  (b) The letters \(a\) and \(\beta\) are constant. Differentiate both sides with respect to \(t\), using the chain rule on \(\sin(\theta + \beta)\):
  \[
  \begin{aligned}
  \frac{dx}{dt}&=-\frac{a\sin\beta\,\cos(\theta + \beta)}{\sin^2(\theta + \beta)}\,\frac{d\theta}{dt}.
  \end{aligned}
  \]

  (c) Convert the angle rate to radians:
  \[
  \frac{d\theta}{dt} = -50\cdot\frac{\pi}{180} = -\frac{5\pi}{18} \text{ rad/s}.
  \]
  At \(\theta = 30^\circ\), \(\theta + \beta = 35^\circ\). Then
  \[
  \begin{aligned}
  \frac{dx}{dt}&=\frac{20\sin 5^\circ\cos 35^\circ}{\sin^2 35^\circ}\cdot\frac{5\pi}{18}\\
  &=\frac{50\pi\sin 5^\circ\cos 35^\circ}{9\sin^2 35^\circ}\approx 3.79.
  \end{aligned}
  \]
  The rate is positive, so the paper is cut at about \(3.79\) cm/s.
provenance: handout-answer
steps:
  - Part (a) law of sines in triangle ABC gives x = a sin(beta) / sin(theta + beta).
  - Part (b) dx/dt = -a sin(beta) cos(theta + beta) / sin^2(theta + beta) times d theta/dt.
  - Part (c) with theta' = -5 pi/18 rad/s and theta + beta = 35 degrees, dx/dt is about 3.79 cm/s.
verification:
  checks:
    - expr: diff(a*sin(be)/sin(th + be), th)
      expected: -a*sin(be)*cos(th + be)/sin(th + be)**2
    - expr: simplify(expand_trig(a*cos(th) - a*sin(th)*cos(th + be)/sin(th + be)) - a*sin(be)/sin(th + be))
      expected: 0
    - expr: floor((diff(20*sin(5*pi/180)/sin(th + 5*pi/180), th).subs(th, 30*pi/180)*(-50*pi/180)).evalf()*100 + Rational(1, 2))
      expected: 379
:::
