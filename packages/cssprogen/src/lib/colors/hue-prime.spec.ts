import { huePrime } from './hue-prime';

describe('huePrime works', () => {
  it('huePrime works', () => {
    expect(huePrime(0)).toBe(0);
    expect(huePrime(360)).toBe(0);
    expect(huePrime(180)).toBe(3);
  });
});
