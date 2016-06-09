import {Component,OnInit} from "@angular/core";
import {LoginService} from "../services/login.service";

@Component({
 selector:"dashboard",
 templateUrl:"app/html/dashboard.component.html"
})

export class DashBoardComponent implements OnInit{
ngOnInit(){
	this.auth();
}
	constructor(private _loginService:LoginService){
		
	}
	auth() {
	this._loginService.authorize


	}
}
