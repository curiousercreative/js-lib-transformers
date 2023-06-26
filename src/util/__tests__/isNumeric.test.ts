import isNumeric from '../isNumeric';

describe('isNumeric', () => {
  test('should be a function', () => {
    expect(typeof isNumeric).toBe('function');
  });
  test('inputs of type number should be numeric', () => {
    expect(isNumeric(55)).toBe(true);
  });
  test('numeric string should be numeric', () => {
    expect(isNumeric(String(55))).toBe(true);
  });
  test('empty string should not be numeric', () => {
    expect(isNumeric('')).toBe(false);
  });
});
