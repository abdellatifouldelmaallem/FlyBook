import { Component } from '@angular/core';
import { Flight } from '../common/interface/flightProp';
import { Flights } from '../common/data/flights';
import { MatDialog } from '@angular/material/dialog';
import {FlightFormComponent} from '../flight/flight-form/flight-form.component';
import { ConfirmationDeleteComponent } from '../shared/confirmation.delete/confirmation.delete.component';
import { EditFlightComponent } from '../flight/Form/edit-flight/edit-flight.component';


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
      console.log('Dialog closed with result:', result);
    });
  }

  dalete(){
    const dialogRef = this.dialog.open(ConfirmationDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Item deleted');
      } else {
        console.log('Deletion canceled');
      }
    });

  }

  edit(){
    const dialogRef = this.dialog.open(EditFlightComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
