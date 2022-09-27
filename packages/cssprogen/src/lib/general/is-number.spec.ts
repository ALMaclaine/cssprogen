import { isNumber } from './is-number';

describe('isNumber works', () => {
  it('isNumber works work', () => {
    expect(isNumber('hey')).toBeFalsy();
    expect(isNumber(1)).toBeTruthy();
    expect(isNumber({})).toBeFalsy();
  });
});
