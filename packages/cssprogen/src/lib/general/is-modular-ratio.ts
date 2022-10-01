import {
  modularRatioSet,
  ModularScaleRatio,
} from '../types/modular-scale-ratio';

const isModularRatio = (val: unknown): val is ModularScaleRatio => {
  return modularRatioSet.has(val as ModularScaleRatio);
};
export { isModularRatio };
