import { Component, OnInit } from '@angular/core';
import { MarkerInfoService } from './marker-info.service';

@Component({
  selector: 'app-plain-map',
  templateUrl: './plain-map.component.html',
  styleUrls: ['./plain-map.component.css']
})
export class PlainMapComponent implements OnInit {

  mockResponse = JSON.parse(this.markerinfoService.getData());
  lat: number = this.mockResponse.markers[1].lat;
  lng: number = this.mockResponse.markers[1].lng;

  constructor(private markerinfoService: MarkerInfoService) { }

  ngOnInit() {
    console.log(this.mockResponse.markers);
  }
}
