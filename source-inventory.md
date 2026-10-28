# Source inventory for the interactive course app

Compiled 2026-10-08 by reading both course folders with 11 research subagents. Companion to `spec.md`. All source files stay where they are. Do not copy them into this project.

Course folder (A): your course folder (any location; see `sources.local.json`)
GoodNotes folder (B): your GoodNotes export folder (any location)

Course: Introduction to analysis and calculus in several dimensions, the course professor. Syllabus: lectures 1 and 2 review of algebra, calculus and curve sketching; 3 one-dimensional integration; 4 functions of several variables (midterm on lectures 1 to 3, 1 October 2026); 5 and 6 differentiability in several dimensions and optimisation; 7 and 8 integration of functions of several variables; 9 final exam. Evaluation: midterm 8 points, final 12 points (2 hours, December; this year 30 November 2026). Main reference: Whitman, Single and Multivariable Calculus. Lectures so far: 1 to 5. Lecture 6 on 15 October, 7 on 5 November, 8 on 12 November.

Practical notes for the agent reading these files: PDF text layers are poor or absent for handwriting and scans. PyMuPDF (`pymupdf`) is installed for Python 3.13 on this machine. Render pages to images and read them for handwriting. Do not read big files in the main context. Delegate to subagents and ask for compact reports.

## 1. The handout (most important written source)

File (B): `handout-selected.pdf`, 347 pages, a selection of Whitman/Guichard "Single and Multivariable Calculus, Early Transcendentals". It over-explains, has unneeded examples and goes too deep in places, so use it with caution.

Page mapping: from book page 5 through book page 195 (through section 9.1), the 1-based PDF page equals the printed book page. After that, struck-through sections were removed and PDF pages fall behind book pages. In chapter 12 the offset is book page = PDF page + 86; in chapters 14 and 15 it is book page = PDF page + 106.

the student's contents-page marks: red strike = skip, green highlight = marked keep.

Kept entirely: chapters 1 to 8, 12, 14, 15, appendix A (selected answers), appendix B (useful formulas), index. From chapter 9 keep only 9.1 (area between curves) and 9.8 (probability). From chapter 10 keep only 10.1 (polar coordinates) and 10.4 (parametric equations).

Struck: 9.2 to 9.7, 9.9, 9.10, 10.2, 10.3, 10.5, whole of chapters 11, 13, 16, 17.

Professor's study note (file (A): `Final-exam-study-guide.md`): for multiple integration read handout chapter 15 except 15.4 and only the beginning of 15.3 before Example 15.3.1. Practise derivability with 14.5 and 14.7, and multiple integration with 15.1; 15.2 items 1 to 6, 12 to 16 and 19; 15.5; 15.6 items 1 to 6, 10 and 11; 15.7. Some are harder than expected.

Approximate 1-based PDF page ranges of kept sections:

| Section | PDF pages |
|---|---|
| Ch. 1 to 5 (analytic geometry, derivative, rules, transcendental, curve sketching) | book pages 15 to 118 |
| 6.1 optimisation | 119 to 131 |
| 6.2 related rates | 131 to 139 |
| 6.3 Newton | 139 to 142 |
| 6.4 linear approximation | 143 to 145 |
| 6.5 mean value theorem | 145 to 148 |
| 7.1 to 7.3 integral, FTC, properties | 149 to 164 |
| 8.1 to 8.7 techniques of integration | 165 to 190 |
| 9.1 area between curves | 191 to 195 |
| 9.8 probability | about 195 to 205 |
| 10.1 polar, 10.4 parametric | about 206 to 212 |
| 12.1 to 12.4 coordinates, vectors, dot, cross | 213 to 230 |
| 12.5 lines and planes | 231 to 236 |
| 12.6 cylindrical and spherical | 237 to 242 |
| 14.1 functions of several variables | 243 to 246 |
| 14.2 limits and continuity | 247 to 250 |
| 14.3 partial differentiation | 251 to 257 |
| 14.4 chain rule | 258 to 260 |
| 14.5 directional derivatives | 260 to 265 |
| 14.6 higher-order derivatives | 265 to 267 |
| 14.7 maxima and minima | 267 to 272 |
| 14.8 Lagrange multipliers | 272 to 278 |
| 15.1 volume and average height | 279 to 288 |
| 15.2 double integrals in cylindrical (polar) coordinates | 289 to 293 |
| 15.3 moment and centre of mass | 293 to 296 |
| 15.4 surface area (skip) | 296 to 298 |
| 15.5 triple integrals | 298 to 301 |
| 15.6 cylindrical and spherical coordinates | 301 to 305 |
| 15.7 change of variables | 305 to 312 |
| Appendix A selected answers | 313 to 338 |
| Appendix B formulas | 339 to 341 |

