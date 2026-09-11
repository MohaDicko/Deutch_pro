export const i18n = {
  defaultLocale: 'de',
  locales: ['de', 'fr'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
