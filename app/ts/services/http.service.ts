import { Injectable } from "@angular/core";
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpService{
	headers;

	constructor(private _http:Http){
		this.headers = new Headers({ 'Content-Type': 'application/json' });
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

		return this._http.get(urlName, { headers: this.headers }).map(response => response.json());
	}

	PostRequest(urlName: string, body:string, additional_headers:Array<any> = null){

		if (additional_headers){

			additional_headers.map((header) => {
				this.headers.append(header.key, header.value);
			});
		}


		return this._http.post(urlName, body, { headers: this.headers }).map( response => response.json());

	}
}