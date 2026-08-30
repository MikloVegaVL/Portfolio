import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
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

export class MainComponent implements OnInit, OnDestroy {


  // Cursor follower
  @ViewChild('cursor')
  cursor!: ElementRef;
  @ViewChild('cursor2')
  cursor2!: ElementRef;

  private readonly onMouseMove = (e: MouseEvent) => {
    this.cursor.nativeElement.style.cssText = this.cursor2.nativeElement.style.cssText =
      'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
  };

  ngAfterViewInit(): void {
    document.addEventListener('mousemove', this.onMouseMove);
  }

  //End cursor follower



  constructor(public transformBg: TransformBGService, public layer: LayerChangeService, public translate: TransitionBgService) { }

  // Hero-image reveal: a grid of small tiles covers the image like a
  // wall, then each tile falls away with a staggered delay so the wall
  // reads as crumbling into cubes that rain down and disappear.
  readonly heroCubeCols = 8;
  readonly heroCubeRows = 6;
  readonly heroCubeTiles = Array.from({ length: this.heroCubeCols * this.heroCubeRows }, (_, i) => {
    const row = Math.floor(i / this.heroCubeCols);
    const col = i % this.heroCubeCols;
    return { delay: row * 60 + col * 25 };
  });

  counter = 0;
  touchStart: any;
  swipeDirection: any; //var for touch direction mobile

  // Longest CSS transition driven by a step (the curtain animation, 1.2s).
  // Steps are locked out until it finishes so a new input can never cut an
  // in-flight transition short - that interruption is what caused the
  // "shaking"/jump-cut feeling.
  private readonly stepLockMs = 1200;
  private isStepping = false;

  // Single source of truth for advancing/reversing one section, shared by
  // wheel, touch and keyboard input so all three behave identically.
  private step(direction: 1 | -1): void {
    if (this.isStepping) {
      return; //ignore input until the current transition has fully settled
    }
    this.isStepping = true;
    window.setTimeout(() => { this.isStepping = false; }, this.stepLockMs);

    this.counter += direction;

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
  }

  // Stored as bound instance methods (not inline in ngOnInit) so the exact
  // same function reference can be removed in ngOnDestroy - otherwise these
  // stay attached to `window` forever after routing away from this page,
  // and this wheel handler in particular unconditionally preventDefaults
  // every wheel event, silently killing native scroll on every other page
  // for the rest of the session.
  private readonly onWheel = (event: WheelEvent) => {
    // Stop the browser's own scroll/elastic-overscroll bounce - it runs
    // outside our control and fights the custom transition, which is what
    // reads as a "shake" layered on top of it.
    event.preventDefault();

    if (Math.abs(event.deltaY) < 2) {
      return; //ignore residual trackpad-momentum noise
    }
    this.step(event.deltaY < 0 ? -1 : 1); //up : down
  };

  private readonly onTouchStart = (event: TouchEvent) => {
    this.touchStart = event.touches[0].clientY;
  };

  private readonly onTouchMove = (event: TouchEvent) => {
    const currentTouch = event.touches[0].clientY;
    if (currentTouch < this.touchStart) {
      //screen touch up
      this.swipeDirection = "up";
    }
    if (currentTouch > this.touchStart) {
      //screen touch down
      this.swipeDirection = "down";
    }
  };

  private readonly onTouchEnd = () => {
    if (this.swipeDirection == "down") {
      this.step(-1);
    } else if (this.swipeDirection == "up") {
      this.step(1);
    }
  };

  //keyboard arrow events for Desktop (mirrors wheel behaviour)
  private readonly onKeydown = (event: KeyboardEvent) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
      return;
    }
    event.preventDefault();
    this.step(event.key === "ArrowUp" ? -1 : 1);
  };

  ngOnInit(): void {
    //scroll events for Desktop
    window.addEventListener("wheel", this.onWheel, { passive: false });

    //touch events for mobile use
    window.addEventListener("touchstart", this.onTouchStart);
    window.addEventListener("touchmove", this.onTouchMove);
    window.addEventListener("touchend", this.onTouchEnd);

    window.addEventListener("keydown", this.onKeydown);
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener("wheel", this.onWheel);
    window.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchEnd);
    window.removeEventListener("keydown", this.onKeydown);
  }
}

