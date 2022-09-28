import { Units } from './units';

type Size = string | number;

interface Length {
  value: number;
  unit: Units;
}

interface Styles {
  [ruleOrSelector: string]: string | number | Styles;
}

export { Size, Styles, Length };
