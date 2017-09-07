import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TravelSpot }				from '../travel-spot';
import { TravelSpotServiceService } from '../travel-spot-service.service';


@Component({
  selector: 'app-main-search-form',
  templateUrl: './main-search-form.component.html',
  styleUrls: ['./main-search-form.component.css']
})
export class MainSearchFormComponent implements OnInit {
	searchString : string;
	travelSpots : TravelSpot[];	

	setTravelSpots() : void {
		this.travelSpotServiceService.getTravelSpots().then(travelSpots => this.travelSpots = travelSpots);
	}

	constructor(private travelSpotServiceService: TravelSpotServiceService, 
		private route: ActivatedRoute,
		private location: Location) { }

	ngOnInit() {
		this.setTravelSpots();
		this.route.params.subscribe(params => { this.searchString = params['searchString'] });
	}

}
