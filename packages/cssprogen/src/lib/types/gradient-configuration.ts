import { Color } from './color';

type GradientShape = 'circle' | 'ellipse';

type GradientExtent =
  | 'closest-corner'
  | 'closest-side'
  | 'farthest-corner'
  | 'farthest-side';

type GradientToDirection =
  | string
  | 'to left'
  | 'to right'
  | 'to top'
  | 'to bottom'
  | 'to top left'
  | 'to top right'
  | 'to bottom left'
  | 'to bottom right';

interface GradientConfigurationBase {
  colorStops: Color[];
  fallback?: Color;
}

interface GradientConfigurationLinear extends GradientConfigurationBase {
  toDirection?: GradientToDirection;
}

interface GradientConfigurationRadial extends GradientConfigurationBase {
  extent?: GradientExtent;
  shape?: GradientShape;
}

export {
  GradientConfigurationLinear,
  GradientConfigurationRadial,
  GradientConfigurationBase,
  GradientToDirection,
  GradientExtent,
};
