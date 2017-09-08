import { TestBed, inject } from '@angular/core/testing';

import { TravelSpotService } from './travel-spot-service.service';

describe('TravelSpotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelSpotService]
    });
  });

  it('should be created', inject([TravelSpotService], (service: TravelSpotService) => {
    expect(service).toBeTruthy();
  }));
});
