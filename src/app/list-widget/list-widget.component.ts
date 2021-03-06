import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent {
  @Input()
  public hotels: Hotel[];

  @Input()
  public currentHotel: Hotel;

  @Output()
  public selectHotel: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  public types: String[];
  public currentType: string;

  public constructor(
  ) {
    this.types = [ 'Maestro', 'Visa', 'JCB', 'Maestro' ];
  }

  public sendHotel (hotel: Hotel): void {
    this.selectHotel.emit(hotel);
  }

  public handleChangeType(type: string): void {
    this.currentType = type;
  }
}
