import { Component, Output } from '@angular/core';
import { GoogleMapsService } from './google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() animals = [{name: 'grey squirrel'}, {name: 'fox'}];

  constructor(private googleMapsService: GoogleMapsService){};

  handleSearchEvent(event) {
  	// call service
  	console.log('Event has been emitted... app.component.ts');
    let locationPromise = this.googleMapsService.getPos(event);
    let location = Promise.resolve(locationPromise);
    location.then((data: any) => {
        console.log("Outputting location data");
        console.log(data);

        // How to get this into plain-map.component?
    });
  }
}
