import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GoogleMapsService {

  constructor(private http: Http) {};

  getPos(event: any){
    console.log("I'm in the maps service");
    console.log(event);
    
    let apiUrl = "https://maps.googleapis.com/maps/api/geocode/json";
    /*let headers = new Headers({'Content-Type': 'application/json; charset=utf8',
                                    'Accept': 'application/json'});*/
    let params: URLSearchParams = new URLSearchParams();
    params.set('address', event);
    params.set('key', 'AIzaSyB4CY_D2ih25haOs7HiSj_i6vVBtIUQf_Y');

    let options = new RequestOptions({/*headers: headers,*/ search: params});

    return this.http.get(apiUrl, options)
              .toPromise()
              .then(function(newbody: any) {
                console.log("Google Location Request");
                let temp = JSON.parse(newbody._body);
                console.log(temp);
                let location = temp.results[0].geometry.location;
                console.log(location);
                return location;
              })
              .catch(this.handleError);
  };


  handleError(error: any): Promise<any> {
      console.error('An error has occured!', error);
      return Promise.reject(error.message || error);
  };
}
