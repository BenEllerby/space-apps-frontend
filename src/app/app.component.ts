import { Component, Output } from '@angular/core';
import { GoogleMapsService } from './google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() animals = [{name: 'grey squirrel'}, {name: 'fox'}];
  //@Output() location = {lat: 53.6693533, lng: -1.3089677}
  @Output() lat = 53.6693533;
  @Output() lng = -1.3089677;
  constructor(private googleMapsService: GoogleMapsService){};

  handleSearchEvent(event) {
  	// call service
  	console.log('Event has been emitted... app.component.ts');
    let locationPromise = this.googleMapsService.getPos(event);
    let location = Promise.resolve(locationPromise);
    location.then((data: any) => {
        console.log("Outputting location data");
        console.log(data);
        this.lat = data.lat;
        this.lng = data.lng;
        // How to get this into plain-map.component?
    });
  }
}
