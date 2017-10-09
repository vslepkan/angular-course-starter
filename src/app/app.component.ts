import { Component, OnInit } from '@angular/core';
import { hotels } from './core/data/hotels';
import { Hotel } from './core/models/Hotel';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public hotels$: Observable<Hotel[]>;
  public currentHotel: Hotel;

  public constructor() {
    this.hotels$ = hotels;
  }

  public ngOnInit(): void {
    this.hotels$.subscribe((hotelsArray: Hotel[]) => {
      this.currentHotel = hotelsArray[0];
    });
  }

  public selectHotel(hotel: Hotel): void {
    this.currentHotel = hotel;
  }
}
