import { useEffect, useMemo, useState } from 'react';
import type { Data, Layout } from 'plotly.js';
import {
  EXAM_MEET,
  changeReading,
  cylindricalPoint,
  cylindricalReading,
  examArc,
  examShadowPiece,
  mapGeometry,
  mapPoint,
  polarPreset,
  polarReading,
  regionReading,
  solidHeight,
  solidReading,
  sphericalReading,
  MAP_SAMPLE,
  type CutPlane,
  type MapId,
  type Order,
  type PolarShape,
  type RegionPreset,
  type SolidPreset,
  type Strip,
} from '../../visuals/integration.ts';
import { Figure } from './shared.tsx';

const MESH = 28;

type Theme = {
  canvas: string;
  text: string;
  border: string;
  surface: string;
  plane: string;
  highlight: string;
};

type VisualParams = Record<string, unknown> | undefined;

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

function formatNumber(value: number): string {
  if (Math.abs(value) < 1e-8) return '0';
  return Number(value.toFixed(3)).toString();
}

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

function fade(hex: string, alpha: number): string {
  const body = hex.replace('#', '');
  const value = body.length === 3 ? body.split('').map((part) => part + part).join('') : body;
  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function linspace(start: number, end: number, count: number): number[] {
  if (count <= 1) return [start];
  return Array.from({ length: count }, (_, index) => start + ((end - start) * index) / (count - 1));
}

function axesLayout(
  theme: Theme,
  xTitle: string,
  yTitle: string,
  xRange: [number, number],
  yRange: [number, number],
): Partial<Layout> {
  const axis = { color: theme.text, gridcolor: theme.border, zerolinecolor: theme.border };
  return {
    height: 420,
    margin: { l: 48, r: 18, t: 18, b: 46 },
    paper_bgcolor: theme.canvas,
    plot_bgcolor: theme.canvas,
    font: { color: theme.text },
    showlegend: false,
    xaxis: { ...axis, title: { text: xTitle }, range: xRange },
    yaxis: { ...axis, title: { text: yTitle }, range: yRange, scaleanchor: 'x', scaleratio: 1 },
  };
}

function sceneLayout(theme: Theme, xRange: [number, number], yRange: [number, number], zRange: [number, number]): Partial<Layout> {
  const axis = { color: theme.text, gridcolor: theme.border, zerolinecolor: theme.border };
  return {
    height: 420,
    margin: { l: 0, r: 0, t: 8, b: 0 },
    paper_bgcolor: theme.canvas,
    plot_bgcolor: theme.canvas,
    font: { color: theme.text },
    showlegend: false,
    scene: {
      bgcolor: theme.canvas,
      aspectmode: 'data',
      xaxis: { ...axis, title: { text: 'x' }, range: xRange },
      yaxis: { ...axis, title: { text: 'y' }, range: yRange },
      zaxis: { ...axis, title: { text: 'z' }, range: zRange },
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

function SelectControl<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select aria-label={label} value={value} onChange={(event) => onChange(event.currentTarget.value as T)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function stroke(x: number[], y: number[], color: string, width = 3): Data {
  return { type: 'scatter', mode: 'lines', x, y, line: { color, width }, hoverinfo: 'skip' } as Data;
}

function filled(x: number[], y: number[], color: string, line: string): Data {
  return {
    type: 'scatter',
    mode: 'lines',
    x,
    y,
    fill: 'toself',
    fillcolor: color,
    line: { color: line, width: 2 },
    hoverinfo: 'skip',
  } as Data;
}

function marker(x: number, y: number, color: string): Data {
  return { type: 'scatter', mode: 'markers', x: [x], y: [y], marker: { color, size: 10 }, hoverinfo: 'skip' } as Data;
}

function marker3d(x: number, y: number, z: number, color: string): Data {
  return {
    type: 'scatter3d',
    mode: 'markers',
    x: [x],
    y: [y],
    z: [z],
    marker: { color, size: 4 },
    hoverinfo: 'skip',
  } as Data;
}

function mesh(x: number[][], y: number[][], z: number[][], color: string, opacity: number): Data {
  return {
    type: 'surface',
    x,
    y,
    z,
    colorscale: [
      [0, color],
      [1, color],
    ],
    opacity,
    showscale: false,
    hoverinfo: 'skip',
  } as Data;
}

function stripOutline(strip: Strip, order: Order): { x: number[]; y: number[] } {
  const lower = (outer: number) => strip.lower.intercept + strip.lower.slope * outer;
  const upper = (outer: number) => strip.upper.intercept + strip.upper.slope * outer;
  const start = strip.outer0;
  const end = strip.outer1;
  if (order === 'dy-dx') {
    return {
      x: [start, end, end, start, start],
      y: [lower(start), lower(end), upper(end), upper(start), lower(start)],
    };
  }
  return {
    x: [lower(start), lower(end), upper(end), upper(start), lower(start)],
    y: [start, end, end, start, start],
  };
}

function examShadowTraces(theme: Theme): Data[] {
  const arc = examArc();
  const reverse = [...arc].reverse();
  const paraboloid = filled(
    [0, ...arc.map((point) => point.x), 0],
    [0, ...arc.map((point) => point.y), 0],
    fade(theme.surface, 0.55),
    theme.surface,
  );
  const plane = filled(
    [0, 0, 1, ...reverse.map((point) => point.x)],
    [EXAM_MEET, 1, 0, ...reverse.map((point) => point.y)],
    fade(theme.plane, 0.5),
    theme.plane,
  );
  return [
    paraboloid,
    plane,
    stroke([0, 1, 0, 0], [0, 0, 1, 0], theme.text, 2),
    stroke(
      arc.map((point) => point.x),
      arc.map((point) => point.y),
      theme.highlight,
      3,
    ),
  ];
}

export function RegionViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [preset, setPreset] = useState<RegionPreset>(() =>
    choiceParam(params, 'preset', ['triangle', 'split', 'exam-shadow'] as const, 'triangle'),
  );
  const [order, setOrder] = useState<Order>(() => choiceParam(params, 'order', ['dy-dx', 'dx-dy'] as const, 'dy-dx'));
  const [intercept, setIntercept] = useState(() => numericParam(params, 'intercept', 1, 0.5, 3));
  const [peak, setPeak] = useState(() => numericParam(params, 'peak', 1, 0.2, 3));
  const [base, setBase] = useState(() => numericParam(params, 'base', 2, 0.4, 4));
  const safeBase = Math.max(base, peak + 0.2);
  const reading = regionReading(preset, order, { intercept, peak, base: safeBase, height: 1 });
  const span = preset === 'exam-shadow' ? 1.25 : preset === 'split' ? safeBase + 0.25 : intercept + 0.35;
  const data = useMemo(() => {
    if (preset === 'exam-shadow') return examShadowTraces(theme);
    return reading.strips.map((strip, index) => {
      const outline = stripOutline(strip, order);
      const color = index === 0 ? theme.surface : theme.plane;
      return filled(outline.x, outline.y, fade(color, 0.45), color);
    });
  }, [order, preset, reading.strips, theme]);

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <SelectControl
          label="Region"
          value={preset}
          options={[
            { value: 'triangle', label: 'Triangle' },
            { value: 'split', label: 'Two pieces' },
            { value: 'exam-shadow', label: 'Exam shadow' },
          ]}
          onChange={(next) => {
            setPreset(next);
            if (next === 'split') setOrder('dy-dx');
          }}
        />
        <SelectControl
          label="Region order"
          value={order}
          options={[
            { value: 'dy-dx', label: 'dy dx' },
            { value: 'dx-dy', label: 'dx dy' },
          ]}
          onChange={setOrder}
        />
        {preset === 'triangle' ? (
          <RangeControl label="intercept" value={intercept} min={0.5} max={3} step={0.1} onChange={setIntercept} />
        ) : null}
        {preset === 'split' ? (
          <>
            <RangeControl
              label="peak"
              value={peak}
              min={0.2}
              max={3}
              step={0.1}
              onChange={(value) => {
                setPeak(value);
                setBase((current) => (current <= value ? Math.min(4, value + 0.5) : current));
              }}
            />
            <RangeControl label="base" value={safeBase} min={0.4} max={4} step={0.1} onChange={setBase} />
          </>
        ) : null}
      </div>
      <p className="visual-readout">{reading.text}</p>
      <p className="visual-readout">{reading.areaText}</p>
      {reading.meetText ? <p className="visual-readout">{reading.meetText}</p> : null}
      <Figure data={data} layout={axesLayout(theme, 'x', 'y', [-0.2, span], [-0.2, span])} />
    </div>
  );
}

function polarPolygon(r0: number, r1: number, theta0: number, theta1: number): { x: number[]; y: number[] } {
  const angles = linspace(theta0, theta1, 72);
  const outer = angles;
  const inner = [...angles].reverse();
  return {
    x: [...outer.map((angle) => r1 * Math.cos(angle)), ...inner.map((angle) => r0 * Math.cos(angle))],
    y: [...outer.map((angle) => r1 * Math.sin(angle)), ...inner.map((angle) => r0 * Math.sin(angle))],
  };
}

export function PolarViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const initial = choiceParam(params, 'shape', ['disk', 'sector', 'annulus'] as const, 'disk');
  const start = polarPreset(initial);
  const [shape, setShape] = useState<PolarShape>(initial);
  const [r0, setR0] = useState(() => numericParam(params, 'r0', start.r0, 0, 2.5));
  const [r1, setR1] = useState(() => numericParam(params, 'r1', start.r1, 0.1, 2.5));
  const [theta0, setTheta0] = useState(() => numericParam(params, 'theta0', start.theta0, 0, 2 * Math.PI));
  const [theta1, setTheta1] = useState(() => numericParam(params, 'theta1', start.theta1, 0, 2 * Math.PI));
  const reading = polarReading(shape, r0, r1, theta0, theta1);
  const polygon = polarPolygon(Math.min(r0, r1), Math.max(r0, r1), theta0, theta1);
  const span = Math.max(r0, r1, 0.5) + 0.35;

  function chooseShape(next: PolarShape) {
    const preset = polarPreset(next);
    setShape(next);
    setR0(preset.r0);
    setR1(preset.r1);
    setTheta0(preset.theta0);
    setTheta1(preset.theta1);
  }

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <SelectControl
          label="Polar shape"
          value={shape}
          options={[
            { value: 'disk', label: 'disk' },
            { value: 'sector', label: 'sector' },
            { value: 'annulus', label: 'annulus' },
          ]}
          onChange={chooseShape}
        />
        <RangeControl
          label="inner radius"
          value={r0}
          min={0}
          max={2.5}
          step={0.01}
          onChange={(value) => setR0(Math.min(value, r1))}
        />
        <RangeControl
          label="outer radius"
          value={r1}
          min={0.1}
          max={2.5}
          step={0.01}
          onChange={(value) => {
            setR1(value);
            setR0((current) => Math.min(current, value));
          }}
        />
        <RangeControl label="theta from" value={theta0} min={0} max={2 * Math.PI} step={0.01} onChange={setTheta0} />
        <RangeControl label="theta to" value={theta1} min={0} max={2 * Math.PI} step={0.01} onChange={setTheta1} />
      </div>
      <p className="visual-readout">{reading.text}</p>
      <Figure
        data={[filled(polygon.x, polygon.y, fade(theme.surface, 0.45), theme.surface)]}
        layout={axesLayout(theme, 'x', 'y', [-span, span], [-span, span])}
      />
    </div>
  );
}

export function CylindricalViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [top, setTop] = useState(() => numericParam(params, 'top', 5, 1, 8));
  const reading = cylindricalReading({ z1: top });
  const point = cylindricalPoint(1, Math.PI / 2, top);
  const data = useMemo(() => {
    const theta = linspace(0, 2 * Math.PI, MESH);
    const heights = linspace(0, top, 8);
    const radii = linspace(0, 1, 12);
    return [
      mesh(
        heights.map(() => theta.map((angle) => Math.cos(angle))),
        heights.map(() => theta.map((angle) => Math.sin(angle))),
        heights.map((height) => theta.map(() => height)),
        theme.surface,
        0.72,
      ),
      mesh(
        radii.map((radius) => theta.map((angle) => radius * Math.cos(angle))),
        radii.map((radius) => theta.map((angle) => radius * Math.sin(angle))),
        radii.map(() => theta.map(() => top)),
        theme.plane,
        0.45,
      ),
      mesh(
        radii.map((radius) => theta.map((angle) => radius * Math.cos(angle))),
        radii.map((radius) => theta.map((angle) => radius * Math.sin(angle))),
        radii.map(() => theta.map(() => 0)),
        theme.plane,
        0.28,
      ),
      marker3d(point.x, point.y, point.z, theme.highlight),
    ];
  }, [point.x, point.y, point.z, theme, top]);

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <RangeControl label="top z" value={top} min={1} max={8} step={1} onChange={setTop} />
      </div>
      <p className="visual-readout">{reading.text}</p>
      <p className="visual-readout">{reading.pointText}</p>
      <Figure data={data} layout={sceneLayout(theme, [-1.4, 1.4], [-1.4, 1.4], [0, Math.max(top, 1) + 0.2])} />
    </div>
  );
}

