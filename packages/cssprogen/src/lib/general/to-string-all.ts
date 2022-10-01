import { isString } from './is-string';
import { isNumber } from './is-number';
import { isArray } from './is-array';

const toStringAll = (val: unknown): string => {
  if (!val) {
    return '';
  }

  if (isString(val)) {
    return val;
  } else if (isNumber(val)) {
    return `${val}`;
  } else if (isArray(val)) {
    return `[${val.map(toStringAll).join(', ')}]`;
  } else {
    return JSON.stringify(val);
  }
};
export { toStringAll };
