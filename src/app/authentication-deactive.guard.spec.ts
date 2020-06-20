import { TestBed } from '@angular/core/testing';

import { AuthenticationDeactiveGuard } from './authentication-deactive.guard';

describe('AuthenticationDeactiveGuard', () => {
  let guard: AuthenticationDeactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationDeactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
