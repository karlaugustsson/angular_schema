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
	private handleError(error: any) {
		console.log(error);
	 return Promise.reject(error.json() || error);
	}

	getRequest(urlName, additional_headers = null) {


		if (additional_headers) {

			additional_headers.map((header) => {
				if(!this.headers.has(header.key)){
					this.headers.append(header.key, header.value);
				}else{
					this.headers.set(header.key, header.value);
				}

			});
		}
	
		return this._http.get(urlName, { headers: this.headers }).toPromise().then(response => response.json() ).catch(this.handleError);
	}

	PostRequest(urlName: string, body:string, additional_headers:Array<any> = null){

		if (additional_headers){

			additional_headers.map((header) => {
				this.headers.append(header.key, header.value);
			});
		}


		return this._http.post(urlName, body, { headers: this.headers }).toPromise().then(response =>  response.json()).catch(this.handleError);

	}
}