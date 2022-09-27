// type imports
import { BorderSide } from './lib/types/border-sides';
import {
  Color,
  ContrastScores,
  HSLColor,
  Alpha,
  HSLAColor,
  RGBAColor,
  RGBColor,
} from './lib/types/color';
import { FluidRangeConfiguration } from './lib/types/fluid-range-configuration';
import { FontFaceConfiguration } from './lib/types/font-face-configuration';
import { Length, Styles } from './lib/types/general';
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

// math imports

import { min } from './lib/math/min';
import { max } from './lib/math/max';
import { clamp } from './lib/math/clamp';
import { clamp8Bit } from './lib/math/clamp8Bit';
import { guard } from './lib/math/guard';
import { range } from './lib/math/range';
import { lerp } from './lib/math/lerp';
import { invlerp } from './lib/math/invlerp';

// general imports

import { capitalizeString } from './lib/general/capitalize-string';
import { isBrowser } from './lib/general/is-browser';
import {
  isProduction,
  isProductionBrowser,
  isProductionNode,
  setProductionBrowser,
} from './lib/general/is-production';

/*
  Types Exports
*/

// types/border-sides
export { BorderSide };

// types/color
export {
  Color,
  ContrastScores,
  HSLColor,
  Alpha,
  HSLAColor,
  RGBAColor,
  RGBColor,
};

// types/fluid-range-configuration
export { FluidRangeConfiguration };

// types/font-face-configuration
export { FontFaceConfiguration };

// types/general
export { Length, Styles };

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

/*
  math exports
*/

// math/min
export { min };

// math/max
export { max };

// math/clamp
export { clamp };

// math/clamp8Bit
export { clamp8Bit };

// math/guard
export { guard };

// math/lerp
export { lerp };

// math/invlerp
export { invlerp };

// math/range
export { range };

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
