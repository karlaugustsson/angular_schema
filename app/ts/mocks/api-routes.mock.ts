import { ROUTE } from "../classes/route";
//name:string = null ,url:string , optional:Array<string> ,role:string = null , component_name:string = null , component_path:string = null
export var ApiRoutesMock: Array<ROUTE> = [
	new ROUTE("Authorize", "authorize"),
	new ROUTE("userSchemas", "user/schemas", ["sort", "limit", "offset"]),
	new ROUTE("userSubscribeableSchemas", "schemas", [],["sort", "limit", "offset"]),
	new ROUTE("UserSubscribeToSchema", "user/schema/subscribe/{id}", ["id"],[]),
	new ROUTE("UserUnsubscribeToSchema", "user/schema/unsubscribe/{id}", ["id"],[]),
	new ROUTE("Schema", "schema/{id}", ["id"],[]),
	new ROUTE("AuthUser", 'auth_user') , 
	new ROUTE("SchemaBlocks", "schema/{schema_id}/schema_blocks/between/{start_date}/and/{end_date}/user/{user_id}", ["schema_id", "start_date", "end_date"], ["user_id"])
] 