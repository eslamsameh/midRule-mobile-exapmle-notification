import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MapPage} from '../map/map'
import {JsonService} from '../JsonService/JsonService'
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:JsonService) {
  }
ngOnInit(){

this.ds.FileContact().subscribe((Resp)=>{
  console.log(Resp.json());

  this.address=Resp.json().data.Address;
  this.Contact=Resp.json().data.Contact;
 this.Email=Resp.json().data.Email;
 this.ContactContent=Resp.json().data.ContactContent;
 this.ContactHeader=Resp.json().data.ContactHeader;
 this.Location=Resp.json().data.Location;
 this.Telephone=Resp.json().data.Telephone;
  debugger;
})



}
OnPressLocation(){
    this.navCtrl.setRoot(MapPage);

  }

}
