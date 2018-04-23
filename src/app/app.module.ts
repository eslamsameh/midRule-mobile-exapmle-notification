import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuPage}from '../pages/menu/menu';
import {MapPage} from '../pages/map/map';

import {SendMessagePage } from '../pages/send-message/send-message';
import { HttpModule } from '@angular/http';
import {AboutPageModule} from '../pages/about/about.module';
import {ContactPageModule}from '../pages/contact/contact.module';
import{GalleryPageModule}from '../pages/gallery/gallery.module';
import {MainPageModule } from '../pages/main/main.module';
import {ServicesPageModule}from '../pages/services/services.module';
import {MapPageModule} from '../pages/map/mapmoldule';
import {MenuPageModule} from '../pages/menu/menu.module';
import {OffersPageModule}from '../pages/offers/offers.module';
import {SendMessagePageModule } from '../pages/send-message/send-message.module';

import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

import {AboutService} from '../pages/about/AboutService';

import {ContactService} from '../pages/contact/ContactService';
import {GalleryService} from '../pages/gallery/GalleryService';
import {MainService} from '../pages/main/MainService';
import {MapService} from '../pages/map/MapService';
import {MenuService} from '../pages/menu/MenuService';
import {OfferService} from '../pages/offers/OfferService';
import {PortfolioService} from '../pages/portfolio/Portfolio.Service';
import {ServiceService} from '../pages/services/Service.Service';
import { Network } from '@ionic-native/network';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation } from '@ionic-native/geolocation';
import {GoogleMaps} from '@ionic-native/google-maps';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NearOffersPageModule}from  '../pages/near-offers/near-offers.module'
import {GeneralMapPageModule} from '../pages/general-map/general-map.module'
import {location} from '../pages/general-map/general-map'
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],

  imports: [
    BrowserModule,HttpModule,AboutPageModule,ContactPageModule,GalleryPageModule,SendMessagePageModule,GeneralMapPageModule,
    GalleryPageModule,ServicesPageModule,MapPageModule,MenuPageModule,OffersPageModule,MainPageModule,NearOffersPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,location,
    MenuPage,MapPage
  ],

  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    AboutService,
    ContactService,
    GalleryService,
    MainService,
    MapService,
    MenuService,
    OfferService,
    PortfolioService,
PhotoViewer,
    ServiceService,
    LocalNotifications,
    Network,GoogleMaps,BackgroundGeolocation,BackgroundMode,

    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ],
})
export class AppModule {

}
