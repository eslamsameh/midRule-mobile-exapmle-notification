import { Component ,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {OfferService} from './OfferService';
import {MapToIterable} from './OfferPipe'

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
  daysOffer:any;
  dataImage:any;
  ColorData:any;
  OfferTitle:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public ds:OfferService,public loadingCtrl:LoadingController) {
  }
ngOnInit(){
  let loading = this.loadingCtrl.create({content : "please wait..."});
  loading.present();
this.ds.FileOffer().subscribe((Resp)=>{

  let data=Resp.json();
 // let lengthOfData=data.OfferData.length;
  //console.log("length: ", lengthOfData);
 // localStorage.setItem('currentOffer',lengthOfData);
  this.offerHeader=data.data.offerHeader;
  this.offerContent=data.data.offerContent;
  this.offer=data.data.offer;
  this.daysOffer=data.data.daysOffer;

  this.items=data.stores ;



  this.dataImage=data.data.dataImage;
  this.ColorData=data.data.ColorData;
  this.OfferTitle=data.data.OfferTitle;
})
loading.dismiss();

}

}
