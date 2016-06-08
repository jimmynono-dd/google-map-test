"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var core_1 = require('angular2-google-maps/core');
// this line boots our application on the page in the <my-app> element:
// Note: It is required to add the ANGULAR2_GOOGLE_MAPS_PROVIDERS here!
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [core_1.ANGULAR2_GOOGLE_MAPS_PROVIDERS]);
//# sourceMappingURL=boot.js.map