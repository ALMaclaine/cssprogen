const isBrowser = () => ![typeof window, typeof document].includes('undefined');
export {isBrowser};
