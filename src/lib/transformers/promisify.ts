/**
 * converts non-promises into promises resolving with arg if not already a promise
 * @param  {any} val
 * @return {array} original promise or promise resolving original value
 */
export default function promisify (val: any): Promise<any> {
  return Promise.resolve(val);
}
