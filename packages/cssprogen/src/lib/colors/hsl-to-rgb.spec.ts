import { hslToRGB } from './hsl-to-rgb';

describe('hslToRGB works', () => {
  it('should convert numbers to a hex color', () => {
    expect(
      hslToRGB({ hue: 360, saturation: 0.75, lightness: 0.4 })
    ).toMatchObject({
      red: 179,
      green: 25,
      blue: 25,
    });
  });

  it('should convert the color red', () => {
    expect(hslToRGB({ hue: 0, saturation: 1, lightness: 0.5 })).toMatchObject({
      red: 255,
      green: 0,
      blue: 0,
    });
  });

  it('should convert the color yellow', () => {
    expect(hslToRGB({ hue: 60, saturation: 1, lightness: 0.5 })).toMatchObject({
      red: 255,
      green: 255,
      blue: 0,
    });
  });

  it('should convert the color lime', () => {
    expect(hslToRGB({ hue: 120, saturation: 1, lightness: 0.5 })).toMatchObject(
      {
        red: 0,
        green: 255,
        blue: 0,
      }
    );
  });

  it('should convert the color cyan', () => {
    expect(hslToRGB({ hue: 180, saturation: 1, lightness: 0.5 })).toMatchObject(
      {
        red: 0,
        green: 255,
        blue: 255,
      }
    );
  });

  it('should convert the color blue', () => {
    expect(hslToRGB({ hue: 240, saturation: 1, lightness: 0.5 })).toMatchObject(
      {
        red: 0,
        green: 0,
        blue: 255,
      }
    );
  });

  it('should convert the color magenta', () => {
    expect(hslToRGB({ hue: 300, saturation: 1, lightness: 0.5 })).toMatchObject(
      {
        red: 255,
        green: 0,
        blue: 255,
      }
    );
  });

  it('should convert the color black', () => {
    expect(hslToRGB({ hue: 360, saturation: 0, lightness: 0.4 })).toMatchObject(
      {
        red: 102,
        green: 102,
        blue: 102,
      }
    );
  });

  it('should convert correctly even when passed a "faulty" negative hue', () => {
    expect(hslToRGB({ hue: -10, saturation: 1, lightness: 0.5 })).toMatchObject(
      {
        red: 255,
        green: 0,
        blue: 43,
      }
    );

    expect(
      hslToRGB({ hue: -100, saturation: 1, lightness: 0.5 })
    ).toMatchObject({
      red: 85,
      green: 0,
      blue: 255,
    });

    expect(
      hslToRGB({ hue: -1000, saturation: 1, lightness: 0.5 })
    ).toMatchObject({
      red: 170,
      green: 255,
      blue: 0,
    });
  });
});
