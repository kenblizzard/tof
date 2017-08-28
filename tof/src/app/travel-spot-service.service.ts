import { Injectable } from '@angular/core';
import { TravelSpot } from './travel-spot';

@Injectable()
export class TravelSpotServiceService {

  constructor( ) { }
  
  getTravelSpots() : TravelSpot [] 
  {
  	let listTravelSpot : Array<TravelSpot> = [{
  	id: 1, name: "Mt. Ulap", description: "sample"
  	},{
  	id: 2, name: "Mt. Pulag", description: "sample"
  	}, {
  	id: 3, name: "Mt. Mayon", description: "sample"
  	}];
  	return listTravelSpot;
  }

}
