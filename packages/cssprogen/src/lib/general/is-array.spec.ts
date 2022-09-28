import { isArray } from './is-array';

describe('isArray works', () => {
  it('isArray works work', () => {
    expect(isArray('hey')).toBeFalsy();
    expect(isArray(1)).toBeFalsy();
    expect(isArray({})).toBeFalsy();
    expect(isArray([])).toBeTruthy();
  });
});
