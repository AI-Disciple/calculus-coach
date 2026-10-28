import { describe, expect, test } from 'vitest';
import { runVerifier, type VerificationResult } from '../src/content/verifier.ts';
import { makeCurve, parse, realPow, compile } from '../src/visuals/expression.ts';
import {
  LAYERS,
  analyseCurve,
  fmt,
  infinityReading,
  integralValue,
  layerLines,
  limitReading,
  newtonReading,
  riemannReading,
  taylorCoefficients,
  taylorReading,
  visualParamProblem,
  zeros,
} from '../src/visuals/onevar.ts';

function expectVerified(results: VerificationResult[]) {
  const failed = results.filter((result) => !result.ok).map((result) => `${result.id}: ${result.message}`);
  expect(failed).toEqual([]);
}

/** A displayed number as SymPy text: "3 pi/2" becomes "3*pi/2". */
function sym(value: number): string {
  return fmt(value).replace(/(\d) pi/, '$1*pi').replace(/^(-?)pi/, '$1pi');
}

describe('expression language', () => {
  test('reads implicit multiplication, powers and constants', () => {
    expect(compile(parse('2x^2 + 3(x+1)'))(2)).toBe(17);
    expect(compile(parse('(x+1)(x-1)'))(3)).toBe(8);
    expect(compile(parse('-x^2'))(3)).toBe(-9);
    expect(compile(parse('2^-x'))(1)).toBe(0.5);
    expect(compile(parse('e^x'))(0)).toBe(1);
    expect(compile(parse('sin(pi/2)'))(0)).toBeCloseTo(1, 12);
    expect(compile(parse('x**2'))(4)).toBe(16);
  });

  test('uses real powers', () => {
    expect(realPow(-8, 1 / 3)).toBeCloseTo(-2, 12);
    expect(compile(parse('x^(2/3)'))(-8)).toBeCloseTo(4, 12);
    expect(Number.isNaN(compile(parse('x^(1/2)'))(-4))).toBe(true);
    expect(Number.isNaN(compile(parse('sqrt(x)'))(-4))).toBe(true);
    expect(Number.isNaN(compile(parse('1/x'))(0))).toBe(true);
    expect(Number.isNaN(compile(parse('ln(x)'))(0))).toBe(true);
  });

  test('refuses what it cannot read', () => {
    expect(() => parse('')).toThrow();
    expect(() => parse('x +')).toThrow();
    expect(() => parse('sin x')).toThrow();
    expect(() => parse('y + 1')).toThrow();
    expect(() => parse('(x')).toThrow();
    expect(() => parse('x $ 2')).toThrow();
  });

  test('derivatives agree with SymPy at a point', async () => {
    const cases: { f: string; sympy: string; at: number; exact: string }[] = [
      { f: 'x^2/(x-1)', sympy: 'x**2/(x-1)', at: 3, exact: '3/4' },
      { f: 'sqrt(4-x^2)', sympy: 'sqrt(4-x**2)', at: 1, exact: '-sqrt(3)/3' },
      { f: 'x*exp(-x)', sympy: 'x*exp(-x)', at: 2, exact: '-exp(-2)' },
      { f: 'ln(cos(x))', sympy: 'log(cos(x))', at: 1, exact: '-tan(1)' },
      { f: 'x^x', sympy: 'x**x', at: 2, exact: '4 + 4*log(2)' },
      { f: 'atan(x^2)', sympy: 'atan(x**2)', at: 1, exact: '1' },
    ];
    const results = await runVerifier(
      cases.map((c) => ({ id: `d-${c.f}`, checks: [{ expr: `diff(${c.sympy}, x).subs(x, ${c.at})`, expected: c.exact }] })),
    );
    expectVerified(results);
    const numeric = [3 / 4, -Math.sqrt(3) / 3, -Math.exp(-2), -Math.tan(1), 4 + 4 * Math.log(2), 1];
    cases.forEach((c, i) => expect(makeCurve(c.f).d1(c.at)).toBeCloseTo(numeric[i], 10));
  });

  test('second derivatives agree with SymPy', async () => {
    const results = await runVerifier([
      {
        id: 'second-derivative',
        checks: [
          { expr: 'diff(x**2/(x-1), x, 2)', expected: '2/(x-1)**3' },
          { expr: 'diff(x**Rational(5,3) - 5*x**Rational(2,3), x, 2)', expected: 'Rational(10,9)*x**Rational(-4,3)*(x+1)' },
        ],
      },
    ]);
    expectVerified(results);
    expect(makeCurve('x^2/(x-1)').d2(3)).toBeCloseTo(2 / 8, 10);
    expect(makeCurve('x^(5/3) - 5x^(2/3)').d2(-8)).toBeCloseTo((10 / 9) * Math.pow(16, -1) * -7 * 1, 6);
  });
});

