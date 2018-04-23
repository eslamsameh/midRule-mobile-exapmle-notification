import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import {MenuOffers} from './MenuOffer';
@NgModule({
  declarations: [
    MenuPage,MenuOffers

  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],

})
export class MenuPageModule {}
