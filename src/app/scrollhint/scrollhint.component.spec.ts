import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollhintComponent } from './scrollhint.component';
import { AppModule } from '../app.module';

describe('ScrollhintComponent', () => {
  let component: ScrollhintComponent;
  let fixture: ComponentFixture<ScrollhintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollhintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
