import {Injectable} from "@angular/core";
import { ApiService } from "./api.service";
import { LoginService } from "./login.service";
import {HttpService} from "./http.service";
import { Observable } from 'rxjs/Rx';
@Injectable()

export class SchemaService {


	constructor(private _httpService:HttpService,private _apiService: ApiService , private _loginService:LoginService) {

		
	}

	getUserSubscribedSchemas() {
		return this._apiService.getApiRoute("userSchemas").then(route => {
			return this._loginService.get_authtoken().then(token=>{
				return this._httpService.getRequest(route.server_url + route.url, [token]).then(response =>  response, error => this.handleError(error) );
			});
		});

	}

	getSubscribableSchemas(){
		return this._apiService.getApiRoute("userSubscribeableSchemas").then(route => {
			return this._loginService.get_authtoken().then(token=>{
				return this._httpService.getRequest(route.server_url + route.url, [token]).then(response =>  response, error => this.handleError(error) );
			});
		});
	}

	subscribeToSchema(schemaId){
	
		return this._apiService.getApiRoute("UserSubscribeToSchema").then(route => {
			var url = route.url.replace("{id}", schemaId);
	
			return this._loginService.get_authtoken().then(token=>{
	
				return this._httpService.getRequest(route.server_url + url, [token]).then(response => response, error => this.handleError(error) );
			});
		});

	}

	unsubscribeToSchema(schemaId){
		
		return this._apiService.getApiRoute("UserUnsubscribeToSchema").then(route => {
	
			var url = route.url.replace("{id}", schemaId);

			return this._loginService.get_authtoken().then(token=>{
		
				return this._httpService.getRequest(route.server_url + url, [token]).then(response => response, error => this.handleError(error) );
			});
		});
	}

	handleError(response) {
		console.log(response)
		return Promise.reject(response);

	}
}
