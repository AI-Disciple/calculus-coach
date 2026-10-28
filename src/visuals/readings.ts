export type QuadricId =
  | 'paraboloid'
  | 'sphere'
  | 'cone'
  | 'hyperboloid-one'
  | 'hyperboloid-two'
  | 'hyperbolic-paraboloid';

export type QuadricParams = { a: number; b: number; c: number };

export function quadricResidual(
  id: QuadricId,
  p: QuadricParams,
  x: number,
  y: number,
  z: number,
): number {
  const xTerm = x ** 2 / p.a ** 2;
  const yTerm = y ** 2 / p.b ** 2;
  const zTerm = z ** 2 / p.c ** 2;

  switch (id) {
    case 'paraboloid':
      return z - xTerm - yTerm;
    case 'sphere':
      return xTerm + yTerm + zTerm - 1;
    case 'cone':
      return zTerm - xTerm - yTerm;
    case 'hyperboloid-one':
      return xTerm + yTerm - zTerm - 1;
    case 'hyperboloid-two':
      return zTerm - xTerm - yTerm - 1;
    case 'hyperbolic-paraboloid':
      return z - xTerm + yTerm;
  }
}

export function graphZ(
  id: 'paraboloid' | 'hyperbolic-paraboloid',
  p: QuadricParams,
  x: number,
  y: number,
): number {
  const xTerm = x ** 2 / p.a ** 2;
  const yTerm = y ** 2 / p.b ** 2;
  return id === 'paraboloid' ? xTerm + yTerm : xTerm - yTerm;
}

function squaredTerm(variable: 'x' | 'y' | 'z', parameter: number): string {
  const denominator = parameter ** 2;
  return denominator === 1 ? `${variable}^2` : `${variable}^2/${formatEquationNumber(denominator)}`;
}

function formatEquationNumber(value: number): string {
  if (Math.abs(value) < 1e-12) return '0';
  return Number(value.toFixed(12)).toString();
}

export function quadricEquation(id: QuadricId, p: QuadricParams): string {
  const x = squaredTerm('x', p.a);
  const y = squaredTerm('y', p.b);
  const z = squaredTerm('z', p.c);

  switch (id) {
    case 'paraboloid':
      return `z = ${x} + ${y}`;
    case 'sphere':
      return `${x} + ${y} + ${z} = 1`;
    case 'cone':
      return `${z} = ${x} + ${y}`;
    case 'hyperboloid-one':
      return `${x} + ${y} - ${z} = 1`;
    case 'hyperboloid-two':
      return `${z} - ${x} - ${y} = 1`;
    case 'hyperbolic-paraboloid':
      return `z = ${x} - ${y}`;
  }
}

export function onSection(
  id: QuadricId,
  p: QuadricParams,
  axis: 'x' | 'y' | 'z',
  value: number,
  x: number,
  y: number,
  z: number,
): boolean {
  const coordinate = axis === 'x' ? x : axis === 'y' ? y : z;
  return Math.abs(coordinate - value) < 1e-8 && Math.abs(quadricResidual(id, p, x, y, z)) < 1e-8;
}

export type TangentReading = {
  x0: number;
  y0: number;
  f: number;
  fx: number;
  fy: number;
  equation: string;
};

function offset(variable: 'x' | 'y', value: number): string {
  return value < 0
    ? `(${variable} + ${formatEquationNumber(Math.abs(value))})`
    : `(${variable} - ${formatEquationNumber(value)})`;
}

function linearTerm(coefficient: number, variable: 'x' | 'y', value: number): string {
  if (coefficient === 0) return '';
  const sign = coefficient < 0 ? ' - ' : ' + ';
  return `${sign}${formatEquationNumber(Math.abs(coefficient))}${offset(variable, value)}`;
}

export function tangentPlane(x0: number, y0: number): TangentReading {
  const f = x0 ** 2 + y0 ** 2;
  const fx = 2 * x0;
  const fy = 2 * y0;
  return {
    x0,
    y0,
    f,
    fx,
    fy,
    equation: `Z = ${formatEquationNumber(f)}${linearTerm(fx, 'x', x0)}${linearTerm(fy, 'y', y0)}`,
  };
}

export type GradientReading = {
  x: number;
  y: number;
  fx: number;
  fy: number;
  angleDegrees: number;
  directional: number;
  tangentX: number;
  tangentY: number;
};

export function gradientReading(x: number, y: number, angleDegrees: number): GradientReading {
  const fx = 2 * x;
  const fy = 2 * y;
  const angle = (angleDegrees * Math.PI) / 180;
  return {
    x,
    y,
    fx,
    fy,
    angleDegrees,
    directional: fx * Math.cos(angle) + fy * Math.sin(angle),
    tangentX: fy === 0 ? 0 : -fy,
    tangentY: fx,
  };
}

export type CriticalLabel = 'Local minimum' | 'Local maximum' | 'Saddle' | 'Test inconclusive';

export function classifySecondDerivative(D: number, fxx: number): CriticalLabel {
  if (Math.abs(D) < 1e-9) return 'Test inconclusive';
  if (D < 0) return 'Saddle';
  if (Math.abs(fxx) < 1e-9) return 'Test inconclusive';
  if (fxx > 0) return 'Local minimum';
  return 'Local maximum';
}

export type CriticalReading = {
  k: number;
  fxx: number;
  fyy: number;
  fxy: number;
  D: number;
  classification: CriticalLabel;
};

export function criticalReading(k: number): CriticalReading {
  const fxx = 2;
  const fyy = 2;
  const fxy = k;
  const D = 4 - k ** 2;
  return { k, fxx, fyy, fxy, D, classification: classifySecondDerivative(D, fxx) };
}

export type ConstraintReading = {
  level: number;
  tangent: boolean;
  points: { x: number; y: number }[];
};

export function constraintReading(level: number): ConstraintReading {
  const tangent = Math.abs(Math.abs(level) - 1) < 1e-9;
  if (tangent) {
    const x = level < 0 ? -1 : 1;
    return { level, tangent: true, points: [{ x, y: 0 }] };
  }
  if (Math.abs(level) > 1) return { level, tangent: false, points: [] };

  const y = Math.sqrt(1 - level ** 2);
  return {
    level,
    tangent: false,
    points: [
      { x: level, y },
      { x: level, y: -y },
    ],
  };
}
