import { Component, OnInit } from '@angular/core';
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
    standalone: false
})


export class ProjectsComponent implements OnInit{
  // translate = 'translate3d(0px, 0px, 0px)';
  // offSet = 0;
  // value = 50;

  // @ViewChild('scrollContent') scrollContainer!: ElementRef;

  constructor() { }
  // ngAfterViewInit(): void {
  //   window.addEventListener("wheel", (event: any) => {
  //     console.log("SCROLLING");
  //     let rect = this.scrollContainer.nativeElement.getBoundingClientRect();
  //     console.log(rect);

  //     if (event.deltaY < 0) {
  //       console.log('scrolling up');
        
  //       this.offSet += this.value;
  //     } else if (event.deltaY > 0) {
  //       console.log('scrolling down');
  //       this.offSet -= this.value; 
  //     }
  //     this.scroll();
      
  //   });
  

  ngOnInit(): void {
 
  }

  // scroll() {
  //   this.translate = `translate3d(0px, ${this.offSet}px, 0px)`;
    
  // }
  
}

