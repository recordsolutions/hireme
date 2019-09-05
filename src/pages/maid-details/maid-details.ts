import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaidDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maid-details',
  templateUrl: 'maid-details.html',
})
export class MaidDetailsPage {

  date : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.date = new Date().toJSON("MM/DD/YYYY");;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaidDetailsPage');
  }

  confirmorder(){
    this.navCtrl.push('ConfirmOrderPage');
  }
}
