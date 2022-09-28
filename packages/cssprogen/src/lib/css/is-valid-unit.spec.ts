import { isValidUnit } from './is-valid-unit';

describe('isValidUnit', () => {
  it('isValidUnit works', () => {
    expect(isValidUnit('px')).toBeTruthy();
    expect(isValidUnit('em')).toBeTruthy();
    expect(isValidUnit('')).toBeTruthy();
    expect(isValidUnit('px2')).toBeFalsy();
  });
});
