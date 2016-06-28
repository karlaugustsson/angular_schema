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
var api_service_1 = require("./api.service");
var login_service_1 = require("./login.service");
var http_service_1 = require("./http.service");
var Rx_1 = require('rxjs/Rx');
var SchemaService = (function () {
    function SchemaService(_httpService, _apiService, _loginService) {
        this._httpService = _httpService;
        this._apiService = _apiService;
        this._loginService = _loginService;
    }
    SchemaService.prototype.getUserSubscribedSchemas = function () {
        var _this = this;
        return this._apiService.getApiRoute("userSchemas").then(function (route) {
            return _this._loginService.get_authtoken().subscribe(function (token) {
                return _this._httpService.getRequest(route.server_url + route.url, [token]);
            });
        });
    };
    SchemaService.prototype.getSubscribableSchemas = function () {
        var _this = this;
        return this._apiService.getApiRoute("userSubscribeableSchemas").then(function (route) {
            return _this._loginService.get_authtoken().subscribe(function (token) {
                return _this._httpService.getRequest(route.server_url + route.url, [token]);
            });
        });
    };
    SchemaService.prototype.subscribeToSchema = function (schemaId) {
        var _this = this;
        return this._apiService.getApiRoute("UserSubscribeToSchema").then(function (route) {
            var url = route.url.replace("{id}", schemaId);
            return _this._loginService.get_authtoken().subscribe(function (token) {
                return _this._httpService.getRequest(route.server_url + url, [token]);
            });
        });
    };
    SchemaService.prototype.unsubscribeToSchema = function (schemaId) {
        var _this = this;
        return this._apiService.getApiRoute("UserUnsubscribeToSchema").then(function (route) {
            var url = route.url.replace("{id}", schemaId);
            return _this._loginService.get_authtoken().subscribe(function (token) {
                return _this._httpService.getRequest(route.server_url + url, [token]);
            });
        });
    };
    SchemaService.prototype.getSchema = function (schemaId) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this._apiService.getApiRoute("Schema").then(function (route) {
                var url = route.url.replace("{id}", schemaId);
                _this._loginService.get_authtoken().subscribe(function (token) {
                    _this._httpService.getRequest(route.server_url + url, [token]).subscribe(function (response) { return observer.next(response); });
                });
            });
        });
    };
    SchemaService.prototype.getSchemaBlocks = function (schemaID, start_date, end_date, userId) {
        var _this = this;
        if (userId === void 0) { userId = null; }
        return new Rx_1.Observable(function (observer) {
            _this._apiService.getApiRoute("SchemaBlocks").then(function (route) {
                var start_d = start_date.toString("yyyy-MM-dd");
                var end_d = end_date.toString("yyyy-MM-dd");
                var url = route.url.replace("{schema_id}", schemaID);
                url = url.replace("{start_date}", start_d);
                url = url.replace("{end_date}", end_d);
                if (userId) {
                    url = url.replace("{user_id}", userId.toString());
                }
                else {
                    url = url.replace("{user_id}", "");
                }
                _this._loginService.get_authtoken().subscribe(function (token) {
                    _this._httpService.getRequest(route.server_url + url, [token]).subscribe(function (response) { return observer.next(response); });
                });
            });
        });
    };
    SchemaService.prototype.handleError = function (response) {
        return Promise.reject(response);
    };
    SchemaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService, api_service_1.ApiService, login_service_1.LoginService])
    ], SchemaService);
    return SchemaService;
}());
exports.SchemaService = SchemaService;
//# sourceMappingURL=schema.service.js.map