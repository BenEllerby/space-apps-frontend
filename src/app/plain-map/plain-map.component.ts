import { Component, OnInit } from '@angular/core';
import { MarkerInfoService } from './marker-info.service';

@Component({
  selector: 'app-plain-map',
  templateUrl: './plain-map.component.html',
  styleUrls: ['./plain-map.component.css']
})
export class PlainMapComponent implements OnInit {
  jsonData: any;

  constructor(private markerinfoService: MarkerInfoService) { }

  ngOnInit() {
    let mockResponse = this.markerinfoService.getData();
    let resolvedData = Promise.resolve(mockResponse);
    resolvedData.then((data: any) => {
      console.log(data);
      this.jsonData = JSON.parse(data._body);
      console.log(this.jsonData);      
    });
  }
}
