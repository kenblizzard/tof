import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TravelSpot }				from '../models/travel-spot';
import { TravelSpotService } from '../services/travel-spot.service';


@Component({
  selector: 'app-main-search-form',
  templateUrl: './main-search-form.component.html',
  styleUrls: ['./main-search-form.component.css']
})
export class MainSearchFormComponent implements OnInit {
	searchString : string;
	travelSpots : TravelSpot[];	

	setTravelSpots() : void {
		this.TravelSpotService.getTravelSpots().then(travelSpots => this.travelSpots = travelSpots);
	}

	constructor(private TravelSpotService: TravelSpotService, 
		private route: ActivatedRoute,
		private location: Location) { }

	ngOnInit() {
		this.setTravelSpots();
		this.route.params.subscribe(params => { this.searchString = params['searchString'] });
	}

}
