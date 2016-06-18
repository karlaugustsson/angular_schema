import {Component, OnInit} from "@angular/core";
import { RouteParams , Router} from '@angular/router-deprecated';
import { SchemaService } from "../services/schema.service";
import { DateService } from "../services/date.service";
@Component({
	selector: "schema",
	templateUrl: "app/html/schema.component.html",
	providers: [DateService]
})
export class SchemaComponent implements OnInit {
	schemaId: string = null;
	schema;
	schemaWeeks: Array<any> = [];
	showNumWeeks = 2;
	less: boolean = true;

	changeNumberOfWeeks(less: boolean) {
		this.less = less;
		if (less) {
			if (this.schemaWeeks.length != 2) {
				this.schemaWeeks.splice(2, 2);
			}
		} else {
			if (this.schemaWeeks.length == 2) {
				for (var i = 0; i < 2; i++) {
					console.log(this.schemaWeeks[this.schemaWeeks.length -1]);

					this.schemaWeeks.push(this.goNumWeeksAhead(1,this.schemaWeeks[this.schemaWeeks.length -1 ]));
				}
				console.log(this.schemaWeeks);
			}
		}
	}

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
		for (var i = 0; i < this.schemaWeeks.length ; i++) {

		this.schemaWeeks[i] = this.goNumWeeksBack(this.schemaWeeks.length ,this.schemaWeeks[i]);
		}
	}
	weekGoRight() {
		for (var i = 0; i < this.schemaWeeks.length ;  i++) {
			this.schemaWeeks[i] = this.goNumWeeksAhead(this.schemaWeeks.length  ,this.schemaWeeks[i]);
		}
	}
	setWeeks(numberOfWeeks) {
		for (var i = 0; i < numberOfWeeks; i++) {

			this.schemaWeeks.push(this._dateService.getNumWeeksAfterDate(i));
		
		}
		console.log(this.schemaWeeks);
	}
	goNumWeeksBack(num , weekObj) {

		return this._dateService.getNumWeeksBeforeDate(num, weekObj.week_start);

	}
	goNumWeeksAhead(num, weekObj) {
		return this._dateService.getNumWeeksAfterDate(num, weekObj.week_start);
	}

}