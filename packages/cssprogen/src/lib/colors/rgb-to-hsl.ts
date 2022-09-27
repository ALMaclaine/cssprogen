import { normalizeRGB } from './normalize-rgb';
import { HSLColor, RGBColor, RGBSet } from '../types/color';
import { isAchromaticRGB } from './is-achromatic';
import { colorStats } from './color-stats';

const calculateHueRed = (normalizedRGB: RGBColor, delta: number): number => {
  const { green, blue }: RGBColor = normalizedRGB;
  const constant = green < blue ? 6 : 0;
  return (green - blue) / delta + constant;
};

const calculateHueGreen = (normalizedRGB: RGBColor, delta: number): number => {
  const { red, blue }: RGBColor = normalizedRGB;
  return (blue - red) / delta + 2;
};

const calculateHueBlue = (normalizedRGB: RGBColor, delta: number): number => {
  const { red, green }: RGBColor = normalizedRGB;
  return (red - green) / delta + 4;
};

const calculateHue = (
  normalizeRGB: RGBColor,
  delta: number,
  hue: RGBSet
): number => {
  switch (hue) {
    case RGBSet.RED:
      return calculateHueRed(normalizeRGB, delta);
    case RGBSet.GREEN:
      return calculateHueGreen(normalizeRGB, delta);
    case RGBSet.BLUE:
      return calculateHueBlue(normalizeRGB, delta);
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = hue;
      return 0;
    }
  }
};

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
