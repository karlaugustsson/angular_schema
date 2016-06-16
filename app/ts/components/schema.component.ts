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
	LeftWeek;
	RightWeek;
	ngOnInit(){
		this.getSchema();
		this.setTodaysCurrentWeek();
		this.setTodaysNextWeek()
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
		this.LeftWeek = this.goOneWeekBack(this.LeftWeek);
		this.RightWeek = this.goOneWeekBack(this.RightWeek);
		
	}

	}
	weekGoRight() {
		for (var i = 0; i < 2  i++) {
			this.LeftWeek = this.goOneWeekAhead(this.LeftWeek);
			this.RightWeek = this.goOneWeekAhead(this.RightWeek);


		}
	}
	setTodaysCurrentWeek( ){
		this.LeftWeek = this._dateService.getCurrentWeek();
	}
	setTodaysNextWeek(){
		this.RightWeek = this._dateService.getCurrentNextWeek();
	}
	goOneWeekBack(weekObj){

		return this._dateService.getLastWeek(weekObj)

	}
	goOneWeekAhead(weekObj){
		return this._dateService.getNextWeek(weekObj)
	}

}