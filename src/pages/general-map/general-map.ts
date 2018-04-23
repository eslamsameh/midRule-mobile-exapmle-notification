import { Component ,ViewChild,ElementRef} from "@angular/core";
import {MapService}from '../map/MapService'
import{NavController,NavParams}from 'ionic-angular'
import {OnInit} from '@angular/core';
declare var google:any;

@Component({
selector:'location-comp',
templateUrl:'general-map.html'
})
export class location implements OnInit{
@ViewChild('map')mapRef:ElementRef
public map:any
public lat:any=0;
public lng:any=0;
public Map:any;
constructor(public DS:MapService,public NavCtrl:NavController,public NavPrm:NavParams ) {

}
ngOnInit()
{
  this.DisplayMap();

}

DisplayMap(){
  this.DS.FileMap().subscribe((resp)=>{
   let data=resp.json();
    this.lat=data.lateitute;
    this.lng=data.langitute;
    debugger
    const location = new google.maps.LatLng(parseInt(this.lat) ,parseInt( this.lng));;

      const option={
        center:location,
        zoom:ionic ,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map=new google.maps.Map(this.mapRef.nativeElement,option)
      this.addMarker(location,this.map);
  })

}
addMarker(position,map){
return new google.maps.Marker({position,map})
}
}
