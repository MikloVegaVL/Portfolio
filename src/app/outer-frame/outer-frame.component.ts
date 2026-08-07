import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-outer-frame',
    templateUrl: './outer-frame.component.html',
    styleUrls: ['./outer-frame.component.scss'],
    standalone: false
})
export class OuterFrameComponent implements OnInit {

  darkMode = false;
  defaultColor = '#585858';
  accentColor = '#FF5722';
  spanColor = '#585858';
  o_inactiv = '0';
  z_inactive = '0';
  

  constructor() { }

  ngOnInit(): void {
  }
  

  overlayMenu() {
    document.getElementById('m-m-overlay')?.classList.add('active');
    this.darkMode = true;
    this.spanColor = 'white';
    this.o_inactiv = '1';
    this.z_inactive = '12';
  }
  
  closeMenu(){
    document.getElementById('m-m-overlay')?.classList.remove('active');
    this.darkMode = false;
    this.spanColor = '#585858';
    this.o_inactiv = '0';
    this.z_inactive = '0';
  }

}
