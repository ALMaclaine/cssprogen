import { toStringAll } from './to-string-all';

describe('toStringAll works', () => {
  it('toStringAll works work', () => {
    expect(toStringAll('a')).toBe('a');
    expect(toStringAll(1)).toBe('1');
    expect(toStringAll({ a: 2 })).toBe('{"a":2}');
    expect(toStringAll([1, 2, 3])).toBe('[1, 2, 3]');
    expect(toStringAll([{ a: 2 }, { a: 3 }, { a: 4 }])).toBe(
      '[{"a":2}, {"a":3}, {"a":4}]'
    );
  });
});
