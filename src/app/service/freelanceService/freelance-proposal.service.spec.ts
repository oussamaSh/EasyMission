import { TestBed, inject } from '@angular/core/testing';

import { FreelanceProposalService } from './freelance-proposal.service';

describe('FreelanceProposalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreelanceProposalService]
    });
  });

  it('should be created', inject([FreelanceProposalService], (service: FreelanceProposalService) => {
    expect(service).toBeTruthy();
  }));
});
