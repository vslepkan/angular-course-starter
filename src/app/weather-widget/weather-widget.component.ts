import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../core/models/Hotel';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  @Input() public currentHotel: Hotel;

  public ngOnInit(): void {
  }

}
