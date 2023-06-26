import numberify from '../numberify';

describe('numberify', () => {
  test('should be a function', () => {
    expect(typeof numberify).toBe('function');
  });
  test('string should be transformed to number if numeric', () => {
    expect(numberify('12')).toBe(12);
  });
  test('number should be passed through', () => {
    expect(numberify(12)).toBe(12);
  });
  test('0 should be number', () => {
    expect(numberify(0)).toBe(0);
  });
});
