/**
 * i18n Type Definitions
 *
 * Core types for the internationalization system.
 * Locale codes follow BCP 47 short format (e.g., 'en').
 */

/**
 * Supported locale code (derived from site.yaml i18n.locales).
 *
 * This is a semantic alias for `string` — locale codes are dynamic (configured
 * in YAML), so a literal union is not practical. Use `isLocaleSupported()` as
 * a runtime guard to narrow unknown strings into valid locales.
 */
export type Locale = string;

/**
 * Translation key — string-based lookup for runtime flexibility across the site.
 * Keeping this as a generic string avoids circular type references between
 * the translations dictionary and the shared i18n type file.
 */
export type TranslationKey = string;

/**
 * UI string dictionary type.
 * All locales must provide a subset (or full set) of the default locale's keys.
 */
export type UIStrings = Partial<Record<TranslationKey, string>>;

/**
 * Complete UI string dictionary (default locale must have all keys).
 */
export type DefaultUIStrings = Record<TranslationKey, string>;

/**
 * Parameters for interpolation in translation strings.
 * Example: t('post.totalPosts', { count: '5' }) replaces {count} in the string.
 */
export type TranslationParams = Record<string, string | number>;
