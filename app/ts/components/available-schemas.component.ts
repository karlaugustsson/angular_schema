import { Component , OnInit} from "@angular/core";
import { UserActionsComponent } from "./user-actions.component";
import {SchemaService} from "../services/schema.service";

@Component({
	selector:"available-schemas",
	templateUrl:"app/html/available-schemas.component.html",
	directives:[UserActionsComponent]
})

export class AvailableSchemasComponent implements OnInit{
	schemas = [];
	error;
	buttons_disabled: boolean = false;
	fetched_data = false;
	constructor(private _schemaservice:SchemaService){

	}
	ngOnInit(){
		this.get_subscribable_schemas();
	}

	get_subscribable_schemas(){
		this._schemaservice.getSubscribableSchemas().then(response => { this.handleSuccess(response); this.fetched_data = true;},response =>  this.handleError(response));

	}

	handleError(response){
		//do nothing as of now if left on it is just annoying
		//this.error = response.message;
	}
	handleSuccess(response){
 
		this.schemas = response;
	}
	change_subscription(schema){
		this.buttons_disabled = true;

		if ( schema.is_subscriber == false ){

			this._schemaservice.subscribeToSchema(schema.id);
			
		
		} else {
	
			this._schemaservice.unsubscribeToSchema(schema.id);
		
		}
		setTimeout(()=>{
			this.buttons_disabled = false;
			schema.is_subscriber = !schema.is_subscriber;
		},500)

	}

}