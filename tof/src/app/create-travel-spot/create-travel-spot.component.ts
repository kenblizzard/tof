import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { TravelSpotServiceService } from '../travel-spot-service.service';


@Component({
  selector: 'app-create-travel-spot',
  templateUrl: './create-travel-spot.component.html',
  styleUrls: ['./create-travel-spot.component.css']
})
export class CreateTravelSpotComponent implements OnInit {

  autocomplete: google.maps.places.Autocomplete;
  address: any = {};
  constructor( private ref: ChangeDetectorRef ) { }

  ngOnInit() {
  }
  
  initialized(autocomplete: any) {
    this.autocomplete = autocomplete;
  }
  
  placeChanged() {
	this.address = {};
    let place = this.autocomplete.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      this.address[addressType] = place.address_components[i].long_name;
    }
    this.ref.detectChanges();
  }

}