Too deep for this course (put in going-deeper blocks): epsilon-delta proofs (2.3, 4.10, 14.2), the geometric proof of sin x / x, construction of e, hyperbolic functions (4.11), orthogonal trajectories (4.8 exercises 18 to 21), the 40-exercise chain-rule drill and 50-exercise L'Hopital drill, numerical integration error bounds, the Gaussian constant and defective-chips story (9.8), Definition 14.3.4 in epsilon form and the chain-rule proof, heat and wave equation checks (14.6), two Lagrange multipliers, 15.3 after the three mass formulas, 15.4, the tangent-vector derivation of the Jacobian.

Example 15.5.3 prints 1/16 as the factor in front of the double integral of xy after the z-integral on the cube. The factor is 1/4. The printed average, 1, is correct.

Answers: appendix A prints final answers (not worked solutions) for almost every exercise marked with a double arrow, including the assigned sets. Exercises without printed answers among the assigned ones: 14.5 items 17 and 21; 14.7 items 15 and 18; 15.1 items 29 and 31 to 33; 15.2 item 18 (and the lambda part of 19); 15.5 items 9, 15, 16; 15.7 item 9. Examples of printed answers: 14.5.1 = 9 sqrt(5)/5 (the unit-direction slope; the dot product with <2, 1> is 9); 14.7.14 = (3, 4/3); 15.1.1 = 16; 15.1.10 = (1 - cos 1)/4; 15.2.12 = (1 - cos 9) pi / 2; 15.6.3 = 5 pi / 4; 15.6.10 = pi k h^2 a^2 / 12; 15.7.8 = pi (1 - cos 1) / 24; 15.7.10 = (4/3) pi a b c.

Handout slips found while writing lecture 7 (teach the correct form; the printed final values are right). Example 15.1.3 prints an intermediate antiderivative of x sqrt(1 - x^2) without the minus. The definite value is 1/3, and the antiderivative is -1/3 (1 - x^2)^{3/2}. Example 15.2.2 prints a cramped primitive that fails to evaluate to 8 pi/3 - 32/9. That volume is correct, from the antiderivative (8/3)(theta + cos theta - (1/3) cos^3 theta) on [0, pi/2], doubled. Section 10.1 writes -sqrt(2) approximately 1.4142. The decimal needs the minus. Exercise 15.2.18c writes cos(5 theta) where the plotted curve is sin(5 theta).

## 2. Lecture notes and board photos (what the professor actually taught)

Handwritten GoodNotes exports in (B): `01 - Lecture Notes.pdf` (3 pages), `02 - Lecture Notes.pdf`, `03 - Lecture Notes.pdf`, `05-lecture Notes.pdf` (4 pages). No file for lecture 4. Lecture 4 board photos in (A): `lecture 4 (board 1).jpeg` to `(board 4).jpeg`, and `lecture 4 (partial).jpeg` (a handwritten notebook page, not the board). Lectures 6 to 8 come later.

Notation the professor uses: functions as x -> f(x) and f: R -> R, later f: R^n -> R; domain D(f); partials written df/dx, d_x f, f_x (no curly d seen); directional derivative df(x, y; u); gradient column vector; Hessian H_f with determinant D; Taylor increments delta x with "small" remainder; antiderivative written as an integral sign meaning a function.

