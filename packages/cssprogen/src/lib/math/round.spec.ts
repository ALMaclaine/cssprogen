import { round } from './round';

describe('round works', () => {
  it('round works work', () => {
    expect(round(0)).toBe(0);
    expect(round(0.2)).toBe(0);
    expect(round(0.5)).toBe(1);
    expect(round(0.9)).toBe(1);
    expect(round(1)).toBe(1);
  });
});
