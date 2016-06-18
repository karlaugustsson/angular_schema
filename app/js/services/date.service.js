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
    DateService.prototype.getStartOfWeek = function (date) {
        if (date === void 0) { date = false; }
        var monday = null;
        if (date) {
            monday = Date.parse(date);
        }
        else {
            monday = Date.today();
        }
        if (monday.is().mon()) {
            return monday;
        }
        return monday.last().mon();
    };
    DateService.prototype.getEndOfWeek = function (date) {
        if (date === void 0) { date = false; }
        var sunday = null;
        if (date) {
            sunday = Date.parse(date);
        }
        else {
            sunday = Date.today();
        }
        if (sunday.is().sun()) {
            return sunday;
        }
        return sunday.next().sun();
    };
    DateService.prototype.getNumWeeksAfterDate = function (num, start_date) {
        if (start_date === void 0) { start_date = false; }
        var num_weeks = num * 7;
        var week_start = null;
        if (!start_date) {
            week_start = this.getStartOfWeek().add(num_weeks).days();
        }
        else {
            week_start = this.getStartOfWeek(start_date).add(num_weeks).days();
        }
        var week_end = this.getEndOfWeek(week_start).add(num_weeks).days();
        var week_number = Date.parse(week_start).getWeek();
        var year = Date.parse(week_start).toString("yyyy");
        return { week_start: week_start, week_end: week_end, week_number: week_number, year: year };
    };
    DateService.prototype.getNumWeeksBeforeDate = function (num, start_date) {
        if (start_date === void 0) { start_date = false; }
        var num_weeks = -(num * 7);
        var week_start = null;
        if (!start_date) {
            week_start = this.getStartOfWeek().add(num_weeks).days();
        }
        else {
            week_start = this.getStartOfWeek(start_date).add(num_weeks).days();
        }
        var week_end = this.getEndOfWeek(week_start);
        var week_number = Date.parse(week_start).getWeek();
        var year = Date.parse(week_start).toString("yyyy");
        return { week_start: week_start, week_end: week_end, week_number: week_number, year: year };
    };
    DateService.prototype.getDaysBetween = function (start_date, end_date) {
        var le_date = [Date.parse(start_date)];
        while (le_date[le_date.length - 1] != end_date) {
            le_date.push(Date.parse(le_date[le_date.length - 1].add(1).days()));
        }
        return Date;
    };
    DateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DateService);
    return DateService;
}());
exports.DateService = DateService;
//# sourceMappingURL=date.service.js.map