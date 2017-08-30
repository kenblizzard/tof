import { Component, OnInit, Input } from '@angular/core';
import { TravelSpotServiceService } from '../travel-spot-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TravelSpot } from '../travel-spot';

@Component({
  selector: 'app-main-travel-spot',
  templateUrl: './main-travel-spot.component.html',
  styleUrls: ['./main-travel-spot.component.css']
})
export class MainTravelSpotComponent implements OnInit {
	currentJustify = "fill";
	
	currentTravelSpot : TravelSpot;

  constructor(private TravelSpotServiceService: TravelSpotServiceService,
	private route: ActivatedRoute,
	private location: Location
  ) { }

  ngOnInit()  {
	  this.route.paramMap
    .switchMap((params: ParamMap) => this.TravelSpotServiceService.getTravelSpotById(+params.get('id')))
    .subscribe(currentTravelSpot => this.currentTravelSpot = currentTravelSpot);
  }

}
