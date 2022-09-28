import { floor } from './floor';

describe('floor works', () => {
  it('floor works work', () => {
    expect(floor(0)).toBe(0);
    expect(floor(0.2)).toBe(0);
    expect(floor(0.5)).toBe(0);
    expect(floor(0.9)).toBe(0);
    expect(floor(1)).toBe(1);
  });
});
