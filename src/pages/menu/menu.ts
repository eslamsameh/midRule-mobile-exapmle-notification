import { Component, ViewChild, OnInit ,NgZone} from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Nav,
  ViewController,
  MenuController,
  LoadingController,
  AlertController,
  ToastController
} from "ionic-angular";
import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { PortfolioPage } from "../portfolio/portfolio";
import { ServicesPage } from "../services/services";
import { MainPage } from "../main/main";
import { MainService } from "../main/MainService";
import { MenuService } from "./MenuService";
import { MapPage } from "../map/map";

import { SendMessagePage } from "../send-message/send-message";
import { GalleryPage } from "../gallery/gallery";
import { OffersPage } from "../offers/offers";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Platform } from "ionic-angular";
import { Network } from "@ionic-native/network";
import { Events } from "ionic-angular";
import { OfferService } from "../offers/OfferService";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { MapService } from "../map/MapService";
import "rxjs/add/operator/filter";
import { Observable } from "rxjs/Observable";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { BackgroundGeolocation } from "@ionic-native/background-geolocation";
import { Subject } from "rxjs/Subject";
import {NearOffersPage} from '../near-offers/near-offers'
@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  rootPage = "MainPage";

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  Location: any;
  Telephone: any;
  Email: any;
  pageIndex: any;
  pages: any;
  colorIconAndOutCard: any;
  iconLocation: any;
  iconTelephone: any;
  iconEmail: any;
  SendMessageIcon: any;
  SendMessageButton: any;
  status: any;
  newOffers: any;
  visable: boolean = false;
  notifications: any = [];
  lat: any;
  lng: any;
  dist:any;
  watch:any;
  a:any=[];



  constructor(
    public navCtrl: NavController,
    public ds: MenuService,
    public dsMain: MainService,
    private viewCtrl: ViewController,
    public menuCtrl: MenuController,
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
    public network: Network,
    public alertCtrl: AlertController,
    public platform: Platform,
    private toastCtrl: ToastController,
    public dsOffers: OfferService,
    public localNotifications: LocalNotifications,
    public dsmap: MapService,
    public backgroundGeolocation:BackgroundGeolocation,
    public zone:NgZone,
    public geolocation:Geolocation
  ) {
    platform.ready().then(() => {

      this.localNotifications.on('click').subscribe((resp)=>{
        this.navCtrl.push(OffersPage);
      })
      })


  }


  ionViewDidEnter() {
    this.splashScreen.hide();
  }
  openPage(page) {
    let params = {};
    this.pageIndex = page.index;
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
      this.nav.push(page.pageName, params);
    }
  }

  isActive(page) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (
        childNav.getSelected() &&
        childNav.getSelected().root === page.tabComponent
      ) {
        return "primary";
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return "primary";
    }
    return;
  }
  ngOnInit() {

    this.dsMain.FileMain().subscribe(resp => {
      let data = resp.json();
      this.Location = data.Location;
      this.Telephone = data.Telephone;
      this.Email = data.Email;
      this.SendMessageButton = data.SendMessageButton;
      this.SendMessageIcon = data.SendMessageIcon;
      this.iconEmail = data.iconEmail;
      this.iconLocation = data.iconLocation;
      this.iconTelephone = data.iconTelephone;
      this.colorIconAndOutCard = data.colorIconAndOutCard;
    });
    this.ds.FileMenu().subscribe(Resp => {
      let data = Resp.json();
      this.pages = data.data;
      // if(parseInt(offers) > 0){
      //   let dataOffer= data.data[5]
    });
    this.dsOffers.FileOffer().subscribe(Resp => {
      let data = Resp.json().stores;
      let id = [];
      let viewedData = [];
      let size;
      let a = [];
      let o = [];
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          // a.push({key: key, val: dict[key]});
          for (let index = 0; index < data[key].OfferData.length; index++) {
            a.push({ key: key, val: data[key].OfferData[index] });
            o.push(data[key].OfferData[index]);

            console.log(o);
          }
        }
      }
      for (let index = 0; index < o.length; index++) {
        if (o[index].View == "0" && o[index].id) {
          this.visable = true;
          // v.push(data[index].id);
          id.push(o[index].id.length);

          viewedData.push(o[index].View);
          size = id.length.toString();


          console.log(size);
        }
      }

      this.newOffers = size + " " + "  New";

      let idoffer = [];
      let v = [];
      let viewedDataOffer = [];
      for (let index = 0; index < o.length; index++) {
        if (o[index].View === "0" && o[index].id) {
          // v.push(data[index].id);
          id.push(o[index].id.length);
          viewedData.push(o[index].View);
          console.log(size);
          let notification = {
            id: 1,
            title: size + " More Offer",
            text: "You just got notified :)"
          };

          this.notifications.push(notification);
        }
      }
      console.log(this.notifications);
      this.localNotifications.schedule(this.notifications);
    });
  }

  OnPressLocation() {
    this.nav.push(SendMessagePage);
    this.menuCtrl.close();
  }
  openOffer() {
    this.visable = false;
  }
  displayCounter(event){
    if(event==="push"){
      this.visable = false;
      this.nav.push(OffersPage);
    }
    else if(event=="pushNearOffers"){
      this.visable = false;
      this.nav.push(NearOffersPage);
    }
  }



  
}
