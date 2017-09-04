import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HomeExploreComponent } from './home-explore/home-explore.component';
import { MainSearchFormComponent } from './main-search-form/main-search-form.component';
import { TravelSpotServiceService } from './travel-spot-service.service';
import { MainTravelSpotComponent } from './main-travel-spot/main-travel-spot.component';
import { CreateTravelSpotComponent } from './create-travel-spot/create-travel-spot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeExploreComponent,
    MainSearchFormComponent,
    MainTravelSpotComponent,
    CreateTravelSpotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
	NgbModule.forRoot()
  ],
  providers: [TravelSpotServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
