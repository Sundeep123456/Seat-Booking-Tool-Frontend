import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSpaceHomeComponent } from './personal-space-home.component';

describe('PersonalSpaceHomeComponent', () => {
  let component: PersonalSpaceHomeComponent;
  let fixture: ComponentFixture<PersonalSpaceHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalSpaceHomeComponent]
    });
    fixture = TestBed.createComponent(PersonalSpaceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
