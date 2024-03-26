import { Component } from '@angular/core';
import { User } from '../common/interface/userProp';
import { Users } from '../common/data/users';
import { ConfirmationDeleteComponent } from '../shared/confirmation.delete/confirmation.delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(public dialog: MatDialog) {}

  Users: User[] = Users;

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

}
