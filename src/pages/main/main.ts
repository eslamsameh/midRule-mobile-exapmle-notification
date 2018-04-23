import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams ,MenuController,LoadingController,
  ToastController,AlertController} from 'ionic-angular';
import {MainService} from './MainService'
import { MapPage } from '../map/map';
import { AboutPage} from '../about/about'
import {ServicesPage}from '../services/services'
import {ContactPage} from '../contact/contact'
import {SendMessagePage} from '../send-message/send-message'
import { Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Events } from 'ionic-angular';
import { App } from 'ionic-angular';
import {MyApp} from '../../app/app.component'
import {MenuPage} from '../menu/menu'
import { SplashScreen } from '@ionic-native/splash-screen';
import {OfferService } from '../../pages/offers/OfferService';
import {OffersPage } from '../offers/offers'
import { LocalNotifications } from '@ionic-native/local-notifications';
import {location} from '../general-map/general-map'

declare var cordova;
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  x=" ";
 Brief:any;
 Services:any;
 Contact:any;
 BriefHeader:any;
 BriefContent:any;
 address:any;
 Location:any;
 Telephone:any;
 Email:any;
 Home:any;
 Logo:any;
 imageCard:any;
 colorwhite:any;
 colorIconAndOutCard:any;
 ButtonAboutInCard:any;
 IconService:any;
 IconContact:any;
 IconAbout:any;
 ButtonServiceOutCard:any;
 ButtonContactOutCard:any;
 ButtonAboutOutCard:any;
 imageSendMessage:any;
 SendMessageIcon:any;
 SendMessageButton:any;
 OurAddress:any;
 iconLocation:any;
 iconTelephone:any;
 iconEmail:any;
 LocationBtn:any;
 status:any;
 menu:any;
 offer:any;
 notifications:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public ds:MainService,
    public loadingCtrl: LoadingController,public network:Network,public platform:Platform,
    private toastCtrl: ToastController,public appCtrl:App,public events:Events,public alertCtrl:AlertController,
    public splashScreen: SplashScreen, public dsoffer:OfferService,public localNotifications:LocalNotifications
   ) {



    }








ngOnInit(){


  let loading = this.loadingCtrl.create({content : "please wait..."});
  loading.present();
this.ds.FileMain().subscribe((resp)=>{


  let data=resp.json();
  this.BriefHeader=data.BriefHeader;
  this.BriefContent=data.BriefContent;
  this.Services=data.Services;
  this.Brief=data.Brief;
  this.Contact=data.Contact;
  this.address=data.address;
  this.Location=data.Location;
  this.Telephone=data.Telephone;
  this.Email=data.Email;
  this.Home=data.Home;
  this.Logo=data.Logo;
  this.imageCard=data.imageCard;
  this.colorwhite=data.colorwhite;
  this.colorIconAndOutCard=data.colorIconAndOutCard;
  this.ButtonAboutInCard=data.ButtonAboutInCard;
  this.IconService=data.IconService;
  this.IconContact=data.IconContact;
  this.IconAbout=data.IconAbout;
  this.ButtonServiceOutCard=data.ButtonServiceOutCard
  this.ButtonContactOutCard=data.ButtonContactOutCard;
  this.ButtonAboutOutCard=data.ButtonAboutOutCard;
  this.imageSendMessage=data.imageSendMessage;
  this.SendMessageIcon=data.SendMessageIcon;
  this.SendMessageButton=data.SendMessageButton;
  this.OurAddress=data.OurAddress;
  this.iconLocation=data.iconLocation;
  this.iconTelephone=data.iconTelephone;
  this.iconEmail=data.iconEmail;
  this.LocationBtn=data.LocationBtn;



});
loading.dismiss();

}

OnPressLocation()
{
this.navCtrl.push(location);
}
OnPressAbout(){
  this.navCtrl.push(AboutPage);
}
OnPressService(){
this.navCtrl.push(ServicesPage);
}
OnPressContactUs(){
  this.navCtrl.push(ContactPage)
}
OnPressAboutinGrid(){

  this.navCtrl.push(AboutPage);
}
OnPressSendMessage(){
  this .navCtrl.push(SendMessagePage);

}
OnPressNotification(){

}
}
