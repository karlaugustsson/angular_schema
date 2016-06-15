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
var schema_service_1 = require("../services/schema.service");
var user_actions_component_1 = require("./user-actions.component");
var UserSubscriptionSchemaComponent = (function () {
    function UserSubscriptionSchemaComponent(_schemaService) {
        this._schemaService = _schemaService;
        this.buttons_disabled = false;
    }
    UserSubscriptionSchemaComponent.prototype.ngOnInit = function () {
        this.getUserSubscribedSchemas();
    };
    UserSubscriptionSchemaComponent.prototype.getUserSubscribedSchemas = function () {
        var _this = this;
        return this._schemaService.getUserSubscribedSchemas().then(function (response) { _this.handleSuccess(response); }, function (error) { return _this.handleError(error); });
    };
    UserSubscriptionSchemaComponent.prototype.handleSuccess = function (response) {
        this.schemas = response;
    };
    UserSubscriptionSchemaComponent.prototype.handleError = function (response) {
        this.error = response.message;
    };
    UserSubscriptionSchemaComponent = __decorate([
        core_1.Component({
            selector: "schema",
            templateUrl: "app/html/user-schema.component.html",
            directives: [user_actions_component_1.UserActionsComponent]
        }), 
        __metadata('design:paramtypes', [schema_service_1.SchemaService])
    ], UserSubscriptionSchemaComponent);
    return UserSubscriptionSchemaComponent;
}());
exports.UserSubscriptionSchemaComponent = UserSubscriptionSchemaComponent;
//# sourceMappingURL=user-subscription-schemas.component.js.map