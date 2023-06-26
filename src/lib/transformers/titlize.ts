import capitalize from './capitalize';

const BLACKLIST = [
  'a',
  'an',
  'and',
  'but',
  'for',
  'nor',
  'of',
  'or',
  'the',
];

/**
 * @param  {string} str
 * @param  {string[]} [ delimiters = [ ' ' ] ] - what to split a string on to get list of words
 * @return {string} [ outDelimiter = '' ] - what to glue the words together with
 * @example titlize('this is a sentence') => 'This Is A Sentence'
 */
export default function titlize (str = '', delimiters = [ ' ' ], outDelimiter = ' '): string {
  if (typeof str !== 'string') return str;

  const words = str.split(new RegExp(`[${delimiters.join()}]+`));

  return words
    // capitalize all words that aren't blacklisted, unless they are first
    .map((str, i) => !BLACKLIST.includes(str) || i === 0
      ? capitalize(str)
      : str.toLowerCase()
    )
    .join(outDelimiter);
}
