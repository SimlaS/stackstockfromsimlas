import { TestBed } from '@angular/core/testing';

import { MipapiService } from './mipapi.service';

describe('MipapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MipapiService = TestBed.get(MipapiService);
    expect(service).toBeTruthy();
  });
});
