import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeExploreComponent} from './home-explore/home-explore.component';
import { MainSearchFormComponent} from './main-search-form/main-search-form.component';
import { MainTravelSpotComponent} from './main-travel-spot/main-travel-spot.component';

export const router: Routes = [
    { path: '', redirectTo: 'explore', pathMatch: 'full' },
    { path: 'explore', component: HomeExploreComponent },
    { path: 'search/:param', component: MainSearchFormComponent},
	{ path: 'spot/:id', component: MainTravelSpotComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);