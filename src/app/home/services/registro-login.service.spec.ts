import { TestBed } from '@angular/core/testing';

import { RegistroLoginService } from './registrar.service';

describe('RegistroLoginService', () => {
  let service: RegistroLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
