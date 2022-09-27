import { sprintf } from './sprintf';
import { isProduction } from './is-production';

enum CSSProgenErrorSet {
  ERROR_01 = 'Error Code: 01',
}

const CSSProgenErrors = {
  [CSSProgenErrorSet.ERROR_01]: 'Default Error',
};

const formatError = (code: CSSProgenErrorSet, args: string[]): string =>
  sprintf(CSSProgenErrors[code], args);

class CSSProgenError extends Error {
  constructor(code: CSSProgenErrorSet, args: never[]) {
    if (isProduction()) {
      super('CSSProgen: An error occurred.');
    } else {
      super(formatError(code, args));
    }
  }
}

export { CSSProgenError };
