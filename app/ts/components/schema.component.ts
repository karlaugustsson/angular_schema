import { Component , OnInit} from "@angular/core";
import { SchemaService } from "../services/schema.service";
import { UserActionsComponent} from "./user-actions.component";
@Component({
	selector: "schema",
	templateUrl:"app/html/user-schema.component.html",
	directives:[UserActionsComponent]
})

export class UserSchemaComponent implements OnInit{
	error;
	schemas;
	constructor(private _schemaService:SchemaService){

	}

	ngOnInit(){
		this.getUserSubscribedSchemas();
	}

	getUserSubscribedSchemas(){
		return this._schemaService.getUserSubscribedSchemas().then((success) => { console.log(success) }, (failure) => { console.log(failure) });
	}

	process_response(response) {
		if (response) {
			if (typeof response =="string"){
				this.error = response;
			}else{

				this.schemas = response;
			}

		}

		return false;
	}

}