import { Component } from '@angular/core';
import { Flight } from '../common/interface/flightProp';
import { Flights } from '../common/data/flights';
import { MatDialog } from '@angular/material/dialog';
import { AddFlightComponent } from '../flight/Form/add-flight/add-flight.component';
import { ConfirmationDeleteComponent } from '../shared/confirmation.delete/confirmation.delete.component';
import { EditFlightComponent } from '../flight/Form/edit-flight/edit-flight.component';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  constructor(public dialog: MatDialog) {}

  flights: Flight[] = Flights;

  openDialog(): void {
    const dialogRef = this.dialog.open(AddFlightComponent, {
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
