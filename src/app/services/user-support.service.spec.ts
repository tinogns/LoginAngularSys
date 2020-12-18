import { TestBed } from '@angular/core/testing';

import { UserSupport1Service } from './user-support.service';

describe('UserSupport1Service', () => {
  let service: UserSupport1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSupport1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
