import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffersPage } from './offers';
import {OfferService} from './OfferService'
import {MapToIterable} from './OfferPipe'
@NgModule({
  declarations: [
    OffersPage,MapToIterable

  ],
  imports: [
    IonicPageModule.forChild(OffersPage),
  ],


})
export class OffersPageModule {}
