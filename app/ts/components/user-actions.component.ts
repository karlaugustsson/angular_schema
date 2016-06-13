import { Component , OnInit } from "@angular/core";
import {UserService} from "../services/user.service"
import { RouteConfig , ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {UserSchemaComponent} from "./schema.component";
@Component({
	selector: "user-actions",
	templateUrl:"/app/html/user-actions.component.html",

	

})


export class UserActionsComponent implements OnInit{


	ngOnInit(){
		//this.getUserActionLinks()
	}

	constructor(private _userService:UserService){

	}

}