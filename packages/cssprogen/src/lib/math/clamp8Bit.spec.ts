import { clamp8Bit } from './clamp8Bit';

describe('clamp works', () => {
  it('clamp works work', () => {
    expect(clamp8Bit(-1)).toBe(0);
    expect(clamp8Bit(0)).toBe(0);
    expect(clamp8Bit(1)).toBe(1);
    expect(clamp8Bit(254)).toBe(254);
    expect(clamp8Bit(255)).toBe(255);
    expect(clamp8Bit(256)).toBe(255);
  });
});
