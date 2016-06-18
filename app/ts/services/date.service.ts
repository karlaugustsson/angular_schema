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

	private getYearofDate(date){

		return Date.parse(date).toString("yyyy")
	}
	private geyWeekOfDate(date){
		return Date.parse(date).getWeek();
	}

	private isDateToday(date){
	return (Date.today().toString() == Date.parse(date).toString());
	}
	getNumWeeksAfterDate(num: number, start_date = false) {

		let num_weeks = num * 7;
		let week_start = null;

		if(!start_date){
			week_start = this.getStartOfWeek().add(num_weeks).days();	
		}else{
			week_start = this.getStartOfWeek(start_date).add(num_weeks).days();	
		}

		let week_end = this.getEndOfWeek(week_start);
		let week_number = this.geyWeekOfDate(week_start);
		let year = this.getYearofDate(week_start);
		let days = this.getDaysBetween(week_start, week_end);
		
		return { week_start: week_start, week_end: week_end, week_number: week_number, year: year,days:days }

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
		let week_number = this.geyWeekOfDate(week_start);
		let year = this.getYearofDate(week_start);
		let days = this.getDaysBetween(week_start, week_end);

		return {week_start: week_start, week_end: week_end, week_number: week_number, year: year , days:days}
	}

		getDaysBetween(start_date, end_date) {
			let is_today = this.isDateToday(start_date);
			let le_date = [{ day: Date.parse(start_date), is_today: is_today }];
			le_date[0].label = le_date[0].day.toString("dddd \n\r d/MM")
			while (le_date[le_date.length -1].day.toString() != end_date.toString()){
				let next_day = Date.parse(le_date[le_date.length - 1].day).add(1).days();
				let is_today = this.isDateToday(next_day);
				le_date.push({ label:next_day.toString("dddd \n\r d/MM"),day:next_day,is_today:is_today });
				
			}

			return le_date;
		}

}