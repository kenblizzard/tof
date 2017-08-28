import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeExploreComponent} from './home-explore/home-explore.component';
import { MainSearchFormComponent} from './main-search-form/main-search-form.component';

export const router: Routes = [
    { path: '', redirectTo: 'explore', pathMatch: 'full' },
    { path: 'explore', component: HomeExploreComponent },
    { path: 'search/:param', component: MainSearchFormComponent} 
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);