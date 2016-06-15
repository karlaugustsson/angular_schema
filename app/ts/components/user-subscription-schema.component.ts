import { Component , OnInit} from "@angular/core";
import { SchemaService } from "../services/schema.service";
import { UserActionsComponent} from "./user-actions.component";
@Component({
	selector: "schema",
	templateUrl:"app/html/user-subscription-schema.component.html",
	directives:[UserActionsComponent]
})

export class UserSubscriptionSchemaComponent implements OnInit{
	error;
	schemas;
	buttons_disabled: boolean = false;
	constructor(private _schemaService:SchemaService){

	}

	ngOnInit(){
		this.getUserSubscribedSchemas();
	}

	getUserSubscribedSchemas(){
		return this._schemaService.getUserSubscribedSchemas().then((response) => { this.handleSuccess(response) },(error) => this.handleError(error));
	}

	handleSuccess(response) {

	this.schemas = response;


	}

	handleError(response){
		
		this.error = response.message;
	}

}