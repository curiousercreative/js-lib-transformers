/**
 * @param  {string} phone 10-11 digits
 * @return {string} +13235419413
 * @example e164ize('323-232-3232') => '+13232323232'
 * @example e164ize('(323) 232-3232') => '+13232323232'
 */
export default function e164ize (phone = ''): string {
  if (typeof phone !== 'string') return phone;
  let digits = phone.replace(/[^0-9]+/g, '');

  if (
    (digits[0] === '1' && digits.length < 11)
    || (digits[0] !== '1' && digits.length !== 10)
  ) {
    console.warn(new Error(`Unable to e164ize, unexpected phone #: ${phone}`));
    return phone;
  }

  return digits.length === 10 ? `+1${digits}` : `+${digits}`;
}
