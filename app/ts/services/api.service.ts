import { Injectable } from "@angular/core";
import { ApiRoutesMock } from "../mocks/api-routes.mock";

@Injectable()
export class ApiService  {
	headers;
	authToken;

	constructor(){
		
	}

	getApiRoutes() {
		return Promise.resolve(ApiRoutesMock);
	}

	getApiRoute(name:string){

		return this.getApiRoutes().then(routes => routes.filter(route => route.name === name)[0]);
	}

	getAuthToken() {
		//return this._login_service.get_authtoken();
	}


}