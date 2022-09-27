import { getHue } from './get-hue';
import { RGBSet } from '../types/color';
import { CSSProgenError, CSSProgenErrorSet } from '../general/cssprogen-error';

describe('getHue works', () => {
  it('getHue works', () => {
    const hue1 = getHue({ red: 255, blue: 255, green: 255 }, 255);
    expect(hue1).toBe(RGBSet.RED);

    const hue2 = getHue({ red: 0, blue: 255, green: 255 }, 255);
    expect(hue2).toBe(RGBSet.GREEN);

    const hue3 = getHue({ red: 0, blue: 255, green: 0 }, 255);
    expect(hue3).toBe(RGBSet.BLUE);

    const errorColor = { red: 0, blue: 255, green: 0 };
    expect(() => getHue(errorColor, 25)).toThrowError(
      new CSSProgenError(CSSProgenErrorSet.ERROR_002, [25, errorColor] as never)
    );
  });
});
