const sprintf = (str: string, args: string[]): string => {
  const _sprintf = (built: string, it = 0): string => {
    if (/%s/.test(built) && args[it]) {
      return _sprintf(built.replace('%s', args[it]), it + 1);
    } else {
      return built;
    }
  };
  return _sprintf(str);
};
export { sprintf };
