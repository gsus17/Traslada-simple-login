import { TestBed } from '@angular/core/testing';

import { DriverApiService } from './driver.service';

describe('DriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverApiService = TestBed.get(DriverApiService);
    expect(service).toBeTruthy();
  });
});
