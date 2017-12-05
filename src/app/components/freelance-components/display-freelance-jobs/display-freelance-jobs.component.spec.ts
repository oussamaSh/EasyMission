import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFreelanceJobsComponent } from './display-freelance-jobs.component';

describe('DisplayFreelanceJobsComponent', () => {
  let component: DisplayFreelanceJobsComponent;
  let fixture: ComponentFixture<DisplayFreelanceJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFreelanceJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFreelanceJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
