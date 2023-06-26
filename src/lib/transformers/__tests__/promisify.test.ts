import promisify from '../promisify';

describe('promisify', () => {
  test('should be a function', () => {
    expect(typeof promisify).toBe('function');
  });
  test('should resolve to input value', () => {
    expect(promisify('12')).resolves.toBe('12');
  });
});
