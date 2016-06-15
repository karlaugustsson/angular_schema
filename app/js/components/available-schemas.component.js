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
var user_actions_component_1 = require("./user-actions.component");
var schema_service_1 = require("../services/schema.service");
var AvailableSchemasComponent = (function () {
    function AvailableSchemasComponent(_schemaservice) {
        this._schemaservice = _schemaservice;
        this.schemas = [];
        this.buttons_disabled = false;
        this.fetched_data = false;
    }
    AvailableSchemasComponent.prototype.ngOnInit = function () {
        this.get_subscribable_schemas();
    };
    AvailableSchemasComponent.prototype.get_subscribable_schemas = function () {
        var _this = this;
        this._schemaservice.getSubscribableSchemas().then(function (response) { _this.handleSuccess(response); _this.fetched_data = true; }, function (response) { return _this.handleError(response); });
    };
    AvailableSchemasComponent.prototype.handleError = function (response) {
        //do nothing as of now if left on it is just annoying
        //this.error = response.message;
    };
    AvailableSchemasComponent.prototype.handleSuccess = function (response) {
        this.schemas = response;
    };
    AvailableSchemasComponent.prototype.change_subscription = function (schema) {
        var _this = this;
        this.buttons_disabled = true;
        if (schema.is_subscriber == false) {
            this._schemaservice.subscribeToSchema(schema.id);
        }
        else {
            this._schemaservice.unsubscribeToSchema(schema.id);
        }
        setTimeout(function () {
            _this.buttons_disabled = false;
            schema.is_subscriber = !schema.is_subscriber;
        }, 500);
    };
    AvailableSchemasComponent = __decorate([
        core_1.Component({
            selector: "available-schemas",
            templateUrl: "app/html/available-schemas.component.html",
            directives: [user_actions_component_1.UserActionsComponent]
        }), 
        __metadata('design:paramtypes', [schema_service_1.SchemaService])
    ], AvailableSchemasComponent);
    return AvailableSchemasComponent;
}());
exports.AvailableSchemasComponent = AvailableSchemasComponent;
//# sourceMappingURL=available-schemas.component.js.map