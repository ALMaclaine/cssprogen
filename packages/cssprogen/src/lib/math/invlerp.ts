import { clamp } from 'cssprogen';

const invlerp = (val: number, x: number, y: number) =>
  clamp((val - x) / (y - x));
export { invlerp };
