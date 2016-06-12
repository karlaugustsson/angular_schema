"use strict";
var route_1 = require("../classes/route");
//name:string = null ,url:string , optional:Array<string> ,role:string = null , component_name:string = null , component_path:string = null
exports.ApiRoutesMock = [
    new route_1.ROUTE("Authorize", "authorize"),
    new route_1.ROUTE("Schemas", "user/schemas", ["sort", "limit", "offset"])
];
//# sourceMappingURL=api-routes.mock.js.map