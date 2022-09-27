import { lerp } from './lerp';

describe('lerp works', () => {
  it('lerp works work', () => {
    expect(lerp(0, 20, 80)).toBe(20);
    expect(lerp(1, 20, 80)).toBe(80);
    expect(lerp(0.5, 0, 80)).toBe(40);
  });
});
