import { max } from './max';

describe('max works', () => {
  it('max works work', () => {
    expect(max(0, 1)).toBe(1);
    expect(max(1, 1)).toBe(1);
    expect(max(1, 0)).toBe(1);

    expect(max(-1, 1)).toBe(1);
    expect(max(1, -1)).toBe(1);

    expect(max(-1, -2)).toBe(-1);
    expect(max(-2, -1)).toBe(-1);

    expect(max(2, 1)).toBe(2);
    expect(max(1, 2)).toBe(2);
  });
});
