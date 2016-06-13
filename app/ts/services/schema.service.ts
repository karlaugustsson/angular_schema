import {Injectable} from "@angular/core";
import { ApiService } from "./api.service";
import { LoginService } from "./login.service";
import {HttpService} from "./http.service";
@Injectable()

export class SchemaService {


	constructor(private _httpService:HttpService,private _apiService: ApiService , private _loginService:LoginService) {

		
	}

	getUserSubscribedSchemas() {
		return this._apiService.getApiRoute("userSchemas").then((route) => {
			return this._loginService.get_authtoken().then((token)=>{
				return this._httpService.getRequest(route.server_url + route.url, [token]).then(this.handleSuccess).catch(this.handleError);
			});
		});
		//("userSchemas").then(this.handleSuccess).catch(this.handleError);
	}

	getSubscribableSchemas(){

	}
	handleError(error) {
		console.log(error);
		let result = JSON.parse(error._body);
		let errMsg = result.message;
		return errMsg;
	}

	handleSuccess(response){
		console.log(response);
		return JSON.parse(response._body);
	}
}
