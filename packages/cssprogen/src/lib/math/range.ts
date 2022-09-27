import { lerp } from './lerp';
import { invlerp } from './invlerp';

const range = (val: number, x1: number, y1: number, x2: number, y2: number) =>
  lerp(invlerp(val, x1, y1), x2, y2);
export { range };
