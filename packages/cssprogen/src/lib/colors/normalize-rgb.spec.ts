import { normalizeRGB, normalizeRGBA } from './normalize-rgb';

describe('normalizeRGB works', () => {
  it('normalizeRGB', () => {
    const { red, green, blue } = normalizeRGB({
      red: 255,
      green: 255,
      blue: 255,
    });
    expect(red).toBe(1);
    expect(green).toBe(1);
    expect(blue).toBe(1);
  });

  it('normalizeRGBA', () => {
    const { red, green, blue, alpha } = normalizeRGBA({
      red: 255,
      green: 255,
      blue: 255,
      alpha: 255,
    });
    expect(red).toBe(1);
    expect(green).toBe(1);
    expect(blue).toBe(1);
    expect(alpha).toBe(1);
  });
});
