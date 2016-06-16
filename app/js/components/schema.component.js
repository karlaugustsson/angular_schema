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
var SchemaComponent = (function () {
    function SchemaComponent(router_params, _router, _schemaService, _dateService) {
        this.router_params = router_params;
        this._router = _router;
        this._schemaService = _schemaService;
        this._dateService = _dateService;
        this.schemaId = null;
        this.schemaWeeks = [];
        this.showNumWeeks = 2;
        this.less = true;
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
                    console.log(this.schemaWeeks[this.schemaWeeks.length - 1]);
                    this.schemaWeeks.push(this.goOneWeekAhead(this.schemaWeeks[this.schemaWeeks.length - 1]));
                }
                console.log(this.schemaWeeks);
            }
        }
    };
    SchemaComponent.prototype.ngOnInit = function () {
        this.getSchema();
        this.setWeeks(this.showNumWeeks);
    };
    SchemaComponent.prototype.getSchema = function () {
        var _this = this;
        this._schemaService.getSchema(this.schemaId).then(function (response) { _this.handleSucces(response); }, function (response) { _this.handleError(response); });
    };
    SchemaComponent.prototype.handleSucces = function (response) {
        console.log(response);
        this.schema = response;
    };
    SchemaComponent.prototype.handleError = function (response) {
        console.log(response);
        //this._router.navigate(["Dashboard"]);
    };
    SchemaComponent.prototype.weekGoLeft = function () {
        for (var i = 0; i < this.schemaWeeks.length; i++) {
            for (var j = 0; j < this.schemaWeeks.length; j++) {
                this.schemaWeeks[j] = this.goOneWeekBack(this.schemaWeeks[j]);
            }
        }
    };
    SchemaComponent.prototype.weekGoRight = function () {
        for (var i = 0; i < this.schemaWeeks.length; i++) {
            for (var j = 0; j < this.schemaWeeks.length; j++) {
                this.schemaWeeks[j] = this.goOneWeekAhead(this.schemaWeeks[j]);
            }
        }
    };
    SchemaComponent.prototype.setWeeks = function (numberOfWeeks) {
        for (var i = 0; i < numberOfWeeks; i++) {
            console.log(0);
            this.schemaWeeks.push(this._dateService.getNumWeeksAfterCurrentWeek(i));
            console.log(this.schemaWeeks);
        }
    };
    SchemaComponent.prototype.goOneWeekBack = function (weekObj) {
        return this._dateService.getLastWeek(weekObj);
    };
    SchemaComponent.prototype.goOneWeekAhead = function (weekObj) {
        return this._dateService.getNextWeek(weekObj);
    };
    SchemaComponent = __decorate([
        core_1.Component({
            selector: "schema",
            templateUrl: "app/html/schema.component.html",
            providers: [date_service_1.DateService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router, schema_service_1.SchemaService, date_service_1.DateService])
    ], SchemaComponent);
    return SchemaComponent;
}());
exports.SchemaComponent = SchemaComponent;
//# sourceMappingURL=schema.component.js.map