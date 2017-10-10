import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { SocialWidgetComponent } from './social-widget/social-widget.component';
import { ListWidgetComponent } from './list-widget/list-widget.component';
import { FilterTypePipe } from './common/pipes/filter-type.pipe';
import { HotelsService } from './common/services/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    SocialWidgetComponent,
    ListWidgetComponent,
    FilterTypePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HotelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
