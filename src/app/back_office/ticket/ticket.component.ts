import { Component } from '@angular/core';
import { Ticket } from '../common/interface/ticketProp';
import { Tickets } from '../common/data/tickets';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  Tickets: Ticket[] = Tickets;

}
