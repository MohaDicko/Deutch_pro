import 'server-only';
import { type Locale } from './i18n-config';

const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (typeof dictionaries[locale] === 'function') {
    return dictionaries[locale]();
  }
  return dictionaries.de();
};
