import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBarComponent } from './scroll-bar.component';
import { AppModule } from '../app.module';

describe('ScrollBarComponent', () => {
  let component: ScrollBarComponent;
  let fixture: ComponentFixture<ScrollBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