describe('zeros', () => {
  test('finds crossings and touching zeros but not poles', () => {
    expect(zeros((x) => x * x * (x - 2), -5, 5)).toEqual([0, 2]);
    expect(zeros((x) => 1 / x, -5, 5)).toEqual([]);
    expect(zeros((x) => Math.exp(-x * x), -30, 30)).toEqual([]);
  });
});

describe('curve analysis on x^2/(x - 1)', () => {
  const a = analyseCurve(makeCurve('x^2/(x-1)'));

  test('reads the features the exam asks for', () => {
    expect(a.domain).toEqual([
      { lo: -Infinity, hi: 1, loClosed: false, hiClosed: false },
      { lo: 1, hi: Infinity, loClosed: false, hiClosed: false },
    ]);
    expect(a.roots).toEqual([0]);
    expect(a.yIntercept).toEqual({ x: 0, y: 0 });
    expect(a.verticalAsymptotes).toHaveLength(1);
    expect(a.verticalAsymptotes[0].x).toBe(1);
    expect(a.verticalAsymptotes[0].left).toEqual({ kind: 'infinite', sign: -1 });
    expect(a.verticalAsymptotes[0].right).toEqual({ kind: 'infinite', sign: 1 });
    expect(a.ends.map((e) => e.asymptote)).toEqual([
      { kind: 'oblique', m: 1, b: 1 },
      { kind: 'oblique', m: 1, b: 1 },
    ]);
    expect(a.extrema.map((e) => [e.x, e.y, e.kind])).toEqual([
      [0, 0, 'max'],
      [2, 4, 'min'],
    ]);
    expect(a.inflections).toEqual([]);
    expect(a.slopeSigns.map((p) => p.sign)).toEqual([1, -1, -1, 1]);
    expect(a.curvatureSigns.map((p) => p.sign)).toEqual([-1, 1]);
  });

  test('every displayed value matches SymPy', async () => {
    const [first, second] = a.extrema;
    const results = await runVerifier([
      { id: 'critical-points', checks: [{ expr: 'FiniteSet(*solve(diff(x**2/(x-1), x), x))', expected: `FiniteSet(${sym(first.x)}, ${sym(second.x)})` }] },
      {
        id: 'critical-values',
        checks: [
          { expr: '(x**2/(x-1)).subs(x, 0)', expected: sym(first.y) },
          { expr: '(x**2/(x-1)).subs(x, 2)', expected: sym(second.y) },
        ],
      },
      { id: 'domain', checks: [{ expr: 'Reals - FiniteSet(1)', expected: 'Union(Interval.open(-oo, 1), Interval.open(1, oo))' }] },
      {
        id: 'asymptotes',
        checks: [
          { expr: "sign(limit(x**2/(x-1), x, 1, '-'))", expected: '-1' },
          { expr: "sign(limit(x**2/(x-1), x, 1, '+'))", expected: '1' },
          { expr: 'limit(x**2/(x-1)/x, x, oo)', expected: '1' },
          { expr: 'limit(x**2/(x-1) - x, x, oo)', expected: '1' },
          { expr: 'limit(x**2/(x-1)/x, x, -oo)', expected: '1' },
          { expr: 'limit(x**2/(x-1) - x, x, -oo)', expected: '1' },
        ],
      },
    ]);
    expectVerified(results);
  });

  test('writes the layer sentences', () => {
    expect(layerLines(a, 'domain')).toEqual(['Domain: (-∞, 1) ∪ (1, ∞).']);
    expect(layerLines(a, 'intercepts')).toEqual(['y-intercept: (0, 0).', 'x-intercepts: x = 0.']);
    expect(layerLines(a, 'vertical')).toEqual(['Vertical asymptote x = 1 (f → -∞ from the left, f → +∞ from the right).']);
    expect(layerLines(a, 'end-behaviour')).toEqual([
      'Oblique asymptote y = x + 1 as x → -∞.',
      'Oblique asymptote y = x + 1 as x → ∞.',
    ]);
    expect(layerLines(a, 'holes')).toEqual(['No holes.']);
    expect(layerLines(a, 'slope-sign')).toEqual(["f' > 0 on (-∞, 0) and (2, ∞); f' < 0 on (0, 1) and (1, 2)."]);
    expect(layerLines(a, 'extrema')).toEqual(['Local maximum at x = 0, f(0) = 0.', 'Local minimum at x = 2, f(2) = 4.']);
    expect(layerLines(a, 'curvature-sign')).toEqual(["f'' > 0 on (1, ∞); f'' < 0 on (-∞, 1)."]);
    expect(layerLines(a, 'inflection')).toEqual(['No inflection points.']);
    expect(LAYERS).toHaveLength(9);
  });
});

