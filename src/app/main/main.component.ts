import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { LayerChangeService } from '../services/layer-change.service';
import { TransformBGService } from '../services/transform-bg.service';
import { TransitionBgService } from '../services/transition-bg.service';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    animations: [
        trigger('load', [
            transition(':enter', [
                style({ opacity: 1 }),
                animate('2.5s ease-in-out', style({ opacity: 0 }))
            ]),
        ]),
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class MainComponent implements OnInit {


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

  //End cursor follower



  constructor(public transformBg: TransformBGService, public layer: LayerChangeService, public translate: TransitionBgService) { }

  startWheel:any; //var for Touchpad
  counter = 0;
  touchStart: any;
  swipeDirection: any; //var for touch direction mobile

  ngOnInit(): void {
    //scroll events for Desktop
    window.addEventListener("wheel", (event: any) => {
      if(this.startWheel ===  undefined){//first wheel
        this.startWheel = new Date().getTime();
        if (event.deltaY < 0) { //scrolling up
          this.counter--;
        } else if (event.deltaY > 0) {// scrolling down
          this.counter++;
        }
      }

      const elapse = new Date().getTime() - this.startWheel;
      if(elapse > 700){
        this.startWheel = new Date().getTime();
        if (event.deltaY < 0) { //scrolling up
          this.counter--;
        } else if (event.deltaY > 0) {// scrolling down
          this.counter++;
        }
      }

      if (this.counter < 1) {
        this.transformBg.startBg();
        this.layer.backToStartScreen();
      }



      if (this.counter == 2) {
        this.transformBg.switchBgToZero();
        this.layer.firstWheelEvent();
      }



      if (this.counter == 3) {
        this.layer.secondWheelEvent();
        this.transformBg.switchBgToZero();
      }


      if (this.counter == 4) {
        this.layer.thirdWheelEvent();
        this.transformBg.switchBgToFull();
      }


      if (this.counter > 5) {
        this.counter = 0;
        this.transformBg.startBg();
        this.layer.backToStartScreen();
      }


      if (this.counter < 0) {
        this.counter = 0;
      }
    });

     //touch events for mobile use
    window.addEventListener("touchstart", (event: any)=>{
      this.touchStart = event.touches[0].clientY;
    });
    window.addEventListener("touchmove", (event: any)=>{
        let currentTouch = event.touches[0].clientY;
        if(currentTouch < this.touchStart){
          //screen touch up
          this.swipeDirection = "up";
        }
        if(currentTouch > this.touchStart){
         //screen touch down
          this.swipeDirection = "down";
        }
    });


    window.addEventListener("touchend", (event: any)=>{
      if(this.swipeDirection == "down"){
        this.counter--;
      }
      if(this.swipeDirection == "up"){
        this.counter++;
      }
      if (this.counter < 1) {
        this.transformBg.startBg();
        this.layer.backToStartScreen();
      }
      if (this.counter == 2) {
        this.transformBg.switchBgToZero();
        this.layer.firstWheelEvent();
      }
      if (this.counter == 3) {
        this.layer.secondWheelEvent();
        this.transformBg.switchBgToZero();
      }
      if (this.counter == 4) {
        this.layer.thirdWheelEvent();
        this.transformBg.switchBgToFull();
      }
      if (this.counter > 5) {
        this.counter = 0;
        this.transformBg.startBg();
        this.layer.backToStartScreen();
      }
      if (this.counter < 0) {
        this.counter = 0;
      }
    });

  }
}