export function SphericalViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [rho, setRho] = useState(() => numericParam(params, 'rho', 1, 0.4, 1.6));
  const reading = sphericalReading({ rho1: rho });
  const data = useMemo(() => {
    const phi = linspace(Math.PI / 4, Math.PI / 2, MESH);
    const theta = linspace(0, 2 * Math.PI, MESH);
    const radii = linspace(0, rho, 16);
    return [
      mesh(
        phi.map((angle) => theta.map((turn) => rho * Math.sin(angle) * Math.cos(turn))),
        phi.map((angle) => theta.map((turn) => rho * Math.sin(angle) * Math.sin(turn))),
        phi.map((angle) => theta.map(() => rho * Math.cos(angle))),
        theme.surface,
        0.72,
      ),
      mesh(
        radii.map((radius) => theta.map((turn) => radius * Math.sin(Math.PI / 4) * Math.cos(turn))),
        radii.map((radius) => theta.map((turn) => radius * Math.sin(Math.PI / 4) * Math.sin(turn))),
        radii.map((radius) => theta.map(() => radius * Math.cos(Math.PI / 4))),
        theme.plane,
        0.55,
      ),
      mesh(
        radii.map((radius) => theta.map((turn) => radius * Math.cos(turn))),
        radii.map((radius) => theta.map((turn) => radius * Math.sin(turn))),
        radii.map(() => theta.map(() => 0)),
        theme.highlight,
        0.28,
      ),
    ];
  }, [rho, theme]);
  const span = rho + 0.25;

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <RangeControl label="outer rho" value={rho} min={0.4} max={1.6} step={0.1} onChange={setRho} />
      </div>
      <p className="visual-readout">{reading.text}</p>
      <p className="visual-readout">{reading.phiText}</p>
      <p className="visual-readout">{reading.pointText}</p>
      <Figure data={data} layout={sceneLayout(theme, [-span, span], [-span, span], [0, span])} />
    </div>
  );
}

