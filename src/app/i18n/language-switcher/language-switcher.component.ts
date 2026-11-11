import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LanguageSwitcherComponent {

  constructor(public language: LanguageService) { }
}
