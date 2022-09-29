import { isNumber } from '../general/is-number';
import { Length } from '../types/general';
import { isValidUnit } from './is-valid-unit';
import { CSSProgenError, CSSProgenErrorSet } from '../general/cssprogen-error';

const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
const getValueAndUnit = (value: string | number): Length => {
  if (isNumber(value)) return { unit: '', value };
  const matchedValue = value.match(cssRegex);
  if (matchedValue?.[2] && isValidUnit(matchedValue?.[2])) {
    return { value: parseFloat(value), unit: matchedValue[2] };
  }
  if (parseFloat(value) === +value) {
    return { unit: '', value: parseFloat(value) };
  }
  throw new CSSProgenError(CSSProgenErrorSet.ERROR_007, [value]);
};

export { getValueAndUnit };
