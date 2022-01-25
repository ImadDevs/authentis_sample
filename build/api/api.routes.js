"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRoutes = void 0;
var ApiRoutes = /** @class */ (function () {
    function ApiRoutes(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    ApiRoutes.prototype.getName = function () {
        return this.name;
    };
    return ApiRoutes;
}());
exports.ApiRoutes = ApiRoutes;
exports.default = ApiRoutes;
