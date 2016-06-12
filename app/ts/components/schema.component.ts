import { Component , OnInit} from "@angular/core";
import { SchemaService } from "../services/schema.service";
@Component({
	selector: "schema",
	templateUrl:"app/html/schema.component.html",
})

export class SchemaComponent implements OnInit{
	constructor(private _schemaService:SchemaService){

	}

	ngOnInit(){
		this.getSchemas();
	}

	getSchemas(){
		this._schemaService.getSchemas();
	}

}