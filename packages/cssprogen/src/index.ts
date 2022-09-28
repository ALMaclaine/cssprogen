// type imports
import { BorderSide } from './lib/types/border-sides';
import {
  Color,
  ContrastScores,
  ColorStats,
  HSLColor,
  Alpha,
  HSLAColor,
  RGBAColor,
  RGBColor,
  RGBSet,
} from './lib/types/color';
import { FluidRangeConfiguration } from './lib/types/fluid-range-configuration';
import { FontFaceConfiguration } from './lib/types/font-face-configuration';
import { Size, Styles, Length } from './lib/types/general';
import {
  GradientConfigurationLinear,
  GradientConfigurationRadial,
  GradientConfigurationBase,
  GradientToDirection,
  GradientExtent,
} from './lib/types/gradient-configuration';
import { ModularScaleRatio } from './lib/types/modular-scale-ratio';
import { Shadow, ShadowLevel } from './lib/types/shadow';
import { TimingFunction } from './lib/types/timing-functions';
import {
  Units,
  UnitsAbsolute,
  UnitsRelative,
  UNITS,
  UNITS_RELATIVE,
  UNITS_ABSOLUTE,
} from './lib/types/units';

// css imports
import { getCSSVar } from './lib/css/get-css-var';

// math imports

import { min } from './lib/math/min';
import { max } from './lib/math/max';
import { clamp, clamp8Bit } from './lib/math/clamp';
import { guard } from './lib/math/guard';
import { range } from './lib/math/range';
import { lerp, lerp8Bit } from './lib/math/lerp';
import { invlerp, invlerp8Bit } from './lib/math/invlerp';
import { fuzzyEquals } from './lib/math/fuzzy-equals';

// general imports

import { capitalizeString } from './lib/general/capitalize-string';
import { isBrowser } from './lib/general/is-browser';
import {
  isProduction,
  isProductionBrowser,
  isProductionNode,
  setProductionBrowser,
} from './lib/general/is-production';
import { isString } from './lib/general/is-string';
import { hasDocument, hasDocumentElement } from './lib/general/has-document';

// color imports
import { isAchromaticRGB, isAchromaticHSL } from './lib/colors/is-achromatic';
import { normalizeRGB } from './lib/colors/normalize-rgb';
import { calculateSaturation } from './lib/colors/calculate-saturation';
import { colorStats } from './lib/colors/color-stats';
import { getHue } from './lib/colors/get-hue';
import { rgbToHSL, rgbaToHSLA } from './lib/colors/rgb-to-hsl';
import { reduceHexValue } from './lib/colors/reduce-hex-value';
import { stripUnit } from './lib/css/strip-unit';
import { pxToFactory, pxToEM, pxToREM } from './lib/css/px-to-factory';
import { numberToHex } from './lib/colors/number-to-hex';

/*
  Types Exports
*/

// types/border-sides
export { BorderSide };

// types/color
export {
  Color,
  ContrastScores,
  ColorStats,
  HSLColor,
  Alpha,
  HSLAColor,
  RGBAColor,
  RGBColor,
  RGBSet,
};

// types/fluid-range-configuration
export { FluidRangeConfiguration };

// types/font-face-configuration
export { FontFaceConfiguration };

// types/general
export { Size, Styles, Length };

// types/gradient-configuration
export {
  GradientConfigurationLinear,
  GradientConfigurationRadial,
  GradientConfigurationBase,
  GradientToDirection,
  GradientExtent,
};

// types/modular-scale-ratio
export { ModularScaleRatio };

// types/shadow
export { Shadow, ShadowLevel };

// types/timing-functions
export { TimingFunction };

// types/units
export {
  Units,
  UnitsAbsolute,
  UnitsRelative,
  UNITS_RELATIVE,
  UNITS,
  UNITS_ABSOLUTE,
};

/*
  math exports
*/

// math/min
export { min };

// math/max
export { max };

// math/clamp
export { clamp, clamp8Bit };

// math/guard
export { guard };

// math/lerp
export { lerp, lerp8Bit };

// math/invlerp
export { invlerp, invlerp8Bit };

// math/range
export { range };

// math/fuzzy-equals
export { fuzzyEquals };

/*
  general exports
*/

// general/capitalizeString
export { capitalizeString };

// general/isBrowser
export { isBrowser };

// general/isProduction
export {
  isProduction,
  isProductionBrowser,
  isProductionNode,
  setProductionBrowser,
};

// general/isString
export { isString };

// general/has-document-element
export { hasDocument, hasDocumentElement };

/*
  Color Exports
*/

// colors/is-achromatic
export { isAchromaticRGB, isAchromaticHSL };

// colors/normalize-rgb
export { normalizeRGB };

// colors/calculate-saturation
export { calculateSaturation };

// colors/color-stats
export { colorStats };

// colors/get-hue
export { getHue };

// colors/rgb-to-hsl
export { rgbToHSL, rgbaToHSLA };

// colors/reduce-to-hex
export { reduceHexValue };

// colors/strip-unit
export { stripUnit };

// colors/px-to-factory
export { pxToFactory, pxToREM, pxToEM };

// colors/number-to-hex
export { numberToHex };

// css/get-css-var
export { getCSSVar };
