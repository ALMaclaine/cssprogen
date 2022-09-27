import { abs } from './abs';

describe('abs works', () => {
  it('abs works work', () => {
    expect(abs(0)).toBe(0);
    expect(abs(1)).toBe(1);
    expect(abs(2)).toBe(2);

    expect(abs(-1)).toBe(1);
    expect(abs(-2)).toBe(2);
  });
});
