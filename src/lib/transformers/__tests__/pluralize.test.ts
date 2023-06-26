import pluralize from '../pluralize';

describe('pluralize', () => {
  test('should be a function', () => {
    expect(typeof pluralize).toBe('function');
  });
  test('should pluralize by appending an s by default', () => {
    expect(pluralize('banana', 100)).toBe('bananas');
  });
  test('should pluralize with plural form provided', () => {
    expect(pluralize('hero', 100, 'heroes')).toBe('heroes');
  });
  test('should allow including the count', () => {
    expect(pluralize('hero', 100, 'heroes', true)).toBe('100 heroes');
  });
});
