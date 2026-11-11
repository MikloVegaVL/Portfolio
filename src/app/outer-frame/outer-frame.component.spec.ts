import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterFrameComponent } from './outer-frame.component';
import { AppModule } from '../app.module';

describe('OuterFrameComponent', () => {
  let component: OuterFrameComponent;
  let fixture: ComponentFixture<OuterFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
