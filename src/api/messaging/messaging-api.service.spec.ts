import { TestBed } from '@angular/core/testing';

import { MessaginApigService } from './messaging-api.service';

describe('MessagingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessaginApigService = TestBed.get(MessaginApigService);
    expect(service).toBeTruthy();
  });
});
