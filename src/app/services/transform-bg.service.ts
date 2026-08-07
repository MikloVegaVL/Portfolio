import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformBGService {

  valueBg = 'translate(' + -30 + '%)';

  constructor() {}

  startBg() {
    this.valueBg = 'translate(' + -30 + '%)';
  }

  switchBgToZero() {
    this.valueBg = 'translate(' + -100 + '%)';
  }

  switchBgToFull() {
    this.valueBg = 'translate(' + 0 + '%)';
  }

}




