import { normalizeRGB } from './normalize-rgb';
import { ColorStats, HSLColor, RGBColor, RGBSet } from '../types/color';
import { max } from '../math/max';
import { min } from '../math/min';
import { isAchromaticRGB } from './is-achromatic';
import { getHue } from './get-hue';

const calculateSaturation = (lightness: number, delta: number, sum: number) => {
  if (lightness > 0.5) {
    return delta / (2 - sum);
  } else {
    return delta / sum;
  }
};

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
