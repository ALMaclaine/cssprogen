import { range } from './range';

describe('range works', () => {
  it('range works work', () => {
    expect(range(50, 10, 100, 2000, 20000)).toBe(10000);

    expect(range(10, 10, 100, 2000, 20000)).toBe(2000);
    expect(range(0, 10, 100, 2000, 20000)).toBe(2000);

    expect(range(100, 10, 100, 2000, 20000)).toBe(20000);
    expect(range(110, 10, 100, 2000, 20000)).toBe(20000);
  });
});
