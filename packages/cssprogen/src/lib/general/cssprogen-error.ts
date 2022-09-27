enum CSSProgenError {
  ERROR_01 = 'Default Error',
}

const CSSProgenErrors = {
  [CSSProgenError.ERROR_01]: 'Default Error',
};

const format = (code: CSSProgenError, args: string[]): string => {
  const _format = (built: string, it = 0): string => {
    if (/%s/.test(built) && args[it]) {
      return _format(built.replace('%s', args[it]), it + 1);
    } else {
      return built;
    }
  };
  return _format(CSSProgenErrors[code]);
};

export { format };
