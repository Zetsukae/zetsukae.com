/**
 * Translation dictionaries barrel export
 *
 * The site is English-only by default, so the English dictionary is the canonical
 * source for UI strings. Other locale files can be reintroduced later if needed.
 */

import type { DefaultUIStrings, UIStrings } from '../types';
import { uiStrings as en } from './en';

/** All translation dictionaries indexed by locale code */
export const translations: Record<string, DefaultUIStrings | UIStrings> = {
  en,
};
