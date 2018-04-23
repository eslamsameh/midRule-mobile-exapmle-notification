import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController } from 'ionic-angular';
import {MapPage} from '../map/map'
import {ContactService} from './ContactService'
import { SendMessagePage } from '../send-message/send-message';
import {location} from '../general-map/general-map'
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  Contact:any
  address:any

  ContactHeader:any;
  ContactContent:any;
  Location:any;
  Telephone:any;
  Email:any;
  ButtonLocation:any;
  OurAddress:any;
  ContactTitle:any;
  icon:any;
  image:any;
  colorForCard:any;
  backgroundcolorButton:any;
  colorForEmpty:any;
  SendMessageButton:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:ContactService ,
    public loadingCtrl:LoadingController) {
  }
ngOnInit(){
  let loading = this.loadingCtrl.create({content : "please wait..."});
  loading.present();
this.ds.FileContact().subscribe((Resp)=>{
  console.log(Resp.json());

  this.address=Resp.json().Address;
  this.Contact=Resp.json().Contact;
 this.Email=Resp.json().Email;
 this.ContactContent=Resp.json().ContactContent;
 this.ContactHeader=Resp.json().ContactHeader;
 this.Location=Resp.json().Location;
 this.Telephone=Resp.json().Telephone;
 this.OurAddress=Resp.json().OurAddress;
 this.ButtonLocation=Resp.json().Button;
 this.ContactTitle=Resp.json().ContactTitle;
 this.icon=Resp.json().icon;
 this.image=Resp.json().image;
this.colorForEmpty=Resp.json().colorForEmpty;
this.SendMessageButton=Resp.json().SendMessageButton;

 this.colorForCard=Resp.json().colorForCard
 this.backgroundcolorButton=Resp.json().backgroundcolorButton

})
loading.dismiss();


}
OnPressLocation(){
    this.navCtrl.push(location);

  }
  OnPressSendMessage(){
    this.navCtrl.push(SendMessagePage)
  }

}
