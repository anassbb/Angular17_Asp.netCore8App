import { TestBed } from '@angular/core/testing';

import { BookFeatureService } from './book-feature.service';

describe('BookFeatureService', () => {
  let service: BookFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
