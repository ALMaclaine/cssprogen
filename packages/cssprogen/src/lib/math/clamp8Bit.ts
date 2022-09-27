import { min } from './min';
import { max } from './max';

const clamp8Bit = (num: number) => min(max(num, 0), 255);
export { clamp8Bit };
