import { normalizeRGB } from './normalize-rgb';
import { HSLColor, RGBColor, RGBSet } from '../types/color';
import { isAchromaticRGB } from './is-achromatic';
import { colorStats } from './color-stats';
import { calculateHue } from './calculate-hue';

const rgbToHSL = (color: RGBColor, tolerance = 0): HSLColor => {
  const normalizedRGB = normalizeRGB(color);
  const { lightness, delta, saturation, maxColorHue } =
    colorStats(normalizedRGB);

  if (isAchromaticRGB(color, tolerance)) {
    return { hue: 0, saturation: 0, lightness };
  } else {
    const hue = 60 * calculateHue(normalizedRGB, delta, maxColorHue);
    return { hue, saturation, lightness };
  }
};

export { rgbToHSL };
