import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import {PortfolioPage} from '../portfolio/portfolio'
import {AboutService} from './AboutService'

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
About:any;
BackgroundColor:any;
colorwordsAbout:any;
iconColor:any;
colorContent:any;
icon:any;
image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:AboutService,
    public loadingCtrl:LoadingController ) {
  }


  ngOnInit(){
    let loading = this.loadingCtrl.create({content : "please wait..."});
    loading.present();
this.ds.FileAbout().subscribe((resp)=>{
let data=resp.json();
this.AboutHeader=data.About.AboutHeader;
this.AboutContent=data.About.AboutContent;
this.AboutTitle=data.About.AboutTitle

this.items=data.data;
this.About=data.About.About;
this.BackgroundColor=data.About.BackgroundColor;
this.iconColor=data.data.iconColor
this.colorwordsAbout=data.About.colorwordsAbout;
this.colorContent=data.data.colorContent;
this.icon=data.data.icon;
this.image=data.About.image;

})
loading.dismiss();
  }
}
