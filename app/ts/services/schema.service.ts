import {Injectable} from "@angular/core";
import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from '@angular/http';
import { ApiService } from "./api.service";
import {LoginService} from "./login.service";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

	@Injectable()

export class SchemaService {
	schemaRoute;
	schemas;

	constructor(private _apiService:ApiService ,private _http:Http , private _login_service:LoginService){
		this._apiService.getApiRoute("Schemas").then((route) => { this.schemaRoute = route });
	}

	getSchemas() {

		this._login_service.get_authtoken().then((token) => {
			console.log("Bearer " + token);
			let headers = new Headers({ 'Content-Type': 'application/json', "Authorization": "Bearer " + token } );
			let options = new RequestOptions({ headers: headers });
			return this._http.get(this.schemaRoute.server_url + this.schemaRoute.url,options).toPromise().then((answer) => { console.log(answer);this.schemas = answer }).catch(error=> {console.log(error)});
		});

	}
}
