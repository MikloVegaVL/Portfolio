import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MethodologyComponent } from './methodology.component';
import { AppModule } from '../app.module';

describe('MethodologyComponent', () => {
  let component: MethodologyComponent;
  let fixture: ComponentFixture<MethodologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ AppModule ] }).compileComponents();
    fixture = TestBed.createComponent(MethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
