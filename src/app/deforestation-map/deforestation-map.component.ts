import { Component, OnInit } from '@angular/core';
import { MarkerInfoService } from '../plain-map/marker-info.service';

@Component({
  selector: 'app-deforestation-map',
  templateUrl: './deforestation-map.component.html',
  styleUrls: ['./deforestation-map.component.css']
})
export class DeforestationMapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  markertext: any = this.markerinfoService.getData();

  constructor(private markerinfoService: MarkerInfoService) { }

  ngOnInit() {

  }

}
