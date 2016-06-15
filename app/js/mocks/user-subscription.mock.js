"use strict";
var api_service_1 = require("../services/api.service");
var http_service_1 = require("../services/http.service");
var UserSubscription = (function () {
    function UserSubscription() {
        var _this = this;
        var _apiService = new api_service_1.ApiService();
        var _loginService = new api_service_1.ApiService();
        var _httpService = new http_service_1.HttpService();
        _apiService.getApiRoute("userSchemas").then(function (route) {
            _loginService.get_authtoken().then(function (token) {
                _this._httpService.getRequest(route.server_url + route.url, [token]);
            });
        });
    }
    return UserSubscription;
}());
exports.UserSubscription = UserSubscription;
//# sourceMappingURL=user-subscription.mock.js.map