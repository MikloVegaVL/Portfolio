import { TranslatePipe } from './translate.pipe';
import { LanguageService } from './language.service';

describe('TranslatePipe', () => {
  let language: LanguageService;
  let pipe: TranslatePipe;

  beforeEach(() => {
    localStorage.clear();
    language = new LanguageService();
    pipe = new TranslatePipe(language);
  });

  it('returns the German string for a known key', () => {
    language.set('de');
    expect(pipe.transform('nav.services')).toBe('Leistungen');
  });

  it('returns the English string after switching language', () => {
    language.set('en');
    expect(pipe.transform('nav.services')).toBe('Services');
  });

  it('returns the key when the entry is missing', () => {
    expect(pipe.transform('does.not.exist')).toBe('does.not.exist');
  });
});
