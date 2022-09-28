import { ceil } from './ceil';

describe('ceil works', () => {
  it('ceil works work', () => {
    expect(ceil(0)).toBe(0);
    expect(ceil(0.2)).toBe(1);
    expect(ceil(0.5)).toBe(1);
    expect(ceil(0.9)).toBe(1);
    expect(ceil(1)).toBe(1);
  });
});
