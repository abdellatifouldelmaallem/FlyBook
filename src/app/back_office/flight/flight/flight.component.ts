import { Component , OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  ngOnInit(): void {
    this.lineChart()
  }

  chratOptions:any;
  Highcharts: typeof Highcharts = Highcharts;

  chratData = [
    {
      name: 'Air arabie',
      data: [2.4, 10.09, 5.6, 8.2, 12.5, 6.3, 9.8, 4.1, 7.5, 11.2]
    },
    {
      name: 'RAM',
      data: [3.2, 8.5, 6.7, 9.3, 11.1, 5.9, 7.2, 10.4, 8.6, 12.9]
    },
    {
      name: 'Rayanair',
      data: [1.8, 7.6, 4.9, 6.3, 10.7, 3.5, 9.1, 5.2, 8.9, 12.4]
    },
    {
      name: 'FlySky',
      data: [2.1, 9.3, 5.4, 7.8, 11.9, 4.6, 8.3, 6.1, 9.7, 11.5]
    },
    {
      name: 'Air France',
      data: [2.8, 7.9, 4.2, 6.7, 10.3, 5.1, 8.7, 3.9, 7.4, 11.3]
    }
  ];
  
  lineChart(){
    this.chratOptions = {
      chart: {
        type: "spline"
     },
     title: {
      text: "Monthly Average Flights"
      },
      subtitle: {
          text: "Source: WorldFlight.com"
      },
      xAxis:{
          categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {          
          title:{
            text:"Destination"
          } 
      },
      tooltip: {
          valueSuffix:" "
      },
      series:this.chratData,
    }
  }

}
