"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const controller_commons_1 = require("../../commons/controller.commons");
const spotify_user_service_1 = require("../../service/spotify-user/spotify-user.service");
const user_usecase_1 = require("../../domain/user/user.usecase");
let UserController = class UserController extends controller_commons_1.GenericController {
    constructor(spotifyUserService) {
        super();
        this.spotifyUserService = spotifyUserService;
        this.userUseCase = new user_usecase_1.UserUseCase(this.spotifyUserService);
    }
    getUser(req, res) {
        let access_token = this.getSpotifyAccessToken(req);
        this.spotifyUserService.setAccessToken(access_token);
        const result = this.userUseCase.getUser();
        return this.resolveResponse(res, result);
    }
    getDevices(req, res) {
        let access_token = this.getSpotifyAccessToken(req);
        this.spotifyUserService.setAccessToken(access_token);
        const result = this.userUseCase.devices();
        return this.resolveResponse(res, result);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Get('devices'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getDevices", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [spotify_user_service_1.SpotifyUserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map