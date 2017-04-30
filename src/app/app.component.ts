import { Component, Output, OnInit } from '@angular/core';
import { MarkerInfoService } from './plain-map/marker-info.service';
import { GoogleMapsService } from './google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() animals = [{name: 'Bear'}, {name: 'Dog'}, {name: 'fox'}];
  @Output() lat = 53.6693533;
  @Output() lng = -1.3089677;
  @Output() jsonData;
  allData: any;

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
    if (event === "all"){
      this.jsonData = this.allData;
    } else {
      this.jsonData = [];
      var j = 0;
      console.log(this.allData);
      for(var i = 0; i < this.allData.length; i++) {
        if(this.allData[i].name === event) {
          this.jsonData.push(this.allData[i]);
        }
      }
    }
  }
}
