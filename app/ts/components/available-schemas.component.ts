import { Component , OnInit} from "@angular/core";
import { UserActionsComponent } from "./user-actions.component";
import {SchemaService} from "../services/schema.service";

@Component({
	selector:"available-schemas",
	templateUrl:"app/html/available-schemas.component.html",
	directives:[UserActionsComponent]
})

export class AvailableSchemasComponent implements OnInit{
	constructor(private _schemaservice:SchemaService){

	}
	ngOnInit(){
		this.get_subscribable_schemas();
	}

	get_subscribable_schemas(){
		this._schemaservice.getSubscribableSchemas();
	}

}