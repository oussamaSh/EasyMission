import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancejobDetailsComponent } from './freelancejob-details.component';

describe('FreelancejobDetailsComponent', () => {
  let component: FreelancejobDetailsComponent;
  let fixture: ComponentFixture<FreelancejobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancejobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancejobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
