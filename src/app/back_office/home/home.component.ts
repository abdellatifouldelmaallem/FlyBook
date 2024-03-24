import { Component } from '@angular/core';
import { Flight } from '../common/interface/flightProp';
import { Flights } from '../common/data/flight';
import { MatDialog } from '@angular/material/dialog';
import {FlightFormComponent} from '../flight/flight-form/flight-form.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) {}

  flights: Flight[] = Flights;

  openDialog(): void {
    const dialogRef = this.dialog.open(FlightFormComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
