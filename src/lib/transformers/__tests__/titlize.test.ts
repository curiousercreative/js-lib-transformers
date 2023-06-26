import titlize from '../titlize';

describe('titlize', () => {
  test('should be a function', () => {
    expect(typeof titlize).toBe('function');
  });
  test('should capitalize all words delimited by whitespace by default', () => {
    expect(titlize('space balls')).toBe('Space Balls');
  });
  test('should not capitalize blacklisted words', () => {
    expect(titlize('to kill a mockingbird')).toBe('To Kill a Mockingbird');
  });
  test('should handle snake_case via optional params', () => {
    expect(titlize('some_snake_case', [ '_' ])).toBe('Some Snake Case');
  });
  test('should handle snake_case to PascalCase via optional params', () => {
    expect(titlize('some_snake_case', [ '_' ], '')).toBe('SomeSnakeCase');
  });
});
