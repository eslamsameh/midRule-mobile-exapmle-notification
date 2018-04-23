import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearOffersPage } from './near-offers';
@NgModule({
  declarations: [
    NearOffersPage
  ],
  imports: [
    IonicPageModule.forChild(NearOffersPage),
  ],
})
export class NearOffersPageModule {}
