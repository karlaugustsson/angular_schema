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
var Date = require("datejs");
var DateService = (function () {
    function DateService() {
    }
    DateService.prototype.getCurrentWeek = function () {
        var week_start = (Date.today().is().mon()) ? Date.today() : Date.today().last().mon();
        var week_end = (Date.today().is().sun()) ? Date.today() : Date.today().next().sun();
        var week_number = Date.parse(week_start).getWeek();
        var year = Date.parse(week_start).toString("yyyy");
        return { week_start: week_start, week_end: week_end, week_number: week_number, year: year };
    };
    DateService.prototype.getCurrentNextWeek = function () {
        var week_start = (Date.today().is().mon()) ? Date.today().add(7).days : Date.today().last().mon().add(7).days();
        var week_end = (Date.today().is().sun()) ? Date.today().add(7).days : Date.today().next().sun().add(7).days();
        var week_number = Date.parse(week_start).getWeek();
        var year = Date.parse(week_start).toString("yyyy");
        return { week_start: week_start, week_end: week_end, week_number: week_number, year: year };
    };
    DateService.prototype.getLastWeek = function (weekobj) {
        var week_start = weekobj.week_start.last().week();
        var week_end = Date.parse(week_start).next().sun();
        var week_number = Date.parse(week_start).getWeek();
        var year = (week_number == 1) ? Date.parse(week_end).toString("yyyy") : Date.parse(week_start).toString("yyyy");
        console.log({ week_start: week_start, week_end: week_end, week_number: week_number, year: year });
        return { week_start: week_start, week_end: week_end, week_number: week_number, year: year };
    };
    DateService.prototype.getNextWeeek = function (weekobj) {
        console.log(weekobj);
    };
    DateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DateService);
    return DateService;
}());
exports.DateService = DateService;
//# sourceMappingURL=date.service.js.map