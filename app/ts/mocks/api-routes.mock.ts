import { ROUTE } from "../classes/route";
//name:string = null ,url:string , optional:Array<string> ,role:string = null , component_name:string = null , component_path:string = null
export var ApiRoutesMock: Array<ROUTE> = [
	new ROUTE("Authorize", "authorize"),
	new ROUTE("Schemas", "user/schemas", ["sort", "limit", "offset"])
] 