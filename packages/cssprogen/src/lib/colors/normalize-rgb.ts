import { invlerp8Bit, RGBColor, RGBAColor } from 'cssprogen';

const normalizeRGB = ({ red, green, blue }: RGBColor): RGBColor => {
  return {
    red: invlerp8Bit(red),
    green: invlerp8Bit(green),
    blue: invlerp8Bit(blue),
  };
};

const normalizeRGBA = ({ alpha, ...rgb }: RGBAColor): RGBAColor => {
  return {
    ...normalizeRGB(rgb),
    alpha: invlerp8Bit(alpha),
  };
};

export { normalizeRGBA, normalizeRGB };
