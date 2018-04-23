import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode';

import { MenuPage} from '../pages/menu/menu';
import { App } from 'ionic-angular/components/app/app';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,app:App,
    public backgroundMode : BackgroundMode) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
         if(this.backgroundMode.isEnabled()) {
           this.backgroundMode.moveToBackground();
          }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });

  })

}
}
