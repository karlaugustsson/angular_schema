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
	key = {}; 
	login_url;


	constructor(private _http: HttpService , private _router:Router , private api_service:ApiService){
		this.authorized = false;
		this.api_service.getApiRoute("Authorize").then(route => this.login_url = route.server_url + route.url );
	
	}

	authorize(email: string = null, password: string = null) {

		if (this.password && this.email) {
			email = this.email;
			password = this.password
		}

		let body = JSON.stringify({ 'email': email, "password": password });
		return new Observable(observer => {
			console.log(observer);
			this._http.PostRequest(this.login_url, body).subscribe(response => observer.next(this.handleSuccess(response, email, password)));
		});

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
		return { key: "Authorization", value: "Bearer " + data.token };
		
	}
	getAuthUser() {
		return new Observable(observer => {
			this.api_service.getApiRoute("AuthUser").then(route => {
				this.get_authtoken().subscribe(token => {

					this._http.getRequest(route.server_url + route.url, [token]).subscribe(response => observer.next(response));
				});
			});
		});

	}

}