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
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const controller_commons_1 = require("../../commons/controller.commons");
const authentication_usecase_1 = require("../../domain/authentication/authentication.usecase");
const spotify_authentication_service_1 = require("../../service/spotify-authentication/spotify-authentication.service");
const spotify_config_1 = require("../../../config/spotify.config");
const stateKey = spotify_config_1.default.cookie_state_key;
let AuthenticationController = class AuthenticationController extends controller_commons_1.GenericController {
    constructor(spotifyAuthenticationService) {
        super();
        this.spotifyAuthenticationService = spotifyAuthenticationService;
        this.authenticationUseCase = new authentication_usecase_1.AuthenticationUseCase(this.spotifyAuthenticationService);
    }
    login(res) {
        const state = this.generateNounceStateKey();
        const redirectionURI = this.authenticationUseCase.buildRedirectionUrl(state);
        res.cookie(stateKey, state);
        res.redirect(redirectionURI);
    }
    callback(code, state, req, res) {
        const result = this.authenticationUseCase.callback(code, state, req);
        res.clearCookie(stateKey);
        this.resolveAccessTokenResult(res, result);
    }
    refresh(req, res) {
        const refreshToken = this.getSpotifyRefreshToken(req);
        this.spotifyAuthenticationService.setRefreshToken(refreshToken);
        const result = this.authenticationUseCase.refresh();
        this.resolveAccessTokenResult(res, result);
    }
    resolveAccessTokenResult(res, result) {
        result.then(response => {
            if (response.statusCode >= 200 && response.statusCode <= 299) {
                res.cookie('access_token', response.body.access_token);
                res.cookie('refresh_token', response.body.refresh_token);
                res.status(response.statusCode);
                res.send(response.body);
                return;
            }
            return res.status(response.statusCode).json({
                error: response.body
            });
        });
    }
};
__decorate([
    common_1.Get('login'),
    __param(0, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "login", null);
__decorate([
    common_1.Get('callback'),
    __param(0, common_1.Query('code')), __param(1, common_1.Query('state')), __param(2, common_1.Req()), __param(3, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "callback", null);
__decorate([
    common_1.Get('refresh'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "refresh", null);
AuthenticationController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [spotify_authentication_service_1.SpotifyAuthenticationService])
], AuthenticationController);
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map