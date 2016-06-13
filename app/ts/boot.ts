import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ApiService } from "./services/api.service";
import { LoginService } from "./services/login.service";
import { AppComponent } from './components/app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS,} from '@angular/http';
import { UserService } from "./services/user.service";
import {SchemaService} from "./services/schema.service";
import {HttpService} from "./services/http.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, ApiService, LoginService, Http, HTTP_PROVIDERS, UserService , SchemaService,HttpService]);			