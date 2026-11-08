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

  it('leaves plain formulas and nested environments alone', () => {
    expect(flattenWrappedAligned('a + b')).toBeNull();
    expect(flattenWrappedAligned(String.raw`\begin{aligned} a \\ &= \begin{pmatrix}1\end{pmatrix} \end{aligned}`)).toBeNull();
  });
});
