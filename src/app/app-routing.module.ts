import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './back_office/status/status.component';
import { RouterModule, Routes } from '@angular/router';
import { FlightFormComponent } from './back_office/flight/flight-form/flight-form.component';
import { ProfileComponent } from './back_office/profile/profile.component';
import { UsersComponent } from './back_office/users/users.component';
import { TicketComponent } from './back_office/ticket/ticket.component';
import { FlightComponent } from './back_office/flight/flight/flight.component';

const routes: Routes = [
  { path: '', redirectTo: 'status', pathMatch: 'full' },
  { path: 'status', component: StatusComponent },
  { path: 'add_flight', component: FlightFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: 'tickets', component: TicketComponent },
  { path: 'flights', component: FlightComponent },
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
