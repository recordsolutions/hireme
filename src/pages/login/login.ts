import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  alert() {
    let alert = this.alertCtrl.create({
      title: 'Forgot Password',
      inputs: [
        {
          name: 'Email',
          placeholder: 'Enter Email',

        }
      ],
      buttons: [
        {
          text: 'Send',
          handler: () => {
            console.log('Send');
          }
        }
      ]
    });
    alert.present();
  }

  home(){
    this.navCtrl.push('HomePage')
  }

}
