import { calculateSaturation } from './calculate-saturation';

describe('calculateSaturation works', () => {
  it('calculateSaturation works', () => {
    const sat1 = calculateSaturation(1, 2, 0);
    expect(sat1).toBe(1);

    const sat2 = calculateSaturation(1, 5, 1);
    expect(sat2).toBe(5);

    const sat3 = calculateSaturation(0, 5, 1);
    expect(sat3).toBe(5);

    const sat4 = calculateSaturation(0, 7, 2);
    expect(sat4).toBe(7 / 2);
  });
});
