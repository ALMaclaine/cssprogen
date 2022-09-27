import { normalizeRGB } from './normalize-rgb';

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
});
