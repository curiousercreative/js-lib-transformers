/**
 * @param  {string} str
 * @param  {boolean} [ preserveCasing = false ] - preserves casing of all but first char
 * @return {string}
 * @example capitalize('first NAME') => 'First name'
 * @example capitalize('first NAME', true) => 'First NAME'
 */
export default function capitalize (str = '', preserveCasing = false): string {
  if (typeof str !== 'string') return str;

  return str.substr(0, 1).toUpperCase() + (preserveCasing
    ? str.substr(1)
    : str.substr(1).toLowerCase()
  );
}
