import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  it('defaults to German when storage is empty', () => {
    expect(service.current).toBe('de');
  });

  it('switches to English and persists the choice', () => {
    service.set('en');
    expect(service.current).toBe('en');
    expect(localStorage.getItem('tt.lang')).toBe('en');
  });

  it('falls back to German for an invalid stored language', () => {
    localStorage.setItem('tt.lang', 'fr');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    const fresh = TestBed.inject(LanguageService);
    expect(fresh.current).toBe('de');
  });

  it('toggles between the two languages', () => {
    service.toggle();
    expect(service.current).toBe('en');
    service.toggle();
    expect(service.current).toBe('de');
  });
});
