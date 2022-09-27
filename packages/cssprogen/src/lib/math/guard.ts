import { min } from './min';
import { max } from './max';

const guard = (num: number, low = 0, high = 1) => max(min(num, high), low);

export { guard };
