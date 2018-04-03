import { Injectable } from "@angular/core";
import {Http,RequestOptions,Headers}from '@angular/http'


@Injectable()
export class JsonService {
constructor( public http:Http){

}
FileContact(){
  return this.http.get("../../assets/jsonFile/JsonFilContact.json");
}

FileAbout(){
  return this.http.get('../../assets/jsonFile/JsonFileAbout.json');
}
FileMain(){
  return this.http.get ('../../assets/jsonFile/JsonFileMain.json');
}
FilePortfolio(){
  return this.http.get ('../../assets/jsonFile/JsonPortfolio.json');

}
FileMap(){
  return this.http.get('../../assets/jsonFile/JsonFileMap.json');

}
FileService(){
  return this.http.get('../../assets/jsonFile/JsonFileService.json');
}
}
