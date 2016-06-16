import {Component, OnInit} from "@angular/core";
import { RouteParams , Router} from '@angular/router-deprecated';
import { SchemaService } from "../services/schema.service";
import { DateService } from "../services/date.service";
@Component({
	selector: "schema",
	templateUrl:"app/html/schema.component.html",
	providers:[DateService]
})
export class SchemaComponent implements OnInit{
	schemaId:string = null;
	schema;
	schemaWeeks:Array<any> = [];
	showNumWeeks = 2;
	ngOnInit(){
		this.getSchema();
		this.setWeeks(this.showNumWeeks);
	}
	constructor(private router_params:RouteParams,private _router:Router ,private  _schemaService:SchemaService , private _dateService:DateService){

    this.schemaId = this.router_params.get("id");
	    if (!this.schemaId) {
			this._router.navigate(["DashBoard"]);
    	}
	}

	getSchema(){
		this._schemaService.getSchema(this.schemaId).then(response => { this.handleSucces(response) }, response => { this.handleError(response) });

	}
	handleSucces(response) {
		console.log(response);
		this.schema = response;
	}
	handleError(response){
		console.log(response);
		//this._router.navigate(["Dashboard"]);
	}
	weekGoLeft(){
		for (var i = 0; i < 2; i++) {
			for (var j = 0; j < this.schemaWeeks.length; j++) {
				this.schemaWeeks[j] = this.goOneWeekBack(this.schemaWeeks[j]);
		
			
			}
		}
	}
	weekGoRight() {
		for (var i = 0; i < 2; i++) {
			for (var j = 0; j < this.schemaWeeks.length; j++) {
				this.schemaWeeks[j] = this.goOneWeekAhead(this.schemaWeeks[j]);
		
			
			}
		}
	}
	setWeeks(numberOfWeeks){
		for (var i = 0; i < numberOfWeeks; i++) {
			console.log(0);
			this.schemaWeeks.push(this._dateService.getNumWeeksAfterCurrentWeek(i));
			console.log(this.schemaWeeks);
		}
	}
	goOneWeekBack(weekObj) {

		return this._dateService.getLastWeek(weekObj)

	}
	goOneWeekAhead(weekObj){
		return this._dateService.getNextWeeek(weekObj);
	}

}