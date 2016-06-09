import { bootstrap }    from '@angular/platform-browser-dynamic';
import { LoginService } from "./services/login.service";
import { AppComponent } from './components/app.component';
import { ROUTER_PROVIDERS } from '@angular/router';
import {Http, HTTP_PROVIDERS} from '@angular/http';
bootstrap(AppComponent, [ROUTER_PROVIDERS, LoginService , Http , HTTP_PROVIDERS]);			