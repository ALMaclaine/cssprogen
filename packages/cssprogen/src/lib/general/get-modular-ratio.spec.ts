import { getModularRatio, modularRatios } from './get-modular-ratio';
import { ModularScaleEnum } from '../types/modular-scale-ratio';

describe('getModularRatio works', () => {
  it('getModularRatio works work', () => {
    expect(getModularRatio(3.14)).toBe(3.14);
    expect(getModularRatio(ModularScaleEnum.DOUBLE_OCTAVE)).toBe(
      modularRatios[ModularScaleEnum.DOUBLE_OCTAVE]
    );
    expect(getModularRatio(ModularScaleEnum.UNISON)).toBe(
      modularRatios[ModularScaleEnum.UNISON]
    );
    expect(getModularRatio(ModularScaleEnum.PERFECT_FIFTH)).toBe(
      modularRatios[ModularScaleEnum.PERFECT_FIFTH]
    );
  });
});
