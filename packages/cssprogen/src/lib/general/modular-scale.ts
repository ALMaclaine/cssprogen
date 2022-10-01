import { ModularScaleRatio } from '../types/modular-scale-ratio';
import { modularPow } from '../math/pow';

const modularScale = (ratio: ModularScaleRatio, level: number, size = 1) => {
  return size * modularPow(ratio, level);
};

export { modularScale };
