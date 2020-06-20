import { TestBed } from '@angular/core/testing';

import { ChildAuthenticationLoadGuard } from './child-authentication-load.guard';

describe('ChildAuthenticationLoadGuard', () => {
  let guard: ChildAuthenticationLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildAuthenticationLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
