import { RGBColor, RGBSet } from 'cssprogen';

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
  normalizedRGB: RGBColor,
  delta: number,
  hue: RGBSet
): number => {
  switch (hue) {
    case RGBSet.RED:
      return calculateHueRed(normalizedRGB, delta);
    case RGBSet.GREEN:
      return calculateHueGreen(normalizedRGB, delta);
    case RGBSet.BLUE:
      return calculateHueBlue(normalizedRGB, delta);
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = hue;
      return 0;
    }
  }
};

export { calculateHue, calculateHueRed, calculateHueGreen, calculateHueBlue };
