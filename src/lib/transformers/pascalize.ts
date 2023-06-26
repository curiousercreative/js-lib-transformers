import capitalize from './capitalize';

/**
 * convert a string to pascal casing and treat - and _ as word delimiters
 * @function pascalize
 * @param  {string} str
 * @return {string}
 * @example
 * pascalize('some_snake_case') => 'SomeSnakeCase'
 * pascalize('some-pipe-case') => 'SomePipeCase'
 * pascalize('some word') => 'SomeWord'
 * pascalize('someCamelCase') => 'SomeCamelCase'
 */
export default function pascalize (str: string): string {
  if (!str) return str;

  return str
    .replace(/([A-Z])/, '_$1')
    .split(/[-_\s]/)
    .map(str => capitalize(str, true))
    .join('');
}