function sampledCell(map: MapId): { u: number[]; v: number[] } {
  const cell = mapGeometry(map).cell;
  const count = map === 'parabola' ? 24 : 2;
  const bottom = linspace(cell.u0, cell.u1, count);
  const right = linspace(cell.v0, cell.v1, count);
  const top = linspace(cell.u1, cell.u0, count);
  const left = linspace(cell.v1, cell.v0, count);
  return {
    u: [...bottom, ...right.map(() => cell.u1), ...top, ...left.map(() => cell.u0)],
    v: [...bottom.map(() => cell.v0), ...right, ...top.map(() => cell.v1), ...left],
  };
}

export function ChangeViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [map, setMap] = useState<MapId>(() => choiceParam(params, 'map', ['linear', 'shear', 'parabola'] as const, 'linear'));
  const initial = MAP_SAMPLE[choiceParam(params, 'map', ['linear', 'shear', 'parabola'] as const, 'linear')];
  const [u, setU] = useState(() => numericParam(params, 'u', initial.u, 0, 4));
  const [v, setV] = useState(() => numericParam(params, 'v', initial.v, 0, 2));
  const geometry = mapGeometry(map);
  const reading = changeReading(map, u, v);
  const figures = useMemo(() => {
    const count = 6;
    const samples = 12;
    const us = linspace(geometry.u0, geometry.u1, count);
    const vs = linspace(geometry.v0, geometry.v1, count);
    const uv: Data[] = [];
    const xy: Data[] = [];
    const pushLine = (lineU: number[], lineV: number[], color: string, width: number) => {
      uv.push(stroke(lineU, lineV, color, width));
      const imageX: number[] = [];
      const imageY: number[] = [];
      for (let index = 0; index < lineU.length; index += 1) {
        const image = mapPoint(map, lineU[index], lineV[index]);
        if (!image) return;
        imageX.push(image.x);
        imageY.push(image.y);
      }
      xy.push(stroke(imageX, imageY, color, width));
    };
    for (const value of us) {
      const vEnd = geometry.triangular ? value : geometry.v1;
      const vStart = geometry.triangular ? Math.max(geometry.v0, 0) : geometry.v0;
      if (vEnd <= vStart + 1e-8) continue;
      const lineV = linspace(vStart, vEnd, samples);
      pushLine(lineV.map(() => value), lineV, theme.surface, 1.5);
    }
    for (const value of vs) {
      const uStart = geometry.triangular ? Math.max(geometry.u0, value) : geometry.u0;
      if (geometry.u1 <= uStart + 1e-8) continue;
      const lineU = linspace(uStart, geometry.u1, samples);
      pushLine(lineU, lineU.map(() => value), theme.border, 1.5);
    }
    const cell = sampledCell(map);
    pushLine(cell.u, cell.v, theme.highlight, 4);
    uv.push(marker(u, v, theme.highlight));
    if (!reading.outside && reading.x !== undefined && reading.y !== undefined) xy.push(marker(reading.x, reading.y, theme.highlight));
    const spanU = [geometry.u0 - 0.2, geometry.u1 + 0.2] as [number, number];
    const spanV = [Math.min(geometry.v0, -0.2), geometry.v1 + 0.2] as [number, number];
    const imageValues = xy.flatMap((trace) => {
      const xs = (trace as { x?: number[] }).x ?? [];
      const ys = (trace as { y?: number[] }).y ?? [];
      return [...xs, ...ys];
    });
    const low = Math.min(...imageValues, 0) - 0.25;
    const high = Math.max(...imageValues, 1) + 0.25;
    return {
      uv,
      xy,
      uvLayout: axesLayout(theme, 'u', 'v', spanU, spanV),
      xyLayout: axesLayout(theme, 'x', 'y', [low, high], [low, high]),
    };
  }, [geometry, map, reading.outside, reading.x, reading.y, theme, u, v]);

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <SelectControl
          label="Map"
          value={map}
          options={[
            { value: 'linear', label: 'Linear' },
            { value: 'shear', label: 'Shear' },
            { value: 'parabola', label: 'Parabola' },
          ]}
          onChange={(next) => {
            const sample = MAP_SAMPLE[next];
            setMap(next);
            setU(sample.u);
            setV(sample.v);
          }}
        />
        <RangeControl label="sample u" value={u} min={geometry.u0} max={geometry.u1} step={0.1} onChange={setU} />
        <RangeControl label="sample v" value={v} min={geometry.v0} max={geometry.v1} step={0.1} onChange={setV} />
      </div>
      <p className="visual-readout">{reading.text}</p>
      <p className="visual-readout">{reading.pointText}</p>
      <div className="visual-plot-grid">
        <Figure data={figures.uv} layout={figures.uvLayout} />
        <Figure data={figures.xy} layout={figures.xyLayout} />
      </div>
    </div>
  );
}

