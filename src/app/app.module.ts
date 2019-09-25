import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { SomeOtherPageComponent } from './some-other-page/some-other-page.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, LeafletMapComponent, SomeOtherPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
