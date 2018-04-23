import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
  OnDestroy
} from "@angular/core";
import {
  NavController,
  NavParams,
  MenuController,
  LoadingController
} from "ionic-angular";
import { MapService } from "./MapService";
import { BackgroundGeolocation } from "@ionic-native/background-geolocation";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import {
  GoogleMap,
  GoogleMaps,
  CameraPosition,
  LatLng,
  GoogleMapsEvent,
  Marker,
  MarkerOptions
} from "@ionic-native/google-maps";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import { Platform } from "ionic-angular";
import { Subject } from "rxjs/Subject";
import { OfferService } from "../offers/OfferService";
import { forwardRef } from "@angular/core/src/di/forward_ref";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { BackgroundMode } from '@ionic-native/background-mode';


declare var google: any;
declare var cordova:any
@Component({
  selector: "map-comp",
  templateUrl: "map.html"
})
export class MapPage {
  Map: any;
  @ViewChild("map") mapRef: ElementRef;
  public map: any;
  public companyid: any;
  public lat: any = 0;
  public lng: any = 0;
  public ArrayOfLocations: any = [];
  public selfmarker: any;
  public dist: any;
  Toggeldata:any;
  public locationObserver: Subject<locationObject> = new Subject<
    locationObject
  >();
  public watch: any;
  public currentLocationObject = {
    lat: 0,
    lng: 0
  };

  public marker: any;
  public speed: any;
  public checkedValue: any = false;
  notifications: any = [];
  a:any=[];
  markerStores:any;
  isToggled:any=false;
  constructor(
    public navCtrl: NavController,
    public NavParam: NavParams,
    public ds: MapService,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public googlemap: GoogleMaps,
    platform: Platform,
    public zone: NgZone,
    public backgroundGeolocation: BackgroundGeolocation,
    public geolocation: Geolocation,
    public dsOffer: OfferService,
    public localNotifications: LocalNotifications,
    public backgroundMode : BackgroundMode

  ) {
    this.locationObserver.subscribe(value => {
      if (this.marker) {
        this.marker.setMap(null);
      }

      const location = new google.maps.LatLng(value.lat, value.lng);


      this.marker = this.addMarker(location, this.map,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png');


      if (this.lat === 0 && this.lng === 0) {
        // awl mara
        this.lat = value.lat;
        this.lng = value.lng;
        this.OfferDistance();
      } else {
       // this.lat shayl el lat ely 2abl kda .. enma value.lat hya el kema ely msubscribe 3leha y3ny gdeda
        let latToFixed = this.trimNumbers(this.lat);
        let lngToFixed = this.trimNumbers(this.lng);

        let newLatToFixed = this.trimNumbers(value.lat);
        let newLngToFixed = this.trimNumbers(value.lng);

        if (latToFixed === newLatToFixed && lngToFixed === newLngToFixed) {
          for (let index = 0; index < this.a.length; index++) {
            const location = new google.maps.LatLng(this.a[index].Location.lat, this.a[index].Location.lng);
            this.markerStores = this.addMarker(location, this.map,'http://maps.google.com/mapfiles/ms/icons/red-dot.png');


          }

        } else {
          this.OfferDistance();
        }

      }

      this.backgroundMode.enable();
      this.backgroundMode.on("activate").subscribe(()=>{




        this.backgroundMode.disableWebViewOptimizations()
if(this.Toggeldata==true){
  this.backgroundGeolocation.finish();
  this.watch.unsubscribe();
}
else{
  if (this.lat === 0 && this.lng === 0) {
    // awl mara
    this.lat = value.lat;
    this.lng = value.lng;
    this.OfferDistance();
  } else {
   // this.lat shayl el lat ely 2abl kda .. enma value.lat hya el kema ely msubscribe 3leha y3ny gdeda
    let latToFixed = this.trimNumbers(this.lat);
    let lngToFixed = this.trimNumbers(this.lng);

    let newLatToFixed = this.trimNumbers(value.lat);
    let newLngToFixed = this.trimNumbers(value.lng);

    if (latToFixed === newLatToFixed && lngToFixed === newLngToFixed) {


    } else {
      this.OfferDistance();

    }
  }
}


      });
    });



        }

  trimNumbers(currentNumber) {
    var trimmedNumber = currentNumber.toString();
    trimmedNumber = trimmedNumber.slice(0, trimmedNumber.indexOf(".") + 4);
    return parseFloat(trimmedNumber);
  }

  ngOnInit() {


    this.DisplayMap();
    this.startTracking();
  }

  DisplayMap() {
    this.geolocation.getCurrentPosition().then(position => {
      const location = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );

      const option = {
        center: location,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapRef.nativeElement, option);

      this.marker = this.addMarker(location, this.map,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    });
  }

  addMarker(position, map,icon) {
    return new google.maps.Marker({ position, map, icon });
  }



  startTracking() {


    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 2000
    };

    this.backgroundGeolocation.configure(config).subscribe(
      location => {
        console.log(
          "BackgroundGeolocation:  " +
            location.latitude +
            "," +
            location.longitude
        );

        // Run update inside of Angular's zone
        this.zone.run(() => {
          this.currentLocationObject.lat = location.latitude;
          this.currentLocationObject.lng = location.longitude;
        });
      },
      err => {
        console.log(err);
      }
    );

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();

    // Foreground Tracking

    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation
      .watchPosition(options)
      .filter((p: any) => p.code === undefined)
      .subscribe((position: Geoposition) => {
        console.log(position);

        // Run update inside of Angular's zone
        this.zone.run(() => {
          this.currentLocationObject.lat = position.coords.latitude;
          this.currentLocationObject.lng = position.coords.longitude;
          this.locationObserver.next(this.currentLocationObject);

          console.log(this.marker);
        });
      });
  }
  OfferDistance() {
    this.dsOffer.FileOffer().subscribe(resp => {
      let data = resp.json().stores;
      var a = [];
      var o = [];
      let arrayOfData = [];
      let id = [];
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          // a.push({key: key, val: dict[key]});
          for (let index = 0; index < data[key].OfferData.length; index++) {
           this.a.push(data[key].OfferData[index]);
          }
        }
      }
      for (let index = 0; index < this.a.length; index++) {

        this.distance( this.lat,this.lng, this.a[index].Location.lat,this.a[index].Location.lng, "K" );
        id.push(this.a[index].id.length);
        let size = id.length.toString();

        console.log(size);
        let notification = {
          id: this.a[index].id,
          title: " 1  More Offer Near of You",
         text:this.a[index].Title

        };
debugger;



        if (this.dist <= 1) {


          this.notifications.push(notification);
          console.clear();
          console.log(this.notifications);
        }
      }

      this.localNotifications.schedule(this.notifications);
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
  addmarkerstores(position,map,icon){
    return new google.maps.Marker({ position, map, icon});

  }
  notify(event){
    this.Toggeldata= event.checked

    }

    }



class locationObject {
  public lat: number = 0;
  public lng: number = 0;
}