function sphereSolid(theme: Theme): Data[] {
  const radii = linspace(0, 1, MESH);
  const theta = linspace(0, 2 * Math.PI, MESH);
  const sheet = (zAt: (radius: number) => number, color: string, opacity: number) =>
    mesh(
      radii.map((radius) => theta.map((angle) => radius * Math.cos(angle))),
      radii.map((radius) => theta.map((angle) => radius * Math.sin(angle))),
      radii.map((radius) => theta.map(() => zAt(radius))),
      color,
      opacity,
    );
  const meet = 1 / Math.SQRT2;
  const ring = linspace(0, 2 * Math.PI, 60);
  return [
    sheet((radius) => Math.sqrt(Math.max(0, 1 - radius * radius)), theme.surface, 0.28),
    sheet((radius) => radius, theme.plane, 0.35),
    sheet((radius) => Math.min(radius, Math.sqrt(Math.max(0, 1 - radius * radius))), theme.highlight, 0.72),
    sheet(() => 0, theme.border, 0.22),
    {
      type: 'scatter3d',
      mode: 'lines',
      x: ring.map((angle) => meet * Math.cos(angle)),
      y: ring.map((angle) => meet * Math.sin(angle)),
      z: ring.map(() => meet),
      line: { color: theme.text, width: 4 },
      hoverinfo: 'skip',
    } as Data,
  ];
}

