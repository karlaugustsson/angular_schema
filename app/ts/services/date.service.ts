import { Injectable } from "@angular/core";
const Date = require("datejs");
@Injectable()

export class DateService {

	constructor() {
	}

	getNumWeeksAfterDate(num: number, start_date = false) {

		let num_weeks = num * 7;
		let week_start = null;

		if(!start_date){
			week_start = (Date.today().is().mon()) ? Date.today().add(num_weeks).days() : Date.today().last().mon().add(num_weeks).days();	
		}else{
			week_start = Date.parse(start_date).add(num_weeks).days();	
		}

		let week_end = (Date.parse(week_start).is().sun()) ? Date.parse(week_start).add(num_weeks).days() : Date.parse(week_start).next().sun().add(num_weeks).days();
		let week_number = Date.parse(week_start).getWeek();
		let year = Date.parse(week_start).toString("yyyy")
		return { week_start: week_start, week_end: week_end, week_number: week_number, year: year }

	}	
	getNumWeeksBeforeDate(start_date = false,num:number) {

		let num_weeks = - (num * 7);
		let week_start = null;
		
		if(!start_date){
		 week_start = (Date.today().is().mon()) ? Date.today().add(num_weeks).days() : Date.today().last().mon().add(num_weeks).days();	
		}else{
		 week_start = Date.parse(start_date).add(num_weeks).days();	
		}

		let week_end = Date.parse(week_start).next().sun();
		let week_number = Date.parse(week_start).getWeek();
		let year = Date.parse(week_start).toString("yyyy");

		return {week_start: week_start, week_end: week_end, week_number: week_number, year: year}
	}

		getDaysBetween(start_date, end_date) {
			let le_date = [Date.parse(start_date)];
			while (le_date[le_date.length -1] != end_date){
				le_date.push(Date.parse(le_date[le_date.length - 1].add(1).days()));
			}

			return Date;
		}

}