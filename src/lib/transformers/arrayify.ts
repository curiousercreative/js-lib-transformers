/**
 * @param  {any} value
 * @return {any[]}
 */
export default function arrayify (value: any): any[] {
  return Array.isArray(value) ? value : [ value ];
}