function paraboloidSolid(theme: Theme): Data[] {
  const xs = linspace(0, 1, MESH);
  const shares = linspace(0, 1, MESH);
  const x = shares.map(() => xs);
  const y = shares.map((share) => xs.map((value) => share * (1 - value)));
  const sheet = (zAt: (px: number, py: number) => number, color: string, opacity: number) =>
    mesh(
      x,
      y,
      shares.map((share) => xs.map((value) => zAt(value, share * (1 - value)))),
      color,
      opacity,
    );
  return [
    sheet((px, py) => Math.max(0, 1 - px - py), theme.surface, 0.28),
    sheet((px, py) => px * px + py * py, theme.plane, 0.35),
    sheet((px, py) => solidHeight('plane-paraboloid', px, py) ?? 0, theme.highlight, 0.72),
    {
      type: 'surface',
      x,
      y,
      z: shares.map(() => xs.map(() => 0)),
      surfacecolor: shares.map((share) =>
        xs.map((value) => (examShadowPiece(value, share * (1 - value)) === 'plane' ? 1 : 0)),
      ),
      colorscale: [
        [0, theme.surface],
        [1, theme.plane],
      ],
      cmin: 0,
      cmax: 1,
      opacity: 0.9,
      showscale: false,
      hoverinfo: 'skip',
    } as Data,
  ];
}

