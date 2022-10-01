import { pow } from './pow';

describe('pow works', () => {
  it('pow works work', () => {
    expect(pow(5, 2)).toBe(25);
    expect(pow(5, 0)).toBe(1);
    expect(pow(2, 2)).toBe(4);
    expect(pow(5)).toBe(25);
  });
});
