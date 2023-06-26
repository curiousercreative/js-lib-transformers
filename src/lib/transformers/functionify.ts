/**
 * converts non-functions into functions returning arg if not already a function
 * @param  {any} val
 * @return {array} original function or function returing original value
 */
export default function functionify (val: any): () => any {
  return typeof val === 'function'
    ? val
    : () => val;
}
