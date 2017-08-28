import { TestBed, inject } from '@angular/core/testing';

import { TravelSpotServiceService } from './travel-spot-service.service';

describe('TravelSpotServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelSpotServiceService]
    });
  });

  it('should be created', inject([TravelSpotServiceService], (service: TravelSpotServiceService) => {
    expect(service).toBeTruthy();
  }));
});
