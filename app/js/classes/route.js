"use strict";
var ROUTE = (function () {
    function ROUTE(name, url, required_parameters, optional_parameters, role) {
        if (required_parameters === void 0) { required_parameters = null; }
        if (optional_parameters === void 0) { optional_parameters = null; }
        if (role === void 0) { role = null; }
        this.server_url = "http://localhost:8000/api/v1/";
        this.name = name;
        this.url = url;
        this.required_parameters = required_parameters;
        this.optional_parameters = optional_parameters;
        this.role = role;
    }
    return ROUTE;
}());
exports.ROUTE = ROUTE;
//# sourceMappingURL=route.js.map