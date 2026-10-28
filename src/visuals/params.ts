// Content check for the parameters of the several-variable visual kinds.
// The viewers in src/ui/visuals read these with numericParam and choiceParam,
// which silently fall back to a default; this module reports what they would ignore.

type Spec = { kind: 'number'; min: number; max: number } | { kind: 'choice'; allowed: readonly string[] };

const num = (min: number, max: number): Spec => ({ kind: 'number', min, max });
const choice = (...allowed: string[]): Spec => ({ kind: 'choice', allowed });
const AXES = ['x', 'y', 'z'];

const SEVERAL_VARIABLE_SPECS: Record<string, Record<string, Spec>> = {
  quadric: {
    surface: choice('paraboloid', 'sphere', 'cone', 'hyperboloid-one', 'hyperboloid-two', 'hyperbolic-paraboloid'),
    a: num(0.4, 3),
    b: num(0.4, 3),
    c: num(0.4, 3),
    axis: choice(...AXES),
    slice: num(-2, 2),
  },
  'tangent-plane': { x0: num(-2, 2), y0: num(-2, 2) },
  gradient: { x: num(-2, 2), y: num(-2, 2), angle: num(0, 360) },
  'critical-point-viewer': { k: num(-4, 4) },
  constraint: { level: num(-2, 2) },
  region: {
    preset: choice('triangle', 'split', 'exam-shadow'),
    order: choice('dy-dx', 'dx-dy'),
    intercept: num(0.5, 3),
    peak: num(0.2, 3),
    base: num(0.4, 4),
  },
  'polar-region': {
    shape: choice('disk', 'sector', 'annulus'),
    r0: num(0, 2.5),
    r1: num(0.1, 2.5),
    theta0: num(0, 2 * Math.PI),
    theta1: num(0, 2 * Math.PI),
  },
  'cylindrical-region': { top: num(1, 8) },
  'spherical-region': { rho: num(0.4, 1.6) },
  'change-of-variables': { map: choice('linear', 'shear', 'parabola'), u: num(0, 4), v: num(0, 2) },
  solid: { preset: choice('sphere-cone', 'plane-paraboloid'), cut: choice(...AXES) },
};

const ONE_VARIABLE_KINDS = ['curve-sketch', 'limit', 'newton', 'taylor', 'riemann'];

const quoted = (values: readonly string[]) => values.map((v) => `"${v}"`).join(', ');

/** Mirrors numericParam: a number, or a non-empty string that Number() turns into a finite number. */
function numericValue(raw: unknown): number {
  if (typeof raw === 'number') return raw;
  if (typeof raw === 'string' && raw.trim() !== '') return Number(raw);
  return Number.NaN;
}

/** Every problem in the parameters of a visual block, as messages. One-variable kinds are checked elsewhere. */
export function severalVarParamProblems(kind: string, params: Record<string, unknown> | undefined): string[] {
  if (ONE_VARIABLE_KINDS.includes(kind)) return [];
  const spec = SEVERAL_VARIABLE_SPECS[kind];
  if (!spec) {
    const known = [...Object.keys(SEVERAL_VARIABLE_SPECS), ...ONE_VARIABLE_KINDS];
    return [`visual kind "${kind}" is unknown (known kinds: ${known.join(', ')})`];
  }
  const problems: string[] = [];
  for (const [key, raw] of Object.entries(params ?? {})) {
    const rule = spec[key];
    if (!rule) {
      problems.push(`visual "${kind}": unknown parameter "${key}" (allowed: ${Object.keys(spec).join(', ')})`);
    } else if (rule.kind === 'choice') {
      if (typeof raw !== 'string' || !rule.allowed.includes(raw)) {
        problems.push(`visual "${kind}": ${key} = ${JSON.stringify(raw)} is not one of ${quoted(rule.allowed)}`);
      }
    } else {
      const value = numericValue(raw);
      const range = `${Number(rule.min.toFixed(4))} to ${Number(rule.max.toFixed(4))}`;
      if (!Number.isFinite(value)) {
        problems.push(`visual "${kind}": ${key} = ${JSON.stringify(raw)} is not a number (expected a number from ${range})`);
      } else if (value < rule.min || value > rule.max) {
        problems.push(`visual "${kind}": ${key} = ${value} is outside the range ${range}`);
      }
    }
  }
  return problems;
}
