import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent {

  constructor(public dialogRef: MatDialogRef<FlightFormComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
