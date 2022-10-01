import { clamp, clamp8Bit } from './clamp';

describe('clamp works', () => {
  it('clamp works work', () => {
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(1, 0, 10)).toBe(1);

    expect(clamp(9, 0, 10)).toBe(9);
    expect(clamp(10, 0, 10)).toBe(10);
    expect(clamp(11, 0, 10)).toBe(10);

    expect(clamp(-1, 10, 10)).toBe(10);
    expect(clamp(0, 10, 10)).toBe(10);
    expect(clamp(1, 10, 10)).toBe(10);

    expect(clamp(-1, 0, 0)).toBe(0);
    expect(clamp(0, 0, 0)).toBe(0);
    expect(clamp(1, 0, 0)).toBe(0);

    expect(clamp(-1, 10, 0)).toBe(0);
    expect(clamp(0, 10, 0)).toBe(0);
    expect(clamp(1, 10, 0)).toBe(0);

    expect(clamp(-1)).toBe(0);
    expect(clamp(0)).toBe(0);
    expect(clamp(0.5)).toBe(0.5);
    expect(clamp(1)).toBe(1);
    expect(clamp(1.5)).toBe(1);
  });

  it('clamp8Bit works work', () => {
    expect(clamp8Bit(-1)).toBe(0);
    expect(clamp8Bit(0)).toBe(0);
    expect(clamp8Bit(1)).toBe(1);
    expect(clamp8Bit(254)).toBe(254);
    expect(clamp8Bit(255)).toBe(255);
    expect(clamp8Bit(256)).toBe(255);
  });
});
