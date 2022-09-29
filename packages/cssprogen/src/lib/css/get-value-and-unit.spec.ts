import { getValueAndUnit } from './get-value-and-unit';
import { CSSProgenError, CSSProgenErrorSet } from '../general/cssprogen-error';

describe('getValueAndUnit', () => {
  it('should get value and px from whole values', () => {
    expect(getValueAndUnit('1px')).toEqual({ value: 1, unit: 'px' });
  });

  it('should get value and px from values', () => {
    expect(getValueAndUnit('1.5px')).toEqual({ value: 1.5, unit: 'px' });
  });

  it('should get value and pt from whole values', () => {
    expect(getValueAndUnit('1pt')).toEqual({ value: 1, unit: 'pt' });
  });

  it('should get value and pt from values', () => {
    expect(getValueAndUnit('1.5pt')).toEqual({ value: 1.5, unit: 'pt' });
  });

  it('should get value and pc from whole values', () => {
    expect(getValueAndUnit('1pc')).toEqual({ value: 1, unit: 'pc' });
  });

  it('should get value and pc from values', () => {
    expect(getValueAndUnit('1.5pc')).toEqual({ value: 1.5, unit: 'pc' });
  });

  it('should get value and mm from whole values', () => {
    expect(getValueAndUnit('1mm')).toEqual({ value: 1, unit: 'mm' });
  });

  it('should get value and mm from values', () => {
    expect(getValueAndUnit('1.5mm')).toEqual({ value: 1.5, unit: 'mm' });
  });

  it('should get value and q from whole values', () => {
    expect(getValueAndUnit('1q')).toEqual({ value: 1, unit: 'q' });
  });

  it('should get value and q from values', () => {
    expect(getValueAndUnit('1.5q')).toEqual({ value: 1.5, unit: 'q' });
  });

  it('should get value and cm from whole values', () => {
    expect(getValueAndUnit('1cm')).toEqual({ value: 1, unit: 'cm' });
  });

  it('should get value and cm from values', () => {
    expect(getValueAndUnit('1.5cm')).toEqual({ value: 1.5, unit: 'cm' });
  });

  it('should get value and in from whole values', () => {
    expect(getValueAndUnit('1in')).toEqual({ value: 1, unit: 'in' });
  });

  it('should get value and in from values', () => {
    expect(getValueAndUnit('1.5in')).toEqual({ value: 1.5, unit: 'in' });
  });

  it('should get value and em from whole value', () => {
    expect(getValueAndUnit('1em')).toEqual({ value: 1, unit: 'em' });
  });

  it('should get value and em from decimal values', () => {
    expect(getValueAndUnit('1.2em')).toEqual({ value: 1.2, unit: 'em' });
  });

  it('should get value and rem from whole values', () => {
    expect(getValueAndUnit('1rem')).toEqual({ value: 1, unit: 'rem' });
  });

  it('should get value and rem from decimal values', () => {
    expect(getValueAndUnit('1.2rem')).toEqual({ value: 1.2, unit: 'rem' });
  });

  it('should get value and ex from whole values', () => {
    expect(getValueAndUnit('1ex')).toEqual({ value: 1, unit: 'ex' });
  });

  it('should get value and ex from decimal values', () => {
    expect(getValueAndUnit('1.2ex')).toEqual({ value: 1.2, unit: 'ex' });
  });

  it('should get value and ch from whole values', () => {
    expect(getValueAndUnit('1ch')).toEqual({ value: 1, unit: 'ch' });
  });

  it('should get value and ch from decimal values', () => {
    expect(getValueAndUnit('1.2ch')).toEqual({ value: 1.2, unit: 'ch' });
  });

  it('should get value and vh from whole values', () => {
    expect(getValueAndUnit('100vh')).toEqual({ value: 100, unit: 'vh' });
  });

  it('should get value and vh from decimal values', () => {
    expect(getValueAndUnit('33.33vh')).toEqual({ value: 33.33, unit: 'vh' });
  });

  it('should get value and vw from whole values', () => {
    expect(getValueAndUnit('100vw')).toEqual({ value: 100, unit: 'vw' });
  });

  it('should get value and vw from decimal values', () => {
    expect(getValueAndUnit('33.33vw')).toEqual({ value: 33.33, unit: 'vw' });
  });

  it('should get value and vmin from whole values', () => {
    expect(getValueAndUnit('100vmin')).toEqual({ value: 100, unit: 'vmin' });
  });

  it('should get value and vmin from decimal values', () => {
    expect(getValueAndUnit('33.33vmin')).toEqual({
      value: 33.33,
      unit: 'vmin',
    });
  });

  it('should get value and vmax from whole values', () => {
    expect(getValueAndUnit('100vmax')).toEqual({ value: 100, unit: 'vmax' });
  });

  it('should get value and vmax from decimal values', () => {
    expect(getValueAndUnit('33.33vmax')).toEqual({
      value: 33.33,
      unit: 'vmax',
    });
  });

  it('should get value and % from whole values', () => {
    expect(getValueAndUnit('80%')).toEqual({ value: 80, unit: '%' });
  });

  it('should get value and % from decimal values', () => {
    expect(getValueAndUnit('33.3%')).toEqual({ value: 33.3, unit: '%' });
  });

  it('should return value and no unit when passed a number string', () => {
    expect(getValueAndUnit('33')).toEqual({ value: 33, unit: '' });
  });

  it('should return value and no unit when passed a number string', () => {
    expect(() => getValueAndUnit('33px33')).toThrowError(
      new CSSProgenError(CSSProgenErrorSet.ERROR_007, ['33px33'])
    );
  });
});
