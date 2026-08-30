import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-data-protection',
    templateUrl: './data-protection.component.html',
    styleUrls: ['./data-protection.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DataProtectionComponent implements OnInit {

  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
    // let ArrowUp/ArrowDown scroll the page like a normal wheel scroll
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
        return;
      }
      event.preventDefault();

      const step = 160; // px per key press
      this.scrollContainer.nativeElement.scrollBy({
        top: event.key === 'ArrowDown' ? step : -step,
        behavior: 'smooth'
      });
    });
  }

}
