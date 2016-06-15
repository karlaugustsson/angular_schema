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
        this.schemas = [];
        this.buttons_disabled = false;
        this.fetched_data = false;
    }
    UserSubscriptionSchemaComponent.prototype.ngOnInit = function () {
        this.getUserSubscribedSchemas();
    };
    UserSubscriptionSchemaComponent.prototype.getUserSubscribedSchemas = function () {
        var _this = this;
        return this._schemaService.getUserSubscribedSchemas().then(function (response) { _this.handleSuccess(response); _this.fetched_data = true; }, function (error) { _this.handleError(error); _this.fetched_data = true; });
    };
    UserSubscriptionSchemaComponent.prototype.handleSuccess = function (response) {
        this.schemas = response;
    };
    UserSubscriptionSchemaComponent.prototype.change_subscription = function (schema) {
        var _this = this;
        this.buttons_disabled = true;
        if (schema.is_subscriber == false) {
            this._schemaService.subscribeToSchema(schema.id);
        }
        else {
            this._schemaService.unsubscribeToSchema(schema.id);
        }
        setTimeout(function () {
            _this.buttons_disabled = false;
            _this.schemas.splice(schema, 1);
        }, 500);
    };
    UserSubscriptionSchemaComponent.prototype.handleError = function (response) {
        // do nothing as of now
        //this.error = response.message;
    };
    UserSubscriptionSchemaComponent = __decorate([
        core_1.Component({
            selector: "schema",
            templateUrl: "app/html/user-subscription-schema.component.html",
            directives: [user_actions_component_1.UserActionsComponent]
        }), 
        __metadata('design:paramtypes', [schema_service_1.SchemaService])
    ], UserSubscriptionSchemaComponent);
    return UserSubscriptionSchemaComponent;
}());
exports.UserSubscriptionSchemaComponent = UserSubscriptionSchemaComponent;
//# sourceMappingURL=user-subscription-schema.component.js.map