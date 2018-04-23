import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {PortfolioService} from './Portfolio.Service';
import * as _ from "lodash";

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
  items:any;
  PortfolioTitle:any;
  PortfolioHeader:any;
  PortfolioContent:any;
  imageCard:any;
  BackgroundColor:any;
  colorwordsPortfolio:any;
  ShowMoreColor:any;
  ShowMoreBorderColor:any;
  isValid:any =false;
  results:any;
  imagesBeforeSplit:any;
  ChunkedImages:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:PortfolioService
  ,public loadingCtrl:LoadingController ) {
  }

  ngOnInit(){
    let loading = this.loadingCtrl.create({content : "please wait..."});
    loading.present();

this.ds.FilePortfolio().subscribe((resp)=>{

  let data=resp.json();

  this.results=resp.json().data;
  this.imagesBeforeSplit= this.results;
  this.ChunkedImages=_.chunk((this.results), 4);
    this.items=this.ChunkedImages[0];

  this.Portfolio=data.Portfolio.Portfolio;
  this.PortfolioTitle=data.Portfolio.PortfolioTitle;
  this.BackgroundColor=data.Portfolio.BackgroundColor;
  this.colorwordsPortfolio=data.Portfolio.colorwordsPortfolio;
  this.ShowMoreBorderColor=data.Portfolio.ShowMoreBorderColor;
  this.ShowMoreColor=data.Portfolio.ShowMoreColor;
  this.imageCard=data.Portfolio.imageCard;
  this.PortfolioContent=data.Portfolio.PortfolioContent;
  this.PortfolioHeader=data.Portfolio.PortfolioHeader


})
loading.dismiss();
  }
  OnPressShowMore(){
    let data=[];



      for (let index = 0; index < this.ChunkedImages.length; index++) {



       if(this.items==this.ChunkedImages[index]){

         data.push( this.ChunkedImages[index+1])

      this.items.push.apply(this.items, data[0])
      this.ChunkedImages=[this.items,this.ChunkedImages[index+2]];





       }

      }

      if( this.items.length == this.imagesBeforeSplit.length  ){
        this.isValid=true;

        }


     }


     isValidForm() {
      return this.isValid=true;
    }

  }

