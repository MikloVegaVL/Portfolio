import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Language, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'tt.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private readonly subject: BehaviorSubject<Language>;
  readonly language$: Observable<Language>;

  constructor() {
    let initial: Language = 'de';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'de' || stored === 'en') {
        initial = stored;
      }
    } catch {
      // storage unavailable - stay in memory with the default language
    }
    this.subject = new BehaviorSubject<Language>(initial);
    this.language$ = this.subject.asObservable();
    this.applyHtmlLang(initial);
  }

  get current(): Language {
    return this.subject.value;
  }

  set(language: Language): void {
    this.subject.next(language);
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore storage failures; the in-memory choice still applies
    }
    this.applyHtmlLang(language);
  }

  toggle(): void {
    this.set(this.current === 'de' ? 'en' : 'de');
  }

  translate(key: string): string {
    return TRANSLATIONS[this.current][key] ?? key;
  }

  private applyHtmlLang(language: Language): void {
    try {
      document.documentElement.setAttribute('lang', language);
    } catch {
      // no DOM (e.g. unit test) - nothing to do
    }
  }
}
