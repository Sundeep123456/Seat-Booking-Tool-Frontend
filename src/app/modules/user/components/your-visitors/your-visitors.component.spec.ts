import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourVisitorsComponent } from './your-visitors.component';

describe('YourVisitorsComponent', () => {
  let component: YourVisitorsComponent;
  let fixture: ComponentFixture<YourVisitorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourVisitorsComponent]
    });
    fixture = TestBed.createComponent(YourVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
