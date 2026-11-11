import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';

@Pipe({
  name: 't',
  pure: false,
  standalone: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private language: LanguageService) { }

  transform(key: string): string {
    return this.language.translate(key);
  }
}
