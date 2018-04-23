import { Injectable } from "@angular/core";
import {Http,RequestOptions,Headers}from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {
constructor( public http:Http){
}
FileService(){
  return this.http.get('http://demo8859870.mockable.io/FileJsonService');
}
}
