"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const common_1 = require("@nestjs/common");
const nest_router_1 = require("nest-router");
const app_v1_module_1 = require("../v1/app.v1.module");
const APPLICATION_PREFIX_V1 = 'jukeapi/v1';
const routes = [
    {
        path: `/${APPLICATION_PREFIX_V1}`,
        children: [
            {
                path: '/',
                module: app_v1_module_1.AppModuleV1,
            },
        ],
    },
];
let AppRouter = class AppRouter {
};
AppRouter = __decorate([
    common_1.Module({
        imports: [nest_router_1.RouterModule.forRoutes(routes), app_v1_module_1.AppModuleV1],
    })
], AppRouter);
exports.AppRouter = AppRouter;
//# sourceMappingURL=app.router.js.map