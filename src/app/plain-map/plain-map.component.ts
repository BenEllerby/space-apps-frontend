import { Component, Input, OnInit } from '@angular/core';
import { MarkerInfoService } from './marker-info.service';
import { GoogleMapsService } from '../google-maps.service';

@Component({
  selector: 'app-plain-map',
  templateUrl: './plain-map.component.html',
  styleUrls: ['./plain-map.component.css']
})

export class PlainMapComponent implements OnInit {
  jsonData: any;
  @Input() lat: number;
  @Input() lng: number;
  //@Input() location;

  constructor(private markerinfoService: MarkerInfoService, private googlemapsService: GoogleMapsService) { }

  ngOnInit() {
    let mockResponse = this.markerinfoService.getData();
    let resolvedData = Promise.resolve(mockResponse);
    resolvedData.then((data: any) => {
      this.jsonData = JSON.parse(data._body);
    });
  }

  locationSearch() {

  }
}
