"use strict";
var route_1 = require("../classes/route");
//name:string = null ,url:string , optional:Array<string> ,role:string = null , component_name:string = null , component_path:string = null
exports.ApiRoutesMock = [
    new route_1.ROUTE("Authorize", "authorize"),
    new route_1.ROUTE("userSchemas", "user/schemas", ["sort", "limit", "offset"]),
    new route_1.ROUTE("userSubscribeableSchemas", "schemas", [], ["sort", "limit", "offset"]),
    new route_1.ROUTE("UserSubscribeToSchema", "user/schema/subscribe/{id}", ["id"], []),
    new route_1.ROUTE("UserUnsubscribeToSchema", "user/schema/unsubscribe/{id}", ["id"], []),
    new route_1.ROUTE("Schema", "schema/{id}", ["id"], []),
    new route_1.ROUTE("AuthUser", 'auth_user'),
    new route_1.ROUTE("SchemaBlocks", "schema/{schema_id}/schema_blocks/between/{start_date}/and/{end_date}/user/{user_id}", ["schema_id", "start_date", "end_date"], ["user_id"])
];
//# sourceMappingURL=api-routes.mock.js.map