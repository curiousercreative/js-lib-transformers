/**
 * Library of common (primarily text) transformation/manipulations
 * All functions here will take input and transform it or pass it through
 * NOTE: functions ending in 'ify' likely return a data type other than string
 * while functions ending in 'ize' likely return a string
 */

export { default as arrayify } from './arrayify';
export { default as capitalize } from './capitalize';
export { default as e164ize } from './e164ize';
export { default as functionify } from './functionify';
export { default as humanize } from './humanize';
export { default as numberify } from './numberify';
export { default as pascalize } from './pascalize';
export { default as pluralize } from './pluralize';
export { default as promisify } from './promisify';
export { default as titlize } from './titlize';
