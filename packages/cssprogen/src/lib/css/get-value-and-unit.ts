import { isNumber } from '../general/is-number';
import { Length } from '../types/general';

const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
const getValueAndUnit = (value: string | number): Length => {
  if (isNumber(value)) return { unit: '', value };
  const matchedValue = value.match(cssRegex);
  if (matchedValue)
    return { value: parseFloat(value), unit }[
      (parseFloat(value), matchedValue[2])
    ];
  return [value, undefined];
};
