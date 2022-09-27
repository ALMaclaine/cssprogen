import { isString } from './is-string';

describe('isString works', () => {
  it('isString works work', () => {
    expect(isString('hey')).toBeTruthy();
    expect(isString(1)).toBeFalsy();
    expect(isString({})).toBeFalsy();
  });
});
