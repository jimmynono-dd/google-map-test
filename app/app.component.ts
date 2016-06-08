import {Component} from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

import {Address} from './address'

@Component({
  selector: 'my-app',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  styles: [`
      .sebm-google-map-container {
        height: 300px;
      }
      h1 {
        color: red;
      }

      li {
        color: blue;
      }

      .selected {
        color: purple;
      }
    `],
    template: `
      <h1>Google!</h1>
      <h2>{{title}}</h2>
      <ul>
        <li *ngFor="let address of addresses"
            [class.selected]="address === selectedAddress"
            (click)="changeMap(address)">{{address.name | uppercase}}</li>
      </ul>

      <sebm-google-map [latitude]="originLat" [longitude]="originLng" [zoom]="zoom" >
        <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="''"></sebm-google-map-marker>
      </sebm-google-map>
    `
})

export class AppComponent {
  title = 'James';
  addresses = ADDRESSES;
  selectedAddress: Address;


  lat: number = null;
  lng: number = null;
  originLat: number = 47.6490296;
  originLng: number = -122.3503866;
  zoom : number = 14;

  changeMap(address: Address) {
    this.selectedAddress = address;
    console.log(this.selectedAddress.name);
    console.log(this.selectedAddress.lat);
    console.log(this.selectedAddress.lng);

    this.lat = this.selectedAddress.lat;
    this.lng = this.selectedAddress.lng
  }
}


var ADDRESSES: Address[] = [
  {"id": 100, "name": "Chateau Norton", "address": "8426 13th Ave SW Seattle WA 98106", "lat": 47.527495, "lng": -122.3536607},
  {"id": 101, "name": "Deloitte", "address": "837 N 34th St, Seattle, WA 98103", "lat": 47.6490296, "lng": -122.3503866},
  {"id": 101, "name": "Fremont Brewing Co", "address": "1050 N 34th St, Seattle, WA 98103", "lat": 47.649252, "lng": -122.345698}

];
