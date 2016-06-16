import { Injectable } from "@angular/core";
const Date = require("datejs");
@Injectable()

export class DateService {

	constructor() {
	}

	getCurrentWeek() {

		let week_start = (Date.today().is().mon()) ? Date.today() : Date.today().last().mon();
		let week_end = (Date.today().is().sun()) ? Date.today() : Date.today().next().sun();
		let week_number = Date.parse(week_start).getWeek();
		let year = Date.parse(week_start).toString("yyyy")

		return { week_start: week_start, week_end: week_end, week_number: week_number,year:year}
	}
	getCurrentNextWeek(){
		let week_start = (Date.today().is().mon()) ? Date.today().add(7).days : Date.today().last().mon().add(7).days();
		let week_end  =  (Date.today().is().sun()) ? Date.today().add(7).days : Date.today().next().sun().add(7).days();
		let week_number = Date.parse(week_start).getWeek();
		let year = Date.parse(week_start).toString("yyyy");

		return { week_start: week_start, week_end: week_end, week_number: week_number,year:year}
		}
	getLastWeek(weekobj) {

		let week_start = weekobj.week_start.last().week();
		let week_end = Date.parse(week_start).next().sun();
		let week_number = Date.parse(week_start).getWeek();
		let year = Date.parse(week_start).toString("yyyy");

		return { week_start: week_start, week_end: week_end, week_number: week_number, year: year }
	}	
		getNextWeeek (weekobj){
		let week_start = weekobj.week_start.next().week();
		let week_end = Date.parse(week_start).next().sun();
		let week_number = Date.parse(week_start).getWeek();
		let year = Date.parse(week_start).toString("yyyy");

		return { week_start: week_start, week_end: week_end, week_number: week_number, year: year }
	}

}