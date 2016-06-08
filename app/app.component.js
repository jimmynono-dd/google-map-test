"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'James';
        this.addresses = ADDRESSES;
        this.lat = null;
        this.lng = null;
        this.originLat = 47.6490296;
        this.originLng = -122.3503866;
        this.zoom = 14;
    }
    AppComponent.prototype.changeMap = function (address) {
        this.selectedAddress = address;
        console.log(this.selectedAddress.name);
        console.log(this.selectedAddress.lat);
        console.log(this.selectedAddress.lng);
        this.lat = this.selectedAddress.lat;
        this.lng = this.selectedAddress.lng;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
            styles: ["\n      .sebm-google-map-container {\n        height: 300px;\n      }\n      h1 {\n        color: red;\n      }\n\n      li {\n        color: blue;\n      }\n\n      .selected {\n        color: purple;\n      }\n    "],
            template: "\n      <h1>Google!</h1>\n      <h2>{{title}}</h2>\n      <ul>\n        <li *ngFor=\"let address of addresses\"\n            [class.selected]=\"address === selectedAddress\"\n            (click)=\"changeMap(address)\">{{address.name | uppercase}}</li>\n      </ul>\n\n      <sebm-google-map [latitude]=\"originLat\" [longitude]=\"originLng\" [zoom]=\"zoom\" >\n        <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" [label]=\"''\"></sebm-google-map-marker>\n      </sebm-google-map>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var ADDRESSES = [
    { "id": 100, "name": "Chateau Norton", "address": "8426 13th Ave SW Seattle WA 98106", "lat": 47.527495, "lng": -122.3536607 },
    { "id": 101, "name": "Deloitte", "address": "837 N 34th St, Seattle, WA 98103", "lat": 47.6490296, "lng": -122.3503866 },
    { "id": 101, "name": "Fremont Brewing Co", "address": "1050 N 34th St, Seattle, WA 98103", "lat": 47.649252, "lng": -122.345698 }
];
//# sourceMappingURL=app.component.js.map