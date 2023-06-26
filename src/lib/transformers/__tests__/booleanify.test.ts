import booleanify from '../booleanify';

describe('booleanify', () => {
  test('should be a function', () => {
    expect(typeof booleanify).toBe('function');
  });
  test('should match "true"', () => {
    expect(booleanify('true')).toEqual(true);
  });
  test('should match "1"', () => {
    expect(booleanify('1')).toEqual(true);
  });
  test('should match "TRUE"', () => {
    expect(booleanify('TRUE')).toEqual(true);
  });
});
