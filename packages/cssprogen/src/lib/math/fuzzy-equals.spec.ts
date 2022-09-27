import { fuzzyEquals } from './fuzzy-equals';

describe('fuzzyEquals works', () => {
  it('fuzzyEquals works work', () => {
    expect(fuzzyEquals(1, 1)).toBeTruthy();
    expect(fuzzyEquals(0, 0)).toBeTruthy();

    expect(fuzzyEquals(0, 1)).toBeFalsy();

    expect(fuzzyEquals(0, 1, 1)).toBeTruthy();
  });
});
