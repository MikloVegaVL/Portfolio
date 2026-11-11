import { TRANSLATIONS } from './translations';

describe('Translations', () => {
  it('expose the same key set in German and English', () => {
    const de = Object.keys(TRANSLATIONS.de).sort();
    const en = Object.keys(TRANSLATIONS.en).sort();
    expect(de).toEqual(en);
  });

  it('cover every top-level page', () => {
    const required = [
      'nav.services', 'nav.method', 'nav.about', 'nav.development', 'nav.contact',
      'services.title', 'method.title', 'about.title', 'dev.title', 'contact.title',
      'offer.title', 'meta.title',
    ];
    for (const key of required) {
      expect(TRANSLATIONS.de[key]).toBeTruthy();
      expect(TRANSLATIONS.en[key]).toBeTruthy();
    }
  });
});
