import { min } from './min';
import { max } from './max';

const clamp = (num: number, low = 0, high = 1) => min(max(num, low), high);
const clamp8Bit = (num: number) => min(max(num, 0), 255);

export { clamp, clamp8Bit };
