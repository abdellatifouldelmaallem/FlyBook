import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './back_office/status/status.component';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './back_office/flight/Form/add-flight/add-flight.component';
import { ProfileComponent } from './back_office/profile/profile.component';
import { UsersComponent } from './back_office/users/users.component';
import { TicketComponent } from './back_office/ticket/ticket.component';
import { FlightComponent } from './back_office/flight/flight/flight.component';

const routes: Routes = [
  { path: '', redirectTo: 'status', pathMatch: 'full' },
  { path: 'status', component: StatusComponent },
  { path: 'add_flight', component: AddFlightComponent },
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
