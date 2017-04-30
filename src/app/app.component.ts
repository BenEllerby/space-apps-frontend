import { Component, Output, OnInit } from '@angular/core';
import { MarkerInfoService } from './plain-map/marker-info.service';
import { GoogleMapsService } from './google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() animals = [];
  @Output() lat = 53.6693533;
  @Output() lng = -1.3089677;
  @Output() jsonData;
  allData: any;
  selected: string[] = [];

  constructor(private googleMapsService: GoogleMapsService, private markerinfoService: MarkerInfoService){};

  ngOnInit() {
    let mockResponse = this.markerinfoService.getData();
    let resolvedData = Promise.resolve(mockResponse);
    resolvedData.then((data: any) => {
      this.allData = JSON.parse(data._body);
      this.jsonData = this.allData;
      for(var i = 0; i < this.jsonData.length; i++){
        //if(this.animals.indexOf(this.jsonData[i].name) === -1){
          var containsFlag = false;
          for(var j = 0; j < this.animals.length; j++){
            if(this.jsonData[i].name === this.animals[j].name)
              containsFlag = true;
          }
          if (!containsFlag) {
            let jsonObj = {name: this.jsonData[i].name};
            this.animals.push(jsonObj);
          }
      }

      for(var i = 0; i < this.animals.length; i++){
        this.selected.push(this.animals[i].name);
      }
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
        if(this.selected.indexOf(this.allData[i].name) > -1) {
          this.jsonData.push(this.allData[i]);
        }
      }
    }
  }
}
