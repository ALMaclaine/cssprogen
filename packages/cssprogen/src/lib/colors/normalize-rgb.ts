import { RGBColor } from '../types/color';
import { invlerp8Bit } from '../math/invlerp';

const normalizeRGB = ({ red, green, blue }: RGBColor): RGBColor => {
  return {
    red: invlerp8Bit(red),
    green: invlerp8Bit(green),
    blue: invlerp8Bit(blue),
  };
};

export { normalizeRGB };
