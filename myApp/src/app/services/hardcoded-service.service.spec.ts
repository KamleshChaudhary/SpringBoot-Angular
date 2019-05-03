import { TestBed } from '@angular/core/testing';

import { HardcodedServiceService } from './hardcoded-service.service';

describe('HardcodedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedServiceService = TestBed.get(HardcodedServiceService);
    expect(service).toBeTruthy();
  });
});
