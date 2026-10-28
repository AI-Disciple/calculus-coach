import { describe, expect, test } from 'vitest';
import { runVerifier } from '../src/content/verifier.ts';
import {
  classifySecondDerivative,
  constraintReading,
  criticalReading,
  graphZ,
  gradientReading,
  onSection,
  quadricEquation,
  quadricResidual,
  tangentPlane,
} from '../src/visuals/readings.ts';

describe('quadric readings', () => {
  const unit = { a: 1, b: 1, c: 1 };

  test('matches the hand examples', () => {
    expect(graphZ('paraboloid', unit, 1, 0)).toBe(1);
    expect(graphZ('hyperbolic-paraboloid', unit, 1, 1)).toBe(0);
    expect(quadricResidual('sphere', unit, 1, 0, 0)).toBe(0);
    expect(quadricResidual('cone', unit, 1, 0, 1)).toBe(0);
    expect(quadricResidual('hyperboloid-one', unit, 1, 0, 0)).toBe(0);
    expect(quadricResidual('hyperboloid-two', unit, 0, 0, 1)).toBe(0);
    expect(quadricResidual('hyperbolic-paraboloid', unit, 1, 1, 0)).toBe(0);

    expect(quadricEquation('paraboloid', unit)).toBe('z = x^2 + y^2');
    expect(quadricEquation('paraboloid', { a: 2, b: 1, c: 1 })).toBe('z = x^2/4 + y^2');
    expect(quadricEquation('sphere', unit)).toBe('x^2 + y^2 + z^2 = 1');
    expect(quadricEquation('sphere', { a: 2, b: 1, c: 1 })).toBe('x^2/4 + y^2 + z^2 = 1');
    expect(quadricEquation('paraboloid', { a: 0.4, b: 0.5, c: 1 })).toBe(
      'z = x^2/0.16 + y^2/0.25',
    );
    expect(quadricEquation('cone', unit)).toBe('z^2 = x^2 + y^2');
    expect(quadricEquation('hyperboloid-one', unit)).toBe('x^2 + y^2 - z^2 = 1');
    expect(quadricEquation('hyperboloid-two', unit)).toBe('z^2 - x^2 - y^2 = 1');
    expect(quadricEquation('hyperbolic-paraboloid', unit)).toBe('z = x^2 - y^2');
  });

  test('checks both the plane and surface for a section', () => {
    expect(onSection('paraboloid', unit, 'z', 1, 1, 0, 1)).toBe(true);
    expect(onSection('paraboloid', unit, 'z', 1, 1, 1, 1)).toBe(false);
    expect(onSection('paraboloid', unit, 'z', 1, 1, 0, 1 + 0.5e-8)).toBe(true);
    expect(onSection('hyperboloid-two', unit, 'z', 0, 0, 0, 0)).toBe(false);
    expect(onSection('hyperboloid-two', unit, 'z', 0, 5, -3, 0)).toBe(false);
  });

  test('agrees with hand-written SymPy expressions', async () => {
    const graphValue = graphZ('paraboloid', unit, 1, 0);
    const residualValue = quadricResidual('sphere', unit, 1, 0, 0);
    const results = await runVerifier([
      { id: 'quadric-graph', checks: [{ expr: '1**2 + 0**2', expected: String(graphValue) }] },
      {
        id: 'quadric-residual',
        checks: [{ expr: '1**2 + 0**2 + 0**2 - 1', expected: String(residualValue) }],
      },
    ]);

    expect(results).toHaveLength(2);
    expect(results.every((result) => result.ok)).toBe(true);
  });
});

describe('tangent plane reading', () => {
  test('fills the course formula with hand values', () => {
    expect(tangentPlane(1, -1)).toEqual({
      x0: 1,
      y0: -1,
      f: 2,
      fx: 2,
      fy: -2,
      equation: 'Z = 2 + 2(x - 1) - 2(y + 1)',
    });
    expect(tangentPlane(0, 0).equation).toBe('Z = 0');
    expect(tangentPlane(1, 0).equation).toBe('Z = 1 + 2(x - 1)');
    expect(tangentPlane(0.1, 0.2).equation).toBe('Z = 0.05 + 0.2(x - 0.1) + 0.4(y - 0.2)');
  });

  test('agrees with hand-written SymPy expressions', async () => {
    const reading = tangentPlane(1, -1);
    const results = await runVerifier([
      {
        id: 'tangent-plane',
        checks: [
          { expr: '(x**2 + y**2).subs({x: 1, y: -1})', expected: String(reading.f) },
          { expr: 'diff(x**2 + y**2, x).subs({x: 1, y: -1})', expected: String(reading.fx) },
          { expr: 'diff(x**2 + y**2, y).subs({x: 1, y: -1})', expected: String(reading.fy) },
        ],
      },
    ]);

    expect(results).toHaveLength(3);
    expect(results.every((result) => result.ok)).toBe(true);
  });
});

