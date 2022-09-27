import { normalizeRGB } from './normalize-rgb';
import { HSLColor, HSLAColor, RGBColor, RGBAColor } from '../types/color';
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

const rgbaToHSLA = (color: RGBAColor, tolerance = 0): HSLAColor => {
  const { saturation, lightness, hue }: HSLColor = rgbToHSL(color, tolerance);
  const { alpha } = color;

  if (isAchromaticRGB(color, tolerance)) {
    return { hue: 0, saturation: 0, lightness, alpha };
  } else {
    return { hue, saturation, lightness, alpha };
  }
};

export { rgbToHSL, rgbaToHSLA };
