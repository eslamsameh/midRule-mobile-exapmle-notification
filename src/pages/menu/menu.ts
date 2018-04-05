import { Component, ViewChild, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav,ViewController,MenuController } from "ionic-angular";
import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { PortfolioPage } from "../portfolio/portfolio";
import { ServicesPage } from "../services/services";
import { MainPage } from "../main/main";
import { JsonService } from "../JsonService/JsonService";
import {MapPage} from '../map/map'
import { App } from 'ionic-angular/components/app/app';
import {SendMessagePage} from '../send-message/send-message'
import {GalleryPage} from '../gallery/gallery'
import {OffersPage} from '../offers/offers'


@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  rootPage = "MainPage";

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  Location: any;
  Telephone: any;
  Email: any;
pageIndex:any;
 pages:any;

  constructor(public navCtrl: NavController, public ds: JsonService,
     private viewCtrl: ViewController,private app:App,public menuCtrl: MenuController) {}

  openPage(page) {
    let params = {};
this.pageIndex=page.index
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else  {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }


  }

  isActive(page) {
    debugger
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (
        childNav.getSelected() &&
        childNav.getSelected().root === page.tabComponent
      ) {
        return "primary";
      }
      return ;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return "primary";
    }
    return ;
  }
  ngOnInit() {
    this.ds.FileMain().subscribe(resp => {
      let data = resp.json();
      this.Location = data.data.Location;
      this.Telephone = data.data.Telephone;
      this.Email = data.data.Email;

    });
    this.ds.FileMenu().subscribe((Resp)=>{
      let data =Resp.json();
      this.pages=data.data;
    })
  }
  OnPressLocation(){


this.nav.setRoot(SendMessagePage);
this.menuCtrl.close();
debugger;
  }

}
