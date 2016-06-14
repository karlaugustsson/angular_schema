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
var SchemaService = (function () {
    function SchemaService(_httpService, _apiService, _loginService) {
        this._httpService = _httpService;
        this._apiService = _apiService;
        this._loginService = _loginService;
    }
    SchemaService.prototype.getUserSubscribedSchemas = function () {
        var _this = this;
        return this._apiService.getApiRoute("userSchemas").then(function (route) {
            _this._loginService.get_authtoken().then(function (token) {
                _this._httpService.getRequest(route.server_url + route.url, [token]).then(function (response) { return _this.handleSuccess(response); }, function (error) { return _this.handleError(error); });
            });
        });
    };
    SchemaService.prototype.getSubscribableSchemas = function () {
    };
    SchemaService.prototype.handleError = function (error) {
        console.log(error);
    };
    SchemaService.prototype.handleSuccess = function (response) {
        console.log(response);
    };
    SchemaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService, api_service_1.ApiService, login_service_1.LoginService])
    ], SchemaService);
    return SchemaService;
}());
exports.SchemaService = SchemaService;
//# sourceMappingURL=schema.service.js.map