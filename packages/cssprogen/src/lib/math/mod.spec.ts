import { mod } from './mod';

describe('mod works', () => {
  it('mod works work', () => {
    expect(mod(5, 2)).toBe(1);
    expect(mod(5, 0)).toBe(NaN);
    expect(mod(-1, 2)).toBe(-1);
    expect(mod(5, 1)).toBe(0);
  });
});
