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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var api_service_1 = require("./api.service");
var login_service_1 = require("./login.service");
require('rxjs/add/observable/throw');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
var SchemaService = (function () {
    function SchemaService(_apiService, _http, _login_service) {
        var _this = this;
        this._apiService = _apiService;
        this._http = _http;
        this._login_service = _login_service;
        this._apiService.getApiRoute("Schemas").then(function (route) { _this.schemaRoute = route; });
    }
    SchemaService.prototype.getSchemas = function () {
        var _this = this;
        this._login_service.get_authtoken().then(function (token) {
            console.log("Bearer " + token);
            var headers = new http_1.Headers({ 'Content-Type': 'application/json', "Authorization": "Bearer " + token });
            var options = new http_1.RequestOptions({ headers: headers });
            return _this._http.get(_this.schemaRoute.server_url + _this.schemaRoute.url, options).toPromise().then(function (answer) { console.log(answer); _this.schemas = answer; }).catch(function (error) { console.log(error); });
        });
    };
    SchemaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, http_1.Http, login_service_1.LoginService])
    ], SchemaService);
    return SchemaService;
}());
exports.SchemaService = SchemaService;
//# sourceMappingURL=schema.service.js.map