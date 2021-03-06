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
var http_service_1 = require("./http.service");
var router_deprecated_1 = require('@angular/router-deprecated');
var Rx_1 = require('rxjs/Rx');
var api_service_1 = require("./api.service");
var LoginService = (function () {
    function LoginService(_http, _router, api_service) {
        var _this = this;
        this._http = _http;
        this._router = _router;
        this.api_service = api_service;
        this.email = "karl.augustsson@gmail.com";
        this.password = "password";
        this.key = {};
        this.authorized = false;
        this.api_service.getApiRoute("Authorize").then(function (route) { return _this.login_url = route.server_url + route.url; });
    }
    LoginService.prototype.authorize = function (email, password) {
        var _this = this;
        if (email === void 0) { email = null; }
        if (password === void 0) { password = null; }
        if (this.password && this.email) {
            email = this.email;
            password = this.password;
        }
        var body = JSON.stringify({ 'email': email, "password": password });
        return new Rx_1.Observable(function (observer) {
            _this._http.PostRequest(_this.login_url, body).subscribe(function (response) { return observer.next(_this.handleSuccess(response, email, password)); });
        });
    };
    LoginService.prototype.get_authtoken = function () {
        this.isAuthorized();
        return this.authorize();
    };
    LoginService.prototype.isAuthorized = function () {
        if (!this.authorize) {
            this._router.navigate(["/login"]);
        }
    };
    LoginService.prototype.handleError = function (error) {
        if (error._body == undefined) {
            return;
        }
        var errMsg = JSON.parse(error._body).errors;
        return errMsg;
    };
    LoginService.prototype.handleSuccess = function (data, email, password) {
        this.email = email;
        this.password = password;
        this.authorized = true;
        return { key: "Authorization", value: "Bearer " + data.token };
    };
    LoginService.prototype.getAuthUser = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.api_service.getApiRoute("AuthUser").then(function (route) {
                _this.get_authtoken().subscribe(function (token) {
                    _this._http.getRequest(route.server_url + route.url, [token]).subscribe(function (response) { return observer.next(response); });
                });
            });
        });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_deprecated_1.Router, api_service_1.ApiService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map