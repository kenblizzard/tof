import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeExploreComponent} from './home-explore/home-explore.component';

export const router: Routes = [
    { path: '', redirectTo: 'explore', pathMatch: 'full' },
    { path: 'explore', component: HomeExploreComponent }   
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);