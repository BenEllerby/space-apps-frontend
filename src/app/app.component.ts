import { Component, Output, OnInit } from '@angular/core';
import { MarkerInfoService } from './plain-map/marker-info.service';
import { GoogleMapsService } from './google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() animals = [{name: 'bear'}, {name: 'squirrel'}, {name: 'fox'}];
  @Output() lat = 53.6693533;
  @Output() lng = -1.3089677;
  @Output() jsonData;
  allData: any;
  selected: string[] = ['bear', 'squirrel', 'fox'];

  constructor(private googleMapsService: GoogleMapsService, private markerinfoService: MarkerInfoService){};

  ngOnInit() {
    let mockResponse = this.markerinfoService.getData();
    let resolvedData = Promise.resolve(mockResponse);
    resolvedData.then((data: any) => {
      this.allData = JSON.parse(data._body);
      this.jsonData = this.allData;
    });
  }

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
    });
  }

  handleFilterEvent(event) {
    console.log("Hit handleFilterEvent");
    console.log(this.allData);

    let eventIndex = this.selected.indexOf(event);
    if (eventIndex === -1) {
      this.selected.push(event);
    } else {
      this.selected.splice(eventIndex, 1);
    }

    if (this.selected.length === 0) {
      this.jsonData = [];
    } else {
      this.jsonData = [];
      for(var i = 0; i < this.allData.length; i++) {
        console.log(this.allData[i]);
        if(this.selected.indexOf(this.allData[i].name) > -1) {
          this.jsonData.push(this.allData[i]);
        }
      }
    }
  }
}
