import { isAchromaticRGB, isAchromaticHSL } from './is-achromatic';

describe('isAchromatic works', () => {
  it('isAchromaticRGB works', () => {
    const isAchromatic1 = isAchromaticRGB({ red: 255, blue: 255, green: 255 });
    expect(isAchromatic1).toBe(true);

    const isAchromatic2 = isAchromaticRGB({ red: 255, blue: 255, green: 254 });
    expect(isAchromatic2).toBe(false);

    const isAchromatic3 = isAchromaticRGB(
      { red: 255, blue: 255, green: 254 },
      2
    );
    expect(isAchromatic3).toBe(true);
  });

  it('isAchromaticHSL works', () => {
    const isAchromatic1 = isAchromaticHSL({
      hue: 0,
      saturation: 0,
      lightness: 0,
    });
    expect(isAchromatic1).toBe(true);

    const isAchromatic2 = isAchromaticHSL({
      hue: 0,
      saturation: 1,
      lightness: 0,
    });
    expect(isAchromatic2).toBe(false);

    const isAchromatic3 = isAchromaticHSL(
      { hue: 0, saturation: 0, lightness: 1 },
      2
    );
    expect(isAchromatic3).toBe(true);
  });
});
