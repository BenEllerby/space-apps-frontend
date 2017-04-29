import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PlainMapComponent } from './plain-map/plain-map.component';
import { DeforestationMapComponent } from './deforestation-map/deforestation-map.component';
import { RainfallMapComponent } from './rainfall-map/rainfall-map.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    PlainMapComponent,
    DeforestationMapComponent,
    RainfallMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4CY_D2ih25haOs7HiSj_i6vVBtIUQf_Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
