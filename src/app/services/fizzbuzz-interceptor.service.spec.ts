import { TestBed } from '@angular/core/testing';

import { FizzbuzzInterceptorService } from './fizzbuzz-interceptor.service';

describe('FizzbuzzInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FizzbuzzInterceptorService = TestBed.get(FizzbuzzInterceptorService);
    expect(service).toBeTruthy();
  });
});
