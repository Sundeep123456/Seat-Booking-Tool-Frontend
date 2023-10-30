import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSpaceYourBookingsComponent } from './personal-space-your-bookings.component';

describe('PersonalSpaceYourBookingsComponent', () => {
  let component: PersonalSpaceYourBookingsComponent;
  let fixture: ComponentFixture<PersonalSpaceYourBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalSpaceYourBookingsComponent]
    });
    fixture = TestBed.createComponent(PersonalSpaceYourBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
