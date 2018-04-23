import { Component , Input ,ViewChild,Output,EventEmitter} from '@angular/core';
import {NavController,Nav} from 'ionic-angular';
import {OffersPage} from '../offers/offers';
import {NearOffersPage} from '../near-offers/near-offers';
@Component({
  selector:'Menu-Offers',
  templateUrl:'MenuOffers.html'

})
export class MenuOffers{
  @Input() dataSource:any;

  @Output() valueChange = new EventEmitter();
  @Output() valueChangeNearOffers = new EventEmitter();


  visable:any=false;
  constructor( public navCtrl:NavController, ){

  }
  OnPressMoreOffers(){
    this.visable=!this.visable;
  }
  OnPressOffers(){
    debugger;
    this.valueChange.emit("push");

   }
  OnPressNearOffers(){
this.valueChange.emit("pushNearOffers");
  }
}
