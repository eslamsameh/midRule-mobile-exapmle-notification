import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController } from 'ionic-angular';
import{GalleryService} from './GalleryService'
import * as _ from "lodash";
import { PhotoViewer } from '@ionic-native/photo-viewer';

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
Gallery:any;
GalleryTitle:any;
GalleryHeader:any;
GalleryContent:any;
ColorGalleryCard:any;
ButtonShowMoreColor:any;
ButtonShowMoreBorderColor:any;
image:any;
ButtonShowMore:any;
backgroundColor:any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public ds:GalleryService,
    public loadingCtrl:LoadingController,public photoViewer:PhotoViewer ) {
  }

ngOnInit(){
  let loading = this.loadingCtrl.create({content : "please wait..."});
  loading.present();
 this.ds.FileGallery().subscribe((resp)=>{

   this.results=resp.json().data.imagesLoad;
   debugger
   this.imagesBeforeSplit= this.results;
   this.ChunkedImages=_.chunk((this.results), 4);
     this.images=this.ChunkedImages[0];
this.Gallery=resp.json().Gallery.Gallery;
this.GalleryContent=resp.json().Gallery.GalleryContent;
this.GalleryHeader=resp.json().Gallery.GalleryHeader;
this.GalleryTitle=resp.json().Gallery.GalleryTitle;
this.ColorGalleryCard=resp.json().Gallery.ColorGalleryCard;
this.ButtonShowMoreColor=resp.json().Gallery.ButtonShowMoreColor;
this.ButtonShowMoreBorderColor=resp.json().Gallery.ButtonShowMoreBorderColor;
this.image=resp.json().Gallery.image;
this.ButtonShowMore=resp.json().Gallery.ButtonShowMore;
this.backgroundColor=resp.json().Gallery.backgroundColor;

  })
  loading.dismiss();
}
OnPressShowMore(){
  let data=[];



  for (let index = 0; index < this.ChunkedImages.length; index++) {



   if(this.images==this.ChunkedImages[index]){

     data.push( this.ChunkedImages[index+1])

  this.images.push.apply(this.images, data[0])
  this.ChunkedImages=[this.images,this.ChunkedImages[index+2]];





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
imageView(image){


debugger;
  this.photoViewer.show(image);
}
}





