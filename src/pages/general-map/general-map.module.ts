import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { location } from './general-map';

@NgModule({
  declarations: [
    location
  ],
  imports: [
    IonicPageModule.forChild(location),
  ],
})
export class GeneralMapPageModule {}
