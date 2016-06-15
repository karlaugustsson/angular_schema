import { Injectable } from "@angular/core";
const Date = require("datejs");
@Injectable()

export class DateService{

	constructor(){
	
console.log(Date.today().next().friday());
	}
	test() {

	}

}