const calculateSaturation = (lightness: number, delta: number, sum: number) => {
  if (lightness > 0.5) {
    return delta / (2 - sum);
  } else {
    return delta / sum;
  }
};
export { calculateSaturation };
