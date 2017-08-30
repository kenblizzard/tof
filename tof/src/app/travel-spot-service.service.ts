import { Injectable } from '@angular/core';
import { TravelSpot } from './travel-spot';

@Injectable()
export class TravelSpotServiceService {

  constructor( ) { }
  
  listTravelSpot : Array<TravelSpot> = [{
  	id: 1, name: "Mt. Ulap", description: "A “mini-Mt. Ugo” which showcases the best of what the Cordilleras has to offer: Pine and grassland ridges with stunning views of the mountains, and even a glimpse of culture with villages, burial caves, and hanging bridges, the Mt. Ulap Eco-Trail in Itogon, Benguet is the perfect dayhike from Baguio City, only 40 minutes away from Burnham Park by public jeepney. Spanning around 8 kilometres through several peaks along the Ampucao-Sta. Fe Ridge (not to be confused with the Philex Ridge), it is easy enough to be completed from 4-6 hours, making it feasible as a dayhike or even a half-dayhike for hikers of all levels.\n\nThe trailhead starts along from the road to Philex in Brgy. Ampucao, but as of December 2015, hikers have to make a 10-minute detour to the barangay hall to register and secure guides (required). The trail goes up a ridgeline that is immediately surrounded by pines, and soon becomes scenic with views of Mt. Sto. Tomas and Baguio City; the perennially mist-covered Central Cordilleras from Ugo to Pulag; and to the south, even Mt. Arayat.\nA number of peaks and points of attraction are traversed via this relaxing trail: from the grassland slopes of Ambunao Paoay to Gungal Rock, and then to the highest point, Mt. Ulap (officially 1846m but 1856m according to our measurements). The descent from Mt. Ulap to Pong-ol Burial Caves is akin to the descent from Mt. Ugo summit to Tinongdan, with its steep, pine-forested terrain. The Burial Caves themselves are a nice attraction, and at Sta. Fe there are hanging bridge and cemented footpath that complete the experience.", displayImg: "http://3c9bl93o71m619w9kn2rfwinkdh.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/Gungal-Rock-Mt-Ulap-Benguet.jpg"
  	} as TravelSpot ,{
  	id: 2, name: "Mt. Pulag", description: "sample", displayImg: "http://www.trailadventours.com/images/0644de6c228aeed128ecc4cfcfb90e62.jpg"
  	} as TravelSpot , {
  	id: 3, name: "Mt. Mayon", description: "sample", displayImg: "http://www.trailadventours.com/images/0644de6c228aeed128ecc4cfcfb90e62.jpg"
  	} as TravelSpot ,
	{
  	id: 4, name: "Mt. sample lang", description: "sample", displayImg: "http://www.trailadventours.com/images/0644de6c228aeed128ecc4cfcfb90e62.jpg"
  	} as TravelSpot ,
	{
  	id: 5, name: "Mt. my testing", description: "sample", displayImg: "http://www.trailadventours.com/images/0644de6c228aeed128ecc4cfcfb90e62.jpg"
  	} as TravelSpot ,
	{
  	id: 6, name: "Mt. Sample", description: "sample", displayImg: "http://www.trailadventours.com/images/0644de6c228aeed128ecc4cfcfb90e62.jpg"
  	} as TravelSpot ,
	{
  	id: 7, name: "Mt. Test", description: "sample", displayImg: "http://www.trailadventours.com/images/0644de6c228aeed128ecc4cfcfb90e62.jpg"
  	} as TravelSpot ];
  
  getTravelSpots() : Promise<TravelSpot [] >
  {
  	return Promise.resolve(this.listTravelSpot);
  }
  
  getTravelSpotById(id:number) : Promise<TravelSpot> {
  return this.getTravelSpots()
             .then(listTravelSpot => listTravelSpot.find(travelSpot => travelSpot.id === id));
  }

}
