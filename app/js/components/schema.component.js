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
var schema_service_1 = require("../services/schema.service");
var date_service_1 = require("../services/date.service");
var login_service_1 = require("../services/login.service");
var SchemaComponent = (function () {
    function SchemaComponent(router_params, _router, _schemaService, _dateService, _loginService) {
        this.router_params = router_params;
        this._router = _router;
        this._schemaService = _schemaService;
        this._dateService = _dateService;
        this._loginService = _loginService;
        this.schemaId = null;
        this.schemaWeeks = [];
        this.showNumWeeks = 2;
        this.less = true;
        this.schemaBlocks = [];
        this.auth_user = null;
        this.schemaId = this.router_params.get("id");
        if (!this.schemaId) {
            this._router.navigate(["DashBoard"]);
        }
    }
    SchemaComponent.prototype.changeNumberOfWeeks = function (less) {
        this.less = less;
        if (less) {
            if (this.schemaWeeks.length != 2) {
                this.schemaWeeks.splice(2, 2);
            }
        }
        else {
            if (this.schemaWeeks.length == 2) {
                for (var i = 0; i < 2; i++) {
                    this.schemaWeeks.push(this.goNumWeeksAhead(1, this.schemaWeeks[this.schemaWeeks.length - 1]));
                }
            }
        }
    };
    SchemaComponent.prototype.ngOnInit = function () {
        this.getSchema();
        this.setWeeks(this.showNumWeeks);
        this.getUserSchemas();
    };
    SchemaComponent.prototype.getSchema = function () {
        var _this = this;
        this._schemaService.getSchema(this.schemaId).subscribe(function (response) { return _this.schema = response; });
    };
    SchemaComponent.prototype.getUserSchemas = function () {
        var _this = this;
        this._loginService.getAuthUser().subscribe(function (response) { _this.auth_user = response; _this.getSchemaBlocks(); });
    };
    SchemaComponent.prototype.handleError = function (response) {
        console.log(response);
        //this._router.navigate(["Dashboard"]);
    };
    SchemaComponent.prototype.weekGoLeft = function () {
        for (var i = 0; i < this.schemaWeeks.length; i++) {
            this.schemaWeeks[i] = this.goNumWeeksBack(this.schemaWeeks.length, this.schemaWeeks[i]);
        }
    };
    SchemaComponent.prototype.weekGoRight = function () {
        for (var i = 0; i < this.schemaWeeks.length; i++) {
            this.schemaWeeks[i] = this.goNumWeeksAhead(this.schemaWeeks.length, this.schemaWeeks[i]);
        }
    };
    SchemaComponent.prototype.setWeeks = function (numberOfWeeks) {
        for (var i = 0; i < numberOfWeeks; i++) {
            this.schemaWeeks.push(this._dateService.getNumWeeksAfterDate(i));
        }
    };
    SchemaComponent.prototype.goNumWeeksBack = function (num, weekObj) {
        return this._dateService.getNumWeeksBeforeDate(num, weekObj.week_start);
    };
    SchemaComponent.prototype.goNumWeeksAhead = function (num, weekObj) {
        return this._dateService.getNumWeeksAfterDate(num, weekObj.week_start);
    };
    SchemaComponent.prototype.getSchemaBlocks = function () {
        var _this = this;
        console.log("hepp");
        for (var i = 0; i <= this.schemaWeeks.length - 1; i++) {
            this._schemaService.getSchemaBlocks(this.schemaId, this.schemaWeeks[i].week_start, this.schemaWeeks[i].week_end, this.auth_user.id).subscribe(function (response) { _this.schemaBlocks.push(response); });
        }
    };
    SchemaComponent = __decorate([
        core_1.Component({
            selector: "schema",
            templateUrl: "app/html/schema.component.html",
            providers: [date_service_1.DateService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router, schema_service_1.SchemaService, date_service_1.DateService, login_service_1.LoginService])
    ], SchemaComponent);
    return SchemaComponent;
}());
exports.SchemaComponent = SchemaComponent;
//# sourceMappingURL=schema.component.js.map