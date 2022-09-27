import { clamp } from './clamp';

const invlerp = (val: number, x: number, y: number) =>
  clamp((val - x) / (y - x));

const invlerp8Bit = (val: number) => invlerp(val, 0, 255);
export { invlerp, invlerp8Bit };
