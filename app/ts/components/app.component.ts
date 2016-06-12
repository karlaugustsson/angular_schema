import { Component ,EventEmitter , OnInit} from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { LoginComponent } from "./login.component";
import { DashBoardComponent } from "./dashboard.component";
import { ApiService } from "../services/api.service";
import {SchemaComponent} from "./schema.component";
@RouteConfig([
{ path: '/login', name:"Login",component: LoginComponent,useAsDefault:true},
	{ path: '/dashboard', name:"Dashboard",component: DashBoardComponent},
	{ path: '/schemas', name: "Schemas" ,component:  SchemaComponent},
])
@Component({
	selector: "my-app",
	templateUrl: "app/html/app.component.html",
	directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent],
	providers:[]

})




export class AppComponent{
	api_routes;
	
	constructor( private api_service:ApiService) {}

}