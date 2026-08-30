import { Component, ElementRef, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-data-protection',
    templateUrl: './data-protection.component.html',
    styleUrls: ['./data-protection.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DataProtectionComponent implements OnInit, OnDestroy {

  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef<HTMLElement>;

  constructor() { }

  // Stored as a bound instance method (not inline in ngOnInit) so the exact
  // same function reference can be removed in ngOnDestroy - otherwise this
  // stays attached to `window` forever after routing away from this page.
  private readonly onKeydown = (event: KeyboardEvent) => {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
      return;
    }
    event.preventDefault();

    const step = 160; // px per key press
    this.scrollContainer.nativeElement.scrollBy({
      top: event.key === 'ArrowDown' ? step : -step,
      behavior: 'smooth'
    });
  };

  ngOnInit(): void {
    // let ArrowUp/ArrowDown scroll the page like a normal wheel scroll
    window.addEventListener('keydown', this.onKeydown);
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.onKeydown);
  }

}
