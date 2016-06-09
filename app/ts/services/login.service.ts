import { Injectable } from "@angular/core";
import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from '@angular/http';
import { Routes, ROUTER_DIRECTIVES,Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class LoginService {
	email: string;
	password: string;
	authorized: boolean;

	login_url: string = "http://localhost:8000/api/v1/authorize";

	constructor(private _http: Http , private _router:Router){

		this.authorized = false;	

	}

	authorize(email:string = null, password:string = null):Promise<any> {
		if(this.password && this.email){
			email = this.email;
			password = this.password
		}

		let headers = new Headers({ 'Content-Type': 'application/json', "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTQ2NDY4MjA4MywiZXhwIjoxNDY0Njg1NjgzLCJuYmYiOjE0NjQ2ODIwODMsImp0aSI6ImVjMzczOGJiNzNiNmE4MGEzYjJmZjc0ODkxODJjZGVjIn0.3Q6lQ5hcOsB2YML-AsO8gvuOxJbgg-eaNAiR6Tb072U" });
		let options = new RequestOptions({ headers: headers });


		//headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhb G ciOiJIU zI1NiJ9.eyJzdWIiOjQsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTQ2NDY4MjA4MywiZXhwIjoxNDY0Njg1NjgzLCJuYmYiOjE0NjQ2ODIwODMsImp0aSI6ImVjMzczOGJiNzNiNmE4MGEzYjJmZjc0ODkxODJjZGVjIn0.3Q6lQ5hcOsB2YML-AsO8gvuOxJbgg-eaNAiR6Tb072U');

		return this._http.post(this.login_url, JSON.stringify({ 'email': email, "password": password }), options).toPromise().then(data => this.handleSuccess(data,email,password)).catch(this.handleError);
	}
	get_authtoken() {
		this.isAuthorized();
		return this.authorize();

	}
	isAuthorized() {
		if ( !this.authorize ){
			this._router.navigate(["/login"])
		}
	}
	handleError(error) {

		let errMsg = JSON.parse(error._body).errors;
		
		return Observable.throw(errMsg);
	}

	handleSuccess(data,email,password){
		let result = data.json();
	
		this.email = email;
		this.password = password;
		this.authorized = true;
		this._router.navigate(["/dashboard"])
		return result.token;
	}

}