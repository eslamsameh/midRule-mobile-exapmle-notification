import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuPage}from '../pages/menu/menu';
import {MapPage} from '../pages/map/map'
import {AboutPage } from '../pages/about/about'
import{ServicesPage} from '../pages/services/services'
import {PortfolioPage} from '../pages/portfolio/portfolio'
import {ContactPage} from '../pages/contact/contact'
import {SendMessagePage } from '../pages/send-message/send-message'
import {JsonService} from '../pages/JsonService/JsonService'
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,MapPage,AboutPage,ServicesPage,ContactPage,SendMessagePage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,MapPage,AboutPage,ServicesPage,ContactPage,SendMessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,JsonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
