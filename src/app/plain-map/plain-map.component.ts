import { Component, OnInit } from '@angular/core';
import { MarkerInfoService } from './marker-info.service';

@Component({
  selector: 'app-plain-map',
  templateUrl: './plain-map.component.html',
  styleUrls: ['./plain-map.component.css']
})
export class PlainMapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  markertext: string = this.markerinfoService.getData();

  constructor(private markerinfoService: MarkerInfoService) { }

  ngOnInit() {
  }
}
