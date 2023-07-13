import e164ize from '../e164ize';

describe('e164ize', () => {
  test('should be a function', () => {
    expect(typeof e164ize).toBe('function');
  });
  test('1 (323) 323-2323', () => {
    expect(e164ize('1 (323) 323-2323')).toBe('+13233232323');
  });
  test('(323) 323-2323', () => {
    expect(e164ize('(323) 323-2323')).toBe('+13233232323');
  });
  test('323-323-2323', () => {
    expect(e164ize('323-323-2323')).toBe('+13233232323');
  });
  test('3233232323', () => {
    expect(e164ize('3233232323')).toBe('+13233232323');
  });
  test('+13233232323', () => {
    expect(e164ize('+13233232323')).toBe('+13233232323');
  });
  test('13233232323', () => {
    expect(e164ize('13233232323')).toBe('+13233232323');
  });
});
