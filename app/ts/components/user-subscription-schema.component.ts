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
	schemas = [];
	buttons_disabled: boolean = false;
	fetched_data = false;
	constructor(private _schemaService:SchemaService){

	}

	ngOnInit(){
		this.getUserSubscribedSchemas();
	}

	getUserSubscribedSchemas(){
		return this._schemaService.getUserSubscribedSchemas().then((response) => { this.handleSuccess(response); this.fetched_data = true; }, (error) => { this.handleError(error); this.fetched_data = true;});
	}

	handleSuccess(response) {

	this.schemas = response;


	}
	change_subscription(schema){
		this.buttons_disabled = true;
	if ( schema.is_subscriber == false ){
				this._schemaService.subscribeToSchema(schema.id);
			
		
		} else {
	
			this._schemaService.unsubscribeToSchema(schema.id);
		
		}
		setTimeout(()=>{
			this.buttons_disabled = false;
			this.schemas.splice(schema, 1);
		},500)

	}

	handleError(response){
		// do nothing as of now
		//this.error = response.message;
	}

}