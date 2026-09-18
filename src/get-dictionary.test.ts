import { describe, expect, it } from 'vitest';
import { getDictionary } from './get-dictionary';

describe('getDictionary', () => {
  it('renvoie le dictionnaire français pour la locale fr', async () => {
    const dict = await getDictionary('fr');

    expect(dict).toBeTruthy();
    expect(dict.hero.title1).toBeTypeOf('string');
    expect(dict.services.cards.coursIntensifs.title).toContain('A1');
  });

  it('retourne le dictionnaire allemand par défaut pour une locale inconnue', async () => {
    const dict = await getDictionary('de');

    expect(dict.hero.badge).toBeTruthy();
    expect(dict.hero.title2).toBeTruthy();
  });
});
