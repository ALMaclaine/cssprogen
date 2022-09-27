import { min } from './min';
import { max } from './max';

const clamp = (num: number, low = 0, high = 1) => min(max(num, low), high);
export { clamp };
