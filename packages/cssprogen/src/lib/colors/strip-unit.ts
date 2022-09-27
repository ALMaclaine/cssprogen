import { isNumber } from '../general/is-number';
import { CSSProgenError, CSSProgenErrorSet } from '../general/cssprogen-error';

const stripUnit = (value: string | number): number => {
  if (isNumber(value)) return value;
  const parsed = parseFloat(value);
  if (isNaN(parsed)) {
    throw new CSSProgenError(CSSProgenErrorSet.ERROR_004);
  }
  return parsed;
};

export { stripUnit };
