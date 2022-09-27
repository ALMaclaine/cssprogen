type UnitsAbsolute = 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'px';

type UnitsRelative =
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'lh'
  | 'rlh'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vb'
  | 'vi'
  | 'svw'
  | 'svh'
  | 'lvw'
  | 'lvh'
  | 'dvw'
  | 'dvh'
  | 'qw'
  | 'qh'
  | 'qi'
  | 'qb'
  | 'qmin'
  | 'qmax';

type Units = UnitsAbsolute | UnitsRelative;

export { Units, UnitsAbsolute, UnitsRelative };