describe('weak spots from the midterm template', () => {
  test('radical domain with endpoint extrema', async () => {
    const a = analyseCurve(makeCurve('sqrt(4-x^2)'));
    expect(a.domain).toEqual([{ lo: -2, hi: 2, loClosed: true, hiClosed: true }]);
    expect(a.extrema.map((e) => [e.x, e.y, e.kind, e.where])).toEqual([
      [-2, 0, 'min', 'endpoint'],
      [0, 2, 'max', 'zero'],
      [2, 0, 'min', 'endpoint'],
    ]);
    expect(layerLines(a, 'domain')).toEqual(['Domain: [-2, 2].']);
    expectVerified(
      await runVerifier([
        { id: 'radical-domain', checks: [{ expr: 'solveset(4 - x**2 >= 0, x, Reals)', expected: 'Interval(-2, 2)' }] },
        { id: 'radical-max', checks: [{ expr: 'sqrt(4 - x**2).subs(x, 0)', expected: '2' }] },
      ]),
    );
  });

  test('f\' = 0 without a sign change is not an extremum', () => {
    const a = analyseCurve(makeCurve('x^3'));
    expect(a.extrema).toEqual([]);
    expect(a.flatPoints).toEqual([{ x: 0, y: 0 }]);
    expect(a.inflections).toEqual([{ x: 0, y: 0 }]);
    expect(layerLines(a, 'extrema')).toContain("f'(0) = 0, but f' does not change sign, so x = 0 is not an extremum.");
  });

  test('f\'\' = 0 without a sign change is not an inflection point', () => {
    const a = analyseCurve(makeCurve('x^4'));
    expect(a.inflections).toEqual([]);
    expect(a.notInflections).toEqual([{ x: 0, y: 0 }]);
    expect(a.extrema.map((e) => [e.x, e.kind])).toEqual([[0, 'min']]);
    expect(layerLines(a, 'inflection')).toContain("f''(0) = 0, but f'' does not change sign, so x = 0 is not an inflection point.");
  });

  test('extreme values on a closed interval use the endpoints', async () => {
    const a = analyseCurve(makeCurve('x^3-3x'), { restrict: [-2, 3] });
    expect(a.domain).toEqual([{ lo: -2, hi: 3, loClosed: true, hiClosed: true }]);
    expect(a.absolute?.max).toEqual({ x: 3, y: 18 });
    expect(a.absolute?.min.y).toBe(-2);
    expect(layerLines(a, 'extrema').at(-1)).toMatch(/^On \[-2, 3\]: absolute maximum f\(3\) = 18, absolute minimum f\(-?\d+\) = -2\.$/);
    expectVerified(
      await runVerifier([
        {
          id: 'closed-interval',
          checks: [
            {
              expr: 'Max((x**3-3*x).subs(x,-2), (x**3-3*x).subs(x,-1), (x**3-3*x).subs(x,1), (x**3-3*x).subs(x,3))',
              expected: String(a.absolute?.max.y),
            },
            {
              expr: 'Min((x**3-3*x).subs(x,-2), (x**3-3*x).subs(x,-1), (x**3-3*x).subs(x,1), (x**3-3*x).subs(x,3))',
              expected: String(a.absolute?.min.y),
            },
          ],
        },
      ]),
    );
  });

  test('a cusp has no derivative and an inflection with f\'\' undefined', async () => {
    const a = analyseCurve(makeCurve('x^(2/3)*(x-5)'));
    expect(a.extrema.map((e) => [e.x, e.kind, e.where])).toEqual([
      [0, 'max', 'undefined'],
      [2, 'min', 'zero'],
    ]);
    expect(a.extrema[1].y).toBeCloseTo(-3 * Math.cbrt(4), 10);
    expect(a.inflections.map((p) => p.x)).toEqual([-1]);
    expectVerified(
      await runVerifier([
        {
          id: 'cusp',
          checks: [
            { expr: 'diff(x**Rational(2,3)*(x-5), x).subs(x, 2)', expected: '0' },
            { expr: '(x**Rational(2,3)*(x-5)).subs(x, 2)', expected: '-3*2**Rational(2,3)' },
            { expr: 'diff(x**Rational(5,3) - 5*x**Rational(2,3), x, 2).subs(x, -1)', expected: '0' },
          ],
        },
      ]),
    );
  });

  test('a removable hole is not an asymptote and the noise next to it is ignored', async () => {
    const a = analyseCurve(makeCurve('(x^2-1)/(x-1)'));
    expect(a.holes).toEqual([{ x: 1, y: 2 }]);
    expect(a.verticalAsymptotes).toEqual([]);
    expect(a.inflections).toEqual([]);
    expect(a.notInflections).toEqual([]);
    expect(layerLines(a, 'holes')).toEqual(['Hole at (1, 2): f is not defined at x = 1, but f(x) → 2 on both sides.']);
    expectVerified(await runVerifier([{ id: 'hole', checks: [{ expr: 'limit((x**2-1)/(x-1), x, 1)', expected: '2' }] }]));
  });

  test('ln has a vertical asymptote and a domain with an open end', async () => {
    const a = analyseCurve(makeCurve('ln(x)'));
    expect(a.domain).toEqual([{ lo: 0, hi: Infinity, loClosed: false, hiClosed: false }]);
    expect(a.verticalAsymptotes[0].left).toEqual({ kind: 'none' });
    expect(a.verticalAsymptotes[0].right).toEqual({ kind: 'infinite', sign: -1 });
    expectVerified(await runVerifier([{ id: 'ln', checks: [{ expr: "sign(limit(log(x), x, 0, '+'))", expected: '-1' }] }]));
  });

  test('two inflection points at sqrt(2)/2 for the bell curve', async () => {
    const a = analyseCurve(makeCurve('exp(-x^2)'));
    expect(a.inflections.map((p) => fmt(p.x))).toEqual(['-sqrt(2)/2', 'sqrt(2)/2']);
    expect(a.ends.map((e) => e.asymptote)).toEqual([
      { kind: 'horizontal', y: 0 },
      { kind: 'horizontal', y: 0 },
    ]);
    expectVerified(
      await runVerifier([
        {
          id: 'bell',
          checks: [
            { expr: 'FiniteSet(*solve(diff(exp(-x**2), x, 2), x))', expected: 'FiniteSet(-sqrt(2)/2, sqrt(2)/2)' },
            { expr: 'limit(exp(-x**2), x, oo)', expected: '0' },
          ],
        },
      ]),
    );
  });
});

