import { useEffect, useMemo, useState } from 'react';
import type { Data, Layout } from 'plotly.js';
import {
  constraintReading,
  criticalReading,
  gradientReading,
  graphZ,
  quadricEquation,
  quadricResidual,
  tangentPlane,
  type QuadricId,
  type QuadricParams,
} from '../../visuals/readings.ts';
import {
  ChangeViewer,
  CylindricalViewer,
  PolarViewer,
  RegionViewer,
  SolidViewer,
  SphericalViewer,
} from './IntegrationVisuals.tsx';
import {
  CurveSketchViewer,
  LimitViewer,
  NewtonViewer,
  RiemannViewer,
  TaylorViewer,
} from './OneVariableVisuals.tsx';
import { Figure } from './shared.tsx';

const GRID = 37;
const DOMAIN = Array.from({ length: GRID }, (_, index) => -2 + (4 * index) / (GRID - 1));

type Theme = {
  canvas: string;
  text: string;
  border: string;
  surface: string;
  plane: string;
  highlight: string;
};

function currentTheme(): Theme {
  const root = document.documentElement;
  const style = getComputedStyle(root);
  const dark = root.dataset.theme === 'dark';
  return {
    canvas: style.getPropertyValue('--canvas').trim(),
    text: style.getPropertyValue('--text').trim(),
    border: style.getPropertyValue('--border').trim(),
    surface: dark ? '#a3cdee' : '#1f6c9f',
    plane: dark ? '#e4d2a2' : '#956400',
    highlight: dark ? '#f0b7b4' : '#9f2f2d',
  };
}

function useTheme(): Theme {
  const [theme, setTheme] = useState(currentTheme);
  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(currentTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);
  return theme;
}

function layout2d(theme: Theme, xTitle = 'x', yTitle = 'y', span = 2.2): Partial<Layout> {
  const axis = {
    color: theme.text,
    gridcolor: theme.border,
    zerolinecolor: theme.border,
    range: [-span, span] as [number, number],
  };
  return {
    height: 420,
    margin: { l: 48, r: 18, t: 18, b: 46 },
    paper_bgcolor: theme.canvas,
    plot_bgcolor: theme.canvas,
    font: { color: theme.text },
    showlegend: false,
    xaxis: { ...axis, title: { text: xTitle } },
    yaxis: { ...axis, title: { text: yTitle }, scaleanchor: 'x', scaleratio: 1 },
  };
}

function layout3d(theme: Theme, span?: number): Partial<Layout> {
  const axis = {
    color: theme.text,
    gridcolor: theme.border,
    zerolinecolor: theme.border,
    ...(span === undefined ? {} : { range: [-span, span] as [number, number] }),
  };
  return {
    height: 420,
    margin: { l: 0, r: 0, t: 8, b: 0 },
    paper_bgcolor: theme.canvas,
    plot_bgcolor: theme.canvas,
    font: { color: theme.text },
    showlegend: false,
    scene: {
      bgcolor: theme.canvas,
      aspectmode: 'cube',
      xaxis: { ...axis, title: { text: 'x' } },
      yaxis: { ...axis, title: { text: 'y' } },
      zaxis: { ...axis, title: { text: 'z' } },
    },
  };
}

function RangeControl({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="field">
      <span>
        {label}: {formatNumber(value)}
      </span>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.currentTarget.value))}
      />
    </label>
  );
}

function formatNumber(value: number): string {
  if (Math.abs(value) < 1e-8) return '0';
  return Number(value.toFixed(3)).toString();
}

type VisualParams = Record<string, unknown> | undefined;

