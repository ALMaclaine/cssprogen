import { Units, UNITS } from '../types/units';

const isValidUnit = (str: string): str is Units =>
  UNITS.includes(str.toLowerCase() as never);
export { isValidUnit };
