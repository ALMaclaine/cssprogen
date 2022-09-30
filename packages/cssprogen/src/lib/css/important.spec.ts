import { important } from './important';

describe('important', () => {
  it('should add !important to a single rule in a flat style block', () => {
    expect(important({ color: 'red' })).toEqual({
      color: 'red !important',
    });
  });

  it('should add !important to a single rule in a flat style block when the value is a number', () => {
    expect(important({ fontSize: 12 })).toEqual({
      fontSize: '12 !important',
    });
  });

  it('should add !important to every rule in a flat style block', () => {
    expect(
      important({
        color: 'red',
        background: 'blue',
      })
    ).toEqual({
      background: 'blue !important',
      color: 'red !important',
    });
  });

  it('should add !important to a target rule when passed as a string', () => {
    expect(
      important(
        {
          color: 'red',
          background: 'blue',
        },
        'color'
      )
    ).toEqual({
      background: 'blue',
      color: 'red !important',
    });
  });

  it('should add !important to a target rule when passed as a single item array', () => {
    expect(
      important(
        {
          color: 'red',
          background: 'blue',
        },
        ['color']
      )
    ).toEqual({
      background: 'blue',
      color: 'red !important',
    });
  });

  it('should add !important to a target rule when passed as an array', () => {
    expect(
      important(
        {
          color: 'red',
          background: 'blue',
          height: '100px',
        },
        ['color', 'height']
      )
    ).toEqual({
      background: 'blue',
      color: 'red !important',
      height: '100px !important',
    });
  });

  it('should add !important to a mixture of unnested and nested target rules when passed as an array', () => {
    expect(
      important(
        {
          background: 'blue',
          height: '100px',
          div: {
            color: 'red',
          },
        },
        ['color', 'height']
      )
    ).toEqual({
      background: 'blue',
      div: {
        color: 'red !important',
      },
      height: '100px !important',
    });
  });

  it('should return original styles when no properties are found', () => {
    expect(
      important(
        {
          color: 'red',
          background: 'blue',
          height: '100px',
        },
        ['width', 'fontSize']
      )
    ).toEqual({
      background: 'blue',
      color: 'red',
      height: '100px',
    });
  });
});
