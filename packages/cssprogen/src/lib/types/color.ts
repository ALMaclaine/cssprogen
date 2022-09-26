type Color = string;

interface ContrastScores {
  AA: boolean;
  AALarge: boolean;
  AAA: boolean;
  AAALarge: boolean;
}

interface HSLColor {
  hue: number;
  saturation: number;
  color: number;
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
  HSLColor,
  Alpha,
  HSLAColor,
  RGBAColor,
  RGBColor,
};
