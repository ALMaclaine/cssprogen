import { isModularRatio } from './is-modular-ratio';
import { ModularScaleEnum } from '../types/modular-scale-ratio';
import { modularRatios } from './get-modular-ratio';

describe('isModularRatio works', () => {
  it('isModularRatio works work', () => {
    expect(isModularRatio('hey')).toBeFalsy();
    expect(isModularRatio(3.14)).toBeFalsy();
    expect(isModularRatio({})).toBeFalsy();
    expect(isModularRatio(null)).toBeFalsy();

    expect(isModularRatio(modularRatios[ModularScaleEnum.AUGMENTED_FOURTH]));
    expect(isModularRatio(modularRatios[ModularScaleEnum.UNISON]));
    expect(isModularRatio(modularRatios[ModularScaleEnum.DOUBLE_OCTAVE]));
    expect(isModularRatio(1));
  });
});