describe('limit readings', () => {
  test('sin(x)/x has a hole with limit 1', async () => {
    const r = limitReading(makeCurve('sin(x)/x'), 0);
    expect(r.twoSided).toEqual({ kind: 'finite', value: 1 });
    expect(r.text).toBe('f(x) → 1 as x → 0. f(0) is not defined, so the graph has a hole there.');
    expect(r.rows).toHaveLength(6);
    expectVerified(await runVerifier([{ id: 'sinc', checks: [{ expr: 'limit(sin(x)/x, x, 0)', expected: '1' }] }]));
  });

  test('one-sided limits differ for |x|/x and blow up for 1/x', async () => {
    expect(limitReading(makeCurve('abs(x)/x'), 0).text).toBe(
      'f(x) → -1 as x → 0⁻; f(x) → 1 as x → 0⁺. The two-sided limit does not exist.',
    );
    expect(limitReading(makeCurve('1/x'), 0).text).toBe(
      'f(x) → -∞ as x → 0⁻; f(x) → +∞ as x → 0⁺. The two-sided limit does not exist.',
    );
    expectVerified(
      await runVerifier([
        {
          id: 'one-sided',
          checks: [
            { expr: "limit(Abs(x)/x, x, 0, '-')", expected: '-1' },
            { expr: "limit(Abs(x)/x, x, 0, '+')", expected: '1' },
            { expr: "sign(limit(1/x, x, 0, '-'))", expected: '-1' },
            { expr: "sign(limit(1/x, x, 0, '+'))", expected: '1' },
          ],
        },
      ]),
    );
  });

  test('a continuous point and a jump in value', () => {
    expect(limitReading(makeCurve('x^2'), 2).text).toBe('f(x) → 4 as x → 2. f(2) = 4, so f is continuous there.');
    expect(limitReading(makeCurve('x*ln(x)'), 0).left).toEqual({ kind: 'none' });
    expect(limitReading(makeCurve('x*ln(x)'), 0).right).toEqual({ kind: 'finite', value: 0 });
  });

  test('limits at infinity', async () => {
    expect(infinityReading(makeCurve('(2x+1)/(x-3)'), 1).text).toBe('f(x) → 2 as x → ∞.');
    expect(infinityReading(makeCurve('exp(x)'), 1).text).toBe('f(x) → +∞ as x → ∞.');
    expect(infinityReading(makeCurve('exp(x)'), -1).text).toBe('f(x) → 0 as x → -∞.');
    expect(infinityReading(makeCurve('sin(x)'), 1).text).toBe('f has no limit as x → ∞.');
    expectVerified(
      await runVerifier([
        {
          id: 'infinity',
          checks: [
            { expr: 'limit((2*x+1)/(x-3), x, oo)', expected: '2' },
            { expr: 'limit(exp(x), x, -oo)', expected: '0' },
          ],
        },
      ]),
    );
  });
});

