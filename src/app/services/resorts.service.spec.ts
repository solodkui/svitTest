import { TestBed } from '@angular/core/testing';

import { ResortsService } from './resorts.service';

describe('ResortsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResortsService = TestBed.get(ResortsService);
    expect(service).toBeTruthy();
  });
});
