import { isNull } from './is-null';

describe('isNull works', () => {
  it('isNull works work', () => {
    expect(isNull('hey')).toBeFalsy();
    expect(isNull(1)).toBeFalsy();
    expect(isNull({})).toBeFalsy();
    expect(isNull(null)).toBeTruthy();
  });
});
