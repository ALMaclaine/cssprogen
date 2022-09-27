import { lerp, lerp8Bit } from './lerp';

describe('lerp works', () => {
  it('lerp works work', () => {
    expect(lerp(0, 20, 80)).toBe(20);
    expect(lerp(1, 20, 80)).toBe(80);
    expect(lerp(0.5, 0, 80)).toBe(40);
  });
  it('lerp8Bit works work', () => {
    expect(lerp8Bit(-1)).toBe(-255);
    expect(lerp8Bit(0)).toBe(0);
    expect(lerp8Bit(0.5)).toBe(255 / 2);
    expect(lerp8Bit(1)).toBe(255);
    expect(lerp8Bit(2)).toBe(255 * 2);
  });
});
