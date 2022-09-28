import { isObject } from './is-object';

describe('isObject works', () => {
  it('isObject works work', () => {
    expect(isObject('hey')).toBeFalsy();
    expect(isObject(1)).toBeFalsy();
    expect(isObject({})).toBeTruthy();
    expect(isObject([])).toBeFalsy();
  });
});
