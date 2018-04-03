import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams ,MenuController} from 'ionic-angular';
import {JsonService} from '../JsonService/JsonService'
import { MapPage } from '../map/map';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  x=" ";
 Brief:any;
 Services:any;
 Contact:any;
 BriefHeader:any;
 BriefContent:any;
 address:any;
 Location:any;
 Telephone:any;
 Email:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ds:JsonService,
  ) {
  }


ngOnInit(){

this.ds.FileMain().subscribe((resp)=>{
  let data=resp.json();
  this.BriefHeader=data.data.BriefHeader;
  this.BriefContent=data.data.BriefContent;
  this.Services=data.data.Services;
  this.Brief=data.data.Brief;
  this.Contact=data.data.Contact;
  this.address=data.data.address;
  this.Location=data.data.Location;
  this.Telephone=data.data.Telephone;
  this.Email=data.data.Email;
})
}
OnPressLocation()
{
this.navCtrl.setRoot(MapPage);
}
}
