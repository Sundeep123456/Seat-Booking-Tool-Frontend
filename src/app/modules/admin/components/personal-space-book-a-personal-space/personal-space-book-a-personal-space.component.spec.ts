import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSpaceBookAPersonalSpaceComponent } from './personal-space-book-a-personal-space.component';

describe('PersonalSpaceBookAPersonalSpaceComponent', () => {
  let component: PersonalSpaceBookAPersonalSpaceComponent;
  let fixture: ComponentFixture<PersonalSpaceBookAPersonalSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalSpaceBookAPersonalSpaceComponent]
    });
    fixture = TestBed.createComponent(PersonalSpaceBookAPersonalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