function numericParam(params: VisualParams, key: string, fallback: number, min: number, max: number): number {
  const raw = params?.[key];
  const value = typeof raw === 'number' ? raw : typeof raw === 'string' && raw.trim() !== '' ? Number(raw) : Number.NaN;
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

function choiceParam<T extends string>(params: VisualParams, key: string, allowed: readonly T[], fallback: T): T {
  const raw = params?.[key];
  return typeof raw === 'string' && allowed.includes(raw as T) ? (raw as T) : fallback;
}

function samples(span: number): number[] {
  return Array.from({ length: GRID }, (_, index) => -span + (2 * span * index) / (GRID - 1));
}

function viewSpan(p: QuadricParams): number {
  return 2.6 * Math.max(1, p.a, p.b, p.c);
}

const QUADRIC_NAMES: { id: QuadricId; name: string }[] = [
  { id: 'paraboloid', name: 'Elliptic paraboloid' },
  { id: 'sphere', name: 'Sphere' },
  { id: 'cone', name: 'Cone' },
  { id: 'hyperboloid-one', name: 'Hyperboloid of one sheet' },
  { id: 'hyperboloid-two', name: 'Hyperboloid of two sheets' },
  { id: 'hyperbolic-paraboloid', name: 'Hyperbolic paraboloid' },
];

type Point3 = { x: number; y: number; z: number };

function parametricTrace(
  x: number[][],
  y: number[][],
  z: number[][],
  theme: Theme,
): Data {
  return {
    type: 'surface',
    x,
    y,
    z,
    colorscale: [
      [0, theme.surface],
      [1, theme.surface],
    ],
    opacity: 0.85,
    showscale: false,
    hoverinfo: 'skip',
  } as Data;
}

function quadricSurface(id: QuadricId, p: QuadricParams, theme: Theme): Data[] {
  if (id === 'paraboloid' || id === 'hyperbolic-paraboloid') {
    const z = DOMAIN.map((y) =>
      DOMAIN.map((x) => {
        return graphZ(id, p, x, y);
      }),
    );
    return [parametricTrace(DOMAIN.map(() => DOMAIN), DOMAIN.map((y) => DOMAIN.map(() => y)), z, theme)];
  }

  const theta = Array.from({ length: GRID }, (_, index) => (2 * Math.PI * index) / (GRID - 1));
  if (id === 'sphere') {
    const phi = Array.from({ length: GRID }, (_, index) => (Math.PI * index) / (GRID - 1));
    return [
      parametricTrace(
        phi.map((v) => theta.map((t) => p.a * Math.sin(v) * Math.cos(t))),
        phi.map((v) => theta.map((t) => p.b * Math.sin(v) * Math.sin(t))),
        phi.map((v) => theta.map(() => p.c * Math.cos(v))),
        theme,
      ),
    ];
  }

  if (id === 'cone') {
    return [
      parametricTrace(
        DOMAIN.map((u) => theta.map((t) => p.a * u * Math.cos(t))),
        DOMAIN.map((u) => theta.map((t) => p.b * u * Math.sin(t))),
        DOMAIN.map((u) => theta.map(() => p.c * u)),
        theme,
      ),
    ];
  }

  const uMax = Math.asinh(2 / Math.max(p.a, p.b, p.c));
  if (id === 'hyperboloid-one') {
    const u = Array.from({ length: GRID }, (_, index) => -uMax + (2 * uMax * index) / (GRID - 1));
    return [
      parametricTrace(
        u.map((v) => theta.map((t) => p.a * Math.cosh(v) * Math.cos(t))),
        u.map((v) => theta.map((t) => p.b * Math.cosh(v) * Math.sin(t))),
        u.map((v) => theta.map(() => p.c * Math.sinh(v))),
        theme,
      ),
    ];
  }

  const u = Array.from({ length: GRID }, (_, index) => (uMax * index) / (GRID - 1));
  return [-1, 1].map((sign) =>
    parametricTrace(
      u.map((v) => theta.map((t) => p.a * Math.sinh(v) * Math.cos(t))),
      u.map((v) => theta.map((t) => p.b * Math.sinh(v) * Math.sin(t))),
      u.map((v) => theta.map(() => sign * p.c * Math.cosh(v))),
      theme,
    ),
  );
}

function pointOnPlane(axis: 'x' | 'y' | 'z', value: number, u: number, v: number): Point3 {
  if (axis === 'x') return { x: value, y: u, z: v };
  if (axis === 'y') return { x: u, y: value, z: v };
  return { x: u, y: v, z: value };
}

function interpolateEdge(a: Point3, b: Point3, ra: number, rb: number): Point3 {
  const ratio = ra === rb ? 0.5 : ra / (ra - rb);
  return {
    x: a.x + ratio * (b.x - a.x),
    y: a.y + ratio * (b.y - a.y),
    z: a.z + ratio * (b.z - a.z),
  };
}

function sectionSegments(
  id: QuadricId,
  p: QuadricParams,
  axis: 'x' | 'y' | 'z',
  value: number,
  span: number,
): [Point3, Point3][] {
  const domain = samples(span);
  const segments: [Point3, Point3][] = [];
  for (let row = 0; row < GRID - 1; row += 1) {
    for (let column = 0; column < GRID - 1; column += 1) {
      const corners = [
        pointOnPlane(axis, value, domain[column], domain[row]),
        pointOnPlane(axis, value, domain[column + 1], domain[row]),
        pointOnPlane(axis, value, domain[column + 1], domain[row + 1]),
        pointOnPlane(axis, value, domain[column], domain[row + 1]),
      ];
      const residuals = corners.map((point) => quadricResidual(id, p, point.x, point.y, point.z));
      const crossings: Point3[] = [];
      for (const [start, end] of [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
      ] as const) {
        const first = residuals[start];
        const second = residuals[end];
        if ((first <= 0 && second >= 0) || (first >= 0 && second <= 0)) {
          crossings.push(interpolateEdge(corners[start], corners[end], first, second));
        }
      }
      if (crossings.length >= 2) segments.push([crossings[0], crossings[1]]);
      if (crossings.length === 4) segments.push([crossings[2], crossings[3]]);
    }
  }
  return segments;
}

function planeTrace(axis: 'x' | 'y' | 'z', value: number, theme: Theme, span: number): Data {
  const corners = [
    [pointOnPlane(axis, value, -span, -span), pointOnPlane(axis, value, span, -span)],
    [pointOnPlane(axis, value, -span, span), pointOnPlane(axis, value, span, span)],
  ];
  return {
    type: 'surface',
    x: corners.map((row) => row.map((point) => point.x)),
    y: corners.map((row) => row.map((point) => point.y)),
    z: corners.map((row) => row.map((point) => point.z)),
    colorscale: [
      [0, theme.plane],
      [1, theme.plane],
    ],
    opacity: 0.22,
    showscale: false,
    hoverinfo: 'skip',
  } as Data;
}

function QuadricViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [id, setId] = useState<QuadricId>(() =>
    choiceParam(params, 'surface', QUADRIC_NAMES.map((quadric) => quadric.id), 'paraboloid'),
  );
  const [p, setParams] = useState<QuadricParams>(() => ({
    a: numericParam(params, 'a', 1, 0.4, 3),
    b: numericParam(params, 'b', 1, 0.4, 3),
    c: numericParam(params, 'c', 1, 0.4, 3),
  }));
  const [axis, setAxis] = useState<'x' | 'y' | 'z'>(() => choiceParam(params, 'axis', ['x', 'y', 'z'] as const, 'z'));
  const [slice, setSlice] = useState(() => numericParam(params, 'slice', 0, -2, 2));
  const span = viewSpan(p);
  const segments = useMemo(() => sectionSegments(id, p, axis, slice, span), [axis, id, p, slice, span]);
  const values3d = segments.flatMap(([a, b]) => [a, b, null]);
  const freeAxes = axis === 'x' ? (['y', 'z'] as const) : axis === 'y' ? (['x', 'z'] as const) : (['x', 'y'] as const);
  const curve3d = {
    type: 'scatter3d',
    mode: 'lines',
    x: values3d.map((point) => point?.x ?? null),
    y: values3d.map((point) => point?.y ?? null),
    z: values3d.map((point) => point?.z ?? null),
    line: { color: theme.highlight, width: 6 },
    hoverinfo: 'skip',
  } as Data;
  const curve2d = {
    type: 'scatter',
    mode: 'lines',
    x: values3d.map((point) => (point ? point[freeAxes[0]] : null)),
    y: values3d.map((point) => (point ? point[freeAxes[1]] : null)),
    line: { color: theme.highlight, width: 3 },
    hoverinfo: 'skip',
  } as Data;

  function updateParameter(key: keyof QuadricParams, value: number) {
    setParams((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <label className="field">
          <span>Surface</span>
          <select aria-label="Surface" value={id} onChange={(event) => setId(event.currentTarget.value as QuadricId)}>
            {QUADRIC_NAMES.map((quadric) => (
              <option key={quadric.id} value={quadric.id}>
                {quadric.name}
              </option>
            ))}
          </select>
        </label>
        <RangeControl label="a" value={p.a} min={0.4} max={3} step={0.1} onChange={(value) => updateParameter('a', value)} />
        <RangeControl label="b" value={p.b} min={0.4} max={3} step={0.1} onChange={(value) => updateParameter('b', value)} />
        <RangeControl label="c" value={p.c} min={0.4} max={3} step={0.1} onChange={(value) => updateParameter('c', value)} />
        <label className="field">
          <span>Cut axis</span>
          <select aria-label="Cut axis" value={axis} onChange={(event) => setAxis(event.currentTarget.value as 'x' | 'y' | 'z')}>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
        </label>
        <RangeControl label="Slice" value={slice} min={-2} max={2} step={0.1} onChange={setSlice} />
      </div>
      <p className="visual-readout">{quadricEquation(id, p)}</p>
      <p className="visual-readout">
        {segments.length === 0
          ? `The plane for ${axis === 'z' ? `the level curve z = ${formatNumber(slice)}` : `the cut ${axis} = ${formatNumber(slice)}`} misses the surface.`
          : `Showing ${axis === 'z' ? `the level curve z = ${formatNumber(slice)}` : `the cut ${axis} = ${formatNumber(slice)}`}.`}
      </p>
      <div className="visual-plot-grid">
        <Figure data={[...quadricSurface(id, p, theme), planeTrace(axis, slice, theme, span), ...(segments.length ? [curve3d] : [])]} layout={layout3d(theme)} />
        <Figure data={segments.length ? [curve2d] : []} layout={layout2d(theme, freeAxes[0], freeAxes[1], span)} />
      </div>
    </div>
  );
}

function gridValues(calculate: (x: number, y: number) => number): number[][] {
  return DOMAIN.map((y) => DOMAIN.map((x) => calculate(x, y)));
}

function TangentPlaneViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [x0, setX0] = useState(() => numericParam(params, 'x0', 1, -2, 2));
  const [y0, setY0] = useState(() => numericParam(params, 'y0', 1, -2, 2));
  const reading = tangentPlane(x0, y0);
  const surface = gridValues((x, y) => x ** 2 + y ** 2);
  const plane = gridValues((x, y) => reading.f + reading.fx * (x - reading.x0) + reading.fy * (y - reading.y0));
  const data = [
    parametricTrace(DOMAIN.map(() => DOMAIN), DOMAIN.map((y) => DOMAIN.map(() => y)), surface, theme),
    {
      ...parametricTrace(DOMAIN.map(() => DOMAIN), DOMAIN.map((y) => DOMAIN.map(() => y)), plane, theme),
      opacity: 0.38,
      colorscale: [[0, theme.plane], [1, theme.plane]],
    } as Data,
    {
      type: 'scatter3d',
      mode: 'markers',
      x: [reading.x0],
      y: [reading.y0],
      z: [reading.f],
      marker: { color: theme.highlight, size: 5 },
      hoverinfo: 'skip',
    } as Data,
  ];
  return (
    <div className="visual-block">
      <div className="visual-controls">
        <RangeControl label="x0" value={x0} min={-2} max={2} step={0.1} onChange={setX0} />
        <RangeControl label="y0" value={y0} min={-2} max={2} step={0.1} onChange={setY0} />
      </div>
      <p className="visual-readout">{reading.equation}</p>
      <Figure data={data} layout={layout3d(theme)} />
    </div>
  );
}

function normalized(x: number, y: number, length: number): [number, number] {
  const magnitude = Math.hypot(x, y);
  return magnitude < 1e-8 ? [0, 0] : [(length * x) / magnitude, (length * y) / magnitude];
}

function GradientViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [x, setX] = useState(() => numericParam(params, 'x', 1, -2, 2));
  const [y, setY] = useState(() => numericParam(params, 'y', 1, -2, 2));
  const [angle, setAngle] = useState(() => numericParam(params, 'angle', 0, 0, 360));
  const reading = gradientReading(x, y, angle);
  const [gradientX, gradientY] = normalized(reading.fx, reading.fy, 1);
  const [tangentX, tangentY] = normalized(reading.tangentX, reading.tangentY, 1.4);
  const dot = reading.fx * reading.tangentX + reading.fy * reading.tangentY;
  const gradientSentence =
    Math.hypot(reading.fx, reading.fy) < 1e-8
      ? 'The gradient is zero, so the directional derivative is 0 in every direction.'
      : `The directional derivative is ${formatNumber(reading.directional)}. The gradient arrow is the direction of steepest ascent, and it is perpendicular to the level curve. Their dot product is ${formatNumber(dot)}.`;
  const data = [
    {
      type: 'contour',
      x: DOMAIN,
      y: DOMAIN,
      z: gridValues((xValue, yValue) => xValue ** 2 + yValue ** 2),
      colorscale: [[0, theme.canvas], [1, theme.surface]],
      contours: { coloring: 'lines', showlabels: false },
      line: { width: 2 },
      showscale: false,
      hoverinfo: 'skip',
    } as Data,
    {
      type: 'scatter',
      mode: 'lines+markers',
      x: [reading.x, reading.x + gradientX],
      y: [reading.y, reading.y + gradientY],
      line: { color: theme.highlight, width: 4 },
      marker: { color: theme.highlight, size: [5, 10] },
      hoverinfo: 'skip',
    } as Data,
    {
      type: 'scatter',
      mode: 'lines',
      x: [reading.x - tangentX / 2, reading.x + tangentX / 2],
      y: [reading.y - tangentY / 2, reading.y + tangentY / 2],
      line: { color: theme.plane, width: 4 },
      hoverinfo: 'skip',
    } as Data,
  ];
  return (
    <div className="visual-block">
      <div className="visual-controls">
        <RangeControl label="x" value={x} min={-2} max={2} step={0.1} onChange={setX} />
        <RangeControl label="y" value={y} min={-2} max={2} step={0.1} onChange={setY} />
        <RangeControl label="Direction in degrees" value={angle} min={0} max={360} step={1} onChange={setAngle} />
      </div>
      <p className="visual-readout">{gradientSentence}</p>
      <Figure data={data} layout={layout2d(theme)} />
    </div>
  );
}

function CriticalPointViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [k, setK] = useState(() => numericParam(params, 'k', 0, -4, 4));
  const reading = criticalReading(k);
  const surface = gridValues((x, y) => x ** 2 + y ** 2 + reading.k * x * y);
  const verdict =
    reading.classification === 'Local minimum'
      ? 'The second-derivative test gives a local minimum.'
      : reading.classification === 'Local maximum'
        ? 'The second-derivative test gives a local maximum.'
        : reading.classification === 'Saddle'
          ? 'The second-derivative test gives a saddle.'
          : 'The second-derivative test is inconclusive.';
  const sentence = `For f = x^2 + y^2 + kxy, D is ${formatNumber(reading.D)}, with f_xx = ${formatNumber(reading.fxx)}, f_yy = ${formatNumber(reading.fyy)} and f_xy = ${formatNumber(reading.fxy)}. ${verdict}`;
  return (
    <div className="visual-block">
      <div className="visual-controls">
        <RangeControl label="k" value={k} min={-4} max={4} step={0.1} onChange={setK} />
      </div>
      <p className="visual-readout">{sentence}</p>
      <Figure
        data={[
          parametricTrace(DOMAIN.map(() => DOMAIN), DOMAIN.map((y) => DOMAIN.map(() => y)), surface, theme),
          {
            type: 'scatter3d',
            mode: 'markers',
            x: [0],
            y: [0],
            z: [0],
            marker: { color: theme.highlight, size: 5 },
            hoverinfo: 'skip',
          } as Data,
        ]}
        layout={layout3d(theme)}
      />
    </div>
  );
}

function ConstraintViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [level, setLevel] = useState(() => numericParam(params, 'level', 1, -2, 2));
  const reading = constraintReading(level);
  const theta = Array.from({ length: 121 }, (_, index) => (2 * Math.PI * index) / 120);
  const message = reading.tangent
    ? 'The line is tangent to the circle.'
    : reading.points.length === 0
      ? 'The line misses the circle.'
      : 'The line intersects the circle at two points.';
  const levelLines = [-1.5, -0.5, 0.5, 1.5].filter((value) => Math.abs(value - reading.level) > 0.05);
  const data: Data[] = [
    {
      type: 'scatter',
      mode: 'lines',
      x: theta.map(Math.cos),
      y: theta.map(Math.sin),
      line: { color: theme.surface, width: 3 },
      hoverinfo: 'skip',
    } as Data,
    ...levelLines.map(
      (value) =>
        ({
          type: 'scatter',
          mode: 'lines',
          x: [value, value],
          y: [-2, 2],
          line: { color: theme.border, width: 1 },
          hoverinfo: 'skip',
        }) as Data,
    ),
    {
      type: 'scatter',
      mode: 'lines',
      x: [reading.level, reading.level],
      y: [-2, 2],
      line: { color: theme.plane, width: 3 },
      hoverinfo: 'skip',
    } as Data,
  ];
  if (reading.tangent) {
    data.push({
      type: 'scatter',
      mode: 'markers',
      x: reading.points.map((point) => point.x),
      y: reading.points.map((point) => point.y),
      marker: { color: theme.highlight, size: 12 },
      hoverinfo: 'skip',
    } as Data);
  }
  return (
    <div className="visual-block">
      <div className="visual-controls">
        <RangeControl label="level" value={level} min={-2} max={2} step={0.1} onChange={setLevel} />
      </div>
      <p className="visual-readout">{message}</p>
      <Figure data={data} layout={layout2d(theme)} />
    </div>
  );
}

export default function VisualBlock({ kind, params }: { kind: string; params?: Record<string, unknown> }) {
  switch (kind) {
    case 'quadric':
      return <QuadricViewer params={params} />;
    case 'tangent-plane':
      return <TangentPlaneViewer params={params} />;
    case 'gradient':
      return <GradientViewer params={params} />;
    case 'critical-point-viewer':
      return <CriticalPointViewer params={params} />;
    case 'constraint':
      return <ConstraintViewer params={params} />;
    case 'region':
      return <RegionViewer params={params} />;
    case 'polar-region':
      return <PolarViewer params={params} />;
    case 'cylindrical-region':
      return <CylindricalViewer params={params} />;
    case 'spherical-region':
      return <SphericalViewer params={params} />;
    case 'change-of-variables':
      return <ChangeViewer params={params} />;
    case 'solid':
      return <SolidViewer params={params} />;
    case 'curve-sketch':
      return <CurveSketchViewer params={params} />;
    case 'limit':
      return <LimitViewer params={params} />;
    case 'newton':
      return <NewtonViewer params={params} />;
    case 'taylor':
      return <TaylorViewer params={params} />;
    case 'riemann':
      return <RiemannViewer params={params} />;
    default:
      return null;
  }
}
