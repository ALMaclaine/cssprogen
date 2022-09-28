import { abs } from '../math/abs';

// (1 - abs(2 * lightness)) * saturation
const chroma = (saturation: number, lightness: number) =>
  (1 - abs(2 * lightness - 1)) * saturation;
export { chroma };
