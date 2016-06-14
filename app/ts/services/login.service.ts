import { Injectable ,OnInit} from "@angular/core";
import { ROUTE } from "../classes/route";
import { HttpService } from "./http.service";
import { Router } from '@angular/router-deprecated';
import { Observable } from 'rxjs/Rx';
import { ApiService } from "./api.service";

@Injectable()
export class LoginService{
	email: string = "karl.augustsson@gmail.com";
	password: string = "password";
	authorized: boolean;

	login_url;

	constructor(private _http: HttpService , private _router:Router , private api_service:ApiService){
		
		this.authorized = false;
		this.api_service.getApiRoute("Authorize").then(route => this.login_url = route.server_url + route.url );
		setTimeout(()=>{},2000)
	}

	authorize(email: string = null, password: string = null): Promise<any> {

		if (this.password && this.email) {
			email = this.email;
			password = this.password
		}

		let body = JSON.stringify({ 'email': email, "password": password });
		return this._http.PostRequest(this.login_url, body).then(data => this.handleSuccess(data, email, password) );
	}

	get_authtoken() {
		this.isAuthorized();
		return this.authorize();

	}
	isAuthorized() {
		if (!this.authorize) {

			this._router.navigate(["/login"])
		}
	}
	handleError(error) {
		console.log(error);
		if(error._body == undefined){
			return;
		}
		let errMsg = JSON.parse(error._body).errors;
		
		return errMsg;
	}

	handleSuccess(data,email,password){
		
		this.email = email;
		this.password = password;
		this.authorized = true;
	
		return {key:"Authorization" , value: "Bearer " + data.token };
	}

}