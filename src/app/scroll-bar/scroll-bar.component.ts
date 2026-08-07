import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-scroll-bar',
    templateUrl: './scroll-bar.component.html',
    styleUrls: ['./scroll-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ScrollBarComponent implements OnInit {
  
  translate = 'translate3d(0px, 0px, 0px)';
  offSet = 0;
  value = 100;
  constructor() { }
  ngOnInit(): void {
    window.addEventListener("wheel", (event: any) => {
      console.log("SCROLLING");
      if (event.deltaY < 0) {
        console.log('scrolling up');
        this.offSet += this.value;
       
      } else if (event.deltaY > 0) {
        console.log('scrolling down');
        this.offSet -= this.value;
      
      }
      this.scroll();
    });
  }
  scroll() {
    this.translate = `translate3d(0px, ${this.offSet}%, 0px)`;
    document.getElementById('scrollBar')?.classList.add('show');
 
  }
}
  
 

 

