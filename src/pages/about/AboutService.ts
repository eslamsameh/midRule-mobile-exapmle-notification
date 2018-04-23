import { Injectable } from "@angular/core";
import {Http,RequestOptions,Headers}from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {
constructor( public http:Http){
}
FileAbout(){
    return this.http.get('http://demo8859870.mockable.io/FileJsonAbout');
  }
}
