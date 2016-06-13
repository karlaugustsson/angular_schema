import { Injectable } from "@angular/core";
import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class HttpService{
	headers;

	constructor(private _http:Http){
		this.headers = new Headers({ 'Content-Type': 'application/json' });
	}

	getRequest(urlName, additional_headers = null) {


		if (additional_headers) {

			additional_headers.map((header) => {
				this.headers.append(header.key, header.value);
			});
		}

		console.log(this.headers);
		console.log(urlName);
		return this._http.get(urlName, { headers: this.headers }).toPromise();
	}	

		PostRequest(urlName:string, body:string, additional_headers:Array<any> = null){
		console.log(body)

		if (additional_headers){

			additional_headers.map((header) => {
				this.headers.append(header.key, header.value);
			});
		}

		console.log(urlName);
		return this._http.post(urlName, body, { headers: this.headers }).toPromise();

	}
}