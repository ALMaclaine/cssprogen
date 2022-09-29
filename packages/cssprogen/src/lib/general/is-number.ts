const isNumber = (val: unknown, includeNaN = false): val is number => {
  const isNum = typeof val === 'number';
  if (!isNum) return false;
  if (includeNaN) {
    return isNum;
  } else {
    return isNum && !isNaN(val);
  }
};
export { isNumber };
