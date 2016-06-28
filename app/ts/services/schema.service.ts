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
			return this._loginService.get_authtoken().subscribe(token=>{
				return this._httpService.getRequest(route.server_url + route.url, [token]);
			});
		});

	}

	getSubscribableSchemas(){
		return this._apiService.getApiRoute("userSubscribeableSchemas").then(route => {
			return this._loginService.get_authtoken().subscribe(token=>{
				return this._httpService.getRequest(route.server_url + route.url, [token]);
			});
		});
	}

	subscribeToSchema(schemaId){
	
		return this._apiService.getApiRoute("UserSubscribeToSchema").then(route => {
			var url = route.url.replace("{id}", schemaId);
	
			return this._loginService.get_authtoken().subscribe(token=>{
	
				return this._httpService.getRequest(route.server_url + url, [token]);
			});
		});

	}

	unsubscribeToSchema(schemaId){
		
		return this._apiService.getApiRoute("UserUnsubscribeToSchema").then((route) => {
	
			var url = route.url.replace("{id}", schemaId);

			return this._loginService.get_authtoken().subscribe((token)=>{
		
			return this._httpService.getRequest(route.server_url + url, [token])
			});
		});
	}
	getSchema(schemaId){

		return new Observable(observer => {
			
			this._apiService.getApiRoute("Schema").then(route => {
				var url = route.url.replace("{id}", schemaId);

				this._loginService.get_authtoken().subscribe(token => {
			

					this._httpService.getRequest(route.server_url + url, [token]).subscribe(response => observer.next(response));
				});
			});

		});
	}
	getSchemaBlocks(schemaID,start_date,end_date, userId:number = null){
		
		return new Observable(observer => {
			this._apiService.getApiRoute("SchemaBlocks").then(route => {
				let start_d = start_date.toString("yyyy-MM-dd");
				let end_d = end_date.toString("yyyy-MM-dd")
				let url = route.url.replace("{schema_id}", schemaID);
				url = url.replace("{start_date}", start_d);
				url = url.replace("{end_date}", end_d);
				if (userId) {
					url = url.replace("{user_id}", userId.toString());
				} else {
					url = url.replace("{user_id}", "");
				}

				this._loginService.get_authtoken().subscribe(token => {
					
					this._httpService.getRequest(route.server_url + url, [token]).subscribe(response => observer.next(response));
				});
			});
		});
		
	}

	handleError(response) {
	
		return Promise.reject(response);

	}
}
