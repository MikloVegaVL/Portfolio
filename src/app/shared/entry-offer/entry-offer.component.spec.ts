import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryOfferComponent } from './entry-offer.component';
import { AppModule } from '../../app.module';

describe('EntryOfferComponent', () => {
  let component: EntryOfferComponent;
  let fixture: ComponentFixture<EntryOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(EntryOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('rejects an invalid request', () => {
    component.url = '';
    component.email = '';
    component.consent = false;
    expect(component.canSubmit()).toBeFalse();
  });

  it('accepts a valid request', () => {
    component.url = 'https://example.com';
    component.email = 'client@example.com';
    component.consent = true;
    expect(component.canSubmit()).toBeTrue();
  });

  it('sets an error state on invalid submit', () => {
    component.submit();
    expect(component.state).toBe('error');
  });
});
