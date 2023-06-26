const truthes = [
  'true',
  'TRUE',
  '1',
  true,
]
/**
 * converts strings '0', '1', 'true', 'false' to booleans
 * @param  {any} val
 * @return {string|number} the original value or a Booleanified version of it
 */
export default function booleanify (val: any): boolean {
  return truthes.includes(val);
}
