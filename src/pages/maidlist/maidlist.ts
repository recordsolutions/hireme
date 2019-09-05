import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { Maid } from '../../model/maid';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

/**
 * Generated class for the MaidlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maidlist',
  templateUrl: 'maidlist.html',
})
export class MaidlistPage {

  profile :any [];
  maids: Maid[];
  date : Date ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public maidServices:ApiProvider) {

  }
  
  
  initializeRecipes() {
    this.maidServices.getMaidList().subscribe(res=>
    {
       this.maids=res; 
    });
    console.log(this.maids);
  } 

  ionViewDidLoad() {
   this.initializeRecipes();
  }

  maidDetails(params){
   
    console.log(params)
    this.navCtrl.push('MaidDetailsPage')
  }

}