describe('gradient reading', () => {
  test('returns hand-computed derivatives and directions', () => {
    expect(gradientReading(3, 0, 0)).toEqual({
      x: 3,
      y: 0,
      fx: 6,
      fy: 0,
      angleDegrees: 0,
      directional: 6,
      tangentX: 0,
      tangentY: 6,
    });
    expect(gradientReading(3, 0, 90).directional).toBeCloseTo(0, 10);
    expect(gradientReading(1, 1, 45).directional).toBeCloseTo(2 * Math.SQRT2, 10);
  });

  test('agrees with hand-written SymPy expressions', async () => {
    const reading = gradientReading(3, 0, 0);
    const results = await runVerifier([
      {
        id: 'gradient',
        checks: [
          { expr: '(2*x).subs(x, 3)', expected: String(reading.fx) },
          { expr: '(2*y).subs(y, 0)', expected: String(reading.fy) },
          {
            expr: '(2*x*cos(0) + 2*y*sin(0)).subs({x: 3, y: 0})',
            expected: String(reading.directional),
          },
        ],
      },
    ]);

    expect(results).toHaveLength(3);
    expect(results.every((result) => result.ok)).toBe(true);
  });
});

describe('critical-point reading', () => {
  test('classifies the family from hand-computed determinants', () => {
    expect(criticalReading(0)).toEqual({
      k: 0,
      fxx: 2,
      fyy: 2,
      fxy: 0,
      D: 4,
      classification: 'Local minimum',
    });
    expect(criticalReading(3)).toMatchObject({ D: -5, fxy: 3, classification: 'Saddle' });
    expect(criticalReading(-3)).toMatchObject({ D: -5, classification: 'Saddle' });
    expect(criticalReading(2)).toMatchObject({ D: 0, classification: 'Test inconclusive' });
    expect(criticalReading(-2)).toMatchObject({ D: 0, classification: 'Test inconclusive' });
  });

  test('applies the full classification rule and tolerance', () => {
    expect(classifySecondDerivative(4, -2)).toBe('Local maximum');
    expect(classifySecondDerivative(4, 2)).toBe('Local minimum');
    expect(classifySecondDerivative(-1, 2)).toBe('Saddle');
    expect(classifySecondDerivative(0.5e-9, 2)).toBe('Test inconclusive');
    expect(classifySecondDerivative(4, -0.5e-9)).toBe('Test inconclusive');
    expect(classifySecondDerivative(-1, 0)).toBe('Saddle');
  });

  test('agrees with hand-written SymPy expressions', async () => {
    const reading = criticalReading(3);
    const results = await runVerifier([
      {
        id: 'critical-point',
        checks: [
          { expr: '4 - 3**2', expected: String(reading.D) },
          { expr: '2', expected: String(reading.fxx) },
        ],
      },
    ]);

    expect(results).toHaveLength(2);
    expect(results.every((result) => result.ok)).toBe(true);
  });
});

describe('constraint reading', () => {
  test('returns the hand-computed intersections', () => {
    expect(constraintReading(1)).toEqual({ level: 1, tangent: true, points: [{ x: 1, y: 0 }] });
    expect(constraintReading(-1)).toEqual({ level: -1, tangent: true, points: [{ x: -1, y: 0 }] });
    expect(constraintReading(0)).toEqual({
      level: 0,
      tangent: false,
      points: [
        { x: 0, y: 1 },
        { x: 0, y: -1 },
      ],
    });
    expect(constraintReading(2)).toEqual({ level: 2, tangent: false, points: [] });
  });

  test('uses the tangency tolerance without inventing a second point', () => {
    expect(constraintReading(1 - 0.5e-9)).toMatchObject({
      tangent: true,
      points: [{ x: 1, y: 0 }],
    });
    expect(constraintReading(-1 + 0.5e-9)).toMatchObject({
      tangent: true,
      points: [{ x: -1, y: 0 }],
    });
  });

  test('agrees with hand-written SymPy expressions at the tangency point', async () => {
    const reading = constraintReading(1);
    const point = reading.points[0];
    expect(point).toEqual({ x: 1, y: 0 });
    const results = await runVerifier([
      {
        id: 'constraint',
        checks: [
          { expr: '1**2 + 0**2 - 1', expected: '0' },
          { expr: '1*(2*0) - 0*(2*1)', expected: '0' },
        ],
      },
    ]);

    expect(results).toHaveLength(2);
    expect(results.every((result) => result.ok)).toBe(true);
  });
});
