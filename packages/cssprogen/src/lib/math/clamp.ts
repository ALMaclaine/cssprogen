import { min } from './min';
import { max } from './max';

const clamp = (num: number, low: number, high: number) =>
  min(max(num, low), high);
export { clamp };
