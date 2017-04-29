import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarkerInfoService {
  apiUrl: string;

  constructor(private http: Http) {

  };

  getData(){
    this.apiUrl = "https://space-apps-backend.eu-gb.mybluemix.net/api/sightings";

    let headers = new Headers({'Content-Type': 'text/plain; charset=utf8',
                                    'Accept': 'text/plain'});
    // let params: URLSearchParams = new URLSearchParams();
    let options = new RequestOptions({headers: headers});
    
    return this.http.get(this.apiUrl, options)
            .toPromise()
            .catch(this.handleError);    
    
    /*
    let latOne = 51.678418;
    let lngOne = 7.809007;
    let imgFileOne = "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-0/p206x206/10848050_737672746307094_697615436590075052_n.jpg?oh=7fe578fd3978a304c54bb963bbeb1ed6&oe=598DDE0D";

    let latTwo = 49.601230;
    let lngTwo = 7.889768;
    let imgFileTwo = "https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/13923533_10211103070119443_841608996210537017_o.jpg?oh=017609c38bb63a63929f80b0962b6669&oe=597F60E7";

    let myObj = { "markers": [
      { "lat": latOne, "lng": lngOne, "markerPicURL": imgFileOne },
      { "lat": latTwo, "lng": lngTwo, "markerPicURL": imgFileTwo }
    ]};

    let jsonObj = JSON.stringify(myObj);
    
    return jsonObj;*/
}

  handleError(error: any): Promise<any> {
    console.error('An error has occured!', error);
    return Promise.reject(error.message || error);
  }
}
