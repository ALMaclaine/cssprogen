const isArray = <T>(val: unknown): val is T[] => Array.isArray(val);
export { isArray };
