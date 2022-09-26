import { Color } from './color';
import { Length } from './general';

enum ShadowLevel {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
}

interface Shadow {
  color: Color;
  offsetX?: Length;
  offsetY?: Length;
  blurRadius?: Length;
  spread?: Length;
  inset?: boolean;
}

export { Shadow, ShadowLevel };
