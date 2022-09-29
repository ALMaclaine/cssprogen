import { isNumber } from './is-number';

describe('isNumber works', () => {
  it('isNumber work', () => {
    expect(isNumber('hey')).toBeFalsy();
    expect(isNumber(1)).toBeTruthy();
    expect(isNumber({})).toBeFalsy();

    expect(isNumber(NaN)).toBeFalsy();
    expect(isNumber(NaN, true)).toBeTruthy();
  });
});
