import {Component , Input , Output , EventEmitter , OnInit} from "@angular/core";
import {User} from "../classes/user";
import { Routes, ROUTER_DIRECTIVES,Router } from '@angular/router';
import { LoginService } from "../services/login.service";

@Component({
	selector: "login",
	templateUrl: "app/html/login.component.html",
	directives:[ROUTER_DIRECTIVES]

})

export class LoginComponent{

	user = new User("","","");
	submitted = false;
	valid:boolean = false;
	user_exist:boolean = false;
	error_messages;

	onSubmit() {
		
		this.error_messages = null;
	
			this.submitted = true;
			this._loginService.authorize(this.user.email, this.user.password).then(loginResponse => this.handle_login_response(loginResponse));
	}
	handle_login_response(loginResponse){
		if(loginResponse.error){
			this.error_messages = loginResponse.error;
		}

	}


	constructor(private _loginService:LoginService, private _router: Router ) {
	}

}