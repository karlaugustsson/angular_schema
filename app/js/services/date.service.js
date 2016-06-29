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
    DateService.prototype.makeDateObject = function (datestring) {
        return new Date(datestring);
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
    DateService.prototype.getYearofDate = function (date) {
        return Date.parse(date).toString("yyyy");
    };
    DateService.prototype.geyWeekOfDate = function (date) {
        return Date.parse(date).getWeek();
    };
    DateService.prototype.isDateToday = function (date) {
        return (Date.today().toString() == Date.parse(date).toString());
    };
    DateService.prototype.getMonthofDate = function (date) {
        return Date.parse(date).toString("MMMM");
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
        var week_end = this.getEndOfWeek(week_start);
        var week_number = this.geyWeekOfDate(week_start);
        var month = this.getMonthofDate(week_start);
        var year = this.getYearofDate(week_start);
        var days = this.getDaysBetween(week_start, week_end);
        return { week_start: week_start, week_end: week_end, week_number: week_number, month: month, year: year, days: days };
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
        var week_number = this.geyWeekOfDate(week_start);
        var month = this.getMonthofDate(week_start);
        var year = this.getYearofDate(week_start);
        var days = this.getDaysBetween(week_start, week_end);
        return { week_start: week_start, week_end: week_end, week_number: week_number, year: year, month: month, days: days };
    };
    DateService.prototype.getDaysBetween = function (start_date, end_date) {
        var is_today = this.isDateToday(start_date);
        var le_date = [{ day: Date.parse(start_date), is_today: is_today, label: null }];
        le_date[0].label = le_date[0].day.toString("dddd \n\r d/MM");
        while (le_date[le_date.length - 1].day.toString() != end_date.toString()) {
            var next_day = Date.parse(le_date[le_date.length - 1].day).add(1).days();
            var is_today_1 = this.isDateToday(next_day);
            le_date.push({ label: next_day.toString("dddd \n\r d/MM"), day: next_day, is_today: is_today_1 });
        }
        return le_date;
    };
    DateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DateService);
    return DateService;
}());
exports.DateService = DateService;
//# sourceMappingURL=date.service.js.map