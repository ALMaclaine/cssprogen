type Color = string;

enum RGBSet {
  RED = 'RED',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
}

interface SaturationLightness {
  lightness: number;
  saturation: number;
}

interface ContrastScores {
  AA: boolean;
  AALarge: boolean;
  AAA: boolean;
  AAALarge: boolean;
}

interface HSLColor extends SaturationLightness {
  hue: number;
}

interface ColorStats extends SaturationLightness {
  maxColor: number;
  maxColorHue: RGBSet;
  minColor: number;
  minColorHue: RGBSet;
  delta: number;
}

interface Alpha {
  alpha: number;
}

interface HSLAColor extends HSLColor, Alpha {}

interface RGBColor {
  red: number;
  green: number;
  blue: number;
}

interface RGBAColor extends RGBColor, Alpha {}

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
