import { Component, OnInit, Input } from '@angular/core';
import { TravelSpot } from '../travel-spot';
import { TravelSpotServiceService } from '../travel-spot-service.service';

@Component({
  selector: 'app-main-search-form',
  templateUrl: './main-search-form.component.html',
  styleUrls: ['./main-search-form.component.css']
})
export class MainSearchFormComponent implements OnInit {
	travelSpots : TravelSpot[];

	setTravelSpots() : void {
	this.travelSpots = this.travelSpotServiceService.getTravelSpots();
	}

  constructor(private travelSpotServiceService: TravelSpotServiceService) { }

  ngOnInit() {
  this.setTravelSpots();
  }

}
