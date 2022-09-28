import { Color } from './color';
import { Size } from './general';

enum ShadowLevel {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
}

interface Shadow {
  color: Color;
  offsetX?: Size;
  offsetY?: Size;
  blurRadius?: Size;
  spread?: Size;
  inset?: boolean;
}

export { Shadow, ShadowLevel };
