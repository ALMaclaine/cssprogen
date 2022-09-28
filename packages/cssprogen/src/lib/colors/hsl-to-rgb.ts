import { lerp8Bit } from '../math/lerp';
import { HSLAColor, HSLColor, RGBAColor, RGBColor } from '../types/color';
import { isAchromaticHSL } from './is-achromatic';
import { createGray } from './create-gray';
import { huePrime } from './hue-prime';
import { chroma } from './chroma';
import { abs } from '../math/abs';
import { mod } from '../math/mod';
import { CSSProgenError, CSSProgenErrorSet } from '../general/cssprogen-error';
import { round } from '../math/round';

const getComponents = (
  hPrime: number,
  chroma: number,
  secondComponent: number
) => {
  if (hPrime >= 0 && hPrime < 1) {
    return { red: chroma, green: secondComponent, blue: 0 };
  } else if (hPrime >= 1 && hPrime < 2) {
    return { red: secondComponent, green: chroma, blue: 0 };
  } else if (hPrime >= 2 && hPrime < 3) {
    return { red: 0, green: chroma, blue: secondComponent };
  } else if (hPrime >= 3 && hPrime < 4) {
    return { red: 0, green: secondComponent, blue: chroma };
  } else if (hPrime >= 4 && hPrime < 5) {
    return { red: secondComponent, green: 0, blue: chroma };
  } else if (hPrime >= 5 && hPrime < 6) {
    return { red: chroma, green: 0, blue: secondComponent };
  }
  throw new CSSProgenError(CSSProgenErrorSet.ERROR_001);
};

const hslToRGB = (color: HSLColor): RGBColor => {
  const { hue, saturation, lightness } = color;
  if (isAchromaticHSL(color)) return createGray(round(lerp8Bit(lightness)));
  const hPrime = huePrime(hue);
  const chrom = chroma(saturation, lightness);
  const secondComponent = chrom * (1 - abs(mod(hPrime, 2) - 1));
  const { red, green, blue }: RGBColor = getComponents(
    hPrime,
    chrom,
    secondComponent
  );

  const lightnessModification = lightness - chrom / 2;
  const finalRed = red + lightnessModification;
  const finalGreen = green + lightnessModification;
  const finalBlue = blue + lightnessModification;
  return {
    red: round(lerp8Bit(finalRed)),
    green: round(lerp8Bit(finalGreen)),
    blue: round(lerp8Bit(finalBlue)),
  };
};

const hslaToRGBA = ({ alpha, ...hslColor }: HSLAColor): RGBAColor => ({
  ...hslToRGB(hslColor),
  alpha,
});

export { hslToRGB, hslaToRGBA };
