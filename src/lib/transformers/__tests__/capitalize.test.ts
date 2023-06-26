import capitalize from '../capitalize';

describe('capitalize', () => {
  test('should be a function', () => {
    expect(typeof capitalize).toBe('function');
  });
  test('uppercase transformation', () => {
    expect(capitalize('ASDF')).toBe('Asdf');
  });
  test('lowercase transformation', () => {
    expect(capitalize('asdf')).toEqual('Asdf');
  });
  test('multi-word transformation only capitalizes first word', () => {
    expect(capitalize('asdf ASDF Asdf')).toEqual('Asdf asdf asdf');
  });
  test('optionally preserve casing after first char', () => {
    expect(capitalize('asdf ASDF Asdf', true)).toEqual('Asdf ASDF Asdf');
  });
});
