import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HotelsService } from './common/services/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public hotels$: Observable<Hotel[]>;
  public currentHotel: Hotel;

  public constructor(
    private hotelsService: HotelsService
  ) {
    this.hotels$ = this.hotelsService.getHotels();
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
