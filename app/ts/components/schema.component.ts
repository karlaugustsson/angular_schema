import {Component, OnInit} from "@angular/core";
import { RouteParams , Router} from '@angular/router-deprecated';
import { SchemaService } from "../services/schema.service";
import { DateService } from "../services/date.service";
import { LoginService } from "../services/login.service";
@Component({
	selector: "schema",
	templateUrl: "app/html/schema.component.html",
	providers: [DateService]
})
export class SchemaComponent implements OnInit {
	schemaId: string = null;
	schema;
	schemaWeeks: Array<any> = [];
	showNumWeeks:number = 2;
	less: boolean = true;
	schemaBlocks:Array<any> = [];
	auth_user = null ;

	changeNumberOfWeeks(less: boolean) {
		this.less = less;
		if (less) {
			if (this.schemaWeeks.length != 2) {
				this.schemaWeeks.splice(2, 2);
			}
		} else {
			if (this.schemaWeeks.length == 2) {
				for (var i = 0; i < 2; i++) {
					

					this.schemaWeeks.push(this.goNumWeeksAhead(1,this.schemaWeeks[this.schemaWeeks.length -1 ]));
				}
			
			}
		}
	}

	ngOnInit(){
		this.getSchema();
		this.setWeeks(this.showNumWeeks);
		this.getUserSchemas();
		
	}
	constructor(private router_params:RouteParams,private _router:Router ,private  _schemaService:SchemaService , private _dateService:DateService , private _loginService:LoginService){

    this.schemaId = this.router_params.get("id");
	    if (!this.schemaId) {
			this._router.navigate(["DashBoard"]);
    	}
	}

	getSchema(){

		this._schemaService.getSchema(this.schemaId).subscribe(response =>  this.schema = response  );

	}
	getUserSchemas(){

		this._loginService.getAuthUser().subscribe(response => { this.auth_user = response; this.getSchemaBlocks()});
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
	
	}
	goNumWeeksBack(num , weekObj) {

		return this._dateService.getNumWeeksBeforeDate(num, weekObj.week_start);

	}
	goNumWeeksAhead(num, weekObj) {
		return this._dateService.getNumWeeksAfterDate(num, weekObj.week_start);
	}
	getSchemaBlocks(){
console.log("hepp");
		for (var i = 0; i <= this.schemaWeeks.length -1; i++) {
			
			this._schemaService.getSchemaBlocks(this.schemaId,this.schemaWeeks[i].week_start,this.schemaWeeks[i].week_end , this.auth_user.id ).subscribe(response => {this.schemaBlocks.push(response)});
		}
	
		
	}

}