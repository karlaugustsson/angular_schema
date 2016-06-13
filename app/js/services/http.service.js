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
require('rxjs/add/observable/throw');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    HttpService.prototype.getRequest = function (urlName, additional_headers) {
        if (additional_headers === void 0) { additional_headers = null; }
    };
    HttpService.prototype.PostRequest = function (urlName, body, additional_headers) {
        var _this = this;
        if (additional_headers === void 0) { additional_headers = null; }
        console.log(body);
        if (additional_headers) {
            additional_headers.map(function (header) {
                _this.headers.append(header.key, header.value);
            });
        }
        console.log(urlName);
        return this._http.post(urlName, body, { headers: this.headers }).toPromise();
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map