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
  AboutHeader:any;
  AboutContent:any;
AboutTitle:any;
Mission:any;
MissionContnet:any;
VissionContent:any;
Vission:any;
items:any;
data:any;
cons:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:JsonService) {
  }


  OnPressPortfolio(){
    this.navCtrl.setRoot(PortfolioPage);
  }
  ngOnInit(){
this.ds.FileAbout().subscribe((resp)=>{
let data=resp.json();
this.AboutHeader=data.About.AboutHeader;
this.AboutContent=data.About.AboutContent;
this.AboutTitle=data.About.AboutTitle
debugger;
this.items=data.data;
this.cons=data.data;




})
  }
}
