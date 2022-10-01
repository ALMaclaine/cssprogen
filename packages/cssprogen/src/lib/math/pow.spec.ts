import { modularPow, pow } from './pow';
import { modularRatios } from '../general/get-modular-ratio';

describe('pow works', () => {
  it('pow works work', () => {
    expect(pow(5, 2)).toBe(25);
    expect(pow(5, 0)).toBe(1);
    expect(pow(2, 2)).toBe(4);
    expect(pow(5)).toBe(25);
  });

  it('modularPow works work', () => {
    expect(modularPow(modularRatios.unison, 2)).toBe(1);
    expect(modularPow(modularRatios.doubleOctave, 2)).toBe(16);
  });
});
