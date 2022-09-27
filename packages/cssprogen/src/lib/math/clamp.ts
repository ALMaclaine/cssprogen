import { min } from './min';
import { max } from './max';

const clamp = (num: number, low: number, high: number) => {
  return min(max(num, low), high);
};
export { clamp };
