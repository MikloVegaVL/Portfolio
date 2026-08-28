import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { LayerChangeService } from '../services/layer-change.service';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ContactComponent implements OnInit {

  //var for Layers
  z_active = 9;
  z_inactive = 0;
  z_inactive2 = 0;
  z_inactive3 = -1;

  //var for text translate
  firstText = 'translate3d(0px, 0%, 0px)';
  secondText = 'translate3d(0px, -145%, 0px)';
  thirdText = 'translate3d(0px, -145%, 0px)';
  fourthText = 'translate3d(0px, -145%, 0px)';

  defaultImgPosition = 'translate3d(0px, -600px, 0px)';
  counter = 0;
  touchStart: any;
  swipeDirection: any; //var for touch direction mobile

  // Longest CSS transition driven by a step (defaultImgPosition, 1.5s).
  // Steps are locked out until it finishes so a new input can never cut an
  // in-flight transition short - that interruption is what caused the
  // "shaking"/jump-cut feeling.
  private readonly stepLockMs = 1500;
  private isStepping = false;

  constructor(public layer: LayerChangeService) { }

  // Single source of truth for advancing/reversing one section, shared by
  // wheel and touch input so both behave identically.
  private step(direction: 1 | -1): void {
    if (this.isStepping) {
      return; //ignore input until the current transition has fully settled
    }
    this.isStepping = true;
    window.setTimeout(() => { this.isStepping = false; }, this.stepLockMs);

    this.counter += direction;

    if (this.counter < 1) {
      this.startScreen();
    }

    if (this.counter == 2) {
      this.firstWheelEvent();
    }

    if (this.counter == 3) {
      this.secondWheelEvent();
    }

    if (this.counter == 4) {
      this.thirdWheelEvent();
    }

    if (this.counter > 5) {
      this.counter = 0;
      this.startScreen();
    }

    if (this.counter < 0) {
      this.counter = 0;
    }
  }

  ngOnInit(): void {

    window.addEventListener("wheel", (event: any) => {
      // Stop the browser's own scroll/elastic-overscroll bounce - it runs
      // outside our control and fights the custom transition, which is what
      // reads as a "shake" layered on top of it.
      event.preventDefault();

      if (Math.abs(event.deltaY) < 2) {
        return; //ignore residual trackpad-momentum noise
      }
      this.step(event.deltaY < 0 ? -1 : 1); //up : down
    }, { passive: false });

    //touch events for mobile use
    window.addEventListener("touchstart", (event: any) => {
      this.touchStart = event.touches[0].clientY;
    });
    window.addEventListener("touchmove", (event: any) => {
      let currentTouch = event.touches[0].clientY;
      if (currentTouch < this.touchStart) {
        //screen touch up
        this.swipeDirection = "up";
      }
      if (currentTouch > this.touchStart) {
        //screen touch down
        this.swipeDirection = "down";
      }
    });


    window.addEventListener("touchend", () => {
      if (this.swipeDirection == "down") {
        this.step(-1);
      } else if (this.swipeDirection == "up") {
        this.step(1);
      }
    });
  }

  startScreen() {
    this.firstText = 'translate3d(0px, 0%, 0px)';
    this.secondText = 'translate3d(0px, -145%, 0px)';
    this.thirdText = 'translate3d(0px, -145%, 0px)';
    this.fourthText = 'translate3d(0px, -145%, 0px)';

    this.defaultImgPosition = 'translate3d(0px, -600px, 0px)';

    this.layer.default_length = 'translate(' + -30 + '%)';
    this.layer.default_length1 = 'translate(' + 0 + '%)';
    this.layer.default_length2 = 'translate(' + 0 + '%)';
    this.layer.default_length3 = 'translate(' + 0 + '%)';
    this.layer.runout = 'translateY(' + 0 + '%)';

  }

  firstWheelEvent() {
    this.z_active = 0;
    this.z_inactive = 9;
    this.z_inactive2 = 0;
    this.z_inactive3 = -1;
    this.firstText = 'translate3d(0px, -145%, 0px)';
    this.secondText = 'translate3d(0px, 0%, 0px)';
    this.thirdText = 'translate3d(0px, -145%, 0px)';
    this.fourthText = 'translate3d(0px, -145%, 0px)';
    this.defaultImgPosition = 'translate3d(0px, -600px, 0px)';
    this.layer.scrollSpan();
    this.layer.translateScrollhintBar();

  }
  secondWheelEvent() {
    this.z_active = 0;
    this.z_inactive = 0;
    this.z_inactive2 = 9;
    this.z_inactive3 = -1;
    this.firstText = 'translate3d(0px, -145%, 0px)';
    this.secondText = 'translate3d(0px, -145%, 0px)';
    this.thirdText = 'translate3d(0px, 0%, 0px)';
    this.fourthText = 'translate3d(0px, -145%, 0px)';
    this.defaultImgPosition = 'translate3d(0px, 0px, 0px)';
    this.layer.translateScrollhintBar2();

  }
  thirdWheelEvent() {
    this.z_active = 0;
    this.z_inactive = 0;
    this.z_inactive2 = 0;
    this.z_inactive3 = 9;
    this.firstText = 'translate3d(0px, -145%, 0px)';
    this.secondText = 'translate3d(0px, -145%, 0px)';
    this.thirdText = 'translate3d(0px, -145%, 0px)';
    this.fourthText = 'translate3d(0px, 0%, 0px)';
    this.defaultImgPosition = 'translate3d(0px, -600px, 0px)';
    this.layer.translateScrollhintBar3();
  }


}
