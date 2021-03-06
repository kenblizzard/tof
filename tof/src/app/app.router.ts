import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeExploreComponent} from './home-explore/home-explore.component';
import { MainSearchFormComponent} from './main-search-form/main-search-form.component';
import { MainTravelSpotComponent} from './main-travel-spot/main-travel-spot.component';
import { CreateTravelSpotComponent } from './create-travel-spot/create-travel-spot.component';
import { CreateTravelSpotPart2Component } from './create-travel-spot-part2/create-travel-spot-part2.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';

export const router: Routes = [
    { path: '', redirectTo: 'explore', pathMatch: 'full' },
    { path: 'explore', component: HomeExploreComponent },
    { path: 'search/:searchString', component: MainSearchFormComponent},
    { path: 'spot/create', component: CreateTravelSpotComponent},
	{ path: 'spot/create/:id/2', component: CreateTravelSpotPart2Component},
	{ path: 'spot/:id', component: MainTravelSpotComponent},
	{ path: 'users/:userName', component: UserProfileComponent},
	{ path: 'login', component: UserLoginComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);