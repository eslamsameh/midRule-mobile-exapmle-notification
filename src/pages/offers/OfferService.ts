import { Injectable } from "@angular/core";
import {Http,RequestOptions,Headers}from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class OfferService {
constructor( public http:Http){
}
FileOffer(){
  return this.http.get('http://demo8859870.mockable.io/FileJsonOffer');
}
}
