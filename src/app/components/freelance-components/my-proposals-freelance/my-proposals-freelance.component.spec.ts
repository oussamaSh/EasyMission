import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProposalsFreelanceComponent } from './my-proposals-freelance.component';

describe('MyProposalsFreelanceComponent', () => {
  let component: MyProposalsFreelanceComponent;
  let fixture: ComponentFixture<MyProposalsFreelanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProposalsFreelanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProposalsFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
