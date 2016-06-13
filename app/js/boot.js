"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var api_service_1 = require("./services/api.service");
var login_service_1 = require("./services/login.service");
var app_component_1 = require('./components/app.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var user_service_1 = require("./services/user.service");
var schema_service_1 = require("./services/schema.service");
var http_service_1 = require("./services/http.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, api_service_1.ApiService, login_service_1.LoginService, http_1.Http, http_1.HTTP_PROVIDERS, user_service_1.UserService, schema_service_1.SchemaService, http_service_1.HttpService]);
//# sourceMappingURL=boot.js.map