import { Routes } from '@angular/router';
import { OffersComponent } from './offers/offers.component';

export const routes: Routes = [
    { path: '', redirectTo: 'offers', pathMatch: 'full' },
    { path: 'offers', component: OffersComponent },
    { path: 'offers/:id', component: OffersComponent }
];