Content by lecture:

- Lecture 1: unit circle and radians ("need to know" values at 0, pi/2, pi, -pi/2), sine graph, odd functions, ln and log rules, limits and continuity, limit of a sum with the +inf minus inf caution, x ln x -> 0 and x^r e^-x -> 0 (stated), derivative definition, tangent line, derivative table (x^n, x^rho, sin, cos, exp, ln, 1/u), sum, product, chain, quotient rules.
- Lecture 2: derivative of an inverse (boxed), curve-sketching checklist (critical points, sign of f', zeros, asymptotes), L'Hopital (stated at a point, 0/0 only), second-derivative test, Newton's method with quadratic error bound, IVT.
- Lecture 3: exercise 8 started ((x-1)^2 (x+3)^(2/3)), real powers x^a = e^(a ln x), Taylor with "small" remainder with the worked sqrt(1 + y) expansion then y = x^2, Riemann sum definition, antiderivative, FTC with example, integration by parts, probability density (normalisation, E(X), P(X > 2)), improper integrals with L, substitution with the worked int_0^1 sqrt(1 - y^2) via y = sin x.
- Lecture 4 (boards): chapter 2 functions of several variables, the graph z = f(x, y), planes z = ax + by + c, hyperboloid of two sheets z^2 = x^2 + y^2 + 1, hyperboloid of one sheet z^2 = x^2 + y^2 - 1 (needs x^2 + y^2 >= 1), cross sections by x = 0 (plane Oyz) and y = 0 (plane Oxz), level sets. The notebook photo adds paraboloid, sphere, cone, hyperbolic paraboloid and a recognition exercise (five equations to name).
- Lecture 5: limits and continuity in R^n via norms, partials as limits, tangent plane Z = f + (x - x0) f_x + (y - y0) f_y, directional derivative as the limit along a vector, theorem df(x, y; u) = a f_x + b f_y, gradient, chain rule h'(t) = gradient f(M(t)) dot M'(t), Clairaut check, Hessian, D = determinant, the test for min, max, saddle, inconclusive.

- Lecture 6 (`06 Lecture Notes.pdf`, 5 pages): implicit tangent plane, the sphere example, the family x^2 + y^2 + kxy, the quadratic 48x + 96y - x^2 - 2xy - 9y^2 (critical point (21,3)), optimisation on a rectangle, the box of volume 1/2, and the Euler-Lagrange theorem. Slips in the notes, taught in corrected form: the quadratic line "16x = 332" should be 16x = 336; the rectangle rule writes D(x*) < 0 for a maximum where D > 0 with f_xx < 0 is meant; the family sketch labels k = -1 where k = -2 is meant; the theorem's last term drops the gradient sign on G_N; the theorem says "minimizes" although the condition is necessary for any extremum; the multiplier sign differs between page 4 (plus) and page 5 (equals lambda grad G).

Errors inked in the notes (teach the correct form): the reciprocal derivative is written with -u in the numerator, correct is -u'/u^2; the real-power line writes f(x) = p x^{p-1}, and the derivative is f'(x) = p x^{p-1}; lecture 1 spells continuous as continous and radians as Radiants; the second-derivative rule equates inflection with f'' = 0 (it needs a sign change); the lecture 3 start of exercise 8 writes (x^{2/3})^3 = x, and the correct identity for the square of the real cube root is (x^{2/3})^3 = x^2; the sqrt(1 - y^2) example writes the antiderivative of cos(2x)/2 as sin(2x)/4 and the value as pi/4 (a handwritten 4 is easy to read as y); the Hessian test is written with f_xx >= 0 or <= 0 and no D > 0 on the min and max lines (correct: D > 0 and f_xx > 0 min, D > 0 and f_xx < 0 max, D < 0 saddle, D = 0 inconclusive). Lecture 3, page 4, calls f a density when the integral from 0 to infinity equals 1. The condition f(x) >= 0 is absent, and E(x) is written only from 0 to infinity. The handout requires f(x) >= 0 and the integral over the whole line. The same page replaces an infinite endpoint by L and then sends L to plus infinity, including a lower endpoint of minus infinity. The lower cutoff is sent to minus infinity. Handout example 8.6.4 prints the fourth derivative of e^{-x^2} as (16x^2 - 48x^2 + 12) e^{-x^2}. The leading power is 4. On [0, 1] the correct derivative is still bounded by 12. Lecture 5 also rewrites the x-partial along e_x as f((x+y)+eps(1,0)), correct is f((x,y)+eps(1,0)), and calls t |-> (t^2, t^4) the same curve as (t, t^2). For real t the first path only covers x >= 0.

Lecture 4 slips, taught in corrected form: board 1 draws the paraboloid \(z = x^2 + y^2\) with the bowl's axis labeled \(x\) and \(z\) down-left (the bowl opens along the vertical \(z\)-axis); board 3 writes the one-sheet surface as the chain \(0 \le z^2 = x^2 + y^2 - 1\) (the equation is \(z^2 = x^2 + y^2 - 1\), and real points need \(x^2 + y^2 \ge 1\)); the notebook writes the cut \(y = 0\) as the point \((0, x, z)\) (the point is \((x, 0, z)\)); the notebook writes a cross section with a slash that reads as the quotient \(F/g = F\) (the heights are equal); handout example 12.5.6 displays the point-to-plane distance without the absolute value (the distance is the absolute value of the scalar projection).

## 3. Exercise sheets

All without printed solutions except where noted.

- (A) `exercise sheet 2.pdf`: 19 exercises, chapter 2 differentiability in 2D. Exercise 3.4 is printed as f(x) = sqrt(1 - x^2 - y^2); the function is f(x, y). Exercise 5 gives no point and no direction, and it skips item 3. Contour map, quadric surfaces and level sets, partials and domain, tangent planes (implicit and explicit, cone planes pass through the origin), directional derivative and steepest ascent, chain rule along four paths, six critical-point classifications, x^2 + y^2 + kxy, x^3 - 3x^2 y + y^3 (D = 0, sections y = kx), golf-ball profit, Cobb-Douglas watches, lactating mammal model, box of volume 1/2 and box in x^4 + y^4 + z^2 <= 1, aircraft fuel, portfolio, three numbers summing to 27, xyz = 1 closest to origin, aircraft design (nested optimisation), cycling time trial. Exercises 12 to 19 are long modelling problems (difficulty 4 to 5).
- (A) `A&C Past Exams\Exo3.pdf`: same chapter, exercises 1 to 9 as sheet 2, then only the three clean constrained problems (its exercises 10 to 12 are sheet 2 exercises 13, 16 and 17).
- (A) `exercise sheet 3 - multiple integration.pdf` and `A&C Past Exams\Exo4 (1).pdf`: identical five exercises. Fifteen iterated integrals (items 9 to 15 need a change of order or a substitution), two averages, six volumes, five changes of variables, three triple integrals.
- (A) `A&C Past Exams\Exo0.pdf`: trig equations, exp and log algebra, nine limit questions.
- (A) `A&C Past Exams\Exo1.pdf`: standard graphs, derivative from a graph, differentiation drill, tangents, eight full curve discussions, IVT root of x^3 + 3x^2 + x - 2, Taylor order 2, three 1D word problems (price and profit, box with length plus girth at most 108, position).
- (A) `functions-and-graphs.pdf`: University of Sydney booklet (Nicholas, Hunter, Hargreaves, 1999), 29 pages cut off mid section 2.11: domain, range, transformations, even and odd. Its numbered exercise sets have no solutions. On PDF page 15 a right shift by 2 of the point (1, 1) is drawn to (3, 1) and labeled (1, 3). The shifted point is (3, 1).
- (A) `class 1 - exercise corrections.pdf`: two pages of a three-page handwritten correction of the first derivatives (power, chain, quotient), cut off in the quotient-rule proof.

## 4. Past exams

Typed text where possible. Several are photo scans or handwritten keys.

Unique finals (folder (A) `A&C Past Exams\Final\` unless noted). Duplicates, byte-identical: `AN_Final Exam 2021 (questions).pdf` = `Final Exam 2021 (questions).pdf`; `AN_Mock Exam 2022 (questions).pdf` = `Mock Exam 2022 (questions).pdf`; `AN_MockExam1.pdf` = `MockExam1.pdf` = (A) `Final-MockExam1.pdf`; `AN_MockExam2.pdf` = `MockExam2.pdf`.

- Final 2021 (3 h, 22 pts, 10 questions): questions plus a blue-ink answer scan (`Final Exam 2021 (answers).pdf`, headings renumbered) plus a student ink scan (`... detailled answers until question 8.pdf`, scrambled text). Contains Green, potentials, arc length, gamma likelihood: not core.
- Final 2022 (3 h, 18 pts): `Final Exam 2022 (questions + solutions).pdf`. Contains steepest descent, tangent plane, chain rule, D = 0 classification, circle of critical points (x^2 + y^2 - 1)^2, average on a triangle, probability, volume with Taylor limit. The handwritten average-value line (2 - 2 sin 2) is wrong; the integral is 2 sin 1 - sin 2.
- Retake January 2023 (`AN_RETAKE_ANALYSIS-23.pdf`, 2 h, 20 pts, no key): tangent plane at a general point then parallel planes, two classifications, polar integral, linear change of variables, box in x^4 + y^4 + z^2 <= 1, volume between a paraboloid and a cone.
- Final 6 December 2024 (`AN_Exam24.pdf`, 2 h, 20 pts, no key) and Final 12 December 2025 (`AN_Exam25.pdf`, photo scan, no text layer, no key): the current format (below).
- Mock 2022 (`Mock Exam 2022 (questions).pdf` and a separate `Mock Exam 2022 (solutions).pdf` that is a different edition with changed constants), Mock exam 1 (no key), Mock exam 2 (Final 2022 without the probability exercise and without exercise 3c, the Jacobian of N; its exercise 3.1 adds an a = b prompt and its exercise 4 hint differs, so it is mapped as its own paper).
- Home assignment 2022 (folder `Home assignement`, questions and a 13-page handwritten solution): guided derivation of the Hessian test including D = 0, four polynomials, box, x^2 + y^2 + kxy, x^3 - 3x^2 y + y^3, distance to z = x^2 + y^2, aircraft fuel, profit with bounds.

Current final format (2024 and 2025 identical in structure; 120 minutes, 20 points, one handwritten sheet, no electronics):

1. Level sets of an implicit surface, then tangent plane at a point (2 pts, 15 min).
2. One chain-rule question along a path (1 pt, 7 min).
3. Two functions: critical points and classification, including a D = 0 case where a section is hinted (4 pts, 20 min).
4. Four double integrals: a rectangle, a triangle in the first quadrant, a disk or sector in polar coordinates, a substitution given in the hint (6 to 7 pts, 35 to 38 min).
5. A worded constrained optimisation, with the boundary required (3 to 4 pts, 20 to 23 min). 2024: aircraft fuel and height. 2025: portfolio on a triangle with a cubic loss, rough comparison on the boundary allowed.
6. A solid between two surfaces with a sketch of a cut: sphere and cone in 2024 (compute), plane and paraboloid in 2025 (setup only, split the shadow) (3 pts, 20 min).

Frequency over the two recent finals (share of 40 points): double integrals 32.5%, critical points 20%, constrained optimisation 17.5%, triple integrals and volumes 15%, level sets 5%, tangent plane 5%, chain rule 5%. Standalone 1D integration or sketching: 0%. Limits and continuity in R^2, differentiability definition, partials as a standalone question: never examined. Hints are heavy: sections y = 0 for D = 0, the named substitution, derivative of tan or arctan, cut by a coordinate plane. Changing the order of integration is never its own exercise; it appears as splitting the shadow in two regions.

Midterms (folder (A) `A&C Past Exams\Midterm\`, plus (A) root files). Duplicates: `MidtermMock1.pdf` = `AN_MidtermMock01-Q.pdf`; `MidtermMockexam - hard.pdf` = `MidtermMockexam (1).pdf` = `MidtermMockexam (1) (1).pdf` = `AN_MidtermMock02-Q.pdf` (the 2022 midterm with its header stripped); `AN_MidtermMock02-A.pdf` = `MidTerm 2022 (solutions).pdf`. Unique papers: Mock 1 (with key `AN_MidtermMock01-A.pdf`), 2021 (8 October, contour and cut questions, different style), 2022 (7 October, key), 2024 (10 October, photo, no key), 2025 (3 October, handwritten key `AN_MidtermExam 2025-A.pdf`, which has three errors), 2026 (1 October, official typeset key `Midterm26 - official answers.pdf`).

Midterm template 2024 to 2026 (90 minutes, 20 points, two-page handwritten sheet, no calculator): a 6-point sketch of two or three functions (radical, rational, polynomial; domain first, derivative, sign chart, asymptotes, intercepts, inflection if asked), Newton for an nth root without calculator (2 to 3 pts, with an error sentence), a Taylor or limit exercise sometimes, a worded 1D optimisation (3 to 5 pts), an integral set of five to seven items with the method named, one possibly improper or divergent. Partial fractions: never asked. Midterm 2026: sketch of x / sqrt(x^2 - 1) and (x^2 + x - 1)/(x - 3); Newton for the cube root of 9 from x0 = 2 (x1 = 25/12); plane drag with sqrt(x^2 + 1) ~ x; two shares with L(x) = -x^2 + 18x + 20 (minimum 20 at x = 0); five integrals including t ln^2 t by parts, area between x and sin x, and x = sinh t giving argsinh 1. The 2026 key's drag solution writes an intermediate quadratic with V_s/2. That quadratic does not have the speed that uses the stated power. The boxed formula is the correct one, from v^2 - (p + V_s)v + p V_s - 1 = 0.

## 5. Formula sheets and cheat sheets (all one-variable only)

(A) `midterm-cheatsheet.tex`, `cheatsheet page 1.jpeg`, `cheatsheet page 2.jpeg`, `cheatsheet marco.jpeg` (a classmate's, Italian notes), `formula sheet final page 1.jpeg`, `formula sheet final page 2.jpeg` (a handwritten expansion of the tex), (B) `Formula Sheet.pdf` (a mostly empty draft checklist). They cover trig, logs, derivatives, Newton, Taylor series, curve sketching, limits, integrals and techniques, densities. They contain nothing on partials, gradient, Hessian, Lagrange or multiple integrals. The final exam allows one handwritten sheet, so these are an input for the formula-sheet builder, not a finished sheet.

## 6. the student's annotated work (weak spots)

Files in (B): `Exercise Review of calculus.pdf` (14 pages of worked solutions, the only substantial one), `exercise sheet 2 - multivariate calculus.pdf` (only quadric level sets attempted), `Handout Exercises.pdf` (two linear models), `Fundamentals Of Calculus.pdf` (limit rules page and a pasted flowchart), `Midterm Mock Practice.pdf` (18 MB, practice notebook) and `MidTerm 2021 (questions).pdf` (annotated).

Correct and solid: exp and log rules, standard derivatives with the chain, product and quotient rules, tangent lines and horizontal tangents, sign charts for polynomials, IVT to locate a root, two rounds of L'Hopital.

Weak spots: sign slips (derivative of -1/x written with a minus sign; (0.999 - 1)^2 treated as negative so 1/(x - 1)^2 is sent to minus infinity; the antiderivative of -ln x written -x ln x - x; a line intercept sign); right answer with an invalid reason (x sin(1/x) "because x makes everything zero", x^r e^-x "basically zero", x ln x reduced to 0 times L without finding L); radical domains (sqrt(x^2 + 3x + 1) domain written as R), union versus intersection (written with a cap for two disjoint intervals), x-intercept called y-intercept, endpoint minima missed (sqrt(x^2 - 1) minima at +-1), period errors (sin(3x), tan^2 x), inflection labels on extrema, sinh and cosh swapped, derivative from a graph not done; unfinished Newton (stopped at 0.7 instead of one decimal; no error sentence), Taylor composition (ln(cos x) never substituted u = cos x - 1), expectation and P(X > 2) set up and abandoned, word problems and Taylor order 2 blank; the multivariable material from partials onwards is untouched.

## 7. Existing revision apps (harvest, do not build on)

All in (A), single HTML files, one-variable only, no 3D graphics, three exam-date mechanisms, two visual styles.

- `calculus-midterm-app.html` (210 KB, plain JS, no libraries, Unicode math, localStorage): 116 multiple-choice questions in 10 sections with explanations, 6 written papers with hints and solutions (Midterm 2025, 2024, 2022, Mock 1, two predicted papers), 83 flashcards in 5 decks, long revision notes. A countdown and some unused template code are stale.
- `curves-revision.html` (63 KB, MathJax): 12 worked curve discussions with sources and hand-drawn SVGs, an eight-step write-up order, 12 short drills, a 10-item checklist. Functions: sqrt(1 - x^2), sqrt(x^2 - 1), sqrt(x^2 + 3x + 1), (sqrt x + 1)/x, x^2/(x^2 + 9), x - 3 sqrt x + 1, x^4 - 4x^2 + 1, x^3 - 3x^2 - 9x + 5, (1 - x^2)^(1/4), tan^2 x, x^(1/4) ln x, (x - 1)/ln x.
- `integrals-revision.html` (131 KB, MathJax, localStorage): 140 graded exercises in 13 categories (tiers 1 to 3), theory sections, a method finder, a timed mock, a Riemann-sum slider. Its data block (`BANK`, `CATS`) loads under Node. The numeric expression grader is not wanted (the new app has no answer checking), but the exercise records, solutions and hints are good raw material.
- `Review of Trigonometric, Logarithmic, and Exponential Functions - HMC Calculus Tutorial.html`: a saved static page (trig, radians, standard values, graphs, exp and log). Useful as a topic list only.
- Quality caveat: the apps' own claims that answers were re-derived were not checked. Re-verify everything harvested.
- Known errors, recorded 2026-10-09 while harvesting the midterm app and the curves page. Midterm app: question 5 is tick-all, with three correct identities; question 7's shift of sin x by pi is the same curve as -sin x; question 34 names n! and the Gamma function without restricting n to a non-negative integer; question 49 calls the third Newton iterate exact to machine precision, and the error is about 10^{-12}; question 58 depends on a graph; question 60 lists the sketch checklist out of exam order; question 63 says closed region where the one-variable statement is a closed interval. Curves page: the derivative of sqrt(x^2 - 1) is undefined at x = 1 and positive for x > 1; tan(x + pi) equals tan(x), so the period of tan^2 x holds before squaring; a second derivative of 0 is an inflection only when that derivative changes sign.

## 8. Technical state of this machine

Node 22.14 is installed. Python 3.13 is at `C:\Python313\python.exe` with PyMuPDF and Pillow; SymPy is not installed. Windows, PowerShell. The project folder was empty and not a git repository when this was written.

## 9. Style rules for all site text (from the student's copywriting rules)

No em dashes (use a period and a short sentence, or a comma). Do not force lists of three. No "not this, but that" polish unless the student wrote it. No completeness filler. Cleanup of his own wording is typos and grammar only. The sample node is approved by the student before bulk content is written.
