import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreelancejobComponent } from './add-freelancejob.component';

describe('AddFreelancejobComponent', () => {
  let component: AddFreelancejobComponent;
  let fixture: ComponentFixture<AddFreelancejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFreelancejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFreelancejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
