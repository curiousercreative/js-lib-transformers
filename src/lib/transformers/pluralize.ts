/**
 * conditionally render the singular or plural of a noun
 * @function pluralize
 * @param  {string}  singularForm
 * @param  {number}  count
 * @param  {string}  [pluralForm]
 * @param  {Boolean} [includeCount=false] whether to prepend the count
 * @return {string} either the singular or plural noun
 */
export default function pluralize (singularForm: string, count: number, pluralForm?: string, includeCount = false): string {
  pluralForm = pluralForm || `${singularForm}s`;

  const form = count === 1 ? singularForm : pluralForm;

  return includeCount ? `${count} ${form}` : form;
}
