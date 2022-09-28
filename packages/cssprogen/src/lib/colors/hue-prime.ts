import { mod } from '../math/mod';

// (((hue % 360) + 360) % 360) / 60
const huePrime = (hue: number) => mod(mod(hue, 360) + 360, 360) / 60;
export { huePrime };
