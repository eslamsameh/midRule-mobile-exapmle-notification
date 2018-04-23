import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import {ServiceService} from './Service.Service'
import {MenuPage} from '../menu/menu'
/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  ServicesHeader:any;
  Service:any;
  ServiceContent:any;
  dataImage:any;
  items:any;
  ColorData:any;
  BackGroundColor:any;
  ServicesTitle:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ds:ServiceService
  ,public loadingCtrl:LoadingController) {
  }

  ngOnInit(){
    let loading = this.loadingCtrl.create({content : "please wait..."});
    loading.present();
this.ds.FileService().subscribe((resp)=>{

  let data=resp.json();
  debugger;
  this.Service=data.data.Services;
this.ColorData=data.data.ColorData;
  this.ServiceContent=data.data.ServiceContent;
  this.ServicesHeader=data.data.ServicesHeader;
  this.items=data.ServiceData
  this.dataImage=data.data.dataImage;
  this.BackGroundColor=data.data.BackGroundColor;
  this.ServicesTitle=data.data.ServicesTitle;


})
loading.dismiss();
  }

}
