import { RGBColor } from '../types/color';
import { max } from '../math/max';
import { min } from '../math/min';
import { fuzzyEquals } from '../math/fuzzy-equals';

const isAchromaticRGB = ({ red, green, blue }: RGBColor, tolerance = 0) => {
  const maxColor = max(red, green, blue);
  const minColor = min(red, green, blue);
  return fuzzyEquals(maxColor, minColor, tolerance);
};

export { isAchromaticRGB };
