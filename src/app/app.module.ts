import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { SocialWidgetComponent } from './social-widget/social-widget.component';
import { ListWidgetComponent } from './list-widget/list-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    SocialWidgetComponent,
    ListWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
