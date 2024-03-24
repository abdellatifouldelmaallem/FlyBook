import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation.delete',
  templateUrl: './confirmation.delete.component.html',
  styleUrls: ['./confirmation.delete.component.css']
})
export class ConfirmationDeleteComponent {

  constructor(private dialogRef: MatDialogRef<ConfirmationDeleteComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onDelete(): void {
    this.dialogRef.close(true);
  }

}
