import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plain-map',
  templateUrl: './plain-map.component.html',
  styleUrls: ['./plain-map.component.css']
})

export class PlainMapComponent implements OnInit {
  @Input() jsonData: any;
  @Input() lat: number;
  @Input() lng: number;
  //@Input() location;

  constructor() { }

  ngOnInit() {}
}
