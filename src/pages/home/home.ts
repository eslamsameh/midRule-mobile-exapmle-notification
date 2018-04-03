import { Component ,OnInit} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {MenuPage}from '../menu/menu'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public NavParam:NavParams) {

  }
  ngOnInit(){
    setTimeout(() => {
        // this.navCtrl.popToRoot();
        // might try this instead
        this.navCtrl.setRoot(MenuPage);
    }, 2500);
  }
}
