import { modularScale } from './modular-scale';
import { ModularScaleEnum } from '../types/modular-scale-ratio';
import { getModularRatio } from './get-modular-ratio';

describe('modularScale works', () => {
  it('modularScale works work', () => {
    expect(modularScale(ModularScaleEnum.UNISON, 1)).toBe(1);
    expect(modularScale(ModularScaleEnum.UNISON, 1, 2)).toBe(2);
    expect(modularScale(ModularScaleEnum.GOLDEN_RATIO, 2, 2)).toBe(
      2 * getModularRatio(ModularScaleEnum.GOLDEN_RATIO) ** 2
    );
  });
});
