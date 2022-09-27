import { ColorStats, RGBColor } from '../types/color';
import { max } from '../math/max';
import { min } from '../math/min';
import { getHue } from './get-hue';
import { calculateSaturation } from './calculate-saturation';

const colorStats = (normalizedRGB: RGBColor): ColorStats => {
  const { red, green, blue }: RGBColor = normalizedRGB;
  const maxColor = max(red, green, blue);
  const minColor = min(red, green, blue);
  const maxMinSum = maxColor + minColor;
  const delta = maxColor - minColor;
  const lightness = maxMinSum / 2;
  const saturation = calculateSaturation(lightness, delta, maxMinSum);
  return {
    maxColor,
    minColor,
    delta,
    lightness,
    saturation,
    maxColorHue: getHue(normalizedRGB, maxColor),
    minColorHue: getHue(normalizedRGB, minColor),
  };
};

export { colorStats };
