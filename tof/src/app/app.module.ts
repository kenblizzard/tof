import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HomeExploreComponent } from './home-explore/home-explore.component';
import { MainSearchFormComponent } from './main-search-form/main-search-form.component';
import { TravelSpotServiceService } from './travel-spot-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeExploreComponent,
    MainSearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [TravelSpotServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
