import { chroma } from './chroma';

describe('chroma works', () => {
  it('chroma works', () => {
    expect(chroma(0, 1)).toBe(0);
    expect(chroma(1, 1)).toBe(0);
    expect(chroma(1, 0)).toBe(0);
    expect(chroma(0, 1)).toBe(0);
    expect(chroma(0.5, 0.5)).toBe(0.5);
  });
});
