import { describe, expect, it } from 'vitest';
import { flattenWrappedAligned } from '../src/ui/markdown.ts';

describe('flattenWrappedAligned', () => {
  it('joins a hard-wrapped single expression into one line', () => {
    const math = String.raw`\begin{aligned}
  \langle v_1\rangle\\
  &+ \langle w_1\rangle\\
  &=\langle v_1 + w_1\rangle,
  \end{aligned}`;
    expect(flattenWrappedAligned(math)).toBe(String.raw`\langle v_1\rangle + \langle w_1\rangle =\langle v_1 + w_1\rangle,`);
  });

  it('leaves a derivation whose first row has an alignment point', () => {
    expect(flattenWrappedAligned(String.raw`\begin{aligned} a &= b \\ &= c \end{aligned}`)).toBeNull();
  });

  it('merges continuation rows into the row above when the first row has an alignment point', () => {
    const math = String.raw`\begin{aligned}
    x^2+y^2+z^2&=\rho^2\sin^2\phi\cos^2\theta\\
    &\quad+\rho^2\sin^2\phi\sin^2\theta\\
    &\quad+\rho^2\cos^2\phi.
    \end{aligned}`;
    expect(flattenWrappedAligned(math)).toBe(
      String.raw`\begin{aligned}x^2+y^2+z^2&=\rho^2\sin^2\phi\cos^2\theta +\rho^2\sin^2\phi\sin^2\theta +\rho^2\cos^2\phi.\end{aligned}`,
    );
  });

  it('merges continuation rows but keeps each new step as its own row', () => {
    const math = String.raw`\begin{aligned}
    &\rho^2\sin^2\phi\cos^2\theta\\
    &\quad+\rho^2\sin^2\phi\sin^2\theta\\
    &=\rho^2\sin^2\phi(\cos^2\theta+\sin^2\theta)\\
    &=\rho^2\sin^2\phi.
    \end{aligned}`;
    expect(flattenWrappedAligned(math)).toBe(
      String.raw`\begin{aligned}&\rho^2\sin^2\phi\cos^2\theta +\rho^2\sin^2\phi\sin^2\theta \\ &=\rho^2\sin^2\phi(\cos^2\theta+\sin^2\theta) \\ &=\rho^2\sin^2\phi.\end{aligned}`,
    );
  });

  it('keeps a note after a quad separated from the expression', () => {
    const math = String.raw`\begin{aligned} a &= b \\ &\quad\text{for } x > 0 \end{aligned}`;
    expect(flattenWrappedAligned(math)).toBe(String.raw`\begin{aligned}a &= b \quad \text{for } x > 0\end{aligned}`);
  });

  it('leaves plain formulas and nested environments alone', () => {
    expect(flattenWrappedAligned('a + b')).toBeNull();
    expect(flattenWrappedAligned(String.raw`\begin{aligned} a \\ &= \begin{pmatrix}1\end{pmatrix} \end{aligned}`)).toBeNull();
  });
});
