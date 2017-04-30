import { Component, OnInit } from '@angular/core';
import { MarkerInfoService } from './marker-info.service';
import { GoogleMapsService } from '../google-maps.service';

@Component({
  selector: 'app-plain-map',
  templateUrl: './plain-map.component.html',
  styleUrls: ['./plain-map.component.css']
})

export class PlainMapComponent implements OnInit {
  jsonData: any;
  lat: number = 53.6693533;
  lng: number = -1.3089677;

  constructor(private markerinfoService: MarkerInfoService, private googlemapsService: GoogleMapsService) { }

  ngOnInit() {
    let mockResponse = this.markerinfoService.getData();
    let resolvedData = Promise.resolve(mockResponse);
    resolvedData.then((data: any) => {
      this.jsonData = JSON.parse(data._body);
    });
  }

  locationSearch() {}
}
