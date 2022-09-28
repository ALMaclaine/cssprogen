import { pxToFactory } from './px-to-factory';
import { CSSProgenError, CSSProgenErrorSet } from './cssprogen-error';

describe('pxToFactory', () => {
  describe('pxToFactory', () => {
    it('should allow creating a simple pixels-to-x converter', () => {
      const em = pxToFactory('em');
      expect(em).toBeInstanceOf(Function);
    });
  });

  describe('converter', () => {
    it('should convert a simple number to ems', () => {
      const em = pxToFactory('em');

      expect({ height: em(16) }).toEqual({
        height: '1em',
      });
    });

    it('should convert a simple string with px to ems', () => {
      const em = pxToFactory('em');
      expect({ height: em('16px') }).toEqual({
        height: '1em',
      });
    });

    it('should convert a complex number to ems', () => {
      const em = pxToFactory('em');
      expect({ height: em(18) }).toEqual({
        height: '1.125em',
      });
    });

    it('should convert a complex string with px to ems', () => {
      const em = pxToFactory('em');
      expect({ height: em('18px') }).toEqual({
        height: '1.125em',
      });
    });

    it('should allow changing the base with a number', () => {
      const em = pxToFactory('em');
      expect({ height: em('16px', 8) }).toEqual({
        height: '2em',
      });
    });

    it('should allow changing the base with a string', () => {
      const em = pxToFactory('em');
      expect({ height: em('16px', '8px') }).toEqual({
        height: '2em',
      });
    });

    it('should throw an error if a non-pixel value is passed for the first arg', () => {
      const em = pxToFactory('em');
      expect(() => ({ height: em('10em') })).toThrowError(
        new CSSProgenError(CSSProgenErrorSet.ERROR_003, ['first', 'em', '10em'])
      );
    });

    it('should throw an error if a non-pixel value is passed for the second arg', () => {
      const em = pxToFactory('em');
      expect(() => ({ height: em('10px', '16em') })).toThrowError(
        new CSSProgenError(CSSProgenErrorSet.ERROR_003, [
          'second',
          'em',
          '10px',
        ])
      );
    });

    it('should throw an error if an invalid pixel value is passed', () => {
      const em = pxToFactory('em');
      expect(() => ({ height: em('apx') })).toThrowError(
        new CSSProgenError(CSSProgenErrorSet.ERROR_004)
      );
    });

    it('should throw an error if an invalid base value is passed', () => {
      const em = pxToFactory('em');
      expect(() => ({ height: em('16px', 'apx') })).toThrowError(
        new CSSProgenError(CSSProgenErrorSet.ERROR_004)
      );
    });
  });
});
