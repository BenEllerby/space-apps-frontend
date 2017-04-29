import { Component, OnInit } from '@angular/core';
import { MarkerInfoService } from './marker-info.service';

@Component({
  selector: 'app-plain-map',
  templateUrl: './plain-map.component.html',
  styleUrls: ['./plain-map.component.css']
})
export class PlainMapComponent implements OnInit {


  constructor(private markerinfoService: MarkerInfoService) { }

  ngOnInit() {
    let mockResponse = this.markerinfoService.getData();
    let resolvedData = Promise.resolve(mockResponse);
    resolvedData.then((data: any) => {
      let lat = data[0].latitude;
      let lng = data[0].longitude;
      let markertext = data[0].markerPicURL;
    });

    
  }
}