function solidCut(preset: SolidPreset, cut: CutPlane, theme: Theme): { data: Data[]; layout: Partial<Layout> } {
  if (preset === 'sphere-cone' && cut === 'z') {
    const angles = linspace(0, 2 * Math.PI, 80);
    const meet = 1 / Math.SQRT2;
    return {
      data: [
        filled(
          angles.map((angle) => Math.cos(angle)),
          angles.map((angle) => Math.sin(angle)),
          fade(theme.surface, 0.35),
          theme.surface,
        ),
        stroke(
          angles.map((angle) => meet * Math.cos(angle)),
          angles.map((angle) => meet * Math.sin(angle)),
          theme.highlight,
        ),
      ],
      layout: axesLayout(theme, 'x', 'y', [-1.3, 1.3], [-1.3, 1.3]),
    };
  }
  if (preset === 'sphere-cone') {
    const horizontal = linspace(-1, 1, 80);
    const circle = horizontal.map((value) => Math.sqrt(Math.max(0, 1 - value * value)));
    const cone = horizontal.map((value) => Math.abs(value));
    const roof = circle.map((height, index) => Math.min(height, cone[index]));
    const label = cut === 'y' ? 'x' : 'y';
    return {
      data: [
        filled([...horizontal, ...[...horizontal].reverse()], [...horizontal.map(() => 0), ...[...roof].reverse()], fade(theme.highlight, 0.4), theme.highlight),
        stroke(horizontal, circle, theme.surface),
        stroke(horizontal, cone, theme.plane),
      ],
      layout: axesLayout(theme, label, 'z', [-1.3, 1.3], [-0.2, 1.3]),
    };
  }
  if (cut === 'z') return { data: examShadowTraces(theme), layout: axesLayout(theme, 'x', 'y', [-0.2, 1.25], [-0.2, 1.25]) };
  const horizontal = linspace(0, 1, 60);
  const line = horizontal.map((value) => 1 - value);
  const curve = horizontal.map((value) => value * value);
  const roof = line.map((height, index) => Math.min(height, curve[index]));
  const label = cut === 'y' ? 'x' : 'y';
  return {
    data: [
      filled([...horizontal, ...[...horizontal].reverse()], [...horizontal.map(() => 0), ...[...roof].reverse()], fade(theme.highlight, 0.4), theme.highlight),
      stroke(horizontal, line, theme.surface),
      stroke(horizontal, curve, theme.plane),
      marker(EXAM_MEET, EXAM_MEET * EXAM_MEET, theme.highlight),
    ],
    layout: axesLayout(theme, label, 'z', [-0.15, 1.2], [-0.15, 1.2]),
  };
}

