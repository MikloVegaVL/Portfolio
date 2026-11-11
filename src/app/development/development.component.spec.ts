import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevelopmentComponent } from './development.component';
import { AppModule } from '../app.module';

describe('DevelopmentComponent', () => {
  let component: DevelopmentComponent;
  let fixture: ComponentFixture<DevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ AppModule ] }).compileComponents();
    fixture = TestBed.createComponent(DevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('lists all projects and skill groups', () => {
    expect(component.projects.length).toBe(8);
    expect(component.skillGroups.length).toBe(6);
  });
});
