import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PortfolioPage} from '../portfolio/portfolio'
import { JsonService}from '../JsonService/JsonService'

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
about:any;
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


  OnPressPortfolio(){
    this.navCtrl.setRoot(PortfolioPage);
  }
  ngOnInit(){
this.ds.FileAbout().subscribe((resp)=>{
let data=resp.json();
this.about=data.data.About;
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
