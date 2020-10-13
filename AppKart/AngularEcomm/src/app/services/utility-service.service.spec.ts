import { TestBed } from '@angular/core/testing';

import { UtilityServiceService } from './utility-service.service';

describe('UtilityServiceService', () => {
  let service: UtilityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
