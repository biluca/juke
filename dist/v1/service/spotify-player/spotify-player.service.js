"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyPlayerService = void 0;
const common_1 = require("@nestjs/common");
const spotify_config_1 = require("../../../config/spotify.config");
const errors_collection_1 = require("../../commons/errors.collection");
const async_request_commons_1 = require("../../commons/async-request.commons");
const generic_error_model_1 = require("../../commons/model/generic-error.model");
let SpotifyPlayerService = class SpotifyPlayerService {
    constructor() {
        this.access_token = '';
    }
    setAccessToken(access_token) {
        this.access_token = access_token;
    }
    async play() {
        try {
            let httpMethod = spotify_config_1.default.endpoints.play.method;
            let uri = spotify_config_1.default.endpoints.play.uri;
            const options = {
                method: httpMethod,
                uri,
                resolveWithFullResponse: true,
                json: true,
                simple: false,
                rejectUnauthorized: false,
                headers: {
                    'Authorization': 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json'
                }
            };
            const response = await async_request_commons_1.default.request(options);
            return response;
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.player.ERROR_ON_PLAY, error.message);
        }
    }
    async pause() {
        try {
            let httpMethod = spotify_config_1.default.endpoints.pause.method;
            let uri = spotify_config_1.default.endpoints.pause.uri;
            const options = {
                method: httpMethod,
                uri,
                resolveWithFullResponse: true,
                json: true,
                simple: false,
                rejectUnauthorized: false,
                headers: {
                    'Authorization': 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json'
                }
            };
            const response = await async_request_commons_1.default.request(options);
            return response;
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.player.ERROR_ON_PAUSE, error.message);
        }
    }
    async next() {
        try {
            let httpMethod = spotify_config_1.default.endpoints.next.method;
            let uri = spotify_config_1.default.endpoints.next.uri;
            const options = {
                method: httpMethod,
                uri,
                resolveWithFullResponse: true,
                json: true,
                simple: false,
                rejectUnauthorized: false,
                headers: {
                    'Authorization': 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json'
                }
            };
            const response = await async_request_commons_1.default.request(options);
            return response;
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.player.ERROR_ON_NEXT, error.message);
        }
    }
    async previous() {
        try {
            let httpMethod = spotify_config_1.default.endpoints.previous.method;
            let uri = spotify_config_1.default.endpoints.previous.uri;
            const options = {
                method: httpMethod,
                uri,
                resolveWithFullResponse: true,
                json: true,
                simple: false,
                rejectUnauthorized: false,
                headers: {
                    'Authorization': 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json'
                }
            };
            const response = await async_request_commons_1.default.request(options);
            return response;
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.player.ERROR_ON_PREVIOUS, error.message);
        }
    }
};
SpotifyPlayerService = __decorate([
    common_1.Injectable()
], SpotifyPlayerService);
exports.SpotifyPlayerService = SpotifyPlayerService;
//# sourceMappingURL=spotify-player.service.js.map