import { nameToHex } from './name-to-hex';
import { CSSProgenError, CSSProgenErrorSet } from '../general/cssprogen-error';

describe('nameToHex', () => {
  it('should convert a named color to a hex value', () => {
    expect({ background: nameToHex('white') }).toEqual({
      background: '#ffffff',
    });
  });

  it('should convert a camel-cased named color to a hex value', () => {
    expect({ background: nameToHex('PowderBlue') }).toEqual({
      background: '#b0e0e6',
    });
  });

  it('should throw error when invalid name', () => {
    expect(() => nameToHex('blah')).toThrowError(
      new CSSProgenError(CSSProgenErrorSet.ERROR_005, ['blah'])
    );
  });
});
