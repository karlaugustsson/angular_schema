"use strict";
var ROUTE = (function () {
    function ROUTE(name, url, optional, role) {
        if (optional === void 0) { optional = null; }
        if (role === void 0) { role = null; }
        this.server_url = "http://localhost:8000/api/v1/";
        this.name = name;
        this.url = url;
        this.optional_parameters = optional;
        this.role = role;
    }
    return ROUTE;
}());
exports.ROUTE = ROUTE;
//# sourceMappingURL=route.js.map