import { abs } from './abs';

const fuzzyEquals = (num1: number, num2: number, tolerance = 0) => {
  return abs(num1 - num2) <= tolerance;
};
export { fuzzyEquals };
