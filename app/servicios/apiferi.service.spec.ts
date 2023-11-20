import { TestBed } from '@angular/core/testing';

import { ApiferiService } from './apiferi.service';

describe('ApiferiService', () => {
  let service: ApiferiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiferiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
