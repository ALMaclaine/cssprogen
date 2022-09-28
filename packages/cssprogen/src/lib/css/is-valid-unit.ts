import { UNITS } from '../types/units';

const isValidUnit = (str: string) => UNITS.includes(str as never);
export { isValidUnit };
