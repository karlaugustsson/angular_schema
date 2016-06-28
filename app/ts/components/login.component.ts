import {Component , Input , Output , EventEmitter , OnInit} from "@angular/core";
import {User} from "../classes/user";
import { Router} from '@angular/router-deprecated';
import { LoginService } from "../services/login.service";

@Component({
	selector: "login",
	templateUrl: "app/html/login.component.html",

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
			this._loginService.authorize(this.user.email, this.user.password).subscribe(errorResponse => this.handle_login_response(errorResponse));
	}
	handle_login_response(loginResponse){
		if(!loginResponse){
			return;
		}
		
		if(loginResponse.error != null){
			
			this.error_messages = loginResponse.error;
		}
		this._router.navigate(["Dashboard"])

	}


	constructor(private _loginService:LoginService, private _router: Router ) {
	}

}