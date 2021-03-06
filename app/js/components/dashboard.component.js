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
var login_service_1 = require("../services/login.service");
var admin_actions_component_1 = require("./admin-actions.component");
var user_actions_component_1 = require("./user-actions.component");
var DashBoardComponent = (function () {
    function DashBoardComponent(_loginService) {
        this._loginService = _loginService;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        this.auth();
    };
    DashBoardComponent.prototype.auth = function () {
        this._loginService.authorize();
    };
    DashBoardComponent = __decorate([
        core_1.Component({
            selector: "dashboard",
            templateUrl: "app/html/dashboard.component.html",
            directives: [user_actions_component_1.UserActionsComponent, admin_actions_component_1.AdminActionsComponent]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.component.js.map