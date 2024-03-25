import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './back_office/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FlightFormComponent } from './back_office/flight/flight-form/flight-form.component';
import { ProfileComponent } from './back_office/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add_flight', component: FlightFormComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: 'dashboard', component:  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
