/**
 * is a value numeric or not
 * NOTE: empty string is treated as non numeric
 * @param {string|number} val - something that might be numeric
 * @returns {boolean}
 */
export default function isNumeric (val: string|number): boolean {
  return val !== '' && !isNaN(Number(val));
}
