import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFreelanceJobComponent } from './manage-freelance-job.component';

describe('ManageFreelanceJobComponent', () => {
  let component: ManageFreelanceJobComponent;
  let fixture: ComponentFixture<ManageFreelanceJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFreelanceJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFreelanceJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
