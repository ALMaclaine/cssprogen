import { capitalizeString } from './capitalizeString';

describe('capitalizeString works', () => {
  it('capitalizeString works work', () => {
    expect(capitalizeString('hey')).toBe('Hey');
    expect(capitalizeString('Hey')).toBe('Hey');
    expect(capitalizeString('hEY')).toBe('HEY');
  });
});
