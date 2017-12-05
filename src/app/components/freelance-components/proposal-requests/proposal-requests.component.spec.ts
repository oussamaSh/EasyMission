import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalRequestsComponent } from './proposal-requests.component';

describe('ProposalRequestsComponent', () => {
  let component: ProposalRequestsComponent;
  let fixture: ComponentFixture<ProposalRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
