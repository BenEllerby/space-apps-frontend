import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarkerInfoService {
  apiUrl: string;

  constructor(private http: Http) {

  };

  getData(){
    this.apiUrl = "https://space-apps-backend.eu-gb.mybluemix.net/api/markerinfo";

    let headers = new Headers({'Content-Type': 'text/plain; charset=utf8',
                                    'Accept': 'text/plain'});
    // let params: URLSearchParams = new URLSearchParams();
    let options = new RequestOptions({headers: headers});
    /*
    return this.http.get(this.apiUrl, options)
            .toPromise()
            .catch(this.handleError);    
    */
    let imgFile = "James was in the service this time";
    return imgFile;
}

  handleError(error: any): Promise<any> {
    console.error('An error has occured!', error);
    return Promise.reject(error.message || error);
  }
}
