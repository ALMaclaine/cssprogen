import { modularRatioSet, ModularScaleRatio } from 'cssprogen';

const isModularRatio = (val: unknown): val is ModularScaleRatio => {
  return modularRatioSet.has(val as ModularScaleRatio);
};
export { isModularRatio };
