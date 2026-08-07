import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-cursor',
    templateUrl: './cursor.component.html',
    styleUrls: ['./cursor.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CursorComponent implements OnInit {

  // Cursor follower
@ViewChild('cursor')
cursor!: ElementRef;
@ViewChild('cursor2')
cursor2!: ElementRef;

ngAfterViewInit(): void {
  document.addEventListener('mousemove', e => {
    this.cursor.nativeElement.style.cssText = this.cursor2.nativeElement.style.cssText =
      'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
  });
}

  constructor() { }

  ngOnInit(): void {
  }

}
