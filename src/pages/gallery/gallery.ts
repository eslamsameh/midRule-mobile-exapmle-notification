import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{JsonService} from '../JsonService/JsonService'
import * as _ from "lodash";

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  images:any;
imagesBeforeSplit:any;
ChunkedImages:any;
chunkedData:any;
prevuosImages:any;
results:any;
isValid:any=false;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public ds:JsonService) {
  }

ngOnInit(){
  this.ds.FileGallery().subscribe((resp)=>{
   this.results=resp.json().data.imagesLoad;
   this.imagesBeforeSplit= this.results;
   this.ChunkedImages=_.chunk((this.results), 4);
     this.images=this.ChunkedImages[0];


  })
}
OnPressShowMore(){
  let data=[];
  debugger;


  for (let index = 0; index < this.ChunkedImages.length; index++) {



   if(this.images==this.ChunkedImages[index]){

     data.push( this.ChunkedImages[index+1])




  this.images.push.apply(this.images, data[0])
  this.ChunkedImages=[this.images,this.ChunkedImages[index+2]];
  debugger;




   }

  }
  console.table(this.images);
  console.table(this.imagesBeforeSplit);
  if( this.images.length == this.imagesBeforeSplit.length  ){
    this.isValid=true;

    }


 }

 isValidForm() {
  return this.isValid=true;
}

}





