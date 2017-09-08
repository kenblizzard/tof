import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguiMapModule } from '@ngui/map';



import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HomeExploreComponent } from './home-explore/home-explore.component';
import { MainSearchFormComponent } from './main-search-form/main-search-form.component';
import { TravelSpotService } from './services/travel-spot.service';
import { MainTravelSpotComponent } from './main-travel-spot/main-travel-spot.component';
import { CreateTravelSpotComponent } from './create-travel-spot/create-travel-spot.component';
import { CreateTravelSpotPart2Component } from './create-travel-spot-part2/create-travel-spot-part2.component';
import { UserService } from './services/user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeExploreComponent,
    MainSearchFormComponent,
    MainTravelSpotComponent,
    CreateTravelSpotComponent,
    CreateTravelSpotPart2Component,
    UserProfileComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
	NgbModule.forRoot(),
	NguiMapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?libraries=visualization,places,drawing&key=AIzaSyCEL1Q8kq-plzlZnji7l_kqefH_b1bnDWE'
    })
  ],
  providers: [TravelSpotService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
