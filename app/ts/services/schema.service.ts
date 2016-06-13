import {Injectable} from "@angular/core";
import { ApiService } from "./api.service";
@Injectable()

export class SchemaService {


	constructor(private _apiService: ApiService) {

		
	}

	getUserSubscribedSchemas() {
		//this._apiService.getRequest("userSchemas").then(this.handleSuccess).catch(this.handleError);
	}

	getSubscribableSchemas(){

	}
	handleError(error) {
	
		let result = JSON.parse(error._body);
		let errMsg = result.message;
		//return Observable.throw(errMsg);
	}

	handleSuccess(response){
		console.log(response);
		return JSON.parse(response._body);
	}
}
