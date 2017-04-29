import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plain-map',
  templateUrl: './plain-map.component.html',
  styleUrls: ['./plain-map.component.css']
})
export class PlainMapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }
}
