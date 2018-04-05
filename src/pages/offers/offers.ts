import { Component ,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JsonService} from '../JsonService/JsonService';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  items:any;
  offerHeader:any;
  offer:any;
  offerContent:any;
  daysOffer:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:JsonService) {
  }
ngOnInit(){
this.ds.FileOffer().subscribe((Resp)=>{
  let data=Resp.json();
  this.offerHeader=data.data.offerHeader;
  this.offerContent=data.data.offerContent;
  this.offer=data.data.offer;
  this.daysOffer=data.data.daysOffer;
  this.items=data.OfferData;
})


}

}
