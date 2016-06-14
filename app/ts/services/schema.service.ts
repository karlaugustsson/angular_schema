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
		return this._apiService.getApiRoute("userSchemas").then((route) => {
			this._loginService.get_authtoken().then(token=>{
			this._httpService.getRequest(route.server_url + route.url, [token]).then(response => this.handleSuccess(response) , error => this.handleError(error));
			});
		});

	}

	getSubscribableSchemas(){

	}
	handleError(error) {
		console.log(error);

	}

	handleSuccess(response){
		console.log(response);
	
	}
}
