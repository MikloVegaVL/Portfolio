import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LayerChangeService } from '../services/layer-change.service';

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SectionsComponent implements OnInit {


  constructor(public layer: LayerChangeService) { }

  ngOnInit(): void {
    
  }
  

}
