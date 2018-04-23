import { Injectable } from "@angular/core";
import {Http,RequestOptions,Headers}from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
constructor( public http:Http){
}
FileMain(){
  return this.http.get ('http://demo8859870.mockable.io/FileJsonMain');
}
}
