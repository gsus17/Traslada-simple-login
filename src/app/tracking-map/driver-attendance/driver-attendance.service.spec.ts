import { TestBed } from '@angular/core/testing';

import { DriverAttendanceService } from './driver-attendance.service';

describe('DriverAttendanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverAttendanceService = TestBed.get(DriverAttendanceService);
    expect(service).toBeTruthy();
  });
});
