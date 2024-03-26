import { Component } from '@angular/core';
import { Ticket } from '../common/interface/ticketProp';
import { Tickets } from '../common/data/tickets';
import { ConfirmationDeleteComponent } from '../shared/confirmation.delete/confirmation.delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  constructor(public dialog: MatDialog) {}

  Tickets: Ticket[] = Tickets;

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
