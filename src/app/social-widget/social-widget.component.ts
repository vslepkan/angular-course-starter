import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-widget',
  templateUrl: './social-widget.component.html',
  styleUrls: ['./social-widget.component.css']
})
export class SocialWidgetComponent {
  @Input()
  public currentHotel: Hotel;
}
