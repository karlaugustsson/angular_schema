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
		//this._schemaService.getUserSubscribedSchemas().then((response) => {this.process_response(response)});
	}

	process_response(response){
		if (response) {
			if (response.error){
				this.error = response.error;
			}else{

				this.schemas = response;
			}

		}

		return false;
	}

}