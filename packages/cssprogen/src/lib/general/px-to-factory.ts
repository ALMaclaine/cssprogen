import { Units } from '../types/units';
import { isString } from './is-string';
import { CSSProgenError, CSSProgenErrorSet } from './cssprogen-error';
import { stripUnit } from '../colors/strip-unit';

const pxToFactory =
  (to: Units) =>
  (pxVal: string | number, base: string | number = 16) => {
    if (isString(pxVal) && !pxVal.endsWith('px')) {
      throw new CSSProgenError(CSSProgenErrorSet.ERROR_003, [
        'first',
        to,
        pxVal,
      ]);
    }
    const finalPxVal = stripUnit(pxVal);

    if (isString(base) && !base.endsWith('px')) {
      throw new CSSProgenError(CSSProgenErrorSet.ERROR_003, [
        'second',
        to,
        pxVal,
      ]);
    }
    const finalBase = stripUnit(base);
    const ratio = finalPxVal / finalBase;
    return `${ratio}${to}`;
  };

const pxToEM = pxToFactory('em');
const pxToREM = pxToFactory('rem');

export { pxToFactory, pxToEM, pxToREM };
