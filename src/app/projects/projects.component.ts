import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
  } from '@angular/animations';



@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 1 }),
                animate('2.5s ease-in', style({ opacity: 0 }))
            ]),
        ]),
        trigger('fadeIn', [
            transition(':enter', [
                style({ transform: "translateY(100px)", opacity: 0 }),
                animate('1.2s 1.2s cubic-bezier(.29,.71,.33,.88)', style({ transform: "translateY(0)", opacity: 1 })),
            ])
        ])
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})


export class ProjectsComponent implements OnInit{

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
