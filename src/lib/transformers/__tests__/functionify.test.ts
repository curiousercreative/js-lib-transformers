import functionify from '../functionify';

describe('functionify', () => {
  test('should be a function', () => {
    expect(typeof functionify).toBe('function');
  });
  test('should return a function', () => {
    expect(typeof functionify('return value')).toBe('function');
  });
  test('should return a function returning value', () => {
    expect(functionify('return value')()).toBe('return value');
  });
});
