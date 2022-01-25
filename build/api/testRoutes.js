"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoute = void 0;
var express_1 = require("express");
var testController_1 = __importDefault(require("../controllers/testController"));
var api_routes_1 = __importDefault(require("./api.routes"));
var TestRoute = /** @class */ (function (_super) {
    __extends(TestRoute, _super);
    function TestRoute(app) {
        return _super.call(this, app, 'TestRoutes') || this;
    }
    TestRoute.prototype.getName = function () {
        return this.name;
    };
    TestRoute.prototype.configureRoutes = function () {
        return this.app.use("/tests", this.getRouter());
    };
    TestRoute.prototype.getRouter = function () {
        this.router = (0, express_1.Router)({ mergeParams: true });
        this.router
            .route("/")
            .get(testController_1.default.getTests);
        return this.router;
    };
    return TestRoute;
}(api_routes_1.default));
exports.TestRoute = TestRoute;
