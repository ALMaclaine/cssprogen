const lerp = (val: number, x: number, y: number) => x * (1 - val) + y * val;
const lerp8Bit = (val: number) => lerp(val, 0, 255);
export { lerp, lerp8Bit };
