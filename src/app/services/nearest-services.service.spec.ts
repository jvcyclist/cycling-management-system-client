import { TestBed } from '@angular/core/testing';

import { NearestServicesService } from './nearest-services.service';

describe('NearestServicesService', () => {
  let service: NearestServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearestServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
