import {
  calculateHue,
  calculateHueRed,
  calculateHueGreen,
  calculateHueBlue,
} from './calculate-hue';
import { normalizeRGB } from './normalize-rgb';
import { RGBColor, RGBSet } from '../types/color';

describe('calculateHue works', () => {
  it('calculateHueRed works', () => {
    const color: RGBColor = { red: 255, green: 0, blue: 255 };
    const normalizedColor = normalizeRGB(color);
    const delta = 2;
    const hue = calculateHueRed(normalizedColor, delta);
    const { green, blue } = normalizedColor;
    const constant = green < blue ? 6 : 0;
    expect(hue).toBe((green - blue) / delta + constant);
  });

  it('calculateHueBlue works', () => {
    const color: RGBColor = { red: 255, green: 0, blue: 255 };
    const normalizedColor = normalizeRGB(color);
    const delta = 2;
    const hue = calculateHueBlue(normalizedColor, delta);
    const { red, green } = normalizedColor;
    expect(hue).toBe((red - green) / delta + 4);
  });

  it('calculateHueGreen works', () => {
    const color: RGBColor = { red: 255, green: 0, blue: 255 };
    const normalizedColor = normalizeRGB(color);
    const delta = 2;
    const hue = calculateHueGreen(normalizedColor, delta);
    const { red, blue } = normalizedColor;
    expect(hue).toBe((blue - red) / delta + 2);
  });

  it('calculateHue works', () => {
    const color: RGBColor = { red: 255, green: 0, blue: 255 };
    const normalizedColor = normalizeRGB(color);
    const delta = 2;
    const hue1 = calculateHue(normalizedColor, delta, RGBSet.RED);
    expect(hue1).toBe(calculateHueRed(normalizedColor, delta));

    const hue2 = calculateHue(normalizedColor, delta, RGBSet.GREEN);
    expect(hue2).toBe(calculateHueGreen(normalizedColor, delta));

    const hue3 = calculateHue(normalizedColor, delta, RGBSet.BLUE);
    expect(hue3).toBe(calculateHueBlue(normalizedColor, delta));
  });
});