export function SolidViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const [preset, setPreset] = useState<SolidPreset>(() =>
    choiceParam(params, 'preset', ['sphere-cone', 'plane-paraboloid'] as const, 'sphere-cone'),
  );
  const [cut, setCut] = useState<CutPlane>(() => choiceParam(params, 'cut', ['x', 'y', 'z'] as const, 'y'));
  const reading = solidReading(preset, cut);
  const solid = useMemo(() => (preset === 'sphere-cone' ? sphereSolid(theme) : paraboloidSolid(theme)), [preset, theme]);
  const flat = useMemo(() => solidCut(preset, cut, theme), [cut, preset, theme]);
  const scene =
    preset === 'sphere-cone'
      ? sceneLayout(theme, [-1.2, 1.2], [-1.2, 1.2], [0, 1.2])
      : sceneLayout(theme, [-0.15, 1.15], [-0.15, 1.15], [0, 1.15]);

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <SelectControl
          label="Solid"
          value={preset}
          options={[
            { value: 'sphere-cone', label: 'Sphere and cone' },
            { value: 'plane-paraboloid', label: 'Plane and paraboloid' },
          ]}
          onChange={setPreset}
        />
        <SelectControl
          label="Cut plane"
          value={cut}
          options={[
            { value: 'x', label: 'x = 0' },
            { value: 'y', label: 'y = 0' },
            { value: 'z', label: 'z = 0' },
          ]}
          onChange={setCut}
        />
      </div>
      <p className="visual-readout">{reading.text}</p>
      <p className="visual-readout">{reading.heightText}</p>
      <p className="visual-readout">{reading.cutText}</p>
      <div className="visual-plot-grid">
        <Figure data={solid} layout={scene} />
        <Figure data={flat.data} layout={flat.layout} />
      </div>
    </div>
  );
}
