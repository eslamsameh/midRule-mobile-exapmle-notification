import { Component ,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SendMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-message',
  templateUrl: 'send-message.html',
})
export class SendMessagePage {
  @ViewChild('myInput') myInput: ElementRef;
  myStuff:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public element :ElementRef) {
  }




  resize() {

      this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }
}
