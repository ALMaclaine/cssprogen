import { isNumber, ModularScaleRatio } from 'cssprogen';

const modularRatios: Record<ModularScaleRatio, number> = {
  unison: 1,
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  diminishedFifth: 1.4,
  augmentedFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenRatio: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4,
};

const getModularRatio = (ratioName: ModularScaleRatio): number => {
  if (isNumber(ratioName)) {
    return ratioName;
  }
  return modularRatios[ratioName];
};
export { getModularRatio, modularRatios };
