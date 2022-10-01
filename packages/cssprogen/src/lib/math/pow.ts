import { ModularScaleRatio } from '../types/modular-scale-ratio';
import { getModularRatio } from '../general/get-modular-ratio';

const pow = (base: number, power = 2) => Math.pow(base, power);
const modularPow = (ratio: ModularScaleRatio, power = 2) =>
  Math.pow(getModularRatio(ratio), power);
export { pow, modularPow };
