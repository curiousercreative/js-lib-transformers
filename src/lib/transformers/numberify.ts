import isNumeric from '../../util/isNumeric.js';

/**
 * converts strings '0', '1', etc to numbers
 * @param  {string} val
 * @return {string|number} the original value or a Booleanified version of it
 */
export default function numberify (val: string|number): string|number {
  return isNumeric(val) ? Number(val) : val;
}
