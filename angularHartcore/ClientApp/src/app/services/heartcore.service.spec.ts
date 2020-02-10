import { TestBed, inject } from '@angular/core/testing';

import { HeartcoreService } from './heartcore.service';

describe('HeartcoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeartcoreService]
    });
  });

  it('should be created', inject([HeartcoreService], (service: HeartcoreService) => {
    expect(service).toBeTruthy();
  }));
});
