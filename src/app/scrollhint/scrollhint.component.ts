import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LayerChangeService } from '../services/layer-change.service';

@Component({
    selector: 'app-scrollhint',
    templateUrl: './scrollhint.component.html',
    styleUrls: ['./scrollhint.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ScrollhintComponent implements OnInit {


  constructor(public layer: LayerChangeService) { }

  ngOnInit(): void {
   
  }
}
