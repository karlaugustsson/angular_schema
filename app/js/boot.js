"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var login_service_1 = require("./services/login.service");
var app_component_1 = require('./components/app.component');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, login_service_1.LoginService, http_1.Http, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=boot.js.map