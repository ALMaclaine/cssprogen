import { RGBAColor, RGBColor } from '../types/color';
import { clamp, clamp8Bit } from '../math/clamp';

const createGray = (level: number): RGBColor => ({
  red: clamp8Bit(level),
  green: clamp8Bit(level),
  blue: clamp8Bit(level),
});

const createGrayAlpha = (level: number, alpha: number): RGBAColor => ({
  ...createGray(level),
  alpha: clamp(alpha),
});

export { createGrayAlpha, createGray };
