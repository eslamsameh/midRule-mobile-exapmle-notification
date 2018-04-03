import { Component ,OnInit,ViewChild,ElementRef} from '@angular/core';
import { NavController,NavParams,MenuController } from 'ionic-angular';
import {JsonService}from '../JsonService/JsonService'
declare var google:any;

@Component({
  selector: 'map-comp',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map')mapRef:ElementRef
  public map:any
  public companyid:any;
  public lat:any;
  public lng:any;
  constructor(public navCtrl: NavController, public NavParam:NavParams,public ds:JsonService,
    public menuCtrl: MenuController) {

  }
  ngOnInit()
  {

    this.DisplayMap();

  }
  DisplayMap(){

    this.ds.FileMap().subscribe((resp)=>{

     let data=resp.json().data;
      this.lat=data.lateitute;
      this.lng=data.langitute;
      console.log(this.lat);
      const location=new google.maps.LatLng(parseInt(this.lat) ,parseInt( this.lng));

        const option={
          center:location,
          zoom:10,
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



