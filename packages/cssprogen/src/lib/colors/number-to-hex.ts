const numberToHex = (value: number) => {
  const hex = value.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export { numberToHex };
