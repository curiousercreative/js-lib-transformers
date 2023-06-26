import arrayify from '../arrayify';

describe('arrayify', () => {
  test('should be a function', () => {
    expect(typeof arrayify).toBe('function');
  });
  test('string should be transformed to array with string as only item', () => {
    expect(arrayify('array')).toEqual([ 'array' ]);
  });
  test('boolean should be transformed to array with boolean as only item', () => {
    expect(arrayify(false)).toEqual([ false ]);
  });
  test('object should be transformed to array with object as only item', () => {
    expect(arrayify({})).toEqual([ {} ]);
  });
  test('1D array should remain 1D', () => {
    expect(arrayify([])).toEqual([]);
  });
  test('2D array should remain 2D', () => {
    expect(arrayify([[]])).toEqual([[]]);
  });
});
