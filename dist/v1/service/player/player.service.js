"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
const spotify_config_1 = require("../../../config/spotify.config");
const axios_1 = require("axios");
let PlayerService = class PlayerService {
    async play(access_token) {
        const play_uri = spotify_config_1.default.endpoints.play.uri;
        const params = {};
        const config = {
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        };
        const response = await axios_1.default.put(play_uri, params, config);
        return response;
    }
    async pause(access_token) {
        const pause_uri = spotify_config_1.default.endpoints.pause.uri;
        const params = {};
        const config = {
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        };
        const response = await axios_1.default.put(pause_uri, params, config);
        return response;
    }
    async next(access_token) {
        const next_uri = spotify_config_1.default.endpoints.next.uri;
        const params = {};
        const config = {
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        };
        const response = await axios_1.default.post(next_uri, params, config);
        return response;
    }
    async previous(access_token) {
        const previous_uri = spotify_config_1.default.endpoints.previous.uri;
        const params = {};
        const config = {
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        };
        const response = await axios_1.default.post(previous_uri, params, config);
        return response;
    }
};
PlayerService = __decorate([
    common_1.Injectable()
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map