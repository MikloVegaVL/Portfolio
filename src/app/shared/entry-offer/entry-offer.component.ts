import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

type FormState = 'idle' | 'success' | 'error' | 'retry';

@Component({
  selector: 'app-entry-offer',
  templateUrl: './entry-offer.component.html',
  styleUrls: ['./entry-offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class EntryOfferComponent {

  url = '';
  email = '';
  consent = false;
  state: FormState = 'idle';

  constructor(private language: LanguageService) { }

  onUrl(event: Event): void {
    this.url = (event.target as HTMLInputElement).value;
  }

  onEmail(event: Event): void {
    this.email = (event.target as HTMLInputElement).value;
  }

  onConsent(event: Event): void {
    this.consent = (event.target as HTMLInputElement).checked;
  }

  submit(): void {
    if (!this.canSubmit()) {
      this.state = 'error';
      return;
    }
    try {
      const subject = encodeURIComponent('Security-Check Anfrage');
      const body = encodeURIComponent(
        `Ziel-URL: ${this.url}\nE-Mail: ${this.email}\nSprache: ${this.language.current}`
      );
      window.location.href = `mailto:sayhello@thomastritscher.com?subject=${subject}&body=${body}`;
      this.state = 'success';
    } catch {
      this.state = 'retry';
    }
  }

  canSubmit(): boolean {
    return this.url.trim().length > 3
      && this.url.includes('.')
      && this.email.includes('@')
      && this.email.includes('.')
      && this.consent;
  }
}
