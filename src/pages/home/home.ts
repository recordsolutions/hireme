import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams ,IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
 
declare var google;


/**
 * Generated class for the AllMuseumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage { 

  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  museumList = [];
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public http: Http) {
   
    this.http.get('assets/data/museum.json')
    .map(res => res.json())
    .subscribe(data => {
        this.museumList = data.museums;
        
        this.getMarkers();
        
      },
      err => console.log("error is "+err), // error
      () => console.log('read museum data Complete '+ this.museumList) // complete
    );
    

  }
  

 
  ionViewDidLoad() {
    this.displayGoogleMap();
   
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(28.6117993, 77.2194934);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {


    for (let _i = 0; _i < this.museumList.length; _i++) {
      if(_i > 0 )
       this.addMarkersToMap(this.museumList[_i]);
    }
  }

  addMarkersToMap(museum) {
    var position = new google.maps.LatLng(museum.latitude, museum.longitude);
    var museumMarker = new google.maps.Marker({position: position, title: museum.name});
    museumMarker.setMap(this.map);
}

}
