import pascalize from '../pascalize';

describe('pascalize', () => {
  test('should be a function', () => {
    expect(typeof pascalize).toBe('function');
  });
  test('should transform_snake_case', () => {
    expect(pascalize('some_snake_case')).toBe('SomeSnakeCase');
  });
  test('should transform-pipe-case', () => {
    expect(pascalize('some-pipe-case')).toBe('SomePipeCase');
  });
  test('should transform white space', () => {
    expect(pascalize('some white space')).toBe('SomeWhiteSpace');
  });
  test('should transformCamelCase', () => {
    expect(pascalize('someCamelCase')).toBe('SomeCamelCase');
  });
  test('should pass through TransformPascalCase', () => {
    expect(pascalize('SomePascalCase')).toBe('SomePascalCase');
  });
});
