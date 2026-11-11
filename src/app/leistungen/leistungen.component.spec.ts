import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeistungenComponent } from './leistungen.component';
import { AppModule } from '../app.module';

describe('LeistungenComponent', () => {
  let component: LeistungenComponent;
  let fixture: ComponentFixture<LeistungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ AppModule ] }).compileComponents();
    fixture = TestBed.createComponent(LeistungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
