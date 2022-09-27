import { min } from './min';
import { max } from './max';

const guard = (num: number, low: number, high: number) => {
  return max(min(num, high), low);
};
export { guard };
