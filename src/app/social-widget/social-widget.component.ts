import { Component, Input } from '@angular/core';
import { Hotel } from '../core/models/Hotel';

@Component({
  selector: 'app-social-widget',
  templateUrl: './social-widget.component.html',
  styleUrls: ['./social-widget.component.css']
})
export class SocialWidgetComponent {
  @Input() public currentHotel: Hotel;
}
