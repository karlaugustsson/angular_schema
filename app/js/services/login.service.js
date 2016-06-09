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
var router_1 = require('@angular/router');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
var LoginService = (function () {
    function LoginService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.login_url = "http://localhost:8000/api/v1/authorize";
        this.authorized = false;
    }
    LoginService.prototype.authorize = function (email, password) {
        var _this = this;
        if (email === void 0) { email = null; }
        if (password === void 0) { password = null; }
        if (this.password && this.email) {
            email = this.email;
            password = this.password;
        }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTQ2NDY4MjA4MywiZXhwIjoxNDY0Njg1NjgzLCJuYmYiOjE0NjQ2ODIwODMsImp0aSI6ImVjMzczOGJiNzNiNmE4MGEzYjJmZjc0ODkxODJjZGVjIn0.3Q6lQ5hcOsB2YML-AsO8gvuOxJbgg-eaNAiR6Tb072U" });
        var options = new http_1.RequestOptions({ headers: headers });
        //headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhb G ciOiJIU zI1NiJ9.eyJzdWIiOjQsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTQ2NDY4MjA4MywiZXhwIjoxNDY0Njg1NjgzLCJuYmYiOjE0NjQ2ODIwODMsImp0aSI6ImVjMzczOGJiNzNiNmE4MGEzYjJmZjc0ODkxODJjZGVjIn0.3Q6lQ5hcOsB2YML-AsO8gvuOxJbgg-eaNAiR6Tb072U');
        return this._http.post(this.login_url, JSON.stringify({ 'email': email, "password": password }), options).toPromise().then(function (data) { return _this.handleSuccess(data, email, password); }).catch(this.handleError);
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
        var errMsg = JSON.parse(error._body).errors;
        return Rx_1.Observable.throw(errMsg);
    };
    LoginService.prototype.handleSuccess = function (data, email, password) {
        var result = data.json();
        this.email = email;
        this.password = password;
        this.authorized = true;
        this._router.navigate(["/dashboard"]);
        return result.token;
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map