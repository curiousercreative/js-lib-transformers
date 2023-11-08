/**
 * Library of common (primarily text) transformation/manipulations
 * All functions here will take input and transform it or pass it through
 * NOTE: functions ending in 'ify' likely return a data type other than string
 * while functions ending in 'ize' likely return a string
 */

export { default as arrayify } from './arrayify.js';
export { default as booleanify } from './booleanify.js';
export { default as capitalize } from './capitalize.js';
export { default as e164ize } from './e164ize.js';
export { default as functionify } from './functionify.js';
export { default as humanize } from './humanize.js';
export { default as numberify } from './numberify.js';
export { default as pascalize } from './pascalize.js';
export { default as pluralize } from './pluralize.js';
export { default as promisify } from './promisify.js';
export { default as titlize } from './titlize.js';