describe('Newton readings', () => {
  test('iterates for x^2 - 2 from 1 match exact fractions', async () => {
    const r = newtonReading(makeCurve('x^2-2'), 1, 3);
    expect(r.steps.map((s) => s.x)).toEqual([1, 1.5, 17 / 12]);
    expect(r.steps[0].next).toBe(1.5);
    expect(r.steps[2].next).toBeCloseTo(577 / 408, 12);
    expect(r.text).toBe('x_3 = 1.414215686, with f(x_3) = 6.01e-6.');
    const step = (v: string) => `(${v}) - ((${v})**2 - 2)/(2*(${v}))`;
    expectVerified(
      await runVerifier([
        {
          id: 'newton',
          checks: [
            { expr: step('Integer(1)'), expected: '3/2' },
            { expr: step(step('Integer(1)')), expected: '17/12' },
            { expr: step(step(step('Integer(1)'))), expected: '577/408' },
          ],
        },
      ]),
    );
  });

  test('a horizontal tangent stops the method', () => {
    const r = newtonReading(makeCurve('x^2-2'), 0, 4);
    expect(r.status).toBe('flat-tangent');
    expect(r.text).toBe("At x_0 = 0 the tangent is horizontal (f' = 0), so Newton's method cannot continue.");
  });

  test('converges to the root', () => {
    const r = newtonReading(makeCurve('x^2-2'), 1, 8);
    expect(r.status).toBe('converged');
    expect(r.steps.at(-1)!.x).toBeCloseTo(Math.SQRT2, 12);
  });
});

describe('Taylor readings', () => {
  test('ln(cos x) to order 6 agrees with the SymPy series', async () => {
    const r = taylorReading(makeCurve('ln(cos(x))'), 0, 6);
    expect(r.text).toBe('T_6(x) = -x^2/2 - x^4/12 - x^6/45');
    expect(r.coefficients[2]).toBeCloseTo(-1 / 2, 12);
    expect(r.coefficients[4]).toBeCloseTo(-1 / 12, 12);
    expect(r.coefficients[6]).toBeCloseTo(-1 / 45, 12);
    expect(taylorReading(makeCurve('exp(x)'), 0, 1).text).toBe('T_1(x) = 1 + x');
    expect(taylorReading(makeCurve('ln(cos(x))'), 0, 4).text).toBe('T_4(x) = -x^2/2 - x^4/12');
    expectVerified(
      await runVerifier([
        { id: 'ln-cos', checks: [{ expr: 'series(log(cos(x)), x, 0, 7).removeO()', expected: '-x**2/2 - x**4/12 - x**6/45' }] },
      ]),
    );
  });

  test('centres away from zero and probes the error', async () => {
    const r = taylorReading(makeCurve('sin(x)'), Math.PI / 2, 4);
    expect(r.text).toBe('T_4(x) = 1 - (x - pi/2)^2/2 + (x - pi/2)^4/24');
    const p = taylorReading(makeCurve('exp(x)'), 0, 3, 1).probe!;
    expect(p.t).toBeCloseTo(1 + 1 + 1 / 2 + 1 / 6, 12);
    expect(p.error).toBeCloseTo(8 / 3 - Math.E, 12);
    expectVerified(
      await runVerifier([
        { id: 'sin-at-half-pi', checks: [{ expr: 'series(sin(x), x, pi/2, 5).removeO()', expected: '1 - (x - pi/2)**2/2 + (x - pi/2)**4/24' }] },
        { id: 'exp-t3', checks: [{ expr: 'series(exp(x), x, 0, 4).removeO().subs(x, 1)', expected: '8/3' }] },
      ]),
    );
  });

  test('refuses a function that is not smooth at the centre', () => {
    expect(() => taylorCoefficients('sqrt(x)', 0, 2)).toThrow();
    expect(() => taylorCoefficients('1/x', 0, 1)).toThrow();
    expect(() => taylorCoefficients('ln(cos(x))', Math.PI / 2, 2)).toThrow('f is not defined at x = pi/2.');
  });
});

