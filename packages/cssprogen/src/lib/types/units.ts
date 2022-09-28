const UNITS_ABSOLUTE = ['cm', 'mn', 'Q', 'in', 'pc', 'pt', 'px'] as const;
type UnitsAbsolute = typeof UNITS_ABSOLUTE[number];

const UNITS_RELATIVE = [
  'em',
  'ex',
  'ch',
  'rem',
  'lh',
  'rlh',
  'vw',
  'vh',
  'vmin',
  'vb',
  'vi',
  'svw',
  'svh',
  'lvw',
  'lvh',
  'dvw',
  'dvh',
  'qw',
  'qh',
  'qi',
  'qb',
  'qmin',
  'qmax',
] as const;

type UnitsRelative = typeof UNITS_RELATIVE[number];

const UNITS = ['', ...UNITS_RELATIVE, ...UNITS_ABSOLUTE] as const;

type Units = typeof UNITS[number];

export {
  Units,
  UnitsAbsolute,
  UnitsRelative,
  UNITS,
  UNITS_RELATIVE,
  UNITS_ABSOLUTE,
};
