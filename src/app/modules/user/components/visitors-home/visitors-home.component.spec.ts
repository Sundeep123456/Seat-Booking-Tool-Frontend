import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsHomeComponent } from './visitors-home.component';

describe('VisitorsHomeComponent', () => {
  let component: VisitorsHomeComponent;
  let fixture: ComponentFixture<VisitorsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorsHomeComponent]
    });
    fixture = TestBed.createComponent(VisitorsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
