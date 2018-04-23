import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Injectable, NgZone } from "@angular/core";
import { BackgroundGeolocation } from "@ionic-native/background-geolocation";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import "rxjs/add/operator/filter";
@Injectable()
export class MapService {
  public watch: any;
  public currentLocationObject = {
    lat: 0,
    lng: 0
  };

  public marker: any = [];
  public speed: any;
  constructor(
    public http: Http,
    public zone: NgZone,
    public backgroundGeolocation: BackgroundGeolocation,
    public geolocation: Geolocation
  ) {}
  FileMap() {
    return this.http.get("http://demo8859870.mockable.io/FileJsonMap");
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

          console.log(this.marker);
          debugger;
        });
      });
  }

  stopTracking() {
    console.log("stopTracking");

    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }
}
