import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JsonService} from '../JsonService/JsonService'
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
  firstTitle:any;
  firstContent:any;
  SecondTitle:any;
  SecondContent:any;
  ThirdTitle:any;
  ThirdContent:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ds:JsonService) {
  }

  ngOnInit(){
this.ds.FileService().subscribe((resp)=>{
  let data=resp.json();
  this.Service=data.data.Services;

  this.ServiceContent=data.data.ServiceContent;
  this.ServicesHeader=data.data.ServicesHeader;
  this.firstTitle=data.data.firstTitle;
  this.firstContent=data.data.firstContent;
  this.SecondTitle=data.data.SecondTitle;
  this.SecondContent=data.data.SecondContent;
  this.ThirdTitle=data.data.ThirdTitle;
  this.ThirdContent=data.data.ThirdContent;
})

  }

}
