import { Component, EventEmitter, Input, Output } from '@angular/core';
import 'rxjs/add/operator/take';
import { Hotel } from '../core/models/Hotel';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent {
  @Input() public hotels: Hotel[];
  @Input() public currentHotel: Hotel;

  @Output() public selectHotel: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  public sendHotel (hotel: Hotel): void {
    this.selectHotel.emit(hotel);
  }
}
