import { Color } from './color';

interface BaseGradientConfiguration {
  colorStops: Color[];
  fallback?: string;
}

interface LinearGradientConfiguration extends BaseGradientConfiguration {
  toDirection?: string;
}

interface RadialGradientConfiguration extends BaseGradientConfiguration {
  extent?: string;
  shape?: string;
}

export {
  LinearGradientConfiguration,
  RadialGradientConfiguration,
  BaseGradientConfiguration,
};
