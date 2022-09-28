import { isNull } from './is-null';
import { isArray } from './is-array';

const isObject = (val: unknown): val is object => {
  const notNull = !isNull(val);
  const notArray = !isArray(val);
  const isObject = typeof val === 'object';
  return notNull && notArray && isObject;
};
export { isObject };
