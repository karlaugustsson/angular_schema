import {Component,OnInit} from "@angular/core";
import {LoginService} from "../services/login.service";
import { AdminActionsComponent } from "./admin-actions.component";
import { UserActionsComponent } from "./user-actions.component";
import {Router} from '@angular/router-deprecated';
@Component({
	selector: "dashboard",
	templateUrl:"app/html/dashboard.component.html",
	directives: [UserActionsComponent, AdminActionsComponent]
})

export class DashBoardComponent implements OnInit {
	ngOnInit(){
	this.auth();
}
	constructor(private _loginService:LoginService){
		
	}
	auth() {
		this._loginService.authorize();


	}
}
