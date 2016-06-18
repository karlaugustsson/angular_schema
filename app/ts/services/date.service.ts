import { Injectable } from "@angular/core";
const Date = require("datejs");
@Injectable()

export class DateService {


	private getStartOfWeek(date = false) {
		let monday = null;

		if(date){
			monday = Date.parse(date)
		}else{
			monday = Date.today();
		}

		if(monday.is().mon()){
			return monday;
		}
		return monday.last().mon();


	}
	private getEndOfWeek(date = false) {
		let sunday = null;

		if (date) {
			sunday = Date.parse(date)
		} else {
			sunday = Date.today();
		}

		if (sunday.is().sun()) {
			return sunday;
		}
		return sunday.next().sun();

	}
	getNumWeeksAfterDate(num: number, start_date = false) {

		let num_weeks = num * 7;
		let week_start = null;

		if(!start_date){
			week_start = this.getStartOfWeek().add(num_weeks).days();	
		}else{
			week_start = this.getStartOfWeek(start_date).add(num_weeks).days();	
		}

		let week_end = this.getEndOfWeek(week_start).add(num_weeks).days();
		
		let week_number = Date.parse(week_start).getWeek();
		let year = Date.parse(week_start).toString("yyyy")
		return { week_start: week_start, week_end: week_end, week_number: week_number, year: year }

	}	
	getNumWeeksBeforeDate(num: number, start_date = false) {

		let num_weeks = - (num * 7);
		let week_start = null;
		
		if(!start_date){
		 week_start = this.getStartOfWeek().add(num_weeks).days();	
		}else{
		 week_start = this.getStartOfWeek(start_date).add(num_weeks).days();	
		}

		let week_end = this.getEndOfWeek(week_start);
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