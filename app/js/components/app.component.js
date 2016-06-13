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
var router_deprecated_1 = require('@angular/router-deprecated');
var header_component_1 = require("./header.component");
var footer_component_1 = require("./footer.component");
var login_component_1 = require("./login.component");
var dashboard_component_1 = require("./dashboard.component");
var api_service_1 = require("../services/api.service");
var schema_component_1 = require("./schema.component");
var available_schemas_component_1 = require("./available-schemas.component");
var AppComponent = (function () {
    function AppComponent(api_service) {
        this.api_service = api_service;
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            { path: '/login', name: "Login", component: login_component_1.LoginComponent, useAsDefault: true },
            { path: '/dashboard', name: "Dashboard", component: dashboard_component_1.DashBoardComponent },
            { path: '/user-schemas', name: "User Schema Subscriptions", component: schema_component_1.UserSchemaComponent },
            { path: '/available-schemas', name: "Available Schemas", component: available_schemas_component_1.AvailableSchemasComponent },
        ]),
        core_1.Component({
            selector: "my-app",
            templateUrl: "app/html/app.component.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map