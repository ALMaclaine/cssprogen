import { guard } from './guard';

describe('guard works', () => {
  it('guard works work', () => {
    expect(guard(-1, 0, 10)).toBe(0);
    expect(guard(0, 0, 10)).toBe(0);
    expect(guard(1, 0, 10)).toBe(1);

    expect(guard(9, 0, 10)).toBe(9);
    expect(guard(10, 0, 10)).toBe(10);
    expect(guard(11, 0, 10)).toBe(10);

    expect(guard(-1, 10, 10)).toBe(10);
    expect(guard(0, 10, 10)).toBe(10);
    expect(guard(1, 10, 10)).toBe(10);

    expect(guard(-1, 0, 0)).toBe(0);
    expect(guard(0, 0, 0)).toBe(0);
    expect(guard(1, 0, 0)).toBe(0);

    expect(guard(-1, 10, 0)).toBe(10);
    expect(guard(0, 10, 0)).toBe(10);
    expect(guard(1, 10, 0)).toBe(10);

    expect(guard(-1)).toBe(0);
    expect(guard(0)).toBe(0);
    expect(guard(0.5)).toBe(0.5);
    expect(guard(1)).toBe(1);
    expect(guard(1.5)).toBe(1);
  });
});
