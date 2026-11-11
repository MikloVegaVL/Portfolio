import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MethodologyComponent {

  readonly phases = [
    { title: 'method.phase1.title', body: 'method.phase1.body' },
    { title: 'method.phase2.title', body: 'method.phase2.body' },
    { title: 'method.phase3.title', body: 'method.phase3.body' },
    { title: 'method.phase4.title', body: 'method.phase4.body' },
    { title: 'method.phase5.title', body: 'method.phase5.body' },
  ];
}
