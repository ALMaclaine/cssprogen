import { sprintf } from './sprintf';
import { isProduction } from './is-production';
import { toStringAll } from './to-string-all';

enum CSSProgenErrorSet {
  ERROR_001 = 'Error Code 001: Unreachable Code',
  ERROR_002 = 'Error Code 002: Match Not In Color Set',
  ERROR_003 = 'Error Code 003: Expected String Ending In "px" As Argument',
  ERROR_004 = 'Error Code 004: String cannot be parsed into a number',
  ERROR_005 = 'Error Code 005: Invalid Named Color',
  ERROR_006 = 'Error Code 006: CSS Variable Not Found, No Default',
  ERROR_007 = 'Error Code 007: Not A Valid Length',
}

const ERROR_001 = 'Unreachable code reached.';
const ERROR_002 =
  'getHue was passed a match that is not in the color set. Match: %s Color Set: %s.';
const ERROR_003 =
  'Expected a string ending in "px" or a number passed as the %s argument to %s(), got %s instead.';
const ERROR_004 = 'String provided cannot be parsed into a number.';
const ERROR_005 = 'Invalid named color provided: %s.';
const ERROR_006 = 'CSS variable not found and no default was provided.';
const ERROR_007 = 'String cannot be parsed into a valid length: %s';

const CSSProgenErrors = {
  [CSSProgenErrorSet.ERROR_001]: ERROR_001,
  [CSSProgenErrorSet.ERROR_002]: ERROR_002,
  [CSSProgenErrorSet.ERROR_003]: ERROR_003,
  [CSSProgenErrorSet.ERROR_004]: ERROR_004,
  [CSSProgenErrorSet.ERROR_005]: ERROR_005,
  [CSSProgenErrorSet.ERROR_006]: ERROR_006,
  [CSSProgenErrorSet.ERROR_007]: ERROR_007,
};

const formatError = (code: CSSProgenErrorSet, args: string[]): string =>
  sprintf(CSSProgenErrors[code], args);

class CSSProgenError extends Error {
  constructor(code: CSSProgenErrorSet, args: unknown[] = []) {
    if (isProduction()) {
      super('CSSProgen: An error occurred.');
    } else {
      super(formatError(code, args.map(toStringAll)));
    }
  }
}

export { CSSProgenError, CSSProgenErrorSet };
