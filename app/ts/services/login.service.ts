import { Injectable ,OnInit} from "@angular/core";
import { ROUTE } from "../classes/route";
import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { Observable } from 'rxjs/Rx';
import { ApiService } from "./api.service";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class LoginService{
	email: string = "karl.augustsson@gmail.com";
	password: string = "password";
	authorized: boolean;

	login_url;

	constructor(private _http: Http , private _router:Router , private api_service:ApiService){
		
		this.authorized = false;
		this.api_service.getApiRoute("Authorize").then(route => this.login_url = route );
		setTimeout(()=>{},2000)
	}

	authorize(email: string = null, password: string = null): Promise<any> {

		console.log(this.login_url);
		if (this.password && this.email) {
			email = this.email;
			password = this.password
		}

		let headers = new Headers({ 'Content-Type': 'application/json' } );
		let options = new RequestOptions({ headers: headers });

	
			return this._http.post(this.login_url.server_url + this.login_url.url, JSON.stringify({ 'email': email, "password": password }), options).toPromise().then(data => this.handleSuccess(data,email,password)).catch(this.handleError);


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
		
		return Observable.throw(errMsg);
	}

	handleSuccess(data,email,password){
		let result = data.json();
		
		this.email = email;
		this.password = password;
		this.authorized = true;
	
		return result.token;
		//return this._router.navigate(["Dashboard"]);
	}

}