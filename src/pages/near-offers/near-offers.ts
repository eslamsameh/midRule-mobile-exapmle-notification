import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import {OfferService} from '../offers/OfferService'
import {MapToIterable} from '../offers/OfferPipe'
import {MapPage} from '../map/map'
declare var google: any;


/**
 * Generated class for the NearOffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-near-offers',
  templateUrl: 'near-offers.html',
})
export class NearOffersPage {
  lat:any=0;
  lng:any=0;
  dist:any;
a:any=[];
items:any=[];
offerHeader:any;
offer:any;
offerContent:any;
daysOffer:any;
dataImage:any;
ColorData:any;
OfferTitle:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation:Geolocation,public ds:OfferService
  ) {
  }

  ionViewDidLoad() {
  this.DisplayMap();


}
  DisplayMap() {
    this.geolocation.getCurrentPosition().then(position => {
      const location = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude

      );

      this.lat= position.coords.latitude;
      this.lng=position.coords.longitude;
      this.RenderView();

    });
  }
  distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      this.dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }

    return dist;
  }
RenderView(){
  this.ds.FileOffer().subscribe(resp => {
    let dataa = resp.json().stores;
    var a = [];
    var o = [];
    let arrayOfData = [];
    let id = [];
    for (var key in dataa) {
      if (dataa.hasOwnProperty(key)) {
        // a.push({key: key, val: dict[key]});
        for (let index = 0; index <  dataa[key].OfferData.length; index++) {

         this.a.push(dataa[key].OfferData[index]);
         o.push({key: key, val: dataa[key].OfferData[index]});

        }
      }
    }
    let data=resp.json();
    debugger;
    this.offerHeader=data.data.offerHeader;
    this.offerContent=data.data.offerContent;
    this.offer=data.data.offer;
    this.daysOffer=data.data.daysOffer;





    this.dataImage=data.data.dataImage;
    this.ColorData=data.data.ColorData;
    this.OfferTitle=data.data.OfferTitle;
    for (let index = 0; index < this.a.length; index++) {
debugger;
      this.distance( this.lat,this.lng, this.a[index].Location.lat,this.a[index].Location.lng, "K" );


      id.push(this.a[index].id.length);
      let size = id.length.toString();
if(this.dist <= 1){
  this.items.push(o[index]);
}

  }
})
}
OnPressLocation(){
  this.navCtrl.push(MapPage)
}
}
