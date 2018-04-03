import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JsonService} from '../JsonService/JsonService';

/**
 * Generated class for the PortfolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {
  Portfolio:any;
  Check:any;
  proname1:any;
  proname2:any;
  proname3:any;
  proname4:any;
  proContent1:any;
  proContent2:any;
  proContent3:any;
  proContent4:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:JsonService) {
  }

  ngOnInit(){
this.ds.FilePortfolio().subscribe((resp)=>{
  debugger;
  let data=resp.json();
  this.Check=data.data.Check;
  this.Portfolio=data.data.Portfolio;
  this.proname1=data.data.Pro1;
  this.proname2=data.data.Pro2;
  this.proname3=data.data.Pro3;
  this.proname4=data.data.Pro4;
  this.proContent1=data.data.ProContent1;
  this.proContent2=data.data.ProContent2;
  this.proContent3=data.data.ProContent3;
  this.proContent4=data.data.ProContent4;
})
  }

}
