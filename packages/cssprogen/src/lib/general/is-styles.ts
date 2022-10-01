import { Styles } from '../types/general';
import { isObject } from './is-object';

const isStyles = (val: unknown): val is Styles => isObject(val);
export { isStyles };