describe('Riemann readings', () => {
  test('sums of x^2 on [0, 1] with n = 4 match SymPy', async () => {
    const curve = makeCurve('x^2');
    const left = riemannReading(curve, 0, 1, 4, 'left');
    const right = riemannReading(curve, 0, 1, 4, 'right');
    const mid = riemannReading(curve, 0, 1, 4, 'midpoint');
    expect(left.sum).toBeCloseTo(7 / 32, 12);
    expect(right.sum).toBeCloseTo(15 / 32, 12);
    expect(mid.sum).toBeCloseTo(21 / 64, 12);
    expect(left.integral).toBeCloseTo(1 / 3, 10);
    expect(left.text).toBe('The left sum with n = 4 is 7/32 ≈ 0.21875. The integral is 1/3 ≈ 0.33333. The sum is below the integral by 0.1146.');
    expect(left.bound).toBe('f is increasing on [a, b], so the left sum is below the integral and the right sum is above it.');
    expect(left.rectangles).toHaveLength(4);
    expect(riemannReading(curve, 0, 1, 100, 'midpoint').text).toMatch(/is below the integral by 0\.0000\d+\.$/);
    expectVerified(
      await runVerifier([
        {
          id: 'riemann',
          checks: [
            { expr: 'Sum((k/Integer(4))**2/4, (k, 0, 3)).doit()', expected: '7/32' },
            { expr: 'Sum((k/Integer(4))**2/4, (k, 1, 4)).doit()', expected: '15/32' },
            { expr: 'Sum(((2*k+1)/Integer(8))**2/4, (k, 0, 3)).doit()', expected: '21/64' },
            { expr: 'integrate(x**2, (x, 0, 1))', expected: '1/3' },
          ],
        },
      ]),
    );
  });

  test('decreasing functions flip the bracket and the integral is accurate', async () => {
    const curve = makeCurve('1/x');
    const r = riemannReading(curve, 1, 2, 10, 'left');
    expect(r.bound).toBe('f is decreasing on [a, b], so the left sum is above the integral and the right sum is below it.');
    expect(r.integral).toBeCloseTo(Math.LN2, 10);
    expect(integralValue(makeCurve('sqrt(x)').f, 0, 1)).toBeCloseTo(2 / 3, 6);
    expect(integralValue(makeCurve('sin(x)').f, 0, Math.PI)).toBeCloseTo(2, 10);
    expectVerified(
      await runVerifier([
        { id: 'integrals', checks: [{ expr: 'integrate(1/x, (x, 1, 2))', expected: 'log(2)' }, { expr: 'integrate(sqrt(x), (x, 0, 1))', expected: '2/3' }] },
      ]),
    );
  });

  test('more rectangles close the gap', () => {
    const curve = makeCurve('x^2');
    const gap = (n: number) => Math.abs(riemannReading(curve, 0, 1, n, 'left').error);
    expect(gap(100)).toBeLessThan(gap(10));
    expect(gap(10)).toBeLessThan(gap(4));
  });
});

describe('content check', () => {
  test('flags a function the figure cannot read', () => {
    expect(visualParamProblem('quadric', {})).toBeNull();
    expect(visualParamProblem('curve-sketch', { f: 'x^2/(x-1)' })).toBeNull();
    expect(visualParamProblem('taylor', { f: 'ln(cos(x))', a: 'pi/2' })).toBeNull();
    expect(visualParamProblem('curve-sketch', {})).toMatch(/needs a string parameter f/);
    expect(visualParamProblem('curve-sketch', { f: 'x +' })).toMatch(/not readable/);
    expect(visualParamProblem('limit', { f: 'sin(x)/x', a: 'banana' })).toMatch(/not a number/);
  });
});
