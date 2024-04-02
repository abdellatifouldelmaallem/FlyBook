import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './back_office/sidenav/sidenav.component';
import { HeaderComponent } from './back_office/header/header.component';
import { ProfileComponent } from './back_office/profile/profile.component';
import { UsersComponent } from './back_office/users/users.component';
import { StatusComponent } from './back_office/status/status.component';
import { AppRoutingModule } from './app-routing.module';
import { FlightComponent } from './back_office/flight/flight/flight.component';
import { AddFlightComponent } from './back_office/flight/Form/add-flight/add-flight.component';
import { ConfirmationDeleteComponent } from './back_office/shared/confirmation.delete/confirmation.delete.component';
import { EditFlightComponent } from './back_office/flight/Form/edit-flight/edit-flight.component';
import { StatisticsComponent } from './back_office/shared/statistics/statistics.component';
import { TicketComponent } from './back_office/ticket/ticket.component';
import { CitiesComponent } from './front_office/cities/cities.component';
import { FooterComponent } from './front_office/footer/footer.component';
import { HomeComponent } from './front_office/home/home.component';
import { SearchFlightComponent } from './front_office/search-flight/search-flight.component';
import { SignInComponent } from './front_office/sign-in/sign-in.component';
import { SignUpComponent } from './front_office/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    ProfileComponent,
    UsersComponent,
    StatusComponent,
    FlightComponent,
    AddFlightComponent,
    ConfirmationDeleteComponent,
    EditFlightComponent,
    StatisticsComponent,
    TicketComponent,
    CitiesComponent,
    FooterComponent,
    HomeComponent,
    SearchFlightComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
