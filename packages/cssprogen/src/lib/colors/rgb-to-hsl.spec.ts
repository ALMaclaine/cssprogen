import { rgbToHSL, rgbaToHSLA } from './rgb-to-hsl';

describe('rgbToHSL works', () => {
  it('should convert the color red', () => {
    expect(rgbToHSL({ red: 255, green: 0, blue: 0 })).toEqual({
      hue: 0,
      lightness: 0.5,
      saturation: 1,
    });
  });

  it('should convert the color blue', () => {
    expect(rgbToHSL({ red: 0, green: 0, blue: 255 })).toEqual({
      hue: 240,
      lightness: 0.5,
      saturation: 1,
    });
  });

  it('should convert the color green', () => {
    expect(rgbToHSL({ red: 0, green: 255, blue: 0 })).toEqual({
      hue: 120,
      lightness: 0.5,
      saturation: 1,
    });
  });

  it('should convert black', () => {
    expect(rgbToHSL({ red: 0, green: 0, blue: 0 })).toEqual({
      hue: 0,
      lightness: 0,
      saturation: 0,
    });
  });

  it('should convert the color red with a transparency of 0.6', () => {
    expect(
      rgbaToHSLA({
        red: 255,
        green: 0,
        blue: 0,
        alpha: 0.5,
      })
    ).toEqual({
      alpha: 0.5,
      hue: 0,
      lightness: 0.5,
      saturation: 1,
    });
  });

  it('should convert black with a transparency of 0.6', () => {
    expect(
      rgbaToHSLA({
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0.5,
      })
    ).toEqual({
      alpha: 0.5,
      hue: 0,
      lightness: 0,
      saturation: 0,
    });
  });
});
