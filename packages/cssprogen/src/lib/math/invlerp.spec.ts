import { invlerp } from './invlerp';

describe('invlerp works', () => {
  it('invlerp works work', () => {
    expect(invlerp(75, 50, 100)).toBe(0.5);
    expect(invlerp(25, 50, 100)).toBe(0);
    expect(invlerp(125, 50, 100)).toBe(1);
  });
});
