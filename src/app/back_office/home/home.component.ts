import { Component } from '@angular/core';
import { Flight } from '../common/interface/flightProp';
import { Flights } from '../common/data/flight';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  flights: Flight[] = Flights;

}
