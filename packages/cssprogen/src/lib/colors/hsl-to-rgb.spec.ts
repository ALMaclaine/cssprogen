import { hslToRGB } from './hsl-to-rgb';

describe('hslToRGB works', () => {
  it('hslToRGB works', () => {
    expect(
      hslToRGB({ hue: 360, saturation: 0.75, lightness: 0.4 })
    ).toMatchObject({
      red: 179,
      green: 25,
      blue: 25,
    });
  });
});
