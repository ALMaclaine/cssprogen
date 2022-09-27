import { RGBColor, RGBSet } from '../types/color';
import { CSSProgenError, CSSProgenErrorSet } from '../general/cssprogen-error';

const getHue = (color: RGBColor, match: number): RGBSet => {
  const { red, green, blue }: RGBColor = color;
  switch (match) {
    case red:
      return RGBSet.RED;
    case green:
      return RGBSet.GREEN;
    case blue:
      return RGBSet.BLUE;
    default: {
      throw new CSSProgenError(CSSProgenErrorSet.ERROR_002, [match, color]);
    }
  }
};

export { getHue };
