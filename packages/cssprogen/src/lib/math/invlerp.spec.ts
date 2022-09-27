import { invlerp, invlerp8Bit } from './invlerp';

describe('invlerp works', () => {
  it('invlerp works work', () => {
    expect(invlerp(75, 50, 100)).toBe(0.5);
    expect(invlerp(25, 50, 100)).toBe(0);
    expect(invlerp(125, 50, 100)).toBe(1);
  });

  it('invlerp8Bit works work', () => {
    expect(invlerp8Bit(-1)).toBe(0);
    expect(invlerp8Bit(0)).toBe(0);
    expect(invlerp8Bit(1)).toBe(1 / 255);
    expect(invlerp8Bit(255)).toBe(1);
    expect(invlerp8Bit(256)).toBe(1);
  });
});
