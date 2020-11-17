import { TestBed, inject } from '@angular/core/testing';

import { HttpInterceperBasicAuthService } from './http-interceper-basic-auth.service';

describe('HttpInterceperBasicAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceperBasicAuthService]
    });
  });

  it('should be created', inject([HttpInterceperBasicAuthService], (service: HttpInterceperBasicAuthService) => {
    expect(service).toBeTruthy();
  }));
});
