import { TestBed } from '@angular/core/testing';

import { TrackingMapService } from './tracking-map.service';

describe('TrackingMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackingMapService = TestBed.get(TrackingMapService);
    expect(service).toBeTruthy();
  });
});
