import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
  } from '@angular/animations';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss'],
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
            ]),
        ]),
    ],
    standalone: false
})
export class PersonComponent implements OnInit {


  

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
