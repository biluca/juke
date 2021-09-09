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
exports.PlayerController = void 0;
const common_1 = require("@nestjs/common");
const controller_commons_1 = require("../../commons/controller.commons");
const spotify_player_service_1 = require("../../service/spotify-player/spotify-player.service");
const player_usecase_1 = require("../../domain/player/player.usecase");
let PlayerController = class PlayerController extends controller_commons_1.GenericController {
    constructor(spotifyPlayerService) {
        super();
        this.spotifyPlayerService = spotifyPlayerService;
        this.playerUseCase = new player_usecase_1.PlayerUseCase(this.spotifyPlayerService);
    }
    async play(req, res) {
        const access_token = this.getSpotifyAccessToken(req);
        this.spotifyPlayerService.setAccessToken(access_token);
        const result = this.playerUseCase.play();
        return this.resolveResponse(res, result);
    }
    pause(req, res) {
        const access_token = this.getSpotifyAccessToken(req);
        this.spotifyPlayerService.setAccessToken(access_token);
        const result = this.playerUseCase.pause();
        return this.resolveResponse(res, result);
    }
    next(req, res) {
        const access_token = this.getSpotifyAccessToken(req);
        this.spotifyPlayerService.setAccessToken(access_token);
        const result = this.playerUseCase.next();
        return this.resolveResponse(res, result);
    }
    pervious(req, res) {
        const access_token = this.getSpotifyAccessToken(req);
        this.spotifyPlayerService.setAccessToken(access_token);
        const result = this.playerUseCase.previous();
        return this.resolveResponse(res, result);
    }
};
__decorate([
    common_1.Get('play'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "play", null);
__decorate([
    common_1.Get('pause'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "pause", null);
__decorate([
    common_1.Get('next'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "next", null);
__decorate([
    common_1.Get('previous'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "pervious", null);
PlayerController = __decorate([
    common_1.Controller('player'),
    __metadata("design:paramtypes", [spotify_player_service_1.SpotifyPlayerService])
], PlayerController);
exports.PlayerController = PlayerController;
//# sourceMappingURL=player.controller.js.map