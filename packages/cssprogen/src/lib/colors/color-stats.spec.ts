import { colorStats } from './color-stats';
import { normalizeRGB } from './normalize-rgb';
import { RGBColor, RGBSet } from '../types/color';
import { calculateSaturation } from './calculate-saturation';

describe('colorStats works', () => {
  it('colorStats works', () => {
    const color: RGBColor = { red: 255, green: 0, blue: 255 };
    const normalizedColor = normalizeRGB(color);
    const {
      maxColor,
      minColor,
      delta,
      lightness,
      saturation,
      maxColorHue,
      minColorHue,
    } = colorStats(normalizedColor);
    expect(maxColor).toBe(1);
    expect(minColor).toBe(0);
    expect(delta).toBe(maxColor - minColor);
    expect(lightness).toBe((maxColor + minColor) / 2);
    expect(saturation).toBe(
      calculateSaturation(lightness, delta, maxColor + minColor)
    );
    expect(maxColorHue).toBe(RGBSet.RED);
    expect(minColorHue).toBe(RGBSet.GREEN);
  });
});
