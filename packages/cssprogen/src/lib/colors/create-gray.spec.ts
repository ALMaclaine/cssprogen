import { createGray, createGrayAlpha } from './create-gray';

describe('createGray works', () => {
  it('createGray works', () => {
    expect(createGray(1)).toMatchObject({ red: 1, green: 1, blue: 1 });
    expect(createGray(-1)).toMatchObject({ red: 0, green: 0, blue: 0 });
    expect(createGray(255)).toMatchObject({ red: 255, green: 255, blue: 255 });
    expect(createGray(256)).toMatchObject({ red: 255, green: 255, blue: 255 });
  });

  it('createGrayAlpha works', () => {
    expect(createGrayAlpha(1, -1)).toMatchObject({
      red: 1,
      green: 1,
      blue: 1,
      alpha: 0,
    });
    expect(createGrayAlpha(-1, 0)).toMatchObject({
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0,
    });
    expect(createGrayAlpha(255, 0.5)).toMatchObject({
      red: 255,
      green: 255,
      blue: 255,
      alpha: 0.5,
    });
    expect(createGrayAlpha(256, 1.5)).toMatchObject({
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1,
    });
  });
});
