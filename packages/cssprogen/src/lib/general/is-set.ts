const isSet = <T>(val: unknown): val is Set<T> => val instanceof Set<T>;
export { isSet };
