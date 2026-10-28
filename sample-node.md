# Sample node: Hessian test (two variables)

Approved by the project owner as a sample. It is inspiration for how the site should read and look: the tone, the level of explanation, how a trap is written, how an example is used as evidence. It is not a template. No text has to follow it exactly, and its content must not be copied as the real node. Real content is written from the course sources, with their notation, statements and examples. The "Content writing rules" in `spec.md` do apply to everything written.

A finished node also carries source links, a critical-point viewer with a parameter slider (x^2 + y^2 + kxy), a worked example, a guided example, 3 to 5 trap questions, a three-tier exercise ladder with solutions, about 10 flashcards and sheet items. The shape of a node stays flexible per topic.

---

**Course statement.** Let \((x_0, y_0)\) be a critical point of \(f\), so \(\nabla f(x_0, y_0) = 0\), and put \(D(x_0, y_0) = \det H_f(x_0, y_0) = f_{xx} f_{yy} - (f_{xy})^2\). If \(D > 0\) and \(f_{xx} > 0\), then \((x_0, y_0)\) is a local minimum. If \(D > 0\) and \(f_{xx} < 0\), it is a local maximum. If \(D < 0\), it is a saddle point. If \(D = 0\), the test says nothing and further calculation is needed.

**Plain version.** \(D > 0\) means the surface bends the same way in every direction, and the sign of \(f_{xx}\) tells you whether it bends up (bowl) or down (dome). \(D < 0\) means it bends up in one direction and down in another, like a saddle. \(D = 0\) means the test is blind, so look at \(f\) itself along a line through the point, such as \(y = 0\).

**Trap.** The sign of \(f_{xx}\) decides between minimum and maximum only after \(D > 0\) has been checked. Take \(f(x, y) = x^2 - y^2\), which has a critical point at the origin. There \(f_{xx} = 2\), \(f_{yy} = -2\) and \(f_{xy} = 0\), so \(D = 2 \cdot (-2) - 0^2 = -4\). The positive \(f_{xx}\) would point to a minimum, yet \(D\) is negative, so the origin is a saddle point. This matches the graph: \(f(x, 0) = x^2\) is positive along the x-axis and \(f(0, y) = -y^2\) is negative along the y-axis.

**When \(D = 0\).** \(f = x^3 + y^2\) has its only critical point at \((0, 0)\) with \(D = 0\). Along \(y = 0\) it equals \(x^3\), which is positive for \(x > 0\) and negative for \(x < 0\), so the point is neither a minimum nor a maximum.
