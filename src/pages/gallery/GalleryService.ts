import { Injectable } from "@angular/core";
import {Http,RequestOptions,Headers}from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService {
constructor( public http:Http){
}
FileGallery(){
 // return this.http.get('assets/jsonFile/JsonFileGallery.json');
  return this.http.get('http://demo8859870.mockable.io/jsonFileGallery');
}
}
