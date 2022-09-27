import { min } from './min';

describe('min works', () => {
  it('min works work', () => {
    expect(min(0, 1)).toBe(0);
    expect(min(1, 1)).toBe(1);
    expect(min(1, 0)).toBe(0);

    expect(min(-1, 1)).toBe(-1);
    expect(min(1, -1)).toBe(-1);

    expect(min(-1, -2)).toBe(-2);
    expect(min(-2, -1)).toBe(-2);

    expect(min(2, 1)).toBe(1);
    expect(min(1, 2)).toBe(1);
  });
});
