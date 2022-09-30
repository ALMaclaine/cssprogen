const MODULAR_RATIOS = [
  'unison',
  'minorSecond',
  'majorSecond',
  'minorThird',
  'majorThird',
  'perfectFourth',
  'diminishedFifth',
  'augmentedFourth',
  'perfectFifth',
  'minorSixth',
  'goldenRatio',
  'majorSixth',
  'minorSeventh',
  'majorSeventh',
  'octave',
  'majorTenth',
  'majorEleventh',
  'majorTwelfth',
  'doubleOctave',
] as const;

type ModularScaleRatio = number | typeof MODULAR_RATIOS[number];
const modularRatioSet = new Set<ModularScaleRatio>(MODULAR_RATIOS);

enum ModularScaleEnum {
  UNISON = 'unison',
  MINOR_SECOND = 'minorSecond',
  MAJOR_SECOND = 'majorSecond',
  MINOR_THIRD = 'minorThird',
  MAJOR_THIRD = 'majorThird',
  PERFECT_FOURTH = 'perfectFourth',
  DIMINISHED_FIFTH = 'diminishedFifth',
  AUGMENTED_FOURTH = 'augmentedFourth',
  PERFECT_FIFTH = 'perfectFifth',
  MINOR_SIXTH = 'minorSixth',
  GOLDEN_RATIO = 'goldenRatio',
  MAJOR_SIXTH = 'majorSixth',
  MINOR_SEVENTH = 'minorSeventh',
  MAJOR_SEVENTH = 'majorSeventh',
  OCTAVE = 'octave',
  MAJOR_TENTH = 'majorTenth',
  MAJOR_ELEVENTH = 'majorEleventh',
  MAJOR_TWELFTH = 'majorTwelfth',
  DOUBLE_OCTAVE = 'doubleOctave',
}

export { ModularScaleRatio, MODULAR_RATIOS, modularRatioSet, ModularScaleEnum };
