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
var user_1 = require("../classes/user");
var router_1 = require('@angular/router');
var login_service_1 = require("../services/login.service");
var LoginComponent = (function () {
    function LoginComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        this.user = new user_1.User("", "", "");
        this.submitted = false;
        this.valid = false;
        this.user_exist = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error_messages = null;
        this.submitted = true;
        this._loginService.authorize(this.user.email, this.user.password).then(function (loginResponse) { return _this.handle_login_response(loginResponse); });
    };
    LoginComponent.prototype.handle_login_response = function (loginResponse) {
        if (loginResponse.error) {
            this.error_messages = loginResponse.error;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "app/html/login.component.html",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map