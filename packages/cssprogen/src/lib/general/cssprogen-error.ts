import { sprintf } from './sprintf';
import { isProduction } from './is-production';

enum CSSProgenErrorSet {
  ERROR_001 = 'Error Code 01: Unreachable Code',
  ERROR_002 = 'Error Code 01: Unreachable Code',
}

const CSSProgenErrors = {
  [CSSProgenErrorSet.ERROR_001]: 'Unreachable code executed.',
  [CSSProgenErrorSet.ERROR_002]:
    'getHue was passed a match that is not in the colorset. Match: %s Color Set: %s.',
};

const formatError = (code: CSSProgenErrorSet, args: string[]): string =>
  sprintf(CSSProgenErrors[code], args);

class CSSProgenError extends Error {
  constructor(code: CSSProgenErrorSet, args: never[] = []) {
    if (isProduction()) {
      super('CSSProgen: An error occurred.');
    } else {
      super(formatError(code, args));
    }
  }
}

export { CSSProgenError, CSSProgenErrorSet };
