import { TestBed, inject } from '@angular/core/testing';

import { FreelanceService } from './freelance.service';

describe('FreelanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreelanceService]
    });
  });

  it('should be created', inject([FreelanceService], (service: FreelanceService) => {
    expect(service).toBeTruthy();
  }));
});
