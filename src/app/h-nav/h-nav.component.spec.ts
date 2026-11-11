import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HNavComponent } from './h-nav.component';
import { AppModule } from '../app.module';

describe('HNavComponent', () => {
  let component: HNavComponent;
  let fixture: ComponentFixture<HNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
