import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent {

  constructor(private dialogRef: MatDialogRef<EditFlightComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
